let isVisible = false;

const toggleVisibility = () => {
  isVisible = !isVisible;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "hide details" : "show details"}
      </button>
      {isVisible && (
        <div>
          <p>This Info is now visible</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
