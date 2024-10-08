
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1 (lat, long, timeStr) {
    const URL = APIAdress + `latitude=${lat}&longitude=${long}` +
    `&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`;
    const Fetch_data = await fetch(URL);
    const Response = await Fetch_data.json();
    const Daily_temperatures = Response.hourly.temperature_2m;
    const Data_array = Daily_temperatures;
    var AVG_temperature = 0;
    Data_array.forEach(element => {
        AVG_temperature+=element;   
    });
    return Math.floor(AVG_temperature/Data_array.length);
}
module.exports = f1;