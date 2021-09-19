import axios from "axios";

class HttpService {
  constructor() {
    this.client = axios.create({
      baseURL:
        "https://food-app---react-default-rtdb.europe-west1.firebasedatabase.app/",
    });
  }
}

export default HttpService;
