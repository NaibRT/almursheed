import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import './header-top.component.scss';

const HeaderTop = () => {
    const [toggle, setToggle] = useState({
        active: false,
      });
   


    function openButtons(){
        const currentState = toggle.active;
        setToggle({ active: !currentState });
    }
    
    return (
        <div className="topNav">
        <div className="container">
            <div className="topnavcontainer">
                <div className="firstcontainer">
                    <div className="currency">
                        <form>
                          <select>
                            <option className="optioncurrency">USD</option>
                            <option className="optioncurrency">AZN</option>
                          </select>
                        </form>
                    </div>
                    <div className="language">
                        <form>
                            <select>
                                <option className="optionlang">Azərbaycan</option>
                                <option className="optionlang">English</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="secondcontainer">
                    <div className="support">
                        <Link className="supportItem" to="/support">Dəstək</Link>
                        <Link className="supportItem" to="/contact">Bizimlə Əlaqə</Link>
                    </div>
                    <div id="dropLogBtn" onClick={openButtons} className="profile" >
                        <div id="loggedid" className={toggle.active ? 'open': null} >
                            <Link className="loggediditem" to="/">Daxil ol</Link>
                            <Link className="loggediditem" to="/register_chosing">Qeydiyyat</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeaderTop;