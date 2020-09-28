import React, { Component } from 'react'

export default class HandleEvent extends Component {
    
    showTitle = () => {
        alert('Hello Tuan');
    }

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }
    render() {
        return (
            <div>
                {/* Xử lý sự kiện truyền callback */}
                <button onClick={this.showTitle}>Hello</button>

                {/* Xử lý sự kiện sử dụng hàm trung gian */}
                <button onClick = {()=>{
                    this.showTitle();
                }}>Show title</button>
                <br /> <br />

                <button onClick={this.showMess.bind(this,'Tuấn')}>Show Mess</button>

                <button onClick={() => {
                    this.showMess('Tuấn');
                }}>Show mess</button>
            </div>
        )
    }
}
