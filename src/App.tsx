import "./App.css";
import useScrollbar from "./custom-hooks/useScrollbar";

const App = () => {
  const { scroll } = useScrollbar();
  
  return (
    <div>
      <div 
        style={{ width: `${scroll}%` }}
        className="scrollbar"
      />
      <header className="header">
        Header
      </header>
      <main className="main">
          Main
      </main>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
