import React from "react";
import './Header.css'
class Header extends React.Component {

    getNavSection = (event) => {
        // console.log(event.currentTarget)
        let idContent = event.currentTarget.id;
        this.props.setNavData(idContent)
    }

    render() {
        console.log(this.props.active)
        return (
            <div>
                <h1 className="App-header App">Welcome {this.props.userName}</h1>
                <ul class="nav nav-tabs">
                    for(){
                        <h1></h1>
                    }
                    <li onClick={this.getNavSection} className={this.props.active} id="Home"><a>Home</a></li>
                    <li onClick={this.getNavSection} className="" id="Profile"><a>Profile</a></li>
                </ul>
            </div>
        )
    }
}
export default Header;