function compose(...fns) {
  return function (arg) {
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  };
}

export default compose;
