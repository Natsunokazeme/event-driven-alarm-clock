import { Button } from "@mui/material";
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

  const logTimeToStorage = () => {
    let rawTimeLogs = localStorage.getItem("timelog") ?? "[]";
    let timeLogs = JSON.parse(rawTimeLogs);
    if (!timeLogs || timeLogs.length === 0) {
      timeLogs = [new Date().toString()];
    } else {
      timeLogs.push(new Date().toString());
    }
    localStorage.setItem("timelog", JSON.stringify(timeLogs));
  };

  const time = new Date();
  return (
    <div className="main-page text-red-500">
      <section>
        <h5>current time:{time.toISOString()}</h5>
        <Button variant="contained" onClick={logTimeToStorage}>
          Record Time
        </Button>
        <button onClick={startWebSocket}> websocket</button>
      </section>
    </div>
  );
};
