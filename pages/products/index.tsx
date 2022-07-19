import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
import React from 'react'
import useProducts from '../../hooks/use-product';

type ProductsProps = {
  products: any[];
}

const ProductPage = ({products}: ProductsProps) => {



  const { data, error, create } = useProducts();
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
      <div>
          {data.map((item: any) => (
              <div key={item.id}>
                  <Link href={`/products/${item.id}`}>{item.name}</Link>
              </div>
          ))}

<button onClick={() => create({ id: 14, name: "Product 14" })}>Create</button>
      </div>

  );




//   if(!products){
//     return null;
//   }
//   return (
//     <div>
//     {products.map((item) => (
//         <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
//     ))}
// </div>
//   )
// }

// // chay ở phía server

// export const getStaticProps: GetStaticProps<ProductsProps> = async (
//   context: GetStaticPropsContext
// ) =>{
//   console.log("getStaticProps - server");

//     const data = await (await fetch(`http://localhost:3001/products`)).json();

//     if (!data) {
//       return {
//         notFound : true
//       }
//     }

//     return {
//       props: {
//         products: data,
//       },
//     };
};




export default ProductPage