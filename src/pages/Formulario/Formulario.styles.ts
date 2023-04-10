import styled from 'styled-components';
import { ButtonHeader } from '../../components/ButtonHeader/ButtonHeader';

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
/* padding: 20px; */

  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`;

export const DivIllustration = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E3BE54;
  justify-content: space-around;
  padding: 10px;
  

  >img {
    width: 60%;
    height: 60%;
    background-color: #E3BE54;
    align-self: center;

    @media(max-width: 1024px){
      width: 40%;
      height: 60%;
    }
  }
`;

export const IllustrationTitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  background-color: #E3BE54;

  >img{
    width: 50px;
    height: 50px;
    background-color: #E3BE54;    
  }
`;

export const IluuustrationTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #342E4A;
  background-color: #E3BE54;
`

export const IluuustrationFooter = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #E3BE54;
  justify-content: center;
`

export const UlFooter = styled.ul`
  display: flex;
  background-color: #E3BE54;
  gap: 20px;
`

export const LiFooter = styled.li`
  list-style: none;
  background-color: #E3BE54;
  cursor: pointer;
  color: #342E4A;


  >img{
    width: 30px;
    height: 30px;
    background-color: #E3BE54;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  padding: 20px;
  gap: 45px;
`;

export const FormHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const HeaderLi = styled.li`
  list-style: none;
  cursor: pointer;
`;


export const FormTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #342E4A;
  justify-self: center;
`

export const FormDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
`

export const FormParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #342E4A;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ParagraphFooter = styled.p`
  font-size: 15px;
  color: #342E4A;
`
// export const ButtonHead = styled(ButtonHeader)``;