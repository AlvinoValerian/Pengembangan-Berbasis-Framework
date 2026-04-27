import React from 'react'
import style from '../styles/404.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>

      <div className={style.error}>
        <Image
          src="/page-not-found.png"
          alt="404"
          width={400}
          height={200}
          className={style.error_image}
        />

        <div className={style.text}>
          <h1 className="text-4xl font-bold">
            404 - Halaman Tidak Ditemukan
          </h1>
          <p>
            Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
          </p>
        </div>

        <div className={style.textLink}>
          <Link href="/auth/login">Kembali ke Beranda</Link>
        </div>
      </div>
    </>
  )
}

export default Custom404