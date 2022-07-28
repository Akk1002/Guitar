import React, { Component } from 'react';
import {Header, HeaderImgLogo, HeaderLogo, HeaderNav, HeaderUl,Guitars, GuitarsBtn, HeaderLeft} from './style'
import logo from '../#img/Butterfly.png'
import imgHeader from '../#img/unsplash_H6j0Zsy91WY.png'
import appStore from '../#img/Apple logo.svg'
import playMarket from '../#img/Group.svg' 

class Header1 extends Component {
    render() {
        return (
            <Header>
                <HeaderLeft>
                    <HeaderNav> 
                        <HeaderLogo>
                            <HeaderImgLogo src={logo} alt="" />
                            <h3>Rhythm</h3>
                        </HeaderLogo>
                        <HeaderUl>
                            <li><a href="#">Store</a></li>
                            <li><a href="#">Collections</a></li>
                            <li><a href="#">Support</a></li>
                        </HeaderUl>
                    </HeaderNav>
                    <Guitars>
                        <h1>Browse top quality <span> Guitars</span> online</h1>
                        <p>Explore 50k+ latest collections of branded guitars online with Rhythm.</p>
                        <GuitarsBtn>
                            <button>Get the App</button>
                            <img src={playMarket} alt="" />
                            <img src={appStore} alt="" />
                        </GuitarsBtn>
                    </Guitars>
                </HeaderLeft>
                <div>
                    <img src={imgHeader} alt="" />
                </div>
            </Header>
        );
    }
}

export default Header1;