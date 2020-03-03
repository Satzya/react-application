import React from "react";
import './Header.css'
class Header extends React.Component {

    tabIndexValues = []
    loadTabIndexes = () => {
        (this.props.navTabs).forEach((e, i) => {
            this.tabIndexValues.push(
                <li key={e}
                    className={(i === 0) ? this.props.active : this.props.inactive}
                    id={e}>
                    <a>{e}</a>
                </li>
            )
        }
        )
        return this.tabIndexValues
    }

    getNavSection = (event) => {
        console.log(event)
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
                <ul className="nav nav-tabs" onClick={this.myRef}>
                    {this.loadTabIndexes()}
                    {this.tabIndexValues = []}
                </ul>
            </div>
        )
    }
}
export default Header;