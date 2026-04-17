import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../utlis/swr/fetcher";
import TampilkanProduk from "../../views/product";
import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/type/product.type";

const HalamanProduk = ({product}:{product: ProductType}) => {
    {/digunakan untuk-client side rendering/}
    // const Router = useRouter();
    // console.log(Router);
    // const [products, setProducts] = useState([]);
    // const {query} = useRouter();
    // const { data, error ,isLoading} = useSWR(`/api/products/${query.produk}`, fetcher);
    // return (
    //     <div>
    //         <DetailProduk products={isLoading ? [] : data.data} />
    //     </div>
    // );
    return (
        <div>
            <DetailProduk products={product} />
        </div>
    )
};

export default HalamanProduk;

// fungsi getServerSideProps akan di panggil setiap kali halaman ini diakses, dan akan mengambil data produk API sebelum merender halaman.
{/digunakan server-side rendering/}

// export async function getServerSideProps({params}: {params: { produk: string}}) {
//     const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//     const respone = await res.json();
//     // console.log("Data Produk yang diambil dari API:", respone);
//     return {
//         props: {
//             product: respone.data
//         }
//     };
// }

{/digunakan static-side generation/}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/products");
    const response = await res.json();

    const paths = response.data.map((product: ProductType) => ({
        params: {
            produk: product.id
        }
    }));
    // console.log("Paths yang dihasilkan untuk produk: ", paths); //Debuging Tampilkan path yang dihasilakn
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}: {params: { produk: string}}) {
    const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
    const response: { data: ProductType [] } = await res.json();
    // console.log("Data Produk yang diambil dari API:", respone);
    return {
        props: {
            product: response.data
        }
    };
}

