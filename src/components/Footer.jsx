import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__above py-5">
            <div className="container">
                <div className="row my-3">
                <h5 className="footer__description col-lg-8">
                    臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                </h5>
                <ul className="footer__list col-lg-4">
                    <li className="footer__item"><a href="" className="footer__link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li className="footer__item"><a href="" className="footer__link"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                    <li className="footer__item"><a href="" className="footer__link"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                </ul>
                </div>
            </div>
            </div>

            <div className="footer__below">
            <div className="container">
                <h6>
                &copy; Copyright All rights reserved.
                </h6>
            </div>
            </div>
        </footer>
    )
}

export default Footer