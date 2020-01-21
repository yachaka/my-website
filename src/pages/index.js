import IndexPage from '../pagesCustom/index/index';
import { graphql } from 'gatsby';

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    meImg:file(
      relativePath: { eq: "pages/me.jpg"}
    ) {
      childImageSharp {
        sizes(maxWidth: 100, maxHeight: 100, quality: 50) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    cardsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Cards.png" }) {
      ...ImageForLaptopMockup
    }
    requestsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Requests.png" }) {
      ...ImageForLaptopMockup
    }
    paymentsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Payments.png" }) {
      ...ImageForLaptopMockup
    }
    cardOrder3ScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/CardOrder-Step3.png" }) {
      ...ImageForLaptopMockup
    }
    settingsTeamScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Settings-Team.png" }) {
      ...ImageForLaptopMockup
    }
    branchsMenuScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Branchs-Menu.png" }) {
      ...ImageForLaptopMockup
    }
    guilhem:file(relativePath: { eq: "data/Spendesk/guilhem.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 64, maxHeight: 64) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    guillaume:file(relativePath: { eq: "data/habx/guillaume.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 64, maxHeight: 64) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    laurence:file(relativePath: { eq: "data/konbini/laurence.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 64, maxHeight: 64) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    habxConfigurateur:file(relativePath: { eq: "data/habx/screenshots/Configurateur-pieces.png" }) {
      ...ImageForLaptopMockup
    }
    habxConfigurateurPanelOuvert:file(relativePath: { eq: "data/habx/screenshots/Configurateur-pieces-panel-ouvert.png" }) {
      ...ImageForLaptopMockup
    }
  }

  fragment ImageForLaptopMockup on File {
    childImageSharp {
      sizes(maxWidth: 800, quality: 35) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
