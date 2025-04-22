import css from "./Dropdown.module.css";
import { Component } from "react";

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggleMenu = () => {
    this.setState(({ visible }) => ({
      visible: !visible,
    }));
  };

  render() {
    return (
      <div className={css.dropdown}>
        <button onClick={this.toggleMenu} className={css.button}>
          {this.state.visible ? "Hide" : "Show"}
        </button>

        {this.state.visible && <div className={css.dropdown__menu}>Menu</div>}
      </div>
    );
  }
}
