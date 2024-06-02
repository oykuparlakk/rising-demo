import Close from "./icons/Close";

const Offer = () => {
  return (
    <div className="container h-12 w-8/12 bg-primary-300 bg-opacity-30 flex items-center px-5 justify-between rounded-lg">
      <p className="text-sm	leading-4 font-medium text-black">
        Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card. {' '}
        <span className="underline cursor-pointer">Start Free Trial</span>
      </p>
      <button className="text-white">
        <Close />
      </button>
    </div>
  );
};

export default Offer;
