function c (f, t, i = !0) {
  const n = { ...f }
  for (const e in t)
    typeof t[e] == 'object' &&
    t[e] !== null &&
    f[e] !== null &&
    typeof f[e] == 'object'
      ? (n[e] === void 0 && (n[e] = {}), (n[e] = c(n[e], t[e], i)))
      : (i || !(e in n)) && (n[e] = t[e])
  return n
}
export { c as d }
