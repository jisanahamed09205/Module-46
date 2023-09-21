
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefullForm from './Components/StatefullForm/StatefullForm'

function App() {

  // const handleSignUpSubmit = (data) =>{
  //   console.log('sign up data',data);
  // }
  // const handleUpdateProfile = (data) =>{
  //   console.log('profile Update data',data);
  // }



  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>




      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm 
      formTitle={'Sign up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <p>Forgot Password to click this</p>
        </div>
      </ReuseableForm>
      <ReuseableForm 
      formTitle={'Profile Update'} 
      submitBtnText={'Update'} 
      handleSubmit={handleUpdateProfile}>
        <div>
          <p>Forgot Password to click this</p>
        </div>
      </ReuseableForm> */}
    </>
  )
}

export default App
