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

// let isVisible = false;

// const toggleVisibility = () => {
//   isVisible = !isVisible;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {isVisible ? "hide details" : "show details"}
//       </button>
//       {isVisible && (
//         <div>
//           <p>This Info is now visible</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
