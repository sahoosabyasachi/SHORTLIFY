import React from "react";
import { Package, X, Check } from "lucide-react";

const PricingCard = (props) => {
  return (
    <div className="bg-[#334155] flex flex-col gap-3 items-center justify-center px-10 py-5 m-10 rounded-xl">
      {props.logo}
      <h1 className="text-2xl font-semibold text-(--text)">{props.plan}</h1>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-sm text-(--text) ml-0.5">Features</p>
        {props.features}
      </div>
      <div className="text-(--text) text-xl font-bold">{props.price}</div>
      <button className="bg-(--starter) w-full px-auto py-1 rounded hover:scale-105 transition-all duration-200 text-(--text-primary)">Start Free</button>
    </div>
  );
};

export default PricingCard;
