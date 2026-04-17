import React from 'react'

const mainSection = () => {
    return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-white text-gray-800 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">Daftar Produk</h2>
      <div className="flex flex-col md:flex-row gap-6 text-lg md:text-xl">
        <p className="bg-gray-100 px-4 py-2 rounded shadow">Makanan</p>
        <p className="bg-gray-100 px-4 py-2 rounded shadow">Minuman</p>
        <p className="bg-gray-100 px-4 py-2 rounded shadow">Snack</p>
      </div>
    </section>
  );
}

export default mainSection