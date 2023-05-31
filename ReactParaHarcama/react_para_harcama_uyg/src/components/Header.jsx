import PropTypes from 'prop-types'

function Header({ money, total }) {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  sticky-top">
                <div className="container ">
                    <a className="navbar-brand" href="#">React Project One</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item text-center">
                                <button className="btn btn-dark fs-6 p-1 " type="button" data-bs-toggle="offcanvas" data-bs-target="#ourBasket" aria-controls="ourBasket">Sepetim</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className=' text-bg-dark text-center py-2'>
                {total > 0 && money - total != 0 &&
                    <div> Harcamak için  <span className='fw-bold fs-5'>{money - total}</span> ₺ paranız kaldı</div>
                }
                {total == 0 &&
                    <div> Harcamak için  <span className='fw-bold fs-5'>{money}</span> ₺ paranız var</div>
                }
                {money - total == 0 &&
                    <div className='fw-bold fs-5'> Harcamak için hiç paranız kalmadı</div>
                }
            </div>

        </>
    );
}
Header.propTypes = {
    money: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}
export default Header;
