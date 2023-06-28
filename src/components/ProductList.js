import '../styles/ProductList.scss';
import ProductItem from './ProductItem';

function ProductList(props) {
  const handleClick = (ev) => {
    props.handleBtn(ev.currentTarget.parentElement.id);
  };

  const handleClickConfirm = (ev) => {
    props.confirm(ev.target.value);
  };

  const product = props.products
    .sort((a, b) => (a.sales_ranking > b.sales_ranking ? 1 : -1))
    .map((item, index) => {
      return (
        <li className="list__item" id={item.code} key={item.code}>
          <button className="btn" onClick={handleClick}>
            Mark Complete
          </button>
          <ProductItem item={item} index={index} />
        </li>
      );
    });
  return (
    <>
      <div className={`confirmation ${props.hidden}`}>
        <div className="confirmation__wrapper">
          <p>Are you sure you want to mark this product as complete?</p>
          <input
            className="confirmation__btn"
            type="submit"
            value="Yes"
            onClick={handleClickConfirm}
          />
          <input
            className="confirmation__btn"
            type="submit"
            value="No"
            onClick={handleClickConfirm}
          />
        </div>
      </div>
      <ul className="list">{product}</ul>
    </>
  );
}

export default ProductList;
