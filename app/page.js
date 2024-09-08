"use client";

import { Fragment, useEffect, useState } from "react";
import api from "./api/api";
import App from "./components/pages/App";
import Login from "./components/pages/Login";

export default function Home() {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}
