import { useHistory } from "react-router-dom";
import logo from "./puppy.svg";

const Header = ({ subtitle }) => {
    const history = useHistory();

    const toMainPage = () => {
        history.push('/')
    };

    return (
        <header className="row">
            <div className="col-md-5" onClick={toMainPage}>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
        </header>
    );
}

export default Header;