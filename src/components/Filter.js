import React from 'react';
import './Filter.css';

function Filter({ handleFilterChange }) {
    return (
        <div className="filter-container">
            <div className="filter-section">
                <h3>Colour</h3>
                <label><input type="checkbox" value="Red" name="color" onChange={handleFilterChange}/> Red</label>
                <label><input type="checkbox" value="Blue" name="color" onChange={handleFilterChange}/> Blue</label>
                <label><input type="checkbox" value="Green" name="color" onChange={handleFilterChange}/> Green</label>
            </div>

            <div className="filter-section">
                <h3>Gender</h3>
                <label><input type="checkbox" value="Men" name="gender" onChange={handleFilterChange}/> Men</label>
                <label><input type="checkbox" value="Women" name="gender" onChange={handleFilterChange}/> Women</label>
            </div>

            <div className="filter-section">
                <h3>Price</h3>
                <label><input type="checkbox" value="0-250" name="price" onChange={handleFilterChange}/> Rs. 0 - 250</label>
                <label><input type="checkbox" value="251-450" name="price" onChange={handleFilterChange}/> Rs. 251 - 450</label>
                <label><input type="checkbox" value="451" name="price" onChange={handleFilterChange}/> Rs. 451 & Above</label>
            </div>

            <div className="filter-section">
                <h3>Type</h3>
                <label><input type="checkbox" value="Polo" name="type" onChange={handleFilterChange}/> Polo</label>
                <label><input type="checkbox" value="Hoodie" name="type" onChange={handleFilterChange}/> Hoodie</label>
                <label><input type="checkbox" value="Basic" name="type" onChange={handleFilterChange}/> Basic</label>
            </div>
        </div>
    );
}

export default Filter;
