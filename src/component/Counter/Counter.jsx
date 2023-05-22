import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            loading: true
        };
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({loading: false})},3000)
    }
    onDecreaseCounter=()=>{
        this.setState({
            count: this.state.count - 1
        });
    }
    onIncreaseCounter=()=>{
        this.setState({
            count: this.state.count + 1
        });
    }
    render(){
        return (
            <div>
                {
                    this.state.loading?
                    <div>Loading</div>:
                <>
                <button onClick={()=> this.onDecreaseCounter() }>-</button>
                <span>Count: {this.state.count}</span>
                <button onClick={()=> this.onIncreaseCounter() }>+</button>
                </>
                }
            </div>
        );
    }
}