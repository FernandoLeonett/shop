import { useContext, useState } from "react";
import useModal from "../customHooks/useModal";
import TableCart from "../components/TableCart/TableCart";
import ModalCart from "../components/ModalCart/ModalCart";
import ModalCompraAprobada from "../components/ModalCompraAprovada/ModalCompraAprovada";
import { CartContext } from "../context/CartContext";
import Loader from "../components/Loader/Loader";

const Cart = () => {
  const [isOpenMoalCart, openMoalCart, close] = useModal(false);
  const [isOpenModalAprove, openModalAprove] = useModal(false);
  const [order, setOrder] = useState(0);
  const { loading } = useContext(CartContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TableCart openModal={openMoalCart} />
          <ModalCart
            open={isOpenMoalCart}
            close={close}
            openModalAprove={openModalAprove}
            setOrder={setOrder}
          />
          <ModalCompraAprobada open={isOpenModalAprove} order={order} />
        </>
      )}
    </>
  );
};

export default Cart;
