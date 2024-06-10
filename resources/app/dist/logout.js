import { bV as a, t as e, L as s, A as c, B as _, a4 as r } from './0fV2q4Ox.js'
import { s as u } from './BYx_WZxC.js'
const i = {
    __name: 'logout',
    setup (p) {
      const t = a(),
        o = async () => {
          await u(), await t.replace('/login')
        }
      return (l, m) => {
        const n = r
        return (
          e(), s(n, { onClick: o }, { default: c(() => [_('LOGOUT')]), _: 1 })
        )
      }
    }
  },
  g = i
export { g as _ }
