import React from 'react'
import { useForm } from 'react-hook-form';

import useProducts from '../../hooks/use-product';



type ProductsProps = {
    products: any[];
  }

const creat = ({products}: ProductsProps) => {

    const { data, error, create } = useProducts();
    if (error) return <div>failed to load</div>;
    // if (!data) return <div>loading...</div>;

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onhandleSubmit = (data: any) =>{
        console.log(data);
        create(data);

        // create({...data, products});
    }
    return (
        <div>
            <h2>them sp</h2>
            <hr />
            <hr />
            <hr />
            <hr />

        <form action="" onSubmit={handleSubmit(onhandleSubmit)}>

        <div className="form-group">
            <label htmlFor=""> Name</label>
            <input type="text" {...register("name")}/>
        </div>
         
         <input type="submit" />
        
        {/* <button onClick={() => create({ id: 15, name: "Product 15" })}>Create</button> */}
        </form>

        </div>
  
    );
  
}

export default creat