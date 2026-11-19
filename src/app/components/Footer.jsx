export default function Footer() {
  return (
    <footer
      className="bg-black bg-cover bg-center text-white text-center p-8"
      style={{ backgroundImage: "url('/Rectangle%2031.svg')" }}
    >
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

        <div className="flex justify-center gap-4">
          <img src="/facebook.png" alt="Facebook" className="w-10 h-10" />

          <img src="/snapchat.png" alt="Snapchat" className="w-10 h-10" />

          <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
        </div>
      </div>

      <div className="text-gray-400 text-sm">
        <p>Night Club</p>
        <p>All Rights Reserved</p>
        <p className="mt-8">Copyright © NightClub</p>
      </div>
    </footer>
  );
}
