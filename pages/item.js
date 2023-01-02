import React, {useEffect, useState} from "react";
import axios from "axios";
import ItemSummary from "../components/ItemSummary";
import {config} from '../config/Constants'
import FakeItemSummary from "../components/FakeItemSummary";
import {Container} from "@mui/material";
import MimonategaBar from "../components/MimonategaBar";
import Head from "next/head";
import {subMonths} from "date-fns";

function ItemDetails({item}) {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = React.useState(3);


    useEffect(() => {
        if (item) {
            console.log(period)
            axios.get(`${config.url}/api/v1/items/prices/${item?.id}`, {
                params: {
                    from: subMonths(new Date(), period).toISOString(),
                    to: new Date().toISOString()
                }
            })
                .then(res => {
                    setPrices(res.data.data)
                    setLoading(false);
                });
        }
    }, [item, period]);

    return (
        <>
            <Head>
                <title>Mimonatega - {item?.name}</title>
                <meta name="description" content={item?.shortDesc}/>
                <meta property="og:title" content={`Mimonatega - ${item?.name}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={`${item?.image}/200/200`}/>
                <meta property="og:description" content={item?.shortDesc}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <MimonategaBar search={true}/>
            <Container>
                {(loading ? <FakeItemSummary/> : <ItemSummary item={item} prices={prices} setPeriod={setPeriod} period={period}/>)}
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const url = context?.query?.url;

    let res = await axios.get(`${config.url}/api/v1/items?search=${url}`);

    return {
        props: {
            item: res?.data?.data?.[0]
        }
    };
}


export default ItemDetails;
