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

      <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-red-500" />
      <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-500" />
      <Button title="Large Rounded-full" styles="text-lg rounded-full bg-purple-500" />

    </div>
  );
};

export default Landing;
