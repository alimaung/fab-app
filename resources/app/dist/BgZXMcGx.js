const __vite__fileDeps = [
    './CH8GFU8g.js',
    './0fV2q4Ox.js',
    './entry.EtDX2buR.css',
    './M_3S_cE4.js',
    './D0r5xylr.js',
    './releases.Dr_qQJFw.css',
    './zeEpQB4A.js',
    './CxwSbNEQ.js',
    './copyable.BKOR4oS4.css',
    './DRWRzBEg.js',
    './deploymentGroups.DMv-o2Kq.css'
  ],
  __vite__mapDeps = i => i.map(i => __vite__fileDeps[i])
import {
  d as R,
  r as T,
  L as w,
  A as n,
  M as A,
  t as D,
  z as e,
  B as _,
  x as l,
  N as t,
  P as E,
  an as p,
  V as G,
  W as N,
  X as x,
  Y as H,
  Z as S,
  ab as k,
  aW as z,
  a_ as M,
  a$ as O,
  ac as U,
  b0 as W,
  b1 as F,
  b2 as f,
  b3 as g
} from './0fV2q4Ox.js'
import { _ as X } from './logout.js'
import './BYx_WZxC.js'
const Y = { class: 'page-content' },
  J = R({
    __name: 'index',
    setup (Z) {
      const b = f(() =>
          g(
            () => import('./CH8GFU8g.js'),
            __vite__mapDeps([0, 1, 2, 3, 4, 5]),
            import.meta.url
          )
        ),
        I = f(() =>
          g(
            () => import('./zeEpQB4A.js'),
            __vite__mapDeps([6, 1, 2, 7, 4, 8, 3, 9, 10]),
            import.meta.url
          )
        ),
        s = T('releases')
      function i (o, a = !0) {
        return s.value !== o || !a ? 'display: none;' : ''
      }
      return (o, a) => {
        const u = G,
          c = N,
          v = x,
          y = X,
          V = H,
          B = S,
          r = k,
          m = z,
          d = M,
          C = O,
          L = U,
          h = A
        return (
          D(),
          w(h, null, {
            default: n(() => [
              e(B, null, {
                default: n(() => [
                  e(V, null, {
                    default: n(() => [
                      e(
                        c,
                        { slot: 'start' },
                        { default: n(() => [e(u)]), _: 1 }
                      ),
                      e(v, null, { default: n(() => [_('Firmware')]), _: 1 }),
                      e(c, { slot: 'end' }, { default: n(() => [e(y)]), _: 1 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(
                L,
                { fullscreen: !0, class: 'ion-padding' },
                {
                  default: n(() => [
                    l('div', null, [
                      e(
                        C,
                        {
                          modelValue: t(s),
                          'onUpdate:modelValue':
                            a[0] || (a[0] = P => (E(s) ? (s.value = P) : null)),
                          class: 'page-segments'
                        },
                        {
                          default: n(() => [
                            e(
                              d,
                              { value: 'releases' },
                              {
                                default: n(() => [
                                  e(m, null, {
                                    default: n(() => [
                                      e(
                                        r,
                                        {
                                          icon:
                                            'ioniconsList' in o
                                              ? o.ioniconsList
                                              : t(W),
                                          class: 'page-segment-icon'
                                        },
                                        null,
                                        8,
                                        ['icon']
                                      ),
                                      _(' Releases ')
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }
                            ),
                            e(
                              d,
                              { value: 'deploymentGroups' },
                              {
                                default: n(() => [
                                  e(m, null, {
                                    default: n(() => [
                                      e(
                                        r,
                                        {
                                          icon:
                                            'ioniconsCube' in o
                                              ? o.ioniconsCube
                                              : t(F),
                                          class: 'page-segment-icon'
                                        },
                                        null,
                                        8,
                                        ['icon']
                                      ),
                                      _(' Deployment Groups ')
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['modelValue']
                      ),
                      l('div', Y, [
                        l('div', { style: p(i('releases')) }, [e(t(b))], 4),
                        l(
                          'div',
                          { style: p(i('deploymentGroups')) },
                          [e(t(I))],
                          4
                        )
                      ])
                    ])
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          })
        )
      }
    }
  })
export { J as default }
