import Header from '../components/Header'
import Footer from '../components/Footer'
import ImagesList from '../components/ImagesList'
import Descriptions from '../components/Descriptions'
import images from '../json/images.json'

const Home = () => {
    return (
        <div>
            <Header />
            <ImagesList images={images}/>
            <Descriptions />
            <Footer />
        </div>
    )
}

export default Home