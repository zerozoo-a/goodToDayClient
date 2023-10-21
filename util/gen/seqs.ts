export function* seq(n = 0) {
  if (n === 0) yield 0;

  while (true) {
    if (n === 0) break;
    yield --n;
  }
}

export function* rSeq(n = 0) {
  if (n === 0) yield 0;
  let i = 0;

  while (true) {
    if (n === i) break;
    yield ++i;
  }
}

export function* startEnd(start, end) {
  if (start < 5) {
    yield start++;
  }
}
