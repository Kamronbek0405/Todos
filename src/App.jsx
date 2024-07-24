import { Card } from "./components/card";
import { Form } from "./components/form";
import { request } from "./config/request";
import React from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [state, setState] = React.useState([]);

  const getData = () => {
    request.get("/todos").then((res) => {
      setState(res.data);
    });
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[url('https://celes.club/uploads/posts/2023-12/1702966485_celes-club-p-chernii-mersedes-banan-instagram-7.jpg')]">
      <Form refetch={getData} />
      {state.map((item) => (
        <Card refetch={getData} key={item.id} {...item} />
      ))}
    <ToastContainer/>
    </div>
  );
}

export default App;
