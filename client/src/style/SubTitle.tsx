import * as React from "react";

interface Props {}

const SubTitle: React.FunctionComponent<Props> = (props) => {
  return <h3>{props.children}</h3>;
};

export default SubTitle;
