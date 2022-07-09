import { Box, Grid } from "@mui/material";
import ItemSlider from "../ItemSlider/ItemSlider";
import Item from "../Item/Item";

const ItemList = ({ items, slider }) => {
  const show = slider ? (
    <Grid mx={4}>
      <ItemSlider items={items} />
    </Grid>
  ) : (
    <Grid container spacing={2}>
      {items.map((item, i) => (
        <Item key={i} p={item} />
      ))}
    </Grid>
  );

  return (
    <Box mx={4} mb={5}>
      {show}
    </Box>
  );
};

export default ItemList;
