import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Does linuxdev-br have a Code of Conduct? Where can I find it?',
    content: () => (
      <>
        Yes, we do have a <ExternalLink href="./code-of-conduct"> Code of 
        Conduct</ExternalLink> and all participants are required to conform to the Code of Conduct. Any kind of harrasment
        or unacceptable behavior is unwelcome at this event.
      </>
    ),
  },
  {
    title: 'What is the Mission of the linuxdev-br conference?',
    content: () => (
      <>
        Our <ExternalLink href="./mission">Mission</ExternalLink> is to become an international
        meeting point in Brazil for the community and industry developing Free and Open Source
        Software (FOSS) for the Core of Linux systems.
      </>
    ),
  },
  {
    title: 'Who is the Organizing Committee of the linuxdev-br conference?',
    content: () => (
      <>
        See the <ExternalLink href="./committee">members</ExternalLink> of our Organizing Committee.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
