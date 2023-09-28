import styled from "styled-components"
export const Container=styled.section`
@media(min-width:600px)
{
    width:450px;
    padding: 60px 68px 40px;

}
padding:30px 34px 20px;
margin:20px auto;
background-color: rgba(0,0,0,.75);
border-radius: 4px;
box-sizing:border-box;

`
export const Formcontent=styled.form`
display:flex;
flex-direction:column;
`
export const Title=styled.h1`
color: #fff;
font-size: 32px;
font-weight: 500;
margin-bottom: 28px;
margin-top:0;
`
export const Input=styled.input`
background: #333;
border: 0;
border-radius: 4px;
color: #fff;
height: 50px;
line-height: 50px;
margin-bottom:1em;
outline:0;
border:0;
padding:0 .5em;

`
export const Button=styled.button`
background: #e50914;
padding:1em;
cursor:pointer;
border:0;
outline:0;
color:#fff;
font-weight:700;
border-radius: 4px;
&:disabled
{
    opacity:.5;
}

`
export const Checkbox=styled.input`
background:#b3b3b3;
`
export const Smalltext=styled.p`
color: #b3b3b3;
    font-size: 13px;
    font-weight: 400;
    a{
        text-decoration:none;
        color: #b3b3b3;
        font-size: 13px;
    }
&:first-of-type
{
    margin-right:auto;
    margin-left:2px;
}
`
export const Text=styled.p`
color: #737373;
font-size: 16px;
font-weight: 400;
margin-top: 16px;
&:first-of-type
{
    a
    {
        color:#fff;
        font-weight:400;
        text-decoration:none;
    }
}
`
export const Help=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:2em;

`
export const Error=styled.div`
padding:10px 20px;
color:#fff;
background:#e87c03;
font-size:14px;
margin-bottom:15px;
border-radius:4px;

`








