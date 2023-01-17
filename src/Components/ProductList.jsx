
const ProductList = ({products, deleteProduct, selectProduct}) => {


    return(
        <ul>
            {
                products?.map( (productElement, index) => (
                    <li key={`product-${index}`}>
                        <h4><span>Nombre:</span> {productElement.name} </h4>
                        <h4><span>  Categoria:</span> {productElement.category}</h4>
                        <h4><span>Precio:</span> {productElement.price}</h4>
                        <h4><span>Disponible:</span>{productElement.isAvailable.toString()}</h4>
                            
                       <button className="delete" onClick={ () => deleteProduct(productElement.id) }>Eliminar</button>
                        <button className="edit" onClick={() => selectProduct(productElement)}> Editar</button> 
                    </li>
                ) )
            }
        </ul>
    )

}

export default ProductList