// import axios its nead feth data from api
import axios from 'axios';


class HttpService {
      constructor() {
            this.service = axios.create();
            this.service.interceptors.response.use(
                  this.handleSuccess,
                  this.handleError
            );
      }

      sendRequest = async (config) => {
            return this.service.request(config);
      };

      handleSuccess = (response) => {
            return response?.data;
      }

      handleError
}