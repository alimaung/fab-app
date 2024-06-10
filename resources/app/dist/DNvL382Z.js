import { dJ as n, dK as r, dL as a, dM as c } from './0fV2q4Ox.js'
function p (e) {
  return n(function (o, t) {
    r(e).subscribe(
      a(
        t,
        function () {
          return t.complete()
        },
        c
      )
    ),
      !t.closed && o.subscribe(t)
  })
}
export { p as t }
