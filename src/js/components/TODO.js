// Code for the TODO app goes here.
import React from 'react'

export default class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.state = {tasks: []};
        // subscribe n send state handler function 
        // which will be executed when addTask has generated n updated new store n publishes
        // state handler will update itself with tasks and React component will rerender to show tasks
    }

    addTaskHandler(event) {
        event.preventDefault();
        const {store} = this.props;
        const {addTaskAction} = store;
        addTaskAction(event.target.value);
    }

    removeTaskHandler(value) {
        const {store} = this.props;
        const {removeTaskAction} = store;
        removeTaskAction(value);
    }

    render() {
        const {store} = this.prop;
        const {tasks} = store.getState();

        return (<div>
            {tasks.map((task) => {
                <div className='task'>
                    {task.taskLabel}
                    <span>{task.status}</span>
                    <button onClick={this.removeTaskHandler.bind(this, task.taskLabel)}>
                        Remove
                    </button>
                </div>
            });}
            <input type="text" />
            <button onClick={this.addTaskHandler}>Add task</button>
        </div>);
    }
}