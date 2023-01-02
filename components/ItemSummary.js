import React from "react";
import {
    Box,
    Chip,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import LineChart from "./LineChart";
import {Alert, Rating} from "@mui/lab";

function ItemSummary({item, prices, period, setPeriod}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const calculateMax = () => {
        let max = 0;

        prices.forEach(currPrice => {
            if (currPrice.price > max) {
                max = currPrice.price;
            }
        });

        return max;
    }

    const calculateMin = () => {
        let min = calculateMax();

        prices.forEach(currPrice => {
            if (currPrice.price < min) {
                min = currPrice.price;
            }
        });

        return min;
    }

    const getCurrentPrice = () => {
        prices.sort((a, b) => (new Date(a.parsedAt) > new Date(b.parsedAt)) ? 1 : -1)

        return prices[prices.length - 1].price;
    }

    const getCategoryLabel = () => {
        const category = item.category.categoryName.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

        return matches ?
            category :
            category.substr(0, 17) + "...";
    }

    return (
        <div>
            {item !== undefined ?
                (
                    <Paper variant={"outlined"} style={{marginTop: "2em"}}>
                        <Grid container>
                            <Grid item md={8} sm={12} xs={12}>
                                <Typography variant={"h5"} style={{marginTop: "1em", marginLeft: 20}}>
                                    {item.name}
                                </Typography>
                                <Typography style={{marginTop: "2em", marginLeft: 20, marginRight: "1em"}}
                                            variant="body2"
                                            color="textSecondary" component="p"
                                            dangerouslySetInnerHTML={{__html: item.shortDesc}}>
                                </Typography>
                                <Paper variant={"outlined"} style={{marginTop: "2em", marginLeft: 20, marginRight: 20}}>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    ID Izdelka
                                                </TableCell>
                                                <TableCell align="left">
                                                    {item.productId}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    Kategorija
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Chip
                                                        color={"primary"}
                                                        variant={"outlined"}
                                                        clickable
                                                        label={getCategoryLabel()}
                                                        onClick={() => {
                                                            const win = window.open(item.category.categoryUrl, '_blank');
                                                            win.focus();
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    Ocena
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Grid container>
                                                        <Grid item>
                                                            <Rating name="read-only" value={item.reviewStars}
                                                                    precision={0.1} readOnly/>
                                                        </Grid>
                                                        <Grid item style={matches ? {marginLeft: 10} : {}}>
                                                            <Typography>{((item.reviewStars / 5) * 100).toFixed(0)} %</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    Stevilo ocen
                                                </TableCell>
                                                <TableCell align="left">
                                                    {item.reviewCount}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    Znizano
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Chip
                                                        variant={"outlined"}
                                                        label={prices[prices.length - 1].onSale ? 'Da' : 'Ne'}
                                                        color={prices[prices.length - 1].onSale ? 'primary' : 'secondary'}/>


                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    V promociji
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Chip
                                                        variant={"outlined"}
                                                        label={prices[prices.length - 1].inPromotion ? 'Da' : 'Ne'}
                                                        color={prices[prices.length - 1].inPromotion ? 'primary' : 'secondary'}/>

                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    Povezava do Izdelka
                                                </TableCell>
                                                <TableCell align="left">
                                                    <a href={item.itemUrl}>{matches ? item.itemUrl : item.itemUrl.replace("www.mimovrste.com/", "mimovrste.com/ ")}</a>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12} align="center" justify="center" alignItems="center">
                                <Paper variant={"outlined"} style={{marginTop: "2em", marginRight: 20, marginLeft: 20}}>
                                    <img src={item.image + "/350/350"} width={300} height={"auto"} alt={item.name}
                                         style={{marginTop: 10, marginBottom: 10}}/>
                                </Paper>

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
                                                    {getCurrentPrice().toFixed(2)} €
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
                                                    {calculateMin().toFixed(2)} €
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

                        <Paper sx={{m: "1em"}} variant={"outlined"}>
                            <Box sx={{display: 'flex'}}>
                                <Box sx={{flex: 1}}></Box>
                                <Box sx={{pr: '1em', pt: '1em'}}>
                                    <ToggleButtonGroup
                                        color="primary"
                                        size={"small"}
                                        value={period}
                                        exclusive
                                        aria-label="period"
                                        onChange={(event, value) => {
                                            if (value) {
                                                setPeriod(value);
                                            }
                                        }}
                                    >
                                        <ToggleButton value={3}>Zadnje 3 mesece</ToggleButton>
                                        <ToggleButton value={6}>Zadnijih 6 mesecev</ToggleButton>
                                        <ToggleButton value={96}>Vse</ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
                            </Box>
                            <Box sx={{height: 550}}>
                                <LineChart prices={prices}/>
                            </Box>
                        </Paper>
                    </Paper>)
                : (
                    <Grid style={{marginTop: "5em"}} container align="center" justify="center" alignItems="center">
                        <Alert severity="error" style={{width: "100%"}}>
                            Izdelek ni bil najden!
                        </Alert>
                    </Grid>
                )
            }
        </div>
    );
}

export default ItemSummary;
