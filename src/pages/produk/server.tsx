import { ProductType } from '../../type/product.type';
import TampilkanProduk from '../../views/product';

const HalamanProdukServer = (props:{ products: ProductType[]}) => {
    const { products } = props;
  return (
    <div>
        <h1 className='text-3xl font-bold'>Halaman Server</h1>
        <TampilkanProduk products={products}/>
    </div>
  )
}

export default HalamanProdukServer

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk`);
    const response = await res.json();

    return {
        props: {
            products: response.data,
        },
    };
}