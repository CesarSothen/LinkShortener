import * as React from "react";

interface Props {}

const Header: React.FunctionComponent<Props> = (props) => {
  return <div className="header">{props.children}</div>;
};

export default Header;
