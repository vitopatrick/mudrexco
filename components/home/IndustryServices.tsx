import Link from "next/link";
import React from "react";

const IndustryServices = () => {
  return (
    <div className="my-[5rem]">
      <div className="lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="space-y-3">
          <h4 className="text-2xl lg:text-4xl text-purple-800 font-medium">
            Coin Sets
          </h4>
          <p>Theme based crypto baskets</p>
          <ul className="space-y-5 list-outside">
            <li>Passively re-balanced to keep your investments updated</li>
            <li>Diversify for risk management</li>
            <li>Invest systematically in themes you like</li>
          </ul>
          {/* achivment */}
          <div className="flex gap-4">
            <div className="text-center space-y-1">
              <h3 className="font-medium text-purple-900 text-3xl">20+</h3>
              <p className="text-neutral-400">Themes</p>
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-medium text-purple-900 text-3xl">750k+</h3>
              <p className="text-neutral-400">Invested Users</p>
            </div>
          </div>
          {/* get started */}
          <Link
            href="/get-started"
            className="inline-block px-6 py-3 rounded-lg bg-purple-900 text-white capitalize"
          >
            Get Started today
          </Link>
        </div>
        <div>
          <img
            src="https://images.mudrex.com/homepage-web/coinset-ui-desktop.webp"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryServices;
