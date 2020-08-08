import React from "react";
import "../App.css";
import Header from "../style/Header";
import Form from "../smart/Form";
import Title from "../style/Title";
import SubTitle from "../style/SubTitle";
import GeneratedLink from "../style/GeneratedLink";
import axios, { AxiosRequestConfig } from "axios";
import Swal from "sweetalert2";
import { configuration } from "../configuration";

interface Props {}

interface State {
  link: string;
}

export default class LinkGeneratorPage extends React.Component<Props, State> {
  state: State = {
    link: "",
  };

  generateLink = async (alias: string, url: string) => {
    let config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        configuration().server_uri + "/url",
        {
          alias,
          url,
        },
        config
      )
      .then((response) => {
        const { alias } = response.data;
        const link = window.location.toString() + `${alias}`;

        this.setState({
          link,
        });
      })
      .catch((err) => {
        console.log(err);

        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          timer: 2500,
          showConfirmButton: false,
        });
      });
  };

  render() {
    return (
      <>
        <Header>
          <Title>Link Shortener</Title>
          <SubTitle>
            Create short links with custom alias for your own usage
          </SubTitle>
        </Header>
        <Form generateLink={this.generateLink} />
        {this.state.link !== "" && <GeneratedLink link={this.state.link} />}
      </>
    );
  }
}
