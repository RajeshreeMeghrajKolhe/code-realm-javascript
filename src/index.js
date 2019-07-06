import React from 'react'
import { render } from 'react-dom'
import createStore from './js/store/store'
import App from './js/components/TODO.js'

const target = document.getElementById('todo-app');
const store = createStore({tasks: []});

render(<App store={store} />,target);