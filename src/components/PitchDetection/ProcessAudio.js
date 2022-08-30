import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { toast } from "react-toastify";

const ProcessAudio = ({ model, setPitch }) => {
  const NUM_INPUT_SAMPLES = 1024;
  const MODEL_SAMPLE_RATE = 16000;
  const PT_OFFSET = 24.374;
  const PT_SLOPE = 62.511;
  const CONF_THRESHOLD = 0.9;
  const [error, setError] = useState("");

  const getPitchHz = (modelPitch) => {
    const fmin = 10.0;
    const bins_per_octave = 12.0;
    const cqt_bin = modelPitch * PT_SLOPE + PT_OFFSET;
    return fmin * Math.pow(2.0, (1.0 * cqt_bin) / bins_per_octave);
  };

  const audioContext = useRef(null);
  const handleSuccess = (stream) => {
    audioContext.current = new AudioContext({
      latencyHint: "playback",
      sampleRate: MODEL_SAMPLE_RATE,
    });

    const source = audioContext.current.createMediaStreamSource(stream);
    const processor = audioContext.current.createScriptProcessor(
      NUM_INPUT_SAMPLES,
      1,
      1
    );
    // Converts audio to mono.
    processor.channelInterpretation = "speakers";
    processor.channelCount = 1;

    // Runs processor on audio source.
    source.connect(processor);

    processor.connect(audioContext.current.destination);

    processor.onaudioprocess = async (e) => {
      const inputData = e.inputBuffer.getChannelData(0);
      const input = tf.reshape(tf.tensor(inputData), [NUM_INPUT_SAMPLES]);
      const output = model.execute({ input_audio_samples: input });
      const uncertainties = output[0].dataSync();
      const pitches = output[1].dataSync();

      for (let i = 0; i < pitches.length; ++i) {
        let confidence = 1.0 - uncertainties[i];
        if (confidence < CONF_THRESHOLD) {
          continue;
        }
        setPitch(getPitchHz(pitches[i]));
      }
    };
  };

  const handleError = (err) => {
    setError(err);
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(handleSuccess)
      .catch(handleError);

    return () => {
      audioContext.current && audioContext.current.close();
      console.log("Component unmounted");
    };
    // eslint-disable-next-line
  }, []);

  if (error) {
    toast.error(error);
  }

  return <></>;
};

export default ProcessAudio;
