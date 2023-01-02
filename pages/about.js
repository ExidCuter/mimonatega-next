import {Container, Grid, Typography} from "@mui/material";
import MimonategaBar from "../components/MimonategaBar";
import Head from "next/head";

function About() {
    return (
        <>
            <MimonategaBar search={true}/>
            <Container>
                <Head>
                    <title>{"Mimonatega - O Projektu"}</title>
                    <meta name="description" content="O projektu"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Grid container align="center" justify="center" alignItems="center">
                    <Grid item>
                        <div style={{marginTop: "2em"}}>
                            <Typography style={{marginBottom: "1em"}} variant={"h3"}>O Projektu</Typography>
                            <Typography variant={"body1"}>
                                Projekt `&quot;Mimonatega`&quot; je odprtokodni agregator cen iz spletne trgovine Mimovrste. Nastal
                                je z namenom beleženja sprememb v
                                cenah in popustih. Podatki so samodejno pridobljeni s periodicnim sprehajanjem (<a
                                href="https://en.wikipedia.org/wiki/Web_crawler">crawling</a>)
                                po spletnemu mestu <a href="https://mimovrste.com">mimovrste.com</a>.
                            </Typography>
                            <br/>
                            <Typography variant={"body1"}>
                                Projekt `&quot;Mimonatega`&quot; ni v nobenem smislu povezan z spletnim portalom Mimovrste in
                                njihovimi storitvami.
                            </Typography>
                            <br/>
                            <Typography variant={"body1"}>
                                Vsi pridobljeni podatki in pripadajoce slike so last podjetja MIMOVRSTE d.o.o.
                            </Typography>
                            <br/>
                            <Typography variant={"body1"}>
                                Mimovrste.si in logotip Mimovrste sta blagovni znamki ali registrirani blagovni znamki
                                MIMOVRSTE d.o.o..
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default About;
