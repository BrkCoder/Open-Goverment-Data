import axios from 'axios';

class APIUtils {
  BASE_URL: string = 'http://localhost:8080/';

  getCameras(): Promise {
    return axios.get(`${this.BASE_URL}api/cameras`);
  }
}

export default APIUtils;
