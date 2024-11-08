async function weather() {
    const url = 'https://dummyjson.com/products';
    const response = await fetch(url);
    const data = await response.json();
    // return data;
    console.log(data)
}
weather()

// console.log(weather());

// weather().then( (res) => {
//     return res;
// })
// .then((data) => {
//     data.products.forEach( product => {
//         console.log(`ID: ${product.id}`);
//         console.log(`Title: ${product.title}`);
//         console.log(`Description: ${product.description}`);
//         console.log(`Price: $${product.price}`);
//         console.log(`Brand: ${product.brand}`);
//         console.log('---');
//     })
// })


// async function getReport() {
//     const url = "https://Weather-forecast-API.proxy-production.allthingsdev.co/v1/forecast?latitude=11.6536&longitude=77.6552&elevation=1603&hourly=dew_point_2m&daily=weather_code&current=temperature_2m&minutely_15=dew_point_2m&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm&timeformat=iso8601&timezone=GMT&past_days=0&past_hours=0&past_minutely_15=0&forecast_days=0&forecast_hours=0&forecast_minutely_15=0&tilt=30&azimuth=45&start_date=2024-08-08&end_date=2024-08-11&start_hour=2024-08-08T12:00&end_hour=2024-08-08T12:00&start_minutely_15=2024-08-08T12:00&end_minutely_15=2024-08-08T12:15&models=best_match&cell_selection=land";

//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }


// getReport().then((res) => {
//     return res;
// })
// .then(data => {
//     console.log(data)
// })

// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => {
//     data.products.forEach(product => {
//       console.log(`ID: ${product.id}`);
//       console.log(`Title: ${product.title}`);
//       console.log(`Description: ${product.description}`);
//       console.log(`Price: $${product.price}`);
//       console.log(`Brand: ${product.brand}`);
//       console.log('---'); // Separator for each product
//     });
//   })
//   .catch(error => console.error('Error:', error));