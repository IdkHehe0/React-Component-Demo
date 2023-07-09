import React from "react";
import axios from "axios";//dùng để gọi API
import './ListUser.scss';
import { withRouter } from 'react-router-dom';

class ListUser extends React.Component {

    state = {
        listUsers: []
    }

    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=2')
    //         .then(res => (
    //             console.log('>>>Check: ', res.data.data)
    //         ))
    // }


    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    ClickMe = (user) => {
        console.log('>>>Check: ', user)
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        // let listUsers = this.state; // Thiếu dấu {} thì nó sẽ không lấy được data có trong state!
        let { listUsers } = this.state;
        return (
            <div className="list-user-containter">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="childe" key={item.id} onClick={() => this.ClickMe(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })}


                </div>
            </div>
        )
    }
}

export default withRouter(ListUser) 