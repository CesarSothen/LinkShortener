import * as React from "react";
import { FaCopy } from "react-icons/fa";
import Swal from "sweetalert2";

interface Props {
  link: string;
}

const copyText = () => {
  const elem: HTMLInputElement = document.getElementById(
    "generatedLink"
  ) as HTMLInputElement;
  elem.select();
  elem.setSelectionRange(0, 99999);
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
    text: "Copied link",
  });
};

const GeneratedLink: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="generatedLink row">
      <input
        className="eight columns"
        id="generatedLink"
        type="text"
        inputMode="none"
        readOnly
        value={props.link}
      />
      <div className="button two columns">
        <FaCopy color="black" onClick={copyText} />
      </div>
    </div>
  );
};

export default GeneratedLink;
