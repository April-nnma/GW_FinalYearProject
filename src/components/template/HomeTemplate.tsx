import React, { useEffect, useState } from "react";

export const HomeTemplate = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the URL with your desired API endpoint
        const response = await fetch("http://localhost:3000/user/getUser");
        const result = await response.text();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from custom endpoint:</h1>
      <p>{data}</p>
    </div>
  );
};

export default HomeTemplate;
