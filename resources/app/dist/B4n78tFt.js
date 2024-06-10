import {
  d as $e,
  r as C,
  t as r,
  L as h,
  A as l,
  z as e,
  B as n,
  N as i,
  P as q,
  v as f,
  ai as z,
  O as J,
  ay as we,
  R as D,
  Q as P,
  y as d,
  az as Le,
  d0 as Ne,
  eK as Ve,
  c_ as Te,
  eL as ze,
  eM as Ae,
  eN as Ee,
  x as t,
  bH as ue,
  bI as M,
  eO as Ue,
  ao as Be,
  a0 as Ge,
  a5 as Qe,
  a6 as qe,
  af as Fe,
  a1 as He,
  a3 as Ke,
  eP as Oe,
  eQ as We,
  ar as Me,
  $ as je,
  ab as Xe,
  ap as Je,
  a4 as Ye,
  a2 as Ze,
  X as Re,
  aW as xe,
  dh as el,
  di as ll,
  au as tl,
  a8 as al,
  a9 as nl,
  C as ol,
  D as sl,
  m as il,
  _ as dl
} from './0fV2q4Ox.js'
import { _ as ul } from './CxwSbNEQ.js'
import { _ as rl, a as cl } from './CEjZCPuH.js'
import { u as re } from './rGigr8ii.js'
import { a as A } from './D0r5xylr.js'
import { a as Y } from './BJaqhUnt.js'
const c = F => (ol('data-v-0f77b1ce'), (F = F()), sl(), F),
  pl = {
    key: 0,
    style: { display: 'flex', 'flex-direction': 'row', width: '100%' }
  },
  _l = { key: 1 },
  ml = { class: 'ion-padding', slot: 'content' },
  fl = c(() => t('span', { class: 'plant-label' }, 'Product-Serial:', -1)),
  bl = c(() => t('span', { class: 'plant-label' }, 'Product:', -1)),
  hl = c(() => t('span', { class: 'plant-label' }, 'Serial:', -1)),
  Sl = c(() => t('span', { class: 'plant-label' }, 'Created:', -1)),
  yl = c(() => t('span', { class: 'plant-label' }, 'Latest Contact:', -1)),
  gl = c(() => t('span', { class: 'plant-label' }, 'Daily Stats:', -1)),
  vl = { class: 'ion-padding', slot: 'content' },
  Il = { class: 'plant-stat-table' },
  Cl = c(() =>
    t('tr', null, [t('th', null, 'Date'), t('th', null, 'Updates')], -1)
  ),
  Dl = c(() => t('span', { class: 'plant-label' }, 'Inverters:', -1)),
  Pl = { class: 'ion-padding', slot: 'content' },
  kl = c(() => t('span', { class: 'plant-label' }, 'Product-Serial:', -1)),
  $l = c(() => t('span', { class: 'plant-label' }, 'Product:', -1)),
  wl = c(() => t('span', { class: 'plant-label' }, 'Serial:', -1)),
  Ll = c(() => t('span', { class: 'plant-label' }, 'Created:', -1)),
  Nl = c(() => t('span', { class: 'plant-label' }, 'Latest Contact:', -1)),
  Vl = c(() => t('span', { class: 'plant-label' }, 'Daily Stats:', -1)),
  Tl = { class: 'ion-padding', slot: 'content' },
  zl = { class: 'plant-stat-table' },
  Al = c(() =>
    t('tr', null, [t('th', null, 'Date'), t('th', null, 'Updates')], -1)
  ),
  El = { class: 'ion-padding', slot: 'content' },
  Ul = c(() => t('span', { class: 'plant-label' }, 'Product-Serial:', -1)),
  Bl = c(() => t('span', { class: 'plant-label' }, 'Product:', -1)),
  Gl = c(() => t('span', { class: 'plant-label' }, 'Serial:', -1)),
  Ql = c(() =>
    t('span', { class: 'plant-label' }, 'Parent Product-Serial:', -1)
  ),
  ql = c(() => t('span', { class: 'plant-label' }, 'Created:', -1)),
  Fl = c(() => t('span', { class: 'plant-label' }, 'Latest Contact:', -1)),
  Hl = c(() => t('span', { class: 'plant-label' }, 'Daily Stats:', -1)),
  Kl = { class: 'ion-padding', slot: 'content' },
  Ol = { class: 'plant-stat-table' },
  Wl = c(() =>
    t('tr', null, [t('th', null, 'Date'), t('th', null, 'Updates')], -1)
  ),
  Ml = { class: 'ion-padding', slot: 'content' },
  jl = { class: 'plant-stat-table' },
  Xl = c(() =>
    t(
      'tr',
      null,
      [t('th', null, 'ID'), t('th', null, 'Name'), t('th', null, 'Email')],
      -1
    )
  ),
  Jl = { key: 1, class: 'ion-padding' },
  Yl = c(() => t('p', { class: 'ion-text-center' }, 'No plants found', -1)),
  Zl = $e({
    __name: 'queryPlants',
    setup (F) {
      const { $api: ce } = il(),
        k = C('plantIds'),
        v = C(''),
        {
          historyUp: pe,
          historyDown: _e,
          historyAdd: me
        } = re(v, 'queryPlantsInput'),
        L = C(''),
        {
          historyUp: fe,
          historyDown: be,
          historyAdd: he
        } = re(L, 'queryPlantsInput2'),
        b = C(),
        H = new Date().toISOString().slice(0, -5),
        E = C(H),
        U = C(H),
        B = C(null),
        K = C(!1),
        Se = {
          plantIds: 'Enter one or more plant IDs (separated by a space)',
          productSerials:
            'Enter one or more product serials (separated by a space)',
          serialNumber:
            'Enter one or more device serial numbers (separated by a space)',
          emailAddress: 'Enter an email address',
          tagId: 'Enter a tag ID'
        }
      async function j () {
        const a = v.value.split(' ').filter(o => o !== '')
        switch ((me(v.value), he(L.value), k.value)) {
          case 'plantIds':
            N({ plantIds: a.map(o => parseInt(o)) })
            break
          case 'productSerials':
            N({
              device: { identifierType: 'ProductSerial', identifierValues: a }
            })
            break
          case 'serialNumber':
            return N({
              device: {
                identifierType: 'SerialNumber',
                identifierValues: a,
                productCode: Number(L.value)
              }
            })
          case 'emailAddress':
            N({ emailAddress: v.value })
            break
          case 'tagId':
            N({ device: { tagId: parseInt(v.value) } })
            break
          case 'creationTimeStamp':
            N({
              creationTimeStamp: {
                periodStart: new Date(E.value).getTime(),
                periodEnd: new Date(U.value).getTime()
              }
            })
            break
        }
      }
      async function N (a) {
        var o, S, O
        K.value = !0
        try {
          const { data: W } = await ce.getPlantList({ getPlantListRequest: a })
          ;(B.value = W.plants),
            (o = b == null ? void 0 : b.value) == null ||
              o.$el.classList.add('ion-valid')
        } catch {
          ;(S = b == null ? void 0 : b.value) == null ||
            S.$el.classList.add('ion-invalid'),
            (B.value = null)
        } finally {
          ;(O = b == null ? void 0 : b.value) == null ||
            O.$el.classList.add('ion-touched'),
            (K.value = !1)
        }
      }
      function ye () {
        ;(v.value = ''),
          (E.value = H),
          (U.value = H),
          Be(() => {
            var a
            return (a = b == null ? void 0 : b.value) == null
              ? void 0
              : a.$el.setFocus()
          })
      }
      function X () {
        b.value.$el.classList.remove('ion-touched', 'ion-valid', 'ion-invalid')
      }
      function ge (a) {
        return a
          .split(', ')
          .map(o => o.trim())
          .filter(o => !!o)
          .join(', ')
      }
      function Z (a, o) {
        return a.filter(S => S.parentProductSerial === o)
      }
      function R (a) {
        const o = a.gateways.map(S => S.productSerial)
        return a.inverters.filter(
          S => !S.parentProductSerial || !o.includes(S.parentProductSerial)
        )
      }
      return (a, o) => {
        const S = Ge,
          O = Qe,
          W = qe,
          V = Fe,
          ve = He,
          x = Ke,
          ee = Oe,
          le = We,
          te = Me,
          Ie = je,
          I = Xe,
          _ = Je,
          Ce = Ye,
          p = Ze,
          De = Re,
          y = ul,
          g = xe,
          T = rl,
          ae = cl,
          $ = el,
          w = ll,
          ne = tl,
          Pe = al,
          ke = nl
        return (
          r(),
          h(ke, null, {
            default: l(() => [
              e(W, null, {
                default: l(() => [
                  e(S, null, { default: l(() => [n('Plants Query')]), _: 1 }),
                  e(O, null, {
                    default: l(() => [
                      n(' Query a list of plants with details ')
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(Pe, null, {
                default: l(() => {
                  var oe
                  return [
                    e(
                      p,
                      { lines: 'none' },
                      {
                        default: l(() => [
                          e(
                            ve,
                            {
                              slot: 'start',
                              label: 'Filter Parameter',
                              'label-placement': 'floating',
                              placeholder: 'Select a filter',
                              modelValue: i(k),
                              'onUpdate:modelValue':
                                o[0] ||
                                (o[0] = s => (q(k) ? (k.value = s) : null)),
                              style: { 'min-width': '19ch', 'flex-grow': '0' },
                              onIonChange: o[1] || (o[1] = s => X())
                            },
                            {
                              default: l(() => [
                                e(
                                  V,
                                  { value: 'plantIds' },
                                  { default: l(() => [n(' Plant IDs ')]), _: 1 }
                                ),
                                e(
                                  V,
                                  { value: 'productSerials' },
                                  {
                                    default: l(() => [n(' Product Serials ')]),
                                    _: 1
                                  }
                                ),
                                e(
                                  V,
                                  { value: 'serialNumber' },
                                  {
                                    default: l(() => [n(' Serial Number ')]),
                                    _: 1
                                  }
                                ),
                                e(
                                  V,
                                  { value: 'emailAddress' },
                                  {
                                    default: l(() => [n(' EMail Address ')]),
                                    _: 1
                                  }
                                ),
                                e(
                                  V,
                                  { value: 'tagId' },
                                  { default: l(() => [n(' Tag ID ')]), _: 1 }
                                ),
                                e(
                                  V,
                                  { value: 'creationTimeStamp' },
                                  {
                                    default: l(() => [
                                      n(' Creation Timestamp ')
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
                          i(k) !== 'creationTimeStamp'
                            ? (r(),
                              f('div', pl, [
                                e(
                                  x,
                                  {
                                    ref_key: 'inputRef',
                                    ref: b,
                                    type: 'text',
                                    'error-text': 'No plants found',
                                    placeholder: Se[i(k)] ?? '',
                                    modelValue: i(v),
                                    'onUpdate:modelValue':
                                      o[2] ||
                                      (o[2] = s =>
                                        q(v) ? (v.value = s) : null),
                                    autofocus: '',
                                    onIonInput: o[3] || (o[3] = s => X()),
                                    onKeyup: [
                                      o[4] || (o[4] = z(s => j(), ['enter'])),
                                      o[5] || (o[5] = z(s => i(pe)(), ['up'])),
                                      o[6] || (o[6] = z(s => i(_e)(), ['down']))
                                    ]
                                  },
                                  null,
                                  8,
                                  ['placeholder', 'modelValue']
                                ),
                                i(k) === 'serialNumber'
                                  ? (r(),
                                    h(
                                      x,
                                      {
                                        key: 0,
                                        type: 'text',
                                        class: 'ion-margin-start',
                                        'error-text': ' ',
                                        placeholder: 'Product Code',
                                        modelValue: i(L),
                                        'onUpdate:modelValue':
                                          o[7] ||
                                          (o[7] = s =>
                                            q(L) ? (L.value = s) : null),
                                        onIonInput: o[8] || (o[8] = s => X()),
                                        onKeyup: [
                                          o[9] ||
                                            (o[9] = z(s => j(), ['enter'])),
                                          o[10] ||
                                            (o[10] = z(s => i(fe)(), ['up'])),
                                          o[11] ||
                                            (o[11] = z(s => i(be)(), ['down']))
                                        ]
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    ))
                                  : J('', !0)
                              ]))
                            : (r(),
                              f('div', _l, [
                                n(' From '),
                                e(ee, {
                                  datetime: 'periodStart',
                                  class: 'plant-datetime'
                                }),
                                n(' to '),
                                e(ee, {
                                  datetime: 'periodEnd',
                                  class: 'plant-datetime'
                                }),
                                e(
                                  te,
                                  { 'keep-contents-mounted': !0 },
                                  {
                                    default: l(() => [
                                      e(
                                        le,
                                        {
                                          modelValue: i(E),
                                          'onUpdate:modelValue':
                                            o[12] ||
                                            (o[12] = s =>
                                              q(E) ? (E.value = s) : null),
                                          locale: 'en-DE',
                                          id: 'periodStart'
                                        },
                                        null,
                                        8,
                                        ['modelValue']
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                e(
                                  te,
                                  { 'keep-contents-mounted': !0 },
                                  {
                                    default: l(() => [
                                      e(
                                        le,
                                        {
                                          modelValue: i(U),
                                          'onUpdate:modelValue':
                                            o[13] ||
                                            (o[13] = s =>
                                              q(U) ? (U.value = s) : null),
                                          locale: 'en-DE',
                                          id: 'periodEnd'
                                        },
                                        null,
                                        8,
                                        ['modelValue']
                                      )
                                    ]),
                                    _: 1
                                  }
                                )
                              ])),
                          i(K)
                            ? (r(),
                              h(Ie, {
                                key: 2,
                                slot: 'end',
                                size: 'small',
                                color: 'primary',
                                name: 'crescent'
                              }))
                            : J('', !0),
                          e(
                            I,
                            {
                              slot: 'end',
                              label: 'Clear input',
                              icon:
                                'ioniconsBackspace' in a
                                  ? a.ioniconsBackspace
                                  : i(we),
                              onClick: o[14] || (o[14] = s => ye())
                            },
                            null,
                            8,
                            ['icon']
                          ),
                          e(
                            Ce,
                            {
                              class: 'ion-margin-start',
                              slot: 'end',
                              color: 'primary',
                              onClick: o[15] || (o[15] = s => j()),
                              disabled: i(K)
                            },
                            {
                              default: l(() => [
                                e(_, null, {
                                  default: l(() => [n('Query')]),
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
                    ((oe = i(B)) == null ? void 0 : oe.length) > 0
                      ? (r(),
                        h(
                          ne,
                          { key: 0 },
                          {
                            default: l(() => [
                              (r(!0),
                              f(
                                D,
                                null,
                                P(
                                  i(B),
                                  s => (
                                    r(),
                                    h(
                                      p,
                                      { key: s.id },
                                      {
                                        default: l(() => [
                                          e(
                                            ne,
                                            { style: { width: '100%' } },
                                            {
                                              default: l(() => [
                                                e(
                                                  De,
                                                  { class: 'plant-title' },
                                                  {
                                                    default: l(() => [
                                                      n(d(s.name), 1)
                                                    ]),
                                                    _: 2
                                                  },
                                                  1024
                                                ),
                                                e(
                                                  p,
                                                  {
                                                    lines: 'none',
                                                    class: 'plant-item'
                                                  },
                                                  {
                                                    default: l(() => [
                                                      e(
                                                        I,
                                                        {
                                                          slot: 'start',
                                                          color: 'medium',
                                                          icon:
                                                            'ioniconsPricetag' in
                                                            a
                                                              ? a.ioniconsPricetag
                                                              : i(Le)
                                                        },
                                                        null,
                                                        8,
                                                        ['icon']
                                                      ),
                                                      e(
                                                        _,
                                                        {
                                                          class: 'plant-label'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            n('ID:')
                                                          ]),
                                                          _: 1
                                                        }
                                                      ),
                                                      e(
                                                        _,
                                                        null,
                                                        {
                                                          default: l(() => [
                                                            e(
                                                              y,
                                                              null,
                                                              {
                                                                default: l(
                                                                  () => [
                                                                    n(
                                                                      d(s.id),
                                                                      1
                                                                    )
                                                                  ]
                                                                ),
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
                                                ),
                                                e(
                                                  p,
                                                  {
                                                    lines: 'none',
                                                    class: 'plant-item'
                                                  },
                                                  {
                                                    default: l(() => [
                                                      e(
                                                        I,
                                                        {
                                                          slot: 'start',
                                                          color: 'medium',
                                                          icon:
                                                            'ioniconsFlash' in a
                                                              ? a.ioniconsFlash
                                                              : i(Ne)
                                                        },
                                                        null,
                                                        8,
                                                        ['icon']
                                                      ),
                                                      e(
                                                        _,
                                                        {
                                                          class: 'plant-label'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            n(
                                                              'Installed Capacity:'
                                                            )
                                                          ]),
                                                          _: 1
                                                        }
                                                      ),
                                                      e(
                                                        _,
                                                        null,
                                                        {
                                                          default: l(() => [
                                                            n(
                                                              d(
                                                                s.installedCapacity
                                                              ) + ' kW',
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
                                                e(
                                                  p,
                                                  {
                                                    lines: 'none',
                                                    class: 'plant-item'
                                                  },
                                                  {
                                                    default: l(() => [
                                                      e(
                                                        I,
                                                        {
                                                          slot: 'start',
                                                          color: 'medium',
                                                          icon:
                                                            'ioniconsConstruct' in
                                                            a
                                                              ? a.ioniconsConstruct
                                                              : i(Ve)
                                                        },
                                                        null,
                                                        8,
                                                        ['icon']
                                                      ),
                                                      e(
                                                        _,
                                                        {
                                                          class: 'plant-label'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            n('Creation Date:')
                                                          ]),
                                                          _: 1
                                                        }
                                                      ),
                                                      e(
                                                        _,
                                                        null,
                                                        {
                                                          default: l(() => {
                                                            var u
                                                            return [
                                                              n(
                                                                d(
                                                                  (u =
                                                                    s.creationDate) ==
                                                                    null
                                                                    ? void 0
                                                                    : u.toLocaleString(
                                                                        'de'
                                                                      )
                                                                ),
                                                                1
                                                              )
                                                            ]
                                                          }),
                                                          _: 2
                                                        },
                                                        1024
                                                      )
                                                    ]),
                                                    _: 2
                                                  },
                                                  1024
                                                ),
                                                e(
                                                  p,
                                                  {
                                                    lines: 'none',
                                                    class: 'plant-item'
                                                  },
                                                  {
                                                    default: l(() => [
                                                      e(
                                                        I,
                                                        {
                                                          slot: 'start',
                                                          color: 'medium',
                                                          icon:
                                                            'ioniconsHome' in a
                                                              ? a.ioniconsHome
                                                              : i(Te)
                                                        },
                                                        null,
                                                        8,
                                                        ['icon']
                                                      ),
                                                      e(
                                                        _,
                                                        {
                                                          class: 'plant-label'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            n(
                                                              'Installation Date:'
                                                            )
                                                          ]),
                                                          _: 1
                                                        }
                                                      ),
                                                      e(
                                                        _,
                                                        null,
                                                        {
                                                          default: l(() => {
                                                            var u
                                                            return [
                                                              n(
                                                                d(
                                                                  (u =
                                                                    s.installationDate) ==
                                                                    null
                                                                    ? void 0
                                                                    : u.toLocaleString(
                                                                        'de'
                                                                      )
                                                                ),
                                                                1
                                                              )
                                                            ]
                                                          }),
                                                          _: 2
                                                        },
                                                        1024
                                                      )
                                                    ]),
                                                    _: 2
                                                  },
                                                  1024
                                                ),
                                                e(
                                                  p,
                                                  {
                                                    lines: 'none',
                                                    class: 'plant-item'
                                                  },
                                                  {
                                                    default: l(() => [
                                                      e(
                                                        I,
                                                        {
                                                          slot: 'start',
                                                          color: 'medium',
                                                          icon:
                                                            'ioniconsLocation' in
                                                            a
                                                              ? a.ioniconsLocation
                                                              : i(ze)
                                                        },
                                                        null,
                                                        8,
                                                        ['icon']
                                                      ),
                                                      e(
                                                        _,
                                                        {
                                                          class: 'plant-label'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            n('Address:')
                                                          ]),
                                                          _: 1
                                                        }
                                                      ),
                                                      e(
                                                        _,
                                                        null,
                                                        {
                                                          default: l(() => [
                                                            e(
                                                              y,
                                                              null,
                                                              {
                                                                default: l(
                                                                  () => [
                                                                    n(
                                                                      d(
                                                                        ge(
                                                                          `${
                                                                            s
                                                                              .address
                                                                              .streetName
                                                                          } ${
                                                                            s
                                                                              .address
                                                                              .houseNumber
                                                                          }, ${
                                                                            s
                                                                              .address
                                                                              .zipCode
                                                                          } ${
                                                                            s
                                                                              .address
                                                                              .city
                                                                          }, ${
                                                                            s
                                                                              .address
                                                                              .additionalInfo
                                                                              ? ` (${s.address.additionalInfo})`
                                                                              : ''
                                                                          }, ${
                                                                            s
                                                                              .address
                                                                              .countryCode
                                                                          }`
                                                                        )
                                                                      ),
                                                                      1
                                                                    )
                                                                  ]
                                                                ),
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
                                                ),
                                                e(
                                                  p,
                                                  {
                                                    lines: 'none',
                                                    class: 'plant-item'
                                                  },
                                                  {
                                                    default: l(() => [
                                                      e(
                                                        I,
                                                        {
                                                          slot: 'start',
                                                          color: 'medium',
                                                          icon:
                                                            'ioniconsGrid' in a
                                                              ? a.ioniconsGrid
                                                              : i(Ae)
                                                        },
                                                        null,
                                                        8,
                                                        ['icon']
                                                      ),
                                                      e(
                                                        _,
                                                        {
                                                          class: 'plant-label'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            n('Grid Code:')
                                                          ]),
                                                          _: 1
                                                        }
                                                      ),
                                                      e(
                                                        _,
                                                        null,
                                                        {
                                                          default: l(() => [
                                                            e(
                                                              y,
                                                              null,
                                                              {
                                                                default: l(
                                                                  () => [
                                                                    n(
                                                                      d(
                                                                        s
                                                                          .gridCode
                                                                          .name
                                                                      ),
                                                                      1
                                                                    )
                                                                  ]
                                                                ),
                                                                _: 2
                                                              },
                                                              1024
                                                            ),
                                                            n(
                                                              ', ' +
                                                                d(
                                                                  s.gridCode
                                                                    .countryCode
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
                                                e(
                                                  p,
                                                  {
                                                    lines: 'none',
                                                    class: 'plant-item'
                                                  },
                                                  {
                                                    default: l(() => [
                                                      e(
                                                        I,
                                                        {
                                                          slot: 'start',
                                                          color: 'medium',
                                                          icon:
                                                            'ioniconsWifi' in a
                                                              ? a.ioniconsWifi
                                                              : i(Ee)
                                                        },
                                                        null,
                                                        8,
                                                        ['icon']
                                                      ),
                                                      e(
                                                        _,
                                                        {
                                                          class: 'plant-label'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            n('Gateways:')
                                                          ]),
                                                          _: 1
                                                        }
                                                      ),
                                                      e(
                                                        w,
                                                        {
                                                          class:
                                                            'plant-accordion'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            e(
                                                              $,
                                                              {
                                                                value: 'first'
                                                              },
                                                              {
                                                                default: l(
                                                                  () => [
                                                                    e(
                                                                      p,
                                                                      {
                                                                        slot: 'header',
                                                                        class:
                                                                          'plant-expand'
                                                                      },
                                                                      {
                                                                        default:
                                                                          l(
                                                                            () => [
                                                                              e(
                                                                                g,
                                                                                null,
                                                                                {
                                                                                  default:
                                                                                    l(
                                                                                      () => [
                                                                                        n(
                                                                                          d(
                                                                                            ('pluralize' in
                                                                                              a
                                                                                              ? a.pluralize
                                                                                              : i(
                                                                                                  A
                                                                                                ))(
                                                                                              s
                                                                                                .gateways
                                                                                                .length,
                                                                                              'Gateway'
                                                                                            )
                                                                                          ),
                                                                                          1
                                                                                        )
                                                                                      ]
                                                                                    ),
                                                                                  _: 2
                                                                                },
                                                                                1024
                                                                              )
                                                                            ]
                                                                          ),
                                                                        _: 2
                                                                      },
                                                                      1024
                                                                    ),
                                                                    t(
                                                                      'div',
                                                                      ml,
                                                                      [
                                                                        (r(!0),
                                                                        f(
                                                                          D,
                                                                          null,
                                                                          P(
                                                                            s.gateways,
                                                                            u => (
                                                                              r(),
                                                                              h(
                                                                                p,
                                                                                {
                                                                                  color:
                                                                                    'light'
                                                                                },
                                                                                {
                                                                                  default:
                                                                                    l(
                                                                                      () => [
                                                                                        e(
                                                                                          g,
                                                                                          null,
                                                                                          {
                                                                                            default:
                                                                                              l(
                                                                                                () => {
                                                                                                  var G,
                                                                                                    Q
                                                                                                  return [
                                                                                                    t(
                                                                                                      'p',
                                                                                                      null,
                                                                                                      [
                                                                                                        fl,
                                                                                                        e(
                                                                                                          ae,
                                                                                                          {
                                                                                                            label:
                                                                                                              u.productSerial
                                                                                                          },
                                                                                                          {
                                                                                                            default:
                                                                                                              l(
                                                                                                                () => [
                                                                                                                  e(
                                                                                                                    T,
                                                                                                                    {
                                                                                                                      label:
                                                                                                                        'Copy',
                                                                                                                      icon:
                                                                                                                        'ioniconsCopy' in
                                                                                                                        a
                                                                                                                          ? a.ioniconsCopy
                                                                                                                          : i(
                                                                                                                              ue
                                                                                                                            ),
                                                                                                                      action:
                                                                                                                        'copy'
                                                                                                                    },
                                                                                                                    null,
                                                                                                                    8,
                                                                                                                    [
                                                                                                                      'icon'
                                                                                                                    ]
                                                                                                                  ),
                                                                                                                  e(
                                                                                                                    T,
                                                                                                                    {
                                                                                                                      label:
                                                                                                                        'Query Device',
                                                                                                                      icon:
                                                                                                                        'ioniconsSearch' in
                                                                                                                        a
                                                                                                                          ? a.ioniconsSearch
                                                                                                                          : i(
                                                                                                                              M
                                                                                                                            ),
                                                                                                                      action:
                                                                                                                        'lookup',
                                                                                                                      default:
                                                                                                                        ''
                                                                                                                    },
                                                                                                                    null,
                                                                                                                    8,
                                                                                                                    [
                                                                                                                      'icon'
                                                                                                                    ]
                                                                                                                  ),
                                                                                                                  e(
                                                                                                                    T,
                                                                                                                    {
                                                                                                                      label:
                                                                                                                        'Debug Gateway',
                                                                                                                      icon:
                                                                                                                        'ioniconsSearch' in
                                                                                                                        a
                                                                                                                          ? a.ioniconsSearch
                                                                                                                          : i(
                                                                                                                              M
                                                                                                                            ),
                                                                                                                      action:
                                                                                                                        'debugGateway'
                                                                                                                    },
                                                                                                                    null,
                                                                                                                    8,
                                                                                                                    [
                                                                                                                      'icon'
                                                                                                                    ]
                                                                                                                  )
                                                                                                                ]
                                                                                                              ),
                                                                                                            _: 2
                                                                                                          },
                                                                                                          1032,
                                                                                                          [
                                                                                                            'label'
                                                                                                          ]
                                                                                                        )
                                                                                                      ]
                                                                                                    ),
                                                                                                    t(
                                                                                                      'p',
                                                                                                      null,
                                                                                                      [
                                                                                                        bl,
                                                                                                        e(
                                                                                                          y,
                                                                                                          null,
                                                                                                          {
                                                                                                            default:
                                                                                                              l(
                                                                                                                () => [
                                                                                                                  n(
                                                                                                                    d(
                                                                                                                      u.productCode
                                                                                                                    ),
                                                                                                                    1
                                                                                                                  )
                                                                                                                ]
                                                                                                              ),
                                                                                                            _: 2
                                                                                                          },
                                                                                                          1024
                                                                                                        )
                                                                                                      ]
                                                                                                    ),
                                                                                                    t(
                                                                                                      'p',
                                                                                                      null,
                                                                                                      [
                                                                                                        hl,
                                                                                                        e(
                                                                                                          y,
                                                                                                          null,
                                                                                                          {
                                                                                                            default:
                                                                                                              l(
                                                                                                                () => [
                                                                                                                  n(
                                                                                                                    d(
                                                                                                                      u.serialNumber
                                                                                                                    ),
                                                                                                                    1
                                                                                                                  )
                                                                                                                ]
                                                                                                              ),
                                                                                                            _: 2
                                                                                                          },
                                                                                                          1024
                                                                                                        )
                                                                                                      ]
                                                                                                    ),
                                                                                                    t(
                                                                                                      'p',
                                                                                                      null,
                                                                                                      [
                                                                                                        Sl,
                                                                                                        n(
                                                                                                          ' ' +
                                                                                                            d(
                                                                                                              (G =
                                                                                                                u.creationTimeStamp) ==
                                                                                                                null
                                                                                                                ? void 0
                                                                                                                : G.toLocaleString(
                                                                                                                    'de'
                                                                                                                  )
                                                                                                            ),
                                                                                                          1
                                                                                                        )
                                                                                                      ]
                                                                                                    ),
                                                                                                    t(
                                                                                                      'p',
                                                                                                      null,
                                                                                                      [
                                                                                                        yl,
                                                                                                        n(
                                                                                                          ' ' +
                                                                                                            d(
                                                                                                              (Q =
                                                                                                                u.latestContact) ==
                                                                                                                null
                                                                                                                ? void 0
                                                                                                                : Q.toLocaleString(
                                                                                                                    'de'
                                                                                                                  )
                                                                                                            ),
                                                                                                          1
                                                                                                        )
                                                                                                      ]
                                                                                                    ),
                                                                                                    t(
                                                                                                      'p',
                                                                                                      null,
                                                                                                      [
                                                                                                        gl,
                                                                                                        u
                                                                                                          .messageStats
                                                                                                          .length >
                                                                                                        0
                                                                                                          ? (r(),
                                                                                                            h(
                                                                                                              w,
                                                                                                              {
                                                                                                                key: 0,
                                                                                                                class:
                                                                                                                  'plant-accordion'
                                                                                                              },
                                                                                                              {
                                                                                                                default:
                                                                                                                  l(
                                                                                                                    () => [
                                                                                                                      e(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                          value:
                                                                                                                            'first'
                                                                                                                        },
                                                                                                                        {
                                                                                                                          default:
                                                                                                                            l(
                                                                                                                              () => [
                                                                                                                                e(
                                                                                                                                  p,
                                                                                                                                  {
                                                                                                                                    slot: 'header',
                                                                                                                                    class:
                                                                                                                                      'plant-expand'
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    default:
                                                                                                                                      l(
                                                                                                                                        () => [
                                                                                                                                          e(
                                                                                                                                            g,
                                                                                                                                            null,
                                                                                                                                            {
                                                                                                                                              default:
                                                                                                                                                l(
                                                                                                                                                  () => [
                                                                                                                                                    n(
                                                                                                                                                      d(
                                                                                                                                                        ('pluralize' in
                                                                                                                                                          a
                                                                                                                                                          ? a.pluralize
                                                                                                                                                          : i(
                                                                                                                                                              A
                                                                                                                                                            ))(
                                                                                                                                                          u
                                                                                                                                                            .messageStats
                                                                                                                                                            .length,
                                                                                                                                                          'Stat'
                                                                                                                                                        )
                                                                                                                                                      ),
                                                                                                                                                      1
                                                                                                                                                    )
                                                                                                                                                  ]
                                                                                                                                                ),
                                                                                                                                              _: 2
                                                                                                                                            },
                                                                                                                                            1024
                                                                                                                                          )
                                                                                                                                        ]
                                                                                                                                      ),
                                                                                                                                    _: 2
                                                                                                                                  },
                                                                                                                                  1024
                                                                                                                                ),
                                                                                                                                t(
                                                                                                                                  'div',
                                                                                                                                  vl,
                                                                                                                                  [
                                                                                                                                    t(
                                                                                                                                      'table',
                                                                                                                                      Il,
                                                                                                                                      [
                                                                                                                                        Cl,
                                                                                                                                        (r(
                                                                                                                                          !0
                                                                                                                                        ),
                                                                                                                                        f(
                                                                                                                                          D,
                                                                                                                                          null,
                                                                                                                                          P(
                                                                                                                                            u.messageStats,
                                                                                                                                            m => (
                                                                                                                                              r(),
                                                                                                                                              f(
                                                                                                                                                'tr',
                                                                                                                                                null,
                                                                                                                                                [
                                                                                                                                                  t(
                                                                                                                                                    'td',
                                                                                                                                                    null,
                                                                                                                                                    d(
                                                                                                                                                      ('formatDate' in
                                                                                                                                                        a
                                                                                                                                                        ? a.formatDate
                                                                                                                                                        : i(
                                                                                                                                                            Y
                                                                                                                                                          ))(
                                                                                                                                                        new Date(
                                                                                                                                                          m.date
                                                                                                                                                        )
                                                                                                                                                      )
                                                                                                                                                    ),
                                                                                                                                                    1
                                                                                                                                                  ),
                                                                                                                                                  t(
                                                                                                                                                    'td',
                                                                                                                                                    null,
                                                                                                                                                    d(
                                                                                                                                                      m.updates
                                                                                                                                                    ),
                                                                                                                                                    1
                                                                                                                                                  )
                                                                                                                                                ]
                                                                                                                                              )
                                                                                                                                            )
                                                                                                                                          ),
                                                                                                                                          256
                                                                                                                                        ))
                                                                                                                                      ]
                                                                                                                                    )
                                                                                                                                  ]
                                                                                                                                )
                                                                                                                              ]
                                                                                                                            ),
                                                                                                                          _: 2
                                                                                                                        },
                                                                                                                        1024
                                                                                                                      )
                                                                                                                    ]
                                                                                                                  ),
                                                                                                                _: 2
                                                                                                              },
                                                                                                              1024
                                                                                                            ))
                                                                                                          : (r(),
                                                                                                            h(
                                                                                                              _,
                                                                                                              {
                                                                                                                key: 1,
                                                                                                                color:
                                                                                                                  'warning'
                                                                                                              },
                                                                                                              {
                                                                                                                default:
                                                                                                                  l(
                                                                                                                    () => [
                                                                                                                      n(
                                                                                                                        ' No stats '
                                                                                                                      )
                                                                                                                    ]
                                                                                                                  ),
                                                                                                                _: 1
                                                                                                              }
                                                                                                            ))
                                                                                                      ]
                                                                                                    ),
                                                                                                    t(
                                                                                                      'p',
                                                                                                      null,
                                                                                                      [
                                                                                                        Dl,
                                                                                                        e(
                                                                                                          w,
                                                                                                          {
                                                                                                            class:
                                                                                                              'plant-accordion'
                                                                                                          },
                                                                                                          {
                                                                                                            default:
                                                                                                              l(
                                                                                                                () => [
                                                                                                                  e(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                      value:
                                                                                                                        'first'
                                                                                                                    },
                                                                                                                    {
                                                                                                                      default:
                                                                                                                        l(
                                                                                                                          () => [
                                                                                                                            e(
                                                                                                                              p,
                                                                                                                              {
                                                                                                                                slot: 'header',
                                                                                                                                class:
                                                                                                                                  'plant-expand'
                                                                                                                              },
                                                                                                                              {
                                                                                                                                default:
                                                                                                                                  l(
                                                                                                                                    () => [
                                                                                                                                      e(
                                                                                                                                        g,
                                                                                                                                        null,
                                                                                                                                        {
                                                                                                                                          default:
                                                                                                                                            l(
                                                                                                                                              () => [
                                                                                                                                                n(
                                                                                                                                                  d(
                                                                                                                                                    ('pluralize' in
                                                                                                                                                      a
                                                                                                                                                      ? a.pluralize
                                                                                                                                                      : i(
                                                                                                                                                          A
                                                                                                                                                        ))(
                                                                                                                                                      Z(
                                                                                                                                                        s.inverters,
                                                                                                                                                        u.productSerial
                                                                                                                                                      )
                                                                                                                                                        .length,
                                                                                                                                                      'Inverter'
                                                                                                                                                    )
                                                                                                                                                  ),
                                                                                                                                                  1
                                                                                                                                                )
                                                                                                                                              ]
                                                                                                                                            ),
                                                                                                                                          _: 2
                                                                                                                                        },
                                                                                                                                        1024
                                                                                                                                      )
                                                                                                                                    ]
                                                                                                                                  ),
                                                                                                                                _: 2
                                                                                                                              },
                                                                                                                              1024
                                                                                                                            ),
                                                                                                                            t(
                                                                                                                              'div',
                                                                                                                              Pl,
                                                                                                                              [
                                                                                                                                (r(
                                                                                                                                  !0
                                                                                                                                ),
                                                                                                                                f(
                                                                                                                                  D,
                                                                                                                                  null,
                                                                                                                                  P(
                                                                                                                                    Z(
                                                                                                                                      s.inverters,
                                                                                                                                      u.productSerial
                                                                                                                                    ),
                                                                                                                                    m => (
                                                                                                                                      r(),
                                                                                                                                      h(
                                                                                                                                        p,
                                                                                                                                        {
                                                                                                                                          color:
                                                                                                                                            'light'
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                          default:
                                                                                                                                            l(
                                                                                                                                              () => [
                                                                                                                                                e(
                                                                                                                                                  g,
                                                                                                                                                  null,
                                                                                                                                                  {
                                                                                                                                                    default:
                                                                                                                                                      l(
                                                                                                                                                        () => {
                                                                                                                                                          var se,
                                                                                                                                                            ie
                                                                                                                                                          return [
                                                                                                                                                            t(
                                                                                                                                                              'p',
                                                                                                                                                              null,
                                                                                                                                                              [
                                                                                                                                                                kl,
                                                                                                                                                                e(
                                                                                                                                                                  ae,
                                                                                                                                                                  {
                                                                                                                                                                    label:
                                                                                                                                                                      m.productSerial
                                                                                                                                                                  },
                                                                                                                                                                  {
                                                                                                                                                                    default:
                                                                                                                                                                      l(
                                                                                                                                                                        () => [
                                                                                                                                                                          e(
                                                                                                                                                                            T,
                                                                                                                                                                            {
                                                                                                                                                                              label:
                                                                                                                                                                                'Copy',
                                                                                                                                                                              icon:
                                                                                                                                                                                'ioniconsCopy' in
                                                                                                                                                                                a
                                                                                                                                                                                  ? a.ioniconsCopy
                                                                                                                                                                                  : i(
                                                                                                                                                                                      ue
                                                                                                                                                                                    ),
                                                                                                                                                                              action:
                                                                                                                                                                                'copy'
                                                                                                                                                                            },
                                                                                                                                                                            null,
                                                                                                                                                                            8,
                                                                                                                                                                            [
                                                                                                                                                                              'icon'
                                                                                                                                                                            ]
                                                                                                                                                                          ),
                                                                                                                                                                          e(
                                                                                                                                                                            T,
                                                                                                                                                                            {
                                                                                                                                                                              label:
                                                                                                                                                                                'Query Device',
                                                                                                                                                                              icon:
                                                                                                                                                                                'ioniconsSearch' in
                                                                                                                                                                                a
                                                                                                                                                                                  ? a.ioniconsSearch
                                                                                                                                                                                  : i(
                                                                                                                                                                                      M
                                                                                                                                                                                    ),
                                                                                                                                                                              action:
                                                                                                                                                                                'lookup',
                                                                                                                                                                              default:
                                                                                                                                                                                ''
                                                                                                                                                                            },
                                                                                                                                                                            null,
                                                                                                                                                                            8,
                                                                                                                                                                            [
                                                                                                                                                                              'icon'
                                                                                                                                                                            ]
                                                                                                                                                                          ),
                                                                                                                                                                          e(
                                                                                                                                                                            T,
                                                                                                                                                                            {
                                                                                                                                                                              label:
                                                                                                                                                                                'Debug Inverter',
                                                                                                                                                                              icon:
                                                                                                                                                                                'ioniconsSearch' in
                                                                                                                                                                                a
                                                                                                                                                                                  ? a.ioniconsSearch
                                                                                                                                                                                  : i(
                                                                                                                                                                                      M
                                                                                                                                                                                    ),
                                                                                                                                                                              action:
                                                                                                                                                                                'debugInverter'
                                                                                                                                                                            },
                                                                                                                                                                            null,
                                                                                                                                                                            8,
                                                                                                                                                                            [
                                                                                                                                                                              'icon'
                                                                                                                                                                            ]
                                                                                                                                                                          )
                                                                                                                                                                        ]
                                                                                                                                                                      ),
                                                                                                                                                                    _: 2
                                                                                                                                                                  },
                                                                                                                                                                  1032,
                                                                                                                                                                  [
                                                                                                                                                                    'label'
                                                                                                                                                                  ]
                                                                                                                                                                )
                                                                                                                                                              ]
                                                                                                                                                            ),
                                                                                                                                                            t(
                                                                                                                                                              'p',
                                                                                                                                                              null,
                                                                                                                                                              [
                                                                                                                                                                $l,
                                                                                                                                                                e(
                                                                                                                                                                  y,
                                                                                                                                                                  null,
                                                                                                                                                                  {
                                                                                                                                                                    default:
                                                                                                                                                                      l(
                                                                                                                                                                        () => [
                                                                                                                                                                          n(
                                                                                                                                                                            d(
                                                                                                                                                                              m.productCode
                                                                                                                                                                            ),
                                                                                                                                                                            1
                                                                                                                                                                          )
                                                                                                                                                                        ]
                                                                                                                                                                      ),
                                                                                                                                                                    _: 2
                                                                                                                                                                  },
                                                                                                                                                                  1024
                                                                                                                                                                )
                                                                                                                                                              ]
                                                                                                                                                            ),
                                                                                                                                                            t(
                                                                                                                                                              'p',
                                                                                                                                                              null,
                                                                                                                                                              [
                                                                                                                                                                wl,
                                                                                                                                                                e(
                                                                                                                                                                  y,
                                                                                                                                                                  null,
                                                                                                                                                                  {
                                                                                                                                                                    default:
                                                                                                                                                                      l(
                                                                                                                                                                        () => [
                                                                                                                                                                          n(
                                                                                                                                                                            d(
                                                                                                                                                                              m.serialNumber
                                                                                                                                                                            ),
                                                                                                                                                                            1
                                                                                                                                                                          )
                                                                                                                                                                        ]
                                                                                                                                                                      ),
                                                                                                                                                                    _: 2
                                                                                                                                                                  },
                                                                                                                                                                  1024
                                                                                                                                                                )
                                                                                                                                                              ]
                                                                                                                                                            ),
                                                                                                                                                            t(
                                                                                                                                                              'p',
                                                                                                                                                              null,
                                                                                                                                                              [
                                                                                                                                                                Ll,
                                                                                                                                                                n(
                                                                                                                                                                  ' ' +
                                                                                                                                                                    d(
                                                                                                                                                                      (se =
                                                                                                                                                                        m.creationTimeStamp) ==
                                                                                                                                                                        null
                                                                                                                                                                        ? void 0
                                                                                                                                                                        : se.toLocaleString(
                                                                                                                                                                            'de'
                                                                                                                                                                          )
                                                                                                                                                                    ),
                                                                                                                                                                  1
                                                                                                                                                                )
                                                                                                                                                              ]
                                                                                                                                                            ),
                                                                                                                                                            t(
                                                                                                                                                              'p',
                                                                                                                                                              null,
                                                                                                                                                              [
                                                                                                                                                                Nl,
                                                                                                                                                                n(
                                                                                                                                                                  ' ' +
                                                                                                                                                                    d(
                                                                                                                                                                      (ie =
                                                                                                                                                                        m.latestContact) ==
                                                                                                                                                                        null
                                                                                                                                                                        ? void 0
                                                                                                                                                                        : ie.toLocaleString(
                                                                                                                                                                            'de'
                                                                                                                                                                          )
                                                                                                                                                                    ),
                                                                                                                                                                  1
                                                                                                                                                                )
                                                                                                                                                              ]
                                                                                                                                                            ),
                                                                                                                                                            t(
                                                                                                                                                              'p',
                                                                                                                                                              null,
                                                                                                                                                              [
                                                                                                                                                                Vl,
                                                                                                                                                                m
                                                                                                                                                                  .messageStats
                                                                                                                                                                  .length >
                                                                                                                                                                0
                                                                                                                                                                  ? (r(),
                                                                                                                                                                    h(
                                                                                                                                                                      w,
                                                                                                                                                                      {
                                                                                                                                                                        key: 0,
                                                                                                                                                                        class:
                                                                                                                                                                          'plant-accordion'
                                                                                                                                                                      },
                                                                                                                                                                      {
                                                                                                                                                                        default:
                                                                                                                                                                          l(
                                                                                                                                                                            () => [
                                                                                                                                                                              e(
                                                                                                                                                                                $,
                                                                                                                                                                                {
                                                                                                                                                                                  value:
                                                                                                                                                                                    'first'
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                  default:
                                                                                                                                                                                    l(
                                                                                                                                                                                      () => [
                                                                                                                                                                                        e(
                                                                                                                                                                                          p,
                                                                                                                                                                                          {
                                                                                                                                                                                            slot: 'header',
                                                                                                                                                                                            class:
                                                                                                                                                                                              'plant-expand'
                                                                                                                                                                                          },
                                                                                                                                                                                          {
                                                                                                                                                                                            default:
                                                                                                                                                                                              l(
                                                                                                                                                                                                () => [
                                                                                                                                                                                                  e(
                                                                                                                                                                                                    g,
                                                                                                                                                                                                    null,
                                                                                                                                                                                                    {
                                                                                                                                                                                                      default:
                                                                                                                                                                                                        l(
                                                                                                                                                                                                          () => [
                                                                                                                                                                                                            n(
                                                                                                                                                                                                              d(
                                                                                                                                                                                                                `${
                                                                                                                                                                                                                  m
                                                                                                                                                                                                                    .messageStats
                                                                                                                                                                                                                    .length
                                                                                                                                                                                                                } ${
                                                                                                                                                                                                                  m
                                                                                                                                                                                                                    .messageStats
                                                                                                                                                                                                                    .length ===
                                                                                                                                                                                                                  1
                                                                                                                                                                                                                    ? 'Stat'
                                                                                                                                                                                                                    : 'Stats'
                                                                                                                                                                                                                }`
                                                                                                                                                                                                              ),
                                                                                                                                                                                                              1
                                                                                                                                                                                                            )
                                                                                                                                                                                                          ]
                                                                                                                                                                                                        ),
                                                                                                                                                                                                      _: 2
                                                                                                                                                                                                    },
                                                                                                                                                                                                    1024
                                                                                                                                                                                                  )
                                                                                                                                                                                                ]
                                                                                                                                                                                              ),
                                                                                                                                                                                            _: 2
                                                                                                                                                                                          },
                                                                                                                                                                                          1024
                                                                                                                                                                                        ),
                                                                                                                                                                                        t(
                                                                                                                                                                                          'div',
                                                                                                                                                                                          Tl,
                                                                                                                                                                                          [
                                                                                                                                                                                            t(
                                                                                                                                                                                              'table',
                                                                                                                                                                                              zl,
                                                                                                                                                                                              [
                                                                                                                                                                                                Al,
                                                                                                                                                                                                (r(
                                                                                                                                                                                                  !0
                                                                                                                                                                                                ),
                                                                                                                                                                                                f(
                                                                                                                                                                                                  D,
                                                                                                                                                                                                  null,
                                                                                                                                                                                                  P(
                                                                                                                                                                                                    m.messageStats,
                                                                                                                                                                                                    de => (
                                                                                                                                                                                                      r(),
                                                                                                                                                                                                      f(
                                                                                                                                                                                                        'tr',
                                                                                                                                                                                                        null,
                                                                                                                                                                                                        [
                                                                                                                                                                                                          t(
                                                                                                                                                                                                            'td',
                                                                                                                                                                                                            null,
                                                                                                                                                                                                            d(
                                                                                                                                                                                                              ('formatDate' in
                                                                                                                                                                                                                a
                                                                                                                                                                                                                ? a.formatDate
                                                                                                                                                                                                                : i(
                                                                                                                                                                                                                    Y
                                                                                                                                                                                                                  ))(
                                                                                                                                                                                                                new Date(
                                                                                                                                                                                                                  de.date
                                                                                                                                                                                                                )
                                                                                                                                                                                                              )
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            1
                                                                                                                                                                                                          ),
                                                                                                                                                                                                          t(
                                                                                                                                                                                                            'td',
                                                                                                                                                                                                            null,
                                                                                                                                                                                                            d(
                                                                                                                                                                                                              de.updates
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            1
                                                                                                                                                                                                          )
                                                                                                                                                                                                        ]
                                                                                                                                                                                                      )
                                                                                                                                                                                                    )
                                                                                                                                                                                                  ),
                                                                                                                                                                                                  256
                                                                                                                                                                                                ))
                                                                                                                                                                                              ]
                                                                                                                                                                                            )
                                                                                                                                                                                          ]
                                                                                                                                                                                        )
                                                                                                                                                                                      ]
                                                                                                                                                                                    ),
                                                                                                                                                                                  _: 2
                                                                                                                                                                                },
                                                                                                                                                                                1024
                                                                                                                                                                              )
                                                                                                                                                                            ]
                                                                                                                                                                          ),
                                                                                                                                                                        _: 2
                                                                                                                                                                      },
                                                                                                                                                                      1024
                                                                                                                                                                    ))
                                                                                                                                                                  : (r(),
                                                                                                                                                                    h(
                                                                                                                                                                      _,
                                                                                                                                                                      {
                                                                                                                                                                        key: 1,
                                                                                                                                                                        color:
                                                                                                                                                                          'warning'
                                                                                                                                                                      },
                                                                                                                                                                      {
                                                                                                                                                                        default:
                                                                                                                                                                          l(
                                                                                                                                                                            () => [
                                                                                                                                                                              n(
                                                                                                                                                                                ' No stats '
                                                                                                                                                                              )
                                                                                                                                                                            ]
                                                                                                                                                                          ),
                                                                                                                                                                        _: 1
                                                                                                                                                                      }
                                                                                                                                                                    ))
                                                                                                                                                              ]
                                                                                                                                                            )
                                                                                                                                                          ]
                                                                                                                                                        }
                                                                                                                                                      ),
                                                                                                                                                    _: 2
                                                                                                                                                  },
                                                                                                                                                  1024
                                                                                                                                                )
                                                                                                                                              ]
                                                                                                                                            ),
                                                                                                                                          _: 2
                                                                                                                                        },
                                                                                                                                        1024
                                                                                                                                      )
                                                                                                                                    )
                                                                                                                                  ),
                                                                                                                                  256
                                                                                                                                ))
                                                                                                                              ]
                                                                                                                            )
                                                                                                                          ]
                                                                                                                        ),
                                                                                                                      _: 2
                                                                                                                    },
                                                                                                                    1024
                                                                                                                  )
                                                                                                                ]
                                                                                                              ),
                                                                                                            _: 2
                                                                                                          },
                                                                                                          1024
                                                                                                        )
                                                                                                      ]
                                                                                                    )
                                                                                                  ]
                                                                                                }
                                                                                              ),
                                                                                            _: 2
                                                                                          },
                                                                                          1024
                                                                                        )
                                                                                      ]
                                                                                    ),
                                                                                  _: 2
                                                                                },
                                                                                1024
                                                                              )
                                                                            )
                                                                          ),
                                                                          256
                                                                        )),
                                                                        e(
                                                                          p,
                                                                          {
                                                                            color:
                                                                              'light'
                                                                          },
                                                                          {
                                                                            default:
                                                                              l(
                                                                                () => [
                                                                                  e(
                                                                                    w,
                                                                                    {
                                                                                      class:
                                                                                        'plant-accordion'
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        l(
                                                                                          () => [
                                                                                            e(
                                                                                              $,
                                                                                              {
                                                                                                value:
                                                                                                  'first'
                                                                                              },
                                                                                              {
                                                                                                default:
                                                                                                  l(
                                                                                                    () => [
                                                                                                      e(
                                                                                                        p,
                                                                                                        {
                                                                                                          slot: 'header',
                                                                                                          class:
                                                                                                            'plant-expand'
                                                                                                        },
                                                                                                        {
                                                                                                          default:
                                                                                                            l(
                                                                                                              () => [
                                                                                                                e(
                                                                                                                  g,
                                                                                                                  null,
                                                                                                                  {
                                                                                                                    default:
                                                                                                                      l(
                                                                                                                        () => [
                                                                                                                          n(
                                                                                                                            d(
                                                                                                                              ('pluralize' in
                                                                                                                                a
                                                                                                                                ? a.pluralize
                                                                                                                                : i(
                                                                                                                                    A
                                                                                                                                  ))(
                                                                                                                                R(
                                                                                                                                  s
                                                                                                                                )
                                                                                                                                  .length,
                                                                                                                                'Detached Inverter'
                                                                                                                              )
                                                                                                                            ),
                                                                                                                            1
                                                                                                                          )
                                                                                                                        ]
                                                                                                                      ),
                                                                                                                    _: 2
                                                                                                                  },
                                                                                                                  1024
                                                                                                                )
                                                                                                              ]
                                                                                                            ),
                                                                                                          _: 2
                                                                                                        },
                                                                                                        1024
                                                                                                      ),
                                                                                                      t(
                                                                                                        'div',
                                                                                                        El,
                                                                                                        [
                                                                                                          (r(
                                                                                                            !0
                                                                                                          ),
                                                                                                          f(
                                                                                                            D,
                                                                                                            null,
                                                                                                            P(
                                                                                                              R(
                                                                                                                s
                                                                                                              ),
                                                                                                              u => (
                                                                                                                r(),
                                                                                                                h(
                                                                                                                  p,
                                                                                                                  {
                                                                                                                    color:
                                                                                                                      'light'
                                                                                                                  },
                                                                                                                  {
                                                                                                                    default:
                                                                                                                      l(
                                                                                                                        () => [
                                                                                                                          e(
                                                                                                                            g,
                                                                                                                            null,
                                                                                                                            {
                                                                                                                              default:
                                                                                                                                l(
                                                                                                                                  () => {
                                                                                                                                    var G,
                                                                                                                                      Q
                                                                                                                                    return [
                                                                                                                                      t(
                                                                                                                                        'p',
                                                                                                                                        null,
                                                                                                                                        [
                                                                                                                                          Ul,
                                                                                                                                          e(
                                                                                                                                            y,
                                                                                                                                            null,
                                                                                                                                            {
                                                                                                                                              default:
                                                                                                                                                l(
                                                                                                                                                  () => [
                                                                                                                                                    n(
                                                                                                                                                      d(
                                                                                                                                                        u.productSerial
                                                                                                                                                      ),
                                                                                                                                                      1
                                                                                                                                                    )
                                                                                                                                                  ]
                                                                                                                                                ),
                                                                                                                                              _: 2
                                                                                                                                            },
                                                                                                                                            1024
                                                                                                                                          )
                                                                                                                                        ]
                                                                                                                                      ),
                                                                                                                                      t(
                                                                                                                                        'p',
                                                                                                                                        null,
                                                                                                                                        [
                                                                                                                                          Bl,
                                                                                                                                          e(
                                                                                                                                            y,
                                                                                                                                            null,
                                                                                                                                            {
                                                                                                                                              default:
                                                                                                                                                l(
                                                                                                                                                  () => [
                                                                                                                                                    n(
                                                                                                                                                      d(
                                                                                                                                                        u.productCode
                                                                                                                                                      ),
                                                                                                                                                      1
                                                                                                                                                    )
                                                                                                                                                  ]
                                                                                                                                                ),
                                                                                                                                              _: 2
                                                                                                                                            },
                                                                                                                                            1024
                                                                                                                                          )
                                                                                                                                        ]
                                                                                                                                      ),
                                                                                                                                      t(
                                                                                                                                        'p',
                                                                                                                                        null,
                                                                                                                                        [
                                                                                                                                          Gl,
                                                                                                                                          e(
                                                                                                                                            y,
                                                                                                                                            null,
                                                                                                                                            {
                                                                                                                                              default:
                                                                                                                                                l(
                                                                                                                                                  () => [
                                                                                                                                                    n(
                                                                                                                                                      d(
                                                                                                                                                        u.serialNumber
                                                                                                                                                      ),
                                                                                                                                                      1
                                                                                                                                                    )
                                                                                                                                                  ]
                                                                                                                                                ),
                                                                                                                                              _: 2
                                                                                                                                            },
                                                                                                                                            1024
                                                                                                                                          )
                                                                                                                                        ]
                                                                                                                                      ),
                                                                                                                                      t(
                                                                                                                                        'p',
                                                                                                                                        null,
                                                                                                                                        [
                                                                                                                                          Ql,
                                                                                                                                          e(
                                                                                                                                            y,
                                                                                                                                            null,
                                                                                                                                            {
                                                                                                                                              default:
                                                                                                                                                l(
                                                                                                                                                  () => [
                                                                                                                                                    n(
                                                                                                                                                      d(
                                                                                                                                                        u.parentProductSerial ||
                                                                                                                                                          '-'
                                                                                                                                                      ),
                                                                                                                                                      1
                                                                                                                                                    )
                                                                                                                                                  ]
                                                                                                                                                ),
                                                                                                                                              _: 2
                                                                                                                                            },
                                                                                                                                            1024
                                                                                                                                          )
                                                                                                                                        ]
                                                                                                                                      ),
                                                                                                                                      t(
                                                                                                                                        'p',
                                                                                                                                        null,
                                                                                                                                        [
                                                                                                                                          ql,
                                                                                                                                          n(
                                                                                                                                            ' ' +
                                                                                                                                              d(
                                                                                                                                                (G =
                                                                                                                                                  u.creationTimeStamp) ==
                                                                                                                                                  null
                                                                                                                                                  ? void 0
                                                                                                                                                  : G.toLocaleString(
                                                                                                                                                      'de'
                                                                                                                                                    )
                                                                                                                                              ),
                                                                                                                                            1
                                                                                                                                          )
                                                                                                                                        ]
                                                                                                                                      ),
                                                                                                                                      t(
                                                                                                                                        'p',
                                                                                                                                        null,
                                                                                                                                        [
                                                                                                                                          Fl,
                                                                                                                                          n(
                                                                                                                                            ' ' +
                                                                                                                                              d(
                                                                                                                                                (Q =
                                                                                                                                                  u.latestContact) ==
                                                                                                                                                  null
                                                                                                                                                  ? void 0
                                                                                                                                                  : Q.toLocaleString(
                                                                                                                                                      'de'
                                                                                                                                                    )
                                                                                                                                              ),
                                                                                                                                            1
                                                                                                                                          )
                                                                                                                                        ]
                                                                                                                                      ),
                                                                                                                                      t(
                                                                                                                                        'p',
                                                                                                                                        null,
                                                                                                                                        [
                                                                                                                                          Hl,
                                                                                                                                          u
                                                                                                                                            .messageStats
                                                                                                                                            .length >
                                                                                                                                          0
                                                                                                                                            ? (r(),
                                                                                                                                              h(
                                                                                                                                                w,
                                                                                                                                                {
                                                                                                                                                  key: 0,
                                                                                                                                                  class:
                                                                                                                                                    'plant-accordion'
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                  default:
                                                                                                                                                    l(
                                                                                                                                                      () => [
                                                                                                                                                        e(
                                                                                                                                                          $,
                                                                                                                                                          {
                                                                                                                                                            value:
                                                                                                                                                              'first'
                                                                                                                                                          },
                                                                                                                                                          {
                                                                                                                                                            default:
                                                                                                                                                              l(
                                                                                                                                                                () => [
                                                                                                                                                                  e(
                                                                                                                                                                    p,
                                                                                                                                                                    {
                                                                                                                                                                      slot: 'header',
                                                                                                                                                                      class:
                                                                                                                                                                        'plant-expand'
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                      default:
                                                                                                                                                                        l(
                                                                                                                                                                          () => [
                                                                                                                                                                            e(
                                                                                                                                                                              g,
                                                                                                                                                                              null,
                                                                                                                                                                              {
                                                                                                                                                                                default:
                                                                                                                                                                                  l(
                                                                                                                                                                                    () => [
                                                                                                                                                                                      n(
                                                                                                                                                                                        d(
                                                                                                                                                                                          ('pluralize' in
                                                                                                                                                                                            a
                                                                                                                                                                                            ? a.pluralize
                                                                                                                                                                                            : i(
                                                                                                                                                                                                A
                                                                                                                                                                                              ))(
                                                                                                                                                                                            u
                                                                                                                                                                                              .messageStats
                                                                                                                                                                                              .length,
                                                                                                                                                                                            'Stat'
                                                                                                                                                                                          )
                                                                                                                                                                                        ),
                                                                                                                                                                                        1
                                                                                                                                                                                      )
                                                                                                                                                                                    ]
                                                                                                                                                                                  ),
                                                                                                                                                                                _: 2
                                                                                                                                                                              },
                                                                                                                                                                              1024
                                                                                                                                                                            )
                                                                                                                                                                          ]
                                                                                                                                                                        ),
                                                                                                                                                                      _: 2
                                                                                                                                                                    },
                                                                                                                                                                    1024
                                                                                                                                                                  ),
                                                                                                                                                                  t(
                                                                                                                                                                    'div',
                                                                                                                                                                    Kl,
                                                                                                                                                                    [
                                                                                                                                                                      t(
                                                                                                                                                                        'table',
                                                                                                                                                                        Ol,
                                                                                                                                                                        [
                                                                                                                                                                          Wl,
                                                                                                                                                                          (r(
                                                                                                                                                                            !0
                                                                                                                                                                          ),
                                                                                                                                                                          f(
                                                                                                                                                                            D,
                                                                                                                                                                            null,
                                                                                                                                                                            P(
                                                                                                                                                                              u.messageStats,
                                                                                                                                                                              m => (
                                                                                                                                                                                r(),
                                                                                                                                                                                f(
                                                                                                                                                                                  'tr',
                                                                                                                                                                                  null,
                                                                                                                                                                                  [
                                                                                                                                                                                    t(
                                                                                                                                                                                      'td',
                                                                                                                                                                                      null,
                                                                                                                                                                                      d(
                                                                                                                                                                                        ('formatDate' in
                                                                                                                                                                                          a
                                                                                                                                                                                          ? a.formatDate
                                                                                                                                                                                          : i(
                                                                                                                                                                                              Y
                                                                                                                                                                                            ))(
                                                                                                                                                                                          new Date(
                                                                                                                                                                                            m.date
                                                                                                                                                                                          )
                                                                                                                                                                                        )
                                                                                                                                                                                      ),
                                                                                                                                                                                      1
                                                                                                                                                                                    ),
                                                                                                                                                                                    t(
                                                                                                                                                                                      'td',
                                                                                                                                                                                      null,
                                                                                                                                                                                      d(
                                                                                                                                                                                        m.updates
                                                                                                                                                                                      ),
                                                                                                                                                                                      1
                                                                                                                                                                                    )
                                                                                                                                                                                  ]
                                                                                                                                                                                )
                                                                                                                                                                              )
                                                                                                                                                                            ),
                                                                                                                                                                            256
                                                                                                                                                                          ))
                                                                                                                                                                        ]
                                                                                                                                                                      )
                                                                                                                                                                    ]
                                                                                                                                                                  )
                                                                                                                                                                ]
                                                                                                                                                              ),
                                                                                                                                                            _: 2
                                                                                                                                                          },
                                                                                                                                                          1024
                                                                                                                                                        )
                                                                                                                                                      ]
                                                                                                                                                    ),
                                                                                                                                                  _: 2
                                                                                                                                                },
                                                                                                                                                1024
                                                                                                                                              ))
                                                                                                                                            : (r(),
                                                                                                                                              h(
                                                                                                                                                _,
                                                                                                                                                {
                                                                                                                                                  key: 1,
                                                                                                                                                  color:
                                                                                                                                                    'warning'
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                  default:
                                                                                                                                                    l(
                                                                                                                                                      () => [
                                                                                                                                                        n(
                                                                                                                                                          ' No stats '
                                                                                                                                                        )
                                                                                                                                                      ]
                                                                                                                                                    ),
                                                                                                                                                  _: 1
                                                                                                                                                }
                                                                                                                                              ))
                                                                                                                                        ]
                                                                                                                                      )
                                                                                                                                    ]
                                                                                                                                  }
                                                                                                                                ),
                                                                                                                              _: 2
                                                                                                                            },
                                                                                                                            1024
                                                                                                                          )
                                                                                                                        ]
                                                                                                                      ),
                                                                                                                    _: 2
                                                                                                                  },
                                                                                                                  1024
                                                                                                                )
                                                                                                              )
                                                                                                            ),
                                                                                                            256
                                                                                                          ))
                                                                                                        ]
                                                                                                      )
                                                                                                    ]
                                                                                                  ),
                                                                                                _: 2
                                                                                              },
                                                                                              1024
                                                                                            )
                                                                                          ]
                                                                                        ),
                                                                                      _: 2
                                                                                    },
                                                                                    1024
                                                                                  )
                                                                                ]
                                                                              ),
                                                                            _: 2
                                                                          },
                                                                          1024
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
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
                                                ),
                                                e(
                                                  p,
                                                  {
                                                    lines: 'none',
                                                    class: 'plant-item'
                                                  },
                                                  {
                                                    default: l(() => [
                                                      e(
                                                        I,
                                                        {
                                                          slot: 'start',
                                                          color: 'medium',
                                                          icon:
                                                            'ioniconsPeople' in
                                                            a
                                                              ? a.ioniconsPeople
                                                              : i(Ue)
                                                        },
                                                        null,
                                                        8,
                                                        ['icon']
                                                      ),
                                                      e(
                                                        _,
                                                        {
                                                          class: 'plant-label'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            n('Users:')
                                                          ]),
                                                          _: 1
                                                        }
                                                      ),
                                                      e(
                                                        w,
                                                        {
                                                          class:
                                                            'plant-accordion'
                                                        },
                                                        {
                                                          default: l(() => [
                                                            e(
                                                              $,
                                                              {
                                                                value: 'first'
                                                              },
                                                              {
                                                                default: l(
                                                                  () => [
                                                                    e(
                                                                      p,
                                                                      {
                                                                        slot: 'header',
                                                                        class:
                                                                          'plant-expand'
                                                                      },
                                                                      {
                                                                        default:
                                                                          l(
                                                                            () => [
                                                                              e(
                                                                                g,
                                                                                null,
                                                                                {
                                                                                  default:
                                                                                    l(
                                                                                      () => [
                                                                                        n(
                                                                                          d(
                                                                                            ('pluralize' in
                                                                                              a
                                                                                              ? a.pluralize
                                                                                              : i(
                                                                                                  A
                                                                                                ))(
                                                                                              s
                                                                                                .users
                                                                                                .length,
                                                                                              'User'
                                                                                            )
                                                                                          ),
                                                                                          1
                                                                                        )
                                                                                      ]
                                                                                    ),
                                                                                  _: 2
                                                                                },
                                                                                1024
                                                                              )
                                                                            ]
                                                                          ),
                                                                        _: 2
                                                                      },
                                                                      1024
                                                                    ),
                                                                    t(
                                                                      'div',
                                                                      Ml,
                                                                      [
                                                                        t(
                                                                          'table',
                                                                          jl,
                                                                          [
                                                                            Xl,
                                                                            (r(
                                                                              !0
                                                                            ),
                                                                            f(
                                                                              D,
                                                                              null,
                                                                              P(
                                                                                s.users,
                                                                                u => (
                                                                                  r(),
                                                                                  f(
                                                                                    'tr',
                                                                                    null,
                                                                                    [
                                                                                      t(
                                                                                        'td',
                                                                                        null,
                                                                                        d(
                                                                                          u.id
                                                                                        ),
                                                                                        1
                                                                                      ),
                                                                                      t(
                                                                                        'td',
                                                                                        null,
                                                                                        d(
                                                                                          u.name
                                                                                        ),
                                                                                        1
                                                                                      ),
                                                                                      t(
                                                                                        'td',
                                                                                        null,
                                                                                        d(
                                                                                          u.email
                                                                                        ),
                                                                                        1
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                )
                                                                              ),
                                                                              256
                                                                            ))
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
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
                          }
                        ))
                      : i(B)
                      ? (r(),
                        f('div', Jl, [
                          e(
                            _,
                            { color: 'medium' },
                            { default: l(() => [Yl]), _: 1 }
                          )
                        ]))
                      : J('', !0)
                  ]
                }),
                _: 1
              })
            ]),
            _: 1
          })
        )
      }
    }
  }),
  nt = dl(Zl, [['__scopeId', 'data-v-0f77b1ce']])
export { nt as default }
