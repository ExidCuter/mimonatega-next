import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Skeleton} from "@mui/material";

function FakeItems() {
    return (
        <Card variant={"outlined"}>
            <CardActionArea style={{height: 350}}>
                <CardMedia>
                    <Grid container>
                        <Grid item>
                            <Skeleton variant="rect" animation={"wave"} style={{height: 300, width:400}}/>
                        </Grid>
                    </Grid>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <Skeleton variant="text" animation={"wave"} />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container align="flex-end" justify="flex-end" alignItems="flex-end">
                    <Grid item>
                        <Skeleton variant="text" animation={"wave"}  width={70} height={40}/>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default FakeItems;
