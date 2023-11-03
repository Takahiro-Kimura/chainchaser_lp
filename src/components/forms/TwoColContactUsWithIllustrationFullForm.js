import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`md:mx-auto`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [tw`md:w-7/12 md:mx-auto`]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center mx-auto xl:mx-0`;

const Subheading = tw(SubheadingBase)`text-center`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center leading-tight`;
const Description = tw.p`mt-4 text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col mx-auto xl:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "送信",
  formAction = "",
  formMethod = "POST",
  textOnLeft = false,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // フォームのデフォルトの動作を無効化する
    console.log("入力された値:", email, name, company, content);

    fetch(formAction, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        email,
        name,
        company,
        content,
      }),
    }).then(
      (response) => {
        console.log("response", response);
      },
      (e) => {
        // エラー内容
        console.error("ERROR:", e);
      }
    );
  };

  return (
    <Container>
      {/* <TwoColumn> */}
      {/* <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn> */}
      <TextColumn textOnLeft={textOnLeft}>
        <TextContent>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
          <Form
            action={formAction}
            method={formMethod}
            // target="hidden_iframe"
            // onsubmit="submitted=true;"
          >
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="メールアドレス"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="氏名"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              type="text"
              name="company"
              value={company}
              placeholder="会社・団体名"
              required
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <Textarea
              name="content"
              value={content}
              placeholder="お問い合わせ内容"
              required
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <SubmitButton onClick={handleSubmit}>
              {submitButtonText}
            </SubmitButton>
          </Form>
        </TextContent>
      </TextColumn>
      {/* </TwoColumn> */}
    </Container>
  );
};
