export function getBTCPrices() {
  console.log("making request");
  return fetch("https://d11h2.sse.codesandbox.io/api/BTC").then((data) =>
    data.json()
  );
}
