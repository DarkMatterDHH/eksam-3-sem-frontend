"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [images, setImages] = useState([]);

  const API_URL = "http://localhost:4000";

  useEffect(() => {
    fetch(`${API_URL}/gallery`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  const newsImages = [10, 7]
    .map((id) => images.find((image) => image.id === id))
    .filter(Boolean);
  return (
    <footer
      className="bg-black bg-cover bg-center text-white px-6 pt-10 pb-4 lg:pt-8"
      style={{ backgroundImage: "url('/Rectangle%2031.svg')" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 text-center lg:text-left">
          <div>
            <div className="mb-10 lg:mb-6">
              <h2 className="text-2xl font-bold tracking-wider">
                NIGHT<span className="text-pink-600">CLUB</span>
              </h2>

              <p className="text-[8px] tracking-[0.4em]">HAVE A GOOD TIME</p>
            </div>

            <div className="mb-6">
              <h3 className="text-pink-600 font-semibold text-sm mb-2">
                LOCATION
              </h3>

              <p className="text-xs leading-5">Kompagnistræde 278</p>

              <p className="text-xs leading-5">1265 København K</p>
            </div>

            <div className="mb-8">
              <h3 className="text-pink-600 font-semibold text-sm mb-2">
                OPENING HOURS
              </h3>

              <p className="text-xs leading-5">WED - THU 10:30 PM TO 3 AM</p>

              <p className="text-xs leading-5">SAT - SUN: 11 PM TO 5 AM</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-pink-600 font-semibold text-sm mb-6">NEWS</h3>

            {newsImages.map((image) => (
              <article key={image.id} className="flex gap-4 mb-6">
                <img
                  src={`${API_URL}${image.asset.url}`}
                  alt={image.asset.alt}
                  className="w-20 h-20 object-cover shrink-0"
                  loading="lazy"
                />

                <div className="text-xs leading-5">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>

                  <p className="text-pink-600 mt-1">April 17, 2026</p>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden lg:block">
            <h3 className="text-pink-600 font-semibold text-sm mb-6">
              RECENT POSTS
            </h3>

            {[1, 2].map((item) => (
              <article key={item} className="flex gap-3 mb-6">
                <span className="text-pink-600 text-lg">𝕏</span>

                <div className="text-xs leading-5">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable...
                  </p>

                  <p className="text-pink-600 mt-1">5 hours ago</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-end text-center gap-8 lg:gap-4 mt-4 lg:mt-12">
          <div className="order-1 lg:order-2">
            <h3 className="text-xs mb-3">Stay Connected With Us</h3>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 flex items-center justify-center border-2 border-white hover:border-pink-600 hover:text-pink-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Snapchat"
                className="w-12 h-12 flex items-center justify-center border-2 border-white hover:border-pink-600 hover:text-pink-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-3.5 0-6 2.7-6 6v3c-.7-.3-1.5-.7-2-.2-.5.6.1 1.2 1 1.6l2 1c-.5 2.5-2.5 4.5-5 5 1 .8 2.5 1 4 1 .5.5.5 1.5.5 1.5 2-1 3.5 0 5.5 1 2-1 3.5-2 5.5-1 0 0 0-1 .5-1.5 1.5 0 3-.2 4-1-2.5-.5-4.5-2.5-5-5l2-1c.9-.4 1.5-1 1-1.6-.5-.5-1.3-.1-2 .2V8c0-3.3-2.5-6-6-6z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 flex items-center justify-center border-2 border-white hover:border-pink-600 hover:text-pink-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="18"
                    cy="6"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="order-2 lg:order-1 text-gray-400 text-xs lg:text-left">
            <span className="block lg:inline">Night Club</span>

            <span className="hidden lg:inline"> - </span>

            <span className="block lg:inline mt-2 lg:mt-0">
              All Rights Reserved
            </span>
          </div>

          <div className="order-3 text-gray-400 text-xs lg:text-right">
            Copyright © {new Date().getFullYear()} NightClub
          </div>
        </div>
      </div>
    </footer>
  );
}
