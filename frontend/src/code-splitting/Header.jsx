import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo from './imagens/star.png';
import './styles.css';

const Header = () => {
    return (
            <>            
                <header>
                    <nav className="navbar navbar-expand-lg head">
                        <Link className="navbar-brand" to="/">
                            <img
                            src={logo}
                            width="80"
                            height="80"
                            className="d-inline-block align-top logo"
                            alt="StarEletro"
                            loading="lazy"/>
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center">
                            <ul>
                                <li className="navigation">
                                    <NavLink className="nav-link" to="/produtos">
                                    <span className="navig">Produtos</span>
                                    </NavLink>
                                </li>
                                <li className="navigation">
                                    <NavLink className="nav-link" to="/lojas">
                                    <span className="navig">Lojas</span>
                                    </NavLink>
                                </li>
                                <li className="navigation">
                                    <NavLink className="nav-link" to="/contato">
                                    <span className="navig">Contato</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
             </header>
        </>
    )
}
export default Header;