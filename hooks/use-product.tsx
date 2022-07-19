import React from 'react'
import useSWR from 'swr'
import { add, removeItem } from '../api/product';



const useProducts = () => {
    const {data , error , mutate} = useSWR("/products");


    //create
    const create = async (item:any) => {
        const product = await add(item);
        mutate([...data , product]);
    };
    //update
    //delete

    //remove
    const remove = async (id:any) => {
        await removeItem(id);
        const newProducts = data.filter((item: any) => item.id != id);
        mutate(newProducts)
    };
  return {
    data,
    error,
    create,
    remove,
    mutate,
  }
}

export default useProducts