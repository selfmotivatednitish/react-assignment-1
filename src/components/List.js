import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class List extends Component {
    render() {
        return (
            <div>
                <hr />
                <p> <b>
                    Q7. Create two class components List and TodoItem . The "List" component renders 3
                    "TodoItems". The "TodoItem" component takes a prop of "todo" which is a text and displays the text
                    and a button next to it. The button has text - “Mark as complete”, on clicking the button, the
                    "TodoItem" does not render anything anymore
                </b></p>
                <div>
                    <TodoItem todo="Task 1" />
                    <TodoItem todo="Task 2" />
                    <TodoItem todo="Task 3" />
                </div>
            </div>
        )
    }
}
