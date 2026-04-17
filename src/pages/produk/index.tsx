import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../utlis/swr/fetcher";
import TampilkanProduk from "../../views/product";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {
    // const [products, setProducts] = useState([]);
    // const { data, error ,isLoading} = useSWR("/api/produk", fetcher);
    const {push} = useRouter();
    const [products, setProducts] = useState([]);
    
    const { data, error ,isLoading} = useSWR("/api/produk", fetcher);

    return (
        <div>
            <TampilkanProduk products={isLoading ? [] : data.data } />
        </div>
    );
};

// const produk = () => {
//     // const [isLogin, setIsLogin] = useState(false);
//     const {push} =useRouter();
//     useEffect(() => {
//         const isLogin = localStorage.getItem('isLogin');
//         if (!isLogin) {
//             push("/auth/login");
//         }
//     },[]);
//     return (
//         <div className="halaman">
//             <div>
//             <HeroSection/>
//             </div>
//             <div>
//             <MainSection/>
//             </div>
//         </div>
//     );
// };

// export default produk;

// type ProductType = 
// {
//     id: string;
//     name: string;
//     price: number;
//     size: string;
//     category: string;
//     image: string;
// }

// const kategori = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch("/api/produk")
//         .then((response) => response.json())
//         .then((responsedata) => {
//             setProducts(responsedata.data);
//         })
//         .catch((error) => {
//             console.error("Error fetching produk:", error);
//         });
//     }, []);

    
    // function fetch (dipakai 2x: awal & tombol)
    // const getData = () => {
    //     fetch("/api/produk")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data.data);
    //         })
    //         .catch((err) => console.log(err));
    // };

    // load pertama
    // useEffect(() => {
    //     getData();
    // }, []);

    // return (
    //     <div>
            {/* <h1 className="text-3xl font-bold mb-4">Daftar Produk</h1>

            <button 
                onClick={getData}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                Refresh Data
            </button>

            {products.map((products: ProductType) => (
                <div key={products.id}>
                    <h2 className="text-2xl font-semibold">{products.name}</h2>
                    <p>Harga: {products.price}</p>
                    <p>Ukuran: {products.size}</p>
                    <p>Kategori: {products.category}</p>
                </div>
            ))} */}

            {/* <TampilkanProduk products={products} />
        </div>
    );
} */}

export default kategori;