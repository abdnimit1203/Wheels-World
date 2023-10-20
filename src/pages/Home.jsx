
import { useLoaderData } from 'react-router-dom';
import Brands from '../components/Brands/Brands';
import Dummy from '../components/dummy';
import Banner from './../components/Banner/Banner';
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
                <Dummy></Dummy>
            </div>
        </div>
    );
};

export default Home;