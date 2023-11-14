// async function fetchData() {
//   const url = "https://fakestoreapi.com/products";
//   const responce = await fetch(url);
//   const dataPoints = await Response.json();
//   console.log(dataPoints);
//   return dataPoints;
// }
// fetchData.then((dataPoints) => {
//   const month = dataPoints.financialreport[0].financials.map((index) => {
//     return index.date;
//   });
//   console.log(month);
// });

let array = [
  "men's clothing",
  "men's clothing",
  "men's clothing",
  "men's clothing",
  "jewelry",
  "jewelry",
  "jewelry",
  "jewelry",
  "electronics",
  "electronics",
  "electronics",
  "electronics",
  "electronics",
  "electronics",
  "women's clothing",
  "women's clothing",
  "women's clothing",
  "women's clothing",
  "women's clothing",
  "women's clothing",
];

// バリューごとの合計の数を格納するオブジェクトを作成
const countByValue = [];

// 配列をループしてバリューごとのカウントを計算
array.forEach((value) => {
  if (countByValue[value]) {
    countByValue[value]++;
  } else {
    countByValue[value] = 1;
  }
});

// 結果を表示
for (const value in countByValue) {
  console.log(`${value}: ${countByValue[value]}`);
}
