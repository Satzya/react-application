import React from "react";
import './Header.css'
class Header extends React.Component {

    tabIndexValues = []
    loadTabIndexes = () => {
        (this.props.navTabs).forEach((e, i) => {
            this.tabIndexValues.push(
                <li key={e} onClick={this.getNavSection}
                    className={(i === 0) ? this.props.active : ""}
                    id={e}>
                    <a>{e}</a>
                </li>)
        }
        )
        return this.tabIndexValues
    }

    getNavSection = (event) => {
        this.props.setNavData(event)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps)
        // console.log(nextState)
        // nextProps.active = this.props.active
        return false
    }
    render() {
        return (
            <div>
                <h1 className="App-header App">Welcome {this.props.userName}</h1>
                <ul className="nav nav-tabs">
                    {this.loadTabIndexes()}
                </ul>
            </div>
        )
    }
}
export default Header;