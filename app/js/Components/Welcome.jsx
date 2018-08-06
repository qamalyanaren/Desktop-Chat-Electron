import React from "react";
import PropTypes from "prop-types";

export default class Welcome extends React.Component {
  /**
   * Handle when form is submitted
   * @param {Event} e
   */
  onSubmit = ( e ) => {
    e.preventDefault();
    this.props.onNameChange( this.nameEl.value || "Jon" );
  }
  /**
   * Set default properties (React.Component API)
   */
  static defaultProps = {
    onNameChange: () => {}
  }
  /**
   * Validate properties (React.Component API)
   */
  static propTypes = {
    onNameChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="pane padded-more">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Ասեք ինձ Ձեր անունը</label>
            <input required className="form-control" placeholder="Անուն"
              ref={(input) => { this.nameEl = input; }} />
          </div>
          <div className="form-actions">
            <button className="btn btn-form btn-primary">ԼԱՀ</button>
          </div>
        </form>
      </div>
    )
  }
}
