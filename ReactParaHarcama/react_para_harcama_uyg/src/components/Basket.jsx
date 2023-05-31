import PropTypes from 'prop-types'


import BasketItem from './BasketItem'
const Basket = ({ basket, products, total, resetBasket }) => {

    return (
        <>
            <div className="offcanvas   offcanvas-end " data-bs-scroll="true" tabIndex="-1" id="ourBasket" aria-labelledby="ourBasketLabel">
                <div className="offcanvas-header ">
                    <h5 className="offcanvas-title" id="ourBasketLabel">Sepetimiz</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body row">
                    {total == 0 &&
                        (
                            <p>Sepette ürün yok</p>
                        )
                        ||
                        (
                            basket.map(item => (
                                <BasketItem item={item} key={item.id} product={products.find(p => p.id == item.id)} />
                            ))
                        )
                    }
                </div>
                <div className='text-start ms-2 mb-3'>Toplam Tutar: <span className='fw-bold'> {total}₺</span></div>
                <button className="resetBasket btn btn-dark rounded-0" onClick={resetBasket}>Sepeti Sıfırla</button>
            </div>

        </>
    )
}

Basket.propTypes = {
    basket: PropTypes.array.isRequired,
    products: PropTypes.array,
    total: PropTypes.number,
    resetBasket: PropTypes.func
}

export default Basket