import './App.css';
import Button from './components/Button';
import ClickCounterButton from './components/ClickCounterButton';
import CustomImage from './components/CustomImage';
import List from './components/List';
import NumberTable from './components/NumberTable';
import Q1 from './components/Q1';
import Q6 from './components/Q6';

function App() {
  return (
    <div className="App">
      <Q1 />
      <ClickCounterButton />
      <NumberTable number="9" />
      <CustomImage src="https://picsum.photos/200" title="Image Title" altText="Image Alt Text" href="https://picsum.photos" />
      <Button />
      <Q6 />
      <List />
    </div>
  );
}

export default App;
