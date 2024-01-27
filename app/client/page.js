"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4 ">{count}</h1>
      <div className="flex flex-row gap-4 mb-4">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
      <button className="btn btn-primary" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default ClientPage;
