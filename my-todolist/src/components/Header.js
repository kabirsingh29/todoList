import { BrowserRouter as Router, Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <Router>
            <div className="header_main_wrapper">
                <div className="header_main_left_menu">

                </div>
                <div className="header_main_right_menu">
                        <span className="header_todoList">
                            <Link to="/todolist">
                                <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/000000/external-list-support-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
                            </Link>
                        </span>
                    
                    <span className="header_account">
                        <Link to="/account">
                            <img src="https://img.icons8.com/ios-filled/40/000000/guest-male--v1.png"/>
                        </Link>
                    </span>
                    
                </div>
            </div>
        </Router>
        </>
    );
}
export default Header;
