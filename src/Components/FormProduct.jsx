import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const FormProduct = ({createProductData, productSelectedData, updateProduct}) => {

    const { register, handleSubmit, formState : { errors }, reset } = useForm()
  

    const getFormData = ( data ) => {
    
        console.log(data);
        if( productSelectedData ){
      
            updateProduct(data)
        }else{
          
            createProductData(data)

            resetForm()
        }
    }

    useEffect( () => {
        if( productSelectedData !== null ){
        
            reset(productSelectedData)
        }else{
         
            resetForm()
        }
    }, [productSelectedData] )

    const resetForm = () => {
        reset(
            {
                name: "",
                category: "",
                price: "",
                isAvailable: "false"

               
            }
        )
    }

    return(
        <div>
            <form className='Ccc' onSubmit={ handleSubmit(getFormData) }>
                <div className="Box">
                    <label htmlFor="user-name">Nombre</label>
                    <input 
                    type="text" 
                    id="user-name"
                    { ...register("name", {
                        required : true
                    }) }
                    />
                    {  errors.name?.type === "required" && <span role="alert">Necesario</span> }

                </div>
                <div className="Box">
                    <label htmlFor="user-lastname">Category</label>
                    <input 
                    type="text" 
                    id="user-lastname"
                    { ...register("category", {
                        required : true
                    }) }
                    />
                    {  errors.name?.type === "required" && <span role="alert">Necesario</span> }

                </div>
                <div className="Box">
                    <label htmlFor="user-password">Precio</label>
                    <input 
                    type="number" 
                    id="user-password"
                    { ...register("price", {
                        required : true
                    }) }
                    />
                    {  errors.name?.type === "required" && <span role="alert">Necesario</span> }

                </div>
                <div className="Box">
                    <label htmlFor="user-email">Disponible</label>
                    <input 
                    type="checkbox" 
                    id="user-email"
                    { ...register("isAvailable") }
                    />
                </div>
                
                    
   
                <button className="btn-edit" type="submit">Enviar</button>
            </form>
        </div>
    )

}

export default FormProduct