import {
  d as ne,
  u as le,
  r as P,
  al as te,
  t as f,
  v as D,
  z as e,
  A as o,
  B as t,
  N as l,
  d8 as ae,
  aR as ie,
  R as y,
  Q as S,
  L as b,
  y as m,
  an as se,
  x as k,
  az as N,
  eF as re,
  b1 as ue,
  eG as de,
  O as T,
  eH as ce,
  eB as me,
  eI as pe,
  am as fe,
  b0 as _e,
  eC as ve,
  eJ as ge,
  ax as be,
  aC as Ie,
  X as we,
  ab as Ce,
  a4 as De,
  W as ye,
  Y as ke,
  aj as Be,
  aW as Ve,
  db as Le,
  a2 as Pe,
  ap as Se,
  dh as he,
  di as Fe,
  Z as $e,
  af as Re,
  a1 as Ge,
  a3 as Ae,
  a7 as ze,
  aa as Me,
  ac as Ne,
  aH as Te,
  ar as Ue,
  C as Ee,
  D as He,
  m as We,
  _ as qe
} from './0fV2q4Ox.js'
import { _ as Oe } from './CxwSbNEQ.js'
import { u as je, b as Je } from './M_3S_cE4.js'
import { o as Qe, a as Xe } from './D0r5xylr.js'
import { t as U } from './DRWRzBEg.js'
const E = I => (Ee('data-v-11eb81c9'), (I = I()), He(), I),
  Ye = E(() => k('div', { class: 'product-spacer' }, null, -1)),
  Ze = { class: 'ion-padding', slot: 'content' },
  Ke = E(() => k('div', { class: 'product-spacer' }, null, -1)),
  xe = { class: 'ion-padding', slot: 'content' },
  eo = ne({
    __name: 'deploymentGroups',
    setup (I) {
      const { $api: h } = We(),
        H = le(),
        w = P(!1),
        _ = P('edit'),
        u = P({}),
        B = je(),
        V = Je()
      function W () {
        B.update(), V.update()
      }
      function F (n, i) {
        ;(_.value = n),
          n === 'edit'
            ? (u.value = { ...i })
            : (u.value = {
                id: 0,
                name: '',
                description: '',
                isDefaultForProduct: !1
              }),
          (w.value = !0)
      }
      function $ () {
        w.value = !1
      }
      async function q () {
        w.value = !1
        const {
          id: n,
          productId: i,
          name: v,
          description: s,
          isDefaultForProduct: p
        } = u.value
        _.value === 'edit' && n
          ? await h.modifyFirmwareDeploymentGroup({
              modifyFirmwareDeploymentGroupRequest: {
                firmwareDeploymentGroupId: n,
                name: v,
                description: s,
                isDefaultForProduct: p
              }
            })
          : _.value === 'create' &&
            i &&
            (await h.createFirmwareDeploymentGroup({
              createFirmwareDeploymentGroupRequest: {
                productId: i,
                name: v ?? '',
                description: s ?? '',
                isDefaultForProduct: p
              }
            })),
          V.update()
      }
      return (n, i) => {
        const v = we,
          s = Ce,
          p = De,
          L = ye,
          C = ke,
          O = Be,
          R = Ve,
          G = Le,
          d = Pe,
          c = Se,
          A = Oe,
          z = he,
          M = Fe,
          j = $e,
          J = Re,
          Q = Ge,
          X = Ae,
          Y = ze,
          Z = Me,
          K = Ne,
          x = Te,
          ee = Ue,
          oe = te('tooltip')
        return (
          f(),
          D(
            y,
            null,
            [
              e(O, null, {
                default: o(() => [
                  e(C, null, {
                    default: o(() => [
                      e(
                        v,
                        { slot: 'start' },
                        { default: o(() => [t('List')]), _: 1 }
                      ),
                      e(
                        L,
                        { slot: 'end' },
                        {
                          default: o(() => [
                            e(
                              p,
                              {
                                color: 'medium',
                                onClick: i[0] || (i[0] = a => W())
                              },
                              {
                                default: o(() => [
                                  e(
                                    s,
                                    {
                                      slot: 'start',
                                      icon:
                                        'ioniconsReload' in n
                                          ? n.ioniconsReload
                                          : l(ae)
                                    },
                                    null,
                                    8,
                                    ['icon']
                                  ),
                                  t(' Reload ')
                                ]),
                                _: 1
                              }
                            ),
                            e(
                              p,
                              {
                                color: 'primary',
                                onClick: i[1] || (i[1] = a => F('create'))
                              },
                              {
                                default: o(() => [
                                  e(
                                    s,
                                    {
                                      slot: 'start',
                                      icon:
                                        'ioniconsAdd' in n
                                          ? n.ioniconsAdd
                                          : l(ie)
                                    },
                                    null,
                                    8,
                                    ['icon']
                                  ),
                                  t(' Create Deployment Group ')
                                ]),
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
              }),
              e(
                M,
                { expand: 'inset' },
                {
                  default: o(() => [
                    (f(!0),
                    D(
                      y,
                      null,
                      S(
                        [...l(B)].reverse(),
                        a => (
                          f(),
                          b(
                            z,
                            { value: a.id.toString() },
                            {
                              default: o(() => [
                                e(
                                  d,
                                  { slot: 'header', color: 'light' },
                                  {
                                    default: o(() => [
                                      e(
                                        R,
                                        null,
                                        {
                                          default: o(() => [t(m(a.name), 1)]),
                                          _: 2
                                        },
                                        1024
                                      ),
                                      Ye,
                                      e(
                                        G,
                                        {
                                          style: se(
                                            `--background: ${('getBgColor' in n
                                              ? n.getBgColor
                                              : l(Qe))(a.type.id)}`
                                          )
                                        },
                                        {
                                          default: o(() => [
                                            t(m(l(U)(a.type.name)), 1)
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['style']
                                      )
                                    ]),
                                    _: 2
                                  },
                                  1024
                                ),
                                k('div', Ze, [
                                  e(
                                    d,
                                    { lines: 'none', class: 'firmware-item' },
                                    {
                                      default: o(() => [
                                        e(
                                          s,
                                          {
                                            slot: 'start',
                                            color: 'medium',
                                            icon:
                                              'ioniconsPricetag' in n
                                                ? n.ioniconsPricetag
                                                : l(N)
                                          },
                                          null,
                                          8,
                                          ['icon']
                                        ),
                                        e(
                                          c,
                                          { class: 'firmware-label' },
                                          { default: o(() => [t('ID:')]), _: 1 }
                                        ),
                                        e(
                                          c,
                                          null,
                                          {
                                            default: o(() => [t(m(a.id), 1)]),
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
                                    d,
                                    { lines: 'none', class: 'firmware-item' },
                                    {
                                      default: o(() => [
                                        e(
                                          s,
                                          {
                                            slot: 'start',
                                            color: 'medium',
                                            icon:
                                              'ioniconsBarcode' in n
                                                ? n.ioniconsBarcode
                                                : l(re)
                                          },
                                          null,
                                          8,
                                          ['icon']
                                        ),
                                        e(
                                          c,
                                          { class: 'firmware-label' },
                                          {
                                            default: o(() => [
                                              t('Product Code:')
                                            ]),
                                            _: 1
                                          }
                                        ),
                                        e(
                                          A,
                                          null,
                                          {
                                            default: o(() => [
                                              t(m(a.productCode), 1)
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
                                    d,
                                    { lines: 'none', class: 'firmware-item' },
                                    {
                                      default: o(() => [
                                        e(
                                          s,
                                          {
                                            slot: 'start',
                                            color: 'medium',
                                            icon:
                                              'ioniconsCube' in n
                                                ? n.ioniconsCube
                                                : l(ue)
                                          },
                                          null,
                                          8,
                                          ['icon']
                                        ),
                                        e(
                                          c,
                                          { class: 'firmware-label' },
                                          {
                                            default: o(() => [t('Model:')]),
                                            _: 1
                                          }
                                        ),
                                        e(
                                          A,
                                          null,
                                          {
                                            default: o(() => [
                                              t(m(a.model), 1)
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
                                    d,
                                    { lines: 'none', class: 'firmware-item' },
                                    {
                                      default: o(() => [
                                        e(
                                          s,
                                          {
                                            slot: 'start',
                                            color: 'medium',
                                            icon:
                                              'ioniconsBuild' in n
                                                ? n.ioniconsBuild
                                                : l(de)
                                          },
                                          null,
                                          8,
                                          ['icon']
                                        ),
                                        e(
                                          c,
                                          { class: 'firmware-label' },
                                          {
                                            default: o(() => [
                                              t('Provision Mode:')
                                            ]),
                                            _: 1
                                          }
                                        ),
                                        e(
                                          c,
                                          null,
                                          {
                                            default: o(() => [
                                              t(m(a.provisionMode.name), 1)
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
                                  e(v, null, {
                                    default: o(() => [t('Deployment Groups')]),
                                    _: 1
                                  }),
                                  e(
                                    M,
                                    { expand: 'inset' },
                                    {
                                      default: o(() => [
                                        (f(!0),
                                        D(
                                          y,
                                          null,
                                          S(
                                            l(V)
                                              .filter(
                                                r => r.product.id === a.id
                                              )
                                              .sort(
                                                (r, g) => g.usage - r.usage
                                              ),
                                            r => (
                                              f(),
                                              b(
                                                z,
                                                { value: r.id.toString() },
                                                {
                                                  default: o(() => [
                                                    e(
                                                      d,
                                                      {
                                                        slot: 'header',
                                                        color: 'light'
                                                      },
                                                      {
                                                        default: o(() => [
                                                          e(
                                                            R,
                                                            null,
                                                            {
                                                              default: o(() => [
                                                                t(m(r.name), 1)
                                                              ]),
                                                              _: 2
                                                            },
                                                            1024
                                                          ),
                                                          Ke,
                                                          r.isDefaultForProduct
                                                            ? (f(),
                                                              b(
                                                                G,
                                                                {
                                                                  key: 0,
                                                                  color:
                                                                    'medium'
                                                                },
                                                                {
                                                                  default: o(
                                                                    () => [
                                                                      t(
                                                                        'DEFAULT'
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 1
                                                                }
                                                              ))
                                                            : T('', !0)
                                                        ]),
                                                        _: 2
                                                      },
                                                      1024
                                                    ),
                                                    k('div', xe, [
                                                      e(
                                                        d,
                                                        {
                                                          lines: 'none',
                                                          class: 'firmware-item'
                                                        },
                                                        {
                                                          default: o(() => [
                                                            e(
                                                              s,
                                                              {
                                                                slot: 'start',
                                                                color: 'medium',
                                                                icon:
                                                                  'ioniconsPricetag' in
                                                                  n
                                                                    ? n.ioniconsPricetag
                                                                    : l(N)
                                                              },
                                                              null,
                                                              8,
                                                              ['icon']
                                                            ),
                                                            e(
                                                              c,
                                                              {
                                                                class:
                                                                  'firmware-label'
                                                              },
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    t('ID:')
                                                                  ]
                                                                ),
                                                                _: 1
                                                              }
                                                            ),
                                                            e(
                                                              c,
                                                              null,
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    t(
                                                                      m(r.id),
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
                                                      ),
                                                      e(
                                                        d,
                                                        {
                                                          lines: 'none',
                                                          class: 'firmware-item'
                                                        },
                                                        {
                                                          default: o(() => [
                                                            e(
                                                              s,
                                                              {
                                                                slot: 'start',
                                                                color: 'medium',
                                                                icon:
                                                                  'ioniconsReader' in
                                                                  n
                                                                    ? n.ioniconsReader
                                                                    : l(ce)
                                                              },
                                                              null,
                                                              8,
                                                              ['icon']
                                                            ),
                                                            e(
                                                              c,
                                                              {
                                                                class:
                                                                  'firmware-label'
                                                              },
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    t(
                                                                      'Description:'
                                                                    )
                                                                  ]
                                                                ),
                                                                _: 1
                                                              }
                                                            ),
                                                            e(
                                                              c,
                                                              null,
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    t(
                                                                      m(
                                                                        r.description
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
                                                      ),
                                                      e(
                                                        d,
                                                        {
                                                          lines: 'none',
                                                          class: 'firmware-item'
                                                        },
                                                        {
                                                          default: o(() => [
                                                            e(
                                                              s,
                                                              {
                                                                slot: 'start',
                                                                color: 'medium',
                                                                icon:
                                                                  'ioniconsCalendar' in
                                                                  n
                                                                    ? n.ioniconsCalendar
                                                                    : l(me)
                                                              },
                                                              null,
                                                              8,
                                                              ['icon']
                                                            ),
                                                            e(
                                                              c,
                                                              {
                                                                class:
                                                                  'firmware-label'
                                                              },
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    t(
                                                                      'Created:'
                                                                    )
                                                                  ]
                                                                ),
                                                                _: 1
                                                              }
                                                            ),
                                                            e(
                                                              c,
                                                              null,
                                                              {
                                                                default: o(
                                                                  () => {
                                                                    var g
                                                                    return [
                                                                      t(
                                                                        m(
                                                                          (g =
                                                                            r.creationTimeStamp) ==
                                                                            null
                                                                            ? void 0
                                                                            : g.toLocaleString(
                                                                                'de'
                                                                              )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
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
                                                        d,
                                                        {
                                                          lines: 'none',
                                                          class: 'firmware-item'
                                                        },
                                                        {
                                                          default: o(() => [
                                                            e(
                                                              s,
                                                              {
                                                                slot: 'start',
                                                                color: 'medium',
                                                                icon:
                                                                  'ioniconsStatsChart' in
                                                                  n
                                                                    ? n.ioniconsStatsChart
                                                                    : l(pe)
                                                              },
                                                              null,
                                                              8,
                                                              ['icon']
                                                            ),
                                                            e(
                                                              c,
                                                              {
                                                                class:
                                                                  'firmware-label'
                                                              },
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    t('Usage:')
                                                                  ]
                                                                ),
                                                                _: 1
                                                              }
                                                            ),
                                                            fe(
                                                              (f(),
                                                              b(
                                                                c,
                                                                {
                                                                  class: 'link',
                                                                  onClick: g =>
                                                                    l(H).push(
                                                                      `/firmware/listDeploymentGroupDevices?id=${r.id}`
                                                                    )
                                                                },
                                                                {
                                                                  default: o(
                                                                    () => [
                                                                      t(
                                                                        m(
                                                                          ('pluralize' in
                                                                            n
                                                                            ? n.pluralize
                                                                            : l(
                                                                                Xe
                                                                              ))(
                                                                            r.usage,
                                                                            'device',
                                                                            !0,
                                                                            !0
                                                                          )
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                ['onClick']
                                                              )),
                                                              [
                                                                [
                                                                  oe,
                                                                  'List devices in this deployment group'
                                                                ]
                                                              ]
                                                            )
                                                          ]),
                                                          _: 2
                                                        },
                                                        1024
                                                      ),
                                                      e(
                                                        C,
                                                        null,
                                                        {
                                                          default: o(() => [
                                                            e(
                                                              L,
                                                              { slot: 'end' },
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    e(
                                                                      p,
                                                                      {
                                                                        color:
                                                                          'medium',
                                                                        'router-link': `/firmware/listDeploymentGroupDevices?id=${r.id}`
                                                                      },
                                                                      {
                                                                        default:
                                                                          o(
                                                                            () => [
                                                                              e(
                                                                                s,
                                                                                {
                                                                                  slot: 'start',
                                                                                  icon:
                                                                                    'ioniconsList' in
                                                                                    n
                                                                                      ? n.ioniconsList
                                                                                      : l(
                                                                                          _e
                                                                                        )
                                                                                },
                                                                                null,
                                                                                8,
                                                                                [
                                                                                  'icon'
                                                                                ]
                                                                              ),
                                                                              t(
                                                                                ' List Devices '
                                                                              )
                                                                            ]
                                                                          ),
                                                                        _: 2
                                                                      },
                                                                      1032,
                                                                      [
                                                                        'router-link'
                                                                      ]
                                                                    ),
                                                                    e(
                                                                      p,
                                                                      {
                                                                        color:
                                                                          'medium',
                                                                        onClick:
                                                                          g =>
                                                                            F(
                                                                              'edit',
                                                                              r
                                                                            )
                                                                      },
                                                                      {
                                                                        default:
                                                                          o(
                                                                            () => [
                                                                              e(
                                                                                s,
                                                                                {
                                                                                  slot: 'start',
                                                                                  icon:
                                                                                    'ioniconsPencil' in
                                                                                    n
                                                                                      ? n.ioniconsPencil
                                                                                      : l(
                                                                                          ve
                                                                                        )
                                                                                },
                                                                                null,
                                                                                8,
                                                                                [
                                                                                  'icon'
                                                                                ]
                                                                              ),
                                                                              t(
                                                                                ' Edit Deployment Group '
                                                                              )
                                                                            ]
                                                                          ),
                                                                        _: 2
                                                                      },
                                                                      1032,
                                                                      [
                                                                        'onClick'
                                                                      ]
                                                                    ),
                                                                    e(
                                                                      p,
                                                                      {
                                                                        color:
                                                                          'primary',
                                                                        'router-link': `/firmware/assignDeploymentGroup?id=${r.id}`
                                                                      },
                                                                      {
                                                                        default:
                                                                          o(
                                                                            () => [
                                                                              e(
                                                                                s,
                                                                                {
                                                                                  slot: 'start',
                                                                                  icon:
                                                                                    'ioniconsEnter' in
                                                                                    n
                                                                                      ? n.ioniconsEnter
                                                                                      : l(
                                                                                          ge
                                                                                        )
                                                                                },
                                                                                null,
                                                                                8,
                                                                                [
                                                                                  'icon'
                                                                                ]
                                                                              ),
                                                                              t(
                                                                                ' Assign to Deployment Group '
                                                                              )
                                                                            ]
                                                                          ),
                                                                        _: 2
                                                                      },
                                                                      1032,
                                                                      [
                                                                        'router-link'
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
                                                    ])
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
                                      _: 2
                                    },
                                    1024
                                  )
                                ])
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
                }
              ),
              e(
                ee,
                { 'is-open': l(w), onWillDismiss: i[8] || (i[8] = a => $()) },
                {
                  default: o(() => [
                    e(j, null, {
                      default: o(() => [
                        e(C, null, {
                          default: o(() => [
                            e(v, null, {
                              default: o(() => [
                                t(m(l(U)(l(_))) + ' Deployment Group', 1)
                              ]),
                              _: 1
                            }),
                            e(
                              p,
                              {
                                onClick: i[2] || (i[2] = a => $()),
                                slot: 'end',
                                fill: 'clear',
                                color: 'dark'
                              },
                              {
                                default: o(() => [
                                  e(
                                    s,
                                    {
                                      icon:
                                        'ioniconsClose' in n
                                          ? n.ioniconsClose
                                          : l(be),
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
                      K,
                      { class: 'ion-padding' },
                      {
                        default: o(() => [
                          l(_) === 'create'
                            ? (f(),
                              b(
                                d,
                                { key: 0 },
                                {
                                  default: o(() => [
                                    e(
                                      Q,
                                      {
                                        modelValue: l(u).productId,
                                        'onUpdate:modelValue':
                                          i[3] ||
                                          (i[3] = a => (l(u).productId = a)),
                                        placeholder:
                                          'Select the product you want to create a deployment group for',
                                        label: 'Product',
                                        'label-placement': 'stacked'
                                      },
                                      {
                                        default: o(() => [
                                          (f(!0),
                                          D(
                                            y,
                                            null,
                                            S(
                                              [...l(B)].reverse(),
                                              ({ id: a, name: r }) => (
                                                f(),
                                                b(
                                                  J,
                                                  { value: a },
                                                  {
                                                    default: o(() => [
                                                      t(m(r), 1)
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
                                }
                              ))
                            : T('', !0),
                          e(d, null, {
                            default: o(() => [
                              e(
                                X,
                                {
                                  label: 'Name',
                                  'label-placement': 'stacked',
                                  type: 'text',
                                  placeholder: 'Name of the deployment group',
                                  modelValue: l(u).name,
                                  'onUpdate:modelValue':
                                    i[4] || (i[4] = a => (l(u).name = a))
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          e(d, null, {
                            default: o(() => [
                              e(
                                Y,
                                {
                                  label: 'Description',
                                  'label-placement': 'stacked',
                                  placeholder:
                                    'Description of the use case for this deployment group',
                                  'auto-grow': !0,
                                  modelValue: l(u).description,
                                  'onUpdate:modelValue':
                                    i[5] || (i[5] = a => (l(u).description = a))
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }),
                          e(d, null, {
                            default: o(() => [
                              e(
                                Z,
                                {
                                  modelValue: l(u).isDefaultForProduct,
                                  'onUpdate:modelValue':
                                    i[6] ||
                                    (i[6] = a => (l(u).isDefaultForProduct = a))
                                },
                                {
                                  default: o(() => [
                                    t('Is default for product')
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }
                    ),
                    e(x, null, {
                      default: o(() => [
                        e(C, null, {
                          default: o(() => [
                            e(
                              L,
                              { slot: 'end' },
                              {
                                default: o(() => [
                                  e(
                                    p,
                                    {
                                      onClick: i[7] || (i[7] = a => q()),
                                      color: 'primary',
                                      disabled:
                                        (l(_) === 'create' &&
                                          l(u).productId === void 0) ||
                                        !l(u).name ||
                                        !l(u).description
                                    },
                                    {
                                      default: o(() => [
                                        e(
                                          s,
                                          {
                                            slot: 'start',
                                            icon:
                                              'ioniconsCheckmark' in n
                                                ? n.ioniconsCheckmark
                                                : l(Ie)
                                          },
                                          null,
                                          8,
                                          ['icon']
                                        ),
                                        t(' Confirm ')
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['disabled']
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
  io = qe(eo, [['__scopeId', 'data-v-11eb81c9']])
export { io as default }
