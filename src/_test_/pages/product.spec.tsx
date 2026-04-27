import { render, screen } from "@testing-library/react";
import ProductPage from "@/pages/produk";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "/produk",
      push: jest.fn(),
      isReady: true,
    };
  },
}));

jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({
    data: {
      data: [
        {
          id: "1",
          name: "Kaos",
          price: 50000,
          size: "L",
          image: "/product.jpg",
          category: "Fashion",
        },
      ],
    },
    error: null,
    isLoading: false,
  }),
}));

describe("ProductPage", () => {
  it("renders product page correctly", () => {
    render(<ProductPage />);
    expect(screen.getByTestId("title").textContent).toBe("Daftar Produk");
  });
});