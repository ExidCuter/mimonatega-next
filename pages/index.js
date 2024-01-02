import Head from 'next/head'
import {Badge, Box, Button, Container, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Extension, Search} from "@mui/icons-material";
import { useRouter } from 'next/router';
import MimonategaBar from "../components/MimonategaBar";
import Link from "next/link";
import * as React from "react";

function Home() {
    const urlRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);

    const router = useRouter();
    const [searchError, setSearchError] = useState(false);

    const getSearchResults = (query) => {
        if (isUrl(query)) {
            router.push(`/item?url=${query}`);
        } else {
            setSearchError(true);
        }
    }

    const isUrl = (query) => {
        return urlRegex.test(query);
    }

    return (
        <>
            <Head>
                <title>Mimonatega</title>
                <meta name="description" content={`Projekt "Mimonatega" je odprtokodni agregator cen iz spletne trgovine Mimovrste. Nastal je z namenom beleženja sprememb v cenah in popustih. Podatki so samodejno pridobljeni s periodicnim sprehajanjem (crawling) po spletnemu mestu mimovrste.com.`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <MimonategaBar></MimonategaBar>
            <Container>
                <Box>
                    <Grid container align="center" justify="center" alignItems="center">
                        <Grid item md={2}/>
                        <Grid item md={8} xs={12}>
                            <Badge
                                color="secondary"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                badgeContent="Beta">
                                <Typography variant="h3" style={{marginTop: "2em"}}>
                                    MIMONATEGA
                                </Typography>
                            </Badge>
                        </Grid>
                        <Grid item md={2}/>
                    </Grid>
                </Box>
                <div style={{marginTop: "4em"}}>
                    <Grid container align="center" justify="center" alignItems="center">
                        <Grid item md={2}/>
                        <Grid item md={8} xs={12}>
                            <TextField
                                id="search"
                                error={searchError}
                                helperText={searchError ? "Prosim vnesitie povezavo do izdelka": ""}
                                label="Povezava do Izdelka"
                                variant="outlined"
                                fullWidth
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        getSearchResults(e.target.value);
                                    }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Search/>
                                        </InputAdornment>
                                    ),
                                }}/>
                        </Grid>
                        <Grid item md={2}/>
                        <Grid item md={2}></Grid>
                        <Grid item md={8} xs={12}>
                            <Typography sx={{mt: '1em'}} variant={"subtitle1"}>Na voljo tudi vtičnik za brskalnike!</Typography>
                            <Button sx={{mt: '1em'}} component={Link} href={"https://github.com/ExidCuter/mimonatega-ext"} color="secondary" variant={"outlined"} endIcon={<Extension></Extension>}>PRENESI VTIčnik</Button>
                        </Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default Home;
