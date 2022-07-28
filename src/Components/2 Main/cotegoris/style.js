import styled from "styled-components";



export const Categories = styled.div`
margin: 0 120px;
display: flex;
flex-direction: column;
h2{
   margin: 0 auto 80px auto;
   font-weight: 600;
font-size: 44px;
line-height: 53px;
}
span{
   color: #FF6428;
}
`  
export const Cards = styled.div`
display: flex;
justify-content: space-between;
`
export const Card = styled.div`
:not(:last-child){
   margin:0 70px 0 0;
}
position: relative;
text-align: center;
h4{
   font-weight: 600;
   font-size: 20px;
   line-height: 30px;
   color: #ffffff;
   position: absolute;
   top: 76%;
    left: 50%;
    transform: translate(-50%, -50%);
   }
`