import React from 'react'
import HelloWorld from '../../components/Course/HelloWorld'

class Demo extends React.Component {
    render() {
        console.log("正在渲染", this.state)

        return (
            <div>
                <HelloWorld name={this.state.name} />
                <button onClick={e => {
                    this.setState({ name: "李四" });
                    console.log("更新状态", this.state)
                }}>
                    点击
                </button>
            </div>
        )
    }

    componentDidMount() {
        console.log("挂载成功", this.state)
    }

    componentDidUpdate() {
        console.log("更新成功", this.state)
    }

    constructor(props) {
        super(props)
        console.log("正在构造")
        this.name = "张三"

        this.state = {
            name: "张三"
        }
    }
}

export default Demo