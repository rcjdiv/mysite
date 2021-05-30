import footerStyles from '../styles/Footer.module.css';

const Footer = (props) => {
  return (
    <div
      className={footerStyles.footer}
      style={{ marginTop: `${props.margin}px` }}
    >
      <h4 className={footerStyles.follow}>Follow me 🤗</h4>
      <div className={footerStyles.logo}>
        <a href="https://twitter.com/JoannaMarieDia3" target="_blank">
          <img
            className={footerStyles.twitter}
            src="twitter.png"
            alt="twitter logo"
          />
        </a>

        <a href="https://github.com/JoannaMarieDiaz" target="_blank">
          <img
            className={footerStyles.github}
            src="github.svg"
            alt="github logo"
          />
        </a>
        <a href="https://www.facebook.com/j.annamarie.d/" target="_blank">
          <img
            className={footerStyles.github}
            src="facebook.png"
            alt="facebook logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
