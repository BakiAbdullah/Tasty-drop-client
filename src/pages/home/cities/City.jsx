
import barishal from '../../../assets/asset/CityImages/barishal.jpg';
import brahmanbaria from '../../../assets/asset/CityImages/brahmanbaria.jpg';
import chattagram from '../../../assets/asset/CityImages/chattagram.jpg';
import comilla from '../../../assets/asset/CityImages/comilla.jpg';
import dhaka from '../../../assets/asset/CityImages/dhaka.jpg';
import gazipur from '../../../assets/asset/CityImages/gazipur.jpg';
import khulna from '../../../assets/asset/CityImages/khulna.jpg';
import rajshahi from '../../../assets/asset/CityImages/rajshahi.jpg';
import rangpur from '../../../assets/asset/CityImages/rangpur.jpg';
import savar from '../../../assets/asset/CityImages/savar.jpg';
import sylhet from '../../../assets/asset/CityImages/sylhet.jpg';
import MainHeading from '../../../components/TitleTexts/MainHeading';

const cities = [
  { name: 'Barishal', image: barishal },
  { name: 'Brahmanbaria', image: brahmanbaria },
  { name: 'Chattagram', image: chattagram },
  { name: 'Comilla', image: comilla },
  { name: 'Dhaka', image: dhaka },
  { name: 'Gazipur', image: gazipur },
  { name: 'Khulna', image: khulna },
  { name: 'Rajshahi', image: rajshahi },
  { name: 'Rangpur', image: rangpur },
  { name: 'Savar', image: savar },
  { name: 'Sylhet', image: sylhet },
];

const City = () => {
    return (
      <section className=' md:mx-20 mt-10 md:mt-40'>
            <MainHeading title={'Find us in these cities and many more!'}></MainHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    {cities.map((city, index) => (
        <div key={index} className="relative group">
        <img className="w-full h-40 md:h-60 object-cover rounded-lg transition-transform transform group-hover:scale-105" src={city.image} alt={city.name} />
        <div className="absolute inset-0 flex items-center justify-center rounded-md">
          <span className="absolute bottom-0 left-0 p-2 m-2 bg-white rounded-lg text-black text-lg font-semibold">{city.name}</span>
        </div>
      </div>
    ))}
  </div>
    </section>
  );
};

export default City;
