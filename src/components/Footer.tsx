import React from "react";
import Container from "./Container";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-white py-6 border-t border-gray-200">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo className="text-2xl" />
          <span className="text-sm text-gray-500">
            &copy;
            {new Date().getFullYear()} IntervueAI. All rights reserved.
          </span>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
