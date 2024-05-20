import React from "react";

type Props = {};

let services = [
  {
    id: 1,
    title: "100% compliant",
    description:
      "Registered with FIU-India and fully compliant by Indian and European standards",
    image: "https://images.mudrex.com/fiu_compliance_2/compliance.webp",
  },
  {
    id: 2,
    title: "Safe and insured funds",
    description:
      "None of your assets or funds are used by Mudrex without your permission",
    image:
      "https://images.mudrex.com/fiu_compliance_2/transfer_compliance.webp",
  },
  {
    id: 3,
    title: "1/1 expert support",
    description:
      "The easiest investment you'll ever make, with expert support just one call away",
    image: "https://images.mudrex.com/fiu_compliance_2/expert_compliance.webp",
  },
];

const OurServices = (props: Props) => {
  return (
    <div className="my-[5rem]">
      {/* container */}
      <section className="w-[80%] p-4 mx-auto">
        <h4 className="w-full capitalize  py-3 text-3xl font-medium text-center md:text-4xl">
          We make crypto investing easy for you
        </h4>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[2rem]">
          {services.map((service) => (
            <div key={service.id}>
              <div className="lg:w-[70%] mx-auto">
                <img src={service.image} alt="" className="rounded-md" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl my-2 font-medium">{service.title}</h4>
                <p className="text-sm font-body">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
