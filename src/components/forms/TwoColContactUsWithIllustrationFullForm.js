import React from "react";
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
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 md:mx-auto`
]);

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
  formAction = "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdnDaC1CnuhkuMqP1z5xaw-BGK4ZZp3SMCrAlQS7Dcz7O5zhw/formResponse",
  formMethod = "POST",
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

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
            target="hidden_iframe"
            onsubmit="submitted=true;"
          >
            <Input
              type="email"
              name="entry.1831130227"
              placeholder="メールアドレス"
              required
            />
            <Input
              type="text"
              name="entry.1136785483"
              placeholder="氏名"
              required
            />
            <Input
              type="text"
              name="entry.1808480512"
              placeholder="会社・団体名"
              required
            />
            <Textarea
              name="entry.664429522"
              placeholder="お問い合わせ内容"
              required
            />
            <SubmitButton type="submit">{submitButtonText}</SubmitButton>
          </Form>
        </TextContent>
      </TextColumn>
      {/* </TwoColumn> */}
    </Container>
  );
};
