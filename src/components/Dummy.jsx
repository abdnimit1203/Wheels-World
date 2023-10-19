import { FaCarAlt, FaFireExtinguisher } from 'react-icons/fa';
import {BsThermometerSnow } from 'react-icons/bs';
import {GiCarWheel } from 'react-icons/gi';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


const Dummy = () => {
   
  return (
    <>
      <div className="bg-blue-800">
        <h2>DUM DUM</h2>
      </div>
      {/* div 1 */}
      <div className="flex flex-col justify-center items-center py-16 gap-4">
        <h2 className="text-5xl">BOXSTER</h2>
        <p className="text-lg text-gray-500">Get the Porche You always Wanted</p>
        <p className="text-gray-500">per month</p>
        <h3 className="uppercase text-xl">Limited time offer</h3>
        <button className="btn btn-primary font-bold">More DEtails</button>
      </div>

      {/* div 2 */}
      <div className="flex flex-col justify-center items-center gap-4 p-10 md:px-[15%]">
        <p className="text-lg text-gray-500">We are trusted in Car Sales and Services</p>
        <h2 className="text-5xl uppercase font-semibold">Why Choose Us</h2>
        <p className="text-lg text-gray-500 text-center py-6">Car Dealer is the most enticing creative modern and multipurpose outo dealer <br />
        Suitable for any car dealer websites business or corporate websites The Theme has been Created especially for automotive dealers, car resellers car service <br />
        stations, mechanic workshop and auto motor retailers</p>
        <hr className='py-10'/>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='bg-gray-200 p-10 rounded-full '><span className='text-4xl text-orange-500'><FaFireExtinguisher /></span></button>
                <h2 className='lg:text-base mt-4 text-center'>OIL CHANGES</h2>
                <hr className='border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl' />
                <p className='text-center text-gray-400'>Golley simply dummy text emm is of the printinxa of type and</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='bg-gray-200 p-10 rounded-full '><span className='text-4xl text-orange-500'><FaCarAlt /></span></button>
                <h2 className='lg:text-base mt-4 text-center'>AUTO ELECTRIC</h2>
                <hr className='border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl' />
                <p className='text-center text-gray-400'>Golley simply dummy text emm is of the printinxa of type and</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='bg-gray-200 p-10 rounded-full '><span className='text-4xl text-orange-500'><BsThermometerSnow /></span></button>
                <h2 className='lg:text-base mt-4 text-center'>AIR CONDITIONING</h2>
                <hr className='border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl' />
                <p className='text-center text-gray-400'>Golley simply dummy text emm is of the printinxa of type and</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='bg-gray-200 p-10 rounded-full '><span className='text-4xl text-orange-500'><GiCarWheel /></span></button>
                <h2 className='lg:text-base mt-4 text-center'>TIRE & WHEEL SERVICE</h2>
                <hr className='border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl' />
                <p className='text-center text-gray-400'>Golley simply dummy text emm is of the printinxa of type and</p>
            </div>
        </div>
      </div>
      <img src="https://i.ibb.co/fn9QB24/loginBG.jpg" alt="" />
      <button
        onClick={() =>
          Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "white",
            background: "#fff url(/images/loginBG.jpg)", 
            
            backdrop: `
    rgba(0,0,123,0.4)
    url("https://cdn.dribbble.com/users/330915/screenshots/9148258/5_dribbble.gif")
    left top
    no-repeat
  `,
          })
        }
      >
        CLick me
      </button>
      <button onClick={()=>{toast.success('Here is your toast')}} className='btn btn-error'>Hot toast</button>
     
    </>
  );
};

export default Dummy;
