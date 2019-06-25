import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const TEAM = [
  {
    name: 'Arnaldo Carvalho de Melo',
    image: 'acme.jpg',
    title: 'BPF is eating the world, dont you see?',
    link: 'https://cfp.linuxdev-br.net/2019/talk/TQWAEX/',
  },
  {
    name: 'John "maddog" Hall',
    image: 'maddog.jpg',
    title: 'Performance: Not just about speed any more',
    link: 'https://cfp.linuxdev-br.net/2019/talk/VLWFZS/',
  },
  {
    name: 'Hans Verkuil',
    image: 'hans-verkuil.jpg',
    title: 'V4L2: A Status Update',
    link: 'https://cfp.linuxdev-br.net/2019/talk/FYSJQB/',
  },
  {
    name: 'Eduardo Silva',
    image: 'eduardo-silva.jpg',
    title: 'Logging & Stream Processing on the Edge',
    link: 'https://cfp.linuxdev-br.net/2019/talk/FV8SRD/',
  },
  {
    name: 'Sergio Prado',
    image: 'sergio-prado.jpg',
    title: 'Linux kernel debugging: going beyond printk messages',
    link: 'https://cfp.linuxdev-br.net/2019/talk/F7PJJU/',
  },
  {
    name: 'Vagrant Cascadian',
    image: 'speaker.png',
    title: 'There and back again, reproducibly!',
    link: 'https://cfp.linuxdev-br.net/2019/talk/VH9CCY/',
  },
  {
    name: 'Holger Levsen',
    image: 'speaker.png',
    title: 'There and back again, reproducibly!',
    link: 'https://cfp.linuxdev-br.net/2019/talk/VH9CCY/',
  },
  {
    name: 'Alexandre Oliva',
    image: 'lxo.png',
    title: 'Escaping the Surveillance Blackhole with Free Mobile Computing',
    link: 'https://cfp.linuxdev-br.net/2019/talk/9NSA8J/',
  },
  {
    name: 'Helen Koike',
    image: 'helen-koike.jpg',
    title:
      'Graphics: An overview of DRM/KMS kernel API, main concepts and some caveats.',
    link: 'https://cfp.linuxdev-br.net/2019/talk/RZWKKA/',
  },
  {
    name: 'Alexandre Sousa',
    image: 'alexandre-sousa.png',
    title:
      'Keynote: Top 5 Reasons for Accelerating Your Cloud Native DevOps with cutting edge Open Source Solutions',
    link: 'https://cfp.linuxdev-br.net/2019/talk/HWNVRC/',
  },
  {
    name: 'Gustavo Padovan',
    image: 'gustavo-padovan.jpg',
    title: 'Keynote: Linux Graphics Revolution',
    link: 'https://cfp.linuxdev-br.net/2019/talk/KGVPUQ/',
  },
  {
    name: 'Eduardo Habkost',
    image: 'eduardo-habkost.jpg',
    title: 'CPU vulnerabilities and KVM security',
    link: 'https://cfp.linuxdev-br.net/2019/talk/SXR9M8/',
  },
  {
    name: 'Ana Rute Mendes',
    image: 'anarute.jpg',
    title: 'Git without conflicts',
    link: 'https://cfp.linuxdev-br.net/2019/talk/YEQ3GV/',
  },
  {
    name: 'João Moreira',
    image: 'joao-moreira.jpg',
    title: 'Libpulp: we patched user space live patching',
    link: 'https://cfp.linuxdev-br.net/2019/talk/VUSYEK/',
  },
  {
    name: 'Antonio Terceiro',
    image: 'speaker.png',
    title:
      'Keynote: Introducing ICTL, Instituto de Conservação de Tecnologias Livres',
    link: 'https://cfp.linuxdev-br.net/2019/talk/UJVCLC/',
  },
  {
    name: 'Ricardo Salveti',
    image: 'ricardo-salveti.png',
    title: 'Leveraging OP-TEE as a generic HSM via PKCS#11 for secure OTA',
    link: 'https://cfp.linuxdev-br.net/2019/talk/GU8RWJ/',
  },
  {
    name: 'Leonardo Garcia',
    image: 'lagg.jpg',
    title: 'Performance on virtual machines: passing through PCI devices',
    link: 'https://cfp.linuxdev-br.net/2019/talk/HLABXM/',
  },
  {
    name: 'Gabriel Krisman Bertazi',
    image: 'gabriel-krisman.jpg',
    title: 'Ext4: A case-insensitive Linux filesystem',
    link: 'https://cfp.linuxdev-br.net/2019/talk/A8LBW3/',
  },
];

const Speakers = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "speakers" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="speakers" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Featured Speakers</h1>
          <SpeakersGrid>
            {TEAM.map(({ name, image, title, link }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div>
                  <StyledExternalLink href={link}>
                    <Img
                      fluid={img.childImageSharp.fluid}
                      alt={name}
                      style={{ borderRadius: '50%' }}
                    />
                    <Title>{name}</Title>
                    <Subtitle>{title}</Subtitle>
                  </StyledExternalLink>
                </div>
              );
            })}
          </SpeakersGrid>
          <StyledExternalLink href="https://cfp.linuxdev-br.net/2019/schedule/">
            See full agenda &nbsp;&#x2794;
          </StyledExternalLink>
        </Container>
      </Section>
    )}
  />
);

const SpeakersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;
  font-size: 2em;
  margin-top: 1em;
  float: right;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Speakers;
