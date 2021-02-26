import styled from 'styled-components';

export const ListNotesWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
  grid-gap: 20px;
  padding: 20px 0 20px;
  border-top: 1px solid #e5e5e5;
  @media only screen and (min-width: 513px) {
    grid-template-columns: repeat(auto-fit, minmax(233px, 1fr));
  }
  @media only screen and (min-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const ListNotesArticle = styled.article`
  position: relative;
  & > a {
    color: #000;
    text-decoration: #000;
    background-color: transparent;
  }
`;

export const ListNotesImage = styled.img`
  width: 100%;
  object-fit: cover;
  min-height: 135px;
  background-color: #e6e6e6;
  color: transparent;
  vertical-align: middle;
  border-style: none;
`;

export const ListNotesHeadline = styled.h3`
  font-family: Roboto;
  font-size: 16px;
  padding: 20px 0;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.2;
  & > a {
    cursor: pointer;
  }
`;

// export const ListNotesAuthor = styled.strong`
//   font-family: Roboto;
//   font-weight: 500;
//   font-size: 14px;
//   position: absolute;
//   color: #808080;
//   bottom: 0;
// `;

export const SpecialTitleBottom = styled.span`
  display: block;
  font-family: Roboto;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  text-align: center;
  padding: 0 0 7px;
  margin: 15px 0;
  position: relative;
  &::before {
    content: '';
    background-color: #81cb25;
    position: absolute;
  }
  & > a {
    position: relative;
    padding: 0 10px;
    color: #000;
    text-decoration: #000;
    background-color: transparent;
    cursor: pointer;
  }
  & > a::before {
    content: '';
    background-color: #81cb25;
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 4px;
    left: 0;
  }
`;
