 
import './App.css'
import { ClassComponent } from './presentation/class-component/class-component'
import  FunctionalComponent  from './presentation/functional-component/functional-component'
import { User } from './presentation/user/user'


function App() {
  const divStyle={
    margin:"10px"
  }
  return (
    <div className="app-shell"  style={divStyle}>
      <FunctionalComponent></FunctionalComponent>
      <ClassComponent></ClassComponent>
      <User></User>
    </div>
  )
}

export default App
