import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <h3>Obsluga klienta</h3>
        <p>Kontakt</p>
        <p>Formy platnosci</p>
        <p>Zwroty</p>
      </div>
      <div className="wrapper">
        <h3>Informacje</h3>
        <p>Regulamin</p>
        <p>O nas</p>
      </div>
      <div className="wrapper">
        <h3>Moje konto</h3>
        <p>Logowanie</p>
        <p>Moje zamówienia</p>
      </div>
      <div className="wrapper">
        <h3>Infolinia</h3>
        <span>48 xxx xxx xxx</span>
        <p>Jestesmy dostepni od pn-pt. w godz. 7-15</p>
        <p>lub napisz do nas na xxx@xxx.com</p>
      </div>
      <div className="wrapper">
        <h3>Znajdz nas na:</h3>
        <FacebookIcon />
        <YouTubeIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Footer;
