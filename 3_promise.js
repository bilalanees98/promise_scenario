/*we have 3 urls and we have to get data from all 3 asynchronously 
using promise functions only
*/

const urlList = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const promiseArray = urlList.map((url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

Promise.allSettled(promiseArray)
  .then((values) => {
    // console.log(values);
    values.forEach((value) => {
      if (value.status === "rejected") {
        //do something
      }
      console.log(value);
    });
  })
  .catch((error) => {
    console.log(error);
  });
