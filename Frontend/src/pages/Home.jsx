import React, { useEffect, useState } from "react";
import axios from "axios";
import DataDisplay from "../components/DataDisplay";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchScrapedData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000");
      setData(res.data.headlines);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchScrapedData();
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-10 max-w-3xl mx-auto shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Top News Headlines
      </h2>
      <button
        onClick={fetchScrapedData}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {loading ? "Loading..." : "Refresh"}
      </button>

      <DataDisplay data={data} />
    </div>
  );
};

export default Home;
