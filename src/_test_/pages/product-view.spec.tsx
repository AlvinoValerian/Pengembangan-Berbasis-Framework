import { render } from "@testing-library/react";
import TampilkanProduk from "@/views/product";

describe("TampilkanProduk", () => {
  const mockProducts = [
    {
      id: "1",
      name: "Kaos",
      price: 50000,
      size: "L",
      image: "/product.jpg",
      category: "Fashion",
    },
  ];

  it("renders product correctly", () => {
    const page = render(<TampilkanProduk products={mockProducts} />);
    expect(page.getByTestId("title").textContent).toBe("Daftar Produk");
  });

  it("matches snapshot", () => {
    const page = render(<TampilkanProduk products={mockProducts} />);
    expect(page).toMatchSnapshot();
  });
});