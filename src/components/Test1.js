import React from 'react'

function ProductCategoryRow (props){
    const category = props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
}

function ProductRow (props){
    const product = props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
}

function ProductTable (props) {
  console.log('props in productTable:',props)

    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );

}

function SearchBar (props) {
  
  function handleFilterTextChange(e) {
    props.onFilterTextChange(e.target.value);
  }
  function handleInStockChange(e) {
    props.onInStockChange(e.target.checked);
  }

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={props.filterText}
          onChange={handleFilterTextChange}
        />
        <p>
          <input
            type="button"
            checked={props.inStockOnly}
            onChange={handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Sporting Goods', price: '$69.96', stocked: true, name: 'Tennis racket'},
  {category: 'Sporting Goods', price: '$88.88', stocked: true, name: 'Runnning shoes'},
  {category: 'Snake', price: '$388.88', stocked: true, name: 'anaconda'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
  {category: 'Electronics', price: '$789000.55', stocked: true, name: 'IBM system 360'},
  {category: 'Electronics', price: '$456000.22', stocked: true, name: 'DEC 9000'}
];

// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('container')
// );

export default FilterableProductTable;