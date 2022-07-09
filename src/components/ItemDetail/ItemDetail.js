import { useState, useEffect } from "react";
import useCartList from "../../customHooks/useCartList";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";

import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import rutas from "../../helper/rutas";

const ItemDetail = ({ item }) => {
  const { id, imagen, titulo, artista, discografica, anio, precio } = item;

  const { containElement } = useCartList();
  const [count, setCount] = useState(1);
  const [readyForPuchase, setReadyForPurchase] = useState(false);

  useEffect(() => {
    if (containElement(id)) {
      setReadyForPurchase(true);
    } else {
      setReadyForPurchase(false);
    }
  }, [containElement, id]);

  return (
    <Box
      sx={{
        margin: { xs: "1rem 1rem 1rem 1rem", md: "1rem 4rem 1rem 4rem" },
      }}
    >
      <Grid container alignItems="center" spacing={5}>
        <Grid item className="grid-img" xs={12} md={6}>
          <img src={`/img/${imagen}`} alt="" className="img-detail" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            className="titulo-item"
          >
            {titulo}
          </Typography>
          <Box className="info-detail" my={5}>
            <Box>
              <Typography gutterBottom variant="subtitle1">
                {artista}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                {discografica}
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle1">
                {anio}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                ${precio}
              </Typography>
            </Box>
          </Box>
          {readyForPuchase ? (
            <Button
              component={Link}
              to={rutas.cart}
              variant="outlined"
              color="inherit"
              size="large"
              className="item-detail-button"
            >
              {/* <Link
              
                // onClick={handlerPurchased}
                className="item-detail-link"
              > */}
              Ir al Carrito
              {/* </Link> */}
            </Button>
          ) : (
            <ItemCount count={count} setCount={setCount} item={item} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
