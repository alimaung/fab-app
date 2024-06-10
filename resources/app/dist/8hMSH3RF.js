import {
  d as Q,
  dn as uo,
  K as _o,
  r as E,
  t as m,
  v as D,
  z as o,
  A as e,
  N as n,
  bd as ko,
  B as r,
  ax as K,
  R as T,
  Q as L,
  L as O,
  y as S,
  dp as po,
  ab as G,
  a4 as J,
  X,
  Y,
  Z,
  af as $o,
  a1 as Bo,
  a2 as Do,
  aa as To,
  a3 as Oo,
  ac as x,
  ar as fo,
  bv as Vo,
  dl as Po,
  aj as W,
  ap as oo,
  as as eo,
  _ as j,
  aq as mo,
  bD as Ro,
  c as z,
  x as Eo,
  dq as Lo,
  dr as ho,
  ds as Fo,
  ba as No,
  bQ as Mo,
  a9 as Uo,
  W as go,
  aH as vo,
  m as Ao,
  aK as zo,
  aL as Qo,
  aN as F,
  M as qo,
  am as ao,
  dt as lo,
  O as Go,
  ad as Wo,
  du as so,
  V as jo,
  dv as Ho,
  bJ as Ko,
  bK as Jo
} from './0fV2q4Ox.js'
import { _ as Xo } from './logout.js'
import { _ as Yo } from './Bv5F-E67.js'
import { a as Zo } from './M_3S_cE4.js'
import { b as xo, d as oe, s as ee, p as ne } from './C9eiVLGd.js'
import { _ as te } from './CTH0w18x.js'
import { _ as ae } from './CxwSbNEQ.js'
import { v as io, x as le, y as ro, w as se } from './D0r5xylr.js'
import { i as q, a as H } from './BThVWU2R.js'
import { s as ie } from './BbFGwhBy.js'
import './BYx_WZxC.js'
const re = Q({
    __name: 'settingsButton',
    setup (I) {
      const t = uo(),
        { baudRate: _, dataBits: g, stopBits: p, parity: b } = po,
        { getBySerial: f } = Zo()
      _o(
        () => t.value.comPortSerial,
        u => {
          t.value.comPort = f(u)
        },
        { immediate: !0 }
      )
      const i = E(!1),
        d = u => (i.value = u)
      return (u, c) => {
        const k = G,
          V = J,
          y = X,
          $ = Y,
          l = Z,
          s = Yo,
          v = $o,
          C = Bo,
          w = Do,
          B = To,
          P = Oo,
          h = x,
          U = fo
        return (
          m(),
          D(
            T,
            null,
            [
              o(
                V,
                { color: 'light', onClick: c[0] || (c[0] = a => d(!0)) },
                {
                  default: e(() => [
                    o(
                      k,
                      {
                        color: 'medium',
                        icon:
                          'ioniconsSettingsSharp' in u
                            ? u.ioniconsSettingsSharp
                            : n(ko)
                      },
                      null,
                      8,
                      ['icon']
                    )
                  ]),
                  _: 1
                }
              ),
              o(
                U,
                { 'is-open': n(i), onWillDismiss: c[9] || (c[9] = a => d(!1)) },
                {
                  default: e(() => [
                    o(l, null, {
                      default: e(() => [
                        o($, null, {
                          default: e(() => [
                            o(y, null, {
                              default: e(() => [r('Settings')]),
                              _: 1
                            }),
                            o(
                              V,
                              {
                                onClick: c[1] || (c[1] = a => d(!1)),
                                slot: 'end',
                                fill: 'default'
                              },
                              {
                                default: e(() => [
                                  o(
                                    k,
                                    {
                                      icon:
                                        'ioniconsClose' in u
                                          ? u.ioniconsClose
                                          : n(K),
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
                    o(
                      h,
                      { class: 'ion-padding' },
                      {
                        default: e(() => [
                          o(
                            y,
                            { class: 'monitor-setting-title' },
                            { default: e(() => [r('Serial Port')]), _: 1 }
                          ),
                          o(
                            s,
                            {
                              modelValue: n(t).comPortSerial,
                              'onUpdate:modelValue':
                                c[2] || (c[2] = a => (n(t).comPortSerial = a))
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          o(w, null, {
                            default: e(() => [
                              o(
                                C,
                                {
                                  label: 'Baud Rate',
                                  modelValue: n(t).baudRate,
                                  'onUpdate:modelValue':
                                    c[3] || (c[3] = a => (n(t).baudRate = a))
                                },
                                {
                                  default: e(() => [
                                    (m(!0),
                                    D(
                                      T,
                                      null,
                                      L(
                                        'baudRateOpts' in u
                                          ? u.baudRateOpts
                                          : n(xo),
                                        a => (
                                          m(),
                                          O(
                                            v,
                                            { value: a },
                                            {
                                              default: e(() => [
                                                r(
                                                  S(
                                                    a === n(_)
                                                      ? `${a} (default)`
                                                      : a
                                                  ),
                                                  1
                                                )
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['value']
                                          )
                                        )
                                      ),
                                      256
                                    ))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          o(w, null, {
                            default: e(() => [
                              o(
                                C,
                                {
                                  label: 'Data Bits',
                                  modelValue: n(t).dataBits,
                                  'onUpdate:modelValue':
                                    c[4] || (c[4] = a => (n(t).dataBits = a))
                                },
                                {
                                  default: e(() => [
                                    (m(!0),
                                    D(
                                      T,
                                      null,
                                      L(
                                        'dataBitsOpts' in u
                                          ? u.dataBitsOpts
                                          : n(oe),
                                        a => (
                                          m(),
                                          O(
                                            v,
                                            { value: a },
                                            {
                                              default: e(() => [
                                                r(
                                                  S(
                                                    a === n(g)
                                                      ? `${a} (default)`
                                                      : a
                                                  ),
                                                  1
                                                )
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['value']
                                          )
                                        )
                                      ),
                                      256
                                    ))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          o(w, null, {
                            default: e(() => [
                              o(
                                C,
                                {
                                  label: 'Stop Bits',
                                  modelValue: n(t).stopBits,
                                  'onUpdate:modelValue':
                                    c[5] || (c[5] = a => (n(t).stopBits = a))
                                },
                                {
                                  default: e(() => [
                                    (m(!0),
                                    D(
                                      T,
                                      null,
                                      L(
                                        'stopBitsOpts' in u
                                          ? u.stopBitsOpts
                                          : n(ee),
                                        a => (
                                          m(),
                                          O(
                                            v,
                                            { value: a },
                                            {
                                              default: e(() => [
                                                r(
                                                  S(
                                                    a === n(p)
                                                      ? `${a} (default)`
                                                      : a
                                                  ),
                                                  1
                                                )
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['value']
                                          )
                                        )
                                      ),
                                      256
                                    ))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          o(w, null, {
                            default: e(() => [
                              o(
                                C,
                                {
                                  label: 'Parity',
                                  modelValue: n(t).parity,
                                  'onUpdate:modelValue':
                                    c[6] || (c[6] = a => (n(t).parity = a))
                                },
                                {
                                  default: e(() => [
                                    (m(!0),
                                    D(
                                      T,
                                      null,
                                      L(
                                        'parityOpts' in u
                                          ? u.parityOpts
                                          : n(ne),
                                        a => (
                                          m(),
                                          O(
                                            v,
                                            { value: a },
                                            {
                                              default: e(() => [
                                                r(
                                                  S(
                                                    a === n(b)
                                                      ? `${a} (default)`
                                                      : a
                                                  ),
                                                  1
                                                )
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['value']
                                          )
                                        )
                                      ),
                                      256
                                    ))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          o(
                            y,
                            { class: 'monitor-setting-title' },
                            { default: e(() => [r('PLC Client')]), _: 1 }
                          ),
                          o(w, null, {
                            default: e(() => [
                              o(
                                B,
                                {
                                  onIonChange:
                                    c[7] ||
                                    (c[7] = a =>
                                      (n(t).debug = a.detail.checked)),
                                  checked: n(t).debug
                                },
                                {
                                  default: e(() => [
                                    r(
                                      ' Debug mode (output plc messages to the console) '
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['checked']
                              )
                            ]),
                            _: 1
                          }),
                          o(w, null, {
                            default: e(() => [
                              o(
                                B,
                                {
                                  onIonChange:
                                    c[8] ||
                                    (c[8] = a =>
                                      (n(t).simulator = a.detail.checked)),
                                  checked: n(t).simulator
                                },
                                {
                                  default: e(() => [
                                    r(' Simulator mode (simulate plc devices) ')
                                  ]),
                                  _: 1
                                },
                                8,
                                ['checked']
                              )
                            ]),
                            _: 1
                          }),
                          o(w, null, {
                            default: e(() => [
                              o(
                                P,
                                {
                                  value: n(t).retries,
                                  label: 'Message retry attempts',
                                  type: 'number',
                                  inputmode: 'numeric',
                                  class: 'ion-text-right'
                                },
                                null,
                                8,
                                ['value']
                              )
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
                ['is-open']
              )
            ],
            64
          )
        )
      }
    }
  }),
  ce = Q({
    __name: 'flags',
    props: { flags: { type: Object, required: !0 } },
    setup (I) {
      return (t, _) => {
        const g = G,
          p = W,
          b = oo,
          f = eo
        return (
          m(!0),
          D(
            T,
            null,
            L(
              I.flags,
              (i, d) => (
                m(),
                O(
                  f,
                  { key: `${d}:${i}`, class: 'col-width' },
                  {
                    default: e(() => [
                      o(
                        p,
                        null,
                        {
                          default: e(() => [
                            o(
                              g,
                              {
                                icon: i
                                  ? 'ioniconsCheckmarkCircle' in t
                                    ? t.ioniconsCheckmarkCircle
                                    : n(Vo)
                                  : 'ioniconsRemoveCircle' in t
                                  ? t.ioniconsRemoveCircle
                                  : n(Po),
                                color: i ? 'success' : 'light',
                                class: 'ion-align-self-center',
                                size: 'large'
                              },
                              null,
                              8,
                              ['icon', 'color']
                            )
                          ]),
                          _: 2
                        },
                        1024
                      ),
                      o(
                        p,
                        { class: 'label' },
                        {
                          default: e(() => [
                            o(
                              b,
                              { class: 'rotate', color: 'dark' },
                              {
                                default: e(() => [
                                  r(S(d.toString().substring(2)), 1)
                                ]),
                                _: 2
                              },
                              1024
                            )
                          ]),
                          _: 2
                        },
                        1024
                      )
                    ]),
                    _: 2
                  },
                  1024
                )
              )
            ),
            128
          )
        )
      }
    }
  }),
  ue = j(ce, [['__scopeId', 'data-v-a8345c74']]),
  de = Q({
    __name: 'dataList',
    props: {
      data: { type: Object, required: !0 },
      isTable: { type: Boolean, required: !1, default: !1 }
    },
    setup (I) {
      return (t, _) => {
        const g = oo,
          p = eo,
          b = ae,
          f = W,
          i = mo
        return I.isTable
          ? (m(!0),
            D(
              T,
              { key: 0 },
              L(
                I.data,
                (d, u) => (
                  m(),
                  O(
                    f,
                    null,
                    {
                      default: e(() => [
                        o(
                          p,
                          { size: '5', class: 'table-col bold' },
                          {
                            default: e(() => [
                              o(
                                g,
                                { class: 'label', color: 'dark' },
                                {
                                  default: e(() => [
                                    r(
                                      S(
                                        ('camelToLetterCase' in t
                                          ? t.camelToLetterCase
                                          : n(io))(u)
                                      ),
                                      1
                                    )
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            ]),
                            _: 2
                          },
                          1024
                        ),
                        o(
                          p,
                          { size: '7', class: 'table-col' },
                          {
                            default: e(() => [
                              o(
                                b,
                                null,
                                {
                                  default: e(() => [
                                    o(
                                      g,
                                      { color: 'primary' },
                                      {
                                        default: e(() => [
                                          r(S(d.toFixed(2)), 1)
                                        ]),
                                        _: 2
                                      },
                                      1024
                                    )
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            ]),
                            _: 2
                          },
                          1024
                        )
                      ]),
                      _: 2
                    },
                    1024
                  )
                )
              ),
              256
            ))
          : (m(!0),
            D(
              T,
              { key: 1 },
              L(
                I.data,
                (d, u) => (
                  m(),
                  O(
                    p,
                    {
                      key: `${u}:${d}`,
                      class: 'stacked-col ion-justify-content-end'
                    },
                    {
                      default: e(() => [
                        o(
                          f,
                          null,
                          {
                            default: e(() => [
                              o(
                                g,
                                { class: 'label', color: 'dark' },
                                {
                                  default: e(() => [
                                    r(
                                      S(
                                        ('camelToLetterCase' in t
                                          ? t.camelToLetterCase
                                          : n(io))(u)
                                      ),
                                      1
                                    )
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            ]),
                            _: 2
                          },
                          1024
                        ),
                        o(
                          f,
                          { class: 'value' },
                          {
                            default: e(() => [
                              o(
                                i,
                                {
                                  onClick: c =>
                                    ('copyToClipboard' in t
                                      ? t.copyToClipboard
                                      : n(le))(d.toString()),
                                  color: 'primary'
                                },
                                {
                                  default: e(() => [r(S(d.toFixed(2)), 1)]),
                                  _: 2
                                },
                                1032,
                                ['onClick']
                              )
                            ]),
                            _: 2
                          },
                          1024
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
      }
    }
  }),
  _e = j(de, [['__scopeId', 'data-v-12dfdc81']]),
  pe = { class: 'buttons' },
  fe = Q({
    __name: 'card',
    props: { index: {}, instance: {} },
    setup (I) {
      const { $api: t } = Ao(),
        _ = I,
        g = E(Ro.DEFAULT),
        p = E(),
        b = E(!1),
        f = l => (b.value = l),
        i = E({ power: 0 }),
        d = z(() => {
          const { statusBitFlags: l, ...s } = _.instance.data
          return s
        }),
        u = z(() => _.instance.data.statusBitFlags)
      async function c (l) {
        try {
          const { data: s } = await t.deviceList({
            deviceListRequest: {
              identifierType: 'ProductSerial',
              identifierValues: [l]
            }
          })
          if (s.devices.length === 0)
            throw new Error(`No device with product serial ${l} found`)
          return s.devices[0]
        } catch (s) {
          await q(s)
        }
      }
      _o(
        () => _.instance.plcDevice,
        ({ productSerial: l }) => c(l).then(s => (p.value = s)),
        { immediate: !0 }
      )
      const k = z(() => {
        var v
        const l = (v = p.value) == null ? void 0 : v.product.name,
          s = l ? `${l} ⚡` : 'Device not found❓'
        return `${_.index + 1}. ${s}`
      })
      async function V () {
        await H('Coming soon', 'Work in progress 🏗️')
      }
      async function y () {
        await H('Coming soon', 'Work in progress 🏗️')
      }
      async function $ () {
        await H('Coming soon', 'Work in progress 🏗️')
      }
      return (l, s) => {
        const v = X,
          C = oo,
          w = G,
          B = J,
          P = te,
          h = eo,
          U = ue,
          a = W,
          A = _e,
          no = Mo,
          Co = Uo,
          to = Y,
          yo = Z,
          wo = x,
          Io = go,
          bo = vo,
          So = fo
        return (
          m(),
          D(
            T,
            null,
            [
              o(
                Co,
                { color: n(g) },
                {
                  default: e(() => [
                    o(no, null, {
                      default: e(() => [
                        o(a, null, {
                          default: e(() => [
                            o(
                              h,
                              { class: 'first' },
                              {
                                default: e(() => [
                                  o(
                                    v,
                                    { class: 'title' },
                                    { default: e(() => [r(S(n(k)), 1)]), _: 1 }
                                  ),
                                  o(
                                    v,
                                    { class: 'subtitle' },
                                    {
                                      default: e(() => [
                                        o(C, null, {
                                          default: e(() => [r(' Serial: ')]),
                                          _: 1
                                        }),
                                        o(
                                          C,
                                          {
                                            title: 'Product Serial',
                                            color: 'primary'
                                          },
                                          {
                                            default: e(() => [
                                              o(
                                                C,
                                                {
                                                  class: 'link',
                                                  'router-link': `/lookup?productSerial=${l.instance.plcDevice.productSerial}`
                                                },
                                                {
                                                  default: e(() => [
                                                    r(
                                                      S(
                                                        l.instance.plcDevice
                                                          .productSerial
                                                      ),
                                                      1
                                                    )
                                                  ]),
                                                  _: 1
                                                },
                                                8,
                                                ['router-link']
                                              )
                                            ]),
                                            _: 1
                                          }
                                        ),
                                        o(C, null, {
                                          default: e(() => [r(' / ')]),
                                          _: 1
                                        }),
                                        o(
                                          C,
                                          { title: 'Serial Number' },
                                          {
                                            default: e(() => [
                                              r(
                                                S(
                                                  l.instance.plcDevice
                                                    .serialNumber
                                                ),
                                                1
                                              )
                                            ]),
                                            _: 1
                                          }
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  o(
                                    v,
                                    { class: 'subtitle' },
                                    {
                                      default: e(() => [
                                        o(C, null, {
                                          default: e(() => [r(' Firmware: ')]),
                                          _: 1
                                        }),
                                        o(
                                          C,
                                          { title: 'Bootloader' },
                                          {
                                            default: e(() => [
                                              r(
                                                S(
                                                  l.instance.info
                                                    .bootloaderVersion
                                                ),
                                                1
                                              )
                                            ]),
                                            _: 1
                                          }
                                        ),
                                        o(C, null, {
                                          default: e(() => [r(' / ')]),
                                          _: 1
                                        }),
                                        o(
                                          C,
                                          { title: 'Application' },
                                          {
                                            default: e(() => [
                                              r(
                                                S(l.instance.info.appVersion),
                                                1
                                              )
                                            ]),
                                            _: 1
                                          }
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  Eo('div', pe, [
                                    o(
                                      B,
                                      {
                                        title: 'Info',
                                        color: 'primary',
                                        fill: 'clear',
                                        onClick: s[0] || (s[0] = R => f(!0))
                                      },
                                      {
                                        default: e(() => [
                                          o(
                                            w,
                                            {
                                              color: 'primary',
                                              slot: 'icon-only',
                                              icon:
                                                'ioniconsInformation' in l
                                                  ? l.ioniconsInformation
                                                  : n(Lo)
                                            },
                                            null,
                                            8,
                                            ['icon']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    o(
                                      B,
                                      {
                                        title: 'Graph',
                                        color: 'warning',
                                        fill: 'clear',
                                        onClick: s[1] || (s[1] = R => V())
                                      },
                                      {
                                        default: e(() => [
                                          o(
                                            w,
                                            {
                                              color: 'warning',
                                              slot: 'icon-only',
                                              icon:
                                                'ioniconsBarChart' in l
                                                  ? l.ioniconsBarChart
                                                  : n(ho)
                                            },
                                            null,
                                            8,
                                            ['icon']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    o(
                                      B,
                                      {
                                        title: 'Config',
                                        color: 'medium',
                                        fill: 'clear',
                                        onClick: s[2] || (s[2] = R => y())
                                      },
                                      {
                                        default: e(() => [
                                          o(
                                            w,
                                            {
                                              color: 'medium',
                                              slot: 'icon-only',
                                              icon:
                                                'ioniconsSettings' in l
                                                  ? l.ioniconsSettings
                                                  : n(Fo)
                                            },
                                            null,
                                            8,
                                            ['icon']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    o(
                                      B,
                                      {
                                        title: 'Reboot',
                                        color: 'danger',
                                        fill: 'clear',
                                        onClick: s[3] || (s[3] = R => $())
                                      },
                                      {
                                        default: e(() => [
                                          o(
                                            w,
                                            {
                                              color: 'danger',
                                              slot: 'icon-only',
                                              icon:
                                                'ioniconsRefresh' in l
                                                  ? l.ioniconsRefresh
                                                  : n(No)
                                            },
                                            null,
                                            8,
                                            ['icon']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    o(
                                      P,
                                      {
                                        modelValue: n(i).power,
                                        'onUpdate:modelValue':
                                          s[4] ||
                                          (s[4] = R => (n(i).power = R)),
                                        pin: !1,
                                        showValue: !0,
                                        label: '',
                                        width: 200
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ])
                                ]),
                                _: 1
                              }
                            ),
                            o(h, null, {
                              default: e(() => [
                                o(
                                  a,
                                  { class: 'flags-padding' },
                                  {
                                    default: e(() => [
                                      o(U, { flags: n(u) }, null, 8, ['flags'])
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
                        o(
                          a,
                          { class: 'data-padding' },
                          {
                            default: e(() => [
                              o(A, { data: n(d) }, null, 8, ['data'])
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                },
                8,
                ['color']
              ),
              o(
                So,
                { 'is-open': n(b), onWillDismiss: s[7] || (s[7] = R => f(!1)) },
                {
                  default: e(() => [
                    o(yo, null, {
                      default: e(() => [
                        o(to, null, {
                          default: e(() => [
                            o(v, null, {
                              default: e(() => [r('Inverter Details')]),
                              _: 1
                            }),
                            o(
                              B,
                              {
                                onClick: s[5] || (s[5] = R => f(!1)),
                                slot: 'end',
                                fill: 'default'
                              },
                              {
                                default: e(() => [
                                  o(
                                    w,
                                    {
                                      icon:
                                        'ioniconsClose' in l
                                          ? l.ioniconsClose
                                          : n(K),
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
                    o(wo, null, {
                      default: e(() => [
                        o(
                          no,
                          { class: 'ion-padding flex-details' },
                          {
                            default: e(() => [
                              o(A, { data: n(d), isTable: !0 }, null, 8, [
                                'data'
                              ])
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }),
                    o(bo, null, {
                      default: e(() => [
                        o(to, null, {
                          default: e(() => [
                            o(
                              Io,
                              { slot: 'end' },
                              {
                                default: e(() => [
                                  o(
                                    B,
                                    {
                                      color: 'primary',
                                      strong: !0,
                                      onClick: s[6] || (s[6] = R => f(!1))
                                    },
                                    { default: e(() => [r(' Close ')]), _: 1 }
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
  me = j(fe, [['__scopeId', 'data-v-400190d2']]),
  { newMsgId: N, request: M } = zo(Qo.IPC_FLASH)
function ge (I) {
  const { comPort: t, pollIntervalMs: _ } = { ...po, ...I },
    g = E([]),
    p = E(!1),
    b = E(!1)
  let f = null
  try {
    ro(t), console.log(`Initializing device manager using ${t}`)
  } catch {
    console.log('Initializing device manager using empty COM port')
  }
  async function i () {
    ro(t),
      console.log('Opening port', t),
      await M({ type: F.PLC_OPEN_REQUEST, id: N(), options: I }),
      (p.value = !0)
  }
  async function d () {
    p.value || (await i()),
      f === null
        ? ((g.value = []),
          await k(),
          console.log('Start listening'),
          (b.value = !0),
          (f = ie(() => {
            V()
          }, _)))
        : console.log('Already listening')
  }
  async function u () {
    f === null
      ? console.log('Not listening')
      : (console.log('Stop listening'),
        clearInterval(f),
        (f = null),
        (b.value = !1))
  }
  async function c () {
    try {
      await u(),
        await se(100),
        await M({ type: F.PLC_CLOSE_REQUEST, id: N(), comPort: t })
    } catch (y) {
      throw (console.log('Failed to destroy'), y)
    } finally {
      ;(p.value = !1), (g.value = [])
    }
  }
  async function k () {
    if ((p.value || (await i()), console.log('Scanning devices'), t === void 0))
      throw new Error('COM port not set')
    const { plcDevices: y } = await M({
      type: F.PLC_SCAN_DEVICES_REQUEST,
      id: N(),
      comPort: t
    })
    for (const $ of y) {
      const l = co($),
        { info: s } = await M({
          type: F.PLC_GET_DEVICE_INFO_REQUEST,
          id: N(),
          comPort: t,
          device: l
        }),
        { data: v } = await M({
          type: F.PLC_GET_DATA_REQUEST,
          id: N(),
          comPort: t,
          device: l
        })
      g.value.push({ plcDevice: $, info: s, data: v })
    }
  }
  async function V () {
    p.value || (await i())
    for (const y of g.value) {
      const { plcDevice: $ } = y
      console.time('Get inverter data')
      const { data: l } = await M({
        type: F.PLC_GET_DATA_REQUEST,
        id: N(),
        comPort: t,
        device: co($)
      })
      console.timeEnd('Get inverter data'), (y.data = l)
    }
  }
  return {
    open: i,
    isOpen: p,
    isRunning: b,
    start: d,
    stop: u,
    destroy: c,
    deviceInstances: g,
    scanDevices: k,
    getInverterData: V
  }
}
function co (I) {
  const { productCode: t, serialNumber: _ } = I
  return { productCode: t, serialNumber: _ }
}
const ve = Q({
    __name: 'plc',
    setup (I) {
      const t = uo(),
        _ = z(() => ge(Wo(t.value))),
        g = z(() => {
          var i
          return t.value.simulator
            ? [so(), so()]
            : ((i = _.value) == null ? void 0 : i.deviceInstances.value) ?? []
        })
      async function p () {
        try {
          await _.value.start()
        } catch (i) {
          await q(i)
        }
      }
      async function b () {
        try {
          await _.value.stop()
        } catch (i) {
          await q(i)
        }
      }
      async function f () {
        try {
          await _.value.destroy()
        } catch (i) {
          await q(i)
        }
      }
      return (i, d) => {
        const u = jo,
          c = G,
          k = go,
          V = X,
          y = Xo,
          $ = Y,
          l = Z,
          s = J,
          v = re,
          C = W,
          w = me,
          B = x,
          P = mo,
          h = vo,
          U = qo
        return (
          m(),
          O(U, null, {
            default: e(() => [
              o(l, null, {
                default: e(() => [
                  o($, null, {
                    default: e(() => [
                      o(
                        k,
                        { slot: 'start' },
                        {
                          default: e(() => [
                            o(u),
                            o(
                              c,
                              {
                                icon:
                                  'ioniconsPower' in i
                                    ? i.ioniconsPower
                                    : n(Ho),
                                size: 'large',
                                color: 'warning'
                              },
                              null,
                              8,
                              ['icon']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      o(V, null, {
                        default: e(() => [r('Power-line Communication')]),
                        _: 1
                      }),
                      o(k, { slot: 'end' }, { default: e(() => [o(y)]), _: 1 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              o(
                B,
                { fullscreen: !0, class: 'ion-padding' },
                {
                  default: e(() => [
                    o(C, null, {
                      default: e(() => [
                        o($, null, {
                          default: e(() => [
                            o(
                              k,
                              { slot: 'start' },
                              {
                                default: e(() => [
                                  ao(
                                    o(
                                      s,
                                      {
                                        color: 'primary',
                                        onClick: d[0] || (d[0] = a => p())
                                      },
                                      {
                                        default: e(() => [
                                          o(
                                            c,
                                            {
                                              slot: 'start',
                                              color: 'secondary',
                                              icon:
                                                'ioniconsCaretForward' in i
                                                  ? i.ioniconsCaretForward
                                                  : n(Ko)
                                            },
                                            null,
                                            8,
                                            ['icon']
                                          ),
                                          r(' Start ')
                                        ]),
                                        _: 1
                                      },
                                      512
                                    ),
                                    [[lo, !n(_).isRunning.value]]
                                  ),
                                  ao(
                                    o(
                                      s,
                                      {
                                        color: 'danger',
                                        onClick: d[1] || (d[1] = a => b())
                                      },
                                      {
                                        default: e(() => [
                                          o(
                                            c,
                                            {
                                              slot: 'start',
                                              icon:
                                                'ioniconsStop' in i
                                                  ? i.ioniconsStop
                                                  : n(Jo)
                                            },
                                            null,
                                            8,
                                            ['icon']
                                          ),
                                          r(' Stop ')
                                        ]),
                                        _: 1
                                      },
                                      512
                                    ),
                                    [[lo, n(_).isRunning.value]]
                                  )
                                ]),
                                _: 1
                              }
                            ),
                            o(
                              k,
                              { slot: 'end' },
                              {
                                default: e(() => [
                                  n(_).isOpen.value
                                    ? (m(),
                                      O(
                                        s,
                                        {
                                          key: 0,
                                          color: 'danger',
                                          onClick: d[2] || (d[2] = a => f())
                                        },
                                        {
                                          default: e(() => [
                                            o(
                                              c,
                                              {
                                                slot: 'start',
                                                icon:
                                                  'ioniconsClose' in i
                                                    ? i.ioniconsClose
                                                    : n(K)
                                              },
                                              null,
                                              8,
                                              ['icon']
                                            ),
                                            r(' Close Port ')
                                          ]),
                                          _: 1
                                        }
                                      ))
                                    : Go('', !0),
                                  o(v)
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
                    (m(!0),
                    D(
                      T,
                      null,
                      L(
                        n(g),
                        (a, A) => (
                          m(),
                          O(
                            w,
                            { key: `plc-card-${A + 1}`, index: A, instance: a },
                            null,
                            8,
                            ['index', 'instance']
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                }
              ),
              o(h, null, {
                default: e(() => [
                  o($, null, {
                    default: e(() => [
                      o(
                        k,
                        { slot: 'start' },
                        {
                          default: e(() => [
                            o(
                              P,
                              { color: 'secondary', fill: 'clear' },
                              { default: e(() => [r(' Sent: 0 ')]), _: 1 }
                            ),
                            o(
                              P,
                              { color: 'tertiary', fill: 'clear' },
                              { default: e(() => [r(' Received: 0 ')]), _: 1 }
                            ),
                            o(
                              P,
                              { color: 'success', fill: 'clear' },
                              { default: e(() => [r(' Succeeded: 0 ')]), _: 1 }
                            ),
                            o(
                              P,
                              { color: 'warning', fill: 'clear' },
                              {
                                default: e(() => [
                                  r(' Incomplete Messages: 0 ')
                                ]),
                                _: 1
                              }
                            ),
                            o(
                              P,
                              { color: 'danger', fill: 'clear' },
                              {
                                default: e(() => [r(' Failed CRCs: 0 ')]),
                                _: 1
                              }
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
          })
        )
      }
    }
  }),
  Oe = j(ve, [['__scopeId', 'data-v-2b51677a']])
export { Oe as default }
