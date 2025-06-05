import { useState } from "react";
import AddUser1 from "./components/AddUser1/AddUser1";
import AddUser2 from "./components/AddUser2";
import AddUser3 from "./components/AddUser3";
import { AddUserBreadCrumbs } from "./components/AddUserBreadCrumbs";

const AddUser = () => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold mb-3">User Register</h1>
      {/* BreadCrumb */}
      <div className="mb-3">
        <AddUserBreadCrumbs pageNumber={pageNumber} />
      </div>

      <div>
        {pageNumber === 1 ? (
          <AddUser1 setPageNumber={setPageNumber} />
        ) : pageNumber === 2 ? (
          <AddUser2 setPageNumber={setPageNumber} />
        ) : (
          <AddUser3 setPageNumber={setPageNumber} />
        )}
      </div>
    </div>
  );
};

export default AddUser;
