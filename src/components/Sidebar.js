import GithubLogo from '../assets/img/github-240.png';
import LinkedInLogo from '../assets/img/linkedin-240.png';
import TwitterLogo from '../assets/img/twitter-240.png';

function Sidebar() {
  return (
    <div className="socials">
      <a
        href="https://www.github.com/berneymark"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="social-icons"
          src={GithubLogo}
          alt="github-logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/berneymark"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="social-icons"
          src={LinkedInLogo}
          alt="linkedin-logo"
        />
      </a>
      <a
        href="https://www.twitter.com/berney_mark"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="social-icons"
          src={TwitterLogo}
          alt="twitter-logo"
        />
      </a>
    </div>
  );
}

export default Sidebar;
