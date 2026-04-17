import { ProductType } from '../../type/product.type';
import TampilkanProduk from '../../views/product';

const HalamanProdukStatic = (props:{ products: ProductType[]}) => {
    const { products } = props;
  return (
    <div>
        <h1 className='text-3xl font-bold'>Halaman Static</h1>
        <TampilkanProduk products={products}/>
    </div>
  )
}

export default HalamanProdukStatic

export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:3000/api/produk");
    // const response: ProductType[] = await res.json();
    const response: { data: ProductType[] } = await res.json();

    //console.log("Data produk yang diambil dari API:", response);
    return {
        props: {
            products: response.data,
        },
        revalidate: 10, // Revalidate every 10 seconds (optional)
    };
}