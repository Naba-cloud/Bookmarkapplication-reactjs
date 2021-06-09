import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Display from "./Display";
const AddBookmark = () => {
  const [webname, setwebname] = useState("");
  const [weblink, setweblink] = useState("");
  // const [bookmark, setbookmark] = useState(
  //   localStorage.getItem("bookmark")
  //     ? JSON.parse(localStorage.getItem("bookmark"))
  //     : [{ webname: "Google", weblink: "www.google.com" }]
  // );
  const [bookmark, setbookmark] = useState([
    { webname: "Google", weblink: "https://www.google.com" }
  ]);
  useEffect(() => {
    const json = JSON.stringify(bookmark);
    localStorage.setItem("notes", json);
  }, [bookmark]);

  useEffect(() => {
    const json = localStorage.getItem("notes");
    const savedNotes = JSON.parse(json);
    if (savedNotes) {
      setbookmark(savedNotes);
    }
  }, []);

  const data = {
    webname,
    weblink
  };

  // const savedToLocalStorage = () => {
  //   console.log(bookmark);
  //   localStorage.setItem("bookmark", JSON.stringify(bookmark));
  // };

  const savedata = () => {
    if (webname && weblink !== "") {
      let expression = /https?:\/\//g;
      let regex = new RegExp(expression);
      if (weblink.match(regex)) {
        setbookmark([...bookmark, data]);

        // localStorage.setItem("bookmark", JSON.stringify(bookmark));
        setwebname("");
        setweblink("");
      } else {
        swal("Enter Correct Url  format:https://www.google.com");
      }
    } else {
      swal("Fill The Above Fields");
    }
  };
  const deldata = (key) => {
    // event.preventDefault;
    let ar1 = [...bookmark];

    localStorage.removeItem(ar1.splice(key, 1));
    setbookmark(ar1);
  };
  return (
    <>
      <div style={{ background: "#0a1d37" }} className=" container-fluid">
        <div className="row text-center">
          <div className="col-lg-12">
            <br />
            <br />{" "}
            <label style={{ color: "#ecdbba" }}>Enter Website Name:</label>
            <br />
            <br />
            <input
              type="text"
              required
              value={webname}
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Website Name"
              style={{
                boxShadow: "none",
                outline: "none",
                background: "transparent",
                border: "none",
                color: "#ecdbba"
              }}
              onChange={(e) => {
                setwebname(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />{" "}
            <label style={{ color: "#ecdbba" }}>Enter Website Link:</label>
            <br />
            <br />
            <input
              onChange={(e) => {
                setweblink(e.target.value);
              }}
              required
              type="text"
              value={weblink}
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;website Link
              
             "
              style={{
                boxShadow: "none",
                outline: "none",
                background: "transparent",
                border: "none",
                color: "#ecdbba"
              }}
            />
            <br />
            <br />
            <button
              onClick={() => {
                // savedToLocalStorage();
                savedata();
              }}
              style={{
                color: "#ecdbba",
                background: "#c84b31",
                boxShadow: "none",
                border: "none"
              }}
              className="btn btn-primary w-50 m-3"
            >
              Save
            </button>
            <br />
          </div>
        </div>
      </div>
      <Display bookmark={bookmark} data={deldata} />
      {/* <Display data={deldata} /> */}
    </>
  );
};
export default AddBookmark;
