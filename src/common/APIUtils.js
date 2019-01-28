// @flow
import axios from 'axios';

class APIUtils {
    static BASE_URL:string = 'http://localhost:8080/';
    static getCameras() : Promise{
        return axios.get(APIUtils.BASE_URL+'api/cameras');
    }
};

export default APIUtils;