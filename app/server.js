// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({}))

