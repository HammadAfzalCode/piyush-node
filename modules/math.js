// Default export method //

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = {
//   addFn: add,
//   subFn: sub,
// };

// named export //

exports.add1 = (a, b) => {
  return a + b;
};

exports.sub1 = (a, b) => {
  return a - b;
};
