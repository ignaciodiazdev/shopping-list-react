import Header from "./components/Header";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <>
      <Header />
      <main className="px-3 max-w-7xl m-auto">
        <Navigation />
      </main>
    </>
  );
}

export default App;
