import React from 'react';
import './App.css';
import Header from './Components/Header';
import Title from './Components/Title';
import ProductList from './Components/ProductList';

function App(): JSX.Element {
  return (
    <div className="">
       <Header name='TypeShopping' />
       <div className='p-4'>
          <Title title='Te doy la bienvenida a tu primera tienda online creada con Typescript y React' />
          <ProductList />
       </div>
    </div>
  );
}

export default App;
