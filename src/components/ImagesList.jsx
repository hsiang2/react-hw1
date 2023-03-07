import ImageItem from "./ImageItem"

const ImagesList = ({ images }) => {
    return (
        <article className="image__layout py-3 py-sm-5">
            <div className="container">
                <h1 className="text-center">IMAGES</h1>
                <hr className="divider--dark" />
                <div className="row">
                    {images.map( image => 
                        <ImageItem image={image} />
                    )}
                </div>
            </div>
        </article>
    )
}

export default ImagesList