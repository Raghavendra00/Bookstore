const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const user = require("./models/user");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to node</h1>");
});

app.get("/afterlogin", (res, req) => {
  res.send("<h1>Welcome in my page</h1>");
});

app.post("/savedata", async (req, res) => {
  console.log(req.body);
  const hashedPassword = await bcrypt.hashSync(req.body.password, 12);
  var data = {
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  };
  // console.log(data)

  const result = await user(data).save();
  // console.log(result);
  if (result) {
    return res.json({ code: 1 });
  } else {
    return res.json({ code: -1 });
  }
});

app.post("/getdata", async (req, res) => {
  // console.log(req.body);

  const result = await user.find({ email: req.body.email });
  // console.log(result);

  if (result.length > 0) {
    const isValid = await bcrypt.compareSync(
      req.body.password,
      result[0].password
    );
    // console.log(isValid)

    if (isValid == true) {
      return res.json({ code: 1 });
    } else {
      return res.json({ code: -1 });
    }
  } else {
    return res.json({ code: -2 });
  }
});

app.post("/search", async (req, res) => {
  // console.log(req.body)
  const result = await user.find({ firstname: req.body.name });
  // console.log(result)
  if (result.length > 0) {
    return res.json({ info: result[0], code: 1 });
  } else {
    return res.json({ code: -1 });
  }
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, (req, res) => {
      console.log(`running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
