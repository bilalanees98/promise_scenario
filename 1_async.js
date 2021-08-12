let startIndex = 4900;
function getUrl(idx) {
  return `https://jsonplaceholder.typicode.com/photos?_start=${idx}&_limit=10`;
}

async function recursiveCall(index) {
  const res = await fetch(getUrl(index));
  const data = await res.json();
  console.log(data);
  if (data.length !== 0) {
    index += 10;
    return recursiveCall(index);
  } else {
    console.log("finished");
    return null;
  }
}

recursiveCall(startIndex).then(() => console.log("done"));
