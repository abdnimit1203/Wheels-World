import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" p-10 bg-slate-800 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-2">
        <aside className="col-span-2 md:col-span-1">
          <h2 className="text-2xl">ABDS WHEELS WORLD</h2>
          <p className="py-2">Your dream car is one step away</p>
          <p className="pb-6">
          We are trusted in Car Sales and Services
        </p>
        </aside>
        <nav className="col-span-1 flex flex-col">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="col-span-1 flex flex-col">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="col-span-1 flex flex-col">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div>
      <p className="text-center pt-10 text-gray-400">&copy; All rights reserved || Made with ♥ by <Link to={'https://github.com/abdnimit1203' } target="_blank" className="underline block sm:inline">ABD NIMIT</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
