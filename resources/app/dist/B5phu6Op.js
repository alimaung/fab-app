import {
  cV as K,
  cR as $,
  r as x,
  d as P,
  bo as F,
  cS as H,
  t as w,
  L as k,
  A as a,
  z as n,
  B as m,
  v as j,
  R as O,
  Q as W,
  N as G,
  m as Q,
  ad as Y,
  X as C,
  dD as D,
  a4 as z,
  a3 as X,
  a2 as A,
  au as N,
  _ as T,
  aK as Z,
  aL as q,
  O as J,
  aN as ee,
  aa as te,
  M as ne,
  V as oe,
  W as ae,
  Y as le,
  Z as ce,
  ac as se
} from './0fV2q4Ox.js'
import { _ as ue } from './logout.js'
import './BYx_WZxC.js'
let V
const ie = new Uint8Array(16)
function de () {
  if (
    !V &&
    ((V =
      typeof crypto < 'u' &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !V)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    )
  return V(ie)
}
const o = []
for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1))
function re (e, t = 0) {
  return (
    o[e[t + 0]] +
    o[e[t + 1]] +
    o[e[t + 2]] +
    o[e[t + 3]] +
    '-' +
    o[e[t + 4]] +
    o[e[t + 5]] +
    '-' +
    o[e[t + 6]] +
    o[e[t + 7]] +
    '-' +
    o[e[t + 8]] +
    o[e[t + 9]] +
    '-' +
    o[e[t + 10]] +
    o[e[t + 11]] +
    o[e[t + 12]] +
    o[e[t + 13]] +
    o[e[t + 14]] +
    o[e[t + 15]]
  )
}
const _e =
    typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  B = { randomUUID: _e }
function pe (e, t, i) {
  if (B.randomUUID && !t && !e) return B.randomUUID()
  e = e || {}
  const l = e.random || (e.rng || de)()
  return (l[6] = (l[6] & 15) | 64), (l[8] = (l[8] & 63) | 128), re(l)
}
function me (e) {
  return K() ? ($(e), !0) : !1
}
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
function ye (e, t) {
  const i = x(void 0),
    l = e.subscribe({ next: r => (i.value = r), error: void 0 })
  return (
    me(() => {
      l.unsubscribe()
    }),
    i
  )
}
const fe = P({
    __name: 'apiKeys',
    setup (e) {
      const { $db: t } = Q(),
        i = x(!0),
        l = ye(F(async () => await t.apiKeys.reverse().toArray())),
        r = () => ({ key: '', description: '', created: Date.now() }),
        s = x(r()),
        f = async () => {
          t.apiKeys.add(Y(s.value)), (s.value = r())
        },
        g = async c => {
          c !== void 0 && t.apiKeys.delete(c)
        },
        v = (c, d) => {
          window.electronAPI.copyToClipboard(c), y(d.target)
        },
        h = c => {
          ;(s.value.key = pe()), y(c.target)
        },
        y = c => {
          const d = c.attributes.getNamedItem('color')
          d &&
            (setTimeout(() => {
              d.value = 'light'
            }, 500),
            (d.value = 'success'))
        },
        I = c => new Date(c).toLocaleString(),
        S = c => new Date(c).toString()
      return (
        H(() => {
          i.value = s.value.key.length === 0 || s.value.description.length === 0
        }),
        (c, d) => {
          const M = C,
            R = D,
            b = z,
            _ = X,
            U = A,
            L = N
          return (
            w(),
            k(L, null, {
              default: a(() => [
                n(R, null, {
                  default: a(() => [
                    n(M, null, {
                      default: a(() => [m(' Manage API Keys ')]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                n(U, null, {
                  default: a(() => [
                    n(
                      b,
                      {
                        onClick: h,
                        fill: 'outline',
                        color: 'light',
                        title: 'Add key',
                        class: 'prefix-button'
                      },
                      { default: a(() => [m(' ➕ ')]), _: 1 }
                    ),
                    n(
                      _,
                      {
                        modelValue: s.value.key,
                        'onUpdate:modelValue':
                          d[0] || (d[0] = u => (s.value.key = u)),
                        placeholder: 'Secret Key',
                        class: 'first-col-width'
                      },
                      null,
                      8,
                      ['modelValue']
                    ),
                    n(
                      _,
                      {
                        modelValue: s.value.description,
                        'onUpdate:modelValue':
                          d[1] || (d[1] = u => (s.value.description = u)),
                        placeholder: 'Description'
                      },
                      null,
                      8,
                      ['modelValue']
                    ),
                    n(_, { readonly: '', placeholder: 'Created' }),
                    n(
                      b,
                      {
                        class: 'add-button',
                        color: 'secondary',
                        disabled: i.value,
                        onClick: f
                      },
                      { default: a(() => [m(' Add ')]), _: 1 },
                      8,
                      ['disabled']
                    )
                  ]),
                  _: 1
                }),
                (w(!0),
                j(
                  O,
                  null,
                  W(
                    G(l),
                    (u, E) => (
                      w(),
                      k(
                        U,
                        { key: E },
                        {
                          default: a(() => [
                            n(
                              b,
                              {
                                onClick: p => v(u.key, p),
                                fill: 'outline',
                                color: 'light',
                                title: 'Copy to clipboard',
                                class: 'prefix-button'
                              },
                              { default: a(() => [m(' 📋 ')]), _: 2 },
                              1032,
                              ['onClick']
                            ),
                            n(
                              _,
                              {
                                modelValue: u.key,
                                'onUpdate:modelValue': p => (u.key = p),
                                class: 'first-col-width',
                                readonly: !0
                              },
                              null,
                              8,
                              ['modelValue', 'onUpdate:modelValue']
                            ),
                            n(
                              _,
                              {
                                modelValue: u.description,
                                'onUpdate:modelValue': p => (u.description = p),
                                readonly: !0
                              },
                              null,
                              8,
                              ['modelValue', 'onUpdate:modelValue']
                            ),
                            n(
                              _,
                              {
                                value: I(u.created),
                                title: S(u.created),
                                readonly: !0
                              },
                              null,
                              8,
                              ['value', 'title']
                            ),
                            n(
                              b,
                              {
                                fill: 'clear',
                                color: 'danger',
                                onClick: p => g(u.id)
                              },
                              { default: a(() => [m(' Delete ')]), _: 2 },
                              1032,
                              ['onClick']
                            )
                          ]),
                          _: 2
                        },
                        1024
                      )
                    )
                  ),
                  128
                ))
              ]),
              _: 1
            })
          )
        }
      )
    }
  }),
  ge = T(fe, [['__scopeId', 'data-v-5dd113a4']]),
  ve = {
    __name: 'devSettings',
    setup (e) {
      const i = x(!1),
        { newMsgId: l, ipcSubject: r } = Z(q.IPC_FLASH)
      function s () {
        r.next({ type: ee.SET_MENU_BAR_VISIBILITY, id: l(), visible: i.value })
      }
      return (f, g) => {
        const v = C,
          h = D,
          y = te,
          I = A,
          S = N
        return J('', !0)
      }
    }
  },
  he = {}
function Ie (e, t) {
  const i = oe,
    l = ae,
    r = C,
    s = ue,
    f = le,
    g = ce,
    v = ge,
    h = ve,
    y = se,
    I = ne
  return (
    w(),
    k(I, null, {
      default: a(() => [
        n(g, null, {
          default: a(() => [
            n(f, null, {
              default: a(() => [
                n(l, { slot: 'start' }, { default: a(() => [n(i)]), _: 1 }),
                n(r, null, { default: a(() => [m('Settings')]), _: 1 }),
                n(l, { slot: 'end' }, { default: a(() => [n(s)]), _: 1 })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        n(
          y,
          { fullscreen: !0, class: 'ion-padding' },
          { default: a(() => [n(v), n(h)]), _: 1 }
        )
      ]),
      _: 1
    })
  )
}
const ke = T(he, [['render', Ie]])
export { ke as default }
