import React from "react";
import Footercontainer from "../../containers/footercontainer";
export default function Footer() {
  return (
    <Footercontainer.Container>
      <Footercontainer.Inner>
        <Footercontainer.Link href="#">Questions? Contact us.</Footercontainer.Link>
        <Footercontainer.Row>
         <Footercontainer.Column>
            <Footercontainer.Link href="#">FAQ</Footercontainer.Link>
            <Footercontainer.Link href="#">
              Investor Relations
            </Footercontainer.Link>
            <Footercontainer.Link href="#">Privacy</Footercontainer.Link>
            <Footercontainer.Link href="#">Speed Test</Footercontainer.Link>
          </Footercontainer.Column>
          <Footercontainer.Column>
            <Footercontainer.Link href="#">Help Center</Footercontainer.Link>
            <Footercontainer.Link href="#">Jobs</Footercontainer.Link>
            <Footercontainer.Link href="#">
              Cookie Preferences
            </Footercontainer.Link>
            <Footercontainer.Link href="#">Legal Notices</Footercontainer.Link>
          </Footercontainer.Column>
         <Footercontainer.Column>
            <Footercontainer.Link href="#">Account</Footercontainer.Link>
            <Footercontainer.Link href="#">Ways to Watch</Footercontainer.Link>
            <Footercontainer.Link href="#">
              Only on Netflix
            </Footercontainer.Link>
            <Footercontainer.Link href="#">
              Only on Netflix
            </Footercontainer.Link>
          </Footercontainer.Column>
          <Footercontainer.Column>
            <Footercontainer.Link href="#">Media Center</Footercontainer.Link>
            <Footercontainer.Link href="#">Terms of Use</Footercontainer.Link>
            <Footercontainer.Link href="#">Contact Us</Footercontainer.Link>
          </Footercontainer.Column>
        </Footercontainer.Row>
        <Footercontainer.Text >Netflix Egypt</Footercontainer.Text>

      </Footercontainer.Inner>
    </Footercontainer.Container>
  );
}
