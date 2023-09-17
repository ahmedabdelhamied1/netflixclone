import styled from "styled-components";
export const Container = styled.section`
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  text-align: center;
  height: 100%;
  background: rgb(0, 0, 0);
  @media(min-width:1000px)
  {
    text-align:left
  }
  
`;

export const Frame=styled.div`
width:100%;
padding:0 .5em;
@media (min-width:1000px)
{
width:50%;

}

`
export const Inner = styled.div`

`;

export const Item = styled.div`
display:flex;
flex-direction:${({dir})=>dir};
align-items:center;
border-bottom:10px solid #232323;
padding:2em 8em;
@media (max-width:600px)
{
    flex-direction:column;
    padding:2em;
}
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  
  @media(min-width:1000px)
  {
    font-size: 3rem;
    font-weight: 900
  }
`;
export const Subtitle = styled.h2`
  margin: 1rem 0 0;
  font-size: 1.125rem;
  font-weight: 400;
  @media(min-width:1000px)
  {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
export const Image = styled.img`
max-width:100%;
hieght:auto;
`;
