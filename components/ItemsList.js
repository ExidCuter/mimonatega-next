import {Grid, Typography} from "@mui/material";
import Item from "./Item";

function ItemsList({items}) {
    return (
        <div>
            <Grid container spacing={1} justify={"center"}>
                {items.length > 0 ? items.map((item) => (
                        <Grid key={item.id} item md={3} xs={12} sm={6}>
                            <Item item={item}/>
                        </Grid>
                    ))
                    : <Grid container align="center" justify="center" alignItems="center">
                        <Grid item>
                            <Typography variant={"h6"}> Iskanje ni obrodilo sadov</Typography>
                        </Grid>
                    </Grid>}
            </Grid>
        </div>
    );
}

export default ItemsList;
