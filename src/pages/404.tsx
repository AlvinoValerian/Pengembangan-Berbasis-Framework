import React from 'react'
import style from '../styles/404.module.scss'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className={style.error}>
    <head>
      <title>404 - Halaman Tidak Ditemukan</title>
    </head>
      <img src="/page-not-found.png" alt="404" className={style.error_image} />

        <div className={style.text}>
        <h1 className='text-4xl font-bold'>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan</p>
        </div>

        <div className={style.textLink}>
        <Link href="/auth/login">Kembali ke Beranda</Link>
        </div>
    </div>
  )
}

export default Custom404