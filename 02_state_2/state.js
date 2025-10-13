class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      tittle_1: "What are u studying?",
      tittle_2: "Learn what else",
    };
  }

  handleButtonClick = () => {
    this.setState({
      tittle_1: "Learn Javascript",
      tittle_2: "Learn React",
    });
  };
  render() {
    return (
      <div>
        <h3> {this.state.tittle_1} </h3>
        <h3> {this.state.tittle_2} </h3>
        <button onClick={this.handleButtonClick}>Let's Learn Programming</button>
      </div>
    );
  }
}
const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById("root")).render(myElement);
