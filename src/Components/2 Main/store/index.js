import React, { Component } from 'react'
import {StoreGuitar,NewItems,NewBoard,ItemsNew,StoreItems,Store,ItemsTop}from './style'
import guitar1 from '../../#img/unsplash_oM5YoMhTf8E.jpg'
import {Conteiner__main} from '../style'
 
class Store1 extends Component {
   render() {
      return (
         <Conteiner__main>
            <Store>
               <h2>Check out the <span> Store</span></h2>
               <StoreItems>
                  <ItemsNew>
                     <NewBoard>
                        <p>NEW ON THE BOARD</p>
                        <a href="#d">view all</a>
                     </NewBoard>
                     <NewItems>
                        <StoreGuitar>
                           <img src={guitar1} alt="" />
                           <h4>The Essential Les Paul</h4>
                           <p>$1,299.00</p>
                        </StoreGuitar>
                        <StoreGuitar>
                           <img src={guitar1} alt="" />
                           <h4>The Essential Les Paul</h4>
                           <p>$1,299.00</p>
                        </StoreGuitar>
                        <StoreGuitar>
                           <img src={guitar1} alt="" />
                           <h4>The Essential Les Paul</h4>
                           <p>$1,299.00</p>
                        </StoreGuitar>
                     </NewItems>
                  </ItemsNew>
                  <ItemsTop>
                     <NewBoard>
                        <p>TOP SELLING</p>
                        <a href="#d">view all</a>
                     </NewBoard>
                     <NewItems>
                        <StoreGuitar>
                           <img src={guitar1} alt="" />
                           <h4>The Essential Les Paul</h4>
                           <p>$1,299.00</p>
                        </StoreGuitar>
                        <StoreGuitar>
                           <img src={guitar1} alt="" />
                           <h4>The Essential Les Paul</h4>
                           <p>$1,299.00</p>
                        </StoreGuitar>
                        <StoreGuitar>
                           <img src={guitar1} alt="" />
                           <h4>The Essential Les Paul</h4>
                           <p>$1,299.00</p>
                        </StoreGuitar>
                     </NewItems>
                  </ItemsTop>
               </StoreItems>
            </Store>
         </Conteiner__main>
      )
   }
}

export default Store1