import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";


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

  return (
    <div className="container">
      <Header />
      <ProductList products={products} />
    </div>
  );
}

export default App;
