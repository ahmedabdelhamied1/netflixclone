import React, { createContext, useContext, useState } from "react";
import {Container,Inner,Item,Title,Content,Header } from "../../src/components/faq/styles/faq"
const togglecontext=createContext()
export default function Faqcontainer({children,...restProps}) {
    return (
       <Container>
         <Inner {...restProps}>
            {children}
        </Inner>
       </Container>
    )
}
Faqcontainer.Container=function Faqcontainer({children}){
    return (<Container >{children}</Container>)
}
Faqcontainer.Inner=function Faqinner({children,...restProps}){
    return (<Inner {...restProps}>{children}</Inner>)
}
Faqcontainer.Item=function Faqitem({children,...restProps}){
    const [toggleshow,setToggleshow]=useState(false)
    return (
        <togglecontext.Provider value={{toggleshow,setToggleshow}}>
            <Item {...restProps}>
            {children}
            </Item>
        </togglecontext.Provider>
        
        )
}
Faqcontainer.Title=function Faqtitle({children,...restProps}){
    return (
    <Title {...restProps}>
        {children}
       
    </Title>
    )
}
Faqcontainer.Header=function FaqHeader({children,...restProps}){
    const {toggleshow,setToggleshow}=useContext(togglecontext)
    return (
    <Header onClick={()=>{
        setToggleshow(!toggleshow)
       }
        } {...restProps}>
        {children}
        {toggleshow?(<img src="../../images/icons/close-slim.png" alt="open accordion icon"/>):(<img src="../../images/icons/add.png" alt="close accordion icon"/>)}
    </Header>
    )
}
Faqcontainer.Content=function Faqcontent({children,...restProps}){
    const {toggleshow}=useContext(togglecontext)
    
    return toggleshow? (<Content {...restProps}>{children}</Content>):(null)
      
    
}