import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

//Diamond 
// one sponsor to enter here. Biggest logo
//Platinum
import { ReactComponent as CollaboraLogo } from '@images/logos/collabora.svg';
import { ReactComponent as IBMLogo } from '@images/logos/ibm.svg';
//Silver
import { ReactComponent as MicrochipLogo } from '@images/logos/microchip.svg';
import { ReactComponent as ProfusionLogo } from '@images/logos/profusion.svg';
import { ReactComponent as OpensuseLogo } from '@images/logos/opensuse.svg';
import { ReactComponent as ToradexLogo } from '@images/logos/toradex.svg';
//Bronze
import { ReactComponent as LPILogo } from '@images/logos/LPI.svg';
import { ReactComponent as RedhatLogo } from '@images/logos/redhat.svg';
import { ReactComponent as VulcanetLogo } from '@images/logos/vulcanet.svg';
import { ReactComponent as FourlinuxLogo } from '@images/logos/fourlinux.svg';

const LOGOS = [
  {
    logo: CollaboraLogo,
    link: 'https://www.collabora.com',
  },
  {
    logo: IBMLogo,
    link: 'https://www.ibm.com',
  },
  {
    logo: MicrochipLogo,
    link: 'https://www.artimar.com.br/microchip-technology/',
  },
  {
    logo: ProfusionLogo,
    link: 'https://profusion.mobi',
  },
  {
    logo: OpensuseLogo,
    link: 'https://www.opensuse.org',
  },
  {
    logo: ToradexLogo,
    link: 'https://www.toradex.com/',
  },
  {
    logo: LPILogo,
    link: 'https://lpi.org',
  },
  {
    logo: RedhatLogo,
    link: 'https://redhat.com',
  },
  {
    logo: VulcanetLogo,
    link: 'https://vulcanet.com.br/',
  },
  {
    logo: FourlinuxLogo,
    link: 'https://www.4linux.com.br/',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="sponsors" accent>
        <StyledContainer>
          <div>
            <h1>Sponsors</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink href={link}>{logo()}</ExternalLink>
              ))}
            </LogoGrid>
          </div>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default UsedBy;
