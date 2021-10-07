import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model Y"
        description="Order online for touchless delivery."
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        image="model-y.jpg"
      ></Section>
      <Section
        title="Model S"
        description="Order online for touchless delivery."
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        image="model-s.jpg"
      ></Section>
      <Section
        title="Model 3"
        description="Order online for touchless delivery."
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        image="model-3.jpg"
      ></Section>

      <Section
        title="Model X"
        description="Order online for touchless delivery."
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        image="model-x.jpg"
      ></Section>
      <Section
        title="Solar Panel"
        description="Lowest Cost Solar Panel in America."
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
        image="solar-panel.jpg"
      ></Section>
      <Section
        title="Solar For new Roofs."
        description="Solar Roof costs less than a new Car."
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
        image="solar-roof.jpg"
      ></Section>
      <Section
        title="Accessories."
        description=""
        leftBtnTxt="Shop Now"
        image="accessories.jpg"
      ></Section>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
