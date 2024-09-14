import React from "react";
import { Link } from "react-router-dom";
function EditBtn() {
  return (
    <Link to="/edit" className="edit-btn">
      Edit your profile
    </Link>
  );
}

export default EditBtn;
