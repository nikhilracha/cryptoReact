import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Grid,
  Button,
  Stack
} from "@mui/material";

const Data = {
  Buy: {
    coinbase: "4999.0",
    Binance: "4991.0",
    Kucoin: "4800.0"
  },
  Sell: {
    coinbase: "4999.0",
    Binance: "4991.0",
    Kucoin: "4800.0"
  }
};

const Itemsource = ({ name, price, type }) => {
  return (
    <Grid item>
      <Stack alignItems="center" direction="row" spacing={1}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {name}
        </Typography>
        <Typography mt={0.5} sx={{ fontSize: 13 }} color="text.secondary">
          $ {price}
        </Typography>
        <Button mt={0.5} variant="text" size="small">
          {type}
        </Button>
      </Stack>
    </Grid>
  );
};

const Etherium = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          title="Etherium"
          subheader="Last updated : 10:57 pm"
          subheaderTypographyProps={{ fontSize: 12 }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs>
              <Grid item md={12}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Buy
                </Typography>
              </Grid>
              <Grid container>
                <Grid item>
                  <Itemsource name="Coinbase" price="4999.0" type="Buy" />
                </Grid>
                <Grid item>
                  <Itemsource name="Binance" price="4999.0" type="Buy" />
                </Grid>
                <Grid item>
                  <Itemsource name="Kucoin" price="4999.0" type="Buy" />
                </Grid>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs>
              <Grid item md={12}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Sell
                </Typography>
              </Grid>
              <Grid container>
                <Grid item>
                  <Itemsource name="Coinbase" price="4999.0" type="Sell" />
                </Grid>
                <Grid item>
                  <Itemsource name="Binance" price="4999.0" type="Sell" />
                </Grid>
                <Grid item>
                  <Itemsource name="Kucoin" price="4999.0" type="Sell" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Etherium;
