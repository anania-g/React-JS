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
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets';
import Inline from './components/inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';


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

<br></br>

<NameList></NameList>

<br></br>

<StyleSheets primary={true}></StyleSheets>

<Inline ></Inline>

<h1 className='error'>Error</h1>
<h1 className={styles.success}>Success</h1>

<br></br>

<Form></Form>
    </div>
  );
}

export default App;
