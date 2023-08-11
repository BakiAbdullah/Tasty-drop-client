import Banner from "../../components/Banner/Banner";
import Cards from "../../sections/Cards";
import ReserveTable from "../../components/ReserveTable/ReserveTable";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div className="font-Fredoka">
      {/* Banner  */}
      <Banner />
      <Cards></Cards>
      <Reviews></Reviews>
      {/* Reserve table  */}
      <ReserveTable />
    </div>
  );
};

export default Home;
