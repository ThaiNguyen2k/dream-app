import React from "react";
import styled from "styled-components";
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    padding: 0.25em 1em;
    margin-right: 10px`
const Btn = styled(Button)`
    color: blueviolet;
    border: 2px solid blueviolet;
    margin-left: 10px;
`


export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            loading: true
        };
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.value !== this.props.value) {
            return false;
        } else {
            return true;
        }
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ loading: false }) }, 3000)
    }
    onDecreaseCounter = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
    onIncreaseCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.loading ?
                        <div>Loading</div> :
                        <>
                            <Button onClick={() => this.onDecreaseCounter()}>-</Button>
                            <span>Count: {this.state.count}</span>
                            <Btn onClick={() => this.onIncreaseCounter()}>+</Btn>
                        </>
                }
            </div>
        );
    }
}