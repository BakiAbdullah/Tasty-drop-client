import Banner from "../../components/Banner/Banner";
import Cards from "../../sections/Cards";
import ReserveTable from "../../components/ReserveTable/ReserveTable";

const Home = () => {
  return (
    <div className="font-Fredoka">
      {/* Banner  */}
      <Banner />
      <Cards></Cards>
      {/* Reserve table  */}
      <ReserveTable />
    </div>
  );
};

export default Home;
