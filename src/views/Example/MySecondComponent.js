import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MySecondComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'Job1', title: 'developer', salary: '5000' },
            { id: 'Job2', title: 'tester', salary: '3000' },
            { id: 'Job3', title: 'freelancer', salary: '1000' }
        ]
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>>run DidUpdate: ', 'prev State: ', prevState, 'currentState: ', this.state)
    }

    componentDidMount() {//Hàm để gọi API phía BackEnd
        console.log('>>>> run DidMount')
    }

    addNewJob = (job) => {
        console.log('Check job from parent: ', job)
        let currentJob = this.state.arrJobs;
        currentJob.push(job)
        this.setState({
            arrJobs: currentJob,
        })
        // this.setState({
        //     arrJobs: [...this.state.arrJobs, job]
        // Toán tử (Spread Syntax) "...": copy phần tử đã có
        //",job": tương đương với câu lệnh ".push"
        // })
    }

    handleSubmit = (event) => {
        event.preventDefault() //Ngăn chặn 1 sự kiện refresh lại trang
        console.log('>>> check data input: ', this.state)

    }

    deleteOneJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    /*Hàm render() được gọi nhiều lần khi có Event và cập nhật code trực tiếp trên trang*/
    render() {
        // console.log(this.state);
        return (
            //JSX => return block
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent arrJobs={this.state.arrJobs} deleteOneJob={this.deleteOneJob} />
            </>
        )
    }
}
export default MySecondComponent