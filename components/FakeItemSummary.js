import {Grid, Paper, Table, TableBody, TableCell, TableRow, Tooltip, Typography} from "@mui/material";
import {Skeleton} from "@mui/material";

function FakeItemSummary() {
    return (
        <div>
            {(
                <Paper variant={"outlined"} style={{marginTop: "2em"}}>
                    <Grid container>
                        <Grid item md={8} sm={12} xs={12}>
                            <Typography variant={"h5"} style={{marginTop: "1em", marginLeft: 20}}>
                                <Skeleton animation={"wave"} variant="text" width={300}/>
                            </Typography>
                            <Typography style={{marginTop: "2em", marginLeft: 20, marginRight: "1em"}}
                                        variant="body2"
                                        color="textSecondary">
                                <Skeleton animation={"wave"} variant="text"/>
                            </Typography>
                            <Typography style={{marginLeft: 20, marginRight: "1em"}}
                                        variant="body2"
                                        color="textSecondary">
                                <Skeleton animation={"wave"} variant="text"/>
                            </Typography>
                            <Typography style={{marginLeft: 20, marginRight: "1em"}}
                                        variant="body2"
                                        color="textSecondary">
                                <Skeleton animation={"wave"} variant="text"/>
                            </Typography>
                            <Paper variant={"outlined"} style={{marginTop: "2em", marginLeft: 20, marginRight: 20}}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                ID Izdelka
                                            </TableCell>
                                            <TableCell align="left">
                                                <Skeleton animation={"wave"} variant="text"/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Kategorija
                                            </TableCell>
                                            <TableCell align="left">
                                                <Skeleton animation={"wave"} variant="text"/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Ocena
                                            </TableCell>
                                            <TableCell align="left">
                                                <Skeleton animation={"wave"} variant="text"/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Stevilo ocen
                                            </TableCell>
                                            <TableCell align="left">
                                                <Skeleton animation={"wave"} variant="text"/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Znizano
                                            </TableCell>
                                            <TableCell align="left">
                                                <Skeleton animation={"wave"} variant="text"/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                V promociji
                                            </TableCell>
                                            <TableCell align="left">
                                                <Skeleton animation={"wave"} variant="text"/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Povezava do Izdelka
                                            </TableCell>
                                            <TableCell align="left">
                                                <Skeleton animation={"wave"} variant="text"/>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} align="center" justify="center" alignItems="center">
                            <Skeleton animation={"wave"} style={{width: "90%", height: 300}}/>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Tooltip title="Cena se lahko razlikuje od trenutne cene izdelka"
                                             placement="bottom">
                                        <Paper variant={"outlined"}
                                               style={{marginTop: 10, marginLeft: 20}}>
                                            <Typography
                                                color="textSecondary"
                                                gutterBottom>
                                                Trenutna cena*
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                                <Skeleton animation={"wave"} variant="text" width={50}/>
                                            </Typography>
                                        </Paper>
                                    </Tooltip>

                                </Grid>
                                <Grid item xs={6}>
                                    <Tooltip title="Cena, ki jo poda mimovrste">
                                        <Paper variant={"outlined"}
                                               style={{marginTop: 10, marginRight: 20}}>
                                            <Typography color="textSecondary" gutterBottom>
                                                Najnizja cena*
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                                <Skeleton animation={"wave"} variant="text" width={50}/>
                                            </Typography>
                                        </Paper>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Typography variant={"h5"} style={{marginTop: "2em", marginLeft: 20}}>
                        Graf cen skozi cas
                    </Typography>

                    <Paper style={{margin: "1em", height: 340}} variant={"outlined"}>
                        <Skeleton animation={"wave"} style={{width: "100%", height:550, marginTop: -132, marginBottom: -132}}/>
                    </Paper>
                </Paper>)
            }
        </div>
    );
}

export default FakeItemSummary;
