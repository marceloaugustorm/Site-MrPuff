import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return (
    <div className="container">
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 w-100 rounded-3"
        style={{ backgroundColor: "#17191A"}}
      >
        <div className="col-md-4 d-flex align-items-center">
   
          <span className="mb-3 mb-md-0" style={{
            color: "white", paddingLeft: 15
          }} >© 2025 MrPuff, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.instagram.com/mrpuffabc/" aria-label="Instagram">
              <i className="bi bi-instagram" style={{ fontSize: 24, color:"white" }}></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.facebook.com/mrpuffabc/?locale=pt_BR" aria-label="Facebook">
              <i className="bi bi-facebook" style={{ fontSize: 24, color: "white", paddingRight: 15 }}></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
