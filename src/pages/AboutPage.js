import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            At ComfySloth, we are passionate about turning houses into homes.
            Our mission is to provide you with an exquisite selection of
            high-quality furniture items that not only elevate the aesthetics of
            your living spaces but also add comfort, functionality, and style to
            your daily life.
          </p>
          <p>
            Established in 2023, ComfySloth has grown from a small startup with
            a vision into a thriving online destination for furniture
            enthusiasts worldwide. As a team of design enthusiasts and furniture
            experts, we recognized the need for an online platform that offers a
            curated collection of furniture pieces crafted with exceptional
            craftsmanship and innovative designs. Over the years, our dedication
            to excellence and commitment to customer satisfaction have allowed
            us to build lasting relationships with our valued customers.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
