import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text">
                    Log in
                  </button>
                </Link>
              </p>
            </section>
            <hr class="mb-4" />
          </div>

      
  );
};

export default Footer;
