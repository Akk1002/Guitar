import styled from "styled-components";

export const Header = styled.header`
margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderImgLogo = styled.img`
  width: 28px;
  height: 28px;
`;
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;
export const HeaderLogo = styled.div`
  display: flex;
  h3 {
    font-size: 24px;
    margin: 0;
  }
`;
export const HeaderUl = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  li:not(:last-child) {
    margin: 0 56px 0 0;
  }
  a {
    color: #121212;
    text-decoration: none;
  }
`;
export const HeaderLeft = styled.div`
    margin:62px 0 0 120px;
`
export const Guitars = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 469px;
  h1 {
    margin: 144px 0 0 0;
    font-weight: 600;
    font-size: 56px;
    line-height: 67px;
    color: #121212;
  }
  p {
    width: 358px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
  }
  span {
    color: #ff6428;
  }
`;

export const GuitarsBtn = styled.div`
  display: flex;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 48px;
    gap: 10px;
    color: #ffffff;
    font-size: 16px;
    width: 192px;
    height: 60px;
    border: none;
    background: #ff6428;
    border-radius: 40px;
  }
  img {
    margin: 0 0 0 27px;
  }
`;
