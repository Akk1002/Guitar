import React, { Component } from 'react'
import Guitar from '../../#img/Rectangle 139.png'
import { Card, Cards, Categories } from './style'
import {Conteiner__main} from '../style'


export default class Cotigories extends Component {
  render() {
    return (
      <Conteiner__main>
        <Categories>
            <h2>Choose based on <span>Categories</span></h2>
          <Cards>
            <Card>
              <img src={Guitar} alt="" />
              <h4>Acoustic</h4>
            </Card>  
            <Card>
              <img src={Guitar} alt="" />
              <h4>Acoustic</h4>
            </Card>  
            <Card>
              <img src={Guitar} alt="" />
              <h4>Acoustic</h4>
            </Card>  
            <Card>
              <img src={Guitar} alt="" />
              <h4>Acoustic</h4>
            </Card>  
          </Cards>
        </Categories>
      </Conteiner__main>
    )
  }
}
