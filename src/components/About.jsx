import React from "react";
import logo from "../assets/images/logo_white.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="w-screen bg-black text-white dark:bg-slate-900 flex gap-20 justify-evenly align-super pt-10 pb-8 px-4">
        <div>
          <ul>
            <li>
              <img src={logo} alt="" />
            </li>
            <li className="py-4">
              <p>
                Experience the Perfect Fusion of Style and Luxury, Where <br />
                Elegance Meets Sophistication in Every Detail.
              </p>
            </li>
            <li>
              <p>
                <strong>Phone : </strong> +92 300 1234567
              </p>
            </li>
            <li>
              <p>
                <strong>Address : </strong> Model Town Lahore Pakistan
              </p>
            </li>
            <li>
              <p>
                <strong>Email : </strong> Somebody@somebody.com
              </p>
            </li>
          </ul>
        </div>
        <div className=" ul flex gap-10 text-left">
          <div>
            <h1 className="font-bold text-1xl">Our Company</h1>
            <ul className="mt-3">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Our Stories</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Size Guide</Link>
              </li>
              <li>
                <Link>My Account</Link>
              </li>
              <li>
                <Link>Timeline</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-1xl">Customer Service</h1>
            <ul className="mt-3 text-gray-50">
              <li className="">
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Theme FAQs</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Refund Policy</Link>
              </li>
              <li>
                <Link>Advanced Search</Link>
              </li>
              <li>
                <Link>Store Locations</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Sign up To Newsletter</h2>
          <p className="py-4">
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>
          <div>
            <input
              className="text-white border-2 my-2 py-2 px-2 rounded-2xl w-80"
              type="text"
              placeholder="Enter Your Name"
            />
            <button className="bg-white cursor-pointer text-black ms-5 p-3 rounded-3xl">
              Subscribe
            </button>
          </div>
          <p className="py-4">
            ***By entering the e-mail you accept the <b>terms and conditions</b>
            and the <b>privacy policy</b>.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
