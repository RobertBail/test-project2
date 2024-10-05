import { useState, useEffect } from 'react'
import ItemList from './components/ItemList'
import Input from './components/Input'
//future? link product names to URLs each, coles or WW etc. details

function App() {
  const [apiProducts, setApiProducts] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
  //const [searchItem, setSearchItem] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  
  const filterItems = (searchTerm) => { 
    // we previously set the input state here, 
    // you can remove that now
    const filteredProducts = apiProducts.filter((products) =>
      products.title.toLowerCase().includes(searchTerm.toLowerCase())
      
    );

    setFilteredProducts(filteredProducts);
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setApiProducts(data.products)
        setFilteredProducts(data.products)
      })
      .catch(err => {
        console.log(err)
        // update the error state
        setError(err)
      })
      .finally(() => {
        // wether we sucessfully get the products or not, 
        // we update the loading state
        setLoading(false)
      })
  }, [])


  return (
    <>
      <Input onChangeCallback={filterItems} />
      {/* if the data is loading, show a proper message */}
      {loading && <p>Loading...</p>}
      {/* if there's an error, show a proper message */}
      {error && <p>There was an error loading the products</p>}
      {/* if it finished loading, render the items */}
      {!loading && !error && <ItemList items={filteredProducts} />}
    </>
  )
}

export default App
