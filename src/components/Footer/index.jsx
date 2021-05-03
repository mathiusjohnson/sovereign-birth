import React from "react";
import AdminLogin from "./AdminLogin";
import FooterDetails from "./FooterDetails";
import FooterLogo from "./FooterLogo";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <div className=" bg-maximum-blue-green py-6">
      <footer className="container mx-auto relative my-2 space-y-4 md:space-y-0 flex justify-between auto-rows-min  text-white ">
        <FooterLogo />
        <FooterDetails />
        <SocialMediaIcons />
        <AdminLogin />
      </footer>
    </div>
  );
}

export default Footer;