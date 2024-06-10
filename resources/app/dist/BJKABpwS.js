import {
  c5 as i,
  cw as g,
  c4 as f,
  cY as A,
  cZ as h,
  c7 as l,
  cc as m
} from './0fV2q4Ox.js'
import { g as U } from './BYx_WZxC.js'
function w (e) {
  return Object.entries(e).map(([s, t]) => ({ Name: s, Value: t }))
}
function C (e) {
  const s = {}
  return (
    e == null ||
      e.forEach(t => {
        t.Name && (s[t.Name] = t.Value)
      }),
    s
  )
}
const T = async e => {
  var a, u
  const s = (a = e.getConfig().Auth) == null ? void 0 : a.Cognito
  i(s)
  const t = await e.Auth.getTokens({ forceRefresh: !1 })
  g(t)
  const { 'cognito:username': r, sub: n } =
      ((u = t.idToken) == null ? void 0 : u.payload) ?? {},
    o = { username: r, userId: n },
    c = I(t)
  return c && (o.signInDetails = c), o
}
function I (e) {
  return e == null ? void 0 : e.signInDetails
}
const y = async () => T(f),
  d = async e => {
    var n
    const s = (n = e.getConfig().Auth) == null ? void 0 : n.Cognito
    i(s)
    const { tokens: t } = await A(e, { forceRefresh: !1 })
    g(t)
    const { UserAttributes: r } = await h(
      { region: l(s.userPoolId), userAgentValue: U(m.FetchUserAttributes) },
      { AccessToken: t.accessToken.toString() }
    )
    return C(r)
  },
  D = () => d(f)
export { D as f, y as g, w as t }
