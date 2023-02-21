import React from "react";

function Alert(props) {
  const capital = (word) => {
    const lowerWord = word.toLowerCase();
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  };

  return (
    <div style={{height:'70px'}}>
    {props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{capital(props.alert.type)}:</strong>
        {props.alert.msg}
      </div>
    )}
      </div>

  );

}

export default Alert;
