import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  MdEditNote,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdVerifiedUser,
  MdErrorOutline,
} from "react-icons/md";
import axios from "axios";

export const Linkfinder = (props) => {
  const [data, setData] = useState(null);
  const [showhide, setShowHide] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.backendURL1}/googlelinkfinder/${props.email}`)
      .then((response) => {
        // console.log(response.data)
        setData(response.data.datas);
      });
  }, []);

  return (
    <div>
      {/* <span style={{fontSize: 10}}>
            finding sources...
            
        </span> */}

      {showhide ? (
        <span onClick={() => setShowHide(false)} className="asas11">
          <MdKeyboardArrowDown />
        </span>
      ) : (
        <span onClick={() => setShowHide(true)} className="asas11">
          <MdKeyboardArrowUp />
        </span>
      )}

      {showhide ? (
        <div>
          {data === null ? (
            <>Loading...</>
          ) : (
            data.map((data, key) => {
              return (
                <p key={key} style={{ fontSize: "12px",marginLeft:'20px' }}>
                  <a href={data.link} target="_blank" >
                    {data.link}
                  </a>
                </p>
              );
            })
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Linkfinder);
