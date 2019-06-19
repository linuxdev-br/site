import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'João Moreira',
    image: 'speaker.png',
    title: 'Libpulp: we patched user space live patching',
  },
  {
    name: 'Marcos Paulo de Souza',
    image: 'speaker.png',
    title:
      'sbull-mq: Learning block subsystem by convert a 10 years old driver to blk-mq',
  },
  {
    name: 'Lucas Galante',
    image: 'speaker.png',
    title: 'Malicious Linux Binaries: A Landscape',
  },
  {
    name: 'Sergio Prado',
    image: 'speaker.png',
    title: 'Linux kernel debugging: going beyond printk messages',
  },
  {
    name: 'Alexandre Oliva',
    image: 'speaker.png',
    title: 'Escaping the Surveillance Blackhole with Free Mobile Computing',
  },
  {
    name: 'Murilo Opsfelder Araújo',
    image: 'speaker.png',
    title: 'How to write your own KVM client from scratch',
  },
  {
    name: 'Claudio Siqueira de Carvalho',
    image: 'speaker.png',
    title: 'Secure Boot in OpenPOWER Systems',
  },
  {
    name: 'Leonardo Graboski Veiga',
    image: 'speaker.png',
    title: 'Wear Estimation for Devices with eMMC Flash Memory',
  },
  {
    name: 'Matheus Castello',
    image: 'speaker.png',
    title: '/sys/class/gpio is Dead',
  },
  {
    name: 'Eduardo Habkost',
    image: 'speaker.png',
    title: 'CPU vulnerabilities and KVM security',
  },
  {
    name: 'André Almeida',
    image: 'speaker.png',
    title: 'Discussion: Creating a FOSS study group',
  },
  {
    name: 'Leonardo Garcia',
    image: 'speaker.png',
    title: 'Performance on virtual machines: passing through PCI devices',
  },
  {
    name: 'maddog',
    image: 'speaker.png',
    title:
      'Performance: Not just about speed any more | Project Caua and Caninos title: Loucos: No one buys computers any more, and they never did.',
  },
  {
    name: 'Eduardo Silva',
    image: 'speaker.png',
    title: 'Logging & Stream Processing on the Edge',
  },
  {
    name: 'Gustavo Padovan',
    image: 'speaker.png',
    title: 'linuxdev-br 2019: Opening Talk',
  },
  {
    name: 'Hans Verkuil',
    image: 'speaker.png',
    title: 'V4L2: A Status Update',
  },
  {
    name: 'Lucas Kanashiro',
    image: 'speaker.png',
    title: 'Debian towards the Cloud',
  },
  {
    name: 'Ana Rute Mendes',
    image: 'speaker.png',
    title: 'Git without conflicts',
  },
  {
    name: 'Danilo Rodrigues',
    image: 'speaker.png',
    title:
      'From Linux to Android: the path to becoming a secure mobile operating system',
  },
  {
    name: 'Charles Oliveira',
    image: 'speaker.png',
    title: 'Proposal for complimentary KernelCI visualization tool',
  },
  {
    name: 'Antonio Terceiro',
    image: 'speaker.png',
    title:
      'Introducing ICTL: Instituto de name: Conservação de Tecnologias Livres',
  },
  {
    name: 'Gabriel Krisman Bertaz',
    image: 'speaker.png',
    title: 'Ext4: A case-insensitive Linux filesystem',
  },
  {
    name: 'Arnaldo Carvalho de Melo',
    image: 'speaker.png',
    title: 'BPF is eating the world, dont you see?',
  },
  {
    name: 'Ricardo Salveti',
    image: 'speaker.png',
    title: 'Leveraging OP-TEE as a generic HSM via PKCS#11 for secure OTA',
  },
  {
    name: 'Vagrant Cascadian and Holger ,Levsen',
    image: 'speaker.png',
    title: 'There and back again, reproducibly!',
  },
  {
    name: 'Marcelo Schmitt',
    image: 'speaker.png',
    title: 'Understanding the IIO subsystem with AD7292',
  },
  {
    name: 'Matheus Tavares Bernardino',
    image: 'speaker.png',
    title:
      'Discussion: Creating a FOSS study group | Object-Oriented Techniques in title: C: A Case Study on Git and Linux',
  },
  {
    name: 'Renato Geh',
    image: 'speaker.png',
    title: 'Object-Oriented Techniques in C: A Case Study on Git and Linux',
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
        art_speakers: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "speakers_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="speakers" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Speakers</h1>
          <SpeakersGrid>
            {TEAM.map(({ name, image, title }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{title}</Subtitle>
                </div>
              );
            })}
          </SpeakersGrid>
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

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
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

export default Speakers;
