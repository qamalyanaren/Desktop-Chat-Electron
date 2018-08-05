import React from "react";

export default class Welcome extends React.Component {

  render() {
    return (
      <div className="pane padded-more">
        <form>
          <div className="form-group">
            <label>Գրեք ձեր անունը</label>
            <input required className="form-control" placeholder="Անուն" />
          </div>
          <div className="form-actions">
            <button className="btn btn-form btn-primary">Լահ</button>
          </div>
        </form>
      </div>
    )
  }
}
