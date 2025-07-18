import Button from "@/components/Button";
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

      <div className="flex flex-col gap-3 mt-4">
        <Button title="Small Rounded-sm" style="text-sm rounded-sm bg-blue-500" />
        <Button title="Medium Rounded-md" style="text-base rounded-md bg-green-500" />
        <Button title="Large Rounded-full" style="text-lg rounded-full bg-purple-500" />
      </div>

    </div>
  );
};

export default Landing;
