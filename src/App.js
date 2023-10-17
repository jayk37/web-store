import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import data from './catalogue.json';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    color: [],
    gender: [],
    type: [],
    price: [],
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prevFilters => {
      if (checked) {
        return { ...prevFilters, [name]: [...prevFilters[name], value] };
      } else {
        return { ...prevFilters, [name]: prevFilters[name].filter(item => item !== value) };
      }
    });
  };

  const filteredProducts = data.filter(product => {
    const regex = new RegExp(searchQuery, 'i');
    const searchMatch = regex.test(product.name) || regex.test(product.color) || regex.test(product.type);
    
    const filterMatch = Object.keys(filters).every(key => {
      if (filters[key].length === 0) return true;
      if (key === 'price') {
        if (filters[key].includes('0-250')) {
          return product.price >= 0 && product.price <= 250;
        }
        if (filters[key].includes('251-450')) {
          return product.price >= 251 && product.price <= 450;
        }
        if (filters[key].includes('451')) {
          return product.price > 450;
        }
      }
      return filters[key].includes(product[key]);
    });
    
    return searchMatch && filterMatch;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lumber Store</h1>
        <img src="https://media.licdn.com/dms/image/D5612AQF3sS03vrEihA/article-cover_image-shrink_720_1280/0/1696874056905?e=2147483647&v=beta&t=N6AIu1JAS9nA04pSHP5hyJCK1AKOEoF9SJhCMEeggFg" alt="Logo" height={100}/>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <div className="content-area">
          <Filter handleFilterChange={handleFilterChange} />  {}
          <div className="product-list">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
