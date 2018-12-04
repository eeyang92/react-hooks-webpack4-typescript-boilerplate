import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Example } from './components/Example';

// import style from './main.css'

const App = () => {
    return (
        <div>
            <p>React Boilerplate</p>
            <Example />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
