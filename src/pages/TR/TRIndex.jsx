import TRTable from "./TRTable";
import { useGlobalContext } from "../../common/GlobalContext";
import { useState } from "react";
import { Alert } from "@mui/material";

const TRIndex = () => {
  const {
    isSideMenuExpanded,
    isFileSelected,
    setIsFileSelected,
    tRList,
    setTRList,
    currentUser,
  } = useGlobalContext();
  console.log(isFileSelected);
  const [receiptNumber, setReceiptNumber] = useState("");
  const [isTRSubmitSuccessful, setIsTRSubmitSuccessful] = useState(false);

  const onTRSubmit = (e) => {
    e.preventDefault();

    const min = Math.ceil(1000000);
    const max = Math.floor(9999999);
    const newReceiptNumber = Math.floor(
      Math.random() * (max - min) + min
    ).toString();
    setReceiptNumber(newReceiptNumber);

    let current = new Date();
    let cDate =
      current.getDate() +
      "." +
      (current.getMonth() + 1) +
      "." +
      current.getFullYear();

    let cTime =
      current.getHours() +
      ":" +
      current.getMinutes() +
      ":" +
      current.getSeconds();
    let dateTime = cDate + " " + cTime;

    // https://stackoverflow.com/questions/857618/javascript-how-to-extract-filename-from-a-file-input-control

    //https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement

    var fullPath = document.getElementById("TRUpload").value;
    if (fullPath) {
      var startIndex =
        fullPath.indexOf("\\") >= 0
          ? fullPath.lastIndexOf("\\")
          : fullPath.lastIndexOf("/");
      var filename = fullPath.substring(startIndex);
      if (filename.indexOf("\\") === 0 || filename.indexOf("/") === 0) {
        filename = filename.substring(1);
      }
    }

    setTRList([
      ...tRList,
      {
        ReceiptNumber: newReceiptNumber,
        ReportType: "TR",
        FileName: filename,
        SubmitMethod: "Manual",
        SubmissionDate: dateTime,
        User: `${currentUser.FirstName} ${currentUser.Surname}`,
        ReportingEntity: currentUser.BusinessName,
      },
    ]);
    setIsTRSubmitSuccessful(true);
    setIsFileSelected(false);
  };

  return (
    <div className={isSideMenuExpanded ? "main side-menu-expanded" : "main"}>
      {isTRSubmitSuccessful && (
        <Alert
          onClose={() => {
            setIsTRSubmitSuccessful(false);
          }}
        >
          Upload Successful. Receipt Number: {receiptNumber}
        </Alert>
      )}
      <h1>Transaction Reporting</h1>
      <form>
        <fieldset>
          <legend>1. Select a file to upload</legend>
          <input
            type="file"
            id="TRUpload"
            name="TRUpload"
            className="upload-input"
            onChange={(e) => setIsFileSelected(!!e?.target?.value)} // bang bang to turn truthy or falsey into boolean
          />
          <p>
            Maximum file size is 40MB. Files larger than this must be zipped.
          </p>
        </fieldset>
        <fieldset>
          <legend>2. Click submit to upload</legend>
          <button
            type="submit"
            className="action-btn"
            disabled={!isFileSelected}
            onClick={onTRSubmit}
          >
            Submit
          </button>
          <p>Click the Submit button to transmit the file to MyPortal.</p>
        </fieldset>
      </form>
      <TRTable />
    </div>
  );
};
export default TRIndex;
