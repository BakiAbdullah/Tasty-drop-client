// import foods from '../foods.json'
// import foods from '../../public/foods.json'
import { useEffect, useState } from 'react';
import Card from '../components/Home/Card';
const Cards = () => {
    
    const [featuredFood, setFeaturedFood] = useState([]);
    useEffect(() => {
        fetch('foods.json').then(res=>res.json().then(data=>setFeaturedFood(data)))
    },[])
    
    return (
        <div className='font-Fredoka my-20 bg-white md:mx-24'>
            <p className='text-6xl font-bold text-center mb-20'>Featured Dishes</p>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    featuredFood.slice(0, 3).map((food,i) =><Card key={i} cardDetails={food}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Cards;