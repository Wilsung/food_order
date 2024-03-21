import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "book",
    description: "book description",
  },
  {
    id: "p2",
    price: 5,
    title: "second book",
    description: "second book description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            price={product.price}
            description={product.description}
            title={product.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;