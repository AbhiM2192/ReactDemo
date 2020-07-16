import React,{Component} from 'react';

import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameListComponent from './components/NameListComponent';
import Styles from './components/Styles';
import Inline from './components/Inline';
import './components/AppStyles.css';
import style from './components/AppStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import Parent from './components/Parent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import CounterRenderProps from './components/CounterRenderProps';
import ContextComponentC from './components/ContextComponentC';
import { UserProvider } from './components/userContext';

class  App extends Component{

  
  render(){
    return (
      <div className="App">
        {/* <h1 className='error'>error</h1> */}
        {/* <h1 className={style.primary}>Success</h1> */}
        {/* <Greet name='Bruce'>
          <button>Action</button>
        </Greet>   */}
        {/* <Greet name='Clark'/> */}
        {/* <Greet name='Diana'/> */}
        {/* <Welcome name='abhishek'/> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameListComponent/> */}
        {/* <Styles primary={true}/> */}
        {/* <Inline/> */}
        {/* <Form/> */}
        {/* <LifecycleA/> */}
        {/* <FragmentDemo/> */}
        {/* <Tables/> */}
        {/* <Parent/> */}
        {/* <RefsDemo/> */}
        {/* <FocusInput/> */}
        {/* <FRParentInput/> */}
        {/* <PortalDemo/> */}
        {/* <ErrorBoundary>
          <Hero heroName='Batman'/>
          <Hero heroName='Superman'/>
          <Hero heroName='Joker'/>
        </ErrorBoundary> */}
        {/* <ClickCounter name='Abhishek'/> */}
        {/* <HoverCounter/> */}
        {/* <ClickCounter2/> */}
        {/* <HoverCounter2/> */}
        {/* <User render= {(isLoggedIn) => isLoggedIn ? 'Maheshwari' : 'Guest'} /> */}
        {/* <CounterRenderProps>
        {
          (count,incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount}/>
        }
        </CounterRenderProps>  */}
        {/* <CounterRenderProps>
        {
          (count,incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount}/>
        }
        </CounterRenderProps>  */}
        <UserProvider value='Abhishek'>
          <ContextComponentC/>
        </UserProvider>
        <ContextComponentC/>
      </div>
    );
  }
  
}

export default App;
