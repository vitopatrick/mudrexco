import Link from "next/link";
import React from "react";

type Props = {};

const ForBrokers = (props: Props) => {
  return (
    <div className="my-4 bg-gradient-to-br from-purple-200 via-sky-200 to-purple-400 py-[3rem] lg:w-[60%] mx-auto rounded-lg flex px-4 items-center justify-between">
      <div className="space-y-4">
        <h4 className="text-purple-900 text-3xl lg:text-4xl font-medium">
          Keen to start investing in the <br />
          Bitcoin Spot ETF?
        </h4>
        <Link
          href="/get-started"
          className="bg-purple-900 px-6 py-3 rounded-lg text-white inline-block"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default ForBrokers;
