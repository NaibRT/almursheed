import React from 'react';
import './header-bottom.component.scss'
import { Link } from "react-router-dom";
const HeaderBottom = () => {
    return (
    <div className="bottomNav">
        <div className="container">
            <div className="navcontainer">
                <Link className="bottomnav_item active" to="/">Ana səhifə</Link>
                <Link className="bottomnav_item " to="/about">Haqqımızda</Link>
                <Link className="bottomnav_item " to="/guide_and_drivers">Sürücülər & Bələdçilər</Link>
                <Link className="bottomnav_item " to="/accomadation">Məskən</Link>
                <Link className="bottomnav_item " to="/flight">Uçuş Rezervasiyası</Link>
                <Link className="bottomnav_item " to="/attractive_locations">Cəlbedici Yerlər</Link>
                <Link className="bottomnav_item " to="/offers">Təkliflər</Link>
            </div>
        </div>
    </div>
    )
}

export default HeaderBottom;