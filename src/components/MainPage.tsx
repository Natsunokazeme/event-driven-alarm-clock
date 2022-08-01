import React from "react";
import "./MainPage.scss";

export const MainPage = (prop: any) => {
  const startWebSocket = () => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onopen = function () {
      console.log("open");
      ws.send("hello");
    };
    ws.onmessage = (e) => {
      console.log(e.data);
    };
    ws.onclose = () => {
      console.log("close");
    };
    ws.onerror = (e) => {
      console.log(e);
    };
  };

  const time = new Date();
  return (
    <div className="main-page text-red-500">
      <section>
        <h5>current time:{time.toISOString()}</h5>
        <button onClick={startWebSocket}></button>
      </section>
    </div>
  );
};
