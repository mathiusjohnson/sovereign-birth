import React from "react";
import AdminLogin from "./Footer/AdminLogin";
import FooterDetails from "./Footer/FooterDetails";
import FooterLogo from "./Footer/FooterLogo";
import SocialMediaIcons from "./Footer/SocialMediaIcons";

function Footer() {
  return (
    <div className="footer py-10">
      <footer className="my-6 space-y-4 md:space-y-0 grid md:grid-cols-6 auto-rows-min text-maximum-blue-green ">
        <FooterLogo />
        <FooterDetails />
        <SocialMediaIcons />
        <AdminLogin />
      </footer>
    </div>
  );
}

export default Footer;