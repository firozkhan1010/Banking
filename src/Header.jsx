import "./Header.css";
import { Link } from 'react-router-dom'
import bank from './Banklogo.jpg'

function Header({setSearchData}) {
  return (
    <div className="container">
      <div className="main-header">
        <img src={bank} alt="" height="70px" width="80px" />
        <input type="text" placeholder="Search account"onChange={(e) => setSearchData (e.target.value)}/>
        <Link to="/createaccount"><button>Create Account</button></Link>
         <Link to="/fundtransfer"><button>Fund Transfer</button></Link>
      </div>
    </div>
  );
}

export default Header;
