import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const SearchbarByLocation = ({ userLocation, setLocations }) => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  console.log([selectedOption1, selectedOption2, selectedOption3]);
//   useEffect(()=> {
//     setLocations({
//       division: selectedOption1,
//       district: selectedOption2,
//       upazilla: selectedOption3,
//     });
//   },[])
  const [divisionData, setDivisionData] = useState([]);
  const [districtsData, setDistrictsData] = useState([]);
  const [upazilasData, setUpazilasData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LIVE_URL}division`)
      .then((res) => setDivisionData(res.data));
  }, []);
  useEffect(() => {
    const division = divisionData.find(
      (item) => item?.name === selectedOption1?.value
    );
    console.log(division);
    axios
      .get(`${import.meta.env.VITE_LIVE_URL}districts?data=${division?.id}`)
      .then((res) => setDistrictsData(res.data));
  }, [divisionData, selectedOption1]);
  useEffect(() => {
    const district = districtsData.find(
      (item) => item?.name === selectedOption2?.value
    );
    axios
      .get(`${import.meta.env.VITE_LIVE_URL}upazila?data=${district?.id}`)
      .then((res) => setUpazilasData(res.data));
  }, [districtsData, selectedOption2]);

  const optionsDivision = divisionData.map((item) => ({
    value: item.name,
    label: item.name,
  }));
  const optionsDistricts = districtsData.map((item) => ({
    value: item.name,
    label: item.name,
  }));
  const optionsUpazilas = upazilasData.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  return (
    <div>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="">
          {userLocation === "rider" ? (
            <label className="font-medium text-black/80 py-2">
              Location of Rider
            </label>
          ) : userLocation === "business" ? (
            <label className="font-medium text-black/80 py-2">
              Location of Company
            </label>
          ) : (
            <label className="font-medium text-black/80 py-2">
              Location of Outlet
            </label>
          )}
          <Select
            defaultValue={selectedOption1}
            onChange={setSelectedOption1}
            options={optionsDivision}
            placeholder={"Select Your Division"}
          />
        </div>
        <div className="App">
          <label>District</label>
          <Select
            defaultValue={selectedOption2}
            placeholder={"Select Your District"}
            onChange={setSelectedOption2}
            options={optionsDistricts}
          />
        </div>
        <div className="App lg:col-span-2">
          <label>Upazila</label>
          <Select
            defaultValue={selectedOption3}
            onChange={setSelectedOption3}
            options={optionsUpazilas}
            placeholder={"Select Your Upazila"}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchbarByLocation;