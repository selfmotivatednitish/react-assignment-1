import React, { Component } from 'react'

export default class ClickCounterButton extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    incrCount() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Callback value ", this.state.count)
        })
    }
    resetCount() {
        this.setState({
            count: 0
        })
    }
    render() {

        return (
            <div className='container'>
                <hr />
                <p> <b>Q2. Create a class component that renders a button which shows how many times it has been clicked.</b> </p>
                <div className="count-display">
                    <p>{this.state.count} numbers of time button pressed.</p>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary mx-2" onClick={() => this.incrCount()}>Counter</button>
                    <button className="btn btn-danger mx-2" onClick={() => this.resetCount()}>Reset</button>
                </div>
            </div>
        )
    }
}
