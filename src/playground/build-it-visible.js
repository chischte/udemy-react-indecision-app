class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isVisible: false,
    };
  }
  handleToggleVisibility() {
    this.setState((previousState) => {
      return {
        isVisible: !previousState.isVisible,
      };
    });
    console.log(this.state.isVisible);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleVisibility}>
          {this.state.isVisible ? "Hide me" : "Make me Visible"}
        </button>
        {this.state.isVisible && <p>HAUDI</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
