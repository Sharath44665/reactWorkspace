import PropTypes from "prop-types";

export default function Navbar(props) {
  let textColor, textName ;

  if (props.theme === 'light'){
      textColor = 'text-dark'
      textName = "Enable Dark mode"
  }
  else{
    textColor= 'text-light';
    textName = "Enable Light mode"
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.theme} border-bottom border-body`} data-bs-theme={props.theme} >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch  mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleTheme}
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label ${textColor}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {textName}
            </label>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
