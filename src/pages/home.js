import React from 'react';
import {
  JumbotronContainer,
  FooterContainer,
  FaqsContainer,
  HeaderContainer,
} from '../containers';
import { OptForm, Feature } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title> Unlimited Films, TV Programs and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" type="email" />
            <OptForm.Button> Try It Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your Email to create or Restart your
              Membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
