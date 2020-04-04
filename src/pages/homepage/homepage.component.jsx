import React from "react";

import Directory from "../../components/directory-menu/directory-menu.component";

import {Link} from "react-router-dom";

const HomePage = () => (
  <div className="homepage">
    <Link to="shop"><h1>Shop</h1></Link>
    <Directory />
  </div>
)

export default HomePage;
