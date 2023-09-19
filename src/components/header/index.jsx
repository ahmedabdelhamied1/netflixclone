import React from 'react'
import Headercontainer from '../../containers/headercontainer'
import { Logo } from './styles/header'
import {routes} from "../../constants/routes"
import Feature from '../feature'
import Subscribehere from '../subscribe'
export default function Header({children,...restProps})
{
    return(
        <Headercontainer>
           <Headercontainer.Base>
                <Headercontainer.Logo to={routes.home}>
                 <Logo src='../../../images/misc/logo.svg' alt="netflix logo"/>
                </Headercontainer.Logo>
                <Headercontainer.Buttonlink to={routes.signin}>
                    Sign in
                </Headercontainer.Buttonlink>
            </Headercontainer.Base>
            <Feature>
                <Feature.Title>
                Unlimited movies, TV shows, and more
                </Feature.Title>
                <Feature.Text>
                Watch anywhere. Cancel anytime.
                </Feature.Text>
                <Subscribehere/>
            </Feature>
           
        </Headercontainer>
    )
}