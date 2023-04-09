import styled, { css } from "styled-components";

export const Button = styled.button<any>`
${({ image }) => image && css`
  background-image: url(${image});
  
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

`