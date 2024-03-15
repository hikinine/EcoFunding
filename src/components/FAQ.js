import React from "react";
import styled from "styled-components";

// Styled section
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
  background-color: #3f4c5c;
  color: white;
`;

// Styled div container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  margin: auto;

  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }
`;

// Styled paragraph for "How it works"
const HowItWorks = styled.p`
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: medium;
  letter-spacing: wider;
`;

// Styled h2 for FAQ title
const FAQTitle = styled.h2`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: none;

  @media (min-width: 640px) {
    font-size: 3.125rem;
  }
`;

// Styled div for FAQ items
const FAQItems = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #2b2d42;
  border-bottom: 1px solid #2b2d42;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem;
  }

  @media (min-width: 1280px) {
    padding: 0 8rem;
  }
`;

// Individual FAQ item
const FAQDetail = styled.details`
  summary {
    padding: 0.5rem 0;
    outline: none;
    cursor: pointer;
    &:focus {
      text-decoration: underline;
    }
  }

  & > div {
    padding: 0 1rem 1rem;
  }
`;
const Paragraph = styled.p`
  font-family: "Dm Sans", sans-serif;
`;
const FAQ = () => {
  return (
    <Section>
      <Container className="container">
       
        <FAQTitle>FAQ</FAQTitle>
        <FAQItems className="flex flex-col divide-y divide-gray-700">
          <FAQDetail>
            <summary>Optio maiores eligendi molestiae totam dolores similique?</summary>
            <div>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</Paragraph>
            </div>
          </FAQDetail>
          <FAQDetail>
            <summary>Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
            <div>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</Paragraph>
            </div>
          </FAQDetail>
          <FAQDetail>
            <summary>Magni reprehenderit possimus debitis?</summary>
            <div>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</Paragraph>
              <Paragraph>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</Paragraph>
            </div>
          </FAQDetail>
        </FAQItems>
      </Container>
    </Section>
  );
};

export default FAQ;
