import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 'p1',
    title: '1st Book',
    price: +6,
    description: 'This is the first Book.',
  },
  {
    id: 'p2',
    title: '2nd Book',
    price: +7,
    description: 'This is the second Book.',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
