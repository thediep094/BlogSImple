import Link from "next/link";
import React from "react";
// import { Search } from "@mui/icons-material";
const Header = () => {
  return (
    <div className="Home__navbar">
      <Link href="/">
        <a>
          <img src="favicon.ico" alt="" className="Home__Logo" />
        </a>
      </Link>

      <div className="Home__search">
        <input type="text" className="search" placeholder="Search..." />
        {/* <Search className="search__icon" /> */}
      </div>

      <div className="Home__navbar__links">
        <Link href="/createpost">
          <a
            style={{
              marginLeft: "20px",
            }}
          >
            Create Post
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
