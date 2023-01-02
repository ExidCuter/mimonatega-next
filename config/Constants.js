const prod = {
    url: 'https://api.mimonatega.td-fl.org'
};

const dev = {
    url: 'https://api.mimonatega.td-fl.org'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
