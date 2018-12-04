import * as React from 'react'

// From Facebook's Intro to React Page: https://reactjs.org/docs/hooks-intro.html
export function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0)

    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={ () => setCount(count + 1) }>
                Click me
        </button>
        </div>
    )
}
