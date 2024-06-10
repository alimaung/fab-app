import {
  d as Q,
  dE as j,
  r as $,
  t as g,
  v as be,
  z as e,
  A as t,
  N as n,
  bd as Ie,
  B as o,
  ax as ge,
  R as ye,
  ab as K,
  a4 as q,
  X,
  Y as ne,
  Z as oe,
  a3 as ae,
  a2 as se,
  aa as we,
  ac as le,
  W as ie,
  aH as Se,
  ar as ze,
  aK as Te,
  aL as ke,
  dF as k,
  c as Ce,
  e as xe,
  L as y,
  P as Ee,
  ai as H,
  O as A,
  ay as $e,
  y as c,
  aQ as De,
  aN as M,
  bF as Pe,
  bm as Ae,
  bn as Be,
  dG as Fe,
  ao as Ve,
  a0 as Le,
  a5 as Ne,
  a6 as Oe,
  $ as Re,
  ap as Me,
  aj as ue,
  as as Ue,
  bQ as Ge,
  a8 as We,
  aX as he,
  a9 as He,
  m as Qe,
  _ as je,
  o as Ke,
  dH as qe,
  M as Xe,
  V as Ye,
  dI as Ze
} from './0fV2q4Ox.js'
import { _ as Je } from './logout.js'
import { u as et } from './rGigr8ii.js'
import { p as te, w as tt, g as nt } from './D0r5xylr.js'
import { t as ot } from './DNvL382Z.js'
import { l as at } from './DIg-daCs.js'
import { d as st } from './8vEe1-SG.js'
import './BYx_WZxC.js'
const lt = Q({
    __name: 'gatewayTestSettingsButton',
    setup (Y) {
      const f = j(),
        C = $(!1),
        D = m => (C.value = m)
      return (m, l) => {
        const b = K,
          i = q,
          I = X,
          w = ne,
          S = oe,
          r = ae,
          z = se,
          B = we,
          F = le,
          P = ie,
          x = Se,
          V = ze
        return (
          g(),
          be(
            ye,
            null,
            [
              e(
                i,
                { color: 'light', onClick: l[0] || (l[0] = _ => D(!0)) },
                {
                  default: t(() => [
                    e(
                      b,
                      {
                        color: 'medium',
                        icon:
                          'ioniconsSettingsSharp' in m
                            ? m.ioniconsSettingsSharp
                            : n(Ie)
                      },
                      null,
                      8,
                      ['icon']
                    )
                  ]),
                  _: 1
                }
              ),
              e(
                V,
                { 'is-open': n(C), onWillDismiss: l[8] || (l[8] = _ => D(!1)) },
                {
                  default: t(() => [
                    e(S, null, {
                      default: t(() => [
                        e(w, null, {
                          default: t(() => [
                            e(I, null, {
                              default: t(() => [o('Settings')]),
                              _: 1
                            }),
                            e(
                              i,
                              {
                                onClick: l[1] || (l[1] = _ => D(!1)),
                                slot: 'end',
                                fill: 'default'
                              },
                              {
                                default: t(() => [
                                  e(
                                    b,
                                    {
                                      icon:
                                        'ioniconsClose' in m
                                          ? m.ioniconsClose
                                          : n(ge),
                                      size: 'medium'
                                    },
                                    null,
                                    8,
                                    ['icon']
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    e(
                      F,
                      { class: 'ion-padding' },
                      {
                        default: t(() => [
                          e(z, null, {
                            default: t(() => [
                              e(
                                r,
                                {
                                  modelValue: n(f).factorySsid,
                                  'onUpdate:modelValue':
                                    l[2] ||
                                    (l[2] = _ => (n(f).factorySsid = _)),
                                  label: 'Factory Wi-Fi SSID',
                                  type: 'text',
                                  class: 'ion-text-right'
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          e(z, null, {
                            default: t(() => [
                              e(
                                r,
                                {
                                  modelValue: n(f).factoryPassword,
                                  'onUpdate:modelValue':
                                    l[3] ||
                                    (l[3] = _ => (n(f).factoryPassword = _)),
                                  label: 'Factory Wi-Fi Password',
                                  type: 'text',
                                  class: 'ion-text-right'
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          e(z, null, {
                            default: t(() => [
                              e(
                                r,
                                {
                                  modelValue: n(f).timeoutInMs,
                                  'onUpdate:modelValue':
                                    l[4] ||
                                    (l[4] = _ => (n(f).timeoutInMs = _)),
                                  label: 'Test step timeout in ms',
                                  type: 'number',
                                  inputmode: 'numeric',
                                  class: 'ion-text-right'
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          e(
                            z,
                            { lines: 'none' },
                            {
                              default: t(() => [
                                e(
                                  r,
                                  {
                                    modelValue: n(f).expectedInverters,
                                    'onUpdate:modelValue':
                                      l[5] ||
                                      (l[5] = _ =>
                                        (n(f).expectedInverters = _)),
                                    label: 'Inverter count',
                                    type: 'number',
                                    'helper-text':
                                      'Expected number of inverters connected to the gateway',
                                    inputmode: 'numeric',
                                    class: 'ion-text-right'
                                  },
                                  null,
                                  8,
                                  ['modelValue']
                                )
                              ]),
                              _: 1
                            }
                          ),
                          e(z, null, {
                            default: t(() => [
                              e(
                                B,
                                {
                                  onIonChange:
                                    l[6] ||
                                    (l[6] = _ =>
                                      (n(f).skipOTA = _.detail.checked)),
                                  checked: n(f).skipOTA
                                },
                                {
                                  default: t(() => [o(' Skip OTA tests ')]),
                                  _: 1
                                },
                                8,
                                ['checked']
                              )
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }
                    ),
                    e(x, null, {
                      default: t(() => [
                        e(w, null, {
                          default: t(() => [
                            e(
                              P,
                              { slot: 'end' },
                              {
                                default: t(() => [
                                  e(
                                    i,
                                    {
                                      class: 'ion-padding-end',
                                      color: 'primary',
                                      onClick: l[7] || (l[7] = _ => D(!1))
                                    },
                                    { default: t(() => [o(' OK ')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                },
                8,
                ['is-open']
              )
            ],
            64
          )
        )
      }
    }
  }),
  it = Q({
    __name: 'gatewayTest',
    setup (Y) {
      const { $api: f } = Qe(),
        { ipcSubject: C, newMsgId: D } = Te(ke.IPC_FLASH),
        m = j(),
        l = $(''),
        b = $(),
        i = $(null),
        I = $(!1),
        w = $(''),
        S = $(k.IDLE),
        r = $(V()),
        {
          historyUp: z,
          historyDown: B,
          historyAdd: F
        } = et(l, 'gatewayHistory'),
        P = Ce(() => {
          switch (S.value) {
            case k.IDLE:
            case k.RUNNING:
            case k.FAILED:
              return 'default'
            case k.PASSED:
              return 'success-light'
          }
        })
      let x = null
      function V () {
        return {
          connectGateway: -1,
          idc: -1,
          testMode: -1,
          connectWifi: -1,
          checkWifi: -1,
          cloudData: -1,
          cloudOta: -1,
          plc: -1,
          reboot: -1,
          submitted: -1
        }
      }
      async function _ () {
        ;(I.value = !0),
          (i.value = null),
          (w.value = ''),
          F(l.value),
          (S.value = k.RUNNING)
        const u = Date.now()
        try {
          await Z(l.value), await de(), (S.value = k.PASSED)
        } catch (d) {
          b.value.$el.classList.add('ion-invalid')
          const { msg: E } = await te(d)
          ;(w.value = E), (S.value = k.FAILED)
        } finally {
          b.value.$el.classList.add('ion-touched'), (I.value = !1)
          const d = ((Date.now() - u) / 1e3).toFixed(2)
          console.log(`Test concluded in ${d} seconds`), await tt(300), J()
        }
      }
      async function de () {
        if (i.value === void 0 || i.value === null) return
        const { productSerial: u, additionalAttributes: d } = i.value
        r.value = V()
        const E = `SN${u}`,
          L = d == null ? void 0 : d.wifiPassword
        if (L === void 0) throw new Error('Missing client password')
        const {
            factorySsid: U,
            factoryPassword: G,
            timeoutInMs: W,
            expectedInverters: h
          } = m.value,
          N = {
            type: M.IGB_TEST_REQUEST,
            id: D(),
            productSerial: u,
            factorySsid: U,
            factoryPassword: G,
            gatewaySsid: E,
            gatewayPassword: L,
            timeoutInMs: W,
            expectedInverters: parseInt(h),
            skipOTA: m.value.skipOTA
          },
          O = new Pe(),
          R = C.pipe(
            Ae(v => v.id === N.id),
            Be(v => {
              if (v.type === M.ERROR_RESPONSE) throw new Error(v.reason)
            }),
            ot(O),
            Fe()
          )
        ;(x = R.subscribe({
          next: v => {
            switch (v.type) {
              case M.IGB_TEST_UPDATE:
                r.value = v.result
                break
              case M.IGB_TEST_RESPONSE:
                ;(r.value = v.result), O.next(!0)
                break
              default:
                throw new Error(`Unhandled message type: ${v.type}`)
            }
          },
          error: v => {
            te(v).then(({ msg: p }) => {
              ;(S.value = k.FAILED), (w.value = p)
            })
          }
        })),
          C.next(N),
          await at(R),
          await Z(u)
      }
      async function Z (u) {
        const { data: d } = await f.deviceList({ deviceListRequest: nt(u) }),
          E = d.devices[0]
        if (!E) throw new Error('Device not found')
        b.value.$el.classList.add('ion-valid'), (l.value = ''), (i.value = E)
      }
      function J () {
        var u
        ;(u = b == null ? void 0 : b.value) == null || u.$el.setFocus()
      }
      function re () {
        ;(l.value = ''), Ve(() => J())
      }
      function ce () {
        b.value.$el.classList.remove('ion-touched', 'ion-valid', 'ion-invalid')
      }
      function T (u) {
        if (u === void 0) return ''
        if (u === -2) return '⛔'
        if (u === -1) return '⏸️'
        if (u === 0) return '⚠️'
        if (u === 1) return '✅'
        if (u > 1) return '⚠️'
      }
      function _e (u) {
        return u === void 0
          ? ''
          : u === -2
          ? '⛔'
          : u === -1
          ? '⏸️'
          : `${u}/${m.value.expectedInverters}`
      }
      function fe () {
        x && (x.unsubscribe(), (x = null))
      }
      return (
        xe(fe),
        (u, d) => {
          const E = Le,
            L = Ne,
            U = Oe,
            G = ae,
            W = Re,
            h = K,
            N = Me,
            O = q,
            R = se,
            v = X,
            p = ue,
            s = Ue,
            ee = Ge,
            pe = We,
            me = he,
            ve = He
          return (
            g(),
            y(
              ve,
              { color: n(P) },
              {
                default: t(() => [
                  e(U, null, {
                    default: t(() => [
                      e(E, null, {
                        default: t(() => [o('📻 Gateway Test')]),
                        _: 1
                      }),
                      e(L, null, {
                        default: t(() => [
                          o(' Scan the Wi-Fi provisioning QR-Code ')
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(pe, null, {
                    default: t(() => [
                      e(
                        R,
                        { lines: 'none', color: n(P), class: 'ion-no-padding' },
                        {
                          default: t(() => [
                            e(
                              G,
                              {
                                ref_key: 'inputRef',
                                ref: b,
                                type: 'text',
                                label: 'QR Code',
                                'error-text': n(w),
                                modelValue: n(l),
                                'onUpdate:modelValue':
                                  d[0] ||
                                  (d[0] = a => (Ee(l) ? (l.value = a) : null)),
                                autofocus: '',
                                disabled: n(I),
                                onIonInput: d[1] || (d[1] = a => ce()),
                                onKeyup: [
                                  d[2] || (d[2] = H(a => _(), ['enter'])),
                                  d[3] || (d[3] = H(a => n(z)(), ['up'])),
                                  d[4] || (d[4] = H(a => n(B)(), ['down']))
                                ]
                              },
                              null,
                              8,
                              ['error-text', 'modelValue', 'disabled']
                            ),
                            n(I)
                              ? (g(),
                                y(W, {
                                  key: 0,
                                  slot: 'end',
                                  size: 'small',
                                  color: 'primary',
                                  name: 'crescent'
                                }))
                              : A('', !0),
                            e(
                              h,
                              {
                                slot: 'end',
                                label: 'Clear input',
                                color: 'medium',
                                icon:
                                  'ioniconsBackspace' in u
                                    ? u.ioniconsBackspace
                                    : n($e),
                                onClick: d[5] || (d[5] = a => re())
                              },
                              null,
                              8,
                              ['icon']
                            ),
                            e(
                              O,
                              {
                                class: 'ion-margin-start',
                                slot: 'end',
                                color: 'success',
                                onClick: d[6] || (d[6] = a => _()),
                                disabled: n(I)
                              },
                              {
                                default: t(() => [
                                  e(N, null, {
                                    default: t(() => [o('Start')]),
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
                        },
                        8,
                        ['color']
                      ),
                      n(i)
                        ? (g(),
                          y(
                            p,
                            { key: 0, class: 'ion-margin-top' },
                            {
                              default: t(() => [
                                e(
                                  v,
                                  { class: 'ion-no-padding' },
                                  { default: t(() => [o('Details')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ))
                        : A('', !0),
                      n(i)
                        ? (g(),
                          y(
                            ee,
                            { key: 1 },
                            {
                              default: t(() => [
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      {
                                        default: t(() => [o('Product Name')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => [
                                          o(c(n(i).product.name), 1)
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      { default: t(() => [o('Created')]), _: 1 }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                (a = n(i).creationTimeStamp) ==
                                                  null
                                                  ? void 0
                                                  : a.toUTCString()
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      {
                                        default: t(() => [o('Product Serial')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => [
                                          o(c(n(i).productSerial), 1)
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      { default: t(() => [o('Status')]), _: 1 }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => [
                                          o(c(n(i).status.name), 1)
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      {
                                        default: t(() => [o('Serial Number')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => [
                                          o(c(n(i).serialNumber), 1)
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      {
                                        default: t(() => [o('Provisioned')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => [
                                          o(
                                            c(
                                              n(i).status.isProvisioned
                                                ? 'Yes'
                                                : 'No'
                                            ),
                                            1
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      {
                                        default: t(() => [
                                          o('Data Matrix Code')
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => [
                                          o(c(n(i).dataMatrixCode), 1)
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      {
                                        default: t(() => [o('Last Contact')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                (a =
                                                  n(i).status
                                                    .contactTimeStamp) == null
                                                  ? void 0
                                                  : a.toUTCString()
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      {
                                        default: t(() => [o('Wi-Fi Password')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                (a =
                                                  n(i).additionalAttributes) ==
                                                  null
                                                  ? void 0
                                                  : a.wifiPassword
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2', class: 'bold' },
                                      { default: t(() => [o('Remarks')]), _: 1 }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => [
                                          o(c(n(i).remarks), 1)
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                e(p)
                              ]),
                              _: 1
                            }
                          ))
                        : A('', !0),
                      n(i)
                        ? (g(),
                          y(
                            p,
                            { key: 2, class: 'ion-margin-top' },
                            {
                              default: t(() => [
                                e(
                                  v,
                                  { class: 'ion-no-padding' },
                                  { default: t(() => [o('Tests')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ))
                        : A('', !0),
                      n(i)
                        ? (g(),
                          y(
                            ee,
                            { key: 3 },
                            {
                              default: t(() => [
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2' },
                                      { default: t(() => [o('Gateway')]), _: 1 }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                T(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.connectGateway
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2' },
                                      {
                                        default: t(() => [o('Cloud Data')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                T(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.cloudData
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2' },
                                      { default: t(() => [o('IDC')]), _: 1 }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                T(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.idc
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      {
                                        size: '2',
                                        class: De(
                                          n(m).skipOTA && 'disabled-test'
                                        )
                                      },
                                      {
                                        default: t(() => [o(' Cloud OTA ')]),
                                        _: 1
                                      },
                                      8,
                                      ['class']
                                    ),
                                    n(m).skipOTA
                                      ? (g(),
                                        y(
                                          s,
                                          {
                                            key: 1,
                                            size: '4',
                                            class: 'disabled-test'
                                          },
                                          {
                                            default: t(() => [o(' skipped ')]),
                                            _: 1
                                          }
                                        ))
                                      : (g(),
                                        y(
                                          s,
                                          { key: 0, size: '4' },
                                          {
                                            default: t(() => {
                                              var a
                                              return [
                                                o(
                                                  c(
                                                    T(
                                                      (a = n(r)) == null
                                                        ? void 0
                                                        : a.cloudOta
                                                    )
                                                  ),
                                                  1
                                                )
                                              ]
                                            }),
                                            _: 1
                                          }
                                        ))
                                  ]),
                                  _: 1
                                }),
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2' },
                                      {
                                        default: t(() => [o('Test Mode')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                T(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.testMode
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2' },
                                      {
                                        default: t(() => [o('Inverters')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                _e(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.plc
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2' },
                                      {
                                        default: t(() => [o('Connect Wi-Fi')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                T(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.connectWifi
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2' },
                                      { default: t(() => [o('Reboot')]), _: 1 }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                T(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.reboot
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }),
                                e(p, null, {
                                  default: t(() => [
                                    e(
                                      s,
                                      { size: '2' },
                                      {
                                        default: t(() => [o('Check Wi-Fi')]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                T(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.checkWifi
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '2' },
                                      {
                                        default: t(() => [
                                          o('Submitted to cloud')
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    e(
                                      s,
                                      { size: '4' },
                                      {
                                        default: t(() => {
                                          var a
                                          return [
                                            o(
                                              c(
                                                T(
                                                  (a = n(r)) == null
                                                    ? void 0
                                                    : a.submitted
                                                )
                                              ),
                                              1
                                            )
                                          ]
                                        }),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }
                          ))
                        : A('', !0)
                    ]),
                    _: 1
                  }),
                  n(I)
                    ? (g(),
                      y(me, {
                        key: 0,
                        type: 'indeterminate',
                        color: 'success'
                      }))
                    : A('', !0)
                ]),
                _: 1
              },
              8,
              ['color']
            )
          )
        }
      )
    }
  }),
  ut = je(it, [['__scopeId', 'data-v-b120885c']]),
  bt = Q({
    __name: 'gatewayWiFiTest',
    setup (Y) {
      const f = j()
      return (
        Ke(() => {
          f.value = st(f.value, qe, !1)
        }),
        (C, D) => {
          const m = Ye,
            l = ie,
            b = X,
            i = Je,
            I = ne,
            w = oe,
            S = K,
            r = q,
            z = lt,
            B = ue,
            F = ut,
            P = le,
            x = Xe
          return (
            g(),
            y(x, null, {
              default: t(() => [
                e(w, null, {
                  default: t(() => [
                    e(I, null, {
                      default: t(() => [
                        e(
                          l,
                          { slot: 'start' },
                          { default: t(() => [e(m)]), _: 1 }
                        ),
                        e(b, null, {
                          default: t(() => [o('Test Lab 🧪')]),
                          _: 1
                        }),
                        e(
                          l,
                          { slot: 'end' },
                          { default: t(() => [e(i)]), _: 1 }
                        )
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e(
                  P,
                  { fullscreen: !0, class: 'ion-padding' },
                  {
                    default: t(() => [
                      e(B, null, {
                        default: t(() => [
                          e(I, null, {
                            default: t(() => [
                              e(
                                r,
                                { fill: 'default', 'router-link': '/test-lab' },
                                {
                                  default: t(() => [
                                    e(
                                      S,
                                      {
                                        size: 'large',
                                        icon:
                                          'ioniconsArrowBack' in C
                                            ? C.ioniconsArrowBack
                                            : n(Ze)
                                      },
                                      null,
                                      8,
                                      ['icon']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              e(
                                l,
                                { slot: 'end' },
                                { default: t(() => [e(z)]), _: 1 }
                              )
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      e(F)
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
export { bt as default }
