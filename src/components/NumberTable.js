import React, { Component } from 'react'

export default class NumberTable extends Component {
    constructor() {
        super()
        this.state = {
            nums: ""
        }
    }

    handleOnChange(event) {
        this.setState({
            nums: event.target.value
        }, () => {
            console.log(this.state.nums)
        })
    }

    render() {
        // const { number } = this.props

        const table = []
        for (let index = 1; index <= 10; index++) {
            table.push(
                <p key={index}>
                    {this.state.nums} * {index} = {index * this.state.nums}
                </p>
            )
        }
        return (
            <div>
                <hr />
                <p> <b>Q3. Create a class component that renders a times table depending on the input “number” prop</b></p>
                <input type="number" className='form-control' placeholder='Enter a number' value={this.state.nums} onChange={(e) => this.handleOnChange(e)} />
                <div style={{display : this.state.nums === "" ? "none" : 'block'}}>
                    {table}
                </div>
            </div>
        )
    }
}
