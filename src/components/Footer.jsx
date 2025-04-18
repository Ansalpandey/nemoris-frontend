const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold cursor-pointer w-fit transition-transform hover:scale-105">
            <img src="/favicon.svg" className="w-12" alt="AskADoc Logo" />
            <span className="text-black">
              Ask
              <span className="text-[#5f6fff]">A</span>
              Doc
            </span>
          </h1>
          <p className="w-full md:w-2/3 text-gray-600 leading-6 mt-2">
            AskADoc is your trusted online health companion, connecting you with
            certified medical professionals for real-time consultations, health
            advice, and personalized care — all from the comfort of your home.
            We're dedicated to making healthcare more accessible, reliable, and
            convenient for everyone.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>help@askadoc.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ AskADoc.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
