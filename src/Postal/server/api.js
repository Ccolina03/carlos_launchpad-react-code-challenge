import axios from 'axios';

const sendPostalData = async (postal) => {
      const response = await axios.get(`https://api.zippopotam.us/us/${postal}`).then(response => response.data)
      .catch(error => console.log(error));
      return response
};

export default sendPostalData;