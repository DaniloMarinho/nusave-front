import React from 'react';
import styled from 'styled-components';
import PremiumIcon from '@material-ui/icons/MonetizationOn';

const PersonalInfo = styled.div`
  margin: 0 6% 24px 6%;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px 0;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.10);
  background-color: white;
  color: #404040;
`;

const UpperSection = styled.div`
  display: flex;
  margin: 6px 12px 6px 12px;
  padding: 0 0 4px 0;
  border-bottom: 1px solid #ccc;
`;

const Section = styled.div`
  display: flex;
  margin: 6px 12px 6px 12px;
`;

const ImageDiv = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 18px;
`;

const BigTextDiv = styled.div`
  width: 100%;
  font-size: 56px;
  padding: 4px;
`;

const SmallTextDiv = styled.div`
  width: 100%;
  font-size: 24px;
  padding: 4px;
`;

const StyledPremiumIcon = styled(PremiumIcon)`
  width: 48px;
  height: 48px;
  margin-right: 6px;
`;

const Badges = styled.div`
  width: 120px;
  font-size: 32px;
  padding: 4px;
`;

export const Profile = () => (
  <div>
    <PersonalInfo>
      <UpperSection>
        <ImageDiv><img src="coin low resolution.png" /></ImageDiv>
        <BigTextDiv>3128</BigTextDiv>
        <Badges>embl.</Badges>
      </UpperSection>
      <Section>
        <SmallTextDiv>Nível 3</SmallTextDiv>
      </Section>
      <Section>
        <SmallTextDiv>Colocar avisos aqui</SmallTextDiv>
      </Section>
    </PersonalInfo>
  </div>
);