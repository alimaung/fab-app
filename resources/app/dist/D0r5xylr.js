import { bh as c, dC as f, bc as h, T as y, bL as p } from './0fV2q4Ox.js'
async function E (e) {
  await new Promise(r => setTimeout(r, e))
}
function C (e) {
  if ('version' in e) {
    const { version: r, erpMaterialNumber: t, creationTimeStamp: n } = e,
      i = (typeof n == 'string' ? new Date(n) : n).toLocaleDateString()
    return `v${r} ERP:${t ?? 'N/A'} [${i}]`
  }
  return 'No variants found'
}
function m (e) {
  if (e.length === 0) throw new Error('No QR Code provided')
  if (((e = w(e)), e.length === 47))
    return {
      identifierType: 'ProductSerial',
      identifierValues: [e.slice(0, 14)]
    }
  if (e.length === 14)
    return { identifierType: 'ProductSerial', identifierValues: [e] }
  if (e.startsWith('SN'))
    return {
      identifierType: 'ProductSerial',
      identifierValues: [e.substring(2)]
    }
  if (e.startsWith('WIFI')) {
    const t = /S:(.+?);/g.exec(e)
    if (t != null)
      return {
        identifierType: 'ProductSerial',
        identifierValues: [t[1].substring(2)]
      }
  }
  return { identifierType: 'DataMatrixCode', identifierValues: [e] }
}
function N (e) {
  const { identifierType: r, identifierValues: t } = m(e)
  return r === 'ProductSerial' ? t[0] : e
}
function W (e) {
  const { identifierType: r, identifierValues: t } = m(e)
  return r === 'ProductSerial'
    ? { id: -1, code: t[0], type: f.PRODUCT_SERIAL }
    : e.startsWith('LB')
    ? { code: e, id: parseInt(e.slice(2)), type: f.LOGISTICS_BOX_ID }
    : { id: -1, code: t[0], type: f.UNKNOWN }
}
function w (e) {
  return ['ß', 'Ö', '/', '>'].some(t => e.includes(t)) && (e = S(e)), e.trim()
}
function b (
  { productSerial: e, additionalAttributes: r, deviceHash: t },
  n = p.WIFI
) {
  switch (n) {
    case p.WIFI: {
      const s = 'SN' + e,
        i = r == null ? void 0 : r.wifiPassword
      return `WIFI:T:WPA;S:${s};P:${i};;`
    }
    case p.STANDARD:
      return `${e}-${t ?? '00000000000000000000000000000000'}`
    default:
      throw new Error('Unknown QR code type')
  }
}
function S (e) {
  const r = {
    Z: 'Y',
    Y: 'Z',
    Ö: ':',
    ö: ';',
    ß: '-',
    '/': '-',
    '>': ':',
    '<': ';'
  }
  let t = ''
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    t += r[s] ?? s
  }
  return t
}
function $ (e) {
  return e === c.UNKNOWN ? h.flash.esp32c3 : h.flash[e]
}
function L (e) {
  return [c.ESP32_C3, c.ESP32_S3].includes(e)
}
function R (e) {
  switch (`${e == null ? void 0 : e.product.model}`) {
    case 'IGB':
      return c.ESP32_C3
    case 'IG':
      return c.ESP32_S3
    case 'PS-350':
    case 'PSB-350':
      return c.MICROCHIP
    default:
      return c.UNKNOWN
  }
}
function U (e) {
  return `${e == null ? void 0 : e.product.model}-${
    e == null ? void 0 : e.product.variant.version
  }`
}
function B (e) {
  if (e < 1 || e > 26)
    throw new Error('Input must be a number between 1 and 26')
  return String.fromCharCode(96 + e)
}
async function x (e) {
  var i
  const t = e instanceof y ? await e.response.json() : null,
    n = ((i = t == null ? void 0 : t.meta) == null ? void 0 : i.code) ?? -1
  return {
    msg:
      t !== null
        ? t.data.message
        : e instanceof Error
        ? e.message
        : typeof e == 'string'
        ? e
        : 'Unknown error',
    code: n
  }
}
async function D (e, r, t, n) {
  await new Promise((s, i) => {
    const o = new XMLHttpRequest()
    ;(o.upload.onprogress = a => {
      a.lengthComputable && n(a.loaded / a.total)
    }),
      (o.onload = () => {
        o.status === 200 ? s() : i(new Error(`Upload failed: ${o.status}`))
      }),
      (o.onerror = () => {
        i(new Error('XMLHttpRequest error'))
      }),
      o.open('PUT', t, !0),
      o.setRequestHeader('Content-Type', r ?? e.type),
      o.send(e)
  })
}
const d = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
  g = e => {
    const r = d.length
    let t = 0
    for (let n = 0; n < e.length; ++n) {
      const s = e[n],
        i = d.indexOf(s)
      if (i === -1) throw new Error('Invalid character in input')
      t = t * r + i
    }
    return t
  }
function O (e) {
  return { pc: g(e.slice(0, 6)), sn: g(e.slice(6, 14)) }
}
function M (e) {
  return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
}
function V (e) {
  return /^v(0|[1-9]\d*)\.(0|[1-9]\d*)(\.(0|[1-9]\d*))?(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/.test(
    e
  )
}
function T (e, r) {
  const t = { ...e }
  for (const n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      const s = e[n],
        i = s == null,
        o = Array.isArray(t[n]) && Array.isArray(r[n])
      if (i) t[n] = r[n]
      else if (o) {
        const a = t[n]
        for (let l = 0; l < a.length; l++) a[l] = T(a[l], r[n][0])
      }
    }
  return t
}
const Q = e => {
  window.electronAPI.copyToClipboard(e)
}
function A (e) {
  if (e.length % 2 !== 0) throw new Error('Hex string must have an even length')
  const r = e.length / 2,
    t = new Uint8Array(r)
  for (let n = 0; n < r; n++) {
    const s = parseInt(e.substr(n * 2, 2), 16)
    if (Number.isNaN(s))
      throw new Error('Hex string contains invalid characters')
    t[n] = s
  }
  return t
}
function Z (e) {
  const n = e.replaceAll(' ', '').replaceAll('0x', '').replaceAll(',', '')
  return A(n)
}
function k (e) {
  if (e == null || e.length === 0) throw new Error('No com port specified')
  return e
}
function z (e) {
  return e.startsWith('IG')
    ? '📻'
    : e.startsWith('PS')
    ? '⚡'
    : e.startsWith('PM')
    ? '🔌'
    : e.startsWith('BB')
    ? '🔋'
    : e.startsWith('CW')
    ? '🚗'
    : '📦'
}
const u = [
  '#ea580c',
  '#2563eb',
  '#65a30d',
  '#c026d3',
  '#ca8a04',
  '#7c3aed',
  '#059669',
  '#db2777',
  '#0891b2'
]
function F (e) {
  let r = parseInt(e)
  return (
    typeof e == 'string' &&
      (r = e
        .split('')
        .map(t => t.charCodeAt(0))
        .reduce((t, n) => t + n, 0)),
    u[r % u.length]
  )
}
function H (e) {
  return typeof e == 'number' || e.length < 4
    ? e.toString()
    : e
        .replace('kWh', 'kwh')
        .replace(/([A-Z0-9])/g, ' $1')
        .trim()
        .toLowerCase()
        .split(' ')
        .map(t =>
          t === 'on'
            ? 'On'
            : t === 'kwh'
            ? 'kWh'
            : ['and', 'in', 'up', 'ms', 'until'].includes(t)
            ? t
            : t.length < 3
            ? t.toUpperCase()
            : t.charAt(0).toUpperCase() + t.slice(1)
        )
        .join(' ')
}
function I (e) {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
function _ (e, r, t = !0, n = !1) {
  const s = e ?? 0
  return `${t ? (n ? I(s) + ' ' : s + ' ') : ''}${r}${s !== 1 ? 's' : ''}`
}
let P = 0
function G () {
  return P++
}
function j (e) {
  switch (!0) {
    case e === 'info':
      return '#334155'
    case e === 'error':
      return '#dc2626'
    case e.startsWith('COM') && e.length > 3:
      return u[parseInt(e.slice(3) ?? 0) % u.length]
    default:
      return u[
        e
          .split('')
          .map(r => r.charCodeAt(0))
          .reduce((r, t) => r + t, 0) % u.length
      ]
  }
}
function K (e) {
  return new TextDecoder('utf-8').decode(e)
}
function X (e, r, t = !1) {
  let n = Math.random() * (r - e) + e
  return t && (n = Math.round(n)), n
}
export {
  B as A,
  W as B,
  U as C,
  G as D,
  _ as a,
  w as b,
  M as c,
  R as d,
  L as e,
  C as f,
  m as g,
  A as h,
  V as i,
  b as j,
  $ as k,
  z as l,
  T as m,
  Z as n,
  F as o,
  x as p,
  O as q,
  X as r,
  j as s,
  K as t,
  D as u,
  H as v,
  E as w,
  Q as x,
  k as y,
  N as z
}
