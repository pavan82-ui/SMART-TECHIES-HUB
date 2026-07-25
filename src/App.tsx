
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ClassComponent } from './presentation/class-component/class-component'
import ParentCom from './presentation/dom-manipulation-hooks/parent.component'
import FunctionalComponent from './presentation/functional-component/functional-component'
import LoginForm from './presentation/Login/login'
import ParentSib from './presentation/user-transition-hook/sibling/parent-component'
import SearchComponent from './presentation/user-transition-hook/use-tans-hook'
import { User } from './presentation/user/user'
import Registration from './presentation/reg/registration'
import Layout from './presentation/layout/layout'
import UserProvider from './presentation/shared/user-provider/user-provider'


function App() {
  const divStyle = {
    margin: "10px"
  }
  return (
    <div className="app-shell" style={divStyle}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path="/reg" element={<Registration></Registration>}></Route>
          <Route path="/reg/:id" element={<Registration></Registration>}></Route>
          <Route path='/users' element={
            <UserProvider>
              <Layout>
                <User></User>
              </Layout>
            </UserProvider>

          }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
