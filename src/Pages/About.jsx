import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/kayi.png";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={Logo} alt="Kayi Tribe Restaurant Logo" className="h-16 mb-8" />
      <h1 className="text-3xl font-bold mb-2">About Kayi Tribe Restaurant</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        We are a restaurant that specializes in authentic Turkish cuisine,
        inspired by the Kayi Tribe from the Ottoman Empire.
      </p>
      <div className="flex space-x-4 mb-8">
        <a
          href="https://www.facebook.com/kayitriberestaurant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-3xl text-gray-600 hover:text-blue-500 transition-colors duration-200" />
        </a>
        <a
          href="https://twitter.com/kayitriberesto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-3xl text-gray-600 hover:text-blue-400 transition-colors duration-200" />
        </a>
        <a
          href="https://www.instagram.com/kayitriberestaurant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-3xl text-gray-600 hover:text-pink-500 transition-colors duration-200" />
        </a>
      </div>
      <p className="text-lg text-center max-w-2xl mb-8">
        At Kayi Tribe Restaurant, we are committed to providing our customers
        with the best possible dining experience. We use only the freshest and
        highest quality ingredients, sourced from local suppliers whenever
        possible.
      </p>
      <p className="text-lg text-center max-w-2xl mb-8">
        Our menu features a wide range of dishes, from classic Turkish kebabs to
        vegetarian and gluten-free options. We also offer a selection of
        desserts and drinks, including Turkish coffee and tea.
      </p>
      <p className="text-lg text-center max-w-2xl mb-8">
        Whether you're looking for a romantic dinner for two, a family
        gathering, or a business lunch, Kayi Tribe Restaurant has something for
        everyone. We look forward to welcoming you soon!
      </p>
      <Link
        to="/"
        className="text-lg text-gray-600 hover:text-blue-500 transition-colors duration-200"
      >
        Back to home
      </Link>
    </div>
  );
}

export default AboutPage;
