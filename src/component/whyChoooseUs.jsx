import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGlobe,
  FaAnchor,
  FaHourglass,
  FaDatabase,
  FaCloudUploadAlt,
  FaCamera,
} from "react-icons/fa";

const FeatureItem = ({ IconComponent, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);
  return (
    <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-8 px-4">
      <div className="bg-white text-center p-8 shadow-lg rounded-lg border border-gray-200 transition duration-500 ease-in-out transform hover:bg-blue-400 hover:text-white">
        <IconComponent className="inline-block text-red-500 text-4xl mb-6" />
        <h6 className="mb-4">{title}</h6>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-20" data-aos="zoom-in">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full text-center mb-12">
            <h4 className="text-red-500 text-3xl font-semibold mb-4">
              Why Choose Us?
            </h4>
            <p className="text-gray-600" data-aos="fade-left">
              When you choose us, you'll feel the benefit of 10 years'
              experience of Web Development. Because we know the digital world
              and we know that how to handle it. With working knowledge of
              online, SEO and social media.
            </p>
          </div>
          <FeatureItem
            IconComponent={FaGlobe}
            title="Modern Design"
            description="We use the latest technology for the latest world because we know the demand of peoples."
            data-aos="zoom-in-up"
          />
          <FeatureItem
            IconComponent={FaAnchor}
            title="Creative Design"
            description="We are always creative and always listen to our customers, and we mix these two things and make the best design."
          />
          <FeatureItem
            IconComponent={FaHourglass}
            title="24 x 7 User Support"
            description="If our customer has any problem and any query we are always happy to help then."
          />
          <FeatureItem
            IconComponent={FaDatabase}
            title="Business Growth"
            description="Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it."
          />
          <FeatureItem
            IconComponent={FaCloudUploadAlt}
            title="Market Strategy"
            description="Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine."
          />
          <FeatureItem
            IconComponent={FaCamera}
            title="Affordable cost"
            description="Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
