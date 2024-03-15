import "./../styles/MyHeader.css";

const Header = (props) => {
  return (
    <div className={props.myClass}>
      <header>
        <ul>
          <li>hi</li>
          <li>how</li>
          <li>are</li>
          <li>you</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
