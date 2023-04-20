import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/product/:productId">Product Detail</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
