import React from "react";
import './Header.css'
class Header extends React.Component {
    value = "";
    tabIndexValues = [];
    loadTabIndexes = () => {
        (this.props.navTabs).forEach((e, i) => {
            this.tabIndexValues.push(
                <li key={e} onClick={this.getNavSection}
                    className={(i === 0) ? this.props.active : ""}
                    id={e}>
                    <a>{e}</a>
                </li>
            )
        }
        )
        this.value = this.tabIndexValues[0];
        return this.tabIndexValues
    }

    getNavSection = (event) => {
        this.props.setNavData(event)
    }
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div>
                <h1 className="App-header App">Welcome {this.props.userName}</h1>
                <ul className="nav nav-tabs">
                    {this.loadTabIndexes()}
                    {this.tabIndexValues = []}
                </ul>
            </div>
        )
    }
}
export default Header;