import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: theme.spacing(2),
    // background- color: "black",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Sign = ({ handleClose }) => {
  const baseURL = "http://localhost:5500";
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcon, setPasswordcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password, passwordcon);
    //   handleClose();
    axios
      .post(`${baseURL}/savedata`, {
        firstName,
        lastName,
        email,
        password,
        passwordcon
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 1) {
          alert("Saved Successfully");
        } else {
          alert("Try Again");
        }
        //    setCode(res.data.code);
      });
  };

  return (
    <div className="back">
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={passwordcon}
          onChange={(e) => setPasswordcon(e.target.value)}
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Sign;
