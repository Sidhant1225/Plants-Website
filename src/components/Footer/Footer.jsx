import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-top">

        {/* LEFT */}
        <div className="footer-brand">
          <h2>
            <span className="logo-icon">🌿</span> Planto.
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="socials">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>Quick Link’s</h4>
          <ul>
            <li>Home</li>
            <li>Type’s Of plant’s</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-subscribe">
          <h4>For Every Update.</h4>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <p>planto © all right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;