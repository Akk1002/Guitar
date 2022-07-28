import styled from 'styled-components';

export const Rhythm = styled.div`
weight:1440px;
display: flex;
flex-direction: column;
h2{
   color:#ffffff; 
   margin: 90px auto 80px auto;
   font-weight: 600;
   font-size: 44px;
   line-height: 53px;
}
span{
   color: #FF6428;
}
`

export const Cont_R = styled.div`
height: 508px;
background: #121212;

`;
export const Cards = styled.div`
  display:flex;
  justify-content: space-between;
`;

export const Card = styled.div`
width:230px;
display: flex;
align-items: center;

flex-direction: column;
h4{
   margin:30px 0 20px 0;
   font-weight: 600;
font-size: 18px;
line-height: 27px;
letter-spacing: 0.08em;
text-transform: uppercase;
color: #FFFFFF;
}
p{
   margin:0;
   font-weight: 400;
font-size: 14px;
line-height: 21px;
text-align: center;
text-transform: capitalize;
color: #666666;

}
`;


export const BgImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 72px;
height: 72px;
background: #262626;
border-radius: 20px;
`;