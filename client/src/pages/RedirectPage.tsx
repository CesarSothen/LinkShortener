import * as React from "react";
import axios from "axios";
import { configuration } from "../configuration";
import { RouteComponentProps } from "react-router-dom";
import Swal from "sweetalert2";

interface Params {
  alias: string;
}

interface State {
  link: string;
}

export default class RedirectPage extends React.Component<
  RouteComponentProps<Params>,
  State
> {
  state: State = {
    link: "",
  };

  componentDidMount() {
    const alias: string = this.props.match.params.alias;
    axios
      .get(configuration().server_uri + `/${alias}`)
      .then((response) => {
        let { url } = response.data;
        console.log(url);

        this.setState({ link: url });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: err.message || "Unexpected error",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.assign(window.location.origin);
        });
      });
  }

  render() {
    return (
      <div className="redirectPage">
        <h1>Redirecting</h1>
        {this.state.link !== "" && window.location.assign(this.state.link)}
      </div>
    );
  }
}
