const a = Symbol("dee");

a.description;
const v = a.toString();
const r = a.valueOf();

console.log("done", r);
