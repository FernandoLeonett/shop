import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import validationForm from "../../validations/formvalidation";

import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
} from "@mui/material";
import { saveData } from "../../firebase/services";
import useCartList from "../../customHooks/useCartList";
import { CartContext } from "../../context/CartContext";

const ModalCart = ({ open, close, openModalAprove, setOrder }) => {
  console.log("openModalAprove", openModalAprove);
  const { cartListItems, totalPrice } = useCartList();
  const { setLoading } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: validationForm });

  const isDirty = !!Object.keys(dirtyFields).length;

  const onSubmit = (formData) => {
    if (!isDirty) return;

    const items = cartListItems.map(
      ({ item: { id, titulo, precio }, quantity }) => ({
        id,
        titulo,
        precio,
        quantity,
      })
    );
    setLoading(true);
    saveData({ items, buyer: formData, totalPrice })
      .then((o) => {
        setOrder(o.id);
        close();
        openModalAprove();
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  return (
    <>
      <Dialog open={open} onClose={close}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Completa tus datos</DialogTitle>
          <DialogContent>
            <TextField
              autoComplete="off"
              name="name"
              id="standard-required"
              label="Nombre y Apellido"
              type="text"
              variant="standard"
              {...register("name")}
            />
            {errors?.name && (
              <Alert outlined="danger" severity="error">
                {errors.name.message}
              </Alert>
            )}
          </DialogContent>
          <DialogContent>
            <TextField
              // required
              autoComplete="off"
              name="phone"
              id="standard-required"
              label="Teléfono"
              variant="standard"
              type="tel"
              placeholder="ej.: 00 598 097097789"
              {...register("phone")}
            />
            {errors?.phone && (
              <Alert outlined="danger" severity="error">
                {errors.phone.message}
              </Alert>
            )}
          </DialogContent>
          <DialogContent>
            <TextField
              // required
              autoComplete="off"
              name="email"
              id="standard-required"
              label="E-Mail"
              variant="standard"
              type="email"
              {...register("email")}
            />
            {errors?.email && (
              <Alert outlined="danger" severity="error">
                {errors.email.message}
              </Alert>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={close}>Cancelar</Button>
            <Button
              type="submit"
              onSubmit={handleSubmit(onSubmit)}
              disabled={!isDirty}
            >
              Enviar
            </Button>
          </DialogActions>
        </Box>
        {/* </form> */}
      </Dialog>
    </>
  );
};

export default ModalCart;

// useEffect(() => {
//   if (isOpen) {
//     setFormValue({});
//   }
// }, [isOpen]);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // setOrder({ cartListItems, buyer: formValue });
//   const items = cartListItems.map(
//     ({ item: { id, titulo, precio }, quantity }) => ({
//       id,
//       titulo,
//       precio,
//       quantity,
//     })
//   );
//   saveData({ items, buyer: formValue, totalPrice });
//   close();
//   navigate("/");
//   setCartListItems([]);
//   //   saveData({ ...order, buyer: formValue });
// };

// const handleChange = (e) => {
//   setFormValue({ ...formValue, [e.target.name]: e.target.value });
// };

// const finishOrder = () => {
//   navigate("/");
// };

// const saveData = async (newOrder) => {
//   const orderFirebase = collection(db, "ordenes");
//   const orderDoc = await addDoc(orderFirebase, newOrder);
//   setSuccesOrder(orderDoc.id);
//   clear();
// };
