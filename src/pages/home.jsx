import React from 'react'
import Jumbotron from '../components/jumbotron'
import Faq from '../components/faq'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Home() {
    return (
        <>
        <Header/>
        <Jumbotron/>
        <Faq/>
        <Footer/>
        </>
    )
}