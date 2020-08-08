import * as React from "react";

interface Props {
  generateLink: (alias: string, url: string) => void;
}

interface State {
  alias: string;
  url: string;
}

export default class Form extends React.Component<Props, State> {
  state: State = {
    alias: "",
    url: "",
  };

  generateLink = (event: React.MouseEvent) => {
    event.preventDefault();
    this.props.generateLink(this.state.alias, this.state.url);
  };

  handleChange = (event: React.ChangeEvent) => {
    let target = event.target as HTMLInputElement;
    this.setState({
      ...this.state,
      [target.name]: target.value,
    });
  };

  render() {
    return (
      <form className="form">
        <div className="row u-full-width">
          <div className="six columns">
            <label>Alias (Optional)</label>
            <input
              className="u-full-width"
              name="alias"
              type="text"
              placeholder="google"
              value={this.state.alias}
              onChange={this.handleChange}
            />
          </div>
          <div className="six columns">
            <label>Link</label>
            <input
              className="u-full-width"
              name="url"
              type="url"
              placeholder="https://www.google.com"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button onClick={this.generateLink}>Generate Short Link</button>
        </div>
      </form>
    );
  }
}
