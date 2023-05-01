import Counter from "./components/Counter";
import style from "./App.module.css";
function App() {
  return (
    <div className={style.app}>
      <h1 className={style.appHeader}>Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
