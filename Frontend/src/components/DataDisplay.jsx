import React from "react";

const DataDisplay = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((headline, idx) => (
        <div
          key={idx}
          className="p-4 bg-gray-100 rounded shadow hover:shadow-lg transition"
        >
          <p className="text-gray-800">{headline}</p>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
