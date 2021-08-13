/*we have 3 urls and we have to get data from all 3 asynchronously 
using async and aawait
*/

const urlList = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getTodos = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
};

const promiseArray = urlList.map((url) => {
  return getTodos(url);
});

Promise.allSettled(promiseArray).then((values) => {
  console.log(values);
});
