export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">
          NIGHT<span className="text-pink-600">CLUB</span>
        </h1>
        <p className="text-xs tracking-widest">HAVE A GOOD TIME</p>
      </div>

      <div className="mb-8">
        <h2 className="text-pink-600 text-xl mb-3">LOCATION</h2>
        <p>Kompagnistræde 278</p>
        <p>1265 København K</p>
      </div>

      <div className="mb-12">
        <h2 className="text-pink-600 text-xl mb-3">OPENING HOURS</h2>
        <p>WED - THU 10:30 PM TO 3 AM</p>
        <p>SAT - SUN: 11 PM TO 5 AM</p>
      </div>

      <div className="mb-12">
        <h3 className="mb-4">Stay Connected With Us</h3>

        <div className="flex justify-center gap-6">
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
              <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-gray-400 text-sm">
        <p>Night Club</p>
        <p>All Rights Reserved</p>
        <p className="mt-8">Copyright © {new Date().getFullYear()} NightClub</p>
      </div>
    </footer>
  );
}
