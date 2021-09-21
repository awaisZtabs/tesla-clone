import React from "react";
import styled from "styled-components";

function Section({ title, description, leftBtnTxt, rightBtnTxt, image }) {
  return (
    <Wrap bgImage={image}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnTxt}</LeftButton>
          {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/{props.rightBtnTxt}");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(/images/${props.bgImage})`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown 1.5s infinite;
`;
const Buttons = styled.div``;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  opacity: 0.85;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 9px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
