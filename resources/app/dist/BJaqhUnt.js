function o (t) {
  return t.toString().padStart(2, '0')
}
function u (t) {
  const n = o(t.getDate()),
    e = o(t.getMonth() + 1),
    r = t.getFullYear()
  return `${n}.${e}.${r}`
}
function f (t) {
  return `${u(t)} ${t.toLocaleTimeString('de')}`
}
function i (t) {
  const n = Math.floor(t / 1e3),
    e = Math.floor(n / 60),
    r = Math.floor(e / 60)
  return `${Math.floor(r / 24)}:${o(r % 24)}:${o(e % 60)}:${o(n % 60)}`
}
function $ (t = new Date()) {
  const n = o(t.getDate()),
    e = o(t.getMonth() + 1),
    r = t.getFullYear(),
    s = o(t.getHours()),
    a = o(t.getMinutes()),
    c = o(t.getSeconds())
  return `${r}-${e}-${n}_${s}-${a}-${c}`
}
export { u as a, f as b, i as c, $ as f }
