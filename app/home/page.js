"use client";

import React, { useEffect, useState } from "react";
import App from "../components/pages/App";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const status = localStorage.getItem("Status");

    if (status != 1) {
      router.push("/");
    }
  }, []);

  return (
    <div className="relative">
      <App />
    </div>
  );
};

export default page;
