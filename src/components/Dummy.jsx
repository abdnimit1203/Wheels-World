import { FaCarAlt, FaFireExtinguisher } from 'react-icons/fa';
import {BsThermometerSnow } from 'react-icons/bs';
import {GiCarWheel } from 'react-icons/gi';

const Dummy = () => {
  return (
    <>
      <div className="bg-blue-800">
        <h2>DUM DUM</h2>
      </div>
      {/* div 1 */}
      <div className="flex flex-col justify-center items-center py-16 gap-4">
        <h2 className="text-5xl">BOXSTER</h2>
        <p className="text-gray-500">Get the Porche You always Wanted</p>
        <p className="text-gray-500">per month</p>
        <h3 className="uppercase ">Limited time offer</h3>
        <button className="btn btn-primary font-bold">More DEtails</button>
      </div>

      {/* div 2 */}
      <div className="flex flex-col justify-center items-center gap-4 p-10 md:px-[15%]">
        <p className="text-gray-500">We are trusted in Car Sales and Services</p>
        <h2 className="text-5xl uppercase font-semibold">Why Choose Us</h2>
        <p className="text-gray-500">Car Dealer is the most enticing creative modern and multipurpose outo dealer <br />
        Suitable for any car dealer websites business or corporate websites The Theme has been Created especially for automotive dealers, car resellers car service <br />
        stations, mechanic workshop and auto motor retailers</p>
        <h2 className="text-3xl">$450</h2>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='bg-gray-200 p-10 rounded-full '><span className='text-4xl text-orange-500'><FaFireExtinguisher /></span></button>
                <h2 className='text-xl mt-4 text-center'>OIL CHANGES</h2>
                <hr className='border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl' />
                <p className='text-center text-gray-400'>Golley simply dummy text emm is of the printinxa of type and</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='bg-gray-200 p-10 rounded-full '><span className='text-4xl text-orange-500'><FaCarAlt /></span></button>
                <h2 className='text-xl mt-4 text-center'>AUTO ELECTRIC</h2>
                <hr className='border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl' />
                <p className='text-center text-gray-400'>Golley simply dummy text emm is of the printinxa of type and</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='bg-gray-200 p-10 rounded-full '><span className='text-4xl text-orange-500'><BsThermometerSnow /></span></button>
                <h2 className='text-xl mt-4 text-center'>AIR CONDITIONING</h2>
                <hr className='border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl' />
                <p className='text-center text-gray-400'>Golley simply dummy text emm is of the printinxa of type and</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='bg-gray-200 p-10 rounded-full '><span className='text-4xl text-orange-500'><GiCarWheel /></span></button>
                <h2 className='text-xl mt-4 text-center'>TIRE & WHEEL SERVICE</h2>
                <hr className='border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl' />
                <p className='text-center text-gray-400'>Golley simply dummy text emm is of the printinxa of type and</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Dummy;