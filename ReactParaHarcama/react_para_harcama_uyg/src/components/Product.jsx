import PropTypes from 'prop-types'


function Product({ product, basket, setBasket, total, money }) {
    const basketItem = basket.find(item => item.id === product.id)
    const addBasket = () => {
        //id üzerinden arama yapıyoruz çünkü her item unique
        const checkBasket = basket.find(item => item.id === product.id);
        //ürün daha önce eklenmişse
        if (checkBasket) {
            setBasket([...basket.filter(item => item.id != product.id), checkBasket])
            checkBasket.amount += 1;
            document.getElementById(product.id + "amount").innerText = checkBasket.amount
        }
        //ürün daha önce eklenmemişse
        else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
            document.getElementById(product.id + "amount").innerText = 1
        }
        console.log(basket, "eklenen");
    }

    const removeBasket = () => {
        const currenBasket = basket.find(item => item.id === product.id);
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currenBasket.amount -= 1;
        //ürün adedi 0 olunca 
        if (currenBasket.amount == 0) {
            setBasket([...basketWithoutCurrent])
            document.getElementById(product.id + "amount").innerText = 0;
        }
        else {
            setBasket([...basketWithoutCurrent, currenBasket])
            document.getElementById(product.id + "amount").innerText = currenBasket.amount
        }
        console.log(basket, "silinen");

    }
    return (

        <div className="col-12 col-sm-6  col-lg-3">
            <div className="pro-card bg-dark text-white border border-1 m-2 p-3  text-center rounded-3" id={product.id}>
                <h5 className="pro-name mb-3">
                    {product.title}
                </h5>
                <h5 className='pro-price mb-3'>
                    Fiyat:{product.price}₺
                </h5>
                <div className="btn-actions">
                    {/* {basketItem ? basketItem.amount : 0} */}

                    <div className='d-flex justify-content-around rounded-3 '>
                        <button className='btn btn-danger ' disabled={!basketItem} onClick={removeBasket} id={product.id + "removeBtn"}>Çıkart</button>
                        <span className="amount fs-5" id={product.id + "amount"}>0</span>
                        <button className='btn btn-success  ' disabled={total + product.price > money} onClick={addBasket}>Ekle</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


Product.propTypes = {
    product: PropTypes.object.isRequired,
    basket: PropTypes.array,
    setBasket: PropTypes.func,
    total: PropTypes.number,
    money: PropTypes.number
}

export default Product




