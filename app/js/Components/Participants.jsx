import React from "react";
import PropTypes from "prop-types";

export default class Participants extends React.Component {
  render(){
    return (
      <div className="pane pane-sm sidebar">
        <ul className="list-group">
          <li className="list-group-item">
              <div className="media-body">
                <strong><span className="icon icon-user"></span>&nbsp;Անուն</strong>
                <p>Միացավ 2 ր առաջ</p>
              </div>
            </li>
        </ul>
      </div>
    );
  }
}