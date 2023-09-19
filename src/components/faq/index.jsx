import React from "react";
import faqData from "../../fixtures/faqs.json"
import Faqcontainer from "../../containers/faqcontainer";
import Subscribehere from "../../components/subscribe/index"
export default function Faq() {
    return(
        <Faqcontainer.Container>
            <Faqcontainer.Inner>
            <Faqcontainer.Title>
            Frequently Asked Questions
            </Faqcontainer.Title>
             {faqData.map(item =>(
                <Faqcontainer.Item key={item.id}>
                    <Faqcontainer.Header>
                      {item.header}
                    </Faqcontainer.Header>
                    <Faqcontainer.Content>
                      {item.body}
                    </Faqcontainer.Content>
                </Faqcontainer.Item>
             ))}
            </Faqcontainer.Inner>
            <Subscribehere  />
        </Faqcontainer.Container>
    )
}