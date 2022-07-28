import React, { Component } from 'react'
import Brand from '../../#img/image 6.png'
import {Brand1, Items} from './style'
import {Conteiner__main} from '../style'

export default class Brands extends Component {
  render() {
    return (
      <Conteiner__main>
        <Brand1>
          <h2>Featuring the <span>Best Brands</span></h2>
          <Items>
              <img src={Brand} alt="" />
              <img src={Brand} alt="" />
              <img src={Brand} alt="" />
              <img src={Brand} alt="" />
          </Items>
          <Items>
              <img src={Brand} alt="" />
              <img src={Brand} alt="" />
              <img src={Brand} alt="" />
              <img src={Brand} alt="" />
          </Items>
        </Brand1>
      </Conteiner__main>
    )
  }
}
