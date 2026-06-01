import React from "react";
import PricingCard from "../components/PricingCard";
import { Package, X, Check, Gem, Crown } from "lucide-react";

const features = {
  starterY: {},
};

const Pricing = () => {
  return (
    <div className="bg-[#0F172A]">
      <h1 className="text-4xl font-bold text-(--text) text-center ">Pricing</h1>
      <div
        id="pricing"
        className="flex md:flex-row flex-col gap-3 md:gap-5 items-center justify-center bg-[#0F172A] h-full "
      >
        <PricingCard
          logo={<Package className="size-10 text-(--muted)" />}
          plan="Starter"
          features={
            <ul className="flex flex-col gap-1 items-start">
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                10 links
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />5 QR Code
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                Unlimited Clicks
              </li>
              <li className="flex gap-2 text-(--muted)">
                <X className="text-(--danger)" />
                AD removal
              </li>
              <li className="flex gap-2 text-(--muted)">
                <X className="text-(--danger)" />
                Custom domain
              </li>
              <li className="flex gap-2 text-(--muted)">
                <X className="text-(--danger)" />
                Advance analytics
              </li>
              <li className="flex gap-2 text-(--muted)">
                <X className="text-(--danger)" />
                Priority support
              </li>
            </ul>
          }
          price={"$5"}
        />
        <PricingCard
          logo={<Gem className="size-10 text-(--muted)" />}
          plan="Basic"
          features={
            <ul className="flex flex-col gap-1 items-start">
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                50 links
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                25 QR Code
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                Unlimited Clicks
              </li>
              <li className="flex gap-2 text-(--muted)">
                <X className="text-(--danger)" />
                AD removal
              </li>
              <li className="flex gap-2 text-(--muted)">
                <X className="text-(--danger)" />
                Custom domain
              </li>
              <li className="flex gap-2 text-(--muted)">
                <X className="text-(--danger)" />
                Advance analytics
              </li>
              <li className="flex gap-2 text-(--muted)">
                <X className="text-(--danger)" />
                Priority support
              </li>
            </ul>
          }
          price={"$10"}
        />
        <PricingCard
          logo={<Crown className="size-10 text-(--muted)" />}
          plan="Premium"
          features={
            <ul className="flex flex-col gap-1 items-start">
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                1000 links
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />5 QR Code
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                Unlimited Clicks
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                AD removal
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                Custom domain
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                Advance analytics
              </li>
              <li className="flex gap-2 text-(--text)">
                <Check className="text-(--success)" />
                Priority support
              </li>
            </ul>
          }
          price={"$15"}
        />
      </div>
    </div>
  );
};

export default Pricing;
