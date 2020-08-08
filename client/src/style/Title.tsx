import * as React from "react";

interface Props {}

const Title: React.FunctionComponent<Props> = (props) => {
  return <h1>{props.children}</h1>;
};

export default Title;
