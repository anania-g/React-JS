import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Functionclick from './components/Functionclick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
function App() {
  return (
    <div className="App">

<Counter/>
<br></br>
<Greet name='Diana' heroName='wonderwoman'>
  
  <p>ehhh</p>
</Greet>
<Welcome name='Bob' heroName='wonderwoman'>
  
</Welcome>

<br></br>

<Functionclick/>

<br></br>

<ClassClick></ClassClick>
<br></br>

<EventBind></EventBind>

<br>
</br>

<ParentComponent/>

<br></br>

<UserGreeting/>

    </div>
  );
}

export default App;
