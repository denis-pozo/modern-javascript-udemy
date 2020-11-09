const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts',
//   function(err, response) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
// });
// 
// 
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//   function(err, response) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
// });

const data = {
  title: 'Custom Post', 
  body: 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', 
//   data, function(err, post) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
// });

http.put('https://jsonplaceholder.typicode.com/posts/1', 
  data, function(err, post) {
    if(err) {
      console.log(err);
    } else {
      console.log(post);
    }
});

http.delete('https://jsonplaceholder.typicode.com/posts/1', 
  function(err, response) {
    if(err) {
      console.log(err);
    } else {
      console.log(response);
    }
});
