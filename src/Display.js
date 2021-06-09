import React from "react";
import bookmark from "./AddBookmark";

const Display = (props) => {
  const { bookmark, data } = props;
  return (
    <>
      {bookmark.map((webdata, key) => {
        return (
          <div
            style={{ background: "#c84b31", color: "#ecdbba" }}
            className="container-fluid"
            key={key}
          >
            <div className="row">
              <div className="col-lg-1 m-3">
                <p>{webdata.webname}</p>
                <br />
              </div>
              <div className="col-lg-1 m-3">
                <a
                  className="btn btn-primary"
                  style={{
                    background: "#ecdbba",
                    color: "black",
                    outline: "none",
                    border: "none"
                  }}
                  href={webdata.weblink}
                  target="blank"
                >
                  Visit
                </a>
              </div>
              <div className="col-lg-1 m-3">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    data(key);
                  }}
                  rel={"external"}
                  className="btn btn-primary"
                  href={"https://" + webdata.weblink}
                  target="_blank"
                  value={key}
                  style={{
                    background: "#ecdbba",
                    color: "black",
                    outline: "none",
                    border: "none"
                  }}
                >
                  Delete
                </a>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </>
  );
};
export default Display;
