import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            {/* <li>
              <a
                href="https://www.instagram.com/oljeplatno/"
                target="_blank"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li> */}
            <li>
              <h3 className="icon fa-phone"></h3>
              +386 31 433 275
            </li>
            <li>
              <h3 className="icon fa-envelope"></h3>
              slikar@mirokacar.si
            </li>
            <li>
              <h3 className="icon fa-home"></h3>
              Zgornja Sorica
              <br />
              Slovenija
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
