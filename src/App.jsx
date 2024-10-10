import { useState, useEffect } from 'react'
import ItemSearch from './components/ItemSearch'
//import Input from './components/Input'
//future? link product names to URLs each, coles or WW etc. details

function App() {
  //const [apiProducts, setApiProducts] = useState([])
  // initialize the loading state as true
 // const [loading, setLoading] = useState(true)
  // initialize the error state as null
 // const [error, setError] = useState(null)
  //const [searchItem, setSearchItem] = useState('')
 // const [filteredProducts, setFilteredProducts] = useState([])

 // const [searchItem, setSearchItem] = useState("");
 // const [searchShow, setSearchShow] = useState(false); 


  //const Input = ({ onChangeCallback }) => {
    // state to handle the input value

    // new handler function that will update the state 
    // when the input changes

  //  function ItemList() {
  //    if (searchShow) {
  //      return (
          
  //          <ItemList items={filteredProducts} />
    
   //     );
   //   }
  //  }

  //const ItemList = ({items}) => {
  //  if (searchShow) {
   // return (
    //  <>
     //   {/* replace filteredProducts with items*/}
      //  {items.length === 0
      //    ? <p>No products found</p>
       //   : <ul>
        //    {items.map(item => <li key={item.id}>{item.title}: {item.description} Price: {item.price} Ratings: {item.rating} Stock: {item.stock}</li>)}
      //    </ul>
   //     }
 //     </>
//    )
 // }
//}
 


return (
<> 
  <ItemSearch/>

</>
  )
}

export default App
