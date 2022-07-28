import React, { Component } from 'react';

import { Main } from './style'
import Store1 from './store/index'
import Cotigories from './cotegoris/index'
import Brand from './Brands'
import Rhythm1 from './Rhythm'


class Main1 extends Component {
    render() {
        return (
            <Main>
                <Store1 />
                <Cotigories />
                <Brand/>
                <Rhythm1/>
            </Main>
        );
    }
}

export default Main1;