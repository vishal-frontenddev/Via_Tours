import React from 'react'
import image from './assets/image.png'

// choose tour
import TourzCard from './components/TourzCard';

import ticket from './assets/ticket.svg.png';
import bulb from './assets/hot-air-balloon.svg.png'
import diamond from './assets/diamond.svg.png'
import medal from './assets/medal.svg.png'

// destination card
import DestinationCard from './components/DestinationCard';


// swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // ✅ Include Autoplay

import 'swiper/css';


// imgTrendingDestination
import paris from './assets/paris.png';
import singapore from './assets/singapore.jpg';
import roma from './assets/roma.jpg';
import bangkok from './assets/bangkok.jpg';
import bali from './assets/bali.jpg';
import phuket from './assets/phuket.webp';
import tokyo from './assets/tokyo.jpg';
import cappadocia from './assets/cappadocia.jpg';


// tourCard
import TourCard from './components/TourCard';

// img
import parisFrance from './assets/parisfrance.png'
import newYorkUsa from './assets/NewYork2.png'
import londonUk from './assets/London,UK.2.png'
import USnewYork from './assets/NewYork,USA.png'
import franceParish from './assets/parishFrance2.png'
import UsnewYork from './assets/New_usa.png'
import UKlondon from './assets/bali.jpg'
import NewUSa from './assets/New_usa.2.png'


// banner img
import parachute from './assets/parachute.png'

// footer
import Footer from './components/Footer';


const Destination = () => {

  // chooseTourdJSON
  let features = [
    {
      img: ticket,
      title: 'Ultimate Flexibility',
      desc: 'You’re in control, with free cancellation and payment options to satisfy any plan or budget.',
    },

    {
      img: bulb,
      title: 'Memorable experiences",',
      desc: "Browse and book tours and activities so incredible, you'll want to tell your friends.",
    },

    {
      img: diamond,
      title: 'Uality at our core',
      desc: "High-quality standards. Millions of reviews. A tourz company.",
    },

    {
      img: medal,
      title: "Award-winning support",
      desc: 'You’re in control, with free cancellation and payment options to satisfy any plan or budget.',
    },
  ];


  let destinations = [
    { img: paris, city: 'Paris', tours: '100+ Tours' },
    { img: singapore, city: 'Singapore', tours: '300+ Tours' },
    { img: roma, city: 'Rome', tours: '400+ Tours' },
    { img: bangkok, city: 'Bangkok', tours: '100+ Tours' },
    { img: bali, city: 'Bali', tours: '600+ Tours' },
    { img: phuket, city: 'Phuket', tours: '200+ Tours' },
    { img: tokyo, city: 'Tokyo', tours: '700+ Tours' },
    { img: cappadocia, city: 'Cappadocia', tours: '900+ Tours' },
  ];

  const tours = [
    {
      image: parisFrance,
      location: "Paris, France",
      title: "Centipede Tour – Guided Arizona Desert Tour by ATV",
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 189.25,
    },
    {
      image: newYorkUsa,
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 225,
    },
    {
      image: londonUk,
      location: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 943,
    },
    {
      image: USnewYork,
      location: "New York, USA",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 771,
    },
    {
      image: franceParish,
      location: "Paris, France",
      title: "Space Center Houston Admission Ticket",
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 189.25,
    },
    {
      image: UsnewYork,
      location: "New York, USA",
      title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 225,
    },
    {
      image: UKlondon,
      location: "London, UK",
      title: "History and Hauntings of Salem Guided Walking Tour",
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 943,
    },
    {
      image: NewUSa,
      location: "New York, USA",
      title: "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up",
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 771,
    },
  ];

  return (
    <>

      <div id='destination-sec' className="relative h-[90vh] w-full bg-cover bg-center text-white overflow-x-hidden" style={{ backgroundImage: `url(${image})` }}>
        {/* Overlay */}
        <div id='destination-main' className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your world of joy</h1>
          <p className="text-sm md:text-lg mb-10 max-w-xl">From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>

          {/* Search Box */}
          <div className="bg-white rounded-full shadow-lg p-4 w-full max-w-5xl flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
            {/* Where */}
            <div className="flex flex-col text-left px-4 w-full md:w-auto">
              <label className="text-xs font-semibold text-gray-500">Where</label>
              <input
                type="text"
                placeholder="Search destinations"
                className="outline-none text-gray-800 w-full"
              />
            </div>

            {/* When */}
            <div className="flex flex-col text-left px-4 border-t md:border-t-0 md:border-l border-gray-300 w-full md:w-auto">
              <label className="text-xs font-semibold text-gray-500">When</label>
              <input
                type="text"
                placeholder="February 05 - March 14"
                className="outline-none text-gray-800 w-full"
              />
            </div>

            {/* Tour Type */}
            <div className="flex flex-col text-left px-4 border-t md:border-t-0 md:border-l border-gray-300 w-full md:w-auto">
              <label className="text-xs font-semibold text-gray-500">Tour Type</label>
              <input
                type="text"
                placeholder="All tour"
                className="outline-none text-gray-800 w-full"
              />
            </div>

            {/* Search Button */}
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full mt-2 md:mt-0 hover:bg-orange-600 transition-all">
              Search
            </button>
          </div>
        </div>

      </div>



      {/* tourz-card */}

      <section id="tourz-sec" className="pt-17 pb-10  flex justify-center items-center flex-col">
        <div id="tourz-head" className=' w-[62%] text-3xl font-bold'><h2>WHy Choose Tourz</h2></div>
        <div id="tourz-sec-main" className="w-[65%] h-[auto]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {features.map((det, index) => (
            <TourzCard
              key={index}
              tourzCardImg={det.img}
              tourzHead={det.title}
              tourzPara={det.desc}
            />
          ))}
        </div>
      </section>



      {/* trending-detination */}

      <section id="trending-dest" className="w-full flex flex-col items-center py-10">
        <div className="w-[90%] md:w-[62%] md:text-3xl font-bold mb-6 text-3xl text-gray-900">
          Trending Destinations
        </div>

        <div id="trendingdesti-main" className=" w-[62%] md:">
          <Swiper
            modules={[Pagination, Autoplay]} // ✅ Add Autoplay module
            pagination={{ clickable: true }}
            slidesPerView={2}
            loop={true} // ✅ Enables infinite looping
            autoplay={{
              delay: 0,             // ✅ No delay between slide changes
              disableOnInteraction: false,
            }}
            speed={3000}
            spaceBetween={0}           // ✅ Control how fast it scrolls (higher = smoother)
            breakpoints={{
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
          >
            {destinations.map((item, index) => (
              <SwiperSlide key={index} className="px-[5px]">
                <DestinationCard
                  destinationImg={item.img}
                  destinationHead={item.city}
                  destinationPara={item.tours}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <section className="px-4 w-[100%] flex justify-center">
        <div id='tour-sec' className='w-[70%] md:px-8 lg:px-12 py-10'>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Find Popular Tours</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              See all
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
        </div>
      </section>


      {/* promo banner*/}
      <div className=" w-[100%] h-[50vh] flex justify-center mt-6 mb-20">
        <div className="bg-[#fff6ef] w-[64%]  rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-md">

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-[50px] sm:text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              Grab up to <span className="text-orange-500 font-bold">35% off</span><br />
              on your favorite <br />
              <span className="text-[#0f172a] font-bold">Destination</span>
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Limited time offer, don’t miss the opportunity
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-medium w-fit hover:bg-orange-600 transition">
              Book Now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full bg-amber-800 md:w-1/2">
            <img
              src={parachute} // Replace with your image path
              alt="Hot Air Balloons"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


      {/* footer */}

      <Footer />



    </>
  )
}

export default Destination