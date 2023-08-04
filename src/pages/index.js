import IndexPage from '../pagesCustom/index/index';
import { graphql } from 'gatsby';

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    meImg:file(
      relativePath: { eq: "pages/me.jpg"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 100,
          height: 100,
          quality: 50
        )
      }
    }

    drawerOrdersList:file(relativePath: { eq: "data/shotgun/drawer-app/orders-list.png" }) {
      ...ImageForLaptopMockup
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
        gatsbyImageData(
          width: 64,
          height: 64
        )
      }
    }
    guillaume:file(relativePath: { eq: "data/habx/guillaume.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 64,
          height: 64
        )
      }
    }

    laurence:file(relativePath: { eq: "data/konbini/laurence.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 64,
          height: 64
        )
      }
    }

    lucas:file(relativePath: { eq: "data/shotgun/lucas.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 64,
          height: 64
        )
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
      gatsbyImageData(
        width: 1600,
        quality: 60,
        formats: [PNG]
      )
    }
  }
`;
