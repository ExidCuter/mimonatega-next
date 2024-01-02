import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Badge, Button, Divider, Stack, useMediaQuery, useTheme} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";
import {Extension, GitHub, InfoOutlined} from "@mui/icons-material";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
            '&:focus': {
                width: '50ch',
            },
        },
    },
}));

export default function MimonategaBar({search}) {
    const router = useRouter();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Box style={{marginRight: 25}}>
                        <Badge
                            color="secondary"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            badgeContent="Beta">
                            <Typography component={Link} href={"/"} style={{textDecoration: "none", color: 'inherit'}}
                                        type="title" variant={"h5"}>
                                MIMONATEGA
                            </Typography>
                        </Badge>
                    </Box>
                    <Box sx={{flexGrow: 1}}>
                    </Box>
                    <Stack spacing={2} direction={"row"}>
                        {
                            matches && search && (
                                <Search
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            router.push(`/item?url=${e?.target?.value}`);
                                        }
                                    }}
                                >
                                    <SearchIconWrapper>
                                        <SearchIcon/>
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Povezava do izdelka…"
                                        inputProps={{'aria-label': 'search'}}
                                    />
                                </Search>
                            )
                        }
                        {search && matches && (
                            <>
                                <Divider orientation={"vertical"} variant={"middle"} flexItem></Divider>
                                <Button component={Link} href={"https://github.com/ExidCuter/mimonatega-ext"}
                                        color={"inherit"} variant={"outlined"}><Extension/></Button>
                                <Divider orientation={"vertical"} variant={"middle"} flexItem></Divider>
                            </>
                        )}
                        {matches && (
                            <Button component={Link} href={"https://github.com/ExidCuter/mimonatega-next"}
                                    color="inherit" variant={"outlined"}><GitHub/></Button>
                        )}
                        <Button component={Link} href={"/about"} color={"inherit"}
                                variant={"outlined"}><InfoOutlined/></Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
