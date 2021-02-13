
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    let m = array[0];
    array.forEach(elem => {
      if (elem < m)
        m = elem;
    });
    return m;
  } else {
    return 0;
  }
};

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    let m = array[0];
    array.forEach(elem => {
      if (elem > m)
        m = elem;
    });
    return m;
  } else {
    return 0;
  }
};

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    let sum = 0;
    array.forEach(elem => {
      sum += elem;
    });
    return sum / array.length;
  } else {
    return 0;
  }
};
