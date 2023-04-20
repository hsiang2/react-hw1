import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageList from '../components/ImageList'
import Descriptions from '../components/Descriptions'
import { useImages } from '../react-query'

const Home = () => {

    const { data, isLoading } = useImages()
    const images = data || []

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