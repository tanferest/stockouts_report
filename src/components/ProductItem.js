import '../styles/ProductItem.scss';
import Chart from './Chart';

function ProductItem(props) {
  const productImg = `${process.env.PUBLIC_URL}/images/${props.item.code}.jpg`;
  const percnt = props.item.stockout_rate * 100;
  let coverage = '';
  let coverageClass = '';
  if (percnt < 50) {
    coverage = 'very low';
    coverageClass = 'is-low-coverage';
  } else {
    coverage = 'good';
    coverageClass = 'is-good-coverage';
  }

  return (
    <>
      <img
        className="item__img"
        src={productImg}
        alt={`Product ${props.item.code}`}
      ></img>
      <div className="item__index">{props.index + 1}</div>
      <div className="item__data">
        <p className="item__code">{props.item.code}</p>
        <h2 className="item__name">{props.item.name}</h2>
        <p className="item__price">{props.item.price}&euro;</p>

        <Chart stock={props.item.size_stock} />

        <p className="item__percnt">
          <span className="item__percnt--num">{percnt}</span>
          <span className="item__percnt--sign">&#37;</span> stockout
        </p>
        <div className="item__bar">
          <div
            className="item__bar--progress"
            style={{ width: `${percnt}%` }}
          ></div>
        </div>
        <p className="item__coverage">
          <span className={`item__coverage--span ${coverageClass}`}>
            {coverage}
          </span>
          wh coverage
        </p>
      </div>
    </>
  );
}

export default ProductItem;
