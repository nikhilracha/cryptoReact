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

const Bitcoin = ({ coinbase, binance, kucoin }) => {
  console.log("Data", coinbase);

  var btcBuy = coinbase.buyPrice;
  var btcSell = coinbase.sellPrice;

  var btcbinanceBuy = binance.buyPrice;
  var btcbinanceSell = binance.sellPrice;

  var btckucoinBuy = kucoin.buyPrice;
  var btckucoinSell = kucoin.sellPrice;

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          title="Bitcoin"
          subheader={`Last updated: ${new Date().toLocaleString()}`}
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
                  <Itemsource name="Coinbase" price={"btcBuy"} type="Buy" />
                </Grid>
                <Grid item>
                  <Itemsource
                    name="Binance"
                    price={"btcbinanceBuy"}
                    type="Buy"
                  />
                </Grid>
                <Grid item>
                  <Itemsource name="Kucoin" price={"btckucoinBuy"} type="Buy" />
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
                  <Itemsource name="Coinbase" price={"btcSell"} type="Sell" />
                </Grid>
                <Grid item>
                  <Itemsource
                    name="Binance"
                    price={"btcbinanceSell"}
                    type="Sell"
                  />
                </Grid>
                <Grid item>
                  <Itemsource
                    name="Kucoin"
                    price={"btckucoinSell"}
                    type="Sell"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bitcoin;
