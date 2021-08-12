/*we have 3 urls and we have to get data from all 3 asynchronously 
using promise functions only
*/

const promise1 = fetch("todos_bilal.json");
// const promise2 = fetch('todos_aniss.json')
const promise2 = Promise.reject("cant find resource");
const promise3 = fetch("todos_taimoor.json");

// promise1.then((res)=>{
//     res.json()
//     .then((data)=>{
//         console.log(data)
//     })
// })

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

Promise.allSettled([promise1, promise2, promise3])
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

//all settled will execute all until each is settled (fulfilled or rejected)
