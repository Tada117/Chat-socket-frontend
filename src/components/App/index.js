import React, { useEffect } from "react";
import Messenger from "../Messenger";
import { APIService } from "../../service/APIService";

const api = APIService.getInstance();

const App = () => {
  useEffect(() => {
    async function login() {
      const userInfo = await api.login({
        username: "ivermin1123",
        password: "1234",
      });
      console.log({ userInfo });
    }
    login();
  }, []);
  return (
    <div className="App">
      <Messenger />
    </div>
  );
};

export default App;
