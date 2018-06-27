import React from 'react'

const Footer = (props) => {
  return (
    <footer className="dark-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="logo-container">
              <img src="images/hellonet-logo.svg" className="origin-logo" alt="HelloNet"/>
            </div>
            <p className="company-mission">
              HelloNet Marketplace - Decentralized On-Demand Customer Support Chat Services.              
            </p>
            <p>
              &copy; {(new Date().getFullYear())} HelloNet.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  Documentation
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="https://www.hellotoken.io/product-brief">Product Brief</a>
                  </li>
                  <li>
                    <a href="https://www.hellotoken.io/whitepaper">Whitepaper</a>
                  </li>
                  <li>
                    <a href="https://github.com/OriginProtocol" target="_blank">Github</a>
                  </li>
                  <li>
                    <a href="http://docs.originprotocol.com/" target="_blank">Docs</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  Community
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="https://t.me/HelloToken_io" target="_blank">Telegram</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/jyxpUSe" target="_blank">Discord</a>
                  </li>
                  <li>
                    <a href="https://medium.com/originprotocol" target="_blank">Medium</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/originprotocol" target="_blank">Twitter</a>
                  </li>
                  <li>
                    <a href="https://instagram.com/originprotocol" target="_blank">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/originprotocol" target="_blank">Facebook</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  Organization
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="http://www.hellotoken.io/team">Team</a>
                  </li>
                  <li>
                    <a href="http://www.hellotoken.io/presale">Presale</a>
                  </li>
                  <li>
                    <a href="http://www.hellotoken.io/partners">Partners</a>
                  </li>
                  <li>
                    <a href="https://angel.co/originprotocol/jobs">Jobs (We&rsquo;re hiring!)</a>
                  </li>
                  {/* <li>
                    <a href="https://www.google.com/maps/place/845+Market+St+%23450a,+San+Francisco,+CA+94103">845 Market St, #450A, San Francisco, CA 94103</a>
                  </li> */}
                  <li>
                    <a href="mailto:hello@hellotoken.io">hello@hellotoken.io</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
