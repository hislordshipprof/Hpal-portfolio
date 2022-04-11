import "./productList.css";
import Product from "../Components/Product";
import { products } from "../data";


const ProductList = () => {
  return (
    <>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title"> Projects Worked On</h1>
          <p className="pl-desc">
            Hislordship is a creative portfolio that your work has been waiting
            for. Beautiful homes, stunning portfolio styles & a whole lot more
            awaits inside. List of Worked Project for client so far click on each image link to be redirected to the project
          </p>
        </div>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
