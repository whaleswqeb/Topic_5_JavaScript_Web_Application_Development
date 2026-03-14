import Counter from "./Counter";

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>State Changer Demo</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Counter title="First Counter" />
        <Counter title="Second Counter" />
        <Counter title="Third Counter" />
      </div>
    </div>
  );
};

export default App;
