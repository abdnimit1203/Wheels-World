const Sales = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/XXSyFfy/bg.jpg)] bg-cover ">
      <div className="flex flex-col md:flex-row gap-4 p-10 md:px-[15%]">
        <div className="w-fit flex-1">
          <img
            src="https://i.ibb.co/1KS9v1T/carsale.png"
            alt="porche Sale"
            className=" w-fit "
          />
        </div>

        <div className="flex flex-col justify-center items-center py-16 gap-4 flex-1">
          <h2 className="text-5xl text-white">718 BOXSTER</h2>
          <p className="text-lg glass text-gray-300">
            Get the Porche You always Wanted
          </p>
          <p className="text-gray-500">per month</p>
          <h3 className="uppercase text-xl text-white">Limited time offer</h3>
          <button className="btn btn-primary font-bold">More DEtails</button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
