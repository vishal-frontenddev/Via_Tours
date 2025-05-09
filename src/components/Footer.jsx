import React from 'react'
import footbg from '../assets/bg.svg fill.png'

const Footer = () => {
  return (
    <>

      <div id='footer-sec' className='w-full flex justify-center'>
        <div id='footer' className='w-[95%] h-[600px] flex justify-center bg-cover bg-center"' style={{ backgroundImage: `url(${footbg})` }}>
          <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-18 mt-10 flex text-[20px] justify-between pl-50 pr-50">
              <p>
                Speak to our expert at <span className="text-orange-500 font-semibold">1-800-453-6744</span>
              </p>

              <p>Follow us</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p>328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
                <a href="mailto:hi@viatours.com" className="text-blue-600 underline block mt-1">
                  hi@viatours.com
                </a>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-2">Company</h3>
                <ul className="space-y-1">
                  <li>About Us</li>
                  <li>Tourz Reviews</li>
                  <li>Contact Us</li>
                  <li>Travel Guides</li>
                  <li>Data Policy</li>
                  <li>Cookie Policy</li>
                  <li>Legal</li>
                  <li>Sitemap</li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <ul className="space-y-1">
                  <li>Get in Touch</li>
                  <li>Help center</li>
                  <li>Live chat</li>
                  <li>How it works</li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="font-semibold mb-2">Newsletter</h3>
                <p>Subscribe to the free newsletter and stay up to date</p>
                <div className="mt-2 flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="p-2 border border-gray-300 rounded-l-md w-full"
                  />
                  <button className="px-4 bg-gray-200 border border-gray-300 rounded-r-md">
                    Send
                  </button>
                </div>
              </div>

              {/* Mobile Apps */}
              <div className='pl-[90px]'>
                <h3 className="font-semibold mb-2">Mobile Apps</h3>
                <ul className="space-y-1">
                  <li>iOS App</li>
                  <li>Android App</li>
                </ul>
              </div>
            </div>

            <div className="mt-15 text-center flex justify-between text-xs border-t border-gray-300 pt-4">
              <p>© Copyright 2024</p>
              <div className="mt-2 flex justify-center space-x-3">
                {/* Example logos */}
                <img src="/visa.png" alt="Visa" className="h-5" />
                <img src="/mastercard.png" alt="Mastercard" className="h-5" />
                <img src="/paypal.png" alt="PayPal" className="h-5" />
                <img src="/amex.png" alt="Amex" className="h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer


