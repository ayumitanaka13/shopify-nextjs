import { useEffect, useState } from "react";
import Link from "next/link";

import client from "shopify/shopify";

import Header from "components/Header";
import NewArrival from "components/NewArrival";

import styled from "styled-components";
import { Row, Col, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const Section = styled(Row)`
  margin: 50px 0 200px 0 !important;
`;

const Home = ({ products, collections }) => {
  return (
    <>
      <Header />
      <NewArrival collections={collections} />

      <Section>
        <Col flex="1" style={{ textAlign: "center", marginBottom: 300 }}>
          <Title>Trending Now</Title>
          <Paragraph>
            Find the perfect peace or accessory to finish off your room or house
          </Paragraph>
          <Row>
            {collections.map((collection, index) => {
              const product = collection.products[0];
              return (
                <Col key={index} xs={{ span: 12 }} md={{ span: 6 }}>
                  <Link href={`/product/${product.handle}`}>
                    <div style={{ height: 200, width: "100%" }}>
                      <img
                        style={{ height: "100%", width: "100%" }}
                        src={product.images[0].src}
                      />
                    </div>
                  </Link>
                  <Paragraph
                    style={{ fontSize: 18 }}
                    ellipsis={{
                      rows: 1,
                    }}
                  >
                    {" "}
                    <Text strong>{product.title}</Text>
                  </Paragraph>
                  <Paragraph>{collection.title}</Paragraph>
                </Col>
              );
            })}
          </Row>
        </Col>
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
