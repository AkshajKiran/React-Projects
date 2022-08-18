import './Header.css';
import logo from './../Assets/images/global/portal-logo.png';

function Header() {
  return (
    <div className="Header">
      <div className='microcontainer mauto'>
        <div className='navRow'>
          <img className='logoImg' src={logo} alt="logo" />
          <div className='title-regular font-weight-black site-title'>ITOM Practitioner Portal</div>
          <div className="pRight-2 mLeft-110 navItem">Documentation</div>
          <div className="pRight-2">
            <a className='navItem' href="https://www.microfocus.com/en-us/support/" target="_blank">
              Support
            </a>
          </div>
          <div className="pRight-2">
            <a className='navItem'
              href="https://www.youtube.com/channel/UC35gcEr3eOT_xM_5nEBXmTA/playlists?view=50&sort=dd&shelf_id=17"
              target="_blank">
              Videos
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
