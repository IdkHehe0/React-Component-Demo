//*******************Class Component-Statefull********************/
// class ChildComponent extends React.Component {
//     /*Hàm render() được gọi nhiều lần khi có Event và cập nhật code trực tiếp trên trang*/
//     render() {
//         console.log('>>>Check props: ', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;
//         let { name, age, address, arrJobs } = this.props;

//         return (
//             <>
//                 <div className="job-lists">
//                     {//map là vòng lặp for trong Javascript
//                         arrJobs.map((item, index) => { //item: từng phần tử trong mảng - index: chỉ số của mảng
//                             return (
//                                 <div key={item.id}>
//                                     {item.id} - {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }
// export default ChildComponent

//**********************Function Component-Stateless*******************************
//Function Component + Hook sẽ khiến code đạt hiệu quả và hiệu năng cho web cao hơn.
// const ChildComponent = (props) => {
//     let { arrJobs } = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {//map là vòng lặp for trong Javascript
//                     arrJobs.map((item, index) => { //item: từng phần tử trong mảng - index: chỉ số của mảng
//                         return (
//                             <div key={item.id}>
//                                 {item.id} - {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
// export default ChildComponent

//********************************************************************************************************************************************** */
import React from "react";
import './Demo.css';
class ChildComponent extends React.Component {
    /*Hàm render() được gọi nhiều lần khi có Event và cập nhật code trực tiếp trên trang*/
    state = {
        showJobs: false
    }

    ShoweHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteOneJob(job)

    }

    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'; // Xét lệnh điều kiện

        return (
            <>
                {/*if == false*/showJobs === false ? (/*in ra*/<div><button onClick={(status) => this.ShoweHide(status)}>Show</button></div>
                    /*Else*/) : (
                    <>
                        <div className="job-lists">
                            {//map là vòng lặp for trong Javascript
                                arrJobs.map((item, index) => { //item: từng phần tử trong mảng - index: chỉ số của mảng
                                    // if (item.salary > 500) {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.title} - {item.salary} $
                                            {/* <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span> */}
                                            <button className="button"
                                                onClick={() => this.handleOnClickDelete(item)}>delete</button>
                                        </div>
                                    )
                                    // }
                                    return null;
                                })
                            }
                        </div>
                        <div><button className="btn-show"
                            onClick={(status) => this.ShoweHide(status)}>Hide</button></div>
                    </>
                )}
            </>
        )
    }
}
export default ChildComponent