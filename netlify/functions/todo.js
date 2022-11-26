import CoinGecko from 'coingecko-api';
const CoinGeckoClient = new CoinGecko();


export async function handler() {
    let data = await CoinGeckoClient.coins.all();
    let dataFromCoinGecko = await data.data;

    return {
        statusCode: 200,
        body: JSON.stringify(dataFromCoinGecko)
    }
}