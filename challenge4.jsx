const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Pseodo Code:
// ReactDOM.render(componentToRender, targetNode);
ReactDOM.render(JSX, document.getElementById('challenge-node'));