import useCartList from "../../customHooks/useCartList";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function TableCart({ openModal }) {
  const { cartListItems, removeItem, clear, totalItem, totalPrice, isEmpty } =
    useCartList();

  return (
    <>
      {isEmpty ? (
        <Typography variant="caption" px={1}>
          Tu carrito está vacío
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Detalle
                  </TableCell>
                  <TableCell align="right">Precio</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Artista</TableCell>
                  <TableCell align="right">Titulo</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Precio Unit.</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartListItems.map(
                  (
                    { item: { precio, id, imagen, titulo, artista }, quantity },
                    i
                  ) => (
                    <TableRow key={i}>
                      <TableCell>
                        <img alt="" src={`/img/${imagen}`}></img>
                      </TableCell>
                      <TableCell align="right">{titulo}</TableCell>
                      <TableCell align="right">{quantity}</TableCell>
                      <TableCell align="right">{artista}</TableCell>
                      <TableCell align="right">{precio.toFixed(2)}</TableCell>
                      <TableCell align="right">
                        {totalItem(id).toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => removeItem(id)}>
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                )}

                <TableRow>
                  <TableCell rowSpan={3} />
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{totalPrice.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={() => clear()}>Vaciar Carrito</Button>
          <Button variant="outlined" onClick={openModal}>
            Finalizar Compra
          </Button>
        </>
      )}
      <Link to="/">Ir a Home</Link>
    </>
  );
}
