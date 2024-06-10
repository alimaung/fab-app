import {
  d as b,
  dE as g,
  o as T,
  L as B,
  A as n,
  dH as h,
  M as x,
  t as y,
  z as t,
  B as o,
  V as k,
  W as v,
  X as w,
  Y as W,
  Z as F,
  a0 as L,
  a5 as M,
  a6 as P,
  a4 as S,
  a8 as V,
  a9 as E,
  ac as H
} from './0fV2q4Ox.js'
import { _ as N } from './logout.js'
import { d as z } from './8vEe1-SG.js'
import './BYx_WZxC.js'
const j = b({
  __name: 'index',
  setup (A) {
    const e = g()
    return (
      T(() => {
        e.value = z(e.value, h, !1)
      }),
      (D, G) => {
        const d = k,
          a = v,
          r = w,
          f = N,
          p = W,
          m = F,
          l = L,
          _ = M,
          s = P,
          c = S,
          u = V,
          i = E,
          I = H,
          C = x
        return (
          y(),
          B(C, null, {
            default: n(() => [
              t(m, null, {
                default: n(() => [
                  t(p, null, {
                    default: n(() => [
                      t(
                        a,
                        { slot: 'start' },
                        { default: n(() => [t(d)]), _: 1 }
                      ),
                      t(r, null, {
                        default: n(() => [o('Test Lab 🧪')]),
                        _: 1
                      }),
                      t(a, { slot: 'end' }, { default: n(() => [t(f)]), _: 1 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(
                I,
                { fullscreen: !0, class: 'ion-padding' },
                {
                  default: n(() => [
                    t(i, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => [
                            t(l, null, {
                              default: n(() => [
                                o('📻 IntelliGate Balcony Wi-Fi Test')
                              ]),
                              _: 1
                            }),
                            t(_, null, {
                              default: n(() => [
                                o(
                                  ' Wi-Fi provisioning, UDP, PLC and connectivity tests with the cloud '
                                )
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        t(u, null, {
                          default: n(() => [
                            t(
                              c,
                              { 'router-link': '/test-lab/gatewayWiFiTest' },
                              { default: n(() => [o('Start')]), _: 1 }
                            )
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    t(i, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => [
                            t(l, null, {
                              default: n(() => [
                                o('⚡ PowerStick Balcony 350')
                              ]),
                              _: 1
                            }),
                            t(_, null, {
                              default: n(() => [
                                o(
                                  ' Functional and efficiency tests with LabVIEW '
                                )
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        t(u, null, {
                          default: n(() => [
                            t(
                              c,
                              {
                                'router-link':
                                  '/test-lab/inverterEfficiencyTest'
                              },
                              { default: n(() => [o(' Start ')]), _: 1 }
                            )
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          })
        )
      }
    )
  }
})
export { j as default }
