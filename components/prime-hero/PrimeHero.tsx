const images = [
  "https://images.mudrex.com/web/etf_campaign/y-comb-partner.webp",
  "https://images.mudrex.com/web/etf_campaign/nexus-partner.webp",
  "https://images.mudrex.com/web/etf_campaign/arkam-partner.webp",
  "https://images.mudrex.com/web/etf_campaign/tribe.webp",
];

const PrimeHero = () => {
  return (
    <div className="text-center my-6 p-5 space-y-5">
      <h4 className="text-3xl lg:text-4xl text-purple-900 font-medium">
        Mudrex Prime
      </h4>
      <p>
        Premium white-glove global OTC services catering to institutions and
        high-net-worth individuals.
      </p>
      <div className="space-y-4">
        <h4 className="text-2xl text-purple-800 font-medium">
          Backed by World Class Investors
        </h4>
        <p>
          We are backed by some of the most forward-thinking firms, angel
          investors, founders, <br /> and operators in the crypto ecosystem and
          fin-tech.
        </p>
        <p>Acknowledged By:</p>
        <div className="flex gap-6 flex-col lg:flex-row items-center justify-evenly mx-auto lg:w-[60%]">
          {images.map((im) => (
            <div>
              <img src={im} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimeHero;
