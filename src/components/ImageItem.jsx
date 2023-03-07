const ImageItem = ({ image }) => {
    return (
        <div className="image mt-4 col-sm-6 col-lg-3">
            <a href="" className="image__link">
                <img src={image.image} alt="" className="image__style" />
            </a>
            <p className="image_title">{image.title}</p>
        </div>
    )
}

export default ImageItem