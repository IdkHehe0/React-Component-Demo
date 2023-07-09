import React from "react";
//Bài 15: Split Component: Chia cắt nhiều Component ra để dễ tái sử dụng code.
class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState(
            {
                title: event.target.value,
            }
        )
    }

    handleChangeSalary = (event) => {
        this.setState(
            {
                salary: event.target.value,
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault() //Ngăn chặn 1 sự kiện refresh lại trang
        if (!this.state.title || !this.state.salary) {
            alert('Missing Blank')
            return;
        }
        console.log('>>> check data input: ', this.state)//in ra dòng
        this.props.addNewJob({
            id: 'Job' + Math.floor(Math.random() * 999),
            title: this.state.title,
            salary: this.state.salary,
        })//gọi prop ngược lên Component Cha

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form action="/action_page.php">

                <label htmlFor="fname">Job Title:</label><br />
                <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitleJob(event)} /><br />

                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />

                <input type="submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )

    }
}

export default AddComponent