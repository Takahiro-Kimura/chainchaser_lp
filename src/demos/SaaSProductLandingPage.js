import React from "react";
import { Element } from "react-scroll";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Issue from "components/features/ThreeColCenteredStatsPrimaryBackground";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/SingleCol.js";
import ThreeColumnDashedBorderFeatures from "components/features/DashedBorderSixFeatures";
import GetStarted from "components/cta/GetStarted";
import TwoColContactUsWithIllustrationFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm";
// import Footer from "components/footers/FiveColumnWithBackground.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import freeeIntegrationImageSrc from "images/chainchaser/freeeIntegration.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import cryptoImageSrc from "images/chainchaser/crypto_image2.jpg";
import { ReactComponent as EthIcon } from "../images/crypto/eth.svg";
import { ReactComponent as MaticIcon } from "../images/crypto/matic.svg";
import { ReactComponent as AstarIcon } from "../images/crypto/astar.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      {/* 1段目 */}
      <Hero roundedHeaderButton={true} />
      {/* 2段目 */}
      <Issue
        heading="エクセルで計算、してませんか？"
        description="ブロックチェーンで未来を語る一方で、裏側の業務処理がエクセルに頼るのは何とも寂しいと感じませんか？"
        stats={[]}
      />
      <Issue
        heading="全部自動化して、エクセルから解放します"
        description=""
        stats={[]}
      />
      {/* <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      /> */}
      <MainFeature
        subheading={<Subheading>Service Integration</Subheading>}
        heading={
          <>
            <HighlightedText>ワンクリック</HighlightedText>で外部サービスに連携
          </>
        }
        description={
          <>
            <div>ChainChaser 上のデータをワンクリックで freee に登録可能</div>
            <div>連携先は順次拡大予定</div>
          </>
        }
        imageSrc={freeeIntegrationImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>Onboarding</Subheading>}
        heading={
          <>
            <HighlightedText>簡単設定</HighlightedText>ですぐに利用可能
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        steps={[
          {
            heading: "アカウント発行",
            description: "お問い合わせから最短1日で発行いたします",
          },
          {
            heading: "ウォレットとNFTを登録",
            description:
              "集計したいウォレットアドレスとNFT（コントラクトアドレス）を登録すると、自動で集計が行われます",
          },
        ]}
      />
      {/* <EthIcon /> */}
      <MainFeature2
        subheading={<Subheading>Supported Chains</Subheading>}
        heading={
          <>
            <HighlightedText>3つのチェーン</HighlightedText>に対応
          </>
        }
        imageSrc={cryptoImageSrc}
        showDecoratorBlob={false}
        description="対応チェーンは順次拡大予定"
        features={[
          {
            Icon: EthIcon,
            title: "Ethereum",
            description: "",
          },
          {
            Icon: MaticIcon,
            title: "Polygon",
            description: "",
          },
          {
            Icon: AstarIcon,
            title: "Astar",
            description: "",
          },
        ]}
      />
      {/* <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      /> */}
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={<>お客様の声</>}
        description=""
        testimonials={[
          {
            customerName: "Tales & Tokens, Inc.",
            customerProfile: "代表取締役 sasakill様",
            imageSrc:
              "https://pbs.twimg.com/profile_images/1532016384175067143/MkI6AISS_400x400.jpg",
            quote:
              "法人のウォレットの中に入ってくる売上も  WETH や MATIC として入ってきています。その WETH、MATIC、ETH がその時点で日本円でいくらなのかがパッとわからないわけですよね。毎月の計上は別途やらないといけないので ChainChaser がないとまず不可能。",
          },
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            よくある<HighlightedText>ご質問</HighlightedText>
          </>
        }
        description={false}
        faqs={[
          {
            question: "お試しで利用することはできますか？",
            answer: "可能です。詳細はお問い合わせください。",
          },
          {
            question: "過去のデータを集計できますか？",
            answer: "制約はありますが可能です。詳細はお問い合わせください。",
          },
          {
            question: "カスタマイズはできますか？",
            answer:
              "カスタマイズ内容によりますが可能です。詳細はお問い合わせください。",
          },
        ]}
      />
      <Element name="contact-form" className="element">
        <ThreeColumnDashedBorderFeatures />
      </Element>
      <TwoColContactUsWithIllustrationFullForm
        subheading=""
        heading=""
        description=""
        formAction="https://script.google.com/macros/s/AKfycbxzBaHy9_mfWsi0XPtcpZFlHkSdZw1MqMUX7Ppg7g6V8k0pKxDCJy0UY9f2O-Zbq_oyBA/exec"
      />

      <GetStarted
        text={
          <>
            <div>オンライン面談も可能です。</div>
            <div>ご予約はこちらから。</div>
          </>
        }
        primaryLinkText="日程を確認"
        primaryLinkUrl="http://timerse.com"
        secondaryLinkText={false}
        secondaryLinkUrl=""
      />
      <Footer />
    </AnimationRevealPage>
  );
};
