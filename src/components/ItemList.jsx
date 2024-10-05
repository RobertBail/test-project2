const ItemsList = ({items}) => {
    return (
      <>
        {/* replace filteredProducts with items*/}
        {items.length === 0
          ? <p>No products found</p>
          : <ul>
            {items.map(item => <li key={item.id}>{item.title}: {item.description} Price: {item.price} Ratings: {item.rating} Stock: {item.stock}</li>)}
          </ul>
        }
      </>
    )
  }
  
  export default ItemsList