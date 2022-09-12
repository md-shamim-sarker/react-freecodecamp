const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["todo1", "todo2"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["todo3", "todo4", "todo5"]}/>
      </div>
    );
  }
};