// The core logic of the store will go here.

export default function createStore(initialState = {tasks: []}) {
    let store = initialState;

    const _addTask = ({task, status}, store) => {
        const newStore = {task: [...store.tasks, {'taskLabel': task, 'status': status}]}
        return newStore;
    }

    const addTaskAction = (task, status = 'added') => {
        const returnedStore = _addTask({task, status}, store);
        _updateStore(returnedStore);
    }

    const _removeTask = (removedTask, store) => {
        const newStore = {tasks: []};
        store && store.tasks.forEach((task) => {
            if(task.taskLabel !== removedTask) {
                newStore.tasks.push(task);
            }
        });
        return newStore;
    }

    const removeTaskAction = (removedTask, status = 'removed') => {
        const returnedStore = _removeTask(removedTask, store);
        _updateStore(returnedStore);
    }

    const _updateStore = (newStore) => {
        store = newStore
    }

    const getState = () => store;

    return {
        addTaskAction,
        removeTaskAction,
        getState
    }
}