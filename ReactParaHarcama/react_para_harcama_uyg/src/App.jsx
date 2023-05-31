import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";

import db from "./db.json";
import { useEffect } from "react";

function App() {
  const [money] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0)
  const resetBasket = () => {
    setBasket([])
    Array.from(document.querySelectorAll(".amount")).map(e => e.innerHTML = 0)
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * db.find(product => product.id == item.id).price)
        //Buradaki 0 başlangıç değerimiz
      }, 0)
    )
  }, [basket])

  return (
    < >
      <Header total={total} money={money} />
      <div className="container ">
        <div className="row">
          {
            db.map((data) => (
              < Product product={data} key={data.id} basket={basket} setBasket={setBasket} total={total} money={money} />
            ))
          }
        </div>
      </div>
      <Basket resetBasket={resetBasket} products={db} basket={basket} total={total} />


{/* 27.25 */}


    </>
  );
}

export default App;
