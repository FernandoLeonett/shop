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
  const { loader } = useContext(CartContext);

  return (
    <>
      <TableCart openModal={openMoalCart} />
      <ModalCart
        open={isOpenMoalCart}
        close={close}
        openModalAprove={openModalAprove}
        setOrder={setOrder}
      />
      {loader ? (
        <Loader />
      ) : (
        <ModalCompraAprobada open={isOpenModalAprove} order={order} />
      )}
    </>
  );
};

export default Cart;
