/*we have 3 urls and we have to get data from all 3 asynchronously 
using async and aawait
*/
const getTodos = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  return data;
};

Promise.allSettled([
  getTodos("todos_bilal.json"),
  getTodos("todos_anis.json"),
  Promise.reject("error of infinite proportions"),
  getTodos("todos_taimoor.json"),
]).then((values) => {
  console.log(values);
});
