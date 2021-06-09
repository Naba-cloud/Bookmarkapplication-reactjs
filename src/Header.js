import React from "react";
import AddBookmark from "./AddBookmark";
const Header = () => {
  return (
    <>
      <div className="container-fluid p-3 " style={{ background: "#c84b31" }}>
        <div className="row">
          <div style={{ color: "#ecdbba" }} className="col-lg-12">
            <h1>Book Mark Application</h1>
            <p>Save Your Favourite Sites Here</p>
            <br />
          </div>
        </div>
      </div>

      <AddBookmark />
    </>
  );
};
export default Header;
