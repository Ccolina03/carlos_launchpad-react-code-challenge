import axios from 'axios';

export const getCountries = async () => {
  try {
    const response = await axios.get('https://countriesnow.space/api/v0.1/countries/info?returns=none');
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUniversities = async (country) => {
  //getting error when employing http in browser
  try {
    const url = `http://universities.hipolabs.com/search?country=${country}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};