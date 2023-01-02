import {Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import {useRouter} from "next/router";
import * as React from "react";
import Image from "next/image";

function ItemsList({item}) {
    const router = useRouter();

    const itemClicked = (url) => {
        router.push(`/item?url=${url}`);
    };

    return (
        <Card variant={"outlined"} sx={{height: 400}}>
            <CardActionArea onClick={() => itemClicked(item.itemUrl)}>
                <CardMedia>
                    <Box align="center" justify="center" alignItems="center">
                        <Image src={item.image + "/200/200"} alt={item.name} width={200} height={200} style={{marginTop: 20, width: 'auto', height: '150px'}}/>
                    </Box>
                </CardMedia>
                <CardContent sx={{height: 170}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name.length > 35 ? item.name.substr(0, 50) + "..." : item.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Stack direction={"row"} align="flex-end" justify="flex-end" alignItems="flex-end">
                    <Box sx={{flexGrow: 1}}>
                    </Box>
                    <Chip
                        variant={"outlined"}
                        color={"primary"}
                        label={item?.tempPrices?.[item.tempPrices.length - 1].price?.toFixed(2) + " €"}
                    />
                </Stack>
            </CardActions>
        </Card>
    );
}

export default ItemsList;
