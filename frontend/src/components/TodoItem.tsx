import React from 'react'

const TodoItem = () => {
    return (
        <div className="Card">
            <div className="card-text">
                <h2>Todo name</h2>
                <span>Todo description</span>
            </div>
            <div className="card-button">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
