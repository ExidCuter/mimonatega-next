import {CircularProgress, Grid} from "@mui/material";

function Loader() {
    return (
        <div style={{marginTop: "2em"}}>
            <Grid container align="center" justify="center" alignItems="center">
                <Grid item>
                    <CircularProgress size={100}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Loader;
