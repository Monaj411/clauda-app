import React from "react";
import Button from "./button";
import About from "./about";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container shadow fontBody">
        <div class="p-2 text-white welcome">
          <h3 className="heading">Welcom to Clauda</h3>
          <p class="text-center">
            <h1 id="title" className="text-center heading">
              Clauda Payment Gateway
            </h1>
          </p>

          <p class="text-center">
            Clauda is a robust payment gateway designed to facilitate seamless
            and secure transactions for merchants operating across 16 Arican
            countries. Cluada will support various payment methods, including
            mobile money and bank transfers, while also enabling merchants to
            make international payout to other African countries.{" "}
          </p>
          <Button />
        </div>

        <div class="p-2 text-white welcome">
          <h1 class="text-center heading">Major Benefits</h1>
          <h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-coin"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>{" "}
            Low Charges
          </h5>
          <p>Do more with our low charges rates</p>
          <h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-stopwatch-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z" />
            </svg>{" "}
            Fast Payment
          </h5>
          <p>Recieve funds across international boundaries within minutes</p>
          <h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-text-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
            </svg>{" "}
            24/7 Customer Serice
          </h5>
          <p>Enjoy our support team everytime, everyday</p>
          <p>
            Clauda will support various payment methods, including mobile money
            and bank transfers, while also enabling merchants to make
            international payout to other African countries.{" "}
          </p>

          <Button />
        </div>
        <div className="welcome">
          <About />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
