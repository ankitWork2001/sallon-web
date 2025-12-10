import React, { useEffect } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection1 = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="px-4 md:px-20 py-16 space-y-20 bg-gray-50">

      <div data-aos="fade-up" className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">About Us – Glownify</h1>
        <p className="mt-2 text-lg">India’s Modern Beauty & Grooming Platform</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        <div data-aos="fade-right" className="space-y-3 shadow hover:shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p>Glownify is India’s modern beauty and grooming platform built for everyone — men, women, and unisex users.</p>
          <p>We bring verified salons and skilled professionals together on a single digital platform.</p>
          <p>Whether you prefer salon visits or home services, Glownify ensures a smooth and delightful grooming experience.</p>
        </div>

        <div data-aos="fade-left" className="space-y-3 shadow hover:shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Our Purpose</h2>
          <p>To make beauty & grooming accessible, organised, and trusted for every Indian.</p>
          <p>We solve two real problems:</p>

          <ol className="list-decimal ml-6 space-y-2">
            <li>Customers struggle to find trusted salons & professionals</li>
            <li>Local salons lack online presence</li>
          </ol>

          <p>Glownify connects both sides through technology and trust.</p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <div data-aos="fade-up" className="space-y-3 shadow hover:shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>To deliver easy, transparent, hygienic, and time-saving beauty services — anytime, anywhere.</p>
        </div>

        <div data-aos="fade-up" className="space-y-3 shadow hover:shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p>To become India’s most trusted beauty-service marketplace where users feel confident and valued.</p>
        </div>

      </div>

      <div data-aos="zoom-in" className="space-y-4 shadow hover:shadow-md bg-white p-4 rounded-lg">
        <h2 className="text-2xl font-bold">What We Offer</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Salon booking for men & women",
            "At-home beauty & grooming services",
            "Verified, trained professionals",
            "Transparent pricing with no hidden fees",
            "Easy appointment scheduling",
            "Real customer reviews & ratings",
          ].map((item, i) => (
            <p key={i} className="flex items-center gap-2">
              <FaCheckCircle /> {item}
            </p>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div data-aos="fade-up" className="space-y-3 shadow hover:shadow-md bg-white p-4 rounded-lg">
        <h2 className="text-2xl font-bold">Our Philosophy</h2>
        <p>Grooming is not a luxury — it is self-care, confidence, and comfort.</p>
        <p>Every Glownify service is designed to be:</p>

        <ul className="ml-4 space-y-2 list-disc">
          <li>Convenient – because your time matters</li>
          <li>Affordable – no hidden charges</li>
          <li>Safe & Hygienic – trained, verified experts</li>
          <li>Inclusive – services for all genders</li>
        </ul>
      </div>

      {/* FOUNDER (PREMIUM CARD) */}
      <div
        data-aos="fade-up"
        className="p-6 md:p-10  space-y-3 shadow hover:shadow-md bg-white p-4 rounded-lg"
      >
        <h3 className="text-2xl font-bold">Meet the Founder – Abhishek Kumar</h3>
        <p>Abhishek Kumar, from IIIT Lucknow, is a technology-driven entrepreneur.</p>
        <p>He discovered that most local salons provide great service but lack digital presence.</p>
        <p>To bridge this gap, he created Glownify — a platform that empowers salons & connects customers to trusted professionals.</p>
        <p>His vision is to organise and modernize India’s beauty industry.</p>
      </div>

      {/* Commitment */}
      <div data-aos="zoom-in" className="space-y-3 shadow hover:shadow-md bg-white p-4 rounded-lg">
        <h2 className="text-2xl font-bold">Our Commitment</h2>

        <ul className="space-y-2">
          <li>⭐ A trusted platform for customers</li>
          <li>⭐ A digital growth ecosystem for salons</li>
          <li>⭐ Better earning opportunities for beauticians</li>
          <li>⭐ A safe, hygienic grooming experience</li>
        </ul>

        <p className="text-lg font-semibold pt-2">Glownify is not just an app —</p>
        <p className="text-xl">✨ It is a mission to upgrade India’s beauty & grooming experience.</p>
      </div>
    </div>
  );
};

export default AboutSection1;
