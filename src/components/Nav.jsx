import React, { useEffect, useState } from "react";
import netflix from "../assets/netflix.png";
import avatar from "../assets/avatar.png";
import "../styles/Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img src={netflix} alt="netflix" className="netflix" />
      <img src={avatar} alt="avatar" className="avatar" />
    </div>
  );
}
