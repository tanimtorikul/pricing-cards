import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const {name , price, features} = option;
  return <div className="bg-blue-500 rounded-lg p-6 flex flex-col text-white shadow-lg">
  <h2 className="text-center text-4xl font-extrabold">
    <span className="text-5xl">{`$${price}`}</span>
    <span className="text-2xl ml-1">/month</span>
  </h2>
  <h4 className="text-2xl my-6 text-center font-semibold">{name}</h4>
  <div className="flex-grow">
    {features.map((feature, idx) => (
      <Feature key={idx} feature={feature} />
    ))}
  </div>
  <button className="mt-6 bg-green-500 w-full py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 text-white">
    Buy Now
  </button>
</div>
};

export default PriceOption;
