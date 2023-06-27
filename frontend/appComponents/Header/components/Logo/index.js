import orFalse from '~/services/orFalse';
import Urls from '~/services/Urls';
import { Link } from 'react-router-dom';
import cotoLogo from './coto.png';

class Logo extends React.Component {
  static propTypes = {
    currentUser: orFalse(PropTypes.object).isRequired
  }

  getLink = () => {
    const currentUser = this.props.currentUser;

    // Signed-in
    if (currentUser) {
      return Urls.courses();
    // Not signed-in
    } else {
      // This renders to the '/articles/welcome', but with a nice '/' link
      return '/';
    }
  }

  // render Coto logo and text on header
  render = () =>
    <Link className="logo" to={this.getLink()}>
      <img className="cotoBubble" src="https://cdn.discordapp.com/attachments/1121319791324561561/1123069844523327568/coto.png"></img>
      Coto Cards
    </Link>
}

export default Logo;
