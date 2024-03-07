function* gen() {
    let a = yield 1
    yield a
}
let g = gen()
console.log(g.next());
console.log(g.next(2));
