 
import './App.css'
import { ClassComponent } from './presentation/class-component/class-component'
import ParentCom from './presentation/dom-manipulation-hooks/parent.component'
import  FunctionalComponent  from './presentation/functional-component/functional-component'
import SearchComponent from './presentation/user-transition-hook/use-tans-hook'
import { User } from './presentation/user/user'


function App() {
  const divStyle={
    margin:"10px"
  }
  return (
    <div className="app-shell"  style={divStyle}>
      <ParentCom></ParentCom>
      <FunctionalComponent></FunctionalComponent>
      <ClassComponent></ClassComponent>
      <User></User>
      <SearchComponent></SearchComponent>
    </div>
  )
}

export default App
