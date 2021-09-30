import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

class App extends React.Component {
    render() {
        return <button id="hehe" className="hehe">I am clickable</button>
    }
}

ReactDOM.render(
    // <App />, document.getElementById("app").addEventListener("mouseenter", run)
    <App />, document.getElementById("app")
)

function run() {
    var hehe = document.getElementById("hehe");
    if (!hehe.style.right) {
        hehe.style.right = "3vw";
    } else {
        var posLeft = parseInt(hehe.style.right);
        if (posLeft <= 80) {
            hehe.style.right = "20vw";
        } else if (posLeft > 45) {
            posLeft += 150;
            hehe.style.right = (posLeft + 150) + "px";
        }
    }
}
