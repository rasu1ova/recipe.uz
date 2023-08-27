import React from "react";

const Footer = () => {
  return (
    <footer className="bg-opacity-full-color">
      <div className="container">
        <div className="flex py-12 justify-between items-center">
          <div className="logo w-1/3">
            <h2 className="font-playfair text-6xl">Ovqatchi.uz</h2>
            <p className="text-grey">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment
            </p>
          </div>
          <ul className="footer--col">
            <h2 className="mb-2 text-xl font-playfair">Tastebite</h2>
            <li className="text-grey">
              <a href="#">About us</a>
            </li>
            <li className="text-grey">
              <a href="#">Careers</a>
            </li>
            <li className="text-grey">
              <a href="#">Contact us</a>
            </li>
            <li className="text-grey">
              <a href="#">Feedback</a>
            </li>
          </ul>
          <ul className="footer--col">
            <h2 className="mb-2 text-xl font-playfair">Legal</h2>
            <li className="text-grey">
              <a href="#">Terms</a>
            </li>
            <li className="text-grey">
              <a href="#">Cookies</a>
            </li>
            <li className="text-grey">
              <a href="#">Copyright</a>
            </li>
            <li className="text-grey">
              <a href="#">home</a>
            </li>
          </ul>
          <ul className="footer--col">
            <h2 className="mb-2 text-xl font-playfair">Follow</h2>
            <li className="text-grey">
              <a href="#">Facebook</a>
            </li>
            <li className="text-grey">
              <a href="#">Twitter</a>
            </li>
            <li className="text-grey">
              <a href="#">Instagram</a>
            </li>
            <li className="text-grey">
              <a href="#">Youtube</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex justify-between py-6 text-grey">
          <div>
            <p className=" text-red">© 2023 Recipe.uz</p>
          </div>
          <div className="social">1234</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
