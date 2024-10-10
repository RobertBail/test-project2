import { useState, useEffect } from 'react'

const ItemSearch = ({onChangeCallback }) => {
 const [apiProducts, setApiProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [filteredProducts, setFilteredProducts] = useState([]);
 const [searchItem, setSearchItem] = useState("");
 const [searchShow, setSearchShow] = useState(false);

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


const handleInputChange = e => {
  const searchTerm = e.target.value;
  setSearchItem(searchTerm)
  onChangeCallback && onChangeCallback(inputValue)

  if(e.target.value===""){
    setSearchShow(false);
  }
  else {
    setSearchShow(true);
  }

 
    const filteredItems = apiProducts.filter((products) =>
      products.title.toLowerCase().includes(searchTerm.toLowerCase())
      
    );
  
    setFilteredProducts(filteredItems);
  }


function searchList() {
  if (searchShow) {
    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>There was an error loading the items</p>}
        {!loading && !error && filteredProducts.length === 0
          ? <p>No products found</p>
          : <ul>
            {filteredProducts.map(item => <li key={item.id}>{item.title}: {item.description} Price: {item.price} Ratings: {item.rating} Stock: {item.stock}</li>)}
          </ul>
        }
      </>
    )
  }
}

return (
  <section>
    <div>
      <input 
        type = "text" 
        value={searchItem}
        onChange = {handleInputChange}
        placeholder = "Type to Search Products"  
      />
    </div>
    {searchList()}
  </section>
 );
}

export default ItemSearch