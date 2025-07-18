import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      
      {/* Single Card */}
      <Card />

      {/* Multiple Cards */}
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
