import { Link, useNavigate } from "react-router-dom";

const MyHeader = () => {
  const navigate = useNavigate;
  const ulStyle = { listStyle: "none" };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <header>
        <h1>___Brand Name HERE___</h1>
        <div>
          <ul style={ulStyle}>
            <li>
              <button onClick={goBack}>back</button>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/test">test</Link>
            </li>
            <li>
              <Link to="/state">state</Link>
            </li>
            <li>
              <Link to="/hook">hooks</Link>
            </li>
            <li>
              <Link to="/ref">ref</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default MyHeader;
