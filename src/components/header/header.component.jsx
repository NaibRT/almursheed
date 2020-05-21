import React,{Component} from 'react';
import HeaderTop from './header-top/header-top.component'
import HeaderCenter from './header-center/header-center.component'
import HeaderBottom from './header-bottom/header-bottom.component'
class Header extends Component {
   
    render(){
        return (
            <nav>
                <HeaderTop />   
                <HeaderCenter />
                <HeaderBottom />
            </nav>
        )
    }
}

export default Header;