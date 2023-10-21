
import { useLoaderData } from 'react-router-dom';
import Brands from '../components/Brands/Brands';
import Banner from './../components/Banner/Banner';
import Sales from '../components/Extra/Sales';
import Extra from '../components/Extra/Extra';
const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <div>
                <Brands  brands={brands}></Brands>
            </div>
            <div>
                <Sales></Sales>
            </div>
            <div>
                <Extra></Extra>
            </div>
        </div>
    );
};

export default Home;