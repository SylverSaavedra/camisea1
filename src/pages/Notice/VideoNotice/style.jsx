import styled from 'styled-components';

export const ContentVideo = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;

export const VideoNoticeContainerTitle = styled.div`
  padding: 30px 0;
`;

export const VideoNoticeTitle = styled.h4`
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

export const VideoNoticeOutstanding = styled.article`
  display: block;
  @media only screen and (min-width: 999px) {
    margin: 0 10%;
  }
`;

export const VideoNoticeLeft = styled.div`
  width: 100%;
  max-height: 543px;
  display: inline-block;
  vertical-align: top;
  @media only screen and (min-width: 999px) {
    width: 58%;
  }
`;

export const VideoNoticeLeftBoxImage = styled.div`
  display: block;
  & > a {
    background-color: transparent;
    cursor: pointer;
  }
  & > a > span {
    width: 100%;
    display: inline-block;
    filter: blur(0);
    transition: filter 0.3s;
    margin: 0;
  }
`;

export const VideoNoticeLeftImage = styled.img`
  max-width: 100%;
  opacity: 1;
  transition: opacity 0.3s;
  vertical-align: middle;
  width: 100%;
  border-style: none;
`;

export const VideoNoticeLeftBoxContent = styled.div`
  width: 100%;
  text-align: left;
  & > h3 > a {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const VideoNoticeLeftBoxContentText = styled.h3`
  font-size: 18px;
  display: block;
  color: #fff;
  width: 100%;
  font-weight: 500;
  line-height: 1;
  padding-top: 0;
  padding-bottom: 12px;
  margin-bottom: 0.5rem;
  margin-top: 0px;
  & > a {
    cursor: pointer;
  }
  @media only screen and (min-width: 999px) {
    padding-top: 10px;
    padding-bottom: 20px;
    font-size: 24px;
  }
`;

export const VideoNoticeRight = styled.div`
  width: 100%;
  display: inline-block;
  vertical-align: top;
  padding-top: 30px;
  @media only screen and (min-width: 999px) {
    width: 39%;
    padding-top: 0;
    height: 305px;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none; /* IE and Edge */
    }
  }
`;

export const VideoNoticeRightContent = styled.div`
  width: 100%;
  padding-bottom: 10px;
  @media only screen and (min-width: 999px) {
    padding-left: 10%;
  }
`;

export const VideoNoticeRightContentBoxImage = styled.div`
  width: 45%;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  & > a {
    cursor: pointer;
  }
  & > a > span {
    display: inline-block;
    filter: blur(0);
    transition: filter 0.3s;
    width: 100%;
    margin: 0;
  }
  @media only screen and (min-width: 999px) {
    width: 45%;
  }
`;

export const VideoNoticeRightContentImage = styled.img`
  opacity: 1;
  transition: opacity 0.3s;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
  width: 100%;
`;

export const VideoNoticeRightContentText = styled.div`
  width: 55%;
  display: inline-block;
  vertical-align: top;
  & > h3 {
    font-size: 14px;
    padding-bottom: 10px;
    padding-left: 10px;
    width: 100%;
    font-weight: 400;
    line-height: 1;
    padding-top: 0;
    display: block;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;
