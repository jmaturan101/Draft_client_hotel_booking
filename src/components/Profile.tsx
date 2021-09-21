import React from "react";
import { Link } from "react-router-dom";
import { User, UserAttribute } from "../model/model";
import { AuthService } from "../services/AuthService";

interface ProfileState {
    userAttributes: UserAttribute[]
}
interface ProfileProps {
    user: User | undefined
    authService: AuthService
}
export class Profile extends React.Component<ProfileProps, ProfileState> {

    state: ProfileState = {
        userAttributes: []
    }

    async componentDidMount(){
        if (this.props.user) {
            const userAtrs = await this.props.authService.getUserAttributes(this.props.user);
            this.setState({
                userAttributes: userAtrs
            })
        }
    }


    private renderUserAttributes(){
        const rows = []
        for (const userAttribute of this.state.userAttributes) {
            rows.push(<tr key={userAttribute.Name}>
                <td>{userAttribute.Name}</td>
                <td>{userAttribute.Value}</td>
            </tr>)

        }
        return <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    }

    render() {
            let profileBooker 
            if (this.props.user) {
                profileBooker = <div>
                <h3>Hello {this.props.user.userName}</h3>
                Here are your attributes:
                {this.renderUserAttributes()}
                </div>
        } else {
            profileBooker = <div>
            Please <Link to='login'>Login</Link>
            </div>
        }
        return(
            <div>
                Welcome ti the profile page!
                {profileBooker}
            </div>
        )
    }
}