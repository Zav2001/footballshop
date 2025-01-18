import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PowerCardList from "../common/Power/PowerCardList";
import Paginator from "../common/Paginator";

const ProductsPage = ({ products, stats, match }) => {
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [page, setPage] = useState(1);

  const handleInputChange = (e) => {
    setSelectedBrand("");
    setQuery(e.target.value);
    setPage(1); // Reset page to 1 when search query changes
  };

  const handleSelectChange = (e) => {
    setSelectedBrand(e.target.value);
    setQuery(e.target.value);
    setPage(1); // Reset page to 1 when brand selection changes
  };

  const handleSortChange = (e) => {
    setSortByPrice(e.target.value);
    setPage(1); // Reset page to 1 when sort option changes
  };

  let filteredProducts = products.sort((a, b) => a.name.localeCompare(b.name));
  let productsCount = stats.productsCount;

  if (selectedBrand !== "") {
    filteredProducts = filteredProducts.filter(
      (p) => p.brand === selectedBrand,
    );
    productsCount = filteredProducts.length;
  } else if (query !== "") {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase()),
    );
    productsCount = filteredProducts.length;
  }

  // Sorting by price
  if (sortByPrice === "lowToHigh") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === "highToLow") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  const brands = [];
  products.forEach((a) => {
    brands.push(a.brand);
  });
  const uniqueBrands = Array.from(new Set(brands));

  const pageSize = 9;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="row space-top">
        <div className="col-md-12">
          <h1 className="jumbotron-heading text-center">Բոլոր ապրանքները</h1>
          <div style={{ display: "flex", width: "1000px" }}>
            <form
              style={{ width: "100%", height: "20px" }}
              className="form-inline md-form form-sm active-cyan active-cyan-2"
            >
              <i className="fa fa-search" aria-hidden="true" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Որոնեք այն ապրանքները, որոնք փնտրում եք..."
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
              />
            </form>
            <select
              style={{
                height: "30px",
                width: "150px",
                marginTop: "25px",
                marginRight: "10px",
              }}
              value={selectedBrand}
              onChange={handleSelectChange}
            >
              <option value="">Բոլորը</option>
              {uniqueBrands.map((brand, index) => (
                <option key={index}>{brand}</option>
              ))}
            </select>
            <select
              style={{ height: "30px", width: "200px", marginTop: "25px" }}
              value={sortByPrice}
              onChange={handleSortChange}
            >
              <option value="">Դասավորել ըստ գնի</option>
              <option value="lowToHigh">Գինը ցածրից բարձր</option>
              <option value="highToLow">Գինը բարձրից ցածր</option>
            </select>
          </div>
        </div>
      </div>
      <PowerCardList products={displayedProducts} />
      <Paginator
        productsCount={productsCount}
        pageSize={pageSize}
        current={page}
        onPageChange={setPage} // Pass setPage to Paginator for page change handling
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  stats: state.stats,
});

export default connect(mapStateToProps)(ProductsPage);
