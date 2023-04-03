import React, { Component } from 'react'

export default class Button extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            disabled: ""
        }
    }
    incrCount() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            if (this.state.count >= 5) {
                this.setState({
                    disabled: "disabled"
                })
            }
        })
    }
    resetCount() {
        this.setState({
            count: 0,
            disabled: ""
        })
    }
    render() {
        return (
            <div>
                <hr />
                <p><b>Q5. Create a class component that renders a button, which when clicked 5 times, renders a win message and disables the button.</b></p>
                <div className="count-display">
                    <p>{this.state.count} times button pressed.</p>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary mx-2" onClick={() => this.incrCount()} disabled={this.state.disabled}>Counter</button>
                    <button className="btn btn-danger mx-2" onClick={() => this.resetCount()}>Reset</button>
                </div>
            </div>
        )
    }
}
