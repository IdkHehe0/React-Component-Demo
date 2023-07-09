import React from "react";

class MyFirstComponent extends React.Component {

    state = {
        name: 'Truong',
        channel: 'Vlog'
    }

    handleClickButton = () => {
        {/* DOM Event OnClick */ }
        alert('You had Click the button')
    }

    // 'Onchange' chỉ cho phép thay đối 1 đối tượng thôi. Nếu đổi nhiều thì cần dùng vòng lặp 
    handleOnChangeFirst = (event) => {
        {/*DOM Event OnChange*/ }
        this.setState(
            {
                name: event.target.value,
                // channel: event.target.value
            }
        )
    }
    handleOnChangeSecond = (event) => {
        {/*DOM Event OnChange*/ }
        this.setState(
            {
                channel: event.target.value,
                // channel: event.target.value
            }
        )
    }

    /*Hàm render() được gọi nhiều lần khi có Event và cập nhật code trực tiếp trên trang*/
    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeFirst(event)} />{/*Lấy dữ liệu -> in ra màn hình*/}
                    hello my component. My name is {this.state.name}
                </div>

                <div className="second">
                    <input value={this.state.channel} type="text"
                        onChange={(event) => this.handleOnChangeSecond(event)}></input>
                    My Youtube channel: {this.state.channel}
                </div>

                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>{/*Tạo một nút bấm*/}
                </div>
            </>
        )
    }
}
export default MyFirstComponent