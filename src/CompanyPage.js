import React from "react";
import { Divider, Col, Row } from "antd";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";

const Heading = tw.h4`text-3xl sm:text-4xl font-black tracking-wide text-center text-primary-900 leading-snug`;
const Subheading = tw.h5`text-center uppercase font-bold text-primary-500`;

const data = [
  {
    name: "社名",
    value: "株式会社ChainForce",
  },
  {
    name: "代表者",
    value: "木村 崇大",
  },
  {
    name: "事業内容",
    value: (
      <>
        ChainChaser の企画・開発・運営・販売
        <br />
        Web3プロジェクト事業開発支援
      </>
    ),
  },
  {
    name: "設立",
    value: "2022年12月9日",
  },
  {
    name: "資本金",
    value: "100万円",
  },
];

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header links={[]} />
      <div style={{ margin: "0 auto", width: "60%" }}>
        <Subheading>COMPANY</Subheading>
        <Heading>会社概要</Heading>
        {data.map((item) => {
          return (
            <Row>
              <Divider />
              <Col xs={24} sm={8}>
                <div>{item.name}</div>
              </Col>
              <Col xs={24} sm={16}>
                <div>{item.value}</div>
              </Col>
            </Row>
          );
        })}
      </div>
    </AnimationRevealPage>
  );
};
