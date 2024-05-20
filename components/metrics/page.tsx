const achivments = [
  {
    id: 1,
    text: "100M+",
    props: "Transaction Volume",
  },
  {
    id: 2,
    text: "200+",
    props: "Institutional Clients",
  },
  {
    id: 3,
    text: "100%",
    props: "Compliant in India and the EU & US",
  },
];
const Metrics = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 flex-col lg:flex-row">
        {achivments.map((c) => (
          <div key={c.id} className="space-y-3 text-center">
            <h4 className="text-3xl lg:text-5xl font-medium text-purple-800">
              {c.text}
            </h4>
            <p className="text-neutral-400">{c.props}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
