import './styles/HomePage.css'
import { HomeBanner } from '../../components/HomeBanner';
import ProductPreview from '../../components/ProductPreview';

function HomePage () {

    return(
        <div className='home-page'>
            <HomeBanner />
            <ProductPreview />
            <section>
                <h1>some random trust stuff</h1>
            </section>
        </div>
    )
}

export default HomePage;