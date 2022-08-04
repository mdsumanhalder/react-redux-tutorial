const obj = {
  cakes: 10,
  ice: 20,
};

console.log({ ...obj, re: obj.cakes + obj.ice, love: obj.cakes - obj.re });
