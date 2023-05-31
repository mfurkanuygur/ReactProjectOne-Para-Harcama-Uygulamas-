import PropTypes from 'prop-types'

const BasketItem = ({ item, product }) => {

    return (
        <>
            {
                <div className="col-md-6 col-lg-6 " >
                    <div className="pro-card-basket bg-dark text-white  border border-1 py-4 rounded-3 d-flex align-items-center justify-content-center flex-column" >
                        <h6 className="pro-name-basket mb-2">
                            {product.title}
                        </h6>
                        <h6 className='pro-price-basket mb-2'>
                            Fiyat:{product.price}₺
                        </h6>
                        <div>{item.amount} Adet</div>
                    </div>
                </div>
            }
        </>
    )
}

BasketItem.propTypes = {
    item: PropTypes.object.isRequired,
    product: PropTypes.object
}

export default BasketItem