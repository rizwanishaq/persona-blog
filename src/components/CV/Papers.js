import React from "react";
import { Container, Tab, Tabs, ListGroup } from "react-bootstrap";

const Papers = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="journals" id="papers-tab" className="mb-3">
        <Tab eventKey="journals" title="Journals">
          <ListGroup variant="flush">
            <ListGroup.Item>
              R. Ishaq, Z.G. Begoña, Enhancement of Spanish Oesophageal Speech
              Vowels using coherent subband modulator Kalman filter, Technology
              and Health Care, Vol. 24(6), pp. 201-213, Mar 2016
            </ListGroup.Item>
            <ListGroup.Item>
              R. Ishaq, Z.G. Begoña, Optimal Subband Kalman Filter for Normal
              and Oesophageal Speech Enhancement, Bio-Medical Materials and
              Engineering Vol.24 (6), pp. 3569-3578, Sep 2014
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="conferences" title="Conferences">
          <ListGroup variant="flush">
            <ListGroup.Item>
              M. Shahid, Rizwan Ishaq, B. Sällberg, N. Grbic, B. Lövström, I.
              Claesson Modulation Domain Adaptive Gain Equalizier for Speech
              Enhancement, Signal and Image Processing and Application SIPA
              2011, June 22- 24, 2011, Greece.
            </ListGroup.Item>
            <ListGroup.Item>
              R. Ishaq, M. Shahid, B. Lövström, Z. G. Begoña, Modulation
              Frequency Domain Adaptive Gain Equalizier Using Convex
              Optimization, International Conference on Signal Processing and
              Communication Systems(ICSPCS),12-14 Dec 2012, Gold Coast,
              Australia
            </ListGroup.Item>
            <ListGroup.Item>
              R. Ishaq, Z.G. Begoña, Adaptive Gain Equalizer for Improvement of
              Esophageal Speech, IEEE Int. Symposium on Signal Processing and
              Information Technology(ISSPIT 2012), Dec 12-15, 2012, Ho Chi Minh
              City- Vietnam
            </ListGroup.Item>
            <ListGroup.Item>
              R. Ishaq, M. Shahid, Z.G. Begoña, B. Lövström, Subband Modulator
              Kalman Filtering for Single Channel Speech Enhancement,
              International Conference on Acoustics, Speech and Signal
              Processing (ICASSP) May 26-31 2013, Canada.
            </ListGroup.Item>
            <ListGroup.Item>
              R. Ishaq, Z.G. Begoña, Esophageal Speech Enhancement using
              Modified Voicing Source, IEEE Int. Symposium on Signal Processing
              and Information Technology(ISSPIT 2013), Dec 12-15, Greece
            </ListGroup.Item>
            <ListGroup.Item>
              R. Ishaq, D. Gowda, P. Alku, B. G. Garcia, Vowel Enhancement in
              Early Stage Spanish Esophageal Speech Using Natural Glottal Flow
              Pulse and Vocal Tract Frequency Warping, 6th workshop on Speech
              and Language Processing for Assistive Technologies, Sep, 2015.
            </ListGroup.Item>
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Papers;
