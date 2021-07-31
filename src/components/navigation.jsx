import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../service/base.service";

export const Navigation = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  const handleSignIn = () => {
    signIn().then((res) => {
      if (res) {
        dispatch({
          type: "AUTH_SIGN_IN",
          payload: true,
        });
      }
    });
  };

  const handleLogOut = () => {
    dispatch({
      type: "AUTH_SIGN_OUT",
      payload: false,
    });
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            React Landing Page
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          {isAuthed ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" onClick={handleLogOut}>
                  LogOut
                </a>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#features"
                  className="page-scroll"
                  onClick={handleSignIn}
                >
                  Login
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
