const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  console.log("Event Received", event);
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log("Error posting event to posts service", err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log("Error posting event to comments service", err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log("Error posting event to query service", err.message);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log("Error posting event to moderation service", err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("listening on port 4005");
});
