import React from 'react';
import { Section, Container, Red, SectionTitle } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'Does linuxdev-br have a Code of Conduct? Where can I find it?',
    content: () => (
      <>
        Yes, we do have a <a href="./code-of-conduct"> Code of 
        Conduct</a> and all participants are required to conform to the Code of Conduct. Any kind of harrasment
        or unacceptable behavior is unwelcome at this event.
      </>
    ),
  },
  {
    title: 'What is the Mission of the linuxdev-br conference?',
    content: () => (
      <>
        Our <a href="./mission">Mission</a> is to become an international
        meeting point in Brazil for the community and industry developing Free and Open Source
        Software (FOSS) for the Core of Linux systems.
      </>
    ),
  },
  {
    title: 'Who is behind the linuxdev-br conference?',
    content: () => (
      <>
        Since our first edition we are a non-profit organization with legal backing
        from the <ExternalLink href="https://www.ictl.org.br/">Instituto para Conservação
        de Tecnologias Livres</ExternalLink>. From the community to the community.<br />
        <br />
        <h3>Organizing Committee</h3>
        <br />
         Ana Rute Mendes (Collabora) - <em>Director's Director, Diversity & Inclusion</em><br />
         Bruno Dilly (ProFUSION) - <em>Finance Director</em><br />
         Gabriel F. T. Gomes (IBM) - <em>Program Director</em><br />
         Gustavo Padovan (Collabora) - <em>Executive Director</em><br />
         João Moreira -  <em>Communications Director</em><br />
         <br />
         Talk to us at <ExternalLink href="mailto:board@linuxdev-br.net">board@linuxdev-br.net</ExternalLink>.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq" accent="secondary">
    <Container>
      <h1><SectionTitle><Red>/ / / </Red>Frequently Asked Questions</SectionTitle></h1>
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
