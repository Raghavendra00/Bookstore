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

const Login = ({ handleClose }) => {
  const baseURL = "http://localhost:5500";
  const classes = useStyles();
  // create state variables for each input
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    //   handleClose();
    axios
      .post(`${baseURL}/getdata`, {
       
        email,
        password
      
      })
      .then((res) => {
        console.log("Response:",res);
        if (res.data.code === 1) {
          alert('Login Successfully')
        }
        else if(res.data.code === -1) {
          alert('Wrong Password')
        }
        else if (res.data.code === -2) {
          alert('Email/User Doesnt Exist')
        }
        else {
          alert('Try Again')
        }
      });
  };

  return (
    <div className="back">
      <form className={classes.root} onSubmit={handleSubmit}>
       
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
     
    
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login