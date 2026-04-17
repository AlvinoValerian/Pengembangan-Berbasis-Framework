import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import styles from './login.module.css';
import styles from './login.module.scss';

const TampilanLogin = () => {
  const {push} = useRouter();
  const handlerLogin = () => {
    //logic login disini
    localStorage.setItem("isLogin","true");
    push('/produk');
  }
    const handlerLogout = () => {
      localStorage.removeItem("isLogin");
      push("/auth/login");
    }
    return (
    <div className={styles.login}>
        <h1 className='text-3xl font-bold text-blue-600'>Halaman Login</h1><br />
        {/* <button onClick={handlerLogin}>Login</button><br />
        <button onClick={() => push('/produk')}>Login</button><br /> */}
        <button onClick={() => handlerLogin()}>Login</button><br />
        {/* <button onClick={() => handlerLogout()}>Logout</button><br /> */}
        <h1 style={{ color:"red",border:"1px solid red", borderRadius:"5px",padding:"5px" }}>belum punya akun</h1>
        <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  )
}

export default TampilanLogin;
