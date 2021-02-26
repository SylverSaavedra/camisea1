import styled from 'styled-components';

export const ContentCarousel = styled.div`
  & > div > div > div > div > div > div > div > div > div > a > img {
    max-width: 100%;
    width: 70vw;
    height: 30vh;
  }
  & > div > div > div > div > div > div > div > div > a > span {
    padding: 15px 15px 0 15px;
  }
  & > div > div > div > div > div > div > div > div > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    width: 100%;
    padding: 0 20px;
  }
  & > div > div > div > div > div > div > div > div {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  }
  & > div > div > .rec-dot {
    background-color: #cccccc;
    box-shadow: 0 0 1px 3px #cccccc;
    border-radius: 0;
    width: 70px;
    height: 5px;
  }
  & > div > div > .rec-dot_active {
    background-color: #81cb25;
    box-shadow: 0 0 1px 3px #81cb25;
  }
  & > div > div > .rec-arrow {
    color: #000;
    background-color: transparent;
    border: 0px solid transparent;
  }
  & > div > div > .rec-arrow:hover {
    color: transparent;
    background-color: transparent;
    box-shadow: none;
    border: none;
  }
  & > div > div > .rec-arrow:focus {
    color: transparent;
    background-color: transparent;
    box-shadow: none;
    border: none;
  }
  & div > div > .rec-arrow-left {
    background-image: url('./assets/arrow-left.png');
    background-size: cover;
    color: transparent;
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 80px;
  }
  & div > div > .rec-arrow-right {
    background-image: url('./assets/arrow-right.png');
    background-size: cover;
    color: transparent;
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 80px;
  }
  .unique-slider {
    & > div > a > {
      display: flex;
      justify-content: center;
    }
    & > div > a > img {
      display: flex;
      margin: 0 auto;
      width: 60%;
    }
  }
  @media only screen and (max-width: 1023px) {
    & > div > div > div > div > div > div > div > div > a {
      display: flex;
      flex-direction: column;
    }
    & > div > div > div > div > div > div > div > div > a > img {
      width: 70vw;
      height: 30vh;
    }
  }
`;
export const ContentSuplement = styled.div`
  display: block;
  margin: 0px auto 40px auto;
  & > .awssld__bullets > button {
    border: none;
    background: #cccccc;
  }
`;
export const SuplementNoticeContainerTitle = styled.div`
  padding: 30px 0;
`;
export const SuplementNoticeTitle = styled.h4`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
  margin-top: 0;
  padding-top: 10px;
  margin-bottom: 0.5rem;
  &::before {
    content: '';
    position: absolute;
    height: 8px;
    top: -10px;
    width: 96px;
    background-color: #81cb25;
  }
`;
