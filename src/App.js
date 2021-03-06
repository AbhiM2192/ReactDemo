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
import PostGet from './components/PostGet';
import PostForm from './components/PostForm';
import HooksCounter from './components/hooks/HooksCounter';
import HooksCounter2 from './components/hooks/HooksCounter2';
import HooksCounter3 from './components/hooks/HooksCounter3';
import HookCounter4 from './components/hooks/HookCounter4';
import HookEffect1 from './components/hooks/HookEffect1';
import HookEffect2 from './components/hooks/HookEffect2';
import MouseContainer from './components/hooks/MouseContainer';
import IntervalHookCounter from './components/hooks/IntervalHookCounter';
import DataFetchHook from './components/hooks/DataFetchHook';
import UserContexthookCompC from './components/hooks/UserContexthookCompC';
import CounterReducerHook1 from './components/hooks/CounterReducerHook1';
import CounterReducerHook2 from './components/hooks/CounterReducerHook2';
import HookReducerandContextCompParent from './components/hooks/HookReducerandContextCompParent';
import FilterReducerHookParent from './components/hooks/FilterReducerHookParent';
import DataFetch1 from './components/hooks/DataFetch1';
import DataFetchReducer from './components/hooks/DataFetchReducer';
import ParentUseCallback from './components/hooks/ParentUseCallback';
import CounterUseMemo from './components/hooks/CounterUseMemo';
import FocusInputUseRef from './components/hooks/FocusInputUseRef';
import TimerUseRef from './components/hooks/TimerUseRef';
import DocTitleHook1 from './components/hooks/DocTitleHook1';
import CounterLogic1 from './components/hooks/CounterLogic1';
import UserForm1 from './components/hooks/UserForm1';
import RouterDemo from './components/Routing-Demo/RouterDemo';

export const UserContextHook = React.createContext();
export const ChannelContextHook = React.createContext();
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
        {/* <UserProvider value='Abhishek'>
          <ContextComponentC/>
        </UserProvider> */}
        {/* <ContextComponentC/> */}
        {/* <PostGet/> */}
        {/* <PostForm/> */}
        {/* <HooksCounter/> */}
        {/* <HooksCounter2/> */}
        {/* <HooksCounter3/> */}
        {/* <HookCounter4/> */}
        {/* <HookEffect1/> */}
        {/* <HookEffect2/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalHookCounter/> */}
        {/* <DataFetchHook/> */}
        {/* <UserContextHook.Provider value={'Abhishek'}>
          <ChannelContextHook.Provider value={'Biyani'}>
            <UserContexthookCompC/>
          </ChannelContextHook.Provider>
        </UserContextHook.Provider> */}
        {/* <CounterReducerHook1/> */}
        {/* <CounterReducerHook2/> */}
        {/* <HookReducerandContextCompParent/> */}
        {/* <FilterReducerHookParent/> */}
        {/* <DataFetch1/> */}
        {/* <DataFetchReducer/> */}
        {/* <ParentUseCallback/> */}
        {/* <CounterUseMemo/> */}
        {/* <FocusInputUseRef/> */}
        {/* <TimerUseRef/> */}
        {/* <DocTitleHook1/> */}
        {/* <CounterLogic1/> */}
        {/* <UserForm1/> */}
        <RouterDemo/>
      </div>
    );
  }
  
}

export default App;
