import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info';
import Menu from '../components/Home/Menu';
import Products from '../components/Home/Products';
import Contact from '../components/Home/Contact';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Uncle Joe's Coffee Shop"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 50, height: 50, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
