require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const Log = require("../logging_middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/notifications", async (req, res) => {
  try {
    await Log("backend", "info", "route", "Fetching notifications");

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      },
    );

    await Log("backend", "info", "route", "Notifications fetched successfully");

    res.json(response.data);
  } catch (error) {
    await Log("backend", "error", "route", "Failed to fetch notifications");

    res.status(500).json({
      message: "Failed to fetch notifications",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
