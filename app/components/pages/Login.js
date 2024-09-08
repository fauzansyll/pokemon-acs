import React, { useEffect, useState } from "react";
import style from "./Login.module.scss";
import { useRouter } from "next/navigation";
import Button from "../atoms/Button";
import { v4 as uuidv4 } from "uuid"; // Import UUID library for generating unique user IDs

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newusername, setNewUsername] = useState("");
  const [newpassword, setNewPassword] = useState("");

  const [changePassword, setChangePassword] = useState(true);
  const router = useRouter();
  const [alert, setAlert] = useState("");

  let dummyAccount = {
    username: "john",
    password: "password",
  };

  const [account, setAccount] = useState(dummyAccount);

  useEffect(() => {
    localStorage.setItem("Status", 0);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (newusername && newpassword) {
      setAccount({ username: newusername, password: newpassword });
      setChangePassword(false);
    } else {
      setAlert("Please fill all the fields");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === account.username && password === account.password) {
      const userId = uuidv4();
      const loginTime = new Date().toISOString();

      const userLoginInfo = { userId, username, loginTime };

      const existingRecords =
        JSON.parse(localStorage.getItem("loginRecords")) || [];

      existingRecords.push(userLoginInfo);

      localStorage.setItem("loginRecords", JSON.stringify(existingRecords));

      localStorage.setItem("Status", 1);
      if (localStorage.getItem("Status") == 1) {
        router.push("/inquiry");
      }
    } else {
      setAlert("Invalid username or password");
    }
  };

  return (
    <div className={`${style.main}`}>
      {!changePassword ? (
        <form
          className="bg-white text-black p-5 w-2/3 rounded-md "
          onSubmit={handleLogin}
          autoComplete="off"
        >
          <h1 className="text-2xl py-5 text-center">Login</h1>
          <div className="w-full flex flex-col gap-5">
            {alert && (
              <p className="text-red-500 text-center text-sm">{alert}</p>
            )}
            <label>Username</label>
            <input
              id="username"
              type="text"
              autoComplete="false"
              className="border-2 border-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              autoComplete="false"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <Button onClick={handleLogin}>Sign In</Button>
            <Button onClick={() => setChangePassword(!changePassword)}>
              Change Password
            </Button>
          </div>
        </form>
      ) : (
        <form
          className="bg-white text-black p-5 w-2/3 rounded-md "
          onSubmit={handleChange}
          autoComplete="off"
        >
          <h1 className="text-2xl py-5 text-center">Change Password</h1>
          <div className="w-full flex flex-col gap-5">
            <label>New Username</label>
            <input
              id="newusername"
              type="text"
              autoComplete="false"
              className="border-2 text-black border-black"
              value={newusername}
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
            <label>New Password</label>
            <input
              type="password"
              id="newpassword"
              autoComplete="false"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <Button onClick={handleChange}>Change Password</Button>
            <Button onClick={() => setChangePassword(!changePassword)}>
              Back to Login
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
