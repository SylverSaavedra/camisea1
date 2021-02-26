import styled from 'styled-components';

export const BolderText = styled.b`
  font-family: Roboto;
  font-weight: 700;
  font-size: 12px;
`;
export const FbContent = styled.a`
  width: 100px;
  background: #2d88ff;
  border-radius: 3px;
  height: 38px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 5px;
  cursor: pointer;
`;
export const FooterContent = styled.footer`
  display: block;
  position: relative;
  margin-top: 30px;
  @media only screen and (min-width: 1100px) and (max-width: 1340px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;
export const IconLr = styled.span`
  width: 110px;
  height: 36px;
  background-position: -10px -10px;
  margin: 0 23px 0 0;
  background: url('../../shared/assets/sprite_logos_Footer.png');
  display: block;
  position: relative;
  color: #383939;
  &::before {
    height: 40px;
    top: 0;
    bottom: 0;
    margin: auto;
    right: -22px;
    content: '';
    width: 1px;
    background-color: rgb(191, 191, 191);
    position: absolute;
  }
`;
export const SpecialFooter = styled.div`
  font-size: 12px;
  color: #383939;
  position: relative;
  max-width: 1270px;
  margin: 0 auto;
  @media only screen and (min-width: 1340px) {
    display: flex;
  }
`;
export const SpecialFooterSideLeft = styled.div`
  display: block;
  max-width: 243px;
  margin: 0 auto;
  padding-left: 15px;
  @media only screen and (min-width: 1100px) {
    padding-left: 0;
    max-width: initial;
    margin: 0;
    display: none;
  }
  @media only screen and (min-width: 1340px) {
    display: block;
  }
`;
export const SpecialFooterSideRight = styled.div`
  display: block;
  padding-top: 36px;
  margin: 0 auto;
`;
export const SpecialFooterWrapperList = styled.div`
  padding: 17px 7px;
  border-top: 1px solid #b5b3b5;
  border-bottom: 1px solid #b5b3b5;
  display: flex;
  justify-content: space-between;
  & > a {
    position: relative;
    color: #383939;
    font-size: 12px;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    padding: 0 12px;
    color: #383939;
  }
  & > a::before {
    content: '';
    width: 1px;
    height: 100%;
    background-color: rgb(191, 191, 191);
    position: absolute;
    right: 0px;
    top: 0px;
  }
  & > a:first-child {
    padding: 0 12px 0 0;
  }
  & > a:last-child::before {
    background-color: transparent;
  }
`;
export const SpecialFooterWrapperLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
  & > a {
    background-image: url('assets/sprite_logos_Footer.png');
    display: block;
    margin: 0 23px;
    position: relative;
    color: #383939;
  }
  & > a::before {
    content: '';
    width: 1px;
    background-color: rgb(191, 191, 191);
    position: absolute;
    height: 100%;
    top: 0;
    right: -22px;
  }
  & > a:nth-child(2) {
    width: 57px;
    height: 25px;
    background-position: -72px -105px;
  }
  & > a:nth-child(3) {
    width: 79px;
    height: 19px;
    background-position: -140px -10px;
  }
  & > a:nth-child(4) {
    width: 91px;
    height: 19px;
    background-position: -10px -66px;
  }
  & > a:nth-child(5) {
    width: 69px;
    height: 20px;
    background-position: -140px -49px;
  }
  & > a:nth-child(6) {
    width: 67px;
    height: 18px;
    background-position: -10px -162px;
  }
  & > a:nth-child(7) {
    width: 42px;
    height: 37px;
    background-position: -10px -105px;
  }
  & > a:nth-child(8) {
    width: 44px;
    height: 29px;
    background-position: -239px -10px;
  }
  & > a:nth-child(9) {
    width: 56px;
    height: 24px;
    background-position: -149px -105px;
    margin: 0 10px 0 10px;
  }
  & > a:nth-child(9)::before {
    background-color: transparent;
  }
`;
export const SpecialLinks = styled.div`
  display: block;
  & > a {
    display: block;
    margin-bottom: 8px;
    color: #383939;
  }
  @media only screen and (min-width: 1100px) {
    position: absolute;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 260px);
    bottom: 20px;
    line-height: 1;
    margin-top: 20px;
    & > a {
      font-weight: 700;
    }
  }
`;
export const SpecialLogoMain = styled.img`
  vertical-align: middle;
  border-style: none;
`;
export const SpecialParagraph = styled.p`
  margin: 20px 0 0;
`;
export const SpecialSocialNetworks = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  @media only screen and (min-width: 1100px) {
    justify-content: flex-start;
  }
`;
export const TwitterContent = styled.a`
  width: 100px;
  background: #1da1f2;
  border-radius: 3px;
  height: 38px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 5px;
  cursor: pointer;
`;
export const TextDescriptive = styled.span`
  display: block;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  color: #383939;
  margin-left: 0px;
`;
