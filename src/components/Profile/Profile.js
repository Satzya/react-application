import React from "react";
import './Profile.css'

class Profile extends React.Component {
    render() {
        return (
            <div hidden={this.props.profileHiddenFlag}>
                <h3>Password Change</h3>
                <form>
                    <input type="text" placeholder="Current Password" /><br />
                    <input type="text" placeholder="New Password" /><br />
                    <input type="text" placeholder="Confirm Password" /><br />
                    <input type="submit" value="Confirm" />
                </form>
            </div>
        )
    }
}

export default Profile;