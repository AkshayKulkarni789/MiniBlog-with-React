import React from 'react'

const Rainbow = (wrappedComponent) => {
    const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
    const randomColor = colors[Math.floor(Math.random()*5)]
    const className = randomColor + '-text'

    return (props) => {
        return(
            <div className={className}>
                <wrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow