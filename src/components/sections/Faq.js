import React from 'react';
import { Section, Container, Red, SectionTitle } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import FaqItem from '@common/FaqItem';

const FAQS = [
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
         Gabriel F. T. Gomes (Suse) - <em>Program Director</em><br />
         Gustavo Padovan (Collabora) - <em>Executive Director</em><br />
         João Moreira(Intel) -  <em></em><br />
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
