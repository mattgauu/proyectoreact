import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
   <div className='containter-app'>
    
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />
    
   </div>
  )
}

export default App
