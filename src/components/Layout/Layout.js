import { Outlet } from "react-router-dom";

const MyLayout = () => {
  return (
    <div>
      <main>
        <div>
          ==========================================================================================
        </div>
        <div>
          vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        </div>
        <div>below is my contents</div>
        <div>
          <br />
          <br />
        </div>
        <div
          className="contents"
          style={{ border: "3px red dashed", padding: "1rem", margin: "3rem" }}
        >
          <Outlet />
        </div>
        <div>
          <br />
          <br />
        </div>
        <div>above is my contents</div>
        <div>
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        </div>
        <div>
          ==========================================================================================
        </div>
      </main>
    </div>
  );
};

export default MyLayout;
