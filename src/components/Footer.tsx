import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Input } from './ui/input';
import Image from 'next/image';
import LOGO from '../assests/Footer_logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center">
            <Image src={LOGO} alt='logo' height={30}/>
          </div>
          <p className="mt-2">© 2020 Nexcent ltd. All rights reserved</p>
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="h-6 w-6" />
            <FaDribbble className="h-6 w-6" />
            <FaTwitter className="h-6 w-6" />
            <FaYoutube className="h-6 w-6" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay up to date</h4>
          <div className="flex">
            <Input
              type="email"
              placeholder="Your email address"
              className="text-black flex-1 rounded-l-md px-4 py-2"
            />
            <button className="bg-gray-700 text-white rounded-r-md px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h16v16H4V4zm0 0v16V4zm0 0h16V4 4zM4 4L20 20M4 20L20 4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
