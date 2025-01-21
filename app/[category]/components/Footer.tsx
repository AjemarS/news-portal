"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 via-transparent text-white text-start py-3 mt-5">
      <div>
        <p>&copy; {new Date().getFullYear()} Various News. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
