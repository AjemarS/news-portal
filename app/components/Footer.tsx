"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-start py-1">
      <div>
        <p>&copy; {new Date().getFullYear()} Various News. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
