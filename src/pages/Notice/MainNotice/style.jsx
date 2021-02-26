import styled from 'styled-components';

export const SpotlightMainWrapper = styled.div`
  background: #fff;
  margin-bottom: 20px;
  padding-top: 30px;
  @media only screen and (min-width: 999px) {
    display: flex;
    align-items: flex-end;
    padding-top: 45px;
  }
`;

export const SpotlightMainLeft = styled.article`
  display: block;
  & > a {
    color: #000;
    text-decoration: #000;
    background-color: transparent;
    cursor: pointer;
  }
  @media only screen and (min-width: 999px) {
    width: calc(100% - 380px);
    position: relative;
    text-align: right;
    margin-right: 20px;
  }
`;

export const SpotlightMainThumbnail = styled.img`
  max-width: 100%;
  object-fit: cover;
  min-height: 188px;
  vertical-align: middle;
  border-style: none;

  @media only screen and (min-width: 999px) {
    width: 620px;
  }
`;

export const SpotlightMainDescription = styled.div`
  padding: 30px 0;
  position: relative;
  background-color: #fff;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    width: 95px;
    height: 10px;
    background-color: #81cb25;
    box-shadow: 12px -5px 0 12px #fff;
  }
  @media screen and (min-width: 999px) {
    bottom: 0;
    flex-shrink: 0;
    padding: 33px 30px 0 0;
    width: 45%;
    max-width: 390px;
    min-height: 225px;
    margin: 0;
    text-align: left;
    position: absolute;
    left: 0;
    &::before {
      position: absolute;
      left: 0;
    }
  }
`;

export const SpotlightMainHeadlineMain = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  @media screen and (min-width: 999px) {
    font-size: 30px;
    padding-left: 10px;
  }
`;

export const SpotLightMainSideRight = styled.div`
  display: block;
  @media only screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    & > article:first-child {
      border-top: 1px solid #e5e5e5;
    }
  }
  @media only screen and (min-width: 999px) {
    display: block;
    width: 380px;
    height: 350px;
  }
`;

export const SpotlightHeadlineListWrapper = styled.article`
  display: block;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const SpotlightMainHeadlineList = styled.div`
  border-left: 3px solid #81cb25;
  padding: 0 17px;
  &::before {
    content: '';
    display: block;
    width: 3px;
    background-color: #81cb25;
  }
  & > h3 {
    font-family: Roboto;
    font-weight: 500;
    line-height: 1.2;
    font-size: 16px;
    margin: 0;
  }
  & > h3 > a {
    color: #000;
    text-decoration: #000;
    background-color: transparent;
    cursor: pointer;
  }
`;
