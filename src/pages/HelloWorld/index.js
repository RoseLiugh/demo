import React from 'react'
import { List, Card } from 'antd'

class Demo extends React.Component {
    render() {

        const data = [
            { title: "good", content: "bad" },
            { title: "good", content: "bad" },
            { title: "good", content: "bad" },
            { title: "good", content: "bad" },
            { title: "good", content: "bad" },
            { title: "good", content: "bad" },
        ];

        return (
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={item => {
                    return (
                        <List.Item>
                            <Card title={item.title}>{item.content}</Card>
                        </List.Item>
                    )
                }}
            />
        )
    }


}

export default Demo