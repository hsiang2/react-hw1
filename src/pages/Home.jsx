import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageList from '../components/ImageList'
import Descriptions from '../components/Descriptions'
import images from '../json/images.json'

const Home = () => {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <div className='layoutContent'>
                <ImageList images={images}/>
                <Descriptions />
            </div>
            <Footer className="layoutFooter"/>
        </div>
    )
}

export default Home