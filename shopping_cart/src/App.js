import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Swal from 'sweetalert2';
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";


function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Iphone 14',
      price: 700,
      image: 'https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479303_640.jpg'
    },
    {
      id: 2,
      name: 'Iphone 13',
      price: 640,
      image: 'https://cdn.pixabay.com/photo/2022/09/26/19/40/iphone-7481400_640.jpg'
    },
    {
      id: 3,
      name: 'Samsung S10',
      price: 650,
      image: 'https://cdn.pixabay.com/photo/2019/12/27/01/47/samsung-4721544_640.jpg'
    },
    {
      id: 4,
      name: 'Airpods',
      price: 400,
      image: 'https://cdn.pixabay.com/photo/2020/05/14/09/54/earphones-5193970_640.jpg'
    }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    let productItem = cartItems.find(product => product.id === item.id);
    if(productItem){
      productItem.quantity += 1;
      setCartItems([...cartItems]);

      // Alert
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      item.quantity = 1;
      setCartItems([item,...cartItems]);

      // Alert
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <div className="container">
      <Header cartItems={cartItems} />

        <Routes>
          <Route path="/" exact element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>

      {/* <ProductList products={products} addToCart={addToCart} /> */}
    </div>
  );
}

export default App;
