import React from "react";
import { Button } from "react-bootstrap";
// install react-bootstrap
import axios from "axios";
// install axios

// function to calculate latency
const axiosTiming = (instance) => {
  instance.interceptors.request.use((request) => {
    request.ts = Date.now();
    return request;
  });

  instance.interceptors.response.use((response) => {
    const timeInMs = `${Number(Date.now() - response.config.ts).toFixed()}ms`;
    response.latency = timeInMs;
    return response;
  });
};
axiosTiming(axios);
// react functional component
function AxiosLatency() {
//   function to fetch API
  function latency() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function (response) {
        // console.log(response.latency); //17ms
        console.log(response);
        if (response.request.status === 200) {
          console.log("OK !");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Button variant="success" onClick={latency}>
      Fetch API
    </Button>
  );
}

export default AxiosLatency;
