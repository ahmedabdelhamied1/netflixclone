import React from 'react'
import Subscribe from '../../containers/subscribe'
export default function Subscribehere()
{
    return (
        <Subscribe.Container>
            <Subscribe.Title>
            Ready to watch? Enter your email to create or restart your membership.
            </Subscribe.Title>
            <Subscribe.Form>
                <Subscribe.Input type="email" placeholder="Email adress"/>
                <Subscribe.Button>
                 Get started
                 <Subscribe.Image src="../../../images/icons/chevron-right.png" alt="a chevron right icon for get started button"/>
                </Subscribe.Button>
            </Subscribe.Form>
        </Subscribe.Container>
    )
}