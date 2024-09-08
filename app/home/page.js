"use client";

import React, { useEffect } from "react";
import App from "../components/pages/App";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const status = localStorage.getItem("Status");

    if (status != 1) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="relative">
      <App />
    </div>
  );
};

export default Page;
