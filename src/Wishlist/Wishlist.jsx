import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearWishList, removeFromWishList } from "../../redux/slice";

const Wishlist = () => {
  const res = useSelector((state) => state.wishlist);
  const nbItem = useSelector((state) => state.nbItem);
  const dispatch = useDispatch();
  const removeItemHandler = (id) => {
    dispatch(removeFromWishList({ idItem: id }));
  };

  const clear = () => {
    dispatch(clearWishList());
  };
  return (
    <>
      {res.map((e, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <h1>{e.id}</h1>
          <img src={e.img} height={250} width={250} />
          <h3>{e.title}</h3>
          <Button type="danger" onClick={() => removeItemHandler(e.id)}>
            X
          </Button>
        </div>
      ))}
      {nbItem === 0 ? (
        <h1>add movies to wishList </h1>
      ) : (
        <Button onClick={() => clear()}> Clear</Button>
      )}
    </>
  );
};

export default Wishlist;
