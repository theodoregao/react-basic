import React from "react";
import useInput from "./useInput";

function UserForm(props) {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Fullname: ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        First Name:
        <input type="text" {...bindFirstName} />
      </div>
      <div>
        Last Name:
        <input type="text" {...bindLastName} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
