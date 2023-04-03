import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor() {
        super()
        this.state = {
            display: "block"
        }
    }

    onClicked() {
        console.log("clicked " + this.state.isClicked)
        this.setState({
            display: "none"
        })
    }

    render() {
        const { todo } = this.props
        return (
            <div className='containe' style={{ display: this.state.display }}>
                <div className="col-6 ">
                    <span>{todo}</span>
                </div>
                <div className="col-6">
                    <button type="button" className="btn btn-sm btn-outline-success my-1 mx-3" onClick={() => this.onClicked()}>
                        Mark as complete
                    </button>
                </div>
            </div>
        )
    }
}
