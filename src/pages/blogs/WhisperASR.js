import React from "react";
import Container from "react-bootstrap/Container";
import Markdown from "react-markdown";
import Card from "react-bootstrap/Card";

const WhisperASR = () => {
  return (
    <Container className="px-xl-0">
      <h1 id="opensource-speech-to-text">Whisper Speech to Text</h1>
      <p>
        I was working with Speech to text some years ago and had trained models,
        at that time, I started with{" "}
        <a href="https://deepspeech.readthedocs.io/en/r0.9/" target="_blank">
          DeepSpeech
        </a>{" "}
        at that time, and it was open source and was good starting point. After
        training english model and understanding the ASR system, I moved to
        other projects and stopped working with ASR. Some days ago, I was
        curious about how ASR is going now days, I found that openai has open
        source there Speech to text model called{" "}
        <a href="https://openai.com/blog/whisper/" target="_blank">
          Whisper
        </a>
        , which I found so simple to use, and it works for other languages as
        well, along with detecting languages as well from the audio files. So I
        decided to write simple blog about this whisper just for my record and
        for others who are looking for open source speech to text system.
      </p>
      <p>
        I found one{" "}
        <a href="https://www.youtube.com/watch?v=HbY51mVKrcE" target="_blank">
          youtube video
        </a>
        , which I followed for testing this{" "}
        <a href="https://openai.com/blog/whisper/" target="_blank">
          Whisper
        </a>{" "}
        model. Highly recommended to follow the{" "}
        <a
          href="https://www.youtube.com/channel/UCxladMszXan-jfgzyeIMyvw"
          target="_blank"
        >
          channel
        </a>{" "}
        for data-science tasks.
      </p>
      <p>
        According to the{" "}
        <a href="https://openai.com/blog/whisper/" target="_blank">
          Whisper
        </a>{" "}
        this ASR model is trained on 680,000 hours of training data, and this
        data is multilingual and multitaks supervised data collected from the
        web.
      </p>
      <p>
        The detail of the model and code is available on the{" "}
        <a href="https://github.com/openai/whisper" target="_blank">
          github
        </a>
        , which I followed for testing this{" "}
        <a href="https://openai.com/blog/whisper/" target="_blank">
          Whisper
        </a>
        .
      </p>
      <h2 id="installation">Installation</h2>
      <p>
        As I am using ubuntu 22.04, so I will install according to ubuntu
        configuration. To install the{" "}
        <a href="https://github.com/openai/whisper" target="_blank">
          package
        </a>{" "}
        run the following line on the terminal:
      </p>

      <code className="sourceCode bash">
        $ pip3 install git+https://github.com/openai/whisper.git
      </code>

      <p>
        As this requires ffmpeg to be installed on your machine, so you can
        install using following command:
      </p>

      <code class="sourceCode bash">
        $ sudo apt update && sudo apt install ffmpeg
      </code>

      <p>
        once everything is installed we can use it in our projects very easily
        as the simple python code is available on their{" "}
        <a href="https://github.com/openai/whisper" target="_blank">
          github repository
        </a>
        , which I am using here for testing purposes.
      </p>

      <Card className="mt-2 mb-4">
        <Card.Body>
          <Card.Text>
            <Markdown>{`
  \`\`\`python
import whisper

model = whisper.load_model("base")
result = model.transcribe("anyaudiofile.mp3", fp16=False)
print(result["text"])
  \`\`\`
  `}</Markdown>
          </Card.Text>
        </Card.Body>
      </Card>

      <p>
        Seems so simple, so have a look on this and use in your project, and
        thanks to openai for open sourcing this{" "}
        <a href="https://openai.com/blog/whisper/" target="_blank">
          Whisper
        </a>{" "}
        model.
      </p>
      <p>Other open source speech to text model I have checked are:</p>
      <ul>
        <li>
          <a href="https://deepspeech.readthedocs.io/en/r0.9/" target="_blank">
            DeepSpeech
          </a>{" "}
          (this was the first model I started to check when I was working with
          ASR)
        </li>
        <li>
          <a
            href="https://malaya-speech.readthedocs.io/en/latest/index.html"
            target="_blank"
          >
            Malaya-Speech
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default WhisperASR;
