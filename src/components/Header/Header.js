import React from "react";
import './Header.css'
class Header extends React.Component {

    tabIndexValues = []
    loadTabIndexes = () => {
        (this.props.navTabs).forEach(e =>
            this.tabIndexValues.push(
                <li key={e} onClick={this.getNavSection}
                    className
                    id={e}>
                    <a>{e}</a>
                </li>)
        )
        console.log(this.tabIndexValues)
        return this.tabIndexValues
    }

    getNavSection = (event) => {
        if (!event) {
            this.tabIndexValues[0].props.className = this.props.setNavData(this.tabIndexValues[0].props, "Home")
        }
        // let idContent = event.currentTarget.id;
        // this.props.setNavData(idContent)
    }

    render() {
        return (
            <div>
                <h1 className="App-header App">Welcome {this.props.userName}</h1>
                <ul className="nav nav-tabs">
                    {this.loadTabIndexes()}
                    {this.getNavSection()}
                </ul>
            </div>
        )
    }
}
export default Header;