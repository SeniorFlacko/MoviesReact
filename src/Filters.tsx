import React from 'react';
import './Filters.css';

interface IProps {}

const Filters: React.FC<IProps> = ({}) => {

  return (
    <div className="filters-container">
        <div className="buttonsf-container">
            <button className="btn-filter">All</button>
            <button className="btn-filter">Documentary</button>
            <button className="btn-filter">Comedy</button>
            <button className="btn-filter">Horror</button>
            <button className="btn-filter">Cine</button>
        </div>
        <div className="sort-container">
            <span className="sortby-label">Sort By</span>
            <select name="select" className="select-filter">
                <option value="date" selected>Release Date</option>
                <option value="value2">name</option>
                <option value="value3">category</option>
            </select>
        </div>
    </div>
  );
};

export default Filters;

