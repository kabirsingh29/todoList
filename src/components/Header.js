import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="header_main_wrapper">
                <div className="header_main_left_menu">

                </div>
                <div className="header_main_right_menu">
                        <span className="header_todoList">
                            <NavLink to="/todoList">
                                <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/000000/external-list-support-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
                            </NavLink>
                        </span>
                    
                    <span className="header_account">
                        <NavLink to="/account">
                            <img src="https://img.icons8.com/ios-filled/40/000000/guest-male--v1.png"/>
                        </NavLink>
                    </span>
                    
                </div>
            </div>
        </>
    );
}
export default Header;
