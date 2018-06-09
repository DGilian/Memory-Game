import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
})

it('test', () => {
    const test = "hello"
    expect(test).toBe("hello")
})