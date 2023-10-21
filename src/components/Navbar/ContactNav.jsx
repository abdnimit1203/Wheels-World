import { BiCalendarWeek, BiLogoGmail, BiPhoneCall } from "react-icons/bi";

const ContactNav = () => {
  return (
    <div className="w-full py-2 bg-slate-800 text-white flex justify-between px-4 sm:px-[10%] items-center text-xs ">
      <div>
      <p className="flex items-center gap-2 ">
          {" "}
           <BiLogoGmail className="text-red-400 text-xl"/>admin@wheelsworld.com
        </p>
        <p className="flex items-center gap-2">
          {" "}
          We are available: <BiCalendarWeek /> SUNDAY - THURSDAY
        </p>
        
      </div>
      <div>
        <p className="flex sm:gap-3 items-center justify-center">
          <BiPhoneCall /> +9999 898 000 111
        </p>
        <p className="flex sm:gap-3 items-center justify-center">
          <BiPhoneCall /> +9999 800 999 111
        </p>
      </div>
    </div>
  );
};

export default ContactNav;
