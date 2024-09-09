"use client";

import React, { useEffect, useState } from "react";

const LoginList = () => {
  const [loginRecords, setLoginRecords] = useState([]);

  useEffect(() => {
    const records = JSON.parse(localStorage.getItem("loginRecords")) || [];
    setLoginRecords(records);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">User Login Information</h1>
      {loginRecords.length > 0 ? (
        <table className="min-w-full bg-white text-black rounded-md">
          <thead>
            <tr>
              <th className="  px-4 py-2">User ID</th>
              <th className=" px-4 py-2">Username</th>
              <th className=" px-4 py-2">Login Time</th>
            </tr>
          </thead>
          <tbody>
            {loginRecords.map((record) => (
              <tr key={record.userId}>
                <td className="border px-4 py-2">{record.userId}</td>
                <td className="border px-4 py-2">{record.username}</td>
                <td className="border px-4 py-2">
                  {new Date(record.loginTime).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          <div className="w-full px-4 py-2  flex justify-center">
            © 2024 Pokemon. All Rights Reserved.
          </div>
        </table>
      ) : (
        <p>Tidak ada inquiry login</p>
      )}
    </div>
  );
};

export default LoginList;
