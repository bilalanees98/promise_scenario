/*const url = 'https://jsonplaceholder.typicode.com/photos?_start=1&_limit=10'

Consider above url to fetch the all photos by increasing _start param untill you get empty array.

Solve it using promises --------------
Solve it using async/await */
let startIndex = 4900;
function getUrl(idx) {
  return `https://jsonplaceholder.typicode.com/photos?_start=${idx}&_limit=10`;
}

function recursiveCall(index) {
  return fetch(getUrl(index))
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.length !== 0) {
        index += 10;
        return recursiveCall(index);
      } else {
        console.log("finished");
        return null;
      }
    })
    .catch((error) => {
      console.log("error: ", error.message);
    });
}

recursiveCall(startIndex).then(() => console.log("done"));
