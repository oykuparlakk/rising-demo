const Cards = () => {
    return (
      <div className="container w-9/12 flex items-center justify-start py-20">
        <div className="grid grid-cols-4 gap-4 w-full">
          <div className="flex flex-col items-start justify-center bg-primary-400 rounded-lg p-4 h-28">
            <h2 className="text-accent-900 text-sm leading-5 font-medium mb-2">Subscription expires on</h2>
            <p className="text-accent-900 leading-9 text-2xl">July 23, 2023</p>
          </div>

          <div className="flex flex-col items-start justify-center bg-primary-500 rounded-lg p-4 h-28">
            <h2 className="text-accent-900 text-sm leading-5 font-medium mb-2">Last charge</h2>
            <p className="text-accent-900 leading-9 text-2xl">$50 <span className="text-sm">on June 23, 2023 </span></p>
          </div>
        
          <div className="flex flex-col items-start justify-center bg-primary-400 rounded-lg p-4 h-28">
            <h2 className="text-accent-900 text-sm leading-5 font-bold mb-2">Total Usage Data</h2>
            <p className="text-accent-900 leading-9 font-bold text-2xl">36.025 GB</p>
          </div>

          <div className="flex flex-col items-start justify-center bg-primary-500 rounded-lg p-4 h-28">
            <h2 className="text-accent-900 text-sm leading-5 font-bold  mb-2">Daily Usage Data</h2>
            <p className="text-accent-900 leading-9 text-2xl font-bold">1.025 GB</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;
  