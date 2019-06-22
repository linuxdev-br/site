import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Arnaldo Carvalho de Melo',
    image: 'acme.jpg',
    title: 'BPF is eating the world, dont you see?',
  },
  {
    name: 'maddog',
    image: 'maddog.jpg',
    title:
      'Performance: Not just about speed any more',
  },
  {
    name: 'Hans Verkuil',
    image: 'hans-verkuil.jpg',
    title: 'V4L2: A Status Update',
  },
  {
    name: 'Eduardo Silva',
    image: 'eduardo-silva.jpg',
    title: 'Logging & Stream Processing on the Edge',
  },
  {
    name: 'Sergio Prado',
    image: 'sergio-prado.jpg',
    title: 'Linux kernel debugging: going beyond printk messages',
  },
  {
    name: 'Alexandre Oliva',
    image: 'lxo.png',
    title: 'Escaping the Surveillance Blackhole with Free Mobile Computing',
  },
  {
    name: 'Helen Koike',
    image: 'helen-koike.jpg',
    title: 'Graphics: An overview of DRM/KMS kernel API, main concepts and some caveats.',
  },
  {
    name: 'Gustavo Padovan',
    image: 'gustavo-padovan.jpg',
    title: 'linuxdev-br 2019: Opening Talk',
  },
  {
    name: 'Eduardo Habkost',
    image: 'eduardo-habkost.jpg',
    title: 'CPU vulnerabilities and KVM security',
  },
  {
    name: 'Ana Rute Mendes',
    image: 'speaker.png',
    title: 'Git without conflicts',
  },
  {
    name: 'João Moreira',
    image: 'joao-moreira.jpg',
    title: 'Libpulp: we patched user space live patching',
  },
  {
    name: 'Antonio Terceiro',
    image: 'speaker.png',
    title:
      'Introducing ICTL: Instituto de name: Conservação de Tecnologias Livres',
  },
  {
    name: 'Gabriel Krisman Bertazi',
    image: 'speaker.png',
    title: 'Ext4: A case-insensitive Linux filesystem',
  },
  {
    name: 'Ricardo Salveti',
    image: 'ricardo-salveti.png',
    title: 'Leveraging OP-TEE as a generic HSM via PKCS#11 for secure OTA',
  },
  {
    name: 'Leonardo Garcia',
    image: 'lagg.jpg',
    title: 'Performance on virtual machines: passing through PCI devices',
  },
  {
    name: 'Vagrant Cascadian and Holger ,Levsen',
    image: 'speaker.png',
    title: 'There and back again, reproducibly!',
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
