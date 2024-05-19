import Link from "next/link";
import React from "react";

type Props = {};

const achivments = [
  {
    id: 1,
    text: "$25M+",
    props: "Assets Under Management",
  },
  {
    id: 2,
    text: "2M+",
    props: "Invested Users",
  },
  {
    id: 3,
    text: "96%",
    props: "Customer Satisfaction Score",
  },
];

const Hero = (props: Props) => {
  return (
    <div className="mt-5">
      <div className="text-center ">
        <h3 className="text-2xl lg:text-6xl font-medium">
          Buy, Sell & Hold Crypto
        </h3>
        <div className="space-y-4 my-6">
          <p className="text-neutral-400">
            Invest in 350+ Coins and crypto baskets with actionable insights at
            your fingertips
          </p>
          <p>We are Financial Intelligence Unit (FIU) registered.</p>
        </div>
        <Link
          href="/get-started"
          className="inline-block bg-purple-800 text-white px-6 py-3 rounded-lg my-8"
        >
          Get Started
        </Link>
        <div className="flex items-center justify-center gap-4 flex-col lg:flex-row">
          {achivments.map((c) => (
            <div key={c.id} className="space-y-3">
              <h4 className="text-2xl lg:text-4xl font-medium text-purple-800">
                {c.text}
              </h4>
              <p className="text-neutral-400">{c.props}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
