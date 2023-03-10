import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Col, Row } from "antd"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerAbove}>
            <div className="container">
                <Row className={styles.footerRow} >
                    <Col
                        lg={{ span: 16 }}
                        className={styles.footerDescription} 
                    >
                        <h2>臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系</h2>
                    </Col>
                    <Col
                        lg={{ span: 8 }}
                    >
                        <ul className={styles.footerList} >
                            <li className={styles.footerItem}><a href="" className={styles.footerLink}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li className={styles.footerItem}><a href="" className={styles.footerLink}><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                            <li className={styles.footerItem}><a href="" className={styles.footerLink}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
            </div>

            <div className={styles.footerBelow}>
            <div className="container">
                <h4>
                &copy; Copyright All rights reserved.
                </h4>
            </div>
            </div>
        </footer>
    )
}

export default Footer