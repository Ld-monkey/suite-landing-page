import Logo from '../../assets/images/logo.svg';
import IconFacebook from '../../assets/images/icon-facebook.svg';
import IconInstagram from '../../assets/images/icon-instagram.svg';
import IconTwitter from '../../assets/images/icon-twitter.svg';

function Footer() {
  return (
    <footer className="my-14 flex flex-col items-center gap-8">
      <img src={Logo} alt="Official Logo" />
      <p>Copyright - Suite</p>
      <div className="flex w-32 justify-between">
        <img src={IconFacebook} alt="Facebook icon" />
        <img src={IconInstagram} alt="Instagram icon" />
        <img src={IconTwitter} alt="Twitter Icon" />
      </div>
    </footer>
  );
}

export default Footer;
