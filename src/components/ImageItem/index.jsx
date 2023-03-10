import styles from "./imageItem.module.css"
import { Col } from "antd"

const ImageItem = ({ image }) => {
    return (
        <Col
            className={styles.image}
            key={image.title}
            sm={{ span: 12}}
            lg={{ span: 6 }}
        >
            <a href="" className={styles.imageLink}>
                <img src={image.image} alt="" className={styles.imageStyle} />
            </a>
            <p className={styles.imageTitle}>{image.title}</p>
        </Col>
    )
}

export default ImageItem