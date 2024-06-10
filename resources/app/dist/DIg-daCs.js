import { e8 as u } from './0fV2q4Ox.js'
function f (o, i) {
  return new Promise(function (t, e) {
    var r = !1,
      n
    o.subscribe({
      next: function (a) {
        ;(n = a), (r = !0)
      },
      error: e,
      complete: function () {
        r ? t(n) : e(new u())
      }
    })
  })
}
export { f as l }
