import styled from "styled-components";

export const Store = styled.div`
  margin:160px 120px 0 120px;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0 auto;
    font-weight: 600;
    font-size: 44px;
    line-height: 53px;
    color: #121212;
    span {
      color: #ff6428;
    }
  }
`;
export const StoreItems = styled.div``;
export const ItemsNew = styled.div``;
export const NewBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.08em;
    color: #121212;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #868686;
  }
`;
export const NewItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StoreGuitar = styled.div`
  :not(:last-child){
    margin:0 50px 0 0;
  }
`;
export const ItemsTop = styled.div`
margin:100px 0 180px 0;
`;