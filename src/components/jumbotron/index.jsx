import React from "react";
import JumbotronC from "../../containers/jumbotroncontainer"
import jumbotronData from "../../fixtures/jumbo.json"
export default function Jumbotron({children,...restProps}) {
    return(
      <JumbotronC.Container>
        <JumbotronC.Inner>
         {
          jumbotronData.map(item=>(
            <JumbotronC.Item key={item.id} dir={item.direction}>
                      <JumbotronC.Frame>
                          <JumbotronC.Title>{item.title}</JumbotronC.Title>
                          <JumbotronC.Subtitle>{item.subTitle}</JumbotronC.Subtitle>
                      </JumbotronC.Frame>
                      <JumbotronC.Frame>
                          <JumbotronC.Image  src={item.image} alt={item.alt}/>
                      </JumbotronC.Frame>
            </JumbotronC.Item>
          ))
         }
        </JumbotronC.Inner>
      </JumbotronC.Container>
    )
}
