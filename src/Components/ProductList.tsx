import React, { useState, useEffect } from 'react'
import { getProducts } from '../controllers/productsController';
import Product from './Product';

interface ProductInterface {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: object,
    title: string
}

const ProductList = (): JSX.Element => {

  const [ productList, setProductList ] = useState<ProductInterface[]>([]);
  
  useEffect(()=>{
     getProducts()
     .then(r => setProductList(r.data))
     .catch(e => console.log(e));
  }, [])  

  return (
    <>
    {
        productList.length === 0 
        ? 'No hay productos' 
        : <div className='mt-4 grid grid-cols-3 md:grid-cols-5 gap-2'>
            {productList.map((product: ProductInterface, ind: number): JSX.Element => (
                <Product
                  key={ind} 
                  image={product.image} 
                  title={product.title} 
                  price={product.price} 
                />
            ))}
        </div>
    }
    </>
  )
}

export default ProductList