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
          <Title title='Bienvenido a TypeShopping' />
          <ProductList />
       </div>
    </div>
  );
}

export default App;
