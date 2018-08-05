import React from "react";

export default class Conversation extends React.Component {

  render(){
    return (
        <div className="pane padded-more l-chat">
          <ul className="list-group l-chat-conversation">
            <li className="list-group-item">
                <div className="media-body">
                  <time className="media-body__time">06.08.2018</time>
                  <strong>Անուն:</strong>
                    <p>Տեքստ...</p>
                </div>
              </li>
          </ul>
          <form className="l-chat-form">
            <div className="form-group">
              <textarea required placeholder="Ասեք ինչ֊որ բան..."
                className="form-control"></textarea>
            </div>
            <div className="form-actions">
              <button className="btn btn-form btn-primary">Լահ</button>
            </div>
          </form>
        </div>
    );
  }
}