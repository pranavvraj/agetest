import "../App.css";
import logo from "../assets/agetest trns.png";

// import logo from "../assets/qrlogotrans.png";

const Navbar = ({ myRef }) => {
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });
  //   const [value, setValue] = useState("");
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links">
          <a href="http://agetest.co">
            <img className="logoimg" src={logo} alt="" />
          </a>
        </div>
      </div>
      <div className="rightSide">
        <div className="buttons">
          <div className="navbtns">
            <button className="login">Home</button>
            <button onClick={executeScroll} className="signup">
              About
            </button>
          </div>

          {/* <div className="drawer">
            <Drawer />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
