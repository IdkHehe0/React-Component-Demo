import React from "react";
import { withRouter } from "react-router-dom"; //học Redirect "chuyển trang tự động"
import Color from "../HOC/Color";
import picture from '../../assets/img/Genshin Impact 03_11_2022 21_12_03.png';
import './HomeCss.scss';

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/')
        }, 3000) //setTimeOut là hàm sẽ được thực thi sau 1 khoảng times do ta cài đặt.
    }


    render() {
        console.log('>>>Check props: ', this.props)
        return (
            <>
                <div>
                    This is Homepage
                </div>
                <div className="img_pic">
                    <img src={picture} alt="" />
                    {/*Muốn thêm hình ảnh thì nên dùng cách "import". Nếu gắn link dẫn vào "src" thì sẽ bị lỗi code đấy!!!*/}
                </div>
            </>
        )
    }
}
//HOC: higher order component
export default Color(Home)//....(component): lấy thêm các tính năng của thằng bọc.