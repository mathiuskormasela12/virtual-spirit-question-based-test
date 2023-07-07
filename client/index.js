// =========== Client
// import all modules
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/userss';

const getUsers = async () => {
  try {
    const {data} = await axios.get(apiUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

console.log(await getUsers())