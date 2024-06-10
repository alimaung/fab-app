import {
  d as ne,
  u as ae,
  r as m,
  cP as le,
  K as re,
  t as D,
  L as x,
  A as a,
  z as n,
  B as v,
  N as r,
  P as V,
  x as T,
  ai as f,
  O as k,
  ay as ie,
  ao as ue,
  a0 as se,
  a5 as de,
  a6 as ce,
  af as pe,
  a1 as me,
  a3 as ve,
  $ as ye,
  ab as _e,
  ap as fe,
  a4 as we,
  a2 as ge,
  b4 as Ie,
  b5 as be,
  a8 as Se,
  a9 as Ce,
  m as $e
} from './0fV2q4Ox.js'
import { _ as De, a as xe } from './IMC4bHQ4.js'
import { u as B } from './rGigr8ii.js'
import './D0r5xylr.js'
import './BJaqhUnt.js'
import './BbFGwhBy.js'
const Ve = { style: { width: '100%' } },
  Ne = { style: { display: 'flex', 'flex-direction': 'row' } },
  Ue = ne({
    __name: 'queryGateways',
    setup (ke) {
      const { $api: P } = $e(),
        N = ae(),
        y = m('ProductSerial'),
        p = m(''),
        {
          historyUp: L,
          historyDown: U,
          historyAdd: E
        } = B(p, 'queryGatewaysInput'),
        _ = m(''),
        {
          historyUp: Q,
          historyDown: h,
          historyAdd: A
        } = B(_, 'queryGatewaysInput2'),
        l = m(null),
        b = new Date().toISOString().slice(0, -5),
        c = m({ restrictPeriod: !1, periodStart: b, periodEnd: b }),
        w = le({ value: null }),
        S = m(!1),
        H = m(100),
        C = m(null)
      re(
        () => [
          N.currentRoute.value.query.productSerial,
          N.currentRoute.value.query.id
        ],
        ([t]) => {
          N.currentRoute.value.query.tab === 'gatewayDebug' &&
            ((y.value = 'ProductSerial'),
            (p.value = (t == null ? void 0 : t.toString()) ?? ''),
            (_.value = ''),
            (c.value.restrictPeriod = !1),
            $(),
            g(!0))
        },
        { immediate: !0 }
      )
      async function g (t = w.value === null) {
        const e = t ? K : M
        E(p.value), A(_.value)
        const i = c.value.restrictPeriod
          ? {
              periodStart: new Date(c.value.periodStart).getTime(),
              periodEnd: new Date(c.value.periodEnd).getTime()
            }
          : {}
        return e({
          identifierType: y.value,
          identifierValue: p.value,
          productCode: y.value === 'SerialNumber' ? Number(_.value) : void 0,
          ...i,
          meta: {
            pagination: {
              limit: H.value,
              cursorValue: t ? void 0 : C.value ?? void 0
            }
          }
        })
      }
      function q (t) {
        const e = Object.keys(t)
        if (e.length === 0) throw new Error('No gateways found')
        const i = []
        for (let u = 0; u < t[e[0]].length; u++) {
          const s = {}
          for (const d of e) s[d] = t[d][u]
          i.push(s)
        }
        return i
      }
      async function K (t) {
        var e, i, u, s
        S.value = !0
        try {
          const { data: d, meta: I } = await P.debugGatewayData({
            debugGatewayDataRequest: t
          })
          ;(w.value = q(d)),
            (C.value =
              ((e = I == null ? void 0 : I.pagination) == null
                ? void 0
                : e.cursorNext) ?? null),
            (i = l == null ? void 0 : l.value) == null ||
              i.$el.classList.add('ion-valid')
        } catch {
          ;(u = l == null ? void 0 : l.value) == null ||
            u.$el.classList.add('ion-invalid'),
            (w.value = null)
        } finally {
          ;(s = l == null ? void 0 : l.value) == null ||
            s.$el.classList.add('ion-touched'),
            (S.value = !1)
        }
      }
      async function M (t) {
        var e, i
        try {
          const { data: u, meta: s } = await P.debugGatewayData({
            debugGatewayDataRequest: t
          })
          ;(e = w.value) == null || e.push(...q(u)),
            (C.value =
              ((i = s == null ? void 0 : s.pagination) == null
                ? void 0
                : i.cursorNext) ?? null)
        } catch (u) {
          console.error("Can't load more gateways.", u)
        }
      }
      async function O (t) {
        await g(), setTimeout(() => t.target.complete(), 500)
      }
      function z () {
        ;(p.value = ''),
          (c.value.periodStart = b),
          (c.value.periodEnd = b),
          ue(() => {
            var t
            return (t = l == null ? void 0 : l.value) == null
              ? void 0
              : t.$el.setFocus()
          })
      }
      function $ () {
        var t
        ;(t = l.value) == null ||
          t.$el.classList.remove('ion-touched', 'ion-valid', 'ion-invalid')
      }
      return (t, e) => {
        const i = se,
          u = de,
          s = ce,
          d = pe,
          I = me,
          G = ve,
          F = De,
          j = ye,
          R = _e,
          J = fe,
          W = we,
          X = ge,
          Y = xe,
          Z = Ie,
          ee = be,
          te = Se,
          oe = Ce
        return (
          D(),
          x(oe, null, {
            default: a(() => [
              n(s, null, {
                default: a(() => [
                  n(i, null, {
                    default: a(() => [v('Gateway Debug Query')]),
                    _: 1
                  }),
                  n(u, null, {
                    default: a(() => [v(' Query a gateway debug data ')]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              n(te, null, {
                default: a(() => [
                  n(
                    X,
                    { lines: 'none' },
                    {
                      default: a(() => [
                        n(
                          I,
                          {
                            slot: 'start',
                            label: 'Filter Parameter',
                            'label-placement': 'floating',
                            placeholder: 'Select a filter',
                            modelValue: r(y),
                            'onUpdate:modelValue':
                              e[0] ||
                              (e[0] = o => (V(y) ? (y.value = o) : null)),
                            style: { 'min-width': '19ch', 'flex-grow': '0' },
                            onIonChange: e[1] || (e[1] = o => $())
                          },
                          {
                            default: a(() => [
                              n(
                                d,
                                { value: 'ProductSerial' },
                                {
                                  default: a(() => [v(' Product Serial ')]),
                                  _: 1
                                }
                              ),
                              n(
                                d,
                                { value: 'ProductSerialId' },
                                {
                                  default: a(() => [v(' Product Serial ID ')]),
                                  _: 1
                                }
                              ),
                              n(
                                d,
                                { value: 'DataMatrixCode' },
                                {
                                  default: a(() => [v(' Data Matrix Code ')]),
                                  _: 1
                                }
                              ),
                              n(
                                d,
                                { value: 'DeviceHash' },
                                { default: a(() => [v(' Device Hash ')]), _: 1 }
                              ),
                              n(
                                d,
                                { value: 'SerialNumber' },
                                {
                                  default: a(() => [v(' Serial Number ')]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue']
                        ),
                        T('div', Ve, [
                          T('div', Ne, [
                            n(
                              G,
                              {
                                ref_key: 'inputRef',
                                ref: l,
                                type: 'text',
                                'error-text': 'No gateways found',
                                placeholder: 'Enter a parameter to filter by',
                                modelValue: r(p),
                                'onUpdate:modelValue':
                                  e[2] ||
                                  (e[2] = o => (V(p) ? (p.value = o) : null)),
                                autofocus: '',
                                onIonInput: e[3] || (e[3] = o => $()),
                                onKeyup: [
                                  e[4] || (e[4] = f(o => g(!0), ['enter'])),
                                  e[5] || (e[5] = f(o => r(L)(), ['up'])),
                                  e[6] || (e[6] = f(o => r(U)(), ['down']))
                                ]
                              },
                              null,
                              8,
                              ['modelValue']
                            ),
                            r(y) === 'SerialNumber'
                              ? (D(),
                                x(
                                  G,
                                  {
                                    key: 0,
                                    type: 'text',
                                    class: 'ion-margin-start',
                                    'error-text': ' ',
                                    placeholder: 'Product Code',
                                    modelValue: r(_),
                                    'onUpdate:modelValue':
                                      e[7] ||
                                      (e[7] = o =>
                                        V(_) ? (_.value = o) : null),
                                    onIonInput: e[8] || (e[8] = o => $()),
                                    onKeyup: [
                                      e[9] || (e[9] = f(o => g(!0), ['enter'])),
                                      e[10] || (e[10] = f(o => r(Q)(), ['up'])),
                                      e[11] ||
                                        (e[11] = f(o => r(h)(), ['down']))
                                    ]
                                  },
                                  null,
                                  8,
                                  ['modelValue']
                                ))
                              : k('', !0)
                          ]),
                          n(
                            F,
                            {
                              modelValue: r(c),
                              'onUpdate:modelValue':
                                e[12] ||
                                (e[12] = o => (V(c) ? (c.value = o) : null))
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        r(S)
                          ? (D(),
                            x(j, {
                              key: 0,
                              slot: 'end',
                              size: 'small',
                              color: 'primary',
                              name: 'crescent'
                            }))
                          : k('', !0),
                        n(
                          R,
                          {
                            slot: 'end',
                            label: 'Clear input',
                            icon:
                              'ioniconsBackspace' in t
                                ? t.ioniconsBackspace
                                : r(ie),
                            onClick: e[13] || (e[13] = o => z())
                          },
                          null,
                          8,
                          ['icon']
                        ),
                        n(
                          W,
                          {
                            class: 'ion-margin-start',
                            slot: 'end',
                            color: 'primary',
                            onClick: e[14] || (e[14] = o => g(!0)),
                            disabled: r(S)
                          },
                          {
                            default: a(() => [
                              n(J, null, {
                                default: a(() => [v('Query')]),
                                _: 1
                              })
                            ]),
                            _: 1
                          },
                          8,
                          ['disabled']
                        )
                      ]),
                      _: 1
                    }
                  ),
                  n(Y, { data: r(w).value, variant: 'gateway' }, null, 8, [
                    'data'
                  ]),
                  r(C)
                    ? (D(),
                      x(
                        ee,
                        { key: 0, onIonInfinite: O },
                        { default: a(() => [n(Z)]), _: 1 }
                      ))
                    : k('', !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        )
      }
    }
  })
export { Ue as default }
