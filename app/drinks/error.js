"use client";

const error = (error) => {
  console.log(error);
  return (
    // <div className="text-error">There was an error</div>
    <div className="text-error">{error.error.message}</div>
  );
};

export default error;
