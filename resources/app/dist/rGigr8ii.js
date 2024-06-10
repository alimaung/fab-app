import { r as v, dg as f, eD as h } from './0fV2q4Ox.js'
function g (a, n = 'history') {
  const e = v(0),
    t = f(n, () => h(n, ['']))
  function o () {
    e.value === 0 ? (e.value = t.value.length - 1) : e.value--
    const u = t.value.length === 0,
      l = e.value < 0
    if (u || l) {
      e.value++
      return
    }
    a.value = t.value[e.value]
  }
  function s () {
    const u = t.value.length - 1
    e.value === u ? (e.value = 0) : e.value++
    const l = t.value.length === 0,
      r = e.value >= t.value.length
    if (l || r) {
      e.value--
      return
    }
    a.value = t.value[e.value]
  }
  function i (u) {
    t.value.push(u), (e.value = 0)
  }
  return { historyUp: o, historyDown: s, historyAdd: i }
}
export { g as u }
