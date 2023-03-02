import React from 'react';

function Footer() {

  return (
    <footer>
      <div className="social-container">
        <ul className="social-icons">
          <li><a href="https://www.linkedin.com/in/jackson-mccarthy" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/JakMcCarthy" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
        </ul>
        <h4>© 2022 Jackson McCarthy</h4><br/>
      </div>
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
    </footer>
  );
};

export default Footer;