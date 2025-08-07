import './styles/HomeBanner.css'
import { Link } from 'react-router-dom'

export function HomeBanner() {

    return (
        <section className="banner-section">
            <h1 className='banner-title'>Explore the latest trends</h1>
            <Link className='view-more-btn' to="/products">View More</Link>
        </section>
    )
}