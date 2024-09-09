"use client";

import React, { useEffect } from "react";
import App from "../components/pages/App";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      <div className="px-2 fixed -bottom-28">
        <Image
          src={"/Ash Ketchum Logo.svg"}
          className="relative"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Page;
