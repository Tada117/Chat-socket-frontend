import axios from "axios";

const API = "http://localhost:3001/api";

class HttpClient {
  instance;

  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  _handleResponse = ({ data }) => data;

  _handleError = (error) => Promise.reject(error);
}

export class APIService extends HttpClient {
  classInstance;

  constructor() {
    super(API);
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new APIService();
    }

    return this.classInstance;
  }

  getHtml = (url) => this.instance.get(url).then((response) => response);

  register = (data) =>
    this.instance.post(`${API}/users/register`, data).then(({ data }) => data);

  login = (data) =>
    this.instance.post(`${API}/users/login`, data).then(({ data }) => data);
}
