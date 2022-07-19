import useSWR from "swr";
import instance from "../api/instance";


import styles from '../styles/Home.module.css'
import useProducts from "../hooks/use-product";



const Home = () => {

  const { data: products, error, create, remove } = useProducts();
  if (!products) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  



  return (
    
      <div className={styles.container}>
          {products.map((product: any, index: any) => (
              <div key={index}>
                  {product.name} <button onClick={() => remove(product.id)}>Delete</button>
              </div>
          ))}
          <button onClick={() => create({ id: 13, name: "Product 13" })}>Create</button>
      </div>

      
  );
};

export default Home
