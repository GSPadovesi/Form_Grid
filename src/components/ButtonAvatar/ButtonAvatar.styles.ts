import styled, { css } from "styled-components";

export const Button = styled.button<any>`
${({ image, smallImage }) => image && css`
  background-image: url(${image});
  @media(max-width: 1024px){
    background-image: url(${smallImage});
  }
  >image{
    width: 100px;
    height: 100px;
  }
  `}
  border-radius: 50px;
  border: 2px solid #342E4A;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;

  @media(max-width: 1024px){
    width: 50px;
    height: 50px;
  }

`