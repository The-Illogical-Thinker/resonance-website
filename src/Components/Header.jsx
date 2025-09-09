import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">About GoKart</Link>
          </li>
          <li className="nav-item">
            <Link to="/reev" className="nav-link">About SAEIndia Reev</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}