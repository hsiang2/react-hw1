import ImageItem from "../ImageItem"
import styles from "./imageList.module.css"
import { Row } from "antd"

const ImagesList = ({ images }) => {
    return (
        <div className={styles.imageLayout}>
            <div className="container">
                <h1>IMAGES</h1>
                <hr className="divider--dark" />
                <Row  gutter={[24, 0]} className={styles.imageRow}>
                    {images.map( image => 
                        <ImageItem image={image} />
                    )}
                </Row>
            </div>
        </div>
    )
}

export default ImagesList