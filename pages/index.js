import { useEffect, useState } from "react";
import Link from "next/link";

import client from "shopify/shopify";
import Header from "components/Header";

import styled from "styled-components";
import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Section = styled(Row)``;

const LeftBox = styled(Col)`
  background-color: #efefeb;
  padding: 20px;
`;
const RightBox = styled(Col)`
  background-color: #efefeb;
  padding: 20px;
`;

const Image = styled.img`
  width: 90%;
`;

const Home = ({ products, collections }) => {
  const [newArrival, setNewArrival] = useState({});
  const [sofas, setSofas] = useState({});

  useEffect(() => {
    collections.forEach((collection) => {
      if (collection.title === "New Arrival") {
        setNewArrival(collection);
      }
      if (collection.title === "Sofas") {
        setSofas(collection);
      }
    });
  }, []);

  console.log({ products, collections });
  console.log({ sofas, newArrival });

  return (
    <>
      <Header />
      <Section>
        <LeftBox sm={{ span: 24 }} md={{ span: 11 }}>
          <Link href={`/collection/${newArrival.handle}`}>
            <Image src="https://raw.githubusercontent.com/prince1456/CICC-class/main/public/products/category-image1.png" />
          </Link>
          <Title level={3}>New Arrival</Title>
          <Paragraph>
            {newArrival.products && newArrival.products.length} items
          </Paragraph>
        </LeftBox>
        <RightBox sm={{ span: 24 }} md={{ span: 11, offset: 2 }}>
          <Link href={`/collection/${sofas.handle}`}>
            <Image src="https://raw.githubusercontent.com/prince1456/CICC-class/main/public/products/category-image1.png" />
          </Link>
          <Title level={3}>Sofas</Title>
          <Paragraph>{sofas.products && sofas.products.length} items</Paragraph>
        </RightBox>
      </Section>
    </>
  );
};

export async function getServerSideProps(context) {
  const products = await client.product.fetchAll();
  const collections = await client.collection.fetchAllWithProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      collections: JSON.parse(JSON.stringify(collections)),
    },
  };
}

export default Home;
