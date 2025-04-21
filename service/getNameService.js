import { URL } from "../configs/const";
import HttpService from "./HttpService";

//this is the service for getNameService

class GetNameService extends HttpService {
      async fetchNames() {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.TEST_URL}/api/names`,
            });
      }
      async fetchNameById(id) {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.TEST_URL}/api/names/${id}`,
            });
      }
      async createName(name) {
            return this.sendRequest({
                  method: 'POST',
                  url: `${URL.TEST_URL}/api/names`,
                  data: name,
            });
      }

}

const getNameService = new GetNameService();
export default getNameService;