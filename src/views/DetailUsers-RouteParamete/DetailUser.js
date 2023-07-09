import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import './DetailUser.scss';

class DetailUser extends React.Component {

    state = {
        Users: {}
    }

    async componentDidMount() { //LifeCycle of React
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                Users: res && res.data && res.data.data ? res.data.data : {}
            })
        }

    }

    render() {

        let { Users } = this.state;
        let isEmptyObj = Object.keys(Users).length === 0; //check thuộc tính có rỗng ko?

        return (
            <>
                <div>
                    Hello from DetailUser with id: {this.props.match.params.id}
                </div>
                {isEmptyObj === false &&
                    <>
                        <div className="childe">
                            <div className="childe-infor">
                                User name: {Users.first_name} - {Users.last_name}
                            </div>
                            <div className="childe-infor">
                                User e-mail: {Users.email}
                            </div>
                            <div>
                                <img src={Users.avatar} alt="" />
                            </div>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser)