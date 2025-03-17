import logo from './logo.svg';
import './App.css';

let name = "Lorem";
function App() {
  return (
    <>
    <nav>
      <li>home</li>
      <li>about</li>
      <li>contact</li>
    </nav>
    <div className="container">
      <h1>Lorem ipsum dolor: {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellat repudiandae praesentium consectetur, illo autem velit magni a ipsum perferendis maxime obcaecati molestiae nam nesciunt numquam architecto modi error in.</p>
    </div>
    </>
  );
}

export default App;
