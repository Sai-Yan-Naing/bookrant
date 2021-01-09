
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <div className="copyright text-center" style={{float: "none"}}>
            &copy; {1900 + new Date().getYear()}, Designed by{" "}
            <a
              href="https://www.facebook.com/kosaiyan.naing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ethical Sai
            </a>
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
