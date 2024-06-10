import {
  bZ as yr,
  b_ as pl,
  b$ as hl,
  c0 as ns,
  c1 as ve,
  c2 as pn,
  c3 as ml,
  c4 as we,
  c5 as _e,
  c6 as gl,
  c7 as oe,
  c8 as vr,
  c9 as yl,
  ca as vl,
  cb as _l,
  cc as Z,
  cd as Xe,
  ce as be,
  cf as _r,
  cg as rs,
  ch as er,
  ci as ct,
  cj as Sl,
  ck as hn,
  cl as tr,
  cm as El,
  cn as wl,
  co as En,
  cp as os,
  cq as nr,
  cr as bl,
  cs as Il,
  ct as Cl,
  cu as Al,
  cv as xl,
  U as is,
  cw as as,
  cx as Nl,
  cy as Pe,
  cz as Tl,
  cA as ss,
  cB as cs,
  cC as ls,
  cD as Rl,
  cE as Pl,
  bV as us,
  o as Sr,
  cF as jt,
  cG as Ul,
  cH as Qr,
  cI as Ml,
  d as ee,
  cJ as ae,
  r as ye,
  cK as Fl,
  c as L,
  t as P,
  v as ie,
  N as h,
  cL as Me,
  x as j,
  aB as x,
  L as q,
  A as _,
  z as b,
  O as G,
  R as vt,
  cM as Ct,
  aS as me,
  B,
  y as D,
  cN as ce,
  cO as le,
  cP as ds,
  Q as Er,
  cQ as Ol,
  cR as fs,
  cS as Dl,
  cT as kl,
  aQ as Ke,
  cU as Oo,
  cV as Bl,
  P as Ll,
  cW as xi,
  K as jl,
  g as Fn,
  cX as $l,
  M as Vl,
  X as Hl,
  Y as ql,
  Z as Wl,
  ac as zl
} from './0fV2q4Ox.js'
import { g as wn, t as Ni, f as ps } from './BJKABpwS.js'
import { g as ue, a as hs, o as Gl, s as Kl } from './BYx_WZxC.js'
const Yl = new yr('I18n')
let Jl = class {
  constructor () {
    ;(this._options = null), (this._lang = null), (this._dict = {})
  }
  setDefaultLanguage () {
    !this._lang &&
      typeof window < 'u' &&
      window &&
      window.navigator &&
      (this._lang = window.navigator.language),
      Yl.debug(this._lang)
  }
  setLanguage (t) {
    this._lang = t
  }
  get (t, n = void 0) {
    if ((this.setDefaultLanguage(), !this._lang)) return typeof n < 'u' ? n : t
    const r = this._lang
    let o = this.getByLanguage(t, r)
    return o ||
      (r.indexOf('-') > 0 && (o = this.getByLanguage(t, r.split('-')[0])), o)
      ? o
      : typeof n < 'u'
      ? n
      : t
  }
  getByLanguage (t, n, r = null) {
    if (!n) return r
    const o = this._dict[n]
    return o ? o[t] : r
  }
  putVocabulariesForLanguage (t, n) {
    let r = this._dict[t]
    r || (r = this._dict[t] = {}), (this._dict[t] = { ...r, ...n })
  }
  putVocabularies (t) {
    Object.keys(t).forEach(n => {
      this.putVocabulariesForLanguage(n, t[n])
    })
  }
}
var gt
;(function (e) {
  e.NotConfigured = 'NotConfigured'
})(gt || (gt = {}))
const Zl = { [gt.NotConfigured]: { message: 'i18n is not configured.' } },
  On = pl(Zl),
  Ti = new yr('I18n')
let Dn = { language: null },
  ke = null
class Je {
  static configure (t) {
    return (
      Ti.debug('configure I18n'),
      t && ((Dn = Object.assign({}, Dn, t.I18n || t)), Je.createInstance()),
      Dn
    )
  }
  static getModuleName () {
    return 'I18n'
  }
  static createInstance () {
    Ti.debug('create I18n instance'), !ke && (ke = new Jl())
  }
  static setLanguage (t) {
    Je.checkConfig(), On(!!ke, gt.NotConfigured), ke.setLanguage(t)
  }
  static get (t, n) {
    return Je.checkConfig()
      ? (On(!!ke, gt.NotConfigured), ke.get(t, n))
      : typeof n > 'u'
      ? t
      : n
  }
  static putVocabulariesForLanguage (t, n) {
    Je.checkConfig(),
      On(!!ke, gt.NotConfigured),
      ke.putVocabulariesForLanguage(t, n)
  }
  static putVocabularies (t) {
    Je.checkConfig(), On(!!ke, gt.NotConfigured), ke.putVocabularies(t)
  }
  static checkConfig () {
    return ke || Je.createInstance(), !0
  }
}
Je.createInstance()
const Ql = e => {
  const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let n = ''
  for (let r = 0; r < e; r++)
    n += t.charAt(Math.floor(Math.random() * t.length))
  return n
}
function Xl (e) {
  return (e.match(/.{2}/g) || [])
    .map(n => String.fromCharCode(parseInt(n, 16)))
    .join('')
}
function eu (e) {
  return e
    .split('')
    .map(t => t.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('')
}
const tu = async () => {
  const { userAgentData: e } = navigator
  if (!e) return navigator.userAgent
  const {
      platform: t = '',
      platformVersion: n = '',
      model: r = '',
      architecture: o = '',
      fullVersionList: i = []
    } = await e.getHighEntropyValues([
      'platform',
      'platformVersion',
      'architecture',
      'model',
      'fullVersionList'
    ]),
    a = i.map(c => `${c.brand}/${c.version}`).join(';')
  return [t, n, o, r, t, a].filter(c => c).join(' ')
}
function nu (e) {
  return Array.from(e, t => String.fromCodePoint(t)).join('')
}
const mn = {
  convert (e, { urlSafe: t } = { urlSafe: !1 }) {
    const n = typeof e == 'string' ? e : nu(e),
      r = hl()(n)
    return t ? r.replace(/\+/g, '-').replace(/\//g, '_') : r
  }
}
function ru () {
  return ns().getRandomValues(new Uint32Array(1))[0]
}
function ou (e) {
  const { words: t } = e,
    { sigBytes: n } = e,
    r = []
  for (let o = 0; o < n; o++) {
    const i = (t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255
    r.push((i >>> 4).toString(16)), r.push((i & 15).toString(16))
  }
  return r.join('')
}
class Do {
  constructor (t, n) {
    this.words = []
    let r = t
    ;(r = this.words = r || []),
      n !== void 0 ? (this.sigBytes = n) : (this.sigBytes = r.length * 4)
  }
  random (t) {
    const n = []
    for (let r = 0; r < t; r += 4) n.push(ru())
    return new Do(n, t)
  }
  toString () {
    return ou(this)
  }
}
var H
;(function (e) {
  ;(e.EmptySignInUsername = 'EmptySignInUsername'),
    (e.EmptySignInPassword = 'EmptySignInPassword'),
    (e.CustomAuthSignInPassword = 'CustomAuthSignInPassword'),
    (e.EmptySignUpUsername = 'EmptySignUpUsername'),
    (e.EmptySignUpPassword = 'EmptySignUpPassword'),
    (e.EmptyConfirmSignUpUsername = 'EmptyConfirmSignUpUsername'),
    (e.EmptyConfirmSignUpCode = 'EmptyConfirmSignUpCode'),
    (e.EmptyResendSignUpCodeUsername = 'EmptyresendSignUpCodeUsername'),
    (e.EmptyChallengeResponse = 'EmptyChallengeResponse'),
    (e.EmptyConfirmResetPasswordUsername = 'EmptyConfirmResetPasswordUsername'),
    (e.EmptyConfirmResetPasswordNewPassword =
      'EmptyConfirmResetPasswordNewPassword'),
    (e.EmptyConfirmResetPasswordConfirmationCode =
      'EmptyConfirmResetPasswordConfirmationCode'),
    (e.EmptyResetPasswordUsername = 'EmptyResetPasswordUsername'),
    (e.EmptyVerifyTOTPSetupCode = 'EmptyVerifyTOTPSetupCode'),
    (e.EmptyConfirmUserAttributeCode = 'EmptyConfirmUserAttributeCode'),
    (e.IncorrectMFAMethod = 'IncorrectMFAMethod'),
    (e.EmptyUpdatePassword = 'EmptyUpdatePassword')
})(H || (H = {}))
const iu = {
  [H.EmptyChallengeResponse]: {
    message: 'challengeResponse is required to confirmSignIn'
  },
  [H.EmptyConfirmResetPasswordUsername]: {
    message: 'username is required to confirmResetPassword'
  },
  [H.EmptyConfirmSignUpCode]: { message: 'code is required to confirmSignUp' },
  [H.EmptyConfirmSignUpUsername]: {
    message: 'username is required to confirmSignUp'
  },
  [H.EmptyConfirmResetPasswordConfirmationCode]: {
    message: 'confirmationCode is required to confirmResetPassword'
  },
  [H.EmptyConfirmResetPasswordNewPassword]: {
    message: 'newPassword is required to confirmResetPassword'
  },
  [H.EmptyResendSignUpCodeUsername]: {
    message: 'username is required to confirmSignUp'
  },
  [H.EmptyResetPasswordUsername]: {
    message: 'username is required to resetPassword'
  },
  [H.EmptySignInPassword]: { message: 'password is required to signIn' },
  [H.EmptySignInUsername]: { message: 'username is required to signIn' },
  [H.EmptySignUpPassword]: { message: 'password is required to signUp' },
  [H.EmptySignUpUsername]: { message: 'username is required to signUp' },
  [H.CustomAuthSignInPassword]: {
    message: 'A password is not needed when signing in with CUSTOM_WITHOUT_SRP',
    recoverySuggestion: 'Do not include a password in your signIn call.'
  },
  [H.IncorrectMFAMethod]: {
    message: 'Incorrect MFA method was chosen. It should be either SMS or TOTP',
    recoverySuggestion: 'Try to pass TOTP or SMS as the challengeResponse'
  },
  [H.EmptyVerifyTOTPSetupCode]: {
    message: 'code is required to verifyTotpSetup'
  },
  [H.EmptyUpdatePassword]: {
    message: 'oldPassword and newPassword are required to changePassword'
  },
  [H.EmptyConfirmUserAttributeCode]: {
    message: 'confirmation code is required to confirmUserAttribute'
  }
}
var pe
;(function (e) {
  ;(e.DEFAULT_MSG = 'Authentication Error'),
    (e.EMPTY_EMAIL = 'Email cannot be empty'),
    (e.EMPTY_PHONE = 'Phone number cannot be empty'),
    (e.EMPTY_USERNAME = 'Username cannot be empty'),
    (e.INVALID_USERNAME =
      'The username should either be a string or one of the sign in types'),
    (e.EMPTY_PASSWORD = 'Password cannot be empty'),
    (e.EMPTY_CODE = 'Confirmation code cannot be empty'),
    (e.SIGN_UP_ERROR = 'Error creating account'),
    (e.NO_MFA = 'No valid MFA method provided'),
    (e.INVALID_MFA = 'Invalid MFA type'),
    (e.EMPTY_CHALLENGE = 'Challenge response cannot be empty'),
    (e.NO_USER_SESSION = 'Failed to get the session because the user is empty'),
    (e.NETWORK_ERROR = 'Network Error'),
    (e.DEVICE_CONFIG =
      'Device tracking has not been configured in this User Pool'),
    (e.AUTOSIGNIN_ERROR = 'Please use your credentials to sign in'),
    (e.OAUTH_ERROR =
      "Couldn't finish OAuth flow, check your User Pool HostedUI settings")
})(pe || (pe = {}))
var _t
;(function (e) {
  ;(e.SignInException = 'SignInException'),
    (e.OAuthSignInError = 'OAuthSignInException')
})(_t || (_t = {}))
function se (e, t) {
  const { message: n, recoverySuggestion: r } = iu[t]
  if (!e) throw new ve({ name: t, message: n, recoverySuggestion: r })
}
var Ri
;(function (e) {
  ;(e.ConcurrentModificationException = 'ConcurrentModificationException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.SoftwareTokenMFANotFoundException = 'SoftwareTokenMFANotFoundException')
})(Ri || (Ri = {}))
var Pi
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidPasswordException = 'InvalidPasswordException'),
    (e.LimitExceededException = 'LimitExceededException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Pi || (Pi = {}))
var Ui
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidPasswordException = 'InvalidPasswordException'),
    (e.InvalidUserPoolConfigurationException =
      'InvalidUserPoolConfigurationException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UsernameExistsException = 'UsernameExistsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Ui || (Ui = {}))
var Mi
;(function (e) {
  ;(e.CodeMismatchException = 'CodeMismatchException'),
    (e.ExpiredCodeException = 'ExpiredCodeException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidPasswordException = 'InvalidPasswordException'),
    (e.LimitExceededException = 'LimitExceededException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyFailedAttemptsException = 'TooManyFailedAttemptsException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Mi || (Mi = {}))
var Fi
;(function (e) {
  ;(e.AliasExistsException = 'AliasExistsException'),
    (e.CodeMismatchException = 'CodeMismatchException'),
    (e.ExpiredCodeException = 'ExpiredCodeException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.LimitExceededException = 'LimitExceededException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyFailedAttemptsException = 'TooManyFailedAttemptsException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Fi || (Fi = {}))
var Oi
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Oi || (Oi = {}))
var Di
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Di || (Di = {}))
var ki
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidUserPoolConfigurationException =
      'InvalidUserPoolConfigurationException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(ki || (ki = {}))
var Bi
;(function (e) {
  ;(e.CodeDeliveryFailureException = 'CodeDeliveryFailureException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidEmailRoleAccessPolicyException =
      'InvalidEmailRoleAccessPolicyException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidSmsRoleAccessPolicyException =
      'InvalidSmsRoleAccessPolicyException'),
    (e.InvalidSmsRoleTrustRelationshipException =
      'InvalidSmsRoleTrustRelationshipException'),
    (e.LimitExceededException = 'LimitExceededException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Bi || (Bi = {}))
var Li
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Li || (Li = {}))
var ji
;(function (e) {
  ;(e.ExternalServiceException = 'ExternalServiceException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.LimitExceededException = 'LimitExceededException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceConflictException = 'ResourceConflictException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException')
})(ji || (ji = {}))
var $i
;(function (e) {
  ;(e.ExternalServiceException = 'ExternalServiceException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidIdentityPoolConfigurationException =
      'InvalidIdentityPoolConfigurationException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceConflictException = 'ResourceConflictException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException')
})($i || ($i = {}))
var Vi
;(function (e) {
  ;(e.CodeDeliveryFailureException = 'CodeDeliveryFailureException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidEmailRoleAccessPolicyException =
      'InvalidEmailRoleAccessPolicyException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidSmsRoleAccessPolicyException =
      'InvalidSmsRoleAccessPolicyException'),
    (e.InvalidSmsRoleTrustRelationshipException =
      'InvalidSmsRoleTrustRelationshipException'),
    (e.LimitExceededException = 'LimitExceededException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Vi || (Vi = {}))
var Hi
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException')
})(Hi || (Hi = {}))
var rr
;(function (e) {
  ;(e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidSmsRoleAccessPolicyException =
      'InvalidSmsRoleAccessPolicyException'),
    (e.InvalidSmsRoleTrustRelationshipException =
      'InvalidSmsRoleTrustRelationshipException'),
    (e.InvalidUserPoolConfigurationException =
      'InvalidUserPoolConfigurationException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(rr || (rr = {}))
var qi
;(function (e) {
  ;(e.CodeDeliveryFailureException = 'CodeDeliveryFailureException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidEmailRoleAccessPolicyException =
      'InvalidEmailRoleAccessPolicyException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidSmsRoleAccessPolicyException =
      'InvalidSmsRoleAccessPolicyException'),
    (e.InvalidSmsRoleTrustRelationshipException =
      'InvalidSmsRoleTrustRelationshipException'),
    (e.LimitExceededException = 'LimitExceededException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(qi || (qi = {}))
var Wi
;(function (e) {
  ;(e.AliasExistsException = 'AliasExistsException'),
    (e.CodeMismatchException = 'CodeMismatchException'),
    (e.ExpiredCodeException = 'ExpiredCodeException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidPasswordException = 'InvalidPasswordException'),
    (e.InvalidSmsRoleAccessPolicyException =
      'InvalidSmsRoleAccessPolicyException'),
    (e.InvalidSmsRoleTrustRelationshipException =
      'InvalidSmsRoleTrustRelationshipException'),
    (e.InvalidUserPoolConfigurationException =
      'InvalidUserPoolConfigurationException'),
    (e.MFAMethodNotFoundException = 'MFAMethodNotFoundException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.SoftwareTokenMFANotFoundException = 'SoftwareTokenMFANotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Wi || (Wi = {}))
var zi
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(zi || (zi = {}))
var Gi
;(function (e) {
  ;(e.CodeDeliveryFailureException = 'CodeDeliveryFailureException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidEmailRoleAccessPolicyException =
      'InvalidEmailRoleAccessPolicyException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidPasswordException = 'InvalidPasswordException'),
    (e.InvalidSmsRoleAccessPolicyException =
      'InvalidSmsRoleAccessPolicyException'),
    (e.InvalidSmsRoleTrustRelationshipException =
      'InvalidSmsRoleTrustRelationshipException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UsernameExistsException = 'UsernameExistsException')
})(Gi || (Gi = {}))
var Ki
;(function (e) {
  ;(e.AliasExistsException = 'AliasExistsException'),
    (e.CodeDeliveryFailureException = 'CodeDeliveryFailureException'),
    (e.CodeMismatchException = 'CodeMismatchException'),
    (e.ExpiredCodeException = 'ExpiredCodeException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidEmailRoleAccessPolicyException =
      'InvalidEmailRoleAccessPolicyException'),
    (e.InvalidLambdaResponseException = 'InvalidLambdaResponseException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidSmsRoleAccessPolicyException =
      'InvalidSmsRoleAccessPolicyException'),
    (e.InvalidSmsRoleTrustRelationshipException =
      'InvalidSmsRoleTrustRelationshipException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UnexpectedLambdaException = 'UnexpectedLambdaException'),
    (e.UserLambdaValidationException = 'UserLambdaValidationException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Ki || (Ki = {}))
var Yi
;(function (e) {
  ;(e.CodeMismatchException = 'CodeMismatchException'),
    (e.EnableSoftwareTokenMFAException = 'EnableSoftwareTokenMFAException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidUserPoolConfigurationException =
      'InvalidUserPoolConfigurationException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.SoftwareTokenMFANotFoundException = 'SoftwareTokenMFANotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Yi || (Yi = {}))
var Ji
;(function (e) {
  ;(e.AliasExistsException = 'AliasExistsException'),
    (e.CodeMismatchException = 'CodeMismatchException'),
    (e.ExpiredCodeException = 'ExpiredCodeException'),
    (e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.LimitExceededException = 'LimitExceededException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Ji || (Ji = {}))
var Zi
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidUserPoolConfigurationException =
      'InvalidUserPoolConfigurationException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Zi || (Zi = {}))
var Qi
;(function (e) {
  ;(e.ForbiddenException = 'ForbiddenException'),
    (e.InternalErrorException = 'InternalErrorException'),
    (e.InvalidParameterException = 'InvalidParameterException'),
    (e.InvalidUserPoolConfigurationException =
      'InvalidUserPoolConfigurationException'),
    (e.NotAuthorizedException = 'NotAuthorizedException'),
    (e.PasswordResetRequiredException = 'PasswordResetRequiredException'),
    (e.ResourceNotFoundException = 'ResourceNotFoundException'),
    (e.TooManyRequestsException = 'TooManyRequestsException'),
    (e.UserNotConfirmedException = 'UserNotConfirmedException'),
    (e.UserNotFoundException = 'UserNotFoundException')
})(Qi || (Qi = {}))
const au = (e, t) => {
  switch (t.type) {
    case 'SET_SIGN_IN_SESSION':
      return { ...e, signInSession: t.value }
    case 'SET_SIGN_IN_STATE':
      return { ...t.value }
    case 'SET_CHALLENGE_NAME':
      return { ...e, challengeName: t.value }
    case 'SET_USERNAME':
      return { ...e, username: t.value }
    case 'SET_INITIAL_STATE':
      return ms()
    default:
      return e
  }
}
function ms () {
  return { username: void 0, challengeName: void 0, signInSession: void 0 }
}
const su = e => {
    let t = e(ms(), { type: 'SET_INITIAL_STATE' })
    return {
      getState: () => t,
      dispatch: n => {
        t = e(t, n)
      }
    }
  },
  lt = su(au)
function bn (e) {
  lt.dispatch({ type: 'SET_SIGN_IN_STATE', value: e })
}
function Qe () {
  lt.dispatch({ type: 'SET_INITIAL_STATE' })
}
const Kn = {
  convert (e) {
    return new TextEncoder().encode(e)
  }
}
function T (e, t) {
  e != null && this.fromString(e, t)
}
function Ee () {
  return new T(null, null)
}
let st
const cu = 0xdeadbeefcafe,
  Xi = (cu & 16777215) === 15715070
function lu (e, t, n, r, o, i) {
  for (; --i >= 0; ) {
    const a = t * this[e++] + n[r] + o
    ;(o = Math.floor(a / 67108864)), (n[r++] = a & 67108863)
  }
  return o
}
function uu (e, t, n, r, o, i) {
  const a = t & 32767,
    s = t >> 15
  for (; --i >= 0; ) {
    let c = this[e] & 32767
    const l = this[e++] >> 15,
      u = s * c + l * a
    ;(c = a * c + ((u & 32767) << 15) + n[r] + (o & 1073741823)),
      (o = (c >>> 30) + (u >>> 15) + s * l + (o >>> 30)),
      (n[r++] = c & 1073741823)
  }
  return o
}
function du (e, t, n, r, o, i) {
  const a = t & 16383,
    s = t >> 14
  for (; --i >= 0; ) {
    let c = this[e] & 16383
    const l = this[e++] >> 14,
      u = s * c + l * a
    ;(c = a * c + ((u & 16383) << 14) + n[r] + o),
      (o = (c >> 28) + (u >> 14) + s * l),
      (n[r++] = c & 268435455)
  }
  return o
}
const ea = typeof navigator < 'u'
ea && Xi && navigator.appName === 'Microsoft Internet Explorer'
  ? ((T.prototype.am = uu), (st = 30))
  : ea && Xi && navigator.appName !== 'Netscape'
  ? ((T.prototype.am = lu), (st = 26))
  : ((T.prototype.am = du), (st = 28))
T.prototype.DB = st
T.prototype.DM = (1 << st) - 1
T.prototype.DV = 1 << st
const ko = 52
T.prototype.FV = Math.pow(2, ko)
T.prototype.F1 = ko - st
T.prototype.F2 = 2 * st - ko
const fu = '0123456789abcdefghijklmnopqrstuvwxyz',
  wr = []
let $t, Ue
$t = 48
for (Ue = 0; Ue <= 9; ++Ue) wr[$t++] = Ue
$t = 97
for (Ue = 10; Ue < 36; ++Ue) wr[$t++] = Ue
$t = 65
for (Ue = 10; Ue < 36; ++Ue) wr[$t++] = Ue
function ta (e) {
  return fu.charAt(e)
}
function pu (e, t) {
  const n = wr[e.charCodeAt(t)]
  return n ?? -1
}
function hu (e) {
  for (let t = this.t - 1; t >= 0; --t) e[t] = this[t]
  ;(e.t = this.t), (e.s = this.s)
}
function mu (e) {
  ;(this.t = 1),
    (this.s = e < 0 ? -1 : 0),
    e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + this.DV) : (this.t = 0)
}
function Bo (e) {
  const t = Ee()
  return t.fromInt(e), t
}
function gu (e, t) {
  let n
  if (t === 16) n = 4
  else if (t === 8) n = 3
  else if (t === 2) n = 1
  else if (t === 32) n = 5
  else if (t === 4) n = 2
  else throw new Error('Only radix 2, 4, 8, 16, 32 are supported')
  ;(this.t = 0), (this.s = 0)
  let r = e.length,
    o = !1,
    i = 0
  for (; --r >= 0; ) {
    const a = pu(e, r)
    if (a < 0) {
      e.charAt(r) === '-' && (o = !0)
      continue
    }
    ;(o = !1),
      i === 0
        ? (this[this.t++] = a)
        : i + n > this.DB
        ? ((this[this.t - 1] |= (a & ((1 << (this.DB - i)) - 1)) << i),
          (this[this.t++] = a >> (this.DB - i)))
        : (this[this.t - 1] |= a << i),
      (i += n),
      i >= this.DB && (i -= this.DB)
  }
  this.clamp(), o && T.ZERO.subTo(this, this)
}
function yu () {
  const e = this.s & this.DM
  for (; this.t > 0 && this[this.t - 1] == e; ) --this.t
}
function vu (e) {
  if (this.s < 0) return '-' + this.negate().toString(e)
  let t
  if (e == 16) t = 4
  else if (e === 8) t = 3
  else if (e === 2) t = 1
  else if (e === 32) t = 5
  else if (e === 4) t = 2
  else throw new Error('Only radix 2, 4, 8, 16, 32 are supported')
  const n = (1 << t) - 1
  let r,
    o = !1,
    i = '',
    a = this.t,
    s = this.DB - ((a * this.DB) % t)
  if (a-- > 0)
    for (
      s < this.DB && (r = this[a] >> s) > 0 && ((o = !0), (i = ta(r)));
      a >= 0;

    )
      s < t
        ? ((r = (this[a] & ((1 << s) - 1)) << (t - s)),
          (r |= this[--a] >> (s += this.DB - t)))
        : ((r = (this[a] >> (s -= t)) & n), s <= 0 && ((s += this.DB), --a)),
        r > 0 && (o = !0),
        o && (i += ta(r))
  return o ? i : '0'
}
function _u () {
  const e = Ee()
  return T.ZERO.subTo(this, e), e
}
function Su () {
  return this.s < 0 ? this.negate() : this
}
function Eu (e) {
  let t = this.s - e.s
  if (t != 0) return t
  let n = this.t
  if (((t = n - e.t), t != 0)) return this.s < 0 ? -t : t
  for (; --n >= 0; ) if ((t = this[n] - e[n]) != 0) return t
  return 0
}
function Lo (e) {
  let t = 1,
    n
  return (
    (n = e >>> 16) !== 0 && ((e = n), (t += 16)),
    (n = e >> 8) !== 0 && ((e = n), (t += 8)),
    (n = e >> 4) !== 0 && ((e = n), (t += 4)),
    (n = e >> 2) !== 0 && ((e = n), (t += 2)),
    (n = e >> 1) !== 0 && ((e = n), (t += 1)),
    t
  )
}
function wu () {
  return this.t <= 0
    ? 0
    : this.DB * (this.t - 1) + Lo(this[this.t - 1] ^ (this.s & this.DM))
}
function bu (e, t) {
  let n
  for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n]
  for (n = e - 1; n >= 0; --n) t[n] = 0
  ;(t.t = this.t + e), (t.s = this.s)
}
function Iu (e, t) {
  for (let n = e; n < this.t; ++n) t[n - e] = this[n]
  ;(t.t = Math.max(this.t - e, 0)), (t.s = this.s)
}
function Cu (e, t) {
  const n = e % this.DB,
    r = this.DB - n,
    o = (1 << r) - 1,
    i = Math.floor(e / this.DB)
  let a = (this.s << n) & this.DM,
    s
  for (s = this.t - 1; s >= 0; --s)
    (t[s + i + 1] = (this[s] >> r) | a), (a = (this[s] & o) << n)
  for (s = i - 1; s >= 0; --s) t[s] = 0
  ;(t[i] = a), (t.t = this.t + i + 1), (t.s = this.s), t.clamp()
}
function Au (e, t) {
  t.s = this.s
  const n = Math.floor(e / this.DB)
  if (n >= this.t) {
    t.t = 0
    return
  }
  const r = e % this.DB,
    o = this.DB - r,
    i = (1 << r) - 1
  t[0] = this[n] >> r
  for (let a = n + 1; a < this.t; ++a)
    (t[a - n - 1] |= (this[a] & i) << o), (t[a - n] = this[a] >> r)
  r > 0 && (t[this.t - n - 1] |= (this.s & i) << o),
    (t.t = this.t - n),
    t.clamp()
}
function xu (e, t) {
  let n = 0,
    r = 0
  const o = Math.min(e.t, this.t)
  for (; n < o; ) (r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB)
  if (e.t < this.t) {
    for (r -= e.s; n < this.t; )
      (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB)
    r += this.s
  } else {
    for (r += this.s; n < e.t; )
      (r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB)
    r -= e.s
  }
  ;(t.s = r < 0 ? -1 : 0),
    r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r),
    (t.t = n),
    t.clamp()
}
function Nu (e, t) {
  const n = this.abs(),
    r = e.abs()
  let o = n.t
  for (t.t = o + r.t; --o >= 0; ) t[o] = 0
  for (o = 0; o < r.t; ++o) t[o + n.t] = n.am(0, r[o], t, o, 0, n.t)
  ;(t.s = 0), t.clamp(), this.s !== e.s && T.ZERO.subTo(t, t)
}
function Tu (e) {
  const t = this.abs()
  let n = (e.t = 2 * t.t)
  for (; --n >= 0; ) e[n] = 0
  for (n = 0; n < t.t - 1; ++n) {
    const r = t.am(n, t[n], e, 2 * n, 0, 1)
    ;(e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >=
      t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1))
  }
  e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), (e.s = 0), e.clamp()
}
function Ru (e, t, n) {
  const r = e.abs()
  if (r.t <= 0) return
  const o = this.abs()
  if (o.t < r.t) {
    t != null && t.fromInt(0), n != null && this.copyTo(n)
    return
  }
  n === null && (n = Ee())
  const i = Ee(),
    a = this.s,
    s = e.s,
    c = this.DB - Lo(r[r.t - 1])
  c > 0 ? (r.lShiftTo(c, i), o.lShiftTo(c, n)) : (r.copyTo(i), o.copyTo(n))
  const l = i.t,
    u = i[l - 1]
  if (u === 0) return
  const f = u * (1 << this.F1) + (l > 1 ? i[l - 2] >> this.F2 : 0),
    d = this.FV / f,
    p = (1 << this.F1) / f,
    m = 1 << this.F2
  let y = n.t,
    E = y - l
  const g = t === null ? Ee() : t
  for (
    i.dlShiftTo(E, g),
      n.compareTo(g) >= 0 && ((n[n.t++] = 1), n.subTo(g, n)),
      T.ONE.dlShiftTo(l, g),
      g.subTo(i, i);
    i.t < l;

  )
    i[i.t++] = 0
  for (; --E >= 0; ) {
    let S = n[--y] === u ? this.DM : Math.floor(n[y] * d + (n[y - 1] + m) * p)
    if ((n[y] += i.am(0, S, n, E, 0, l)) < S)
      for (i.dlShiftTo(E, g), n.subTo(g, n); n[y] < --S; ) n.subTo(g, n)
  }
  t !== null && (n.drShiftTo(l, t), a !== s && T.ZERO.subTo(t, t)),
    (n.t = l),
    n.clamp(),
    c > 0 && n.rShiftTo(c, n),
    a < 0 && T.ZERO.subTo(n, n)
}
function Pu (e) {
  const t = Ee()
  return (
    this.abs().divRemTo(e, null, t),
    this.s < 0 && t.compareTo(T.ZERO) > 0 && e.subTo(t, t),
    t
  )
}
function Uu () {
  if (this.t < 1) return 0
  const e = this[0]
  if (!(e & 1)) return 0
  let t = e & 3
  return (
    (t = (t * (2 - (e & 15) * t)) & 15),
    (t = (t * (2 - (e & 255) * t)) & 255),
    (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
    (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
    t > 0 ? this.DV - t : -t
  )
}
function Mu (e) {
  return this.compareTo(e) === 0
}
function Fu (e, t) {
  let n = 0,
    r = 0
  const o = Math.min(e.t, this.t)
  for (; n < o; ) (r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB)
  if (e.t < this.t) {
    for (r += e.s; n < this.t; )
      (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB)
    r += this.s
  } else {
    for (r += this.s; n < e.t; )
      (r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB)
    r += e.s
  }
  ;(t.s = r < 0 ? -1 : 0),
    r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
    (t.t = n),
    t.clamp()
}
function Ou (e) {
  const t = Ee()
  return this.addTo(e, t), t
}
function Du (e) {
  const t = Ee()
  return this.subTo(e, t), t
}
function ku (e) {
  const t = Ee()
  return this.multiplyTo(e, t), t
}
function Bu (e) {
  const t = Ee()
  return this.divRemTo(e, t, null), t
}
function Vt (e) {
  ;(this.m = e),
    (this.mp = e.invDigit()),
    (this.mpl = this.mp & 32767),
    (this.mph = this.mp >> 15),
    (this.um = (1 << (e.DB - 15)) - 1),
    (this.mt2 = 2 * e.t)
}
function Lu (e) {
  const t = Ee()
  return (
    e.abs().dlShiftTo(this.m.t, t),
    t.divRemTo(this.m, null, t),
    e.s < 0 && t.compareTo(T.ZERO) > 0 && this.m.subTo(t, t),
    t
  )
}
function ju (e) {
  const t = Ee()
  return e.copyTo(t), this.reduce(t), t
}
function $u (e) {
  for (; e.t <= this.mt2; ) e[e.t++] = 0
  for (let t = 0; t < this.m.t; ++t) {
    let n = e[t] & 32767
    const r =
      (n * this.mpl +
        (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
      e.DM
    for (
      n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t);
      e[n] >= e.DV;

    )
      (e[n] -= e.DV), e[++n]++
  }
  e.clamp(),
    e.drShiftTo(this.m.t, e),
    e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
}
function Vu (e, t) {
  e.squareTo(t), this.reduce(t)
}
function Hu (e, t, n) {
  e.multiplyTo(t, n), this.reduce(n)
}
Vt.prototype.convert = Lu
Vt.prototype.revert = ju
Vt.prototype.reduce = $u
Vt.prototype.mulTo = Hu
Vt.prototype.sqrTo = Vu
function qu (e, t, n) {
  let r = e.bitLength(),
    o,
    i = Bo(1)
  const a = new Vt(t)
  if (r <= 0) return i
  r < 18
    ? (o = 1)
    : r < 48
    ? (o = 3)
    : r < 144
    ? (o = 4)
    : r < 768
    ? (o = 5)
    : (o = 6)
  const s = []
  let c = 3
  const l = o - 1,
    u = (1 << o) - 1
  if (((s[1] = a.convert(this)), o > 1)) {
    const g = Ee()
    for (a.sqrTo(s[1], g); c <= u; )
      (s[c] = Ee()), a.mulTo(g, s[c - 2], s[c]), (c += 2)
  }
  let f = e.t - 1,
    d,
    p = !0,
    m = Ee(),
    y
  for (r = Lo(e[f]) - 1; f >= 0; ) {
    for (
      r >= l
        ? (d = (e[f] >> (r - l)) & u)
        : ((d = (e[f] & ((1 << (r + 1)) - 1)) << (l - r)),
          f > 0 && (d |= e[f - 1] >> (this.DB + r - l))),
        c = o;
      !(d & 1);

    )
      (d >>= 1), --c
    if (((r -= c) < 0 && ((r += this.DB), --f), p)) s[d].copyTo(i), (p = !1)
    else {
      for (; c > 1; ) a.sqrTo(i, m), a.sqrTo(m, i), (c -= 2)
      c > 0 ? a.sqrTo(i, m) : ((y = i), (i = m), (m = y)), a.mulTo(m, s[d], i)
    }
    for (; f >= 0 && !(e[f] & (1 << r)); )
      a.sqrTo(i, m),
        (y = i),
        (i = m),
        (m = y),
        --r < 0 && ((r = this.DB - 1), --f)
  }
  const E = a.revert(i)
  return n(null, E), E
}
T.prototype.copyTo = hu
T.prototype.fromInt = mu
T.prototype.fromString = gu
T.prototype.clamp = yu
T.prototype.dlShiftTo = bu
T.prototype.drShiftTo = Iu
T.prototype.lShiftTo = Cu
T.prototype.rShiftTo = Au
T.prototype.subTo = xu
T.prototype.multiplyTo = Nu
T.prototype.squareTo = Tu
T.prototype.divRemTo = Ru
T.prototype.invDigit = Uu
T.prototype.addTo = Fu
T.prototype.toString = vu
T.prototype.negate = _u
T.prototype.abs = Su
T.prototype.compareTo = Eu
T.prototype.bitLength = wu
T.prototype.mod = Pu
T.prototype.equals = Mu
T.prototype.add = Ou
T.prototype.subtract = Du
T.prototype.multiply = ku
T.prototype.divide = Bu
T.prototype.modPow = qu
T.ZERO = Bo(0)
T.ONE = Bo(1)
const Wu = async ({ a: e, g: t, k: n, x: r, B: o, N: i, U: a }) =>
    new Promise((s, c) => {
      t.modPow(r, i, (l, u) => {
        if (l) {
          c(l)
          return
        }
        o.subtract(n.multiply(u)).modPow(e.add(a.multiply(r)), i, (f, d) => {
          if (f) {
            c(f)
            return
          }
          s(d.mod(i))
        })
      })
    }),
  zu =
    'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF',
  gs = {},
  uo = {}
for (let e = 0; e < 256; e++) {
  let t = e.toString(16).toLowerCase()
  t.length === 1 && (t = `0${t}`), (gs[e] = t), (uo[t] = e)
}
const Mt = e => {
    if (e.length % 2 !== 0)
      throw new Error('Hex encoded strings must have an even number length')
    const t = new Uint8Array(e.length / 2)
    for (let n = 0; n < e.length; n += 2) {
      const r = e.slice(n, n + 2).toLowerCase()
      if (r in uo) t[n / 2] = uo[r]
      else
        throw new Error(
          `Cannot decode unrecognized sequence ${r} as hexadecimal`
        )
    }
    return t
  },
  jo = e => {
    let t = ''
    for (let n = 0; n < e.byteLength; n++) t += gs[e[n]]
    return t
  },
  fo = e => {
    const t = new pn()
    t.update(e)
    const n = t.digestSync(),
      r = jo(n)
    return new Array(64 - r.length).join('0') + r
  },
  Yn = e => fo(Mt(e)),
  Gu = /^[89a-f]/i,
  Ye = e => {
    if (!(e instanceof T)) throw new Error('Not a BigInteger')
    const t = e.compareTo(T.ZERO) < 0
    let n = e.abs().toString(16)
    if (
      ((n = n.length % 2 !== 0 ? `0${n}` : n),
      (n = Gu.test(n) ? `00${n}` : n),
      t)
    ) {
      const r = n
        .split('')
        .map(i => {
          const a = ~parseInt(i, 16) & 15
          return '0123456789ABCDEF'.charAt(a)
        })
        .join('')
      ;(n = new T(r, 16).add(T.ONE).toString(16)),
        n.toUpperCase().startsWith('FF8') && (n = n.substring(2))
    }
    return n
  },
  Ku = ({ A: e, B: t }) => {
    const n = new T(Yn(Ye(e) + Ye(t)), 16)
    if (n.equals(T.ZERO)) throw new Error('U cannot be zero.')
    return n
  },
  Yu = (e, t, n) => {
    const r = new pn(t)
    r.update(e)
    const o = r.digestSync(),
      i = new pn(o)
    return i.update(n), i.digestSync().slice(0, 16)
  },
  $o = e => {
    const t = new Do().random(e).toString()
    return Mt(t)
  },
  Ju = () => mn.convert($o(40))
class Zu {
  constructor ({ userPoolName: t, a: n, g: r, A: o, N: i }) {
    ;(this.encoder = Kn),
      (this.userPoolName = t),
      (this.a = n),
      (this.g = r),
      (this.A = o),
      (this.N = i),
      (this.k = new T(Yn(`${Ye(i)}${Ye(r)}`), 16))
  }
  getRandomPassword () {
    if (!this.randomPassword)
      throw new ve({
        name: 'EmptyBigIntegerRandomPassword',
        message: 'random password is empty'
      })
    return this.randomPassword
  }
  getSaltToHashDevices () {
    if (!this.saltToHashDevices)
      throw new ve({
        name: 'EmptyBigIntegersaltToHashDevices',
        message: 'saltToHashDevices is empty'
      })
    return this.saltToHashDevices
  }
  getVerifierDevices () {
    if (!this.verifierDevices)
      throw new ve({
        name: 'EmptyBigIntegerVerifierDevices',
        message: 'verifyDevices is empty'
      })
    return this.verifierDevices
  }
  async generateHashDevice (t, n) {
    this.randomPassword = Ju()
    const r = `${t}${n}:${this.randomPassword}`,
      o = fo(r),
      i = jo($o(16))
    return (
      (this.saltToHashDevices = Ye(new T(i, 16))),
      new Promise((a, s) => {
        this.g.modPow(
          new T(Yn(this.saltToHashDevices + o), 16),
          this.N,
          (c, l) => {
            if (c) {
              s(c)
              return
            }
            ;(this.verifierDevices = Ye(l)), a()
          }
        )
      })
    )
  }
  async getPasswordAuthenticationKey ({
    username: t,
    password: n,
    serverBValue: r,
    salt: o
  }) {
    if (r.mod(this.N).equals(T.ZERO)) throw new Error('B cannot be zero.')
    const i = Ku({ A: this.A, B: r }),
      a = `${this.userPoolName}${t}:${n}`,
      s = fo(a),
      c = new T(Yn(Ye(o) + s), 16),
      l = await Wu({
        a: this.a,
        g: this.g,
        k: this.k,
        x: c,
        B: r,
        N: this.N,
        U: i
      }),
      u = this.encoder.convert('Caldera Derived Key'),
      f = this.encoder.convert(''),
      d = new Uint8Array(u.byteLength + f.byteLength)
    return d.set(u, 0), d.set(f, u.byteLength), Yu(Mt(Ye(l)), Mt(Ye(i)), d)
  }
}
const Qu = async ({ a: e, g: t, N: n }) =>
    new Promise((r, o) => {
      t.modPow(e, n, (i, a) => {
        if (i) {
          o(i)
          return
        }
        if (a.mod(n).equals(T.ZERO)) {
          o(new Error('Illegal parameter. A mod N cannot be 0.'))
          return
        }
        r(a)
      })
    }),
  br = async e => {
    const t = new T(zu, 16),
      n = new T('2', 16),
      r = Xu(),
      o = await Qu({ a: r, g: n, N: t })
    return new Zu({ userPoolName: e, a: r, g: n, A: o, N: t })
  },
  Xu = () => {
    const e = jo($o(128))
    return new T(e, 16)
  },
  ed = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  td = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  ys = () => {
    const e = new Date(),
      t = td[e.getUTCDay()],
      n = ed[e.getUTCMonth()],
      r = e.getUTCDate()
    let o = e.getUTCHours()
    o < 10 && (o = `0${o}`)
    let i = e.getUTCMinutes()
    i < 10 && (i = `0${i}`)
    let a = e.getUTCSeconds()
    a < 10 && (a = `0${a}`)
    const s = e.getUTCFullYear()
    return `${t} ${n} ${r} ${o}:${i}:${a} UTC ${s}`
  },
  vs = ({
    userPoolName: e,
    username: t,
    challengeParameters: n,
    dateNow: r,
    hkdf: o
  }) => {
    const i = Kn.convert(e),
      a = Kn.convert(t),
      s = nd(n.SECRET_BLOCK),
      c = Kn.convert(r),
      l = new Uint8Array(
        i.byteLength + a.byteLength + s.byteLength + c.byteLength
      )
    l.set(i, 0),
      l.set(a, i.byteLength),
      l.set(s, i.byteLength + a.byteLength),
      l.set(c, i.byteLength + a.byteLength + s.byteLength)
    const u = new pn(o)
    u.update(l)
    const f = u.digestSync()
    return mn.convert(f)
  },
  nd = e => {
    const t = '='.repeat((4 - (e.length % 4)) % 4),
      n = (e + t).replace(/-/g, '+').replace(/_/g, '/'),
      r = ml.convert(n),
      o = new Uint8Array(r.length)
    for (let i = 0; i < r.length; ++i) o[i] = r.charCodeAt(i)
    return o
  },
  po = 'userAttributes.'
async function rd ({
  challengeResponse: e,
  clientMetadata: t,
  session: n,
  username: r,
  config: o,
  tokenOrchestrator: i
}) {
  const { userPoolId: a, userPoolClientId: s } = o,
    c = { USERNAME: r, ANSWER: e },
    l = await (i == null ? void 0 : i.getDeviceMetadata(r))
  l && l.deviceKey && (c.DEVICE_KEY = l.deviceKey)
  const u = be({ username: r, userPoolId: a, userPoolClientId: s }),
    f = {
      ChallengeName: 'CUSTOM_CHALLENGE',
      ChallengeResponses: c,
      Session: n,
      ClientMetadata: t,
      ClientId: s,
      UserContextData: u
    },
    d = await Xe({ region: oe(a), userAgentValue: ue(Z.ConfirmSignIn) }, f)
  return d.ChallengeName === 'DEVICE_SRP_AUTH'
    ? Ir({
        username: r,
        config: o,
        clientMetadata: t,
        session: d.Session,
        tokenOrchestrator: i
      })
    : d
}
async function od ({
  challengeResponse: e,
  username: t,
  clientMetadata: n,
  session: r,
  deviceName: o,
  config: i
}) {
  const { userPoolId: a, userPoolClientId: s } = i,
    c = { USERNAME: t },
    { Session: l } = await _l(
      { region: oe(a), userAgentValue: ue(Z.ConfirmSignIn) },
      { UserCode: e, Session: r, FriendlyDeviceName: o }
    )
  lt.dispatch({ type: 'SET_SIGN_IN_SESSION', value: l })
  const u = {
    ChallengeName: 'MFA_SETUP',
    ChallengeResponses: c,
    Session: l,
    ClientMetadata: n,
    ClientId: s
  }
  return Xe({ region: oe(a) }, u)
}
async function id ({
  challengeResponse: e,
  username: t,
  clientMetadata: n,
  session: r,
  config: o
}) {
  const { userPoolId: i, userPoolClientId: a } = o
  se(e === 'TOTP' || e === 'SMS', H.IncorrectMFAMethod)
  const s = { USERNAME: t, ANSWER: vd(e) },
    c = be({ username: t, userPoolId: i, userPoolClientId: a }),
    l = {
      ChallengeName: 'SELECT_MFA_TYPE',
      ChallengeResponses: s,
      Session: r,
      ClientMetadata: n,
      ClientId: a,
      UserContextData: c
    }
  return Xe({ region: oe(i), userAgentValue: ue(Z.ConfirmSignIn) }, l)
}
async function ad ({
  challengeResponse: e,
  clientMetadata: t,
  session: n,
  username: r,
  config: o
}) {
  const { userPoolId: i, userPoolClientId: a } = o,
    s = { USERNAME: r, SMS_MFA_CODE: e },
    c = be({ username: r, userPoolId: i, userPoolClientId: a }),
    l = {
      ChallengeName: 'SMS_MFA',
      ChallengeResponses: s,
      Session: n,
      ClientMetadata: t,
      ClientId: a,
      UserContextData: c
    }
  return Xe({ region: oe(i), userAgentValue: ue(Z.ConfirmSignIn) }, l)
}
async function sd ({
  challengeResponse: e,
  clientMetadata: t,
  session: n,
  username: r,
  config: o
}) {
  const { userPoolId: i, userPoolClientId: a } = o,
    s = { USERNAME: r, SOFTWARE_TOKEN_MFA_CODE: e },
    c = be({ username: r, userPoolId: i, userPoolClientId: a }),
    l = {
      ChallengeName: 'SOFTWARE_TOKEN_MFA',
      ChallengeResponses: s,
      Session: n,
      ClientMetadata: t,
      ClientId: a,
      UserContextData: c
    }
  return Xe({ region: oe(i), userAgentValue: ue(Z.ConfirmSignIn) }, l)
}
async function cd ({
  challengeResponse: e,
  clientMetadata: t,
  session: n,
  username: r,
  requiredAttributes: o,
  config: i
}) {
  const { userPoolId: a, userPoolClientId: s } = i,
    c = { ...gd(o), NEW_PASSWORD: e, USERNAME: r },
    l = be({ username: r, userPoolId: a, userPoolClientId: s }),
    u = {
      ChallengeName: 'NEW_PASSWORD_REQUIRED',
      ChallengeResponses: c,
      ClientMetadata: t,
      Session: n,
      ClientId: s,
      UserContextData: l
    }
  return Xe({ region: oe(a), userAgentValue: ue(Z.ConfirmSignIn) }, u)
}
async function ld (e, t, n, r, o) {
  var p, m
  const { userPoolClientId: i, userPoolId: a } = r,
    s = { USERNAME: e, PASSWORD: t },
    c = await o.getDeviceMetadata(e)
  c && c.deviceKey && (s.DEVICE_KEY = c.deviceKey)
  const l = be({ username: e, userPoolId: a, userPoolClientId: i }),
    u = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: s,
      ClientMetadata: n,
      ClientId: i,
      UserContextData: l
    },
    f = await _r({ region: oe(a), userAgentValue: ue(Z.SignIn) }, u),
    d =
      ((p = f.ChallengeParameters) == null ? void 0 : p.USERNAME) ??
      ((m = f.ChallengeParameters) == null ? void 0 : m.USER_ID_FOR_SRP) ??
      e
  return (
    Cr(d),
    f.ChallengeName === 'DEVICE_SRP_AUTH'
      ? Ir({
          username: d,
          config: r,
          clientMetadata: n,
          session: f.Session,
          tokenOrchestrator: o
        })
      : f
  )
}
async function ud (e, t, n, r, o) {
  const { userPoolId: i, userPoolClientId: a } = r,
    s = (i == null ? void 0 : i.split('_')[1]) || '',
    c = await br(s),
    l = { USERNAME: e, SRP_A: c.A.toString(16) },
    u = be({ username: e, userPoolId: i, userPoolClientId: a }),
    f = {
      AuthFlow: 'USER_SRP_AUTH',
      AuthParameters: l,
      ClientMetadata: n,
      ClientId: a,
      UserContextData: u
    },
    d = await _r({ region: oe(i), userAgentValue: ue(Z.SignIn) }, f),
    { ChallengeParameters: p, Session: m } = d,
    y = (p == null ? void 0 : p.USERNAME) ?? e
  return Cr(y), xn(_s, [t, p, n, m, c, r, o], y, o)
}
async function dd (e, t, n, r) {
  var d
  const { userPoolClientId: o, userPoolId: i } = n,
    a = { USERNAME: e },
    s = await r.getDeviceMetadata(e)
  s && s.deviceKey && (a.DEVICE_KEY = s.deviceKey)
  const c = be({ username: e, userPoolId: i, userPoolClientId: o }),
    l = {
      AuthFlow: 'CUSTOM_AUTH',
      AuthParameters: a,
      ClientMetadata: t,
      ClientId: o,
      UserContextData: c
    },
    u = await _r({ region: oe(i), userAgentValue: ue(Z.SignIn) }, l),
    f = ((d = u.ChallengeParameters) == null ? void 0 : d.USERNAME) ?? e
  return (
    Cr(f),
    u.ChallengeName === 'DEVICE_SRP_AUTH'
      ? Ir({
          username: f,
          config: n,
          clientMetadata: t,
          session: u.Session,
          tokenOrchestrator: r
        })
      : u
  )
}
async function fd (e, t, n, r, o) {
  _e(r)
  const { userPoolId: i, userPoolClientId: a } = r,
    s = (i == null ? void 0 : i.split('_')[1]) || '',
    c = await br(s),
    l = { USERNAME: e, SRP_A: c.A.toString(16), CHALLENGE_NAME: 'SRP_A' },
    u = be({ username: e, userPoolId: i, userPoolClientId: a }),
    f = {
      AuthFlow: 'CUSTOM_AUTH',
      AuthParameters: l,
      ClientMetadata: n,
      ClientId: a,
      UserContextData: u
    },
    { ChallengeParameters: d, Session: p } = await _r(
      { region: oe(i), userAgentValue: ue(Z.SignIn) },
      f
    ),
    m = (d == null ? void 0 : d.USERNAME) ?? e
  return Cr(m), xn(_s, [t, d, n, p, c, r, o], m, o)
}
async function Ir ({
  username: e,
  config: t,
  clientMetadata: n,
  session: r,
  tokenOrchestrator: o
}) {
  const { userPoolId: i } = t,
    a = t.userPoolClientId,
    s = await (o == null ? void 0 : o.getDeviceMetadata(e))
  rs(s)
  const c = await br(s.deviceGroupKey),
    l = { USERNAME: e, SRP_A: c.A.toString(16), DEVICE_KEY: s.deviceKey },
    u = {
      ChallengeName: 'DEVICE_SRP_AUTH',
      ClientId: a,
      ChallengeResponses: l,
      ClientMetadata: n,
      Session: r
    },
    { ChallengeParameters: f, Session: d } = await Xe({ region: oe(i) }, u)
  return pd(e, f, n, d, c, t, o)
}
async function pd (e, t, n, r, o, { userPoolId: i, userPoolClientId: a }, s) {
  const c = await (s == null ? void 0 : s.getDeviceMetadata(e))
  rs(c)
  const l = new T(t == null ? void 0 : t.SRP_B, 16),
    u = new T(t == null ? void 0 : t.SALT, 16),
    { deviceKey: f } = c,
    { deviceGroupKey: d } = c,
    p = await o.getPasswordAuthenticationKey({
      username: c.deviceKey,
      password: c.randomPassword,
      serverBValue: l,
      salt: u
    }),
    m = ys(),
    y = {
      USERNAME: (t == null ? void 0 : t.USERNAME) ?? e,
      PASSWORD_CLAIM_SECRET_BLOCK: t == null ? void 0 : t.SECRET_BLOCK,
      TIMESTAMP: m,
      PASSWORD_CLAIM_SIGNATURE: vs({
        username: f,
        userPoolName: d,
        challengeParameters: t,
        dateNow: m,
        hkdf: p
      }),
      DEVICE_KEY: f
    },
    E = be({ username: e, userPoolId: i, userPoolClientId: a }),
    g = {
      ChallengeName: 'DEVICE_PASSWORD_VERIFIER',
      ClientId: a,
      ChallengeResponses: y,
      Session: r,
      ClientMetadata: n,
      UserContextData: E
    }
  return Xe({ region: oe(i) }, g)
}
async function _s (e, t, n, r, o, i, a) {
  const { userPoolId: s, userPoolClientId: c } = i,
    l = (s == null ? void 0 : s.split('_')[1]) || '',
    u = new T(t == null ? void 0 : t.SRP_B, 16),
    f = new T(t == null ? void 0 : t.SALT, 16),
    d = t == null ? void 0 : t.USER_ID_FOR_SRP
  if (!d)
    throw new ve({
      name: 'EmptyUserIdForSRPException',
      message: 'USER_ID_FOR_SRP was not found in challengeParameters'
    })
  const p = await o.getPasswordAuthenticationKey({
      username: d,
      password: e,
      serverBValue: u,
      salt: f
    }),
    m = ys(),
    y = {
      USERNAME: d,
      PASSWORD_CLAIM_SECRET_BLOCK: t == null ? void 0 : t.SECRET_BLOCK,
      TIMESTAMP: m,
      PASSWORD_CLAIM_SIGNATURE: vs({
        username: d,
        userPoolName: l,
        challengeParameters: t,
        dateNow: m,
        hkdf: p
      })
    },
    E = await a.getDeviceMetadata(d)
  E && E.deviceKey && (y.DEVICE_KEY = E.deviceKey)
  const g = be({ username: d, userPoolId: s, userPoolClientId: c }),
    S = {
      ChallengeName: 'PASSWORD_VERIFIER',
      ChallengeResponses: y,
      ClientMetadata: n,
      Session: r,
      ClientId: c,
      UserContextData: g
    },
    v = await Xe({ region: oe(s) }, S)
  return v.ChallengeName === 'DEVICE_SRP_AUTH'
    ? Ir({
        username: d,
        config: i,
        clientMetadata: n,
        session: v.Session,
        tokenOrchestrator: a
      })
    : v
}
async function In (e) {
  var o
  const { challengeName: t, challengeParameters: n } = e,
    r = (o = we.getConfig().Auth) == null ? void 0 : o.Cognito
  switch ((_e(r), t)) {
    case 'CUSTOM_CHALLENGE':
      return {
        isSignedIn: !1,
        nextStep: {
          signInStep: 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE',
          additionalInfo: n
        }
      }
    case 'MFA_SETUP': {
      const { signInSession: i, username: a } = lt.getState()
      if (!Sd(n, 'TOTP'))
        throw new ve({
          name: _t.SignInException,
          message: `Cannot initiate MFA setup from available types: ${ho(
            mo(n.MFAS_CAN_SETUP)
          )}`
        })
      const { Session: s, SecretCode: c } = await gl(
        { region: oe(r.userPoolId) },
        { Session: i }
      )
      return (
        lt.dispatch({ type: 'SET_SIGN_IN_SESSION', value: s }),
        {
          isSignedIn: !1,
          nextStep: {
            signInStep: 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP',
            totpSetupDetails: hd(c, a)
          }
        }
      )
    }
    case 'NEW_PASSWORD_REQUIRED':
      return {
        isSignedIn: !1,
        nextStep: {
          signInStep: 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED',
          missingAttributes: md(n.requiredAttributes)
        }
      }
    case 'SELECT_MFA_TYPE':
      return {
        isSignedIn: !1,
        nextStep: {
          signInStep: 'CONTINUE_SIGN_IN_WITH_MFA_SELECTION',
          allowedMFATypes: ho(mo(n.MFAS_CAN_CHOOSE))
        }
      }
    case 'SMS_MFA':
      return {
        isSignedIn: !1,
        nextStep: {
          signInStep: 'CONFIRM_SIGN_IN_WITH_SMS_CODE',
          codeDeliveryDetails: {
            deliveryMedium: n.CODE_DELIVERY_DELIVERY_MEDIUM,
            destination: n.CODE_DELIVERY_DESTINATION
          }
        }
      }
    case 'SOFTWARE_TOKEN_MFA':
      return {
        isSignedIn: !1,
        nextStep: { signInStep: 'CONFIRM_SIGN_IN_WITH_TOTP_CODE' }
      }
  }
  throw new ve({
    name: _t.SignInException,
    message: `An error occurred during the sign in process. ${t} challengeName returned by the underlying service was not addressed.`
  })
}
function hd (e, t) {
  return {
    sharedSecret: e,
    getSetupUri: (n, r) => {
      const o = `otpauth://totp/${n}:${r ?? t}?secret=${e}&issuer=${n}`
      return new vr(o)
    }
  }
}
function Cn (e) {
  if (e === rr.PasswordResetRequiredException)
    return { isSignedIn: !1, nextStep: { signInStep: 'RESET_PASSWORD' } }
  if (e === rr.UserNotConfirmedException)
    return { isSignedIn: !1, nextStep: { signInStep: 'CONFIRM_SIGN_UP' } }
}
function md (e) {
  return e
    ? JSON.parse(e).map(n => (n.includes(po) ? n.replace(po, '') : n))
    : []
}
function gd (e) {
  if (!e) return {}
  const t = {}
  return (
    Object.entries(e).forEach(([n, r]) => {
      r && (t[`${po}${n}`] = r)
    }),
    t
  )
}
async function yd (e, t, n, r, o, i, a, s) {
  const c = s == null ? void 0 : s.userAttributes,
    l = s == null ? void 0 : s.friendlyDeviceName
  switch (t) {
    case 'SMS_MFA':
      return ad({
        challengeResponse: r,
        clientMetadata: a,
        session: n,
        username: e,
        config: o
      })
    case 'SELECT_MFA_TYPE':
      return id({
        challengeResponse: r,
        clientMetadata: a,
        session: n,
        username: e,
        config: o
      })
    case 'MFA_SETUP':
      return od({
        challengeResponse: r,
        clientMetadata: a,
        session: n,
        username: e,
        deviceName: l,
        config: o
      })
    case 'NEW_PASSWORD_REQUIRED':
      return cd({
        challengeResponse: r,
        clientMetadata: a,
        session: n,
        username: e,
        requiredAttributes: c,
        config: o
      })
    case 'CUSTOM_CHALLENGE':
      return xn(
        rd,
        [
          {
            challengeResponse: r,
            clientMetadata: a,
            session: n,
            username: e,
            config: o,
            tokenOrchestrator: i
          }
        ],
        e,
        i
      )
    case 'SOFTWARE_TOKEN_MFA':
      return sd({
        challengeResponse: r,
        clientMetadata: a,
        session: n,
        username: e,
        config: o
      })
  }
  throw new ve({
    name: _t.SignInException,
    message: `An error occurred during the sign in process. 
		${t} challengeName returned by the underlying service was not addressed.`
  })
}
function vd (e) {
  let t = 'SMS_MFA'
  return e === 'TOTP' && (t = 'SOFTWARE_TOKEN_MFA'), t
}
function _d (e) {
  if (e === 'SMS_MFA') return 'SMS'
  if (e === 'SOFTWARE_TOKEN_MFA') return 'TOTP'
}
function ho (e) {
  if (e) return e.map(_d).filter(Boolean)
}
function mo (e) {
  return e ? JSON.parse(e) : []
}
function Sd (e, t) {
  const { MFAS_CAN_SETUP: n } = e,
    r = ho(mo(n))
  return r ? r.includes(t) : !1
}
async function Ss () {
  let e
  try {
    e = await wn()
  } catch {}
  if (e && e.userId && e.username)
    throw new ve({
      name: yl,
      message: 'There is already a signed in user.',
      recoverySuggestion: 'Call signOut before calling signIn again.'
    })
}
async function An (e, t, n) {
  if (!t) return
  const r = e.split('_')[1] || '',
    o = await br(r),
    i = t == null ? void 0 : t.DeviceKey,
    a = t == null ? void 0 : t.DeviceGroupKey
  try {
    await o.generateHashDevice(a ?? '', i ?? '')
  } catch {
    return
  }
  const s = {
      Salt: mn.convert(Mt(o.getSaltToHashDevices())),
      PasswordVerifier: mn.convert(Mt(o.getVerifierDevices()))
    },
    c = o.getRandomPassword()
  try {
    return (
      await vl(
        { region: oe(e) },
        {
          AccessToken: n,
          DeviceName: await tu(),
          DeviceKey: t == null ? void 0 : t.DeviceKey,
          DeviceSecretVerifierConfig: s
        }
      ),
      { deviceKey: i, deviceGroupKey: a, randomPassword: c }
    )
  } catch {
    return
  }
}
async function xn (e, t, n, r) {
  try {
    return await e(...t)
  } catch (o) {
    if (
      o instanceof ve &&
      o.name === 'ResourceNotFoundException' &&
      o.message.includes('Device does not exist.')
    )
      return await r.clearDeviceMetadata(n), e(...t)
    throw o
  }
}
function Cr (e) {
  const { dispatch: t } = lt
  t({ type: 'SET_USERNAME', value: e })
}
function Ar (e) {
  return lt.getState().username ?? e
}
async function Et (e) {
  if (e.AccessToken) {
    const t = er(e.AccessToken),
      n = (t.payload.iat || 0) * 1e3,
      r = new Date().getTime(),
      o = n > 0 ? n - r : 0
    let i, a, s
    e.RefreshToken && (a = e.RefreshToken),
      e.IdToken && (i = er(e.IdToken)),
      e != null && e.NewDeviceMetadata && (s = e.NewDeviceMetadata)
    const c = {
      accessToken: t,
      idToken: i,
      refreshToken: a,
      clockDrift: o,
      deviceMetadata: s,
      username: e.username
    }
    e != null && e.signInDetails && (c.signInDetails = e.signInDetails),
      await ct.setTokens({ tokens: c })
  } else
    throw new Sl({
      message: 'Invalid tokens',
      name: 'InvalidTokens',
      recoverySuggestion: 'Check Cognito UserPool settings'
    })
}
const Ed = 'Unable to get user session following successful sign-in.',
  Ht = async () => {
    try {
      hn.dispatch('auth', { event: 'signedIn', data: await wn() }, 'Auth', tr)
    } catch (e) {
      throw e.name === El
        ? new ve({
            name: wl,
            message: Ed,
            recoverySuggestion:
              'This most likely is due to auth tokens not being persisted. If you are using cookie store, please ensure cookies can be correctly set from your server.'
          })
        : e
    }
  }
async function wd (e) {
  var s
  const t = (s = we.getConfig().Auth) == null ? void 0 : s.Cognito
  _e(t)
  const { username: n, password: r, options: o } = e,
    i = { loginId: n, authFlowType: 'CUSTOM_WITHOUT_SRP' },
    a = o == null ? void 0 : o.clientMetadata
  se(!!n, H.EmptySignInUsername), se(!r, H.CustomAuthSignInPassword)
  try {
    const {
        ChallengeName: c,
        ChallengeParameters: l,
        AuthenticationResult: u,
        Session: f
      } = await xn(dd, [n, a, t, ct], n, ct),
      d = Ar(n)
    return (
      bn({ signInSession: f, username: d, challengeName: c, signInDetails: i }),
      u
        ? (Qe(),
          await Et({
            username: d,
            ...u,
            NewDeviceMetadata: await An(
              t.userPoolId,
              u.NewDeviceMetadata,
              u.AccessToken
            ),
            signInDetails: i
          }),
          await Ht(),
          { isSignedIn: !0, nextStep: { signInStep: 'DONE' } })
        : In({ challengeName: c, challengeParameters: l })
    )
  } catch (c) {
    Qe(), En(c)
    const l = Cn(c.name)
    if (l) return l
    throw c
  }
}
async function bd (e) {
  var s
  const { username: t, password: n, options: r } = e,
    o = { loginId: t, authFlowType: 'CUSTOM_WITH_SRP' },
    i = (s = we.getConfig().Auth) == null ? void 0 : s.Cognito
  _e(i)
  const a = r == null ? void 0 : r.clientMetadata
  se(!!t, H.EmptySignInUsername), se(!!n, H.EmptySignInPassword)
  try {
    const {
        ChallengeName: c,
        ChallengeParameters: l,
        AuthenticationResult: u,
        Session: f
      } = await fd(t, n, a, i, ct),
      d = Ar(t)
    return (
      bn({ signInSession: f, username: d, challengeName: c, signInDetails: o }),
      u
        ? (await Et({
            username: d,
            ...u,
            NewDeviceMetadata: await An(
              i.userPoolId,
              u.NewDeviceMetadata,
              u.AccessToken
            ),
            signInDetails: o
          }),
          Qe(),
          await Ht(),
          { isSignedIn: !0, nextStep: { signInStep: 'DONE' } })
        : In({ challengeName: c, challengeParameters: l })
    )
  } catch (c) {
    Qe(), En(c)
    const l = Cn(c.name)
    if (l) return l
    throw c
  }
}
async function na (e) {
  var a, s
  const { username: t, password: n } = e,
    r = (a = we.getConfig().Auth) == null ? void 0 : a.Cognito,
    o = { loginId: t, authFlowType: 'USER_SRP_AUTH' }
  _e(r)
  const i = (s = e.options) == null ? void 0 : s.clientMetadata
  se(!!t, H.EmptySignInUsername), se(!!n, H.EmptySignInPassword)
  try {
    const {
        ChallengeName: c,
        ChallengeParameters: l,
        AuthenticationResult: u,
        Session: f
      } = await ud(t, n, i, r, ct),
      d = Ar(t)
    return (
      bn({ signInSession: f, username: d, challengeName: c, signInDetails: o }),
      u
        ? (Qe(),
          await Et({
            username: d,
            ...u,
            NewDeviceMetadata: await An(
              r.userPoolId,
              u.NewDeviceMetadata,
              u.AccessToken
            ),
            signInDetails: o
          }),
          await Ht(),
          { isSignedIn: !0, nextStep: { signInStep: 'DONE' } })
        : In({ challengeName: c, challengeParameters: l })
    )
  } catch (c) {
    Qe(), En(c)
    const l = Cn(c.name)
    if (l) return l
    throw c
  }
}
async function Id (e) {
  var s
  const { username: t, password: n, options: r } = e,
    o = (s = we.getConfig().Auth) == null ? void 0 : s.Cognito,
    i = { loginId: t, authFlowType: 'USER_PASSWORD_AUTH' }
  _e(o)
  const a = r == null ? void 0 : r.clientMetadata
  se(!!t, H.EmptySignInUsername), se(!!n, H.EmptySignInPassword)
  try {
    const {
        ChallengeName: c,
        ChallengeParameters: l,
        AuthenticationResult: u,
        Session: f
      } = await xn(ld, [t, n, a, o, ct], t, ct),
      d = Ar(t)
    return (
      bn({ signInSession: f, username: d, challengeName: c, signInDetails: i }),
      u
        ? (await Et({
            ...u,
            username: d,
            NewDeviceMetadata: await An(
              o.userPoolId,
              u.NewDeviceMetadata,
              u.AccessToken
            ),
            signInDetails: i
          }),
          Qe(),
          await Ht(),
          { isSignedIn: !0, nextStep: { signInStep: 'DONE' } })
        : In({ challengeName: c, challengeParameters: l })
    )
  } catch (c) {
    Qe(), En(c)
    const l = Cn(c.name)
    if (l) return l
    throw c
  }
}
async function Vo (e) {
  var n
  const t = (n = e.options) == null ? void 0 : n.authFlowType
  switch ((await Ss(), t)) {
    case 'USER_SRP_AUTH':
      return na(e)
    case 'USER_PASSWORD_AUTH':
      return Id(e)
    case 'CUSTOM_WITHOUT_SRP':
      return wd(e)
    case 'CUSTOM_WITH_SRP':
      return bd(e)
    default:
      return na(e)
  }
}
const Es = async () => {
  throw new ve({
    name: os,
    message:
      'The autoSignIn flow has not started, or has been cancelled/completed.',
    recoverySuggestion:
      'Please try to use the signIn API or log out before starting a new autoSignIn flow.'
  })
}
let Ho = Es
function go (e) {
  Ho = e
}
function Pt () {
  Ho = Es
}
const ws = 3 * 60 * 1e3
function Cd (e) {
  const t = nr.listen('auth-internal', async ({ payload: r }) => {
      switch (r.event) {
        case 'confirmSignUp': {
          const o = r.data
          o != null &&
            o.isSignUpComplete &&
            (nr.dispatch('auth-internal', { event: 'autoSignIn' }),
            go(xs(e)),
            t())
        }
      }
    }),
    n = setTimeout(() => {
      t(), Ut(!1), clearTimeout(n), Pt()
    }, ws)
}
function bs (e, t) {
  let n
  return r => {
    n || e(...r),
      clearTimeout(n),
      (n = setTimeout(() => {
        n = void 0
      }, t))
  }
}
function Ad (e, t, n) {
  const r = Date.now(),
    o = setInterval(async () => {
      if (Date.now() - r > ws)
        clearInterval(o),
          Ut(!1),
          n(
            new ve({
              name: os,
              message: 'The account was not confirmed on time.',
              recoverySuggestion:
                'Try to verify your account by clicking the link sent your email or phone and then login manually.'
            })
          ),
          Pt()
      else
        try {
          const s = await Vo(e)
          s.nextStep.signInStep !== 'CONFIRM_SIGN_UP' &&
            (t(s), clearInterval(o), Ut(!1), Pt())
        } catch (s) {
          clearInterval(o), Ut(!1), n(s), Pt()
        }
    }, 5e3)
}
const xd = bs(Ad, 300),
  Nd = bs(Pd, 300)
let Is = !1,
  Cs
function As (e) {
  Cs = e
}
function Td (e) {
  return Cs === e
}
function on () {
  return Is
}
function Ut (e) {
  e === !1 && As(void 0), (Is = e)
}
function kn (e) {
  return !!e.UserConfirmed
}
function Rd (e) {
  return async () =>
    new Promise((t, n) => {
      xd([e, t, n])
    })
}
async function Pd (e, t, n) {
  try {
    const r = await Vo(e)
    t(r), Pt()
  } catch (r) {
    n(r), Pt()
  }
}
function xs (e) {
  return async () =>
    new Promise((t, n) => {
      Nd([e, t, n])
    })
}
const Ud = xs
async function Md (e) {
  var m
  const { username: t, password: n, options: r } = e,
    o = (m = we.getConfig().Auth) == null ? void 0 : m.Cognito,
    i = (o == null ? void 0 : o.signUpVerificationMethod) ?? 'code',
    { clientMetadata: a, validationData: s, autoSignIn: c } = e.options ?? {}
  _e(o), se(!!t, H.EmptySignUpUsername), se(!!n, H.EmptySignUpPassword)
  const l = typeof c != 'boolean' ? c : void 0,
    u = { username: t, options: l }
  ;(l == null ? void 0 : l.authFlowType) !== 'CUSTOM_WITHOUT_SRP' &&
    (u.password = n),
    (l || c === !0) && (As(t), Ut(!0))
  const f = await bl(
      { region: oe(o.userPoolId), userAgentValue: ue(Z.SignUp) },
      {
        Username: t,
        Password: n,
        UserAttributes:
          (r == null ? void 0 : r.userAttributes) &&
          Ni(r == null ? void 0 : r.userAttributes),
        ClientMetadata: a,
        ValidationData: s && Ni(s),
        ClientId: o.userPoolClientId
      }
    ),
    { UserSub: d, CodeDeliveryDetails: p } = f
  if (kn(f) && on())
    return (
      go(Ud(u)),
      {
        isSignUpComplete: !0,
        nextStep: { signUpStep: 'COMPLETE_AUTO_SIGN_IN' },
        userId: d
      }
    )
  if (kn(f) && !on())
    return { isSignUpComplete: !0, nextStep: { signUpStep: 'DONE' }, userId: d }
  if (!kn(f) && on() && i === 'code') Cd(u)
  else if (!kn(f) && on() && i === 'link')
    return (
      go(Rd(u)),
      {
        isSignUpComplete: !1,
        nextStep: {
          signUpStep: 'COMPLETE_AUTO_SIGN_IN',
          codeDeliveryDetails: {
            deliveryMedium: p == null ? void 0 : p.DeliveryMedium,
            destination: p == null ? void 0 : p.Destination,
            attributeName: p == null ? void 0 : p.AttributeName
          }
        },
        userId: d
      }
    )
  return {
    isSignUpComplete: !1,
    nextStep: {
      signUpStep: 'CONFIRM_SIGN_UP',
      codeDeliveryDetails: {
        deliveryMedium: p == null ? void 0 : p.DeliveryMedium,
        destination: p == null ? void 0 : p.Destination,
        attributeName: p == null ? void 0 : p.AttributeName
      }
    },
    userId: d
  }
}
async function Ns (e) {
  var l, u
  const { username: t } = e
  se(!!t, H.EmptyResetPasswordUsername)
  const n = (l = we.getConfig().Auth) == null ? void 0 : l.Cognito
  _e(n)
  const { userPoolClientId: r, userPoolId: o } = n,
    i = (u = e.options) == null ? void 0 : u.clientMetadata,
    a = be({ username: t, userPoolId: o, userPoolClientId: r }),
    c = (
      await Il(
        { region: oe(n.userPoolId), userAgentValue: ue(Z.ResetPassword) },
        {
          Username: t,
          ClientMetadata: i,
          ClientId: n.userPoolClientId,
          UserContextData: a
        }
      )
    ).CodeDeliveryDetails
  return {
    isPasswordReset: !1,
    nextStep: {
      resetPasswordStep: 'CONFIRM_RESET_PASSWORD_WITH_CODE',
      codeDeliveryDetails: {
        deliveryMedium: c == null ? void 0 : c.DeliveryMedium,
        destination: c == null ? void 0 : c.Destination,
        attributeName: c == null ? void 0 : c.AttributeName
      }
    }
  }
}
async function Fd (e) {
  var l, u
  const t = (l = we.getConfig().Auth) == null ? void 0 : l.Cognito
  _e(t)
  const { userPoolClientId: n, userPoolId: r } = t,
    { username: o, newPassword: i } = e
  se(!!o, H.EmptyConfirmResetPasswordUsername),
    se(!!i, H.EmptyConfirmResetPasswordNewPassword)
  const a = e.confirmationCode
  se(!!a, H.EmptyConfirmResetPasswordConfirmationCode)
  const s = (u = e.options) == null ? void 0 : u.clientMetadata,
    c = be({ username: o, userPoolId: r, userPoolClientId: n })
  await Cl(
    { region: oe(t.userPoolId), userAgentValue: ue(Z.ConfirmResetPassword) },
    {
      Username: o,
      ConfirmationCode: a,
      Password: i,
      ClientMetadata: s,
      ClientId: t.userPoolClientId,
      UserContextData: c
    }
  )
}
async function Ts (e) {
  var f, d
  const { username: t } = e
  se(!!t, H.EmptySignUpUsername)
  const n = (f = we.getConfig().Auth) == null ? void 0 : f.Cognito
  _e(n)
  const { userPoolClientId: r, userPoolId: o } = n,
    i = (d = e.options) == null ? void 0 : d.clientMetadata,
    a = be({ username: t, userPoolId: o, userPoolClientId: r }),
    { CodeDeliveryDetails: s } = await Al(
      { region: oe(n.userPoolId), userAgentValue: ue(Z.ResendSignUpCode) },
      {
        Username: t,
        ClientMetadata: i,
        ClientId: n.userPoolClientId,
        UserContextData: a
      }
    ),
    { DeliveryMedium: c, AttributeName: l, Destination: u } = { ...s }
  return { destination: u, deliveryMedium: c, attributeName: l || void 0 }
}
async function Od (e) {
  var l
  const { username: t, confirmationCode: n, options: r } = e,
    o = (l = we.getConfig().Auth) == null ? void 0 : l.Cognito
  _e(o)
  const { userPoolId: i, userPoolClientId: a } = o,
    s = r == null ? void 0 : r.clientMetadata
  se(!!t, H.EmptyConfirmSignUpUsername), se(!!n, H.EmptyConfirmSignUpCode)
  const c = be({ username: t, userPoolId: i, userPoolClientId: a })
  return (
    await xl(
      { region: oe(o.userPoolId), userAgentValue: ue(Z.ConfirmSignUp) },
      {
        Username: t,
        ConfirmationCode: n,
        ClientMetadata: s,
        ForceAliasCreation: r == null ? void 0 : r.forceAliasCreation,
        ClientId: o.userPoolClientId,
        UserContextData: c
      }
    ),
    new Promise((u, f) => {
      try {
        const d = { isSignUpComplete: !0, nextStep: { signUpStep: 'DONE' } }
        if (!on() || !Td(t)) {
          u(d)
          return
        }
        const p = nr.listen('auth-internal', ({ payload: m }) => {
          switch (m.event) {
            case 'autoSignIn':
              u({
                isSignUpComplete: !0,
                nextStep: { signUpStep: 'COMPLETE_AUTO_SIGN_IN' }
              }),
                Ut(!1),
                p()
          }
        })
        nr.dispatch('auth-internal', { event: 'confirmSignUp', data: d })
      } catch (d) {
        f(d)
      }
    })
  )
}
async function Rs (e) {
  var l
  const { challengeResponse: t, options: n } = e,
    {
      username: r,
      challengeName: o,
      signInSession: i,
      signInDetails: a
    } = lt.getState(),
    s = (l = we.getConfig().Auth) == null ? void 0 : l.Cognito
  _e(s)
  const c = n == null ? void 0 : n.clientMetadata
  if ((se(!!t, H.EmptyChallengeResponse), !r || !o || !i))
    throw new ve({
      name: _t.SignInException,
      message: `
			An error occurred during the sign in process. 
			
			This most likely occurred due to:
			1. signIn was not called before confirmSignIn.
			2. signIn threw an exception.
			3. page was refreshed during the sign in flow.
			`,
      recoverySuggestion:
        'Make sure a successful call to signIn is made before calling confirmSignInand that the page is not refreshed until the sign in process is done.'
    })
  try {
    const {
      Session: u,
      ChallengeName: f,
      AuthenticationResult: d,
      ChallengeParameters: p
    } = await yd(r, o, i, t, s, ct, c, n)
    return (
      bn({ signInSession: u, username: r, challengeName: f, signInDetails: a }),
      d
        ? (Qe(),
          await Et({
            username: r,
            ...d,
            NewDeviceMetadata: await An(
              s.userPoolId,
              d.NewDeviceMetadata,
              d.AccessToken
            ),
            signInDetails: a
          }),
          await Ht(),
          { isSignedIn: !0, nextStep: { signInStep: 'DONE' } })
        : In({ challengeName: f, challengeParameters: p })
    )
  } catch (u) {
    En(u)
    const f = Cn(u.name)
    if (f) return f
    throw u
  }
}
async function Dd (e) {
  var i
  const t = (i = we.getConfig().Auth) == null ? void 0 : i.Cognito
  _e(t)
  const { confirmationCode: n, userAttributeKey: r } = e
  se(!!n, H.EmptyConfirmUserAttributeCode)
  const { tokens: o } = await is({ forceRefresh: !1 })
  as(o),
    await Nl(
      { region: oe(t.userPoolId), userAgentValue: ue(Z.ConfirmUserAttribute) },
      { AccessToken: o.accessToken.toString(), AttributeName: r, Code: n }
    )
}
new yr('AuthError')
const kd = {
    oauthSignInError: {
      message: pe.OAUTH_ERROR,
      log: 'Make sure Cognito Hosted UI has been configured correctly'
    },
    noConfig: {
      message: pe.DEFAULT_MSG,
      log: `
            Error: Amplify has not been configured correctly.
            This error is typically caused by one of the following scenarios:

            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point
                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information
            
            2. There might be multiple conflicting versions of amplify packages in your node_modules.
				Refer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)
        `
    },
    missingAuthConfig: {
      message: pe.DEFAULT_MSG,
      log: `
            Error: Amplify has not been configured correctly. 
            The configuration object is missing required auth properties.
            This error is typically caused by one of the following scenarios:

            1. Did you run \`amplify push\` after adding auth via \`amplify add auth\`?
                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information

            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.
        `
    },
    emptyUsername: { message: pe.EMPTY_USERNAME },
    invalidUsername: { message: pe.INVALID_USERNAME },
    emptyPassword: { message: pe.EMPTY_PASSWORD },
    emptyCode: { message: pe.EMPTY_CODE },
    signUpError: {
      message: pe.SIGN_UP_ERROR,
      log: 'The first parameter should either be non-null string or object'
    },
    noMFA: { message: pe.NO_MFA },
    invalidMFA: { message: pe.INVALID_MFA },
    emptyChallengeResponse: { message: pe.EMPTY_CHALLENGE },
    noUserSession: { message: pe.NO_USER_SESSION },
    deviceConfig: { message: pe.DEVICE_CONFIG },
    networkError: { message: pe.NETWORK_ERROR },
    autoSignInError: { message: pe.AUTOSIGNIN_ERROR },
    default: { message: pe.DEFAULT_MSG }
  },
  St = (e, t) =>
    new ve({
      message: e ?? 'An error has occurred during the oauth process.',
      name: _t.OAuthSignInError,
      recoverySuggestion: kd.oauthSignInError.log
    })
var yo
;(function (e) {
  ;(e.NoConfig = 'noConfig'),
    (e.MissingAuthConfig = 'missingAuthConfig'),
    (e.EmptyUsername = 'emptyUsername'),
    (e.InvalidUsername = 'invalidUsername'),
    (e.EmptyPassword = 'emptyPassword'),
    (e.EmptyCode = 'emptyCode'),
    (e.SignUpError = 'signUpError'),
    (e.NoMFA = 'noMFA'),
    (e.InvalidMFA = 'invalidMFA'),
    (e.EmptyChallengeResponse = 'emptyChallengeResponse'),
    (e.NoUserSession = 'noUserSession'),
    (e.Default = 'default'),
    (e.DeviceConfig = 'deviceConfig'),
    (e.NetworkError = 'networkError'),
    (e.AutoSignInError = 'autoSignInError'),
    (e.OAuthSignInError = 'oauthSignInError')
})(yo || (yo = {}))
const Bd = '`signInWithRedirect` has been canceled.',
  Ld = 'An error occurred while validating the state.',
  jd = 'Try to initiate an OAuth flow from Amplify',
  Ps = async e => {
    const t = await Pe.loadOAuthState(),
      n = e === t ? t : void 0
    if (!n)
      throw new ve({
        name: yo.OAuthSignInError,
        message: e === null ? Bd : Ld,
        recoverySuggestion: e === null ? void 0 : jd
      })
    return n
  },
  Us = async ({
    currentUrl: e,
    userAgentValue: t,
    clientId: n,
    redirectUri: r,
    responseType: o,
    domain: i,
    preferPrivateSession: a
  }) => {
    const s = new vr(e),
      c = s.searchParams.get('error'),
      l = s.searchParams.get('error_description')
    if (c) throw St(l ?? c)
    return o === 'code'
      ? $d({
          currentUrl: e,
          userAgentValue: t,
          clientId: n,
          redirectUri: r,
          domain: i,
          preferPrivateSession: a
        })
      : Vd({ currentUrl: e, redirectUri: r, preferPrivateSession: a })
  },
  $d = async ({
    currentUrl: e,
    userAgentValue: t,
    clientId: n,
    redirectUri: r,
    domain: o,
    preferPrivateSession: i
  }) => {
    const a = new vr(e),
      s = a.searchParams.get('code'),
      c = a.searchParams.get('state')
    if (!s || !c) throw St('User cancelled OAuth flow.')
    const l = await Ps(c),
      u = 'https://' + o + '/oauth2/token',
      f = await Pe.loadPKCE(),
      d = {
        grant_type: 'authorization_code',
        code: s,
        client_id: n,
        redirect_uri: r,
        ...(f ? { code_verifier: f } : {})
      },
      p = Object.entries(d)
        .map(([A, N]) => `${encodeURIComponent(A)}=${encodeURIComponent(N)}`)
        .join('&'),
      {
        access_token: m,
        refresh_token: y,
        id_token: E,
        error: g,
        error_message: S,
        token_type: v,
        expires_in: w
      } = await (
        await fetch(u, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            [Tl]: t
          },
          body: p
        })
      ).json()
    if (g) throw St(S ?? g)
    const I = (m && er(m).payload.username) ?? 'username'
    return (
      await Et({
        username: I,
        AccessToken: m,
        IdToken: E,
        RefreshToken: y,
        TokenType: v,
        ExpiresIn: w
      }),
      Ms({ redirectUri: r, state: l, preferPrivateSession: i })
    )
  },
  Vd = async ({ currentUrl: e, redirectUri: t, preferPrivateSession: n }) => {
    const r = new vr(e),
      {
        id_token: o,
        access_token: i,
        state: a,
        token_type: s,
        expires_in: c,
        error_description: l,
        error: u
      } = (r.hash ?? '#')
        .substring(1)
        .split('&')
        .map(p => p.split('='))
        .reduce((p, [m, y]) => ({ ...p, [m]: y }), {
          id_token: void 0,
          access_token: void 0,
          state: void 0,
          token_type: void 0,
          expires_in: void 0,
          error_description: void 0,
          error: void 0
        })
    if (u) throw St(l ?? u)
    if (!i) throw St('No access token returned from OAuth flow.')
    const f = await Ps(a),
      d = (i && er(i).payload.username) ?? 'username'
    return (
      await Et({
        username: d,
        AccessToken: i,
        IdToken: o,
        TokenType: s,
        ExpiresIn: c
      }),
      Ms({ redirectUri: t, state: f, preferPrivateSession: n })
    )
  },
  Ms = async ({ redirectUri: e, state: t, preferPrivateSession: n }) => {
    await Pe.clearOAuthData(),
      await Pe.storeOAuthSignIn(!0, n),
      ss(),
      Hd(t) &&
        hn.dispatch(
          'auth',
          { event: 'customOAuthState', data: Xl(qd(t)) },
          'Auth',
          tr
        ),
      hn.dispatch('auth', { event: 'signInWithRedirect' }, 'Auth', tr),
      await Ht(),
      Wd(e)
  },
  Hd = e => /-/.test(e),
  qd = e => e.split('-').splice(1).join('-'),
  Wd = e => {
    typeof window < 'u' &&
      typeof window.history < 'u' &&
      window.history.replaceState(window.history.state, '', e)
  },
  qo = async e => {
    ss(),
      await Pe.clearOAuthInflightData(),
      hn.dispatch(
        'auth',
        { event: 'signInWithRedirect_failure', data: { error: e } },
        'Auth',
        tr
      )
  },
  zd = async e => {
    try {
      _e(e), cs(e), Pe.setAuthConfig(e)
    } catch {
      return
    }
    if (await Pe.loadOAuthInFlight())
      try {
        const t = window.location.href,
          { loginWith: n, userPoolClientId: r } = e,
          { domain: o, redirectSignIn: i, responseType: a } = n.oauth,
          s = hs(i)
        await Us({
          currentUrl: t,
          clientId: r,
          domain: o,
          redirectUri: s,
          responseType: a,
          userAgentValue: ue(Z.SignInWithRedirect)
        })
      } catch (t) {
        await qo(t)
      }
  }
ls() && we[Rl](zd)
const Gd = {
    Google: 'Google',
    Facebook: 'Facebook',
    Amazon: 'LoginWithAmazon',
    Apple: 'SignInWithApple'
  },
  ra = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  Kd = e => {
    const t = new Uint8Array(e)
    ns().getRandomValues(t)
    let n = '',
      r
    for (const o of t) n += ra.charAt(o % ra.length)
    return {
      value: n,
      method: 'S256',
      toCodeChallenge () {
        return r || ((r = Yd(n)), r)
      }
    }
  }
function Yd (e) {
  const t = new pn()
  return t.update(e), Jd(mn.convert(t.digestSync(), { urlSafe: !0 }))
}
function Jd (e) {
  return e.replace(/=/g, '')
}
const Zd = () => Ql(32),
  Qd = e => {
    async function t (n) {
      if (n.persisted && (await e.loadOAuthInFlight())) {
        const o = St('User cancelled OAuth flow.')
        await qo(o)
      }
      window.removeEventListener('pageshow', t)
    }
    window.addEventListener('pageshow', t)
  }
async function Fs (e) {
  var r, o, i
  const t = (r = we.getConfig().Auth) == null ? void 0 : r.Cognito
  _e(t), cs(t), Pe.setAuthConfig(t), await Ss()
  let n = 'COGNITO'
  return (
    typeof (e == null ? void 0 : e.provider) == 'string'
      ? (n = Gd[e.provider])
      : (o = e == null ? void 0 : e.provider) != null &&
        o.custom &&
        (n = e.provider.custom),
    Xd({
      oauthConfig: t.loginWith.oauth,
      clientId: t.userPoolClientId,
      provider: n,
      customState: e == null ? void 0 : e.customState,
      preferPrivateSession:
        (i = e == null ? void 0 : e.options) == null
          ? void 0
          : i.preferPrivateSession
    })
  )
}
const Xd = async ({
    oauthConfig: e,
    provider: t,
    clientId: n,
    customState: r,
    preferPrivateSession: o
  }) => {
    const { domain: i, redirectSignIn: a, responseType: s, scopes: c } = e,
      l = Zd(),
      u = r ? `${l}-${eu(r)}` : l,
      { value: f, method: d, toCodeChallenge: p } = Kd(128),
      m = hs(e.redirectSignIn)
    ls() && Pe.storeOAuthInFlight(!0), Pe.storeOAuthState(u), Pe.storePKCE(f)
    const y = Object.entries({
        redirect_uri: m,
        response_type: s,
        client_id: n,
        identity_provider: t,
        scope: c.join(' '),
        state: u,
        ...(s === 'code' && { code_challenge: p(), code_challenge_method: d })
      })
        .map(([w, I]) => `${encodeURIComponent(w)}=${encodeURIComponent(I)}`)
        .join('&'),
      E = `https://${i}/oauth2/authorize?${y}`
    Qd(Pe)
    const { type: g, error: S, url: v } = (await Gl(E)) ?? {}
    try {
      if (g === 'error') throw St(String(S))
      g === 'success' &&
        v &&
        (await Us({
          currentUrl: v,
          clientId: n,
          domain: i,
          redirectUri: m,
          responseType: s,
          userAgentValue: ue(Z.SignInWithRedirect),
          preferPrivateSession: o
        }))
    } catch (w) {
      throw (await qo(w), w)
    }
  },
  ef = async e => {
    var u
    const { userAttributeKey: t, options: n } = e,
      r = (u = we.getConfig().Auth) == null ? void 0 : u.Cognito,
      o = n == null ? void 0 : n.clientMetadata
    _e(r)
    const { tokens: i } = await is({ forceRefresh: !1 })
    as(i)
    const { CodeDeliveryDetails: a } = await Pl(
        {
          region: oe(r.userPoolId),
          userAgentValue: ue(Z.SendUserAttributeVerificationCode)
        },
        {
          AccessToken: i.accessToken.toString(),
          ClientMetadata: o,
          AttributeName: t
        }
      ),
      { DeliveryMedium: s, AttributeName: c, Destination: l } = { ...a }
    return { destination: l, deliveryMedium: s, attributeName: c }
  },
  tf = {
    __name: 'redirect',
    props: { path: { type: String, required: !1, default: '/' } },
    setup (e) {
      const t = us()
      return (
        Sr(() => {
          console.log(`redirecting to ${e.path}`), t.replace(e.path)
        }),
        (n, r) => null
      )
    }
  },
  nf = tf,
  je = ee({
    __name: 'base-footer',
    setup (e) {
      const t = Oo()
      return (n, r) =>
        x(
          n.$slots,
          'footert',
          Me(n.$attrs, { slotData: h(t).default && h(t).default() }),
          () => [j('footer', ce(le(n.$attrs)), [x(n.$slots, 'default')], 16)]
        )
    }
  }),
  $e = ee({
    __name: 'base-form',
    setup (e) {
      const t = Oo()
      return (n, r) =>
        x(
          n.$slots,
          'formt',
          Me(n.$attrs, { slotData: h(t).default && h(t).default() }),
          () => [
            j(
              'form',
              Me({ 'data-amplify-form': '' }, n.$attrs),
              [x(n.$slots, 'default')],
              16
            )
          ]
        )
    }
  }),
  xr = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, o] of t) n[r] = o
    return n
  },
  rf = {}
function of (e, t) {
  return P(), ie('div', null, [x(e.$slots, 'default')])
}
const Ce = xr(rf, [['render', of]]),
  af = [
    'type',
    'data-fullwidth',
    'data-size',
    'data-fontWeight',
    'data-variation',
    'data-loading',
    'data-disabled',
    'disabled'
  ],
  Fe = ee({
    __name: 'amplify-button',
    props: {
      type: null,
      fullWidth: { type: [Boolean, String] },
      size: null,
      variation: null,
      fontWeight: null,
      loading: { type: [Boolean, String] },
      disabled: { type: [Boolean, String] }
    },
    setup (e) {
      const t = e,
        { type: n, fullWidth: r, size: o, variation: i, fontWeight: a } = ae(t)
      return (s, c) =>
        x(s.$slots, 'buttont', ce(le(s.$attrs)), () => [
          j(
            'button',
            Me(
              {
                class: [
                  'amplify-button amplify-field-group__control',
                  {
                    [`amplify-button--${h(i)}`]: h(i),
                    [`amplify-button--${h(o)}`]: h(o),
                    'amplify-button--fullwidth': h(r),
                    'amplify-button--loading': e.loading,
                    'amplify-button--disabled': e.disabled
                  }
                ],
                type: h(n),
                style: { fontWeight: h(a) },
                'data-fullwidth': h(r),
                'data-size': h(o),
                'data-fontWeight': h(a),
                'data-variation': h(i),
                'data-loading': e.loading,
                'data-disabled': e.disabled,
                disabled: e.disabled
              },
              s.$attrs,
              { 'data-amplify-button': '' }
            ),
            [x(s.$slots, 'default')],
            16,
            af
          )
        ])
    }
  }),
  Wo = e => {
    var t
    return (t = e.context.actorRef) == null ? void 0 : t.getSnapshot()
  },
  zo = e => {
    var t
    return (t = Wo(e)) == null ? void 0 : t.context
  },
  sf = { apis: [Z.DeleteUser, Z.UpdatePassword], category: jt.Auth },
  cf = {
    apis: [
      Z.SignUp,
      Z.ConfirmSignUp,
      Z.ResendSignUpCode,
      Z.SignIn,
      Z.ConfirmSignIn,
      Z.FetchUserAttributes,
      Z.SignOut,
      Z.ResetPassword,
      Z.ConfirmResetPassword,
      Z.SignInWithRedirect
    ],
    category: jt.Auth
  },
  lf = { apis: [Ul.NotifyMessageInteraction], category: jt.InAppMessaging },
  uf = {
    category: jt.Geo,
    apis: [Qr.SearchByText, Qr.SearchForSuggestions, Qr.SearchByPlaceId]
  },
  df = { category: jt.Geo, apis: [] },
  ff = { apis: [Ml.UploadData], category: jt.Storage }
function gn (e) {
  return e != null && !Array.isArray(e) && typeof e == 'object'
}
function Os (e) {
  return (
    typeof e == 'string' ||
    (typeof e == 'object' &&
      Object.prototype.toString.call(e) === '[object String]')
  )
}
function pf (e) {
  return gn(e) && Object.prototype.toString.call(e) === '[object Map]'
}
function hf (e) {
  return gn(e) && Object.prototype.toString.call(e) === '[object Set]'
}
function Ds (e) {
  if (e == null) return !0
  if (gn(e) && (pf(e) || hf(e))) return !e.size
  if (gn(e) && (Os(e) || Array.isArray(e))) return !e.length
  for (const t in e) if (gf(e, t)) return !1
  return !0
}
function mf (e) {
  return gn(e) && Ds(e)
}
function gf (e, t) {
  return e != null && Object.prototype.hasOwnProperty.call(e, t)
}
function oa (e) {
  return typeof e == 'function'
}
function yf (...e) {}
const ks = ({ payload: e }, t, n) => {
    const { event: r } = e,
      { send: o } = t,
      { onSignIn: i, onSignOut: a } = n ?? {}
    switch (r) {
      case 'signedIn': {
        oa(i) && i(e)
        break
      }
      case 'signInWithRedirect': {
        o('SIGN_IN_WITH_REDIRECT')
        break
      }
      case 'signedOut':
      case 'tokenRefresh_failure': {
        r === 'signedOut' && oa(a) && a(), o('SIGN_OUT')
        break
      }
    }
  },
  vf = (e, t = ks) => {
    const n = r => t(r, e)
    return hn.listen('auth', n, 'authenticator-hub-handler')
  },
  _f = [
    '+1',
    '+7',
    '+20',
    '+27',
    '+30',
    '+31',
    '+32',
    '+33',
    '+34',
    '+36',
    '+39',
    '+40',
    '+41',
    '+43',
    '+44',
    '+45',
    '+46',
    '+47',
    '+48',
    '+49',
    '+51',
    '+52',
    '+53',
    '+54',
    '+55',
    '+56',
    '+57',
    '+58',
    '+60',
    '+61',
    '+62',
    '+63',
    '+64',
    '+65',
    '+66',
    '+81',
    '+82',
    '+84',
    '+86',
    '+90',
    '+91',
    '+92',
    '+93',
    '+94',
    '+95',
    '+98',
    '+212',
    '+213',
    '+216',
    '+218',
    '+220',
    '+221',
    '+222',
    '+223',
    '+224',
    '+225',
    '+226',
    '+227',
    '+228',
    '+229',
    '+230',
    '+231',
    '+232',
    '+233',
    '+234',
    '+235',
    '+236',
    '+237',
    '+238',
    '+239',
    '+240',
    '+241',
    '+242',
    '+243',
    '+244',
    '+245',
    '+246',
    '+248',
    '+249',
    '+250',
    '+251',
    '+252',
    '+253',
    '+254',
    '+255',
    '+256',
    '+257',
    '+258',
    '+260',
    '+261',
    '+262',
    '+263',
    '+264',
    '+265',
    '+266',
    '+267',
    '+268',
    '+269',
    '+290',
    '+291',
    '+297',
    '+298',
    '+299',
    '+345',
    '+350',
    '+351',
    '+352',
    '+353',
    '+354',
    '+355',
    '+356',
    '+357',
    '+358',
    '+359',
    '+370',
    '+371',
    '+372',
    '+373',
    '+374',
    '+375',
    '+376',
    '+377',
    '+378',
    '+379',
    '+380',
    '+381',
    '+382',
    '+385',
    '+386',
    '+387',
    '+389',
    '+420',
    '+421',
    '+423',
    '+500',
    '+501',
    '+502',
    '+503',
    '+504',
    '+505',
    '+506',
    '+507',
    '+508',
    '+509',
    '+537',
    '+590',
    '+591',
    '+593',
    '+594',
    '+595',
    '+596',
    '+597',
    '+598',
    '+599',
    '+670',
    '+672',
    '+673',
    '+674',
    '+675',
    '+676',
    '+677',
    '+678',
    '+679',
    '+680',
    '+681',
    '+682',
    '+683',
    '+685',
    '+686',
    '+687',
    '+688',
    '+689',
    '+690',
    '+691',
    '+692',
    '+850',
    '+852',
    '+853',
    '+855',
    '+856',
    '+872',
    '+880',
    '+886',
    '+960',
    '+961',
    '+962',
    '+963',
    '+964',
    '+965',
    '+966',
    '+967',
    '+968',
    '+970',
    '+971',
    '+972',
    '+973',
    '+974',
    '+975',
    '+976',
    '+977',
    '+992',
    '+993',
    '+994',
    '+995',
    '+996',
    '+998'
  ],
  yn = {
    birthdate: {
      label: 'Birthdate',
      placeholder: 'Enter your Birthdate',
      type: 'date',
      autocomplete: 'bday',
      isRequired: !0
    },
    confirmation_code: {
      label: 'Confirmation Code',
      placeholder: 'Enter your Confirmation Code',
      type: 'text',
      autocomplete: 'one-time-code',
      isRequired: !0
    },
    confirm_password: {
      label: 'Confirm Password',
      placeholder: 'Please confirm your Password',
      type: 'password',
      autocomplete: 'new-password',
      isRequired: !0
    },
    email: {
      label: 'Email',
      placeholder: 'Enter your Email',
      type: 'email',
      autocomplete: 'username',
      isRequired: !0
    },
    family_name: {
      label: 'Family Name',
      placeholder: 'Enter your Family Name',
      type: 'text',
      autocomplete: 'family-name',
      isRequired: !0
    },
    given_name: {
      label: 'Given Name',
      placeholder: 'Enter your Given Name',
      type: 'text',
      autocomplete: 'given-name',
      isRequired: !0
    },
    middle_name: {
      label: 'Middle Name',
      placeholder: 'Enter your Middle Name',
      type: 'text',
      autocomplete: 'additional-name',
      isRequired: !0
    },
    name: {
      label: 'Name',
      placeholder: 'Enter your Name',
      type: 'text',
      autocomplete: 'name',
      isRequired: !0
    },
    nickname: {
      label: 'Nickname',
      placeholder: 'Enter your Nickname',
      type: 'text',
      autocomplete: 'tel',
      isRequired: !0
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your Password',
      type: 'password',
      autocomplete: 'new-password',
      isRequired: !0
    },
    phone_number: {
      label: 'Phone Number',
      placeholder: 'Enter your Phone Number',
      type: 'tel',
      autocomplete: 'tel',
      dialCode: '+1',
      dialCodeList: _f,
      isRequired: !0
    },
    preferred_username: {
      label: 'Preferred Username',
      placeholder: 'Enter your Preferred Username',
      type: 'text',
      isRequired: !0
    },
    profile: {
      label: 'Profile',
      placeholder: 'Add your Profile',
      type: 'url',
      autocomplete: 'url',
      isRequired: !0
    },
    website: {
      label: 'Website',
      placeholder: 'Add your Website',
      type: 'url',
      autocomplete: 'url',
      isRequired: !0
    },
    username: {
      label: 'Username',
      placeholder: 'Enter your Username',
      type: 'text',
      autocomplete: 'username',
      isRequired: !0
    }
  },
  Sf = [
    '^',
    '$',
    '*',
    '.',
    '[',
    ']',
    '{',
    '}',
    '(',
    ')',
    '?',
    '"',
    '!',
    '@',
    '#',
    '%',
    '&',
    '/',
    '\\',
    ',',
    '>',
    '<',
    "'",
    ':',
    ';',
    '|',
    '_',
    '~',
    '`',
    '=',
    '+',
    '-',
    ' '
  ],
  Ef = (e, t) => {
    if (t != null && t.matches('federatedSignIn')) {
      if (e.matches('signUpActor')) return 'signUp'
      if (e.matches('signInActor')) return 'signIn'
    }
    switch (!0) {
      case e.matches('idle'):
        return 'idle'
      case e.matches('setup'):
        return 'setup'
      case e.matches('signOut'):
        return 'signOut'
      case e.matches('authenticated'):
        return 'authenticated'
      case t == null ? void 0 : t.matches('confirmSignUp'):
      case t == null ? void 0 : t.matches('resendSignUpCode'):
        return 'confirmSignUp'
      case t == null ? void 0 : t.matches('confirmSignIn'):
        return 'confirmSignIn'
      case t == null ? void 0 : t.matches('setupTotp.edit'):
      case t == null ? void 0 : t.matches('setupTotp.submit'):
        return 'setupTotp'
      case t == null ? void 0 : t.matches('signIn'):
        return 'signIn'
      case t == null ? void 0 : t.matches('signUp'):
      case t == null ? void 0 : t.matches('autoSignIn'):
        return 'signUp'
      case t == null ? void 0 : t.matches('forceChangePassword'):
        return 'forceNewPassword'
      case t == null ? void 0 : t.matches('forgotPassword'):
        return 'forgotPassword'
      case t == null ? void 0 : t.matches('confirmResetPassword'):
        return 'confirmResetPassword'
      case t == null ? void 0 : t.matches('selectUserAttributes'):
        return 'verifyUser'
      case t == null ? void 0 : t.matches('confirmVerifyUserAttribute'):
        return 'confirmVerifyUser'
      case e.matches('getCurrentUser'):
      case t == null ? void 0 : t.matches('fetchUserAttributes'):
        return 'transition'
      default:
        return null
    }
  },
  wf = e => {
    const t = n => r => e({ type: n, data: r })
    return {
      initializeMachine: t('INIT'),
      resendCode: t('RESEND'),
      signOut: t('SIGN_OUT'),
      submitForm: t('SUBMIT'),
      updateForm: t('CHANGE'),
      updateBlur: t('BLUR'),
      toFederatedSignIn: t('FEDERATED_SIGN_IN'),
      toForgotPassword: t('FORGOT_PASSWORD'),
      toSignIn: t('SIGN_IN'),
      toSignUp: t('SIGN_UP'),
      skipVerification: t('SKIP')
    }
  },
  bf = e => {
    var t, n
    const r = zo(e) ?? {},
      {
        challengeName: o,
        codeDeliveryDetails: i,
        remoteError: a,
        validationError: s,
        totpSecretCode: c = null,
        unverifiedUserAttributes: l,
        username: u
      } = r,
      { socialProviders: f = [] } =
        ((t = e.context) == null ? void 0 : t.config) ?? {},
      d =
        (r == null ? void 0 : r.user) ??
        ((n = e.context) == null ? void 0 : n.user),
      p = !!(s && Object.keys(s).length > 0),
      m = Wo(e),
      y = e.hasTag('pending') || (m == null ? void 0 : m.hasTag('pending')),
      E = Ef(e, m)
    return {
      authStatus: (g => {
        switch (g) {
          case 'idle':
          case 'setup':
            return 'configuring'
          case 'authenticated':
            return 'authenticated'
          default:
            return 'unauthenticated'
        }
      })(E),
      challengeName: o,
      codeDeliveryDetails: i,
      error: a,
      hasValidationErrors: p,
      isPending: y,
      route: E,
      socialProviders: f,
      totpSecretCode: c,
      unverifiedUserAttributes: l,
      user: d,
      username: u,
      validationErrors: s
    }
  },
  If = ({ send: e, state: t }) => {
    const n = wf(e),
      r = bf(t)
    return { ...n, ...r }
  }
var vo
;(function (e) {
  ;(e.Apple = 'Apple'),
    (e.Amazon = 'Amazon'),
    (e.Facebook = 'Facebook'),
    (e.Google = 'Google')
})(vo || (vo = {}))
var ia
;(function (e) {
  ;(e.Email = 'email'), (e.PhoneNumber = 'phone_number')
})(ia || (ia = {}))
const Cf = [
    'birthdate',
    'email',
    'family_name',
    'given_name',
    'middle_name',
    'name',
    'nickname',
    'phone_number',
    'preferred_username',
    'profile',
    'website'
  ],
  Af = ['username', 'email', 'phone_number'],
  Bs = [...Af, ...Cf, 'confirmation_code', 'password', 'confirm_password'],
  xf = e => Bs.includes(e),
  Ve = e => {
    const t = new FormData(e.target)
    return Object.fromEntries(t)
  },
  Ls = e => Bs.includes(e),
  Nf = e => Array.isArray(e),
  Tf = e => (e ? (Nf(e) ? e : [e]) : null),
  Rf = e => {
    const t = e.trim().split('')
    for (let n = 0; n < t.length; n++) n > 0 && n < t.length - 1 && (t[n] = '*')
    return t.join('')
  },
  Pf = e => {
    if (e.length < 4) return e
    const t = e.split('')
    for (let n = 0; n < t.length - 4; n++) t[n] = '*'
    return t.join('')
  },
  Uf = e => {
    const t = e.split('@')
    return `${Rf(t[0])}@${t[1]}`
  },
  Mf = (e, t) => (e === 'Phone Number' ? Pf(t) : Uf(t)),
  Ff = e => Sf.some(t => e.includes(t)),
  Of = (e, t, n) =>
    encodeURI(`otpauth://totp/${e}:${t}?secret=${n}&issuer=${e}`)
function Df (e, ...t) {
  return Object.entries(e).reduce(
    (n, [r, o]) => ({
      ...n,
      [r]: t.includes(r) ? o : o == null ? void 0 : o.trim()
    }),
    {}
  )
}
const kf = {
    ADD_PROFILE: 'Add your Profile',
    ADD_WEBSITE: 'Add your Website',
    BACK_SIGN_IN: 'Back to Sign In',
    BIRTHDATE: 'Birthdate',
    CHANGE_PASSWORD: 'Change Password',
    CHANGING_PASSWORD: 'Changing',
    CODE: 'Code',
    CODE_ARRIVAL: 'It may take a minute to arrive',
    CODE_EMAILED:
      'Your code is on the way. To log in, enter the code we emailed to',
    CODE_SENT: 'Your code is on the way. To log in, enter the code we sent you',
    CODE_TEXTED:
      'Your code is on the way. To log in, enter the code we texted to',
    CONFIRM_PASSWORD: 'Confirm Password',
    CONFIRM_PASSWORD_PLACEHOLDER: 'Please confirm your Password',
    CONFIRM_RESET_PASSWORD_HEADING: 'Reset your Password',
    CONFIRM_SIGNUP_HEADING: 'Confirm Sign Up',
    CONFIRM_SMS: 'Confirm SMS Code',
    CONFIRM_MFA_DEFAULT: 'Confirm MFA Code',
    CONFIRM_TOTP: 'Confirm TOTP Code',
    CONFIRM: 'Confirm',
    CONFIRMATION_CODE: 'Confirmation Code',
    CONFIRMING: 'Confirming',
    CREATE_ACCOUNT: 'Create Account',
    CREATING_ACCOUNT: 'Creating Account',
    EMAIL_ADDRESS: 'Email',
    ENTER_BIRTHDATE: 'Enter your Birthdate',
    ENTER_CODE: 'Enter your code',
    ENTER_CONFIRMATION_CODE: 'Enter your Confirmation Code',
    ENTER_EMAIL: 'Enter your Email',
    ENTER_FAMILY_NAME: 'Enter your Family Name',
    ENTER_GIVEN_NAME: 'Enter your Given Name',
    ENTER_MIDDLE_NAME: 'Enter your Middle Name',
    ENTER_NAME: 'Enter your Name',
    ENTER_NICK_NAME: 'Enter your Nickname',
    ENTER_PASSWORD: 'Enter your Password',
    ENTER_PHONE_NUMBER: 'Enter your Phone Number',
    ENTER_PREFERRED_USERNAME: 'Enter your Preferred Username',
    ENTER_USERNAME: 'Enter your username',
    FAMILY_NAME: 'Family Name',
    GIVEN_NAME: 'Given Name',
    FORGOT_PASSWORD: 'Forgot Password?',
    FORGOT_YOUR_PASSWORD: 'Forgot your password?',
    HIDE_PASSWORD: 'Hide password',
    LOADING: 'Loading',
    LOGIN_NAME: 'Username',
    MIDDLE_NAME: 'Middle Name',
    NAME: 'Name',
    NICKNAME: 'Nickname',
    NEW_PASSWORD: 'New password',
    OR: 'or',
    PASSWORD: 'Password',
    PHONE_NUMBER: 'Phone Number',
    PREFERRED_USERNAME: 'Preferred Username',
    PROFILE: 'Profile',
    RESEND_CODE: 'Resend Code',
    RESET_PASSWORD_HEADING: 'Reset your password',
    RESET_PASSWORD: 'Reset Password',
    SEND_CODE: 'Send code',
    SENDING: 'Sending',
    SETUP_TOTP: 'Setup TOTP',
    SHOW_PASSWORD: 'Show password',
    SIGN_IN_BUTTON: 'Sign in',
    SIGN_IN_TAB: 'Sign In',
    SIGN_IN_WITH_AMAZON: 'Sign In with Amazon',
    SIGN_IN_WITH_APPLE: 'Sign In with Apple',
    SIGN_IN_WITH_FACEBOOK: 'Sign In with Facebook',
    SIGN_IN_WITH_GOOGLE: 'Sign In with Google',
    SIGN_IN: 'Sign in to your account',
    SIGN_UP_BUTTON: 'Create a new account',
    SIGNING_IN_BUTTON: 'Signing in',
    SKIP: 'Skip',
    SUBMIT: 'Submit',
    SUBMITTING: 'Submitting',
    UPPERCASE_COPY: 'COPY',
    VERIFY_CONTACT: 'Verify Contact',
    VERIFY_HEADING: 'Account recovery requires verified contact information',
    VERIFY: 'Verify',
    WE_EMAILED: 'We Emailed You',
    WE_SENT_CODE: 'We Sent A Code',
    WE_TEXTED: 'We Texted You',
    WEBSITE: 'Website'
  },
  Bf = { ...kf },
  V = { ...Bf }
function U (e) {
  return Je.get(e)
}
const Go = e => {
    var t
    const n =
        (t = e == null ? void 0 : e.context.config) == null
          ? void 0
          : t.loginMechanisms,
      [r] = n ?? ['username']
    return r
  },
  Lf = e => {
    const t = { ...e }
    for (const [n, r] of Object.entries(e)) {
      const { label: o, placeholder: i } = r
      t[n] = { ...r, label: o ? U(o) : void 0, placeholder: i ? U(i) : void 0 }
    }
    return t
  },
  jf = e =>
    Object.entries(e)
      .sort((t, n) => {
        const r = t[1].order || Number.MAX_VALUE,
          o = n[1].order || Number.MAX_VALUE
        return r - o
      })
      .filter(t => t[1] !== void 0),
  $f = '+1',
  ut = e => {
    let t = yn[e]
    const { type: n } = t
    return n === 'tel' && (t = { ...t, dialCode: $f }), t
  },
  Nr = e => {
    const t = Go(e)
    return { ...ut(t), autocomplete: 'username' }
  },
  Jn = e => ({
    confirmation_code: {
      ...ut('confirmation_code'),
      label: 'Code *',
      placeholder: 'Code'
    }
  }),
  Vf = e => ({
    username: { ...Nr(e) },
    password: { ...ut('password'), autocomplete: 'current-password' }
  }),
  Hf = e => {
    const { loginMechanisms: t, signUpAttributes: n } = e.context.config,
      r = Go(e),
      o = Array.from(new Set([...t, 'password', 'confirm_password', ...n])),
      i = {}
    for (const a of o)
      if (Ls(a)) {
        const s = a === r ? Nr(e) : ut(a)
        i[a] = { ...s }
      } else
        console.debug(
          `Authenticator does not have a default implementation for ${a}. Customize SignUp FormFields to add your own.`
        )
    return i
  },
  qf = e => ({
    confirmation_code: {
      ...ut('confirmation_code'),
      placeholder: 'Enter your code'
    }
  }),
  Wf = e => {
    const t = Go(e),
      { label: n } = yn[t]
    return {
      username: {
        ...Nr(e),
        label: `Enter your ${n.toLowerCase()}`,
        placeholder: `Enter your ${n.toLowerCase()}`
      }
    }
  },
  zf = e => ({
    ...Jn(),
    password: {
      ...ut('password'),
      label: 'New Password',
      placeholder: 'New Password'
    },
    confirm_password: {
      ...ut('confirm_password'),
      label: 'Confirm Password',
      placeholder: 'Confirm Password'
    }
  }),
  Gf = e => {
    const t = Wo(e),
      { missingAttributes: n } = t.context,
      r = Array.from(new Set(['password', 'confirm_password', ...(n ?? [])])),
      o = {}
    for (const i of r)
      Ls(i)
        ? (o[i] = { ...ut(i) })
        : console.debug(
            `Authenticator does not have a default implementation for ${i}. Customize ForceNewPassword FormFields to add your own.`
          )
    return o
  },
  Kf = {
    signIn: Vf,
    signUp: Hf,
    confirmSignUp: qf,
    confirmSignIn: Jn,
    forceNewPassword: Gf,
    forgotPassword: Wf,
    confirmResetPassword: zf,
    confirmVerifyUser: Jn,
    setupTotp: Jn
  },
  Yf = (e, t) => {
    const n = Kf[e]
    return n(t)
  },
  Jf = (e, t) => {
    var n, r
    const o =
      (r = (n = zo(t)) == null ? void 0 : n.formFields) == null ? void 0 : r[e]
    return !o || Object.keys(o).length === 0
      ? {}
      : Object.entries(o).reduce((i, [a, s]) => {
          if ((e === 'signIn' || e === 'forgotPassword') && a === 'username') {
            const c = { ...Nr(t), ...s }
            return { ...i, [a]: c }
          } else if (xf(a)) {
            const c = { ...yn[a], ...s }
            return { ...i, [a]: c }
          } else return { ...i, [a]: s }
        }, {})
  },
  Zf = (e, t) => {
    const n = Yf(e, t),
      r = Jf(e, t),
      o = { ...n, ...r }
    return delete o.QR, Lf(o)
  },
  Qf = e =>
    e.map(t => {
      const n = t[0],
        r = { ...t[1], order: void 0 }
      return [n, r]
    }),
  Xf = (e, t) => {
    const n = Zf(e, t)
    return Qf(jf(n))
  },
  ep = e => {
    switch (e) {
      case 'SMS_MFA':
        return U(V.CONFIRM_SMS)
      case 'SOFTWARE_TOKEN_MFA':
        return U(V.CONFIRM_TOTP)
      default:
        return U(V.CONFIRM_MFA_DEFAULT)
    }
  },
  tp = e => {
    const { DeliveryMedium: t, Destination: n } = e ?? {},
      r = t === 'EMAIL',
      o = t === 'SMS',
      i = U(V.CODE_ARRIVAL)
    return r || o
      ? `${U(r ? V.CODE_EMAILED : V.CODE_TEXTED)} ${n}. ${i}.`
      : `${U(V.CODE_SENT)}. ${i}.`
  },
  np = e => {
    const { DeliveryMedium: t } = e ?? {},
      n = t === 'EMAIL'
    return U(
      !n && t === 'SMS' ? V.WE_SENT_CODE : n ? V.WE_EMAILED : V.WE_TEXTED
    )
  },
  rp = {
    amazon: 'Amazon',
    apple: 'Apple',
    facebook: 'Facebook',
    google: 'Google'
  },
  op = (e, t) => U(`Sign ${e === 'signIn' ? 'In' : 'Up'} with ${rp[t]}`),
  Oe = {
    getBackToSignInText: () => U(V.BACK_SIGN_IN),
    getChangePasswordText: () => U(V.CHANGE_PASSWORD),
    getChangingText: () => U(V.CHANGING_PASSWORD),
    getConfirmText: () => U(V.CONFIRM),
    getConfirmingText: () => U(V.CONFIRMING),
    getCopyText: () => U(V.UPPERCASE_COPY),
    getHidePasswordText: () => U(V.HIDE_PASSWORD),
    getLoadingText: () => U(V.LOADING),
    getOrText: () => U(V.OR),
    getResendCodeText: () => U(V.RESEND_CODE),
    getSendCodeText: () => U(V.SEND_CODE),
    getSendingText: () => U(V.SENDING),
    getShowPasswordText: () => U(V.SHOW_PASSWORD),
    getSubmitText: () => U(V.SUBMIT),
    getSubmittingText: () => U(V.SUBMITTING),
    getSignInTabText: () => U(V.SIGN_IN_TAB),
    getSignUpTabText: () => U(V.CREATE_ACCOUNT),
    getForgotPasswordText: e =>
      U(e ? V.FORGOT_PASSWORD : V.FORGOT_YOUR_PASSWORD),
    getSigningInText: () => U(V.SIGNING_IN_BUTTON),
    getSignInText: () => U(V.SIGN_IN_BUTTON),
    getCreatingAccountText: () => U(V.CREATING_ACCOUNT),
    getCreateAccountText: () => U(V.CREATE_ACCOUNT),
    getDeliveryMessageText: tp,
    getDeliveryMethodText: np,
    getChallengeText: ep,
    getResetYourPasswordText: () => U(V.RESET_PASSWORD),
    getSetupTotpText: () => U(V.SETUP_TOTP),
    getSetupTotpInstructionsText: () =>
      U(
        'Copy and paste the secret key below into an authenticator app and then enter the code in the text field below.'
      ),
    getCopiedText: () => U('COPIED'),
    getSignInWithFederationText: op,
    getSkipText: () => U(V.SKIP),
    getVerifyText: () => U(V.VERIFY),
    getVerifyContactText: () => U(V.VERIFY_CONTACT),
    getAccountRecoveryInfoText: () => U(V.VERIFY_HEADING),
    getInvalidEmailText: () => U('Please enter a valid email'),
    getRequiredFieldText: () => U('This field is required')
  }
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var C =
  function () {
    return (
      (C =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n]
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          }
          return e
        }),
      C.apply(this, arguments)
    )
  }
function Ko (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]])
  return n
}
function z (e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    n = t && e[t],
    r = 0
  if (n) return n.call(e)
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        )
      }
    }
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  )
}
function K (e, t) {
  var n = typeof Symbol == 'function' && e[Symbol.iterator]
  if (!n) return e
  var r = n.call(e),
    o,
    i = [],
    a
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) i.push(o.value)
  } catch (s) {
    a = { error: s }
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r)
    } finally {
      if (a) throw a.error
    }
  }
  return i
}
function te (e, t, n) {
  if (arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]))
  return e.concat(i || Array.prototype.slice.call(t))
}
var X
;(function (e) {
  ;(e.Start = 'xstate.start'),
    (e.Stop = 'xstate.stop'),
    (e.Raise = 'xstate.raise'),
    (e.Send = 'xstate.send'),
    (e.Cancel = 'xstate.cancel'),
    (e.NullEvent = ''),
    (e.Assign = 'xstate.assign'),
    (e.After = 'xstate.after'),
    (e.DoneState = 'done.state'),
    (e.DoneInvoke = 'done.invoke'),
    (e.Log = 'xstate.log'),
    (e.Init = 'xstate.init'),
    (e.Invoke = 'xstate.invoke'),
    (e.ErrorExecution = 'error.execution'),
    (e.ErrorCommunication = 'error.communication'),
    (e.ErrorPlatform = 'error.platform'),
    (e.ErrorCustom = 'xstate.error'),
    (e.Update = 'xstate.update'),
    (e.Pure = 'xstate.pure'),
    (e.Choose = 'xstate.choose')
})(X || (X = {}))
var dt
;(function (e) {
  ;(e.Parent = '#_parent'), (e.Internal = '#_internal')
})(dt || (dt = {}))
var or = X.Start,
  Tr = X.Stop,
  qt = X.Raise,
  Nn = X.Send,
  Yo = X.Cancel,
  js = X.NullEvent,
  Rr = X.Assign,
  ip = X.After,
  ap = X.DoneState,
  Pr = X.Log,
  $s = X.Init,
  ir = X.Invoke,
  sp = X.ErrorExecution,
  _o = X.ErrorPlatform,
  Jo = X.ErrorCustom,
  Ur = X.Update,
  Vs = X.Choose,
  Hs = X.Pure
const cp = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      after: ip,
      assign: Rr,
      cancel: Yo,
      choose: Vs,
      doneState: ap,
      error: Jo,
      errorExecution: sp,
      errorPlatform: _o,
      init: $s,
      invoke: ir,
      log: Pr,
      nullEvent: js,
      pure: Hs,
      raise: qt,
      send: Nn,
      start: or,
      stop: Tr,
      update: Ur
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
var qs = '.',
  aa = {},
  So = 'xstate.guard',
  lp = '',
  Xr
function Zo (e, t, n) {
  n === void 0 && (n = qs)
  var r = un(e, n),
    o = un(t, n)
  return J(o)
    ? J(r)
      ? o === r
      : !1
    : J(r)
    ? r in o
    : Object.keys(r).every(function (i) {
        return i in o ? Zo(r[i], o[i]) : !1
      })
}
function Ws (e) {
  try {
    return J(e) || typeof e == 'number' ? ''.concat(e) : e.type
  } catch {
    throw new Error(
      'Events must be strings or objects with a string event.type property.'
    )
  }
}
function Eo (e, t) {
  try {
    return Wt(e) ? e : e.toString().split(t)
  } catch {
    throw new Error("'".concat(e, "' is not a valid state path."))
  }
}
function up (e) {
  return (
    typeof e == 'object' &&
    'value' in e &&
    'context' in e &&
    'event' in e &&
    '_event' in e
  )
}
function un (e, t) {
  if (up(e)) return e.value
  if (Wt(e)) return ar(e)
  if (typeof e != 'string') return e
  var n = Eo(e, t)
  return ar(n)
}
function ar (e) {
  if (e.length === 1) return e[0]
  for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
    r === e.length - 2 ? (n[e[r]] = e[r + 1]) : ((n[e[r]] = {}), (n = n[e[r]]))
  return t
}
function an (e, t) {
  for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
    var i = r[o]
    n[i] = t(e[i], i, e, o)
  }
  return n
}
function sa (e, t, n) {
  var r,
    o,
    i = {}
  try {
    for (var a = z(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var c = s.value,
        l = e[c]
      n(l) && (i[c] = t(l, c, e))
    }
  } catch (u) {
    r = { error: u }
  } finally {
    try {
      s && !s.done && (o = a.return) && o.call(a)
    } finally {
      if (r) throw r.error
    }
  }
  return i
}
var dp = function (e) {
  return function (t) {
    var n,
      r,
      o = t
    try {
      for (var i = z(e), a = i.next(); !a.done; a = i.next()) {
        var s = a.value
        o = o[s]
      }
    } catch (c) {
      n = { error: c }
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i)
      } finally {
        if (n) throw n.error
      }
    }
    return o
  }
}
function fp (e, t) {
  return function (n) {
    var r,
      o,
      i = n
    try {
      for (var a = z(e), s = a.next(); !s.done; s = a.next()) {
        var c = s.value
        i = i[t][c]
      }
    } catch (l) {
      r = { error: l }
    } finally {
      try {
        s && !s.done && (o = a.return) && o.call(a)
      } finally {
        if (r) throw r.error
      }
    }
    return i
  }
}
function Zn (e) {
  if (!e) return [[]]
  if (J(e)) return [[e]]
  var t = re(
    Object.keys(e).map(function (n) {
      var r = e[n]
      return typeof r != 'string' && (!r || !Object.keys(r).length)
        ? [[n]]
        : Zn(e[n]).map(function (o) {
            return [n].concat(o)
          })
    })
  )
  return t
}
function re (e) {
  var t
  return (t = []).concat.apply(t, te([], K(e), !1))
}
function zs (e) {
  return Wt(e) ? e : [e]
}
function Be (e) {
  return e === void 0 ? [] : zs(e)
}
function sr (e, t, n) {
  var r, o
  if (Y(e)) return e(t, n.data)
  var i = {}
  try {
    for (var a = z(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var c = s.value,
        l = e[c]
      Y(l) ? (i[c] = l(t, n.data)) : (i[c] = l)
    }
  } catch (u) {
    r = { error: u }
  } finally {
    try {
      s && !s.done && (o = a.return) && o.call(a)
    } finally {
      if (r) throw r.error
    }
  }
  return i
}
function pp (e) {
  return /^(done|error)\./.test(e)
}
function ca (e) {
  return !!(
    e instanceof Promise ||
    (e !== null && (Y(e) || typeof e == 'object') && Y(e.then))
  )
}
function hp (e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'transition' in e &&
    typeof e.transition == 'function'
  )
}
function mp (e, t) {
  var n,
    r,
    o = K([[], []], 2),
    i = o[0],
    a = o[1]
  try {
    for (var s = z(e), c = s.next(); !c.done; c = s.next()) {
      var l = c.value
      t(l) ? i.push(l) : a.push(l)
    }
  } catch (u) {
    n = { error: u }
  } finally {
    try {
      c && !c.done && (r = s.return) && r.call(s)
    } finally {
      if (n) throw n.error
    }
  }
  return [i, a]
}
function Gs (e, t) {
  return an(e.states, function (n, r) {
    if (n) {
      var o = (J(t) ? void 0 : t[r]) || (n ? n.current : void 0)
      if (o) return { current: o, states: Gs(n, o) }
    }
  })
}
function gp (e, t) {
  return { current: t, states: Gs(e, t) }
}
function la (e, t, n, r) {
  var o =
    e &&
    n.reduce(function (i, a) {
      var s,
        c,
        l = a.assignment,
        u = { state: r, action: a, _event: t },
        f = {}
      if (Y(l)) f = l(i, t.data, u)
      else
        try {
          for (var d = z(Object.keys(l)), p = d.next(); !p.done; p = d.next()) {
            var m = p.value,
              y = l[m]
            f[m] = Y(y) ? y(i, t.data, u) : y
          }
        } catch (E) {
          s = { error: E }
        } finally {
          try {
            p && !p.done && (c = d.return) && c.call(d)
          } finally {
            if (s) throw s.error
          }
        }
      return Object.assign({}, i, f)
    }, e)
  return o
}
var yp = function () {}
function Wt (e) {
  return Array.isArray(e)
}
function Y (e) {
  return typeof e == 'function'
}
function J (e) {
  return typeof e == 'string'
}
function Ks (e, t) {
  if (e)
    return J(e)
      ? { type: So, name: e, predicate: t ? t[e] : void 0 }
      : Y(e)
      ? { type: So, name: e.name, predicate: e }
      : e
}
function vp (e) {
  try {
    return 'subscribe' in e && Y(e.subscribe)
  } catch {
    return !1
  }
}
var it = (function () {
  return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
})()
;(Xr = {}),
  (Xr[it] = function () {
    return this
  }),
  (Xr[Symbol.observable] = function () {
    return this
  })
function Ft (e) {
  return !!e && '__xstatenode' in e
}
function _p (e) {
  return !!e && typeof e.send == 'function'
}
var Sp = (function () {
  var e = 0
  return function () {
    return e++, e.toString(16)
  }
})()
function Mr (e, t) {
  return J(e) || typeof e == 'number' ? C({ type: e }, t) : e
}
function ge (e, t) {
  if (!J(e) && '$$type' in e && e.$$type === 'scxml') return e
  var n = Mr(e)
  return C({ name: n.type, data: n, $$type: 'scxml', type: 'external' }, t)
}
function At (e, t) {
  var n = zs(t).map(function (r) {
    return typeof r > 'u' || typeof r == 'string' || Ft(r)
      ? { target: r, event: e }
      : C(C({}, r), { event: e })
  })
  return n
}
function Ep (e) {
  if (!(e === void 0 || e === lp)) return Be(e)
}
function Ys (e, t, n, r, o) {
  var i = e.options.guards,
    a = { state: o, cond: t, _event: r }
  if (t.type === So)
    return ((i == null ? void 0 : i[t.name]) || t.predicate)(n, r.data, a)
  var s = i == null ? void 0 : i[t.type]
  if (!s)
    throw new Error(
      "Guard '"
        .concat(t.type, "' is not implemented on machine '")
        .concat(e.id, "'.")
    )
  return s(n, r.data, a)
}
function Js (e) {
  return typeof e == 'string' ? { type: e } : e
}
function Qn (e, t, n) {
  var r = function () {},
    o = typeof e == 'object',
    i = o ? e : null
  return {
    next: ((o ? e.next : e) || r).bind(i),
    error: ((o ? e.error : t) || r).bind(i),
    complete: ((o ? e.complete : n) || r).bind(i)
  }
}
function Bn (e, t) {
  return ''.concat(e, ':invocation[').concat(t, ']')
}
function wo (e) {
  return (
    (e.type === qt || (e.type === Nn && e.to === dt.Internal)) &&
    typeof e.delay != 'number'
  )
}
var yt = ge({ type: $s })
function cr (e, t) {
  return (t && t[e]) || void 0
}
function Ot (e, t) {
  var n
  if (J(e) || typeof e == 'number') {
    var r = cr(e, t)
    Y(r)
      ? (n = { type: e, exec: r })
      : r
      ? (n = r)
      : (n = { type: e, exec: void 0 })
  } else if (Y(e)) n = { type: e.name || e.toString(), exec: e }
  else {
    var r = cr(e.type, t)
    if (Y(r)) n = C(C({}, e), { exec: r })
    else if (r) {
      var o = r.type || e.type
      n = C(C(C({}, r), e), { type: o })
    } else n = e
  }
  return n
}
var Ze = function (e, t) {
  if (!e) return []
  var n = Wt(e) ? e : [e]
  return n.map(function (r) {
    return Ot(r, t)
  })
}
function Fr (e) {
  var t = Ot(e)
  return C(C({ id: J(e) ? e : t.id }, t), { type: t.type })
}
function Zs (e, t) {
  return {
    type: qt,
    event: typeof e == 'function' ? e : Mr(e),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  }
}
function Qs (e, t, n, r) {
  var o = { _event: n },
    i = ge(Y(e.event) ? e.event(t, n.data, o) : e.event),
    a
  if (J(e.delay)) {
    var s = r && r[e.delay]
    a = Y(s) ? s(t, n.data, o) : s
  } else a = Y(e.delay) ? e.delay(t, n.data, o) : e.delay
  return C(C({}, e), { type: qt, _event: i, delay: a })
}
function zt (e, t) {
  return {
    to: t ? t.to : void 0,
    type: Nn,
    event: Y(e) ? e : Mr(e),
    delay: t ? t.delay : void 0,
    id: t && t.id !== void 0 ? t.id : Y(e) ? e.name : Ws(e)
  }
}
function Xs (e, t, n, r) {
  var o = { _event: n },
    i = ge(Y(e.event) ? e.event(t, n.data, o) : e.event),
    a
  if (J(e.delay)) {
    var s = r && r[e.delay]
    a = Y(s) ? s(t, n.data, o) : s
  } else a = Y(e.delay) ? e.delay(t, n.data, o) : e.delay
  var c = Y(e.to) ? e.to(t, n.data, o) : e.to
  return C(C({}, e), { to: c, _event: i, event: i.data, delay: a })
}
function Qo (e, t) {
  return zt(e, C(C({}, t), { to: dt.Parent }))
}
function wp (e, t, n) {
  return zt(t, C(C({}, n), { to: e }))
}
function ec () {
  return Qo(Ur)
}
function bp (e, t) {
  return zt(
    e,
    C(C({}, t), {
      to: function (n, r, o) {
        var i = o._event
        return i.origin
      }
    })
  )
}
var Ip = function (e, t) {
  return { context: e, event: t }
}
function Cp (e, t) {
  return e === void 0 && (e = Ip), { type: Pr, label: t, expr: e }
}
var tc = function (e, t, n) {
    return C(C({}, e), {
      value: J(e.expr) ? e.expr : e.expr(t, n.data, { _event: n })
    })
  },
  nc = function (e) {
    return { type: Yo, sendId: e }
  }
function rc (e) {
  var t = Fr(e)
  return { type: X.Start, activity: t, exec: void 0 }
}
function oc (e) {
  var t = Y(e) ? e : Fr(e)
  return { type: X.Stop, activity: t, exec: void 0 }
}
function ic (e, t, n) {
  var r = Y(e.activity) ? e.activity(t, n.data) : e.activity,
    o = typeof r == 'string' ? { id: r } : r,
    i = { type: X.Stop, activity: o }
  return i
}
var ac = function (e) {
  return { type: Rr, assignment: e }
}
function Ap (e) {
  return typeof e == 'object' && 'type' in e
}
function sc (e, t) {
  var n = t ? '#'.concat(t) : ''
  return ''.concat(X.After, '(').concat(e, ')').concat(n)
}
function sn (e, t) {
  var n = ''.concat(X.DoneState, '.').concat(e),
    r = { type: n, data: t }
  return (
    (r.toString = function () {
      return n
    }),
    r
  )
}
function dn (e, t) {
  var n = ''.concat(X.DoneInvoke, '.').concat(e),
    r = { type: n, data: t }
  return (
    (r.toString = function () {
      return n
    }),
    r
  )
}
function Rt (e, t) {
  var n = ''.concat(X.ErrorPlatform, '.').concat(e),
    r = { type: n, data: t }
  return (
    (r.toString = function () {
      return n
    }),
    r
  )
}
function xp (e) {
  return { type: X.Pure, get: e }
}
function cc (e, t) {
  return zt(function (n, r) {
    return r
  }, C(C({}, t), { to: e }))
}
function Np (e, t) {
  return Qo(function (n, r, o) {
    return { type: Jo, data: Y(e) ? e(n, r, o) : e }
  }, C(C({}, t), { to: dt.Parent }))
}
function Tp (e) {
  return { type: X.Choose, conds: e }
}
var Rp = function (e) {
  var t,
    n,
    r = []
  try {
    for (var o = z(e), i = o.next(); !i.done; i = o.next())
      for (var a = i.value, s = 0; s < a.actions.length; ) {
        if (a.actions[s].type === Rr) {
          r.push(a.actions[s]), a.actions.splice(s, 1)
          continue
        }
        s++
      }
  } catch (c) {
    t = { error: c }
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o)
    } finally {
      if (t) throw t.error
    }
  }
  return r
}
function vn (e, t, n, r, o, i, a) {
  a === void 0 && (a = !1)
  var s = a ? [] : Rp(o),
    c = s.length ? la(n, r, s, t) : n,
    l = a ? [n] : void 0,
    u = []
  function f (m, y) {
    var E
    switch (y.type) {
      case qt: {
        var g = Qs(y, c, r, e.options.delays)
        return i && typeof g.delay == 'number' && i(g, c, r), g
      }
      case Nn:
        var S = Xs(y, c, r, e.options.delays)
        return (
          i && S.to !== dt.Internal && (m === 'entry' ? u.push(S) : i(S, c, r)),
          S
        )
      case Pr: {
        var v = tc(y, c, r)
        return i == null || i(v, c, r), v
      }
      case Vs: {
        var w = y,
          I =
            (E = w.conds.find(function (Re) {
              var fe = Ks(Re.cond, e.options.guards)
              return !fe || Ys(e, fe, c, r, i ? void 0 : t)
            })) === null || E === void 0
              ? void 0
              : E.actions
        if (!I) return []
        var A = K(
            vn(
              e,
              t,
              c,
              r,
              [{ type: m, actions: Ze(Be(I), e.options.actions) }],
              i,
              a
            ),
            2
          ),
          N = A[0],
          R = A[1]
        return (c = R), l == null || l.push(c), N
      }
      case Hs: {
        var I = y.get(c, r.data)
        if (!I) return []
        var O = K(
            vn(
              e,
              t,
              c,
              r,
              [{ type: m, actions: Ze(Be(I), e.options.actions) }],
              i,
              a
            ),
            2
          ),
          F = O[0],
          M = O[1]
        return (c = M), l == null || l.push(c), F
      }
      case Tr: {
        var v = ic(y, c, r)
        return i == null || i(v, n, r), v
      }
      case Rr: {
        ;(c = la(c, r, [y], i ? void 0 : t)), l == null || l.push(c)
        break
      }
      default:
        var k = Ot(y, e.options.actions),
          W = k.exec
        if (i) i(k, c, r)
        else if (W && l) {
          var de = l.length - 1,
            Te = C(C({}, k), {
              exec: function (Re) {
                for (var fe = [], De = 1; De < arguments.length; De++)
                  fe[De - 1] = arguments[De]
                W.apply(void 0, te([l[de]], K(fe), !1))
              }
            })
          k = Te
        }
        return k
    }
  }
  function d (m) {
    var y,
      E,
      g = []
    try {
      for (var S = z(m.actions), v = S.next(); !v.done; v = S.next()) {
        var w = v.value,
          I = f(m.type, w)
        I && (g = g.concat(I))
      }
    } catch (A) {
      y = { error: A }
    } finally {
      try {
        v && !v.done && (E = S.return) && E.call(S)
      } finally {
        if (y) throw y.error
      }
    }
    return (
      u.forEach(function (A) {
        i(A, c, r)
      }),
      (u.length = 0),
      g
    )
  }
  var p = re(o.map(d))
  return [p, c]
}
const lc = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      actionTypes: cp,
      after: sc,
      assign: ac,
      cancel: nc,
      choose: Tp,
      done: sn,
      doneInvoke: dn,
      error: Rt,
      escalate: Np,
      forwardTo: cc,
      getActionFunction: cr,
      initEvent: yt,
      isActionObject: Ap,
      log: Cp,
      pure: xp,
      raise: Zs,
      resolveActions: vn,
      resolveLog: tc,
      resolveRaise: Qs,
      resolveSend: Xs,
      resolveStop: ic,
      respond: bp,
      send: zt,
      sendParent: Qo,
      sendTo: wp,
      sendUpdate: ec,
      start: rc,
      stop: oc,
      toActionObject: Ot,
      toActionObjects: Ze,
      toActivityDefinition: Fr
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
var lr = [],
  Tt = function (e, t) {
    lr.push(e)
    var n = t(e)
    return lr.pop(), n
  },
  Pp = function (e) {
    return e(lr[lr.length - 1])
  }
function uc (e) {
  var t
  return (
    (t = {
      id: e,
      send: function () {},
      subscribe: function () {
        return { unsubscribe: function () {} }
      },
      getSnapshot: function () {},
      toJSON: function () {
        return { id: e }
      }
    }),
    (t[it] = function () {
      return this
    }),
    t
  )
}
function Up (e, t, n, r) {
  var o,
    i = Js(e.src),
    a =
      (o = t == null ? void 0 : t.options.services) === null || o === void 0
        ? void 0
        : o[i.type],
    s = e.data ? sr(e.data, n, r) : void 0,
    c = a ? Xo(a, e.id, s) : uc(e.id)
  return (c.meta = e), c
}
function Xo (e, t, n) {
  var r = uc(t)
  if (((r.deferred = !0), Ft(e))) {
    var o = (r.state = Tt(void 0, function () {
      return (n ? e.withContext(n) : e).initialState
    }))
    r.getSnapshot = function () {
      return o
    }
  }
  return r
}
function Mp (e) {
  try {
    return typeof e.send == 'function'
  } catch {
    return !1
  }
}
function Fp (e) {
  return Mp(e) && 'id' in e
}
function Op (e) {
  var t
  return C(
    ((t = {
      subscribe: function () {
        return { unsubscribe: function () {} }
      },
      id: 'anonymous',
      getSnapshot: function () {}
    }),
    (t[it] = function () {
      return this
    }),
    t),
    e
  )
}
var ur = function (e) {
  return e.type === 'atomic' || e.type === 'final'
}
function dc (e) {
  return Object.keys(e.states).map(function (t) {
    return e.states[t]
  })
}
function _n (e) {
  return dc(e).filter(function (t) {
    return t.type !== 'history'
  })
}
function fc (e) {
  var t = [e]
  return ur(e) ? t : t.concat(re(_n(e).map(fc)))
}
function cn (e, t) {
  var n,
    r,
    o,
    i,
    a,
    s,
    c,
    l,
    u = new Set(e),
    f = bo(u),
    d = new Set(t)
  try {
    for (var p = z(d), m = p.next(); !m.done; m = p.next())
      for (var y = m.value, E = y.parent; E && !d.has(E); )
        d.add(E), (E = E.parent)
  } catch (O) {
    n = { error: O }
  } finally {
    try {
      m && !m.done && (r = p.return) && r.call(p)
    } finally {
      if (n) throw n.error
    }
  }
  var g = bo(d)
  try {
    for (var S = z(d), v = S.next(); !v.done; v = S.next()) {
      var y = v.value
      if (y.type === 'compound' && (!g.get(y) || !g.get(y).length))
        f.get(y)
          ? f.get(y).forEach(function (F) {
              return d.add(F)
            })
          : y.initialStateNodes.forEach(function (F) {
              return d.add(F)
            })
      else if (y.type === 'parallel')
        try {
          for (
            var w = ((a = void 0), z(_n(y))), I = w.next();
            !I.done;
            I = w.next()
          ) {
            var A = I.value
            d.has(A) ||
              (d.add(A),
              f.get(A)
                ? f.get(A).forEach(function (F) {
                    return d.add(F)
                  })
                : A.initialStateNodes.forEach(function (F) {
                    return d.add(F)
                  }))
          }
        } catch (F) {
          a = { error: F }
        } finally {
          try {
            I && !I.done && (s = w.return) && s.call(w)
          } finally {
            if (a) throw a.error
          }
        }
    }
  } catch (O) {
    o = { error: O }
  } finally {
    try {
      v && !v.done && (i = S.return) && i.call(S)
    } finally {
      if (o) throw o.error
    }
  }
  try {
    for (var N = z(d), R = N.next(); !R.done; R = N.next())
      for (var y = R.value, E = y.parent; E && !d.has(E); )
        d.add(E), (E = E.parent)
  } catch (O) {
    c = { error: O }
  } finally {
    try {
      R && !R.done && (l = N.return) && l.call(N)
    } finally {
      if (c) throw c.error
    }
  }
  return d
}
function pc (e, t) {
  var n = t.get(e)
  if (!n) return {}
  if (e.type === 'compound') {
    var r = n[0]
    if (r) {
      if (ur(r)) return r.key
    } else return {}
  }
  var o = {}
  return (
    n.forEach(function (i) {
      o[i.key] = pc(i, t)
    }),
    o
  )
}
function bo (e) {
  var t,
    n,
    r = new Map()
  try {
    for (var o = z(e), i = o.next(); !i.done; i = o.next()) {
      var a = i.value
      r.has(a) || r.set(a, []),
        a.parent &&
          (r.has(a.parent) || r.set(a.parent, []), r.get(a.parent).push(a))
    }
  } catch (s) {
    t = { error: s }
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o)
    } finally {
      if (t) throw t.error
    }
  }
  return r
}
function Dp (e, t) {
  var n = cn([e], t)
  return pc(e, bo(n))
}
function ln (e, t) {
  return Array.isArray(e)
    ? e.some(function (n) {
        return n === t
      })
    : e instanceof Set
    ? e.has(t)
    : !1
}
function kp (e) {
  return te(
    [],
    K(
      new Set(
        re(
          te(
            [],
            K(
              e.map(function (t) {
                return t.ownEvents
              })
            ),
            !1
          )
        )
      )
    ),
    !1
  )
}
function Xn (e, t) {
  return t.type === 'compound'
    ? _n(t).some(function (n) {
        return n.type === 'final' && ln(e, n)
      })
    : t.type === 'parallel'
    ? _n(t).every(function (n) {
        return Xn(e, n)
      })
    : !1
}
function Bp (e) {
  return (
    e === void 0 && (e = []),
    e.reduce(function (t, n) {
      return n.meta !== void 0 && (t[n.id] = n.meta), t
    }, {})
  )
}
function ua (e) {
  return new Set(
    re(
      e.map(function (t) {
        return t.tags
      })
    )
  )
}
function hc (e, t) {
  if (e === t) return !0
  if (e === void 0 || t === void 0) return !1
  if (J(e) || J(t)) return e === t
  var n = Object.keys(e),
    r = Object.keys(t)
  return (
    n.length === r.length &&
    n.every(function (o) {
      return hc(e[o], t[o])
    })
  )
}
function Lp (e) {
  return typeof e != 'object' || e === null ? !1 : 'value' in e && '_event' in e
}
function jp (e, t) {
  var n = e.exec,
    r = C(C({}, e), {
      exec:
        n !== void 0
          ? function () {
              return n(t.context, t.event, {
                action: e,
                state: t,
                _event: t._event
              })
            }
          : void 0
    })
  return r
}
var Le = (function () {
    function e (t) {
      var n = this,
        r
      ;(this.actions = []),
        (this.activities = aa),
        (this.meta = {}),
        (this.events = []),
        (this.value = t.value),
        (this.context = t.context),
        (this._event = t._event),
        (this._sessionid = t._sessionid),
        (this.event = this._event.data),
        (this.historyValue = t.historyValue),
        (this.history = t.history),
        (this.actions = t.actions || []),
        (this.activities = t.activities || aa),
        (this.meta = Bp(t.configuration)),
        (this.events = t.events || []),
        (this.matches = this.matches.bind(this)),
        (this.toStrings = this.toStrings.bind(this)),
        (this.configuration = t.configuration),
        (this.transitions = t.transitions),
        (this.children = t.children),
        (this.done = !!t.done),
        (this.tags =
          (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null &&
          r !== void 0
            ? r
            : new Set()),
        (this.machine = t.machine),
        Object.defineProperty(this, 'nextEvents', {
          get: function () {
            return kp(n.configuration)
          }
        })
    }
    return (
      (e.from = function (t, n) {
        if (t instanceof e)
          return t.context !== n
            ? new e({
                value: t.value,
                context: n,
                _event: t._event,
                _sessionid: null,
                historyValue: t.historyValue,
                history: t.history,
                actions: [],
                activities: t.activities,
                meta: {},
                events: [],
                configuration: [],
                transitions: [],
                children: {}
              })
            : t
        var r = yt
        return new e({
          value: t,
          context: n,
          _event: r,
          _sessionid: null,
          historyValue: void 0,
          history: void 0,
          actions: [],
          activities: void 0,
          meta: void 0,
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        })
      }),
      (e.create = function (t) {
        return new e(t)
      }),
      (e.inert = function (t, n) {
        if (t instanceof e) {
          if (!t.actions.length) return t
          var r = yt
          return new e({
            value: t.value,
            context: n,
            _event: r,
            _sessionid: null,
            historyValue: t.historyValue,
            history: t.history,
            activities: t.activities,
            configuration: t.configuration,
            transitions: [],
            children: {}
          })
        }
        return e.from(t, n)
      }),
      (e.prototype.toStrings = function (t, n) {
        var r = this
        if ((t === void 0 && (t = this.value), n === void 0 && (n = '.'), J(t)))
          return [t]
        var o = Object.keys(t)
        return o.concat.apply(
          o,
          te(
            [],
            K(
              o.map(function (i) {
                return r.toStrings(t[i], n).map(function (a) {
                  return i + n + a
                })
              })
            ),
            !1
          )
        )
      }),
      (e.prototype.toJSON = function () {
        var t = this
        t.configuration, t.transitions
        var n = t.tags
        t.machine
        var r = Ko(t, ['configuration', 'transitions', 'tags', 'machine'])
        return C(C({}, r), { tags: Array.from(n) })
      }),
      (e.prototype.matches = function (t) {
        return Zo(t, this.value)
      }),
      (e.prototype.hasTag = function (t) {
        return this.tags.has(t)
      }),
      (e.prototype.can = function (t) {
        var n
        yp(!!this.machine)
        var r =
          (n = this.machine) === null || n === void 0
            ? void 0
            : n.getTransitionData(this, t)
        return (
          !!(r != null && r.transitions.length) &&
          r.transitions.some(function (o) {
            return o.target !== void 0 || o.actions.length
          })
        )
      }),
      e
    )
  })(),
  $p = { deferEvents: !1 },
  da = (function () {
    function e (t) {
      ;(this.processingEvent = !1),
        (this.queue = []),
        (this.initialized = !1),
        (this.options = C(C({}, $p), t))
    }
    return (
      (e.prototype.initialize = function (t) {
        if (((this.initialized = !0), t)) {
          if (!this.options.deferEvents) {
            this.schedule(t)
            return
          }
          this.process(t)
        }
        this.flushEvents()
      }),
      (e.prototype.schedule = function (t) {
        if (!this.initialized || this.processingEvent) {
          this.queue.push(t)
          return
        }
        if (this.queue.length !== 0)
          throw new Error(
            'Event queue should be empty when it is not processing events'
          )
        this.process(t), this.flushEvents()
      }),
      (e.prototype.clear = function () {
        this.queue = []
      }),
      (e.prototype.flushEvents = function () {
        for (var t = this.queue.shift(); t; )
          this.process(t), (t = this.queue.shift())
      }),
      (e.prototype.process = function (t) {
        this.processingEvent = !0
        try {
          t()
        } catch (n) {
          throw (this.clear(), n)
        } finally {
          this.processingEvent = !1
        }
      }),
      e
    )
  })(),
  eo = new Map(),
  Vp = 0,
  en = {
    bookId: function () {
      return 'x:'.concat(Vp++)
    },
    register: function (e, t) {
      return eo.set(e, t), e
    },
    get: function (e) {
      return eo.get(e)
    },
    free: function (e) {
      eo.delete(e)
    }
  }
function ei () {
  if (typeof globalThis < 'u') return globalThis
  if (typeof self < 'u') return self
  if (typeof window < 'u') return window
  if (typeof global < 'u') return global
}
function Hp () {
  var e = ei()
  if (e && '__xstate__' in e) return e.__xstate__
}
function qp (e) {
  if (ei()) {
    var t = Hp()
    t && t.register(e)
  }
}
function Wp (e, t) {
  t === void 0 && (t = {})
  var n = e.initialState,
    r = new Set(),
    o = [],
    i = !1,
    a = function () {
      if (!i) {
        for (i = !0; o.length > 0; ) {
          var l = o.shift()
          ;(n = e.transition(n, l, c)),
            r.forEach(function (u) {
              return u.next(n)
            })
        }
        i = !1
      }
    },
    s = Op({
      id: t.id,
      send: function (l) {
        o.push(l), a()
      },
      getSnapshot: function () {
        return n
      },
      subscribe: function (l, u, f) {
        var d = Qn(l, u, f)
        return (
          r.add(d),
          d.next(n),
          {
            unsubscribe: function () {
              r.delete(d)
            }
          }
        )
      }
    }),
    c = { parent: t.parent, self: s, id: t.id || 'anonymous', observers: r }
  return (n = e.start ? e.start(c) : n), s
}
var Io = { sync: !1, autoForward: !1 },
  he
;(function (e) {
  ;(e[(e.NotStarted = 0)] = 'NotStarted'),
    (e[(e.Running = 1)] = 'Running'),
    (e[(e.Stopped = 2)] = 'Stopped')
})(he || (he = {}))
var zp = (function () {
    function e (t, n) {
      n === void 0 && (n = e.defaultOptions)
      var r = this
      ;(this.machine = t),
        (this.delayedEventsMap = {}),
        (this.listeners = new Set()),
        (this.contextListeners = new Set()),
        (this.stopListeners = new Set()),
        (this.doneListeners = new Set()),
        (this.eventListeners = new Set()),
        (this.sendListeners = new Set()),
        (this.initialized = !1),
        (this.status = he.NotStarted),
        (this.children = new Map()),
        (this.forwardTo = new Set()),
        (this._outgoingQueue = []),
        (this.init = this.start),
        (this.send = function (u, f) {
          if (Wt(u)) return r.batch(u), r.state
          var d = ge(Mr(u, f))
          if (r.status === he.Stopped) return r.state
          if (r.status !== he.Running && !r.options.deferEvents)
            throw new Error(
              'Event "'
                .concat(d.name, '" was sent to uninitialized service "')
                .concat(
                  r.machine.id,
                  `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
                )
                .concat(JSON.stringify(d.data))
            )
          return (
            r.scheduler.schedule(function () {
              r.forward(d)
              var p = r._nextState(d)
              r.update(p, d)
            }),
            r._state
          )
        }),
        (this.sendTo = function (u, f, d) {
          var p = r.parent && (f === dt.Parent || r.parent.id === f),
            m = p
              ? r.parent
              : J(f)
              ? f === dt.Internal
                ? r
                : r.children.get(f) || en.get(f)
              : _p(f)
              ? f
              : void 0
          if (!m) {
            if (!p)
              throw new Error(
                "Unable to send event to child '"
                  .concat(f, "' from service '")
                  .concat(r.id, "'.")
              )
            return
          }
          if ('machine' in m) {
            if (r.status !== he.Stopped || r.parent !== m || r.state.done) {
              var y = C(C({}, u), {
                name: u.name === Jo ? ''.concat(Rt(r.id)) : u.name,
                origin: r.sessionId
              })
              !d && r.machine.config.predictableActionArguments
                ? r._outgoingQueue.push([m, y])
                : m.send(y)
            }
          } else
            !d && r.machine.config.predictableActionArguments
              ? r._outgoingQueue.push([m, u.data])
              : m.send(u.data)
        }),
        (this._exec = function (u, f, d, p) {
          p === void 0 && (p = r.machine.options.actions)
          var m = u.exec || cr(u.type, p),
            y = Y(m) ? m : m ? m.exec : u.exec
          if (y)
            try {
              return y(
                f,
                d.data,
                r.machine.config.predictableActionArguments
                  ? { action: u, _event: d }
                  : { action: u, state: r.state, _event: d }
              )
            } catch (de) {
              throw (
                (r.parent && r.parent.send({ type: 'xstate.error', data: de }),
                de)
              )
            }
          switch (u.type) {
            case qt: {
              var E = u
              r.defer(E)
              break
            }
            case Nn:
              var g = u
              if (typeof g.delay == 'number') {
                r.defer(g)
                return
              } else
                g.to ? r.sendTo(g._event, g.to, d === yt) : r.send(g._event)
              break
            case Yo:
              r.cancel(u.sendId)
              break
            case or: {
              if (r.status !== he.Running) return
              var S = u.activity
              if (
                !r.machine.config.predictableActionArguments &&
                !r.state.activities[S.id || S.type]
              )
                break
              if (S.type === X.Invoke) {
                var v = Js(S.src),
                  w = r.machine.options.services
                    ? r.machine.options.services[v.type]
                    : void 0,
                  I = S.id,
                  A = S.data,
                  N = 'autoForward' in S ? S.autoForward : !!S.forward
                if (!w) return
                var R = A ? sr(A, f, d) : void 0
                if (typeof w == 'string') return
                var O = Y(w)
                  ? w(f, d.data, { data: R, src: v, meta: S.meta })
                  : w
                if (!O) return
                var F = void 0
                Ft(O) &&
                  ((O = R ? O.withContext(R) : O), (F = { autoForward: N })),
                  r.spawn(O, I, F)
              } else r.spawnActivity(S)
              break
            }
            case Tr: {
              r.stopChild(u.activity.id)
              break
            }
            case Pr:
              var M = u,
                k = M.label,
                W = M.value
              k ? r.logger(k, W) : r.logger(W)
              break
          }
        })
      var o = C(C({}, e.defaultOptions), n),
        i = o.clock,
        a = o.logger,
        s = o.parent,
        c = o.id,
        l = c !== void 0 ? c : t.id
      ;(this.id = l),
        (this.logger = a),
        (this.clock = i),
        (this.parent = s),
        (this.options = o),
        (this.scheduler = new da({ deferEvents: this.options.deferEvents })),
        (this.sessionId = en.bookId())
    }
    return (
      Object.defineProperty(e.prototype, 'initialState', {
        get: function () {
          var t = this
          return this._initialState
            ? this._initialState
            : Tt(this, function () {
                return (
                  (t._initialState = t.machine.initialState), t._initialState
                )
              })
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, 'state', {
        get: function () {
          return this._state
        },
        enumerable: !1,
        configurable: !0
      }),
      (e.prototype.execute = function (t, n) {
        var r, o
        try {
          for (var i = z(t.actions), a = i.next(); !a.done; a = i.next()) {
            var s = a.value
            this.exec(s, t, n)
          }
        } catch (c) {
          r = { error: c }
        } finally {
          try {
            a && !a.done && (o = i.return) && o.call(i)
          } finally {
            if (r) throw r.error
          }
        }
      }),
      (e.prototype.update = function (t, n) {
        var r,
          o,
          i,
          a,
          s,
          c,
          l,
          u,
          f = this
        if (
          ((t._sessionid = this.sessionId),
          (this._state = t),
          (!this.machine.config.predictableActionArguments || n === yt) &&
            this.options.execute)
        )
          this.execute(this.state)
        else
          for (var d = void 0; (d = this._outgoingQueue.shift()); )
            d[0].send(d[1])
        if (
          (this.children.forEach(function (O) {
            f.state.children[O.id] = O
          }),
          this.devTools && this.devTools.send(n.data, t),
          t.event)
        )
          try {
            for (
              var p = z(this.eventListeners), m = p.next();
              !m.done;
              m = p.next()
            ) {
              var y = m.value
              y(t.event)
            }
          } catch (O) {
            r = { error: O }
          } finally {
            try {
              m && !m.done && (o = p.return) && o.call(p)
            } finally {
              if (r) throw r.error
            }
          }
        try {
          for (var E = z(this.listeners), g = E.next(); !g.done; g = E.next()) {
            var y = g.value
            y(t, t.event)
          }
        } catch (O) {
          i = { error: O }
        } finally {
          try {
            g && !g.done && (a = E.return) && a.call(E)
          } finally {
            if (i) throw i.error
          }
        }
        try {
          for (
            var S = z(this.contextListeners), v = S.next();
            !v.done;
            v = S.next()
          ) {
            var w = v.value
            w(
              this.state.context,
              this.state.history ? this.state.history.context : void 0
            )
          }
        } catch (O) {
          s = { error: O }
        } finally {
          try {
            v && !v.done && (c = S.return) && c.call(S)
          } finally {
            if (s) throw s.error
          }
        }
        if (this.state.done) {
          var I = t.configuration.find(function (O) {
              return O.type === 'final' && O.parent === f.machine
            }),
            A = I && I.doneData ? sr(I.doneData, t.context, n) : void 0
          this._doneEvent = dn(this.id, A)
          try {
            for (
              var N = z(this.doneListeners), R = N.next();
              !R.done;
              R = N.next()
            ) {
              var y = R.value
              y(this._doneEvent)
            }
          } catch (O) {
            l = { error: O }
          } finally {
            try {
              R && !R.done && (u = N.return) && u.call(N)
            } finally {
              if (l) throw l.error
            }
          }
          this._stop(), this._stopChildren(), en.free(this.sessionId)
        }
      }),
      (e.prototype.onTransition = function (t) {
        return (
          this.listeners.add(t),
          this.status === he.Running && t(this.state, this.state.event),
          this
        )
      }),
      (e.prototype.subscribe = function (t, n, r) {
        var o = this,
          i = Qn(t, n, r)
        this.listeners.add(i.next),
          this.status !== he.NotStarted && i.next(this.state)
        var a = function () {
          o.doneListeners.delete(a), o.stopListeners.delete(a), i.complete()
        }
        return (
          this.status === he.Stopped
            ? i.complete()
            : (this.onDone(a), this.onStop(a)),
          {
            unsubscribe: function () {
              o.listeners.delete(i.next),
                o.doneListeners.delete(a),
                o.stopListeners.delete(a)
            }
          }
        )
      }),
      (e.prototype.onEvent = function (t) {
        return this.eventListeners.add(t), this
      }),
      (e.prototype.onSend = function (t) {
        return this.sendListeners.add(t), this
      }),
      (e.prototype.onChange = function (t) {
        return this.contextListeners.add(t), this
      }),
      (e.prototype.onStop = function (t) {
        return this.stopListeners.add(t), this
      }),
      (e.prototype.onDone = function (t) {
        return (
          this.status === he.Stopped && this._doneEvent
            ? t(this._doneEvent)
            : this.doneListeners.add(t),
          this
        )
      }),
      (e.prototype.off = function (t) {
        return (
          this.listeners.delete(t),
          this.eventListeners.delete(t),
          this.sendListeners.delete(t),
          this.stopListeners.delete(t),
          this.doneListeners.delete(t),
          this.contextListeners.delete(t),
          this
        )
      }),
      (e.prototype.start = function (t) {
        var n = this
        if (this.status === he.Running) return this
        this.machine._init(),
          en.register(this.sessionId, this),
          (this.initialized = !0),
          (this.status = he.Running)
        var r =
          t === void 0
            ? this.initialState
            : Tt(this, function () {
                return Lp(t)
                  ? n.machine.resolveState(t)
                  : n.machine.resolveState(Le.from(t, n.machine.context))
              })
        return (
          this.options.devTools && this.attachDev(),
          this.scheduler.initialize(function () {
            n.update(r, yt)
          }),
          this
        )
      }),
      (e.prototype._stopChildren = function () {
        this.children.forEach(function (t) {
          Y(t.stop) && t.stop()
        }),
          this.children.clear()
      }),
      (e.prototype._stop = function () {
        var t, n, r, o, i, a, s, c, l, u
        try {
          for (var f = z(this.listeners), d = f.next(); !d.done; d = f.next()) {
            var p = d.value
            this.listeners.delete(p)
          }
        } catch (N) {
          t = { error: N }
        } finally {
          try {
            d && !d.done && (n = f.return) && n.call(f)
          } finally {
            if (t) throw t.error
          }
        }
        try {
          for (
            var m = z(this.stopListeners), y = m.next();
            !y.done;
            y = m.next()
          ) {
            var p = y.value
            p(), this.stopListeners.delete(p)
          }
        } catch (N) {
          r = { error: N }
        } finally {
          try {
            y && !y.done && (o = m.return) && o.call(m)
          } finally {
            if (r) throw r.error
          }
        }
        try {
          for (
            var E = z(this.contextListeners), g = E.next();
            !g.done;
            g = E.next()
          ) {
            var p = g.value
            this.contextListeners.delete(p)
          }
        } catch (N) {
          i = { error: N }
        } finally {
          try {
            g && !g.done && (a = E.return) && a.call(E)
          } finally {
            if (i) throw i.error
          }
        }
        try {
          for (
            var S = z(this.doneListeners), v = S.next();
            !v.done;
            v = S.next()
          ) {
            var p = v.value
            this.doneListeners.delete(p)
          }
        } catch (N) {
          s = { error: N }
        } finally {
          try {
            v && !v.done && (c = S.return) && c.call(S)
          } finally {
            if (s) throw s.error
          }
        }
        if (!this.initialized) return this
        ;(this.initialized = !1),
          (this.status = he.Stopped),
          (this._initialState = void 0)
        try {
          for (
            var w = z(Object.keys(this.delayedEventsMap)), I = w.next();
            !I.done;
            I = w.next()
          ) {
            var A = I.value
            this.clock.clearTimeout(this.delayedEventsMap[A])
          }
        } catch (N) {
          l = { error: N }
        } finally {
          try {
            I && !I.done && (u = w.return) && u.call(w)
          } finally {
            if (l) throw l.error
          }
        }
        this.scheduler.clear(),
          (this.scheduler = new da({ deferEvents: this.options.deferEvents }))
      }),
      (e.prototype.stop = function () {
        var t = this,
          n = this.scheduler
        return (
          this._stop(),
          n.schedule(function () {
            var r = ge({ type: 'xstate.stop' }),
              o = Tt(t, function () {
                var i = re(
                    te([], K(t.state.configuration), !1)
                      .sort(function (u, f) {
                        return f.order - u.order
                      })
                      .map(function (u) {
                        return Ze(u.onExit, t.machine.options.actions)
                      })
                  ),
                  a = K(
                    vn(
                      t.machine,
                      t.state,
                      t.state.context,
                      r,
                      [{ type: 'exit', actions: i }],
                      t.machine.config.predictableActionArguments
                        ? t._exec
                        : void 0,
                      t.machine.config.predictableActionArguments ||
                        t.machine.config.preserveActionOrder
                    ),
                    2
                  ),
                  s = a[0],
                  c = a[1],
                  l = new Le({
                    value: t.state.value,
                    context: c,
                    _event: r,
                    _sessionid: t.sessionId,
                    historyValue: void 0,
                    history: t.state,
                    actions: s.filter(function (u) {
                      return !wo(u)
                    }),
                    activities: {},
                    events: [],
                    configuration: [],
                    transitions: [],
                    children: {},
                    done: t.state.done,
                    tags: t.state.tags,
                    machine: t.machine
                  })
                return (l.changed = !0), l
              })
            t.update(o, r), t._stopChildren(), en.free(t.sessionId)
          }),
          this
        )
      }),
      (e.prototype.batch = function (t) {
        var n = this
        if (!(this.status === he.NotStarted && this.options.deferEvents)) {
          if (this.status !== he.Running)
            throw new Error(
              ''
                .concat(
                  t.length,
                  ' event(s) were sent to uninitialized service "'
                )
                .concat(
                  this.machine.id,
                  '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'
                )
            )
        }
        if (t.length) {
          var r = !!this.machine.config.predictableActionArguments && this._exec
          this.scheduler.schedule(function () {
            var o,
              i,
              a = n.state,
              s = !1,
              c = [],
              l = function (p) {
                var m = ge(p)
                n.forward(m),
                  (a = Tt(n, function () {
                    return n.machine.transition(a, m, void 0, r || void 0)
                  })),
                  c.push.apply(
                    c,
                    te(
                      [],
                      K(
                        n.machine.config.predictableActionArguments
                          ? a.actions
                          : a.actions.map(function (y) {
                              return jp(y, a)
                            })
                      ),
                      !1
                    )
                  ),
                  (s = s || !!a.changed)
              }
            try {
              for (var u = z(t), f = u.next(); !f.done; f = u.next()) {
                var d = f.value
                l(d)
              }
            } catch (p) {
              o = { error: p }
            } finally {
              try {
                f && !f.done && (i = u.return) && i.call(u)
              } finally {
                if (o) throw o.error
              }
            }
            ;(a.changed = s), (a.actions = c), n.update(a, ge(t[t.length - 1]))
          })
        }
      }),
      (e.prototype.sender = function (t) {
        return this.send.bind(this, t)
      }),
      (e.prototype._nextState = function (t, n) {
        var r = this
        n === void 0 &&
          (n = !!this.machine.config.predictableActionArguments && this._exec)
        var o = ge(t)
        if (
          o.name.indexOf(_o) === 0 &&
          !this.state.nextEvents.some(function (a) {
            return a.indexOf(_o) === 0
          })
        )
          throw o.data.data
        var i = Tt(this, function () {
          return r.machine.transition(r.state, o, void 0, n || void 0)
        })
        return i
      }),
      (e.prototype.nextState = function (t) {
        return this._nextState(t, !1)
      }),
      (e.prototype.forward = function (t) {
        var n, r
        try {
          for (var o = z(this.forwardTo), i = o.next(); !i.done; i = o.next()) {
            var a = i.value,
              s = this.children.get(a)
            if (!s)
              throw new Error(
                "Unable to forward event '"
                  .concat(t, "' from interpreter '")
                  .concat(this.id, "' to nonexistant child '")
                  .concat(a, "'.")
              )
            s.send(t)
          }
        } catch (c) {
          n = { error: c }
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o)
          } finally {
            if (n) throw n.error
          }
        }
      }),
      (e.prototype.defer = function (t) {
        var n = this,
          r = this.clock.setTimeout(function () {
            'to' in t && t.to ? n.sendTo(t._event, t.to, !0) : n.send(t._event)
          }, t.delay)
        t.id && (this.delayedEventsMap[t.id] = r)
      }),
      (e.prototype.cancel = function (t) {
        this.clock.clearTimeout(this.delayedEventsMap[t]),
          delete this.delayedEventsMap[t]
      }),
      (e.prototype.exec = function (t, n, r) {
        r === void 0 && (r = this.machine.options.actions),
          this._exec(t, n.context, n._event, r)
      }),
      (e.prototype.removeChild = function (t) {
        var n
        this.children.delete(t),
          this.forwardTo.delete(t),
          (n = this.state) === null || n === void 0 || delete n.children[t]
      }),
      (e.prototype.stopChild = function (t) {
        var n = this.children.get(t)
        n && (this.removeChild(t), Y(n.stop) && n.stop())
      }),
      (e.prototype.spawn = function (t, n, r) {
        if (this.status !== he.Running) return Xo(t, n)
        if (ca(t)) return this.spawnPromise(Promise.resolve(t), n)
        if (Y(t)) return this.spawnCallback(t, n)
        if (Fp(t)) return this.spawnActor(t, n)
        if (vp(t)) return this.spawnObservable(t, n)
        if (Ft(t)) return this.spawnMachine(t, C(C({}, r), { id: n }))
        if (hp(t)) return this.spawnBehavior(t, n)
        throw new Error(
          'Unable to spawn entity "'
            .concat(n, '" of type "')
            .concat(typeof t, '".')
        )
      }),
      (e.prototype.spawnMachine = function (t, n) {
        var r = this
        n === void 0 && (n = {})
        var o = new e(
            t,
            C(C({}, this.options), { parent: this, id: n.id || t.id })
          ),
          i = C(C({}, Io), n)
        i.sync &&
          o.onTransition(function (s) {
            r.send(Ur, { state: s, id: o.id })
          })
        var a = o
        return (
          this.children.set(o.id, a),
          i.autoForward && this.forwardTo.add(o.id),
          o
            .onDone(function (s) {
              r.removeChild(o.id), r.send(ge(s, { origin: o.id }))
            })
            .start(),
          a
        )
      }),
      (e.prototype.spawnBehavior = function (t, n) {
        var r = Wp(t, { id: n, parent: this })
        return this.children.set(n, r), r
      }),
      (e.prototype.spawnPromise = function (t, n) {
        var r,
          o = this,
          i = !1,
          a
        t.then(
          function (c) {
            i ||
              ((a = c), o.removeChild(n), o.send(ge(dn(n, c), { origin: n })))
          },
          function (c) {
            if (!i) {
              o.removeChild(n)
              var l = Rt(n, c)
              try {
                o.send(ge(l, { origin: n }))
              } catch {
                o.devTools && o.devTools.send(l, o.state),
                  o.machine.strict && o.stop()
              }
            }
          }
        )
        var s =
          ((r = {
            id: n,
            send: function () {},
            subscribe: function (c, l, u) {
              var f = Qn(c, l, u),
                d = !1
              return (
                t.then(
                  function (p) {
                    d || (f.next(p), !d && f.complete())
                  },
                  function (p) {
                    d || f.error(p)
                  }
                ),
                {
                  unsubscribe: function () {
                    return (d = !0)
                  }
                }
              )
            },
            stop: function () {
              i = !0
            },
            toJSON: function () {
              return { id: n }
            },
            getSnapshot: function () {
              return a
            }
          }),
          (r[it] = function () {
            return this
          }),
          r)
        return this.children.set(n, s), s
      }),
      (e.prototype.spawnCallback = function (t, n) {
        var r,
          o = this,
          i = !1,
          a = new Set(),
          s = new Set(),
          c,
          l = function (d) {
            ;(c = d),
              s.forEach(function (p) {
                return p(d)
              }),
              !i && o.send(ge(d, { origin: n }))
          },
          u
        try {
          u = t(l, function (d) {
            a.add(d)
          })
        } catch (d) {
          this.send(Rt(n, d))
        }
        if (ca(u)) return this.spawnPromise(u, n)
        var f =
          ((r = {
            id: n,
            send: function (d) {
              return a.forEach(function (p) {
                return p(d)
              })
            },
            subscribe: function (d) {
              var p = Qn(d)
              return (
                s.add(p.next),
                {
                  unsubscribe: function () {
                    s.delete(p.next)
                  }
                }
              )
            },
            stop: function () {
              ;(i = !0), Y(u) && u()
            },
            toJSON: function () {
              return { id: n }
            },
            getSnapshot: function () {
              return c
            }
          }),
          (r[it] = function () {
            return this
          }),
          r)
        return this.children.set(n, f), f
      }),
      (e.prototype.spawnObservable = function (t, n) {
        var r,
          o = this,
          i,
          a = t.subscribe(
            function (c) {
              ;(i = c), o.send(ge(c, { origin: n }))
            },
            function (c) {
              o.removeChild(n), o.send(ge(Rt(n, c), { origin: n }))
            },
            function () {
              o.removeChild(n), o.send(ge(dn(n), { origin: n }))
            }
          ),
          s =
            ((r = {
              id: n,
              send: function () {},
              subscribe: function (c, l, u) {
                return t.subscribe(c, l, u)
              },
              stop: function () {
                return a.unsubscribe()
              },
              getSnapshot: function () {
                return i
              },
              toJSON: function () {
                return { id: n }
              }
            }),
            (r[it] = function () {
              return this
            }),
            r)
        return this.children.set(n, s), s
      }),
      (e.prototype.spawnActor = function (t, n) {
        return this.children.set(n, t), t
      }),
      (e.prototype.spawnActivity = function (t) {
        var n =
          this.machine.options && this.machine.options.activities
            ? this.machine.options.activities[t.type]
            : void 0
        if (n) {
          var r = n(this.state.context, t)
          this.spawnEffect(t.id, r)
        }
      }),
      (e.prototype.spawnEffect = function (t, n) {
        var r
        this.children.set(
          t,
          ((r = {
            id: t,
            send: function () {},
            subscribe: function () {
              return { unsubscribe: function () {} }
            },
            stop: n || void 0,
            getSnapshot: function () {},
            toJSON: function () {
              return { id: t }
            }
          }),
          (r[it] = function () {
            return this
          }),
          r)
        )
      }),
      (e.prototype.attachDev = function () {
        var t = ei()
        if (this.options.devTools && t) {
          if (t.__REDUX_DEVTOOLS_EXTENSION__) {
            var n =
              typeof this.options.devTools == 'object'
                ? this.options.devTools
                : void 0
            ;(this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(
              C(
                C(
                  {
                    name: this.id,
                    autoPause: !0,
                    stateSanitizer: function (r) {
                      return {
                        value: r.value,
                        context: r.context,
                        actions: r.actions
                      }
                    }
                  },
                  n
                ),
                { features: C({ jump: !1, skip: !1 }, n ? n.features : void 0) }
              ),
              this.machine
            )),
              this.devTools.init(this.state)
          }
          qp(this)
        }
      }),
      (e.prototype.toJSON = function () {
        return { id: this.id }
      }),
      (e.prototype[it] = function () {
        return this
      }),
      (e.prototype.getSnapshot = function () {
        return this.status === he.NotStarted ? this.initialState : this._state
      }),
      (e.defaultOptions = {
        execute: !0,
        deferEvents: !0,
        clock: {
          setTimeout: function (t, n) {
            return setTimeout(t, n)
          },
          clearTimeout: function (t) {
            return clearTimeout(t)
          }
        },
        logger: console.log.bind(console),
        devTools: !1
      }),
      (e.interpret = mc),
      e
    )
  })(),
  Gp = function (e) {
    return J(e) ? C(C({}, Io), { name: e }) : C(C(C({}, Io), { name: Sp() }), e)
  }
function tn (e, t) {
  var n = Gp(t)
  return Pp(function (r) {
    return r ? r.spawn(e, n.name, n) : Xo(e, n.name)
  })
}
function mc (e, t) {
  var n = new zp(e, t)
  return n
}
function Kp (e) {
  if (typeof e == 'string') {
    var t = { type: e }
    return (
      (t.toString = function () {
        return e
      }),
      t
    )
  }
  return e
}
function Ln (e) {
  return C(C({ type: ir }, e), {
    toJSON: function () {
      e.onDone, e.onError
      var t = Ko(e, ['onDone', 'onError'])
      return C(C({}, t), { type: ir, src: Kp(e.src) })
    }
  })
}
var jn = '',
  Co = '#',
  to = '*',
  xt = {},
  Nt = function (e) {
    return e[0] === Co
  },
  Yp = function () {
    return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} }
  },
  Jp = (function () {
    function e (t, n, r, o) {
      r === void 0 && (r = 'context' in t ? t.context : void 0)
      var i = this,
        a
      ;(this.config = t),
        (this._context = r),
        (this.order = -1),
        (this.__xstatenode = !0),
        (this.__cache = {
          events: void 0,
          relativeValue: new Map(),
          initialStateValue: void 0,
          initialState: void 0,
          on: void 0,
          transitions: void 0,
          candidates: {},
          delayedTransitions: void 0
        }),
        (this.idMap = {}),
        (this.tags = []),
        (this.options = Object.assign(Yp(), n)),
        (this.parent = o == null ? void 0 : o.parent),
        (this.key =
          this.config.key ||
          (o == null ? void 0 : o.key) ||
          this.config.id ||
          '(machine)'),
        (this.machine = this.parent ? this.parent.machine : this),
        (this.path = this.parent ? this.parent.path.concat(this.key) : []),
        (this.delimiter =
          this.config.delimiter || (this.parent ? this.parent.delimiter : qs)),
        (this.id =
          this.config.id ||
          te([this.machine.key], K(this.path), !1).join(this.delimiter)),
        (this.version = this.parent
          ? this.parent.version
          : this.config.version),
        (this.type =
          this.config.type ||
          (this.config.parallel
            ? 'parallel'
            : this.config.states && Object.keys(this.config.states).length
            ? 'compound'
            : this.config.history
            ? 'history'
            : 'atomic')),
        (this.schema = this.parent
          ? this.machine.schema
          : (a = this.config.schema) !== null && a !== void 0
          ? a
          : {}),
        (this.description = this.config.description),
        (this.initial = this.config.initial),
        (this.states = this.config.states
          ? an(this.config.states, function (l, u) {
              var f,
                d = new e(l, {}, void 0, { parent: i, key: u })
              return (
                Object.assign(
                  i.idMap,
                  C(((f = {}), (f[d.id] = d), f), d.idMap)
                ),
                d
              )
            })
          : xt)
      var s = 0
      function c (l) {
        var u, f
        l.order = s++
        try {
          for (var d = z(dc(l)), p = d.next(); !p.done; p = d.next()) {
            var m = p.value
            c(m)
          }
        } catch (y) {
          u = { error: y }
        } finally {
          try {
            p && !p.done && (f = d.return) && f.call(d)
          } finally {
            if (u) throw u.error
          }
        }
      }
      c(this),
        (this.history =
          this.config.history === !0 ? 'shallow' : this.config.history || !1),
        (this._transient =
          !!this.config.always ||
          (this.config.on
            ? Array.isArray(this.config.on)
              ? this.config.on.some(function (l) {
                  var u = l.event
                  return u === jn
                })
              : jn in this.config.on
            : !1)),
        (this.strict = !!this.config.strict),
        (this.onEntry = Be(this.config.entry || this.config.onEntry).map(
          function (l) {
            return Ot(l)
          }
        )),
        (this.onExit = Be(this.config.exit || this.config.onExit).map(function (
          l
        ) {
          return Ot(l)
        })),
        (this.meta = this.config.meta),
        (this.doneData = this.type === 'final' ? this.config.data : void 0),
        (this.invoke = Be(this.config.invoke).map(function (l, u) {
          var f, d
          if (Ft(l)) {
            var p = Bn(i.id, u)
            return (
              (i.machine.options.services = C(
                ((f = {}), (f[p] = l), f),
                i.machine.options.services
              )),
              Ln({ src: p, id: p })
            )
          } else if (J(l.src)) {
            var p = l.id || Bn(i.id, u)
            return Ln(C(C({}, l), { id: p, src: l.src }))
          } else if (Ft(l.src) || Y(l.src)) {
            var p = l.id || Bn(i.id, u)
            return (
              (i.machine.options.services = C(
                ((d = {}), (d[p] = l.src), d),
                i.machine.options.services
              )),
              Ln(C(C({ id: p }, l), { src: p }))
            )
          } else {
            var m = l.src
            return Ln(C(C({ id: Bn(i.id, u) }, l), { src: m }))
          }
        })),
        (this.activities = Be(this.config.activities)
          .concat(this.invoke)
          .map(function (l) {
            return Fr(l)
          })),
        (this.transition = this.transition.bind(this)),
        (this.tags = Be(this.config.tags))
    }
    return (
      (e.prototype._init = function () {
        this.__cache.transitions ||
          fc(this).forEach(function (t) {
            return t.on
          })
      }),
      (e.prototype.withConfig = function (t, n) {
        var r = this.options,
          o = r.actions,
          i = r.activities,
          a = r.guards,
          s = r.services,
          c = r.delays
        return new e(
          this.config,
          {
            actions: C(C({}, o), t.actions),
            activities: C(C({}, i), t.activities),
            guards: C(C({}, a), t.guards),
            services: C(C({}, s), t.services),
            delays: C(C({}, c), t.delays)
          },
          n ?? this.context
        )
      }),
      (e.prototype.withContext = function (t) {
        return new e(this.config, this.options, t)
      }),
      Object.defineProperty(e.prototype, 'context', {
        get: function () {
          return Y(this._context) ? this._context() : this._context
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, 'definition', {
        get: function () {
          return {
            id: this.id,
            key: this.key,
            version: this.version,
            context: this.context,
            type: this.type,
            initial: this.initial,
            history: this.history,
            states: an(this.states, function (t) {
              return t.definition
            }),
            on: this.on,
            transitions: this.transitions,
            entry: this.onEntry,
            exit: this.onExit,
            activities: this.activities || [],
            meta: this.meta,
            order: this.order || -1,
            data: this.doneData,
            invoke: this.invoke,
            description: this.description,
            tags: this.tags
          }
        },
        enumerable: !1,
        configurable: !0
      }),
      (e.prototype.toJSON = function () {
        return this.definition
      }),
      Object.defineProperty(e.prototype, 'on', {
        get: function () {
          if (this.__cache.on) return this.__cache.on
          var t = this.transitions
          return (this.__cache.on = t.reduce(function (n, r) {
            return (
              (n[r.eventType] = n[r.eventType] || []), n[r.eventType].push(r), n
            )
          }, {}))
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, 'after', {
        get: function () {
          return (
            this.__cache.delayedTransitions ||
            ((this.__cache.delayedTransitions = this.getDelayedTransitions()),
            this.__cache.delayedTransitions)
          )
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, 'transitions', {
        get: function () {
          return (
            this.__cache.transitions ||
            ((this.__cache.transitions = this.formatTransitions()),
            this.__cache.transitions)
          )
        },
        enumerable: !1,
        configurable: !0
      }),
      (e.prototype.getCandidates = function (t) {
        if (this.__cache.candidates[t]) return this.__cache.candidates[t]
        var n = t === jn,
          r = this.transitions.filter(function (o) {
            var i = o.eventType === t
            return n ? i : i || o.eventType === to
          })
        return (this.__cache.candidates[t] = r), r
      }),
      (e.prototype.getDelayedTransitions = function () {
        var t = this,
          n = this.config.after
        if (!n) return []
        var r = function (i, a) {
            var s = Y(i) ? ''.concat(t.id, ':delay[').concat(a, ']') : i,
              c = sc(s, t.id)
            return t.onEntry.push(zt(c, { delay: i })), t.onExit.push(nc(c)), c
          },
          o = Wt(n)
            ? n.map(function (i, a) {
                var s = r(i.delay, a)
                return C(C({}, i), { event: s })
              })
            : re(
                Object.keys(n).map(function (i, a) {
                  var s = n[i],
                    c = J(s) ? { target: s } : s,
                    l = isNaN(+i) ? i : +i,
                    u = r(l, a)
                  return Be(c).map(function (f) {
                    return C(C({}, f), { event: u, delay: l })
                  })
                })
              )
        return o.map(function (i) {
          var a = i.delay
          return C(C({}, t.formatTransition(i)), { delay: a })
        })
      }),
      (e.prototype.getStateNodes = function (t) {
        var n,
          r = this
        if (!t) return []
        var o = t instanceof Le ? t.value : un(t, this.delimiter)
        if (J(o)) {
          var i = this.getStateNode(o).initial
          return i !== void 0
            ? this.getStateNodes(((n = {}), (n[o] = i), n))
            : [this, this.states[o]]
        }
        var a = Object.keys(o),
          s = [this]
        return (
          s.push.apply(
            s,
            te(
              [],
              K(
                re(
                  a.map(function (c) {
                    return r.getStateNode(c).getStateNodes(o[c])
                  })
                )
              ),
              !1
            )
          ),
          s
        )
      }),
      (e.prototype.handles = function (t) {
        var n = Ws(t)
        return this.events.includes(n)
      }),
      (e.prototype.resolveState = function (t) {
        var n = t instanceof Le ? t : Le.create(t),
          r = Array.from(cn([], this.getStateNodes(n.value)))
        return new Le(
          C(C({}, n), {
            value: this.resolve(n.value),
            configuration: r,
            done: Xn(r, this),
            tags: ua(r),
            machine: this.machine
          })
        )
      }),
      (e.prototype.transitionLeafNode = function (t, n, r) {
        var o = this.getStateNode(t),
          i = o.next(n, r)
        return !i || !i.transitions.length ? this.next(n, r) : i
      }),
      (e.prototype.transitionCompoundNode = function (t, n, r) {
        var o = Object.keys(t),
          i = this.getStateNode(o[0]),
          a = i._transition(t[o[0]], n, r)
        return !a || !a.transitions.length ? this.next(n, r) : a
      }),
      (e.prototype.transitionParallelNode = function (t, n, r) {
        var o,
          i,
          a = {}
        try {
          for (var s = z(Object.keys(t)), c = s.next(); !c.done; c = s.next()) {
            var l = c.value,
              u = t[l]
            if (u) {
              var f = this.getStateNode(l),
                d = f._transition(u, n, r)
              d && (a[l] = d)
            }
          }
        } catch (g) {
          o = { error: g }
        } finally {
          try {
            c && !c.done && (i = s.return) && i.call(s)
          } finally {
            if (o) throw o.error
          }
        }
        var p = Object.keys(a).map(function (g) {
            return a[g]
          }),
          m = re(
            p.map(function (g) {
              return g.transitions
            })
          ),
          y = p.some(function (g) {
            return g.transitions.length > 0
          })
        if (!y) return this.next(n, r)
        var E = re(
          Object.keys(a).map(function (g) {
            return a[g].configuration
          })
        )
        return {
          transitions: m,
          exitSet: re(
            p.map(function (g) {
              return g.exitSet
            })
          ),
          configuration: E,
          source: n,
          actions: re(
            Object.keys(a).map(function (g) {
              return a[g].actions
            })
          )
        }
      }),
      (e.prototype._transition = function (t, n, r) {
        return J(t)
          ? this.transitionLeafNode(t, n, r)
          : Object.keys(t).length === 1
          ? this.transitionCompoundNode(t, n, r)
          : this.transitionParallelNode(t, n, r)
      }),
      (e.prototype.getTransitionData = function (t, n) {
        return this._transition(t.value, t, ge(n))
      }),
      (e.prototype.next = function (t, n) {
        var r,
          o,
          i = this,
          a = n.name,
          s = [],
          c = [],
          l
        try {
          for (
            var u = z(this.getCandidates(a)), f = u.next();
            !f.done;
            f = u.next()
          ) {
            var d = f.value,
              p = d.cond,
              m = d.in,
              y = t.context,
              E = m
                ? J(m) && Nt(m)
                  ? t.matches(un(this.getStateNodeById(m).path, this.delimiter))
                  : Zo(
                      un(m, this.delimiter),
                      dp(this.path.slice(0, -2))(t.value)
                    )
                : !0,
              g = !1
            try {
              g = !p || Ys(this.machine, p, y, n, t)
            } catch (w) {
              throw new Error(
                "Unable to evaluate guard '"
                  .concat(p.name || p.type, "' in transition for event '")
                  .concat(a, "' in state node '")
                  .concat(
                    this.id,
                    `':
`
                  )
                  .concat(w.message)
              )
            }
            if (g && E) {
              d.target !== void 0 && (c = d.target),
                s.push.apply(s, te([], K(d.actions), !1)),
                (l = d)
              break
            }
          }
        } catch (w) {
          r = { error: w }
        } finally {
          try {
            f && !f.done && (o = u.return) && o.call(u)
          } finally {
            if (r) throw r.error
          }
        }
        if (l) {
          if (!c.length)
            return {
              transitions: [l],
              exitSet: [],
              configuration: t.value ? [this] : [],
              source: t,
              actions: s
            }
          var S = re(
              c.map(function (w) {
                return i.getRelativeStateNodes(w, t.historyValue)
              })
            ),
            v = !!l.internal
          return {
            transitions: [l],
            exitSet: v
              ? []
              : re(
                  c.map(function (w) {
                    return i.getPotentiallyReenteringNodes(w)
                  })
                ),
            configuration: S,
            source: t,
            actions: s
          }
        }
      }),
      (e.prototype.getPotentiallyReenteringNodes = function (t) {
        if (this.order < t.order) return [this]
        for (var n = [], r = this, o = t; r && r !== o; )
          n.push(r), (r = r.parent)
        return r !== o ? [] : (n.push(o), n)
      }),
      (e.prototype.getActions = function (t, n, r, o, i, a, s) {
        var c,
          l,
          u,
          f,
          d = this,
          p = a ? cn([], this.getStateNodes(a.value)) : [],
          m = new Set()
        try {
          for (
            var y = z(
                Array.from(t).sort(function (M, k) {
                  return M.order - k.order
                })
              ),
              E = y.next();
            !E.done;
            E = y.next()
          ) {
            var g = E.value
            ;(!ln(p, g) || ln(r.exitSet, g) || (g.parent && m.has(g.parent))) &&
              m.add(g)
          }
        } catch (M) {
          c = { error: M }
        } finally {
          try {
            E && !E.done && (l = y.return) && l.call(y)
          } finally {
            if (c) throw c.error
          }
        }
        try {
          for (var S = z(p), v = S.next(); !v.done; v = S.next()) {
            var g = v.value
            ;(!ln(t, g) || ln(r.exitSet, g.parent)) && r.exitSet.push(g)
          }
        } catch (M) {
          u = { error: M }
        } finally {
          try {
            v && !v.done && (f = S.return) && f.call(S)
          } finally {
            if (u) throw u.error
          }
        }
        r.exitSet.sort(function (M, k) {
          return k.order - M.order
        })
        var w = Array.from(m).sort(function (M, k) {
            return M.order - k.order
          }),
          I = new Set(r.exitSet),
          A = re(
            w.map(function (M) {
              var k = []
              if (M.type !== 'final') return k
              var W = M.parent
              if (!W.parent) return k
              k.push(
                sn(M.id, M.doneData),
                sn(W.id, M.doneData ? sr(M.doneData, o, i) : void 0)
              )
              var de = W.parent
              return (
                de.type === 'parallel' &&
                  _n(de).every(function (Te) {
                    return Xn(r.configuration, Te)
                  }) &&
                  k.push(sn(de.id)),
                k
              )
            })
          ),
          N = w
            .map(function (M) {
              var k = M.onEntry,
                W = M.activities.map(function (de) {
                  return rc(de)
                })
              return {
                type: 'entry',
                actions: Ze(
                  s
                    ? te(te([], K(k), !1), K(W), !1)
                    : te(te([], K(W), !1), K(k), !1),
                  d.machine.options.actions
                )
              }
            })
            .concat({
              type: 'state_done',
              actions: A.map(function (M) {
                return Zs(M)
              })
            }),
          R = Array.from(I).map(function (M) {
            return {
              type: 'exit',
              actions: Ze(
                te(
                  te([], K(M.onExit), !1),
                  K(
                    M.activities.map(function (k) {
                      return oc(k)
                    })
                  ),
                  !1
                ),
                d.machine.options.actions
              )
            }
          }),
          O = R.concat({
            type: 'transition',
            actions: Ze(r.actions, this.machine.options.actions)
          }).concat(N)
        if (n) {
          var F = Ze(
            re(
              te([], K(t), !1)
                .sort(function (M, k) {
                  return k.order - M.order
                })
                .map(function (M) {
                  return M.onExit
                })
            ),
            this.machine.options.actions
          ).filter(function (M) {
            return !wo(M)
          })
          return O.concat({ type: 'stop', actions: F })
        }
        return O
      }),
      (e.prototype.transition = function (t, n, r, o) {
        t === void 0 && (t = this.initialState)
        var i = ge(n),
          a
        if (t instanceof Le)
          a = r === void 0 ? t : this.resolveState(Le.from(t, r))
        else {
          var s = J(t)
              ? this.resolve(ar(this.getResolvedPath(t)))
              : this.resolve(t),
            c = r ?? this.machine.context
          a = this.resolveState(Le.from(s, c))
        }
        if (this.strict && !this.events.includes(i.name) && !pp(i.name))
          throw new Error(
            "Machine '"
              .concat(this.id, "' does not accept event '")
              .concat(i.name, "'")
          )
        var l = this._transition(a.value, a, i) || {
            transitions: [],
            configuration: [],
            exitSet: [],
            source: a,
            actions: []
          },
          u = cn([], this.getStateNodes(a.value)),
          f = l.configuration.length ? cn(u, l.configuration) : u
        return (
          (l.configuration = te([], K(f), !1)),
          this.resolveTransition(l, a, a.context, o, i)
        )
      }),
      (e.prototype.resolveRaisedTransition = function (t, n, r, o) {
        var i,
          a = t.actions
        return (
          (t = this.transition(t, n, void 0, o)),
          (t._event = r),
          (t.event = r.data),
          (i = t.actions).unshift.apply(i, te([], K(a), !1)),
          t
        )
      }),
      (e.prototype.resolveTransition = function (t, n, r, o, i) {
        var a,
          s,
          c,
          l,
          u = this
        i === void 0 && (i = yt)
        var f = t.configuration,
          d = !n || t.transitions.length > 0,
          p = d ? t.configuration : n ? n.configuration : [],
          m = Xn(p, this),
          y = d ? Dp(this.machine, f) : void 0,
          E = n
            ? n.historyValue
              ? n.historyValue
              : t.source
              ? this.machine.historyValue(n.value)
              : void 0
            : void 0,
          g = this.getActions(new Set(p), m, t, r, i, n, o),
          S = n ? C({}, n.activities) : {}
        try {
          for (var v = z(g), w = v.next(); !w.done; w = v.next()) {
            var I = w.value
            try {
              for (
                var A = ((c = void 0), z(I.actions)), N = A.next();
                !N.done;
                N = A.next()
              ) {
                var R = N.value
                R.type === or
                  ? (S[R.activity.id || R.activity.type] = R)
                  : R.type === Tr && (S[R.activity.id || R.activity.type] = !1)
              }
            } catch (Ie) {
              c = { error: Ie }
            } finally {
              try {
                N && !N.done && (l = A.return) && l.call(A)
              } finally {
                if (c) throw c.error
              }
            }
          }
        } catch (Ie) {
          a = { error: Ie }
        } finally {
          try {
            w && !w.done && (s = v.return) && s.call(v)
          } finally {
            if (a) throw a.error
          }
        }
        var O = K(
            vn(
              this,
              n,
              r,
              i,
              g,
              o,
              this.machine.config.predictableActionArguments ||
                this.machine.config.preserveActionOrder
            ),
            2
          ),
          F = O[0],
          M = O[1],
          k = K(mp(F, wo), 2),
          W = k[0],
          de = k[1],
          Te = F.filter(function (Ie) {
            var ot
            return (
              Ie.type === or &&
              ((ot = Ie.activity) === null || ot === void 0
                ? void 0
                : ot.type) === ir
            )
          }),
          Re = Te.reduce(
            function (Ie, ot) {
              return (Ie[ot.activity.id] = Up(ot.activity, u.machine, M, i)), Ie
            },
            n ? C({}, n.children) : {}
          ),
          fe = new Le({
            value: y || n.value,
            context: M,
            _event: i,
            _sessionid: n ? n._sessionid : null,
            historyValue: y
              ? E
                ? gp(E, y)
                : void 0
              : n
              ? n.historyValue
              : void 0,
            history: !y || t.source ? n : void 0,
            actions: y ? de : [],
            activities: y ? S : n ? n.activities : {},
            events: [],
            configuration: p,
            transitions: t.transitions,
            children: Re,
            done: m,
            tags: ua(p),
            machine: this
          }),
          De = r !== M
        fe.changed = i.name === Ur || De
        var rt = fe.history
        rt && delete rt.history
        var It =
          !m &&
          (this._transient ||
            f.some(function (Ie) {
              return Ie._transient
            }))
        if (!d && (!It || i.name === jn)) return fe
        var xe = fe
        if (!m)
          for (
            It && (xe = this.resolveRaisedTransition(xe, { type: js }, i, o));
            W.length;

          ) {
            var $ = W.shift()
            xe = this.resolveRaisedTransition(xe, $._event, i, o)
          }
        var Ai =
          xe.changed ||
          (rt
            ? !!xe.actions.length ||
              De ||
              typeof rt.value != typeof xe.value ||
              !hc(xe.value, rt.value)
            : void 0)
        return (xe.changed = Ai), (xe.history = rt), xe
      }),
      (e.prototype.getStateNode = function (t) {
        if (Nt(t)) return this.machine.getStateNodeById(t)
        if (!this.states)
          throw new Error(
            "Unable to retrieve child state '"
              .concat(t, "' from '")
              .concat(this.id, "'; no child states exist.")
          )
        var n = this.states[t]
        if (!n)
          throw new Error(
            "Child state '"
              .concat(t, "' does not exist on '")
              .concat(this.id, "'")
          )
        return n
      }),
      (e.prototype.getStateNodeById = function (t) {
        var n = Nt(t) ? t.slice(Co.length) : t
        if (n === this.id) return this
        var r = this.machine.idMap[n]
        if (!r)
          throw new Error(
            "Child state node '#"
              .concat(n, "' does not exist on machine '")
              .concat(this.id, "'")
          )
        return r
      }),
      (e.prototype.getStateNodeByPath = function (t) {
        if (typeof t == 'string' && Nt(t))
          try {
            return this.getStateNodeById(t.slice(1))
          } catch {}
        for (var n = Eo(t, this.delimiter).slice(), r = this; n.length; ) {
          var o = n.shift()
          if (!o.length) break
          r = r.getStateNode(o)
        }
        return r
      }),
      (e.prototype.resolve = function (t) {
        var n,
          r = this
        if (!t) return this.initialStateValue || xt
        switch (this.type) {
          case 'parallel':
            return an(this.initialStateValue, function (i, a) {
              return i ? r.getStateNode(a).resolve(t[a] || i) : xt
            })
          case 'compound':
            if (J(t)) {
              var o = this.getStateNode(t)
              return o.type === 'parallel' || o.type === 'compound'
                ? ((n = {}), (n[t] = o.initialStateValue), n)
                : t
            }
            return Object.keys(t).length
              ? an(t, function (i, a) {
                  return i ? r.getStateNode(a).resolve(i) : xt
                })
              : this.initialStateValue || {}
          default:
            return t || xt
        }
      }),
      (e.prototype.getResolvedPath = function (t) {
        if (Nt(t)) {
          var n = this.machine.idMap[t.slice(Co.length)]
          if (!n) throw new Error("Unable to find state node '".concat(t, "'"))
          return n.path
        }
        return Eo(t, this.delimiter)
      }),
      Object.defineProperty(e.prototype, 'initialStateValue', {
        get: function () {
          var t
          if (this.__cache.initialStateValue)
            return this.__cache.initialStateValue
          var n
          if (this.type === 'parallel')
            n = sa(
              this.states,
              function (r) {
                return r.initialStateValue || xt
              },
              function (r) {
                return r.type !== 'history'
              }
            )
          else if (this.initial !== void 0) {
            if (!this.states[this.initial])
              throw new Error(
                "Initial state '"
                  .concat(this.initial, "' not found on '")
                  .concat(this.key, "'")
              )
            n = ur(this.states[this.initial])
              ? this.initial
              : ((t = {}),
                (t[this.initial] = this.states[this.initial].initialStateValue),
                t)
          } else n = {}
          return (
            (this.__cache.initialStateValue = n), this.__cache.initialStateValue
          )
        },
        enumerable: !1,
        configurable: !0
      }),
      (e.prototype.getInitialState = function (t, n) {
        this._init()
        var r = this.getStateNodes(t)
        return this.resolveTransition(
          {
            configuration: r,
            exitSet: [],
            transitions: [],
            source: void 0,
            actions: []
          },
          void 0,
          n ?? this.machine.context,
          void 0
        )
      }),
      Object.defineProperty(e.prototype, 'initialState', {
        get: function () {
          var t = this.initialStateValue
          if (!t)
            throw new Error(
              "Cannot retrieve initial state from simple state '".concat(
                this.id,
                "'."
              )
            )
          return this.getInitialState(t)
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, 'target', {
        get: function () {
          var t
          if (this.type === 'history') {
            var n = this.config
            J(n.target)
              ? (t = Nt(n.target)
                  ? ar(
                      this.machine
                        .getStateNodeById(n.target)
                        .path.slice(this.path.length - 1)
                    )
                  : n.target)
              : (t = n.target)
          }
          return t
        },
        enumerable: !1,
        configurable: !0
      }),
      (e.prototype.getRelativeStateNodes = function (t, n, r) {
        return (
          r === void 0 && (r = !0),
          r
            ? t.type === 'history'
              ? t.resolveHistory(n)
              : t.initialStateNodes
            : [t]
        )
      }),
      Object.defineProperty(e.prototype, 'initialStateNodes', {
        get: function () {
          var t = this
          if (ur(this)) return [this]
          if (this.type === 'compound' && !this.initial) return [this]
          var n = Zn(this.initialStateValue)
          return re(
            n.map(function (r) {
              return t.getFromRelativePath(r)
            })
          )
        },
        enumerable: !1,
        configurable: !0
      }),
      (e.prototype.getFromRelativePath = function (t) {
        if (!t.length) return [this]
        var n = K(t),
          r = n[0],
          o = n.slice(1)
        if (!this.states)
          throw new Error(
            "Cannot retrieve subPath '".concat(r, "' from node with no states")
          )
        var i = this.getStateNode(r)
        if (i.type === 'history') return i.resolveHistory()
        if (!this.states[r])
          throw new Error(
            "Child state '"
              .concat(r, "' does not exist on '")
              .concat(this.id, "'")
          )
        return this.states[r].getFromRelativePath(o)
      }),
      (e.prototype.historyValue = function (t) {
        if (Object.keys(this.states).length)
          return {
            current: t || this.initialStateValue,
            states: sa(
              this.states,
              function (n, r) {
                if (!t) return n.historyValue()
                var o = J(t) ? void 0 : t[r]
                return n.historyValue(o || n.initialStateValue)
              },
              function (n) {
                return !n.history
              }
            )
          }
      }),
      (e.prototype.resolveHistory = function (t) {
        var n = this
        if (this.type !== 'history') return [this]
        var r = this.parent
        if (!t) {
          var o = this.target
          return o
            ? re(
                Zn(o).map(function (a) {
                  return r.getFromRelativePath(a)
                })
              )
            : r.initialStateNodes
        }
        var i = fp(r.path, 'states')(t).current
        return J(i)
          ? [r.getStateNode(i)]
          : re(
              Zn(i).map(function (a) {
                return n.history === 'deep'
                  ? r.getFromRelativePath(a)
                  : [r.states[a[0]]]
              })
            )
      }),
      Object.defineProperty(e.prototype, 'stateIds', {
        get: function () {
          var t = this,
            n = re(
              Object.keys(this.states).map(function (r) {
                return t.states[r].stateIds
              })
            )
          return [this.id].concat(n)
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, 'events', {
        get: function () {
          var t, n, r, o
          if (this.__cache.events) return this.__cache.events
          var i = this.states,
            a = new Set(this.ownEvents)
          if (i)
            try {
              for (
                var s = z(Object.keys(i)), c = s.next();
                !c.done;
                c = s.next()
              ) {
                var l = c.value,
                  u = i[l]
                if (u.states)
                  try {
                    for (
                      var f = ((r = void 0), z(u.events)), d = f.next();
                      !d.done;
                      d = f.next()
                    ) {
                      var p = d.value
                      a.add(''.concat(p))
                    }
                  } catch (m) {
                    r = { error: m }
                  } finally {
                    try {
                      d && !d.done && (o = f.return) && o.call(f)
                    } finally {
                      if (r) throw r.error
                    }
                  }
              }
            } catch (m) {
              t = { error: m }
            } finally {
              try {
                c && !c.done && (n = s.return) && n.call(s)
              } finally {
                if (t) throw t.error
              }
            }
          return (this.__cache.events = Array.from(a))
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, 'ownEvents', {
        get: function () {
          var t = new Set(
            this.transitions
              .filter(function (n) {
                return !(!n.target && !n.actions.length && n.internal)
              })
              .map(function (n) {
                return n.eventType
              })
          )
          return Array.from(t)
        },
        enumerable: !1,
        configurable: !0
      }),
      (e.prototype.resolveTarget = function (t) {
        var n = this
        if (t !== void 0)
          return t.map(function (r) {
            if (!J(r)) return r
            var o = r[0] === n.delimiter
            if (o && !n.parent) return n.getStateNodeByPath(r.slice(1))
            var i = o ? n.key + r : r
            if (n.parent)
              try {
                var a = n.parent.getStateNodeByPath(i)
                return a
              } catch (s) {
                throw new Error(
                  "Invalid transition definition for state node '"
                    .concat(
                      n.id,
                      `':
`
                    )
                    .concat(s.message)
                )
              }
            else return n.getStateNodeByPath(i)
          })
      }),
      (e.prototype.formatTransition = function (t) {
        var n = this,
          r = Ep(t.target),
          o =
            'internal' in t
              ? t.internal
              : r
              ? r.some(function (c) {
                  return J(c) && c[0] === n.delimiter
                })
              : !0,
          i = this.machine.options.guards,
          a = this.resolveTarget(r),
          s = C(C({}, t), {
            actions: Ze(Be(t.actions)),
            cond: Ks(t.cond, i),
            target: a,
            source: this,
            internal: o,
            eventType: t.event,
            toJSON: function () {
              return C(C({}, s), {
                target: s.target
                  ? s.target.map(function (c) {
                      return '#'.concat(c.id)
                    })
                  : void 0,
                source: '#'.concat(n.id)
              })
            }
          })
        return s
      }),
      (e.prototype.formatTransitions = function () {
        var t,
          n,
          r = this,
          o
        if (!this.config.on) o = []
        else if (Array.isArray(this.config.on)) o = this.config.on
        else {
          var i = this.config.on,
            a = to,
            s = i[a],
            c = s === void 0 ? [] : s,
            l = Ko(i, [typeof a == 'symbol' ? a : a + ''])
          o = re(
            Object.keys(l)
              .map(function (S) {
                var v = At(S, l[S])
                return v
              })
              .concat(At(to, c))
          )
        }
        var u = this.config.always ? At('', this.config.always) : [],
          f = this.config.onDone
            ? At(String(sn(this.id)), this.config.onDone)
            : [],
          d = re(
            this.invoke.map(function (S) {
              var v = []
              return (
                S.onDone &&
                  v.push.apply(
                    v,
                    te([], K(At(String(dn(S.id)), S.onDone)), !1)
                  ),
                S.onError &&
                  v.push.apply(
                    v,
                    te([], K(At(String(Rt(S.id)), S.onError)), !1)
                  ),
                v
              )
            })
          ),
          p = this.after,
          m = re(
            te(te(te(te([], K(f), !1), K(d), !1), K(o), !1), K(u), !1).map(
              function (S) {
                return Be(S).map(function (v) {
                  return r.formatTransition(v)
                })
              }
            )
          )
        try {
          for (var y = z(p), E = y.next(); !E.done; E = y.next()) {
            var g = E.value
            m.push(g)
          }
        } catch (S) {
          t = { error: S }
        } finally {
          try {
            E && !E.done && (n = y.return) && n.call(y)
          } finally {
            if (t) throw t.error
          }
        }
        return m
      }),
      e
    )
  })()
function Gt (e, t) {
  return new Jp(e, t)
}
var Ge = ac,
  Or = ec,
  Zp = cc,
  $n =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {}
function gc (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
function Qp (e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e)
  return o
}
var yc = Qp
function Xp () {
  ;(this.__data__ = []), (this.size = 0)
}
var eh = Xp
function th (e, t) {
  return e === t || (e !== e && t !== t)
}
var Tn = th,
  nh = Tn
function rh (e, t) {
  for (var n = e.length; n--; ) if (nh(e[n][0], t)) return n
  return -1
}
var Dr = rh,
  oh = Dr,
  ih = Array.prototype,
  ah = ih.splice
function sh (e) {
  var t = this.__data__,
    n = oh(t, e)
  if (n < 0) return !1
  var r = t.length - 1
  return n == r ? t.pop() : ah.call(t, n, 1), --this.size, !0
}
var ch = sh,
  lh = Dr
function uh (e) {
  var t = this.__data__,
    n = lh(t, e)
  return n < 0 ? void 0 : t[n][1]
}
var dh = uh,
  fh = Dr
function ph (e) {
  return fh(this.__data__, e) > -1
}
var hh = ph,
  mh = Dr
function gh (e, t) {
  var n = this.__data__,
    r = mh(n, e)
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
}
var yh = gh,
  vh = eh,
  _h = ch,
  Sh = dh,
  Eh = hh,
  wh = yh
function Kt (e) {
  var t = -1,
    n = e == null ? 0 : e.length
  for (this.clear(); ++t < n; ) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
Kt.prototype.clear = vh
Kt.prototype.delete = _h
Kt.prototype.get = Sh
Kt.prototype.has = Eh
Kt.prototype.set = wh
var kr = Kt,
  bh = kr
function Ih () {
  ;(this.__data__ = new bh()), (this.size = 0)
}
var Ch = Ih
function Ah (e) {
  var t = this.__data__,
    n = t.delete(e)
  return (this.size = t.size), n
}
var xh = Ah
function Nh (e) {
  return this.__data__.get(e)
}
var Th = Nh
function Rh (e) {
  return this.__data__.has(e)
}
var Ph = Rh,
  Uh = typeof $n == 'object' && $n && $n.Object === Object && $n,
  vc = Uh,
  Mh = vc,
  Fh = typeof self == 'object' && self && self.Object === Object && self,
  Oh = Mh || Fh || Function('return this')(),
  He = Oh,
  Dh = He,
  kh = Dh.Symbol,
  Br = kh,
  fa = Br,
  _c = Object.prototype,
  Bh = _c.hasOwnProperty,
  Lh = _c.toString,
  nn = fa ? fa.toStringTag : void 0
function jh (e) {
  var t = Bh.call(e, nn),
    n = e[nn]
  try {
    e[nn] = void 0
    var r = !0
  } catch {}
  var o = Lh.call(e)
  return r && (t ? (e[nn] = n) : delete e[nn]), o
}
var $h = jh,
  Vh = Object.prototype,
  Hh = Vh.toString
function qh (e) {
  return Hh.call(e)
}
var Wh = qh,
  pa = Br,
  zh = $h,
  Gh = Wh,
  Kh = '[object Null]',
  Yh = '[object Undefined]',
  ha = pa ? pa.toStringTag : void 0
function Jh (e) {
  return e == null
    ? e === void 0
      ? Yh
      : Kh
    : ha && ha in Object(e)
    ? zh(e)
    : Gh(e)
}
var Yt = Jh
function Zh (e) {
  var t = typeof e
  return e != null && (t == 'object' || t == 'function')
}
var et = Zh,
  Qh = Yt,
  Xh = et,
  em = '[object AsyncFunction]',
  tm = '[object Function]',
  nm = '[object GeneratorFunction]',
  rm = '[object Proxy]'
function om (e) {
  if (!Xh(e)) return !1
  var t = Qh(e)
  return t == tm || t == nm || t == em || t == rm
}
var ti = om,
  im = He,
  am = im['__core-js_shared__'],
  sm = am,
  no = sm,
  ma = (function () {
    var e = /[^.]+$/.exec((no && no.keys && no.keys.IE_PROTO) || '')
    return e ? 'Symbol(src)_1.' + e : ''
  })()
function cm (e) {
  return !!ma && ma in e
}
var lm = cm,
  um = Function.prototype,
  dm = um.toString
function fm (e) {
  if (e != null) {
    try {
      return dm.call(e)
    } catch {}
    try {
      return e + ''
    } catch {}
  }
  return ''
}
var Sc = fm,
  pm = ti,
  hm = lm,
  mm = et,
  gm = Sc,
  ym = /[\\^$.*+?()[\]{}|]/g,
  vm = /^\[object .+?Constructor\]$/,
  _m = Function.prototype,
  Sm = Object.prototype,
  Em = _m.toString,
  wm = Sm.hasOwnProperty,
  bm = RegExp(
    '^' +
      Em.call(wm)
        .replace(ym, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  )
function Im (e) {
  if (!mm(e) || hm(e)) return !1
  var t = pm(e) ? bm : vm
  return t.test(gm(e))
}
var Cm = Im
function Am (e, t) {
  return e == null ? void 0 : e[t]
}
var xm = Am,
  Nm = Cm,
  Tm = xm
function Rm (e, t) {
  var n = Tm(e, t)
  return Nm(n) ? n : void 0
}
var wt = Rm,
  Pm = wt,
  Um = He,
  Mm = Pm(Um, 'Map'),
  ni = Mm,
  Fm = wt,
  Om = Fm(Object, 'create'),
  Lr = Om,
  ga = Lr
function Dm () {
  ;(this.__data__ = ga ? ga(null) : {}), (this.size = 0)
}
var km = Dm
function Bm (e) {
  var t = this.has(e) && delete this.__data__[e]
  return (this.size -= t ? 1 : 0), t
}
var Lm = Bm,
  jm = Lr,
  $m = '__lodash_hash_undefined__',
  Vm = Object.prototype,
  Hm = Vm.hasOwnProperty
function qm (e) {
  var t = this.__data__
  if (jm) {
    var n = t[e]
    return n === $m ? void 0 : n
  }
  return Hm.call(t, e) ? t[e] : void 0
}
var Wm = qm,
  zm = Lr,
  Gm = Object.prototype,
  Km = Gm.hasOwnProperty
function Ym (e) {
  var t = this.__data__
  return zm ? t[e] !== void 0 : Km.call(t, e)
}
var Jm = Ym,
  Zm = Lr,
  Qm = '__lodash_hash_undefined__'
function Xm (e, t) {
  var n = this.__data__
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = Zm && t === void 0 ? Qm : t),
    this
  )
}
var eg = Xm,
  tg = km,
  ng = Lm,
  rg = Wm,
  og = Jm,
  ig = eg
function Jt (e) {
  var t = -1,
    n = e == null ? 0 : e.length
  for (this.clear(); ++t < n; ) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
Jt.prototype.clear = tg
Jt.prototype.delete = ng
Jt.prototype.get = rg
Jt.prototype.has = og
Jt.prototype.set = ig
var ag = Jt,
  ya = ag,
  sg = kr,
  cg = ni
function lg () {
  ;(this.size = 0),
    (this.__data__ = {
      hash: new ya(),
      map: new (cg || sg)(),
      string: new ya()
    })
}
var ug = lg
function dg (e) {
  var t = typeof e
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null
}
var fg = dg,
  pg = fg
function hg (e, t) {
  var n = e.__data__
  return pg(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map
}
var jr = hg,
  mg = jr
function gg (e) {
  var t = mg(this, e).delete(e)
  return (this.size -= t ? 1 : 0), t
}
var yg = gg,
  vg = jr
function _g (e) {
  return vg(this, e).get(e)
}
var Sg = _g,
  Eg = jr
function wg (e) {
  return Eg(this, e).has(e)
}
var bg = wg,
  Ig = jr
function Cg (e, t) {
  var n = Ig(this, e),
    r = n.size
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
}
var Ag = Cg,
  xg = ug,
  Ng = yg,
  Tg = Sg,
  Rg = bg,
  Pg = Ag
function Zt (e) {
  var t = -1,
    n = e == null ? 0 : e.length
  for (this.clear(); ++t < n; ) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
Zt.prototype.clear = xg
Zt.prototype.delete = Ng
Zt.prototype.get = Tg
Zt.prototype.has = Rg
Zt.prototype.set = Pg
var ri = Zt,
  Ug = kr,
  Mg = ni,
  Fg = ri,
  Og = 200
function Dg (e, t) {
  var n = this.__data__
  if (n instanceof Ug) {
    var r = n.__data__
    if (!Mg || r.length < Og - 1)
      return r.push([e, t]), (this.size = ++n.size), this
    n = this.__data__ = new Fg(r)
  }
  return n.set(e, t), (this.size = n.size), this
}
var kg = Dg,
  Bg = kr,
  Lg = Ch,
  jg = xh,
  $g = Th,
  Vg = Ph,
  Hg = kg
function Qt (e) {
  var t = (this.__data__ = new Bg(e))
  this.size = t.size
}
Qt.prototype.clear = Lg
Qt.prototype.delete = jg
Qt.prototype.get = $g
Qt.prototype.has = Vg
Qt.prototype.set = Hg
var oi = Qt,
  qg = '__lodash_hash_undefined__'
function Wg (e) {
  return this.__data__.set(e, qg), this
}
var zg = Wg
function Gg (e) {
  return this.__data__.has(e)
}
var Kg = Gg,
  Yg = ri,
  Jg = zg,
  Zg = Kg
function dr (e) {
  var t = -1,
    n = e == null ? 0 : e.length
  for (this.__data__ = new Yg(); ++t < n; ) this.add(e[t])
}
dr.prototype.add = dr.prototype.push = Jg
dr.prototype.has = Zg
var Qg = dr
function Xg (e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0
  return !1
}
var ey = Xg
function ty (e, t) {
  return e.has(t)
}
var ny = ty,
  ry = Qg,
  oy = ey,
  iy = ny,
  ay = 1,
  sy = 2
function cy (e, t, n, r, o, i) {
  var a = n & ay,
    s = e.length,
    c = t.length
  if (s != c && !(a && c > s)) return !1
  var l = i.get(e),
    u = i.get(t)
  if (l && u) return l == t && u == e
  var f = -1,
    d = !0,
    p = n & sy ? new ry() : void 0
  for (i.set(e, t), i.set(t, e); ++f < s; ) {
    var m = e[f],
      y = t[f]
    if (r) var E = a ? r(y, m, f, t, e, i) : r(m, y, f, e, t, i)
    if (E !== void 0) {
      if (E) continue
      d = !1
      break
    }
    if (p) {
      if (
        !oy(t, function (g, S) {
          if (!iy(p, S) && (m === g || o(m, g, n, r, i))) return p.push(S)
        })
      ) {
        d = !1
        break
      }
    } else if (!(m === y || o(m, y, n, r, i))) {
      d = !1
      break
    }
  }
  return i.delete(e), i.delete(t), d
}
var Ec = cy,
  ly = He,
  uy = ly.Uint8Array,
  wc = uy
function dy (e) {
  var t = -1,
    n = Array(e.size)
  return (
    e.forEach(function (r, o) {
      n[++t] = [o, r]
    }),
    n
  )
}
var fy = dy
function py (e) {
  var t = -1,
    n = Array(e.size)
  return (
    e.forEach(function (r) {
      n[++t] = r
    }),
    n
  )
}
var hy = py,
  va = Br,
  _a = wc,
  my = Tn,
  gy = Ec,
  yy = fy,
  vy = hy,
  _y = 1,
  Sy = 2,
  Ey = '[object Boolean]',
  wy = '[object Date]',
  by = '[object Error]',
  Iy = '[object Map]',
  Cy = '[object Number]',
  Ay = '[object RegExp]',
  xy = '[object Set]',
  Ny = '[object String]',
  Ty = '[object Symbol]',
  Ry = '[object ArrayBuffer]',
  Py = '[object DataView]',
  Sa = va ? va.prototype : void 0,
  ro = Sa ? Sa.valueOf : void 0
function Uy (e, t, n, r, o, i, a) {
  switch (n) {
    case Py:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1
      ;(e = e.buffer), (t = t.buffer)
    case Ry:
      return !(e.byteLength != t.byteLength || !i(new _a(e), new _a(t)))
    case Ey:
    case wy:
    case Cy:
      return my(+e, +t)
    case by:
      return e.name == t.name && e.message == t.message
    case Ay:
    case Ny:
      return e == t + ''
    case Iy:
      var s = yy
    case xy:
      var c = r & _y
      if ((s || (s = vy), e.size != t.size && !c)) return !1
      var l = a.get(e)
      if (l) return l == t
      ;(r |= Sy), a.set(e, t)
      var u = gy(s(e), s(t), r, o, i, a)
      return a.delete(e), u
    case Ty:
      if (ro) return ro.call(e) == ro.call(t)
  }
  return !1
}
var My = Uy
function Fy (e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n]
  return e
}
var bc = Fy,
  Oy = Array.isArray,
  tt = Oy,
  Dy = bc,
  ky = tt
function By (e, t, n) {
  var r = t(e)
  return ky(e) ? r : Dy(r, n(e))
}
var Ic = By
function Ly (e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n]
    t(a, n, e) && (i[o++] = a)
  }
  return i
}
var jy = Ly
function $y () {
  return []
}
var Cc = $y,
  Vy = jy,
  Hy = Cc,
  qy = Object.prototype,
  Wy = qy.propertyIsEnumerable,
  Ea = Object.getOwnPropertySymbols,
  zy = Ea
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            Vy(Ea(e), function (t) {
              return Wy.call(e, t)
            }))
      }
    : Hy,
  Ac = zy
function Gy (e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
  return r
}
var Ky = Gy
function Yy (e) {
  return e != null && typeof e == 'object'
}
var bt = Yy,
  Jy = Yt,
  Zy = bt,
  Qy = '[object Arguments]'
function Xy (e) {
  return Zy(e) && Jy(e) == Qy
}
var ev = Xy,
  wa = ev,
  tv = bt,
  xc = Object.prototype,
  nv = xc.hasOwnProperty,
  rv = xc.propertyIsEnumerable,
  ov = wa(
    (function () {
      return arguments
    })()
  )
    ? wa
    : function (e) {
        return tv(e) && nv.call(e, 'callee') && !rv.call(e, 'callee')
      },
  ii = ov,
  fr = { exports: {} }
function iv () {
  return !1
}
var av = iv
fr.exports
;(function (e, t) {
  var n = He,
    r = av,
    o = t && !t.nodeType && t,
    i = o && !0 && e && !e.nodeType && e,
    a = i && i.exports === o,
    s = a ? n.Buffer : void 0,
    c = s ? s.isBuffer : void 0,
    l = c || r
  e.exports = l
})(fr, fr.exports)
var ai = fr.exports,
  sv = 9007199254740991,
  cv = /^(?:0|[1-9]\d*)$/
function lv (e, t) {
  var n = typeof e
  return (
    (t = t ?? sv),
    !!t &&
      (n == 'number' || (n != 'symbol' && cv.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  )
}
var $r = lv,
  uv = 9007199254740991
function dv (e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= uv
}
var si = dv,
  fv = Yt,
  pv = si,
  hv = bt,
  mv = '[object Arguments]',
  gv = '[object Array]',
  yv = '[object Boolean]',
  vv = '[object Date]',
  _v = '[object Error]',
  Sv = '[object Function]',
  Ev = '[object Map]',
  wv = '[object Number]',
  bv = '[object Object]',
  Iv = '[object RegExp]',
  Cv = '[object Set]',
  Av = '[object String]',
  xv = '[object WeakMap]',
  Nv = '[object ArrayBuffer]',
  Tv = '[object DataView]',
  Rv = '[object Float32Array]',
  Pv = '[object Float64Array]',
  Uv = '[object Int8Array]',
  Mv = '[object Int16Array]',
  Fv = '[object Int32Array]',
  Ov = '[object Uint8Array]',
  Dv = '[object Uint8ClampedArray]',
  kv = '[object Uint16Array]',
  Bv = '[object Uint32Array]',
  ne = {}
ne[Rv] =
  ne[Pv] =
  ne[Uv] =
  ne[Mv] =
  ne[Fv] =
  ne[Ov] =
  ne[Dv] =
  ne[kv] =
  ne[Bv] =
    !0
ne[mv] =
  ne[gv] =
  ne[Nv] =
  ne[yv] =
  ne[Tv] =
  ne[vv] =
  ne[_v] =
  ne[Sv] =
  ne[Ev] =
  ne[wv] =
  ne[bv] =
  ne[Iv] =
  ne[Cv] =
  ne[Av] =
  ne[xv] =
    !1
function Lv (e) {
  return hv(e) && pv(e.length) && !!ne[fv(e)]
}
var jv = Lv
function $v (e) {
  return function (t) {
    return e(t)
  }
}
var Vv = $v,
  pr = { exports: {} }
pr.exports
;(function (e, t) {
  var n = vc,
    r = t && !t.nodeType && t,
    o = r && !0 && e && !e.nodeType && e,
    i = o && o.exports === r,
    a = i && n.process,
    s = (function () {
      try {
        var c = o && o.require && o.require('util').types
        return c || (a && a.binding && a.binding('util'))
      } catch {}
    })()
  e.exports = s
})(pr, pr.exports)
var Hv = pr.exports,
  qv = jv,
  Wv = Vv,
  ba = Hv,
  Ia = ba && ba.isTypedArray,
  zv = Ia ? Wv(Ia) : qv,
  ci = zv,
  Gv = Ky,
  Kv = ii,
  Yv = tt,
  Jv = ai,
  Zv = $r,
  Qv = ci,
  Xv = Object.prototype,
  e_ = Xv.hasOwnProperty
function t_ (e, t) {
  var n = Yv(e),
    r = !n && Kv(e),
    o = !n && !r && Jv(e),
    i = !n && !r && !o && Qv(e),
    a = n || r || o || i,
    s = a ? Gv(e.length, String) : [],
    c = s.length
  for (var l in e)
    (t || e_.call(e, l)) &&
      !(
        a &&
        (l == 'length' ||
          (o && (l == 'offset' || l == 'parent')) ||
          (i && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
          Zv(l, c))
      ) &&
      s.push(l)
  return s
}
var Nc = t_,
  n_ = Object.prototype
function r_ (e) {
  var t = e && e.constructor,
    n = (typeof t == 'function' && t.prototype) || n_
  return e === n
}
var li = r_
function o_ (e, t) {
  return function (n) {
    return e(t(n))
  }
}
var Tc = o_,
  i_ = Tc,
  a_ = i_(Object.keys, Object),
  s_ = a_,
  c_ = li,
  l_ = s_,
  u_ = Object.prototype,
  d_ = u_.hasOwnProperty
function f_ (e) {
  if (!c_(e)) return l_(e)
  var t = []
  for (var n in Object(e)) d_.call(e, n) && n != 'constructor' && t.push(n)
  return t
}
var p_ = f_,
  h_ = ti,
  m_ = si
function g_ (e) {
  return e != null && m_(e.length) && !h_(e)
}
var Vr = g_,
  y_ = Nc,
  v_ = p_,
  __ = Vr
function S_ (e) {
  return __(e) ? y_(e) : v_(e)
}
var Rc = S_,
  E_ = Ic,
  w_ = Ac,
  b_ = Rc
function I_ (e) {
  return E_(e, b_, w_)
}
var C_ = I_,
  Ca = C_,
  A_ = 1,
  x_ = Object.prototype,
  N_ = x_.hasOwnProperty
function T_ (e, t, n, r, o, i) {
  var a = n & A_,
    s = Ca(e),
    c = s.length,
    l = Ca(t),
    u = l.length
  if (c != u && !a) return !1
  for (var f = c; f--; ) {
    var d = s[f]
    if (!(a ? d in t : N_.call(t, d))) return !1
  }
  var p = i.get(e),
    m = i.get(t)
  if (p && m) return p == t && m == e
  var y = !0
  i.set(e, t), i.set(t, e)
  for (var E = a; ++f < c; ) {
    d = s[f]
    var g = e[d],
      S = t[d]
    if (r) var v = a ? r(S, g, d, t, e, i) : r(g, S, d, e, t, i)
    if (!(v === void 0 ? g === S || o(g, S, n, r, i) : v)) {
      y = !1
      break
    }
    E || (E = d == 'constructor')
  }
  if (y && !E) {
    var w = e.constructor,
      I = t.constructor
    w != I &&
      'constructor' in e &&
      'constructor' in t &&
      !(
        typeof w == 'function' &&
        w instanceof w &&
        typeof I == 'function' &&
        I instanceof I
      ) &&
      (y = !1)
  }
  return i.delete(e), i.delete(t), y
}
var R_ = T_,
  P_ = wt,
  U_ = He,
  M_ = P_(U_, 'DataView'),
  F_ = M_,
  O_ = wt,
  D_ = He,
  k_ = O_(D_, 'Promise'),
  B_ = k_,
  L_ = wt,
  j_ = He,
  $_ = L_(j_, 'Set'),
  V_ = $_,
  H_ = wt,
  q_ = He,
  W_ = H_(q_, 'WeakMap'),
  z_ = W_,
  Ao = F_,
  xo = ni,
  No = B_,
  To = V_,
  Ro = z_,
  Pc = Yt,
  Xt = Sc,
  Aa = '[object Map]',
  G_ = '[object Object]',
  xa = '[object Promise]',
  Na = '[object Set]',
  Ta = '[object WeakMap]',
  Ra = '[object DataView]',
  K_ = Xt(Ao),
  Y_ = Xt(xo),
  J_ = Xt(No),
  Z_ = Xt(To),
  Q_ = Xt(Ro),
  mt = Pc
;((Ao && mt(new Ao(new ArrayBuffer(1))) != Ra) ||
  (xo && mt(new xo()) != Aa) ||
  (No && mt(No.resolve()) != xa) ||
  (To && mt(new To()) != Na) ||
  (Ro && mt(new Ro()) != Ta)) &&
  (mt = function (e) {
    var t = Pc(e),
      n = t == G_ ? e.constructor : void 0,
      r = n ? Xt(n) : ''
    if (r)
      switch (r) {
        case K_:
          return Ra
        case Y_:
          return Aa
        case J_:
          return xa
        case Z_:
          return Na
        case Q_:
          return Ta
      }
    return t
  })
var X_ = mt,
  oo = oi,
  eS = Ec,
  tS = My,
  nS = R_,
  Pa = X_,
  Ua = tt,
  Ma = ai,
  rS = ci,
  oS = 1,
  Fa = '[object Arguments]',
  Oa = '[object Array]',
  Vn = '[object Object]',
  iS = Object.prototype,
  Da = iS.hasOwnProperty
function aS (e, t, n, r, o, i) {
  var a = Ua(e),
    s = Ua(t),
    c = a ? Oa : Pa(e),
    l = s ? Oa : Pa(t)
  ;(c = c == Fa ? Vn : c), (l = l == Fa ? Vn : l)
  var u = c == Vn,
    f = l == Vn,
    d = c == l
  if (d && Ma(e)) {
    if (!Ma(t)) return !1
    ;(a = !0), (u = !1)
  }
  if (d && !u)
    return (
      i || (i = new oo()),
      a || rS(e) ? eS(e, t, n, r, o, i) : tS(e, t, c, n, r, o, i)
    )
  if (!(n & oS)) {
    var p = u && Da.call(e, '__wrapped__'),
      m = f && Da.call(t, '__wrapped__')
    if (p || m) {
      var y = p ? e.value() : e,
        E = m ? t.value() : t
      return i || (i = new oo()), o(y, E, n, r, i)
    }
  }
  return d ? (i || (i = new oo()), nS(e, t, n, r, o, i)) : !1
}
var sS = aS,
  cS = sS,
  ka = bt
function Uc (e, t, n, r, o) {
  return e === t
    ? !0
    : e == null || t == null || (!ka(e) && !ka(t))
    ? e !== e && t !== t
    : cS(e, t, n, r, Uc, o)
}
var Mc = Uc,
  lS = oi,
  uS = Mc,
  dS = 1,
  fS = 2
function pS (e, t, n, r) {
  var o = n.length,
    i = o,
    a = !r
  if (e == null) return !i
  for (e = Object(e); o--; ) {
    var s = n[o]
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
  }
  for (; ++o < i; ) {
    s = n[o]
    var c = s[0],
      l = e[c],
      u = s[1]
    if (a && s[2]) {
      if (l === void 0 && !(c in e)) return !1
    } else {
      var f = new lS()
      if (r) var d = r(l, u, c, e, t, f)
      if (!(d === void 0 ? uS(u, l, dS | fS, r, f) : d)) return !1
    }
  }
  return !0
}
var hS = pS,
  mS = et
function gS (e) {
  return e === e && !mS(e)
}
var Fc = gS,
  yS = Fc,
  vS = Rc
function _S (e) {
  for (var t = vS(e), n = t.length; n--; ) {
    var r = t[n],
      o = e[r]
    t[n] = [r, o, yS(o)]
  }
  return t
}
var SS = _S
function ES (e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
  }
}
var Oc = ES,
  wS = hS,
  bS = SS,
  IS = Oc
function CS (e) {
  var t = bS(e)
  return t.length == 1 && t[0][2]
    ? IS(t[0][0], t[0][1])
    : function (n) {
        return n === e || wS(n, e, t)
      }
}
var AS = CS,
  xS = Yt,
  NS = bt,
  TS = '[object Symbol]'
function RS (e) {
  return typeof e == 'symbol' || (NS(e) && xS(e) == TS)
}
var ui = RS,
  PS = tt,
  US = ui,
  MS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  FS = /^\w*$/
function OS (e, t) {
  if (PS(e)) return !1
  var n = typeof e
  return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || US(e)
    ? !0
    : FS.test(e) || !MS.test(e) || (t != null && e in Object(t))
}
var di = OS,
  Dc = ri,
  DS = 'Expected a function'
function fi (e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(DS)
  var n = function () {
    var r = arguments,
      o = t ? t.apply(this, r) : r[0],
      i = n.cache
    if (i.has(o)) return i.get(o)
    var a = e.apply(this, r)
    return (n.cache = i.set(o, a) || i), a
  }
  return (n.cache = new (fi.Cache || Dc)()), n
}
fi.Cache = Dc
var kS = fi,
  BS = kS,
  LS = 500
function jS (e) {
  var t = BS(e, function (r) {
      return n.size === LS && n.clear(), r
    }),
    n = t.cache
  return t
}
var $S = jS,
  VS = $S,
  HS =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  qS = /\\(\\)?/g,
  WS = VS(function (e) {
    var t = []
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(HS, function (n, r, o, i) {
        t.push(o ? i.replace(qS, '$1') : r || n)
      }),
      t
    )
  }),
  zS = WS,
  Ba = Br,
  GS = yc,
  KS = tt,
  YS = ui,
  JS = 1 / 0,
  La = Ba ? Ba.prototype : void 0,
  ja = La ? La.toString : void 0
function kc (e) {
  if (typeof e == 'string') return e
  if (KS(e)) return GS(e, kc) + ''
  if (YS(e)) return ja ? ja.call(e) : ''
  var t = e + ''
  return t == '0' && 1 / e == -JS ? '-0' : t
}
var ZS = kc,
  QS = ZS
function XS (e) {
  return e == null ? '' : QS(e)
}
var eE = XS,
  tE = tt,
  nE = di,
  rE = zS,
  oE = eE
function iE (e, t) {
  return tE(e) ? e : nE(e, t) ? [e] : rE(oE(e))
}
var Hr = iE,
  aE = ui,
  sE = 1 / 0
function cE (e) {
  if (typeof e == 'string' || aE(e)) return e
  var t = e + ''
  return t == '0' && 1 / e == -sE ? '-0' : t
}
var Rn = cE,
  lE = Hr,
  uE = Rn
function dE (e, t) {
  t = lE(t, e)
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[uE(t[n++])]
  return n && n == r ? e : void 0
}
var pi = dE,
  fE = pi
function pE (e, t, n) {
  var r = e == null ? void 0 : fE(e, t)
  return r === void 0 ? n : r
}
var hE = pE
function mE (e, t) {
  return e != null && t in Object(e)
}
var gE = mE,
  yE = Hr,
  vE = ii,
  _E = tt,
  SE = $r,
  EE = si,
  wE = Rn
function bE (e, t, n) {
  t = yE(t, e)
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = wE(t[r])
    if (!(i = e != null && n(e, a))) break
    e = e[a]
  }
  return i || ++r != o
    ? i
    : ((o = e == null ? 0 : e.length),
      !!o && EE(o) && SE(a, o) && (_E(e) || vE(e)))
}
var IE = bE,
  CE = gE,
  AE = IE
function xE (e, t) {
  return e != null && AE(e, t, CE)
}
var NE = xE,
  TE = Mc,
  RE = hE,
  PE = NE,
  UE = di,
  ME = Fc,
  FE = Oc,
  OE = Rn,
  DE = 1,
  kE = 2
function BE (e, t) {
  return UE(e) && ME(t)
    ? FE(OE(e), t)
    : function (n) {
        var r = RE(n, e)
        return r === void 0 && r === t ? PE(n, e) : TE(t, r, DE | kE)
      }
}
var LE = BE
function jE (e) {
  return e
}
var hi = jE
function $E (e) {
  return function (t) {
    return t == null ? void 0 : t[e]
  }
}
var VE = $E,
  HE = pi
function qE (e) {
  return function (t) {
    return HE(t, e)
  }
}
var WE = qE,
  zE = VE,
  GE = WE,
  KE = di,
  YE = Rn
function JE (e) {
  return KE(e) ? zE(YE(e)) : GE(e)
}
var ZE = JE,
  QE = AS,
  XE = LE,
  e1 = hi,
  t1 = tt,
  n1 = ZE
function r1 (e) {
  return typeof e == 'function'
    ? e
    : e == null
    ? e1
    : typeof e == 'object'
    ? t1(e)
      ? XE(e[0], e[1])
      : QE(e)
    : n1(e)
}
var o1 = r1,
  i1 = wt,
  a1 = (function () {
    try {
      var e = i1(Object, 'defineProperty')
      return e({}, '', {}), e
    } catch {}
  })(),
  Bc = a1,
  $a = Bc
function s1 (e, t, n) {
  t == '__proto__' && $a
    ? $a(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n)
}
var mi = s1,
  c1 = mi,
  l1 = Tn,
  u1 = Object.prototype,
  d1 = u1.hasOwnProperty
function f1 (e, t, n) {
  var r = e[t]
  ;(!(d1.call(e, t) && l1(r, n)) || (n === void 0 && !(t in e))) && c1(e, t, n)
}
var Lc = f1,
  p1 = Lc,
  h1 = Hr,
  m1 = $r,
  Va = et,
  g1 = Rn
function y1 (e, t, n, r) {
  if (!Va(e)) return e
  t = h1(t, e)
  for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
    var c = g1(t[o]),
      l = n
    if (c === '__proto__' || c === 'constructor' || c === 'prototype') return e
    if (o != a) {
      var u = s[c]
      ;(l = r ? r(u, c, s) : void 0),
        l === void 0 && (l = Va(u) ? u : m1(t[o + 1]) ? [] : {})
    }
    p1(s, c, l), (s = s[c])
  }
  return e
}
var v1 = y1,
  _1 = pi,
  S1 = v1,
  E1 = Hr
function w1 (e, t, n) {
  for (var r = -1, o = t.length, i = {}; ++r < o; ) {
    var a = t[r],
      s = _1(e, a)
    n(s, a) && S1(i, E1(a, e), s)
  }
  return i
}
var b1 = w1,
  I1 = Tc,
  C1 = I1(Object.getPrototypeOf, Object),
  gi = C1,
  A1 = bc,
  x1 = gi,
  N1 = Ac,
  T1 = Cc,
  R1 = Object.getOwnPropertySymbols,
  P1 = R1
    ? function (e) {
        for (var t = []; e; ) A1(t, N1(e)), (e = x1(e))
        return t
      }
    : T1,
  U1 = P1
function M1 (e) {
  var t = []
  if (e != null) for (var n in Object(e)) t.push(n)
  return t
}
var F1 = M1,
  O1 = et,
  D1 = li,
  k1 = F1,
  B1 = Object.prototype,
  L1 = B1.hasOwnProperty
function j1 (e) {
  if (!O1(e)) return k1(e)
  var t = D1(e),
    n = []
  for (var r in e) (r == 'constructor' && (t || !L1.call(e, r))) || n.push(r)
  return n
}
var $1 = j1,
  V1 = Nc,
  H1 = $1,
  q1 = Vr
function W1 (e) {
  return q1(e) ? V1(e, !0) : H1(e)
}
var yi = W1,
  z1 = Ic,
  G1 = U1,
  K1 = yi
function Y1 (e) {
  return z1(e, K1, G1)
}
var J1 = Y1,
  Z1 = yc,
  Q1 = o1,
  X1 = b1,
  e0 = J1
function t0 (e, t) {
  if (e == null) return {}
  var n = Z1(e0(e), function (r) {
    return [r]
  })
  return (
    (t = Q1(t)),
    X1(e, n, function (r, o) {
      return t(r, o[0])
    })
  )
}
var n0 = t0
const r0 = gc(n0),
  o0 = !0,
  i0 = '',
  qr = (e, t) => `${e}${t}`.replace(/[^A-Z0-9+]/gi, ''),
  a0 = (e, t) => {
    switch (t) {
      case 'address':
      case 'birthdate':
      case 'email':
      case 'family_name':
      case 'gender':
      case 'given_name':
      case 'locale':
      case 'middle_name':
      case 'name':
      case 'nickname':
      case 'phone_number':
      case 'picture':
      case 'preferred_username':
      case 'profile':
      case 'updated_at':
      case 'website':
      case 'zoneinfo':
        return !0
      default:
        return t.startsWith('custom:')
    }
  },
  s0 = e => {
    const { phone_number: t, ...n } = r0(e, a0)
    if (Os(t) && t !== i0) {
      const { country_code: r } = e
      return { ...n, phone_number: qr(r, t) }
    }
    return n
  },
  c0 = (e, t, n) => {
    const { password: r, ...o } = t,
      i = s0(o),
      a = {
        autoSignIn: o0,
        userAttributes: {
          ...(n === 'phone_number' ? { ...i, phone_number: e } : i)
        }
      }
    return { username: e, password: r, options: a }
  },
  l0 = ({ formValues: e, loginMechanisms: t }) => {
    const n = t[0]
    if (n === 'phone_number') {
      const { country_code: r, phone_number: o } = e
      return qr(r, o)
    }
    return e[n]
  },
  { assign: Q } = lc,
  u0 = Q({ actorDoneData: void 0 }),
  d0 = Q({ challengeName: void 0 }),
  f0 = Q({ missingAttributes: void 0 }),
  p0 = Q({ remoteError: void 0 }),
  h0 = Q({ formValues: {} }),
  m0 = Q({ touched: {} }),
  g0 = Q({ user: void 0 }),
  y0 = Q({ validationError: {} }),
  v0 = Q({
    totpSecretCode: (e, { data: t }) => {
      var n
      const { sharedSecret: r } =
        ((n = t.nextStep) == null ? void 0 : n.totpSetupDetails) ?? {}
      return r
    }
  }),
  _0 = Q({ step: 'SIGN_IN' }),
  S0 = Q({ step: 'SHOULD_CONFIRM_USER_ATTRIBUTE' }),
  E0 = Q({ step: 'CONFIRM_ATTRIBUTE_COMPLETE' }),
  w0 = Q({
    challengeName: (e, { data: t }) => {
      const { signInStep: n } = t.nextStep
      return n === 'CONFIRM_SIGN_IN_WITH_SMS_CODE'
        ? 'SMS_MFA'
        : n === 'CONFIRM_SIGN_IN_WITH_TOTP_CODE'
        ? 'SOFTWARE_TOKEN_MFA'
        : void 0
    }
  }),
  b0 = Q({
    username: ({ formValues: e, loginMechanisms: t }) => {
      const n = t[0],
        { username: r, country_code: o } = e
      return n === 'phone_number' ? qr(o, r) : r
    }
  }),
  I0 = Q({ username: l0 }),
  C0 = Q({
    username: ({ formValues: e, loginMechanisms: t }) => {
      const n = t[0],
        { username: r, country_code: o } = e
      return n === 'phone_number' ? qr(o, r) : r
    }
  }),
  A0 = Q({
    step: (e, { data: t }) =>
      t.nextStep.signInStep === 'DONE'
        ? 'SIGN_IN_COMPLETE'
        : t.nextStep.signInStep
  }),
  x0 = Q({
    step: (e, { data: t }) =>
      t.nextStep.signUpStep === 'DONE'
        ? 'SIGN_UP_COMPLETE'
        : t.nextStep.signUpStep
  }),
  N0 = Q({
    step: (e, { data: t }) =>
      t.nextStep.resetPasswordStep === 'DONE'
        ? 'RESET_PASSWORD_COMPLETE'
        : t.nextStep.resetPasswordStep
  }),
  T0 = Q({
    missingAttributes: (e, { data: t }) => {
      var n
      return (n = t.nextStep) == null ? void 0 : n.missingAttributes
    }
  }),
  R0 = Q({ validationError: (e, { data: t }) => t }),
  P0 = Q({
    remoteError: (e, { data: t }) =>
      t.name === 'NoUserPoolError'
        ? 'Configuration error (see console) – please contact the administrator'
        : (t == null ? void 0 : t.message) || t
  }),
  U0 = Q({ user: (e, { data: t }) => t }),
  Ha = e => ({
    Destination: e.destination,
    DeliveryMedium: e.deliveryMedium,
    AttributeName: e.attributName
  }),
  M0 = Q({
    codeDeliveryDetails: (e, { data: t }) => {
      var n
      return (n = t == null ? void 0 : t.nextStep) != null &&
        n.codeDeliveryDetails
        ? Ha(t.nextStep.codeDeliveryDetails)
        : Ha(t)
    }
  }),
  F0 = Q({
    formValues: (e, { data: t }) => {
      const { name: n, value: r } = t
      return { ...e.formValues, [n]: r }
    }
  }),
  O0 = Q({
    formValues: (e, { data: t }) => Df({ ...e.formValues, ...t }, 'password')
  }),
  D0 = Q({ touched: (e, { data: t }) => ({ ...e.touched, [t.name]: !0 }) }),
  k0 = Q({
    unverifiedUserAttributes: (e, { data: t }) => {
      const { email: n, phone_number: r } = t
      return { ...(n && { email: n }), ...(r && { phone_number: r }) }
    }
  }),
  B0 = Q({ selectedUserAttribute: void 0 }),
  L0 = Q({
    selectedUserAttribute: e => {
      var t
      return (t = e.formValues) == null ? void 0 : t.unverifiedAttr
    }
  }),
  j0 = Q({ step: 'CONFIRM_SIGN_UP' }),
  Pn = {
    clearActorDoneData: u0,
    clearChallengeName: d0,
    clearError: p0,
    clearFormValues: h0,
    clearMissingAttributes: f0,
    clearSelectedUserAttribute: B0,
    clearTouched: m0,
    clearUser: g0,
    clearValidationError: y0,
    handleBlur: D0,
    handleInput: F0,
    handleSubmit: O0,
    setChallengeName: w0,
    setCodeDeliveryDetails: M0,
    setFieldErrors: R0,
    setMissingAttributes: T0,
    setNextResetPasswordStep: N0,
    setNextSignInStep: A0,
    setNextSignUpStep: x0,
    setRemoteError: P0,
    setConfirmAttributeCompleteStep: E0,
    setConfirmSignUpSignUpStep: j0,
    setShouldVerifyUserAttributeStep: S0,
    setSelectedUserAttribute: L0,
    setSignInStep: _0,
    setTotpSecretCode: v0,
    setUser: U0,
    setUnverifiedUserAttributes: k0,
    setUsernameForgotPassword: b0,
    setUsernameSignIn: C0,
    setUsernameSignUp: I0
  },
  $0 = ['CONFIRM_SIGN_IN_WITH_SMS_CODE', 'CONFIRM_SIGN_IN_WITH_TOTP_CODE'],
  V0 = (e, { data: t }) =>
    (t == null ? void 0 : t.nextStep.signInStep) ===
    'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED',
  H0 = (e, { data: t }) => {
    var n
    return (
      ((n = t == null ? void 0 : t.nextStep) == null
        ? void 0
        : n.signInStep) === 'RESET_PASSWORD'
    )
  },
  q0 = (e, { data: t }) =>
    (t == null ? void 0 : t.nextStep.signInStep) === 'CONFIRM_SIGN_UP',
  W0 = (e, { data: t }) =>
    (t == null ? void 0 : t.nextStep.signUpStep) === 'COMPLETE_AUTO_SIGN_IN',
  z0 = (e, { data: t }) =>
    (t == null ? void 0 : t.nextStep.signInStep) === 'DONE',
  G0 = (e, { data: t }) =>
    (t == null ? void 0 : t.nextStep.signUpStep) === 'DONE',
  K0 = (e, { data: t }) =>
    (t == null ? void 0 : t.nextStep.resetPasswordStep) === 'DONE',
  Y0 = (e, { data: t }) =>
    (t == null ? void 0 : t.step) === 'CONFIRM_ATTRIBUTE_COMPLETE',
  J0 = (e, { data: t }) =>
    (t == null ? void 0 : t.step) === 'CONFIRM_ATTRIBUTE_WITH_CODE',
  Z0 = (e, { data: t }) =>
    (t == null ? void 0 : t.step) === 'SHOULD_CONFIRM_USER_ATTRIBUTE',
  Q0 = (e, { data: t }) => (t == null ? void 0 : t.step) === 'RESET_PASSWORD',
  X0 = (e, { data: t }) => (t == null ? void 0 : t.step) === 'CONFIRM_SIGN_UP',
  ew = ({ step: e }) => $0.includes(e),
  tw = ({ step: e }) => e === 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP',
  nw = ({ step: e }) => e === 'RESET_PASSWORD',
  rw = ({ step: e }) => e === 'CONFIRM_RESET_PASSWORD_WITH_CODE',
  ow = ({ step: e }) => e === 'CONFIRM_SIGN_UP',
  iw = (e, { data: t }) => {
    const { phone_number_verified: n, email_verified: r } = t
    return (r === void 0 || r === 'false') && (n === void 0 || n === 'false')
  },
  aw = (e, { data: t }) => t.message === 'User is already confirmed.',
  Wr = {
    hasCompletedAttributeConfirmation: Y0,
    hasCompletedResetPassword: K0,
    hasCompletedSignIn: z0,
    hasCompletedSignUp: G0,
    isConfirmSignUpStep: X0,
    isConfirmUserAttributeStep: J0,
    isResetPasswordStep: Q0,
    isShouldConfirmUserAttributeStep: Z0,
    isUserAlreadyConfirmed: aw,
    shouldAutoSignIn: W0,
    shouldConfirmResetPassword: rw,
    shouldConfirmSignIn: ew,
    shouldConfirmSignInWithNewPassword: V0,
    shouldConfirmSignUp: ow,
    shouldConfirmSignUpFromSignIn: q0,
    shouldResetPassword: nw,
    shouldResetPasswordFromSignIn: H0,
    shouldSetupTotp: tw,
    shouldVerifyAttribute: iw
  }
var sw = mi,
  cw = Tn
function lw (e, t, n) {
  ;((n !== void 0 && !cw(e[t], n)) || (n === void 0 && !(t in e))) &&
    sw(e, t, n)
}
var jc = lw
function uw (e) {
  return function (t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var c = a[e ? s : ++o]
      if (n(i[c], c, i) === !1) break
    }
    return t
  }
}
var dw = uw,
  fw = dw,
  pw = fw(),
  hw = pw,
  hr = { exports: {} }
hr.exports
;(function (e, t) {
  var n = He,
    r = t && !t.nodeType && t,
    o = r && !0 && e && !e.nodeType && e,
    i = o && o.exports === r,
    a = i ? n.Buffer : void 0,
    s = a ? a.allocUnsafe : void 0
  function c (l, u) {
    if (u) return l.slice()
    var f = l.length,
      d = s ? s(f) : new l.constructor(f)
    return l.copy(d), d
  }
  e.exports = c
})(hr, hr.exports)
var mw = hr.exports,
  qa = wc
function gw (e) {
  var t = new e.constructor(e.byteLength)
  return new qa(t).set(new qa(e)), t
}
var yw = gw,
  vw = yw
function _w (e, t) {
  var n = t ? vw(e.buffer) : e.buffer
  return new e.constructor(n, e.byteOffset, e.length)
}
var Sw = _w
function Ew (e, t) {
  var n = -1,
    r = e.length
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n]
  return t
}
var ww = Ew,
  bw = et,
  Wa = Object.create,
  Iw = (function () {
    function e () {}
    return function (t) {
      if (!bw(t)) return {}
      if (Wa) return Wa(t)
      e.prototype = t
      var n = new e()
      return (e.prototype = void 0), n
    }
  })(),
  Cw = Iw,
  Aw = Cw,
  xw = gi,
  Nw = li
function Tw (e) {
  return typeof e.constructor == 'function' && !Nw(e) ? Aw(xw(e)) : {}
}
var Rw = Tw,
  Pw = Vr,
  Uw = bt
function Mw (e) {
  return Uw(e) && Pw(e)
}
var Fw = Mw,
  Ow = Yt,
  Dw = gi,
  kw = bt,
  Bw = '[object Object]',
  Lw = Function.prototype,
  jw = Object.prototype,
  $c = Lw.toString,
  $w = jw.hasOwnProperty,
  Vw = $c.call(Object)
function Hw (e) {
  if (!kw(e) || Ow(e) != Bw) return !1
  var t = Dw(e)
  if (t === null) return !0
  var n = $w.call(t, 'constructor') && t.constructor
  return typeof n == 'function' && n instanceof n && $c.call(n) == Vw
}
var qw = Hw
function Ww (e, t) {
  if (!(t === 'constructor' && typeof e[t] == 'function') && t != '__proto__')
    return e[t]
}
var Vc = Ww,
  zw = Lc,
  Gw = mi
function Kw (e, t, n, r) {
  var o = !n
  n || (n = {})
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i],
      c = r ? r(n[s], e[s], s, n, e) : void 0
    c === void 0 && (c = e[s]), o ? Gw(n, s, c) : zw(n, s, c)
  }
  return n
}
var Yw = Kw,
  Jw = Yw,
  Zw = yi
function Qw (e) {
  return Jw(e, Zw(e))
}
var Xw = Qw,
  za = jc,
  eb = mw,
  tb = Sw,
  nb = ww,
  rb = Rw,
  Ga = ii,
  Ka = tt,
  ob = Fw,
  ib = ai,
  ab = ti,
  sb = et,
  cb = qw,
  lb = ci,
  Ya = Vc,
  ub = Xw
function db (e, t, n, r, o, i, a) {
  var s = Ya(e, n),
    c = Ya(t, n),
    l = a.get(c)
  if (l) {
    za(e, n, l)
    return
  }
  var u = i ? i(s, c, n + '', e, t, a) : void 0,
    f = u === void 0
  if (f) {
    var d = Ka(c),
      p = !d && ib(c),
      m = !d && !p && lb(c)
    ;(u = c),
      d || p || m
        ? Ka(s)
          ? (u = s)
          : ob(s)
          ? (u = nb(s))
          : p
          ? ((f = !1), (u = eb(c, !0)))
          : m
          ? ((f = !1), (u = tb(c, !0)))
          : (u = [])
        : cb(c) || Ga(c)
        ? ((u = s), Ga(s) ? (u = ub(s)) : (!sb(s) || ab(s)) && (u = rb(c)))
        : (f = !1)
  }
  f && (a.set(c, u), o(u, c, r, i, a), a.delete(c)), za(e, n, u)
}
var fb = db,
  pb = oi,
  hb = jc,
  mb = hw,
  gb = fb,
  yb = et,
  vb = yi,
  _b = Vc
function Hc (e, t, n, r, o) {
  e !== t &&
    mb(
      t,
      function (i, a) {
        if ((o || (o = new pb()), yb(i))) gb(e, t, a, n, Hc, r, o)
        else {
          var s = r ? r(_b(e, a), i, a + '', e, t, o) : void 0
          s === void 0 && (s = i), hb(e, a, s)
        }
      },
      vb
    )
}
var Sb = Hc
function Eb (e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t)
    case 1:
      return e.call(t, n[0])
    case 2:
      return e.call(t, n[0], n[1])
    case 3:
      return e.call(t, n[0], n[1], n[2])
  }
  return e.apply(t, n)
}
var wb = Eb,
  bb = wb,
  Ja = Math.max
function Ib (e, t, n) {
  return (
    (t = Ja(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, o = -1, i = Ja(r.length - t, 0), a = Array(i);
        ++o < i;

      )
        a[o] = r[t + o]
      o = -1
      for (var s = Array(t + 1); ++o < t; ) s[o] = r[o]
      return (s[t] = n(a)), bb(e, this, s)
    }
  )
}
var Cb = Ib
function Ab (e) {
  return function () {
    return e
  }
}
var xb = Ab,
  Nb = xb,
  Za = Bc,
  Tb = hi,
  Rb = Za
    ? function (e, t) {
        return Za(e, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: Nb(t),
          writable: !0
        })
      }
    : Tb,
  Pb = Rb,
  Ub = 800,
  Mb = 16,
  Fb = Date.now
function Ob (e) {
  var t = 0,
    n = 0
  return function () {
    var r = Fb(),
      o = Mb - (r - n)
    if (((n = r), o > 0)) {
      if (++t >= Ub) return arguments[0]
    } else t = 0
    return e.apply(void 0, arguments)
  }
}
var Db = Ob,
  kb = Pb,
  Bb = Db,
  Lb = Bb(kb),
  jb = Lb,
  $b = hi,
  Vb = Cb,
  Hb = jb
function qb (e, t) {
  return Hb(Vb(e, t, $b), e + '')
}
var Wb = qb,
  zb = Tn,
  Gb = Vr,
  Kb = $r,
  Yb = et
function Jb (e, t, n) {
  if (!Yb(n)) return !1
  var r = typeof t
  return (r == 'number' ? Gb(n) && Kb(t, n.length) : r == 'string' && t in n)
    ? zb(n[t], e)
    : !1
}
var Zb = Jb,
  Qb = Wb,
  Xb = Zb
function eI (e) {
  return Qb(function (t, n) {
    var r = -1,
      o = n.length,
      i = o > 1 ? n[o - 1] : void 0,
      a = o > 2 ? n[2] : void 0
    for (
      i = e.length > 3 && typeof i == 'function' ? (o--, i) : void 0,
        a && Xb(n[0], n[1], a) && ((i = o < 3 ? void 0 : i), (o = 1)),
        t = Object(t);
      ++r < o;

    ) {
      var s = n[r]
      s && e(t, s, r, i)
    }
    return t
  })
}
var tI = eI,
  nI = Sb,
  rI = tI,
  oI = rI(function (e, t, n) {
    nI(e, t, n)
  }),
  iI = oI
const aI = gc(iI),
  zr = async (e, t, n, r) => {
    const o = await Promise.all(r.map(a => a(e, t, n))),
      i = aI({}, ...o)
    return Ds(i) ? Promise.resolve() : Promise.reject(i)
  },
  sI = 8,
  cI = e => Array.isArray(e),
  lI = e => {
    if (e)
      return cI(e)
        ? Object.entries(e).map(([t, n]) => Object.keys(n)[0])
        : Object.keys(e)
  },
  ft = {
    async getAmplifyConfig () {
      var e, t, n, r
      const o = $l.getConfig(),
        i = (e = o.Auth) == null ? void 0 : e.Cognito,
        { loginWith: a, userAttributes: s } =
          ((t = o.Auth) == null ? void 0 : t.Cognito) ?? {},
        c = a
          ? Object.entries(a)
              .filter(([f, d]) => f !== 'oauth')
              .filter(([f, d]) => !!d)
              .map(f => (f[0] === 'phone' ? 'phone_number' : f[0]))
          : void 0,
        l = lI(s),
        u =
          (n = a == null ? void 0 : a.oauth) != null && n.providers
            ? (r = a.oauth.providers) == null
              ? void 0
              : r.map(f => f.toString().toLowerCase())
            : void 0
      return {
        ...i,
        loginMechanisms: c,
        signUpAttributes: l,
        socialProviders: u
      }
    },
    getCurrentUser: wn,
    handleSignIn: Vo,
    handleSignUp: Md,
    handleConfirmSignIn: Rs,
    handleConfirmSignUp: Od,
    handleForgotPasswordSubmit: Fd,
    handleForgotPassword: Ns,
    async validateCustomSignUp (e, t) {},
    async validateFormPassword (e, t, n) {
      const { password: r } = e,
        { password: o } = t
      if (!o || !n) return null
      const i = [],
        a = n.minLength ?? sI
      return (
        r.length < a && i.push(`Password must have at least ${a} characters`),
        n.requireLowercase &&
          !/[a-z]/.test(r) &&
          i.push('Password must have lower case letters'),
        n.requireUppercase &&
          !/[A-Z]/.test(r) &&
          i.push('Password must have upper case letters'),
        n.requireNumbers &&
          !/[0-9]/.test(r) &&
          i.push('Password must have numbers'),
        n.requireSpecialCharacters &&
          !Ff(r) &&
          i.push('Password must have special characters'),
        i.length !== 0 ? { password: i } : null
      )
    },
    async validateConfirmPassword (e, t) {
      const { password: n, confirm_password: r } = e,
        { confirm_password: o, password: i } = t
      if (!n && !r) return null
      if (
        (n || r) &&
        n !== r &&
        ((o && i) ||
          ((n == null ? void 0 : n.length) >= 6 &&
            (r == null ? void 0 : r.length) >= 6))
      )
        return { confirm_password: 'Your passwords must match' }
    },
    async validatePreferredUsername (e, t) {}
  }
function uI ({ services: e }) {
  return Gt(
    {
      id: 'forgotPasswordActor',
      initial: 'init',
      predictableActionArguments: !0,
      states: {
        init: {
          always: [
            { cond: 'shouldResetPassword', target: 'confirmResetPassword' },
            {
              cond: 'shouldConfirmResetPassword',
              target: 'confirmResetPassword'
            },
            { target: 'forgotPassword' }
          ]
        },
        forgotPassword: {
          initial: 'edit',
          entry: 'sendUpdate',
          exit: ['clearError', 'clearTouched'],
          states: {
            edit: {
              entry: 'sendUpdate',
              on: {
                SUBMIT: { actions: 'handleSubmit', target: 'submit' },
                CHANGE: { actions: 'handleInput' },
                BLUR: { actions: 'handleBlur' }
              }
            },
            submit: {
              tags: 'pending',
              entry: ['sendUpdate', 'clearError', 'setUsernameForgotPassword'],
              invoke: {
                src: 'handleResetPassword',
                onDone: {
                  actions: [
                    'setCodeDeliveryDetails',
                    'setNextResetPasswordStep'
                  ],
                  target: '#forgotPasswordActor.confirmResetPassword'
                },
                onError: { actions: 'setRemoteError', target: 'edit' }
              }
            }
          }
        },
        confirmResetPassword: {
          type: 'parallel',
          exit: ['clearFormValues', 'clearError', 'clearTouched'],
          states: {
            validation: {
              initial: 'pending',
              states: {
                pending: {
                  invoke: {
                    src: 'validateFields',
                    onDone: {
                      target: 'valid',
                      actions: 'clearValidationError'
                    },
                    onError: { target: 'invalid', actions: 'setFieldErrors' }
                  }
                },
                valid: { entry: 'sendUpdate' },
                invalid: { entry: 'sendUpdate' }
              },
              on: {
                CHANGE: { actions: 'handleInput', target: '.pending' },
                BLUR: { actions: 'handleBlur', target: '.pending' }
              }
            },
            submission: {
              initial: 'idle',
              states: {
                idle: {
                  entry: 'sendUpdate',
                  on: {
                    SUBMIT: { actions: 'handleSubmit', target: 'validate' },
                    RESEND: 'resendCode',
                    CHANGE: { actions: 'handleInput' },
                    BLUR: { actions: 'handleBlur' }
                  }
                },
                validate: {
                  entry: 'sendUpdate',
                  invoke: {
                    src: 'validateFields',
                    onDone: {
                      target: 'pending',
                      actions: 'clearValidationError'
                    },
                    onError: { target: 'idle', actions: 'setFieldErrors' }
                  }
                },
                resendCode: {
                  tags: 'pending',
                  entry: ['clearError', 'sendUpdate'],
                  invoke: {
                    src: 'handleResetPassword',
                    onDone: { target: 'idle' },
                    onError: { actions: 'setRemoteError', target: 'idle' }
                  }
                },
                pending: {
                  tags: 'pending',
                  entry: ['clearError', 'sendUpdate'],
                  invoke: {
                    src: 'handleConfirmResetPassword',
                    onDone: [
                      {
                        cond: 'hasCompletedResetPassword',
                        actions: 'setNextResetPasswordStep',
                        target: '#forgotPasswordActor.resolved'
                      },
                      {
                        actions: 'setSignInStep',
                        target: '#forgotPasswordActor.resolved'
                      }
                    ],
                    onError: { actions: 'setRemoteError', target: 'idle' }
                  }
                }
              }
            }
          }
        },
        resolved: { type: 'final', data: ({ step: t }) => ({ step: t }) }
      }
    },
    {
      actions: { ...Pn, sendUpdate: Or() },
      guards: Wr,
      services: {
        handleResetPassword ({ username: t }) {
          return e.handleForgotPassword({ username: t })
        },
        handleConfirmResetPassword ({ formValues: t, username: n }) {
          const { confirmation_code: r, password: o } = t
          return e.handleForgotPasswordSubmit({
            confirmationCode: r,
            newPassword: o,
            username: n
          })
        },
        validateFields (t) {
          return zr(t.formValues, t.touched, t.passwordSettings, [
            ft.validateFormPassword,
            ft.validateConfirmPassword
          ])
        }
      }
    }
  )
}
const qc = e => ({
    entry: ['sendUpdate', 'clearError'],
    invoke: {
      src: 'signInWithRedirect',
      onDone: { target: e },
      onError: { actions: 'setRemoteError', target: e }
    }
  }),
  Hn = {
    onDone: [
      {
        cond: 'hasCompletedSignIn',
        actions: 'setNextSignInStep',
        target: '#signInActor.fetchUserAttributes'
      },
      {
        cond: 'shouldConfirmSignInWithNewPassword',
        actions: ['setMissingAttributes', 'setNextSignInStep'],
        target: '#signInActor.forceChangePassword'
      },
      {
        cond: 'shouldResetPasswordFromSignIn',
        actions: 'setNextSignInStep',
        target: '#signInActor.resetPassword'
      },
      {
        cond: 'shouldConfirmSignUpFromSignIn',
        actions: 'setNextSignInStep',
        target: '#signInActor.resendSignUpCode'
      },
      {
        actions: [
          'setChallengeName',
          'setMissingAttributes',
          'setNextSignInStep',
          'setTotpSecretCode'
        ],
        target: '#signInActor.init'
      }
    ],
    onError: { actions: 'setRemoteError', target: 'edit' }
  },
  dI = {
    onDone: [
      {
        cond: 'shouldVerifyAttribute',
        actions: [
          'setShouldVerifyUserAttributeStep',
          'setUnverifiedUserAttributes'
        ],
        target: '#signInActor.resolved'
      },
      {
        actions: 'setConfirmAttributeCompleteStep',
        target: '#signInActor.resolved'
      }
    ],
    onError: {
      actions: 'setConfirmAttributeCompleteStep',
      target: '#signInActor.resolved'
    }
  }
function fI ({ services: e }) {
  return Gt(
    {
      id: 'signInActor',
      initial: 'init',
      predictableActionArguments: !0,
      states: {
        init: {
          always: [
            { cond: 'shouldConfirmSignIn', target: 'confirmSignIn' },
            { cond: 'shouldSetupTotp', target: 'setupTotp' },
            {
              cond: ({ step: t }) =>
                t === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED',
              actions: 'setActorDoneData',
              target: 'forceChangePassword'
            },
            { target: 'signIn' }
          ]
        },
        federatedSignIn: qc('signIn'),
        fetchUserAttributes: { invoke: { src: 'fetchUserAttributes', ...dI } },
        resendSignUpCode: {
          invoke: {
            src: 'handleResendSignUpCode',
            onDone: {
              actions: 'setCodeDeliveryDetails',
              target: '#signInActor.resolved'
            },
            onError: {
              actions: 'setRemoteError',
              target: '#signInActor.signIn'
            }
          }
        },
        resetPassword: {
          invoke: {
            src: 'resetPassword',
            onDone: [
              {
                actions: 'setCodeDeliveryDetails',
                target: '#signInActor.resolved'
              }
            ],
            onError: { actions: ['setRemoteError', 'sendUpdate'] }
          }
        },
        signIn: {
          initial: 'edit',
          exit: 'clearTouched',
          states: {
            edit: {
              entry: 'sendUpdate',
              on: {
                CHANGE: { actions: 'handleInput' },
                FEDERATED_SIGN_IN: { target: '#signInActor.federatedSignIn' },
                SUBMIT: { actions: 'handleSubmit', target: 'submit' }
              }
            },
            submit: {
              tags: 'pending',
              entry: ['clearError', 'sendUpdate', 'setUsernameSignIn'],
              exit: 'clearFormValues',
              invoke: { src: 'handleSignIn', ...Hn }
            }
          }
        },
        confirmSignIn: {
          initial: 'edit',
          exit: [
            'clearChallengeName',
            'clearFormValues',
            'clearError',
            'clearTouched'
          ],
          states: {
            edit: {
              entry: 'sendUpdate',
              on: {
                SUBMIT: { actions: 'handleSubmit', target: 'submit' },
                SIGN_IN: '#signInActor.signIn',
                CHANGE: { actions: 'handleInput' }
              }
            },
            submit: {
              tags: 'pending',
              entry: ['clearError', 'sendUpdate'],
              invoke: { src: 'confirmSignIn', ...Hn }
            }
          }
        },
        forceChangePassword: {
          entry: 'sendUpdate',
          type: 'parallel',
          exit: ['clearFormValues', 'clearError', 'clearTouched'],
          states: {
            validation: {
              initial: 'pending',
              states: {
                pending: {
                  invoke: {
                    src: 'validateFields',
                    onDone: {
                      target: 'valid',
                      actions: 'clearValidationError'
                    },
                    onError: { target: 'invalid', actions: 'setFieldErrors' }
                  }
                },
                valid: { entry: 'sendUpdate' },
                invalid: { entry: 'sendUpdate' }
              },
              on: {
                SIGN_IN: {
                  actions: 'setSignInStep',
                  target: '#signInActor.resolved'
                },
                CHANGE: { actions: 'handleInput', target: '.pending' },
                BLUR: { actions: 'handleBlur', target: '.pending' }
              }
            },
            submit: {
              initial: 'edit',
              entry: 'clearError',
              states: {
                edit: {
                  entry: 'sendUpdate',
                  on: {
                    SUBMIT: { actions: 'handleSubmit', target: 'validate' }
                  }
                },
                validate: {
                  entry: 'sendUpdate',
                  invoke: {
                    src: 'validateFields',
                    onDone: {
                      actions: 'clearValidationError',
                      target: 'pending'
                    },
                    onError: { actions: 'setFieldErrors', target: 'edit' }
                  }
                },
                pending: {
                  tags: 'pending',
                  entry: ['sendUpdate', 'clearError'],
                  invoke: { src: 'handleForceChangePassword', ...Hn }
                }
              }
            }
          }
        },
        setupTotp: {
          initial: 'edit',
          exit: ['clearFormValues', 'clearError', 'clearTouched'],
          states: {
            edit: {
              entry: 'sendUpdate',
              on: {
                SUBMIT: { actions: 'handleSubmit', target: 'submit' },
                SIGN_IN: '#signInActor.signIn',
                CHANGE: { actions: 'handleInput' }
              }
            },
            submit: {
              tags: 'pending',
              entry: ['sendUpdate', 'clearError'],
              invoke: { src: 'confirmSignIn', ...Hn }
            }
          }
        },
        resolved: {
          type: 'final',
          data: t => ({
            codeDeliveryDetails: t.codeDeliveryDetails,
            remoteError: t.remoteError,
            step: t.step,
            unverifiedUserAttributes: t.unverifiedUserAttributes,
            username: t.username
          })
        }
      }
    },
    {
      actions: { ...Pn, sendUpdate: Or() },
      guards: Wr,
      services: {
        async fetchUserAttributes () {
          return ps()
        },
        resetPassword ({ username: t }) {
          return Ns({ username: t })
        },
        handleResendSignUpCode ({ username: t }) {
          return Ts({ username: t })
        },
        handleSignIn ({ formValues: t, username: n }) {
          const { password: r } = t
          return e.handleSignIn({ username: n, password: r })
        },
        confirmSignIn ({ formValues: t }) {
          const { confirmation_code: n } = t
          return e.handleConfirmSignIn({ challengeResponse: n })
        },
        async handleForceChangePassword ({ formValues: t }) {
          let {
              password: n,
              phone_number: r,
              country_code: o,
              confirm_password: i,
              ...a
            } = t,
            s
          return (
            r &&
              ((s = `${o}${r}`.replace(/[^A-Z0-9+]/gi, '')),
              (a = { ...a, phone_number: s })),
            Rs({ challengeResponse: n, options: { userAttributes: a } })
          )
        },
        signInWithRedirect (t, { data: n }) {
          return Fs(n)
        },
        async validateFields (t) {
          return zr(t.formValues, t.touched, t.passwordSettings, [
            ft.validateFormPassword,
            ft.validateConfirmPassword
          ])
        }
      }
    }
  )
}
const pI = {
    onDone: [
      { actions: 'setCodeDeliveryDetails', target: '#signUpActor.resolved' }
    ],
    onError: { actions: ['setRemoteError', 'sendUpdate'] }
  },
  hI = {
    onDone: [
      {
        cond: 'hasCompletedSignIn',
        actions: 'setNextSignInStep',
        target: '#signUpActor.fetchUserAttributes'
      },
      {
        cond: 'shouldConfirmSignInWithNewPassword',
        actions: 'setNextSignInStep',
        target: '#signUpActor.resolved'
      },
      {
        cond: 'shouldResetPasswordFromSignIn',
        actions: 'setNextSignInStep',
        target: '#signUpActor.resetPassword'
      },
      {
        cond: 'shouldConfirmSignUpFromSignIn',
        actions: 'setNextSignInStep',
        target: '#signUpActor.resendSignUpCode'
      },
      {
        actions: [
          'setNextSignInStep',
          'setChallengeName',
          'setMissingAttributes',
          'setTotpSecretCode'
        ],
        target: '#signUpActor.resolved'
      }
    ],
    onError: { actions: 'setRemoteError', target: '#signUpActor.resolved' }
  },
  mI = {
    onDone: [
      {
        cond: 'shouldVerifyAttribute',
        actions: [
          'setShouldVerifyUserAttributeStep',
          'setUnverifiedUserAttributes'
        ],
        target: '#signUpActor.resolved'
      },
      {
        actions: 'setConfirmAttributeCompleteStep',
        target: '#signUpActor.resolved'
      }
    ],
    onError: {
      actions: 'setConfirmAttributeCompleteStep',
      target: '#signUpActor.resolved'
    }
  }
function gI ({ services: e }) {
  return Gt(
    {
      id: 'signUpActor',
      initial: 'init',
      predictableActionArguments: !0,
      states: {
        init: {
          always: [
            { cond: 'shouldConfirmSignUp', target: 'confirmSignUp' },
            { target: 'signUp' }
          ]
        },
        autoSignIn: { tags: 'pending', invoke: { src: 'autoSignIn', ...hI } },
        fetchUserAttributes: { invoke: { src: 'fetchUserAttributes', ...mI } },
        federatedSignIn: qc('signUp'),
        resetPassword: { invoke: { src: 'resetPassword', ...pI } },
        resendSignUpCode: {
          tags: 'pending',
          entry: 'sendUpdate',
          exit: 'sendUpdate',
          invoke: {
            src: 'resendSignUpCode',
            onDone: {
              actions: ['setCodeDeliveryDetails', 'sendUpdate'],
              target: '#signUpActor.confirmSignUp'
            },
            onError: [
              {
                cond: 'isUserAlreadyConfirmed',
                target: '#signUpActor.resolved'
              },
              { actions: ['setRemoteError', 'sendUpdate'] }
            ]
          }
        },
        signUp: {
          type: 'parallel',
          exit: 'clearTouched',
          on: { FEDERATED_SIGN_IN: { target: 'federatedSignIn' } },
          states: {
            validation: {
              initial: 'pending',
              states: {
                pending: {
                  invoke: {
                    src: 'validateSignUp',
                    onDone: {
                      actions: 'clearValidationError',
                      target: 'valid'
                    },
                    onError: { actions: 'setFieldErrors', target: 'invalid' }
                  }
                },
                valid: { entry: 'sendUpdate' },
                invalid: { entry: 'sendUpdate' }
              },
              on: {
                BLUR: { actions: 'handleBlur', target: '.pending' },
                CHANGE: { actions: 'handleInput', target: '.pending' }
              }
            },
            submission: {
              initial: 'idle',
              states: {
                idle: {
                  entry: ['sendUpdate'],
                  on: {
                    SUBMIT: { actions: 'handleSubmit', target: 'validate' }
                  }
                },
                validate: {
                  entry: 'sendUpdate',
                  invoke: {
                    src: 'validateSignUp',
                    onDone: {
                      target: 'handleSignUp',
                      actions: 'clearValidationError'
                    },
                    onError: { actions: 'setFieldErrors', target: 'idle' }
                  }
                },
                handleSignUp: {
                  tags: 'pending',
                  entry: ['setUsernameSignUp', 'clearError'],
                  exit: 'sendUpdate',
                  invoke: {
                    src: 'handleSignUp',
                    onDone: [
                      {
                        cond: 'hasCompletedSignUp',
                        actions: 'setNextSignUpStep',
                        target: '#signUpActor.resolved'
                      },
                      {
                        cond: 'shouldAutoSignIn',
                        actions: 'setNextSignUpStep',
                        target: '#signUpActor.autoSignIn'
                      },
                      {
                        actions: [
                          'setCodeDeliveryDetails',
                          'setNextSignUpStep'
                        ],
                        target: '#signUpActor.init'
                      }
                    ],
                    onError: {
                      actions: ['sendUpdate', 'setRemoteError'],
                      target: 'idle'
                    }
                  }
                }
              }
            }
          }
        },
        confirmSignUp: {
          initial: 'edit',
          entry: 'sendUpdate',
          states: {
            edit: {
              on: {
                SUBMIT: { actions: 'handleSubmit', target: 'submit' },
                CHANGE: { actions: 'handleInput' },
                BLUR: { actions: 'handleBlur' },
                RESEND: '#signUpActor.resendSignUpCode'
              }
            },
            submit: {
              tags: 'pending',
              entry: ['clearError', 'sendUpdate'],
              invoke: {
                src: 'confirmSignUp',
                onDone: [
                  {
                    cond: 'shouldAutoSignIn',
                    actions: ['setNextSignUpStep', 'clearFormValues'],
                    target: '#signUpActor.autoSignIn'
                  },
                  { actions: 'setNextSignUpStep', target: '#signUpActor.init' }
                ],
                onError: {
                  actions: ['setRemoteError', 'sendUpdate'],
                  target: 'edit'
                }
              }
            }
          }
        },
        resolved: {
          type: 'final',
          data: t => ({
            challengeName: t.challengeName,
            missingAttributes: t.missingAttributes,
            remoteError: t.remoteError,
            step: t.step,
            totpSecretCode: t.totpSecretCode,
            username: t.username,
            unverifiedUserAttributes: t.unverifiedUserAttributes
          })
        }
      }
    },
    {
      actions: { ...Pn, sendUpdate: Or() },
      guards: Wr,
      services: {
        autoSignIn () {
          return Ho()
        },
        async fetchUserAttributes () {
          return ps()
        },
        confirmSignUp ({ formValues: t, username: n }) {
          const { confirmation_code: r } = t,
            o = { username: n, confirmationCode: r }
          return e.handleConfirmSignUp(o)
        },
        resendSignUpCode ({ username: t }) {
          return Ts({ username: t })
        },
        signInWithRedirect (t, { data: n }) {
          return Fs(n)
        },
        handleSignUp (t) {
          const { formValues: n, loginMechanisms: r, username: o } = t,
            i = r[0],
            a = c0(o, n, i)
          return e.handleSignUp(a)
        },
        async validateSignUp (t) {
          return zr(t.formValues, t.touched, t.passwordSettings, [
            e.validateFormPassword,
            e.validateConfirmPassword,
            e.validatePreferredUsername,
            e.validateCustomSignUp
          ])
        }
      }
    }
  )
}
const yI = () =>
  Gt(
    {
      initial: 'pending',
      id: 'signOutActor',
      predictableActionArguments: !0,
      states: {
        pending: {
          tags: 'pending',
          invoke: { src: 'signOut', onDone: 'resolved', onError: 'rejected' }
        },
        resolved: { type: 'final' },
        rejected: { type: 'final' }
      }
    },
    { services: { signOut: () => Kl() } }
  )
function vI () {
  return Gt(
    {
      id: 'verifyUserAttributesActor',
      initial: 'selectUserAttributes',
      predictableActionArguments: !0,
      states: {
        selectUserAttributes: {
          initial: 'edit',
          exit: ['clearError', 'clearTouched', 'sendUpdate'],
          states: {
            edit: {
              entry: 'sendUpdate',
              on: {
                SUBMIT: { actions: 'handleSubmit', target: 'submit' },
                SKIP: { target: '#verifyUserAttributesActor.resolved' },
                CHANGE: { actions: 'handleInput' }
              }
            },
            submit: {
              tags: 'pending',
              entry: ['clearError', 'sendUpdate'],
              invoke: {
                src: 'sendUserAttributeVerificationCode',
                onDone: {
                  actions: [
                    'setSelectedUserAttribute',
                    'setCodeDeliveryDetails'
                  ],
                  target:
                    '#verifyUserAttributesActor.confirmVerifyUserAttribute'
                },
                onError: { actions: 'setRemoteError', target: 'edit' }
              }
            }
          }
        },
        confirmVerifyUserAttribute: {
          initial: 'edit',
          exit: ['clearError', 'clearFormValues', 'clearTouched'],
          states: {
            edit: {
              entry: 'sendUpdate',
              on: {
                SUBMIT: { actions: 'handleSubmit', target: 'submit' },
                SKIP: '#verifyUserAttributesActor.resolved',
                CHANGE: { actions: 'handleInput' }
              }
            },
            submit: {
              tags: 'pending',
              entry: ['clearError', 'sendUpdate'],
              invoke: {
                src: 'confirmVerifyUserAttribute',
                onDone: {
                  actions: [
                    'setConfirmAttributeCompleteStep',
                    'clearSelectedUserAttribute'
                  ],
                  target: '#verifyUserAttributesActor.resolved'
                },
                onError: { actions: 'setRemoteError', target: 'edit' }
              }
            }
          }
        },
        resolved: { type: 'final', data: ({ step: e }) => ({ step: e }) }
      }
    },
    {
      actions: { ...Pn, sendUpdate: Or() },
      services: {
        sendUserAttributeVerificationCode ({
          formValues: { unverifiedAttr: e }
        }) {
          return ef({ userAttributeKey: e })
        },
        async confirmVerifyUserAttribute ({
          formValues: { confirmation_code: e },
          selectedUserAttribute: t
        }) {
          return Dd({ confirmationCode: e, userAttributeKey: t })
        },
        async validateFields (e) {
          return zr(e.formValues, e.touched, e.passwordSettings, [
            ft.validateFormPassword,
            ft.validateConfirmPassword
          ])
        }
      }
    }
  )
}
const qn = (e, t) => {
    var n, r, o, i, a, s
    return {
      ...e.actorDoneData,
      step:
        ((n = e == null ? void 0 : e.actorDoneData) == null
          ? void 0
          : n.step) ?? t,
      formValues: {},
      touched: {},
      validationError: {},
      formFields: (r = e.config) == null ? void 0 : r.formFields,
      loginMechanisms: (o = e.config) == null ? void 0 : o.loginMechanisms,
      passwordSettings: (i = e.config) == null ? void 0 : i.passwordSettings,
      signUpAttributes: (a = e.config) == null ? void 0 : a.signUpAttributes,
      socialProviders: (s = e.config) == null ? void 0 : s.socialProviders
    }
  },
  { choose: _I, stop: SI } = lc,
  rn = e => SI(e),
  EI = {
    on: {
      INIT: { actions: 'configure', target: 'getConfig' },
      SIGN_OUT: '#authenticator.signOut'
    }
  },
  wI = { always: { actions: 'configure', target: 'getConfig' } }
function bI (e) {
  const { useNextWaitConfig: t, ...n } = {}
  return Gt(
    {
      id: 'authenticator',
      initial: 'idle',
      context: {
        user: void 0,
        config: {},
        services: ft,
        actorRef: void 0,
        hasSetup: !1
      },
      predictableActionArguments: !0,
      states: {
        idle: {
          invoke: {
            src: 'handleGetCurrentUser',
            onDone: { actions: 'setUser', target: 'setup' },
            onError: { target: 'setup' }
          }
        },
        setup: {
          initial: 'initConfig',
          states: {
            initConfig: t ? wI : EI,
            getConfig: {
              invoke: {
                src: 'getAmplifyConfig',
                onDone: [
                  {
                    actions: ['applyAmplifyConfig', 'setHasSetup'],
                    cond: 'hasUser',
                    target: '#authenticator.authenticated'
                  },
                  {
                    actions: ['applyAmplifyConfig', 'setHasSetup'],
                    target: 'goToInitialState'
                  }
                ]
              }
            },
            goToInitialState: {
              always: [
                {
                  cond: 'isInitialStateSignUp',
                  target: '#authenticator.signUpActor'
                },
                {
                  cond: 'isInitialStateResetPassword',
                  target: '#authenticator.forgotPasswordActor'
                },
                { target: '#authenticator.signInActor' }
              ]
            }
          }
        },
        getCurrentUser: {
          invoke: {
            src: 'handleGetCurrentUser',
            onDone: {
              actions: 'setUser',
              target: '#authenticator.authenticated'
            },
            onError: { target: '#authenticator.setup' }
          }
        },
        signInActor: {
          initial: 'spawnActor',
          states: {
            spawnActor: {
              always: { actions: 'spawnSignInActor', target: 'runActor' }
            },
            runActor: { entry: 'clearActorDoneData', exit: rn('signInActor') }
          },
          on: {
            FORGOT_PASSWORD: 'forgotPasswordActor',
            SIGN_IN: 'signInActor',
            SIGN_UP: 'signUpActor',
            'done.invoke.signInActor': [
              {
                cond: 'hasCompletedAttributeConfirmation',
                target: '#authenticator.getCurrentUser'
              },
              {
                cond: 'isShouldConfirmUserAttributeStep',
                actions: 'setActorDoneData',
                target: '#authenticator.verifyUserAttributesActor'
              },
              {
                cond: 'isResetPasswordStep',
                actions: 'setActorDoneData',
                target: '#authenticator.forgotPasswordActor'
              },
              {
                cond: 'isConfirmSignUpStep',
                actions: 'setActorDoneData',
                target: '#authenticator.signUpActor'
              }
            ]
          }
        },
        signUpActor: {
          initial: 'spawnActor',
          states: {
            spawnActor: {
              always: { actions: 'spawnSignUpActor', target: 'runActor' }
            },
            runActor: { entry: 'clearActorDoneData', exit: rn('signUpActor') }
          },
          on: {
            SIGN_IN: 'signInActor',
            'done.invoke.signUpActor': [
              {
                cond: 'hasCompletedAttributeConfirmation',
                target: '#authenticator.getCurrentUser'
              },
              {
                cond: 'isShouldConfirmUserAttributeStep',
                actions: 'setActorDoneData',
                target: '#authenticator.verifyUserAttributesActor'
              },
              {
                cond: 'isConfirmUserAttributeStep',
                target: '#authenticator.verifyUserAttributesActor'
              },
              {
                actions: 'setActorDoneData',
                target: '#authenticator.signInActor'
              }
            ]
          }
        },
        forgotPasswordActor: {
          initial: 'spawnActor',
          states: {
            spawnActor: {
              always: {
                actions: 'spawnForgotPasswordActor',
                target: 'runActor'
              }
            },
            runActor: {
              entry: 'clearActorDoneData',
              exit: rn('forgotPasswordActor')
            }
          },
          on: {
            SIGN_IN: 'signInActor',
            'done.invoke.forgotPasswordActor': [
              { target: '#authenticator.signInActor' }
            ]
          }
        },
        verifyUserAttributesActor: {
          initial: 'spawnActor',
          states: {
            spawnActor: {
              always: {
                actions: 'spawnVerifyUserAttributesActor',
                target: 'runActor'
              }
            },
            runActor: {
              entry: 'clearActorDoneData',
              exit: rn('verifyUserAttributesActor')
            }
          },
          on: {
            'done.invoke.verifyUserAttributesActor': [
              {
                actions: 'setActorDoneData',
                target: '#authenticator.getCurrentUser'
              }
            ]
          }
        },
        authenticated: {
          initial: 'idle',
          states: {
            idle: { on: { TOKEN_REFRESH: 'refreshUser' } },
            refreshUser: {
              invoke: {
                src: '#authenticator.getCurrentUser',
                onDone: { actions: 'setUser', target: 'idle' },
                onError: { target: '#authenticator.signOut' }
              }
            }
          },
          on: { SIGN_OUT: 'signOut' }
        },
        signOut: {
          initial: 'spawnActor',
          states: {
            spawnActor: {
              always: { actions: 'spawnSignOutActor', target: 'runActor' }
            },
            runActor: { entry: 'clearActorDoneData', exit: rn('signOutActor') }
          },
          on: {
            'done.invoke.signOutActor': {
              actions: 'clearUser',
              target: 'setup.getConfig'
            }
          }
        }
      },
      on: {
        SIGN_IN_WITH_REDIRECT: { target: '#authenticator.getCurrentUser' },
        CHANGE: { actions: 'forwardToActor' },
        BLUR: { actions: 'forwardToActor' },
        SUBMIT: { actions: 'forwardToActor' },
        FEDERATED_SIGN_IN: { actions: 'forwardToActor' },
        RESEND: { actions: 'forwardToActor' },
        SIGN_IN: { actions: 'forwardToActor' },
        SKIP: { actions: 'forwardToActor' }
      }
    },
    {
      actions: {
        ...Pn,
        forwardToActor: _I([
          { cond: 'hasActor', actions: Zp(({ actorRef: r }) => r) }
        ]),
        setActorDoneData: Ge({
          actorDoneData: (r, o) => ({
            challengeName: o.data.challengeName,
            codeDeliveryDetails: o.data.codeDeliveryDetails,
            missingAttributes: o.data.missingAttributes,
            remoteError: o.data.remoteError,
            username: o.data.username,
            step: o.data.step,
            totpSecretCode: o.data.totpSecretCode,
            unverifiedUserAttributes: o.data.unverifiedUserAttributes
          })
        }),
        applyAmplifyConfig: Ge({
          config (r, { data: o }) {
            const {
              loginMechanisms: i = o.loginMechanisms ?? [],
              signUpAttributes: a = o.signUpAttributes ?? [],
              socialProviders: s = o.socialProviders ?? [],
              initialState: c,
              formFields: l,
              passwordSettings: u = o.passwordFormat ?? {}
            } = r.config
            return (
              i.length === 0 && i.push('username'),
              {
                formFields: II(l) ?? {},
                initialState: c,
                loginMechanisms: i,
                passwordSettings: u,
                signUpAttributes: a,
                socialProviders: s
              }
            )
          }
        }),
        spawnSignInActor: Ge({
          actorRef: (r, o) => {
            const { services: i } = r,
              a = fI({ services: i }).withContext(qn(r, 'SIGN_IN'))
            return tn(a, { name: 'signInActor' })
          }
        }),
        spawnSignUpActor: Ge({
          actorRef: (r, o) => {
            const { services: i } = r,
              a = gI({ services: i }).withContext(qn(r, 'SIGN_UP'))
            return tn(a, { name: 'signUpActor' })
          }
        }),
        spawnForgotPasswordActor: Ge({
          actorRef: (r, o) => {
            const { services: i } = r,
              a = uI({ services: i }).withContext(qn(r, 'FORGOT_PASSWORD'))
            return tn(a, { name: 'forgotPasswordActor' })
          }
        }),
        spawnVerifyUserAttributesActor: Ge({
          actorRef: r => {
            const o = vI().withContext(qn(r))
            return tn(o, { name: 'verifyUserAttributesActor' })
          }
        }),
        spawnSignOutActor: Ge({
          actorRef: r => {
            const o = yI().withContext({ user: r == null ? void 0 : r.user })
            return tn(o, { name: 'signOutActor' })
          }
        }),
        configure: Ge((r, o) => {
          const { services: i, ...a } = mf(n) ? o.data ?? {} : n
          return { services: { ...ft, ...i }, config: a }
        }),
        setHasSetup: Ge({ hasSetup: !0 })
      },
      guards: {
        ...Wr,
        hasActor: ({ actorRef: r }) => !!r,
        isInitialStateSignUp: ({ config: r }) => r.initialState === 'signUp',
        isInitialStateResetPassword: ({ config: r }) =>
          r.initialState === 'forgotPassword',
        shouldSetup: ({ hasSetup: r }) => !r,
        hasUser: ({ user: r }) => !!r
      },
      services: {
        getAmplifyConfig: ({ services: r }) => r.getAmplifyConfig(),
        handleGetCurrentUser: ({ services: r }) => r.getCurrentUser()
      }
    }
  )
}
function II (e) {
  return (
    e &&
      Object.keys(e).forEach(t => {
        Object.keys(e[t]).forEach(n => {
          let r = e[t][n]
          r.required = r.isRequired
        })
      }),
    e
  )
}
const Se = {
    Accordion: 'amplify-accordion',
    AccordionItem: 'amplify-accordion__item',
    AccordionItemTrigger: 'amplify-accordion__item__trigger',
    AccordionItemContent: 'amplify-accordion__item__content',
    AccordionItemIcon: 'amplify-accordion__item__icon',
    Alert: 'amplify-alert',
    AlertIcon: 'amplify-alert__icon',
    AlertHeading: 'amplify-alert__heading',
    AlertBody: 'amplify-alert__body',
    AlertDismiss: 'amplify-alert__dismiss',
    Autocomplete: 'amplify-autocomplete',
    AutocompleteMenu: 'amplify-autocomplete__menu',
    AutocompleteMenuEmpty: 'amplify-autocomplete__menu--empty',
    AutocompleteMenuFooter: 'amplify-autocomplete__menu__footer',
    AutocompleteMenuHeader: 'amplify-autocomplete__menu__header',
    AutocompleteMenuLoading: 'amplify-autocomplete__menu--loading',
    AutocompleteMenuOption: 'amplify-autocomplete__menu__option',
    AutocompleteMenuOptions: 'amplify-autocomplete__menu__options',
    Badge: 'amplify-badge',
    Breadcrumbs: 'amplify-breadcrumbs',
    BreadcrumbsList: 'amplify-breadcrumbs__list',
    BreadcrumbsItem: 'amplify-breadcrumbs__item',
    BreadcrumbsSeparator: 'amplify-breadcrumbs__separator',
    BreadcrumbsLink: 'amplify-breadcrumbs__link',
    Button: 'amplify-button',
    ButtonGroup: 'amplify-buttongroup',
    ButtonLoaderWrapper: 'amplify-button__loader-wrapper',
    Card: 'amplify-card',
    Checkbox: 'amplify-checkbox',
    CheckboxButton: 'amplify-checkbox__button',
    CheckboxIcon: 'amplify-checkbox__icon',
    CheckboxInput: 'amplify-checkbox__input',
    CheckboxLabel: 'amplify-checkbox__label',
    CheckboxField: 'amplify-checkboxfield',
    Collection: 'amplify-collection',
    CollectionItems: 'amplify-collection-items',
    CollectionSearch: 'amplify-collection-search',
    CollectionPagination: 'amplify-collection-pagination',
    CountryCodeSelect: 'amplify-countrycodeselect',
    DialCodeSelect: 'amplify-dialcodeselect',
    Divider: 'amplify-divider',
    DividerLabel: 'amplify-divider--label',
    DropZone: 'amplify-dropzone',
    Field: 'amplify-field',
    FieldDescription: 'amplify-field__description',
    FieldErrorMessage: 'amplify-field__error-message',
    FieldGroup: 'amplify-field-group',
    FieldGroupControl: 'amplify-field-group__control',
    FieldGroupOuterEnd: 'amplify-field-group__outer-end',
    FieldGroupOuterStart: 'amplify-field-group__outer-start',
    FieldGroupInnerEnd: 'amplify-field-group__inner-end',
    FieldGroupInnerStart: 'amplify-field-group__inner-start',
    FieldGroupIcon: 'amplify-field-group__icon',
    FieldGroupIconButton: 'amplify-field-group__icon-button',
    FieldGroupHasInnerEnd: 'amplify-field-group--has-inner-end',
    FieldGroupHasInnerStart: 'amplify-field-group--has-inner-start',
    FieldShowPassword: 'amplify-field__show-password',
    FieldGroupFieldWrapper: 'amplify-field-group__field-wrapper',
    Fieldset: 'amplify-fieldset',
    FieldsetLegend: 'amplify-fieldset__legend',
    Flex: 'amplify-flex',
    Grid: 'amplify-grid',
    Heading: 'amplify-heading',
    HighlightMatch: 'amplify-highlightmatch',
    HighlightMatchHighlighted: 'amplify-highlightmatch__highlighted',
    Icon: 'amplify-icon',
    Image: 'amplify-image',
    Input: 'amplify-input',
    Label: 'amplify-label',
    Link: 'amplify-link',
    Loader: 'amplify-loader',
    LoaderLabel: 'amplify-loader__label',
    MenuContent: 'amplify-menu__content',
    MenuItem: 'amplify-menu__content__item',
    MenuTrigger: 'amplify-menu__trigger',
    MenuWrapper: 'amplify-menu__wrapper',
    Message: 'amplify-message',
    MessageIcon: 'amplify-message__icon',
    MessageHeading: 'amplify-message__heading',
    MessageBody: 'amplify-message__body',
    MessageContent: 'amplify-message__content',
    MessageDismiss: 'amplify-message__dismiss',
    Pagination: 'amplify-pagination',
    PaginationItem: 'amplify-pagination__item',
    PasswordField: 'amplify-passwordfield',
    PhoneNumberField: 'amplify-phonenumberfield',
    Placeholder: 'amplify-placeholder',
    Radio: 'amplify-radio',
    RadioButton: 'amplify-radio__button',
    RadioInput: 'amplify-radio__input',
    RadioLabel: 'amplify-radio__label',
    RadioGroupField: 'amplify-radiogroupfield',
    RadioGroup: 'amplify-radiogroup',
    Rating: 'amplify-rating',
    RatingItem: 'amplify-rating__item',
    RatingIcon: 'amplify-rating__icon',
    RatingLabel: 'amplify-rating__label',
    ScrollView: 'amplify-scrollview',
    SearchField: 'amplify-searchfield',
    SearchFieldClear: 'amplify-searchfield__clear',
    SearchFieldSearch: 'amplify-searchfield__search',
    Select: 'amplify-select',
    SelectField: 'amplify-selectfield',
    SelectWrapper: 'amplify-select__wrapper',
    SelectIcon: 'amplify-select__icon',
    SliderField: 'amplify-sliderfield',
    SliderFieldGroup: 'amplify-sliderfield__group',
    SliderFieldLabel: 'amplify-sliderfield__label',
    SliderFieldRange: 'amplify-sliderfield__range',
    SliderFieldRoot: 'amplify-sliderfield__root',
    SliderFieldThumb: 'amplify-sliderfield__thumb',
    SliderFieldTrack: 'amplify-sliderfield__track',
    StepperField: 'amplify-stepperfield',
    StepperFieldButtonDecrease: 'amplify-stepperfield__button--decrease',
    StepperFieldButtonIncrease: 'amplify-stepperfield__button--increase',
    StepperFieldInput: 'amplify-stepperfield__input',
    StorageImage: 'amplify-storageimage',
    StorageManager: 'amplify-storagemanager',
    StorageManagerDropZone: 'amplify-storagemanager__dropzone',
    StorageManagerDropZoneIcon: 'amplify-storagemanager__dropzone__icon',
    StorageManagerDropZoneText: 'amplify-storagemanager__dropzone__text',
    StorageManagerFilePicker: 'amplify-storagemanager__file__picker',
    StorageManagerFile: 'amplify-storagemanager__file',
    StorageManagerFileWrapper: 'amplify-storagemanager__file__wrapper',
    StorageManagerFileList: 'amplify-storagemanager__file__list',
    StorageManagerFileName: 'amplify-storagemanager__file__name',
    StorageManagerFileSize: 'amplify-storagemanager__file__size',
    StorageManagerFileInfo: 'amplify-storagemanager__file__info',
    StorageManagerFileImage: 'amplify-storagemanager__file__image',
    StorageManagerFileMain: 'amplify-storagemanager__file__main',
    StorageManagerFileStatus: 'amplify-storagemanager__file__status',
    StorageManagerLoader: 'amplify-storagemanager__loader',
    StorageManagerPreviewer: 'amplify-storagemanager__previewer',
    StorageManagerPreviewerText: 'amplify-storagemanager__previewer__text',
    StorageManagerPreviewerActions:
      'amplify-storagemanager__previewer__actions',
    StorageManagerPreviewerFooter: 'amplify-storagemanager__previewer__footer',
    SwitchField: 'amplify-switchfield',
    SwitchLabel: 'amplify-switch__label',
    SwitchThumb: 'amplify-switch__thumb',
    SwitchTrack: 'amplify-switch__track',
    SwitchWrapper: 'amplify-switch__wrapper',
    Table: 'amplify-table',
    TableCaption: 'amplify-table__caption',
    TableBody: 'amplify-table__body',
    TableTd: 'amplify-table__td',
    TableTh: 'amplify-table__th',
    TableFoot: 'amplify-table__foot',
    TableHead: 'amplify-table__head',
    TableRow: 'amplify-table__row',
    Tabs: 'amplify-tabs',
    TabsList: 'amplify-tabs__list',
    TabsItem: 'amplify-tabs__item',
    TabsPanel: 'amplify-tabs__panel',
    Text: 'amplify-text',
    Textarea: 'amplify-textarea',
    TextAreaField: 'amplify-textareafield',
    TextField: 'amplify-textfield',
    ToggleButton: 'amplify-togglebutton',
    ToggleButtonGroup: 'amplify-togglebuttongroup',
    VisuallyHidden: 'amplify-visually-hidden'
  },
  CI = ({ componentName: e, packageName: t, version: n }) => {
    const r = [`ui-${t}`, n]
    switch (e) {
      case 'Authenticator': {
        Ct({ ...cf, additionalDetails: [[e], r] })
        break
      }
      case 'ChangePassword':
      case 'DeleteUser': {
        Ct({ ...sf, additionalDetails: [['AccountSettings'], r] })
        break
      }
      case 'InAppMessaging': {
        Ct({ ...lf, additionalDetails: [[e], r] })
        break
      }
      case 'LocationSearch': {
        Ct({ ...uf, additionalDetails: [[e], r] })
        break
      }
      case 'MapView': {
        Ct({ ...df, additionalDetails: [[e], r] })
        break
      }
      case 'StorageManager': {
        Ct({ ...ff, additionalDetails: [[e], r] })
        break
      }
    }
    return yf
  },
  AI = {
    key: 0,
    class:
      'amplify-flex amplify-alert amplify-alert--error amplify-authenticator__base',
    'data-variation': 'error',
    role: 'alert'
  },
  xI = { class: 'amplify-flex amplify-authenticator__icon-wrapper' },
  NI = j(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'amplify-icon',
      'aria-hidden': 'true',
      viewBox: '0 0 24 24',
      fill: 'currentColor'
    },
    [
      j('path', {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
      })
    ],
    -1
  ),
  TI = j(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'amplify-icon',
      'aria-hidden': 'true',
      viewBox: '0 0 24 24',
      fill: 'currentColor'
    },
    [
      j('path', {
        d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
      })
    ],
    -1
  ),
  qe = ee({
    __name: 'base-alert',
    setup (e) {
      const t = ye(!0),
        n = U('Dismiss alert')
      function r () {
        t.value = !1
      }
      return (o, i) => {
        const a = Fe
        return t.value
          ? (P(),
            ie('div', AI, [
              j('div', xI, [NI, j('div', null, [x(o.$slots, 'default')])]),
              b(
                a,
                {
                  class: 'amplify-field-group__control amplify-alert__dismiss',
                  'aria-label': h(n),
                  fullwidth: !1,
                  variation: 'link',
                  type: 'button',
                  onClick: r
                },
                { default: _(() => [TI]), _: 1 },
                8,
                ['aria-label']
              )
            ]))
          : G('', !0)
      }
    }
  }),
  We = ee({
    __name: 'base-field-set',
    setup (e) {
      const t = Oo()
      return (n, r) =>
        x(
          n.$slots,
          'fieldSetI',
          Me(n.$attrs, { slotData: h(t).default && h(t).default() }),
          () => [
            j(
              'fieldset',
              Me(n.$attrs, { 'data-amplify-fieldset': '' }),
              [x(n.$slots, 'default')],
              16
            )
          ]
        )
    }
  })
function RI (e) {
  return Bl() ? (fs(e), !0) : !1
}
function Wc (e) {
  let t = 0,
    n,
    r
  const o = () => {
    ;(t -= 1), r && t <= 0 && (r.stop(), (n = void 0), (r = void 0))
  }
  return (...i) => (
    (t += 1), n || ((r = Ol(!0)), (n = r.run(() => e(...i)))), RI(o), n
  )
}
function PI (e) {
  return 'state' in e
}
var Qa = function () {}
function UI (e) {
  return 'getSnapshot' in e ? e.getSnapshot() : PI(e) ? e.state : void 0
}
function MI (e, t) {
  t === void 0 && (t = UI)
  var n = Ll(e) ? e : xi(e),
    r = xi(t(n.value)),
    o = function (i) {
      n.value.send(i)
    }
  return (
    jl(
      n,
      function (i, a, s) {
        r.value = t(i)
        var c = i.subscribe({
          next: function (l) {
            return (r.value = l)
          },
          error: Qa,
          complete: Qa
        }).unsubscribe
        s(function () {
          return c()
        })
      },
      { immediate: !0 }
    ),
    { state: r, send: o }
  )
}
const FI = e => {
    var t, n, r
    return {
      ...((r =
        (n = (t = zo(e)) == null ? void 0 : t.formFields) == null
          ? void 0
          : n.setupTotp) == null
        ? void 0
        : r.QR)
    }
  },
  vi = Wc(() => {
    const e = bI(),
      t = mc(e).start(),
      n = ye('configuring'),
      { state: r, send: o } = MI(t),
      i = () => {
        n.value = 'authenticated'
      },
      a = () => {
        n.value = 'unauthenticated'
      },
      s = vf(t, (c, l) => ks(c, l, { onSignIn: i, onSignOut: a }))
    return (
      wn()
        .then(() => {
          n.value = 'authenticated'
        })
        .catch(() => {
          n.value = 'unauthenticated'
        }),
      fs(() => {
        s()
      }),
      { authStatus: n, service: t, send: o, state: r }
    )
  }),
  Ae = Wc(() => {
    const { authStatus: e, state: t, send: n } = vi(),
      r = ds({})
    return (
      Dl(() => {
        const o = If({ send: n, state: t.value })
        for (const a of Object.keys(o)) r[a] = o[a]
        const i = o.route === 'setupTotp' ? FI(t.value) : null
        ;(r.QRFields = i), (r.authStatus = e.value), (r.send = n), (r.state = t)
      }),
      r
    )
  })
let OI = (e = 21) => {
  let t = '',
    n = crypto.getRandomValues(new Uint8Array(e))
  for (; e--; ) {
    let r = n[e] & 63
    r < 36
      ? (t += r.toString(36))
      : r < 62
      ? (t += (r - 26).toString(36).toUpperCase())
      : r < 63
      ? (t += '_')
      : (t += '-')
  }
  return t
}
const _i = ee({
    __name: 'base-input',
    emits: ['update:modelValue'],
    setup (e, { emit: t }) {
      const n = r => {
        t('update:modelValue', r.target.value)
      }
      return (r, o) => (
        P(),
        ie(
          'input',
          { onChange: o[0] || (o[0] = i => n(i)), 'data-amplify-input': '' },
          null,
          32
        )
      )
    }
  }),
  DI = {},
  kI = { 'data-amplify-label': '' }
function BI (e, t) {
  return P(), ie('label', kI, [x(e.$slots, 'default')])
}
const Si = xr(DI, [['render', BI]]),
  LI = ['aria-label', 'aria-checked'],
  jI = j(
    'path',
    {
      d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
    },
    null,
    -1
  ),
  $I = [jI],
  VI = j(
    'path',
    { d: 'M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z', fill: 'none' },
    null,
    -1
  ),
  HI = j(
    'path',
    {
      d: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z'
    },
    null,
    -1
  ),
  qI = [VI, HI],
  WI = { inheritAttrs: !1 },
  zI = ee({
    ...WI,
    __name: 'password-control',
    props: {
      name: null,
      label: null,
      autocomplete: { default: 'new-password' },
      hasError: { type: Boolean, default: !1 },
      labelHidden: { type: Boolean },
      placeholder: null,
      required: { type: Boolean, default: !0 },
      describedBy: null
    },
    setup (e) {
      const t = e,
        n = U('Show password'),
        r = U('Hide password'),
        o = ye('password'),
        i = ye(n),
        a = Math.floor(Math.random() * 999999),
        {
          name: s,
          label: c,
          autocomplete: l,
          hasError: u,
          labelHidden: f,
          placeholder: d,
          required: p
        } = ae(t),
        m = ye('')
      function y () {
        ;(i.value = i.value === n ? r : n),
          (o.value = o.value === 'password' ? 'text' : 'password')
      }
      const E = U((d == null ? void 0 : d.value) ?? c.value),
        g = U(c.value)
      return (S, v) => {
        const w = Si,
          I = _i,
          A = Ce
        return (
          P(),
          q(
            A,
            {
              class: Ke([
                h(Se).Flex,
                h(Se).Field,
                h(Se).TextField,
                h(Se).PasswordField
              ])
            },
            {
              default: _(() => [
                b(
                  w,
                  {
                    class: Ke([
                      'amplify-label',
                      { 'amplify-visually-hidden': h(f) }
                    ]),
                    for: 'amplify-field-' + h(a)
                  },
                  { default: _(() => [B(D(h(g)), 1)]), _: 1 },
                  8,
                  ['class', 'for']
                ),
                b(
                  A,
                  { class: Ke([h(Se).Flex, h(Se).FieldGroup]) },
                  {
                    default: _(() => [
                      b(
                        A,
                        { class: Ke(h(Se).FieldGroupFieldWrapper) },
                        {
                          default: _(() => [
                            b(
                              I,
                              Me(S.$attrs, {
                                modelValue: m.value,
                                'onUpdate:modelValue':
                                  v[0] || (v[0] = N => (m.value = N)),
                                class: [h(Se).Input, h(Se).FieldGroupControl],
                                id: 'amplify-field-' + h(a),
                                'data-amplify-password': 'true',
                                name: h(s),
                                autocomplete: h(l),
                                required: h(p) ?? !0,
                                placeholder: h(E),
                                type: o.value,
                                'aria-invalid': h(u),
                                'aria-describedBy': e.describedBy,
                                autocapitalize: 'off'
                              }),
                              null,
                              16,
                              [
                                'modelValue',
                                'class',
                                'id',
                                'name',
                                'autocomplete',
                                'required',
                                'placeholder',
                                'type',
                                'aria-invalid',
                                'aria-describedBy'
                              ]
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['class']
                      ),
                      b(
                        A,
                        { class: Ke(h(Se).FieldGroupOuterEnd) },
                        {
                          default: _(() => [
                            j(
                              'button',
                              {
                                'aria-label': i.value,
                                'aria-checked': o.value !== 'password',
                                class: Ke([
                                  h(Se).Button,
                                  h(Se).FieldGroupControl,
                                  h(Se).FieldShowPassword
                                ]),
                                'data-fullwidth': 'false',
                                type: 'button',
                                role: 'switch',
                                onClick: y
                              },
                              [
                                o.value === 'password'
                                  ? (P(),
                                    ie(
                                      'svg',
                                      {
                                        key: 0,
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        fill: 'currentColor',
                                        viewBox: '0 0 24 24',
                                        class: Ke(h(Se).Icon)
                                      },
                                      $I,
                                      2
                                    ))
                                  : (P(),
                                    ie(
                                      'svg',
                                      {
                                        key: 1,
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        fill: 'currentColor',
                                        viewBox: '0 0 24 24',
                                        class: Ke(h(Se).Icon)
                                      },
                                      qI,
                                      2
                                    ))
                              ],
                              10,
                              LI
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['class']
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['class']
                )
              ]),
              _: 1
            },
            8,
            ['class']
          )
        )
      }
    }
  }),
  GI = ['value', 'selected'],
  KI = ee({
    __name: 'base-select',
    props: { selectValue: { default: '' }, options: null },
    emits: ['update:selectValue'],
    setup (e, { emit: t }) {
      const n = e,
        { options: r, selectValue: o } = ae(n),
        i = a => {
          t('update:selectValue', a.target.value)
        }
      return (a, s) => (
        P(),
        ie(
          'select',
          { onChange: s[0] || (s[0] = c => i(c)) },
          [
            (P(!0),
            ie(
              vt,
              null,
              Er(
                h(r),
                (c, l) => (
                  P(),
                  ie(
                    'option',
                    { key: l, value: c, selected: c == h(o) ? !0 : void 0 },
                    D(c),
                    9,
                    GI
                  )
                )
              ),
              128
            ))
          ],
          32
        )
      )
    }
  }),
  YI = j(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'currentColor',
      viewBox: '0 0 24 24',
      class: 'amplify-icon'
    },
    [j('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })],
    -1
  ),
  JI = ee({
    __name: 'alias-control',
    props: {
      label: { default: 'Username' },
      name: { default: 'username' },
      placeholder: { default: '' },
      autocomplete: { default: '' },
      labelHidden: { type: Boolean },
      required: { type: Boolean, default: !0 },
      dialCode: null,
      dialCodeList: null,
      type: { default: 'text' },
      hasError: { type: Boolean },
      describedBy: null
    },
    setup (e) {
      const t = e,
        {
          label: n,
          name: r,
          placeholder: o,
          autocomplete: i,
          labelHidden: a,
          required: s,
          dialCode: c,
          dialCodeList: l
        } = ae(t),
        u = Math.floor(Math.random() * 999999),
        f = Math.floor(Math.random() * 999999)
      return (d, p) => {
        const m = Si,
          y = KI,
          E = Ce,
          g = _i
        return (
          P(),
          q(
            E,
            {
              class:
                'amplify-flex amplify-field amplify-textfield amplify-phonenumberfield'
            },
            {
              default: _(() => [
                b(
                  m,
                  Me(
                    {
                      for: 'amplify-field-' + h(u),
                      class: [
                        'amplify-label',
                        { 'amplify-visually-hidden': h(a) }
                      ]
                    },
                    d.$attrs
                  ),
                  { default: _(() => [B(D(h(n)), 1)]), _: 1 },
                  16,
                  ['for', 'class']
                ),
                b(
                  E,
                  { class: 'amplify-flex amplify-field-group' },
                  {
                    default: _(() => [
                      b(
                        E,
                        { class: 'amplify-field-group__outer-start' },
                        {
                          default: _(() => [
                            e.type === 'tel'
                              ? (P(),
                                q(
                                  E,
                                  {
                                    key: 0,
                                    class:
                                      'amplify-flex amplify-field amplify-selectfield amplify-countrycodeselect amplify-dialcodeselect amplify-authenticator__column'
                                  },
                                  {
                                    default: _(() => [
                                      b(
                                        m,
                                        Me(
                                          {
                                            for: 'amplify-field-' + h(f),
                                            class:
                                              'amplify-label amplify-visually-hidden'
                                          },
                                          d.$attrs
                                        ),
                                        {
                                          default: _(() => [
                                            B(D('Country Code'))
                                          ]),
                                          _: 1
                                        },
                                        16,
                                        ['for']
                                      ),
                                      b(
                                        E,
                                        { class: 'amplify-select__wrapper' },
                                        {
                                          default: _(() => [
                                            b(
                                              y,
                                              {
                                                class:
                                                  'amplify-select amplify-field-group__control',
                                                id: 'amplify-field-' + h(f),
                                                autocomplete:
                                                  'tel-country-code',
                                                'aria-label': 'country code',
                                                name: 'country_code',
                                                options: h(l),
                                                'select-value': h(c)
                                              },
                                              null,
                                              8,
                                              ['id', 'options', 'select-value']
                                            ),
                                            b(
                                              E,
                                              {
                                                class:
                                                  'amplify-flex amplify-select__icon'
                                              },
                                              { default: _(() => [YI]), _: 1 }
                                            )
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ))
                              : G('', !0)
                          ]),
                          _: 1
                        }
                      ),
                      b(
                        E,
                        { class: 'amplify-field-group__field-wrapper' },
                        {
                          default: _(() => [
                            b(
                              g,
                              {
                                class:
                                  'amplify-input amplify-field-group__control',
                                id: 'amplify-field-' + h(u),
                                autocomplete: h(i),
                                name: h(r),
                                required: h(s) ?? !0,
                                type: e.type,
                                placeholder: h(o),
                                'aria-invalid': e.hasError,
                                'aria-describedBy': e.describedBy,
                                autocapitalize: 'off'
                              },
                              null,
                              8,
                              [
                                'id',
                                'autocomplete',
                                'name',
                                'required',
                                'type',
                                'placeholder',
                                'aria-invalid',
                                'aria-describedBy'
                              ]
                            )
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
            }
          )
        )
      }
    }
  }),
  ZI = ['id'],
  QI = ee({
    __name: 'base-form-field',
    props: { name: { default: '' }, formField: { default: () => ({}) } },
    setup (e) {
      const t = e,
        { name: n, formField: r } = ae(t),
        { validationErrors: o } = ae(Ae()),
        { type: i } = r.value,
        a = i === 'password',
        s = OI(12),
        c = L(() => Tf(o.value[n.value])),
        l = L(() => {
          var f
          return ((f = c.value) == null ? void 0 : f.length) > 0
        }),
        u = L(() => (l.value ? s : void 0))
      return (f, d) => (
        P(),
        ie(
          vt,
          null,
          [
            a
              ? (P(),
                q(
                  zI,
                  {
                    key: 0,
                    name: h(n),
                    label: h(r).label,
                    placeholder: h(r).placeholder,
                    required: h(r).isRequired,
                    'label-hidden': h(r).labelHidden,
                    autocomplete: h(r).autocomplete,
                    hasError: h(l),
                    describedBy: h(u)
                  },
                  null,
                  8,
                  [
                    'name',
                    'label',
                    'placeholder',
                    'required',
                    'label-hidden',
                    'autocomplete',
                    'hasError',
                    'describedBy'
                  ]
                ))
              : (P(),
                q(
                  JI,
                  {
                    key: 1,
                    name: h(n),
                    label: h(r).label,
                    placeholder: h(r).placeholder,
                    required: h(r).isRequired,
                    'label-hidden': h(r).labelHidden,
                    autocomplete: h(r).autocomplete,
                    'dial-code': h(r).dialCode,
                    'dial-code-list': h(r).dialCodeList,
                    type: h(r).type,
                    hasError: h(l),
                    describedBy: h(u)
                  },
                  null,
                  8,
                  [
                    'name',
                    'label',
                    'placeholder',
                    'required',
                    'label-hidden',
                    'autocomplete',
                    'dial-code',
                    'dial-code-list',
                    'type',
                    'hasError',
                    'describedBy'
                  ]
                )),
            h(l)
              ? (P(),
                ie(
                  'div',
                  { key: 2, id: h(u) },
                  [
                    (P(!0),
                    ie(
                      vt,
                      null,
                      Er(
                        h(c),
                        (p, m) => (
                          P(),
                          ie(
                            'p',
                            {
                              key: m,
                              role: 'alert',
                              'data-variation': 'error',
                              class: 'amplify-text amplify-text--error'
                            },
                            D(h(U)(p)),
                            1
                          )
                        )
                      ),
                      128
                    ))
                  ],
                  8,
                  ZI
                ))
              : G('', !0)
          ],
          64
        )
      )
    }
  }),
  nt = ee({
    __name: 'base-form-fields',
    props: { route: null },
    setup (e) {
      const t = e,
        { route: n } = ae(t),
        { state: r } = vi()
      let o = []
      return (
        kl(() => {
          o = Xf(n.value, r.value)
        }),
        (i, a) => (
          P(!0),
          ie(
            vt,
            null,
            Er(
              h(o),
              ([s, c]) => (
                P(),
                q(QI, { name: s, key: s, formField: c }, null, 8, [
                  'name',
                  'formField'
                ])
              )
            ),
            128
          )
        )
      )
    }
  }),
  Wn = ee({
    __name: 'federated-sign-in-button',
    props: { provider: null },
    setup (e) {
      const t = e,
        { provider: n } = ae(t),
        { toFederatedSignIn: r } = Ae(),
        o = () => {
          r({ provider: n.value })
        }
      return (i, a) => {
        const s = Fe
        return (
          P(),
          q(
            s,
            {
              class: 'amplify-authenticator__federated-button',
              type: 'button',
              onClick: o
            },
            { default: _(() => [x(i.$slots, 'default')]), _: 3 }
          )
        )
      }
    }
  }),
  XI = j(
    'svg',
    {
      'aria-label': 'Amazon icon',
      class: 'amplify-icon',
      viewBox: '0 0 248 268'
    },
    [
      j('path', {
        d: 'M139.056521,147.024612 C133.548808,156.744524 124.782731,162.726926 115.087401,162.726926 C101.790721,162.726926 93.9937779,152.612964 93.9937779,137.68681 C93.9937779,108.224571 120.447551,102.879017 145.533369,102.879017 L145.533369,110.365976 C145.533369,123.831358 145.876354,135.063787 139.056521,147.024612 M207.206992,162.579655 C209.400505,165.692256 209.887066,169.437725 207.063416,171.770186 C199.996315,177.653081 187.429476,188.590967 180.513926,194.716661 L180.46208,194.621133 C178.176838,196.663031 174.862638,196.810303 172.27828,195.445057 C160.780281,185.9162 158.686473,181.494078 152.405048,172.403055 C133.405233,191.751331 119.909143,197.534719 95.309886,197.534719 C66.1281801,197.534719 43.4791563,179.599451 43.4791563,143.669212 C43.4791563,115.616003 58.6782107,96.5105248 80.4019706,87.1727225 C99.2063636,78.9096034 125.464714,77.4528107 145.533369,75.1641337 L145.533369,70.694248 C145.533369,62.4749122 146.167493,52.7510201 141.297893,45.6541312 C137.110277,39.2856386 129.018206,36.6586354 121.859376,36.6586354 C108.658413,36.6586354 96.9171331,43.4171982 94.0416364,57.4199213 C93.4593582,60.532522 91.1701278,63.5933787 88.003492,63.7406501 L54.4387473,60.1424518 C51.6150972,59.5095829 48.4484614,57.2248862 49.2740201,52.8982915 C56.9712583,12.2553679 93.7983558,0 126.732964,0 C143.587124,0 165.606011,4.47386604 178.902691,17.2148315 C195.760839,32.917146 194.149604,53.8694866 194.149604,76.6726704 L194.149604,130.542157 C194.149604,146.734049 200.87372,153.830938 207.206992,162.579655 Z M233.826346,208.038962 C230.467669,203.683255 211.550709,205.9821 203.056405,206.998432 C200.470662,207.321077 200.076227,205.042397 202.406981,203.404973 C217.475208,192.664928 242.201125,195.766353 245.081698,199.363845 C247.966255,202.981502 244.336653,228.071183 230.172839,240.049379 C228.001452,241.888455 225.929671,240.904388 226.89783,238.468418 C230.077218,230.430525 237.204944,212.418868 233.826346,208.038962 Z M126.768855,264 C74.0234043,264 42.0764048,241.955028 17.7852554,217.541992 C12.9733903,212.705982 6.71799208,206.295994 3.31151296,200.690918 C1.90227474,198.372135 5.59096074,195.021875 8.0442063,196.84375 C38.2390146,219.267578 82.1011654,239.538304 125.529506,239.538304 C154.819967,239.538304 191.046475,227.469543 220.66851,214.867659 C225.146771,212.966167 225.146771,219.180222 224.511585,221.060516 C224.183264,222.03242 209.514625,236.221149 189.247207,247.047411 C170.304273,257.166172 146.397132,264 126.768855,264 Z',
        fill: '#FF9900'
      })
    ],
    -1
  ),
  eC = { class: 'amplify-text' },
  tC = j(
    'svg',
    {
      'aria-label': 'Apple icon',
      class: 'amplify-icon',
      fill: '#000',
      preserveAspectRatio: 'xMidYMid',
      stroke: '#000',
      strokeWidth: '0',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      j('path', {
        d: 'M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z'
      })
    ],
    -1
  ),
  nC = { class: 'amplify-text' },
  rC = j(
    'svg',
    {
      'aria-label': 'Facebook icon',
      class: 'amplify-icon',
      viewBox: '0 0 279 538'
    },
    [
      j('path', {
        d: 'M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z',
        fill: '#1877F2'
      })
    ],
    -1
  ),
  oC = { class: 'amplify-text' },
  iC = j(
    'svg',
    {
      'aria-label': 'Google icon',
      class: 'amplify-icon',
      viewBox: '0 0 256 262',
      xmlns: 'http://www.w3.org/2000/svg',
      preserveAspectRatio: 'xMidYMid'
    },
    [
      j('path', {
        d: 'M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027',
        fill: '#4285F4'
      }),
      j('path', {
        d: 'M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1',
        fill: '#34A853'
      }),
      j('path', {
        d: 'M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782',
        fill: '#FBBC05'
      }),
      j('path', {
        d: 'M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251',
        fill: '#EB4335'
      })
    ],
    -1
  ),
  aC = { class: 'amplify-text' },
  sC = ['data-label'],
  zc = ee({
    __name: 'federated-sign-in',
    setup (e) {
      const t = Ae(),
        { route: n, socialProviders: r } = t,
        o = r == null ? void 0 : r.includes('amazon'),
        i = r == null ? void 0 : r.includes('apple'),
        a = r == null ? void 0 : r.includes('facebook'),
        s = r == null ? void 0 : r.includes('google'),
        c = a || s || o || i,
        { getSignInWithFederationText: l, getOrText: u } = Oe,
        f = L(() => vo),
        d = L(() => l(n, 'amazon')),
        p = L(() => l(n, 'apple')),
        m = L(() => l(n, 'facebook')),
        y = L(() => l(n, 'google')),
        E = L(() => u())
      return (g, S) => {
        const v = Ce
        return h(c)
          ? (P(),
            q(
              v,
              {
                key: 0,
                class: 'amplify-flex amplify-authenticator__federated-buttons'
              },
              {
                default: _(() => [
                  h(o)
                    ? (P(),
                      q(
                        Wn,
                        { key: 0, provider: h(f).Amazon },
                        {
                          default: _(() => [XI, j('span', eC, D(h(d)), 1)]),
                          _: 1
                        },
                        8,
                        ['provider']
                      ))
                    : G('', !0),
                  h(i)
                    ? (P(),
                      q(
                        Wn,
                        { key: 1, provider: h(f).Apple },
                        {
                          default: _(() => [tC, j('span', nC, D(h(p)), 1)]),
                          _: 1
                        },
                        8,
                        ['provider']
                      ))
                    : G('', !0),
                  h(a)
                    ? (P(),
                      q(
                        Wn,
                        { key: 2, provider: h(f).Facebook },
                        {
                          default: _(() => [rC, j('span', oC, D(h(m)), 1)]),
                          _: 1
                        },
                        8,
                        ['provider']
                      ))
                    : G('', !0),
                  h(s)
                    ? (P(),
                      q(
                        Wn,
                        { key: 3, provider: h(f).Google },
                        {
                          default: _(() => [iC, j('span', aC, D(h(y)), 1)]),
                          _: 1
                        },
                        8,
                        ['provider']
                      ))
                    : G('', !0),
                  j(
                    'hr',
                    {
                      class:
                        'amplify-divider amplify-divider--horizontal amplify-divider--small',
                      'aria-orientation': 'horizontal',
                      'data-label': h(E)
                    },
                    null,
                    8,
                    sC
                  )
                ]),
                _: 1
              }
            ))
          : G('', !0)
      }
    }
  }),
  cC = j('legend', { class: 'amplify-visually-hidden' }, 'Sign in', -1),
  lC = { 'data-amplify-footer': '' },
  uC = ee({
    __name: 'sign-in',
    setup (e) {
      const t = Ae(),
        { submitForm: n, updateForm: r, toForgotPassword: o } = t,
        { error: i, isPending: a } = ae(t),
        {
          getForgotPasswordText: s,
          getSignInText: c,
          getSigningInText: l
        } = Oe,
        u = L(() => s()),
        f = L(() => c()),
        d = L(() => l()),
        p = E => {
          const { name: g, value: S } = E.target
          r({ name: g, value: S })
        },
        m = E => {
          n(Ve(E))
        },
        y = () => {
          o()
        }
      return (E, g) => {
        const S = We,
          v = qe,
          w = Fe,
          I = Ce,
          A = $e,
          N = je
        return x(E.$slots, 'signInSlotI', ce(le(E.$attrs)), () => [
          x(E.$slots, 'header'),
          b(
            I,
            ce(le(E.$attrs)),
            {
              default: _(() => [
                b(
                  A,
                  {
                    'data-amplify-authenticator-signin': '',
                    onInput: p,
                    onSubmit: me(m, ['prevent']),
                    method: 'post'
                  },
                  {
                    formt: _(({ slotData: R }) => [
                      x(E.$slots, 'form', {
                        info: R,
                        onSignInSubmit: m,
                        onInput: p,
                        onForgotPasswordClicked: y
                      })
                    ]),
                    default: _(() => [
                      b(zc),
                      b(
                        I,
                        { class: 'amplify-flex amplify-authenticator__column' },
                        {
                          default: _(() => [
                            b(
                              S,
                              {
                                disabled: h(a),
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                fieldSetI: _(({ slotData: R }) => [
                                  x(E.$slots, 'signin-fields', { info: R })
                                ]),
                                default: _(() => [
                                  cC,
                                  b(nt, { route: 'signIn' })
                                ]),
                                _: 3
                              },
                              8,
                              ['disabled']
                            ),
                            h(i)
                              ? (P(),
                                q(
                                  v,
                                  { key: 0 },
                                  {
                                    default: _(() => [B(D(h(U)(h(i))), 1)]),
                                    _: 1
                                  }
                                ))
                              : G('', !0),
                            b(
                              w,
                              {
                                disabled: h(a),
                                class:
                                  'amplify-field-group__control amplify-authenticator__font',
                                fullwidth: !0,
                                loading: !1,
                                variation: 'primary'
                              },
                              {
                                default: _(() => [B(D(h(a) ? h(d) : h(f)), 1)]),
                                _: 1
                              },
                              8,
                              ['disabled']
                            )
                          ]),
                          _: 3
                        }
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['onSubmit']
                )
              ]),
              _: 3
            },
            16
          ),
          b(N, null, {
            default: _(() => [
              x(E.$slots, 'footer', {}, () => [
                j('div', lC, [
                  b(
                    w,
                    {
                      onClick: y,
                      class:
                        'amplify-field-group__control amplify-authenticator__font',
                      variation: 'link',
                      fullwidth: !0,
                      size: 'small',
                      style: { 'font-weight': 'normal' },
                      type: 'button'
                    },
                    { default: _(() => [B(D(h(u)), 1)]), _: 1 }
                  )
                ])
              ])
            ]),
            _: 3
          })
        ])
      }
    }
  }),
  dC = ee({
    __name: 'authenticator-sign-up-form-fields',
    setup (e) {
      return (t, n) => (P(), q(nt, { route: 'signUp' }))
    }
  }),
  fC = ee({
    __name: 'sign-up',
    setup (e) {
      const t = Ae(),
        { submitForm: n, updateBlur: r, updateForm: o } = t,
        { error: i, hasValidationErrors: a, isPending: s } = ae(t),
        { getCreateAccountText: c } = Oe,
        l = L(() => c()),
        u = p => {
          const { checked: m, name: y, type: E, value: g } = p.target
          o({ name: y, value: E === 'checkbox' && !m ? void 0 : g })
        }
      function f (p) {
        const { name: m } = p.target
        r({ name: m })
      }
      const d = p => {
        n(Ve(p))
      }
      return (p, m) => {
        const y = We,
          E = qe,
          g = Fe,
          S = Ce,
          v = $e,
          w = je
        return x(p.$slots, 'signUpSlotI', ce(le(p.$attrs)), () => [
          x(p.$slots, 'header'),
          b(
            S,
            ce(le(p.$attrs)),
            {
              default: _(() => [
                b(
                  v,
                  {
                    onInput: u,
                    onBlurCapture: f,
                    onSubmit: me(d, ['prevent'])
                  },
                  {
                    default: _(() => [
                      b(zc),
                      b(
                        S,
                        { class: 'amplify-flex amplify-authenticator__column' },
                        {
                          default: _(() => [
                            b(
                              y,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column',
                                disabled: h(s)
                              },
                              {
                                fieldSetI: _(({ slotData: I }) => [
                                  x(p.$slots, 'signup-fields', { info: I })
                                ]),
                                default: _(() => [b(dC)]),
                                _: 3
                              },
                              8,
                              ['disabled']
                            ),
                            h(i)
                              ? (P(),
                                q(
                                  E,
                                  { key: 0 },
                                  {
                                    default: _(() => [B(D(h(U)(h(i))), 1)]),
                                    _: 1
                                  }
                                ))
                              : G('', !0),
                            b(
                              g,
                              {
                                class:
                                  'amplify-field-group__control amplify-authenticator__font',
                                fullwidth: !0,
                                loading: !1,
                                variation: 'primary',
                                style: {
                                  'border-radius': '0px',
                                  'font-weight': 'normal'
                                },
                                disabled: h(s) || h(a)
                              },
                              { default: _(() => [B(D(h(l)), 1)]), _: 1 },
                              8,
                              ['disabled']
                            )
                          ]),
                          _: 3
                        }
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['onSubmit']
                )
              ]),
              _: 3
            },
            16
          ),
          b(w, null, { default: _(() => [x(p.$slots, 'footer')]), _: 3 })
        ])
      }
    }
  }),
  pC = {}
function hC (e, t) {
  const n = Ce
  return (
    P(),
    q(
      n,
      {
        tabindex: '0',
        'aria-orientation': 'horizontal',
        'data-orientation': 'horizontal',
        class: 'amplify-authenticator__tabs amplify-tabs'
      },
      {
        default: _(() => [
          b(
            n,
            {
              class:
                'amplify-tabs__list amplify-tabs__list--top amplify-tabs__list--equal amplify-authenticator__tabs-wrapper',
              role: 'tablist'
            },
            { default: _(() => [x(e.$slots, 'default')]), _: 3 }
          )
        ]),
        _: 3
      }
    )
  )
}
const mC = xr(pC, [['render', hC]]),
  gC = ['tabindex', 'aria-selected', 'id', 'aria-controls'],
  yC = ee({
    __name: 'base-two-tab-item',
    props: { label: null, id: null, active: { type: Boolean, default: !1 } },
    setup (e) {
      const t = e,
        { active: n, id: r, label: o } = ae(t)
      return (i, a) => (
        P(),
        ie(
          'button',
          {
            tabindex: h(n) ? 0 : -1,
            'aria-selected': h(n) ? 'true' : 'false',
            class: Ke([
              { 'amplify-tabs__item--active': h(n) },
              'amplify-tabs__item'
            ]),
            id: `${h(r)}-tab`,
            'aria-controls': `${h(r)}-panel`,
            role: 'tab'
          },
          D(h(o)),
          11,
          gC
        )
      )
    }
  }),
  vC = '4.2.8',
  _C = {}
function SC (e, t) {
  return x(e.$slots, 'textI', ce(le(e.$attrs)), () => [
    j(
      'span',
      Me(e.$attrs, { 'data-amplify-text': '' }),
      [x(e.$slots, 'default')],
      16
    )
  ])
}
const Gc = xr(_C, [['render', SC]]),
  pt = ee({
    props: { level: { type: Number, default: 1 } },
    inheritAttrs: !1,
    setup (e, { slots: t, attrs: n }) {
      var r, o
      const i = t.default ? t.default() : [],
        a = t.headingI ? t.headingI() : [],
        s = `${n.class || ''} amplify-heading--${e.level}`
      if (
        ((o = (r = a[0]) == null ? void 0 : r.children) == null
          ? void 0
          : o.length) === 0
      )
        a[0].children = [Fn(`h${e.level}`, { ...n, class: s }, [i])]
      else
        return () =>
          Fn(`h${e.level}`, { 'data-amplify-heading': '', ...n, class: s }, [
            a[0] ? Fn(a[0].children[0]) : Fn(i[0])
          ])
      return () => a
    }
  }),
  EC = ee({
    __name: 'confirm-sign-up',
    setup (e) {
      const t = Ae(),
        { codeDeliveryDetails: n, error: r, isPending: o } = ae(t),
        { resendCode: i, submitForm: a, updateForm: s } = t,
        {
          getDeliveryMethodText: c,
          getDeliveryMessageText: l,
          getResendCodeText: u,
          getConfirmText: f
        } = Oe,
        d = L(() => c(n.value)),
        p = L(() => u()),
        m = L(() => f()),
        y = L(() => l(n.value)),
        E = w => {
          const { name: I, value: A } = w.target
          s({ name: I, value: A })
        },
        g = w => {
          S(w)
        },
        S = w => {
          a(Ve(w))
        },
        v = () => {
          i()
        }
      return (w, I) => {
        const A = pt,
          N = Gc,
          R = We,
          O = qe,
          F = Fe,
          M = je,
          k = Ce,
          W = $e
        return x(w.$slots, 'confirmSignUpSlotI', ce(le(w.$attrs)), () => [
          b(
            k,
            ce(le(w.$attrs)),
            {
              default: _(() => [
                b(
                  W,
                  { onInput: E, onSubmit: me(g, ['prevent']) },
                  {
                    default: _(() => [
                      b(
                        k,
                        { class: 'amplify-flex amplify-authenticator__column' },
                        {
                          default: _(() => [
                            x(w.$slots, 'header', {}, () => [
                              b(
                                A,
                                {
                                  class:
                                    'amplify-heading amplify-authenticator__heading',
                                  level: 3
                                },
                                { default: _(() => [B(D(h(d)), 1)]), _: 1 }
                              )
                            ]),
                            b(
                              N,
                              { class: 'amplify-authenticator__subtitle' },
                              { default: _(() => [B(D(h(y)), 1)]), _: 1 }
                            ),
                            b(
                              R,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column',
                                disabled: h(o)
                              },
                              {
                                default: _(() => [
                                  b(nt, { route: 'confirmSignUp' })
                                ]),
                                _: 1
                              },
                              8,
                              ['disabled']
                            ),
                            b(
                              M,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                default: _(() => [
                                  h(r)
                                    ? (P(),
                                      q(
                                        O,
                                        { key: 0 },
                                        {
                                          default: _(() => [
                                            B(D(h(U)(h(r))), 1)
                                          ]),
                                          _: 1
                                        }
                                      ))
                                    : G('', !0),
                                  b(
                                    F,
                                    {
                                      class:
                                        'amplify-field-group__control amplify-authenticator__font',
                                      fullwidth: !1,
                                      loading: !1,
                                      variation: 'primary',
                                      type: 'submit',
                                      disabled: h(o)
                                    },
                                    { default: _(() => [B(D(h(m)), 1)]), _: 1 },
                                    8,
                                    ['disabled']
                                  ),
                                  b(
                                    F,
                                    {
                                      class:
                                        'amplify-field-group__control amplify-authenticator__font',
                                      fullwidth: !1,
                                      variation: 'default',
                                      style: { 'font-weight': 'normal' },
                                      type: 'button',
                                      onClick: me(v, ['prevent'])
                                    },
                                    { default: _(() => [B(D(h(p)), 1)]), _: 1 },
                                    8,
                                    ['onClick']
                                  ),
                                  x(w.$slots, 'footer')
                                ]),
                                _: 3
                              }
                            )
                          ]),
                          _: 3
                        }
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['onSubmit']
                )
              ]),
              _: 3
            },
            16
          )
        ])
      }
    }
  }),
  wC = ee({
    __name: 'confirm-sign-in',
    setup (e) {
      const t = Ae(),
        { submitForm: n, toSignIn: r, updateForm: o } = t,
        { error: i, isPending: a, challengeName: s } = ae(t),
        c = L(() => s.value),
        { getBackToSignInText: l, getConfirmText: u, getChallengeText: f } = Oe,
        d = L(() => f(c.value)),
        p = L(() => l()),
        m = L(() => u()),
        y = S => {
          const { name: v, value: w } = S.target
          o({ name: v, value: w })
        },
        E = S => {
          n(Ve(S))
        },
        g = () => {
          r()
        }
      return (S, v) => {
        const w = pt,
          I = Ce,
          A = qe,
          N = Fe,
          R = je,
          O = We,
          F = $e
        return x(S.$slots, 'confirmSignInSlotI', ce(le(S.$attrs)), () => [
          b(
            I,
            ce(le(S.$attrs)),
            {
              default: _(() => [
                b(
                  F,
                  {
                    'data-amplify-authenticator-confirmsignin': '',
                    onInput: y,
                    onSubmit: me(E, ['prevent'])
                  },
                  {
                    default: _(() => [
                      b(
                        O,
                        {
                          class: 'amplify-flex amplify-authenticator__column',
                          disabled: h(a)
                        },
                        {
                          default: _(() => [
                            x(S.$slots, 'header', {}, () => [
                              b(
                                w,
                                { level: 3, class: 'amplify-heading' },
                                { default: _(() => [B(D(h(d)), 1)]), _: 1 }
                              )
                            ]),
                            b(
                              I,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                default: _(() => [
                                  b(nt, { route: 'confirmSignIn' })
                                ]),
                                _: 1
                              }
                            ),
                            b(
                              R,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                default: _(() => [
                                  h(i)
                                    ? (P(),
                                      q(
                                        A,
                                        { key: 0 },
                                        {
                                          default: _(() => [
                                            B(D(h(U)(h(i))), 1)
                                          ]),
                                          _: 1
                                        }
                                      ))
                                    : G('', !0),
                                  b(
                                    N,
                                    {
                                      class:
                                        'amplify-field-group__control amplify-authenticator__font',
                                      fullwidth: !1,
                                      loading: !1,
                                      variation: 'primary',
                                      style: { 'font-weight': 'normal' },
                                      disabled: h(a)
                                    },
                                    { default: _(() => [B(D(h(m)), 1)]), _: 1 },
                                    8,
                                    ['disabled']
                                  ),
                                  b(
                                    N,
                                    {
                                      class:
                                        'amplify-field-group__control amplify-authenticator__font',
                                      fullwidth: !1,
                                      size: 'small',
                                      variation: 'link',
                                      style: { 'font-weight': 'normal' },
                                      type: 'button',
                                      onClick: me(g, ['prevent'])
                                    },
                                    { default: _(() => [B(D(h(p)), 1)]), _: 1 },
                                    8,
                                    ['onClick']
                                  ),
                                  x(S.$slots, 'footer')
                                ]),
                                _: 3
                              }
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['disabled']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['onSubmit']
                )
              ]),
              _: 3
            },
            16
          )
        ])
      }
    }
  })
var Un = {},
  bC = function () {
    return (
      typeof Promise == 'function' &&
      Promise.prototype &&
      Promise.prototype.then
    )
  },
  Kc = {},
  Ne = {}
let Ei
const IC = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
  2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]
Ne.getSymbolSize = function (e) {
  if (!e) throw new Error('"version" cannot be null or undefined')
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40')
  return e * 4 + 17
}
Ne.getSymbolTotalCodewords = function (e) {
  return IC[e]
}
Ne.getBCHDigit = function (e) {
  let t = 0
  for (; e !== 0; ) t++, (e >>>= 1)
  return t
}
Ne.setToSJISFunction = function (e) {
  if (typeof e != 'function')
    throw new Error('"toSJISFunc" is not a valid function.')
  Ei = e
}
Ne.isKanjiModeEnabled = function () {
  return typeof Ei < 'u'
}
Ne.toSJIS = function (e) {
  return Ei(e)
}
var Gr = {}
;(function (e) {
  ;(e.L = { bit: 1 }),
    (e.M = { bit: 0 }),
    (e.Q = { bit: 3 }),
    (e.H = { bit: 2 })
  function t (n) {
    if (typeof n != 'string') throw new Error('Param is not a string')
    switch (n.toLowerCase()) {
      case 'l':
      case 'low':
        return e.L
      case 'm':
      case 'medium':
        return e.M
      case 'q':
      case 'quartile':
        return e.Q
      case 'h':
      case 'high':
        return e.H
      default:
        throw new Error('Unknown EC Level: ' + n)
    }
  }
  ;(e.isValid = function (n) {
    return n && typeof n.bit < 'u' && n.bit >= 0 && n.bit < 4
  }),
    (e.from = function (n, r) {
      if (e.isValid(n)) return n
      try {
        return t(n)
      } catch {
        return r
      }
    })
})(Gr)
function Yc () {
  ;(this.buffer = []), (this.length = 0)
}
Yc.prototype = {
  get: function (e) {
    const t = Math.floor(e / 8)
    return ((this.buffer[t] >>> (7 - (e % 8))) & 1) === 1
  },
  put: function (e, t) {
    for (let n = 0; n < t; n++) this.putBit(((e >>> (t - n - 1)) & 1) === 1)
  },
  getLengthInBits: function () {
    return this.length
  },
  putBit: function (e) {
    const t = Math.floor(this.length / 8)
    this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> this.length % 8),
      this.length++
  }
}
var CC = Yc
function Mn (e) {
  if (!e || e < 1)
    throw new Error('BitMatrix size must be defined and greater than 0')
  ;(this.size = e),
    (this.data = new Uint8Array(e * e)),
    (this.reservedBit = new Uint8Array(e * e))
}
Mn.prototype.set = function (e, t, n, r) {
  const o = e * this.size + t
  ;(this.data[o] = n), r && (this.reservedBit[o] = !0)
}
Mn.prototype.get = function (e, t) {
  return this.data[e * this.size + t]
}
Mn.prototype.xor = function (e, t, n) {
  this.data[e * this.size + t] ^= n
}
Mn.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t]
}
var AC = Mn,
  Jc = {}
;(function (e) {
  const t = Ne.getSymbolSize
  ;(e.getRowColCoords = function (n) {
    if (n === 1) return []
    const r = Math.floor(n / 7) + 2,
      o = t(n),
      i = o === 145 ? 26 : Math.ceil((o - 13) / (2 * r - 2)) * 2,
      a = [o - 7]
    for (let s = 1; s < r - 1; s++) a[s] = a[s - 1] - i
    return a.push(6), a.reverse()
  }),
    (e.getPositions = function (n) {
      const r = [],
        o = e.getRowColCoords(n),
        i = o.length
      for (let a = 0; a < i; a++)
        for (let s = 0; s < i; s++)
          (a === 0 && s === 0) ||
            (a === 0 && s === i - 1) ||
            (a === i - 1 && s === 0) ||
            r.push([o[a], o[s]])
      return r
    })
})(Jc)
var Zc = {}
const xC = Ne.getSymbolSize,
  Xa = 7
Zc.getPositions = function (e) {
  const t = xC(e)
  return [
    [0, 0],
    [t - Xa, 0],
    [0, t - Xa]
  ]
}
var Qc = {}
;(function (e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  }
  const t = { N1: 3, N2: 3, N3: 40, N4: 10 }
  ;(e.isValid = function (r) {
    return r != null && r !== '' && !isNaN(r) && r >= 0 && r <= 7
  }),
    (e.from = function (r) {
      return e.isValid(r) ? parseInt(r, 10) : void 0
    }),
    (e.getPenaltyN1 = function (r) {
      const o = r.size
      let i = 0,
        a = 0,
        s = 0,
        c = null,
        l = null
      for (let u = 0; u < o; u++) {
        ;(a = s = 0), (c = l = null)
        for (let f = 0; f < o; f++) {
          let d = r.get(u, f)
          d === c ? a++ : (a >= 5 && (i += t.N1 + (a - 5)), (c = d), (a = 1)),
            (d = r.get(f, u)),
            d === l ? s++ : (s >= 5 && (i += t.N1 + (s - 5)), (l = d), (s = 1))
        }
        a >= 5 && (i += t.N1 + (a - 5)), s >= 5 && (i += t.N1 + (s - 5))
      }
      return i
    }),
    (e.getPenaltyN2 = function (r) {
      const o = r.size
      let i = 0
      for (let a = 0; a < o - 1; a++)
        for (let s = 0; s < o - 1; s++) {
          const c =
            r.get(a, s) +
            r.get(a, s + 1) +
            r.get(a + 1, s) +
            r.get(a + 1, s + 1)
          ;(c === 4 || c === 0) && i++
        }
      return i * t.N2
    }),
    (e.getPenaltyN3 = function (r) {
      const o = r.size
      let i = 0,
        a = 0,
        s = 0
      for (let c = 0; c < o; c++) {
        a = s = 0
        for (let l = 0; l < o; l++)
          (a = ((a << 1) & 2047) | r.get(c, l)),
            l >= 10 && (a === 1488 || a === 93) && i++,
            (s = ((s << 1) & 2047) | r.get(l, c)),
            l >= 10 && (s === 1488 || s === 93) && i++
      }
      return i * t.N3
    }),
    (e.getPenaltyN4 = function (r) {
      let o = 0
      const i = r.data.length
      for (let a = 0; a < i; a++) o += r.data[a]
      return Math.abs(Math.ceil((o * 100) / i / 5) - 10) * t.N4
    })
  function n (r, o, i) {
    switch (r) {
      case e.Patterns.PATTERN000:
        return (o + i) % 2 === 0
      case e.Patterns.PATTERN001:
        return o % 2 === 0
      case e.Patterns.PATTERN010:
        return i % 3 === 0
      case e.Patterns.PATTERN011:
        return (o + i) % 3 === 0
      case e.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0
      case e.Patterns.PATTERN101:
        return ((o * i) % 2) + ((o * i) % 3) === 0
      case e.Patterns.PATTERN110:
        return (((o * i) % 2) + ((o * i) % 3)) % 2 === 0
      case e.Patterns.PATTERN111:
        return (((o * i) % 3) + ((o + i) % 2)) % 2 === 0
      default:
        throw new Error('bad maskPattern:' + r)
    }
  }
  ;(e.applyMask = function (r, o) {
    const i = o.size
    for (let a = 0; a < i; a++)
      for (let s = 0; s < i; s++) o.isReserved(s, a) || o.xor(s, a, n(r, s, a))
  }),
    (e.getBestMask = function (r, o) {
      const i = Object.keys(e.Patterns).length
      let a = 0,
        s = 1 / 0
      for (let c = 0; c < i; c++) {
        o(c), e.applyMask(c, r)
        const l =
          e.getPenaltyN1(r) +
          e.getPenaltyN2(r) +
          e.getPenaltyN3(r) +
          e.getPenaltyN4(r)
        e.applyMask(c, r), l < s && ((s = l), (a = c))
      }
      return a
    })
})(Qc)
var Kr = {}
const at = Gr,
  zn = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81
  ],
  Gn = [
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
    88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
    72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352,
    120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
    532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442,
    644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
    588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
    1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
    924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064,
    1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
    2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430
  ]
Kr.getBlocksCount = function (e, t) {
  switch (t) {
    case at.L:
      return zn[(e - 1) * 4 + 0]
    case at.M:
      return zn[(e - 1) * 4 + 1]
    case at.Q:
      return zn[(e - 1) * 4 + 2]
    case at.H:
      return zn[(e - 1) * 4 + 3]
    default:
      return
  }
}
Kr.getTotalCodewordsCount = function (e, t) {
  switch (t) {
    case at.L:
      return Gn[(e - 1) * 4 + 0]
    case at.M:
      return Gn[(e - 1) * 4 + 1]
    case at.Q:
      return Gn[(e - 1) * 4 + 2]
    case at.H:
      return Gn[(e - 1) * 4 + 3]
    default:
      return
  }
}
var Xc = {},
  Yr = {}
const fn = new Uint8Array(512),
  mr = new Uint8Array(256)
;(function () {
  let e = 1
  for (let t = 0; t < 255; t++)
    (fn[t] = e), (mr[e] = t), (e <<= 1), e & 256 && (e ^= 285)
  for (let t = 255; t < 512; t++) fn[t] = fn[t - 255]
})()
Yr.log = function (e) {
  if (e < 1) throw new Error('log(' + e + ')')
  return mr[e]
}
Yr.exp = function (e) {
  return fn[e]
}
Yr.mul = function (e, t) {
  return e === 0 || t === 0 ? 0 : fn[mr[e] + mr[t]]
}
;(function (e) {
  const t = Yr
  ;(e.mul = function (n, r) {
    const o = new Uint8Array(n.length + r.length - 1)
    for (let i = 0; i < n.length; i++)
      for (let a = 0; a < r.length; a++) o[i + a] ^= t.mul(n[i], r[a])
    return o
  }),
    (e.mod = function (n, r) {
      let o = new Uint8Array(n)
      for (; o.length - r.length >= 0; ) {
        const i = o[0]
        for (let s = 0; s < r.length; s++) o[s] ^= t.mul(r[s], i)
        let a = 0
        for (; a < o.length && o[a] === 0; ) a++
        o = o.slice(a)
      }
      return o
    }),
    (e.generateECPolynomial = function (n) {
      let r = new Uint8Array([1])
      for (let o = 0; o < n; o++) r = e.mul(r, new Uint8Array([1, t.exp(o)]))
      return r
    })
})(Xc)
const el = Xc
function wi (e) {
  ;(this.genPoly = void 0),
    (this.degree = e),
    this.degree && this.initialize(this.degree)
}
wi.prototype.initialize = function (e) {
  ;(this.degree = e), (this.genPoly = el.generateECPolynomial(this.degree))
}
wi.prototype.encode = function (e) {
  if (!this.genPoly) throw new Error('Encoder not initialized')
  const t = new Uint8Array(e.length + this.degree)
  t.set(e)
  const n = el.mod(t, this.genPoly),
    r = this.degree - n.length
  if (r > 0) {
    const o = new Uint8Array(this.degree)
    return o.set(n, r), o
  }
  return n
}
var NC = wi,
  tl = {},
  ht = {},
  bi = {}
bi.isValid = function (e) {
  return !isNaN(e) && e >= 1 && e <= 40
}
var ze = {}
const nl = '[0-9]+',
  TC = '[A-Z $%*+\\-./:]+'
let Sn =
  '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
Sn = Sn.replace(/u/g, '\\u')
const RC =
  '(?:(?![A-Z0-9 $%*+\\-./:]|' +
  Sn +
  `)(?:.|[\r
]))+`
ze.KANJI = new RegExp(Sn, 'g')
ze.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
ze.BYTE = new RegExp(RC, 'g')
ze.NUMERIC = new RegExp(nl, 'g')
ze.ALPHANUMERIC = new RegExp(TC, 'g')
const PC = new RegExp('^' + Sn + '$'),
  UC = new RegExp('^' + nl + '$'),
  MC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')
ze.testKanji = function (e) {
  return PC.test(e)
}
ze.testNumeric = function (e) {
  return UC.test(e)
}
ze.testAlphanumeric = function (e) {
  return MC.test(e)
}
;(function (e) {
  const t = bi,
    n = ze
  ;(e.NUMERIC = { id: 'Numeric', bit: 1, ccBits: [10, 12, 14] }),
    (e.ALPHANUMERIC = { id: 'Alphanumeric', bit: 2, ccBits: [9, 11, 13] }),
    (e.BYTE = { id: 'Byte', bit: 4, ccBits: [8, 16, 16] }),
    (e.KANJI = { id: 'Kanji', bit: 8, ccBits: [8, 10, 12] }),
    (e.MIXED = { bit: -1 }),
    (e.getCharCountIndicator = function (o, i) {
      if (!o.ccBits) throw new Error('Invalid mode: ' + o)
      if (!t.isValid(i)) throw new Error('Invalid version: ' + i)
      return i >= 1 && i < 10 ? o.ccBits[0] : i < 27 ? o.ccBits[1] : o.ccBits[2]
    }),
    (e.getBestModeForData = function (o) {
      return n.testNumeric(o)
        ? e.NUMERIC
        : n.testAlphanumeric(o)
        ? e.ALPHANUMERIC
        : n.testKanji(o)
        ? e.KANJI
        : e.BYTE
    }),
    (e.toString = function (o) {
      if (o && o.id) return o.id
      throw new Error('Invalid mode')
    }),
    (e.isValid = function (o) {
      return o && o.bit && o.ccBits
    })
  function r (o) {
    if (typeof o != 'string') throw new Error('Param is not a string')
    switch (o.toLowerCase()) {
      case 'numeric':
        return e.NUMERIC
      case 'alphanumeric':
        return e.ALPHANUMERIC
      case 'kanji':
        return e.KANJI
      case 'byte':
        return e.BYTE
      default:
        throw new Error('Unknown mode: ' + o)
    }
  }
  e.from = function (o, i) {
    if (e.isValid(o)) return o
    try {
      return r(o)
    } catch {
      return i
    }
  }
})(ht)
;(function (e) {
  const t = Ne,
    n = Kr,
    r = Gr,
    o = ht,
    i = bi,
    a = 7973,
    s = t.getBCHDigit(a)
  function c (d, p, m) {
    for (let y = 1; y <= 40; y++) if (p <= e.getCapacity(y, m, d)) return y
  }
  function l (d, p) {
    return o.getCharCountIndicator(d, p) + 4
  }
  function u (d, p) {
    let m = 0
    return (
      d.forEach(function (y) {
        const E = l(y.mode, p)
        m += E + y.getBitsLength()
      }),
      m
    )
  }
  function f (d, p) {
    for (let m = 1; m <= 40; m++)
      if (u(d, m) <= e.getCapacity(m, p, o.MIXED)) return m
  }
  ;(e.from = function (d, p) {
    return i.isValid(d) ? parseInt(d, 10) : p
  }),
    (e.getCapacity = function (d, p, m) {
      if (!i.isValid(d)) throw new Error('Invalid QR Code version')
      typeof m > 'u' && (m = o.BYTE)
      const y = t.getSymbolTotalCodewords(d),
        E = n.getTotalCodewordsCount(d, p),
        g = (y - E) * 8
      if (m === o.MIXED) return g
      const S = g - l(m, d)
      switch (m) {
        case o.NUMERIC:
          return Math.floor((S / 10) * 3)
        case o.ALPHANUMERIC:
          return Math.floor((S / 11) * 2)
        case o.KANJI:
          return Math.floor(S / 13)
        case o.BYTE:
        default:
          return Math.floor(S / 8)
      }
    }),
    (e.getBestVersionForData = function (d, p) {
      let m
      const y = r.from(p, r.M)
      if (Array.isArray(d)) {
        if (d.length > 1) return f(d, y)
        if (d.length === 0) return 1
        m = d[0]
      } else m = d
      return c(m.mode, m.getLength(), y)
    }),
    (e.getEncodedBits = function (d) {
      if (!i.isValid(d) || d < 7) throw new Error('Invalid QR Code version')
      let p = d << 12
      for (; t.getBCHDigit(p) - s >= 0; ) p ^= a << (t.getBCHDigit(p) - s)
      return (d << 12) | p
    })
})(tl)
var rl = {}
const Po = Ne,
  ol = 1335,
  FC = 21522,
  es = Po.getBCHDigit(ol)
rl.getEncodedBits = function (e, t) {
  const n = (e.bit << 3) | t
  let r = n << 10
  for (; Po.getBCHDigit(r) - es >= 0; ) r ^= ol << (Po.getBCHDigit(r) - es)
  return ((n << 10) | r) ^ FC
}
var il = {}
const OC = ht
function Dt (e) {
  ;(this.mode = OC.NUMERIC), (this.data = e.toString())
}
Dt.getBitsLength = function (e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0)
}
Dt.prototype.getLength = function () {
  return this.data.length
}
Dt.prototype.getBitsLength = function () {
  return Dt.getBitsLength(this.data.length)
}
Dt.prototype.write = function (e) {
  let t, n, r
  for (t = 0; t + 3 <= this.data.length; t += 3)
    (n = this.data.substr(t, 3)), (r = parseInt(n, 10)), e.put(r, 10)
  const o = this.data.length - t
  o > 0 &&
    ((n = this.data.substr(t)), (r = parseInt(n, 10)), e.put(r, o * 3 + 1))
}
var DC = Dt
const kC = ht,
  io = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '$',
    '%',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':'
  ]
function kt (e) {
  ;(this.mode = kC.ALPHANUMERIC), (this.data = e)
}
kt.getBitsLength = function (e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2)
}
kt.prototype.getLength = function () {
  return this.data.length
}
kt.prototype.getBitsLength = function () {
  return kt.getBitsLength(this.data.length)
}
kt.prototype.write = function (e) {
  let t
  for (t = 0; t + 2 <= this.data.length; t += 2) {
    let n = io.indexOf(this.data[t]) * 45
    ;(n += io.indexOf(this.data[t + 1])), e.put(n, 11)
  }
  this.data.length % 2 && e.put(io.indexOf(this.data[t]), 6)
}
var BC = kt,
  LC = function (e) {
    for (var t = [], n = e.length, r = 0; r < n; r++) {
      var o = e.charCodeAt(r)
      if (o >= 55296 && o <= 56319 && n > r + 1) {
        var i = e.charCodeAt(r + 1)
        i >= 56320 &&
          i <= 57343 &&
          ((o = (o - 55296) * 1024 + i - 56320 + 65536), (r += 1))
      }
      if (o < 128) {
        t.push(o)
        continue
      }
      if (o < 2048) {
        t.push((o >> 6) | 192), t.push((o & 63) | 128)
        continue
      }
      if (o < 55296 || (o >= 57344 && o < 65536)) {
        t.push((o >> 12) | 224),
          t.push(((o >> 6) & 63) | 128),
          t.push((o & 63) | 128)
        continue
      }
      if (o >= 65536 && o <= 1114111) {
        t.push((o >> 18) | 240),
          t.push(((o >> 12) & 63) | 128),
          t.push(((o >> 6) & 63) | 128),
          t.push((o & 63) | 128)
        continue
      }
      t.push(239, 191, 189)
    }
    return new Uint8Array(t).buffer
  }
const jC = LC,
  $C = ht
function Bt (e) {
  ;(this.mode = $C.BYTE), (this.data = new Uint8Array(jC(e)))
}
Bt.getBitsLength = function (e) {
  return e * 8
}
Bt.prototype.getLength = function () {
  return this.data.length
}
Bt.prototype.getBitsLength = function () {
  return Bt.getBitsLength(this.data.length)
}
Bt.prototype.write = function (e) {
  for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
}
var VC = Bt
const HC = ht,
  qC = Ne
function Lt (e) {
  ;(this.mode = HC.KANJI), (this.data = e)
}
Lt.getBitsLength = function (e) {
  return e * 13
}
Lt.prototype.getLength = function () {
  return this.data.length
}
Lt.prototype.getBitsLength = function () {
  return Lt.getBitsLength(this.data.length)
}
Lt.prototype.write = function (e) {
  let t
  for (t = 0; t < this.data.length; t++) {
    let n = qC.toSJIS(this.data[t])
    if (n >= 33088 && n <= 40956) n -= 33088
    else if (n >= 57408 && n <= 60351) n -= 49472
    else
      throw new Error(
        'Invalid SJIS character: ' +
          this.data[t] +
          `
Make sure your charset is UTF-8`
      )
    ;(n = ((n >>> 8) & 255) * 192 + (n & 255)), e.put(n, 13)
  }
}
var WC = Lt,
  al = { exports: {} }
;(function (e) {
  var t = {
    single_source_shortest_paths: function (n, r, o) {
      var i = {},
        a = {}
      a[r] = 0
      var s = t.PriorityQueue.make()
      s.push(r, 0)
      for (var c, l, u, f, d, p, m, y, E; !s.empty(); ) {
        ;(c = s.pop()), (l = c.value), (f = c.cost), (d = n[l] || {})
        for (u in d)
          d.hasOwnProperty(u) &&
            ((p = d[u]),
            (m = f + p),
            (y = a[u]),
            (E = typeof a[u] > 'u'),
            (E || y > m) && ((a[u] = m), s.push(u, m), (i[u] = l)))
      }
      if (typeof o < 'u' && typeof a[o] > 'u') {
        var g = ['Could not find a path from ', r, ' to ', o, '.'].join('')
        throw new Error(g)
      }
      return i
    },
    extract_shortest_path_from_predecessor_list: function (n, r) {
      for (var o = [], i = r; i; ) o.push(i), n[i], (i = n[i])
      return o.reverse(), o
    },
    find_path: function (n, r, o) {
      var i = t.single_source_shortest_paths(n, r, o)
      return t.extract_shortest_path_from_predecessor_list(i, o)
    },
    PriorityQueue: {
      make: function (n) {
        var r = t.PriorityQueue,
          o = {},
          i
        n = n || {}
        for (i in r) r.hasOwnProperty(i) && (o[i] = r[i])
        return (o.queue = []), (o.sorter = n.sorter || r.default_sorter), o
      },
      default_sorter: function (n, r) {
        return n.cost - r.cost
      },
      push: function (n, r) {
        var o = { value: n, cost: r }
        this.queue.push(o), this.queue.sort(this.sorter)
      },
      pop: function () {
        return this.queue.shift()
      },
      empty: function () {
        return this.queue.length === 0
      }
    }
  }
  e.exports = t
})(al)
var zC = al.exports
;(function (e) {
  const t = ht,
    n = DC,
    r = BC,
    o = VC,
    i = WC,
    a = ze,
    s = Ne,
    c = zC
  function l (g) {
    return unescape(encodeURIComponent(g)).length
  }
  function u (g, S, v) {
    const w = []
    let I
    for (; (I = g.exec(v)) !== null; )
      w.push({ data: I[0], index: I.index, mode: S, length: I[0].length })
    return w
  }
  function f (g) {
    const S = u(a.NUMERIC, t.NUMERIC, g),
      v = u(a.ALPHANUMERIC, t.ALPHANUMERIC, g)
    let w, I
    return (
      s.isKanjiModeEnabled()
        ? ((w = u(a.BYTE, t.BYTE, g)), (I = u(a.KANJI, t.KANJI, g)))
        : ((w = u(a.BYTE_KANJI, t.BYTE, g)), (I = [])),
      S.concat(v, w, I)
        .sort(function (A, N) {
          return A.index - N.index
        })
        .map(function (A) {
          return { data: A.data, mode: A.mode, length: A.length }
        })
    )
  }
  function d (g, S) {
    switch (S) {
      case t.NUMERIC:
        return n.getBitsLength(g)
      case t.ALPHANUMERIC:
        return r.getBitsLength(g)
      case t.KANJI:
        return i.getBitsLength(g)
      case t.BYTE:
        return o.getBitsLength(g)
    }
  }
  function p (g) {
    return g.reduce(function (S, v) {
      const w = S.length - 1 >= 0 ? S[S.length - 1] : null
      return w && w.mode === v.mode
        ? ((S[S.length - 1].data += v.data), S)
        : (S.push(v), S)
    }, [])
  }
  function m (g) {
    const S = []
    for (let v = 0; v < g.length; v++) {
      const w = g[v]
      switch (w.mode) {
        case t.NUMERIC:
          S.push([
            w,
            { data: w.data, mode: t.ALPHANUMERIC, length: w.length },
            { data: w.data, mode: t.BYTE, length: w.length }
          ])
          break
        case t.ALPHANUMERIC:
          S.push([w, { data: w.data, mode: t.BYTE, length: w.length }])
          break
        case t.KANJI:
          S.push([w, { data: w.data, mode: t.BYTE, length: l(w.data) }])
          break
        case t.BYTE:
          S.push([{ data: w.data, mode: t.BYTE, length: l(w.data) }])
      }
    }
    return S
  }
  function y (g, S) {
    const v = {},
      w = { start: {} }
    let I = ['start']
    for (let A = 0; A < g.length; A++) {
      const N = g[A],
        R = []
      for (let O = 0; O < N.length; O++) {
        const F = N[O],
          M = '' + A + O
        R.push(M), (v[M] = { node: F, lastCount: 0 }), (w[M] = {})
        for (let k = 0; k < I.length; k++) {
          const W = I[k]
          v[W] && v[W].node.mode === F.mode
            ? ((w[W][M] =
                d(v[W].lastCount + F.length, F.mode) -
                d(v[W].lastCount, F.mode)),
              (v[W].lastCount += F.length))
            : (v[W] && (v[W].lastCount = F.length),
              (w[W][M] =
                d(F.length, F.mode) + 4 + t.getCharCountIndicator(F.mode, S)))
        }
      }
      I = R
    }
    for (let A = 0; A < I.length; A++) w[I[A]].end = 0
    return { map: w, table: v }
  }
  function E (g, S) {
    let v
    const w = t.getBestModeForData(g)
    if (((v = t.from(S, w)), v !== t.BYTE && v.bit < w.bit))
      throw new Error(
        '"' +
          g +
          '" cannot be encoded with mode ' +
          t.toString(v) +
          `.
 Suggested mode is: ` +
          t.toString(w)
      )
    switch ((v === t.KANJI && !s.isKanjiModeEnabled() && (v = t.BYTE), v)) {
      case t.NUMERIC:
        return new n(g)
      case t.ALPHANUMERIC:
        return new r(g)
      case t.KANJI:
        return new i(g)
      case t.BYTE:
        return new o(g)
    }
  }
  ;(e.fromArray = function (g) {
    return g.reduce(function (S, v) {
      return (
        typeof v == 'string'
          ? S.push(E(v, null))
          : v.data && S.push(E(v.data, v.mode)),
        S
      )
    }, [])
  }),
    (e.fromString = function (g, S) {
      const v = f(g, s.isKanjiModeEnabled()),
        w = m(v),
        I = y(w, S),
        A = c.find_path(I.map, 'start', 'end'),
        N = []
      for (let R = 1; R < A.length - 1; R++) N.push(I.table[A[R]].node)
      return e.fromArray(p(N))
    }),
    (e.rawSplit = function (g) {
      return e.fromArray(f(g, s.isKanjiModeEnabled()))
    })
})(il)
const Jr = Ne,
  ao = Gr,
  GC = CC,
  KC = AC,
  YC = Jc,
  JC = Zc,
  Uo = Qc,
  Mo = Kr,
  ZC = NC,
  gr = tl,
  QC = rl,
  XC = ht,
  so = il
function eA (e, t) {
  const n = e.size,
    r = JC.getPositions(t)
  for (let o = 0; o < r.length; o++) {
    const i = r[o][0],
      a = r[o][1]
    for (let s = -1; s <= 7; s++)
      if (!(i + s <= -1 || n <= i + s))
        for (let c = -1; c <= 7; c++)
          a + c <= -1 ||
            n <= a + c ||
            ((s >= 0 && s <= 6 && (c === 0 || c === 6)) ||
            (c >= 0 && c <= 6 && (s === 0 || s === 6)) ||
            (s >= 2 && s <= 4 && c >= 2 && c <= 4)
              ? e.set(i + s, a + c, !0, !0)
              : e.set(i + s, a + c, !1, !0))
  }
}
function tA (e) {
  const t = e.size
  for (let n = 8; n < t - 8; n++) {
    const r = n % 2 === 0
    e.set(n, 6, r, !0), e.set(6, n, r, !0)
  }
}
function nA (e, t) {
  const n = YC.getPositions(t)
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0],
      i = n[r][1]
    for (let a = -2; a <= 2; a++)
      for (let s = -2; s <= 2; s++)
        a === -2 || a === 2 || s === -2 || s === 2 || (a === 0 && s === 0)
          ? e.set(o + a, i + s, !0, !0)
          : e.set(o + a, i + s, !1, !0)
  }
}
function rA (e, t) {
  const n = e.size,
    r = gr.getEncodedBits(t)
  let o, i, a
  for (let s = 0; s < 18; s++)
    (o = Math.floor(s / 3)),
      (i = (s % 3) + n - 8 - 3),
      (a = ((r >> s) & 1) === 1),
      e.set(o, i, a, !0),
      e.set(i, o, a, !0)
}
function co (e, t, n) {
  const r = e.size,
    o = QC.getEncodedBits(t, n)
  let i, a
  for (i = 0; i < 15; i++)
    (a = ((o >> i) & 1) === 1),
      i < 6
        ? e.set(i, 8, a, !0)
        : i < 8
        ? e.set(i + 1, 8, a, !0)
        : e.set(r - 15 + i, 8, a, !0),
      i < 8
        ? e.set(8, r - i - 1, a, !0)
        : i < 9
        ? e.set(8, 15 - i - 1 + 1, a, !0)
        : e.set(8, 15 - i - 1, a, !0)
  e.set(r - 8, 8, 1, !0)
}
function oA (e, t) {
  const n = e.size
  let r = -1,
    o = n - 1,
    i = 7,
    a = 0
  for (let s = n - 1; s > 0; s -= 2)
    for (s === 6 && s--; ; ) {
      for (let c = 0; c < 2; c++)
        if (!e.isReserved(o, s - c)) {
          let l = !1
          a < t.length && (l = ((t[a] >>> i) & 1) === 1),
            e.set(o, s - c, l),
            i--,
            i === -1 && (a++, (i = 7))
        }
      if (((o += r), o < 0 || n <= o)) {
        ;(o -= r), (r = -r)
        break
      }
    }
}
function iA (e, t, n) {
  const r = new GC()
  n.forEach(function (c) {
    r.put(c.mode.bit, 4),
      r.put(c.getLength(), XC.getCharCountIndicator(c.mode, e)),
      c.write(r)
  })
  const o = Jr.getSymbolTotalCodewords(e),
    i = Mo.getTotalCodewordsCount(e, t),
    a = (o - i) * 8
  for (
    r.getLengthInBits() + 4 <= a && r.put(0, 4);
    r.getLengthInBits() % 8 !== 0;

  )
    r.putBit(0)
  const s = (a - r.getLengthInBits()) / 8
  for (let c = 0; c < s; c++) r.put(c % 2 ? 17 : 236, 8)
  return aA(r, e, t)
}
function aA (e, t, n) {
  const r = Jr.getSymbolTotalCodewords(t),
    o = Mo.getTotalCodewordsCount(t, n),
    i = r - o,
    a = Mo.getBlocksCount(t, n),
    s = r % a,
    c = a - s,
    l = Math.floor(r / a),
    u = Math.floor(i / a),
    f = u + 1,
    d = l - u,
    p = new ZC(d)
  let m = 0
  const y = new Array(a),
    E = new Array(a)
  let g = 0
  const S = new Uint8Array(e.buffer)
  for (let N = 0; N < a; N++) {
    const R = N < c ? u : f
    ;(y[N] = S.slice(m, m + R)),
      (E[N] = p.encode(y[N])),
      (m += R),
      (g = Math.max(g, R))
  }
  const v = new Uint8Array(r)
  let w = 0,
    I,
    A
  for (I = 0; I < g; I++)
    for (A = 0; A < a; A++) I < y[A].length && (v[w++] = y[A][I])
  for (I = 0; I < d; I++) for (A = 0; A < a; A++) v[w++] = E[A][I]
  return v
}
function sA (e, t, n, r) {
  let o
  if (Array.isArray(e)) o = so.fromArray(e)
  else if (typeof e == 'string') {
    let l = t
    if (!l) {
      const u = so.rawSplit(e)
      l = gr.getBestVersionForData(u, n)
    }
    o = so.fromString(e, l || 40)
  } else throw new Error('Invalid data')
  const i = gr.getBestVersionForData(o, n)
  if (!i)
    throw new Error('The amount of data is too big to be stored in a QR Code')
  if (!t) t = i
  else if (t < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
        i +
        `.
`
    )
  const a = iA(t, n, o),
    s = Jr.getSymbolSize(t),
    c = new KC(s)
  return (
    eA(c, t),
    tA(c),
    nA(c, t),
    co(c, n, 0),
    t >= 7 && rA(c, t),
    oA(c, a),
    isNaN(r) && (r = Uo.getBestMask(c, co.bind(null, c, n))),
    Uo.applyMask(r, c),
    co(c, n, r),
    {
      modules: c,
      version: t,
      errorCorrectionLevel: n,
      maskPattern: r,
      segments: o
    }
  )
}
Kc.create = function (e, t) {
  if (typeof e > 'u' || e === '') throw new Error('No input text')
  let n = ao.M,
    r,
    o
  return (
    typeof t < 'u' &&
      ((n = ao.from(t.errorCorrectionLevel, ao.M)),
      (r = gr.from(t.version)),
      (o = Uo.from(t.maskPattern)),
      t.toSJISFunc && Jr.setToSJISFunction(t.toSJISFunc)),
    sA(e, r, n, o)
  )
}
var sl = {},
  Ii = {}
;(function (e) {
  function t (n) {
    if ((typeof n == 'number' && (n = n.toString()), typeof n != 'string'))
      throw new Error('Color should be defined as hex string')
    let r = n.slice().replace('#', '').split('')
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error('Invalid hex color: ' + n)
    ;(r.length === 3 || r.length === 4) &&
      (r = Array.prototype.concat.apply(
        [],
        r.map(function (i) {
          return [i, i]
        })
      )),
      r.length === 6 && r.push('F', 'F')
    const o = parseInt(r.join(''), 16)
    return {
      r: (o >> 24) & 255,
      g: (o >> 16) & 255,
      b: (o >> 8) & 255,
      a: o & 255,
      hex: '#' + r.slice(0, 6).join('')
    }
  }
  ;(e.getOptions = function (n) {
    n || (n = {}), n.color || (n.color = {})
    const r =
        typeof n.margin > 'u' || n.margin === null || n.margin < 0
          ? 4
          : n.margin,
      o = n.width && n.width >= 21 ? n.width : void 0,
      i = n.scale || 4
    return {
      width: o,
      scale: o ? 4 : i,
      margin: r,
      color: {
        dark: t(n.color.dark || '#000000ff'),
        light: t(n.color.light || '#ffffffff')
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {}
    }
  }),
    (e.getScale = function (n, r) {
      return r.width && r.width >= n + r.margin * 2
        ? r.width / (n + r.margin * 2)
        : r.scale
    }),
    (e.getImageWidth = function (n, r) {
      const o = e.getScale(n, r)
      return Math.floor((n + r.margin * 2) * o)
    }),
    (e.qrToImageData = function (n, r, o) {
      const i = r.modules.size,
        a = r.modules.data,
        s = e.getScale(i, o),
        c = Math.floor((i + o.margin * 2) * s),
        l = o.margin * s,
        u = [o.color.light, o.color.dark]
      for (let f = 0; f < c; f++)
        for (let d = 0; d < c; d++) {
          let p = (f * c + d) * 4,
            m = o.color.light
          if (f >= l && d >= l && f < c - l && d < c - l) {
            const y = Math.floor((f - l) / s),
              E = Math.floor((d - l) / s)
            m = u[a[y * i + E] ? 1 : 0]
          }
          ;(n[p++] = m.r), (n[p++] = m.g), (n[p++] = m.b), (n[p] = m.a)
        }
    })
})(Ii)
;(function (e) {
  const t = Ii
  function n (o, i, a) {
    o.clearRect(0, 0, i.width, i.height),
      i.style || (i.style = {}),
      (i.height = a),
      (i.width = a),
      (i.style.height = a + 'px'),
      (i.style.width = a + 'px')
  }
  function r () {
    try {
      return document.createElement('canvas')
    } catch {
      throw new Error('You need to specify a canvas element')
    }
  }
  ;(e.render = function (o, i, a) {
    let s = a,
      c = i
    typeof s > 'u' && (!i || !i.getContext) && ((s = i), (i = void 0)),
      i || (c = r()),
      (s = t.getOptions(s))
    const l = t.getImageWidth(o.modules.size, s),
      u = c.getContext('2d'),
      f = u.createImageData(l, l)
    return t.qrToImageData(f.data, o, s), n(u, c, l), u.putImageData(f, 0, 0), c
  }),
    (e.renderToDataURL = function (o, i, a) {
      let s = a
      typeof s > 'u' && (!i || !i.getContext) && ((s = i), (i = void 0)),
        s || (s = {})
      const c = e.render(o, i, s),
        l = s.type || 'image/png',
        u = s.rendererOpts || {}
      return c.toDataURL(l, u.quality)
    })
})(sl)
var cl = {}
const cA = Ii
function ts (e, t) {
  const n = e.a / 255,
    r = t + '="' + e.hex + '"'
  return n < 1 ? r + ' ' + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
}
function lo (e, t, n) {
  let r = e + t
  return typeof n < 'u' && (r += ' ' + n), r
}
function lA (e, t, n) {
  let r = '',
    o = 0,
    i = !1,
    a = 0
  for (let s = 0; s < e.length; s++) {
    const c = Math.floor(s % t),
      l = Math.floor(s / t)
    !c && !i && (i = !0),
      e[s]
        ? (a++,
          (s > 0 && c > 0 && e[s - 1]) ||
            ((r += i ? lo('M', c + n, 0.5 + l + n) : lo('m', o, 0)),
            (o = 0),
            (i = !1)),
          (c + 1 < t && e[s + 1]) || ((r += lo('h', a)), (a = 0)))
        : o++
  }
  return r
}
cl.render = function (e, t, n) {
  const r = cA.getOptions(t),
    o = e.modules.size,
    i = e.modules.data,
    a = o + r.margin * 2,
    s = r.color.light.a
      ? '<path ' +
        ts(r.color.light, 'fill') +
        ' d="M0 0h' +
        a +
        'v' +
        a +
        'H0z"/>'
      : '',
    c =
      '<path ' +
      ts(r.color.dark, 'stroke') +
      ' d="' +
      lA(i, o, r.margin) +
      '"/>',
    l = 'viewBox="0 0 ' + a + ' ' + a + '"',
    u =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : '') +
      l +
      ' shape-rendering="crispEdges">' +
      s +
      c +
      `</svg>
`
  return typeof n == 'function' && n(null, u), u
}
const uA = bC,
  Fo = Kc,
  ll = sl,
  dA = cl
function Ci (e, t, n, r, o) {
  const i = [].slice.call(arguments, 1),
    a = i.length,
    s = typeof i[a - 1] == 'function'
  if (!s && !uA()) throw new Error('Callback required as last argument')
  if (s) {
    if (a < 2) throw new Error('Too few arguments provided')
    a === 2
      ? ((o = n), (n = t), (t = r = void 0))
      : a === 3 &&
        (t.getContext && typeof o > 'u'
          ? ((o = r), (r = void 0))
          : ((o = r), (r = n), (n = t), (t = void 0)))
  } else {
    if (a < 1) throw new Error('Too few arguments provided')
    return (
      a === 1
        ? ((n = t), (t = r = void 0))
        : a === 2 && !t.getContext && ((r = n), (n = t), (t = void 0)),
      new Promise(function (c, l) {
        try {
          const u = Fo.create(n, r)
          c(e(u, t, r))
        } catch (u) {
          l(u)
        }
      })
    )
  }
  try {
    const c = Fo.create(n, r)
    o(null, e(c, t, r))
  } catch (c) {
    o(c)
  }
}
Un.create = Fo.create
Un.toCanvas = Ci.bind(null, ll.render)
Un.toDataURL = Ci.bind(null, ll.renderToDataURL)
Un.toString = Ci.bind(null, function (e, t, n) {
  return dA.render(e, n)
})
const fA = { key: 0 },
  pA = ['src'],
  hA = { 'data-amplify-copy-tooltip': '' },
  mA = j(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      j('path', {
        d: 'M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z'
      })
    ],
    -1
  ),
  gA = ee({
    __name: 'setup-totp',
    setup (e) {
      const t = new yr('SetupTotp-logger'),
        n = Ae(),
        {
          updateForm: r,
          submitForm: o,
          toSignIn: i,
          totpSecretCode: a,
          username: s,
          QRFields: c
        } = n,
        { error: l, isPending: u } = ae(n),
        { totpIssuer: f = 'AWSCognito', totpUsername: d = s } = c ?? {},
        p = Of(f, d, a),
        m = ds({ qrCodeImageSource: '', isLoading: !0 }),
        {
          getCopyText: y,
          getCopiedText: E,
          getBackToSignInText: g,
          getConfirmText: S
        } = Oe,
        v = ye(y())
      function w () {
        a && navigator.clipboard.writeText(a), (v.value = E())
      }
      Sr(async () => {
        try {
          m.qrCodeImageSource = await Un.toDataURL(p)
        } catch (F) {
          t.error(F)
        } finally {
          m.isLoading = !1
        }
      })
      const I = L(() => g()),
        A = L(() => S()),
        N = F => {
          const { name: M, value: k } = F.target
          r({ name: M, value: k })
        },
        R = F => {
          o(Ve(F))
        },
        O = () => {
          i()
        }
      return (F, M) => {
        const k = pt,
          W = Ce,
          de = qe,
          Te = Fe,
          Re = je,
          fe = We,
          De = $e
        return x(F.$slots, 'confirmSetupTotpI', ce(le(F.$attrs)), () => [
          b(
            W,
            ce(le(F.$attrs)),
            {
              default: _(() => [
                b(
                  De,
                  {
                    'data-amplify-authenticator-setup-totp': '',
                    onInput: N,
                    onSubmit: me(R, ['prevent'])
                  },
                  {
                    default: _(() => [
                      b(
                        fe,
                        {
                          class: 'amplify-flex amplify-authenticator__column',
                          disabled: h(u)
                        },
                        {
                          default: _(() => [
                            b(
                              W,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                default: _(() => [
                                  x(F.$slots, 'header', {}, () => [
                                    b(
                                      k,
                                      { class: 'amplify-heading', level: 3 },
                                      {
                                        default: _(() => [B(' Setup TOTP ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  b(
                                    W,
                                    {
                                      class:
                                        'amplify-flex amplify-authenticator__column'
                                    },
                                    {
                                      default: _(() => [
                                        m.isLoading
                                          ? (P(), ie('p', fA, 'Loading...'))
                                          : (P(),
                                            ie(
                                              'img',
                                              {
                                                key: 1,
                                                class: 'amplify-image',
                                                'data-amplify-qrcode': '',
                                                src: m.qrCodeImageSource,
                                                alt: 'qr code',
                                                width: '228',
                                                height: '228'
                                              },
                                              null,
                                              8,
                                              pA
                                            )),
                                        b(
                                          W,
                                          {
                                            class: 'amplify-flex',
                                            'data-amplify-copy': ''
                                          },
                                          {
                                            default: _(() => [
                                              j('div', null, D(h(a)), 1),
                                              b(
                                                W,
                                                {
                                                  'data-amplify-copy-svg': '',
                                                  onClick: w
                                                },
                                                {
                                                  default: _(() => [
                                                    j('div', hA, D(v.value), 1),
                                                    mA
                                                  ]),
                                                  _: 1
                                                }
                                              )
                                            ]),
                                            _: 1
                                          }
                                        ),
                                        b(nt, { route: 'setupTotp' })
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  b(
                                    Re,
                                    {
                                      class:
                                        'amplify-flex amplify-authenticator__column'
                                    },
                                    {
                                      default: _(() => [
                                        h(l)
                                          ? (P(),
                                            q(
                                              de,
                                              { key: 0 },
                                              {
                                                default: _(() => [
                                                  B(D(h(U)(h(l))), 1)
                                                ]),
                                                _: 1
                                              }
                                            ))
                                          : G('', !0),
                                        b(
                                          Te,
                                          {
                                            class:
                                              'amplify-field-group__control amplify-authenticator__font',
                                            fullwidth: !1,
                                            loading: !1,
                                            variation: 'primary',
                                            type: 'submit',
                                            disabled: h(u)
                                          },
                                          {
                                            default: _(() => [B(D(h(A)), 1)]),
                                            _: 1
                                          },
                                          8,
                                          ['disabled']
                                        ),
                                        b(
                                          Te,
                                          {
                                            class:
                                              'amplify-field-group__control amplify-authenticator__font',
                                            fullwidth: !1,
                                            size: 'small',
                                            variation: 'link',
                                            style: { 'font-weight': 'normal' },
                                            type: 'button',
                                            onClick: me(O, ['prevent'])
                                          },
                                          {
                                            default: _(() => [B(D(h(I)), 1)]),
                                            _: 1
                                          },
                                          8,
                                          ['onClick']
                                        ),
                                        x(F.$slots, 'footer')
                                      ]),
                                      _: 3
                                    }
                                  )
                                ]),
                                _: 3
                              }
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['disabled']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['onSubmit']
                )
              ]),
              _: 3
            },
            16
          )
        ])
      }
    }
  }),
  yA = ee({
    __name: 'authenticator-force-new-password-form-fields',
    setup (e) {
      return (t, n) => (P(), q(nt, { route: 'forceNewPassword' }))
    }
  }),
  vA = ee({
    __name: 'force-new-password',
    setup (e) {
      const t = Ae(),
        { submitForm: n, toSignIn: r, updateBlur: o, updateForm: i } = t,
        { error: a, isPending: s } = ae(t),
        {
          getChangePasswordText: c,
          getChangingText: l,
          getBackToSignInText: u
        } = Oe,
        f = L(() => c()),
        d = L(() => l()),
        p = L(() => u()),
        m = () => {
          r()
        },
        y = v => {
          E(v)
        },
        E = v => {
          n(Ve(v))
        },
        g = v => {
          const { name: w, value: I } = v.target
          i({ name: w, value: I })
        }
      function S (v) {
        const { name: w } = v.target
        o({ name: w })
      }
      return (v, w) => {
        const I = pt,
          A = Ce,
          N = qe,
          R = Fe,
          O = je,
          F = We,
          M = $e
        return x(v.$slots, 'forceNewPasswordI', ce(le(v.$attrs)), () => [
          b(
            A,
            ce(le(v.$attrs)),
            {
              default: _(() => [
                b(
                  M,
                  {
                    'data-amplify-authenticator-forcenewpassword': '',
                    onInput: g,
                    onBlurCapture: S,
                    onSubmit: me(y, ['prevent'])
                  },
                  {
                    default: _(() => [
                      b(
                        F,
                        {
                          class: 'amplify-flex amplify-authenticator__column',
                          disabled: h(s)
                        },
                        {
                          default: _(() => [
                            x(v.$slots, 'header', {}, () => [
                              b(
                                I,
                                { level: 3, class: 'amplify-heading' },
                                { default: _(() => [B(D(h(f)), 1)]), _: 1 }
                              )
                            ]),
                            b(
                              A,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                default: _(() => [
                                  x(
                                    v.$slots,
                                    'force-new-password-form-fields',
                                    {},
                                    () => [b(yA)]
                                  )
                                ]),
                                _: 3
                              }
                            ),
                            b(
                              O,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                default: _(() => [
                                  h(a)
                                    ? (P(),
                                      q(
                                        N,
                                        { key: 0, 'data-ui-error': '' },
                                        {
                                          default: _(() => [
                                            B(D(h(U)(h(a))), 1)
                                          ]),
                                          _: 1
                                        }
                                      ))
                                    : G('', !0),
                                  b(
                                    R,
                                    {
                                      class:
                                        'amplify-field-group__control amplify-authenticator__font',
                                      fullwidth: !1,
                                      loading: !1,
                                      variation: 'primary',
                                      style: { 'font-weight': 'normal' },
                                      disabled: h(s)
                                    },
                                    {
                                      default: _(() => [
                                        B(D(h(s) ? h(d) + '…' : h(f)), 1)
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['disabled']
                                  ),
                                  b(
                                    R,
                                    {
                                      class:
                                        'amplify-field-group__control amplify-authenticator__font',
                                      fullwidth: !1,
                                      size: 'small',
                                      variation: 'link',
                                      style: { 'font-weight': 'normal' },
                                      type: 'button',
                                      onClick: me(m, ['prevent'])
                                    },
                                    { default: _(() => [B(D(h(p)), 1)]), _: 1 },
                                    8,
                                    ['onClick']
                                  ),
                                  x(v.$slots, 'footer', {
                                    onHaveAccountClicked: m,
                                    onForceNewPasswordSubmit: y
                                  })
                                ]),
                                _: 3
                              }
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['disabled']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['onSubmit']
                )
              ]),
              _: 3
            },
            16
          )
        ])
      }
    }
  }),
  _A = ee({
    __name: 'forgot-password',
    setup (e) {
      const t = Ae(),
        { submitForm: n, toSignIn: r, updateForm: o } = t,
        { error: i, isPending: a } = ae(t),
        {
          getBackToSignInText: s,
          getResetYourPasswordText: c,
          getSendCodeText: l
        } = Oe,
        u = L(() => s()),
        f = L(() => c()),
        d = L(() => l()),
        p = E => {
          n(Ve(E))
        },
        m = E => {
          const { name: g, value: S } = E.target
          o({ name: g, value: S })
        },
        y = () => {
          r()
        }
      return (E, g) => {
        const S = pt,
          v = We,
          w = qe,
          I = Fe,
          A = je,
          N = Ce,
          R = $e
        return x(E.$slots, 'forgotPasswordSlotI', ce(le(E.$attrs)), () => [
          b(
            R,
            Me(E.$attrs, {
              'data-amplify-authenticator-forgotpassword': '',
              onInput: m,
              onSubmit: me(p, ['prevent'])
            }),
            {
              default: _(() => [
                b(
                  N,
                  { class: 'amplify-flex amplify-authenticator__column' },
                  {
                    default: _(() => [
                      x(E.$slots, 'header', {}, () => [
                        b(
                          S,
                          { class: 'amplify-heading', level: 3 },
                          { default: _(() => [B(D(h(f)), 1)]), _: 1 }
                        )
                      ]),
                      b(
                        v,
                        {
                          class: 'amplify-flex amplify-authenticator__column',
                          disabled: h(a)
                        },
                        {
                          default: _(() => [
                            b(nt, { route: 'forgotPassword' })
                          ]),
                          _: 1
                        },
                        8,
                        ['disabled']
                      ),
                      b(
                        A,
                        { class: 'amplify-flex amplify-authenticator__column' },
                        {
                          default: _(() => [
                            h(i)
                              ? (P(),
                                q(
                                  w,
                                  { key: 0 },
                                  {
                                    default: _(() => [B(D(h(U)(h(i))), 1)]),
                                    _: 1
                                  }
                                ))
                              : G('', !0),
                            b(
                              I,
                              {
                                class:
                                  'amplify-field-group__control amplify-authenticator__font',
                                fullwidth: !1,
                                variation: 'primary',
                                type: 'submit',
                                disabled: h(a)
                              },
                              { default: _(() => [B(D(h(d)), 1)]), _: 1 },
                              8,
                              ['disabled']
                            ),
                            b(
                              I,
                              {
                                class:
                                  'amplify-field-group__control amplify-authenticator__font',
                                fullwidth: !1,
                                size: 'small',
                                variation: 'link',
                                style: { 'font-weight': 'normal' },
                                type: 'button',
                                onClick: me(y, ['prevent'])
                              },
                              { default: _(() => [B(D(h(u)), 1)]), _: 1 },
                              8,
                              ['onClick']
                            ),
                            x(E.$slots, 'footer', {
                              onBackToSignInClicked: y,
                              onResetPasswordSubmit: p
                            })
                          ]),
                          _: 3
                        }
                      )
                    ]),
                    _: 3
                  }
                )
              ]),
              _: 3
            },
            16,
            ['onSubmit']
          )
        ])
      }
    }
  }),
  SA = ee({
    __name: 'confirm-reset-password',
    setup (e) {
      const t = Ae(),
        { resendCode: n, submitForm: r, updateBlur: o, updateForm: i } = t,
        { error: a, isPending: s } = ae(t),
        {
          getResendCodeText: c,
          getResetYourPasswordText: l,
          getSubmitText: u
        } = Oe,
        f = L(() => c()),
        d = L(() => l()),
        p = L(() => u()),
        m = v => {
          y(v)
        },
        y = v => {
          r(Ve(v))
        },
        E = () => {
          n()
        },
        g = v => {
          const { name: w, value: I } = v.target
          i({ name: w, value: I })
        }
      function S (v) {
        const { name: w } = v.target
        o({ name: w })
      }
      return (v, w) => {
        const I = pt,
          A = Ce,
          N = qe,
          R = Fe,
          O = je,
          F = We,
          M = $e
        return x(
          v.$slots,
          'confirmResetPasswordSlotI',
          ce(le(v.$attrs)),
          () => [
            b(
              A,
              ce(le(v.$attrs)),
              {
                default: _(() => [
                  b(
                    M,
                    {
                      'data-amplify-authenticator-confirmResetpassword': '',
                      onInput: g,
                      onBlurCapture: S,
                      onSubmit: me(m, ['prevent'])
                    },
                    {
                      default: _(() => [
                        b(
                          F,
                          {
                            class: 'amplify-flex amplify-authenticator__column',
                            disabled: h(s)
                          },
                          {
                            default: _(() => [
                              x(v.$slots, 'header', {}, () => [
                                b(
                                  I,
                                  { class: 'amplify-heading', level: 3 },
                                  { default: _(() => [B(D(h(d)), 1)]), _: 1 }
                                )
                              ]),
                              b(
                                A,
                                {
                                  class:
                                    'amplify-flex amplify-authenticator__column'
                                },
                                {
                                  default: _(() => [
                                    b(nt, { route: 'confirmResetPassword' })
                                  ]),
                                  _: 1
                                }
                              ),
                              b(
                                O,
                                {
                                  class:
                                    'amplify-flex amplify-authenticator__column'
                                },
                                {
                                  default: _(() => [
                                    h(a)
                                      ? (P(),
                                        q(
                                          N,
                                          { key: 0 },
                                          {
                                            default: _(() => [
                                              B(D(h(U)(h(a))), 1)
                                            ]),
                                            _: 1
                                          }
                                        ))
                                      : G('', !0),
                                    b(
                                      R,
                                      {
                                        class:
                                          'amplify-field-group__control amplify-authenticator__font',
                                        variation: 'primary',
                                        fullwidth: !1,
                                        type: 'submit',
                                        disabled: h(s)
                                      },
                                      {
                                        default: _(() => [B(D(h(p)), 1)]),
                                        _: 1
                                      },
                                      8,
                                      ['disabled']
                                    ),
                                    b(
                                      R,
                                      {
                                        class:
                                          'amplify-field-group__control amplify-authenticator__font',
                                        variation: 'link',
                                        fullwidth: !1,
                                        size: 'small',
                                        type: 'button',
                                        onClick: me(E, ['prevent'])
                                      },
                                      {
                                        default: _(() => [B(D(h(f)), 1)]),
                                        _: 1
                                      },
                                      8,
                                      ['onClick']
                                    ),
                                    x(v.$slots, 'footer')
                                  ]),
                                  _: 3
                                }
                              )
                            ]),
                            _: 3
                          },
                          8,
                          ['disabled']
                        )
                      ]),
                      _: 3
                    },
                    8,
                    ['onSubmit']
                  )
                ]),
                _: 3
              },
              16
            )
          ]
        )
      }
    }
  }),
  EA = ee({
    __name: 'verify-user',
    setup (e) {
      const t = Ae(),
        { isPending: n, unverifiedUserAttributes: r, error: o } = ae(t),
        { skipVerification: i, submitForm: a, updateForm: s } = t,
        {
          getAccountRecoveryInfoText: c,
          getSkipText: l,
          getVerifyText: u,
          getVerifyContactText: f
        } = Oe,
        d = L(() => c()),
        p = L(() => l()),
        m = L(() => u()),
        y = L(() => f()),
        E = w => {
          const { name: I, value: A } = w.target
          s({ name: I, value: A })
        },
        g = w => {
          S(w)
        },
        S = w => {
          a(Ve(w))
        },
        v = () => {
          i()
        }
      return (w, I) => {
        const A = pt,
          N = Si,
          R = Gc,
          O = _i,
          F = Ce,
          M = qe,
          k = Fe,
          W = je,
          de = We,
          Te = $e
        return x(w.$slots, 'verifyUserSlotI', {}, () => [
          b(F, null, {
            default: _(() => [
              b(
                Te,
                { onInput: E, onSubmit: me(g, ['prevent']) },
                {
                  default: _(() => [
                    b(
                      de,
                      {
                        disabled: h(n),
                        class: 'amplify-flex amplify-authenticator__column'
                      },
                      {
                        default: _(() => [
                          x(w.$slots, 'header', {}, () => [
                            b(
                              A,
                              { class: 'amplify-heading', level: 3 },
                              { default: _(() => [B(D(h(d)), 1)]), _: 1 }
                            )
                          ]),
                          b(
                            F,
                            {
                              class:
                                'amplify-flex amplify-field amplify-radiogroupfield amplify-authenticator__column'
                            },
                            {
                              default: _(() => [
                                b(
                                  N,
                                  {
                                    class:
                                      'amplify-visually-hidden amplify-label',
                                    id: 'amplify-field-493c'
                                  },
                                  { default: _(() => [B(D(h(y)), 1)]), _: 1 }
                                ),
                                b(
                                  F,
                                  {
                                    class:
                                      'amplify-flex amplify-field amplify-radiogroupfield amplify-authenticator__column',
                                    'aria-labelledby': 'amplify-field-493c'
                                  },
                                  {
                                    default: _(() => [
                                      (P(!0),
                                      ie(
                                        vt,
                                        null,
                                        Er(
                                          h(r),
                                          (Re, fe) => (
                                            P(),
                                            ie(
                                              vt,
                                              { key: Re },
                                              [
                                                Re
                                                  ? (P(),
                                                    q(
                                                      N,
                                                      {
                                                        key: 0,
                                                        class:
                                                          'amplify-flex amplify-radio',
                                                        'data-amplify-verify-label':
                                                          ''
                                                      },
                                                      {
                                                        default: _(() => [
                                                          b(
                                                            R,
                                                            {
                                                              class:
                                                                'amplify-text amplify-radio__label'
                                                            },
                                                            {
                                                              default: _(() => [
                                                                B(
                                                                  D(
                                                                    h(U)(
                                                                      h(yn)[fe]
                                                                        .label
                                                                    )
                                                                  ) +
                                                                    ': ' +
                                                                    D(
                                                                      h(Mf)(
                                                                        h(yn)[
                                                                          fe
                                                                        ].label,
                                                                        Re
                                                                      )
                                                                    ),
                                                                  1
                                                                )
                                                              ]),
                                                              _: 2
                                                            },
                                                            1024
                                                          ),
                                                          b(
                                                            O,
                                                            {
                                                              class:
                                                                'amplify-input amplify-field-group__control amplify-visually-hidden amplify-radio__input',
                                                              'aria-invalid':
                                                                'false',
                                                              'data-amplify-verify-input':
                                                                '',
                                                              name: 'unverifiedAttr',
                                                              type: 'radio',
                                                              value: fe
                                                            },
                                                            null,
                                                            8,
                                                            ['value']
                                                          ),
                                                          b(R, {
                                                            class:
                                                              'amplify-flex amplify-radio__button',
                                                            'aria-hidden':
                                                              'true'
                                                          })
                                                        ]),
                                                        _: 2
                                                      },
                                                      1024
                                                    ))
                                                  : G('', !0)
                                              ],
                                              64
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          b(
                            W,
                            {
                              class:
                                'amplify-flex amplify-authenticator__column'
                            },
                            {
                              default: _(() => [
                                h(o)
                                  ? (P(),
                                    q(
                                      M,
                                      { key: 0 },
                                      {
                                        default: _(() => [B(D(h(U)(h(o))), 1)]),
                                        _: 1
                                      }
                                    ))
                                  : G('', !0),
                                b(
                                  k,
                                  {
                                    class:
                                      'amplify-field-group__control amplify-authenticator__font',
                                    fullwidth: !1,
                                    variation: 'primary',
                                    type: 'submit',
                                    disabled: h(n)
                                  },
                                  { default: _(() => [B(D(h(m)), 1)]), _: 1 },
                                  8,
                                  ['disabled']
                                ),
                                b(
                                  k,
                                  {
                                    class:
                                      'amplify-field-group__control amplify-authenticator__font',
                                    fullwidth: !1,
                                    size: 'small',
                                    variation: 'link',
                                    style: { 'font-weight': 'normal' },
                                    type: 'button',
                                    onClick: me(v, ['prevent'])
                                  },
                                  { default: _(() => [B(D(h(p)), 1)]), _: 1 },
                                  8,
                                  ['onClick']
                                ),
                                x(w.$slots, 'footer')
                              ]),
                              _: 3
                            }
                          )
                        ]),
                        _: 3
                      },
                      8,
                      ['disabled']
                    )
                  ]),
                  _: 3
                },
                8,
                ['onSubmit']
              )
            ]),
            _: 3
          })
        ])
      }
    }
  }),
  wA = ee({
    __name: 'confirm-verify-user',
    setup (e) {
      const t = Ae(),
        { error: n, isPending: r } = ae(t),
        { skipVerification: o, submitForm: i, updateForm: a } = t,
        {
          getAccountRecoveryInfoText: s,
          getSkipText: c,
          getSubmitText: l
        } = Oe,
        u = L(() => s()),
        f = L(() => c()),
        d = L(() => l()),
        p = g => {
          const { name: S, value: v } = g.target
          a({ name: S, value: v })
        },
        m = g => {
          y(g)
        },
        y = g => {
          i(Ve(g))
        },
        E = () => {
          o()
        }
      return (g, S) => {
        const v = pt,
          w = Ce,
          I = qe,
          A = Fe,
          N = je,
          R = We,
          O = $e
        return x(g.$slots, 'confirmVerifyUserSlotI', ce(le(g.$attrs)), () => [
          b(
            w,
            ce(le(g.$attrs)),
            {
              default: _(() => [
                b(
                  O,
                  { onInput: p, onSubmit: me(m, ['prevent']) },
                  {
                    default: _(() => [
                      b(
                        R,
                        {
                          class: 'amplify-flex amplify-authenticator__column',
                          disabled: h(r)
                        },
                        {
                          default: _(() => [
                            x(g.$slots, 'header', {}, () => [
                              b(
                                v,
                                { level: 3, class: 'amplify-heading' },
                                { default: _(() => [B(D(h(u)), 1)]), _: 1 }
                              )
                            ]),
                            b(
                              w,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                default: _(() => [
                                  b(nt, { route: 'confirmVerifyUser' })
                                ]),
                                _: 1
                              }
                            ),
                            b(
                              N,
                              {
                                class:
                                  'amplify-flex amplify-authenticator__column'
                              },
                              {
                                default: _(() => [
                                  h(n)
                                    ? (P(),
                                      q(
                                        I,
                                        { key: 0 },
                                        {
                                          default: _(() => [
                                            B(D(h(U)(h(n))), 1)
                                          ]),
                                          _: 1
                                        }
                                      ))
                                    : G('', !0),
                                  b(
                                    A,
                                    {
                                      class:
                                        'amplify-field-group__control amplify-authenticator__font',
                                      fullwidth: !1,
                                      variation: 'primary',
                                      type: 'submit',
                                      disabled: h(r)
                                    },
                                    { default: _(() => [B(D(h(d)), 1)]), _: 1 },
                                    8,
                                    ['disabled']
                                  ),
                                  b(
                                    A,
                                    {
                                      class:
                                        'amplify-field-group__control amplify-authenticator__font',
                                      fullwidth: !1,
                                      size: 'small',
                                      variation: 'link',
                                      style: { 'font-weight': 'normal' },
                                      type: 'button',
                                      onClick: me(E, ['prevent'])
                                    },
                                    { default: _(() => [B(D(h(f)), 1)]), _: 1 },
                                    8,
                                    ['onClick']
                                  ),
                                  x(g.$slots, 'footer')
                                ]),
                                _: 3
                              }
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['disabled']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['onSubmit']
                )
              ]),
              _: 3
            },
            16
          )
        ])
      }
    }
  }),
  bA = ['data-variation'],
  IA = { 'data-amplify-container': '' },
  CA = ['data-amplify-router-content'],
  AA = { key: 1, 'data-amplify-router-content': '' },
  xA = ee({
    __name: 'authenticator',
    props: {
      hideSignUp: { type: Boolean },
      initialState: null,
      loginMechanisms: null,
      services: null,
      signUpAttributes: null,
      variation: { default: 'default' },
      socialProviders: null,
      formFields: null
    },
    setup (e) {
      const t = e,
        {
          initialState: n,
          loginMechanisms: r,
          variation: o,
          services: i,
          signUpAttributes: a,
          socialProviders: s,
          hideSignUp: c,
          formFields: l
        } = ae(t)
      let u
      const f = ye(!1),
        { service: d, send: p, state: m } = vi(),
        y = d.subscribe($ => {
          $.matches('setup') &&
            !f.value &&
            (p({
              type: 'INIT',
              data: {
                initialState: n.value,
                loginMechanisms: r.value,
                socialProviders: s.value,
                signUpAttributes: a.value,
                services: i.value,
                formFields: l.value
              }
            }),
            (f.value = !0))
        }).unsubscribe,
        E = Ae(),
        { route: g, signOut: S, toSignIn: v, toSignUp: w, user: I } = ae(E)
      Sr(() => {
        u = CI({
          componentName: 'Authenticator',
          packageName: 'vue',
          version: vC
        })
      }),
        Fl(() => {
          u(), y()
        })
      const A = ye(),
        N = ye(),
        R = ye(),
        O = ye(),
        F = ye(),
        M = ye(),
        k = ye(),
        W = ye(),
        de = ye(),
        Te = ye(),
        { getSignInTabText: Re, getSignUpTabText: fe } = Oe,
        De = L(() => Re()),
        rt = L(() => fe()),
        It = L(() => g.value === 'signIn' || g.value === 'signUp'),
        xe = L(() =>
          [
            'confirmResetPassword',
            'confirmSignIn',
            'confirmSignUp',
            'confirmVerifyUser',
            'forceNewPassword',
            'forgotPassword',
            'setupTotp',
            'signIn',
            'signUp',
            'verifyUser'
          ].includes(g.value)
        )
      return ($, Ai) => {
        const Ie = yC,
          ot = mC
        return (
          P(),
          ie(
            vt,
            null,
            [
              h(xe)
                ? (P(),
                  ie(
                    'div',
                    Me({ key: 0 }, $.$attrs, {
                      'data-amplify-authenticator': '',
                      'data-variation': h(o)
                    }),
                    [
                      j('div', IA, [
                        x($.$slots, 'header'),
                        j(
                          'div',
                          {
                            'data-amplify-router': '',
                            'data-amplify-router-content': h(It) ? void 0 : ''
                          },
                          [
                            h(It) && !h(c)
                              ? (P(),
                                q(
                                  ot,
                                  { key: 0 },
                                  {
                                    default: _(() => [
                                      b(
                                        Ie,
                                        {
                                          active: h(g) === 'signIn',
                                          id: 'signIn',
                                          label: h(De),
                                          onClick: h(v)
                                        },
                                        null,
                                        8,
                                        ['active', 'label', 'onClick']
                                      ),
                                      b(
                                        Ie,
                                        {
                                          active: h(g) === 'signUp',
                                          id: 'signUp',
                                          label: h(rt),
                                          onClick: h(w)
                                        },
                                        null,
                                        8,
                                        ['active', 'label', 'onClick']
                                      )
                                    ]),
                                    _: 1
                                  }
                                ))
                              : G('', !0),
                            h(It)
                              ? (P(),
                                ie('div', AA, [
                                  h(g) === 'signIn'
                                    ? (P(),
                                      q(
                                        uC,
                                        {
                                          key: 0,
                                          id: 'signIn-panel',
                                          role: 'tabpanel',
                                          class:
                                            'amplify-tabs__panel amplify-tabs__panel--active',
                                          'aria-labelledby': 'signIn-tab',
                                          ref_key: 'signInComponent',
                                          ref: A
                                        },
                                        {
                                          signInSlotI: _(() => [
                                            x($.$slots, 'sign-in')
                                          ]),
                                          form: _(
                                            ({
                                              info: Zr,
                                              onSignInSubmit: ul,
                                              onForgotPasswordClicked: dl,
                                              onInput: fl
                                            }) => [
                                              x($.$slots, 'sign-in-form', {
                                                info: Zr,
                                                onInput: fl,
                                                onSignInSubmit: ul,
                                                onForgotPasswordClicked: dl
                                              })
                                            ]
                                          ),
                                          header: _(() => [
                                            x($.$slots, 'sign-in-header')
                                          ]),
                                          footer: _(() => [
                                            x($.$slots, 'sign-in-footer')
                                          ]),
                                          _: 3
                                        },
                                        512
                                      ))
                                    : G('', !0),
                                  h(g) === 'signUp' && !h(c)
                                    ? (P(),
                                      q(
                                        fC,
                                        {
                                          key: 1,
                                          id: 'signUp-panel',
                                          class:
                                            'amplify-tabs__panel amplify-tabs__panel--active',
                                          role: 'tabpanel',
                                          'aria-labelledby': 'signUp-tab',
                                          ref_key: 'signUpComponent',
                                          ref: N
                                        },
                                        {
                                          signUpSlotI: _(() => [
                                            x($.$slots, 'sign-up')
                                          ]),
                                          header: _(() => [
                                            x($.$slots, 'sign-up-header')
                                          ]),
                                          'signup-fields': _(({ info: Zr }) => [
                                            x($.$slots, 'sign-up-fields', {
                                              info: Zr
                                            })
                                          ]),
                                          footer: _(() => [
                                            x($.$slots, 'sign-up-footer')
                                          ]),
                                          _: 3
                                        },
                                        512
                                      ))
                                    : G('', !0)
                                ]))
                              : G('', !0),
                            h(g) === 'confirmSignUp'
                              ? (P(),
                                q(
                                  EC,
                                  {
                                    key: 2,
                                    ref_key: 'confirmSignUpComponent',
                                    ref: R
                                  },
                                  {
                                    confirmSignUpSlotI: _(() => [
                                      x($.$slots, 'confirm-sign-up')
                                    ]),
                                    header: _(() => [
                                      x($.$slots, 'confirm-sign-up-header')
                                    ]),
                                    footer: _(() => [
                                      x($.$slots, 'confirm-sign-up-footer')
                                    ]),
                                    _: 3
                                  },
                                  512
                                ))
                              : G('', !0),
                            h(g) === 'forgotPassword'
                              ? (P(),
                                q(
                                  _A,
                                  {
                                    key: 3,
                                    ref_key: 'ForgotPasswordComponent',
                                    ref: k
                                  },
                                  {
                                    forgotPasswordSlotI: _(() => [
                                      x($.$slots, 'forgot-password')
                                    ]),
                                    header: _(() => [
                                      x($.$slots, 'forgot-password-header')
                                    ]),
                                    footer: _(() => [
                                      x($.$slots, 'forgot-password-footer')
                                    ]),
                                    _: 3
                                  },
                                  512
                                ))
                              : G('', !0),
                            h(g) === 'confirmResetPassword'
                              ? (P(),
                                q(
                                  SA,
                                  {
                                    key: 4,
                                    ref_key: 'confirmResetPasswordComponent',
                                    ref: W
                                  },
                                  {
                                    confirmResetPasswordSlotI: _(() => [
                                      x($.$slots, 'confirm-reset-password')
                                    ]),
                                    header: _(() => [
                                      x(
                                        $.$slots,
                                        'confirm-reset-password-header'
                                      )
                                    ]),
                                    footer: _(() => [
                                      x(
                                        $.$slots,
                                        'confirm-reset-password-footer'
                                      )
                                    ]),
                                    _: 3
                                  },
                                  512
                                ))
                              : G('', !0),
                            h(g) === 'confirmSignIn'
                              ? (P(),
                                q(
                                  wC,
                                  {
                                    key: 5,
                                    ref_key: 'confirmSignInComponent',
                                    ref: O
                                  },
                                  {
                                    confirmSignInSlotI: _(() => [
                                      x($.$slots, 'confirm-sign-in')
                                    ]),
                                    header: _(() => [
                                      x($.$slots, 'confirm-sign-in-header')
                                    ]),
                                    footer: _(() => [
                                      x($.$slots, 'confirm-sign-in-footer')
                                    ]),
                                    _: 3
                                  },
                                  512
                                ))
                              : G('', !0),
                            h(g) === 'setupTotp'
                              ? (P(),
                                q(
                                  gA,
                                  {
                                    key: 6,
                                    ref_key: 'confirmSetupTotpComponent',
                                    ref: F
                                  },
                                  {
                                    confirmSetupTotpI: _(() => [
                                      x($.$slots, 'setup-totp')
                                    ]),
                                    header: _(() => [
                                      x($.$slots, 'setup-totp-header')
                                    ]),
                                    footer: _(() => [
                                      x($.$slots, 'setup-totp-footer')
                                    ]),
                                    _: 3
                                  },
                                  512
                                ))
                              : G('', !0),
                            h(g) === 'forceNewPassword'
                              ? (P(),
                                q(
                                  vA,
                                  {
                                    key: 7,
                                    ref_key: 'forceNewPasswordComponent',
                                    ref: M
                                  },
                                  {
                                    forceNewPasswordI: _(() => [
                                      x($.$slots, 'force-new-password')
                                    ]),
                                    header: _(() => [
                                      x($.$slots, 'force-new-password-header')
                                    ]),
                                    'force-new-password-form-fields': _(() => [
                                      x(
                                        $.$slots,
                                        'force-new-password-form-fields'
                                      )
                                    ]),
                                    footer: _(() => [
                                      x($.$slots, 'force-new-password-footer')
                                    ]),
                                    _: 3
                                  },
                                  512
                                ))
                              : G('', !0),
                            h(g) === 'verifyUser'
                              ? (P(),
                                q(
                                  EA,
                                  {
                                    key: 8,
                                    ref_key: 'verifyUserComponent',
                                    ref: de
                                  },
                                  {
                                    verifyUserSlotI: _(() => [
                                      x($.$slots, 'verify-user')
                                    ]),
                                    header: _(() => [
                                      x($.$slots, 'verify-user-header')
                                    ]),
                                    footer: _(() => [
                                      x($.$slots, 'verify-user-footer')
                                    ]),
                                    _: 3
                                  },
                                  512
                                ))
                              : G('', !0),
                            h(g) === 'confirmVerifyUser'
                              ? (P(),
                                q(
                                  wA,
                                  {
                                    key: 9,
                                    ref_key: 'confirmVerifyUserComponent',
                                    ref: Te
                                  },
                                  {
                                    confirmVerifyUserSlotI: _(() => [
                                      x($.$slots, 'confirm-verify-user')
                                    ]),
                                    header: _(() => [
                                      x($.$slots, 'confirm-verify-user-header')
                                    ]),
                                    footer: _(() => [
                                      x($.$slots, 'confirm-verify-user-footer')
                                    ]),
                                    _: 3
                                  },
                                  512
                                ))
                              : G('', !0)
                          ],
                          8,
                          CA
                        ),
                        x($.$slots, 'footer')
                      ])
                    ],
                    16,
                    bA
                  ))
                : G('', !0),
              h(g) === 'authenticated'
                ? x($.$slots, 'default', {
                    key: 1,
                    user: h(I),
                    state: h(m),
                    signOut: h(S),
                    send: h(p)
                  })
                : G('', !0)
            ],
            64
          )
        )
      }
    }
  }),
  NA = j(
    'div',
    {
      style: { padding: 'var(--amplify-space-large)', 'text-align': 'center' }
    },
    [
      j('img', {
        src: 'https://solarnative.com/wp-content/uploads/2022/02/solarnative-logo-164x50px.png',
        srcset: `
                https://solarnative.com/wp-content/uploads/2022/02/solarnative-logo-164x50px.png  1x,
                https://solarnative.com/wp-content/uploads/2022/02/solarnative-logo-328x100px.png 2x
              `,
        width: '164',
        height: '50',
        style: { 'max-height': '50px', height: 'auto' },
        alt: 'Solarnative Logo',
        'data-retina_logo_url':
          'https://solarnative.com/wp-content/uploads/2022/02/solarnative-logo-328x100px.png',
        class: 'fusion-standard-logo'
      })
    ],
    -1
  ),
  MA = ee({
    __name: 'login',
    setup (e) {
      const t = us()
      return (
        Sr(async () => {
          try {
            await wn(), t.replace('/')
          } catch (n) {
            console.log(n)
          }
        }),
        (n, r) => {
          const o = Hl,
            i = ql,
            a = Wl,
            s = nf,
            c = zl,
            l = Vl
          return (
            P(),
            q(l, null, {
              default: _(() => [
                b(a, null, {
                  default: _(() => [
                    b(i, null, {
                      default: _(() => [
                        b(o, null, { default: _(() => [B('Login')]), _: 1 })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                b(c, null, {
                  default: _(() => [
                    b(
                      h(xA),
                      { 'social-providers': ['google'] },
                      {
                        header: _(() => [NA]),
                        default: _(({ user: u, signOut: f }) => [b(s)]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          )
        }
      )
    }
  })
export { MA as default }
