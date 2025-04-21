// import axios its nead feth data from api
import axios from 'axios';

//
class HttpService {
      constructor() {
            this.service = axios.create();
            this.service.interceptors.response.use(
                  this.handleSuccess,
                  this.handleError
            );
      }
      //
      sendRequest = async (config) => {
            return this.service.request(config);
      };
      //
      handleSuccess = (response) => {
            return response?.data;
      }

      //this is the error handler for the axios request
      handleError = (error) => {
            if (!error.response) {
                  return {
                        success: false,
                        message: 'Network error. Please check your internet connection.',
                        data: null
                  };
            }
            // Check for specific status codes and redirect accordingly
            //this type allso can window replace to other page
            if (error.response.status === 401) {
                  window.location.replace('/login');
            } else if (error.response.status === 403) {
                  window.location.replace('/403');
            } else if (error.response.status === 404) {
                  window.location.replace('/404');
            } else if (error.response.status === 408) {
                  window.location.replace('/408');
            } else if (error.response.status === 419) {
                  window.location.replace('/419');
            } else if (error.response.status === 429) {
                  window.location.replace('/429');
            } else if (error.response.status === 503) {
                  window.location.replace('/503');
            }
            //this allso can replace to err page to
            switch (error.response.status) {
                  case 500:
                        window.location.replace('/500');
                        break;

                  case 501:
                        window.location.replace('/501');
                        break;

                  case 502:
                        window.location.replace('/502');
                        break;
            }
      };

}

export default HttpService;
//this is the end of the file