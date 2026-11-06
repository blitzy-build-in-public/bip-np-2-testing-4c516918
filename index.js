/** Prints "WELCOME TO BLITZY" when listening and serves the greetings HTTP endpoints. */
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.type("text/plain").send("Hello world"));
app.get("/goodevening", (req, res) => res.type("text/plain").send("Good evening"));

app.listen(port).on("listening", () => console.log("WELCOME TO BLITZY"));
