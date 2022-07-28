import React, { Component } from 'react'
import {Rhythm, Cards, Card,BgImg,Cont_R} from './style'
import Img from'../../#img/category-2.png'

export default class Rhythm1 extends Component {
  render() {
    return (
         <Cont_R>
      <Rhythm>
         <h2>Why try <span>Rhythm?</span></h2>
         <Cards>
            <Card>
               <BgImg>
                  <img src={Img} alt="" />
               </BgImg>
               <h4>Smooth Browsing</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
            <Card>
               <BgImg>
                  <img src={Img} alt="" />
               </BgImg>
               <h4>Smooth Browsing</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
            <Card>
               <BgImg>
                  <img src={Img} alt="" />
               </BgImg>
               <h4>Smooth Browsing</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
         </Cards>
      </Rhythm>
         </Cont_R>
    )
  }
}
