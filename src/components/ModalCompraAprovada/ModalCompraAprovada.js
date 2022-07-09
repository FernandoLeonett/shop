import { useNavigate } from "react-router-dom";
import rutas from "../../helper/rutas";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useCartList from "../../customHooks/useCartList";
import Loader from "../Loader/Loader";

const ModalCompraAprobada = ({ open, order }) => {
  const navigate = useNavigate();
  const { setCartListItems, loading } = useCartList();

  const handlerClick = () => {
    setCartListItems([]);
    navigate(rutas.home);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Compra aprobada."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Número de orden: {order}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlerClick}>Aceptar</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ModalCompraAprobada;

// {
//   /* // <>
// //   <div>Compra aprobada. Número de orden: {succesOrder}</div>
// //   <Button onClick={finishOrder}>Aceptar</Button>
// // </>; */
// }
