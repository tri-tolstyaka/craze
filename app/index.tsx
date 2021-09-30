import React from 'react'
import ReactDom from 'react-dom'
// import './index.css'

export default () => {
    return <div>Hey there</div>
}

export const mount = (Component) => {
    // the name of the component to mount can be found in templates/views/index.hbs
    ReactDom.render(<Component />, document.getElementById('root'))
}

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('root') as any)
}