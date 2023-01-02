import {Grid} from "@mui/material";
import FakeItem from "./FakeItem";

function FakeItemsList() {
    return (
        <div>
            <Grid container spacing={1} justify={"center"}>
                {[...Array(12)].map((item, i) => (
                    <Grid key={i} item md={3} xs={12} sm={6}>
                        <FakeItem/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default FakeItemsList;
