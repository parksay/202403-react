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
        <Outlet />
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
