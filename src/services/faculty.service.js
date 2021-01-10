import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/faculty/';

class FacultyService {

    getAllFaculties(){
        return axios.get(API_URL + 'allfaculties' , { headers: authHeader() } );
    }
}
export default new FacultyService();



