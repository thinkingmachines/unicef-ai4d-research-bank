function ab(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n]
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const o in r)
				if (o !== 'default' && !(o in e)) {
					const a = Object.getOwnPropertyDescriptor(r, o)
					a &&
						Object.defineProperty(
							e,
							o,
							a.get ? a : { enumerable: !0, get: () => r[o] }
						)
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
	)
}
;(function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
	new MutationObserver(o => {
		for (const a of o)
			if (a.type === 'childList')
				for (const i of a.addedNodes)
					i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(o) {
		const a = {}
		return (
			o.integrity && (a.integrity = o.integrity),
			o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === 'use-credentials'
				? (a.credentials = 'include')
				: o.crossOrigin === 'anonymous'
				? (a.credentials = 'omit')
				: (a.credentials = 'same-origin'),
			a
		)
	}
	function r(o) {
		if (o.ep) return
		o.ep = !0
		const a = n(o)
		fetch(o.href, a)
	}
})()
var Kr =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {}
function ib(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e
}
var Ul = {},
	v2 = {
		get exports() {
			return Ul
		},
		set exports(e) {
			Ul = e
		}
	},
	jc = {},
	u = {},
	p2 = {
		get exports() {
			return u
		},
		set exports(e) {
			u = e
		}
	},
	pt = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bs = Symbol.for('react.element'),
	m2 = Symbol.for('react.portal'),
	h2 = Symbol.for('react.fragment'),
	g2 = Symbol.for('react.strict_mode'),
	y2 = Symbol.for('react.profiler'),
	b2 = Symbol.for('react.provider'),
	S2 = Symbol.for('react.context'),
	C2 = Symbol.for('react.forward_ref'),
	w2 = Symbol.for('react.suspense'),
	x2 = Symbol.for('react.memo'),
	E2 = Symbol.for('react.lazy'),
	jg = Symbol.iterator
function $2(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (jg && e[jg]) || e['@@iterator']),
		  typeof e == 'function' ? e : null)
}
var lb = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {}
	},
	sb = Object.assign,
	ub = {}
function Vi(e, t, n) {
	;(this.props = e),
		(this.context = t),
		(this.refs = ub),
		(this.updater = n || lb)
}
Vi.prototype.isReactComponent = {}
Vi.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		)
	this.updater.enqueueSetState(this, e, t, 'setState')
}
Vi.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function cb() {}
cb.prototype = Vi.prototype
function km(e, t, n) {
	;(this.props = e),
		(this.context = t),
		(this.refs = ub),
		(this.updater = n || lb)
}
var Tm = (km.prototype = new cb())
Tm.constructor = km
sb(Tm, Vi.prototype)
Tm.isPureReactComponent = !0
var Bg = Array.isArray,
	db = Object.prototype.hasOwnProperty,
	Dm = { current: null },
	fb = { key: !0, ref: !0, __self: !0, __source: !0 }
function vb(e, t, n) {
	var r,
		o = {},
		a = null,
		i = null
	if (t != null)
		for (r in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (a = '' + t.key),
		t))
			db.call(t, r) && !fb.hasOwnProperty(r) && (o[r] = t[r])
	var l = arguments.length - 2
	if (l === 1) o.children = n
	else if (1 < l) {
		for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2]
		o.children = s
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r])
	return { $$typeof: bs, type: e, key: a, ref: i, props: o, _owner: Dm.current }
}
function P2(e, t) {
	return {
		$$typeof: bs,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}
function _m(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === bs
}
function R2(e) {
	var t = { '=': '=0', ':': '=2' }
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n]
		})
	)
}
var Wg = /\/+/g
function Qd(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? R2('' + e.key)
		: t.toString(36)
}
function Ru(e, t, n, r, o) {
	var a = typeof e
	;(a === 'undefined' || a === 'boolean') && (e = null)
	var i = !1
	if (e === null) i = !0
	else
		switch (a) {
			case 'string':
			case 'number':
				i = !0
				break
			case 'object':
				switch (e.$$typeof) {
					case bs:
					case m2:
						i = !0
				}
		}
	if (i)
		return (
			(i = e),
			(o = o(i)),
			(e = r === '' ? '.' + Qd(i, 0) : r),
			Bg(o)
				? ((n = ''),
				  e != null && (n = e.replace(Wg, '$&/') + '/'),
				  Ru(o, t, n, '', function (c) {
						return c
				  }))
				: o != null &&
				  (_m(o) &&
						(o = P2(
							o,
							n +
								(!o.key || (i && i.key === o.key)
									? ''
									: ('' + o.key).replace(Wg, '$&/') + '/') +
								e
						)),
				  t.push(o)),
			1
		)
	if (((i = 0), (r = r === '' ? '.' : r + ':'), Bg(e)))
		for (var l = 0; l < e.length; l++) {
			a = e[l]
			var s = r + Qd(a, l)
			i += Ru(a, t, n, s, o)
		}
	else if (((s = $2(e)), typeof s == 'function'))
		for (e = s.call(e), l = 0; !(a = e.next()).done; )
			(a = a.value), (s = r + Qd(a, l++)), (i += Ru(a, t, n, s, o))
	else if (a === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		)
	return i
}
function js(e, t, n) {
	if (e == null) return e
	var r = [],
		o = 0
	return (
		Ru(e, r, '', '', function (a) {
			return t.call(n, a, o++)
		}),
		r
	)
}
function M2(e) {
	if (e._status === -1) {
		var t = e._result
		;(t = t()),
			t.then(
				function (n) {
					;(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n))
				},
				function (n) {
					;(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n))
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t))
	}
	if (e._status === 1) return e._result.default
	throw e._result
}
var zn = { current: null },
	Mu = { transition: null },
	O2 = {
		ReactCurrentDispatcher: zn,
		ReactCurrentBatchConfig: Mu,
		ReactCurrentOwner: Dm
	}
pt.Children = {
	map: js,
	forEach: function (e, t, n) {
		js(
			e,
			function () {
				t.apply(this, arguments)
			},
			n
		)
	},
	count: function (e) {
		var t = 0
		return (
			js(e, function () {
				t++
			}),
			t
		)
	},
	toArray: function (e) {
		return (
			js(e, function (t) {
				return t
			}) || []
		)
	},
	only: function (e) {
		if (!_m(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			)
		return e
	}
}
pt.Component = Vi
pt.Fragment = h2
pt.Profiler = y2
pt.PureComponent = km
pt.StrictMode = g2
pt.Suspense = w2
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O2
pt.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		)
	var r = sb({}, e.props),
		o = e.key,
		a = e.ref,
		i = e._owner
	if (t != null) {
		if (
			(t.ref !== void 0 && ((a = t.ref), (i = Dm.current)),
			t.key !== void 0 && (o = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps
		for (s in t)
			db.call(t, s) &&
				!fb.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s])
	}
	var s = arguments.length - 2
	if (s === 1) r.children = n
	else if (1 < s) {
		l = Array(s)
		for (var c = 0; c < s; c++) l[c] = arguments[c + 2]
		r.children = l
	}
	return { $$typeof: bs, type: e.type, key: o, ref: a, props: r, _owner: i }
}
pt.createContext = function (e) {
	return (
		(e = {
			$$typeof: S2,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}),
		(e.Provider = { $$typeof: b2, _context: e }),
		(e.Consumer = e)
	)
}
pt.createElement = vb
pt.createFactory = function (e) {
	var t = vb.bind(null, e)
	return (t.type = e), t
}
pt.createRef = function () {
	return { current: null }
}
pt.forwardRef = function (e) {
	return { $$typeof: C2, render: e }
}
pt.isValidElement = _m
pt.lazy = function (e) {
	return { $$typeof: E2, _payload: { _status: -1, _result: e }, _init: M2 }
}
pt.memo = function (e, t) {
	return { $$typeof: x2, type: e, compare: t === void 0 ? null : t }
}
pt.startTransition = function (e) {
	var t = Mu.transition
	Mu.transition = {}
	try {
		e()
	} finally {
		Mu.transition = t
	}
}
pt.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.')
}
pt.useCallback = function (e, t) {
	return zn.current.useCallback(e, t)
}
pt.useContext = function (e) {
	return zn.current.useContext(e)
}
pt.useDebugValue = function () {}
pt.useDeferredValue = function (e) {
	return zn.current.useDeferredValue(e)
}
pt.useEffect = function (e, t) {
	return zn.current.useEffect(e, t)
}
pt.useId = function () {
	return zn.current.useId()
}
pt.useImperativeHandle = function (e, t, n) {
	return zn.current.useImperativeHandle(e, t, n)
}
pt.useInsertionEffect = function (e, t) {
	return zn.current.useInsertionEffect(e, t)
}
pt.useLayoutEffect = function (e, t) {
	return zn.current.useLayoutEffect(e, t)
}
pt.useMemo = function (e, t) {
	return zn.current.useMemo(e, t)
}
pt.useReducer = function (e, t, n) {
	return zn.current.useReducer(e, t, n)
}
pt.useRef = function (e) {
	return zn.current.useRef(e)
}
pt.useState = function (e) {
	return zn.current.useState(e)
}
pt.useSyncExternalStore = function (e, t, n) {
	return zn.current.useSyncExternalStore(e, t, n)
}
pt.useTransition = function () {
	return zn.current.useTransition()
}
pt.version = '18.2.0'
;(function (e) {
	e.exports = pt
})(p2)
const he = ib(u),
	Yl = ab({ __proto__: null, default: he }, [u])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N2 = u,
	I2 = Symbol.for('react.element'),
	k2 = Symbol.for('react.fragment'),
	T2 = Object.prototype.hasOwnProperty,
	D2 = N2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	_2 = { key: !0, ref: !0, __self: !0, __source: !0 }
function pb(e, t, n) {
	var r,
		o = {},
		a = null,
		i = null
	n !== void 0 && (a = '' + n),
		t.key !== void 0 && (a = '' + t.key),
		t.ref !== void 0 && (i = t.ref)
	for (r in t) T2.call(t, r) && !_2.hasOwnProperty(r) && (o[r] = t[r])
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
	return { $$typeof: I2, type: e, key: a, ref: i, props: o, _owner: D2.current }
}
jc.Fragment = k2
jc.jsx = pb
jc.jsxs = pb
;(function (e) {
	e.exports = jc
})(v2)
const mv = Ul.Fragment,
	U = Ul.jsx,
	ce = Ul.jsxs
function Tn(e, t) {
	if (!(e instanceof t))
		throw new TypeError('Cannot call a class as a function')
}
function Ze(e) {
	return (
		(Ze =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t
				  }
				: function (t) {
						return t &&
							typeof Symbol == 'function' &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t
				  }),
		Ze(e)
	)
}
function L2(e, t) {
	if (Ze(e) !== 'object' || e === null) return e
	var n = e[Symbol.toPrimitive]
	if (n !== void 0) {
		var r = n.call(e, t || 'default')
		if (Ze(r) !== 'object') return r
		throw new TypeError('@@toPrimitive must return a primitive value.')
	}
	return (t === 'string' ? String : Number)(e)
}
function mb(e) {
	var t = L2(e, 'string')
	return Ze(t) === 'symbol' ? t : String(t)
}
function Ug(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n]
		;(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(e, mb(r.key), r)
	}
}
function Dn(e, t, n) {
	return (
		t && Ug(e.prototype, t),
		n && Ug(e, n),
		Object.defineProperty(e, 'prototype', { writable: !1 }),
		e
	)
}
function hv(e, t) {
	return (
		(hv = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (r, o) {
					return (r.__proto__ = o), r
			  }),
		hv(e, t)
	)
}
function go(e, t) {
	if (typeof t != 'function' && t !== null)
		throw new TypeError('Super expression must either be null or a function')
	;(e.prototype = Object.create(t && t.prototype, {
		constructor: { value: e, writable: !0, configurable: !0 }
	})),
		Object.defineProperty(e, 'prototype', { writable: !1 }),
		t && hv(e, t)
}
function Gu(e) {
	return (
		(Gu = Object.setPrototypeOf
			? Object.getPrototypeOf.bind()
			: function (n) {
					return n.__proto__ || Object.getPrototypeOf(n)
			  }),
		Gu(e)
	)
}
function A2() {
	if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
		return !1
	if (typeof Proxy == 'function') return !0
	try {
		return (
			Boolean.prototype.valueOf.call(
				Reflect.construct(Boolean, [], function () {})
			),
			!0
		)
	} catch {
		return !1
	}
}
function We(e) {
	if (e === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		)
	return e
}
function F2(e, t) {
	if (t && (Ze(t) === 'object' || typeof t == 'function')) return t
	if (t !== void 0)
		throw new TypeError(
			'Derived constructors may only return object or undefined'
		)
	return We(e)
}
function yo(e) {
	var t = A2()
	return function () {
		var r = Gu(e),
			o
		if (t) {
			var a = Gu(this).constructor
			o = Reflect.construct(r, arguments, a)
		} else o = r.apply(this, arguments)
		return F2(this, o)
	}
}
var gv = {},
	z2 = {
		get exports() {
			return gv
		},
		set exports(e) {
			gv = e
		}
	}
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
	;(function () {
		var t = {}.hasOwnProperty
		function n() {
			for (var r = [], o = 0; o < arguments.length; o++) {
				var a = arguments[o]
				if (a) {
					var i = typeof a
					if (i === 'string' || i === 'number') r.push(a)
					else if (Array.isArray(a)) {
						if (a.length) {
							var l = n.apply(null, a)
							l && r.push(l)
						}
					} else if (i === 'object') {
						if (
							a.toString !== Object.prototype.toString &&
							!a.toString.toString().includes('[native code]')
						) {
							r.push(a.toString())
							continue
						}
						for (var s in a) t.call(a, s) && a[s] && r.push(s)
					}
				}
			}
			return r.join(' ')
		}
		e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
	})()
})(z2)
const Z = gv
function se() {
	return (
		(se = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		se.apply(this, arguments)
	)
}
var Xu = {},
	H2 = {
		get exports() {
			return Xu
		},
		set exports(e) {
			Xu = e
		}
	},
	Nt = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sn = typeof Symbol == 'function' && Symbol.for,
	Lm = Sn ? Symbol.for('react.element') : 60103,
	Am = Sn ? Symbol.for('react.portal') : 60106,
	Bc = Sn ? Symbol.for('react.fragment') : 60107,
	Wc = Sn ? Symbol.for('react.strict_mode') : 60108,
	Uc = Sn ? Symbol.for('react.profiler') : 60114,
	Yc = Sn ? Symbol.for('react.provider') : 60109,
	Kc = Sn ? Symbol.for('react.context') : 60110,
	Fm = Sn ? Symbol.for('react.async_mode') : 60111,
	Gc = Sn ? Symbol.for('react.concurrent_mode') : 60111,
	Xc = Sn ? Symbol.for('react.forward_ref') : 60112,
	qc = Sn ? Symbol.for('react.suspense') : 60113,
	V2 = Sn ? Symbol.for('react.suspense_list') : 60120,
	Qc = Sn ? Symbol.for('react.memo') : 60115,
	Zc = Sn ? Symbol.for('react.lazy') : 60116,
	j2 = Sn ? Symbol.for('react.block') : 60121,
	B2 = Sn ? Symbol.for('react.fundamental') : 60117,
	W2 = Sn ? Symbol.for('react.responder') : 60118,
	U2 = Sn ? Symbol.for('react.scope') : 60119
function or(e) {
	if (typeof e == 'object' && e !== null) {
		var t = e.$$typeof
		switch (t) {
			case Lm:
				switch (((e = e.type), e)) {
					case Fm:
					case Gc:
					case Bc:
					case Uc:
					case Wc:
					case qc:
						return e
					default:
						switch (((e = e && e.$$typeof), e)) {
							case Kc:
							case Xc:
							case Zc:
							case Qc:
							case Yc:
								return e
							default:
								return t
						}
				}
			case Am:
				return t
		}
	}
}
function hb(e) {
	return or(e) === Gc
}
Nt.AsyncMode = Fm
Nt.ConcurrentMode = Gc
Nt.ContextConsumer = Kc
Nt.ContextProvider = Yc
Nt.Element = Lm
Nt.ForwardRef = Xc
Nt.Fragment = Bc
Nt.Lazy = Zc
Nt.Memo = Qc
Nt.Portal = Am
Nt.Profiler = Uc
Nt.StrictMode = Wc
Nt.Suspense = qc
Nt.isAsyncMode = function (e) {
	return hb(e) || or(e) === Fm
}
Nt.isConcurrentMode = hb
Nt.isContextConsumer = function (e) {
	return or(e) === Kc
}
Nt.isContextProvider = function (e) {
	return or(e) === Yc
}
Nt.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === Lm
}
Nt.isForwardRef = function (e) {
	return or(e) === Xc
}
Nt.isFragment = function (e) {
	return or(e) === Bc
}
Nt.isLazy = function (e) {
	return or(e) === Zc
}
Nt.isMemo = function (e) {
	return or(e) === Qc
}
Nt.isPortal = function (e) {
	return or(e) === Am
}
Nt.isProfiler = function (e) {
	return or(e) === Uc
}
Nt.isStrictMode = function (e) {
	return or(e) === Wc
}
Nt.isSuspense = function (e) {
	return or(e) === qc
}
Nt.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === Bc ||
		e === Gc ||
		e === Uc ||
		e === Wc ||
		e === qc ||
		e === V2 ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === Zc ||
				e.$$typeof === Qc ||
				e.$$typeof === Yc ||
				e.$$typeof === Kc ||
				e.$$typeof === Xc ||
				e.$$typeof === B2 ||
				e.$$typeof === W2 ||
				e.$$typeof === U2 ||
				e.$$typeof === j2))
	)
}
Nt.typeOf = or
;(function (e) {
	e.exports = Nt
})(H2)
function Ur(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		n = []
	return (
		he.Children.forEach(e, function (r) {
			;(r == null && !t.keepEmpty) ||
				(Array.isArray(r)
					? (n = n.concat(Ur(r)))
					: Xu.isFragment(r) && r.props
					? (n = n.concat(Ur(r.props.children, t)))
					: n.push(r))
		}),
		n
	)
}
var Yg = {}
function Y2(e, t) {}
function K2(e, t) {}
function gb(e, t, n) {
	!t && !Yg[n] && (e(!1, n), (Yg[n] = !0))
}
function En(e, t) {
	gb(Y2, e, t)
}
function G2(e, t) {
	gb(K2, e, t)
}
function V(e, t, n) {
	return (
		(t = mb(t)),
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
			  })
			: (e[t] = n),
		e
	)
}
function Kg(e, t) {
	var n = Object.keys(e)
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e)
		t &&
			(r = r.filter(function (o) {
				return Object.getOwnPropertyDescriptor(e, o).enumerable
			})),
			n.push.apply(n, r)
	}
	return n
}
function F(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {}
		t % 2
			? Kg(Object(n), !0).forEach(function (r) {
					V(e, r, n[r])
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: Kg(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
			  })
	}
	return e
}
function ka(e, t, n) {
	var r = u.useRef({})
	return (
		(!('value' in r.current) || n(r.current.condition, t)) &&
			((r.current.value = e()), (r.current.condition = t)),
		r.current.value
	)
}
function zm(e, t) {
	typeof e == 'function'
		? e(t)
		: Ze(e) === 'object' && e && 'current' in e && (e.current = t)
}
function Gr() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n]
	var r = t.filter(function (o) {
		return o
	})
	return r.length <= 1
		? r[0]
		: function (o) {
				t.forEach(function (a) {
					zm(a, o)
				})
		  }
}
function Jc() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n]
	return ka(
		function () {
			return Gr.apply(void 0, t)
		},
		t,
		function (r, o) {
			return (
				r.length === o.length &&
				r.every(function (a, i) {
					return a === o[i]
				})
			)
		}
	)
}
function ji(e) {
	var t,
		n,
		r = Xu.isMemo(e) ? e.type.type : e.type
	return !(
		(typeof r == 'function' &&
			!((t = r.prototype) !== null && t !== void 0 && t.render)) ||
		(typeof e == 'function' &&
			!((n = e.prototype) !== null && n !== void 0 && n.render))
	)
}
var Ea = {},
	X2 = {
		get exports() {
			return Ea
		},
		set exports(e) {
			Ea = e
		}
	},
	ar = {},
	yv = {},
	q2 = {
		get exports() {
			return yv
		},
		set exports(e) {
			yv = e
		}
	},
	yb = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
	function t(D, L) {
		var H = D.length
		D.push(L)
		e: for (; 0 < H; ) {
			var j = (H - 1) >>> 1,
				z = D[j]
			if (0 < o(z, L)) (D[j] = L), (D[H] = z), (H = j)
			else break e
		}
	}
	function n(D) {
		return D.length === 0 ? null : D[0]
	}
	function r(D) {
		if (D.length === 0) return null
		var L = D[0],
			H = D.pop()
		if (H !== L) {
			D[0] = H
			e: for (var j = 0, z = D.length, A = z >>> 1; j < A; ) {
				var W = 2 * (j + 1) - 1,
					Y = D[W],
					K = W + 1,
					G = D[K]
				if (0 > o(Y, H))
					K < z && 0 > o(G, Y)
						? ((D[j] = G), (D[K] = H), (j = K))
						: ((D[j] = Y), (D[W] = H), (j = W))
				else if (K < z && 0 > o(G, H)) (D[j] = G), (D[K] = H), (j = K)
				else break e
			}
		}
		return L
	}
	function o(D, L) {
		var H = D.sortIndex - L.sortIndex
		return H !== 0 ? H : D.id - L.id
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var a = performance
		e.unstable_now = function () {
			return a.now()
		}
	} else {
		var i = Date,
			l = i.now()
		e.unstable_now = function () {
			return i.now() - l
		}
	}
	var s = [],
		c = [],
		f = 1,
		d = null,
		v = 3,
		p = !1,
		h = !1,
		g = !1,
		b = typeof setTimeout == 'function' ? setTimeout : null,
		m = typeof clearTimeout == 'function' ? clearTimeout : null,
		y = typeof setImmediate < 'u' ? setImmediate : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function S(D) {
		for (var L = n(c); L !== null; ) {
			if (L.callback === null) r(c)
			else if (L.startTime <= D) r(c), (L.sortIndex = L.expirationTime), t(s, L)
			else break
			L = n(c)
		}
	}
	function C(D) {
		if (((g = !1), S(D), !h))
			if (n(s) !== null) (h = !0), T(x)
			else {
				var L = n(c)
				L !== null && _(C, L.startTime - D)
			}
	}
	function x(D, L) {
		;(h = !1), g && ((g = !1), m(P), (P = -1)), (p = !0)
		var H = v
		try {
			for (
				S(L), d = n(s);
				d !== null && (!(d.expirationTime > L) || (D && !k()));

			) {
				var j = d.callback
				if (typeof j == 'function') {
					;(d.callback = null), (v = d.priorityLevel)
					var z = j(d.expirationTime <= L)
					;(L = e.unstable_now()),
						typeof z == 'function' ? (d.callback = z) : d === n(s) && r(s),
						S(L)
				} else r(s)
				d = n(s)
			}
			if (d !== null) var A = !0
			else {
				var W = n(c)
				W !== null && _(C, W.startTime - L), (A = !1)
			}
			return A
		} finally {
			;(d = null), (v = H), (p = !1)
		}
	}
	var w = !1,
		E = null,
		P = -1,
		N = 5,
		O = -1
	function k() {
		return !(e.unstable_now() - O < N)
	}
	function I() {
		if (E !== null) {
			var D = e.unstable_now()
			O = D
			var L = !0
			try {
				L = E(!0, D)
			} finally {
				L ? $() : ((w = !1), (E = null))
			}
		} else w = !1
	}
	var $
	if (typeof y == 'function')
		$ = function () {
			y(I)
		}
	else if (typeof MessageChannel < 'u') {
		var R = new MessageChannel(),
			M = R.port2
		;(R.port1.onmessage = I),
			($ = function () {
				M.postMessage(null)
			})
	} else
		$ = function () {
			b(I, 0)
		}
	function T(D) {
		;(E = D), w || ((w = !0), $())
	}
	function _(D, L) {
		P = b(function () {
			D(e.unstable_now())
		}, L)
	}
	;(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (D) {
			D.callback = null
		}),
		(e.unstable_continueExecution = function () {
			h || p || ((h = !0), T(x))
		}),
		(e.unstable_forceFrameRate = function (D) {
			0 > D || 125 < D
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (N = 0 < D ? Math.floor(1e3 / D) : 5)
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return v
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s)
		}),
		(e.unstable_next = function (D) {
			switch (v) {
				case 1:
				case 2:
				case 3:
					var L = 3
					break
				default:
					L = v
			}
			var H = v
			v = L
			try {
				return D()
			} finally {
				v = H
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (D, L) {
			switch (D) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					D = 3
			}
			var H = v
			v = D
			try {
				return L()
			} finally {
				v = H
			}
		}),
		(e.unstable_scheduleCallback = function (D, L, H) {
			var j = e.unstable_now()
			switch (
				(typeof H == 'object' && H !== null
					? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? j + H : j))
					: (H = j),
				D)
			) {
				case 1:
					var z = -1
					break
				case 2:
					z = 250
					break
				case 5:
					z = 1073741823
					break
				case 4:
					z = 1e4
					break
				default:
					z = 5e3
			}
			return (
				(z = H + z),
				(D = {
					id: f++,
					callback: L,
					priorityLevel: D,
					startTime: H,
					expirationTime: z,
					sortIndex: -1
				}),
				H > j
					? ((D.sortIndex = H),
					  t(c, D),
					  n(s) === null &&
							D === n(c) &&
							(g ? (m(P), (P = -1)) : (g = !0), _(C, H - j)))
					: ((D.sortIndex = z), t(s, D), h || p || ((h = !0), T(x))),
				D
			)
		}),
		(e.unstable_shouldYield = k),
		(e.unstable_wrapCallback = function (D) {
			var L = v
			return function () {
				var H = v
				v = L
				try {
					return D.apply(this, arguments)
				} finally {
					v = H
				}
			}
		})
})(yb)
;(function (e) {
	e.exports = yb
})(q2)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bb = u,
	rr = yv
function ue(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n])
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	)
}
var Sb = new Set(),
	Kl = {}
function Ta(e, t) {
	$i(e, t), $i(e + 'Capture', t)
}
function $i(e, t) {
	for (Kl[e] = t, e = 0; e < t.length; e++) Sb.add(t[e])
}
var so = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	bv = Object.prototype.hasOwnProperty,
	Q2 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Gg = {},
	Xg = {}
function Z2(e) {
	return bv.call(Xg, e)
		? !0
		: bv.call(Gg, e)
		? !1
		: Q2.test(e)
		? (Xg[e] = !0)
		: ((Gg[e] = !0), !1)
}
function J2(e, t, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
		default:
			return !1
	}
}
function e$(e, t, n, r) {
	if (t === null || typeof t > 'u' || J2(e, t, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t
			case 4:
				return t === !1
			case 5:
				return isNaN(t)
			case 6:
				return isNaN(t) || 1 > t
		}
	return !1
}
function Hn(e, t, n, r, o, a, i) {
	;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = o),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = a),
		(this.removeEmptyString = i)
}
var Rn = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		Rn[e] = new Hn(e, 0, !1, e, null, !1, !1)
	})
;[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv']
].forEach(function (e) {
	var t = e[0]
	Rn[t] = new Hn(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	Rn[e] = new Hn(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha'
].forEach(function (e) {
	Rn[e] = new Hn(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		Rn[e] = new Hn(e, 3, !1, e.toLowerCase(), null, !1, !1)
	})
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	Rn[e] = new Hn(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
	Rn[e] = new Hn(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
	Rn[e] = new Hn(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
	Rn[e] = new Hn(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Hm = /[\-:]([a-z])/g
function Vm(e) {
	return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Hm, Vm)
		Rn[t] = new Hn(t, 1, !1, e, null, !1, !1)
	})
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Hm, Vm)
		Rn[t] = new Hn(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
	})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Hm, Vm)
	Rn[t] = new Hn(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
	Rn[e] = new Hn(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Rn.xlinkHref = new Hn(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Rn[e] = new Hn(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function jm(e, t, n, r) {
	var o = Rn.hasOwnProperty(t) ? Rn[t] : null
	;(o !== null
		? o.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(e$(t, n, o, r) && (n = null),
		r || o === null
			? Z2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: o.mustUseProperty
			? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
			: ((t = o.attributeName),
			  (r = o.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((o = o.type),
					  (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var bo = bb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Bs = Symbol.for('react.element'),
	ni = Symbol.for('react.portal'),
	ri = Symbol.for('react.fragment'),
	Bm = Symbol.for('react.strict_mode'),
	Sv = Symbol.for('react.profiler'),
	Cb = Symbol.for('react.provider'),
	wb = Symbol.for('react.context'),
	Wm = Symbol.for('react.forward_ref'),
	Cv = Symbol.for('react.suspense'),
	wv = Symbol.for('react.suspense_list'),
	Um = Symbol.for('react.memo'),
	Po = Symbol.for('react.lazy'),
	xb = Symbol.for('react.offscreen'),
	qg = Symbol.iterator
function ol(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (qg && e[qg]) || e['@@iterator']),
		  typeof e == 'function' ? e : null)
}
var Xt = Object.assign,
	Zd
function yl(e) {
	if (Zd === void 0)
		try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/)
			Zd = (t && t[1]) || ''
		}
	return (
		`
` +
		Zd +
		e
	)
}
var Jd = !1
function ef(e, t) {
	if (!e || Jd) return ''
	Jd = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (t)
			if (
				((t = function () {
					throw Error()
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error()
					}
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, [])
				} catch (c) {
					var r = c
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (c) {
					r = c
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (c) {
				r = c
			}
			e()
		}
	} catch (c) {
		if (c && r && typeof c.stack == 'string') {
			for (
				var o = c.stack.split(`
`),
					a = r.stack.split(`
`),
					i = o.length - 1,
					l = a.length - 1;
				1 <= i && 0 <= l && o[i] !== a[l];

			)
				l--
			for (; 1 <= i && 0 <= l; i--, l--)
				if (o[i] !== a[l]) {
					if (i !== 1 || l !== 1)
						do
							if ((i--, l--, 0 > l || o[i] !== a[l])) {
								var s =
									`
` + o[i].replace(' at new ', ' at ')
								return (
									e.displayName &&
										s.includes('<anonymous>') &&
										(s = s.replace('<anonymous>', e.displayName)),
									s
								)
							}
						while (1 <= i && 0 <= l)
					break
				}
		}
	} finally {
		;(Jd = !1), (Error.prepareStackTrace = n)
	}
	return (e = e ? e.displayName || e.name : '') ? yl(e) : ''
}
function t$(e) {
	switch (e.tag) {
		case 5:
			return yl(e.type)
		case 16:
			return yl('Lazy')
		case 13:
			return yl('Suspense')
		case 19:
			return yl('SuspenseList')
		case 0:
		case 2:
		case 15:
			return (e = ef(e.type, !1)), e
		case 11:
			return (e = ef(e.type.render, !1)), e
		case 1:
			return (e = ef(e.type, !0)), e
		default:
			return ''
	}
}
function xv(e) {
	if (e == null) return null
	if (typeof e == 'function') return e.displayName || e.name || null
	if (typeof e == 'string') return e
	switch (e) {
		case ri:
			return 'Fragment'
		case ni:
			return 'Portal'
		case Sv:
			return 'Profiler'
		case Bm:
			return 'StrictMode'
		case Cv:
			return 'Suspense'
		case wv:
			return 'SuspenseList'
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case wb:
				return (e.displayName || 'Context') + '.Consumer'
			case Cb:
				return (e._context.displayName || 'Context') + '.Provider'
			case Wm:
				var t = e.render
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				)
			case Um:
				return (
					(t = e.displayName || null), t !== null ? t : xv(e.type) || 'Memo'
				)
			case Po:
				;(t = e._payload), (e = e._init)
				try {
					return xv(e(t))
				} catch {}
		}
	return null
}
function n$(e) {
	var t = e.type
	switch (e.tag) {
		case 24:
			return 'Cache'
		case 9:
			return (t.displayName || 'Context') + '.Consumer'
		case 10:
			return (t._context.displayName || 'Context') + '.Provider'
		case 18:
			return 'DehydratedFragment'
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			)
		case 7:
			return 'Fragment'
		case 5:
			return t
		case 4:
			return 'Portal'
		case 3:
			return 'Root'
		case 6:
			return 'Text'
		case 16:
			return xv(t)
		case 8:
			return t === Bm ? 'StrictMode' : 'Mode'
		case 22:
			return 'Offscreen'
		case 12:
			return 'Profiler'
		case 21:
			return 'Scope'
		case 13:
			return 'Suspense'
		case 19:
			return 'SuspenseList'
		case 25:
			return 'TracingMarker'
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null
			if (typeof t == 'string') return t
	}
	return null
}
function Zo(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e
		case 'object':
			return e
		default:
			return ''
	}
}
function Eb(e) {
	var t = e.type
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	)
}
function r$(e) {
	var t = Eb(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t]
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var o = n.get,
			a = n.set
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this)
				},
				set: function (i) {
					;(r = '' + i), a.call(this, i)
				}
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (i) {
					r = '' + i
				},
				stopTracking: function () {
					;(e._valueTracker = null), delete e[t]
				}
			}
		)
	}
}
function Ws(e) {
	e._valueTracker || (e._valueTracker = r$(e))
}
function $b(e) {
	if (!e) return !1
	var t = e._valueTracker
	if (!t) return !0
	var n = t.getValue(),
		r = ''
	return (
		e && (r = Eb(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	)
}
function qu(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}
function Ev(e, t) {
	var n = t.checked
	return Xt({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}
function Qg(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked
	;(n = Zo(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null
		})
}
function Pb(e, t) {
	;(t = t.checked), t != null && jm(e, 'checked', t, !1)
}
function $v(e, t) {
	Pb(e, t)
	var n = Zo(t.value),
		r = t.type
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n)
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value')
		return
	}
	t.hasOwnProperty('value')
		? Pv(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && Pv(e, t.type, Zo(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked)
}
function Zg(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return
		;(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t)
	}
	;(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n)
}
function Pv(e, t, n) {
	;(t !== 'number' || qu(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var bl = Array.isArray
function hi(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {}
		for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
		for (n = 0; n < e.length; n++)
			(o = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== o && (e[n].selected = o),
				o && r && (e[n].defaultSelected = !0)
	} else {
		for (n = '' + Zo(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
				return
			}
			t !== null || e[o].disabled || (t = e[o])
		}
		t !== null && (t.selected = !0)
	}
}
function Rv(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(ue(91))
	return Xt({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue
	})
}
function Jg(e, t) {
	var n = t.value
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(ue(92))
			if (bl(n)) {
				if (1 < n.length) throw Error(ue(93))
				n = n[0]
			}
			t = n
		}
		t == null && (t = ''), (n = t)
	}
	e._wrapperState = { initialValue: Zo(n) }
}
function Rb(e, t) {
	var n = Zo(t.value),
		r = Zo(t.defaultValue)
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r)
}
function e0(e) {
	var t = e.textContent
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Mb(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg'
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML'
		default:
			return 'http://www.w3.org/1999/xhtml'
	}
}
function Mv(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Mb(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e
}
var Us,
	Ob = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, o)
					})
			  }
			: e
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t
		else {
			for (
				Us = Us || document.createElement('div'),
					Us.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Us.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild)
			for (; t.firstChild; ) e.appendChild(t.firstChild)
		}
	})
function Gl(e, t) {
	if (t) {
		var n = e.firstChild
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t
			return
		}
	}
	e.textContent = t
}
var Pl = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	o$ = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Pl).forEach(function (e) {
	o$.forEach(function (t) {
		;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pl[t] = Pl[e])
	})
})
function Nb(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Pl.hasOwnProperty(e) && Pl[e])
		? ('' + t).trim()
		: t + 'px'
}
function Ib(e, t) {
	e = e.style
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				o = Nb(n, t[n], r)
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
		}
}
var a$ = Xt(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	}
)
function Ov(e, t) {
	if (t) {
		if (a$[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(ue(137, e))
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(ue(60))
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(ue(61))
		}
		if (t.style != null && typeof t.style != 'object') throw Error(ue(62))
	}
}
function Nv(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string'
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1
		default:
			return !0
	}
}
var Iv = null
function Ym(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	)
}
var kv = null,
	gi = null,
	yi = null
function t0(e) {
	if ((e = ws(e))) {
		if (typeof kv != 'function') throw Error(ue(280))
		var t = e.stateNode
		t && ((t = od(t)), kv(e.stateNode, e.type, t))
	}
}
function kb(e) {
	gi ? (yi ? yi.push(e) : (yi = [e])) : (gi = e)
}
function Tb() {
	if (gi) {
		var e = gi,
			t = yi
		if (((yi = gi = null), t0(e), t)) for (e = 0; e < t.length; e++) t0(t[e])
	}
}
function Db(e, t) {
	return e(t)
}
function _b() {}
var tf = !1
function Lb(e, t, n) {
	if (tf) return e(t, n)
	tf = !0
	try {
		return Db(e, t, n)
	} finally {
		;(tf = !1), (gi !== null || yi !== null) && (_b(), Tb())
	}
}
function Xl(e, t) {
	var n = e.stateNode
	if (n === null) return null
	var r = od(n)
	if (r === null) return null
	n = r[t]
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			;(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r)
			break e
		default:
			e = !1
	}
	if (e) return null
	if (n && typeof n != 'function') throw Error(ue(231, t, typeof n))
	return n
}
var Tv = !1
if (so)
	try {
		var al = {}
		Object.defineProperty(al, 'passive', {
			get: function () {
				Tv = !0
			}
		}),
			window.addEventListener('test', al, al),
			window.removeEventListener('test', al, al)
	} catch {
		Tv = !1
	}
function i$(e, t, n, r, o, a, i, l, s) {
	var c = Array.prototype.slice.call(arguments, 3)
	try {
		t.apply(n, c)
	} catch (f) {
		this.onError(f)
	}
}
var Rl = !1,
	Qu = null,
	Zu = !1,
	Dv = null,
	l$ = {
		onError: function (e) {
			;(Rl = !0), (Qu = e)
		}
	}
function s$(e, t, n, r, o, a, i, l, s) {
	;(Rl = !1), (Qu = null), i$.apply(l$, arguments)
}
function u$(e, t, n, r, o, a, i, l, s) {
	if ((s$.apply(this, arguments), Rl)) {
		if (Rl) {
			var c = Qu
			;(Rl = !1), (Qu = null)
		} else throw Error(ue(198))
		Zu || ((Zu = !0), (Dv = c))
	}
}
function Da(e) {
	var t = e,
		n = e
	if (e.alternate) for (; t.return; ) t = t.return
	else {
		e = t
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
		while (e)
	}
	return t.tag === 3 ? n : null
}
function Ab(e) {
	if (e.tag === 13) {
		var t = e.memoizedState
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated
	}
	return null
}
function n0(e) {
	if (Da(e) !== e) throw Error(ue(188))
}
function c$(e) {
	var t = e.alternate
	if (!t) {
		if (((t = Da(e)), t === null)) throw Error(ue(188))
		return t !== e ? null : e
	}
	for (var n = e, r = t; ; ) {
		var o = n.return
		if (o === null) break
		var a = o.alternate
		if (a === null) {
			if (((r = o.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (o.child === a.child) {
			for (a = o.child; a; ) {
				if (a === n) return n0(o), e
				if (a === r) return n0(o), t
				a = a.sibling
			}
			throw Error(ue(188))
		}
		if (n.return !== r.return) (n = o), (r = a)
		else {
			for (var i = !1, l = o.child; l; ) {
				if (l === n) {
					;(i = !0), (n = o), (r = a)
					break
				}
				if (l === r) {
					;(i = !0), (r = o), (n = a)
					break
				}
				l = l.sibling
			}
			if (!i) {
				for (l = a.child; l; ) {
					if (l === n) {
						;(i = !0), (n = a), (r = o)
						break
					}
					if (l === r) {
						;(i = !0), (r = a), (n = o)
						break
					}
					l = l.sibling
				}
				if (!i) throw Error(ue(189))
			}
		}
		if (n.alternate !== r) throw Error(ue(190))
	}
	if (n.tag !== 3) throw Error(ue(188))
	return n.stateNode.current === n ? e : t
}
function Fb(e) {
	return (e = c$(e)), e !== null ? zb(e) : null
}
function zb(e) {
	if (e.tag === 5 || e.tag === 6) return e
	for (e = e.child; e !== null; ) {
		var t = zb(e)
		if (t !== null) return t
		e = e.sibling
	}
	return null
}
var Hb = rr.unstable_scheduleCallback,
	r0 = rr.unstable_cancelCallback,
	d$ = rr.unstable_shouldYield,
	f$ = rr.unstable_requestPaint,
	an = rr.unstable_now,
	v$ = rr.unstable_getCurrentPriorityLevel,
	Km = rr.unstable_ImmediatePriority,
	Vb = rr.unstable_UserBlockingPriority,
	Ju = rr.unstable_NormalPriority,
	p$ = rr.unstable_LowPriority,
	jb = rr.unstable_IdlePriority,
	ed = null,
	jr = null
function m$(e) {
	if (jr && typeof jr.onCommitFiberRoot == 'function')
		try {
			jr.onCommitFiberRoot(ed, e, void 0, (e.current.flags & 128) === 128)
		} catch {}
}
var Mr = Math.clz32 ? Math.clz32 : y$,
	h$ = Math.log,
	g$ = Math.LN2
function y$(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((h$(e) / g$) | 0)) | 0
}
var Ys = 64,
	Ks = 4194304
function Sl(e) {
	switch (e & -e) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return e
	}
}
function ec(e, t) {
	var n = e.pendingLanes
	if (n === 0) return 0
	var r = 0,
		o = e.suspendedLanes,
		a = e.pingedLanes,
		i = n & 268435455
	if (i !== 0) {
		var l = i & ~o
		l !== 0 ? (r = Sl(l)) : ((a &= i), a !== 0 && (r = Sl(a)))
	} else (i = n & ~o), i !== 0 ? (r = Sl(i)) : a !== 0 && (r = Sl(a))
	if (r === 0) return 0
	if (
		t !== 0 &&
		t !== r &&
		!(t & o) &&
		((o = r & -r), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0))
	)
		return t
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Mr(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
	return r
}
function b$(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function S$(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			o = e.expirationTimes,
			a = e.pendingLanes;
		0 < a;

	) {
		var i = 31 - Mr(a),
			l = 1 << i,
			s = o[i]
		s === -1
			? (!(l & n) || l & r) && (o[i] = b$(l, t))
			: s <= t && (e.expiredLanes |= l),
			(a &= ~l)
	}
}
function _v(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	)
}
function Bb() {
	var e = Ys
	return (Ys <<= 1), !(Ys & 4194240) && (Ys = 64), e
}
function nf(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e)
	return t
}
function Ss(e, t, n) {
	;(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Mr(t)),
		(e[t] = n)
}
function C$(e, t) {
	var n = e.pendingLanes & ~t
	;(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements)
	var r = e.eventTimes
	for (e = e.expirationTimes; 0 < n; ) {
		var o = 31 - Mr(n),
			a = 1 << o
		;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a)
	}
}
function Gm(e, t) {
	var n = (e.entangledLanes |= t)
	for (e = e.entanglements; n; ) {
		var r = 31 - Mr(n),
			o = 1 << r
		;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
	}
}
var Ot = 0
function Wb(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Ub,
	Xm,
	Yb,
	Kb,
	Gb,
	Lv = !1,
	Gs = [],
	Vo = null,
	jo = null,
	Bo = null,
	ql = new Map(),
	Ql = new Map(),
	Oo = [],
	w$ =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		)
function o0(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Vo = null
			break
		case 'dragenter':
		case 'dragleave':
			jo = null
			break
		case 'mouseover':
		case 'mouseout':
			Bo = null
			break
		case 'pointerover':
		case 'pointerout':
			ql.delete(t.pointerId)
			break
		case 'gotpointercapture':
		case 'lostpointercapture':
			Ql.delete(t.pointerId)
	}
}
function il(e, t, n, r, o, a) {
	return e === null || e.nativeEvent !== a
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: a,
				targetContainers: [o]
		  }),
		  t !== null && ((t = ws(t)), t !== null && Xm(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  o !== null && t.indexOf(o) === -1 && t.push(o),
		  e)
}
function x$(e, t, n, r, o) {
	switch (t) {
		case 'focusin':
			return (Vo = il(Vo, e, t, n, r, o)), !0
		case 'dragenter':
			return (jo = il(jo, e, t, n, r, o)), !0
		case 'mouseover':
			return (Bo = il(Bo, e, t, n, r, o)), !0
		case 'pointerover':
			var a = o.pointerId
			return ql.set(a, il(ql.get(a) || null, e, t, n, r, o)), !0
		case 'gotpointercapture':
			return (
				(a = o.pointerId), Ql.set(a, il(Ql.get(a) || null, e, t, n, r, o)), !0
			)
	}
	return !1
}
function Xb(e) {
	var t = fa(e.target)
	if (t !== null) {
		var n = Da(t)
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Ab(n)), t !== null)) {
					;(e.blockedOn = t),
						Gb(e.priority, function () {
							Yb(n)
						})
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	e.blockedOn = null
}
function Ou(e) {
	if (e.blockedOn !== null) return !1
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Av(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
		if (n === null) {
			n = e.nativeEvent
			var r = new n.constructor(n.type, n)
			;(Iv = r), n.target.dispatchEvent(r), (Iv = null)
		} else return (t = ws(n)), t !== null && Xm(t), (e.blockedOn = n), !1
		t.shift()
	}
	return !0
}
function a0(e, t, n) {
	Ou(e) && n.delete(t)
}
function E$() {
	;(Lv = !1),
		Vo !== null && Ou(Vo) && (Vo = null),
		jo !== null && Ou(jo) && (jo = null),
		Bo !== null && Ou(Bo) && (Bo = null),
		ql.forEach(a0),
		Ql.forEach(a0)
}
function ll(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Lv ||
			((Lv = !0), rr.unstable_scheduleCallback(rr.unstable_NormalPriority, E$)))
}
function Zl(e) {
	function t(o) {
		return ll(o, e)
	}
	if (0 < Gs.length) {
		ll(Gs[0], e)
		for (var n = 1; n < Gs.length; n++) {
			var r = Gs[n]
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (
		Vo !== null && ll(Vo, e),
			jo !== null && ll(jo, e),
			Bo !== null && ll(Bo, e),
			ql.forEach(t),
			Ql.forEach(t),
			n = 0;
		n < Oo.length;
		n++
	)
		(r = Oo[n]), r.blockedOn === e && (r.blockedOn = null)
	for (; 0 < Oo.length && ((n = Oo[0]), n.blockedOn === null); )
		Xb(n), n.blockedOn === null && Oo.shift()
}
var bi = bo.ReactCurrentBatchConfig,
	tc = !0
function $$(e, t, n, r) {
	var o = Ot,
		a = bi.transition
	bi.transition = null
	try {
		;(Ot = 1), qm(e, t, n, r)
	} finally {
		;(Ot = o), (bi.transition = a)
	}
}
function P$(e, t, n, r) {
	var o = Ot,
		a = bi.transition
	bi.transition = null
	try {
		;(Ot = 4), qm(e, t, n, r)
	} finally {
		;(Ot = o), (bi.transition = a)
	}
}
function qm(e, t, n, r) {
	if (tc) {
		var o = Av(e, t, n, r)
		if (o === null) vf(e, t, r, nc, n), o0(e, r)
		else if (x$(o, e, t, n, r)) r.stopPropagation()
		else if ((o0(e, r), t & 4 && -1 < w$.indexOf(e))) {
			for (; o !== null; ) {
				var a = ws(o)
				if (
					(a !== null && Ub(a),
					(a = Av(e, t, n, r)),
					a === null && vf(e, t, r, nc, n),
					a === o)
				)
					break
				o = a
			}
			o !== null && r.stopPropagation()
		} else vf(e, t, r, null, n)
	}
}
var nc = null
function Av(e, t, n, r) {
	if (((nc = null), (e = Ym(r)), (e = fa(e)), e !== null))
		if (((t = Da(e)), t === null)) e = null
		else if (((n = t.tag), n === 13)) {
			if (((e = Ab(t)), e !== null)) return e
			e = null
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null
			e = null
		} else t !== e && (e = null)
	return (nc = e), null
}
function qb(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4
		case 'message':
			switch (v$()) {
				case Km:
					return 1
				case Vb:
					return 4
				case Ju:
				case p$:
					return 16
				case jb:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var Io = null,
	Qm = null,
	Nu = null
function Qb() {
	if (Nu) return Nu
	var e,
		t = Qm,
		n = t.length,
		r,
		o = 'value' in Io ? Io.value : Io.textContent,
		a = o.length
	for (e = 0; e < n && t[e] === o[e]; e++);
	var i = n - e
	for (r = 1; r <= i && t[n - r] === o[a - r]; r++);
	return (Nu = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Iu(e) {
	var t = e.keyCode
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	)
}
function Xs() {
	return !0
}
function i0() {
	return !1
}
function ir(e) {
	function t(n, r, o, a, i) {
		;(this._reactName = n),
			(this._targetInst = o),
			(this.type = r),
			(this.nativeEvent = a),
			(this.target = i),
			(this.currentTarget = null)
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]))
		return (
			(this.isDefaultPrevented = (
				a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
			)
				? Xs
				: i0),
			(this.isPropagationStopped = i0),
			this
		)
	}
	return (
		Xt(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Xs))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Xs))
			},
			persist: function () {},
			isPersistent: Xs
		}),
		t
	)
}
var Bi = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Zm = ir(Bi),
	Cs = Xt({}, Bi, { view: 0, detail: 0 }),
	R$ = ir(Cs),
	rf,
	of,
	sl,
	td = Xt({}, Cs, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Jm,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== sl &&
						(sl && e.type === 'mousemove'
							? ((rf = e.screenX - sl.screenX), (of = e.screenY - sl.screenY))
							: (of = rf = 0),
						(sl = e)),
				  rf)
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : of
		}
	}),
	l0 = ir(td),
	M$ = Xt({}, td, { dataTransfer: 0 }),
	O$ = ir(M$),
	N$ = Xt({}, Cs, { relatedTarget: 0 }),
	af = ir(N$),
	I$ = Xt({}, Bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	k$ = ir(I$),
	T$ = Xt({}, Bi, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData
		}
	}),
	D$ = ir(T$),
	_$ = Xt({}, Bi, { data: 0 }),
	s0 = ir(_$),
	L$ = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified'
	},
	A$ = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta'
	},
	F$ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function z$(e) {
	var t = this.nativeEvent
	return t.getModifierState ? t.getModifierState(e) : (e = F$[e]) ? !!t[e] : !1
}
function Jm() {
	return z$
}
var H$ = Xt({}, Cs, {
		key: function (e) {
			if (e.key) {
				var t = L$[e.key] || e.key
				if (t !== 'Unidentified') return t
			}
			return e.type === 'keypress'
				? ((e = Iu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? A$[e.keyCode] || 'Unidentified'
				: ''
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Jm,
		charCode: function (e) {
			return e.type === 'keypress' ? Iu(e) : 0
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
		which: function (e) {
			return e.type === 'keypress'
				? Iu(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0
		}
	}),
	V$ = ir(H$),
	j$ = Xt({}, td, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	u0 = ir(j$),
	B$ = Xt({}, Cs, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Jm
	}),
	W$ = ir(B$),
	U$ = Xt({}, Bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Y$ = ir(U$),
	K$ = Xt({}, td, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	G$ = ir(K$),
	X$ = [9, 13, 27, 32],
	eh = so && 'CompositionEvent' in window,
	Ml = null
so && 'documentMode' in document && (Ml = document.documentMode)
var q$ = so && 'TextEvent' in window && !Ml,
	Zb = so && (!eh || (Ml && 8 < Ml && 11 >= Ml)),
	c0 = String.fromCharCode(32),
	d0 = !1
function Jb(e, t) {
	switch (e) {
		case 'keyup':
			return X$.indexOf(t.keyCode) !== -1
		case 'keydown':
			return t.keyCode !== 229
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0
		default:
			return !1
	}
}
function eS(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var oi = !1
function Q$(e, t) {
	switch (e) {
		case 'compositionend':
			return eS(t)
		case 'keypress':
			return t.which !== 32 ? null : ((d0 = !0), c0)
		case 'textInput':
			return (e = t.data), e === c0 && d0 ? null : e
		default:
			return null
	}
}
function Z$(e, t) {
	if (oi)
		return e === 'compositionend' || (!eh && Jb(e, t))
			? ((e = Qb()), (Nu = Qm = Io = null), (oi = !1), e)
			: null
	switch (e) {
		case 'paste':
			return null
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char
				if (t.which) return String.fromCharCode(t.which)
			}
			return null
		case 'compositionend':
			return Zb && t.locale !== 'ko' ? null : t.data
		default:
			return null
	}
}
var J$ = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
}
function f0(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return t === 'input' ? !!J$[e.type] : t === 'textarea'
}
function tS(e, t, n, r) {
	kb(r),
		(t = rc(t, 'onChange')),
		0 < t.length &&
			((n = new Zm('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }))
}
var Ol = null,
	Jl = null
function eP(e) {
	fS(e, 0)
}
function nd(e) {
	var t = li(e)
	if ($b(t)) return e
}
function tP(e, t) {
	if (e === 'change') return t
}
var nS = !1
if (so) {
	var lf
	if (so) {
		var sf = 'oninput' in document
		if (!sf) {
			var v0 = document.createElement('div')
			v0.setAttribute('oninput', 'return;'),
				(sf = typeof v0.oninput == 'function')
		}
		lf = sf
	} else lf = !1
	nS = lf && (!document.documentMode || 9 < document.documentMode)
}
function p0() {
	Ol && (Ol.detachEvent('onpropertychange', rS), (Jl = Ol = null))
}
function rS(e) {
	if (e.propertyName === 'value' && nd(Jl)) {
		var t = []
		tS(t, Jl, e, Ym(e)), Lb(eP, t)
	}
}
function nP(e, t, n) {
	e === 'focusin'
		? (p0(), (Ol = t), (Jl = n), Ol.attachEvent('onpropertychange', rS))
		: e === 'focusout' && p0()
}
function rP(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return nd(Jl)
}
function oP(e, t) {
	if (e === 'click') return nd(t)
}
function aP(e, t) {
	if (e === 'input' || e === 'change') return nd(t)
}
function iP(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Ir = typeof Object.is == 'function' ? Object.is : iP
function es(e, t) {
	if (Ir(e, t)) return !0
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1
	var n = Object.keys(e),
		r = Object.keys(t)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var o = n[r]
		if (!bv.call(t, o) || !Ir(e[o], t[o])) return !1
	}
	return !0
}
function m0(e) {
	for (; e && e.firstChild; ) e = e.firstChild
	return e
}
function h0(e, t) {
	var n = m0(e)
	e = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e }
			e = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = m0(n)
	}
}
function oS(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? oS(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1
}
function aS() {
	for (var e = window, t = qu(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string'
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow
		else break
		t = qu(e.document)
	}
	return t
}
function th(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	)
}
function lP(e) {
	var t = aS(),
		n = e.focusedElem,
		r = e.selectionRange
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		oS(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && th(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection()
				var o = n.textContent.length,
					a = Math.min(r.start, o)
				;(r = r.end === void 0 ? a : Math.min(r.end, o)),
					!e.extend && a > r && ((o = r), (r = a), (a = o)),
					(o = h0(n, a))
				var i = h0(n, r)
				o &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					a > r
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
	}
}
var sP = so && 'documentMode' in document && 11 >= document.documentMode,
	ai = null,
	Fv = null,
	Nl = null,
	zv = !1
function g0(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	zv ||
		ai == null ||
		ai !== qu(r) ||
		((r = ai),
		'selectionStart' in r && th(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset
			  })),
		(Nl && es(Nl, r)) ||
			((Nl = r),
			(r = rc(Fv, 'onSelect')),
			0 < r.length &&
				((t = new Zm('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = ai))))
}
function qs(e, t) {
	var n = {}
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	)
}
var ii = {
		animationend: qs('Animation', 'AnimationEnd'),
		animationiteration: qs('Animation', 'AnimationIteration'),
		animationstart: qs('Animation', 'AnimationStart'),
		transitionend: qs('Transition', 'TransitionEnd')
	},
	uf = {},
	iS = {}
so &&
	((iS = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete ii.animationend.animation,
		delete ii.animationiteration.animation,
		delete ii.animationstart.animation),
	'TransitionEvent' in window || delete ii.transitionend.transition)
function rd(e) {
	if (uf[e]) return uf[e]
	if (!ii[e]) return e
	var t = ii[e],
		n
	for (n in t) if (t.hasOwnProperty(n) && n in iS) return (uf[e] = t[n])
	return e
}
var lS = rd('animationend'),
	sS = rd('animationiteration'),
	uS = rd('animationstart'),
	cS = rd('transitionend'),
	dS = new Map(),
	y0 =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		)
function ea(e, t) {
	dS.set(e, t), Ta(t, [e])
}
for (var cf = 0; cf < y0.length; cf++) {
	var df = y0[cf],
		uP = df.toLowerCase(),
		cP = df[0].toUpperCase() + df.slice(1)
	ea(uP, 'on' + cP)
}
ea(lS, 'onAnimationEnd')
ea(sS, 'onAnimationIteration')
ea(uS, 'onAnimationStart')
ea('dblclick', 'onDoubleClick')
ea('focusin', 'onFocus')
ea('focusout', 'onBlur')
ea(cS, 'onTransitionEnd')
$i('onMouseEnter', ['mouseout', 'mouseover'])
$i('onMouseLeave', ['mouseout', 'mouseover'])
$i('onPointerEnter', ['pointerout', 'pointerover'])
$i('onPointerLeave', ['pointerout', 'pointerover'])
Ta(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Ta(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
)
Ta('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Ta(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Ta(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Ta(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Cl =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	dP = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Cl))
function b0(e, t, n) {
	var r = e.type || 'unknown-event'
	;(e.currentTarget = n), u$(r, t, void 0, e), (e.currentTarget = null)
}
function fS(e, t) {
	t = (t & 4) !== 0
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event
		r = r.listeners
		e: {
			var a = void 0
			if (t)
				for (var i = r.length - 1; 0 <= i; i--) {
					var l = r[i],
						s = l.instance,
						c = l.currentTarget
					if (((l = l.listener), s !== a && o.isPropagationStopped())) break e
					b0(o, l, c), (a = s)
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((l = r[i]),
						(s = l.instance),
						(c = l.currentTarget),
						(l = l.listener),
						s !== a && o.isPropagationStopped())
					)
						break e
					b0(o, l, c), (a = s)
				}
		}
	}
	if (Zu) throw ((e = Dv), (Zu = !1), (Dv = null), e)
}
function At(e, t) {
	var n = t[Wv]
	n === void 0 && (n = t[Wv] = new Set())
	var r = e + '__bubble'
	n.has(r) || (vS(t, e, 2, !1), n.add(r))
}
function ff(e, t, n) {
	var r = 0
	t && (r |= 4), vS(n, e, r, t)
}
var Qs = '_reactListening' + Math.random().toString(36).slice(2)
function ts(e) {
	if (!e[Qs]) {
		;(e[Qs] = !0),
			Sb.forEach(function (n) {
				n !== 'selectionchange' && (dP.has(n) || ff(n, !1, e), ff(n, !0, e))
			})
		var t = e.nodeType === 9 ? e : e.ownerDocument
		t === null || t[Qs] || ((t[Qs] = !0), ff('selectionchange', !1, t))
	}
}
function vS(e, t, n, r) {
	switch (qb(t)) {
		case 1:
			var o = $$
			break
		case 4:
			o = P$
			break
		default:
			o = qm
	}
	;(n = o.bind(null, t, n, e)),
		(o = void 0),
		!Tv ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(o = !0),
		r
			? o !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: o })
				: e.addEventListener(t, n, !0)
			: o !== void 0
			? e.addEventListener(t, n, { passive: o })
			: e.addEventListener(t, n, !1)
}
function vf(e, t, n, r, o) {
	var a = r
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return
			var i = r.tag
			if (i === 3 || i === 4) {
				var l = r.stateNode.containerInfo
				if (l === o || (l.nodeType === 8 && l.parentNode === o)) break
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var s = i.tag
						if (
							(s === 3 || s === 4) &&
							((s = i.stateNode.containerInfo),
							s === o || (s.nodeType === 8 && s.parentNode === o))
						)
							return
						i = i.return
					}
				for (; l !== null; ) {
					if (((i = fa(l)), i === null)) return
					if (((s = i.tag), s === 5 || s === 6)) {
						r = a = i
						continue e
					}
					l = l.parentNode
				}
			}
			r = r.return
		}
	Lb(function () {
		var c = a,
			f = Ym(n),
			d = []
		e: {
			var v = dS.get(e)
			if (v !== void 0) {
				var p = Zm,
					h = e
				switch (e) {
					case 'keypress':
						if (Iu(n) === 0) break e
					case 'keydown':
					case 'keyup':
						p = V$
						break
					case 'focusin':
						;(h = 'focus'), (p = af)
						break
					case 'focusout':
						;(h = 'blur'), (p = af)
						break
					case 'beforeblur':
					case 'afterblur':
						p = af
						break
					case 'click':
						if (n.button === 2) break e
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						p = l0
						break
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						p = O$
						break
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						p = W$
						break
					case lS:
					case sS:
					case uS:
						p = k$
						break
					case cS:
						p = Y$
						break
					case 'scroll':
						p = R$
						break
					case 'wheel':
						p = G$
						break
					case 'copy':
					case 'cut':
					case 'paste':
						p = D$
						break
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						p = u0
				}
				var g = (t & 4) !== 0,
					b = !g && e === 'scroll',
					m = g ? (v !== null ? v + 'Capture' : null) : v
				g = []
				for (var y = c, S; y !== null; ) {
					S = y
					var C = S.stateNode
					if (
						(S.tag === 5 &&
							C !== null &&
							((S = C),
							m !== null && ((C = Xl(y, m)), C != null && g.push(ns(y, C, S)))),
						b)
					)
						break
					y = y.return
				}
				0 < g.length &&
					((v = new p(v, h, null, n, f)), d.push({ event: v, listeners: g }))
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((v = e === 'mouseover' || e === 'pointerover'),
					(p = e === 'mouseout' || e === 'pointerout'),
					v &&
						n !== Iv &&
						(h = n.relatedTarget || n.fromElement) &&
						(fa(h) || h[uo]))
				)
					break e
				if (
					(p || v) &&
					((v =
						f.window === f
							? f
							: (v = f.ownerDocument)
							? v.defaultView || v.parentWindow
							: window),
					p
						? ((h = n.relatedTarget || n.toElement),
						  (p = c),
						  (h = h ? fa(h) : null),
						  h !== null &&
								((b = Da(h)), h !== b || (h.tag !== 5 && h.tag !== 6)) &&
								(h = null))
						: ((p = null), (h = c)),
					p !== h)
				) {
					if (
						((g = l0),
						(C = 'onMouseLeave'),
						(m = 'onMouseEnter'),
						(y = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((g = u0),
							(C = 'onPointerLeave'),
							(m = 'onPointerEnter'),
							(y = 'pointer')),
						(b = p == null ? v : li(p)),
						(S = h == null ? v : li(h)),
						(v = new g(C, y + 'leave', p, n, f)),
						(v.target = b),
						(v.relatedTarget = S),
						(C = null),
						fa(f) === c &&
							((g = new g(m, y + 'enter', h, n, f)),
							(g.target = S),
							(g.relatedTarget = b),
							(C = g)),
						(b = C),
						p && h)
					)
						t: {
							for (g = p, m = h, y = 0, S = g; S; S = ja(S)) y++
							for (S = 0, C = m; C; C = ja(C)) S++
							for (; 0 < y - S; ) (g = ja(g)), y--
							for (; 0 < S - y; ) (m = ja(m)), S--
							for (; y--; ) {
								if (g === m || (m !== null && g === m.alternate)) break t
								;(g = ja(g)), (m = ja(m))
							}
							g = null
						}
					else g = null
					p !== null && S0(d, v, p, g, !1),
						h !== null && b !== null && S0(d, b, h, g, !0)
				}
			}
			e: {
				if (
					((v = c ? li(c) : window),
					(p = v.nodeName && v.nodeName.toLowerCase()),
					p === 'select' || (p === 'input' && v.type === 'file'))
				)
					var x = tP
				else if (f0(v))
					if (nS) x = aP
					else {
						x = rP
						var w = nP
					}
				else
					(p = v.nodeName) &&
						p.toLowerCase() === 'input' &&
						(v.type === 'checkbox' || v.type === 'radio') &&
						(x = oP)
				if (x && (x = x(e, c))) {
					tS(d, x, n, f)
					break e
				}
				w && w(e, v, c),
					e === 'focusout' &&
						(w = v._wrapperState) &&
						w.controlled &&
						v.type === 'number' &&
						Pv(v, 'number', v.value)
			}
			switch (((w = c ? li(c) : window), e)) {
				case 'focusin':
					;(f0(w) || w.contentEditable === 'true') &&
						((ai = w), (Fv = c), (Nl = null))
					break
				case 'focusout':
					Nl = Fv = ai = null
					break
				case 'mousedown':
					zv = !0
					break
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					;(zv = !1), g0(d, n, f)
					break
				case 'selectionchange':
					if (sP) break
				case 'keydown':
				case 'keyup':
					g0(d, n, f)
			}
			var E
			if (eh)
				e: {
					switch (e) {
						case 'compositionstart':
							var P = 'onCompositionStart'
							break e
						case 'compositionend':
							P = 'onCompositionEnd'
							break e
						case 'compositionupdate':
							P = 'onCompositionUpdate'
							break e
					}
					P = void 0
				}
			else
				oi
					? Jb(e, n) && (P = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart')
			P &&
				(Zb &&
					n.locale !== 'ko' &&
					(oi || P !== 'onCompositionStart'
						? P === 'onCompositionEnd' && oi && (E = Qb())
						: ((Io = f),
						  (Qm = 'value' in Io ? Io.value : Io.textContent),
						  (oi = !0))),
				(w = rc(c, P)),
				0 < w.length &&
					((P = new s0(P, e, null, n, f)),
					d.push({ event: P, listeners: w }),
					E ? (P.data = E) : ((E = eS(n)), E !== null && (P.data = E)))),
				(E = q$ ? Q$(e, n) : Z$(e, n)) &&
					((c = rc(c, 'onBeforeInput')),
					0 < c.length &&
						((f = new s0('onBeforeInput', 'beforeinput', null, n, f)),
						d.push({ event: f, listeners: c }),
						(f.data = E)))
		}
		fS(d, t)
	})
}
function ns(e, t, n) {
	return { instance: e, listener: t, currentTarget: n }
}
function rc(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var o = e,
			a = o.stateNode
		o.tag === 5 &&
			a !== null &&
			((o = a),
			(a = Xl(e, n)),
			a != null && r.unshift(ns(e, a, o)),
			(a = Xl(e, t)),
			a != null && r.push(ns(e, a, o))),
			(e = e.return)
	}
	return r
}
function ja(e) {
	if (e === null) return null
	do e = e.return
	while (e && e.tag !== 5)
	return e || null
}
function S0(e, t, n, r, o) {
	for (var a = t._reactName, i = []; n !== null && n !== r; ) {
		var l = n,
			s = l.alternate,
			c = l.stateNode
		if (s !== null && s === r) break
		l.tag === 5 &&
			c !== null &&
			((l = c),
			o
				? ((s = Xl(n, a)), s != null && i.unshift(ns(n, s, l)))
				: o || ((s = Xl(n, a)), s != null && i.push(ns(n, s, l)))),
			(n = n.return)
	}
	i.length !== 0 && e.push({ event: t, listeners: i })
}
var fP = /\r\n?/g,
	vP = /\u0000|\uFFFD/g
function C0(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			fP,
			`
`
		)
		.replace(vP, '')
}
function Zs(e, t, n) {
	if (((t = C0(t)), C0(e) !== t && n)) throw Error(ue(425))
}
function oc() {}
var Hv = null,
	Vv = null
function jv(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	)
}
var Bv = typeof setTimeout == 'function' ? setTimeout : void 0,
	pP = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	w0 = typeof Promise == 'function' ? Promise : void 0,
	mP =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof w0 < 'u'
			? function (e) {
					return w0.resolve(null).then(e).catch(hP)
			  }
			: Bv
function hP(e) {
	setTimeout(function () {
		throw e
	})
}
function pf(e, t) {
	var n = t,
		r = 0
	do {
		var o = n.nextSibling
		if ((e.removeChild(n), o && o.nodeType === 8))
			if (((n = o.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(o), Zl(t)
					return
				}
				r--
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++
		n = o
	} while (n)
	Zl(t)
}
function Wo(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType
		if (t === 1 || t === 3) break
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
			if (t === '/$') return null
		}
	}
	return e
}
function x0(e) {
	e = e.previousSibling
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e
				t--
			} else n === '/$' && t++
		}
		e = e.previousSibling
	}
	return null
}
var Wi = Math.random().toString(36).slice(2),
	Hr = '__reactFiber$' + Wi,
	rs = '__reactProps$' + Wi,
	uo = '__reactContainer$' + Wi,
	Wv = '__reactEvents$' + Wi,
	gP = '__reactListeners$' + Wi,
	yP = '__reactHandles$' + Wi
function fa(e) {
	var t = e[Hr]
	if (t) return t
	for (var n = e.parentNode; n; ) {
		if ((t = n[uo] || n[Hr])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = x0(e); e !== null; ) {
					if ((n = e[Hr])) return n
					e = x0(e)
				}
			return t
		}
		;(e = n), (n = e.parentNode)
	}
	return null
}
function ws(e) {
	return (
		(e = e[Hr] || e[uo]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	)
}
function li(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode
	throw Error(ue(33))
}
function od(e) {
	return e[rs] || null
}
var Uv = [],
	si = -1
function ta(e) {
	return { current: e }
}
function zt(e) {
	0 > si || ((e.current = Uv[si]), (Uv[si] = null), si--)
}
function _t(e, t) {
	si++, (Uv[si] = e.current), (e.current = t)
}
var Jo = {},
	kn = ta(Jo),
	Un = ta(!1),
	$a = Jo
function Pi(e, t) {
	var n = e.type.contextTypes
	if (!n) return Jo
	var r = e.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext
	var o = {},
		a
	for (a in n) o[a] = t[a]
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	)
}
function Yn(e) {
	return (e = e.childContextTypes), e != null
}
function ac() {
	zt(Un), zt(kn)
}
function E0(e, t, n) {
	if (kn.current !== Jo) throw Error(ue(168))
	_t(kn, t), _t(Un, n)
}
function pS(e, t, n) {
	var r = e.stateNode
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n
	r = r.getChildContext()
	for (var o in r) if (!(o in t)) throw Error(ue(108, n$(e) || 'Unknown', o))
	return Xt({}, n, r)
}
function ic(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jo),
		($a = kn.current),
		_t(kn, e),
		_t(Un, Un.current),
		!0
	)
}
function $0(e, t, n) {
	var r = e.stateNode
	if (!r) throw Error(ue(169))
	n
		? ((e = pS(e, t, $a)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  zt(Un),
		  zt(kn),
		  _t(kn, e))
		: zt(Un),
		_t(Un, n)
}
var to = null,
	ad = !1,
	mf = !1
function mS(e) {
	to === null ? (to = [e]) : to.push(e)
}
function bP(e) {
	;(ad = !0), mS(e)
}
function na() {
	if (!mf && to !== null) {
		mf = !0
		var e = 0,
			t = Ot
		try {
			var n = to
			for (Ot = 1; e < n.length; e++) {
				var r = n[e]
				do r = r(!0)
				while (r !== null)
			}
			;(to = null), (ad = !1)
		} catch (o) {
			throw (to !== null && (to = to.slice(e + 1)), Hb(Km, na), o)
		} finally {
			;(Ot = t), (mf = !1)
		}
	}
	return null
}
var ui = [],
	ci = 0,
	lc = null,
	sc = 0,
	fr = [],
	vr = 0,
	Pa = null,
	ro = 1,
	oo = ''
function sa(e, t) {
	;(ui[ci++] = sc), (ui[ci++] = lc), (lc = e), (sc = t)
}
function hS(e, t, n) {
	;(fr[vr++] = ro), (fr[vr++] = oo), (fr[vr++] = Pa), (Pa = e)
	var r = ro
	e = oo
	var o = 32 - Mr(r) - 1
	;(r &= ~(1 << o)), (n += 1)
	var a = 32 - Mr(t) + o
	if (30 < a) {
		var i = o - (o % 5)
		;(a = (r & ((1 << i) - 1)).toString(32)),
			(r >>= i),
			(o -= i),
			(ro = (1 << (32 - Mr(t) + o)) | (n << o) | r),
			(oo = a + e)
	} else (ro = (1 << a) | (n << o) | r), (oo = e)
}
function nh(e) {
	e.return !== null && (sa(e, 1), hS(e, 1, 0))
}
function rh(e) {
	for (; e === lc; )
		(lc = ui[--ci]), (ui[ci] = null), (sc = ui[--ci]), (ui[ci] = null)
	for (; e === Pa; )
		(Pa = fr[--vr]),
			(fr[vr] = null),
			(oo = fr[--vr]),
			(fr[vr] = null),
			(ro = fr[--vr]),
			(fr[vr] = null)
}
var nr = null,
	er = null,
	Vt = !1,
	Pr = null
function gS(e, t) {
	var n = pr(5, null, null, 0)
	;(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function P0(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (nr = e), (er = Wo(t.firstChild)), !0)
					: !1
			)
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (nr = e), (er = null), !0) : !1
			)
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Pa !== null ? { id: ro, overflow: oo } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824
					  }),
					  (n = pr(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (nr = e),
					  (er = null),
					  !0)
					: !1
			)
		default:
			return !1
	}
}
function Yv(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Kv(e) {
	if (Vt) {
		var t = er
		if (t) {
			var n = t
			if (!P0(e, t)) {
				if (Yv(e)) throw Error(ue(418))
				t = Wo(n.nextSibling)
				var r = nr
				t && P0(e, t)
					? gS(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (Vt = !1), (nr = e))
			}
		} else {
			if (Yv(e)) throw Error(ue(418))
			;(e.flags = (e.flags & -4097) | 2), (Vt = !1), (nr = e)
		}
	}
}
function R0(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return
	nr = e
}
function Js(e) {
	if (e !== nr) return !1
	if (!Vt) return R0(e), (Vt = !0), !1
	var t
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !jv(e.type, e.memoizedProps))),
		t && (t = er))
	) {
		if (Yv(e)) throw (yS(), Error(ue(418)))
		for (; t; ) gS(e, t), (t = Wo(t.nextSibling))
	}
	if ((R0(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(ue(317))
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data
					if (n === '/$') {
						if (t === 0) {
							er = Wo(e.nextSibling)
							break e
						}
						t--
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++
				}
				e = e.nextSibling
			}
			er = null
		}
	} else er = nr ? Wo(e.stateNode.nextSibling) : null
	return !0
}
function yS() {
	for (var e = er; e; ) e = Wo(e.nextSibling)
}
function Ri() {
	;(er = nr = null), (Vt = !1)
}
function oh(e) {
	Pr === null ? (Pr = [e]) : Pr.push(e)
}
var SP = bo.ReactCurrentBatchConfig
function Er(e, t) {
	if (e && e.defaultProps) {
		;(t = Xt({}, t)), (e = e.defaultProps)
		for (var n in e) t[n] === void 0 && (t[n] = e[n])
		return t
	}
	return t
}
var uc = ta(null),
	cc = null,
	di = null,
	ah = null
function ih() {
	ah = di = cc = null
}
function lh(e) {
	var t = uc.current
	zt(uc), (e._currentValue = t)
}
function Gv(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break
		e = e.return
	}
}
function Si(e, t) {
	;(cc = e),
		(ah = di = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Wn = !0), (e.firstContext = null))
}
function hr(e) {
	var t = e._currentValue
	if (ah !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), di === null)) {
			if (cc === null) throw Error(ue(308))
			;(di = e), (cc.dependencies = { lanes: 0, firstContext: e })
		} else di = di.next = e
	return t
}
var va = null
function sh(e) {
	va === null ? (va = [e]) : va.push(e)
}
function bS(e, t, n, r) {
	var o = t.interleaved
	return (
		o === null ? ((n.next = n), sh(t)) : ((n.next = o.next), (o.next = n)),
		(t.interleaved = n),
		co(e, r)
	)
}
function co(e, t) {
	e.lanes |= t
	var n = e.alternate
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return)
	return n.tag === 3 ? n.stateNode : null
}
var Ro = !1
function uh(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null
	}
}
function SS(e, t) {
	;(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects
			})
}
function lo(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}
function Uo(e, t, n) {
	var r = e.updateQueue
	if (r === null) return null
	if (((r = r.shared), Et & 2)) {
		var o = r.pending
		return (
			o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
			(r.pending = t),
			co(e, n)
		)
	}
	return (
		(o = r.interleaved),
		o === null ? ((t.next = t), sh(r)) : ((t.next = o.next), (o.next = t)),
		(r.interleaved = t),
		co(e, n)
	)
}
function ku(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gm(e, n)
	}
}
function M0(e, t) {
	var n = e.updateQueue,
		r = e.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var o = null,
			a = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				}
				a === null ? (o = a = i) : (a = a.next = i), (n = n.next)
			} while (n !== null)
			a === null ? (o = a = t) : (a = a.next = t)
		} else o = a = t
		;(n = {
			baseState: r.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: a,
			shared: r.shared,
			effects: r.effects
		}),
			(e.updateQueue = n)
		return
	}
	;(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t)
}
function dc(e, t, n, r) {
	var o = e.updateQueue
	Ro = !1
	var a = o.firstBaseUpdate,
		i = o.lastBaseUpdate,
		l = o.shared.pending
	if (l !== null) {
		o.shared.pending = null
		var s = l,
			c = s.next
		;(s.next = null), i === null ? (a = c) : (i.next = c), (i = s)
		var f = e.alternate
		f !== null &&
			((f = f.updateQueue),
			(l = f.lastBaseUpdate),
			l !== i &&
				(l === null ? (f.firstBaseUpdate = c) : (l.next = c),
				(f.lastBaseUpdate = s)))
	}
	if (a !== null) {
		var d = o.baseState
		;(i = 0), (f = c = s = null), (l = a)
		do {
			var v = l.lane,
				p = l.eventTime
			if ((r & v) === v) {
				f !== null &&
					(f = f.next =
						{
							eventTime: p,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null
						})
				e: {
					var h = e,
						g = l
					switch (((v = t), (p = n), g.tag)) {
						case 1:
							if (((h = g.payload), typeof h == 'function')) {
								d = h.call(p, d, v)
								break e
							}
							d = h
							break e
						case 3:
							h.flags = (h.flags & -65537) | 128
						case 0:
							if (
								((h = g.payload),
								(v = typeof h == 'function' ? h.call(p, d, v) : h),
								v == null)
							)
								break e
							d = Xt({}, d, v)
							break e
						case 2:
							Ro = !0
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(v = o.effects),
					v === null ? (o.effects = [l]) : v.push(l))
			} else
				(p = {
					eventTime: p,
					lane: v,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null
				}),
					f === null ? ((c = f = p), (s = d)) : (f = f.next = p),
					(i |= v)
			if (((l = l.next), l === null)) {
				if (((l = o.shared.pending), l === null)) break
				;(v = l),
					(l = v.next),
					(v.next = null),
					(o.lastBaseUpdate = v),
					(o.shared.pending = null)
			}
		} while (1)
		if (
			(f === null && (s = d),
			(o.baseState = s),
			(o.firstBaseUpdate = c),
			(o.lastBaseUpdate = f),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t
			do (i |= o.lane), (o = o.next)
			while (o !== t)
		} else a === null && (o.shared.lanes = 0)
		;(Ma |= i), (e.lanes = i), (e.memoizedState = d)
	}
}
function O0(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback
			if (o !== null) {
				if (((r.callback = null), (r = n), typeof o != 'function'))
					throw Error(ue(191, o))
				o.call(r)
			}
		}
}
var CS = new bb.Component().refs
function Xv(e, t, n, r) {
	;(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Xt({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n)
}
var id = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Da(e) === e : !1
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals
		var r = Ln(),
			o = Ko(e),
			a = lo(r, o)
		;(a.payload = t),
			n != null && (a.callback = n),
			(t = Uo(e, a, o)),
			t !== null && (Or(t, e, o, r), ku(t, e, o))
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals
		var r = Ln(),
			o = Ko(e),
			a = lo(r, o)
		;(a.tag = 1),
			(a.payload = t),
			n != null && (a.callback = n),
			(t = Uo(e, a, o)),
			t !== null && (Or(t, e, o, r), ku(t, e, o))
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals
		var n = Ln(),
			r = Ko(e),
			o = lo(n, r)
		;(o.tag = 2),
			t != null && (o.callback = t),
			(t = Uo(e, o, r)),
			t !== null && (Or(t, e, r, n), ku(t, e, r))
	}
}
function N0(e, t, n, r, o, a, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, a, i)
			: t.prototype && t.prototype.isPureReactComponent
			? !es(n, r) || !es(o, a)
			: !0
	)
}
function wS(e, t, n) {
	var r = !1,
		o = Jo,
		a = t.contextType
	return (
		typeof a == 'object' && a !== null
			? (a = hr(a))
			: ((o = Yn(t) ? $a : kn.current),
			  (r = t.contextTypes),
			  (a = (r = r != null) ? Pi(e, o) : Jo)),
		(t = new t(n, a)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = id),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = o),
			(e.__reactInternalMemoizedMaskedChildContext = a)),
		t
	)
}
function I0(e, t, n, r) {
	;(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && id.enqueueReplaceState(t, t.state, null)
}
function qv(e, t, n, r) {
	var o = e.stateNode
	;(o.props = n), (o.state = e.memoizedState), (o.refs = CS), uh(e)
	var a = t.contextType
	typeof a == 'object' && a !== null
		? (o.context = hr(a))
		: ((a = Yn(t) ? $a : kn.current), (o.context = Pi(e, a))),
		(o.state = e.memoizedState),
		(a = t.getDerivedStateFromProps),
		typeof a == 'function' && (Xv(e, t, a, n), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function' ||
			(typeof o.UNSAFE_componentWillMount != 'function' &&
				typeof o.componentWillMount != 'function') ||
			((t = o.state),
			typeof o.componentWillMount == 'function' && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == 'function' &&
				o.UNSAFE_componentWillMount(),
			t !== o.state && id.enqueueReplaceState(o, o.state, null),
			dc(e, n, o, r),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function ul(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(ue(309))
				var r = n.stateNode
			}
			if (!r) throw Error(ue(147, e))
			var o = r,
				a = '' + e
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === a
				? t.ref
				: ((t = function (i) {
						var l = o.refs
						l === CS && (l = o.refs = {}), i === null ? delete l[a] : (l[a] = i)
				  }),
				  (t._stringRef = a),
				  t)
		}
		if (typeof e != 'string') throw Error(ue(284))
		if (!n._owner) throw Error(ue(290, e))
	}
	return e
}
function eu(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			ue(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	)
}
function k0(e) {
	var t = e._init
	return t(e._payload)
}
function xS(e) {
	function t(m, y) {
		if (e) {
			var S = m.deletions
			S === null ? ((m.deletions = [y]), (m.flags |= 16)) : S.push(y)
		}
	}
	function n(m, y) {
		if (!e) return null
		for (; y !== null; ) t(m, y), (y = y.sibling)
		return null
	}
	function r(m, y) {
		for (m = new Map(); y !== null; )
			y.key !== null ? m.set(y.key, y) : m.set(y.index, y), (y = y.sibling)
		return m
	}
	function o(m, y) {
		return (m = Go(m, y)), (m.index = 0), (m.sibling = null), m
	}
	function a(m, y, S) {
		return (
			(m.index = S),
			e
				? ((S = m.alternate),
				  S !== null
						? ((S = S.index), S < y ? ((m.flags |= 2), y) : S)
						: ((m.flags |= 2), y))
				: ((m.flags |= 1048576), y)
		)
	}
	function i(m) {
		return e && m.alternate === null && (m.flags |= 2), m
	}
	function l(m, y, S, C) {
		return y === null || y.tag !== 6
			? ((y = wf(S, m.mode, C)), (y.return = m), y)
			: ((y = o(y, S)), (y.return = m), y)
	}
	function s(m, y, S, C) {
		var x = S.type
		return x === ri
			? f(m, y, S.props.children, C, S.key)
			: y !== null &&
			  (y.elementType === x ||
					(typeof x == 'object' &&
						x !== null &&
						x.$$typeof === Po &&
						k0(x) === y.type))
			? ((C = o(y, S.props)), (C.ref = ul(m, y, S)), (C.return = m), C)
			: ((C = Fu(S.type, S.key, S.props, null, m.mode, C)),
			  (C.ref = ul(m, y, S)),
			  (C.return = m),
			  C)
	}
	function c(m, y, S, C) {
		return y === null ||
			y.tag !== 4 ||
			y.stateNode.containerInfo !== S.containerInfo ||
			y.stateNode.implementation !== S.implementation
			? ((y = xf(S, m.mode, C)), (y.return = m), y)
			: ((y = o(y, S.children || [])), (y.return = m), y)
	}
	function f(m, y, S, C, x) {
		return y === null || y.tag !== 7
			? ((y = Sa(S, m.mode, C, x)), (y.return = m), y)
			: ((y = o(y, S)), (y.return = m), y)
	}
	function d(m, y, S) {
		if ((typeof y == 'string' && y !== '') || typeof y == 'number')
			return (y = wf('' + y, m.mode, S)), (y.return = m), y
		if (typeof y == 'object' && y !== null) {
			switch (y.$$typeof) {
				case Bs:
					return (
						(S = Fu(y.type, y.key, y.props, null, m.mode, S)),
						(S.ref = ul(m, null, y)),
						(S.return = m),
						S
					)
				case ni:
					return (y = xf(y, m.mode, S)), (y.return = m), y
				case Po:
					var C = y._init
					return d(m, C(y._payload), S)
			}
			if (bl(y) || ol(y)) return (y = Sa(y, m.mode, S, null)), (y.return = m), y
			eu(m, y)
		}
		return null
	}
	function v(m, y, S, C) {
		var x = y !== null ? y.key : null
		if ((typeof S == 'string' && S !== '') || typeof S == 'number')
			return x !== null ? null : l(m, y, '' + S, C)
		if (typeof S == 'object' && S !== null) {
			switch (S.$$typeof) {
				case Bs:
					return S.key === x ? s(m, y, S, C) : null
				case ni:
					return S.key === x ? c(m, y, S, C) : null
				case Po:
					return (x = S._init), v(m, y, x(S._payload), C)
			}
			if (bl(S) || ol(S)) return x !== null ? null : f(m, y, S, C, null)
			eu(m, S)
		}
		return null
	}
	function p(m, y, S, C, x) {
		if ((typeof C == 'string' && C !== '') || typeof C == 'number')
			return (m = m.get(S) || null), l(y, m, '' + C, x)
		if (typeof C == 'object' && C !== null) {
			switch (C.$$typeof) {
				case Bs:
					return (m = m.get(C.key === null ? S : C.key) || null), s(y, m, C, x)
				case ni:
					return (m = m.get(C.key === null ? S : C.key) || null), c(y, m, C, x)
				case Po:
					var w = C._init
					return p(m, y, S, w(C._payload), x)
			}
			if (bl(C) || ol(C)) return (m = m.get(S) || null), f(y, m, C, x, null)
			eu(y, C)
		}
		return null
	}
	function h(m, y, S, C) {
		for (
			var x = null, w = null, E = y, P = (y = 0), N = null;
			E !== null && P < S.length;
			P++
		) {
			E.index > P ? ((N = E), (E = null)) : (N = E.sibling)
			var O = v(m, E, S[P], C)
			if (O === null) {
				E === null && (E = N)
				break
			}
			e && E && O.alternate === null && t(m, E),
				(y = a(O, y, P)),
				w === null ? (x = O) : (w.sibling = O),
				(w = O),
				(E = N)
		}
		if (P === S.length) return n(m, E), Vt && sa(m, P), x
		if (E === null) {
			for (; P < S.length; P++)
				(E = d(m, S[P], C)),
					E !== null &&
						((y = a(E, y, P)), w === null ? (x = E) : (w.sibling = E), (w = E))
			return Vt && sa(m, P), x
		}
		for (E = r(m, E); P < S.length; P++)
			(N = p(E, m, P, S[P], C)),
				N !== null &&
					(e && N.alternate !== null && E.delete(N.key === null ? P : N.key),
					(y = a(N, y, P)),
					w === null ? (x = N) : (w.sibling = N),
					(w = N))
		return (
			e &&
				E.forEach(function (k) {
					return t(m, k)
				}),
			Vt && sa(m, P),
			x
		)
	}
	function g(m, y, S, C) {
		var x = ol(S)
		if (typeof x != 'function') throw Error(ue(150))
		if (((S = x.call(S)), S == null)) throw Error(ue(151))
		for (
			var w = (x = null), E = y, P = (y = 0), N = null, O = S.next();
			E !== null && !O.done;
			P++, O = S.next()
		) {
			E.index > P ? ((N = E), (E = null)) : (N = E.sibling)
			var k = v(m, E, O.value, C)
			if (k === null) {
				E === null && (E = N)
				break
			}
			e && E && k.alternate === null && t(m, E),
				(y = a(k, y, P)),
				w === null ? (x = k) : (w.sibling = k),
				(w = k),
				(E = N)
		}
		if (O.done) return n(m, E), Vt && sa(m, P), x
		if (E === null) {
			for (; !O.done; P++, O = S.next())
				(O = d(m, O.value, C)),
					O !== null &&
						((y = a(O, y, P)), w === null ? (x = O) : (w.sibling = O), (w = O))
			return Vt && sa(m, P), x
		}
		for (E = r(m, E); !O.done; P++, O = S.next())
			(O = p(E, m, P, O.value, C)),
				O !== null &&
					(e && O.alternate !== null && E.delete(O.key === null ? P : O.key),
					(y = a(O, y, P)),
					w === null ? (x = O) : (w.sibling = O),
					(w = O))
		return (
			e &&
				E.forEach(function (I) {
					return t(m, I)
				}),
			Vt && sa(m, P),
			x
		)
	}
	function b(m, y, S, C) {
		if (
			(typeof S == 'object' &&
				S !== null &&
				S.type === ri &&
				S.key === null &&
				(S = S.props.children),
			typeof S == 'object' && S !== null)
		) {
			switch (S.$$typeof) {
				case Bs:
					e: {
						for (var x = S.key, w = y; w !== null; ) {
							if (w.key === x) {
								if (((x = S.type), x === ri)) {
									if (w.tag === 7) {
										n(m, w.sibling),
											(y = o(w, S.props.children)),
											(y.return = m),
											(m = y)
										break e
									}
								} else if (
									w.elementType === x ||
									(typeof x == 'object' &&
										x !== null &&
										x.$$typeof === Po &&
										k0(x) === w.type)
								) {
									n(m, w.sibling),
										(y = o(w, S.props)),
										(y.ref = ul(m, w, S)),
										(y.return = m),
										(m = y)
									break e
								}
								n(m, w)
								break
							} else t(m, w)
							w = w.sibling
						}
						S.type === ri
							? ((y = Sa(S.props.children, m.mode, C, S.key)),
							  (y.return = m),
							  (m = y))
							: ((C = Fu(S.type, S.key, S.props, null, m.mode, C)),
							  (C.ref = ul(m, y, S)),
							  (C.return = m),
							  (m = C))
					}
					return i(m)
				case ni:
					e: {
						for (w = S.key; y !== null; ) {
							if (y.key === w)
								if (
									y.tag === 4 &&
									y.stateNode.containerInfo === S.containerInfo &&
									y.stateNode.implementation === S.implementation
								) {
									n(m, y.sibling),
										(y = o(y, S.children || [])),
										(y.return = m),
										(m = y)
									break e
								} else {
									n(m, y)
									break
								}
							else t(m, y)
							y = y.sibling
						}
						;(y = xf(S, m.mode, C)), (y.return = m), (m = y)
					}
					return i(m)
				case Po:
					return (w = S._init), b(m, y, w(S._payload), C)
			}
			if (bl(S)) return h(m, y, S, C)
			if (ol(S)) return g(m, y, S, C)
			eu(m, S)
		}
		return (typeof S == 'string' && S !== '') || typeof S == 'number'
			? ((S = '' + S),
			  y !== null && y.tag === 6
					? (n(m, y.sibling), (y = o(y, S)), (y.return = m), (m = y))
					: (n(m, y), (y = wf(S, m.mode, C)), (y.return = m), (m = y)),
			  i(m))
			: n(m, y)
	}
	return b
}
var Mi = xS(!0),
	ES = xS(!1),
	xs = {},
	Br = ta(xs),
	os = ta(xs),
	as = ta(xs)
function pa(e) {
	if (e === xs) throw Error(ue(174))
	return e
}
function ch(e, t) {
	switch ((_t(as, t), _t(os, e), _t(Br, xs), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Mv(null, '')
			break
		default:
			;(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Mv(t, e))
	}
	zt(Br), _t(Br, t)
}
function Oi() {
	zt(Br), zt(os), zt(as)
}
function $S(e) {
	pa(as.current)
	var t = pa(Br.current),
		n = Mv(t, e.type)
	t !== n && (_t(os, e), _t(Br, n))
}
function dh(e) {
	os.current === e && (zt(Br), zt(os))
}
var Yt = ta(0)
function fc(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			;(t.child.return = t), (t = t.child)
			continue
		}
		if (t === e) break
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null
			t = t.return
		}
		;(t.sibling.return = t.return), (t = t.sibling)
	}
	return null
}
var hf = []
function fh() {
	for (var e = 0; e < hf.length; e++) hf[e]._workInProgressVersionPrimary = null
	hf.length = 0
}
var Tu = bo.ReactCurrentDispatcher,
	gf = bo.ReactCurrentBatchConfig,
	Ra = 0,
	Gt = null,
	vn = null,
	yn = null,
	vc = !1,
	Il = !1,
	is = 0,
	CP = 0
function On() {
	throw Error(ue(321))
}
function vh(e, t) {
	if (t === null) return !1
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Ir(e[n], t[n])) return !1
	return !0
}
function ph(e, t, n, r, o, a) {
	if (
		((Ra = a),
		(Gt = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Tu.current = e === null || e.memoizedState === null ? $P : PP),
		(e = n(r, o)),
		Il)
	) {
		a = 0
		do {
			if (((Il = !1), (is = 0), 25 <= a)) throw Error(ue(301))
			;(a += 1),
				(yn = vn = null),
				(t.updateQueue = null),
				(Tu.current = RP),
				(e = n(r, o))
		} while (Il)
	}
	if (
		((Tu.current = pc),
		(t = vn !== null && vn.next !== null),
		(Ra = 0),
		(yn = vn = Gt = null),
		(vc = !1),
		t)
	)
		throw Error(ue(300))
	return e
}
function mh() {
	var e = is !== 0
	return (is = 0), e
}
function zr() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	}
	return yn === null ? (Gt.memoizedState = yn = e) : (yn = yn.next = e), yn
}
function gr() {
	if (vn === null) {
		var e = Gt.alternate
		e = e !== null ? e.memoizedState : null
	} else e = vn.next
	var t = yn === null ? Gt.memoizedState : yn.next
	if (t !== null) (yn = t), (vn = e)
	else {
		if (e === null) throw Error(ue(310))
		;(vn = e),
			(e = {
				memoizedState: vn.memoizedState,
				baseState: vn.baseState,
				baseQueue: vn.baseQueue,
				queue: vn.queue,
				next: null
			}),
			yn === null ? (Gt.memoizedState = yn = e) : (yn = yn.next = e)
	}
	return yn
}
function ls(e, t) {
	return typeof t == 'function' ? t(e) : t
}
function yf(e) {
	var t = gr(),
		n = t.queue
	if (n === null) throw Error(ue(311))
	n.lastRenderedReducer = e
	var r = vn,
		o = r.baseQueue,
		a = n.pending
	if (a !== null) {
		if (o !== null) {
			var i = o.next
			;(o.next = a.next), (a.next = i)
		}
		;(r.baseQueue = o = a), (n.pending = null)
	}
	if (o !== null) {
		;(a = o.next), (r = r.baseState)
		var l = (i = null),
			s = null,
			c = a
		do {
			var f = c.lane
			if ((Ra & f) === f)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: c.action,
							hasEagerState: c.hasEagerState,
							eagerState: c.eagerState,
							next: null
						}),
					(r = c.hasEagerState ? c.eagerState : e(r, c.action))
			else {
				var d = {
					lane: f,
					action: c.action,
					hasEagerState: c.hasEagerState,
					eagerState: c.eagerState,
					next: null
				}
				s === null ? ((l = s = d), (i = r)) : (s = s.next = d),
					(Gt.lanes |= f),
					(Ma |= f)
			}
			c = c.next
		} while (c !== null && c !== a)
		s === null ? (i = r) : (s.next = l),
			Ir(r, t.memoizedState) || (Wn = !0),
			(t.memoizedState = r),
			(t.baseState = i),
			(t.baseQueue = s),
			(n.lastRenderedState = r)
	}
	if (((e = n.interleaved), e !== null)) {
		o = e
		do (a = o.lane), (Gt.lanes |= a), (Ma |= a), (o = o.next)
		while (o !== e)
	} else o === null && (n.lanes = 0)
	return [t.memoizedState, n.dispatch]
}
function bf(e) {
	var t = gr(),
		n = t.queue
	if (n === null) throw Error(ue(311))
	n.lastRenderedReducer = e
	var r = n.dispatch,
		o = n.pending,
		a = t.memoizedState
	if (o !== null) {
		n.pending = null
		var i = (o = o.next)
		do (a = e(a, i.action)), (i = i.next)
		while (i !== o)
		Ir(a, t.memoizedState) || (Wn = !0),
			(t.memoizedState = a),
			t.baseQueue === null && (t.baseState = a),
			(n.lastRenderedState = a)
	}
	return [a, r]
}
function PS() {}
function RS(e, t) {
	var n = Gt,
		r = gr(),
		o = t(),
		a = !Ir(r.memoizedState, o)
	if (
		(a && ((r.memoizedState = o), (Wn = !0)),
		(r = r.queue),
		hh(NS.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || a || (yn !== null && yn.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			ss(9, OS.bind(null, n, r, o, t), void 0, null),
			bn === null)
		)
			throw Error(ue(349))
		Ra & 30 || MS(n, t, o)
	}
	return o
}
function MS(e, t, n) {
	;(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Gt.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Gt.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function OS(e, t, n, r) {
	;(t.value = n), (t.getSnapshot = r), IS(t) && kS(e)
}
function NS(e, t, n) {
	return n(function () {
		IS(t) && kS(e)
	})
}
function IS(e) {
	var t = e.getSnapshot
	e = e.value
	try {
		var n = t()
		return !Ir(e, n)
	} catch {
		return !0
	}
}
function kS(e) {
	var t = co(e, 1)
	t !== null && Or(t, e, 1, -1)
}
function T0(e) {
	var t = zr()
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ls,
			lastRenderedState: e
		}),
		(t.queue = e),
		(e = e.dispatch = EP.bind(null, Gt, e)),
		[t.memoizedState, e]
	)
}
function ss(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Gt.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Gt.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	)
}
function TS() {
	return gr().memoizedState
}
function Du(e, t, n, r) {
	var o = zr()
	;(Gt.flags |= e),
		(o.memoizedState = ss(1 | t, n, void 0, r === void 0 ? null : r))
}
function ld(e, t, n, r) {
	var o = gr()
	r = r === void 0 ? null : r
	var a = void 0
	if (vn !== null) {
		var i = vn.memoizedState
		if (((a = i.destroy), r !== null && vh(r, i.deps))) {
			o.memoizedState = ss(t, n, a, r)
			return
		}
	}
	;(Gt.flags |= e), (o.memoizedState = ss(1 | t, n, a, r))
}
function D0(e, t) {
	return Du(8390656, 8, e, t)
}
function hh(e, t) {
	return ld(2048, 8, e, t)
}
function DS(e, t) {
	return ld(4, 2, e, t)
}
function _S(e, t) {
	return ld(4, 4, e, t)
}
function LS(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null)
			}
		)
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null
			}
		)
}
function AS(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), ld(4, 4, LS.bind(null, t, e), n)
	)
}
function gh() {}
function FS(e, t) {
	var n = gr()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && vh(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e)
}
function zS(e, t) {
	var n = gr()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && vh(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e)
}
function HS(e, t, n) {
	return Ra & 21
		? (Ir(n, t) || ((n = Bb()), (Gt.lanes |= n), (Ma |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Wn = !0)), (e.memoizedState = n))
}
function wP(e, t) {
	var n = Ot
	;(Ot = n !== 0 && 4 > n ? n : 4), e(!0)
	var r = gf.transition
	gf.transition = {}
	try {
		e(!1), t()
	} finally {
		;(Ot = n), (gf.transition = r)
	}
}
function VS() {
	return gr().memoizedState
}
function xP(e, t, n) {
	var r = Ko(e)
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}),
		jS(e))
	)
		BS(t, n)
	else if (((n = bS(e, t, n, r)), n !== null)) {
		var o = Ln()
		Or(n, e, r, o), WS(n, t, r)
	}
}
function EP(e, t, n) {
	var r = Ko(e),
		o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
	if (jS(e)) BS(t, o)
	else {
		var a = e.alternate
		if (
			e.lanes === 0 &&
			(a === null || a.lanes === 0) &&
			((a = t.lastRenderedReducer), a !== null)
		)
			try {
				var i = t.lastRenderedState,
					l = a(i, n)
				if (((o.hasEagerState = !0), (o.eagerState = l), Ir(l, i))) {
					var s = t.interleaved
					s === null
						? ((o.next = o), sh(t))
						: ((o.next = s.next), (s.next = o)),
						(t.interleaved = o)
					return
				}
			} catch {
			} finally {
			}
		;(n = bS(e, t, o, r)),
			n !== null && ((o = Ln()), Or(n, e, r, o), WS(n, t, r))
	}
}
function jS(e) {
	var t = e.alternate
	return e === Gt || (t !== null && t === Gt)
}
function BS(e, t) {
	Il = vc = !0
	var n = e.pending
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function WS(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gm(e, n)
	}
}
var pc = {
		readContext: hr,
		useCallback: On,
		useContext: On,
		useEffect: On,
		useImperativeHandle: On,
		useInsertionEffect: On,
		useLayoutEffect: On,
		useMemo: On,
		useReducer: On,
		useRef: On,
		useState: On,
		useDebugValue: On,
		useDeferredValue: On,
		useTransition: On,
		useMutableSource: On,
		useSyncExternalStore: On,
		useId: On,
		unstable_isNewReconciler: !1
	},
	$P = {
		readContext: hr,
		useCallback: function (e, t) {
			return (zr().memoizedState = [e, t === void 0 ? null : t]), e
		},
		useContext: hr,
		useEffect: D0,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Du(4194308, 4, LS.bind(null, t, e), n)
			)
		},
		useLayoutEffect: function (e, t) {
			return Du(4194308, 4, e, t)
		},
		useInsertionEffect: function (e, t) {
			return Du(4, 2, e, t)
		},
		useMemo: function (e, t) {
			var n = zr()
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			)
		},
		useReducer: function (e, t, n) {
			var r = zr()
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t
				}),
				(r.queue = e),
				(e = e.dispatch = xP.bind(null, Gt, e)),
				[r.memoizedState, e]
			)
		},
		useRef: function (e) {
			var t = zr()
			return (e = { current: e }), (t.memoizedState = e)
		},
		useState: T0,
		useDebugValue: gh,
		useDeferredValue: function (e) {
			return (zr().memoizedState = e)
		},
		useTransition: function () {
			var e = T0(!1),
				t = e[0]
			return (e = wP.bind(null, e[1])), (zr().memoizedState = e), [t, e]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Gt,
				o = zr()
			if (Vt) {
				if (n === void 0) throw Error(ue(407))
				n = n()
			} else {
				if (((n = t()), bn === null)) throw Error(ue(349))
				Ra & 30 || MS(r, t, n)
			}
			o.memoizedState = n
			var a = { value: n, getSnapshot: t }
			return (
				(o.queue = a),
				D0(NS.bind(null, r, a, e), [e]),
				(r.flags |= 2048),
				ss(9, OS.bind(null, r, a, n, t), void 0, null),
				n
			)
		},
		useId: function () {
			var e = zr(),
				t = bn.identifierPrefix
			if (Vt) {
				var n = oo,
					r = ro
				;(n = (r & ~(1 << (32 - Mr(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = is++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':')
			} else (n = CP++), (t = ':' + t + 'r' + n.toString(32) + ':')
			return (e.memoizedState = t)
		},
		unstable_isNewReconciler: !1
	},
	PP = {
		readContext: hr,
		useCallback: FS,
		useContext: hr,
		useEffect: hh,
		useImperativeHandle: AS,
		useInsertionEffect: DS,
		useLayoutEffect: _S,
		useMemo: zS,
		useReducer: yf,
		useRef: TS,
		useState: function () {
			return yf(ls)
		},
		useDebugValue: gh,
		useDeferredValue: function (e) {
			var t = gr()
			return HS(t, vn.memoizedState, e)
		},
		useTransition: function () {
			var e = yf(ls)[0],
				t = gr().memoizedState
			return [e, t]
		},
		useMutableSource: PS,
		useSyncExternalStore: RS,
		useId: VS,
		unstable_isNewReconciler: !1
	},
	RP = {
		readContext: hr,
		useCallback: FS,
		useContext: hr,
		useEffect: hh,
		useImperativeHandle: AS,
		useInsertionEffect: DS,
		useLayoutEffect: _S,
		useMemo: zS,
		useReducer: bf,
		useRef: TS,
		useState: function () {
			return bf(ls)
		},
		useDebugValue: gh,
		useDeferredValue: function (e) {
			var t = gr()
			return vn === null ? (t.memoizedState = e) : HS(t, vn.memoizedState, e)
		},
		useTransition: function () {
			var e = bf(ls)[0],
				t = gr().memoizedState
			return [e, t]
		},
		useMutableSource: PS,
		useSyncExternalStore: RS,
		useId: VS,
		unstable_isNewReconciler: !1
	}
function Ni(e, t) {
	try {
		var n = '',
			r = t
		do (n += t$(r)), (r = r.return)
		while (r)
		var o = n
	} catch (a) {
		o =
			`
Error generating stack: ` +
			a.message +
			`
` +
			a.stack
	}
	return { value: e, source: t, stack: o, digest: null }
}
function Sf(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Qv(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var MP = typeof WeakMap == 'function' ? WeakMap : Map
function US(e, t, n) {
	;(n = lo(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = t.value
	return (
		(n.callback = function () {
			hc || ((hc = !0), (lp = r)), Qv(e, t)
		}),
		n
	)
}
function YS(e, t, n) {
	;(n = lo(-1, n)), (n.tag = 3)
	var r = e.type.getDerivedStateFromError
	if (typeof r == 'function') {
		var o = t.value
		;(n.payload = function () {
			return r(o)
		}),
			(n.callback = function () {
				Qv(e, t)
			})
	}
	var a = e.stateNode
	return (
		a !== null &&
			typeof a.componentDidCatch == 'function' &&
			(n.callback = function () {
				Qv(e, t),
					typeof r != 'function' &&
						(Yo === null ? (Yo = new Set([this])) : Yo.add(this))
				var i = t.stack
				this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
			}),
		n
	)
}
function _0(e, t, n) {
	var r = e.pingCache
	if (r === null) {
		r = e.pingCache = new MP()
		var o = new Set()
		r.set(t, o)
	} else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
	o.has(n) || (o.add(n), (e = jP.bind(null, e, t, n)), t.then(e, e))
}
function L0(e) {
	do {
		var t
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e
		e = e.return
	} while (e !== null)
	return null
}
function A0(e, t, n, r, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = lo(-1, 1)), (t.tag = 2), Uo(n, t, 1))),
				  (n.lanes |= 1)),
		  e)
}
var OP = bo.ReactCurrentOwner,
	Wn = !1
function _n(e, t, n, r) {
	t.child = e === null ? ES(t, null, n, r) : Mi(t, e.child, n, r)
}
function F0(e, t, n, r, o) {
	n = n.render
	var a = t.ref
	return (
		Si(t, o),
		(r = ph(e, t, n, r, a, o)),
		(n = mh()),
		e !== null && !Wn
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  fo(e, t, o))
			: (Vt && n && nh(t), (t.flags |= 1), _n(e, t, r, o), t.child)
	)
}
function z0(e, t, n, r, o) {
	if (e === null) {
		var a = n.type
		return typeof a == 'function' &&
			!$h(a) &&
			a.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = a), KS(e, t, a, r, o))
			: ((e = Fu(n.type, null, r, t, t.mode, o)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e))
	}
	if (((a = e.child), !(e.lanes & o))) {
		var i = a.memoizedProps
		if (
			((n = n.compare), (n = n !== null ? n : es), n(i, r) && e.ref === t.ref)
		)
			return fo(e, t, o)
	}
	return (
		(t.flags |= 1),
		(e = Go(a, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	)
}
function KS(e, t, n, r, o) {
	if (e !== null) {
		var a = e.memoizedProps
		if (es(a, r) && e.ref === t.ref)
			if (((Wn = !1), (t.pendingProps = r = a), (e.lanes & o) !== 0))
				e.flags & 131072 && (Wn = !0)
			else return (t.lanes = e.lanes), fo(e, t, o)
	}
	return Zv(e, t, n, r, o)
}
function GS(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		a = e !== null ? e.memoizedState : null
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				_t(vi, Jn),
				(Jn |= n)
		else {
			if (!(n & 1073741824))
				return (
					(e = a !== null ? a.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}),
					(t.updateQueue = null),
					_t(vi, Jn),
					(Jn |= e),
					null
				)
			;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = a !== null ? a.baseLanes : n),
				_t(vi, Jn),
				(Jn |= r)
		}
	else
		a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
			_t(vi, Jn),
			(Jn |= r)
	return _n(e, t, o, n), t.child
}
function XS(e, t) {
	var n = t.ref
	;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152))
}
function Zv(e, t, n, r, o) {
	var a = Yn(n) ? $a : kn.current
	return (
		(a = Pi(t, a)),
		Si(t, o),
		(n = ph(e, t, n, r, a, o)),
		(r = mh()),
		e !== null && !Wn
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  fo(e, t, o))
			: (Vt && r && nh(t), (t.flags |= 1), _n(e, t, n, o), t.child)
	)
}
function H0(e, t, n, r, o) {
	if (Yn(n)) {
		var a = !0
		ic(t)
	} else a = !1
	if ((Si(t, o), t.stateNode === null))
		_u(e, t), wS(t, n, r), qv(t, n, r, o), (r = !0)
	else if (e === null) {
		var i = t.stateNode,
			l = t.memoizedProps
		i.props = l
		var s = i.context,
			c = n.contextType
		typeof c == 'object' && c !== null
			? (c = hr(c))
			: ((c = Yn(n) ? $a : kn.current), (c = Pi(t, c)))
		var f = n.getDerivedStateFromProps,
			d =
				typeof f == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
		d ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof i.componentWillReceiveProps != 'function') ||
			((l !== r || s !== c) && I0(t, i, r, c)),
			(Ro = !1)
		var v = t.memoizedState
		;(i.state = v),
			dc(t, r, i, o),
			(s = t.memoizedState),
			l !== r || v !== s || Un.current || Ro
				? (typeof f == 'function' && (Xv(t, n, f, r), (s = t.memoizedState)),
				  (l = Ro || N0(t, n, l, r, v, s, c))
						? (d ||
								(typeof i.UNSAFE_componentWillMount != 'function' &&
									typeof i.componentWillMount != 'function') ||
								(typeof i.componentWillMount == 'function' &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == 'function' &&
									i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (i.props = r),
				  (i.state = s),
				  (i.context = c),
				  (r = l))
				: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1))
	} else {
		;(i = t.stateNode),
			SS(e, t),
			(l = t.memoizedProps),
			(c = t.type === t.elementType ? l : Er(t.type, l)),
			(i.props = c),
			(d = t.pendingProps),
			(v = i.context),
			(s = n.contextType),
			typeof s == 'object' && s !== null
				? (s = hr(s))
				: ((s = Yn(n) ? $a : kn.current), (s = Pi(t, s)))
		var p = n.getDerivedStateFromProps
		;(f =
			typeof p == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function') ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof i.componentWillReceiveProps != 'function') ||
			((l !== d || v !== s) && I0(t, i, r, s)),
			(Ro = !1),
			(v = t.memoizedState),
			(i.state = v),
			dc(t, r, i, o)
		var h = t.memoizedState
		l !== d || v !== h || Un.current || Ro
			? (typeof p == 'function' && (Xv(t, n, p, r), (h = t.memoizedState)),
			  (c = Ro || N0(t, n, c, r, v, h, s) || !1)
					? (f ||
							(typeof i.UNSAFE_componentWillUpdate != 'function' &&
								typeof i.componentWillUpdate != 'function') ||
							(typeof i.componentWillUpdate == 'function' &&
								i.componentWillUpdate(r, h, s),
							typeof i.UNSAFE_componentWillUpdate == 'function' &&
								i.UNSAFE_componentWillUpdate(r, h, s)),
					  typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != 'function' ||
							(l === e.memoizedProps && v === e.memoizedState) ||
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != 'function' ||
							(l === e.memoizedProps && v === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = h)),
			  (i.props = r),
			  (i.state = h),
			  (i.context = s),
			  (r = c))
			: (typeof i.componentDidUpdate != 'function' ||
					(l === e.memoizedProps && v === e.memoizedState) ||
					(t.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != 'function' ||
					(l === e.memoizedProps && v === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1))
	}
	return Jv(e, t, n, r, a, o)
}
function Jv(e, t, n, r, o, a) {
	XS(e, t)
	var i = (t.flags & 128) !== 0
	if (!r && !i) return o && $0(t, n, !1), fo(e, t, a)
	;(r = t.stateNode), (OP.current = t)
	var l =
		i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = Mi(t, e.child, null, a)), (t.child = Mi(t, null, l, a)))
			: _n(e, t, l, a),
		(t.memoizedState = r.state),
		o && $0(t, n, !0),
		t.child
	)
}
function qS(e) {
	var t = e.stateNode
	t.pendingContext
		? E0(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && E0(e, t.context, !1),
		ch(e, t.containerInfo)
}
function V0(e, t, n, r, o) {
	return Ri(), oh(o), (t.flags |= 256), _n(e, t, n, r), t.child
}
var ep = { dehydrated: null, treeContext: null, retryLane: 0 }
function tp(e) {
	return { baseLanes: e, cachePool: null, transitions: null }
}
function QS(e, t, n) {
	var r = t.pendingProps,
		o = Yt.current,
		a = !1,
		i = (t.flags & 128) !== 0,
		l
	if (
		((l = i) ||
			(l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		l
			? ((a = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (o |= 1),
		_t(Yt, o & 1),
		e === null)
	)
		return (
			Kv(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((i = r.children),
				  (e = r.fallback),
				  a
						? ((r = t.mode),
						  (a = t.child),
						  (i = { mode: 'hidden', children: i }),
						  !(r & 1) && a !== null
								? ((a.childLanes = 0), (a.pendingProps = i))
								: (a = cd(i, r, 0, null)),
						  (e = Sa(e, r, n, null)),
						  (a.return = t),
						  (e.return = t),
						  (a.sibling = e),
						  (t.child = a),
						  (t.child.memoizedState = tp(n)),
						  (t.memoizedState = ep),
						  e)
						: yh(t, i))
		)
	if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
		return NP(e, t, i, r, l, o, n)
	if (a) {
		;(a = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling)
		var s = { mode: 'hidden', children: r.children }
		return (
			!(i & 1) && t.child !== o
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = Go(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
			l !== null ? (a = Go(l, a)) : ((a = Sa(a, i, n, null)), (a.flags |= 2)),
			(a.return = t),
			(r.return = t),
			(r.sibling = a),
			(t.child = r),
			(r = a),
			(a = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? tp(n)
					: {
							baseLanes: i.baseLanes | n,
							cachePool: null,
							transitions: i.transitions
					  }),
			(a.memoizedState = i),
			(a.childLanes = e.childLanes & ~n),
			(t.memoizedState = ep),
			r
		)
	}
	return (
		(a = e.child),
		(e = a.sibling),
		(r = Go(a, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	)
}
function yh(e, t) {
	return (
		(t = cd({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	)
}
function tu(e, t, n, r) {
	return (
		r !== null && oh(r),
		Mi(t, e.child, null, n),
		(e = yh(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	)
}
function NP(e, t, n, r, o, a, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Sf(Error(ue(422)))), tu(e, t, i, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((a = r.fallback),
			  (o = t.mode),
			  (r = cd({ mode: 'visible', children: r.children }, o, 0, null)),
			  (a = Sa(a, o, i, null)),
			  (a.flags |= 2),
			  (r.return = t),
			  (a.return = t),
			  (r.sibling = a),
			  (t.child = r),
			  t.mode & 1 && Mi(t, e.child, null, i),
			  (t.child.memoizedState = tp(i)),
			  (t.memoizedState = ep),
			  a)
	if (!(t.mode & 1)) return tu(e, t, i, null)
	if (o.data === '$!') {
		if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst
		return (r = l), (a = Error(ue(419))), (r = Sf(a, r, void 0)), tu(e, t, i, r)
	}
	if (((l = (i & e.childLanes) !== 0), Wn || l)) {
		if (((r = bn), r !== null)) {
			switch (i & -i) {
				case 4:
					o = 2
					break
				case 16:
					o = 8
					break
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32
					break
				case 536870912:
					o = 268435456
					break
				default:
					o = 0
			}
			;(o = o & (r.suspendedLanes | i) ? 0 : o),
				o !== 0 &&
					o !== a.retryLane &&
					((a.retryLane = o), co(e, o), Or(r, e, o, -1))
		}
		return Eh(), (r = Sf(Error(ue(421)))), tu(e, t, i, r)
	}
	return o.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = BP.bind(null, e)),
		  (o._reactRetry = t),
		  null)
		: ((e = a.treeContext),
		  (er = Wo(o.nextSibling)),
		  (nr = t),
		  (Vt = !0),
		  (Pr = null),
		  e !== null &&
				((fr[vr++] = ro),
				(fr[vr++] = oo),
				(fr[vr++] = Pa),
				(ro = e.id),
				(oo = e.overflow),
				(Pa = t)),
		  (t = yh(t, r.children)),
		  (t.flags |= 4096),
		  t)
}
function j0(e, t, n) {
	e.lanes |= t
	var r = e.alternate
	r !== null && (r.lanes |= t), Gv(e.return, t, n)
}
function Cf(e, t, n, r, o) {
	var a = e.memoizedState
	a === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: o
		  })
		: ((a.isBackwards = t),
		  (a.rendering = null),
		  (a.renderingStartTime = 0),
		  (a.last = r),
		  (a.tail = n),
		  (a.tailMode = o))
}
function ZS(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		a = r.tail
	if ((_n(e, t, r.children, n), (r = Yt.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128)
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && j0(e, n, t)
				else if (e.tag === 19) j0(e, n, t)
				else if (e.child !== null) {
					;(e.child.return = e), (e = e.child)
					continue
				}
				if (e === t) break e
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e
					e = e.return
				}
				;(e.sibling.return = e.return), (e = e.sibling)
			}
		r &= 1
	}
	if ((_t(Yt, r), !(t.mode & 1))) t.memoizedState = null
	else
		switch (o) {
			case 'forwards':
				for (n = t.child, o = null; n !== null; )
					(e = n.alternate),
						e !== null && fc(e) === null && (o = n),
						(n = n.sibling)
				;(n = o),
					n === null
						? ((o = t.child), (t.child = null))
						: ((o = n.sibling), (n.sibling = null)),
					Cf(t, !1, o, n, a)
				break
			case 'backwards':
				for (n = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && fc(e) === null)) {
						t.child = o
						break
					}
					;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
				}
				Cf(t, !0, n, null, a)
				break
			case 'together':
				Cf(t, !1, null, null, void 0)
				break
			default:
				t.memoizedState = null
		}
	return t.child
}
function _u(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function fo(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Ma |= t.lanes),
		!(n & t.childLanes))
	)
		return null
	if (e !== null && t.child !== e.child) throw Error(ue(153))
	if (t.child !== null) {
		for (
			e = t.child, n = Go(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Go(e, e.pendingProps)), (n.return = t)
		n.sibling = null
	}
	return t.child
}
function IP(e, t, n) {
	switch (t.tag) {
		case 3:
			qS(t), Ri()
			break
		case 5:
			$S(t)
			break
		case 1:
			Yn(t.type) && ic(t)
			break
		case 4:
			ch(t, t.stateNode.containerInfo)
			break
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value
			_t(uc, r._currentValue), (r._currentValue = o)
			break
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (_t(Yt, Yt.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? QS(e, t, n)
					: (_t(Yt, Yt.current & 1),
					  (e = fo(e, t, n)),
					  e !== null ? e.sibling : null)
			_t(Yt, Yt.current & 1)
			break
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return ZS(e, t, n)
				t.flags |= 128
			}
			if (
				((o = t.memoizedState),
				o !== null &&
					((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
				_t(Yt, Yt.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (t.lanes = 0), GS(e, t, n)
	}
	return fo(e, t, n)
}
var JS, np, eC, tC
JS = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === t) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
np = function () {}
eC = function (e, t, n, r) {
	var o = e.memoizedProps
	if (o !== r) {
		;(e = t.stateNode), pa(Br.current)
		var a = null
		switch (n) {
			case 'input':
				;(o = Ev(e, o)), (r = Ev(e, r)), (a = [])
				break
			case 'select':
				;(o = Xt({}, o, { value: void 0 })),
					(r = Xt({}, r, { value: void 0 })),
					(a = [])
				break
			case 'textarea':
				;(o = Rv(e, o)), (r = Rv(e, r)), (a = [])
				break
			default:
				typeof o.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = oc)
		}
		Ov(n, r)
		var i
		n = null
		for (c in o)
			if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
				if (c === 'style') {
					var l = o[c]
					for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
				} else
					c !== 'dangerouslySetInnerHTML' &&
						c !== 'children' &&
						c !== 'suppressContentEditableWarning' &&
						c !== 'suppressHydrationWarning' &&
						c !== 'autoFocus' &&
						(Kl.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null))
		for (c in r) {
			var s = r[c]
			if (
				((l = o != null ? o[c] : void 0),
				r.hasOwnProperty(c) && s !== l && (s != null || l != null))
			)
				if (c === 'style')
					if (l) {
						for (i in l)
							!l.hasOwnProperty(i) ||
								(s && s.hasOwnProperty(i)) ||
								(n || (n = {}), (n[i] = ''))
						for (i in s)
							s.hasOwnProperty(i) &&
								l[i] !== s[i] &&
								(n || (n = {}), (n[i] = s[i]))
					} else n || (a || (a = []), a.push(c, n)), (n = s)
				else
					c === 'dangerouslySetInnerHTML'
						? ((s = s ? s.__html : void 0),
						  (l = l ? l.__html : void 0),
						  s != null && l !== s && (a = a || []).push(c, s))
						: c === 'children'
						? (typeof s != 'string' && typeof s != 'number') ||
						  (a = a || []).push(c, '' + s)
						: c !== 'suppressContentEditableWarning' &&
						  c !== 'suppressHydrationWarning' &&
						  (Kl.hasOwnProperty(c)
								? (s != null && c === 'onScroll' && At('scroll', e),
								  a || l === s || (a = []))
								: (a = a || []).push(c, s))
		}
		n && (a = a || []).push('style', n)
		var c = a
		;(t.updateQueue = c) && (t.flags |= 4)
	}
}
tC = function (e, t, n, r) {
	n !== r && (t.flags |= 4)
}
function cl(e, t) {
	if (!Vt)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling)
				n === null ? (e.tail = null) : (n.sibling = null)
				break
			case 'collapsed':
				n = e.tail
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling)
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null)
		}
}
function Nn(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0
	if (t)
		for (var o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags & 14680064),
				(r |= o.flags & 14680064),
				(o.return = e),
				(o = o.sibling)
	else
		for (o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags),
				(r |= o.flags),
				(o.return = e),
				(o = o.sibling)
	return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function kP(e, t, n) {
	var r = t.pendingProps
	switch ((rh(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Nn(t), null
		case 1:
			return Yn(t.type) && ac(), Nn(t), null
		case 3:
			return (
				(r = t.stateNode),
				Oi(),
				zt(Un),
				zt(kn),
				fh(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Js(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Pr !== null && (cp(Pr), (Pr = null)))),
				np(e, t),
				Nn(t),
				null
			)
		case 5:
			dh(t)
			var o = pa(as.current)
			if (((n = t.type), e !== null && t.stateNode != null))
				eC(e, t, n, r, o),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(ue(166))
					return Nn(t), null
				}
				if (((e = pa(Br.current)), Js(t))) {
					;(r = t.stateNode), (n = t.type)
					var a = t.memoizedProps
					switch (((r[Hr] = t), (r[rs] = a), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							At('cancel', r), At('close', r)
							break
						case 'iframe':
						case 'object':
						case 'embed':
							At('load', r)
							break
						case 'video':
						case 'audio':
							for (o = 0; o < Cl.length; o++) At(Cl[o], r)
							break
						case 'source':
							At('error', r)
							break
						case 'img':
						case 'image':
						case 'link':
							At('error', r), At('load', r)
							break
						case 'details':
							At('toggle', r)
							break
						case 'input':
							Qg(r, a), At('invalid', r)
							break
						case 'select':
							;(r._wrapperState = { wasMultiple: !!a.multiple }),
								At('invalid', r)
							break
						case 'textarea':
							Jg(r, a), At('invalid', r)
					}
					Ov(n, a), (o = null)
					for (var i in a)
						if (a.hasOwnProperty(i)) {
							var l = a[i]
							i === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
									  (a.suppressHydrationWarning !== !0 &&
											Zs(r.textContent, l, e),
									  (o = ['children', l]))
									: typeof l == 'number' &&
									  r.textContent !== '' + l &&
									  (a.suppressHydrationWarning !== !0 &&
											Zs(r.textContent, l, e),
									  (o = ['children', '' + l]))
								: Kl.hasOwnProperty(i) &&
								  l != null &&
								  i === 'onScroll' &&
								  At('scroll', r)
						}
					switch (n) {
						case 'input':
							Ws(r), Zg(r, a, !0)
							break
						case 'textarea':
							Ws(r), e0(r)
							break
						case 'select':
						case 'option':
							break
						default:
							typeof a.onClick == 'function' && (r.onclick = oc)
					}
					;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
				} else {
					;(i = o.nodeType === 9 ? o : o.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Mb(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = i.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = i.createElement(n, { is: r.is }))
								: ((e = i.createElement(n)),
								  n === 'select' &&
										((i = e),
										r.multiple
											? (i.multiple = !0)
											: r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, n)),
						(e[Hr] = t),
						(e[rs] = r),
						JS(e, t, !1, !1),
						(t.stateNode = e)
					e: {
						switch (((i = Nv(n, r)), n)) {
							case 'dialog':
								At('cancel', e), At('close', e), (o = r)
								break
							case 'iframe':
							case 'object':
							case 'embed':
								At('load', e), (o = r)
								break
							case 'video':
							case 'audio':
								for (o = 0; o < Cl.length; o++) At(Cl[o], e)
								o = r
								break
							case 'source':
								At('error', e), (o = r)
								break
							case 'img':
							case 'image':
							case 'link':
								At('error', e), At('load', e), (o = r)
								break
							case 'details':
								At('toggle', e), (o = r)
								break
							case 'input':
								Qg(e, r), (o = Ev(e, r)), At('invalid', e)
								break
							case 'option':
								o = r
								break
							case 'select':
								;(e._wrapperState = { wasMultiple: !!r.multiple }),
									(o = Xt({}, r, { value: void 0 })),
									At('invalid', e)
								break
							case 'textarea':
								Jg(e, r), (o = Rv(e, r)), At('invalid', e)
								break
							default:
								o = r
						}
						Ov(n, o), (l = o)
						for (a in l)
							if (l.hasOwnProperty(a)) {
								var s = l[a]
								a === 'style'
									? Ib(e, s)
									: a === 'dangerouslySetInnerHTML'
									? ((s = s ? s.__html : void 0), s != null && Ob(e, s))
									: a === 'children'
									? typeof s == 'string'
										? (n !== 'textarea' || s !== '') && Gl(e, s)
										: typeof s == 'number' && Gl(e, '' + s)
									: a !== 'suppressContentEditableWarning' &&
									  a !== 'suppressHydrationWarning' &&
									  a !== 'autoFocus' &&
									  (Kl.hasOwnProperty(a)
											? s != null && a === 'onScroll' && At('scroll', e)
											: s != null && jm(e, a, s, i))
							}
						switch (n) {
							case 'input':
								Ws(e), Zg(e, r, !1)
								break
							case 'textarea':
								Ws(e), e0(e)
								break
							case 'option':
								r.value != null && e.setAttribute('value', '' + Zo(r.value))
								break
							case 'select':
								;(e.multiple = !!r.multiple),
									(a = r.value),
									a != null
										? hi(e, !!r.multiple, a, !1)
										: r.defaultValue != null &&
										  hi(e, !!r.multiple, r.defaultValue, !0)
								break
							default:
								typeof o.onClick == 'function' && (e.onclick = oc)
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus
								break e
							case 'img':
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
			}
			return Nn(t), null
		case 6:
			if (e && t.stateNode != null) tC(e, t, e.memoizedProps, r)
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(ue(166))
				if (((n = pa(as.current)), pa(Br.current), Js(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Hr] = t),
						(a = r.nodeValue !== n) && ((e = nr), e !== null))
					)
						switch (e.tag) {
							case 3:
								Zs(r.nodeValue, n, (e.mode & 1) !== 0)
								break
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Zs(r.nodeValue, n, (e.mode & 1) !== 0)
						}
					a && (t.flags |= 4)
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Hr] = t),
						(t.stateNode = r)
			}
			return Nn(t), null
		case 13:
			if (
				(zt(Yt),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (Vt && er !== null && t.mode & 1 && !(t.flags & 128))
					yS(), Ri(), (t.flags |= 98560), (a = !1)
				else if (((a = Js(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!a) throw Error(ue(318))
						if (
							((a = t.memoizedState),
							(a = a !== null ? a.dehydrated : null),
							!a)
						)
							throw Error(ue(317))
						a[Hr] = t
					} else
						Ri(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
					Nn(t), (a = !1)
				} else Pr !== null && (cp(Pr), (Pr = null)), (a = !0)
				if (!a) return t.flags & 65536 ? t : null
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Yt.current & 1 ? pn === 0 && (pn = 3) : Eh())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Nn(t),
				  null)
		case 4:
			return (
				Oi(), np(e, t), e === null && ts(t.stateNode.containerInfo), Nn(t), null
			)
		case 10:
			return lh(t.type._context), Nn(t), null
		case 17:
			return Yn(t.type) && ac(), Nn(t), null
		case 19:
			if ((zt(Yt), (a = t.memoizedState), a === null)) return Nn(t), null
			if (((r = (t.flags & 128) !== 0), (i = a.rendering), i === null))
				if (r) cl(a, !1)
				else {
					if (pn !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = fc(e)), i !== null)) {
								for (
									t.flags |= 128,
										cl(a, !1),
										r = i.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(a = n),
										(e = r),
										(a.flags &= 14680066),
										(i = a.alternate),
										i === null
											? ((a.childLanes = 0),
											  (a.lanes = e),
											  (a.child = null),
											  (a.subtreeFlags = 0),
											  (a.memoizedProps = null),
											  (a.memoizedState = null),
											  (a.updateQueue = null),
											  (a.dependencies = null),
											  (a.stateNode = null))
											: ((a.childLanes = i.childLanes),
											  (a.lanes = i.lanes),
											  (a.child = i.child),
											  (a.subtreeFlags = 0),
											  (a.deletions = null),
											  (a.memoizedProps = i.memoizedProps),
											  (a.memoizedState = i.memoizedState),
											  (a.updateQueue = i.updateQueue),
											  (a.type = i.type),
											  (e = i.dependencies),
											  (a.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext
														  })),
										(n = n.sibling)
								return _t(Yt, (Yt.current & 1) | 2), t.child
							}
							e = e.sibling
						}
					a.tail !== null &&
						an() > Ii &&
						((t.flags |= 128), (r = !0), cl(a, !1), (t.lanes = 4194304))
				}
			else {
				if (!r)
					if (((e = fc(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							cl(a, !0),
							a.tail === null && a.tailMode === 'hidden' && !i.alternate && !Vt)
						)
							return Nn(t), null
					} else
						2 * an() - a.renderingStartTime > Ii &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), cl(a, !1), (t.lanes = 4194304))
				a.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = a.last),
					  n !== null ? (n.sibling = i) : (t.child = i),
					  (a.last = i))
			}
			return a.tail !== null
				? ((t = a.tail),
				  (a.rendering = t),
				  (a.tail = t.sibling),
				  (a.renderingStartTime = an()),
				  (t.sibling = null),
				  (n = Yt.current),
				  _t(Yt, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Nn(t), null)
		case 22:
		case 23:
			return (
				xh(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Jn & 1073741824 && (Nn(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Nn(t),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error(ue(156, t.tag))
}
function TP(e, t) {
	switch ((rh(t), t.tag)) {
		case 1:
			return (
				Yn(t.type) && ac(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 3:
			return (
				Oi(),
				zt(Un),
				zt(kn),
				fh(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 5:
			return dh(t), null
		case 13:
			if (
				(zt(Yt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(ue(340))
				Ri()
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 19:
			return zt(Yt), null
		case 4:
			return Oi(), null
		case 10:
			return lh(t.type._context), null
		case 22:
		case 23:
			return xh(), null
		case 24:
			return null
		default:
			return null
	}
}
var nu = !1,
	In = !1,
	DP = typeof WeakSet == 'function' ? WeakSet : Set,
	Ee = null
function fi(e, t) {
	var n = e.ref
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null)
			} catch (r) {
				Qt(e, t, r)
			}
		else n.current = null
}
function rp(e, t, n) {
	try {
		n()
	} catch (r) {
		Qt(e, t, r)
	}
}
var B0 = !1
function _P(e, t) {
	if (((Hv = tc), (e = aS()), th(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd }
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var o = r.anchorOffset,
						a = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, a.nodeType
					} catch {
						n = null
						break e
					}
					var i = 0,
						l = -1,
						s = -1,
						c = 0,
						f = 0,
						d = e,
						v = null
					t: for (;;) {
						for (
							var p;
							d !== n || (o !== 0 && d.nodeType !== 3) || (l = i + o),
								d !== a || (r !== 0 && d.nodeType !== 3) || (s = i + r),
								d.nodeType === 3 && (i += d.nodeValue.length),
								(p = d.firstChild) !== null;

						)
							(v = d), (d = p)
						for (;;) {
							if (d === e) break t
							if (
								(v === n && ++c === o && (l = i),
								v === a && ++f === r && (s = i),
								(p = d.nextSibling) !== null)
							)
								break
							;(d = v), (v = d.parentNode)
						}
						d = p
					}
					n = l === -1 || s === -1 ? null : { start: l, end: s }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (
		Vv = { focusedElem: e, selectionRange: n }, tc = !1, Ee = t;
		Ee !== null;

	)
		if (((t = Ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (Ee = e)
		else
			for (; Ee !== null; ) {
				t = Ee
				try {
					var h = t.alternate
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (h !== null) {
									var g = h.memoizedProps,
										b = h.memoizedState,
										m = t.stateNode,
										y = m.getSnapshotBeforeUpdate(
											t.elementType === t.type ? g : Er(t.type, g),
											b
										)
									m.__reactInternalSnapshotBeforeUpdate = y
								}
								break
							case 3:
								var S = t.stateNode.containerInfo
								S.nodeType === 1
									? (S.textContent = '')
									: S.nodeType === 9 &&
									  S.documentElement &&
									  S.removeChild(S.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error(ue(163))
						}
				} catch (C) {
					Qt(t, t.return, C)
				}
				if (((e = t.sibling), e !== null)) {
					;(e.return = t.return), (Ee = e)
					break
				}
				Ee = t.return
			}
	return (h = B0), (B0 = !1), h
}
function kl(e, t, n) {
	var r = t.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var o = (r = r.next)
		do {
			if ((o.tag & e) === e) {
				var a = o.destroy
				;(o.destroy = void 0), a !== void 0 && rp(t, n, a)
			}
			o = o.next
		} while (o !== r)
	}
}
function sd(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next)
		do {
			if ((n.tag & e) === e) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}
function op(e) {
	var t = e.ref
	if (t !== null) {
		var n = e.stateNode
		switch (e.tag) {
			case 5:
				e = n
				break
			default:
				e = n
		}
		typeof t == 'function' ? t(e) : (t.current = e)
	}
}
function nC(e) {
	var t = e.alternate
	t !== null && ((e.alternate = null), nC(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Hr], delete t[rs], delete t[Wv], delete t[gP], delete t[yP])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null)
}
function rC(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function W0(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || rC(e.return)) return null
			e = e.return
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e
			;(e.child.return = e), (e = e.child)
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}
function ap(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = oc))
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ap(e, t, n), e = e.sibling; e !== null; ) ap(e, t, n), (e = e.sibling)
}
function ip(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ip(e, t, n), e = e.sibling; e !== null; ) ip(e, t, n), (e = e.sibling)
}
var wn = null,
	$r = !1
function xo(e, t, n) {
	for (n = n.child; n !== null; ) oC(e, t, n), (n = n.sibling)
}
function oC(e, t, n) {
	if (jr && typeof jr.onCommitFiberUnmount == 'function')
		try {
			jr.onCommitFiberUnmount(ed, n)
		} catch {}
	switch (n.tag) {
		case 5:
			In || fi(n, t)
		case 6:
			var r = wn,
				o = $r
			;(wn = null),
				xo(e, t, n),
				(wn = r),
				($r = o),
				wn !== null &&
					($r
						? ((e = wn),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: wn.removeChild(n.stateNode))
			break
		case 18:
			wn !== null &&
				($r
					? ((e = wn),
					  (n = n.stateNode),
					  e.nodeType === 8
							? pf(e.parentNode, n)
							: e.nodeType === 1 && pf(e, n),
					  Zl(e))
					: pf(wn, n.stateNode))
			break
		case 4:
			;(r = wn),
				(o = $r),
				(wn = n.stateNode.containerInfo),
				($r = !0),
				xo(e, t, n),
				(wn = r),
				($r = o)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!In &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				o = r = r.next
				do {
					var a = o,
						i = a.destroy
					;(a = a.tag),
						i !== void 0 && (a & 2 || a & 4) && rp(n, t, i),
						(o = o.next)
				} while (o !== r)
			}
			xo(e, t, n)
			break
		case 1:
			if (
				!In &&
				(fi(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					;(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount()
				} catch (l) {
					Qt(n, t, l)
				}
			xo(e, t, n)
			break
		case 21:
			xo(e, t, n)
			break
		case 22:
			n.mode & 1
				? ((In = (r = In) || n.memoizedState !== null), xo(e, t, n), (In = r))
				: xo(e, t, n)
			break
		default:
			xo(e, t, n)
	}
}
function U0(e) {
	var t = e.updateQueue
	if (t !== null) {
		e.updateQueue = null
		var n = e.stateNode
		n === null && (n = e.stateNode = new DP()),
			t.forEach(function (r) {
				var o = WP.bind(null, e, r)
				n.has(r) || (n.add(r), r.then(o, o))
			})
	}
}
function wr(e, t) {
	var n = t.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r]
			try {
				var a = e,
					i = t,
					l = i
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							;(wn = l.stateNode), ($r = !1)
							break e
						case 3:
							;(wn = l.stateNode.containerInfo), ($r = !0)
							break e
						case 4:
							;(wn = l.stateNode.containerInfo), ($r = !0)
							break e
					}
					l = l.return
				}
				if (wn === null) throw Error(ue(160))
				oC(a, i, o), (wn = null), ($r = !1)
				var s = o.alternate
				s !== null && (s.return = null), (o.return = null)
			} catch (c) {
				Qt(o, t, c)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) aC(t, e), (t = t.sibling)
}
function aC(e, t) {
	var n = e.alternate,
		r = e.flags
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((wr(t, e), Fr(e), r & 4)) {
				try {
					kl(3, e, e.return), sd(3, e)
				} catch (g) {
					Qt(e, e.return, g)
				}
				try {
					kl(5, e, e.return)
				} catch (g) {
					Qt(e, e.return, g)
				}
			}
			break
		case 1:
			wr(t, e), Fr(e), r & 512 && n !== null && fi(n, n.return)
			break
		case 5:
			if (
				(wr(t, e),
				Fr(e),
				r & 512 && n !== null && fi(n, n.return),
				e.flags & 32)
			) {
				var o = e.stateNode
				try {
					Gl(o, '')
				} catch (g) {
					Qt(e, e.return, g)
				}
			}
			if (r & 4 && ((o = e.stateNode), o != null)) {
				var a = e.memoizedProps,
					i = n !== null ? n.memoizedProps : a,
					l = e.type,
					s = e.updateQueue
				if (((e.updateQueue = null), s !== null))
					try {
						l === 'input' && a.type === 'radio' && a.name != null && Pb(o, a),
							Nv(l, i)
						var c = Nv(l, a)
						for (i = 0; i < s.length; i += 2) {
							var f = s[i],
								d = s[i + 1]
							f === 'style'
								? Ib(o, d)
								: f === 'dangerouslySetInnerHTML'
								? Ob(o, d)
								: f === 'children'
								? Gl(o, d)
								: jm(o, f, d, c)
						}
						switch (l) {
							case 'input':
								$v(o, a)
								break
							case 'textarea':
								Rb(o, a)
								break
							case 'select':
								var v = o._wrapperState.wasMultiple
								o._wrapperState.wasMultiple = !!a.multiple
								var p = a.value
								p != null
									? hi(o, !!a.multiple, p, !1)
									: v !== !!a.multiple &&
									  (a.defaultValue != null
											? hi(o, !!a.multiple, a.defaultValue, !0)
											: hi(o, !!a.multiple, a.multiple ? [] : '', !1))
						}
						o[rs] = a
					} catch (g) {
						Qt(e, e.return, g)
					}
			}
			break
		case 6:
			if ((wr(t, e), Fr(e), r & 4)) {
				if (e.stateNode === null) throw Error(ue(162))
				;(o = e.stateNode), (a = e.memoizedProps)
				try {
					o.nodeValue = a
				} catch (g) {
					Qt(e, e.return, g)
				}
			}
			break
		case 3:
			if (
				(wr(t, e), Fr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Zl(t.containerInfo)
				} catch (g) {
					Qt(e, e.return, g)
				}
			break
		case 4:
			wr(t, e), Fr(e)
			break
		case 13:
			wr(t, e),
				Fr(e),
				(o = e.child),
				o.flags & 8192 &&
					((a = o.memoizedState !== null),
					(o.stateNode.isHidden = a),
					!a ||
						(o.alternate !== null && o.alternate.memoizedState !== null) ||
						(Ch = an())),
				r & 4 && U0(e)
			break
		case 22:
			if (
				((f = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((In = (c = In) || f), wr(t, e), (In = c)) : wr(t, e),
				Fr(e),
				r & 8192)
			) {
				if (
					((c = e.memoizedState !== null),
					(e.stateNode.isHidden = c) && !f && e.mode & 1)
				)
					for (Ee = e, f = e.child; f !== null; ) {
						for (d = Ee = f; Ee !== null; ) {
							switch (((v = Ee), (p = v.child), v.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									kl(4, v, v.return)
									break
								case 1:
									fi(v, v.return)
									var h = v.stateNode
									if (typeof h.componentWillUnmount == 'function') {
										;(r = v), (n = v.return)
										try {
											;(t = r),
												(h.props = t.memoizedProps),
												(h.state = t.memoizedState),
												h.componentWillUnmount()
										} catch (g) {
											Qt(r, n, g)
										}
									}
									break
								case 5:
									fi(v, v.return)
									break
								case 22:
									if (v.memoizedState !== null) {
										K0(d)
										continue
									}
							}
							p !== null ? ((p.return = v), (Ee = p)) : K0(d)
						}
						f = f.sibling
					}
				e: for (f = null, d = e; ; ) {
					if (d.tag === 5) {
						if (f === null) {
							f = d
							try {
								;(o = d.stateNode),
									c
										? ((a = o.style),
										  typeof a.setProperty == 'function'
												? a.setProperty('display', 'none', 'important')
												: (a.display = 'none'))
										: ((l = d.stateNode),
										  (s = d.memoizedProps.style),
										  (i =
												s != null && s.hasOwnProperty('display')
													? s.display
													: null),
										  (l.style.display = Nb('display', i)))
							} catch (g) {
								Qt(e, e.return, g)
							}
						}
					} else if (d.tag === 6) {
						if (f === null)
							try {
								d.stateNode.nodeValue = c ? '' : d.memoizedProps
							} catch (g) {
								Qt(e, e.return, g)
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === e) &&
						d.child !== null
					) {
						;(d.child.return = d), (d = d.child)
						continue
					}
					if (d === e) break e
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e
						f === d && (f = null), (d = d.return)
					}
					f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling)
				}
			}
			break
		case 19:
			wr(t, e), Fr(e), r & 4 && U0(e)
			break
		case 21:
			break
		default:
			wr(t, e), Fr(e)
	}
}
function Fr(e) {
	var t = e.flags
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (rC(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error(ue(160))
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode
					r.flags & 32 && (Gl(o, ''), (r.flags &= -33))
					var a = W0(e)
					ip(e, a, o)
					break
				case 3:
				case 4:
					var i = r.stateNode.containerInfo,
						l = W0(e)
					ap(e, l, i)
					break
				default:
					throw Error(ue(161))
			}
		} catch (s) {
			Qt(e, e.return, s)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}
function LP(e, t, n) {
	;(Ee = e), iC(e)
}
function iC(e, t, n) {
	for (var r = (e.mode & 1) !== 0; Ee !== null; ) {
		var o = Ee,
			a = o.child
		if (o.tag === 22 && r) {
			var i = o.memoizedState !== null || nu
			if (!i) {
				var l = o.alternate,
					s = (l !== null && l.memoizedState !== null) || In
				l = nu
				var c = In
				if (((nu = i), (In = s) && !c))
					for (Ee = o; Ee !== null; )
						(i = Ee),
							(s = i.child),
							i.tag === 22 && i.memoizedState !== null
								? G0(o)
								: s !== null
								? ((s.return = i), (Ee = s))
								: G0(o)
				for (; a !== null; ) (Ee = a), iC(a), (a = a.sibling)
				;(Ee = o), (nu = l), (In = c)
			}
			Y0(e)
		} else
			o.subtreeFlags & 8772 && a !== null ? ((a.return = o), (Ee = a)) : Y0(e)
	}
}
function Y0(e) {
	for (; Ee !== null; ) {
		var t = Ee
		if (t.flags & 8772) {
			var n = t.alternate
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							In || sd(5, t)
							break
						case 1:
							var r = t.stateNode
							if (t.flags & 4 && !In)
								if (n === null) r.componentDidMount()
								else {
									var o =
										t.elementType === t.type
											? n.memoizedProps
											: Er(t.type, n.memoizedProps)
									r.componentDidUpdate(
										o,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									)
								}
							var a = t.updateQueue
							a !== null && O0(t, a, r)
							break
						case 3:
							var i = t.updateQueue
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode
											break
										case 1:
											n = t.child.stateNode
									}
								O0(t, i, n)
							}
							break
						case 5:
							var l = t.stateNode
							if (n === null && t.flags & 4) {
								n = l
								var s = t.memoizedProps
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										s.autoFocus && n.focus()
										break
									case 'img':
										s.src && (n.src = s.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (t.memoizedState === null) {
								var c = t.alternate
								if (c !== null) {
									var f = c.memoizedState
									if (f !== null) {
										var d = f.dehydrated
										d !== null && Zl(d)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error(ue(163))
					}
				In || (t.flags & 512 && op(t))
			} catch (v) {
				Qt(t, t.return, v)
			}
		}
		if (t === e) {
			Ee = null
			break
		}
		if (((n = t.sibling), n !== null)) {
			;(n.return = t.return), (Ee = n)
			break
		}
		Ee = t.return
	}
}
function K0(e) {
	for (; Ee !== null; ) {
		var t = Ee
		if (t === e) {
			Ee = null
			break
		}
		var n = t.sibling
		if (n !== null) {
			;(n.return = t.return), (Ee = n)
			break
		}
		Ee = t.return
	}
}
function G0(e) {
	for (; Ee !== null; ) {
		var t = Ee
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return
					try {
						sd(4, t)
					} catch (s) {
						Qt(t, n, s)
					}
					break
				case 1:
					var r = t.stateNode
					if (typeof r.componentDidMount == 'function') {
						var o = t.return
						try {
							r.componentDidMount()
						} catch (s) {
							Qt(t, o, s)
						}
					}
					var a = t.return
					try {
						op(t)
					} catch (s) {
						Qt(t, a, s)
					}
					break
				case 5:
					var i = t.return
					try {
						op(t)
					} catch (s) {
						Qt(t, i, s)
					}
			}
		} catch (s) {
			Qt(t, t.return, s)
		}
		if (t === e) {
			Ee = null
			break
		}
		var l = t.sibling
		if (l !== null) {
			;(l.return = t.return), (Ee = l)
			break
		}
		Ee = t.return
	}
}
var AP = Math.ceil,
	mc = bo.ReactCurrentDispatcher,
	bh = bo.ReactCurrentOwner,
	mr = bo.ReactCurrentBatchConfig,
	Et = 0,
	bn = null,
	cn = null,
	$n = 0,
	Jn = 0,
	vi = ta(0),
	pn = 0,
	us = null,
	Ma = 0,
	ud = 0,
	Sh = 0,
	Tl = null,
	Bn = null,
	Ch = 0,
	Ii = 1 / 0,
	eo = null,
	hc = !1,
	lp = null,
	Yo = null,
	ru = !1,
	ko = null,
	gc = 0,
	Dl = 0,
	sp = null,
	Lu = -1,
	Au = 0
function Ln() {
	return Et & 6 ? an() : Lu !== -1 ? Lu : (Lu = an())
}
function Ko(e) {
	return e.mode & 1
		? Et & 2 && $n !== 0
			? $n & -$n
			: SP.transition !== null
			? (Au === 0 && (Au = Bb()), Au)
			: ((e = Ot),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qb(e.type))),
			  e)
		: 1
}
function Or(e, t, n, r) {
	if (50 < Dl) throw ((Dl = 0), (sp = null), Error(ue(185)))
	Ss(e, n, r),
		(!(Et & 2) || e !== bn) &&
			(e === bn && (!(Et & 2) && (ud |= n), pn === 4 && No(e, $n)),
			Kn(e, r),
			n === 1 && Et === 0 && !(t.mode & 1) && ((Ii = an() + 500), ad && na()))
}
function Kn(e, t) {
	var n = e.callbackNode
	S$(e, t)
	var r = ec(e, e === bn ? $n : 0)
	if (r === 0)
		n !== null && r0(n), (e.callbackNode = null), (e.callbackPriority = 0)
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && r0(n), t === 1))
			e.tag === 0 ? bP(X0.bind(null, e)) : mS(X0.bind(null, e)),
				mP(function () {
					!(Et & 6) && na()
				}),
				(n = null)
		else {
			switch (Wb(r)) {
				case 1:
					n = Km
					break
				case 4:
					n = Vb
					break
				case 16:
					n = Ju
					break
				case 536870912:
					n = jb
					break
				default:
					n = Ju
			}
			n = pC(n, lC.bind(null, e))
		}
		;(e.callbackPriority = t), (e.callbackNode = n)
	}
}
function lC(e, t) {
	if (((Lu = -1), (Au = 0), Et & 6)) throw Error(ue(327))
	var n = e.callbackNode
	if (Ci() && e.callbackNode !== n) return null
	var r = ec(e, e === bn ? $n : 0)
	if (r === 0) return null
	if (r & 30 || r & e.expiredLanes || t) t = yc(e, r)
	else {
		t = r
		var o = Et
		Et |= 2
		var a = uC()
		;(bn !== e || $n !== t) && ((eo = null), (Ii = an() + 500), ba(e, t))
		do
			try {
				HP()
				break
			} catch (l) {
				sC(e, l)
			}
		while (1)
		ih(),
			(mc.current = a),
			(Et = o),
			cn !== null ? (t = 0) : ((bn = null), ($n = 0), (t = pn))
	}
	if (t !== 0) {
		if (
			(t === 2 && ((o = _v(e)), o !== 0 && ((r = o), (t = up(e, o)))), t === 1)
		)
			throw ((n = us), ba(e, 0), No(e, r), Kn(e, an()), n)
		if (t === 6) No(e, r)
		else {
			if (
				((o = e.current.alternate),
				!(r & 30) &&
					!FP(o) &&
					((t = yc(e, r)),
					t === 2 && ((a = _v(e)), a !== 0 && ((r = a), (t = up(e, a)))),
					t === 1))
			)
				throw ((n = us), ba(e, 0), No(e, r), Kn(e, an()), n)
			switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(ue(345))
				case 2:
					ua(e, Bn, eo)
					break
				case 3:
					if (
						(No(e, r), (r & 130023424) === r && ((t = Ch + 500 - an()), 10 < t))
					) {
						if (ec(e, 0) !== 0) break
						if (((o = e.suspendedLanes), (o & r) !== r)) {
							Ln(), (e.pingedLanes |= e.suspendedLanes & o)
							break
						}
						e.timeoutHandle = Bv(ua.bind(null, e, Bn, eo), t)
						break
					}
					ua(e, Bn, eo)
					break
				case 4:
					if ((No(e, r), (r & 4194240) === r)) break
					for (t = e.eventTimes, o = -1; 0 < r; ) {
						var i = 31 - Mr(r)
						;(a = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~a)
					}
					if (
						((r = o),
						(r = an() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * AP(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Bv(ua.bind(null, e, Bn, eo), r)
						break
					}
					ua(e, Bn, eo)
					break
				case 5:
					ua(e, Bn, eo)
					break
				default:
					throw Error(ue(329))
			}
		}
	}
	return Kn(e, an()), e.callbackNode === n ? lC.bind(null, e) : null
}
function up(e, t) {
	var n = Tl
	return (
		e.current.memoizedState.isDehydrated && (ba(e, t).flags |= 256),
		(e = yc(e, t)),
		e !== 2 && ((t = Bn), (Bn = n), t !== null && cp(t)),
		e
	)
}
function cp(e) {
	Bn === null ? (Bn = e) : Bn.push.apply(Bn, e)
}
function FP(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						a = o.getSnapshot
					o = o.value
					try {
						if (!Ir(a(), o)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n)
		else {
			if (t === e) break
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0
				t = t.return
			}
			;(t.sibling.return = t.return), (t = t.sibling)
		}
	}
	return !0
}
function No(e, t) {
	for (
		t &= ~Sh,
			t &= ~ud,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Mr(t),
			r = 1 << n
		;(e[n] = -1), (t &= ~r)
	}
}
function X0(e) {
	if (Et & 6) throw Error(ue(327))
	Ci()
	var t = ec(e, 0)
	if (!(t & 1)) return Kn(e, an()), null
	var n = yc(e, t)
	if (e.tag !== 0 && n === 2) {
		var r = _v(e)
		r !== 0 && ((t = r), (n = up(e, r)))
	}
	if (n === 1) throw ((n = us), ba(e, 0), No(e, t), Kn(e, an()), n)
	if (n === 6) throw Error(ue(345))
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		ua(e, Bn, eo),
		Kn(e, an()),
		null
	)
}
function wh(e, t) {
	var n = Et
	Et |= 1
	try {
		return e(t)
	} finally {
		;(Et = n), Et === 0 && ((Ii = an() + 500), ad && na())
	}
}
function Oa(e) {
	ko !== null && ko.tag === 0 && !(Et & 6) && Ci()
	var t = Et
	Et |= 1
	var n = mr.transition,
		r = Ot
	try {
		if (((mr.transition = null), (Ot = 1), e)) return e()
	} finally {
		;(Ot = r), (mr.transition = n), (Et = t), !(Et & 6) && na()
	}
}
function xh() {
	;(Jn = vi.current), zt(vi)
}
function ba(e, t) {
	;(e.finishedWork = null), (e.finishedLanes = 0)
	var n = e.timeoutHandle
	if ((n !== -1 && ((e.timeoutHandle = -1), pP(n)), cn !== null))
		for (n = cn.return; n !== null; ) {
			var r = n
			switch ((rh(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && ac()
					break
				case 3:
					Oi(), zt(Un), zt(kn), fh()
					break
				case 5:
					dh(r)
					break
				case 4:
					Oi()
					break
				case 13:
					zt(Yt)
					break
				case 19:
					zt(Yt)
					break
				case 10:
					lh(r.type._context)
					break
				case 22:
				case 23:
					xh()
			}
			n = n.return
		}
	if (
		((bn = e),
		(cn = e = Go(e.current, null)),
		($n = Jn = t),
		(pn = 0),
		(us = null),
		(Sh = ud = Ma = 0),
		(Bn = Tl = null),
		va !== null)
	) {
		for (t = 0; t < va.length; t++)
			if (((n = va[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var o = r.next,
					a = n.pending
				if (a !== null) {
					var i = a.next
					;(a.next = o), (r.next = i)
				}
				n.pending = r
			}
		va = null
	}
	return e
}
function sC(e, t) {
	do {
		var n = cn
		try {
			if ((ih(), (Tu.current = pc), vc)) {
				for (var r = Gt.memoizedState; r !== null; ) {
					var o = r.queue
					o !== null && (o.pending = null), (r = r.next)
				}
				vc = !1
			}
			if (
				((Ra = 0),
				(yn = vn = Gt = null),
				(Il = !1),
				(is = 0),
				(bh.current = null),
				n === null || n.return === null)
			) {
				;(pn = 1), (us = t), (cn = null)
				break
			}
			e: {
				var a = e,
					i = n.return,
					l = n,
					s = t
				if (
					((t = $n),
					(l.flags |= 32768),
					s !== null && typeof s == 'object' && typeof s.then == 'function')
				) {
					var c = s,
						f = l,
						d = f.tag
					if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var v = f.alternate
						v
							? ((f.updateQueue = v.updateQueue),
							  (f.memoizedState = v.memoizedState),
							  (f.lanes = v.lanes))
							: ((f.updateQueue = null), (f.memoizedState = null))
					}
					var p = L0(i)
					if (p !== null) {
						;(p.flags &= -257),
							A0(p, i, l, a, t),
							p.mode & 1 && _0(a, c, t),
							(t = p),
							(s = c)
						var h = t.updateQueue
						if (h === null) {
							var g = new Set()
							g.add(s), (t.updateQueue = g)
						} else h.add(s)
						break e
					} else {
						if (!(t & 1)) {
							_0(a, c, t), Eh()
							break e
						}
						s = Error(ue(426))
					}
				} else if (Vt && l.mode & 1) {
					var b = L0(i)
					if (b !== null) {
						!(b.flags & 65536) && (b.flags |= 256),
							A0(b, i, l, a, t),
							oh(Ni(s, l))
						break e
					}
				}
				;(a = s = Ni(s, l)),
					pn !== 4 && (pn = 2),
					Tl === null ? (Tl = [a]) : Tl.push(a),
					(a = i)
				do {
					switch (a.tag) {
						case 3:
							;(a.flags |= 65536), (t &= -t), (a.lanes |= t)
							var m = US(a, s, t)
							M0(a, m)
							break e
						case 1:
							l = s
							var y = a.type,
								S = a.stateNode
							if (
								!(a.flags & 128) &&
								(typeof y.getDerivedStateFromError == 'function' ||
									(S !== null &&
										typeof S.componentDidCatch == 'function' &&
										(Yo === null || !Yo.has(S))))
							) {
								;(a.flags |= 65536), (t &= -t), (a.lanes |= t)
								var C = YS(a, l, t)
								M0(a, C)
								break e
							}
					}
					a = a.return
				} while (a !== null)
			}
			dC(n)
		} catch (x) {
			;(t = x), cn === n && n !== null && (cn = n = n.return)
			continue
		}
		break
	} while (1)
}
function uC() {
	var e = mc.current
	return (mc.current = pc), e === null ? pc : e
}
function Eh() {
	;(pn === 0 || pn === 3 || pn === 2) && (pn = 4),
		bn === null || (!(Ma & 268435455) && !(ud & 268435455)) || No(bn, $n)
}
function yc(e, t) {
	var n = Et
	Et |= 2
	var r = uC()
	;(bn !== e || $n !== t) && ((eo = null), ba(e, t))
	do
		try {
			zP()
			break
		} catch (o) {
			sC(e, o)
		}
	while (1)
	if ((ih(), (Et = n), (mc.current = r), cn !== null)) throw Error(ue(261))
	return (bn = null), ($n = 0), pn
}
function zP() {
	for (; cn !== null; ) cC(cn)
}
function HP() {
	for (; cn !== null && !d$(); ) cC(cn)
}
function cC(e) {
	var t = vC(e.alternate, e, Jn)
	;(e.memoizedProps = e.pendingProps),
		t === null ? dC(e) : (cn = t),
		(bh.current = null)
}
function dC(e) {
	var t = e
	do {
		var n = t.alternate
		if (((e = t.return), t.flags & 32768)) {
			if (((n = TP(n, t)), n !== null)) {
				;(n.flags &= 32767), (cn = n)
				return
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
			else {
				;(pn = 6), (cn = null)
				return
			}
		} else if (((n = kP(n, t, Jn)), n !== null)) {
			cn = n
			return
		}
		if (((t = t.sibling), t !== null)) {
			cn = t
			return
		}
		cn = t = e
	} while (t !== null)
	pn === 0 && (pn = 5)
}
function ua(e, t, n) {
	var r = Ot,
		o = mr.transition
	try {
		;(mr.transition = null), (Ot = 1), VP(e, t, n, r)
	} finally {
		;(mr.transition = o), (Ot = r)
	}
	return null
}
function VP(e, t, n, r) {
	do Ci()
	while (ko !== null)
	if (Et & 6) throw Error(ue(327))
	n = e.finishedWork
	var o = e.finishedLanes
	if (n === null) return null
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(ue(177))
	;(e.callbackNode = null), (e.callbackPriority = 0)
	var a = n.lanes | n.childLanes
	if (
		(C$(e, a),
		e === bn && ((cn = bn = null), ($n = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ru ||
			((ru = !0),
			pC(Ju, function () {
				return Ci(), null
			})),
		(a = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || a)
	) {
		;(a = mr.transition), (mr.transition = null)
		var i = Ot
		Ot = 1
		var l = Et
		;(Et |= 4),
			(bh.current = null),
			_P(e, n),
			aC(n, e),
			lP(Vv),
			(tc = !!Hv),
			(Vv = Hv = null),
			(e.current = n),
			LP(n),
			f$(),
			(Et = l),
			(Ot = i),
			(mr.transition = a)
	} else e.current = n
	if (
		(ru && ((ru = !1), (ko = e), (gc = o)),
		(a = e.pendingLanes),
		a === 0 && (Yo = null),
		m$(n.stateNode),
		Kn(e, an()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
	if (hc) throw ((hc = !1), (e = lp), (lp = null), e)
	return (
		gc & 1 && e.tag !== 0 && Ci(),
		(a = e.pendingLanes),
		a & 1 ? (e === sp ? Dl++ : ((Dl = 0), (sp = e))) : (Dl = 0),
		na(),
		null
	)
}
function Ci() {
	if (ko !== null) {
		var e = Wb(gc),
			t = mr.transition,
			n = Ot
		try {
			if (((mr.transition = null), (Ot = 16 > e ? 16 : e), ko === null))
				var r = !1
			else {
				if (((e = ko), (ko = null), (gc = 0), Et & 6)) throw Error(ue(331))
				var o = Et
				for (Et |= 4, Ee = e.current; Ee !== null; ) {
					var a = Ee,
						i = a.child
					if (Ee.flags & 16) {
						var l = a.deletions
						if (l !== null) {
							for (var s = 0; s < l.length; s++) {
								var c = l[s]
								for (Ee = c; Ee !== null; ) {
									var f = Ee
									switch (f.tag) {
										case 0:
										case 11:
										case 15:
											kl(8, f, a)
									}
									var d = f.child
									if (d !== null) (d.return = f), (Ee = d)
									else
										for (; Ee !== null; ) {
											f = Ee
											var v = f.sibling,
												p = f.return
											if ((nC(f), f === c)) {
												Ee = null
												break
											}
											if (v !== null) {
												;(v.return = p), (Ee = v)
												break
											}
											Ee = p
										}
								}
							}
							var h = a.alternate
							if (h !== null) {
								var g = h.child
								if (g !== null) {
									h.child = null
									do {
										var b = g.sibling
										;(g.sibling = null), (g = b)
									} while (g !== null)
								}
							}
							Ee = a
						}
					}
					if (a.subtreeFlags & 2064 && i !== null) (i.return = a), (Ee = i)
					else
						e: for (; Ee !== null; ) {
							if (((a = Ee), a.flags & 2048))
								switch (a.tag) {
									case 0:
									case 11:
									case 15:
										kl(9, a, a.return)
								}
							var m = a.sibling
							if (m !== null) {
								;(m.return = a.return), (Ee = m)
								break e
							}
							Ee = a.return
						}
				}
				var y = e.current
				for (Ee = y; Ee !== null; ) {
					i = Ee
					var S = i.child
					if (i.subtreeFlags & 2064 && S !== null) (S.return = i), (Ee = S)
					else
						e: for (i = y; Ee !== null; ) {
							if (((l = Ee), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											sd(9, l)
									}
								} catch (x) {
									Qt(l, l.return, x)
								}
							if (l === i) {
								Ee = null
								break e
							}
							var C = l.sibling
							if (C !== null) {
								;(C.return = l.return), (Ee = C)
								break e
							}
							Ee = l.return
						}
				}
				if (
					((Et = o), na(), jr && typeof jr.onPostCommitFiberRoot == 'function')
				)
					try {
						jr.onPostCommitFiberRoot(ed, e)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(Ot = n), (mr.transition = t)
		}
	}
	return !1
}
function q0(e, t, n) {
	;(t = Ni(n, t)),
		(t = US(e, t, 1)),
		(e = Uo(e, t, 1)),
		(t = Ln()),
		e !== null && (Ss(e, 1, t), Kn(e, t))
}
function Qt(e, t, n) {
	if (e.tag === 3) q0(e, e, n)
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				q0(t, e, n)
				break
			} else if (t.tag === 1) {
				var r = t.stateNode
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Yo === null || !Yo.has(r)))
				) {
					;(e = Ni(n, e)),
						(e = YS(t, e, 1)),
						(t = Uo(t, e, 1)),
						(e = Ln()),
						t !== null && (Ss(t, 1, e), Kn(t, e))
					break
				}
			}
			t = t.return
		}
}
function jP(e, t, n) {
	var r = e.pingCache
	r !== null && r.delete(t),
		(t = Ln()),
		(e.pingedLanes |= e.suspendedLanes & n),
		bn === e &&
			($n & n) === n &&
			(pn === 4 || (pn === 3 && ($n & 130023424) === $n && 500 > an() - Ch)
				? ba(e, 0)
				: (Sh |= n)),
		Kn(e, t)
}
function fC(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Ks), (Ks <<= 1), !(Ks & 130023424) && (Ks = 4194304))
			: (t = 1))
	var n = Ln()
	;(e = co(e, t)), e !== null && (Ss(e, t, n), Kn(e, n))
}
function BP(e) {
	var t = e.memoizedState,
		n = 0
	t !== null && (n = t.retryLane), fC(e, n)
}
function WP(e, t) {
	var n = 0
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState
			o !== null && (n = o.retryLane)
			break
		case 19:
			r = e.stateNode
			break
		default:
			throw Error(ue(314))
	}
	r !== null && r.delete(t), fC(e, n)
}
var vC
vC = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Un.current) Wn = !0
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Wn = !1), IP(e, t, n)
			Wn = !!(e.flags & 131072)
		}
	else (Wn = !1), Vt && t.flags & 1048576 && hS(t, sc, t.index)
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type
			_u(e, t), (e = t.pendingProps)
			var o = Pi(t, kn.current)
			Si(t, n), (o = ph(null, t, r, e, o, n))
			var a = mh()
			return (
				(t.flags |= 1),
				typeof o == 'object' &&
				o !== null &&
				typeof o.render == 'function' &&
				o.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Yn(r) ? ((a = !0), ic(t)) : (a = !1),
					  (t.memoizedState =
							o.state !== null && o.state !== void 0 ? o.state : null),
					  uh(t),
					  (o.updater = id),
					  (t.stateNode = o),
					  (o._reactInternals = t),
					  qv(t, r, e, n),
					  (t = Jv(null, t, r, !0, a, n)))
					: ((t.tag = 0), Vt && a && nh(t), _n(null, t, o, n), (t = t.child)),
				t
			)
		case 16:
			r = t.elementType
			e: {
				switch (
					(_u(e, t),
					(e = t.pendingProps),
					(o = r._init),
					(r = o(r._payload)),
					(t.type = r),
					(o = t.tag = YP(r)),
					(e = Er(r, e)),
					o)
				) {
					case 0:
						t = Zv(null, t, r, e, n)
						break e
					case 1:
						t = H0(null, t, r, e, n)
						break e
					case 11:
						t = F0(null, t, r, e, n)
						break e
					case 14:
						t = z0(null, t, r, Er(r.type, e), n)
						break e
				}
				throw Error(ue(306, r, ''))
			}
			return t
		case 0:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : Er(r, o)),
				Zv(e, t, r, o, n)
			)
		case 1:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : Er(r, o)),
				H0(e, t, r, o, n)
			)
		case 3:
			e: {
				if ((qS(t), e === null)) throw Error(ue(387))
				;(r = t.pendingProps),
					(a = t.memoizedState),
					(o = a.element),
					SS(e, t),
					dc(t, r, null, n)
				var i = t.memoizedState
				if (((r = i.element), a.isDehydrated))
					if (
						((a = {
							element: r,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions
						}),
						(t.updateQueue.baseState = a),
						(t.memoizedState = a),
						t.flags & 256)
					) {
						;(o = Ni(Error(ue(423)), t)), (t = V0(e, t, r, n, o))
						break e
					} else if (r !== o) {
						;(o = Ni(Error(ue(424)), t)), (t = V0(e, t, r, n, o))
						break e
					} else
						for (
							er = Wo(t.stateNode.containerInfo.firstChild),
								nr = t,
								Vt = !0,
								Pr = null,
								n = ES(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((Ri(), r === o)) {
						t = fo(e, t, n)
						break e
					}
					_n(e, t, r, n)
				}
				t = t.child
			}
			return t
		case 5:
			return (
				$S(t),
				e === null && Kv(t),
				(r = t.type),
				(o = t.pendingProps),
				(a = e !== null ? e.memoizedProps : null),
				(i = o.children),
				jv(r, o) ? (i = null) : a !== null && jv(r, a) && (t.flags |= 32),
				XS(e, t),
				_n(e, t, i, n),
				t.child
			)
		case 6:
			return e === null && Kv(t), null
		case 13:
			return QS(e, t, n)
		case 4:
			return (
				ch(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Mi(t, null, r, n)) : _n(e, t, r, n),
				t.child
			)
		case 11:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : Er(r, o)),
				F0(e, t, r, o, n)
			)
		case 7:
			return _n(e, t, t.pendingProps, n), t.child
		case 8:
			return _n(e, t, t.pendingProps.children, n), t.child
		case 12:
			return _n(e, t, t.pendingProps.children, n), t.child
		case 10:
			e: {
				if (
					((r = t.type._context),
					(o = t.pendingProps),
					(a = t.memoizedProps),
					(i = o.value),
					_t(uc, r._currentValue),
					(r._currentValue = i),
					a !== null)
				)
					if (Ir(a.value, i)) {
						if (a.children === o.children && !Un.current) {
							t = fo(e, t, n)
							break e
						}
					} else
						for (a = t.child, a !== null && (a.return = t); a !== null; ) {
							var l = a.dependencies
							if (l !== null) {
								i = a.child
								for (var s = l.firstContext; s !== null; ) {
									if (s.context === r) {
										if (a.tag === 1) {
											;(s = lo(-1, n & -n)), (s.tag = 2)
											var c = a.updateQueue
											if (c !== null) {
												c = c.shared
												var f = c.pending
												f === null
													? (s.next = s)
													: ((s.next = f.next), (f.next = s)),
													(c.pending = s)
											}
										}
										;(a.lanes |= n),
											(s = a.alternate),
											s !== null && (s.lanes |= n),
											Gv(a.return, n, t),
											(l.lanes |= n)
										break
									}
									s = s.next
								}
							} else if (a.tag === 10) i = a.type === t.type ? null : a.child
							else if (a.tag === 18) {
								if (((i = a.return), i === null)) throw Error(ue(341))
								;(i.lanes |= n),
									(l = i.alternate),
									l !== null && (l.lanes |= n),
									Gv(i, n, t),
									(i = a.sibling)
							} else i = a.child
							if (i !== null) i.return = a
							else
								for (i = a; i !== null; ) {
									if (i === t) {
										i = null
										break
									}
									if (((a = i.sibling), a !== null)) {
										;(a.return = i.return), (i = a)
										break
									}
									i = i.return
								}
							a = i
						}
				_n(e, t, o.children, n), (t = t.child)
			}
			return t
		case 9:
			return (
				(o = t.type),
				(r = t.pendingProps.children),
				Si(t, n),
				(o = hr(o)),
				(r = r(o)),
				(t.flags |= 1),
				_n(e, t, r, n),
				t.child
			)
		case 14:
			return (
				(r = t.type),
				(o = Er(r, t.pendingProps)),
				(o = Er(r.type, o)),
				z0(e, t, r, o, n)
			)
		case 15:
			return KS(e, t, t.type, t.pendingProps, n)
		case 17:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : Er(r, o)),
				_u(e, t),
				(t.tag = 1),
				Yn(r) ? ((e = !0), ic(t)) : (e = !1),
				Si(t, n),
				wS(t, r, o),
				qv(t, r, o, n),
				Jv(null, t, r, !0, e, n)
			)
		case 19:
			return ZS(e, t, n)
		case 22:
			return GS(e, t, n)
	}
	throw Error(ue(156, t.tag))
}
function pC(e, t) {
	return Hb(e, t)
}
function UP(e, t, n, r) {
	;(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function pr(e, t, n, r) {
	return new UP(e, t, n, r)
}
function $h(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent)
}
function YP(e) {
	if (typeof e == 'function') return $h(e) ? 1 : 0
	if (e != null) {
		if (((e = e.$$typeof), e === Wm)) return 11
		if (e === Um) return 14
	}
	return 2
}
function Go(e, t) {
	var n = e.alternate
	return (
		n === null
			? ((n = pr(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	)
}
function Fu(e, t, n, r, o, a) {
	var i = 2
	if (((r = e), typeof e == 'function')) $h(e) && (i = 1)
	else if (typeof e == 'string') i = 5
	else
		e: switch (e) {
			case ri:
				return Sa(n.children, o, a, t)
			case Bm:
				;(i = 8), (o |= 8)
				break
			case Sv:
				return (e = pr(12, n, t, o | 2)), (e.elementType = Sv), (e.lanes = a), e
			case Cv:
				return (e = pr(13, n, t, o)), (e.elementType = Cv), (e.lanes = a), e
			case wv:
				return (e = pr(19, n, t, o)), (e.elementType = wv), (e.lanes = a), e
			case xb:
				return cd(n, o, a, t)
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Cb:
							i = 10
							break e
						case wb:
							i = 9
							break e
						case Wm:
							i = 11
							break e
						case Um:
							i = 14
							break e
						case Po:
							;(i = 16), (r = null)
							break e
					}
				throw Error(ue(130, e == null ? e : typeof e, ''))
		}
	return (
		(t = pr(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = a), t
	)
}
function Sa(e, t, n, r) {
	return (e = pr(7, e, r, t)), (e.lanes = n), e
}
function cd(e, t, n, r) {
	return (
		(e = pr(22, e, r, t)),
		(e.elementType = xb),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	)
}
function wf(e, t, n) {
	return (e = pr(6, e, null, t)), (e.lanes = n), e
}
function xf(e, t, n) {
	return (
		(t = pr(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}),
		t
	)
}
function KP(e, t, n, r, o) {
	;(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = nf(0)),
		(this.expirationTimes = nf(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = nf(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null)
}
function Ph(e, t, n, r, o, a, i, l, s) {
	return (
		(e = new KP(e, t, n, l, s)),
		t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
		(a = pr(3, null, null, t)),
		(e.current = a),
		(a.stateNode = e),
		(a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}),
		uh(a),
		e
	)
}
function GP(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return {
		$$typeof: ni,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}
function mC(e) {
	if (!e) return Jo
	e = e._reactInternals
	e: {
		if (Da(e) !== e || e.tag !== 1) throw Error(ue(170))
		var t = e
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context
					break e
				case 1:
					if (Yn(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			t = t.return
		} while (t !== null)
		throw Error(ue(171))
	}
	if (e.tag === 1) {
		var n = e.type
		if (Yn(n)) return pS(e, n, t)
	}
	return t
}
function hC(e, t, n, r, o, a, i, l, s) {
	return (
		(e = Ph(n, r, !0, e, o, a, i, l, s)),
		(e.context = mC(null)),
		(n = e.current),
		(r = Ln()),
		(o = Ko(n)),
		(a = lo(r, o)),
		(a.callback = t ?? null),
		Uo(n, a, o),
		(e.current.lanes = o),
		Ss(e, o, r),
		Kn(e, r),
		e
	)
}
function dd(e, t, n, r) {
	var o = t.current,
		a = Ln(),
		i = Ko(o)
	return (
		(n = mC(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = lo(a, i)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Uo(o, t, i)),
		e !== null && (Or(e, o, i, a), ku(e, o, i)),
		i
	)
}
function bc(e) {
	if (((e = e.current), !e.child)) return null
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode
		default:
			return e.child.stateNode
	}
}
function Q0(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane
		e.retryLane = n !== 0 && n < t ? n : t
	}
}
function Rh(e, t) {
	Q0(e, t), (e = e.alternate) && Q0(e, t)
}
function XP() {
	return null
}
var gC =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e)
		  }
function Mh(e) {
	this._internalRoot = e
}
fd.prototype.render = Mh.prototype.render = function (e) {
	var t = this._internalRoot
	if (t === null) throw Error(ue(409))
	dd(e, t, null, null)
}
fd.prototype.unmount = Mh.prototype.unmount = function () {
	var e = this._internalRoot
	if (e !== null) {
		this._internalRoot = null
		var t = e.containerInfo
		Oa(function () {
			dd(null, e, null, null)
		}),
			(t[uo] = null)
	}
}
function fd(e) {
	this._internalRoot = e
}
fd.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Kb()
		e = { blockedOn: null, target: e, priority: t }
		for (var n = 0; n < Oo.length && t !== 0 && t < Oo[n].priority; n++);
		Oo.splice(n, 0, e), n === 0 && Xb(e)
	}
}
function Oh(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function vd(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	)
}
function Z0() {}
function qP(e, t, n, r, o) {
	if (o) {
		if (typeof r == 'function') {
			var a = r
			r = function () {
				var c = bc(i)
				a.call(c)
			}
		}
		var i = hC(t, r, e, 0, null, !1, !1, '', Z0)
		return (
			(e._reactRootContainer = i),
			(e[uo] = i.current),
			ts(e.nodeType === 8 ? e.parentNode : e),
			Oa(),
			i
		)
	}
	for (; (o = e.lastChild); ) e.removeChild(o)
	if (typeof r == 'function') {
		var l = r
		r = function () {
			var c = bc(s)
			l.call(c)
		}
	}
	var s = Ph(e, 0, !1, null, null, !1, !1, '', Z0)
	return (
		(e._reactRootContainer = s),
		(e[uo] = s.current),
		ts(e.nodeType === 8 ? e.parentNode : e),
		Oa(function () {
			dd(t, s, n, r)
		}),
		s
	)
}
function pd(e, t, n, r, o) {
	var a = n._reactRootContainer
	if (a) {
		var i = a
		if (typeof o == 'function') {
			var l = o
			o = function () {
				var s = bc(i)
				l.call(s)
			}
		}
		dd(t, i, e, o)
	} else i = qP(n, t, e, o, r)
	return bc(i)
}
Ub = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode
			if (t.current.memoizedState.isDehydrated) {
				var n = Sl(t.pendingLanes)
				n !== 0 &&
					(Gm(t, n | 1), Kn(t, an()), !(Et & 6) && ((Ii = an() + 500), na()))
			}
			break
		case 13:
			Oa(function () {
				var r = co(e, 1)
				if (r !== null) {
					var o = Ln()
					Or(r, e, 1, o)
				}
			}),
				Rh(e, 1)
	}
}
Xm = function (e) {
	if (e.tag === 13) {
		var t = co(e, 134217728)
		if (t !== null) {
			var n = Ln()
			Or(t, e, 134217728, n)
		}
		Rh(e, 134217728)
	}
}
Yb = function (e) {
	if (e.tag === 13) {
		var t = Ko(e),
			n = co(e, t)
		if (n !== null) {
			var r = Ln()
			Or(n, e, t, r)
		}
		Rh(e, t)
	}
}
Kb = function () {
	return Ot
}
Gb = function (e, t) {
	var n = Ot
	try {
		return (Ot = e), t()
	} finally {
		Ot = n
	}
}
kv = function (e, t, n) {
	switch (t) {
		case 'input':
			if (($v(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t]
					if (r !== e && r.form === e.form) {
						var o = od(r)
						if (!o) throw Error(ue(90))
						$b(r), $v(r, o)
					}
				}
			}
			break
		case 'textarea':
			Rb(e, n)
			break
		case 'select':
			;(t = n.value), t != null && hi(e, !!n.multiple, t, !1)
	}
}
Db = wh
_b = Oa
var QP = { usingClientEntryPoint: !1, Events: [ws, li, od, kb, Tb, wh] },
	dl = {
		findFiberByHostInstance: fa,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom'
	},
	ZP = {
		bundleType: dl.bundleType,
		version: dl.version,
		rendererPackageName: dl.rendererPackageName,
		rendererConfig: dl.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: bo.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Fb(e)), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: dl.findFiberByHostInstance || XP,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!ou.isDisabled && ou.supportsFiber)
		try {
			;(ed = ou.inject(ZP)), (jr = ou)
		} catch {}
}
ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QP
ar.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!Oh(t)) throw Error(ue(200))
	return GP(e, t, null, n)
}
ar.createRoot = function (e, t) {
	if (!Oh(e)) throw Error(ue(299))
	var n = !1,
		r = '',
		o = gC
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = Ph(e, 1, !1, null, null, n, !1, r, o)),
		(e[uo] = t.current),
		ts(e.nodeType === 8 ? e.parentNode : e),
		new Mh(t)
	)
}
ar.findDOMNode = function (e) {
	if (e == null) return null
	if (e.nodeType === 1) return e
	var t = e._reactInternals
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(ue(188))
			: ((e = Object.keys(e).join(',')), Error(ue(268, e)))
	return (e = Fb(t)), (e = e === null ? null : e.stateNode), e
}
ar.flushSync = function (e) {
	return Oa(e)
}
ar.hydrate = function (e, t, n) {
	if (!vd(t)) throw Error(ue(200))
	return pd(null, e, t, !0, n)
}
ar.hydrateRoot = function (e, t, n) {
	if (!Oh(e)) throw Error(ue(405))
	var r = (n != null && n.hydratedSources) || null,
		o = !1,
		a = '',
		i = gC
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (o = !0),
			n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = hC(t, null, e, 1, n ?? null, o, !1, a, i)),
		(e[uo] = t.current),
		ts(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(o = n._getVersion),
				(o = o(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, o])
					: t.mutableSourceEagerHydrationData.push(n, o)
	return new fd(t)
}
ar.render = function (e, t, n) {
	if (!vd(t)) throw Error(ue(200))
	return pd(null, e, t, !1, n)
}
ar.unmountComponentAtNode = function (e) {
	if (!vd(e)) throw Error(ue(40))
	return e._reactRootContainer
		? (Oa(function () {
				pd(null, null, e, !1, function () {
					;(e._reactRootContainer = null), (e[uo] = null)
				})
		  }),
		  !0)
		: !1
}
ar.unstable_batchedUpdates = wh
ar.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!vd(n)) throw Error(ue(200))
	if (e == null || e._reactInternals === void 0) throw Error(ue(38))
	return pd(e, t, n, !1, r)
}
ar.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
	function t() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
			} catch (n) {
				console.error(n)
			}
	}
	t(), (e.exports = ar)
})(X2)
const ki = ib(Ea),
	JP = ab({ __proto__: null, default: ki }, [Ea])
function cs(e) {
	return e instanceof HTMLElement
		? e
		: e instanceof he.Component
		? ki.findDOMNode(e)
		: null
}
var yC = (function () {
		if (typeof Map < 'u') return Map
		function e(t, n) {
			var r = -1
			return (
				t.some(function (o, a) {
					return o[0] === n ? ((r = a), !0) : !1
				}),
				r
			)
		}
		return (function () {
			function t() {
				this.__entries__ = []
			}
			return (
				Object.defineProperty(t.prototype, 'size', {
					get: function () {
						return this.__entries__.length
					},
					enumerable: !0,
					configurable: !0
				}),
				(t.prototype.get = function (n) {
					var r = e(this.__entries__, n),
						o = this.__entries__[r]
					return o && o[1]
				}),
				(t.prototype.set = function (n, r) {
					var o = e(this.__entries__, n)
					~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r])
				}),
				(t.prototype.delete = function (n) {
					var r = this.__entries__,
						o = e(r, n)
					~o && r.splice(o, 1)
				}),
				(t.prototype.has = function (n) {
					return !!~e(this.__entries__, n)
				}),
				(t.prototype.clear = function () {
					this.__entries__.splice(0)
				}),
				(t.prototype.forEach = function (n, r) {
					r === void 0 && (r = null)
					for (var o = 0, a = this.__entries__; o < a.length; o++) {
						var i = a[o]
						n.call(r, i[1], i[0])
					}
				}),
				t
			)
		})()
	})(),
	dp =
		typeof window < 'u' &&
		typeof document < 'u' &&
		window.document === document,
	Sc = (function () {
		return typeof global < 'u' && global.Math === Math
			? global
			: typeof self < 'u' && self.Math === Math
			? self
			: typeof window < 'u' && window.Math === Math
			? window
			: Function('return this')()
	})(),
	eR = (function () {
		return typeof requestAnimationFrame == 'function'
			? requestAnimationFrame.bind(Sc)
			: function (e) {
					return setTimeout(function () {
						return e(Date.now())
					}, 1e3 / 60)
			  }
	})(),
	tR = 2
function nR(e, t) {
	var n = !1,
		r = !1,
		o = 0
	function a() {
		n && ((n = !1), e()), r && l()
	}
	function i() {
		eR(a)
	}
	function l() {
		var s = Date.now()
		if (n) {
			if (s - o < tR) return
			r = !0
		} else (n = !0), (r = !1), setTimeout(i, t)
		o = s
	}
	return l
}
var rR = 20,
	oR = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
	aR = typeof MutationObserver < 'u',
	iR = (function () {
		function e() {
			;(this.connected_ = !1),
				(this.mutationEventsAdded_ = !1),
				(this.mutationsObserver_ = null),
				(this.observers_ = []),
				(this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
				(this.refresh = nR(this.refresh.bind(this), rR))
		}
		return (
			(e.prototype.addObserver = function (t) {
				~this.observers_.indexOf(t) || this.observers_.push(t),
					this.connected_ || this.connect_()
			}),
			(e.prototype.removeObserver = function (t) {
				var n = this.observers_,
					r = n.indexOf(t)
				~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
			}),
			(e.prototype.refresh = function () {
				var t = this.updateObservers_()
				t && this.refresh()
			}),
			(e.prototype.updateObservers_ = function () {
				var t = this.observers_.filter(function (n) {
					return n.gatherActive(), n.hasActive()
				})
				return (
					t.forEach(function (n) {
						return n.broadcastActive()
					}),
					t.length > 0
				)
			}),
			(e.prototype.connect_ = function () {
				!dp ||
					this.connected_ ||
					(document.addEventListener('transitionend', this.onTransitionEnd_),
					window.addEventListener('resize', this.refresh),
					aR
						? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
						  this.mutationsObserver_.observe(document, {
								attributes: !0,
								childList: !0,
								characterData: !0,
								subtree: !0
						  }))
						: (document.addEventListener('DOMSubtreeModified', this.refresh),
						  (this.mutationEventsAdded_ = !0)),
					(this.connected_ = !0))
			}),
			(e.prototype.disconnect_ = function () {
				!dp ||
					!this.connected_ ||
					(document.removeEventListener('transitionend', this.onTransitionEnd_),
					window.removeEventListener('resize', this.refresh),
					this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
					this.mutationEventsAdded_ &&
						document.removeEventListener('DOMSubtreeModified', this.refresh),
					(this.mutationsObserver_ = null),
					(this.mutationEventsAdded_ = !1),
					(this.connected_ = !1))
			}),
			(e.prototype.onTransitionEnd_ = function (t) {
				var n = t.propertyName,
					r = n === void 0 ? '' : n,
					o = oR.some(function (a) {
						return !!~r.indexOf(a)
					})
				o && this.refresh()
			}),
			(e.getInstance = function () {
				return this.instance_ || (this.instance_ = new e()), this.instance_
			}),
			(e.instance_ = null),
			e
		)
	})(),
	bC = function (e, t) {
		for (var n = 0, r = Object.keys(t); n < r.length; n++) {
			var o = r[n]
			Object.defineProperty(e, o, {
				value: t[o],
				enumerable: !1,
				writable: !1,
				configurable: !0
			})
		}
		return e
	},
	Ti = function (e) {
		var t = e && e.ownerDocument && e.ownerDocument.defaultView
		return t || Sc
	},
	SC = md(0, 0, 0, 0)
function Cc(e) {
	return parseFloat(e) || 0
}
function J0(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
	return t.reduce(function (r, o) {
		var a = e['border-' + o + '-width']
		return r + Cc(a)
	}, 0)
}
function lR(e) {
	for (
		var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t;
		r < o.length;
		r++
	) {
		var a = o[r],
			i = e['padding-' + a]
		n[a] = Cc(i)
	}
	return n
}
function sR(e) {
	var t = e.getBBox()
	return md(0, 0, t.width, t.height)
}
function uR(e) {
	var t = e.clientWidth,
		n = e.clientHeight
	if (!t && !n) return SC
	var r = Ti(e).getComputedStyle(e),
		o = lR(r),
		a = o.left + o.right,
		i = o.top + o.bottom,
		l = Cc(r.width),
		s = Cc(r.height)
	if (
		(r.boxSizing === 'border-box' &&
			(Math.round(l + a) !== t && (l -= J0(r, 'left', 'right') + a),
			Math.round(s + i) !== n && (s -= J0(r, 'top', 'bottom') + i)),
		!dR(e))
	) {
		var c = Math.round(l + a) - t,
			f = Math.round(s + i) - n
		Math.abs(c) !== 1 && (l -= c), Math.abs(f) !== 1 && (s -= f)
	}
	return md(o.left, o.top, l, s)
}
var cR = (function () {
	return typeof SVGGraphicsElement < 'u'
		? function (e) {
				return e instanceof Ti(e).SVGGraphicsElement
		  }
		: function (e) {
				return e instanceof Ti(e).SVGElement && typeof e.getBBox == 'function'
		  }
})()
function dR(e) {
	return e === Ti(e).document.documentElement
}
function fR(e) {
	return dp ? (cR(e) ? sR(e) : uR(e)) : SC
}
function vR(e) {
	var t = e.x,
		n = e.y,
		r = e.width,
		o = e.height,
		a = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
		i = Object.create(a.prototype)
	return (
		bC(i, {
			x: t,
			y: n,
			width: r,
			height: o,
			top: n,
			right: t + r,
			bottom: o + n,
			left: t
		}),
		i
	)
}
function md(e, t, n, r) {
	return { x: e, y: t, width: n, height: r }
}
var pR = (function () {
		function e(t) {
			;(this.broadcastWidth = 0),
				(this.broadcastHeight = 0),
				(this.contentRect_ = md(0, 0, 0, 0)),
				(this.target = t)
		}
		return (
			(e.prototype.isActive = function () {
				var t = fR(this.target)
				return (
					(this.contentRect_ = t),
					t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
				)
			}),
			(e.prototype.broadcastRect = function () {
				var t = this.contentRect_
				return (
					(this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
				)
			}),
			e
		)
	})(),
	mR = (function () {
		function e(t, n) {
			var r = vR(n)
			bC(this, { target: t, contentRect: r })
		}
		return e
	})(),
	hR = (function () {
		function e(t, n, r) {
			if (
				((this.activeObservations_ = []),
				(this.observations_ = new yC()),
				typeof t != 'function')
			)
				throw new TypeError(
					'The callback provided as parameter 1 is not a function.'
				)
			;(this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r)
		}
		return (
			(e.prototype.observe = function (t) {
				if (!arguments.length)
					throw new TypeError('1 argument required, but only 0 present.')
				if (!(typeof Element > 'u' || !(Element instanceof Object))) {
					if (!(t instanceof Ti(t).Element))
						throw new TypeError('parameter 1 is not of type "Element".')
					var n = this.observations_
					n.has(t) ||
						(n.set(t, new pR(t)),
						this.controller_.addObserver(this),
						this.controller_.refresh())
				}
			}),
			(e.prototype.unobserve = function (t) {
				if (!arguments.length)
					throw new TypeError('1 argument required, but only 0 present.')
				if (!(typeof Element > 'u' || !(Element instanceof Object))) {
					if (!(t instanceof Ti(t).Element))
						throw new TypeError('parameter 1 is not of type "Element".')
					var n = this.observations_
					n.has(t) &&
						(n.delete(t), n.size || this.controller_.removeObserver(this))
				}
			}),
			(e.prototype.disconnect = function () {
				this.clearActive(),
					this.observations_.clear(),
					this.controller_.removeObserver(this)
			}),
			(e.prototype.gatherActive = function () {
				var t = this
				this.clearActive(),
					this.observations_.forEach(function (n) {
						n.isActive() && t.activeObservations_.push(n)
					})
			}),
			(e.prototype.broadcastActive = function () {
				if (this.hasActive()) {
					var t = this.callbackCtx_,
						n = this.activeObservations_.map(function (r) {
							return new mR(r.target, r.broadcastRect())
						})
					this.callback_.call(t, n, t), this.clearActive()
				}
			}),
			(e.prototype.clearActive = function () {
				this.activeObservations_.splice(0)
			}),
			(e.prototype.hasActive = function () {
				return this.activeObservations_.length > 0
			}),
			e
		)
	})(),
	CC = typeof WeakMap < 'u' ? new WeakMap() : new yC(),
	wC = (function () {
		function e(t) {
			if (!(this instanceof e))
				throw new TypeError('Cannot call a class as a function.')
			if (!arguments.length)
				throw new TypeError('1 argument required, but only 0 present.')
			var n = iR.getInstance(),
				r = new hR(t, n, this)
			CC.set(this, r)
		}
		return e
	})()
;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
	wC.prototype[e] = function () {
		var t
		return (t = CC.get(this))[e].apply(t, arguments)
	}
})
var xC = (function () {
		return typeof Sc.ResizeObserver < 'u' ? Sc.ResizeObserver : wC
	})(),
	To = new Map()
function gR(e) {
	e.forEach(function (t) {
		var n,
			r = t.target
		;(n = To.get(r)) === null ||
			n === void 0 ||
			n.forEach(function (o) {
				return o(r)
			})
	})
}
var EC = new xC(gR)
function yR(e, t) {
	To.has(e) || (To.set(e, new Set()), EC.observe(e)), To.get(e).add(t)
}
function bR(e, t) {
	To.has(e) &&
		(To.get(e).delete(t), To.get(e).size || (EC.unobserve(e), To.delete(e)))
}
var SR = (function (e) {
		go(n, e)
		var t = yo(n)
		function n() {
			return Tn(this, n), t.apply(this, arguments)
		}
		return (
			Dn(n, [
				{
					key: 'render',
					value: function () {
						return this.props.children
					}
				}
			]),
			n
		)
	})(u.Component),
	fp = u.createContext(null)
function CR(e) {
	var t = e.children,
		n = e.onBatchResize,
		r = u.useRef(0),
		o = u.useRef([]),
		a = u.useContext(fp),
		i = u.useCallback(
			function (l, s, c) {
				r.current += 1
				var f = r.current
				o.current.push({ size: l, element: s, data: c }),
					Promise.resolve().then(function () {
						f === r.current && (n == null || n(o.current), (o.current = []))
					}),
					a == null || a(l, s, c)
			},
			[n, a]
		)
	return u.createElement(fp.Provider, { value: i }, t)
}
function wR(e, t) {
	var n = e.children,
		r = e.disabled,
		o = u.useRef(null),
		a = u.useRef(null),
		i = u.useContext(fp),
		l = typeof n == 'function',
		s = l ? n(o) : n,
		c = u.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
		f = !l && u.isValidElement(s) && ji(s),
		d = f ? s.ref : null,
		v = u.useMemo(
			function () {
				return Gr(d, o)
			},
			[d, o]
		),
		p = function () {
			return cs(o.current) || cs(a.current)
		}
	u.useImperativeHandle(t, function () {
		return p()
	})
	var h = u.useRef(e)
	h.current = e
	var g = u.useCallback(function (b) {
		var m = h.current,
			y = m.onResize,
			S = m.data,
			C = b.getBoundingClientRect(),
			x = C.width,
			w = C.height,
			E = b.offsetWidth,
			P = b.offsetHeight,
			N = Math.floor(x),
			O = Math.floor(w)
		if (
			c.current.width !== N ||
			c.current.height !== O ||
			c.current.offsetWidth !== E ||
			c.current.offsetHeight !== P
		) {
			var k = { width: N, height: O, offsetWidth: E, offsetHeight: P }
			c.current = k
			var I = E === Math.round(x) ? x : E,
				$ = P === Math.round(w) ? w : P,
				R = F(F({}, k), {}, { offsetWidth: I, offsetHeight: $ })
			i == null || i(R, b, S),
				y &&
					Promise.resolve().then(function () {
						y(R, b)
					})
		}
	}, [])
	return (
		u.useEffect(
			function () {
				var b = p()
				return (
					b && !r && yR(b, g),
					function () {
						return bR(b, g)
					}
				)
			},
			[o.current, r]
		),
		u.createElement(SR, { ref: a }, f ? u.cloneElement(s, { ref: v }) : s)
	)
}
var xR = u.forwardRef(wR),
	ER = 'rc-observer-key'
function $R(e, t) {
	var n = e.children,
		r = typeof n == 'function' ? [n] : Ur(n)
	return r.map(function (o, a) {
		var i = (o == null ? void 0 : o.key) || ''.concat(ER, '-').concat(a)
		return u.createElement(
			xR,
			se({}, e, { key: i, ref: a === 0 ? t : void 0 }),
			o
		)
	})
}
var vo = u.forwardRef($R)
vo.Collection = CR
function Tr(e, t) {
	var n = F({}, e)
	return (
		Array.isArray(t) &&
			t.forEach(function (r) {
				delete n[r]
			}),
		n
	)
}
function vp(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
	return r
}
function PR(e) {
	if (Array.isArray(e)) return vp(e)
}
function $C(e) {
	if (
		(typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
		e['@@iterator'] != null
	)
		return Array.from(e)
}
function Nh(e, t) {
	if (e) {
		if (typeof e == 'string') return vp(e, t)
		var n = Object.prototype.toString.call(e).slice(8, -1)
		if (
			(n === 'Object' && e.constructor && (n = e.constructor.name),
			n === 'Map' || n === 'Set')
		)
			return Array.from(e)
		if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
			return vp(e, t)
	}
}
function RR() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function xe(e) {
	return PR(e) || $C(e) || Nh(e) || RR()
}
function Ih(e) {
	for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
		(n =
			(e.charCodeAt(r) & 255) |
			((e.charCodeAt(++r) & 255) << 8) |
			((e.charCodeAt(++r) & 255) << 16) |
			((e.charCodeAt(++r) & 255) << 24)),
			(n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
			(n ^= n >>> 24),
			(t =
				((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
				((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
	switch (o) {
		case 3:
			t ^= (e.charCodeAt(r + 2) & 255) << 16
		case 2:
			t ^= (e.charCodeAt(r + 1) & 255) << 8
		case 1:
			;(t ^= e.charCodeAt(r) & 255),
				(t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
	}
	return (
		(t ^= t >>> 13),
		(t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
		((t ^ (t >>> 15)) >>> 0).toString(36)
	)
}
function MR(e, t) {
	if (e == null) return {}
	var n = {},
		r = Object.keys(e),
		o,
		a
	for (a = 0; a < r.length; a++)
		(o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
	return n
}
function ot(e, t) {
	if (e == null) return {}
	var n = MR(e, t),
		r,
		o
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e)
		for (o = 0; o < a.length; o++)
			(r = a[o]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r])
	}
	return n
}
function Es(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
		r = new Set()
	function o(a, i) {
		var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
			s = r.has(a)
		if ((En(!s, 'Warning: There may be circular references'), s)) return !1
		if (a === i) return !0
		if (n && l > 1) return !1
		r.add(a)
		var c = l + 1
		if (Array.isArray(a)) {
			if (!Array.isArray(i) || a.length !== i.length) return !1
			for (var f = 0; f < a.length; f++) if (!o(a[f], i[f], c)) return !1
			return !0
		}
		if (a && i && Ze(a) === 'object' && Ze(i) === 'object') {
			var d = Object.keys(a)
			return d.length !== Object.keys(i).length
				? !1
				: d.every(function (v) {
						return o(a[v], i[v], c)
				  })
		}
		return !1
	}
	return o(e, t)
}
var OR = (function () {
		function e() {
			Tn(this, e), V(this, 'cache', new Map())
		}
		return (
			Dn(e, [
				{
					key: 'get',
					value: function (n) {
						return this.cache.get(n.join('%')) || null
					}
				},
				{
					key: 'update',
					value: function (n, r) {
						var o = n.join('%'),
							a = this.cache.get(o),
							i = r(a)
						i === null ? this.cache.delete(o) : this.cache.set(o, i)
					}
				}
			]),
			e
		)
	})(),
	pp = 'data-token-hash',
	ma = 'data-css-hash',
	_l = '__cssinjs_instance__',
	wc = Math.random().toString(12).slice(2)
function NR() {
	if (typeof document < 'u' && document.head && document.body) {
		var e = document.body.querySelectorAll('style['.concat(ma, ']')) || [],
			t = document.head.firstChild
		Array.from(e).forEach(function (r) {
			;(r[_l] = r[_l] || wc), document.head.insertBefore(r, t)
		})
		var n = {}
		Array.from(document.querySelectorAll('style['.concat(ma, ']'))).forEach(
			function (r) {
				var o = r.getAttribute(ma)
				if (n[o]) {
					if (r[_l] === wc) {
						var a
						;(a = r.parentNode) === null || a === void 0 || a.removeChild(r)
					}
				} else n[o] = !0
			}
		)
	}
	return new OR()
}
var PC = u.createContext({ hashPriority: 'low', cache: NR(), defaultCache: !0 })
function RC(e) {
	if (Array.isArray(e)) return e
}
function IR(e, t) {
	var n =
		e == null
			? null
			: (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (n != null) {
		var r,
			o,
			a,
			i,
			l = [],
			s = !0,
			c = !1
		try {
			if (((a = (n = n.call(e)).next), t === 0)) {
				if (Object(n) !== n) return
				s = !1
			} else
				for (
					;
					!(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t);
					s = !0
				);
		} catch (f) {
			;(c = !0), (o = f)
		} finally {
			try {
				if (!s && n.return != null && ((i = n.return()), Object(i) !== i))
					return
			} finally {
				if (c) throw o
			}
		}
		return l
	}
}
function MC() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function B(e, t) {
	return RC(e) || IR(e, t) || Nh(e, t) || MC()
}
function OC(e, t, n, r) {
	var o = u.useContext(PC),
		a = o.cache,
		i = [e].concat(xe(t))
	return (
		u.useMemo(
			function () {
				a.update(i, function (l) {
					var s = l || [],
						c = B(s, 2),
						f = c[0],
						d = f === void 0 ? 0 : f,
						v = c[1],
						p = v,
						h = p || n()
					return [d + 1, h]
				})
			},
			[i.join('_')]
		),
		u.useEffect(function () {
			return function () {
				a.update(i, function (l) {
					var s = l || [],
						c = B(s, 2),
						f = c[0],
						d = f === void 0 ? 0 : f,
						v = c[1],
						p = d - 1
					return p === 0 ? (r == null || r(v, !1), null) : [d - 1, v]
				})
			}
		}, i),
		a.get(i)[1]
	)
}
function An() {
	return !!(
		typeof window < 'u' &&
		window.document &&
		window.document.createElement
	)
}
function Ll(e, t) {
	if (!e) return !1
	if (e.contains) return e.contains(t)
	for (var n = t; n; ) {
		if (n === e) return !0
		n = n.parentNode
	}
	return !1
}
var ey = 'data-rc-order',
	kR = 'rc-util-key',
	mp = new Map()
function NC() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
		t = e.mark
	return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : kR
}
function hd(e) {
	if (e.attachTo) return e.attachTo
	var t = document.querySelector('head')
	return t || document.body
}
function TR(e) {
	return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function IC(e) {
	return Array.from((mp.get(e) || e).children).filter(function (t) {
		return t.tagName === 'STYLE'
	})
}
function kC(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
	if (!An()) return null
	var n = t.csp,
		r = t.prepend,
		o = document.createElement('style')
	o.setAttribute(ey, TR(r)),
		n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce),
		(o.innerHTML = e)
	var a = hd(t),
		i = a.firstChild
	if (r) {
		if (r === 'queue') {
			var l = IC(a).filter(function (s) {
				return ['prepend', 'prependQueue'].includes(s.getAttribute(ey))
			})
			if (l.length) return a.insertBefore(o, l[l.length - 1].nextSibling), o
		}
		a.insertBefore(o, i)
	} else a.appendChild(o)
	return o
}
function TC(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		n = hd(t)
	return IC(n).find(function (r) {
		return r.getAttribute(NC(t)) === e
	})
}
function xc(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		n = TC(e, t)
	if (n) {
		var r = hd(t)
		r.removeChild(n)
	}
}
function DR(e, t) {
	var n = mp.get(e)
	if (!n || !Ll(document, n)) {
		var r = kC('', t),
			o = r.parentNode
		mp.set(e, o), e.removeChild(r)
	}
}
function Di(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
		r = hd(n)
	DR(r, n)
	var o = TC(t, n)
	if (o) {
		var a, i
		if (
			(a = n.csp) !== null &&
			a !== void 0 &&
			a.nonce &&
			o.nonce !== ((i = n.csp) === null || i === void 0 ? void 0 : i.nonce)
		) {
			var l
			o.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce
		}
		return o.innerHTML !== e && (o.innerHTML = e), o
	}
	var s = kC(e, n)
	return s.setAttribute(NC(n), t), s
}
function Ec(e) {
	var t = ''
	return (
		Object.keys(e).forEach(function (n) {
			var r = e[n]
			;(t += n), r && Ze(r) === 'object' ? (t += Ec(r)) : (t += r)
		}),
		t
	)
}
function _R(e, t) {
	return Ih(''.concat(t, '_').concat(Ec(e)))
}
var Al = 'layer-'
		.concat(Date.now(), '-')
		.concat(Math.random())
		.replace(/\./g, ''),
	DC = '903px'
function LR(e, t) {
	if (An()) {
		var n
		Di(e, Al)
		var r = document.createElement('div')
		;(r.style.position = 'fixed'),
			(r.style.left = '0'),
			(r.style.top = '0'),
			t == null || t(r),
			document.body.appendChild(r)
		var o = getComputedStyle(r).width === DC
		return (
			(n = r.parentNode) === null || n === void 0 || n.removeChild(r), xc(Al), o
		)
	}
	return !1
}
var Ef = void 0
function AR() {
	return (
		Ef === void 0 &&
			(Ef = LR(
				'@layer '
					.concat(Al, ' { .')
					.concat(Al, ' { width: ')
					.concat(DC, '!important; } }'),
				function (e) {
					e.className = Al
				}
			)),
		Ef
	)
}
var FR = {},
	zR = 'css',
	da = new Map()
function HR(e) {
	da.set(e, (da.get(e) || 0) + 1)
}
function VR(e) {
	if (typeof document < 'u') {
		var t = document.querySelectorAll('style['.concat(pp, '="').concat(e, '"]'))
		t.forEach(function (n) {
			if (n[_l] === wc) {
				var r
				;(r = n.parentNode) === null || r === void 0 || r.removeChild(n)
			}
		})
	}
}
function jR(e) {
	da.set(e, (da.get(e) || 0) - 1)
	var t = Array.from(da.keys()),
		n = t.filter(function (r) {
			var o = da.get(r) || 0
			return o <= 0
		})
	n.length < t.length &&
		n.forEach(function (r) {
			VR(r), da.delete(r)
		})
}
function BR(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
		r = n.salt,
		o = r === void 0 ? '' : r,
		a = n.override,
		i = a === void 0 ? FR : a,
		l = n.formatToken,
		s = u.useMemo(
			function () {
				return Object.assign.apply(Object, [{}].concat(xe(t)))
			},
			[t]
		),
		c = u.useMemo(
			function () {
				return Ec(s)
			},
			[s]
		),
		f = u.useMemo(
			function () {
				return Ec(i)
			},
			[i]
		),
		d = OC(
			'token',
			[o, e.id, c, f],
			function () {
				var v = e.getDerivativeToken(s),
					p = F(F({}, v), i)
				l && (p = l(p))
				var h = _R(p, o)
				;(p._tokenKey = h), HR(h)
				var g = ''.concat(zR, '-').concat(Ih(h))
				return (p._hashId = g), [p, g]
			},
			function (v) {
				jR(v[0]._tokenKey)
			}
		)
	return d
}
var WR = {
		animationIterationCount: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	},
	_C = 'comm',
	LC = 'rule',
	AC = 'decl',
	UR = '@import',
	YR = '@keyframes',
	KR = Math.abs,
	kh = String.fromCharCode
function FC(e) {
	return e.trim()
}
function hp(e, t, n) {
	return e.replace(t, n)
}
function GR(e, t) {
	return e.indexOf(t)
}
function ds(e, t) {
	return e.charCodeAt(t) | 0
}
function fs(e, t, n) {
	return e.slice(t, n)
}
function Mo(e) {
	return e.length
}
function zC(e) {
	return e.length
}
function au(e, t) {
	return t.push(e), e
}
var gd = 1,
	_i = 1,
	HC = 0,
	yr = 0,
	un = 0,
	Ui = ''
function Th(e, t, n, r, o, a, i) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: o,
		children: a,
		line: gd,
		column: _i,
		length: i,
		return: ''
	}
}
function XR() {
	return un
}
function qR() {
	return (
		(un = yr > 0 ? ds(Ui, --yr) : 0), _i--, un === 10 && ((_i = 1), gd--), un
	)
}
function Nr() {
	return (
		(un = yr < HC ? ds(Ui, yr++) : 0), _i++, un === 10 && ((_i = 1), gd++), un
	)
}
function Ca() {
	return ds(Ui, yr)
}
function zu() {
	return yr
}
function yd(e, t) {
	return fs(Ui, e, t)
}
function gp(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32:
			return 5
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125:
			return 4
		case 58:
			return 3
		case 34:
		case 39:
		case 40:
		case 91:
			return 2
		case 41:
		case 93:
			return 1
	}
	return 0
}
function QR(e) {
	return (gd = _i = 1), (HC = Mo((Ui = e))), (yr = 0), []
}
function ZR(e) {
	return (Ui = ''), e
}
function $f(e) {
	return FC(yd(yr - 1, yp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function JR(e) {
	for (; (un = Ca()) && un < 33; ) Nr()
	return gp(e) > 2 || gp(un) > 3 ? '' : ' '
}
function eM(e, t) {
	for (
		;
		--t &&
		Nr() &&
		!(un < 48 || un > 102 || (un > 57 && un < 65) || (un > 70 && un < 97));

	);
	return yd(e, zu() + (t < 6 && Ca() == 32 && Nr() == 32))
}
function yp(e) {
	for (; Nr(); )
		switch (un) {
			case e:
				return yr
			case 34:
			case 39:
				e !== 34 && e !== 39 && yp(un)
				break
			case 40:
				e === 41 && yp(e)
				break
			case 92:
				Nr()
				break
		}
	return yr
}
function tM(e, t) {
	for (; Nr() && e + un !== 47 + 10; )
		if (e + un === 42 + 42 && Ca() === 47) break
	return '/*' + yd(t, yr - 1) + '*' + kh(e === 47 ? e : Nr())
}
function nM(e) {
	for (; !gp(Ca()); ) Nr()
	return yd(e, yr)
}
function rM(e) {
	return ZR(Hu('', null, null, null, [''], (e = QR(e)), 0, [0], e))
}
function Hu(e, t, n, r, o, a, i, l, s) {
	for (
		var c = 0,
			f = 0,
			d = i,
			v = 0,
			p = 0,
			h = 0,
			g = 1,
			b = 1,
			m = 1,
			y = 0,
			S = '',
			C = o,
			x = a,
			w = r,
			E = S;
		b;

	)
		switch (((h = y), (y = Nr()))) {
			case 40:
				if (h != 108 && ds(E, d - 1) == 58) {
					GR((E += hp($f(y), '&', '&\f')), '&\f') != -1 && (m = -1)
					break
				}
			case 34:
			case 39:
			case 91:
				E += $f(y)
				break
			case 9:
			case 10:
			case 13:
			case 32:
				E += JR(h)
				break
			case 92:
				E += eM(zu() - 1, 7)
				continue
			case 47:
				switch (Ca()) {
					case 42:
					case 47:
						au(oM(tM(Nr(), zu()), t, n), s)
						break
					default:
						E += '/'
				}
				break
			case 123 * g:
				l[c++] = Mo(E) * m
			case 125 * g:
			case 59:
			case 0:
				switch (y) {
					case 0:
					case 125:
						b = 0
					case 59 + f:
						p > 0 &&
							Mo(E) - d &&
							au(
								p > 32
									? ny(E + ';', r, n, d - 1)
									: ny(hp(E, ' ', '') + ';', r, n, d - 2),
								s
							)
						break
					case 59:
						E += ';'
					default:
						if (
							(au((w = ty(E, t, n, c, f, o, l, S, (C = []), (x = []), d)), a),
							y === 123)
						)
							if (f === 0) Hu(E, t, w, w, C, a, d, l, x)
							else
								switch (v === 99 && ds(E, 3) === 110 ? 100 : v) {
									case 100:
									case 109:
									case 115:
										Hu(
											e,
											w,
											w,
											r && au(ty(e, w, w, 0, 0, o, l, S, o, (C = []), d), x),
											o,
											x,
											d,
											l,
											r ? C : x
										)
										break
									default:
										Hu(E, w, w, w, [''], x, 0, l, x)
								}
				}
				;(c = f = p = 0), (g = m = 1), (S = E = ''), (d = i)
				break
			case 58:
				;(d = 1 + Mo(E)), (p = h)
			default:
				if (g < 1) {
					if (y == 123) --g
					else if (y == 125 && g++ == 0 && qR() == 125) continue
				}
				switch (((E += kh(y)), y * g)) {
					case 38:
						m = f > 0 ? 1 : ((E += '\f'), -1)
						break
					case 44:
						;(l[c++] = (Mo(E) - 1) * m), (m = 1)
						break
					case 64:
						Ca() === 45 && (E += $f(Nr())),
							(v = Ca()),
							(f = d = Mo((S = E += nM(zu())))),
							y++
						break
					case 45:
						h === 45 && Mo(E) == 2 && (g = 0)
				}
		}
	return a
}
function ty(e, t, n, r, o, a, i, l, s, c, f) {
	for (
		var d = o - 1, v = o === 0 ? a : [''], p = zC(v), h = 0, g = 0, b = 0;
		h < r;
		++h
	)
		for (var m = 0, y = fs(e, d + 1, (d = KR((g = i[h])))), S = e; m < p; ++m)
			(S = FC(g > 0 ? v[m] + ' ' + y : hp(y, /&\f/g, v[m]))) && (s[b++] = S)
	return Th(e, t, n, o === 0 ? LC : l, s, c, f)
}
function oM(e, t, n) {
	return Th(e, t, n, _C, kh(XR()), fs(e, 2, -2), 0)
}
function ny(e, t, n, r) {
	return Th(e, t, n, AC, fs(e, 0, r), fs(e, r + 1, -1), r)
}
function bp(e, t) {
	for (var n = '', r = zC(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || ''
	return n
}
function aM(e, t, n, r) {
	switch (e.type) {
		case UR:
		case AC:
			return (e.return = e.return || e.value)
		case _C:
			return ''
		case YR:
			return (e.return = e.value + '{' + bp(e.children, r) + '}')
		case LC:
			e.value = e.props.join(',')
	}
	return Mo((n = bp(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
var ry = An(),
	iM = '_skip_check_'
function oy(e) {
	var t = bp(rM(e), aM)
	return t.replace(/\{%%%\:[^;];}/g, ';')
}
function lM(e) {
	return Ze(e) === 'object' && e && iM in e
}
function sM(e, t, n) {
	if (!t) return e
	var r = '.'.concat(t),
		o = n === 'low' ? ':where('.concat(r, ')') : r,
		a = e.split(',').map(function (i) {
			var l,
				s = i.trim().split(/\s+/),
				c = s[0] || '',
				f =
					((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || ''
			return (
				(c = ''.concat(f).concat(o).concat(c.slice(f.length))),
				[c].concat(xe(s.slice(1))).join(' ')
			)
		})
	return a.join(',')
}
var ay = new Set(),
	uM = function e(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			r =
				arguments.length > 2 && arguments[2] !== void 0
					? arguments[2]
					: { root: !0, parentSelectors: [] },
			o = r.root,
			a = r.injectHash,
			i = r.parentSelectors,
			l = n.hashId,
			s = n.layer
		n.path
		var c = n.hashPriority,
			f = n.transformers,
			d = f === void 0 ? [] : f
		n.linters
		var v = '',
			p = {}
		function h(S) {
			var C = S.getName(l)
			if (!p[C]) {
				var x = e(S.style, n, { root: !1, parentSelectors: i }),
					w = B(x, 1),
					E = w[0]
				p[C] = '@keyframes '.concat(S.getName(l)).concat(E)
			}
		}
		function g(S) {
			var C =
				arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
			return (
				S.forEach(function (x) {
					Array.isArray(x) ? g(x, C) : x && C.push(x)
				}),
				C
			)
		}
		var b = g(Array.isArray(t) ? t : [t])
		if (
			(b.forEach(function (S) {
				var C = typeof S == 'string' && !o ? {} : S
				if (typeof C == 'string')
					v += ''.concat(
						C,
						`
`
					)
				else if (C._keyframe) h(C)
				else {
					var x = d.reduce(function (w, E) {
						var P
						return (
							(E == null || (P = E.visit) === null || P === void 0
								? void 0
								: P.call(E, w)) || w
						)
					}, C)
					Object.keys(x).forEach(function (w) {
						var E = x[w]
						if (
							Ze(E) === 'object' &&
							E &&
							(w !== 'animationName' || !E._keyframe) &&
							!lM(E)
						) {
							var P = !1,
								N = w.trim(),
								O = !1
							;(o || a) && l
								? N.startsWith('@')
									? (P = !0)
									: (N = sM(w, l, c))
								: o && !l && (N === '&' || N === '') && ((N = ''), (O = !0))
							var k = e(E, n, {
									root: O,
									injectHash: P,
									parentSelectors: [].concat(xe(i), [N])
								}),
								I = B(k, 2),
								$ = I[0],
								R = I[1]
							;(p = F(F({}, p), R)), (v += ''.concat(N).concat($))
						} else {
							var M,
								T =
									(M = E == null ? void 0 : E.value) !== null && M !== void 0
										? M
										: E,
								_ = w.replace(/[A-Z]/g, function (L) {
									return '-'.concat(L.toLowerCase())
								}),
								D = T
							!WR[w] &&
								typeof D == 'number' &&
								D !== 0 &&
								(D = ''.concat(D, 'px')),
								w === 'animationName' &&
									E !== null &&
									E !== void 0 &&
									E._keyframe &&
									(h(E), (D = E.getName(l))),
								(v += ''.concat(_, ':').concat(D, ';'))
						}
					})
				}
			}),
			!o)
		)
			v = '{'.concat(v, '}')
		else if (s && AR()) {
			var m = s.split(','),
				y = m[m.length - 1].trim()
			;(v = '@layer '.concat(y, ' {').concat(v, '}')),
				m.length > 1 && (v = '@layer '.concat(s, '{%%%:%}').concat(v))
		}
		return [v, p]
	}
function cM(e, t) {
	return Ih(''.concat(e.join('%')).concat(t))
}
function dM() {
	return null
}
function Sp(e, t) {
	var n = e.token,
		r = e.path,
		o = e.hashId,
		a = e.layer,
		i = u.useContext(PC),
		l = i.autoClear
	i.mock
	var s = i.defaultCache,
		c = i.hashPriority,
		f = i.container,
		d = i.ssrInline,
		v = i.transformers,
		p = i.linters,
		h = n._tokenKey,
		g = [h].concat(xe(r)),
		b = ry,
		m = OC(
			'style',
			g,
			function () {
				var w = t(),
					E = uM(w, {
						hashId: o,
						hashPriority: c,
						layer: a,
						path: r.join('-'),
						transformers: v,
						linters: p
					}),
					P = B(E, 2),
					N = P[0],
					O = P[1],
					k = oy(N),
					I = cM(g, k)
				if (b) {
					var $ = Di(k, I, { mark: ma, prepend: 'queue', attachTo: f })
					;($[_l] = wc),
						$.setAttribute(pp, h),
						Object.keys(O).forEach(function (R) {
							ay.has(R) ||
								(ay.add(R),
								Di(oy(O[R]), '_effect-'.concat(R), {
									mark: ma,
									prepend: 'queue',
									attachTo: f
								}))
						})
				}
				return [k, h, I]
			},
			function (w, E) {
				var P = B(w, 3),
					N = P[2]
				;(E || l) && ry && xc(N, { mark: ma })
			}
		),
		y = B(m, 3),
		S = y[0],
		C = y[1],
		x = y[2]
	return function (w) {
		var E
		if (!d || b || !s) E = u.createElement(dM, null)
		else {
			var P
			E = u.createElement(
				'style',
				se({}, ((P = {}), V(P, pp, C), V(P, ma, x), P), {
					dangerouslySetInnerHTML: { __html: S }
				})
			)
		}
		return u.createElement(u.Fragment, null, E, w)
	}
}
var Mn = (function () {
	function e(t, n) {
		Tn(this, e),
			V(this, 'name', void 0),
			V(this, 'style', void 0),
			V(this, '_keyframe', !0),
			(this.name = t),
			(this.style = n)
	}
	return (
		Dn(e, [
			{
				key: 'getName',
				value: function () {
					var n =
						arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
					return n ? ''.concat(n, '-').concat(this.name) : this.name
				}
			}
		]),
		e
	)
})()
function fM(e, t) {
	if (e.length !== t.length) return !1
	for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
	return !0
}
var Dh = (function () {
	function e() {
		Tn(this, e),
			V(this, 'cache', void 0),
			V(this, 'keys', void 0),
			V(this, 'cacheCallTimes', void 0),
			(this.cache = new Map()),
			(this.keys = []),
			(this.cacheCallTimes = 0)
	}
	return (
		Dn(e, [
			{
				key: 'size',
				value: function () {
					return this.keys.length
				}
			},
			{
				key: 'internalGet',
				value: function (n) {
					var r,
						o,
						a =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: !1,
						i = { map: this.cache }
					return (
						n.forEach(function (l) {
							if (!i) i = void 0
							else {
								var s, c
								i =
									(s = i) === null ||
									s === void 0 ||
									(c = s.map) === null ||
									c === void 0
										? void 0
										: c.get(l)
							}
						}),
						(r = i) !== null &&
							r !== void 0 &&
							r.value &&
							a &&
							(i.value[1] = this.cacheCallTimes++),
						(o = i) === null || o === void 0 ? void 0 : o.value
					)
				}
			},
			{
				key: 'get',
				value: function (n) {
					var r
					return (r = this.internalGet(n, !0)) === null || r === void 0
						? void 0
						: r[0]
				}
			},
			{
				key: 'has',
				value: function (n) {
					return !!this.internalGet(n)
				}
			},
			{
				key: 'set',
				value: function (n, r) {
					var o = this
					if (!this.has(n)) {
						if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
							var a = this.keys.reduce(
									function (c, f) {
										var d = B(c, 2),
											v = d[1]
										return o.internalGet(f)[1] < v
											? [f, o.internalGet(f)[1]]
											: c
									},
									[this.keys[0], this.cacheCallTimes]
								),
								i = B(a, 1),
								l = i[0]
							this.delete(l)
						}
						this.keys.push(n)
					}
					var s = this.cache
					n.forEach(function (c, f) {
						if (f === n.length - 1) s.set(c, { value: [r, o.cacheCallTimes++] })
						else {
							var d = s.get(c)
							d ? d.map || (d.map = new Map()) : s.set(c, { map: new Map() }),
								(s = s.get(c).map)
						}
					})
				}
			},
			{
				key: 'deleteByPath',
				value: function (n, r) {
					var o = n.get(r[0])
					if (r.length === 1) {
						var a
						return (
							o.map ? n.set(r[0], { map: o.map }) : n.delete(r[0]),
							(a = o.value) === null || a === void 0 ? void 0 : a[0]
						)
					}
					var i = this.deleteByPath(o.map, r.slice(1))
					return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), i
				}
			},
			{
				key: 'delete',
				value: function (n) {
					if (this.has(n))
						return (
							(this.keys = this.keys.filter(function (r) {
								return !fM(r, n)
							})),
							this.deleteByPath(this.cache, n)
						)
				}
			}
		]),
		e
	)
})()
V(Dh, 'MAX_CACHE_SIZE', 20)
V(Dh, 'MAX_CACHE_OFFSET', 5)
var iy = 0,
	vM = (function () {
		function e(t) {
			Tn(this, e),
				V(this, 'derivatives', void 0),
				V(this, 'id', void 0),
				(this.derivatives = Array.isArray(t) ? t : [t]),
				(this.id = iy),
				t.length === 0 && (t.length > 0, void 0),
				(iy += 1)
		}
		return (
			Dn(e, [
				{
					key: 'getDerivativeToken',
					value: function (n) {
						return this.derivatives.reduce(function (r, o) {
							return o(n, r)
						}, void 0)
					}
				}
			]),
			e
		)
	})(),
	Pf = new Dh()
function VC(e) {
	var t = Array.isArray(e) ? e : [e]
	return Pf.has(t) || Pf.set(t, new vM(t)), Pf.get(t)
}
function Ba(e) {
	return (e.notSplit = !0), e
}
Ba(['borderTop', 'borderBottom']),
	Ba(['borderTop']),
	Ba(['borderBottom']),
	Ba(['borderLeft', 'borderRight']),
	Ba(['borderLeft']),
	Ba(['borderRight'])
var pM = u.createContext({})
const _h = pM
var ha = 'RC_FORM_INTERNAL_HOOKS',
	It = function () {
		En(
			!1,
			'Can not find FormContext. Please make sure you wrap Field under Form.'
		)
	},
	Li = u.createContext({
		getFieldValue: It,
		getFieldsValue: It,
		getFieldError: It,
		getFieldWarning: It,
		getFieldsError: It,
		isFieldsTouched: It,
		isFieldTouched: It,
		isFieldValidating: It,
		isFieldsValidating: It,
		resetFields: It,
		setFields: It,
		setFieldValue: It,
		setFieldsValue: It,
		validateFields: It,
		submit: It,
		getInternalHooks: function () {
			return (
				It(),
				{
					dispatch: It,
					initEntityValue: It,
					registerField: It,
					useSubscribe: It,
					setInitialValues: It,
					destroyForm: It,
					setCallbacks: It,
					registerWatch: It,
					getFields: It,
					setValidateMessages: It,
					setPreserve: It,
					getInitialValue: It
				}
			)
		}
	})
function Cp(e) {
	return e == null ? [] : Array.isArray(e) ? e : [e]
}
function Fn() {
	Fn = function () {
		return e
	}
	var e = {},
		t = Object.prototype,
		n = t.hasOwnProperty,
		r =
			Object.defineProperty ||
			function (I, $, R) {
				I[$] = R.value
			},
		o = typeof Symbol == 'function' ? Symbol : {},
		a = o.iterator || '@@iterator',
		i = o.asyncIterator || '@@asyncIterator',
		l = o.toStringTag || '@@toStringTag'
	function s(I, $, R) {
		return (
			Object.defineProperty(I, $, {
				value: R,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}),
			I[$]
		)
	}
	try {
		s({}, '')
	} catch {
		s = function (R, M, T) {
			return (R[M] = T)
		}
	}
	function c(I, $, R, M) {
		var T = $ && $.prototype instanceof v ? $ : v,
			_ = Object.create(T.prototype),
			D = new N(M || [])
		return r(_, '_invoke', { value: x(I, R, D) }), _
	}
	function f(I, $, R) {
		try {
			return { type: 'normal', arg: I.call($, R) }
		} catch (M) {
			return { type: 'throw', arg: M }
		}
	}
	e.wrap = c
	var d = {}
	function v() {}
	function p() {}
	function h() {}
	var g = {}
	s(g, a, function () {
		return this
	})
	var b = Object.getPrototypeOf,
		m = b && b(b(O([])))
	m && m !== t && n.call(m, a) && (g = m)
	var y = (h.prototype = v.prototype = Object.create(g))
	function S(I) {
		;['next', 'throw', 'return'].forEach(function ($) {
			s(I, $, function (R) {
				return this._invoke($, R)
			})
		})
	}
	function C(I, $) {
		function R(T, _, D, L) {
			var H = f(I[T], I, _)
			if (H.type !== 'throw') {
				var j = H.arg,
					z = j.value
				return z && Ze(z) == 'object' && n.call(z, '__await')
					? $.resolve(z.__await).then(
							function (A) {
								R('next', A, D, L)
							},
							function (A) {
								R('throw', A, D, L)
							}
					  )
					: $.resolve(z).then(
							function (A) {
								;(j.value = A), D(j)
							},
							function (A) {
								return R('throw', A, D, L)
							}
					  )
			}
			L(H.arg)
		}
		var M
		r(this, '_invoke', {
			value: function (_, D) {
				function L() {
					return new $(function (H, j) {
						R(_, D, H, j)
					})
				}
				return (M = M ? M.then(L, L) : L())
			}
		})
	}
	function x(I, $, R) {
		var M = 'suspendedStart'
		return function (T, _) {
			if (M === 'executing') throw new Error('Generator is already running')
			if (M === 'completed') {
				if (T === 'throw') throw _
				return k()
			}
			for (R.method = T, R.arg = _; ; ) {
				var D = R.delegate
				if (D) {
					var L = w(D, R)
					if (L) {
						if (L === d) continue
						return L
					}
				}
				if (R.method === 'next') R.sent = R._sent = R.arg
				else if (R.method === 'throw') {
					if (M === 'suspendedStart') throw ((M = 'completed'), R.arg)
					R.dispatchException(R.arg)
				} else R.method === 'return' && R.abrupt('return', R.arg)
				M = 'executing'
				var H = f(I, $, R)
				if (H.type === 'normal') {
					if (((M = R.done ? 'completed' : 'suspendedYield'), H.arg === d))
						continue
					return { value: H.arg, done: R.done }
				}
				H.type === 'throw' &&
					((M = 'completed'), (R.method = 'throw'), (R.arg = H.arg))
			}
		}
	}
	function w(I, $) {
		var R = $.method,
			M = I.iterator[R]
		if (M === void 0)
			return (
				($.delegate = null),
				(R === 'throw' &&
					I.iterator.return &&
					(($.method = 'return'),
					($.arg = void 0),
					w(I, $),
					$.method === 'throw')) ||
					(R !== 'return' &&
						(($.method = 'throw'),
						($.arg = new TypeError(
							"The iterator does not provide a '" + R + "' method"
						)))),
				d
			)
		var T = f(M, I.iterator, $.arg)
		if (T.type === 'throw')
			return ($.method = 'throw'), ($.arg = T.arg), ($.delegate = null), d
		var _ = T.arg
		return _
			? _.done
				? (($[I.resultName] = _.value),
				  ($.next = I.nextLoc),
				  $.method !== 'return' && (($.method = 'next'), ($.arg = void 0)),
				  ($.delegate = null),
				  d)
				: _
			: (($.method = 'throw'),
			  ($.arg = new TypeError('iterator result is not an object')),
			  ($.delegate = null),
			  d)
	}
	function E(I) {
		var $ = { tryLoc: I[0] }
		1 in I && ($.catchLoc = I[1]),
			2 in I && (($.finallyLoc = I[2]), ($.afterLoc = I[3])),
			this.tryEntries.push($)
	}
	function P(I) {
		var $ = I.completion || {}
		;($.type = 'normal'), delete $.arg, (I.completion = $)
	}
	function N(I) {
		;(this.tryEntries = [{ tryLoc: 'root' }]),
			I.forEach(E, this),
			this.reset(!0)
	}
	function O(I) {
		if (I) {
			var $ = I[a]
			if ($) return $.call(I)
			if (typeof I.next == 'function') return I
			if (!isNaN(I.length)) {
				var R = -1,
					M = function T() {
						for (; ++R < I.length; )
							if (n.call(I, R)) return (T.value = I[R]), (T.done = !1), T
						return (T.value = void 0), (T.done = !0), T
					}
				return (M.next = M)
			}
		}
		return { next: k }
	}
	function k() {
		return { value: void 0, done: !0 }
	}
	return (
		(p.prototype = h),
		r(y, 'constructor', { value: h, configurable: !0 }),
		r(h, 'constructor', { value: p, configurable: !0 }),
		(p.displayName = s(h, l, 'GeneratorFunction')),
		(e.isGeneratorFunction = function (I) {
			var $ = typeof I == 'function' && I.constructor
			return (
				!!$ && ($ === p || ($.displayName || $.name) === 'GeneratorFunction')
			)
		}),
		(e.mark = function (I) {
			return (
				Object.setPrototypeOf
					? Object.setPrototypeOf(I, h)
					: ((I.__proto__ = h), s(I, l, 'GeneratorFunction')),
				(I.prototype = Object.create(y)),
				I
			)
		}),
		(e.awrap = function (I) {
			return { __await: I }
		}),
		S(C.prototype),
		s(C.prototype, i, function () {
			return this
		}),
		(e.AsyncIterator = C),
		(e.async = function (I, $, R, M, T) {
			T === void 0 && (T = Promise)
			var _ = new C(c(I, $, R, M), T)
			return e.isGeneratorFunction($)
				? _
				: _.next().then(function (D) {
						return D.done ? D.value : _.next()
				  })
		}),
		S(y),
		s(y, l, 'Generator'),
		s(y, a, function () {
			return this
		}),
		s(y, 'toString', function () {
			return '[object Generator]'
		}),
		(e.keys = function (I) {
			var $ = Object(I),
				R = []
			for (var M in $) R.push(M)
			return (
				R.reverse(),
				function T() {
					for (; R.length; ) {
						var _ = R.pop()
						if (_ in $) return (T.value = _), (T.done = !1), T
					}
					return (T.done = !0), T
				}
			)
		}),
		(e.values = O),
		(N.prototype = {
			constructor: N,
			reset: function ($) {
				if (
					((this.prev = 0),
					(this.next = 0),
					(this.sent = this._sent = void 0),
					(this.done = !1),
					(this.delegate = null),
					(this.method = 'next'),
					(this.arg = void 0),
					this.tryEntries.forEach(P),
					!$)
				)
					for (var R in this)
						R.charAt(0) === 't' &&
							n.call(this, R) &&
							!isNaN(+R.slice(1)) &&
							(this[R] = void 0)
			},
			stop: function () {
				this.done = !0
				var $ = this.tryEntries[0].completion
				if ($.type === 'throw') throw $.arg
				return this.rval
			},
			dispatchException: function ($) {
				if (this.done) throw $
				var R = this
				function M(j, z) {
					return (
						(D.type = 'throw'),
						(D.arg = $),
						(R.next = j),
						z && ((R.method = 'next'), (R.arg = void 0)),
						!!z
					)
				}
				for (var T = this.tryEntries.length - 1; T >= 0; --T) {
					var _ = this.tryEntries[T],
						D = _.completion
					if (_.tryLoc === 'root') return M('end')
					if (_.tryLoc <= this.prev) {
						var L = n.call(_, 'catchLoc'),
							H = n.call(_, 'finallyLoc')
						if (L && H) {
							if (this.prev < _.catchLoc) return M(_.catchLoc, !0)
							if (this.prev < _.finallyLoc) return M(_.finallyLoc)
						} else if (L) {
							if (this.prev < _.catchLoc) return M(_.catchLoc, !0)
						} else {
							if (!H) throw new Error('try statement without catch or finally')
							if (this.prev < _.finallyLoc) return M(_.finallyLoc)
						}
					}
				}
			},
			abrupt: function ($, R) {
				for (var M = this.tryEntries.length - 1; M >= 0; --M) {
					var T = this.tryEntries[M]
					if (
						T.tryLoc <= this.prev &&
						n.call(T, 'finallyLoc') &&
						this.prev < T.finallyLoc
					) {
						var _ = T
						break
					}
				}
				_ &&
					($ === 'break' || $ === 'continue') &&
					_.tryLoc <= R &&
					R <= _.finallyLoc &&
					(_ = null)
				var D = _ ? _.completion : {}
				return (
					(D.type = $),
					(D.arg = R),
					_
						? ((this.method = 'next'), (this.next = _.finallyLoc), d)
						: this.complete(D)
				)
			},
			complete: function ($, R) {
				if ($.type === 'throw') throw $.arg
				return (
					$.type === 'break' || $.type === 'continue'
						? (this.next = $.arg)
						: $.type === 'return'
						? ((this.rval = this.arg = $.arg),
						  (this.method = 'return'),
						  (this.next = 'end'))
						: $.type === 'normal' && R && (this.next = R),
					d
				)
			},
			finish: function ($) {
				for (var R = this.tryEntries.length - 1; R >= 0; --R) {
					var M = this.tryEntries[R]
					if (M.finallyLoc === $)
						return this.complete(M.completion, M.afterLoc), P(M), d
				}
			},
			catch: function ($) {
				for (var R = this.tryEntries.length - 1; R >= 0; --R) {
					var M = this.tryEntries[R]
					if (M.tryLoc === $) {
						var T = M.completion
						if (T.type === 'throw') {
							var _ = T.arg
							P(M)
						}
						return _
					}
				}
				throw new Error('illegal catch attempt')
			},
			delegateYield: function ($, R, M) {
				return (
					(this.delegate = { iterator: O($), resultName: R, nextLoc: M }),
					this.method === 'next' && (this.arg = void 0),
					d
				)
			}
		}),
		e
	)
}
function ly(e, t, n, r, o, a, i) {
	try {
		var l = e[a](i),
			s = l.value
	} catch (c) {
		n(c)
		return
	}
	l.done ? t(s) : Promise.resolve(s).then(r, o)
}
function _a(e) {
	return function () {
		var t = this,
			n = arguments
		return new Promise(function (r, o) {
			var a = e.apply(t, n)
			function i(s) {
				ly(a, r, o, i, l, 'next', s)
			}
			function l(s) {
				ly(a, r, o, i, l, 'throw', s)
			}
			i(void 0)
		})
	}
}
function ga() {
	return (
		(ga = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		ga.apply(this, arguments)
	)
}
function mM(e, t) {
	;(e.prototype = Object.create(t.prototype)),
		(e.prototype.constructor = e),
		vs(e, t)
}
function wp(e) {
	return (
		(wp = Object.setPrototypeOf
			? Object.getPrototypeOf.bind()
			: function (n) {
					return n.__proto__ || Object.getPrototypeOf(n)
			  }),
		wp(e)
	)
}
function vs(e, t) {
	return (
		(vs = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (r, o) {
					return (r.__proto__ = o), r
			  }),
		vs(e, t)
	)
}
function hM() {
	if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
		return !1
	if (typeof Proxy == 'function') return !0
	try {
		return (
			Boolean.prototype.valueOf.call(
				Reflect.construct(Boolean, [], function () {})
			),
			!0
		)
	} catch {
		return !1
	}
}
function Vu(e, t, n) {
	return (
		hM()
			? (Vu = Reflect.construct.bind())
			: (Vu = function (o, a, i) {
					var l = [null]
					l.push.apply(l, a)
					var s = Function.bind.apply(o, l),
						c = new s()
					return i && vs(c, i.prototype), c
			  }),
		Vu.apply(null, arguments)
	)
}
function gM(e) {
	return Function.toString.call(e).indexOf('[native code]') !== -1
}
function xp(e) {
	var t = typeof Map == 'function' ? new Map() : void 0
	return (
		(xp = function (r) {
			if (r === null || !gM(r)) return r
			if (typeof r != 'function')
				throw new TypeError(
					'Super expression must either be null or a function'
				)
			if (typeof t < 'u') {
				if (t.has(r)) return t.get(r)
				t.set(r, o)
			}
			function o() {
				return Vu(r, arguments, wp(this).constructor)
			}
			return (
				(o.prototype = Object.create(r.prototype, {
					constructor: {
						value: o,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				})),
				vs(o, r)
			)
		}),
		xp(e)
	)
}
var yM = /%[sdj%]/g,
	bM = function () {}
typeof process < 'u' && process.env
function Ep(e) {
	if (!e || !e.length) return null
	var t = {}
	return (
		e.forEach(function (n) {
			var r = n.field
			;(t[r] = t[r] || []), t[r].push(n)
		}),
		t
	)
}
function tr(e) {
	for (
		var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
		r < t;
		r++
	)
		n[r - 1] = arguments[r]
	var o = 0,
		a = n.length
	if (typeof e == 'function') return e.apply(null, n)
	if (typeof e == 'string') {
		var i = e.replace(yM, function (l) {
			if (l === '%%') return '%'
			if (o >= a) return l
			switch (l) {
				case '%s':
					return String(n[o++])
				case '%d':
					return Number(n[o++])
				case '%j':
					try {
						return JSON.stringify(n[o++])
					} catch {
						return '[Circular]'
					}
					break
				default:
					return l
			}
		})
		return i
	}
	return e
}
function SM(e) {
	return (
		e === 'string' ||
		e === 'url' ||
		e === 'hex' ||
		e === 'email' ||
		e === 'date' ||
		e === 'pattern'
	)
}
function hn(e, t) {
	return !!(
		e == null ||
		(t === 'array' && Array.isArray(e) && !e.length) ||
		(SM(t) && typeof e == 'string' && !e)
	)
}
function CM(e, t, n) {
	var r = [],
		o = 0,
		a = e.length
	function i(l) {
		r.push.apply(r, l || []), o++, o === a && n(r)
	}
	e.forEach(function (l) {
		t(l, i)
	})
}
function sy(e, t, n) {
	var r = 0,
		o = e.length
	function a(i) {
		if (i && i.length) {
			n(i)
			return
		}
		var l = r
		;(r = r + 1), l < o ? t(e[l], a) : n([])
	}
	a([])
}
function wM(e) {
	var t = []
	return (
		Object.keys(e).forEach(function (n) {
			t.push.apply(t, e[n] || [])
		}),
		t
	)
}
var uy = (function (e) {
	mM(t, e)
	function t(n, r) {
		var o
		return (
			(o = e.call(this, 'Async Validation Error') || this),
			(o.errors = n),
			(o.fields = r),
			o
		)
	}
	return t
})(xp(Error))
function xM(e, t, n, r, o) {
	if (t.first) {
		var a = new Promise(function (v, p) {
			var h = function (m) {
					return r(m), m.length ? p(new uy(m, Ep(m))) : v(o)
				},
				g = wM(e)
			sy(g, n, h)
		})
		return (
			a.catch(function (v) {
				return v
			}),
			a
		)
	}
	var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
		l = Object.keys(e),
		s = l.length,
		c = 0,
		f = [],
		d = new Promise(function (v, p) {
			var h = function (b) {
				if ((f.push.apply(f, b), c++, c === s))
					return r(f), f.length ? p(new uy(f, Ep(f))) : v(o)
			}
			l.length || (r(f), v(o)),
				l.forEach(function (g) {
					var b = e[g]
					i.indexOf(g) !== -1 ? sy(b, n, h) : CM(b, n, h)
				})
		})
	return (
		d.catch(function (v) {
			return v
		}),
		d
	)
}
function EM(e) {
	return !!(e && e.message !== void 0)
}
function $M(e, t) {
	for (var n = e, r = 0; r < t.length; r++) {
		if (n == null) return n
		n = n[t[r]]
	}
	return n
}
function cy(e, t) {
	return function (n) {
		var r
		return (
			e.fullFields
				? (r = $M(t, e.fullFields))
				: (r = t[n.field || e.fullField]),
			EM(n)
				? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
				: {
						message: typeof n == 'function' ? n() : n,
						fieldValue: r,
						field: n.field || e.fullField
				  }
		)
	}
}
function dy(e, t) {
	if (t) {
		for (var n in t)
			if (t.hasOwnProperty(n)) {
				var r = t[n]
				typeof r == 'object' && typeof e[n] == 'object'
					? (e[n] = ga({}, e[n], r))
					: (e[n] = r)
			}
	}
	return e
}
var jC = function (t, n, r, o, a, i) {
		t.required &&
			(!r.hasOwnProperty(t.field) || hn(n, i || t.type)) &&
			o.push(tr(a.messages.required, t.fullField))
	},
	PM = function (t, n, r, o, a) {
		;(/^\s+$/.test(n) || n === '') &&
			o.push(tr(a.messages.whitespace, t.fullField))
	},
	iu,
	RM = function () {
		if (iu) return iu
		var e = '[a-fA-F\\d:]',
			t = function (C) {
				return C && C.includeBoundaries
					? '(?:(?<=\\s|^)(?=' + e + ')|(?<=' + e + ')(?=\\s|$))'
					: ''
			},
			n =
				'(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
			r = '[a-fA-F\\d]{1,4}',
			o = (
				`
(?:
(?:` +
				r +
				':){7}(?:' +
				r +
				`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
				r +
				':){6}(?:' +
				n +
				'|:' +
				r +
				`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
				r +
				':){5}(?::' +
				n +
				'|(?::' +
				r +
				`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
				r +
				':){4}(?:(?::' +
				r +
				'){0,1}:' +
				n +
				'|(?::' +
				r +
				`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
				r +
				':){3}(?:(?::' +
				r +
				'){0,2}:' +
				n +
				'|(?::' +
				r +
				`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
				r +
				':){2}(?:(?::' +
				r +
				'){0,3}:' +
				n +
				'|(?::' +
				r +
				`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
				r +
				':){1}(?:(?::' +
				r +
				'){0,4}:' +
				n +
				'|(?::' +
				r +
				`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
				r +
				'){0,5}:' +
				n +
				'|(?::' +
				r +
				`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
			)
				.replace(/\s*\/\/.*$/gm, '')
				.replace(/\n/g, '')
				.trim(),
			a = new RegExp('(?:^' + n + '$)|(?:^' + o + '$)'),
			i = new RegExp('^' + n + '$'),
			l = new RegExp('^' + o + '$'),
			s = function (C) {
				return C && C.exact
					? a
					: new RegExp(
							'(?:' + t(C) + n + t(C) + ')|(?:' + t(C) + o + t(C) + ')',
							'g'
					  )
			}
		;(s.v4 = function (S) {
			return S && S.exact ? i : new RegExp('' + t(S) + n + t(S), 'g')
		}),
			(s.v6 = function (S) {
				return S && S.exact ? l : new RegExp('' + t(S) + o + t(S), 'g')
			})
		var c = '(?:(?:[a-z]+:)?//)',
			f = '(?:\\S+(?::\\S*)?@)?',
			d = s.v4().source,
			v = s.v6().source,
			p = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
			h = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
			g = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
			b = '(?::\\d{2,5})?',
			m = '(?:[/?#][^\\s"]*)?',
			y =
				'(?:' +
				c +
				'|www\\.)' +
				f +
				'(?:localhost|' +
				d +
				'|' +
				v +
				'|' +
				p +
				h +
				g +
				')' +
				b +
				m
		return (iu = new RegExp('(?:^' + y + '$)', 'i')), iu
	},
	fy = {
		email:
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
		hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	},
	wl = {
		integer: function (t) {
			return wl.number(t) && parseInt(t, 10) === t
		},
		float: function (t) {
			return wl.number(t) && !wl.integer(t)
		},
		array: function (t) {
			return Array.isArray(t)
		},
		regexp: function (t) {
			if (t instanceof RegExp) return !0
			try {
				return !!new RegExp(t)
			} catch {
				return !1
			}
		},
		date: function (t) {
			return (
				typeof t.getTime == 'function' &&
				typeof t.getMonth == 'function' &&
				typeof t.getYear == 'function' &&
				!isNaN(t.getTime())
			)
		},
		number: function (t) {
			return isNaN(t) ? !1 : typeof t == 'number'
		},
		object: function (t) {
			return typeof t == 'object' && !wl.array(t)
		},
		method: function (t) {
			return typeof t == 'function'
		},
		email: function (t) {
			return typeof t == 'string' && t.length <= 320 && !!t.match(fy.email)
		},
		url: function (t) {
			return typeof t == 'string' && t.length <= 2048 && !!t.match(RM())
		},
		hex: function (t) {
			return typeof t == 'string' && !!t.match(fy.hex)
		}
	},
	MM = function (t, n, r, o, a) {
		if (t.required && n === void 0) {
			jC(t, n, r, o, a)
			return
		}
		var i = [
				'integer',
				'float',
				'array',
				'regexp',
				'object',
				'method',
				'email',
				'number',
				'date',
				'url',
				'hex'
			],
			l = t.type
		i.indexOf(l) > -1
			? wl[l](n) || o.push(tr(a.messages.types[l], t.fullField, t.type))
			: l &&
			  typeof n !== t.type &&
			  o.push(tr(a.messages.types[l], t.fullField, t.type))
	},
	OM = function (t, n, r, o, a) {
		var i = typeof t.len == 'number',
			l = typeof t.min == 'number',
			s = typeof t.max == 'number',
			c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
			f = n,
			d = null,
			v = typeof n == 'number',
			p = typeof n == 'string',
			h = Array.isArray(n)
		if ((v ? (d = 'number') : p ? (d = 'string') : h && (d = 'array'), !d))
			return !1
		h && (f = n.length),
			p && (f = n.replace(c, '_').length),
			i
				? f !== t.len && o.push(tr(a.messages[d].len, t.fullField, t.len))
				: l && !s && f < t.min
				? o.push(tr(a.messages[d].min, t.fullField, t.min))
				: s && !l && f > t.max
				? o.push(tr(a.messages[d].max, t.fullField, t.max))
				: l &&
				  s &&
				  (f < t.min || f > t.max) &&
				  o.push(tr(a.messages[d].range, t.fullField, t.min, t.max))
	},
	Wa = 'enum',
	NM = function (t, n, r, o, a) {
		;(t[Wa] = Array.isArray(t[Wa]) ? t[Wa] : []),
			t[Wa].indexOf(n) === -1 &&
				o.push(tr(a.messages[Wa], t.fullField, t[Wa].join(', ')))
	},
	IM = function (t, n, r, o, a) {
		if (t.pattern) {
			if (t.pattern instanceof RegExp)
				(t.pattern.lastIndex = 0),
					t.pattern.test(n) ||
						o.push(tr(a.messages.pattern.mismatch, t.fullField, n, t.pattern))
			else if (typeof t.pattern == 'string') {
				var i = new RegExp(t.pattern)
				i.test(n) ||
					o.push(tr(a.messages.pattern.mismatch, t.fullField, n, t.pattern))
			}
		}
	},
	vt = {
		required: jC,
		whitespace: PM,
		type: MM,
		range: OM,
		enum: NM,
		pattern: IM
	},
	kM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n, 'string') && !t.required) return r()
			vt.required(t, n, o, i, a, 'string'),
				hn(n, 'string') ||
					(vt.type(t, n, o, i, a),
					vt.range(t, n, o, i, a),
					vt.pattern(t, n, o, i, a),
					t.whitespace === !0 && vt.whitespace(t, n, o, i, a))
		}
		r(i)
	},
	TM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n) && !t.required) return r()
			vt.required(t, n, o, i, a), n !== void 0 && vt.type(t, n, o, i, a)
		}
		r(i)
	},
	DM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if ((n === '' && (n = void 0), hn(n) && !t.required)) return r()
			vt.required(t, n, o, i, a),
				n !== void 0 && (vt.type(t, n, o, i, a), vt.range(t, n, o, i, a))
		}
		r(i)
	},
	_M = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n) && !t.required) return r()
			vt.required(t, n, o, i, a), n !== void 0 && vt.type(t, n, o, i, a)
		}
		r(i)
	},
	LM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n) && !t.required) return r()
			vt.required(t, n, o, i, a), hn(n) || vt.type(t, n, o, i, a)
		}
		r(i)
	},
	AM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n) && !t.required) return r()
			vt.required(t, n, o, i, a),
				n !== void 0 && (vt.type(t, n, o, i, a), vt.range(t, n, o, i, a))
		}
		r(i)
	},
	FM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n) && !t.required) return r()
			vt.required(t, n, o, i, a),
				n !== void 0 && (vt.type(t, n, o, i, a), vt.range(t, n, o, i, a))
		}
		r(i)
	},
	zM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (n == null && !t.required) return r()
			vt.required(t, n, o, i, a, 'array'),
				n != null && (vt.type(t, n, o, i, a), vt.range(t, n, o, i, a))
		}
		r(i)
	},
	HM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n) && !t.required) return r()
			vt.required(t, n, o, i, a), n !== void 0 && vt.type(t, n, o, i, a)
		}
		r(i)
	},
	VM = 'enum',
	jM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n) && !t.required) return r()
			vt.required(t, n, o, i, a), n !== void 0 && vt[VM](t, n, o, i, a)
		}
		r(i)
	},
	BM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n, 'string') && !t.required) return r()
			vt.required(t, n, o, i, a), hn(n, 'string') || vt.pattern(t, n, o, i, a)
		}
		r(i)
	},
	WM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n, 'date') && !t.required) return r()
			if ((vt.required(t, n, o, i, a), !hn(n, 'date'))) {
				var s
				n instanceof Date ? (s = n) : (s = new Date(n)),
					vt.type(t, s, o, i, a),
					s && vt.range(t, s.getTime(), o, i, a)
			}
		}
		r(i)
	},
	UM = function (t, n, r, o, a) {
		var i = [],
			l = Array.isArray(n) ? 'array' : typeof n
		vt.required(t, n, o, i, a, l), r(i)
	},
	Rf = function (t, n, r, o, a) {
		var i = t.type,
			l = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (s) {
			if (hn(n, i) && !t.required) return r()
			vt.required(t, n, o, l, a, i), hn(n, i) || vt.type(t, n, o, l, a)
		}
		r(l)
	},
	YM = function (t, n, r, o, a) {
		var i = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field))
		if (l) {
			if (hn(n) && !t.required) return r()
			vt.required(t, n, o, i, a)
		}
		r(i)
	},
	Fl = {
		string: kM,
		method: TM,
		number: DM,
		boolean: _M,
		regexp: LM,
		integer: AM,
		float: FM,
		array: zM,
		object: HM,
		enum: jM,
		pattern: BM,
		date: WM,
		url: Rf,
		hex: Rf,
		email: Rf,
		required: UM,
		any: YM
	}
function $p() {
	return {
		default: 'Validation error on field %s',
		required: '%s is required',
		enum: '%s must be one of %s',
		whitespace: '%s cannot be empty',
		date: {
			format: '%s date %s is invalid for format %s',
			parse: '%s date could not be parsed, %s is invalid ',
			invalid: '%s date %s is invalid'
		},
		types: {
			string: '%s is not a %s',
			method: '%s is not a %s (function)',
			array: '%s is not an %s',
			object: '%s is not an %s',
			number: '%s is not a %s',
			date: '%s is not a %s',
			boolean: '%s is not a %s',
			integer: '%s is not an %s',
			float: '%s is not a %s',
			regexp: '%s is not a valid %s',
			email: '%s is not a valid %s',
			url: '%s is not a valid %s',
			hex: '%s is not a valid %s'
		},
		string: {
			len: '%s must be exactly %s characters',
			min: '%s must be at least %s characters',
			max: '%s cannot be longer than %s characters',
			range: '%s must be between %s and %s characters'
		},
		number: {
			len: '%s must equal %s',
			min: '%s cannot be less than %s',
			max: '%s cannot be greater than %s',
			range: '%s must be between %s and %s'
		},
		array: {
			len: '%s must be exactly %s in length',
			min: '%s cannot be less than %s in length',
			max: '%s cannot be greater than %s in length',
			range: '%s must be between %s and %s in length'
		},
		pattern: { mismatch: '%s value %s does not match pattern %s' },
		clone: function () {
			var t = JSON.parse(JSON.stringify(this))
			return (t.clone = this.clone), t
		}
	}
}
var Pp = $p(),
	$s = (function () {
		function e(n) {
			;(this.rules = null), (this._messages = Pp), this.define(n)
		}
		var t = e.prototype
		return (
			(t.define = function (r) {
				var o = this
				if (!r) throw new Error('Cannot configure a schema with no rules')
				if (typeof r != 'object' || Array.isArray(r))
					throw new Error('Rules must be an object')
				;(this.rules = {}),
					Object.keys(r).forEach(function (a) {
						var i = r[a]
						o.rules[a] = Array.isArray(i) ? i : [i]
					})
			}),
			(t.messages = function (r) {
				return r && (this._messages = dy($p(), r)), this._messages
			}),
			(t.validate = function (r, o, a) {
				var i = this
				o === void 0 && (o = {}), a === void 0 && (a = function () {})
				var l = r,
					s = o,
					c = a
				if (
					(typeof s == 'function' && ((c = s), (s = {})),
					!this.rules || Object.keys(this.rules).length === 0)
				)
					return c && c(null, l), Promise.resolve(l)
				function f(g) {
					var b = [],
						m = {}
					function y(C) {
						if (Array.isArray(C)) {
							var x
							b = (x = b).concat.apply(x, C)
						} else b.push(C)
					}
					for (var S = 0; S < g.length; S++) y(g[S])
					b.length ? ((m = Ep(b)), c(b, m)) : c(null, l)
				}
				if (s.messages) {
					var d = this.messages()
					d === Pp && (d = $p()), dy(d, s.messages), (s.messages = d)
				} else s.messages = this.messages()
				var v = {},
					p = s.keys || Object.keys(this.rules)
				p.forEach(function (g) {
					var b = i.rules[g],
						m = l[g]
					b.forEach(function (y) {
						var S = y
						typeof S.transform == 'function' &&
							(l === r && (l = ga({}, l)), (m = l[g] = S.transform(m))),
							typeof S == 'function' ? (S = { validator: S }) : (S = ga({}, S)),
							(S.validator = i.getValidationMethod(S)),
							S.validator &&
								((S.field = g),
								(S.fullField = S.fullField || g),
								(S.type = i.getType(S)),
								(v[g] = v[g] || []),
								v[g].push({ rule: S, value: m, source: l, field: g }))
					})
				})
				var h = {}
				return xM(
					v,
					s,
					function (g, b) {
						var m = g.rule,
							y =
								(m.type === 'object' || m.type === 'array') &&
								(typeof m.fields == 'object' ||
									typeof m.defaultField == 'object')
						;(y = y && (m.required || (!m.required && g.value))),
							(m.field = g.field)
						function S(w, E) {
							return ga({}, E, {
								fullField: m.fullField + '.' + w,
								fullFields: m.fullFields ? [].concat(m.fullFields, [w]) : [w]
							})
						}
						function C(w) {
							w === void 0 && (w = [])
							var E = Array.isArray(w) ? w : [w]
							!s.suppressWarning &&
								E.length &&
								e.warning('async-validator:', E),
								E.length && m.message !== void 0 && (E = [].concat(m.message))
							var P = E.map(cy(m, l))
							if (s.first && P.length) return (h[m.field] = 1), b(P)
							if (!y) b(P)
							else {
								if (m.required && !g.value)
									return (
										m.message !== void 0
											? (P = [].concat(m.message).map(cy(m, l)))
											: s.error &&
											  (P = [s.error(m, tr(s.messages.required, m.field))]),
										b(P)
									)
								var N = {}
								m.defaultField &&
									Object.keys(g.value).map(function (I) {
										N[I] = m.defaultField
									}),
									(N = ga({}, N, g.rule.fields))
								var O = {}
								Object.keys(N).forEach(function (I) {
									var $ = N[I],
										R = Array.isArray($) ? $ : [$]
									O[I] = R.map(S.bind(null, I))
								})
								var k = new e(O)
								k.messages(s.messages),
									g.rule.options &&
										((g.rule.options.messages = s.messages),
										(g.rule.options.error = s.error)),
									k.validate(g.value, g.rule.options || s, function (I) {
										var $ = []
										P && P.length && $.push.apply($, P),
											I && I.length && $.push.apply($, I),
											b($.length ? $ : null)
									})
							}
						}
						var x
						if (m.asyncValidator)
							x = m.asyncValidator(m, g.value, C, g.source, s)
						else if (m.validator) {
							try {
								x = m.validator(m, g.value, C, g.source, s)
							} catch (w) {
								console.error == null || console.error(w),
									s.suppressValidatorError ||
										setTimeout(function () {
											throw w
										}, 0),
									C(w.message)
							}
							x === !0
								? C()
								: x === !1
								? C(
										typeof m.message == 'function'
											? m.message(m.fullField || m.field)
											: m.message || (m.fullField || m.field) + ' fails'
								  )
								: x instanceof Array
								? C(x)
								: x instanceof Error && C(x.message)
						}
						x &&
							x.then &&
							x.then(
								function () {
									return C()
								},
								function (w) {
									return C(w)
								}
							)
					},
					function (g) {
						f(g)
					},
					l
				)
			}),
			(t.getType = function (r) {
				if (
					(r.type === void 0 &&
						r.pattern instanceof RegExp &&
						(r.type = 'pattern'),
					typeof r.validator != 'function' &&
						r.type &&
						!Fl.hasOwnProperty(r.type))
				)
					throw new Error(tr('Unknown rule type %s', r.type))
				return r.type || 'string'
			}),
			(t.getValidationMethod = function (r) {
				if (typeof r.validator == 'function') return r.validator
				var o = Object.keys(r),
					a = o.indexOf('message')
				return (
					a !== -1 && o.splice(a, 1),
					o.length === 1 && o[0] === 'required'
						? Fl.required
						: Fl[this.getType(r)] || void 0
				)
			}),
			e
		)
	})()
$s.register = function (t, n) {
	if (typeof n != 'function')
		throw new Error(
			'Cannot register a validator by type, validator is not a function'
		)
	Fl[t] = n
}
$s.warning = bM
$s.messages = Pp
$s.validators = Fl
var qn = "'${name}' is not a valid ${type}",
	BC = {
		default: "Validation error on field '${name}'",
		required: "'${name}' is required",
		enum: "'${name}' must be one of [${enum}]",
		whitespace: "'${name}' cannot be empty",
		date: {
			format: "'${name}' is invalid for format date",
			parse: "'${name}' could not be parsed as date",
			invalid: "'${name}' is invalid date"
		},
		types: {
			string: qn,
			method: qn,
			array: qn,
			object: qn,
			number: qn,
			date: qn,
			boolean: qn,
			integer: qn,
			float: qn,
			regexp: qn,
			email: qn,
			url: qn,
			hex: qn
		},
		string: {
			len: "'${name}' must be exactly ${len} characters",
			min: "'${name}' must be at least ${min} characters",
			max: "'${name}' cannot be longer than ${max} characters",
			range: "'${name}' must be between ${min} and ${max} characters"
		},
		number: {
			len: "'${name}' must equal ${len}",
			min: "'${name}' cannot be less than ${min}",
			max: "'${name}' cannot be greater than ${max}",
			range: "'${name}' must be between ${min} and ${max}"
		},
		array: {
			len: "'${name}' must be exactly ${len} in length",
			min: "'${name}' cannot be less than ${min} in length",
			max: "'${name}' cannot be greater than ${max} in length",
			range: "'${name}' must be between ${min} and ${max} in length"
		},
		pattern: { mismatch: "'${name}' does not match pattern ${pattern}" }
	}
function WC(e, t) {
	for (var n = e, r = 0; r < t.length; r += 1) {
		if (n == null) return
		n = n[t[r]]
	}
	return n
}
function UC(e) {
	return RC(e) || $C(e) || Nh(e) || MC()
}
function YC(e, t, n, r) {
	if (!t.length) return n
	var o = UC(t),
		a = o[0],
		i = o.slice(1),
		l
	return (
		!e && typeof a == 'number'
			? (l = [])
			: Array.isArray(e)
			? (l = xe(e))
			: (l = F({}, e)),
		r && n === void 0 && i.length === 1
			? delete l[a][i[0]]
			: (l[a] = YC(l[a], i, n, r)),
		l
	)
}
function KM(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
	return t.length && r && n === void 0 && !WC(e, t.slice(0, -1))
		? e
		: YC(e, t, n, r)
}
function bd(e) {
	return Array.isArray(e) ? XM(e) : Ze(e) === 'object' && e !== null ? GM(e) : e
}
function GM(e) {
	if (Object.getPrototypeOf(e) === Object.prototype) {
		var t = {}
		for (var n in e) t[n] = bd(e[n])
		return t
	}
	return e
}
function XM(e) {
	return e.map(function (t) {
		return bd(t)
	})
}
function on(e) {
	return Cp(e)
}
function Do(e, t) {
	var n = WC(e, t)
	return n
}
function $o(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
		o = KM(e, t, n, r)
	return o
}
function vy(e, t) {
	var n = {}
	return (
		t.forEach(function (r) {
			var o = Do(e, r)
			n = $o(n, r, o)
		}),
		n
	)
}
function zl(e, t) {
	return (
		e &&
		e.some(function (n) {
			return GC(n, t)
		})
	)
}
function py(e) {
	return (
		Ze(e) === 'object' &&
		e !== null &&
		Object.getPrototypeOf(e) === Object.prototype
	)
}
function KC(e, t) {
	var n = Array.isArray(e) ? xe(e) : F({}, e)
	return (
		t &&
			Object.keys(t).forEach(function (r) {
				var o = n[r],
					a = t[r],
					i = py(o) && py(a)
				n[r] = i ? KC(o, a || {}) : bd(a)
			}),
		n
	)
}
function Hl(e) {
	for (
		var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
		r < t;
		r++
	)
		n[r - 1] = arguments[r]
	return n.reduce(function (o, a) {
		return KC(o, a)
	}, e)
}
function GC(e, t) {
	return !e || !t || e.length !== t.length
		? !1
		: e.every(function (n, r) {
				return t[r] === n
		  })
}
function qM(e, t) {
	if (e === t) return !0
	if (
		(!e && t) ||
		(e && !t) ||
		!e ||
		!t ||
		Ze(e) !== 'object' ||
		Ze(t) !== 'object'
	)
		return !1
	var n = Object.keys(e),
		r = Object.keys(t),
		o = new Set([].concat(n, r))
	return xe(o).every(function (a) {
		var i = e[a],
			l = t[a]
		return typeof i == 'function' && typeof l == 'function' ? !0 : i === l
	})
}
function QM(e) {
	var t = arguments.length <= 1 ? void 0 : arguments[1]
	return t && t.target && Ze(t.target) === 'object' && e in t.target
		? t.target[e]
		: t
}
function my(e, t, n) {
	var r = e.length
	if (t < 0 || t >= r || n < 0 || n >= r) return e
	var o = e[t],
		a = t - n
	return a > 0
		? [].concat(
				xe(e.slice(0, n)),
				[o],
				xe(e.slice(n, t)),
				xe(e.slice(t + 1, r))
		  )
		: a < 0
		? [].concat(
				xe(e.slice(0, t)),
				xe(e.slice(t + 1, n + 1)),
				[o],
				xe(e.slice(n + 1, r))
		  )
		: e
}
var ZM = $s
function JM(e, t) {
	return e.replace(/\$\{\w+\}/g, function (n) {
		var r = n.slice(2, -1)
		return t[r]
	})
}
var hy = 'CODE_LOGIC_ERROR'
function Rp(e, t, n, r, o) {
	return Mp.apply(this, arguments)
}
function Mp() {
	return (
		(Mp = _a(
			Fn().mark(function e(t, n, r, o, a) {
				var i, l, s, c, f, d, v, p, h
				return Fn().wrap(
					function (b) {
						for (;;)
							switch ((b.prev = b.next)) {
								case 0:
									return (
										(i = F({}, r)),
										delete i.ruleIndex,
										i.validator &&
											((l = i.validator),
											(i.validator = function () {
												try {
													return l.apply(void 0, arguments)
												} catch (m) {
													return console.error(m), Promise.reject(hy)
												}
											})),
										(s = null),
										i &&
											i.type === 'array' &&
											i.defaultField &&
											((s = i.defaultField), delete i.defaultField),
										(c = new ZM(V({}, t, [i]))),
										(f = Hl({}, BC, o.validateMessages)),
										c.messages(f),
										(d = []),
										(b.prev = 9),
										(b.next = 12),
										Promise.resolve(c.validate(V({}, t, n), F({}, o)))
									)
								case 12:
									b.next = 17
									break
								case 14:
									;(b.prev = 14),
										(b.t0 = b.catch(9)),
										b.t0.errors &&
											(d = b.t0.errors.map(function (m, y) {
												var S = m.message,
													C = S === hy ? f.default : S
												return u.isValidElement(C)
													? u.cloneElement(C, { key: 'error_'.concat(y) })
													: C
											}))
								case 17:
									if (!(!d.length && s)) {
										b.next = 22
										break
									}
									return (
										(b.next = 20),
										Promise.all(
											n.map(function (m, y) {
												return Rp(''.concat(t, '.').concat(y), m, s, o, a)
											})
										)
									)
								case 20:
									return (
										(v = b.sent),
										b.abrupt(
											'return',
											v.reduce(function (m, y) {
												return [].concat(xe(m), xe(y))
											}, [])
										)
									)
								case 22:
									return (
										(p = F(
											F({}, r),
											{},
											{ name: t, enum: (r.enum || []).join(', ') },
											a
										)),
										(h = d.map(function (m) {
											return typeof m == 'string' ? JM(m, p) : m
										})),
										b.abrupt('return', h)
									)
								case 25:
								case 'end':
									return b.stop()
							}
					},
					e,
					null,
					[[9, 14]]
				)
			})
		)),
		Mp.apply(this, arguments)
	)
}
function eO(e, t, n, r, o, a) {
	var i = e.join('.'),
		l = n
			.map(function (f, d) {
				var v = f.validator,
					p = F(F({}, f), {}, { ruleIndex: d })
				return (
					v &&
						(p.validator = function (h, g, b) {
							var m = !1,
								y = function () {
									for (
										var x = arguments.length, w = new Array(x), E = 0;
										E < x;
										E++
									)
										w[E] = arguments[E]
									Promise.resolve().then(function () {
										En(
											!m,
											'Your validator function has already return a promise. `callback` will be ignored.'
										),
											m || b.apply(void 0, w)
									})
								},
								S = v(h, g, y)
							;(m =
								S &&
								typeof S.then == 'function' &&
								typeof S.catch == 'function'),
								En(
									m,
									'`callback` is deprecated. Please return a promise instead.'
								),
								m &&
									S.then(function () {
										b()
									}).catch(function (C) {
										b(C || ' ')
									})
						}),
					p
				)
			})
			.sort(function (f, d) {
				var v = f.warningOnly,
					p = f.ruleIndex,
					h = d.warningOnly,
					g = d.ruleIndex
				return !!v == !!h ? p - g : v ? 1 : -1
			}),
		s
	if (o === !0)
		s = new Promise(
			(function () {
				var f = _a(
					Fn().mark(function d(v, p) {
						var h, g, b
						return Fn().wrap(function (y) {
							for (;;)
								switch ((y.prev = y.next)) {
									case 0:
										h = 0
									case 1:
										if (!(h < l.length)) {
											y.next = 12
											break
										}
										return (g = l[h]), (y.next = 5), Rp(i, t, g, r, a)
									case 5:
										if (((b = y.sent), !b.length)) {
											y.next = 9
											break
										}
										return p([{ errors: b, rule: g }]), y.abrupt('return')
									case 9:
										;(h += 1), (y.next = 1)
										break
									case 12:
										v([])
									case 13:
									case 'end':
										return y.stop()
								}
						}, d)
					})
				)
				return function (d, v) {
					return f.apply(this, arguments)
				}
			})()
		)
	else {
		var c = l.map(function (f) {
			return Rp(i, t, f, r, a).then(function (d) {
				return { errors: d, rule: f }
			})
		})
		s = (o ? nO(c) : tO(c)).then(function (f) {
			return Promise.reject(f)
		})
	}
	return (
		s.catch(function (f) {
			return f
		}),
		s
	)
}
function tO(e) {
	return Op.apply(this, arguments)
}
function Op() {
	return (
		(Op = _a(
			Fn().mark(function e(t) {
				return Fn().wrap(function (r) {
					for (;;)
						switch ((r.prev = r.next)) {
							case 0:
								return r.abrupt(
									'return',
									Promise.all(t).then(function (o) {
										var a,
											i = (a = []).concat.apply(a, xe(o))
										return i
									})
								)
							case 1:
							case 'end':
								return r.stop()
						}
				}, e)
			})
		)),
		Op.apply(this, arguments)
	)
}
function nO(e) {
	return Np.apply(this, arguments)
}
function Np() {
	return (
		(Np = _a(
			Fn().mark(function e(t) {
				var n
				return Fn().wrap(function (o) {
					for (;;)
						switch ((o.prev = o.next)) {
							case 0:
								return (
									(n = 0),
									o.abrupt(
										'return',
										new Promise(function (a) {
											t.forEach(function (i) {
												i.then(function (l) {
													l.errors.length && a([l]),
														(n += 1),
														n === t.length && a([])
												})
											})
										})
									)
								)
							case 2:
							case 'end':
								return o.stop()
						}
				}, e)
			})
		)),
		Np.apply(this, arguments)
	)
}
var rO = ['name'],
	ur = []
function gy(e, t, n, r, o, a) {
	return typeof e == 'function'
		? e(t, n, 'source' in a ? { source: a.source } : {})
		: r !== o
}
var Lh = (function (e) {
	go(n, e)
	var t = yo(n)
	function n(r) {
		var o
		if (
			(Tn(this, n),
			(o = t.call(this, r)),
			(o.state = { resetCount: 0 }),
			(o.cancelRegisterFunc = null),
			(o.mounted = !1),
			(o.touched = !1),
			(o.dirty = !1),
			(o.validatePromise = void 0),
			(o.prevValidating = void 0),
			(o.errors = ur),
			(o.warnings = ur),
			(o.cancelRegister = function () {
				var s = o.props,
					c = s.preserve,
					f = s.isListField,
					d = s.name
				o.cancelRegisterFunc && o.cancelRegisterFunc(f, c, on(d)),
					(o.cancelRegisterFunc = null)
			}),
			(o.getNamePath = function () {
				var s = o.props,
					c = s.name,
					f = s.fieldContext,
					d = f.prefixName,
					v = d === void 0 ? [] : d
				return c !== void 0 ? [].concat(xe(v), xe(c)) : []
			}),
			(o.getRules = function () {
				var s = o.props,
					c = s.rules,
					f = c === void 0 ? [] : c,
					d = s.fieldContext
				return f.map(function (v) {
					return typeof v == 'function' ? v(d) : v
				})
			}),
			(o.refresh = function () {
				o.mounted &&
					o.setState(function (s) {
						var c = s.resetCount
						return { resetCount: c + 1 }
					})
			}),
			(o.triggerMetaEvent = function (s) {
				var c = o.props.onMetaChange
				c == null || c(F(F({}, o.getMeta()), {}, { destroy: s }))
			}),
			(o.onStoreChange = function (s, c, f) {
				var d = o.props,
					v = d.shouldUpdate,
					p = d.dependencies,
					h = p === void 0 ? [] : p,
					g = d.onReset,
					b = f.store,
					m = o.getNamePath(),
					y = o.getValue(s),
					S = o.getValue(b),
					C = c && zl(c, m)
				switch (
					(f.type === 'valueUpdate' &&
						f.source === 'external' &&
						y !== S &&
						((o.touched = !0),
						(o.dirty = !0),
						(o.validatePromise = null),
						(o.errors = ur),
						(o.warnings = ur),
						o.triggerMetaEvent()),
					f.type)
				) {
					case 'reset':
						if (!c || C) {
							;(o.touched = !1),
								(o.dirty = !1),
								(o.validatePromise = null),
								(o.errors = ur),
								(o.warnings = ur),
								o.triggerMetaEvent(),
								g == null || g(),
								o.refresh()
							return
						}
						break
					case 'remove': {
						if (v) {
							o.reRender()
							return
						}
						break
					}
					case 'setField': {
						if (C) {
							var x = f.data
							'touched' in x && (o.touched = x.touched),
								'validating' in x &&
									!('originRCField' in x) &&
									(o.validatePromise = x.validating
										? Promise.resolve([])
										: null),
								'errors' in x && (o.errors = x.errors || ur),
								'warnings' in x && (o.warnings = x.warnings || ur),
								(o.dirty = !0),
								o.triggerMetaEvent(),
								o.reRender()
							return
						}
						if (v && !m.length && gy(v, s, b, y, S, f)) {
							o.reRender()
							return
						}
						break
					}
					case 'dependenciesUpdate': {
						var w = h.map(on)
						if (
							w.some(function (E) {
								return zl(f.relatedFields, E)
							})
						) {
							o.reRender()
							return
						}
						break
					}
					default:
						if (C || ((!h.length || m.length || v) && gy(v, s, b, y, S, f))) {
							o.reRender()
							return
						}
						break
				}
				v === !0 && o.reRender()
			}),
			(o.validateRules = function (s) {
				var c = o.getNamePath(),
					f = o.getValue(),
					d = Promise.resolve().then(function () {
						if (!o.mounted) return []
						var v = o.props,
							p = v.validateFirst,
							h = p === void 0 ? !1 : p,
							g = v.messageVariables,
							b = s || {},
							m = b.triggerName,
							y = o.getRules()
						m &&
							(y = y
								.filter(function (C) {
									return C
								})
								.filter(function (C) {
									var x = C.validateTrigger
									if (!x) return !0
									var w = Cp(x)
									return w.includes(m)
								}))
						var S = eO(c, f, y, s, h, g)
						return (
							S.catch(function (C) {
								return C
							}).then(function () {
								var C =
									arguments.length > 0 && arguments[0] !== void 0
										? arguments[0]
										: ur
								if (o.validatePromise === d) {
									var x
									o.validatePromise = null
									var w = [],
										E = []
									;(x = C.forEach) === null ||
										x === void 0 ||
										x.call(C, function (P) {
											var N = P.rule.warningOnly,
												O = P.errors,
												k = O === void 0 ? ur : O
											N ? E.push.apply(E, xe(k)) : w.push.apply(w, xe(k))
										}),
										(o.errors = w),
										(o.warnings = E),
										o.triggerMetaEvent(),
										o.reRender()
								}
							}),
							S
						)
					})
				return (
					(o.validatePromise = d),
					(o.dirty = !0),
					(o.errors = ur),
					(o.warnings = ur),
					o.triggerMetaEvent(),
					o.reRender(),
					d
				)
			}),
			(o.isFieldValidating = function () {
				return !!o.validatePromise
			}),
			(o.isFieldTouched = function () {
				return o.touched
			}),
			(o.isFieldDirty = function () {
				if (o.dirty || o.props.initialValue !== void 0) return !0
				var s = o.props.fieldContext,
					c = s.getInternalHooks(ha),
					f = c.getInitialValue
				return f(o.getNamePath()) !== void 0
			}),
			(o.getErrors = function () {
				return o.errors
			}),
			(o.getWarnings = function () {
				return o.warnings
			}),
			(o.isListField = function () {
				return o.props.isListField
			}),
			(o.isList = function () {
				return o.props.isList
			}),
			(o.isPreserve = function () {
				return o.props.preserve
			}),
			(o.getMeta = function () {
				o.prevValidating = o.isFieldValidating()
				var s = {
					touched: o.isFieldTouched(),
					validating: o.prevValidating,
					errors: o.errors,
					warnings: o.warnings,
					name: o.getNamePath(),
					validated: o.validatePromise === null
				}
				return s
			}),
			(o.getOnlyChild = function (s) {
				if (typeof s == 'function') {
					var c = o.getMeta()
					return F(
						F(
							{},
							o.getOnlyChild(s(o.getControlled(), c, o.props.fieldContext))
						),
						{},
						{ isFunction: !0 }
					)
				}
				var f = Ur(s)
				return f.length !== 1 || !u.isValidElement(f[0])
					? { child: f, isFunction: !1 }
					: { child: f[0], isFunction: !1 }
			}),
			(o.getValue = function (s) {
				var c = o.props.fieldContext.getFieldsValue,
					f = o.getNamePath()
				return Do(s || c(!0), f)
			}),
			(o.getControlled = function () {
				var s =
						arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
					c = o.props,
					f = c.trigger,
					d = c.validateTrigger,
					v = c.getValueFromEvent,
					p = c.normalize,
					h = c.valuePropName,
					g = c.getValueProps,
					b = c.fieldContext,
					m = d !== void 0 ? d : b.validateTrigger,
					y = o.getNamePath(),
					S = b.getInternalHooks,
					C = b.getFieldsValue,
					x = S(ha),
					w = x.dispatch,
					E = o.getValue(),
					P =
						g ||
						function (I) {
							return V({}, h, I)
						},
					N = s[f],
					O = F(F({}, s), P(E))
				O[f] = function () {
					;(o.touched = !0), (o.dirty = !0), o.triggerMetaEvent()
					for (var I, $ = arguments.length, R = new Array($), M = 0; M < $; M++)
						R[M] = arguments[M]
					v ? (I = v.apply(void 0, R)) : (I = QM.apply(void 0, [h].concat(R))),
						p && (I = p(I, E, C(!0))),
						w({ type: 'updateValue', namePath: y, value: I }),
						N && N.apply(void 0, R)
				}
				var k = Cp(m || [])
				return (
					k.forEach(function (I) {
						var $ = O[I]
						O[I] = function () {
							$ && $.apply(void 0, arguments)
							var R = o.props.rules
							R &&
								R.length &&
								w({ type: 'validateField', namePath: y, triggerName: I })
						}
					}),
					O
				)
			}),
			r.fieldContext)
		) {
			var a = r.fieldContext.getInternalHooks,
				i = a(ha),
				l = i.initEntityValue
			l(We(o))
		}
		return o
	}
	return (
		Dn(n, [
			{
				key: 'componentDidMount',
				value: function () {
					var o = this.props,
						a = o.shouldUpdate,
						i = o.fieldContext
					if (((this.mounted = !0), i)) {
						var l = i.getInternalHooks,
							s = l(ha),
							c = s.registerField
						this.cancelRegisterFunc = c(this)
					}
					a === !0 && this.reRender()
				}
			},
			{
				key: 'componentWillUnmount',
				value: function () {
					this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1)
				}
			},
			{
				key: 'reRender',
				value: function () {
					this.mounted && this.forceUpdate()
				}
			},
			{
				key: 'render',
				value: function () {
					var o = this.state.resetCount,
						a = this.props.children,
						i = this.getOnlyChild(a),
						l = i.child,
						s = i.isFunction,
						c
					return (
						s
							? (c = l)
							: u.isValidElement(l)
							? (c = u.cloneElement(l, this.getControlled(l.props)))
							: (En(!l, '`children` of Field is not validate ReactElement.'),
							  (c = l)),
						u.createElement(u.Fragment, { key: o }, c)
					)
				}
			}
		]),
		n
	)
})(u.Component)
Lh.contextType = Li
Lh.defaultProps = { trigger: 'onChange', valuePropName: 'value' }
function XC(e) {
	var t = e.name,
		n = ot(e, rO),
		r = u.useContext(Li),
		o = t !== void 0 ? on(t) : void 0,
		a = 'keep'
	return (
		n.isListField || (a = '_'.concat((o || []).join('_'))),
		u.createElement(Lh, se({ key: a, name: o }, n, { fieldContext: r }))
	)
}
var oO = u.createContext(null),
	aO = function (t) {
		var n = t.name,
			r = t.initialValue,
			o = t.children,
			a = t.rules,
			i = t.validateTrigger,
			l = u.useContext(Li),
			s = u.useRef({ keys: [], id: 0 }),
			c = s.current,
			f = u.useMemo(
				function () {
					var h = on(l.prefixName) || []
					return [].concat(xe(h), xe(on(n)))
				},
				[l.prefixName, n]
			),
			d = u.useMemo(
				function () {
					return F(F({}, l), {}, { prefixName: f })
				},
				[l, f]
			),
			v = u.useMemo(
				function () {
					return {
						getKey: function (g) {
							var b = f.length,
								m = g[b]
							return [c.keys[m], g.slice(b + 1)]
						}
					}
				},
				[f]
			)
		if (typeof o != 'function')
			return En(!1, 'Form.List only accepts function as children.'), null
		var p = function (g, b, m) {
			var y = m.source
			return y === 'internal' ? !1 : g !== b
		}
		return u.createElement(
			oO.Provider,
			{ value: v },
			u.createElement(
				Li.Provider,
				{ value: d },
				u.createElement(
					XC,
					{
						name: [],
						shouldUpdate: p,
						rules: a,
						validateTrigger: i,
						initialValue: r,
						isList: !0
					},
					function (h, g) {
						var b = h.value,
							m = b === void 0 ? [] : b,
							y = h.onChange,
							S = l.getFieldValue,
							C = function () {
								var P = S(f || [])
								return P || []
							},
							x = {
								add: function (P, N) {
									var O = C()
									N >= 0 && N <= O.length
										? ((c.keys = [].concat(
												xe(c.keys.slice(0, N)),
												[c.id],
												xe(c.keys.slice(N))
										  )),
										  y([].concat(xe(O.slice(0, N)), [P], xe(O.slice(N)))))
										: ((c.keys = [].concat(xe(c.keys), [c.id])),
										  y([].concat(xe(O), [P]))),
										(c.id += 1)
								},
								remove: function (P) {
									var N = C(),
										O = new Set(Array.isArray(P) ? P : [P])
									O.size <= 0 ||
										((c.keys = c.keys.filter(function (k, I) {
											return !O.has(I)
										})),
										y(
											N.filter(function (k, I) {
												return !O.has(I)
											})
										))
								},
								move: function (P, N) {
									if (P !== N) {
										var O = C()
										P < 0 ||
											P >= O.length ||
											N < 0 ||
											N >= O.length ||
											((c.keys = my(c.keys, P, N)), y(my(O, P, N)))
									}
								}
							},
							w = m || []
						return (
							Array.isArray(w) || (w = []),
							o(
								w.map(function (E, P) {
									var N = c.keys[P]
									return (
										N === void 0 &&
											((c.keys[P] = c.id), (N = c.keys[P]), (c.id += 1)),
										{ name: P, key: N, isListField: !0 }
									)
								}),
								x,
								g
							)
						)
					}
				)
			)
		)
	}
function iO(e) {
	var t = !1,
		n = e.length,
		r = []
	return e.length
		? new Promise(function (o, a) {
				e.forEach(function (i, l) {
					i.catch(function (s) {
						return (t = !0), s
					}).then(function (s) {
						;(n -= 1), (r[l] = s), !(n > 0) && (t && a(r), o(r))
					})
				})
		  })
		: Promise.resolve([])
}
var qC = '__@field_split__'
function Mf(e) {
	return e
		.map(function (t) {
			return ''.concat(Ze(t), ':').concat(t)
		})
		.join(qC)
}
var Ua = (function () {
		function e() {
			Tn(this, e), (this.kvs = new Map())
		}
		return (
			Dn(e, [
				{
					key: 'set',
					value: function (n, r) {
						this.kvs.set(Mf(n), r)
					}
				},
				{
					key: 'get',
					value: function (n) {
						return this.kvs.get(Mf(n))
					}
				},
				{
					key: 'update',
					value: function (n, r) {
						var o = this.get(n),
							a = r(o)
						a ? this.set(n, a) : this.delete(n)
					}
				},
				{
					key: 'delete',
					value: function (n) {
						this.kvs.delete(Mf(n))
					}
				},
				{
					key: 'map',
					value: function (n) {
						return xe(this.kvs.entries()).map(function (r) {
							var o = B(r, 2),
								a = o[0],
								i = o[1],
								l = a.split(qC)
							return n({
								key: l.map(function (s) {
									var c = s.match(/^([^:]*):(.*)$/),
										f = B(c, 3),
										d = f[1],
										v = f[2]
									return d === 'number' ? Number(v) : v
								}),
								value: i
							})
						})
					}
				},
				{
					key: 'toJSON',
					value: function () {
						var n = {}
						return (
							this.map(function (r) {
								var o = r.key,
									a = r.value
								return (n[o.join('.')] = a), null
							}),
							n
						)
					}
				}
			]),
			e
		)
	})(),
	lO = ['name', 'errors'],
	sO = Dn(function e(t) {
		var n = this
		Tn(this, e),
			(this.formHooked = !1),
			(this.forceRootUpdate = void 0),
			(this.subscribable = !0),
			(this.store = {}),
			(this.fieldEntities = []),
			(this.initialValues = {}),
			(this.callbacks = {}),
			(this.validateMessages = null),
			(this.preserve = null),
			(this.lastValidatePromise = null),
			(this.getForm = function () {
				return {
					getFieldValue: n.getFieldValue,
					getFieldsValue: n.getFieldsValue,
					getFieldError: n.getFieldError,
					getFieldWarning: n.getFieldWarning,
					getFieldsError: n.getFieldsError,
					isFieldsTouched: n.isFieldsTouched,
					isFieldTouched: n.isFieldTouched,
					isFieldValidating: n.isFieldValidating,
					isFieldsValidating: n.isFieldsValidating,
					resetFields: n.resetFields,
					setFields: n.setFields,
					setFieldValue: n.setFieldValue,
					setFieldsValue: n.setFieldsValue,
					validateFields: n.validateFields,
					submit: n.submit,
					_init: !0,
					getInternalHooks: n.getInternalHooks
				}
			}),
			(this.getInternalHooks = function (r) {
				return r === ha
					? ((n.formHooked = !0),
					  {
							dispatch: n.dispatch,
							initEntityValue: n.initEntityValue,
							registerField: n.registerField,
							useSubscribe: n.useSubscribe,
							setInitialValues: n.setInitialValues,
							destroyForm: n.destroyForm,
							setCallbacks: n.setCallbacks,
							setValidateMessages: n.setValidateMessages,
							getFields: n.getFields,
							setPreserve: n.setPreserve,
							getInitialValue: n.getInitialValue,
							registerWatch: n.registerWatch
					  })
					: (En(
							!1,
							'`getInternalHooks` is internal usage. Should not call directly.'
					  ),
					  null)
			}),
			(this.useSubscribe = function (r) {
				n.subscribable = r
			}),
			(this.prevWithoutPreserves = null),
			(this.setInitialValues = function (r, o) {
				if (((n.initialValues = r || {}), o)) {
					var a,
						i = Hl({}, r, n.store)
					;(a = n.prevWithoutPreserves) === null ||
						a === void 0 ||
						a.map(function (l) {
							var s = l.key
							i = $o(i, s, Do(r, s))
						}),
						(n.prevWithoutPreserves = null),
						n.updateStore(i)
				}
			}),
			(this.destroyForm = function () {
				var r = new Ua()
				n.getFieldEntities(!0).forEach(function (o) {
					n.isMergedPreserve(o.isPreserve()) || r.set(o.getNamePath(), !0)
				}),
					(n.prevWithoutPreserves = r)
			}),
			(this.getInitialValue = function (r) {
				var o = Do(n.initialValues, r)
				return r.length ? bd(o) : o
			}),
			(this.setCallbacks = function (r) {
				n.callbacks = r
			}),
			(this.setValidateMessages = function (r) {
				n.validateMessages = r
			}),
			(this.setPreserve = function (r) {
				n.preserve = r
			}),
			(this.watchList = []),
			(this.registerWatch = function (r) {
				return (
					n.watchList.push(r),
					function () {
						n.watchList = n.watchList.filter(function (o) {
							return o !== r
						})
					}
				)
			}),
			(this.notifyWatch = function () {
				var r =
					arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
				if (n.watchList.length) {
					var o = n.getFieldsValue()
					n.watchList.forEach(function (a) {
						a(o, r)
					})
				}
			}),
			(this.timeoutId = null),
			(this.warningUnhooked = function () {}),
			(this.updateStore = function (r) {
				n.store = r
			}),
			(this.getFieldEntities = function () {
				var r =
					arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
				return r
					? n.fieldEntities.filter(function (o) {
							return o.getNamePath().length
					  })
					: n.fieldEntities
			}),
			(this.getFieldsMap = function () {
				var r =
						arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
					o = new Ua()
				return (
					n.getFieldEntities(r).forEach(function (a) {
						var i = a.getNamePath()
						o.set(i, a)
					}),
					o
				)
			}),
			(this.getFieldEntitiesForNamePathList = function (r) {
				if (!r) return n.getFieldEntities(!0)
				var o = n.getFieldsMap(!0)
				return r.map(function (a) {
					var i = on(a)
					return o.get(i) || { INVALIDATE_NAME_PATH: on(a) }
				})
			}),
			(this.getFieldsValue = function (r, o) {
				if ((n.warningUnhooked(), r === !0 && !o)) return n.store
				var a = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null),
					i = []
				return (
					a.forEach(function (l) {
						var s,
							c =
								'INVALIDATE_NAME_PATH' in l
									? l.INVALIDATE_NAME_PATH
									: l.getNamePath()
						if (
							!(
								!r &&
								!((s = l.isListField) === null || s === void 0) &&
								s.call(l)
							)
						)
							if (!o) i.push(c)
							else {
								var f = 'getMeta' in l ? l.getMeta() : null
								o(f) && i.push(c)
							}
					}),
					vy(n.store, i.map(on))
				)
			}),
			(this.getFieldValue = function (r) {
				n.warningUnhooked()
				var o = on(r)
				return Do(n.store, o)
			}),
			(this.getFieldsError = function (r) {
				n.warningUnhooked()
				var o = n.getFieldEntitiesForNamePathList(r)
				return o.map(function (a, i) {
					return a && !('INVALIDATE_NAME_PATH' in a)
						? {
								name: a.getNamePath(),
								errors: a.getErrors(),
								warnings: a.getWarnings()
						  }
						: { name: on(r[i]), errors: [], warnings: [] }
				})
			}),
			(this.getFieldError = function (r) {
				n.warningUnhooked()
				var o = on(r),
					a = n.getFieldsError([o])[0]
				return a.errors
			}),
			(this.getFieldWarning = function (r) {
				n.warningUnhooked()
				var o = on(r),
					a = n.getFieldsError([o])[0]
				return a.warnings
			}),
			(this.isFieldsTouched = function () {
				n.warningUnhooked()
				for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
					o[a] = arguments[a]
				var i = o[0],
					l = o[1],
					s,
					c = !1
				o.length === 0
					? (s = null)
					: o.length === 1
					? Array.isArray(i)
						? ((s = i.map(on)), (c = !1))
						: ((s = null), (c = i))
					: ((s = i.map(on)), (c = l))
				var f = n.getFieldEntities(!0),
					d = function (b) {
						return b.isFieldTouched()
					}
				if (!s) return c ? f.every(d) : f.some(d)
				var v = new Ua()
				s.forEach(function (g) {
					v.set(g, [])
				}),
					f.forEach(function (g) {
						var b = g.getNamePath()
						s.forEach(function (m) {
							m.every(function (y, S) {
								return b[S] === y
							}) &&
								v.update(m, function (y) {
									return [].concat(xe(y), [g])
								})
						})
					})
				var p = function (b) {
						return b.some(d)
					},
					h = v.map(function (g) {
						var b = g.value
						return b
					})
				return c ? h.every(p) : h.some(p)
			}),
			(this.isFieldTouched = function (r) {
				return n.warningUnhooked(), n.isFieldsTouched([r])
			}),
			(this.isFieldsValidating = function (r) {
				n.warningUnhooked()
				var o = n.getFieldEntities()
				if (!r)
					return o.some(function (i) {
						return i.isFieldValidating()
					})
				var a = r.map(on)
				return o.some(function (i) {
					var l = i.getNamePath()
					return zl(a, l) && i.isFieldValidating()
				})
			}),
			(this.isFieldValidating = function (r) {
				return n.warningUnhooked(), n.isFieldsValidating([r])
			}),
			(this.resetWithFieldInitialValue = function () {
				var r =
						arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
					o = new Ua(),
					a = n.getFieldEntities(!0)
				a.forEach(function (s) {
					var c = s.props.initialValue,
						f = s.getNamePath()
					if (c !== void 0) {
						var d = o.get(f) || new Set()
						d.add({ entity: s, value: c }), o.set(f, d)
					}
				})
				var i = function (c) {
						c.forEach(function (f) {
							var d = f.props.initialValue
							if (d !== void 0) {
								var v = f.getNamePath(),
									p = n.getInitialValue(v)
								if (p !== void 0)
									En(
										!1,
										"Form already set 'initialValues' with path '".concat(
											v.join('.'),
											"'. Field can not overwrite it."
										)
									)
								else {
									var h = o.get(v)
									if (h && h.size > 1)
										En(
											!1,
											"Multiple Field with path '".concat(
												v.join('.'),
												"' set 'initialValue'. Can not decide which one to pick."
											)
										)
									else if (h) {
										var g = n.getFieldValue(v)
										;(!r.skipExist || g === void 0) &&
											n.updateStore($o(n.store, v, xe(h)[0].value))
									}
								}
							}
						})
					},
					l
				r.entities
					? (l = r.entities)
					: r.namePathList
					? ((l = []),
					  r.namePathList.forEach(function (s) {
							var c = o.get(s)
							if (c) {
								var f
								;(f = l).push.apply(
									f,
									xe(
										xe(c).map(function (d) {
											return d.entity
										})
									)
								)
							}
					  }))
					: (l = a),
					i(l)
			}),
			(this.resetFields = function (r) {
				n.warningUnhooked()
				var o = n.store
				if (!r) {
					n.updateStore(Hl({}, n.initialValues)),
						n.resetWithFieldInitialValue(),
						n.notifyObservers(o, null, { type: 'reset' }),
						n.notifyWatch()
					return
				}
				var a = r.map(on)
				a.forEach(function (i) {
					var l = n.getInitialValue(i)
					n.updateStore($o(n.store, i, l))
				}),
					n.resetWithFieldInitialValue({ namePathList: a }),
					n.notifyObservers(o, a, { type: 'reset' }),
					n.notifyWatch(a)
			}),
			(this.setFields = function (r) {
				n.warningUnhooked()
				var o = n.store,
					a = []
				r.forEach(function (i) {
					var l = i.name
					i.errors
					var s = ot(i, lO),
						c = on(l)
					a.push(c),
						'value' in s && n.updateStore($o(n.store, c, s.value)),
						n.notifyObservers(o, [c], { type: 'setField', data: i })
				}),
					n.notifyWatch(a)
			}),
			(this.getFields = function () {
				var r = n.getFieldEntities(!0),
					o = r.map(function (a) {
						var i = a.getNamePath(),
							l = a.getMeta(),
							s = F(F({}, l), {}, { name: i, value: n.getFieldValue(i) })
						return Object.defineProperty(s, 'originRCField', { value: !0 }), s
					})
				return o
			}),
			(this.initEntityValue = function (r) {
				var o = r.props.initialValue
				if (o !== void 0) {
					var a = r.getNamePath(),
						i = Do(n.store, a)
					i === void 0 && n.updateStore($o(n.store, a, o))
				}
			}),
			(this.isMergedPreserve = function (r) {
				var o = r !== void 0 ? r : n.preserve
				return o ?? !0
			}),
			(this.registerField = function (r) {
				n.fieldEntities.push(r)
				var o = r.getNamePath()
				if ((n.notifyWatch([o]), r.props.initialValue !== void 0)) {
					var a = n.store
					n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
						n.notifyObservers(a, [r.getNamePath()], {
							type: 'valueUpdate',
							source: 'internal'
						})
				}
				return function (i, l) {
					var s =
						arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
					if (
						((n.fieldEntities = n.fieldEntities.filter(function (d) {
							return d !== r
						})),
						!n.isMergedPreserve(l) && (!i || s.length > 1))
					) {
						var c = i ? void 0 : n.getInitialValue(o)
						if (
							o.length &&
							n.getFieldValue(o) !== c &&
							n.fieldEntities.every(function (d) {
								return !GC(d.getNamePath(), o)
							})
						) {
							var f = n.store
							n.updateStore($o(f, o, c, !0)),
								n.notifyObservers(f, [o], { type: 'remove' }),
								n.triggerDependenciesUpdate(f, o)
						}
					}
					n.notifyWatch([o])
				}
			}),
			(this.dispatch = function (r) {
				switch (r.type) {
					case 'updateValue': {
						var o = r.namePath,
							a = r.value
						n.updateValue(o, a)
						break
					}
					case 'validateField': {
						var i = r.namePath,
							l = r.triggerName
						n.validateFields([i], { triggerName: l })
						break
					}
				}
			}),
			(this.notifyObservers = function (r, o, a) {
				if (n.subscribable) {
					var i = F(F({}, a), {}, { store: n.getFieldsValue(!0) })
					n.getFieldEntities().forEach(function (l) {
						var s = l.onStoreChange
						s(r, o, i)
					})
				} else n.forceRootUpdate()
			}),
			(this.triggerDependenciesUpdate = function (r, o) {
				var a = n.getDependencyChildrenFields(o)
				return (
					a.length && n.validateFields(a),
					n.notifyObservers(r, a, {
						type: 'dependenciesUpdate',
						relatedFields: [o].concat(xe(a))
					}),
					a
				)
			}),
			(this.updateValue = function (r, o) {
				var a = on(r),
					i = n.store
				n.updateStore($o(n.store, a, o)),
					n.notifyObservers(i, [a], {
						type: 'valueUpdate',
						source: 'internal'
					}),
					n.notifyWatch([a])
				var l = n.triggerDependenciesUpdate(i, a),
					s = n.callbacks.onValuesChange
				if (s) {
					var c = vy(n.store, [a])
					s(c, n.getFieldsValue())
				}
				n.triggerOnFieldsChange([a].concat(xe(l)))
			}),
			(this.setFieldsValue = function (r) {
				n.warningUnhooked()
				var o = n.store
				if (r) {
					var a = Hl(n.store, r)
					n.updateStore(a)
				}
				n.notifyObservers(o, null, { type: 'valueUpdate', source: 'external' }),
					n.notifyWatch()
			}),
			(this.setFieldValue = function (r, o) {
				n.setFields([{ name: r, value: o }])
			}),
			(this.getDependencyChildrenFields = function (r) {
				var o = new Set(),
					a = [],
					i = new Ua()
				n.getFieldEntities().forEach(function (s) {
					var c = s.props.dependencies
					;(c || []).forEach(function (f) {
						var d = on(f)
						i.update(d, function () {
							var v =
								arguments.length > 0 && arguments[0] !== void 0
									? arguments[0]
									: new Set()
							return v.add(s), v
						})
					})
				})
				var l = function s(c) {
					var f = i.get(c) || new Set()
					f.forEach(function (d) {
						if (!o.has(d)) {
							o.add(d)
							var v = d.getNamePath()
							d.isFieldDirty() && v.length && (a.push(v), s(v))
						}
					})
				}
				return l(r), a
			}),
			(this.triggerOnFieldsChange = function (r, o) {
				var a = n.callbacks.onFieldsChange
				if (a) {
					var i = n.getFields()
					if (o) {
						var l = new Ua()
						o.forEach(function (c) {
							var f = c.name,
								d = c.errors
							l.set(f, d)
						}),
							i.forEach(function (c) {
								c.errors = l.get(c.name) || c.errors
							})
					}
					var s = i.filter(function (c) {
						var f = c.name
						return zl(r, f)
					})
					a(s, i)
				}
			}),
			(this.validateFields = function (r, o) {
				n.warningUnhooked()
				var a = !!r,
					i = a ? r.map(on) : [],
					l = []
				n.getFieldEntities(!0).forEach(function (f) {
					if ((a || i.push(f.getNamePath()), o != null && o.recursive && a)) {
						var d = f.getNamePath()
						d.every(function (h, g) {
							return r[g] === h || r[g] === void 0
						}) && i.push(d)
					}
					if (!(!f.props.rules || !f.props.rules.length)) {
						var v = f.getNamePath()
						if (!a || zl(i, v)) {
							var p = f.validateRules(
								F({ validateMessages: F(F({}, BC), n.validateMessages) }, o)
							)
							l.push(
								p
									.then(function () {
										return { name: v, errors: [], warnings: [] }
									})
									.catch(function (h) {
										var g,
											b = [],
											m = []
										return (
											(g = h.forEach) === null ||
												g === void 0 ||
												g.call(h, function (y) {
													var S = y.rule.warningOnly,
														C = y.errors
													S ? m.push.apply(m, xe(C)) : b.push.apply(b, xe(C))
												}),
											b.length
												? Promise.reject({ name: v, errors: b, warnings: m })
												: { name: v, errors: b, warnings: m }
										)
									})
							)
						}
					}
				})
				var s = iO(l)
				;(n.lastValidatePromise = s),
					s
						.catch(function (f) {
							return f
						})
						.then(function (f) {
							var d = f.map(function (v) {
								var p = v.name
								return p
							})
							n.notifyObservers(n.store, d, { type: 'validateFinish' }),
								n.triggerOnFieldsChange(d, f)
						})
				var c = s
					.then(function () {
						return n.lastValidatePromise === s
							? Promise.resolve(n.getFieldsValue(i))
							: Promise.reject([])
					})
					.catch(function (f) {
						var d = f.filter(function (v) {
							return v && v.errors.length
						})
						return Promise.reject({
							values: n.getFieldsValue(i),
							errorFields: d,
							outOfDate: n.lastValidatePromise !== s
						})
					})
				return (
					c.catch(function (f) {
						return f
					}),
					c
				)
			}),
			(this.submit = function () {
				n.warningUnhooked(),
					n
						.validateFields()
						.then(function (r) {
							var o = n.callbacks.onFinish
							if (o)
								try {
									o(r)
								} catch (a) {
									console.error(a)
								}
						})
						.catch(function (r) {
							var o = n.callbacks.onFinishFailed
							o && o(r)
						})
			}),
			(this.forceRootUpdate = t)
	})
function QC(e) {
	var t = u.useRef(),
		n = u.useState({}),
		r = B(n, 2),
		o = r[1]
	if (!t.current)
		if (e) t.current = e
		else {
			var a = function () {
					o({})
				},
				i = new sO(a)
			t.current = i.getForm()
		}
	return [t.current]
}
var Ip = u.createContext({
		triggerFormChange: function () {},
		triggerFormFinish: function () {},
		registerForm: function () {},
		unregisterForm: function () {}
	}),
	ZC = function (t) {
		var n = t.validateMessages,
			r = t.onFormChange,
			o = t.onFormFinish,
			a = t.children,
			i = u.useContext(Ip),
			l = u.useRef({})
		return u.createElement(
			Ip.Provider,
			{
				value: F(
					F({}, i),
					{},
					{
						validateMessages: F(F({}, i.validateMessages), n),
						triggerFormChange: function (c, f) {
							r && r(c, { changedFields: f, forms: l.current }),
								i.triggerFormChange(c, f)
						},
						triggerFormFinish: function (c, f) {
							o && o(c, { values: f, forms: l.current }),
								i.triggerFormFinish(c, f)
						},
						registerForm: function (c, f) {
							c && (l.current = F(F({}, l.current), {}, V({}, c, f))),
								i.registerForm(c, f)
						},
						unregisterForm: function (c) {
							var f = F({}, l.current)
							delete f[c], (l.current = f), i.unregisterForm(c)
						}
					}
				)
			},
			a
		)
	},
	uO = [
		'name',
		'initialValues',
		'fields',
		'form',
		'preserve',
		'children',
		'component',
		'validateMessages',
		'validateTrigger',
		'onValuesChange',
		'onFieldsChange',
		'onFinish',
		'onFinishFailed'
	],
	cO = function (t, n) {
		var r = t.name,
			o = t.initialValues,
			a = t.fields,
			i = t.form,
			l = t.preserve,
			s = t.children,
			c = t.component,
			f = c === void 0 ? 'form' : c,
			d = t.validateMessages,
			v = t.validateTrigger,
			p = v === void 0 ? 'onChange' : v,
			h = t.onValuesChange,
			g = t.onFieldsChange,
			b = t.onFinish,
			m = t.onFinishFailed,
			y = ot(t, uO),
			S = u.useContext(Ip),
			C = QC(i),
			x = B(C, 1),
			w = x[0],
			E = w.getInternalHooks(ha),
			P = E.useSubscribe,
			N = E.setInitialValues,
			O = E.setCallbacks,
			k = E.setValidateMessages,
			I = E.setPreserve,
			$ = E.destroyForm
		u.useImperativeHandle(n, function () {
			return w
		}),
			u.useEffect(
				function () {
					return (
						S.registerForm(r, w),
						function () {
							S.unregisterForm(r)
						}
					)
				},
				[S, w, r]
			),
			k(F(F({}, S.validateMessages), d)),
			O({
				onValuesChange: h,
				onFieldsChange: function (z) {
					if ((S.triggerFormChange(r, z), g)) {
						for (
							var A = arguments.length, W = new Array(A > 1 ? A - 1 : 0), Y = 1;
							Y < A;
							Y++
						)
							W[Y - 1] = arguments[Y]
						g.apply(void 0, [z].concat(W))
					}
				},
				onFinish: function (z) {
					S.triggerFormFinish(r, z), b && b(z)
				},
				onFinishFailed: m
			}),
			I(l)
		var R = u.useRef(null)
		N(o, !R.current),
			R.current || (R.current = !0),
			u.useEffect(function () {
				return $
			}, [])
		var M,
			T = typeof s == 'function'
		if (T) {
			var _ = w.getFieldsValue(!0)
			M = s(_, w)
		} else M = s
		P(!T)
		var D = u.useRef()
		u.useEffect(
			function () {
				qM(D.current || [], a || []) || w.setFields(a || []), (D.current = a)
			},
			[a, w]
		)
		var L = u.useMemo(
				function () {
					return F(F({}, w), {}, { validateTrigger: p })
				},
				[w, p]
			),
			H = u.createElement(Li.Provider, { value: L }, M)
		return f === !1
			? H
			: u.createElement(
					f,
					se({}, y, {
						onSubmit: function (z) {
							z.preventDefault(), z.stopPropagation(), w.submit()
						},
						onReset: function (z) {
							var A
							z.preventDefault(),
								w.resetFields(),
								(A = y.onReset) === null || A === void 0 || A.call(y, z)
						}
					}),
					H
			  )
	}
function yy(e) {
	try {
		return JSON.stringify(e)
	} catch {
		return Math.random()
	}
}
function dO() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n]
	var r = t[0],
		o = r === void 0 ? [] : r,
		a = t[1],
		i = u.useState(),
		l = B(i, 2),
		s = l[0],
		c = l[1],
		f = u.useMemo(
			function () {
				return yy(s)
			},
			[s]
		),
		d = u.useRef(f)
	d.current = f
	var v = u.useContext(Li),
		p = a || v,
		h = p && p._init,
		g = on(o),
		b = u.useRef(g)
	return (
		(b.current = g),
		u.useEffect(
			function () {
				if (h) {
					var m = p.getFieldsValue,
						y = p.getInternalHooks,
						S = y(ha),
						C = S.registerWatch,
						x = C(function (E) {
							var P = Do(E, b.current),
								N = yy(P)
							d.current !== N && ((d.current = N), c(P))
						}),
						w = Do(m(), b.current)
					return c(w), x
				}
			},
			[h]
		),
		s
	)
}
var fO = u.forwardRef(cO),
	Ps = fO
Ps.FormProvider = ZC
Ps.Field = XC
Ps.List = aO
Ps.useForm = QC
Ps.useWatch = dO
const vO = {
	items_per_page: '/ page',
	jump_to: 'Go to',
	jump_to_confirm: 'confirm',
	page: 'Page',
	prev_page: 'Previous Page',
	next_page: 'Next Page',
	prev_5: 'Previous 5 Pages',
	next_5: 'Next 5 Pages',
	prev_3: 'Previous 3 Pages',
	next_3: 'Next 3 Pages',
	page_size: 'Page Size'
}
var pO = {
	locale: 'en_US',
	today: 'Today',
	now: 'Now',
	backToToday: 'Back to today',
	ok: 'OK',
	clear: 'Clear',
	month: 'Month',
	year: 'Year',
	timeSelect: 'select time',
	dateSelect: 'select date',
	weekSelect: 'Choose a week',
	monthSelect: 'Choose a month',
	yearSelect: 'Choose a year',
	decadeSelect: 'Choose a decade',
	yearFormat: 'YYYY',
	dateFormat: 'M/D/YYYY',
	dayFormat: 'D',
	dateTimeFormat: 'M/D/YYYY HH:mm:ss',
	monthBeforeYear: !0,
	previousMonth: 'Previous month (PageUp)',
	nextMonth: 'Next month (PageDown)',
	previousYear: 'Last year (Control + left)',
	nextYear: 'Next year (Control + right)',
	previousDecade: 'Last decade',
	nextDecade: 'Next decade',
	previousCentury: 'Last century',
	nextCentury: 'Next century'
}
const mO = {
		placeholder: 'Select time',
		rangePlaceholder: ['Start time', 'End time']
	},
	JC = mO,
	hO = {
		lang: Object.assign(
			{
				placeholder: 'Select date',
				yearPlaceholder: 'Select year',
				quarterPlaceholder: 'Select quarter',
				monthPlaceholder: 'Select month',
				weekPlaceholder: 'Select week',
				rangePlaceholder: ['Start date', 'End date'],
				rangeYearPlaceholder: ['Start year', 'End year'],
				rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
				rangeMonthPlaceholder: ['Start month', 'End month'],
				rangeWeekPlaceholder: ['Start week', 'End week']
			},
			pO
		),
		timePickerLocale: Object.assign({}, JC)
	},
	$c = hO,
	Qn = '${label} is not a valid ${type}',
	gO = {
		locale: 'en',
		Pagination: vO,
		DatePicker: $c,
		TimePicker: JC,
		Calendar: $c,
		global: { placeholder: 'Please select' },
		Table: {
			filterTitle: 'Filter menu',
			filterConfirm: 'OK',
			filterReset: 'Reset',
			filterEmptyText: 'No filters',
			filterCheckall: 'Select all items',
			filterSearchPlaceholder: 'Search in filters',
			emptyText: 'No data',
			selectAll: 'Select current page',
			selectInvert: 'Invert current page',
			selectNone: 'Clear all data',
			selectionAll: 'Select all data',
			sortTitle: 'Sort',
			expand: 'Expand row',
			collapse: 'Collapse row',
			triggerDesc: 'Click to sort descending',
			triggerAsc: 'Click to sort ascending',
			cancelSort: 'Click to cancel sorting'
		},
		Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
		Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
		Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
		Transfer: {
			titles: ['', ''],
			searchPlaceholder: 'Search here',
			itemUnit: 'item',
			itemsUnit: 'items',
			remove: 'Remove',
			selectCurrent: 'Select current page',
			removeCurrent: 'Remove current page',
			selectAll: 'Select all data',
			removeAll: 'Remove all data',
			selectInvert: 'Invert current page'
		},
		Upload: {
			uploading: 'Uploading...',
			removeFile: 'Remove file',
			uploadError: 'Upload error',
			previewFile: 'Preview file',
			downloadFile: 'Download file'
		},
		Empty: { description: 'No data' },
		Icon: { icon: 'icon' },
		Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
		PageHeader: { back: 'Back' },
		Form: {
			optional: '(optional)',
			defaultValidateMessages: {
				default: 'Field validation error for ${label}',
				required: 'Please enter ${label}',
				enum: '${label} must be one of [${enum}]',
				whitespace: '${label} cannot be a blank character',
				date: {
					format: '${label} date format is invalid',
					parse: '${label} cannot be converted to a date',
					invalid: '${label} is an invalid date'
				},
				types: {
					string: Qn,
					method: Qn,
					array: Qn,
					object: Qn,
					number: Qn,
					date: Qn,
					boolean: Qn,
					integer: Qn,
					float: Qn,
					regexp: Qn,
					email: Qn,
					url: Qn,
					hex: Qn
				},
				string: {
					len: '${label} must be ${len} characters',
					min: '${label} must be at least ${min} characters',
					max: '${label} must be up to ${max} characters',
					range: '${label} must be between ${min}-${max} characters'
				},
				number: {
					len: '${label} must be equal to ${len}',
					min: '${label} must be minimum ${min}',
					max: '${label} must be maximum ${max}',
					range: '${label} must be between ${min}-${max}'
				},
				array: {
					len: 'Must be ${len} ${label}',
					min: 'At least ${min} ${label}',
					max: 'At most ${max} ${label}',
					range: 'The amount of ${label} must be between ${min}-${max}'
				},
				pattern: { mismatch: '${label} does not match the pattern ${pattern}' }
			}
		},
		Image: { preview: 'Preview' },
		QRCode: { expired: 'QR code expired', refresh: 'Refresh' }
	},
	ps = gO
let Of = Object.assign({}, ps.Modal)
function by(e) {
	e
		? (Of = Object.assign(Object.assign({}, Of), e))
		: (Of = Object.assign({}, ps.Modal))
}
const yO = u.createContext(void 0),
	Ah = yO,
	bO = 'internalMark',
	SO = e => {
		const { locale: t = {}, children: n, _ANT_MARK__: r } = e
		u.useEffect(
			() => (
				by(t && t.Modal),
				() => {
					by()
				}
			),
			[t]
		)
		const o = u.useMemo(
			() => Object.assign(Object.assign({}, t), { exist: !0 }),
			[t]
		)
		return u.createElement(Ah.Provider, { value: o }, n)
	},
	CO = SO,
	wO = '5.3.1'
function Pn(e, t) {
	xO(e) && (e = '100%')
	var n = EO(e)
	return (
		(e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
		n && (e = parseInt(String(e * t), 10) / 100),
		Math.abs(e - t) < 1e-6
			? 1
			: (t === 360
					? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
					: (e = (e % t) / parseFloat(String(t))),
			  e)
	)
}
function lu(e) {
	return Math.min(1, Math.max(0, e))
}
function xO(e) {
	return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function EO(e) {
	return typeof e == 'string' && e.indexOf('%') !== -1
}
function ew(e) {
	return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function su(e) {
	return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function ya(e) {
	return e.length === 1 ? '0' + e : String(e)
}
function $O(e, t, n) {
	return { r: Pn(e, 255) * 255, g: Pn(t, 255) * 255, b: Pn(n, 255) * 255 }
}
function Sy(e, t, n) {
	;(e = Pn(e, 255)), (t = Pn(t, 255)), (n = Pn(n, 255))
	var r = Math.max(e, t, n),
		o = Math.min(e, t, n),
		a = 0,
		i = 0,
		l = (r + o) / 2
	if (r === o) (i = 0), (a = 0)
	else {
		var s = r - o
		switch (((i = l > 0.5 ? s / (2 - r - o) : s / (r + o)), r)) {
			case e:
				a = (t - n) / s + (t < n ? 6 : 0)
				break
			case t:
				a = (n - e) / s + 2
				break
			case n:
				a = (e - t) / s + 4
				break
		}
		a /= 6
	}
	return { h: a, s: i, l }
}
function Nf(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6
			? e + (t - e) * (6 * n)
			: n < 1 / 2
			? t
			: n < 2 / 3
			? e + (t - e) * (2 / 3 - n) * 6
			: e
	)
}
function PO(e, t, n) {
	var r, o, a
	if (((e = Pn(e, 360)), (t = Pn(t, 100)), (n = Pn(n, 100)), t === 0))
		(o = n), (a = n), (r = n)
	else {
		var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
			l = 2 * n - i
		;(r = Nf(l, i, e + 1 / 3)), (o = Nf(l, i, e)), (a = Nf(l, i, e - 1 / 3))
	}
	return { r: r * 255, g: o * 255, b: a * 255 }
}
function kp(e, t, n) {
	;(e = Pn(e, 255)), (t = Pn(t, 255)), (n = Pn(n, 255))
	var r = Math.max(e, t, n),
		o = Math.min(e, t, n),
		a = 0,
		i = r,
		l = r - o,
		s = r === 0 ? 0 : l / r
	if (r === o) a = 0
	else {
		switch (r) {
			case e:
				a = (t - n) / l + (t < n ? 6 : 0)
				break
			case t:
				a = (n - e) / l + 2
				break
			case n:
				a = (e - t) / l + 4
				break
		}
		a /= 6
	}
	return { h: a, s, v: i }
}
function RO(e, t, n) {
	;(e = Pn(e, 360) * 6), (t = Pn(t, 100)), (n = Pn(n, 100))
	var r = Math.floor(e),
		o = e - r,
		a = n * (1 - t),
		i = n * (1 - o * t),
		l = n * (1 - (1 - o) * t),
		s = r % 6,
		c = [n, i, a, a, l, n][s],
		f = [l, n, n, i, a, a][s],
		d = [a, a, l, n, n, i][s]
	return { r: c * 255, g: f * 255, b: d * 255 }
}
function Tp(e, t, n, r) {
	var o = [
		ya(Math.round(e).toString(16)),
		ya(Math.round(t).toString(16)),
		ya(Math.round(n).toString(16))
	]
	return r &&
		o[0].startsWith(o[0].charAt(1)) &&
		o[1].startsWith(o[1].charAt(1)) &&
		o[2].startsWith(o[2].charAt(1))
		? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
		: o.join('')
}
function MO(e, t, n, r, o) {
	var a = [
		ya(Math.round(e).toString(16)),
		ya(Math.round(t).toString(16)),
		ya(Math.round(n).toString(16)),
		ya(OO(r))
	]
	return o &&
		a[0].startsWith(a[0].charAt(1)) &&
		a[1].startsWith(a[1].charAt(1)) &&
		a[2].startsWith(a[2].charAt(1)) &&
		a[3].startsWith(a[3].charAt(1))
		? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
		: a.join('')
}
function OO(e) {
	return Math.round(parseFloat(e) * 255).toString(16)
}
function Cy(e) {
	return Zn(e) / 255
}
function Zn(e) {
	return parseInt(e, 16)
}
function NO(e) {
	return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var Dp = {
	aliceblue: '#f0f8ff',
	antiquewhite: '#faebd7',
	aqua: '#00ffff',
	aquamarine: '#7fffd4',
	azure: '#f0ffff',
	beige: '#f5f5dc',
	bisque: '#ffe4c4',
	black: '#000000',
	blanchedalmond: '#ffebcd',
	blue: '#0000ff',
	blueviolet: '#8a2be2',
	brown: '#a52a2a',
	burlywood: '#deb887',
	cadetblue: '#5f9ea0',
	chartreuse: '#7fff00',
	chocolate: '#d2691e',
	coral: '#ff7f50',
	cornflowerblue: '#6495ed',
	cornsilk: '#fff8dc',
	crimson: '#dc143c',
	cyan: '#00ffff',
	darkblue: '#00008b',
	darkcyan: '#008b8b',
	darkgoldenrod: '#b8860b',
	darkgray: '#a9a9a9',
	darkgreen: '#006400',
	darkgrey: '#a9a9a9',
	darkkhaki: '#bdb76b',
	darkmagenta: '#8b008b',
	darkolivegreen: '#556b2f',
	darkorange: '#ff8c00',
	darkorchid: '#9932cc',
	darkred: '#8b0000',
	darksalmon: '#e9967a',
	darkseagreen: '#8fbc8f',
	darkslateblue: '#483d8b',
	darkslategray: '#2f4f4f',
	darkslategrey: '#2f4f4f',
	darkturquoise: '#00ced1',
	darkviolet: '#9400d3',
	deeppink: '#ff1493',
	deepskyblue: '#00bfff',
	dimgray: '#696969',
	dimgrey: '#696969',
	dodgerblue: '#1e90ff',
	firebrick: '#b22222',
	floralwhite: '#fffaf0',
	forestgreen: '#228b22',
	fuchsia: '#ff00ff',
	gainsboro: '#dcdcdc',
	ghostwhite: '#f8f8ff',
	goldenrod: '#daa520',
	gold: '#ffd700',
	gray: '#808080',
	green: '#008000',
	greenyellow: '#adff2f',
	grey: '#808080',
	honeydew: '#f0fff0',
	hotpink: '#ff69b4',
	indianred: '#cd5c5c',
	indigo: '#4b0082',
	ivory: '#fffff0',
	khaki: '#f0e68c',
	lavenderblush: '#fff0f5',
	lavender: '#e6e6fa',
	lawngreen: '#7cfc00',
	lemonchiffon: '#fffacd',
	lightblue: '#add8e6',
	lightcoral: '#f08080',
	lightcyan: '#e0ffff',
	lightgoldenrodyellow: '#fafad2',
	lightgray: '#d3d3d3',
	lightgreen: '#90ee90',
	lightgrey: '#d3d3d3',
	lightpink: '#ffb6c1',
	lightsalmon: '#ffa07a',
	lightseagreen: '#20b2aa',
	lightskyblue: '#87cefa',
	lightslategray: '#778899',
	lightslategrey: '#778899',
	lightsteelblue: '#b0c4de',
	lightyellow: '#ffffe0',
	lime: '#00ff00',
	limegreen: '#32cd32',
	linen: '#faf0e6',
	magenta: '#ff00ff',
	maroon: '#800000',
	mediumaquamarine: '#66cdaa',
	mediumblue: '#0000cd',
	mediumorchid: '#ba55d3',
	mediumpurple: '#9370db',
	mediumseagreen: '#3cb371',
	mediumslateblue: '#7b68ee',
	mediumspringgreen: '#00fa9a',
	mediumturquoise: '#48d1cc',
	mediumvioletred: '#c71585',
	midnightblue: '#191970',
	mintcream: '#f5fffa',
	mistyrose: '#ffe4e1',
	moccasin: '#ffe4b5',
	navajowhite: '#ffdead',
	navy: '#000080',
	oldlace: '#fdf5e6',
	olive: '#808000',
	olivedrab: '#6b8e23',
	orange: '#ffa500',
	orangered: '#ff4500',
	orchid: '#da70d6',
	palegoldenrod: '#eee8aa',
	palegreen: '#98fb98',
	paleturquoise: '#afeeee',
	palevioletred: '#db7093',
	papayawhip: '#ffefd5',
	peachpuff: '#ffdab9',
	peru: '#cd853f',
	pink: '#ffc0cb',
	plum: '#dda0dd',
	powderblue: '#b0e0e6',
	purple: '#800080',
	rebeccapurple: '#663399',
	red: '#ff0000',
	rosybrown: '#bc8f8f',
	royalblue: '#4169e1',
	saddlebrown: '#8b4513',
	salmon: '#fa8072',
	sandybrown: '#f4a460',
	seagreen: '#2e8b57',
	seashell: '#fff5ee',
	sienna: '#a0522d',
	silver: '#c0c0c0',
	skyblue: '#87ceeb',
	slateblue: '#6a5acd',
	slategray: '#708090',
	slategrey: '#708090',
	snow: '#fffafa',
	springgreen: '#00ff7f',
	steelblue: '#4682b4',
	tan: '#d2b48c',
	teal: '#008080',
	thistle: '#d8bfd8',
	tomato: '#ff6347',
	turquoise: '#40e0d0',
	violet: '#ee82ee',
	wheat: '#f5deb3',
	white: '#ffffff',
	whitesmoke: '#f5f5f5',
	yellow: '#ffff00',
	yellowgreen: '#9acd32'
}
function Ja(e) {
	var t = { r: 0, g: 0, b: 0 },
		n = 1,
		r = null,
		o = null,
		a = null,
		i = !1,
		l = !1
	return (
		typeof e == 'string' && (e = TO(e)),
		typeof e == 'object' &&
			(Zr(e.r) && Zr(e.g) && Zr(e.b)
				? ((t = $O(e.r, e.g, e.b)),
				  (i = !0),
				  (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
				: Zr(e.h) && Zr(e.s) && Zr(e.v)
				? ((r = su(e.s)),
				  (o = su(e.v)),
				  (t = RO(e.h, r, o)),
				  (i = !0),
				  (l = 'hsv'))
				: Zr(e.h) &&
				  Zr(e.s) &&
				  Zr(e.l) &&
				  ((r = su(e.s)),
				  (a = su(e.l)),
				  (t = PO(e.h, r, a)),
				  (i = !0),
				  (l = 'hsl')),
			Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
		(n = ew(n)),
		{
			ok: i,
			format: e.format || l,
			r: Math.min(255, Math.max(t.r, 0)),
			g: Math.min(255, Math.max(t.g, 0)),
			b: Math.min(255, Math.max(t.b, 0)),
			a: n
		}
	)
}
var IO = '[-\\+]?\\d+%?',
	kO = '[-\\+]?\\d*\\.\\d+%?',
	_o = '(?:'.concat(kO, ')|(?:').concat(IO, ')'),
	If = '[\\s|\\(]+('
		.concat(_o, ')[,|\\s]+(')
		.concat(_o, ')[,|\\s]+(')
		.concat(_o, ')\\s*\\)?'),
	kf = '[\\s|\\(]+('
		.concat(_o, ')[,|\\s]+(')
		.concat(_o, ')[,|\\s]+(')
		.concat(_o, ')[,|\\s]+(')
		.concat(_o, ')\\s*\\)?'),
	xr = {
		CSS_UNIT: new RegExp(_o),
		rgb: new RegExp('rgb' + If),
		rgba: new RegExp('rgba' + kf),
		hsl: new RegExp('hsl' + If),
		hsla: new RegExp('hsla' + kf),
		hsv: new RegExp('hsv' + If),
		hsva: new RegExp('hsva' + kf),
		hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
	}
function TO(e) {
	if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
	var t = !1
	if (Dp[e]) (e = Dp[e]), (t = !0)
	else if (e === 'transparent')
		return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
	var n = xr.rgb.exec(e)
	return n
		? { r: n[1], g: n[2], b: n[3] }
		: ((n = xr.rgba.exec(e)),
		  n
				? { r: n[1], g: n[2], b: n[3], a: n[4] }
				: ((n = xr.hsl.exec(e)),
				  n
						? { h: n[1], s: n[2], l: n[3] }
						: ((n = xr.hsla.exec(e)),
						  n
								? { h: n[1], s: n[2], l: n[3], a: n[4] }
								: ((n = xr.hsv.exec(e)),
								  n
										? { h: n[1], s: n[2], v: n[3] }
										: ((n = xr.hsva.exec(e)),
										  n
												? { h: n[1], s: n[2], v: n[3], a: n[4] }
												: ((n = xr.hex8.exec(e)),
												  n
														? {
																r: Zn(n[1]),
																g: Zn(n[2]),
																b: Zn(n[3]),
																a: Cy(n[4]),
																format: t ? 'name' : 'hex8'
														  }
														: ((n = xr.hex6.exec(e)),
														  n
																? {
																		r: Zn(n[1]),
																		g: Zn(n[2]),
																		b: Zn(n[3]),
																		format: t ? 'name' : 'hex'
																  }
																: ((n = xr.hex4.exec(e)),
																  n
																		? {
																				r: Zn(n[1] + n[1]),
																				g: Zn(n[2] + n[2]),
																				b: Zn(n[3] + n[3]),
																				a: Cy(n[4] + n[4]),
																				format: t ? 'name' : 'hex8'
																		  }
																		: ((n = xr.hex3.exec(e)),
																		  n
																				? {
																						r: Zn(n[1] + n[1]),
																						g: Zn(n[2] + n[2]),
																						b: Zn(n[3] + n[3]),
																						format: t ? 'name' : 'hex'
																				  }
																				: !1)))))))))
}
function Zr(e) {
	return Boolean(xr.CSS_UNIT.exec(String(e)))
}
var ln = (function () {
		function e(t, n) {
			t === void 0 && (t = ''), n === void 0 && (n = {})
			var r
			if (t instanceof e) return t
			typeof t == 'number' && (t = NO(t)), (this.originalInput = t)
			var o = Ja(t)
			;(this.originalInput = t),
				(this.r = o.r),
				(this.g = o.g),
				(this.b = o.b),
				(this.a = o.a),
				(this.roundA = Math.round(100 * this.a) / 100),
				(this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
				(this.gradientType = n.gradientType),
				this.r < 1 && (this.r = Math.round(this.r)),
				this.g < 1 && (this.g = Math.round(this.g)),
				this.b < 1 && (this.b = Math.round(this.b)),
				(this.isValid = o.ok)
		}
		return (
			(e.prototype.isDark = function () {
				return this.getBrightness() < 128
			}),
			(e.prototype.isLight = function () {
				return !this.isDark()
			}),
			(e.prototype.getBrightness = function () {
				var t = this.toRgb()
				return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
			}),
			(e.prototype.getLuminance = function () {
				var t = this.toRgb(),
					n,
					r,
					o,
					a = t.r / 255,
					i = t.g / 255,
					l = t.b / 255
				return (
					a <= 0.03928
						? (n = a / 12.92)
						: (n = Math.pow((a + 0.055) / 1.055, 2.4)),
					i <= 0.03928
						? (r = i / 12.92)
						: (r = Math.pow((i + 0.055) / 1.055, 2.4)),
					l <= 0.03928
						? (o = l / 12.92)
						: (o = Math.pow((l + 0.055) / 1.055, 2.4)),
					0.2126 * n + 0.7152 * r + 0.0722 * o
				)
			}),
			(e.prototype.getAlpha = function () {
				return this.a
			}),
			(e.prototype.setAlpha = function (t) {
				return (
					(this.a = ew(t)), (this.roundA = Math.round(100 * this.a) / 100), this
				)
			}),
			(e.prototype.isMonochrome = function () {
				var t = this.toHsl().s
				return t === 0
			}),
			(e.prototype.toHsv = function () {
				var t = kp(this.r, this.g, this.b)
				return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
			}),
			(e.prototype.toHsvString = function () {
				var t = kp(this.r, this.g, this.b),
					n = Math.round(t.h * 360),
					r = Math.round(t.s * 100),
					o = Math.round(t.v * 100)
				return this.a === 1
					? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
					: 'hsva('
							.concat(n, ', ')
							.concat(r, '%, ')
							.concat(o, '%, ')
							.concat(this.roundA, ')')
			}),
			(e.prototype.toHsl = function () {
				var t = Sy(this.r, this.g, this.b)
				return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
			}),
			(e.prototype.toHslString = function () {
				var t = Sy(this.r, this.g, this.b),
					n = Math.round(t.h * 360),
					r = Math.round(t.s * 100),
					o = Math.round(t.l * 100)
				return this.a === 1
					? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
					: 'hsla('
							.concat(n, ', ')
							.concat(r, '%, ')
							.concat(o, '%, ')
							.concat(this.roundA, ')')
			}),
			(e.prototype.toHex = function (t) {
				return t === void 0 && (t = !1), Tp(this.r, this.g, this.b, t)
			}),
			(e.prototype.toHexString = function (t) {
				return t === void 0 && (t = !1), '#' + this.toHex(t)
			}),
			(e.prototype.toHex8 = function (t) {
				return t === void 0 && (t = !1), MO(this.r, this.g, this.b, this.a, t)
			}),
			(e.prototype.toHex8String = function (t) {
				return t === void 0 && (t = !1), '#' + this.toHex8(t)
			}),
			(e.prototype.toHexShortString = function (t) {
				return (
					t === void 0 && (t = !1),
					this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
				)
			}),
			(e.prototype.toRgb = function () {
				return {
					r: Math.round(this.r),
					g: Math.round(this.g),
					b: Math.round(this.b),
					a: this.a
				}
			}),
			(e.prototype.toRgbString = function () {
				var t = Math.round(this.r),
					n = Math.round(this.g),
					r = Math.round(this.b)
				return this.a === 1
					? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
					: 'rgba('
							.concat(t, ', ')
							.concat(n, ', ')
							.concat(r, ', ')
							.concat(this.roundA, ')')
			}),
			(e.prototype.toPercentageRgb = function () {
				var t = function (n) {
					return ''.concat(Math.round(Pn(n, 255) * 100), '%')
				}
				return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
			}),
			(e.prototype.toPercentageRgbString = function () {
				var t = function (n) {
					return Math.round(Pn(n, 255) * 100)
				}
				return this.a === 1
					? 'rgb('
							.concat(t(this.r), '%, ')
							.concat(t(this.g), '%, ')
							.concat(t(this.b), '%)')
					: 'rgba('
							.concat(t(this.r), '%, ')
							.concat(t(this.g), '%, ')
							.concat(t(this.b), '%, ')
							.concat(this.roundA, ')')
			}),
			(e.prototype.toName = function () {
				if (this.a === 0) return 'transparent'
				if (this.a < 1) return !1
				for (
					var t = '#' + Tp(this.r, this.g, this.b, !1),
						n = 0,
						r = Object.entries(Dp);
					n < r.length;
					n++
				) {
					var o = r[n],
						a = o[0],
						i = o[1]
					if (t === i) return a
				}
				return !1
			}),
			(e.prototype.toString = function (t) {
				var n = Boolean(t)
				t = t ?? this.format
				var r = !1,
					o = this.a < 1 && this.a >= 0,
					a = !n && o && (t.startsWith('hex') || t === 'name')
				return a
					? t === 'name' && this.a === 0
						? this.toName()
						: this.toRgbString()
					: (t === 'rgb' && (r = this.toRgbString()),
					  t === 'prgb' && (r = this.toPercentageRgbString()),
					  (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
					  t === 'hex3' && (r = this.toHexString(!0)),
					  t === 'hex4' && (r = this.toHex8String(!0)),
					  t === 'hex8' && (r = this.toHex8String()),
					  t === 'name' && (r = this.toName()),
					  t === 'hsl' && (r = this.toHslString()),
					  t === 'hsv' && (r = this.toHsvString()),
					  r || this.toHexString())
			}),
			(e.prototype.toNumber = function () {
				return (
					(Math.round(this.r) << 16) +
					(Math.round(this.g) << 8) +
					Math.round(this.b)
				)
			}),
			(e.prototype.clone = function () {
				return new e(this.toString())
			}),
			(e.prototype.lighten = function (t) {
				t === void 0 && (t = 10)
				var n = this.toHsl()
				return (n.l += t / 100), (n.l = lu(n.l)), new e(n)
			}),
			(e.prototype.brighten = function (t) {
				t === void 0 && (t = 10)
				var n = this.toRgb()
				return (
					(n.r = Math.max(
						0,
						Math.min(255, n.r - Math.round(255 * -(t / 100)))
					)),
					(n.g = Math.max(
						0,
						Math.min(255, n.g - Math.round(255 * -(t / 100)))
					)),
					(n.b = Math.max(
						0,
						Math.min(255, n.b - Math.round(255 * -(t / 100)))
					)),
					new e(n)
				)
			}),
			(e.prototype.darken = function (t) {
				t === void 0 && (t = 10)
				var n = this.toHsl()
				return (n.l -= t / 100), (n.l = lu(n.l)), new e(n)
			}),
			(e.prototype.tint = function (t) {
				return t === void 0 && (t = 10), this.mix('white', t)
			}),
			(e.prototype.shade = function (t) {
				return t === void 0 && (t = 10), this.mix('black', t)
			}),
			(e.prototype.desaturate = function (t) {
				t === void 0 && (t = 10)
				var n = this.toHsl()
				return (n.s -= t / 100), (n.s = lu(n.s)), new e(n)
			}),
			(e.prototype.saturate = function (t) {
				t === void 0 && (t = 10)
				var n = this.toHsl()
				return (n.s += t / 100), (n.s = lu(n.s)), new e(n)
			}),
			(e.prototype.greyscale = function () {
				return this.desaturate(100)
			}),
			(e.prototype.spin = function (t) {
				var n = this.toHsl(),
					r = (n.h + t) % 360
				return (n.h = r < 0 ? 360 + r : r), new e(n)
			}),
			(e.prototype.mix = function (t, n) {
				n === void 0 && (n = 50)
				var r = this.toRgb(),
					o = new e(t).toRgb(),
					a = n / 100,
					i = {
						r: (o.r - r.r) * a + r.r,
						g: (o.g - r.g) * a + r.g,
						b: (o.b - r.b) * a + r.b,
						a: (o.a - r.a) * a + r.a
					}
				return new e(i)
			}),
			(e.prototype.analogous = function (t, n) {
				t === void 0 && (t = 6), n === void 0 && (n = 30)
				var r = this.toHsl(),
					o = 360 / n,
					a = [this]
				for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
					(r.h = (r.h + o) % 360), a.push(new e(r))
				return a
			}),
			(e.prototype.complement = function () {
				var t = this.toHsl()
				return (t.h = (t.h + 180) % 360), new e(t)
			}),
			(e.prototype.monochromatic = function (t) {
				t === void 0 && (t = 6)
				for (
					var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t;
					t--;

				)
					i.push(new e({ h: r, s: o, v: a })), (a = (a + l) % 1)
				return i
			}),
			(e.prototype.splitcomplement = function () {
				var t = this.toHsl(),
					n = t.h
				return [
					this,
					new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
					new e({ h: (n + 216) % 360, s: t.s, l: t.l })
				]
			}),
			(e.prototype.onBackground = function (t) {
				var n = this.toRgb(),
					r = new e(t).toRgb(),
					o = n.a + r.a * (1 - n.a)
				return new e({
					r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
					g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
					b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
					a: o
				})
			}),
			(e.prototype.triad = function () {
				return this.polyad(3)
			}),
			(e.prototype.tetrad = function () {
				return this.polyad(4)
			}),
			(e.prototype.polyad = function (t) {
				for (
					var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1;
					i < t;
					i++
				)
					o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }))
				return o
			}),
			(e.prototype.equals = function (t) {
				return this.toRgbString() === new e(t).toRgbString()
			}),
			e
		)
	})(),
	uu = 2,
	wy = 0.16,
	DO = 0.05,
	_O = 0.05,
	LO = 0.15,
	tw = 5,
	nw = 4,
	AO = [
		{ index: 7, opacity: 0.15 },
		{ index: 6, opacity: 0.25 },
		{ index: 5, opacity: 0.3 },
		{ index: 5, opacity: 0.45 },
		{ index: 5, opacity: 0.65 },
		{ index: 5, opacity: 0.85 },
		{ index: 4, opacity: 0.9 },
		{ index: 3, opacity: 0.95 },
		{ index: 2, opacity: 0.97 },
		{ index: 1, opacity: 0.98 }
	]
function xy(e) {
	var t = e.r,
		n = e.g,
		r = e.b,
		o = kp(t, n, r)
	return { h: o.h * 360, s: o.s, v: o.v }
}
function cu(e) {
	var t = e.r,
		n = e.g,
		r = e.b
	return '#'.concat(Tp(t, n, r, !1))
}
function FO(e, t, n) {
	var r = n / 100,
		o = {
			r: (t.r - e.r) * r + e.r,
			g: (t.g - e.g) * r + e.g,
			b: (t.b - e.b) * r + e.b
		}
	return o
}
function Ey(e, t, n) {
	var r
	return (
		Math.round(e.h) >= 60 && Math.round(e.h) <= 240
			? (r = n ? Math.round(e.h) - uu * t : Math.round(e.h) + uu * t)
			: (r = n ? Math.round(e.h) + uu * t : Math.round(e.h) - uu * t),
		r < 0 ? (r += 360) : r >= 360 && (r -= 360),
		r
	)
}
function $y(e, t, n) {
	if (e.h === 0 && e.s === 0) return e.s
	var r
	return (
		n ? (r = e.s - wy * t) : t === nw ? (r = e.s + wy) : (r = e.s + DO * t),
		r > 1 && (r = 1),
		n && t === tw && r > 0.1 && (r = 0.1),
		r < 0.06 && (r = 0.06),
		Number(r.toFixed(2))
	)
}
function Py(e, t, n) {
	var r
	return (
		n ? (r = e.v + _O * t) : (r = e.v - LO * t),
		r > 1 && (r = 1),
		Number(r.toFixed(2))
	)
}
function Na(e) {
	for (
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			n = [],
			r = Ja(e),
			o = tw;
		o > 0;
		o -= 1
	) {
		var a = xy(r),
			i = cu(Ja({ h: Ey(a, o, !0), s: $y(a, o, !0), v: Py(a, o, !0) }))
		n.push(i)
	}
	n.push(cu(r))
	for (var l = 1; l <= nw; l += 1) {
		var s = xy(r),
			c = cu(Ja({ h: Ey(s, l), s: $y(s, l), v: Py(s, l) }))
		n.push(c)
	}
	return t.theme === 'dark'
		? AO.map(function (f) {
				var d = f.index,
					v = f.opacity,
					p = cu(FO(Ja(t.backgroundColor || '#141414'), Ja(n[d]), v * 100))
				return p
		  })
		: n
}
var Tf = {
		red: '#F5222D',
		volcano: '#FA541C',
		orange: '#FA8C16',
		gold: '#FAAD14',
		yellow: '#FADB14',
		lime: '#A0D911',
		green: '#52C41A',
		cyan: '#13C2C2',
		blue: '#1677FF',
		geekblue: '#2F54EB',
		purple: '#722ED1',
		magenta: '#EB2F96',
		grey: '#666666'
	},
	Df = {},
	_f = {}
Object.keys(Tf).forEach(function (e) {
	;(Df[e] = Na(Tf[e])),
		(Df[e].primary = Df[e][5]),
		(_f[e] = Na(Tf[e], { theme: 'dark', backgroundColor: '#141414' })),
		(_f[e].primary = _f[e][5])
})
const zO = e => {
		const { controlHeight: t } = e
		return {
			controlHeightSM: t * 0.75,
			controlHeightXS: t * 0.5,
			controlHeightLG: t * 1.25
		}
	},
	HO = zO
function VO(e) {
	const { sizeUnit: t, sizeStep: n } = e
	return {
		sizeXXL: t * (n + 8),
		sizeXL: t * (n + 4),
		sizeLG: t * (n + 2),
		sizeMD: t * (n + 1),
		sizeMS: t * n,
		size: t * n,
		sizeSM: t * (n - 1),
		sizeXS: t * (n - 2),
		sizeXXS: t * (n - 3)
	}
}
const rw = {
		blue: '#1677ff',
		purple: '#722ED1',
		cyan: '#13C2C2',
		green: '#52C41A',
		magenta: '#EB2F96',
		pink: '#eb2f96',
		red: '#F5222D',
		orange: '#FA8C16',
		yellow: '#FADB14',
		volcano: '#FA541C',
		geekblue: '#2F54EB',
		gold: '#FAAD14',
		lime: '#A0D911'
	},
	jO = Object.assign(Object.assign({}, rw), {
		colorPrimary: '#1677ff',
		colorSuccess: '#52c41a',
		colorWarning: '#faad14',
		colorError: '#ff4d4f',
		colorInfo: '#1677ff',
		colorTextBase: '',
		colorBgBase: '',
		fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
		fontFamilyCode:
			"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
		fontSize: 14,
		lineWidth: 1,
		lineType: 'solid',
		motionUnit: 0.1,
		motionBase: 0,
		motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
		motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
		motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
		motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
		motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
		motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
		borderRadius: 6,
		sizeUnit: 4,
		sizeStep: 4,
		sizePopupArrow: 16,
		controlHeight: 32,
		zIndexBase: 0,
		zIndexPopupBase: 1e3,
		opacityImage: 1,
		wireframe: !1
	}),
	Sd = jO
function BO(e, t) {
	let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t
	const {
			colorSuccess: o,
			colorWarning: a,
			colorError: i,
			colorInfo: l,
			colorPrimary: s,
			colorBgBase: c,
			colorTextBase: f
		} = e,
		d = n(s),
		v = n(o),
		p = n(a),
		h = n(i),
		g = n(l),
		b = r(c, f)
	return Object.assign(Object.assign({}, b), {
		colorPrimaryBg: d[1],
		colorPrimaryBgHover: d[2],
		colorPrimaryBorder: d[3],
		colorPrimaryBorderHover: d[4],
		colorPrimaryHover: d[5],
		colorPrimary: d[6],
		colorPrimaryActive: d[7],
		colorPrimaryTextHover: d[8],
		colorPrimaryText: d[9],
		colorPrimaryTextActive: d[10],
		colorSuccessBg: v[1],
		colorSuccessBgHover: v[2],
		colorSuccessBorder: v[3],
		colorSuccessBorderHover: v[4],
		colorSuccessHover: v[4],
		colorSuccess: v[6],
		colorSuccessActive: v[7],
		colorSuccessTextHover: v[8],
		colorSuccessText: v[9],
		colorSuccessTextActive: v[10],
		colorErrorBg: h[1],
		colorErrorBgHover: h[2],
		colorErrorBorder: h[3],
		colorErrorBorderHover: h[4],
		colorErrorHover: h[5],
		colorError: h[6],
		colorErrorActive: h[7],
		colorErrorTextHover: h[8],
		colorErrorText: h[9],
		colorErrorTextActive: h[10],
		colorWarningBg: p[1],
		colorWarningBgHover: p[2],
		colorWarningBorder: p[3],
		colorWarningBorderHover: p[4],
		colorWarningHover: p[4],
		colorWarning: p[6],
		colorWarningActive: p[7],
		colorWarningTextHover: p[8],
		colorWarningText: p[9],
		colorWarningTextActive: p[10],
		colorInfoBg: g[1],
		colorInfoBgHover: g[2],
		colorInfoBorder: g[3],
		colorInfoBorderHover: g[4],
		colorInfoHover: g[4],
		colorInfo: g[6],
		colorInfoActive: g[7],
		colorInfoTextHover: g[8],
		colorInfoText: g[9],
		colorInfoTextActive: g[10],
		colorBgMask: new ln('#000').setAlpha(0.45).toRgbString(),
		colorWhite: '#fff'
	})
}
const WO = e => {
		let t = e,
			n = e,
			r = e,
			o = e
		return (
			e < 6 && e >= 5
				? (t = e + 1)
				: e < 16 && e >= 6
				? (t = e + 2)
				: e >= 16 && (t = 16),
			e < 7 && e >= 5
				? (n = 4)
				: e < 8 && e >= 7
				? (n = 5)
				: e < 14 && e >= 8
				? (n = 6)
				: e < 16 && e >= 14
				? (n = 7)
				: e >= 16 && (n = 8),
			e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
			e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
			{
				borderRadius: e > 16 ? 16 : e,
				borderRadiusXS: r,
				borderRadiusSM: n,
				borderRadiusLG: t,
				borderRadiusOuter: o
			}
		)
	},
	UO = WO
function YO(e) {
	const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e
	return Object.assign(
		{
			motionDurationFast: `${(n + t).toFixed(1)}s`,
			motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
			motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
			lineWidthBold: o + 1
		},
		UO(r)
	)
}
const Jr = (e, t) => new ln(e).setAlpha(t).toRgbString(),
	fl = (e, t) => new ln(e).darken(t).toHexString(),
	KO = e => {
		const t = Na(e)
		return {
			1: t[0],
			2: t[1],
			3: t[2],
			4: t[3],
			5: t[4],
			6: t[5],
			7: t[6],
			8: t[4],
			9: t[5],
			10: t[6]
		}
	},
	GO = (e, t) => {
		const n = e || '#fff',
			r = t || '#000'
		return {
			colorBgBase: n,
			colorTextBase: r,
			colorText: Jr(r, 0.88),
			colorTextSecondary: Jr(r, 0.65),
			colorTextTertiary: Jr(r, 0.45),
			colorTextQuaternary: Jr(r, 0.25),
			colorFill: Jr(r, 0.15),
			colorFillSecondary: Jr(r, 0.06),
			colorFillTertiary: Jr(r, 0.04),
			colorFillQuaternary: Jr(r, 0.02),
			colorBgLayout: fl(n, 4),
			colorBgContainer: fl(n, 0),
			colorBgElevated: fl(n, 0),
			colorBgSpotlight: Jr(r, 0.85),
			colorBorder: fl(n, 15),
			colorBorderSecondary: fl(n, 6)
		}
	}
function XO(e) {
	const t = new Array(10).fill(null).map((n, r) => {
		const o = r - 1,
			a = e * Math.pow(2.71828, o / 5),
			i = r > 1 ? Math.floor(a) : Math.ceil(a)
		return Math.floor(i / 2) * 2
	})
	return (
		(t[1] = e),
		t.map(n => {
			const r = n + 8
			return { size: n, lineHeight: r / n }
		})
	)
}
const qO = e => {
		const t = XO(e),
			n = t.map(o => o.size),
			r = t.map(o => o.lineHeight)
		return {
			fontSizeSM: n[0],
			fontSize: n[1],
			fontSizeLG: n[2],
			fontSizeXL: n[3],
			fontSizeHeading1: n[6],
			fontSizeHeading2: n[5],
			fontSizeHeading3: n[4],
			fontSizeHeading4: n[3],
			fontSizeHeading5: n[2],
			lineHeight: r[1],
			lineHeightLG: r[2],
			lineHeightSM: r[0],
			lineHeightHeading1: r[6],
			lineHeightHeading2: r[5],
			lineHeightHeading3: r[4],
			lineHeightHeading4: r[3],
			lineHeightHeading5: r[2]
		}
	},
	QO = qO
function ZO(e) {
	const t = Object.keys(rw)
		.map(n => {
			const r = Na(e[n])
			return new Array(10)
				.fill(1)
				.reduce(
					(o, a, i) => (
						(o[`${n}-${i + 1}`] = r[i]), (o[`${n}${i + 1}`] = r[i]), o
					),
					{}
				)
		})
		.reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {})
	return Object.assign(
		Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(
						Object.assign(Object.assign({}, e), t),
						BO(e, {
							generateColorPalettes: KO,
							generateNeutralColorPalettes: GO
						})
					),
					QO(e.fontSize)
				),
				VO(e)
			),
			HO(e)
		),
		YO(e)
	)
}
function Lf(e) {
	return e >= 0 && e <= 255
}
function du(e, t) {
	const { r: n, g: r, b: o, a } = new ln(e).toRgb()
	if (a < 1) return e
	const { r: i, g: l, b: s } = new ln(t).toRgb()
	for (let c = 0.01; c <= 1; c += 0.01) {
		const f = Math.round((n - i * (1 - c)) / c),
			d = Math.round((r - l * (1 - c)) / c),
			v = Math.round((o - s * (1 - c)) / c)
		if (Lf(f) && Lf(d) && Lf(v))
			return new ln({
				r: f,
				g: d,
				b: v,
				a: Math.round(c * 100) / 100
			}).toRgbString()
	}
	return new ln({ r: n, g: r, b: o, a: 1 }).toRgbString()
}
var JO =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
function eN(e) {
	const { override: t } = e,
		n = JO(e, ['override']),
		r = Object.assign({}, t)
	Object.keys(Sd).forEach(v => {
		delete r[v]
	})
	const o = Object.assign(Object.assign({}, n), r),
		a = 480,
		i = 576,
		l = 768,
		s = 992,
		c = 1200,
		f = 1600
	return Object.assign(
		Object.assign(Object.assign({}, o), {
			colorLink: o.colorInfoText,
			colorLinkHover: o.colorInfoHover,
			colorLinkActive: o.colorInfoActive,
			colorFillContent: o.colorFillSecondary,
			colorFillContentHover: o.colorFill,
			colorFillAlter: o.colorFillQuaternary,
			colorBgContainerDisabled: o.colorFillTertiary,
			colorBorderBg: o.colorBgContainer,
			colorSplit: du(o.colorBorderSecondary, o.colorBgContainer),
			colorTextPlaceholder: o.colorTextQuaternary,
			colorTextDisabled: o.colorTextQuaternary,
			colorTextHeading: o.colorText,
			colorTextLabel: o.colorTextSecondary,
			colorTextDescription: o.colorTextTertiary,
			colorTextLightSolid: o.colorWhite,
			colorHighlight: o.colorError,
			colorBgTextHover: o.colorFillSecondary,
			colorBgTextActive: o.colorFill,
			colorIcon: o.colorTextTertiary,
			colorIconHover: o.colorText,
			colorErrorOutline: du(o.colorErrorBg, o.colorBgContainer),
			colorWarningOutline: du(o.colorWarningBg, o.colorBgContainer),
			fontSizeIcon: o.fontSizeSM,
			lineWidthFocus: o.lineWidth * 4,
			lineWidth: o.lineWidth,
			controlOutlineWidth: o.lineWidth * 2,
			controlInteractiveSize: o.controlHeight / 2,
			controlItemBgHover: o.colorFillTertiary,
			controlItemBgActive: o.colorPrimaryBg,
			controlItemBgActiveHover: o.colorPrimaryBgHover,
			controlItemBgActiveDisabled: o.colorFill,
			controlTmpOutline: o.colorFillQuaternary,
			controlOutline: du(o.colorPrimaryBg, o.colorBgContainer),
			lineType: o.lineType,
			borderRadius: o.borderRadius,
			borderRadiusXS: o.borderRadiusXS,
			borderRadiusSM: o.borderRadiusSM,
			borderRadiusLG: o.borderRadiusLG,
			fontWeightStrong: 600,
			opacityLoading: 0.65,
			linkDecoration: 'none',
			linkHoverDecoration: 'none',
			linkFocusDecoration: 'none',
			controlPaddingHorizontal: 12,
			controlPaddingHorizontalSM: 8,
			paddingXXS: o.sizeXXS,
			paddingXS: o.sizeXS,
			paddingSM: o.sizeSM,
			padding: o.size,
			paddingMD: o.sizeMD,
			paddingLG: o.sizeLG,
			paddingXL: o.sizeXL,
			paddingContentHorizontalLG: o.sizeLG,
			paddingContentVerticalLG: o.sizeMS,
			paddingContentHorizontal: o.sizeMS,
			paddingContentVertical: o.sizeSM,
			paddingContentHorizontalSM: o.size,
			paddingContentVerticalSM: o.sizeXS,
			marginXXS: o.sizeXXS,
			marginXS: o.sizeXS,
			marginSM: o.sizeSM,
			margin: o.size,
			marginMD: o.sizeMD,
			marginLG: o.sizeLG,
			marginXL: o.sizeXL,
			marginXXL: o.sizeXXL,
			boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
			screenXS: a,
			screenXSMin: a,
			screenXSMax: i - 1,
			screenSM: i,
			screenSMMin: i,
			screenSMMax: l - 1,
			screenMD: l,
			screenMDMin: l,
			screenMDMax: s - 1,
			screenLG: s,
			screenLGMin: s,
			screenLGMax: c - 1,
			screenXL: c,
			screenXLMin: c,
			screenXLMax: f - 1,
			screenXXL: f,
			screenXXLMin: f,
			boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
			boxShadowCard: `
      0 1px 2px -2px ${new ln('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new ln('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new ln('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
			boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
			boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
			boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
			boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
		}),
		r
	)
}
const tN = (e, t, n, r, o) => {
		const a = e / 2,
			i = 0,
			l = a,
			s = (n * 1) / Math.sqrt(2),
			c = a - n * (1 - 1 / Math.sqrt(2)),
			f = a - t * (1 / Math.sqrt(2)),
			d = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
			v = 2 * a - f,
			p = d,
			h = 2 * a - s,
			g = c,
			b = 2 * a - i,
			m = l,
			y = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2)
		return {
			pointerEvents: 'none',
			width: e,
			height: e,
			overflow: 'hidden',
			'&::before': {
				position: 'absolute',
				bottom: 0,
				insetInlineStart: 0,
				width: e,
				height: e / 2,
				background: r,
				clipPath: `path('M ${i} ${l} A ${n} ${n} 0 0 0 ${s} ${c} L ${f} ${d} A ${t} ${t} 0 0 1 ${v} ${p} L ${h} ${g} A ${n} ${n} 0 0 0 ${b} ${m} Z')`,
				content: '""'
			},
			'&::after': {
				content: '""',
				position: 'absolute',
				width: y,
				height: y,
				bottom: 0,
				insetInline: 0,
				margin: 'auto',
				borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
				transform: 'translateY(50%) rotate(-135deg)',
				boxShadow: o,
				zIndex: 0,
				background: 'transparent'
			}
		}
	},
	wa = { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
	po = e => ({
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
		color: e.colorText,
		fontSize: e.fontSize,
		lineHeight: e.lineHeight,
		listStyle: 'none',
		fontFamily: e.fontFamily
	}),
	Fh = () => ({
		display: 'inline-flex',
		alignItems: 'center',
		color: 'inherit',
		fontStyle: 'normal',
		lineHeight: 0,
		textAlign: 'center',
		textTransform: 'none',
		verticalAlign: '-0.125em',
		textRendering: 'optimizeLegibility',
		'-webkit-font-smoothing': 'antialiased',
		'-moz-osx-font-smoothing': 'grayscale',
		'> *': { lineHeight: 1 },
		svg: { display: 'inline-block' }
	}),
	nN = () => ({
		'&::before': { display: 'table', content: '""' },
		'&::after': { display: 'table', clear: 'both', content: '""' }
	}),
	rN = e => ({
		a: {
			color: e.colorLink,
			textDecoration: e.linkDecoration,
			backgroundColor: 'transparent',
			outline: 'none',
			cursor: 'pointer',
			transition: `color ${e.motionDurationSlow}`,
			'-webkit-text-decoration-skip': 'objects',
			'&:hover': { color: e.colorLinkHover },
			'&:active': { color: e.colorLinkActive },
			[`&:active,
  &:hover`]: { textDecoration: e.linkHoverDecoration, outline: 0 },
			'&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
			'&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' }
		}
	}),
	oN = (e, t) => {
		const { fontFamily: n, fontSize: r } = e,
			o = `[class^="${t}"], [class*=" ${t}"]`
		return {
			[o]: {
				fontFamily: n,
				fontSize: r,
				boxSizing: 'border-box',
				'&::before, &::after': { boxSizing: 'border-box' },
				[o]: {
					boxSizing: 'border-box',
					'&::before, &::after': { boxSizing: 'border-box' }
				}
			}
		}
	},
	aN = e => ({
		outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
		outlineOffset: 1,
		transition: 'outline-offset 0s, outline 0s'
	}),
	zh = e => ({ '&:focus-visible': Object.assign({}, aN(e)) }),
	ow = 'anticon',
	iN = (e, t) => t || (e ? `ant-${e}` : 'ant'),
	kt = u.createContext({ getPrefixCls: iN, iconPrefixCls: ow })
function So(e, t, n) {
	return r => {
		const [o, a, i] = Rs(),
			{ getPrefixCls: l, iconPrefixCls: s } = u.useContext(kt),
			c = l()
		return (
			Sp({ theme: o, token: a, hashId: i, path: ['Shared', c] }, () => [
				{ '&': rN(a) }
			]),
			[
				Sp({ theme: o, token: a, hashId: i, path: [e, r, s] }, () => {
					const { token: f, flush: d } = sN(a),
						v = typeof n == 'function' ? n(f) : n,
						p = Object.assign(Object.assign({}, v), a[e]),
						h = `.${r}`,
						g = Zt(
							f,
							{
								componentCls: h,
								prefixCls: r,
								iconCls: `.${s}`,
								antCls: `.${c}`
							},
							p
						),
						b = t(g, {
							hashId: i,
							prefixCls: r,
							rootPrefixCls: c,
							iconPrefixCls: s,
							overrideComponentToken: a[e]
						})
					return d(e, p), [oN(a, r), b]
				}),
				i
			]
		)
	}
}
const aw = typeof CSSINJS_STATISTIC < 'u'
let _p = !0
function Zt() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n]
	if (!aw) return Object.assign.apply(Object, [{}].concat(t))
	_p = !1
	const r = {}
	return (
		t.forEach(o => {
			Object.keys(o).forEach(i => {
				Object.defineProperty(r, i, {
					configurable: !0,
					enumerable: !0,
					get: () => o[i]
				})
			})
		}),
		(_p = !0),
		r
	)
}
function lN() {}
function sN(e) {
	let t,
		n = e,
		r = lN
	return (
		aw &&
			((t = new Set()),
			(n = new Proxy(e, {
				get(o, a) {
					return _p && t.add(a), o[a]
				}
			})),
			(r = (o, a) => {
				Array.from(t)
			})),
		{ token: n, keys: t, flush: r }
	)
}
const uN = VC(ZO),
	iw = { token: Sd, hashed: !0 },
	lw = he.createContext(iw)
function Rs() {
	const { token: e, hashed: t, theme: n, components: r } = he.useContext(lw),
		o = `${wO}-${t || ''}`,
		a = n || uN,
		[i, l] = BR(a, [Sd, e], {
			salt: o,
			override: Object.assign({ override: e }, r),
			formatToken: eN
		})
	return [a, i, t ? l : '']
}
const cN = `-ant-${Date.now()}-${Math.random()}`
function dN(e, t) {
	const n = {},
		r = (i, l) => {
			let s = i.clone()
			return (s = (l == null ? void 0 : l(s)) || s), s.toRgbString()
		},
		o = (i, l) => {
			const s = new ln(i),
				c = Na(s.toRgbString())
			;(n[`${l}-color`] = r(s)),
				(n[`${l}-color-disabled`] = c[1]),
				(n[`${l}-color-hover`] = c[4]),
				(n[`${l}-color-active`] = c[6]),
				(n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString()),
				(n[`${l}-color-deprecated-bg`] = c[0]),
				(n[`${l}-color-deprecated-border`] = c[2])
		}
	if (t.primaryColor) {
		o(t.primaryColor, 'primary')
		const i = new ln(t.primaryColor),
			l = Na(i.toRgbString())
		l.forEach((c, f) => {
			n[`primary-${f + 1}`] = c
		}),
			(n['primary-color-deprecated-l-35'] = r(i, c => c.lighten(35))),
			(n['primary-color-deprecated-l-20'] = r(i, c => c.lighten(20))),
			(n['primary-color-deprecated-t-20'] = r(i, c => c.tint(20))),
			(n['primary-color-deprecated-t-50'] = r(i, c => c.tint(50))),
			(n['primary-color-deprecated-f-12'] = r(i, c =>
				c.setAlpha(c.getAlpha() * 0.12)
			))
		const s = new ln(l[0])
		;(n['primary-color-active-deprecated-f-30'] = r(s, c =>
			c.setAlpha(c.getAlpha() * 0.3)
		)),
			(n['primary-color-active-deprecated-d-02'] = r(s, c => c.darken(2)))
	}
	return (
		t.successColor && o(t.successColor, 'success'),
		t.warningColor && o(t.warningColor, 'warning'),
		t.errorColor && o(t.errorColor, 'error'),
		t.infoColor && o(t.infoColor, 'info'),
		`
  :root {
    ${Object.keys(n).map(i => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim()
	)
}
function fN(e, t) {
	const n = dN(e, t)
	An() && Di(n, `${cN}-dynamic-theme`)
}
const Lp = u.createContext(!1),
	vN = e => {
		let { children: t, disabled: n } = e
		const r = u.useContext(Lp)
		return u.createElement(Lp.Provider, { value: n ?? r }, t)
	},
	La = Lp,
	Ap = u.createContext(void 0),
	pN = e => {
		let { children: t, size: n } = e
		const r = u.useContext(Ap)
		return u.createElement(Ap.Provider, { value: n || r }, t)
	},
	Dr = Ap
function mN() {
	const e = u.useContext(La),
		t = u.useContext(Dr)
	return { componentDisabled: e, componentSize: t }
}
function hN(e, t) {
	const n = e || {},
		r = n.inherit === !1 || !t ? iw : t
	return ka(
		() => {
			if (!e) return t
			const a = Object.assign({}, r.components)
			return (
				Object.keys(e.components || {}).forEach(i => {
					a[i] = Object.assign(Object.assign({}, a[i]), e.components[i])
				}),
				Object.assign(Object.assign(Object.assign({}, r), n), {
					token: Object.assign(Object.assign({}, r.token), n.token),
					components: a
				})
			)
		},
		[n, r],
		(a, i) =>
			a.some((l, s) => {
				const c = i[s]
				return !Es(l, c, !0)
			})
	)
}
const gN = e => {
		const [t, n] = Rs()
		return Sp(
			{ theme: t, token: n, hashId: '', path: ['ant-design-icons', e] },
			() => [
				{
					[`.${e}`]: Object.assign(Object.assign({}, Fh()), {
						[`.${e} .${e}-icon`]: { display: 'block' }
					})
				}
			]
		)
	},
	yN = gN
var bN =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
const SN = [
		'getTargetContainer',
		'getPopupContainer',
		'renderEmpty',
		'pageHeader',
		'input',
		'pagination',
		'form',
		'select'
	],
	CN = 'ant'
let sw
function wN() {
	return sw || CN
}
const xN = e => {
		let { prefixCls: t, iconPrefixCls: n, theme: r } = e
		t !== void 0 && (sw = t), r && fN(wN(), r)
	},
	EN = e => {
		const {
				children: t,
				csp: n,
				autoInsertSpaceInButton: r,
				form: o,
				locale: a,
				componentSize: i,
				direction: l,
				space: s,
				virtual: c,
				dropdownMatchSelectWidth: f,
				legacyLocale: d,
				parentContext: v,
				iconPrefixCls: p,
				theme: h,
				componentDisabled: g
			} = e,
			b = u.useCallback(
				($, R) => {
					const { prefixCls: M } = e
					if (R) return R
					const T = M || v.getPrefixCls('')
					return $ ? `${T}-${$}` : T
				},
				[v.getPrefixCls, e.prefixCls]
			),
			m = p || v.iconPrefixCls || ow,
			y = m !== v.iconPrefixCls,
			S = n || v.csp,
			C = yN(m),
			x = hN(h, v.theme),
			w = {
				csp: S,
				autoInsertSpaceInButton: r,
				locale: a || d,
				direction: l,
				space: s,
				virtual: c,
				dropdownMatchSelectWidth: f,
				getPrefixCls: b,
				iconPrefixCls: m,
				theme: x
			},
			E = Object.assign({}, v)
		Object.keys(w).forEach($ => {
			w[$] !== void 0 && (E[$] = w[$])
		}),
			SN.forEach($ => {
				const R = e[$]
				R && (E[$] = R)
			})
		const P = ka(
				() => E,
				E,
				($, R) => {
					const M = Object.keys($),
						T = Object.keys(R)
					return M.length !== T.length || M.some(_ => $[_] !== R[_])
				}
			),
			N = u.useMemo(() => ({ prefixCls: m, csp: S }), [m, S])
		let O = y ? C(t) : t
		const k = u.useMemo(() => {
			var $, R, M
			return Hl(
				{},
				(($ = ps.Form) === null || $ === void 0
					? void 0
					: $.defaultValidateMessages) || {},
				((M = (R = P.locale) === null || R === void 0 ? void 0 : R.Form) ===
					null || M === void 0
					? void 0
					: M.defaultValidateMessages) || {},
				(o == null ? void 0 : o.validateMessages) || {}
			)
		}, [P, o == null ? void 0 : o.validateMessages])
		Object.keys(k).length > 0 &&
			(O = u.createElement(ZC, { validateMessages: k }, t)),
			a && (O = u.createElement(CO, { locale: a, _ANT_MARK__: bO }, O)),
			(m || S) && (O = u.createElement(_h.Provider, { value: N }, O)),
			i && (O = u.createElement(pN, { size: i }, O))
		const I = u.useMemo(() => {
			const $ = x || {},
				{ algorithm: R, token: M } = $,
				T = bN($, ['algorithm', 'token']),
				_ = R && (!Array.isArray(R) || R.length > 0) ? VC(R) : void 0
			return Object.assign(Object.assign({}, T), {
				theme: _,
				token: Object.assign(Object.assign({}, Sd), M)
			})
		}, [x])
		return (
			h && (O = u.createElement(lw.Provider, { value: I }, O)),
			g !== void 0 && (O = u.createElement(vN, { disabled: g }, O)),
			u.createElement(kt.Provider, { value: P }, O)
		)
	},
	Yi = e => {
		const t = u.useContext(kt),
			n = u.useContext(Ah)
		return u.createElement(
			EN,
			Object.assign({ parentContext: t, legacyLocale: n }, e)
		)
	}
Yi.ConfigContext = kt
Yi.SizeContext = Dr
Yi.config = xN
Yi.useConfig = mN
Object.defineProperty(Yi, 'SizeContext', { get: () => Dr })
const uw = Yi
var cw = function (t) {
		return +setTimeout(t, 16)
	},
	dw = function (t) {
		return clearTimeout(t)
	}
typeof window < 'u' &&
	'requestAnimationFrame' in window &&
	((cw = function (t) {
		return window.requestAnimationFrame(t)
	}),
	(dw = function (t) {
		return window.cancelAnimationFrame(t)
	}))
var Ry = 0,
	Hh = new Map()
function fw(e) {
	Hh.delete(e)
}
var yt = function (t) {
	var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
	Ry += 1
	var r = Ry
	function o(a) {
		if (a === 0) fw(r), t()
		else {
			var i = cw(function () {
				o(a - 1)
			})
			Hh.set(r, i)
		}
	}
	return o(n), r
}
yt.cancel = function (e) {
	var t = Hh.get(e)
	return fw(t), dw(t)
}
function xl(e, t, n, r) {
	var o = ki.unstable_batchedUpdates
		? function (i) {
				ki.unstable_batchedUpdates(n, i)
		  }
		: n
	return (
		e.addEventListener && e.addEventListener(t, o, r),
		{
			remove: function () {
				e.removeEventListener && e.removeEventListener(t, o, r)
			}
		}
	)
}
function $N(e, t) {
	En(e, '[@ant-design/icons] '.concat(t))
}
function My(e) {
	return (
		Ze(e) === 'object' &&
		typeof e.name == 'string' &&
		typeof e.theme == 'string' &&
		(Ze(e.icon) === 'object' || typeof e.icon == 'function')
	)
}
function Oy() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
	return Object.keys(e).reduce(function (t, n) {
		var r = e[n]
		switch (n) {
			case 'class':
				;(t.className = r), delete t.class
				break
			default:
				t[n] = r
		}
		return t
	}, {})
}
function Fp(e, t, n) {
	return n
		? he.createElement(
				e.tag,
				F(F({ key: t }, Oy(e.attrs)), n),
				(e.children || []).map(function (r, o) {
					return Fp(r, ''.concat(t, '-').concat(e.tag, '-').concat(o))
				})
		  )
		: he.createElement(
				e.tag,
				F({ key: t }, Oy(e.attrs)),
				(e.children || []).map(function (r, o) {
					return Fp(r, ''.concat(t, '-').concat(e.tag, '-').concat(o))
				})
		  )
}
function vw(e) {
	return Na(e)[0]
}
function pw(e) {
	return e ? (Array.isArray(e) ? e : [e]) : []
}
var PN = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
	RN = function () {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : PN,
			n = u.useContext(_h),
			r = n.csp,
			o = n.prefixCls,
			a = t
		o && (a = a.replace(/anticon/g, o)),
			u.useEffect(function () {
				Di(a, '@ant-design-icons', { prepend: !0, csp: r })
			}, [])
	},
	MN = [
		'icon',
		'className',
		'onClick',
		'style',
		'primaryColor',
		'secondaryColor'
	],
	Vl = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 }
function ON(e) {
	var t = e.primaryColor,
		n = e.secondaryColor
	;(Vl.primaryColor = t),
		(Vl.secondaryColor = n || vw(t)),
		(Vl.calculated = !!n)
}
function NN() {
	return F({}, Vl)
}
var Cd = function (t) {
	var n = t.icon,
		r = t.className,
		o = t.onClick,
		a = t.style,
		i = t.primaryColor,
		l = t.secondaryColor,
		s = ot(t, MN),
		c = Vl
	if (
		(i && (c = { primaryColor: i, secondaryColor: l || vw(i) }),
		RN(),
		$N(My(n), 'icon should be icon definiton, but got '.concat(n)),
		!My(n))
	)
		return null
	var f = n
	return (
		f &&
			typeof f.icon == 'function' &&
			(f = F(F({}, f), {}, { icon: f.icon(c.primaryColor, c.secondaryColor) })),
		Fp(
			f.icon,
			'svg-'.concat(f.name),
			F(
				{
					className: r,
					onClick: o,
					style: a,
					'data-icon': f.name,
					width: '1em',
					height: '1em',
					fill: 'currentColor',
					'aria-hidden': 'true'
				},
				s
			)
		)
	)
}
Cd.displayName = 'IconReact'
Cd.getTwoToneColors = NN
Cd.setTwoToneColors = ON
const Vh = Cd
function mw(e) {
	var t = pw(e),
		n = B(t, 2),
		r = n[0],
		o = n[1]
	return Vh.setTwoToneColors({ primaryColor: r, secondaryColor: o })
}
function IN() {
	var e = Vh.getTwoToneColors()
	return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}
var kN = [
	'className',
	'icon',
	'spin',
	'rotate',
	'tabIndex',
	'onClick',
	'twoToneColor'
]
mw('#1890ff')
var wd = u.forwardRef(function (e, t) {
	var n,
		r = e.className,
		o = e.icon,
		a = e.spin,
		i = e.rotate,
		l = e.tabIndex,
		s = e.onClick,
		c = e.twoToneColor,
		f = ot(e, kN),
		d = u.useContext(_h),
		v = d.prefixCls,
		p = v === void 0 ? 'anticon' : v,
		h = d.rootClassName,
		g = Z(
			h,
			p,
			((n = {}),
			V(n, ''.concat(p, '-').concat(o.name), !!o.name),
			V(n, ''.concat(p, '-spin'), !!a || o.name === 'loading'),
			n),
			r
		),
		b = l
	b === void 0 && s && (b = -1)
	var m = i
			? {
					msTransform: 'rotate('.concat(i, 'deg)'),
					transform: 'rotate('.concat(i, 'deg)')
			  }
			: void 0,
		y = pw(c),
		S = B(y, 2),
		C = S[0],
		x = S[1]
	return u.createElement(
		'span',
		F(
			F({ role: 'img', 'aria-label': o.name }, f),
			{},
			{ ref: t, tabIndex: b, onClick: s, className: g }
		),
		u.createElement(Vh, {
			icon: o,
			primaryColor: C,
			secondaryColor: x,
			style: m
		})
	)
})
wd.displayName = 'AntdIcon'
wd.getTwoToneColor = IN
wd.setTwoToneColor = mw
const dn = wd
var TN = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z'
				}
			}
		]
	},
	name: 'close-circle',
	theme: 'filled'
}
const DN = TN
var hw = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: DN }))
}
hw.displayName = 'CloseCircleFilled'
const Ms = u.forwardRef(hw)
var _N = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'
				}
			}
		]
	},
	name: 'close',
	theme: 'outlined'
}
const LN = _N
var gw = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: LN }))
}
gw.displayName = 'CloseOutlined'
const yw = u.forwardRef(gw)
function Ny(e, t) {
	var n = {}
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit'.concat(e)] = 'webkit'.concat(t)),
		(n['Moz'.concat(e)] = 'moz'.concat(t)),
		(n['ms'.concat(e)] = 'MS'.concat(t)),
		(n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
		n
	)
}
function AN(e, t) {
	var n = {
		animationend: Ny('Animation', 'AnimationEnd'),
		transitionend: Ny('Transition', 'TransitionEnd')
	}
	return (
		e &&
			('AnimationEvent' in t || delete n.animationend.animation,
			'TransitionEvent' in t || delete n.transitionend.transition),
		n
	)
}
var FN = AN(An(), typeof window < 'u' ? window : {}),
	bw = {}
if (An()) {
	var zN = document.createElement('div')
	bw = zN.style
}
var fu = {}
function Sw(e) {
	if (fu[e]) return fu[e]
	var t = FN[e]
	if (t)
		for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
			var a = n[o]
			if (Object.prototype.hasOwnProperty.call(t, a) && a in bw)
				return (fu[e] = t[a]), fu[e]
		}
	return ''
}
var Cw = Sw('animationend'),
	ww = Sw('transitionend'),
	xw = !!(Cw && ww),
	Iy = Cw || 'animationend',
	ky = ww || 'transitionend'
function Ty(e, t) {
	if (!e) return null
	if (Ze(e) === 'object') {
		var n = t.replace(/-\w/g, function (r) {
			return r[1].toUpperCase()
		})
		return e[n]
	}
	return ''.concat(e, '-').concat(t)
}
var ei = 'none',
	vu = 'appear',
	pu = 'enter',
	mu = 'leave',
	Dy = 'none',
	no = 'prepare',
	pi = 'start',
	mi = 'active',
	jh = 'end'
function Xo(e) {
	var t = u.useRef(!1),
		n = u.useState(e),
		r = B(n, 2),
		o = r[0],
		a = r[1]
	u.useEffect(function () {
		return (
			(t.current = !1),
			function () {
				t.current = !0
			}
		)
	}, [])
	function i(l, s) {
		;(s && t.current) || a(l)
	}
	return [o, i]
}
const HN = function () {
	var e = u.useRef(null)
	function t() {
		yt.cancel(e.current)
	}
	function n(r) {
		var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
		t()
		var a = yt(function () {
			o <= 1
				? r({
						isCanceled: function () {
							return a !== e.current
						}
				  })
				: n(r, o - 1)
		})
		e.current = a
	}
	return (
		u.useEffect(function () {
			return function () {
				t()
			}
		}, []),
		[n, t]
	)
}
var Ew = An() ? u.useLayoutEffect : u.useEffect,
	_y = [no, pi, mi, jh],
	$w = !1,
	VN = !0
function Pw(e) {
	return e === mi || e === jh
}
const jN = function (e, t) {
		var n = Xo(Dy),
			r = B(n, 2),
			o = r[0],
			a = r[1],
			i = HN(),
			l = B(i, 2),
			s = l[0],
			c = l[1]
		function f() {
			a(no, !0)
		}
		return (
			Ew(
				function () {
					if (o !== Dy && o !== jh) {
						var d = _y.indexOf(o),
							v = _y[d + 1],
							p = t(o)
						p === $w
							? a(v, !0)
							: s(function (h) {
									function g() {
										h.isCanceled() || a(v, !0)
									}
									p === !0 ? g() : Promise.resolve(p).then(g)
							  })
					}
				},
				[e, o]
			),
			u.useEffect(function () {
				return function () {
					c()
				}
			}, []),
			[f, o]
		)
	},
	BN = function (e) {
		var t = u.useRef(),
			n = u.useRef(e)
		n.current = e
		var r = u.useCallback(function (i) {
			n.current(i)
		}, [])
		function o(i) {
			i && (i.removeEventListener(ky, r), i.removeEventListener(Iy, r))
		}
		function a(i) {
			t.current && t.current !== i && o(t.current),
				i &&
					i !== t.current &&
					(i.addEventListener(ky, r),
					i.addEventListener(Iy, r),
					(t.current = i))
		}
		return (
			u.useEffect(function () {
				return function () {
					o(t.current)
				}
			}, []),
			[a, o]
		)
	}
function WN(e, t, n, r) {
	var o = r.motionEnter,
		a = o === void 0 ? !0 : o,
		i = r.motionAppear,
		l = i === void 0 ? !0 : i,
		s = r.motionLeave,
		c = s === void 0 ? !0 : s,
		f = r.motionDeadline,
		d = r.motionLeaveImmediately,
		v = r.onAppearPrepare,
		p = r.onEnterPrepare,
		h = r.onLeavePrepare,
		g = r.onAppearStart,
		b = r.onEnterStart,
		m = r.onLeaveStart,
		y = r.onAppearActive,
		S = r.onEnterActive,
		C = r.onLeaveActive,
		x = r.onAppearEnd,
		w = r.onEnterEnd,
		E = r.onLeaveEnd,
		P = r.onVisibleChanged,
		N = Xo(),
		O = B(N, 2),
		k = O[0],
		I = O[1],
		$ = Xo(ei),
		R = B($, 2),
		M = R[0],
		T = R[1],
		_ = Xo(null),
		D = B(_, 2),
		L = D[0],
		H = D[1],
		j = u.useRef(!1),
		z = u.useRef(null)
	function A() {
		return n()
	}
	var W = u.useRef(!1)
	function Y(fe) {
		var be = A()
		if (!(fe && !fe.deadline && fe.target !== be)) {
			var Me = W.current,
				Se
			M === vu && Me
				? (Se = x == null ? void 0 : x(be, fe))
				: M === pu && Me
				? (Se = w == null ? void 0 : w(be, fe))
				: M === mu && Me && (Se = E == null ? void 0 : E(be, fe)),
				M !== ei && Me && Se !== !1 && (T(ei, !0), H(null, !0))
		}
	}
	var K = BN(Y),
		G = B(K, 1),
		te = G[0],
		ne = u.useMemo(
			function () {
				var fe, be, Me
				switch (M) {
					case vu:
						return (fe = {}), V(fe, no, v), V(fe, pi, g), V(fe, mi, y), fe
					case pu:
						return (be = {}), V(be, no, p), V(be, pi, b), V(be, mi, S), be
					case mu:
						return (Me = {}), V(Me, no, h), V(Me, pi, m), V(Me, mi, C), Me
					default:
						return {}
				}
			},
			[M]
		),
		ie = jN(M, function (fe) {
			if (fe === no) {
				var be = ne[no]
				return be ? be(A()) : $w
			}
			if (q in ne) {
				var Me
				H(
					((Me = ne[q]) === null || Me === void 0
						? void 0
						: Me.call(ne, A(), null)) || null
				)
			}
			return (
				q === mi &&
					(te(A()),
					f > 0 &&
						(clearTimeout(z.current),
						(z.current = setTimeout(function () {
							Y({ deadline: !0 })
						}, f)))),
				VN
			)
		}),
		le = B(ie, 2),
		ae = le[0],
		q = le[1],
		de = Pw(q)
	;(W.current = de),
		Ew(
			function () {
				I(t)
				var fe = j.current
				if (((j.current = !0), !!e)) {
					var be
					!fe && t && l && (be = vu),
						fe && t && a && (be = pu),
						((fe && !t && c) || (!fe && d && !t && c)) && (be = mu),
						be && (T(be), ae())
				}
			},
			[t]
		),
		u.useEffect(
			function () {
				;((M === vu && !l) || (M === pu && !a) || (M === mu && !c)) && T(ei)
			},
			[l, a, c]
		),
		u.useEffect(function () {
			return function () {
				;(j.current = !1), clearTimeout(z.current)
			}
		}, [])
	var ve = u.useRef(!1)
	u.useEffect(
		function () {
			k && (ve.current = !0),
				k !== void 0 &&
					M === ei &&
					((ve.current || k) && (P == null || P(k)), (ve.current = !0))
		},
		[k, M]
	)
	var ee = L
	return (
		ne[no] && q === pi && (ee = F({ transition: 'none' }, ee)),
		[M, q, ee, k ?? t]
	)
}
var UN = (function (e) {
	go(n, e)
	var t = yo(n)
	function n() {
		return Tn(this, n), t.apply(this, arguments)
	}
	return (
		Dn(n, [
			{
				key: 'render',
				value: function () {
					return this.props.children
				}
			}
		]),
		n
	)
})(u.Component)
function YN(e) {
	var t = e
	Ze(e) === 'object' && (t = e.transitionSupport)
	function n(o) {
		return !!(o.motionName && t)
	}
	var r = u.forwardRef(function (o, a) {
		var i = o.visible,
			l = i === void 0 ? !0 : i,
			s = o.removeOnLeave,
			c = s === void 0 ? !0 : s,
			f = o.forceRender,
			d = o.children,
			v = o.motionName,
			p = o.leavedClassName,
			h = o.eventProps,
			g = n(o),
			b = u.useRef(),
			m = u.useRef()
		function y() {
			try {
				return b.current instanceof HTMLElement ? b.current : cs(m.current)
			} catch {
				return null
			}
		}
		var S = WN(g, l, y, o),
			C = B(S, 4),
			x = C[0],
			w = C[1],
			E = C[2],
			P = C[3],
			N = u.useRef(P)
		P && (N.current = !0)
		var O = u.useCallback(
				function (_) {
					;(b.current = _), zm(a, _)
				},
				[a]
			),
			k,
			I = F(F({}, h), {}, { visible: l })
		if (!d) k = null
		else if (x === ei || !n(o))
			P
				? (k = d(F({}, I), O))
				: !c && N.current && p
				? (k = d(F(F({}, I), {}, { className: p }), O))
				: f || (!c && !p)
				? (k = d(F(F({}, I), {}, { style: { display: 'none' } }), O))
				: (k = null)
		else {
			var $, R
			w === no
				? (R = 'prepare')
				: Pw(w)
				? (R = 'active')
				: w === pi && (R = 'start'),
				(k = d(
					F(
						F({}, I),
						{},
						{
							className: Z(
								Ty(v, x),
								(($ = {}),
								V($, Ty(v, ''.concat(x, '-').concat(R)), R),
								V($, v, typeof v == 'string'),
								$)
							),
							style: E
						}
					),
					O
				))
		}
		if (u.isValidElement(k) && ji(k)) {
			var M = k,
				T = M.ref
			T || (k = u.cloneElement(k, { ref: O }))
		}
		return u.createElement(UN, { ref: m }, k)
	})
	return (r.displayName = 'CSSMotion'), r
}
const Xr = YN(xw)
var zp = 'add',
	Hp = 'keep',
	Vp = 'remove',
	Af = 'removed'
function KN(e) {
	var t
	return (
		e && Ze(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
		F(F({}, t), {}, { key: String(t.key) })
	)
}
function jp() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
	return e.map(KN)
}
function GN() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
		t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
		n = [],
		r = 0,
		o = t.length,
		a = jp(e),
		i = jp(t)
	a.forEach(function (c) {
		for (var f = !1, d = r; d < o; d += 1) {
			var v = i[d]
			if (v.key === c.key) {
				r < d &&
					((n = n.concat(
						i.slice(r, d).map(function (p) {
							return F(F({}, p), {}, { status: zp })
						})
					)),
					(r = d)),
					n.push(F(F({}, v), {}, { status: Hp })),
					(r += 1),
					(f = !0)
				break
			}
		}
		f || n.push(F(F({}, c), {}, { status: Vp }))
	}),
		r < o &&
			(n = n.concat(
				i.slice(r).map(function (c) {
					return F(F({}, c), {}, { status: zp })
				})
			))
	var l = {}
	n.forEach(function (c) {
		var f = c.key
		l[f] = (l[f] || 0) + 1
	})
	var s = Object.keys(l).filter(function (c) {
		return l[c] > 1
	})
	return (
		s.forEach(function (c) {
			;(n = n.filter(function (f) {
				var d = f.key,
					v = f.status
				return d !== c || v !== Vp
			})),
				n.forEach(function (f) {
					f.key === c && (f.status = Hp)
				})
		}),
		n
	)
}
var XN = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
	qN = ['status'],
	QN = [
		'eventProps',
		'visible',
		'children',
		'motionName',
		'motionAppear',
		'motionEnter',
		'motionLeave',
		'motionLeaveImmediately',
		'motionDeadline',
		'removeOnLeave',
		'leavedClassName',
		'onAppearStart',
		'onAppearActive',
		'onAppearEnd',
		'onEnterStart',
		'onEnterActive',
		'onEnterEnd',
		'onLeaveStart',
		'onLeaveActive',
		'onLeaveEnd'
	]
function ZN(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xr,
		n = (function (r) {
			go(a, r)
			var o = yo(a)
			function a() {
				var i
				Tn(this, a)
				for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
					s[c] = arguments[c]
				return (
					(i = o.call.apply(o, [this].concat(s))),
					V(We(i), 'state', { keyEntities: [] }),
					V(We(i), 'removeKey', function (f) {
						var d = i.state.keyEntities,
							v = d.map(function (p) {
								return p.key !== f ? p : F(F({}, p), {}, { status: Af })
							})
						return (
							i.setState({ keyEntities: v }),
							v.filter(function (p) {
								var h = p.status
								return h !== Af
							}).length
						)
					}),
					i
				)
			}
			return (
				Dn(
					a,
					[
						{
							key: 'render',
							value: function () {
								var l = this,
									s = this.state.keyEntities,
									c = this.props,
									f = c.component,
									d = c.children,
									v = c.onVisibleChanged,
									p = c.onAllRemoved,
									h = ot(c, XN),
									g = f || u.Fragment,
									b = {}
								return (
									QN.forEach(function (m) {
										;(b[m] = h[m]), delete h[m]
									}),
									delete h.keys,
									u.createElement(
										g,
										h,
										s.map(function (m) {
											var y = m.status,
												S = ot(m, qN),
												C = y === zp || y === Hp
											return u.createElement(
												t,
												se({}, b, {
													key: S.key,
													visible: C,
													eventProps: S,
													onVisibleChanged: function (w) {
														if ((v == null || v(w, { key: S.key }), !w)) {
															var E = l.removeKey(S.key)
															E === 0 && p && p()
														}
													}
												}),
												d
											)
										})
									)
								)
							}
						}
					],
					[
						{
							key: 'getDerivedStateFromProps',
							value: function (l, s) {
								var c = l.keys,
									f = s.keyEntities,
									d = jp(c),
									v = GN(f, d)
								return {
									keyEntities: v.filter(function (p) {
										var h = f.find(function (g) {
											var b = g.key
											return p.key === b
										})
										return !(h && h.status === Af && p.status === Vp)
									})
								}
							}
						}
					]
				),
				a
			)
		})(u.Component)
	return V(n, 'defaultProps', { component: 'div' }), n
}
ZN(xw)
const { isValidElement: Pc } = Yl
function JN(e) {
	return e && Pc(e) && e.type === u.Fragment
}
function eI(e, t, n) {
	return Pc(e)
		? u.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
		: t
}
function Rc(e, t) {
	return eI(e, e, t)
}
function Lo(e) {
	var t = u.useRef()
	t.current = e
	var n = u.useCallback(function () {
		for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
			a[i] = arguments[i]
		return (r = t.current) === null || r === void 0
			? void 0
			: r.call.apply(r, [t].concat(a))
	}, [])
	return n
}
var X = {
		MAC_ENTER: 3,
		BACKSPACE: 8,
		TAB: 9,
		NUM_CENTER: 12,
		ENTER: 13,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PAUSE: 19,
		CAPS_LOCK: 20,
		ESC: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		PRINT_SCREEN: 44,
		INSERT: 45,
		DELETE: 46,
		ZERO: 48,
		ONE: 49,
		TWO: 50,
		THREE: 51,
		FOUR: 52,
		FIVE: 53,
		SIX: 54,
		SEVEN: 55,
		EIGHT: 56,
		NINE: 57,
		QUESTION_MARK: 63,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		META: 91,
		WIN_KEY_RIGHT: 92,
		CONTEXT_MENU: 93,
		NUM_ZERO: 96,
		NUM_ONE: 97,
		NUM_TWO: 98,
		NUM_THREE: 99,
		NUM_FOUR: 100,
		NUM_FIVE: 101,
		NUM_SIX: 102,
		NUM_SEVEN: 103,
		NUM_EIGHT: 104,
		NUM_NINE: 105,
		NUM_MULTIPLY: 106,
		NUM_PLUS: 107,
		NUM_MINUS: 109,
		NUM_PERIOD: 110,
		NUM_DIVISION: 111,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		NUMLOCK: 144,
		SEMICOLON: 186,
		DASH: 189,
		EQUALS: 187,
		COMMA: 188,
		PERIOD: 190,
		SLASH: 191,
		APOSTROPHE: 192,
		SINGLE_QUOTE: 222,
		OPEN_SQUARE_BRACKET: 219,
		BACKSLASH: 220,
		CLOSE_SQUARE_BRACKET: 221,
		WIN_KEY: 224,
		MAC_FF_META: 224,
		WIN_IME: 229,
		isTextModifyingKeyEvent: function (t) {
			var n = t.keyCode
			if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= X.F1 && n <= X.F12))
				return !1
			switch (n) {
				case X.ALT:
				case X.CAPS_LOCK:
				case X.CONTEXT_MENU:
				case X.CTRL:
				case X.DOWN:
				case X.END:
				case X.ESC:
				case X.HOME:
				case X.INSERT:
				case X.LEFT:
				case X.MAC_FF_META:
				case X.META:
				case X.NUMLOCK:
				case X.NUM_CENTER:
				case X.PAGE_DOWN:
				case X.PAGE_UP:
				case X.PAUSE:
				case X.PRINT_SCREEN:
				case X.RIGHT:
				case X.SHIFT:
				case X.UP:
				case X.WIN_KEY:
				case X.WIN_KEY_RIGHT:
					return !1
				default:
					return !0
			}
		},
		isCharacterKey: function (t) {
			if (
				(t >= X.ZERO && t <= X.NINE) ||
				(t >= X.NUM_ZERO && t <= X.NUM_MULTIPLY) ||
				(t >= X.A && t <= X.Z) ||
				(window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
			)
				return !0
			switch (t) {
				case X.SPACE:
				case X.QUESTION_MARK:
				case X.NUM_PLUS:
				case X.NUM_MINUS:
				case X.NUM_PERIOD:
				case X.NUM_DIVISION:
				case X.SEMICOLON:
				case X.DASH:
				case X.EQUALS:
				case X.COMMA:
				case X.PERIOD:
				case X.SLASH:
				case X.APOSTROPHE:
				case X.SINGLE_QUOTE:
				case X.OPEN_SQUARE_BRACKET:
				case X.BACKSLASH:
				case X.CLOSE_SQUARE_BRACKET:
					return !0
				default:
					return !1
			}
		}
	},
	tI = {
		icon: {
			tag: 'svg',
			attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
			children: [
				{
					tag: 'path',
					attrs: {
						d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z'
					}
				}
			]
		},
		name: 'loading',
		theme: 'outlined'
	}
const nI = tI
var Rw = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: nI }))
}
Rw.displayName = 'LoadingOutlined'
const Bp = u.forwardRef(Rw)
var Os = F({}, JP),
	rI = Os.version,
	oI = Os.render,
	aI = Os.unmountComponentAtNode,
	xd
try {
	var iI = Number((rI || '').split('.')[0])
	iI >= 18 && (xd = Os.createRoot)
} catch {}
function Ly(e) {
	var t = Os.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
	t && Ze(t) === 'object' && (t.usingClientEntryPoint = e)
}
var Mc = '__rc_react_root__'
function lI(e, t) {
	Ly(!0)
	var n = t[Mc] || xd(t)
	Ly(!1), n.render(e), (t[Mc] = n)
}
function sI(e, t) {
	oI(e, t)
}
function uI(e, t) {
	if (xd) {
		lI(e, t)
		return
	}
	sI(e, t)
}
function cI(e) {
	return Wp.apply(this, arguments)
}
function Wp() {
	return (
		(Wp = _a(
			Fn().mark(function e(t) {
				return Fn().wrap(function (r) {
					for (;;)
						switch ((r.prev = r.next)) {
							case 0:
								return r.abrupt(
									'return',
									Promise.resolve().then(function () {
										var o
										;(o = t[Mc]) === null || o === void 0 || o.unmount(),
											delete t[Mc]
									})
								)
							case 1:
							case 'end':
								return r.stop()
						}
				}, e)
			})
		)),
		Wp.apply(this, arguments)
	)
}
function dI(e) {
	aI(e)
}
function fI(e) {
	return Up.apply(this, arguments)
}
function Up() {
	return (
		(Up = _a(
			Fn().mark(function e(t) {
				return Fn().wrap(function (r) {
					for (;;)
						switch ((r.prev = r.next)) {
							case 0:
								if (xd === void 0) {
									r.next = 2
									break
								}
								return r.abrupt('return', cI(t))
							case 2:
								dI(t)
							case 3:
							case 'end':
								return r.stop()
						}
				}, e)
			})
		)),
		Up.apply(this, arguments)
	)
}
const vI = (e, t) => {
		const n = u.useContext(Ah),
			r = u.useMemo(() => {
				var a
				const i = t || ps[e],
					l = (a = n == null ? void 0 : n[e]) !== null && a !== void 0 ? a : {}
				return Object.assign(
					Object.assign({}, typeof i == 'function' ? i() : i),
					l || {}
				)
			}, [e, t, n]),
			o = u.useMemo(() => {
				const a = n == null ? void 0 : n.locale
				return n != null && n.exist && !a ? ps.locale : a
			}, [n])
		return [r, o]
	},
	Bh = vI,
	pI = e => {
		const { componentCls: t } = e
		return {
			[t]: {
				display: 'inline-flex',
				'&-block': { display: 'flex', width: '100%' },
				'&-vertical': { flexDirection: 'column' }
			}
		}
	},
	mI = pI,
	hI = e => {
		const { componentCls: t } = e
		return {
			[t]: {
				display: 'inline-flex',
				'&-rtl': { direction: 'rtl' },
				'&-vertical': { flexDirection: 'column' },
				'&-align': {
					flexDirection: 'column',
					'&-center': { alignItems: 'center' },
					'&-start': { alignItems: 'flex-start' },
					'&-end': { alignItems: 'flex-end' },
					'&-baseline': { alignItems: 'baseline' }
				},
				[`${t}-item`]: { '&:empty': { display: 'none' } }
			}
		}
	},
	Mw = So('Space', e => [hI(e), mI(e)])
var Ow =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
const Ed = u.createContext(null),
	Ki = (e, t) => {
		const n = u.useContext(Ed),
			r = u.useMemo(() => {
				if (!n) return ''
				const { compactDirection: o, isFirstItem: a, isLastItem: i } = n,
					l = o === 'vertical' ? '-vertical-' : '-'
				return Z({
					[`${e}-compact${l}item`]: !0,
					[`${e}-compact${l}first-item`]: a,
					[`${e}-compact${l}last-item`]: i,
					[`${e}-compact${l}item-rtl`]: t === 'rtl'
				})
			}, [e, t, n])
		return {
			compactSize: n == null ? void 0 : n.compactSize,
			compactDirection: n == null ? void 0 : n.compactDirection,
			compactItemClassnames: r
		}
	},
	Ay = e => {
		let { children: t } = e
		return u.createElement(Ed.Provider, { value: null }, t)
	},
	gI = e => {
		var { children: t } = e,
			n = Ow(e, ['children'])
		return u.createElement(Ed.Provider, { value: n }, t)
	},
	yI = e => {
		const { getPrefixCls: t, direction: n } = u.useContext(kt),
			{
				size: r = 'middle',
				direction: o,
				block: a,
				prefixCls: i,
				className: l,
				rootClassName: s,
				children: c
			} = e,
			f = Ow(e, [
				'size',
				'direction',
				'block',
				'prefixCls',
				'className',
				'rootClassName',
				'children'
			]),
			d = t('space-compact', i),
			[v, p] = Mw(d),
			h = Z(
				d,
				p,
				{
					[`${d}-rtl`]: n === 'rtl',
					[`${d}-block`]: a,
					[`${d}-vertical`]: o === 'vertical'
				},
				l,
				s
			),
			g = u.useContext(Ed),
			b = Ur(c),
			m = u.useMemo(
				() =>
					b.map((y, S) => {
						const C = (y && y.key) || `${d}-item-${S}`
						return u.createElement(
							gI,
							{
								key: C,
								compactSize: r,
								compactDirection: o,
								isFirstItem:
									S === 0 && (!g || (g == null ? void 0 : g.isFirstItem)),
								isLastItem:
									S === b.length - 1 &&
									(!g || (g == null ? void 0 : g.isLastItem))
							},
							y
						)
					}),
				[r, b, g]
			)
		return b.length === 0
			? null
			: v(u.createElement('div', Object.assign({ className: h }, f), m))
	},
	bI = yI,
	Ns = function (e) {
		if (!e) return !1
		if (e instanceof HTMLElement && e.offsetParent) return !0
		if (e instanceof SVGGraphicsElement && e.getBBox) {
			var t = e.getBBox(),
				n = t.width,
				r = t.height
			if (n || r) return !0
		}
		if (e instanceof HTMLElement && e.getBoundingClientRect) {
			var o = e.getBoundingClientRect(),
				a = o.width,
				i = o.height
			if (a || i) return !0
		}
		return !1
	},
	SI = e => {
		const { componentCls: t, colorPrimary: n } = e
		return {
			[t]: {
				position: 'absolute',
				background: 'transparent',
				pointerEvents: 'none',
				boxSizing: 'border-box',
				color: `var(--wave-color, ${n})`,
				boxShadow: '0 0 0 0 currentcolor',
				opacity: 0.2,
				'&.wave-motion-appear': {
					transition: [
						`box-shadow 0.4s ${e.motionEaseOutCirc}`,
						`opacity 2s ${e.motionEaseOutCirc}`
					].join(','),
					'&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 }
				}
			}
		}
	},
	CI = So('Wave', e => [SI(e)])
function wI(e) {
	const t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/)
	return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0
}
function Ff(e) {
	return (
		e &&
		e !== '#fff' &&
		e !== '#ffffff' &&
		e !== 'rgb(255, 255, 255)' &&
		e !== 'rgba(255, 255, 255, 1)' &&
		wI(e) &&
		!/rgba\((?:\d*, ){3}0\)/.test(e) &&
		e !== 'transparent'
	)
}
function xI(e) {
	const {
		borderTopColor: t,
		borderColor: n,
		backgroundColor: r
	} = getComputedStyle(e)
	return Ff(t) ? t : Ff(n) ? n : Ff(r) ? r : null
}
function zf(e) {
	return Number.isNaN(e) ? 0 : e
}
const EI = e => {
	const { className: t, target: n } = e,
		r = u.useRef(null),
		[o, a] = u.useState(null),
		[i, l] = u.useState([]),
		[s, c] = u.useState(0),
		[f, d] = u.useState(0),
		[v, p] = u.useState(0),
		[h, g] = u.useState(0),
		[b, m] = u.useState(!1),
		y = {
			left: s,
			top: f,
			width: v,
			height: h,
			borderRadius: i.map(C => `${C}px`).join(' ')
		}
	o && (y['--wave-color'] = o)
	function S() {
		const C = getComputedStyle(n)
		a(xI(n))
		const x = C.position === 'static',
			{ borderLeftWidth: w, borderTopWidth: E } = C
		c(x ? n.offsetLeft : zf(-parseFloat(w))),
			d(x ? n.offsetTop : zf(-parseFloat(E))),
			p(n.offsetWidth),
			g(n.offsetHeight)
		const {
			borderTopLeftRadius: P,
			borderTopRightRadius: N,
			borderBottomLeftRadius: O,
			borderBottomRightRadius: k
		} = C
		l([P, N, k, O].map(I => zf(parseFloat(I))))
	}
	return (
		u.useEffect(() => {
			if (n) {
				const C = yt(() => {
					S(), m(!0)
				})
				let x
				return (
					typeof ResizeObserver < 'u' &&
						((x = new ResizeObserver(S)), x.observe(n)),
					() => {
						yt.cancel(C), x == null || x.disconnect()
					}
				)
			}
		}, []),
		b
			? u.createElement(
					Xr,
					{
						visible: !0,
						motionAppear: !0,
						motionName: 'wave-motion',
						motionDeadline: 5e3,
						onAppearEnd: (C, x) => {
							var w
							if (x.deadline || x.propertyName === 'opacity') {
								const E =
									(w = r.current) === null || w === void 0
										? void 0
										: w.parentElement
								fI(E).then(() => {
									var P
									;(P = E.parentElement) === null ||
										P === void 0 ||
										P.removeChild(E)
								})
							}
							return !1
						}
					},
					C => {
						let { className: x } = C
						return u.createElement('div', {
							ref: r,
							className: Z(t, x),
							style: y
						})
					}
			  )
			: null
	)
}
function $I(e, t) {
	const n = document.createElement('div')
	;(n.style.position = 'absolute'),
		(n.style.left = '0px'),
		(n.style.top = '0px'),
		e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild),
		uI(u.createElement(EI, { target: e, className: t }), n)
}
function PI(e, t) {
	function n() {
		const r = e.current
		$I(r, t)
	}
	return n
}
const RI = e => {
		const { children: t, disabled: n } = e,
			{ getPrefixCls: r } = u.useContext(kt),
			o = u.useRef(null),
			a = r('wave'),
			[, i] = CI(a),
			l = PI(o, Z(a, i))
		if (
			(he.useEffect(() => {
				const c = o.current
				if (!c || c.nodeType !== 1 || n) return
				const f = d => {
					d.target.tagName === 'INPUT' ||
						!Ns(d.target) ||
						!c.getAttribute ||
						c.getAttribute('disabled') ||
						c.disabled ||
						c.className.includes('disabled') ||
						c.className.includes('-leave') ||
						l()
				}
				return (
					c.addEventListener('click', f, !0),
					() => {
						c.removeEventListener('click', f, !0)
					}
				)
			}, [n]),
			!he.isValidElement(t))
		)
			return t ?? null
		const s = ji(t) ? Gr(t.ref, o) : o
		return Rc(t, { ref: s })
	},
	MI = RI
var OI =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
const Nw = u.createContext(void 0),
	NI = e => {
		const { getPrefixCls: t, direction: n } = u.useContext(kt),
			{ prefixCls: r, size: o, className: a } = e,
			i = OI(e, ['prefixCls', 'size', 'className']),
			l = t('btn-group', r),
			[, , s] = Rs()
		let c = ''
		switch (o) {
			case 'large':
				c = 'lg'
				break
			case 'small':
				c = 'sm'
				break
		}
		const f = Z(l, { [`${l}-${c}`]: c, [`${l}-rtl`]: n === 'rtl' }, a, s)
		return u.createElement(
			Nw.Provider,
			{ value: o },
			u.createElement('div', Object.assign({}, i, { className: f }))
		)
	},
	II = NI,
	Fy = /^[\u4e00-\u9fa5]{2}$/,
	Yp = Fy.test.bind(Fy)
function kI(e) {
	return typeof e == 'string'
}
function Hf(e) {
	return e === 'text' || e === 'link'
}
function TI(e, t) {
	if (e == null) return
	const n = t ? ' ' : ''
	return typeof e != 'string' &&
		typeof e != 'number' &&
		kI(e.type) &&
		Yp(e.props.children)
		? Rc(e, { children: e.props.children.split('').join(n) })
		: typeof e == 'string'
		? Yp(e)
			? he.createElement('span', null, e.split('').join(n))
			: he.createElement('span', null, e)
		: JN(e)
		? he.createElement('span', null, e)
		: e
}
function DI(e, t) {
	let n = !1
	const r = []
	return (
		he.Children.forEach(e, o => {
			const a = typeof o,
				i = a === 'string' || a === 'number'
			if (n && i) {
				const l = r.length - 1,
					s = r[l]
				r[l] = `${s}${o}`
			} else r.push(o)
			n = i
		}),
		he.Children.map(r, o => TI(o, t))
	)
}
const Vf = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
	jf = e => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
	_I = e => {
		let { prefixCls: t, loading: n, existIcon: r } = e
		const o = !!n
		return r
			? he.createElement(
					'span',
					{ className: `${t}-loading-icon` },
					he.createElement(Bp, null)
			  )
			: he.createElement(
					Xr,
					{
						visible: o,
						motionName: `${t}-loading-icon-motion`,
						removeOnLeave: !0,
						onAppearStart: Vf,
						onAppearActive: jf,
						onEnterStart: Vf,
						onEnterActive: jf,
						onLeaveStart: jf,
						onLeaveActive: Vf
					},
					(a, i) => {
						let { className: l, style: s } = a
						return he.createElement(
							'span',
							{ className: `${t}-loading-icon`, style: s, ref: i },
							he.createElement(Bp, { className: l })
						)
					}
			  )
	},
	LI = _I,
	zy = (e, t) => ({
		[`> span, > ${e}`]: {
			'&:not(:last-child)': {
				[`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } }
			},
			'&:not(:first-child)': {
				[`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } }
			}
		}
	}),
	AI = e => {
		const {
			componentCls: t,
			fontSize: n,
			lineWidth: r,
			colorPrimaryHover: o,
			colorErrorHover: a
		} = e
		return {
			[`${t}-group`]: [
				{
					position: 'relative',
					display: 'inline-flex',
					[`> span, > ${t}`]: {
						'&:not(:last-child)': {
							[`&, & > ${t}`]: {
								borderStartEndRadius: 0,
								borderEndEndRadius: 0
							}
						},
						'&:not(:first-child)': {
							marginInlineStart: -r,
							[`&, & > ${t}`]: {
								borderStartStartRadius: 0,
								borderEndStartRadius: 0
							}
						}
					},
					[t]: {
						position: 'relative',
						zIndex: 1,
						[`&:hover,
          &:focus,
          &:active`]: { zIndex: 2 },
						'&[disabled]': { zIndex: 0 }
					},
					[`${t}-icon-only`]: { fontSize: n }
				},
				zy(`${t}-primary`, o),
				zy(`${t}-danger`, a)
			]
		}
	},
	FI = AI
function zI(e, t, n) {
	const { focusElCls: r, focus: o, borderElCls: a } = n,
		i = a ? '> *' : '',
		l = ['hover', o ? 'focus' : null, 'active']
			.filter(Boolean)
			.map(s => `&:${s} ${i}`)
			.join(',')
	return {
		[`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
		'&-item': Object.assign(
			Object.assign(
				{ [l]: { zIndex: 2 } },
				r ? { [`&${r}`]: { zIndex: 2 } } : {}
			),
			{ [`&[disabled] ${i}`]: { zIndex: 0 } }
		)
	}
}
function HI(e, t, n) {
	const { borderElCls: r } = n,
		o = r ? `> ${r}` : ''
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
			borderRadius: 0
		},
		[`&-item:not(${t}-last-item)${t}-first-item`]: {
			[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
				borderStartEndRadius: 0,
				borderEndEndRadius: 0
			}
		},
		[`&-item:not(${t}-first-item)${t}-last-item`]: {
			[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
				borderStartStartRadius: 0,
				borderEndStartRadius: 0
			}
		}
	}
}
function $d(e) {
	let t =
		arguments.length > 1 && arguments[1] !== void 0
			? arguments[1]
			: { focus: !0 }
	const { componentCls: n } = e,
		r = `${n}-compact`
	return { [r]: Object.assign(Object.assign({}, zI(e, r, t)), HI(n, r, t)) }
}
function VI(e, t) {
	return {
		[`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
		'&-item': {
			'&:hover,&:focus,&:active': { zIndex: 2 },
			'&[disabled]': { zIndex: 0 }
		}
	}
}
function jI(e, t) {
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
		[`&-item${t}-first-item:not(${t}-last-item)`]: {
			[`&, &${e}-sm, &${e}-lg`]: {
				borderEndEndRadius: 0,
				borderEndStartRadius: 0
			}
		},
		[`&-item${t}-last-item:not(${t}-first-item)`]: {
			[`&, &${e}-sm, &${e}-lg`]: {
				borderStartStartRadius: 0,
				borderStartEndRadius: 0
			}
		}
	}
}
function BI(e) {
	const t = `${e.componentCls}-compact-vertical`
	return {
		[t]: Object.assign(Object.assign({}, VI(e, t)), jI(e.componentCls, t))
	}
}
const WI = e => {
		const { componentCls: t, iconCls: n } = e
		return {
			[t]: {
				outline: 'none',
				position: 'relative',
				display: 'inline-block',
				fontWeight: 400,
				whiteSpace: 'nowrap',
				textAlign: 'center',
				backgroundImage: 'none',
				backgroundColor: 'transparent',
				border: `${e.lineWidth}px ${e.lineType} transparent`,
				cursor: 'pointer',
				transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
				userSelect: 'none',
				touchAction: 'manipulation',
				lineHeight: e.lineHeight,
				color: e.colorText,
				'> span': { display: 'inline-block' },
				[`> ${n} + span, > span + ${n}`]: { marginInlineStart: e.marginXS },
				'> a': { color: 'currentColor' },
				'&:not(:disabled)': Object.assign({}, zh(e)),
				[`&-icon-only${t}-compact-item`]: { flex: 'none' },
				[`&-compact-item${t}-primary`]: {
					[`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
						{
							position: 'relative',
							'&:before': {
								position: 'absolute',
								top: -e.lineWidth,
								insetInlineStart: -e.lineWidth,
								display: 'inline-block',
								width: e.lineWidth,
								height: `calc(100% + ${e.lineWidth * 2}px)`,
								backgroundColor: e.colorPrimaryHover,
								content: '""'
							}
						}
				},
				'&-compact-vertical-item': {
					[`&${t}-primary`]: {
						[`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
							{
								position: 'relative',
								'&:before': {
									position: 'absolute',
									top: -e.lineWidth,
									insetInlineStart: -e.lineWidth,
									display: 'inline-block',
									width: `calc(100% + ${e.lineWidth * 2}px)`,
									height: e.lineWidth,
									backgroundColor: e.colorPrimaryHover,
									content: '""'
								}
							}
					}
				}
			}
		}
	},
	mo = (e, t) => ({ '&:not(:disabled)': { '&:hover': e, '&:active': t } }),
	UI = e => ({
		minWidth: e.controlHeight,
		paddingInlineStart: 0,
		paddingInlineEnd: 0,
		borderRadius: '50%'
	}),
	YI = e => ({
		borderRadius: e.controlHeight,
		paddingInlineStart: e.controlHeight / 2,
		paddingInlineEnd: e.controlHeight / 2
	}),
	Kp = e => ({
		cursor: 'not-allowed',
		borderColor: e.colorBorder,
		color: e.colorTextDisabled,
		backgroundColor: e.colorBgContainerDisabled,
		boxShadow: 'none'
	}),
	Oc = (e, t, n, r, o, a, i) => ({
		[`&${e}-background-ghost`]: Object.assign(
			Object.assign(
				{
					color: t || void 0,
					backgroundColor: 'transparent',
					borderColor: n || void 0,
					boxShadow: 'none'
				},
				mo(
					Object.assign({ backgroundColor: 'transparent' }, a),
					Object.assign({ backgroundColor: 'transparent' }, i)
				)
			),
			{
				'&:disabled': {
					cursor: 'not-allowed',
					color: r || void 0,
					borderColor: o || void 0
				}
			}
		)
	}),
	Wh = e => ({ '&:disabled': Object.assign({}, Kp(e)) }),
	Iw = e => Object.assign({}, Wh(e)),
	Nc = e => ({
		'&:disabled': { cursor: 'not-allowed', color: e.colorTextDisabled }
	}),
	kw = e =>
		Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(Object.assign({}, Iw(e)), {
						backgroundColor: e.colorBgContainer,
						borderColor: e.colorBorder,
						boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
					}),
					mo(
						{ color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
						{ color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
					)
				),
				Oc(
					e.componentCls,
					e.colorBgContainer,
					e.colorBgContainer,
					e.colorTextDisabled,
					e.colorBorder
				)
			),
			{
				[`&${e.componentCls}-dangerous`]: Object.assign(
					Object.assign(
						Object.assign(
							{ color: e.colorError, borderColor: e.colorError },
							mo(
								{
									color: e.colorErrorHover,
									borderColor: e.colorErrorBorderHover
								},
								{ color: e.colorErrorActive, borderColor: e.colorErrorActive }
							)
						),
						Oc(
							e.componentCls,
							e.colorError,
							e.colorError,
							e.colorTextDisabled,
							e.colorBorder
						)
					),
					Wh(e)
				)
			}
		),
	KI = e =>
		Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(Object.assign({}, Iw(e)), {
						color: e.colorTextLightSolid,
						backgroundColor: e.colorPrimary,
						boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
					}),
					mo(
						{
							color: e.colorTextLightSolid,
							backgroundColor: e.colorPrimaryHover
						},
						{
							color: e.colorTextLightSolid,
							backgroundColor: e.colorPrimaryActive
						}
					)
				),
				Oc(
					e.componentCls,
					e.colorPrimary,
					e.colorPrimary,
					e.colorTextDisabled,
					e.colorBorder,
					{ color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
					{ color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
				)
			),
			{
				[`&${e.componentCls}-dangerous`]: Object.assign(
					Object.assign(
						Object.assign(
							{
								backgroundColor: e.colorError,
								boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
							},
							mo(
								{ backgroundColor: e.colorErrorHover },
								{ backgroundColor: e.colorErrorActive }
							)
						),
						Oc(
							e.componentCls,
							e.colorError,
							e.colorError,
							e.colorTextDisabled,
							e.colorBorder,
							{ color: e.colorErrorHover, borderColor: e.colorErrorHover },
							{ color: e.colorErrorActive, borderColor: e.colorErrorActive }
						)
					),
					Wh(e)
				)
			}
		),
	GI = e => Object.assign(Object.assign({}, kw(e)), { borderStyle: 'dashed' }),
	XI = e =>
		Object.assign(
			Object.assign(
				Object.assign(
					{ color: e.colorLink },
					mo({ color: e.colorLinkHover }, { color: e.colorLinkActive })
				),
				Nc(e)
			),
			{
				[`&${e.componentCls}-dangerous`]: Object.assign(
					Object.assign(
						{ color: e.colorError },
						mo({ color: e.colorErrorHover }, { color: e.colorErrorActive })
					),
					Nc(e)
				)
			}
		),
	qI = e =>
		Object.assign(
			Object.assign(
				Object.assign(
					{},
					mo(
						{ color: e.colorText, backgroundColor: e.colorBgTextHover },
						{ color: e.colorText, backgroundColor: e.colorBgTextActive }
					)
				),
				Nc(e)
			),
			{
				[`&${e.componentCls}-dangerous`]: Object.assign(
					Object.assign({ color: e.colorError }, Nc(e)),
					mo(
						{ color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
						{ color: e.colorErrorHover, backgroundColor: e.colorErrorBg }
					)
				)
			}
		),
	QI = e =>
		Object.assign(Object.assign({}, Kp(e)), {
			[`&${e.componentCls}:hover`]: Object.assign({}, Kp(e))
		}),
	ZI = e => {
		const { componentCls: t } = e
		return {
			[`${t}-default`]: kw(e),
			[`${t}-primary`]: KI(e),
			[`${t}-dashed`]: GI(e),
			[`${t}-link`]: XI(e),
			[`${t}-text`]: qI(e),
			[`${t}-disabled`]: QI(e)
		}
	},
	Uh = function (e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
		const {
				componentCls: n,
				iconCls: r,
				controlHeight: o,
				fontSize: a,
				lineHeight: i,
				lineWidth: l,
				borderRadius: s,
				buttonPaddingHorizontal: c
			} = e,
			f = Math.max(0, (o - a * i) / 2 - l),
			d = c - l,
			v = `${n}-icon-only`
		return [
			{
				[`${n}${t}`]: {
					fontSize: a,
					height: o,
					padding: `${f}px ${d}px`,
					borderRadius: s,
					[`&${v}`]: {
						width: o,
						paddingInlineStart: 0,
						paddingInlineEnd: 0,
						[`&${n}-round`]: { width: 'auto' },
						'> span': { transform: 'scale(1.143)' }
					},
					[`&${n}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
					[`${n}-loading-icon`]: {
						transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
					},
					[`&:not(${v}) ${n}-loading-icon > ${r}`]: {
						marginInlineEnd: e.marginXS
					}
				}
			},
			{ [`${n}${n}-circle${t}`]: UI(e) },
			{ [`${n}${n}-round${t}`]: YI(e) }
		]
	},
	JI = e => Uh(e),
	ek = e => {
		const t = Zt(e, {
			controlHeight: e.controlHeightSM,
			padding: e.paddingXS,
			buttonPaddingHorizontal: 8,
			borderRadius: e.borderRadiusSM
		})
		return Uh(t, `${e.componentCls}-sm`)
	},
	tk = e => {
		const t = Zt(e, {
			controlHeight: e.controlHeightLG,
			fontSize: e.fontSizeLG,
			borderRadius: e.borderRadiusLG
		})
		return Uh(t, `${e.componentCls}-lg`)
	},
	nk = e => {
		const { componentCls: t } = e
		return { [t]: { [`&${t}-block`]: { width: '100%' } } }
	},
	rk = So('Button', e => {
		const { controlTmpOutline: t, paddingContentHorizontal: n } = e,
			r = Zt(e, { colorOutlineDefault: t, buttonPaddingHorizontal: n })
		return [
			WI(r),
			ek(r),
			JI(r),
			tk(r),
			nk(r),
			ZI(r),
			FI(r),
			$d(e, { focus: !1 }),
			BI(e)
		]
	})
var ok =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
function ak(e) {
	if (typeof e == 'object' && e) {
		const t = e == null ? void 0 : e.delay
		return {
			loading: !1,
			delay: !Number.isNaN(t) && typeof t == 'number' ? t : 0
		}
	}
	return { loading: !!e, delay: 0 }
}
const ik = (e, t) => {
		const {
				loading: n = !1,
				prefixCls: r,
				type: o = 'default',
				danger: a,
				shape: i = 'default',
				size: l,
				disabled: s,
				className: c,
				rootClassName: f,
				children: d,
				icon: v,
				ghost: p = !1,
				block: h = !1,
				htmlType: g = 'button'
			} = e,
			b = ok(e, [
				'loading',
				'prefixCls',
				'type',
				'danger',
				'shape',
				'size',
				'disabled',
				'className',
				'rootClassName',
				'children',
				'icon',
				'ghost',
				'block',
				'htmlType'
			]),
			{
				getPrefixCls: m,
				autoInsertSpaceInButton: y,
				direction: S
			} = u.useContext(kt),
			C = m('btn', r),
			[x, w] = rk(C),
			E = u.useContext(Dr),
			P = u.useContext(La),
			N = s ?? P,
			O = u.useContext(Nw),
			k = u.useMemo(() => ak(n), [n]),
			[I, $] = u.useState(k.loading),
			[R, M] = u.useState(!1),
			T = t || u.createRef(),
			_ = () => u.Children.count(d) === 1 && !v && !Hf(o),
			D = () => {
				if (!T || !T.current || y === !1) return
				const q = T.current.textContent
				_() && Yp(q) ? R || M(!0) : R && M(!1)
			}
		u.useEffect(() => {
			let q = null
			k.delay > 0
				? (q = window.setTimeout(() => {
						;(q = null), $(!0)
				  }, k.delay))
				: $(k.loading)
			function de() {
				q && (window.clearTimeout(q), (q = null))
			}
			return de
		}, [k]),
			u.useEffect(D, [T])
		const L = q => {
				const { onClick: de } = e
				if (I || N) {
					q.preventDefault()
					return
				}
				de == null || de(q)
			},
			H = y !== !1,
			{ compactSize: j, compactItemClassnames: z } = Ki(C, S),
			A = { large: 'lg', small: 'sm', middle: void 0 },
			W = j || O || l || E,
			Y = (W && A[W]) || '',
			K = I ? 'loading' : v,
			G = Tr(b, ['navigate']),
			te = G.href !== void 0 && N,
			ne = Z(
				C,
				w,
				{
					[`${C}-${i}`]: i !== 'default' && i,
					[`${C}-${o}`]: o,
					[`${C}-${Y}`]: Y,
					[`${C}-icon-only`]: !d && d !== 0 && !!K,
					[`${C}-background-ghost`]: p && !Hf(o),
					[`${C}-loading`]: I,
					[`${C}-two-chinese-chars`]: R && H && !I,
					[`${C}-block`]: h,
					[`${C}-dangerous`]: !!a,
					[`${C}-rtl`]: S === 'rtl',
					[`${C}-disabled`]: te
				},
				z,
				c,
				f
			),
			ie =
				v && !I
					? v
					: u.createElement(LI, { existIcon: !!v, prefixCls: C, loading: !!I }),
			le = d || d === 0 ? DI(d, _() && H) : null
		if (G.href !== void 0)
			return x(
				u.createElement(
					'a',
					Object.assign({}, G, { className: ne, onClick: L, ref: T }),
					ie,
					le
				)
			)
		let ae = u.createElement(
			'button',
			Object.assign({}, b, {
				type: g,
				className: ne,
				onClick: L,
				disabled: N,
				ref: T
			}),
			ie,
			le
		)
		return Hf(o) || (ae = u.createElement(MI, { disabled: !!I }, ae)), x(ae)
	},
	Yh = u.forwardRef(ik)
Yh.Group = II
Yh.__ANT_BUTTON = !0
const Kh = Yh,
	lk = e =>
		e !== void 0 && (e === 'topLeft' || e === 'topRight')
			? 'slide-down'
			: 'slide-up',
	Tw = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`)
var Dw = u.createContext(null),
	Ft = An() ? u.useLayoutEffect : u.useEffect,
	Gp = function (t, n) {
		var r = u.useRef(!0)
		Ft(function () {
			if (!r.current) return t()
		}, n),
			Ft(function () {
				return (
					(r.current = !1),
					function () {
						r.current = !0
					}
				)
			}, [])
	},
	Hy = []
function sk(e, t) {
	var n = u.useState(function () {
			if (!An()) return null
			var h = document.createElement('div')
			return h
		}),
		r = B(n, 1),
		o = r[0],
		a = u.useRef(!1),
		i = u.useContext(Dw),
		l = u.useState(Hy),
		s = B(l, 2),
		c = s[0],
		f = s[1],
		d =
			i ||
			(a.current
				? void 0
				: function (h) {
						f(function (g) {
							var b = [h].concat(xe(g))
							return b
						})
				  })
	function v() {
		o.parentElement || document.body.appendChild(o), (a.current = !0)
	}
	function p() {
		var h
		;(h = o.parentElement) === null || h === void 0 || h.removeChild(o),
			(a.current = !1)
	}
	return (
		Ft(
			function () {
				return e ? (i ? i(v) : v()) : p(), p
			},
			[e]
		),
		Ft(
			function () {
				c.length &&
					(c.forEach(function (h) {
						return h()
					}),
					f(Hy))
			},
			[c]
		),
		[o, d]
	)
}
var Bf
function uk(e) {
	if (typeof document > 'u') return 0
	if (e || Bf === void 0) {
		var t = document.createElement('div')
		;(t.style.width = '100%'), (t.style.height = '200px')
		var n = document.createElement('div'),
			r = n.style
		;(r.position = 'absolute'),
			(r.top = '0'),
			(r.left = '0'),
			(r.pointerEvents = 'none'),
			(r.visibility = 'hidden'),
			(r.width = '200px'),
			(r.height = '150px'),
			(r.overflow = 'hidden'),
			n.appendChild(t),
			document.body.appendChild(n)
		var o = t.offsetWidth
		n.style.overflow = 'scroll'
		var a = t.offsetWidth
		o === a && (a = n.clientWidth), document.body.removeChild(n), (Bf = o - a)
	}
	return Bf
}
function ck() {
	return (
		document.body.scrollHeight >
			(window.innerHeight || document.documentElement.clientHeight) &&
		window.innerWidth > document.body.offsetWidth
	)
}
var dk = 'rc-util-locker-'.concat(Date.now()),
	Vy = 0
function fk(e) {
	var t = !!e,
		n = u.useState(function () {
			return (Vy += 1), ''.concat(dk, '_').concat(Vy)
		}),
		r = B(n, 1),
		o = r[0]
	Ft(
		function () {
			if (t) {
				var a = uk(),
					i = ck()
				Di(
					`
html body {
  overflow-y: hidden;
  `.concat(
						i ? 'width: calc(100% - '.concat(a, 'px);') : '',
						`
}`
					),
					o
				)
			} else xc(o)
			return function () {
				xc(o)
			}
		},
		[t, o]
	)
}
var jy = !1
function vk(e) {
	return typeof e == 'boolean' && (jy = e), jy
}
var By = function (t) {
		return t === !1
			? !1
			: !An() || !t
			? null
			: typeof t == 'string'
			? document.querySelector(t)
			: typeof t == 'function'
			? t()
			: t
	},
	_w = u.forwardRef(function (e, t) {
		var n = e.open,
			r = e.autoLock,
			o = e.getContainer
		e.debug
		var a = e.autoDestroy,
			i = a === void 0 ? !0 : a,
			l = e.children,
			s = u.useState(n),
			c = B(s, 2),
			f = c[0],
			d = c[1],
			v = f || n
		u.useEffect(
			function () {
				;(i || n) && d(n)
			},
			[n, i]
		)
		var p = u.useState(function () {
				return By(o)
			}),
			h = B(p, 2),
			g = h[0],
			b = h[1]
		u.useEffect(function () {
			var k = By(o)
			b(k ?? null)
		})
		var m = sk(v && !g),
			y = B(m, 2),
			S = y[0],
			C = y[1],
			x = g ?? S
		fk(r && n && An() && (x === S || x === document.body))
		var w = null
		if (l && ji(l) && t) {
			var E = l
			w = E.ref
		}
		var P = Jc(w, t)
		if (!v || !An() || g === void 0) return null
		var N = x === !1 || vk(),
			O = l
		return (
			t && (O = u.cloneElement(l, { ref: P })),
			u.createElement(Dw.Provider, { value: C }, N ? O : Ea.createPortal(O, x))
		)
	})
function pk() {
	var e = F({}, Yl)
	return e.useId
}
var Wy = 0
function mk(e) {
	var t = u.useState('ssr-id'),
		n = B(t, 2),
		r = n[0],
		o = n[1],
		a = pk(),
		i = a == null ? void 0 : a()
	return (
		u.useEffect(function () {
			if (!a) {
				var l = Wy
				;(Wy += 1), o('rc_unique_'.concat(l))
			}
		}, []),
		e || i || r
	)
}
var hk = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
	gk = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
	yk = ''
		.concat(hk, ' ')
		.concat(gk)
		.split(/[\s\n]+/),
	bk = 'aria-',
	Sk = 'data-'
function Uy(e, t) {
	return e.indexOf(t) === 0
}
function Ic(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
		n
	t === !1
		? (n = { aria: !0, data: !0, attr: !0 })
		: t === !0
		? (n = { aria: !0 })
		: (n = F({}, t))
	var r = {}
	return (
		Object.keys(e).forEach(function (o) {
			;((n.aria && (o === 'role' || Uy(o, bk))) ||
				(n.data && Uy(o, Sk)) ||
				(n.attr && yk.includes(o))) &&
				(r[o] = e[o])
		}),
		r
	)
}
const ho = u.createContext({}),
	Yy = e => {
		let { children: t, status: n, override: r } = e
		const o = u.useContext(ho),
			a = u.useMemo(() => {
				const i = Object.assign({}, o)
				return (
					r && delete i.isFormItemInput,
					n && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon),
					i
				)
			}, [n, r, o])
		return u.createElement(ho.Provider, { value: a }, t)
	},
	Ck = () => An() && window.document.documentElement
let hu
const wk = () => {
		if (!Ck()) return !1
		if (hu !== void 0) return hu
		const e = document.createElement('div')
		return (
			(e.style.display = 'flex'),
			(e.style.flexDirection = 'column'),
			(e.style.rowGap = '1px'),
			e.appendChild(document.createElement('div')),
			e.appendChild(document.createElement('div')),
			document.body.appendChild(e),
			(hu = e.scrollHeight === 1),
			document.body.removeChild(e),
			hu
		)
	},
	xk = e => ({ animationDuration: e, animationFillMode: 'both' }),
	Ek = e => ({ animationDuration: e, animationFillMode: 'both' }),
	Lw = function (e, t, n, r) {
		const a = (
			arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
		)
			? '&'
			: ''
		return {
			[`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, xk(r)), {
				animationPlayState: 'paused'
			}),
			[`${a}${e}-leave`]: Object.assign(Object.assign({}, Ek(r)), {
				animationPlayState: 'paused'
			}),
			[`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
			[`${a}${e}-leave${e}-leave-active`]: {
				animationName: n,
				animationPlayState: 'running',
				pointerEvents: 'none'
			}
		}
	},
	$k = new Mn('antMoveDownIn', {
		'0%': {
			transform: 'translate3d(0, 100%, 0)',
			transformOrigin: '0 0',
			opacity: 0
		},
		'100%': {
			transform: 'translate3d(0, 0, 0)',
			transformOrigin: '0 0',
			opacity: 1
		}
	}),
	Pk = new Mn('antMoveDownOut', {
		'0%': {
			transform: 'translate3d(0, 0, 0)',
			transformOrigin: '0 0',
			opacity: 1
		},
		'100%': {
			transform: 'translate3d(0, 100%, 0)',
			transformOrigin: '0 0',
			opacity: 0
		}
	}),
	Rk = new Mn('antMoveLeftIn', {
		'0%': {
			transform: 'translate3d(-100%, 0, 0)',
			transformOrigin: '0 0',
			opacity: 0
		},
		'100%': {
			transform: 'translate3d(0, 0, 0)',
			transformOrigin: '0 0',
			opacity: 1
		}
	}),
	Mk = new Mn('antMoveLeftOut', {
		'0%': {
			transform: 'translate3d(0, 0, 0)',
			transformOrigin: '0 0',
			opacity: 1
		},
		'100%': {
			transform: 'translate3d(-100%, 0, 0)',
			transformOrigin: '0 0',
			opacity: 0
		}
	}),
	Ok = new Mn('antMoveRightIn', {
		'0%': {
			transform: 'translate3d(100%, 0, 0)',
			transformOrigin: '0 0',
			opacity: 0
		},
		'100%': {
			transform: 'translate3d(0, 0, 0)',
			transformOrigin: '0 0',
			opacity: 1
		}
	}),
	Nk = new Mn('antMoveRightOut', {
		'0%': {
			transform: 'translate3d(0, 0, 0)',
			transformOrigin: '0 0',
			opacity: 1
		},
		'100%': {
			transform: 'translate3d(100%, 0, 0)',
			transformOrigin: '0 0',
			opacity: 0
		}
	}),
	Ik = new Mn('antMoveUpIn', {
		'0%': {
			transform: 'translate3d(0, -100%, 0)',
			transformOrigin: '0 0',
			opacity: 0
		},
		'100%': {
			transform: 'translate3d(0, 0, 0)',
			transformOrigin: '0 0',
			opacity: 1
		}
	}),
	kk = new Mn('antMoveUpOut', {
		'0%': {
			transform: 'translate3d(0, 0, 0)',
			transformOrigin: '0 0',
			opacity: 1
		},
		'100%': {
			transform: 'translate3d(0, -100%, 0)',
			transformOrigin: '0 0',
			opacity: 0
		}
	}),
	Tk = {
		'move-up': { inKeyframes: Ik, outKeyframes: kk },
		'move-down': { inKeyframes: $k, outKeyframes: Pk },
		'move-left': { inKeyframes: Rk, outKeyframes: Mk },
		'move-right': { inKeyframes: Ok, outKeyframes: Nk }
	},
	kc = (e, t) => {
		const { antCls: n } = e,
			r = `${n}-${t}`,
			{ inKeyframes: o, outKeyframes: a } = Tk[t]
		return [
			Lw(r, o, a, e.motionDurationMid),
			{
				[`
        ${r}-enter,
        ${r}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
				[`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc }
			}
		]
	},
	Gh = new Mn('antSlideUpIn', {
		'0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
		'100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 }
	}),
	Xh = new Mn('antSlideUpOut', {
		'0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
		'100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 }
	}),
	qh = new Mn('antSlideDownIn', {
		'0%': {
			transform: 'scaleY(0.8)',
			transformOrigin: '100% 100%',
			opacity: 0
		},
		'100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 }
	}),
	Qh = new Mn('antSlideDownOut', {
		'0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
		'100%': {
			transform: 'scaleY(0.8)',
			transformOrigin: '100% 100%',
			opacity: 0
		}
	}),
	Dk = new Mn('antSlideLeftIn', {
		'0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
		'100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 }
	}),
	_k = new Mn('antSlideLeftOut', {
		'0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
		'100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 }
	}),
	Lk = new Mn('antSlideRightIn', {
		'0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
		'100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 }
	}),
	Ak = new Mn('antSlideRightOut', {
		'0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
		'100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 }
	}),
	Fk = {
		'slide-up': { inKeyframes: Gh, outKeyframes: Xh },
		'slide-down': { inKeyframes: qh, outKeyframes: Qh },
		'slide-left': { inKeyframes: Dk, outKeyframes: _k },
		'slide-right': { inKeyframes: Lk, outKeyframes: Ak }
	},
	Ai = (e, t) => {
		const { antCls: n } = e,
			r = `${n}-${t}`,
			{ inKeyframes: o, outKeyframes: a } = Fk[t]
		return [
			Lw(r, o, a, e.motionDurationMid),
			{
				[`
      ${r}-enter,
      ${r}-appear
    `]: {
					transform: 'scale(0)',
					transformOrigin: '0% 0%',
					opacity: 0,
					animationTimingFunction: e.motionEaseOutQuint,
					['&-prepare']: { transform: 'scale(1)' }
				},
				[`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint }
			}
		]
	}
function Wf(e) {
	return e !== void 0
}
function Kt(e, t) {
	var n = t || {},
		r = n.defaultValue,
		o = n.value,
		a = n.onChange,
		i = n.postState,
		l = Xo(function () {
			return Wf(o)
				? o
				: Wf(r)
				? typeof r == 'function'
					? r()
					: r
				: typeof e == 'function'
				? e()
				: e
		}),
		s = B(l, 2),
		c = s[0],
		f = s[1],
		d = o !== void 0 ? o : c,
		v = i ? i(d) : d,
		p = Lo(a),
		h = Xo([d]),
		g = B(h, 2),
		b = g[0],
		m = g[1]
	Gp(
		function () {
			var S = b[0]
			c !== S && p(c, S)
		},
		[b]
	),
		Gp(
			function () {
				Wf(o) || f(o)
			},
			[o]
		)
	var y = Lo(function (S, C) {
		f(S, C), m([d], C)
	})
	return [v, y]
}
const Zh = function () {
	if (typeof navigator > 'u' || typeof window > 'u') return !1
	var e = navigator.userAgent || navigator.vendor || window.opera
	return (
		/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
			e
		) ||
		/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
			e == null ? void 0 : e.substr(0, 4)
		)
	)
}
var Aw = u.createContext(null)
function zk() {
	return u.useContext(Aw)
}
function Hk() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
		t = u.useState(!1),
		n = B(t, 2),
		r = n[0],
		o = n[1],
		a = u.useRef(null),
		i = function () {
			window.clearTimeout(a.current)
		}
	u.useEffect(function () {
		return i
	}, [])
	var l = function (c, f) {
		i(),
			(a.current = window.setTimeout(function () {
				o(c), f && f()
			}, e))
	}
	return [r, l, i]
}
function Fw() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
		t = u.useRef(null),
		n = u.useRef(null)
	u.useEffect(function () {
		return function () {
			window.clearTimeout(n.current)
		}
	}, [])
	function r(o) {
		;(o || t.current === null) && (t.current = o),
			window.clearTimeout(n.current),
			(n.current = window.setTimeout(function () {
				t.current = null
			}, e))
	}
	return [
		function () {
			return t.current
		},
		r
	]
}
function Vk(e, t, n, r) {
	var o = u.useRef(null)
	;(o.current = { open: t, triggerOpen: n, customizedTrigger: r }),
		u.useEffect(function () {
			function a(i) {
				var l
				if (
					!((l = o.current) !== null && l !== void 0 && l.customizedTrigger)
				) {
					var s = i.target
					s.shadowRoot && i.composed && (s = i.composedPath()[0] || s),
						o.current.open &&
							e()
								.filter(function (c) {
									return c
								})
								.every(function (c) {
									return !c.contains(s) && c !== s
								}) &&
							o.current.triggerOpen(!1)
				}
			}
			return (
				window.addEventListener('mousedown', a),
				function () {
					return window.removeEventListener('mousedown', a)
				}
			)
		}, [])
}
var jk = [
		'prefixCls',
		'invalidate',
		'item',
		'renderItem',
		'responsive',
		'responsiveDisabled',
		'registerSize',
		'itemKey',
		'className',
		'style',
		'children',
		'display',
		'order',
		'component'
	],
	Ya = void 0
function Bk(e, t) {
	var n = e.prefixCls,
		r = e.invalidate,
		o = e.item,
		a = e.renderItem,
		i = e.responsive,
		l = e.responsiveDisabled,
		s = e.registerSize,
		c = e.itemKey,
		f = e.className,
		d = e.style,
		v = e.children,
		p = e.display,
		h = e.order,
		g = e.component,
		b = g === void 0 ? 'div' : g,
		m = ot(e, jk),
		y = i && !p
	function S(P) {
		s(c, P)
	}
	u.useEffect(function () {
		return function () {
			S(null)
		}
	}, [])
	var C = a && o !== Ya ? a(o) : v,
		x
	r ||
		(x = {
			opacity: y ? 0 : 1,
			height: y ? 0 : Ya,
			overflowY: y ? 'hidden' : Ya,
			order: i ? h : Ya,
			pointerEvents: y ? 'none' : Ya,
			position: y ? 'absolute' : Ya
		})
	var w = {}
	y && (w['aria-hidden'] = !0)
	var E = u.createElement(
		b,
		se({ className: Z(!r && n, f), style: F(F({}, x), d) }, w, m, { ref: t }),
		C
	)
	return (
		i &&
			(E = u.createElement(
				vo,
				{
					onResize: function (N) {
						var O = N.offsetWidth
						S(O)
					},
					disabled: l
				},
				E
			)),
		E
	)
}
var jl = u.forwardRef(Bk)
jl.displayName = 'Item'
function Wk() {
	var e = Xo({}),
		t = B(e, 2),
		n = t[1],
		r = u.useRef([]),
		o = 0,
		a = 0
	function i(l) {
		var s = o
		;(o += 1), r.current.length < s + 1 && (r.current[s] = l)
		var c = r.current[s]
		function f(d) {
			;(r.current[s] = typeof d == 'function' ? d(r.current[s]) : d),
				yt.cancel(a),
				(a = yt(function () {
					n({}, !0)
				}))
		}
		return [c, f]
	}
	return i
}
var Uk = ['component'],
	Yk = ['className'],
	Kk = ['className'],
	Gk = function (t, n) {
		var r = u.useContext(Tc)
		if (!r) {
			var o = t.component,
				a = o === void 0 ? 'div' : o,
				i = ot(t, Uk)
			return u.createElement(a, se({}, i, { ref: n }))
		}
		var l = r.className,
			s = ot(r, Yk),
			c = t.className,
			f = ot(t, Kk)
		return u.createElement(
			Tc.Provider,
			{ value: null },
			u.createElement(jl, se({ ref: n, className: Z(l, c) }, s, f))
		)
	},
	zw = u.forwardRef(Gk)
zw.displayName = 'RawItem'
var Xk = [
		'prefixCls',
		'data',
		'renderItem',
		'renderRawItem',
		'itemKey',
		'itemWidth',
		'ssr',
		'style',
		'className',
		'maxCount',
		'renderRest',
		'renderRawRest',
		'suffix',
		'component',
		'itemComponent',
		'onVisibleChange'
	],
	Tc = u.createContext(null),
	Hw = 'responsive',
	Vw = 'invalidate'
function qk(e) {
	return '+ '.concat(e.length, ' ...')
}
function Qk(e, t) {
	var n = e.prefixCls,
		r = n === void 0 ? 'rc-overflow' : n,
		o = e.data,
		a = o === void 0 ? [] : o,
		i = e.renderItem,
		l = e.renderRawItem,
		s = e.itemKey,
		c = e.itemWidth,
		f = c === void 0 ? 10 : c,
		d = e.ssr,
		v = e.style,
		p = e.className,
		h = e.maxCount,
		g = e.renderRest,
		b = e.renderRawRest,
		m = e.suffix,
		y = e.component,
		S = y === void 0 ? 'div' : y,
		C = e.itemComponent,
		x = e.onVisibleChange,
		w = ot(e, Xk),
		E = Wk(),
		P = d === 'full',
		N = E(null),
		O = B(N, 2),
		k = O[0],
		I = O[1],
		$ = k || 0,
		R = E(new Map()),
		M = B(R, 2),
		T = M[0],
		_ = M[1],
		D = E(0),
		L = B(D, 2),
		H = L[0],
		j = L[1],
		z = E(0),
		A = B(z, 2),
		W = A[0],
		Y = A[1],
		K = E(0),
		G = B(K, 2),
		te = G[0],
		ne = G[1],
		ie = u.useState(null),
		le = B(ie, 2),
		ae = le[0],
		q = le[1],
		de = u.useState(null),
		ve = B(de, 2),
		ee = ve[0],
		fe = ve[1],
		be = u.useMemo(
			function () {
				return ee === null && P ? Number.MAX_SAFE_INTEGER : ee || 0
			},
			[ee, k]
		),
		Me = u.useState(!1),
		Se = B(Me, 2),
		Le = Se[0],
		lt = Se[1],
		et = ''.concat(r, '-item'),
		Xe = Math.max(H, W),
		ze = h === Hw,
		we = a.length && ze,
		ct = h === Vw,
		He = we || (typeof h == 'number' && a.length > h),
		Pe = u.useMemo(
			function () {
				var J = a
				return (
					we
						? k === null && P
							? (J = a)
							: (J = a.slice(0, Math.min(a.length, $ / f)))
						: typeof h == 'number' && (J = a.slice(0, h)),
					J
				)
			},
			[a, f, k, h, we]
		),
		pe = u.useMemo(
			function () {
				return we ? a.slice(be + 1) : a.slice(Pe.length)
			},
			[a, Pe, we, be]
		),
		_e = u.useCallback(
			function (J, oe) {
				var re
				return typeof s == 'function'
					? s(J)
					: (re = s && (J == null ? void 0 : J[s])) !== null && re !== void 0
					? re
					: oe
			},
			[s]
		),
		tt = u.useCallback(
			i ||
				function (J) {
					return J
				},
			[i]
		)
	function Ce(J, oe, re) {
		;(ee === J && (oe === void 0 || oe === ae)) ||
			(fe(J),
			re || (lt(J < a.length - 1), x == null || x(J)),
			oe !== void 0 && q(oe))
	}
	function $e(J, oe) {
		I(oe.clientWidth)
	}
	function Oe(J, oe) {
		_(function (re) {
			var Q = new Map(re)
			return oe === null ? Q.delete(J) : Q.set(J, oe), Q
		})
	}
	function qe(J, oe) {
		Y(oe), j(W)
	}
	function Ue(J, oe) {
		ne(oe)
	}
	function at(J) {
		return T.get(_e(Pe[J], J))
	}
	Ft(
		function () {
			if ($ && Xe && Pe) {
				var J = te,
					oe = Pe.length,
					re = oe - 1
				if (!oe) {
					Ce(0, null)
					return
				}
				for (var Q = 0; Q < oe; Q += 1) {
					var me = at(Q)
					if ((P && (me = me || 0), me === void 0)) {
						Ce(Q - 1, void 0, !0)
						break
					}
					if (
						((J += me),
						(re === 0 && J <= $) || (Q === re - 1 && J + at(re) <= $))
					) {
						Ce(re, null)
						break
					} else if (J + Xe > $) {
						Ce(Q - 1, J - me - te + W)
						break
					}
				}
				m && at(0) + te > $ && q(null)
			}
		},
		[$, T, W, te, _e, Pe]
	)
	var Ae = Le && !!pe.length,
		bt = {}
	ae !== null && we && (bt = { position: 'absolute', left: ae, top: 0 })
	var Fe = { prefixCls: et, responsive: we, component: C, invalidate: ct },
		ye = l
			? function (J, oe) {
					var re = _e(J, oe)
					return u.createElement(
						Tc.Provider,
						{
							key: re,
							value: F(
								F({}, Fe),
								{},
								{
									order: oe,
									item: J,
									itemKey: re,
									registerSize: Oe,
									display: oe <= be
								}
							)
						},
						l(J, oe)
					)
			  }
			: function (J, oe) {
					var re = _e(J, oe)
					return u.createElement(
						jl,
						se({}, Fe, {
							order: oe,
							key: re,
							item: J,
							renderItem: tt,
							itemKey: re,
							registerSize: Oe,
							display: oe <= be
						})
					)
			  },
		it,
		Ye = {
			order: Ae ? be : Number.MAX_SAFE_INTEGER,
			className: ''.concat(et, '-rest'),
			registerSize: qe,
			display: Ae
		}
	if (b)
		b && (it = u.createElement(Tc.Provider, { value: F(F({}, Fe), Ye) }, b(pe)))
	else {
		var Ne = g || qk
		it = u.createElement(
			jl,
			se({}, Fe, Ye),
			typeof Ne == 'function' ? Ne(pe) : Ne
		)
	}
	var nt = u.createElement(
		S,
		se({ className: Z(!ct && r, p), style: v, ref: t }, w),
		Pe.map(ye),
		He ? it : null,
		m &&
			u.createElement(
				jl,
				se({}, Fe, {
					responsive: ze,
					responsiveDisabled: !we,
					order: be,
					className: ''.concat(et, '-suffix'),
					registerSize: Ue,
					display: !0,
					style: bt
				}),
				m
			)
	)
	return (
		ze && (nt = u.createElement(vo, { onResize: $e, disabled: !we }, nt)), nt
	)
}
var Wr = u.forwardRef(Qk)
Wr.displayName = 'Overflow'
Wr.Item = zw
Wr.RESPONSIVE = Hw
Wr.INVALIDATE = Vw
var Dc = function (t) {
		var n = t.className,
			r = t.customizeIcon,
			o = t.customizeIconProps,
			a = t.onMouseDown,
			i = t.onClick,
			l = t.children,
			s
		return (
			typeof r == 'function' ? (s = r(o)) : (s = r),
			u.createElement(
				'span',
				{
					className: n,
					onMouseDown: function (f) {
						f.preventDefault(), a && a(f)
					},
					style: { userSelect: 'none', WebkitUserSelect: 'none' },
					unselectable: 'on',
					onClick: i,
					'aria-hidden': !0
				},
				s !== void 0
					? s
					: u.createElement(
							'span',
							{
								className: Z(
									n.split(/\s+/).map(function (c) {
										return ''.concat(c, '-icon')
									})
								)
							},
							l
					  )
			)
		)
	},
	Zk = function (t, n) {
		var r,
			o,
			a = t.prefixCls,
			i = t.id,
			l = t.inputElement,
			s = t.disabled,
			c = t.tabIndex,
			f = t.autoFocus,
			d = t.autoComplete,
			v = t.editable,
			p = t.activeDescendantId,
			h = t.value,
			g = t.maxLength,
			b = t.onKeyDown,
			m = t.onMouseDown,
			y = t.onChange,
			S = t.onPaste,
			C = t.onCompositionStart,
			x = t.onCompositionEnd,
			w = t.open,
			E = t.attrs,
			P = l || u.createElement('input', null),
			N = P,
			O = N.ref,
			k = N.props,
			I = k.onKeyDown,
			$ = k.onChange,
			R = k.onMouseDown,
			M = k.onCompositionStart,
			T = k.onCompositionEnd,
			_ = k.style
		return (
			'maxLength' in P.props,
			(P = u.cloneElement(
				P,
				F(
					F(
						F({ type: 'search' }, k),
						{},
						{
							id: i,
							ref: Gr(n, O),
							disabled: s,
							tabIndex: c,
							autoComplete: d || 'off',
							autoFocus: f,
							className: Z(
								''.concat(a, '-selection-search-input'),
								(r = P) === null ||
									r === void 0 ||
									(o = r.props) === null ||
									o === void 0
									? void 0
									: o.className
							),
							role: 'combobox',
							'aria-expanded': w,
							'aria-haspopup': 'listbox',
							'aria-owns': ''.concat(i, '_list'),
							'aria-autocomplete': 'list',
							'aria-controls': ''.concat(i, '_list'),
							'aria-activedescendant': p
						},
						E
					),
					{},
					{
						value: v ? h : '',
						maxLength: g,
						readOnly: !v,
						unselectable: v ? null : 'on',
						style: F(F({}, _), {}, { opacity: v ? null : 0 }),
						onKeyDown: function (L) {
							b(L), I && I(L)
						},
						onMouseDown: function (L) {
							m(L), R && R(L)
						},
						onChange: function (L) {
							y(L), $ && $(L)
						},
						onCompositionStart: function (L) {
							C(L), M && M(L)
						},
						onCompositionEnd: function (L) {
							x(L), T && T(L)
						},
						onPaste: S
					}
				)
			)),
			P
		)
	},
	Jh = u.forwardRef(Zk)
Jh.displayName = 'Input'
function jw(e) {
	return Array.isArray(e) ? e : e !== void 0 ? [e] : []
}
var Jk =
		typeof window < 'u' && window.document && window.document.documentElement,
	eT = Jk
function tT(e) {
	return e != null
}
function Ky(e) {
	return ['string', 'number'].includes(Ze(e))
}
function Bw(e) {
	var t = void 0
	return (
		e &&
			(Ky(e.title)
				? (t = e.title.toString())
				: Ky(e.label) && (t = e.label.toString())),
		t
	)
}
function nT(e, t) {
	eT ? u.useLayoutEffect(e, t) : u.useEffect(e, t)
}
function rT(e) {
	var t
	return (t = e.key) !== null && t !== void 0 ? t : e.value
}
var Gy = function (t) {
		t.preventDefault(), t.stopPropagation()
	},
	oT = function (t) {
		var n = t.id,
			r = t.prefixCls,
			o = t.values,
			a = t.open,
			i = t.searchValue,
			l = t.autoClearSearchValue,
			s = t.inputRef,
			c = t.placeholder,
			f = t.disabled,
			d = t.mode,
			v = t.showSearch,
			p = t.autoFocus,
			h = t.autoComplete,
			g = t.activeDescendantId,
			b = t.tabIndex,
			m = t.removeIcon,
			y = t.maxTagCount,
			S = t.maxTagTextLength,
			C = t.maxTagPlaceholder,
			x =
				C === void 0
					? function (q) {
							return '+ '.concat(q.length, ' ...')
					  }
					: C,
			w = t.tagRender,
			E = t.onToggleOpen,
			P = t.onRemove,
			N = t.onInputChange,
			O = t.onInputPaste,
			k = t.onInputKeyDown,
			I = t.onInputMouseDown,
			$ = t.onInputCompositionStart,
			R = t.onInputCompositionEnd,
			M = u.useRef(null),
			T = u.useState(0),
			_ = B(T, 2),
			D = _[0],
			L = _[1],
			H = u.useState(!1),
			j = B(H, 2),
			z = j[0],
			A = j[1],
			W = ''.concat(r, '-selection'),
			Y = a || (d === 'multiple' && l === !1) || d === 'tags' ? i : '',
			K = d === 'tags' || (d === 'multiple' && l === !1) || (v && (a || z))
		nT(
			function () {
				L(M.current.scrollWidth)
			},
			[Y]
		)
		function G(q, de, ve, ee, fe) {
			return u.createElement(
				'span',
				{
					className: Z(
						''.concat(W, '-item'),
						V({}, ''.concat(W, '-item-disabled'), ve)
					),
					title: Bw(q)
				},
				u.createElement(
					'span',
					{ className: ''.concat(W, '-item-content') },
					de
				),
				ee &&
					u.createElement(
						Dc,
						{
							className: ''.concat(W, '-item-remove'),
							onMouseDown: Gy,
							onClick: fe,
							customizeIcon: m
						},
						'×'
					)
			)
		}
		function te(q, de, ve, ee, fe) {
			var be = function (Se) {
				Gy(Se), E(!a)
			}
			return u.createElement(
				'span',
				{ onMouseDown: be },
				w({ label: de, value: q, disabled: ve, closable: ee, onClose: fe })
			)
		}
		function ne(q) {
			var de = q.disabled,
				ve = q.label,
				ee = q.value,
				fe = !f && !de,
				be = ve
			if (
				typeof S == 'number' &&
				(typeof ve == 'string' || typeof ve == 'number')
			) {
				var Me = String(be)
				Me.length > S && (be = ''.concat(Me.slice(0, S), '...'))
			}
			var Se = function (lt) {
				lt && lt.stopPropagation(), P(q)
			}
			return typeof w == 'function'
				? te(ee, be, de, fe, Se)
				: G(q, be, de, fe, Se)
		}
		function ie(q) {
			var de = typeof x == 'function' ? x(q) : x
			return G({ title: de }, de, !1)
		}
		var le = u.createElement(
				'div',
				{
					className: ''.concat(W, '-search'),
					style: { width: D },
					onFocus: function () {
						A(!0)
					},
					onBlur: function () {
						A(!1)
					}
				},
				u.createElement(Jh, {
					ref: s,
					open: a,
					prefixCls: r,
					id: n,
					inputElement: null,
					disabled: f,
					autoFocus: p,
					autoComplete: h,
					editable: K,
					activeDescendantId: g,
					value: Y,
					onKeyDown: k,
					onMouseDown: I,
					onChange: N,
					onPaste: O,
					onCompositionStart: $,
					onCompositionEnd: R,
					tabIndex: b,
					attrs: Ic(t, !0)
				}),
				u.createElement(
					'span',
					{
						ref: M,
						className: ''.concat(W, '-search-mirror'),
						'aria-hidden': !0
					},
					Y,
					' '
				)
			),
			ae = u.createElement(Wr, {
				prefixCls: ''.concat(W, '-overflow'),
				data: o,
				renderItem: ne,
				renderRest: ie,
				suffix: le,
				itemKey: rT,
				maxCount: y
			})
		return u.createElement(
			u.Fragment,
			null,
			ae,
			!o.length &&
				!Y &&
				u.createElement('span', { className: ''.concat(W, '-placeholder') }, c)
		)
	},
	aT = function (t) {
		var n = t.inputElement,
			r = t.prefixCls,
			o = t.id,
			a = t.inputRef,
			i = t.disabled,
			l = t.autoFocus,
			s = t.autoComplete,
			c = t.activeDescendantId,
			f = t.mode,
			d = t.open,
			v = t.values,
			p = t.placeholder,
			h = t.tabIndex,
			g = t.showSearch,
			b = t.searchValue,
			m = t.activeValue,
			y = t.maxLength,
			S = t.onInputKeyDown,
			C = t.onInputMouseDown,
			x = t.onInputChange,
			w = t.onInputPaste,
			E = t.onInputCompositionStart,
			P = t.onInputCompositionEnd,
			N = u.useState(!1),
			O = B(N, 2),
			k = O[0],
			I = O[1],
			$ = f === 'combobox',
			R = $ || g,
			M = v[0],
			T = b || ''
		$ && m && !k && (T = m),
			u.useEffect(
				function () {
					$ && I(!1)
				},
				[$, m]
			)
		var _ = f !== 'combobox' && !d && !g ? !1 : !!T,
			D = Bw(M),
			L = function () {
				if (M) return null
				var j = _ ? { visibility: 'hidden' } : void 0
				return u.createElement(
					'span',
					{ className: ''.concat(r, '-selection-placeholder'), style: j },
					p
				)
			}
		return u.createElement(
			u.Fragment,
			null,
			u.createElement(
				'span',
				{ className: ''.concat(r, '-selection-search') },
				u.createElement(Jh, {
					ref: a,
					prefixCls: r,
					id: o,
					open: d,
					inputElement: n,
					disabled: i,
					autoFocus: l,
					autoComplete: s,
					editable: R,
					activeDescendantId: c,
					value: T,
					onKeyDown: S,
					onMouseDown: C,
					onChange: function (j) {
						I(!0), x(j)
					},
					onPaste: w,
					onCompositionStart: E,
					onCompositionEnd: P,
					tabIndex: h,
					attrs: Ic(t, !0),
					maxLength: $ ? y : void 0
				})
			),
			!$ &&
				M &&
				!_ &&
				u.createElement(
					'span',
					{ className: ''.concat(r, '-selection-item'), title: D },
					M.label
				),
			L()
		)
	}
function iT(e) {
	return ![
		X.ESC,
		X.SHIFT,
		X.BACKSPACE,
		X.TAB,
		X.WIN_KEY,
		X.ALT,
		X.META,
		X.WIN_KEY_RIGHT,
		X.CTRL,
		X.SEMICOLON,
		X.EQUALS,
		X.CAPS_LOCK,
		X.CONTEXT_MENU,
		X.F1,
		X.F2,
		X.F3,
		X.F4,
		X.F5,
		X.F6,
		X.F7,
		X.F8,
		X.F9,
		X.F10,
		X.F11,
		X.F12
	].includes(e)
}
var lT = function (t, n) {
		var r = u.useRef(null),
			o = u.useRef(!1),
			a = t.prefixCls,
			i = t.open,
			l = t.mode,
			s = t.showSearch,
			c = t.tokenWithEnter,
			f = t.autoClearSearchValue,
			d = t.onSearch,
			v = t.onSearchSubmit,
			p = t.onToggleOpen,
			h = t.onInputKeyDown,
			g = t.domRef
		u.useImperativeHandle(n, function () {
			return {
				focus: function () {
					r.current.focus()
				},
				blur: function () {
					r.current.blur()
				}
			}
		})
		var b = Fw(0),
			m = B(b, 2),
			y = m[0],
			S = m[1],
			C = function (_) {
				var D = _.which
				;(D === X.UP || D === X.DOWN) && _.preventDefault(),
					h && h(_),
					D === X.ENTER &&
						l === 'tags' &&
						!o.current &&
						!i &&
						(v == null || v(_.target.value)),
					iT(D) && p(!0)
			},
			x = function () {
				S(!0)
			},
			w = u.useRef(null),
			E = function (_) {
				d(_, !0, o.current) !== !1 && p(!0)
			},
			P = function () {
				o.current = !0
			},
			N = function (_) {
				;(o.current = !1), l !== 'combobox' && E(_.target.value)
			},
			O = function (_) {
				var D = _.target.value
				if (c && w.current && /[\r\n]/.test(w.current)) {
					var L = w.current
						.replace(/[\r\n]+$/, '')
						.replace(/\r\n/g, ' ')
						.replace(/[\r\n]/g, ' ')
					D = D.replace(L, w.current)
				}
				;(w.current = null), E(D)
			},
			k = function (_) {
				var D = _.clipboardData,
					L = D.getData('text')
				w.current = L
			},
			I = function (_) {
				var D = _.target
				if (D !== r.current) {
					var L = document.body.style.msTouchAction !== void 0
					L
						? setTimeout(function () {
								r.current.focus()
						  })
						: r.current.focus()
				}
			},
			$ = function (_) {
				var D = y()
				_.target !== r.current && !D && l !== 'combobox' && _.preventDefault(),
					((l !== 'combobox' && (!s || !D)) || !i) &&
						(i && f !== !1 && d('', !0, !1), p())
			},
			R = {
				inputRef: r,
				onInputKeyDown: C,
				onInputMouseDown: x,
				onInputChange: O,
				onInputPaste: k,
				onInputCompositionStart: P,
				onInputCompositionEnd: N
			},
			M =
				l === 'multiple' || l === 'tags'
					? u.createElement(oT, se({}, t, R))
					: u.createElement(aT, se({}, t, R))
		return u.createElement(
			'div',
			{
				ref: g,
				className: ''.concat(a, '-selector'),
				onClick: I,
				onMouseDown: $
			},
			M
		)
	},
	Ww = u.forwardRef(lT)
Ww.displayName = 'Selector'
var Xy = u.createContext(null)
function qy(e) {
	return e ? (Array.isArray(e) ? e : [e]) : []
}
function sT(e, t, n) {
	var r = qy(t ?? e),
		o = qy(n ?? e)
	return [new Set(r), new Set(o)]
}
function uT() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
		t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
		n = arguments.length > 2 ? arguments[2] : void 0
	return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function cT(e, t, n, r) {
	for (var o = n.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
		var l,
			s = a[i]
		if (uT((l = e[s]) === null || l === void 0 ? void 0 : l.points, o, r))
			return ''.concat(t, '-placement-').concat(s)
	}
	return ''
}
function Qy(e, t, n, r) {
	return (
		t ||
		(n
			? { motionName: ''.concat(e, '-').concat(n) }
			: r
			? { motionName: r }
			: null)
	)
}
function Pd(e) {
	return e.ownerDocument.defaultView
}
function Xp(e) {
	for (
		var t = [],
			n = e == null ? void 0 : e.parentElement,
			r = ['hidden', 'scroll', 'auto'];
		n;

	) {
		var o = Pd(n).getComputedStyle(n),
			a = o.overflowX,
			i = o.overflowY
		;(r.includes(a) || r.includes(i)) && t.push(n), (n = n.parentElement)
	}
	return t
}
function gu(e) {
	return Number.isNaN(e) ? 1 : e
}
function Zy() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
	return [e[0], e[1]]
}
function Ka(e, t) {
	var n = t[0],
		r = t[1],
		o,
		a
	return (
		n === 't'
			? (a = e.y)
			: n === 'b'
			? (a = e.y + e.height)
			: (a = e.y + e.height / 2),
		r === 'l'
			? (o = e.x)
			: r === 'r'
			? (o = e.x + e.width)
			: (o = e.x + e.width / 2),
		{ x: o, y: a }
	)
}
function Eo(e, t) {
	var n = { t: 'b', b: 't', l: 'r', r: 'l' }
	return e
		.map(function (r, o) {
			return o === t ? n[r] || 'c' : r
		})
		.join('')
}
function dT(e, t, n, r, o, a, i) {
	var l = u.useState({
			ready: !1,
			offsetX: 0,
			offsetY: 0,
			arrowX: 0,
			arrowY: 0,
			scaleX: 1,
			scaleY: 1,
			align: o[r] || {}
		}),
		s = B(l, 2),
		c = s[0],
		f = s[1],
		d = u.useRef(0),
		v = u.useMemo(
			function () {
				return t ? Xp(t) : []
			},
			[t]
		),
		p = Lo(function () {
			if (t && n && e) {
				var b = t,
					m = b.style.left,
					y = b.style.top,
					S = b.ownerDocument,
					C = Pd(b),
					x = o[r] || a || {}
				;(b.style.left = '0'), (b.style.top = '0')
				var w
				if (Array.isArray(n)) w = { x: n[0], y: n[1], width: 0, height: 0 }
				else {
					var E = n.getBoundingClientRect()
					w = { x: E.x, y: E.y, width: E.width, height: E.height }
				}
				var P = b.getBoundingClientRect(),
					N = C.getComputedStyle(b),
					O = N.width,
					k = N.height,
					I = S.documentElement,
					$ = I.clientWidth,
					R = I.clientHeight,
					M = I.scrollWidth,
					T = I.scrollHeight,
					_ = I.scrollTop,
					D = I.scrollLeft,
					L = P.height,
					H = P.width,
					j = w.height,
					z = w.width,
					A =
						x.htmlRegion === 'scroll'
							? { left: -D, top: -_, right: M - D, bottom: T - _ }
							: { left: 0, top: 0, right: $, bottom: R }
				;(v || []).forEach(function (Lt) {
					var mt = Lt.getBoundingClientRect(),
						xt = Lt.offsetHeight,
						ht = Lt.clientHeight,
						Re = Lt.offsetWidth,
						Wt = Lt.clientWidth,
						fn = gu(Math.round((mt.width / Re) * 1e3) / 1e3),
						lr = gu(Math.round((mt.height / xt) * 1e3) / 1e3),
						Xn = (Re - Wt) * fn,
						_r = (xt - ht) * lr,
						Lr = mt.x + mt.width - Xn,
						Vn = mt.y + mt.height - _r
					;(A.left = Math.max(A.left, mt.left)),
						(A.top = Math.max(A.top, mt.top)),
						(A.right = Math.min(A.right, Lr)),
						(A.bottom = Math.min(A.bottom, Vn))
				}),
					(b.style.left = m),
					(b.style.top = y)
				var W = gu(Math.round((H / parseFloat(O)) * 1e3) / 1e3),
					Y = gu(Math.round((L / parseFloat(k)) * 1e3) / 1e3)
				if (W === 0 || Y === 0 || (n instanceof HTMLElement && !Ns(n))) return
				var K = x.offset,
					G = x.targetOffset,
					te = K || [],
					ne = B(te, 2),
					ie = ne[0],
					le = ie === void 0 ? 0 : ie,
					ae = ne[1],
					q = ae === void 0 ? 0 : ae,
					de = G || [],
					ve = B(de, 2),
					ee = ve[0],
					fe = ee === void 0 ? 0 : ee,
					be = ve[1],
					Me = be === void 0 ? 0 : be
				;(w.x += fe), (w.y += Me)
				var Se = x.points || [],
					Le = B(Se, 2),
					lt = Le[0],
					et = Le[1],
					Xe = Zy(et),
					ze = Zy(lt),
					we = Ka(w, Xe),
					ct = Ka(P, ze),
					He = F({}, x),
					Pe = we.x - ct.x + le,
					pe = we.y - ct.y + q,
					_e = Ka(w, ['t', 'l']),
					tt = Ka(P, ['t', 'l']),
					Ce = Ka(w, ['b', 'r']),
					$e = Ka(P, ['b', 'r']),
					Oe = x.overflow || {},
					qe = Oe.adjustX,
					Ue = Oe.adjustY,
					at = Oe.shiftX,
					Ae = Oe.shiftY,
					bt = function (mt) {
						return typeof mt == 'boolean' ? mt : mt >= 0
					},
					Fe = P.y + pe,
					ye = Fe + L,
					it = bt(Ue),
					Ye = ze[0] === Xe[0]
				it &&
					ze[0] === 't' &&
					ye > A.bottom &&
					(Ye ? (pe -= L - j) : (pe = _e.y - $e.y - q),
					(He.points = [Eo(ze, 0), Eo(Xe, 0)])),
					it &&
						ze[0] === 'b' &&
						Fe < A.top &&
						(Ye ? (pe += L - j) : (pe = Ce.y - tt.y - q),
						(He.points = [Eo(ze, 0), Eo(Xe, 0)]))
				var Ne = P.x + Pe,
					nt = Ne + H,
					J = bt(qe),
					oe = ze[1] === Xe[1]
				J &&
					ze[1] === 'l' &&
					nt > A.right &&
					(oe ? (Pe -= H - z) : (Pe = _e.x - $e.x - le),
					(He.points = [Eo(ze, 1), Eo(Xe, 1)])),
					J &&
						ze[1] === 'r' &&
						Ne < A.left &&
						(oe ? (Pe += H - z) : (Pe = Ce.x - tt.x - le),
						(He.points = [Eo(ze, 1), Eo(Xe, 1)]))
				var re = at === !0 ? 0 : at
				typeof re == 'number' &&
					(Ne < A.left &&
						((Pe -= Ne - A.left),
						w.x + z < A.left + re && (Pe += w.x - A.left + z - re)),
					nt > A.right &&
						((Pe -= nt - A.right),
						w.x > A.right - re && (Pe += w.x - A.right + re)))
				var Q = Ae === !0 ? 0 : Ae
				typeof Q == 'number' &&
					(Fe < A.top &&
						((pe -= Fe - A.top),
						w.y + j < A.top + Q && (pe += w.y - A.top + j - Q)),
					ye > A.bottom &&
						((pe -= ye - A.bottom),
						w.y > A.bottom - Q && (pe += w.y - A.bottom + Q)))
				var me = P.x + Pe,
					Ve = me + H,
					$t = P.y + pe,
					St = $t + L,
					jt = w.x,
					Te = jt + z,
					dt = w.y,
					Bt = dt + j,
					Jt = Math.max(me, jt),
					en = Math.min(Ve, Te),
					Ct = (Jt + en) / 2,
					Ht = Ct - me,
					rt = Math.max($t, dt),
					je = Math.min(St, Bt),
					wt = (rt + je) / 2,
					Mt = wt - $t
				i == null || i(t, He),
					f({
						ready: !0,
						offsetX: Pe / W,
						offsetY: pe / Y,
						arrowX: Ht / W,
						arrowY: Mt / Y,
						scaleX: W,
						scaleY: Y,
						align: He
					})
			}
		}),
		h = function () {
			d.current += 1
			var m = d.current
			Promise.resolve().then(function () {
				d.current === m && p()
			})
		},
		g = function () {
			f(function (m) {
				return F(F({}, m), {}, { ready: !1 })
			})
		}
	return (
		Ft(g, [r]),
		Ft(
			function () {
				e || g()
			},
			[e]
		),
		[
			c.ready,
			c.offsetX,
			c.offsetY,
			c.arrowX,
			c.arrowY,
			c.scaleX,
			c.scaleY,
			c.align,
			h
		]
	)
}
function fT(e, t, n, r) {
	Ft(
		function () {
			if (e && t && n) {
				let d = function () {
					r()
				}
				var f = d,
					o = t,
					a = n,
					i = Xp(o),
					l = Xp(a),
					s = Pd(a),
					c = new Set([s].concat(xe(i), xe(l)))
				return (
					c.forEach(function (v) {
						v.addEventListener('scroll', d, { passive: !0 })
					}),
					s.addEventListener('resize', d, { passive: !0 }),
					r(),
					function () {
						c.forEach(function (v) {
							v.removeEventListener('scroll', d),
								s.removeEventListener('resize', d)
						})
					}
				)
			}
		},
		[e, t, n]
	)
}
function vT(e) {
	var t = e.prefixCls,
		n = e.align,
		r = e.arrowX,
		o = r === void 0 ? 0 : r,
		a = e.arrowY,
		i = a === void 0 ? 0 : a,
		l = u.useRef()
	if (!n || !n.points) return null
	var s = { position: 'absolute' }
	if (n.autoArrow !== !1) {
		var c = n.points[0],
			f = n.points[1],
			d = c[0],
			v = c[1],
			p = f[0],
			h = f[1]
		d === p || !['t', 'b'].includes(d)
			? (s.top = i)
			: d === 't'
			? (s.top = 0)
			: (s.bottom = 0),
			v === h || !['l', 'r'].includes(v)
				? (s.left = o)
				: v === 'l'
				? (s.left = 0)
				: (s.right = 0)
	}
	return u.createElement('div', {
		ref: l,
		className: ''.concat(t, '-arrow'),
		style: s
	})
}
function pT(e) {
	var t = e.prefixCls,
		n = e.open,
		r = e.zIndex,
		o = e.mask,
		a = e.motion
	return o
		? React.createElement(
				Xr,
				se({}, a, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
				function (i) {
					var l = i.className
					return React.createElement('div', {
						style: { zIndex: r },
						className: Z(''.concat(t, '-mask'), l)
					})
				}
		  )
		: null
}
var mT = u.forwardRef(function (e, t) {
		var n = e.popup,
			r = e.className,
			o = e.prefixCls,
			a = e.style,
			i = e.target,
			l = e.onVisibleChanged,
			s = e.open,
			c = e.keepDom,
			f = e.onClick,
			d = e.mask,
			v = e.arrow,
			p = e.align,
			h = e.arrowX,
			g = e.arrowY,
			b = e.motion,
			m = e.maskMotion,
			y = e.forceRender,
			S = e.getPopupContainer,
			C = e.autoDestroy,
			x = e.portal,
			w = e.zIndex,
			E = e.onMouseEnter,
			P = e.onMouseLeave,
			N = e.ready,
			O = e.offsetX,
			k = e.offsetY,
			I = e.onAlign,
			$ = e.onPrepare,
			R = e.stretch,
			M = e.targetWidth,
			T = e.targetHeight,
			_ = typeof n == 'function' ? n() : n,
			D = s || c,
			L = (S == null ? void 0 : S.length) > 0,
			H = u.useState(!S || !L),
			j = B(H, 2),
			z = j[0],
			A = j[1]
		if (
			(Ft(
				function () {
					!z && L && i && A(!0)
				},
				[z, L, i]
			),
			!z)
		)
			return null
		var W = N || !s ? { left: O, top: k } : { left: '-1000vw', top: '-1000vh' },
			Y = {}
		return (
			R &&
				(R.includes('height') && T
					? (Y.height = T)
					: R.includes('minHeight') && T && (Y.minHeight = T),
				R.includes('width') && M
					? (Y.width = M)
					: R.includes('minWidth') && M && (Y.minWidth = M)),
			s || (Y.pointerEvents = 'none'),
			u.createElement(
				x,
				{
					open: y || D,
					getContainer:
						S &&
						function () {
							return S(i)
						},
					autoDestroy: C
				},
				u.createElement(pT, {
					prefixCls: o,
					open: s,
					zIndex: w,
					mask: d,
					motion: m
				}),
				u.createElement(vo, { onResize: I, disabled: !s }, function (K) {
					return u.createElement(
						Xr,
						se(
							{
								motionAppear: !0,
								motionEnter: !0,
								motionLeave: !0,
								removeOnLeave: !1,
								forceRender: y,
								leavedClassName: ''.concat(o, '-hidden')
							},
							b,
							{
								onAppearPrepare: $,
								onEnterPrepare: $,
								visible: s,
								onVisibleChanged: function (te) {
									var ne
									b == null ||
										(ne = b.onVisibleChanged) === null ||
										ne === void 0 ||
										ne.call(b, te),
										l(te)
								}
							}
						),
						function (G, te) {
							var ne = G.className,
								ie = G.style,
								le = Z(o, ne, r)
							return u.createElement(
								'div',
								{
									ref: Gr(K, t, te),
									className: le,
									style: F(
										F(F(F({}, W), Y), ie),
										{},
										{ boxSizing: 'border-box', zIndex: w },
										a
									),
									onMouseEnter: E,
									onMouseLeave: P,
									onClick: f
								},
								v &&
									u.createElement(vT, {
										prefixCls: o,
										align: p,
										arrowX: h,
										arrowY: g
									}),
								_
							)
						}
					)
				})
			)
		)
	}),
	hT = u.forwardRef(function (e, t) {
		var n = e.children,
			r = e.getTriggerDOMNode,
			o = ji(n),
			a = u.useCallback(
				function (l) {
					zm(t, r ? r(l) : l)
				},
				[r]
			),
			i = Jc(a, n.ref)
		return o ? u.cloneElement(n, { ref: i }) : n
	}),
	gT = [
		'prefixCls',
		'children',
		'action',
		'showAction',
		'hideAction',
		'popupVisible',
		'defaultPopupVisible',
		'onPopupVisibleChange',
		'afterPopupVisibleChange',
		'mouseEnterDelay',
		'mouseLeaveDelay',
		'focusDelay',
		'blurDelay',
		'mask',
		'maskClosable',
		'getPopupContainer',
		'forceRender',
		'autoDestroy',
		'destroyPopupOnHide',
		'popup',
		'popupClassName',
		'popupStyle',
		'popupPlacement',
		'builtinPlacements',
		'popupAlign',
		'zIndex',
		'stretch',
		'getPopupClassNameFromAlign',
		'alignPoint',
		'onPopupClick',
		'onPopupAlign',
		'arrow',
		'popupMotion',
		'maskMotion',
		'popupTransitionName',
		'popupAnimation',
		'maskTransitionName',
		'maskAnimation',
		'className',
		'getTriggerDOMNode'
	]
function yT() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _w,
		t = u.forwardRef(function (n, r) {
			var o = n.prefixCls,
				a = o === void 0 ? 'rc-trigger-popup' : o,
				i = n.children,
				l = n.action,
				s = l === void 0 ? 'hover' : l,
				c = n.showAction,
				f = n.hideAction,
				d = n.popupVisible,
				v = n.defaultPopupVisible,
				p = n.onPopupVisibleChange,
				h = n.afterPopupVisibleChange,
				g = n.mouseEnterDelay,
				b = n.mouseLeaveDelay,
				m = b === void 0 ? 0.1 : b,
				y = n.focusDelay,
				S = n.blurDelay,
				C = n.mask,
				x = n.maskClosable,
				w = x === void 0 ? !0 : x,
				E = n.getPopupContainer,
				P = n.forceRender,
				N = n.autoDestroy,
				O = n.destroyPopupOnHide,
				k = n.popup,
				I = n.popupClassName,
				$ = n.popupStyle,
				R = n.popupPlacement,
				M = n.builtinPlacements,
				T = M === void 0 ? {} : M,
				_ = n.popupAlign,
				D = n.zIndex,
				L = n.stretch,
				H = n.getPopupClassNameFromAlign,
				j = n.alignPoint,
				z = n.onPopupClick,
				A = n.onPopupAlign,
				W = n.arrow,
				Y = n.popupMotion,
				K = n.maskMotion,
				G = n.popupTransitionName,
				te = n.popupAnimation,
				ne = n.maskTransitionName,
				ie = n.maskAnimation,
				le = n.className,
				ae = n.getTriggerDOMNode,
				q = ot(n, gT),
				de = N || O || !1,
				ve = u.useRef({}),
				ee = u.useContext(Xy),
				fe = u.useMemo(
					function () {
						return {
							registerSubPopup: function (Ge, Dt) {
								;(ve.current[Ge] = Dt),
									ee == null || ee.registerSubPopup(Ge, Dt)
							}
						}
					},
					[ee]
				),
				be = mk(),
				Me = u.useState(null),
				Se = B(Me, 2),
				Le = Se[0],
				lt = Se[1],
				et = u.useCallback(function (ke) {
					ke instanceof HTMLElement && lt(ke),
						ee == null || ee.registerSubPopup(be, ke)
				}, []),
				Xe = u.useState(null),
				ze = B(Xe, 2),
				we = ze[0],
				ct = ze[1],
				He = u.useCallback(function (ke) {
					ke instanceof HTMLElement && ct(ke)
				}, []),
				Pe = u.Children.only(i),
				pe = (Pe == null ? void 0 : Pe.props) || {},
				_e = {},
				tt = Lo(function (ke) {
					var Ge = we
					return (
						(Ge == null ? void 0 : Ge.contains(ke)) ||
						ke === Ge ||
						(Le == null ? void 0 : Le.contains(ke)) ||
						ke === Le ||
						Object.values(ve.current).some(function (Dt) {
							return Dt.contains(ke) || ke === Dt
						})
					)
				}),
				Ce = Qy(a, Y, te, G),
				$e = Qy(a, K, ie, ne),
				Oe = u.useState(v || !1),
				qe = B(Oe, 2),
				Ue = qe[0],
				at = qe[1],
				Ae = d ?? Ue,
				bt = Lo(function (ke) {
					d === void 0 && at(ke)
				})
			Ft(
				function () {
					at(d || !1)
				},
				[d]
			)
			var Fe = u.useRef(Ae)
			Fe.current = Ae
			var ye = Lo(function (ke) {
					Ae !== ke && (bt(ke), p == null || p(ke))
				}),
				it = u.useRef(),
				Ye = function () {
					clearTimeout(it.current)
				},
				Ne = function (Ge) {
					var Dt =
						arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
					Ye(),
						Dt === 0
							? ye(Ge)
							: (it.current = setTimeout(function () {
									ye(Ge)
							  }, Dt * 1e3))
				}
			u.useEffect(function () {
				return Ye
			}, [])
			var nt = u.useState(!1),
				J = B(nt, 2),
				oe = J[0],
				re = J[1],
				Q = u.useRef(!0)
			Ft(
				function () {
					;(!Q.current || Ae) && re(!0), (Q.current = !0)
				},
				[Ae]
			)
			var me = u.useState(null),
				Ve = B(me, 2),
				$t = Ve[0],
				St = Ve[1],
				jt = u.useState([0, 0]),
				Te = B(jt, 2),
				dt = Te[0],
				Bt = Te[1],
				Jt = function (Ge) {
					Bt([Ge.clientX, Ge.clientY])
				},
				en = dT(Ae, Le, j ? dt : we, R, T, _, A),
				Ct = B(en, 9),
				Ht = Ct[0],
				rt = Ct[1],
				je = Ct[2],
				wt = Ct[3],
				Mt = Ct[4],
				Lt = Ct[5],
				mt = Ct[6],
				xt = Ct[7],
				ht = Ct[8],
				Re = Lo(function () {
					oe || ht()
				})
			fT(Ae, we, Le, Re),
				Ft(
					function () {
						Re()
					},
					[dt]
				),
				Ft(
					function () {
						Ae && !(T != null && T[R]) && Re()
					},
					[JSON.stringify(_)]
				)
			var Wt = u.useMemo(
				function () {
					var ke = cT(T, a, xt, j)
					return Z(ke, H == null ? void 0 : H(xt))
				},
				[xt, H, T, a, j]
			)
			u.useImperativeHandle(r, function () {
				return { forceAlign: Re }
			})
			var fn = function (Ge) {
					re(!1), ht(), h == null || h(Ge)
				},
				lr = function () {
					return new Promise(function (Ge) {
						St(function () {
							return Ge
						})
					})
				}
			Ft(
				function () {
					$t && (ht(), $t(), St(null))
				},
				[$t]
			)
			var Xn = u.useState(0),
				_r = B(Xn, 2),
				Lr = _r[0],
				Vn = _r[1],
				br = u.useState(0),
				jn = B(br, 2),
				Ke = jn[0],
				De = jn[1],
				qt = function (Ge, Dt) {
					if ((Re(), L)) {
						var gn = Dt.getBoundingClientRect()
						Vn(gn.width), De(gn.height)
					}
				},
				tn = sT(s, c, f),
				Rt = B(tn, 2),
				Je = Rt[0],
				Be = Rt[1],
				ut = function (Ge, Dt, gn, Ut) {
					_e[Ge] = function (Vs) {
						var Va
						Ut == null || Ut(Vs), Ne(Dt, gn)
						for (
							var nl = arguments.length,
								rl = new Array(nl > 1 ? nl - 1 : 0),
								Sr = 1;
							Sr < nl;
							Sr++
						)
							rl[Sr - 1] = arguments[Sr]
						;(Va = pe[Ge]) === null ||
							Va === void 0 ||
							Va.call.apply(Va, [pe, Vs].concat(rl))
					}
				},
				Pt = Je.has('click'),
				Tt = Be.has('click') || Be.has('contextMenu')
			;(Pt || Tt) &&
				(_e.onClick = function (ke) {
					var Ge
					Fe.current && Tt ? Ne(!1) : !Fe.current && Pt && (Jt(ke), Ne(!0))
					for (
						var Dt = arguments.length,
							gn = new Array(Dt > 1 ? Dt - 1 : 0),
							Ut = 1;
						Ut < Dt;
						Ut++
					)
						gn[Ut - 1] = arguments[Ut]
					;(Ge = pe.onClick) === null ||
						Ge === void 0 ||
						Ge.call.apply(Ge, [pe, ke].concat(gn))
				}),
				u.useEffect(
					function () {
						if (Tt && Le && (!C || w)) {
							var ke = function (gn) {
									var Ut = gn.target
									Fe.current && !tt(Ut) && Ne(!1)
								},
								Ge = Pd(Le)
							return (
								Ge.addEventListener('click', ke),
								function () {
									Ge.removeEventListener('click', ke)
								}
							)
						}
					},
					[Tt, Le, C, w]
				)
			var nn = Je.has('hover'),
				sr = Be.has('hover'),
				Co,
				ra
			nn &&
				(ut('onMouseEnter', !0, g, function (ke) {
					Jt(ke)
				}),
				(Co = function () {
					Ne(!0, g)
				}),
				j &&
					(_e.onMouseMove = function (ke) {
						var Ge
						;(Ge = pe.onMouseMove) === null || Ge === void 0 || Ge.call(pe, ke)
					})),
				sr &&
					(ut('onMouseLeave', !1, m),
					(ra = function () {
						Ne(!1, m)
					})),
				Je.has('focus') && ut('onFocus', !0, y),
				Be.has('focus') && ut('onBlur', !1, S),
				Je.has('contextMenu') &&
					(_e.onContextMenu = function (ke) {
						var Ge
						Jt(ke), Ne(!0), ke.preventDefault()
						for (
							var Dt = arguments.length,
								gn = new Array(Dt > 1 ? Dt - 1 : 0),
								Ut = 1;
							Ut < Dt;
							Ut++
						)
							gn[Ut - 1] = arguments[Ut]
						;(Ge = pe.onContextMenu) === null ||
							Ge === void 0 ||
							Ge.call.apply(Ge, [pe, ke].concat(gn))
					}),
				le && (_e.className = Z(pe.className, le))
			var Ha = F(F({}, pe), _e),
				el = {},
				Bd = [
					'onContextMenu',
					'onClick',
					'onMouseDown',
					'onTouchStart',
					'onMouseEnter',
					'onMouseLeave',
					'onFocus',
					'onBlur'
				]
			Bd.forEach(function (ke) {
				q[ke] &&
					(el[ke] = function () {
						for (
							var Ge, Dt = arguments.length, gn = new Array(Dt), Ut = 0;
							Ut < Dt;
							Ut++
						)
							gn[Ut] = arguments[Ut]
						;(Ge = Ha[ke]) === null ||
							Ge === void 0 ||
							Ge.call.apply(Ge, [Ha].concat(gn)),
							q[ke].apply(q, gn)
					})
			})
			var tl = u.cloneElement(Pe, F(F({}, Ha), el))
			return u.createElement(
				u.Fragment,
				null,
				u.createElement(
					vo,
					{ disabled: !Ae, ref: He, onResize: qt },
					u.createElement(hT, { getTriggerDOMNode: ae }, tl)
				),
				u.createElement(
					Xy.Provider,
					{ value: fe },
					u.createElement(mT, {
						portal: e,
						ref: et,
						prefixCls: a,
						popup: k,
						className: Z(I, Wt),
						style: $,
						target: we,
						onMouseEnter: Co,
						onMouseLeave: ra,
						zIndex: D,
						open: Ae,
						keepDom: oe,
						onClick: z,
						mask: C,
						motion: Ce,
						maskMotion: $e,
						onVisibleChanged: fn,
						onPrepare: lr,
						forceRender: P,
						autoDestroy: de,
						getPopupContainer: E,
						align: xt,
						arrow: W,
						ready: Ht,
						offsetX: rt,
						offsetY: je,
						arrowX: wt,
						arrowY: Mt,
						onAlign: Re,
						stretch: L,
						targetWidth: Lr / Lt,
						targetHeight: Ke / mt
					})
				)
			)
		})
	return t
}
const Uw = yT(_w)
var bT = [
		'prefixCls',
		'disabled',
		'visible',
		'children',
		'popupElement',
		'containerWidth',
		'animation',
		'transitionName',
		'dropdownStyle',
		'dropdownClassName',
		'direction',
		'placement',
		'dropdownMatchSelectWidth',
		'dropdownRender',
		'dropdownAlign',
		'getPopupContainer',
		'empty',
		'getTriggerDOMNode',
		'onPopupVisibleChange',
		'onPopupMouseEnter'
	],
	ST = function (t) {
		var n = t === !0 ? 0 : 1
		return {
			bottomLeft: {
				points: ['tl', 'bl'],
				offset: [0, 4],
				overflow: { adjustX: n, adjustY: 1 },
				htmlRegion: 'scroll'
			},
			bottomRight: {
				points: ['tr', 'br'],
				offset: [0, 4],
				overflow: { adjustX: n, adjustY: 1 },
				htmlRegion: 'scroll'
			},
			topLeft: {
				points: ['bl', 'tl'],
				offset: [0, -4],
				overflow: { adjustX: n, adjustY: 1 },
				htmlRegion: 'scroll'
			},
			topRight: {
				points: ['br', 'tr'],
				offset: [0, -4],
				overflow: { adjustX: n, adjustY: 1 },
				htmlRegion: 'scroll'
			}
		}
	},
	CT = function (t, n) {
		var r = t.prefixCls
		t.disabled
		var o = t.visible,
			a = t.children,
			i = t.popupElement,
			l = t.containerWidth,
			s = t.animation,
			c = t.transitionName,
			f = t.dropdownStyle,
			d = t.dropdownClassName,
			v = t.direction,
			p = v === void 0 ? 'ltr' : v,
			h = t.placement,
			g = t.dropdownMatchSelectWidth,
			b = t.dropdownRender,
			m = t.dropdownAlign,
			y = t.getPopupContainer,
			S = t.empty,
			C = t.getTriggerDOMNode,
			x = t.onPopupVisibleChange,
			w = t.onPopupMouseEnter,
			E = ot(t, bT),
			P = ''.concat(r, '-dropdown'),
			N = i
		b && (N = b(i))
		var O = u.useMemo(
				function () {
					return ST(g)
				},
				[g]
			),
			k = s ? ''.concat(P, '-').concat(s) : c,
			I = u.useRef(null)
		u.useImperativeHandle(n, function () {
			return {
				getPopupElement: function () {
					return I.current
				}
			}
		})
		var $ = F({ minWidth: l }, f)
		return (
			typeof g == 'number' ? ($.width = g) : g && ($.width = l),
			u.createElement(
				Uw,
				se({}, E, {
					showAction: x ? ['click'] : [],
					hideAction: x ? ['click'] : [],
					popupPlacement: h || (p === 'rtl' ? 'bottomRight' : 'bottomLeft'),
					builtinPlacements: O,
					prefixCls: P,
					popupTransitionName: k,
					popup: u.createElement('div', { ref: I, onMouseEnter: w }, N),
					popupAlign: m,
					popupVisible: o,
					getPopupContainer: y,
					popupClassName: Z(d, V({}, ''.concat(P, '-empty'), S)),
					popupStyle: $,
					getTriggerDOMNode: C,
					onPopupVisibleChange: x
				}),
				a
			)
		)
	},
	Yw = u.forwardRef(CT)
Yw.displayName = 'SelectTrigger'
function Jy(e, t) {
	var n = e.key,
		r
	return (
		'value' in e && (r = e.value),
		n ?? (r !== void 0 ? r : 'rc-index-key-'.concat(t))
	)
}
function Kw(e, t) {
	var n = e || {},
		r = n.label,
		o = n.value,
		a = n.options
	return {
		label: r || (t ? 'children' : 'label'),
		value: o || 'value',
		options: a || 'options'
	}
}
function wT(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		n = t.fieldNames,
		r = t.childrenAsData,
		o = [],
		a = Kw(n, !1),
		i = a.label,
		l = a.value,
		s = a.options
	function c(f, d) {
		f.forEach(function (v) {
			var p = v[i]
			if (d || !(s in v)) {
				var h = v[l]
				o.push({
					key: Jy(v, o.length),
					groupOption: d,
					data: v,
					label: p,
					value: h
				})
			} else {
				var g = p
				g === void 0 && r && (g = v.label),
					o.push({ key: Jy(v, o.length), group: !0, data: v, label: g }),
					c(v[s], !0)
			}
		})
	}
	return c(e, !1), o
}
function qp(e) {
	var t = F({}, e)
	return (
		'props' in t ||
			Object.defineProperty(t, 'props', {
				get: function () {
					return (
						En(
							!1,
							'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.'
						),
						t
					)
				}
			}),
		t
	)
}
function xT(e, t) {
	if (!t || !t.length) return null
	var n = !1
	function r(a, i) {
		var l = UC(i),
			s = l[0],
			c = l.slice(1)
		if (!s) return [a]
		var f = a.split(s)
		return (
			(n = n || f.length > 1),
			f
				.reduce(function (d, v) {
					return [].concat(xe(d), xe(r(v, c)))
				}, [])
				.filter(function (d) {
					return d
				})
		)
	}
	var o = r(e, t)
	return n ? o : null
}
var ET = [
		'id',
		'prefixCls',
		'className',
		'showSearch',
		'tagRender',
		'direction',
		'omitDomProps',
		'displayValues',
		'onDisplayValuesChange',
		'emptyOptions',
		'notFoundContent',
		'onClear',
		'mode',
		'disabled',
		'loading',
		'getInputElement',
		'getRawInputElement',
		'open',
		'defaultOpen',
		'onDropdownVisibleChange',
		'activeValue',
		'onActiveValueChange',
		'activeDescendantId',
		'searchValue',
		'autoClearSearchValue',
		'onSearch',
		'onSearchSplit',
		'tokenSeparators',
		'allowClear',
		'showArrow',
		'inputIcon',
		'clearIcon',
		'OptionList',
		'animation',
		'transitionName',
		'dropdownStyle',
		'dropdownClassName',
		'dropdownMatchSelectWidth',
		'dropdownRender',
		'dropdownAlign',
		'placement',
		'getPopupContainer',
		'showAction',
		'onFocus',
		'onBlur',
		'onKeyUp',
		'onKeyDown',
		'onMouseDown'
	],
	$T = [
		'value',
		'onChange',
		'removeIcon',
		'placeholder',
		'autoFocus',
		'maxTagCount',
		'maxTagTextLength',
		'maxTagPlaceholder',
		'choiceTransitionName',
		'onInputKeyDown',
		'onPopupScroll',
		'tabIndex'
	]
function Qp(e) {
	return e === 'tags' || e === 'multiple'
}
var PT = u.forwardRef(function (e, t) {
	var n,
		r,
		o = e.id,
		a = e.prefixCls,
		i = e.className,
		l = e.showSearch,
		s = e.tagRender,
		c = e.direction,
		f = e.omitDomProps,
		d = e.displayValues,
		v = e.onDisplayValuesChange,
		p = e.emptyOptions,
		h = e.notFoundContent,
		g = h === void 0 ? 'Not Found' : h,
		b = e.onClear,
		m = e.mode,
		y = e.disabled,
		S = e.loading,
		C = e.getInputElement,
		x = e.getRawInputElement,
		w = e.open,
		E = e.defaultOpen,
		P = e.onDropdownVisibleChange,
		N = e.activeValue,
		O = e.onActiveValueChange,
		k = e.activeDescendantId,
		I = e.searchValue,
		$ = e.autoClearSearchValue,
		R = e.onSearch,
		M = e.onSearchSplit,
		T = e.tokenSeparators,
		_ = e.allowClear,
		D = e.showArrow,
		L = e.inputIcon,
		H = e.clearIcon,
		j = e.OptionList,
		z = e.animation,
		A = e.transitionName,
		W = e.dropdownStyle,
		Y = e.dropdownClassName,
		K = e.dropdownMatchSelectWidth,
		G = e.dropdownRender,
		te = e.dropdownAlign,
		ne = e.placement,
		ie = e.getPopupContainer,
		le = e.showAction,
		ae = le === void 0 ? [] : le,
		q = e.onFocus,
		de = e.onBlur,
		ve = e.onKeyUp,
		ee = e.onKeyDown,
		fe = e.onMouseDown,
		be = ot(e, ET),
		Me = Qp(m),
		Se = (l !== void 0 ? l : Me) || m === 'combobox',
		Le = F({}, be)
	$T.forEach(function (Ke) {
		delete Le[Ke]
	}),
		f == null ||
			f.forEach(function (Ke) {
				delete Le[Ke]
			})
	var lt = u.useState(!1),
		et = B(lt, 2),
		Xe = et[0],
		ze = et[1]
	u.useEffect(function () {
		ze(Zh())
	}, [])
	var we = u.useRef(null),
		ct = u.useRef(null),
		He = u.useRef(null),
		Pe = u.useRef(null),
		pe = u.useRef(null),
		_e = Hk(),
		tt = B(_e, 3),
		Ce = tt[0],
		$e = tt[1],
		Oe = tt[2]
	u.useImperativeHandle(t, function () {
		var Ke, De
		return {
			focus: (Ke = Pe.current) === null || Ke === void 0 ? void 0 : Ke.focus,
			blur: (De = Pe.current) === null || De === void 0 ? void 0 : De.blur,
			scrollTo: function (tn) {
				var Rt
				return (Rt = pe.current) === null || Rt === void 0
					? void 0
					: Rt.scrollTo(tn)
			}
		}
	})
	var qe = u.useMemo(
			function () {
				var Ke
				if (m !== 'combobox') return I
				var De = (Ke = d[0]) === null || Ke === void 0 ? void 0 : Ke.value
				return typeof De == 'string' || typeof De == 'number' ? String(De) : ''
			},
			[I, m, d]
		),
		Ue = (m === 'combobox' && typeof C == 'function' && C()) || null,
		at = typeof x == 'function' && x(),
		Ae = Jc(
			ct,
			at == null || (n = at.props) === null || n === void 0 ? void 0 : n.ref
		),
		bt = Kt(void 0, { defaultValue: E, value: w }),
		Fe = B(bt, 2),
		ye = Fe[0],
		it = Fe[1],
		Ye = ye,
		Ne = !g && p
	;(y || (Ne && Ye && m === 'combobox')) && (Ye = !1)
	var nt = Ne ? !1 : Ye,
		J = u.useCallback(
			function (Ke) {
				var De = Ke !== void 0 ? Ke : !Ye
				y || (it(De), Ye !== De && (P == null || P(De)))
			},
			[y, Ye, it, P]
		),
		oe = u.useMemo(
			function () {
				return (T || []).some(function (Ke) {
					return [
						`
`,
						`\r
`
					].includes(Ke)
				})
			},
			[T]
		),
		re = function (De, qt, tn) {
			var Rt = !0,
				Je = De
			O == null || O(null)
			var Be = tn ? null : xT(De, T)
			return (
				m !== 'combobox' &&
					Be &&
					((Je = ''), M == null || M(Be), J(!1), (Rt = !1)),
				R && qe !== Je && R(Je, { source: qt ? 'typing' : 'effect' }),
				Rt
			)
		},
		Q = function (De) {
			!De || !De.trim() || R(De, { source: 'submit' })
		}
	u.useEffect(
		function () {
			!Ye && !Me && m !== 'combobox' && re('', !1, !1)
		},
		[Ye]
	),
		u.useEffect(
			function () {
				ye && y && it(!1), y && $e(!1)
			},
			[y]
		)
	var me = Fw(),
		Ve = B(me, 2),
		$t = Ve[0],
		St = Ve[1],
		jt = function (De) {
			var qt = $t(),
				tn = De.which
			if (
				(tn === X.ENTER &&
					(m !== 'combobox' && De.preventDefault(), Ye || J(!0)),
				St(!!qe),
				tn === X.BACKSPACE && !qt && Me && !qe && d.length)
			) {
				for (var Rt = xe(d), Je = null, Be = Rt.length - 1; Be >= 0; Be -= 1) {
					var ut = Rt[Be]
					if (!ut.disabled) {
						Rt.splice(Be, 1), (Je = ut)
						break
					}
				}
				Je && v(Rt, { type: 'remove', values: [Je] })
			}
			for (
				var Pt = arguments.length, Tt = new Array(Pt > 1 ? Pt - 1 : 0), nn = 1;
				nn < Pt;
				nn++
			)
				Tt[nn - 1] = arguments[nn]
			if (Ye && pe.current) {
				var sr
				;(sr = pe.current).onKeyDown.apply(sr, [De].concat(Tt))
			}
			ee == null || ee.apply(void 0, [De].concat(Tt))
		},
		Te = function (De) {
			for (
				var qt = arguments.length, tn = new Array(qt > 1 ? qt - 1 : 0), Rt = 1;
				Rt < qt;
				Rt++
			)
				tn[Rt - 1] = arguments[Rt]
			if (Ye && pe.current) {
				var Je
				;(Je = pe.current).onKeyUp.apply(Je, [De].concat(tn))
			}
			ve == null || ve.apply(void 0, [De].concat(tn))
		},
		dt = function (De) {
			var qt = d.filter(function (tn) {
				return tn !== De
			})
			v(qt, { type: 'remove', values: [De] })
		},
		Bt = u.useRef(!1),
		Jt = function () {
			$e(!0),
				y ||
					(q && !Bt.current && q.apply(void 0, arguments),
					ae.includes('focus') && J(!0)),
				(Bt.current = !0)
		},
		en = function () {
			$e(!1, function () {
				;(Bt.current = !1), J(!1)
			}),
				!y &&
					(qe &&
						(m === 'tags'
							? R(qe, { source: 'submit' })
							: m === 'multiple' && R('', { source: 'blur' })),
					de && de.apply(void 0, arguments))
		},
		Ct = []
	u.useEffect(function () {
		return function () {
			Ct.forEach(function (Ke) {
				return clearTimeout(Ke)
			}),
				Ct.splice(0, Ct.length)
		}
	}, [])
	var Ht = function (De) {
			var qt,
				tn = De.target,
				Rt =
					(qt = He.current) === null || qt === void 0
						? void 0
						: qt.getPopupElement()
			if (Rt && Rt.contains(tn)) {
				var Je = setTimeout(function () {
					var Tt = Ct.indexOf(Je)
					if (
						(Tt !== -1 && Ct.splice(Tt, 1),
						Oe(),
						!Xe && !Rt.contains(document.activeElement))
					) {
						var nn
						;(nn = Pe.current) === null || nn === void 0 || nn.focus()
					}
				})
				Ct.push(Je)
			}
			for (
				var Be = arguments.length, ut = new Array(Be > 1 ? Be - 1 : 0), Pt = 1;
				Pt < Be;
				Pt++
			)
				ut[Pt - 1] = arguments[Pt]
			fe == null || fe.apply(void 0, [De].concat(ut))
		},
		rt = u.useState(null),
		je = B(rt, 2),
		wt = je[0],
		Mt = je[1],
		Lt = u.useState({}),
		mt = B(Lt, 2),
		xt = mt[1]
	function ht() {
		xt({})
	}
	Ft(
		function () {
			if (nt) {
				var Ke,
					De = Math.ceil(
						(Ke = we.current) === null || Ke === void 0
							? void 0
							: Ke.offsetWidth
					)
				wt !== De && !Number.isNaN(De) && Mt(De)
			}
		},
		[nt]
	)
	var Re
	at &&
		(Re = function (De) {
			J(De)
		}),
		Vk(
			function () {
				var Ke
				return [
					we.current,
					(Ke = He.current) === null || Ke === void 0
						? void 0
						: Ke.getPopupElement()
				]
			},
			nt,
			J,
			!!at
		)
	var Wt = u.useMemo(
			function () {
				return F(
					F({}, e),
					{},
					{
						notFoundContent: g,
						open: Ye,
						triggerOpen: nt,
						id: o,
						showSearch: Se,
						multiple: Me,
						toggleOpen: J
					}
				)
			},
			[e, g, nt, Ye, o, Se, Me, J]
		),
		fn = D !== void 0 ? D : S || (!Me && m !== 'combobox'),
		lr
	fn &&
		(lr = u.createElement(Dc, {
			className: Z(
				''.concat(a, '-arrow'),
				V({}, ''.concat(a, '-arrow-loading'), S)
			),
			customizeIcon: L,
			customizeIconProps: {
				loading: S,
				searchValue: qe,
				open: Ye,
				focused: Ce,
				showSearch: Se
			}
		}))
	var Xn,
		_r = function () {
			var De
			b == null || b(),
				(De = Pe.current) === null || De === void 0 || De.focus(),
				v([], { type: 'clear', values: d }),
				re('', !1, !1)
		}
	!y &&
		_ &&
		(d.length || qe) &&
		!(m === 'combobox' && qe === '') &&
		(Xn = u.createElement(
			Dc,
			{ className: ''.concat(a, '-clear'), onMouseDown: _r, customizeIcon: H },
			'×'
		))
	var Lr = u.createElement(j, { ref: pe }),
		Vn = Z(
			a,
			i,
			((r = {}),
			V(r, ''.concat(a, '-focused'), Ce),
			V(r, ''.concat(a, '-multiple'), Me),
			V(r, ''.concat(a, '-single'), !Me),
			V(r, ''.concat(a, '-allow-clear'), _),
			V(r, ''.concat(a, '-show-arrow'), fn),
			V(r, ''.concat(a, '-disabled'), y),
			V(r, ''.concat(a, '-loading'), S),
			V(r, ''.concat(a, '-open'), Ye),
			V(r, ''.concat(a, '-customize-input'), Ue),
			V(r, ''.concat(a, '-show-search'), Se),
			r)
		),
		br = u.createElement(
			Yw,
			{
				ref: He,
				disabled: y,
				prefixCls: a,
				visible: nt,
				popupElement: Lr,
				containerWidth: wt,
				animation: z,
				transitionName: A,
				dropdownStyle: W,
				dropdownClassName: Y,
				direction: c,
				dropdownMatchSelectWidth: K,
				dropdownRender: G,
				dropdownAlign: te,
				placement: ne,
				getPopupContainer: ie,
				empty: p,
				getTriggerDOMNode: function () {
					return ct.current
				},
				onPopupVisibleChange: Re,
				onPopupMouseEnter: ht
			},
			at
				? u.cloneElement(at, { ref: Ae })
				: u.createElement(
						Ww,
						se({}, e, {
							domRef: ct,
							prefixCls: a,
							inputElement: Ue,
							ref: Pe,
							id: o,
							showSearch: Se,
							autoClearSearchValue: $,
							mode: m,
							activeDescendantId: k,
							tagRender: s,
							values: d,
							open: Ye,
							onToggleOpen: J,
							activeValue: N,
							searchValue: qe,
							onSearch: re,
							onSearchSubmit: Q,
							onRemove: dt,
							tokenWithEnter: oe
						})
				  )
		),
		jn
	return (
		at
			? (jn = br)
			: (jn = u.createElement(
					'div',
					se({ className: Vn }, Le, {
						ref: we,
						onMouseDown: Ht,
						onKeyDown: jt,
						onKeyUp: Te,
						onFocus: Jt,
						onBlur: en
					}),
					Ce &&
						!Ye &&
						u.createElement(
							'span',
							{
								style: {
									width: 0,
									height: 0,
									position: 'absolute',
									overflow: 'hidden',
									opacity: 0
								},
								'aria-live': 'polite'
							},
							''.concat(
								d
									.map(function (Ke) {
										var De = Ke.label,
											qt = Ke.value
										return ['number', 'string'].includes(Ze(De)) ? De : qt
									})
									.join(', ')
							)
						),
					br,
					lr,
					Xn
			  )),
		u.createElement(Aw.Provider, { value: Wt }, jn)
	)
})
const RT = function (e, t) {
	var n = u.useRef({ values: new Map(), options: new Map() }),
		r = u.useMemo(
			function () {
				var a = n.current,
					i = a.values,
					l = a.options,
					s = e.map(function (d) {
						if (d.label === void 0) {
							var v
							return F(
								F({}, d),
								{},
								{
									label:
										(v = i.get(d.value)) === null || v === void 0
											? void 0
											: v.label
								}
							)
						}
						return d
					}),
					c = new Map(),
					f = new Map()
				return (
					s.forEach(function (d) {
						c.set(d.value, d), f.set(d.value, t.get(d.value) || l.get(d.value))
					}),
					(n.current.values = c),
					(n.current.options = f),
					s
				)
			},
			[e, t]
		),
		o = u.useCallback(
			function (a) {
				return t.get(a) || n.current.options.get(a)
			},
			[t]
		)
	return [r, o]
}
function Uf(e, t) {
	return jw(e).join('').toUpperCase().includes(t)
}
const MT = function (e, t, n, r, o) {
	return u.useMemo(
		function () {
			if (!n || r === !1) return e
			var a = t.options,
				i = t.label,
				l = t.value,
				s = [],
				c = typeof r == 'function',
				f = n.toUpperCase(),
				d = c
					? r
					: function (p, h) {
							return o
								? Uf(h[o], f)
								: h[a]
								? Uf(h[i !== 'children' ? i : 'label'], f)
								: Uf(h[l], f)
					  },
				v = c
					? function (p) {
							return qp(p)
					  }
					: function (p) {
							return p
					  }
			return (
				e.forEach(function (p) {
					if (p[a]) {
						var h = d(n, v(p))
						if (h) s.push(p)
						else {
							var g = p[a].filter(function (b) {
								return d(n, v(b))
							})
							g.length && s.push(F(F({}, p), {}, V({}, a, g)))
						}
						return
					}
					d(n, v(p)) && s.push(p)
				}),
				s
			)
		},
		[e, r, o, n, t]
	)
}
var e1 = 0,
	OT = An()
function NT() {
	var e
	return OT ? ((e = e1), (e1 += 1)) : (e = 'TEST_OR_SSR'), e
}
function IT(e) {
	var t = u.useState(),
		n = B(t, 2),
		r = n[0],
		o = n[1]
	return (
		u.useEffect(function () {
			o('rc_select_'.concat(NT()))
		}, []),
		e || r
	)
}
var kT = ['children', 'value'],
	TT = ['children']
function DT(e) {
	var t = e,
		n = t.key,
		r = t.props,
		o = r.children,
		a = r.value,
		i = ot(r, kT)
	return F({ key: n, value: a !== void 0 ? a : n, children: o }, i)
}
function Gw(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
	return Ur(e)
		.map(function (n, r) {
			if (!u.isValidElement(n) || !n.type) return null
			var o = n,
				a = o.type.isSelectOptGroup,
				i = o.key,
				l = o.props,
				s = l.children,
				c = ot(l, TT)
			return t || !a
				? DT(n)
				: F(
						F(
							{
								key: '__RC_SELECT_GRP__'.concat(i === null ? r : i, '__'),
								label: i
							},
							c
						),
						{},
						{ options: Gw(s) }
				  )
		})
		.filter(function (n) {
			return n
		})
}
function _T(e, t, n, r, o) {
	return u.useMemo(
		function () {
			var a = e,
				i = !e
			i && (a = Gw(t))
			var l = new Map(),
				s = new Map(),
				c = function (v, p, h) {
					h && typeof h == 'string' && v.set(p[h], p)
				}
			function f(d) {
				for (
					var v =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: !1,
						p = 0;
					p < d.length;
					p += 1
				) {
					var h = d[p]
					!h[n.options] || v
						? (l.set(h[n.value], h), c(s, h, n.label), c(s, h, r), c(s, h, o))
						: f(h[n.options], !0)
				}
			}
			return f(a), { options: a, valueOptions: l, labelOptions: s }
		},
		[e, t, n, r, o]
	)
}
function t1(e) {
	var t = u.useRef()
	t.current = e
	var n = u.useCallback(function () {
		return t.current.apply(t, arguments)
	}, [])
	return n
}
var eg = function () {
	return null
}
eg.isSelectOptGroup = !0
var tg = function () {
	return null
}
tg.isSelectOption = !0
var Xw = u.forwardRef(function (e, t) {
	var n = e.height,
		r = e.offset,
		o = e.children,
		a = e.prefixCls,
		i = e.onInnerResize,
		l = e.innerProps,
		s = {},
		c = { display: 'flex', flexDirection: 'column' }
	return (
		r !== void 0 &&
			((s = { height: n, position: 'relative', overflow: 'hidden' }),
			(c = F(
				F({}, c),
				{},
				{
					transform: 'translateY('.concat(r, 'px)'),
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0
				}
			))),
		u.createElement(
			'div',
			{ style: s },
			u.createElement(
				vo,
				{
					onResize: function (d) {
						var v = d.offsetHeight
						v && i && i()
					}
				},
				u.createElement(
					'div',
					se(
						{
							style: c,
							className: Z(V({}, ''.concat(a, '-holder-inner'), a)),
							ref: t
						},
						l
					),
					o
				)
			)
		)
	)
})
Xw.displayName = 'Filler'
var LT = 20
function n1(e) {
	return 'touches' in e ? e.touches[0].pageY : e.pageY
}
var AT = (function (e) {
	go(n, e)
	var t = yo(n)
	function n() {
		var r
		Tn(this, n)
		for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
			a[i] = arguments[i]
		return (
			(r = t.call.apply(t, [this].concat(a))),
			(r.moveRaf = null),
			(r.scrollbarRef = u.createRef()),
			(r.thumbRef = u.createRef()),
			(r.visibleTimeout = null),
			(r.state = { dragging: !1, pageY: null, startTop: null, visible: !1 }),
			(r.delayHidden = function () {
				clearTimeout(r.visibleTimeout),
					r.setState({ visible: !0 }),
					(r.visibleTimeout = setTimeout(function () {
						r.setState({ visible: !1 })
					}, 2e3))
			}),
			(r.onScrollbarTouchStart = function (l) {
				l.preventDefault()
			}),
			(r.onContainerMouseDown = function (l) {
				l.stopPropagation(), l.preventDefault()
			}),
			(r.patchEvents = function () {
				window.addEventListener('mousemove', r.onMouseMove),
					window.addEventListener('mouseup', r.onMouseUp),
					r.thumbRef.current.addEventListener('touchmove', r.onMouseMove),
					r.thumbRef.current.addEventListener('touchend', r.onMouseUp)
			}),
			(r.removeEvents = function () {
				var l
				window.removeEventListener('mousemove', r.onMouseMove),
					window.removeEventListener('mouseup', r.onMouseUp),
					(l = r.scrollbarRef.current) === null ||
						l === void 0 ||
						l.removeEventListener('touchstart', r.onScrollbarTouchStart),
					r.thumbRef.current &&
						(r.thumbRef.current.removeEventListener(
							'touchstart',
							r.onMouseDown
						),
						r.thumbRef.current.removeEventListener('touchmove', r.onMouseMove),
						r.thumbRef.current.removeEventListener('touchend', r.onMouseUp)),
					yt.cancel(r.moveRaf)
			}),
			(r.onMouseDown = function (l) {
				var s = r.props.onStartMove
				r.setState({ dragging: !0, pageY: n1(l), startTop: r.getTop() }),
					s(),
					r.patchEvents(),
					l.stopPropagation(),
					l.preventDefault()
			}),
			(r.onMouseMove = function (l) {
				var s = r.state,
					c = s.dragging,
					f = s.pageY,
					d = s.startTop,
					v = r.props.onScroll
				if ((yt.cancel(r.moveRaf), c)) {
					var p = n1(l) - f,
						h = d + p,
						g = r.getEnableScrollRange(),
						b = r.getEnableHeightRange(),
						m = b ? h / b : 0,
						y = Math.ceil(m * g)
					r.moveRaf = yt(function () {
						v(y)
					})
				}
			}),
			(r.onMouseUp = function () {
				var l = r.props.onStopMove
				r.setState({ dragging: !1 }), l(), r.removeEvents()
			}),
			(r.getSpinHeight = function () {
				var l = r.props,
					s = l.height,
					c = l.count,
					f = (s / c) * 10
				return (f = Math.max(f, LT)), (f = Math.min(f, s / 2)), Math.floor(f)
			}),
			(r.getEnableScrollRange = function () {
				var l = r.props,
					s = l.scrollHeight,
					c = l.height
				return s - c || 0
			}),
			(r.getEnableHeightRange = function () {
				var l = r.props.height,
					s = r.getSpinHeight()
				return l - s || 0
			}),
			(r.getTop = function () {
				var l = r.props.scrollTop,
					s = r.getEnableScrollRange(),
					c = r.getEnableHeightRange()
				if (l === 0 || s === 0) return 0
				var f = l / s
				return f * c
			}),
			(r.showScroll = function () {
				var l = r.props,
					s = l.height,
					c = l.scrollHeight
				return c > s
			}),
			r
		)
	}
	return (
		Dn(n, [
			{
				key: 'componentDidMount',
				value: function () {
					this.scrollbarRef.current.addEventListener(
						'touchstart',
						this.onScrollbarTouchStart
					),
						this.thumbRef.current.addEventListener(
							'touchstart',
							this.onMouseDown
						)
				}
			},
			{
				key: 'componentDidUpdate',
				value: function (o) {
					o.scrollTop !== this.props.scrollTop && this.delayHidden()
				}
			},
			{
				key: 'componentWillUnmount',
				value: function () {
					this.removeEvents(), clearTimeout(this.visibleTimeout)
				}
			},
			{
				key: 'render',
				value: function () {
					var o = this.state,
						a = o.dragging,
						i = o.visible,
						l = this.props.prefixCls,
						s = this.getSpinHeight(),
						c = this.getTop(),
						f = this.showScroll(),
						d = f && i
					return u.createElement(
						'div',
						{
							ref: this.scrollbarRef,
							className: Z(
								''.concat(l, '-scrollbar'),
								V({}, ''.concat(l, '-scrollbar-show'), f)
							),
							style: {
								width: 8,
								top: 0,
								bottom: 0,
								right: 0,
								position: 'absolute',
								display: d ? null : 'none'
							},
							onMouseDown: this.onContainerMouseDown,
							onMouseMove: this.delayHidden
						},
						u.createElement('div', {
							ref: this.thumbRef,
							className: Z(
								''.concat(l, '-scrollbar-thumb'),
								V({}, ''.concat(l, '-scrollbar-thumb-moving'), a)
							),
							style: {
								width: '100%',
								height: s,
								top: c,
								left: 0,
								position: 'absolute',
								background: 'rgba(0, 0, 0, 0.5)',
								borderRadius: 99,
								cursor: 'pointer',
								userSelect: 'none'
							},
							onMouseDown: this.onMouseDown
						})
					)
				}
			}
		]),
		n
	)
})(u.Component)
function FT(e) {
	var t = e.children,
		n = e.setRef,
		r = u.useCallback(function (o) {
			n(o)
		}, [])
	return u.cloneElement(t, { ref: r })
}
function zT(e, t, n, r, o, a) {
	var i = a.getKey
	return e.slice(t, n + 1).map(function (l, s) {
		var c = t + s,
			f = o(l, c, {}),
			d = i(l)
		return u.createElement(
			FT,
			{
				key: d,
				setRef: function (p) {
					return r(l, p)
				}
			},
			f
		)
	})
}
var HT = (function () {
	function e() {
		Tn(this, e), (this.maps = void 0), (this.maps = Object.create(null))
	}
	return (
		Dn(e, [
			{
				key: 'set',
				value: function (n, r) {
					this.maps[n] = r
				}
			},
			{
				key: 'get',
				value: function (n) {
					return this.maps[n]
				}
			}
		]),
		e
	)
})()
function VT(e, t, n) {
	var r = u.useState(0),
		o = B(r, 2),
		a = o[0],
		i = o[1],
		l = u.useRef(new Map()),
		s = u.useRef(new HT()),
		c = u.useRef()
	function f() {
		yt.cancel(c.current)
	}
	function d() {
		f(),
			(c.current = yt(function () {
				l.current.forEach(function (p, h) {
					if (p && p.offsetParent) {
						var g = cs(p),
							b = g.offsetHeight
						s.current.get(h) !== b && s.current.set(h, g.offsetHeight)
					}
				}),
					i(function (p) {
						return p + 1
					})
			}))
	}
	function v(p, h) {
		var g = e(p),
			b = l.current.get(g)
		h ? (l.current.set(g, h), d()) : l.current.delete(g),
			!b != !h && (h ? t == null || t(p) : n == null || n(p))
	}
	return (
		u.useEffect(function () {
			return f
		}, []),
		[v, d, s.current, a]
	)
}
function jT(e, t, n, r, o, a, i, l) {
	var s = u.useRef()
	return function (c) {
		if (c == null) {
			l()
			return
		}
		if ((yt.cancel(s.current), typeof c == 'number')) i(c)
		else if (c && Ze(c) === 'object') {
			var f,
				d = c.align
			'index' in c
				? (f = c.index)
				: (f = t.findIndex(function (g) {
						return o(g) === c.key
				  }))
			var v = c.offset,
				p = v === void 0 ? 0 : v,
				h = function g(b, m) {
					if (!(b < 0 || !e.current)) {
						var y = e.current.clientHeight,
							S = !1,
							C = m
						if (y) {
							for (
								var x = m || d,
									w = 0,
									E = 0,
									P = 0,
									N = Math.min(t.length, f),
									O = 0;
								O <= N;
								O += 1
							) {
								var k = o(t[O])
								E = w
								var I = n.get(k)
								;(P = E + (I === void 0 ? r : I)),
									(w = P),
									O === f && I === void 0 && (S = !0)
							}
							var $ = null
							switch (x) {
								case 'top':
									$ = E - p
									break
								case 'bottom':
									$ = P - y + p
									break
								default: {
									var R = e.current.scrollTop,
										M = R + y
									E < R ? (C = 'top') : P > M && (C = 'bottom')
								}
							}
							$ !== null && $ !== e.current.scrollTop && i($)
						}
						s.current = yt(function () {
							S && a(), g(b - 1, C)
						}, 2)
					}
				}
			h(3)
		}
	}
}
function BT(e, t, n) {
	var r = e.length,
		o = t.length,
		a,
		i
	if (r === 0 && o === 0) return null
	r < o ? ((a = e), (i = t)) : ((a = t), (i = e))
	var l = { __EMPTY_ITEM__: !0 }
	function s(h) {
		return h !== void 0 ? n(h) : l
	}
	for (var c = null, f = Math.abs(r - o) !== 1, d = 0; d < i.length; d += 1) {
		var v = s(a[d]),
			p = s(i[d])
		if (v !== p) {
			;(c = d), (f = f || v !== s(i[d + 1]))
			break
		}
	}
	return c === null ? null : { index: c, multiple: f }
}
function WT(e, t, n) {
	var r = u.useState(e),
		o = B(r, 2),
		a = o[0],
		i = o[1],
		l = u.useState(null),
		s = B(l, 2),
		c = s[0],
		f = s[1]
	return (
		u.useEffect(
			function () {
				var d = BT(a || [], e || [], t)
				;(d == null ? void 0 : d.index) !== void 0 &&
					(n == null || n(d.index), f(e[d.index])),
					i(e)
			},
			[e]
		),
		[c]
	)
}
var UT =
	(typeof navigator > 'u' ? 'undefined' : Ze(navigator)) === 'object' &&
	/Firefox/i.test(navigator.userAgent)
const qw = function (e, t) {
	var n = u.useRef(!1),
		r = u.useRef(null)
	function o() {
		clearTimeout(r.current),
			(n.current = !0),
			(r.current = setTimeout(function () {
				n.current = !1
			}, 50))
	}
	var a = u.useRef({ top: e, bottom: t })
	return (
		(a.current.top = e),
		(a.current.bottom = t),
		function (i) {
			var l =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
				s = (i < 0 && a.current.top) || (i > 0 && a.current.bottom)
			return (
				l && s
					? (clearTimeout(r.current), (n.current = !1))
					: (!s || n.current) && o(),
				!n.current && s
			)
		}
	)
}
function YT(e, t, n, r) {
	var o = u.useRef(0),
		a = u.useRef(null),
		i = u.useRef(null),
		l = u.useRef(!1),
		s = qw(t, n)
	function c(d) {
		if (e) {
			yt.cancel(a.current)
			var v = d.deltaY
			;(o.current += v),
				(i.current = v),
				!s(v) &&
					(UT || d.preventDefault(),
					(a.current = yt(function () {
						var p = l.current ? 10 : 1
						r(o.current * p), (o.current = 0)
					})))
		}
	}
	function f(d) {
		e && (l.current = d.detail === i.current)
	}
	return [c, f]
}
var KT = 14 / 15
function GT(e, t, n) {
	var r = u.useRef(!1),
		o = u.useRef(0),
		a = u.useRef(null),
		i = u.useRef(null),
		l,
		s = function (v) {
			if (r.current) {
				var p = Math.ceil(v.touches[0].pageY),
					h = o.current - p
				;(o.current = p),
					n(h) && v.preventDefault(),
					clearInterval(i.current),
					(i.current = setInterval(function () {
						;(h *= KT),
							(!n(h, !0) || Math.abs(h) <= 0.1) && clearInterval(i.current)
					}, 16))
			}
		},
		c = function () {
			;(r.current = !1), l()
		},
		f = function (v) {
			l(),
				v.touches.length === 1 &&
					!r.current &&
					((r.current = !0),
					(o.current = Math.ceil(v.touches[0].pageY)),
					(a.current = v.target),
					a.current.addEventListener('touchmove', s),
					a.current.addEventListener('touchend', c))
		}
	;(l = function () {
		a.current &&
			(a.current.removeEventListener('touchmove', s),
			a.current.removeEventListener('touchend', c))
	}),
		Ft(
			function () {
				return (
					e && t.current.addEventListener('touchstart', f),
					function () {
						var d
						;(d = t.current) === null ||
							d === void 0 ||
							d.removeEventListener('touchstart', f),
							l(),
							clearInterval(i.current)
					}
				)
			},
			[e]
		)
}
var XT = [
		'prefixCls',
		'className',
		'height',
		'itemHeight',
		'fullHeight',
		'style',
		'data',
		'children',
		'itemKey',
		'virtual',
		'component',
		'onScroll',
		'onVisibleChange',
		'innerProps'
	],
	qT = [],
	QT = { overflowY: 'auto', overflowAnchor: 'none' }
function ZT(e, t) {
	var n = e.prefixCls,
		r = n === void 0 ? 'rc-virtual-list' : n,
		o = e.className,
		a = e.height,
		i = e.itemHeight,
		l = e.fullHeight,
		s = l === void 0 ? !0 : l,
		c = e.style,
		f = e.data,
		d = e.children,
		v = e.itemKey,
		p = e.virtual,
		h = e.component,
		g = h === void 0 ? 'div' : h,
		b = e.onScroll,
		m = e.onVisibleChange,
		y = e.innerProps,
		S = ot(e, XT),
		C = !!(p !== !1 && a && i),
		x = C && f && i * f.length > a,
		w = u.useState(0),
		E = B(w, 2),
		P = E[0],
		N = E[1],
		O = u.useState(!1),
		k = B(O, 2),
		I = k[0],
		$ = k[1],
		R = Z(r, o),
		M = f || qT,
		T = u.useRef(),
		_ = u.useRef(),
		D = u.useRef(),
		L = u.useCallback(
			function (Ce) {
				return typeof v == 'function' ? v(Ce) : Ce == null ? void 0 : Ce[v]
			},
			[v]
		),
		H = { getKey: L }
	function j(Ce) {
		N(function ($e) {
			var Oe
			typeof Ce == 'function' ? (Oe = Ce($e)) : (Oe = Ce)
			var qe = Se(Oe)
			return (T.current.scrollTop = qe), qe
		})
	}
	var z = u.useRef({ start: 0, end: M.length }),
		A = u.useRef(),
		W = WT(M, L),
		Y = B(W, 1),
		K = Y[0]
	A.current = K
	var G = VT(L, null, null),
		te = B(G, 4),
		ne = te[0],
		ie = te[1],
		le = te[2],
		ae = te[3],
		q = u.useMemo(
			function () {
				if (!C)
					return {
						scrollHeight: void 0,
						start: 0,
						end: M.length - 1,
						offset: void 0
					}
				if (!x) {
					var Ce
					return {
						scrollHeight:
							((Ce = _.current) === null || Ce === void 0
								? void 0
								: Ce.offsetHeight) || 0,
						start: 0,
						end: M.length - 1,
						offset: void 0
					}
				}
				for (var $e = 0, Oe, qe, Ue, at = M.length, Ae = 0; Ae < at; Ae += 1) {
					var bt = M[Ae],
						Fe = L(bt),
						ye = le.get(Fe),
						it = $e + (ye === void 0 ? i : ye)
					it >= P && Oe === void 0 && ((Oe = Ae), (qe = $e)),
						it > P + a && Ue === void 0 && (Ue = Ae),
						($e = it)
				}
				return (
					Oe === void 0 && ((Oe = 0), (qe = 0), (Ue = Math.ceil(a / i))),
					Ue === void 0 && (Ue = M.length - 1),
					(Ue = Math.min(Ue + 1, M.length)),
					{ scrollHeight: $e, start: Oe, end: Ue, offset: qe }
				)
			},
			[x, C, P, M, ae, a]
		),
		de = q.scrollHeight,
		ve = q.start,
		ee = q.end,
		fe = q.offset
	;(z.current.start = ve), (z.current.end = ee)
	var be = de - a,
		Me = u.useRef(be)
	Me.current = be
	function Se(Ce) {
		var $e = Ce
		return (
			Number.isNaN(Me.current) || ($e = Math.min($e, Me.current)),
			($e = Math.max($e, 0)),
			$e
		)
	}
	var Le = P <= 0,
		lt = P >= be,
		et = qw(Le, lt)
	function Xe(Ce) {
		var $e = Ce
		j($e)
	}
	function ze(Ce) {
		var $e = Ce.currentTarget.scrollTop
		$e !== P && j($e), b == null || b(Ce)
	}
	var we = YT(C, Le, lt, function (Ce) {
			j(function ($e) {
				var Oe = $e + Ce
				return Oe
			})
		}),
		ct = B(we, 2),
		He = ct[0],
		Pe = ct[1]
	GT(C, T, function (Ce, $e) {
		return et(Ce, $e)
			? !1
			: (He({ preventDefault: function () {}, deltaY: Ce }), !0)
	}),
		Ft(
			function () {
				function Ce($e) {
					C && $e.preventDefault()
				}
				return (
					T.current.addEventListener('wheel', He),
					T.current.addEventListener('DOMMouseScroll', Pe),
					T.current.addEventListener('MozMousePixelScroll', Ce),
					function () {
						T.current &&
							(T.current.removeEventListener('wheel', He),
							T.current.removeEventListener('DOMMouseScroll', Pe),
							T.current.removeEventListener('MozMousePixelScroll', Ce))
					}
				)
			},
			[C]
		)
	var pe = jT(T, M, le, i, L, ie, j, function () {
		var Ce
		;(Ce = D.current) === null || Ce === void 0 || Ce.delayHidden()
	})
	u.useImperativeHandle(t, function () {
		return { scrollTo: pe }
	}),
		Ft(
			function () {
				if (m) {
					var Ce = M.slice(ve, ee + 1)
					m(Ce, M)
				}
			},
			[ve, ee, M]
		)
	var _e = zT(M, ve, ee, ne, d, H),
		tt = null
	return (
		a &&
			((tt = F(V({}, s ? 'height' : 'maxHeight', a), QT)),
			C && ((tt.overflowY = 'hidden'), I && (tt.pointerEvents = 'none'))),
		u.createElement(
			'div',
			se({ style: F(F({}, c), {}, { position: 'relative' }), className: R }, S),
			u.createElement(
				g,
				{ className: ''.concat(r, '-holder'), style: tt, ref: T, onScroll: ze },
				u.createElement(
					Xw,
					{
						prefixCls: r,
						height: de,
						offset: fe,
						onInnerResize: ie,
						ref: _,
						innerProps: y
					},
					_e
				)
			),
			C &&
				u.createElement(AT, {
					ref: D,
					prefixCls: r,
					scrollTop: P,
					height: a,
					scrollHeight: de,
					count: M.length,
					onScroll: Xe,
					onStartMove: function () {
						$(!0)
					},
					onStopMove: function () {
						$(!1)
					}
				})
		)
	)
}
var Qw = u.forwardRef(ZT)
Qw.displayName = 'List'
var Zw = u.createContext(null)
function JT() {
	return /(mac\sos|macintosh)/i.test(navigator.appVersion)
}
var e4 = ['disabled', 'title', 'children', 'style', 'className']
function r1(e) {
	return typeof e == 'string' || typeof e == 'number'
}
var t4 = function (t, n) {
		var r = zk(),
			o = r.prefixCls,
			a = r.id,
			i = r.open,
			l = r.multiple,
			s = r.mode,
			c = r.searchValue,
			f = r.toggleOpen,
			d = r.notFoundContent,
			v = r.onPopupScroll,
			p = u.useContext(Zw),
			h = p.flattenOptions,
			g = p.onActiveValue,
			b = p.defaultActiveFirstOption,
			m = p.onSelect,
			y = p.menuItemSelectedIcon,
			S = p.rawValues,
			C = p.fieldNames,
			x = p.virtual,
			w = p.listHeight,
			E = p.listItemHeight,
			P = ''.concat(o, '-item'),
			N = ka(
				function () {
					return h
				},
				[i, h],
				function (K, G) {
					return G[0] && K[1] !== G[1]
				}
			),
			O = u.useRef(null),
			k = function (G) {
				G.preventDefault()
			},
			I = function (G) {
				O.current && O.current.scrollTo(typeof G == 'number' ? { index: G } : G)
			},
			$ = function (G) {
				for (
					var te =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: 1,
						ne = N.length,
						ie = 0;
					ie < ne;
					ie += 1
				) {
					var le = (G + ie * te + ne) % ne,
						ae = N[le],
						q = ae.group,
						de = ae.data
					if (!q && !de.disabled) return le
				}
				return -1
			},
			R = u.useState(function () {
				return $(0)
			}),
			M = B(R, 2),
			T = M[0],
			_ = M[1],
			D = function (G) {
				var te =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
				_(G)
				var ne = { source: te ? 'keyboard' : 'mouse' },
					ie = N[G]
				if (!ie) {
					g(null, -1, ne)
					return
				}
				g(ie.value, G, ne)
			}
		u.useEffect(
			function () {
				D(b !== !1 ? $(0) : -1)
			},
			[N.length, c]
		)
		var L = u.useCallback(
			function (K) {
				return S.has(K) && s !== 'combobox'
			},
			[s, xe(S).toString(), S.size]
		)
		u.useEffect(
			function () {
				var K = setTimeout(function () {
					if (!l && i && S.size === 1) {
						var te = Array.from(S)[0],
							ne = N.findIndex(function (ie) {
								var le = ie.data
								return le.value === te
							})
						ne !== -1 && (D(ne), I(ne))
					}
				})
				if (i) {
					var G
					;(G = O.current) === null || G === void 0 || G.scrollTo(void 0)
				}
				return function () {
					return clearTimeout(K)
				}
			},
			[i, c, h.length]
		)
		var H = function (G) {
			G !== void 0 && m(G, { selected: !S.has(G) }), l || f(!1)
		}
		if (
			(u.useImperativeHandle(n, function () {
				return {
					onKeyDown: function (G) {
						var te = G.which,
							ne = G.ctrlKey
						switch (te) {
							case X.N:
							case X.P:
							case X.UP:
							case X.DOWN: {
								var ie = 0
								if (
									(te === X.UP
										? (ie = -1)
										: te === X.DOWN
										? (ie = 1)
										: JT() &&
										  ne &&
										  (te === X.N ? (ie = 1) : te === X.P && (ie = -1)),
									ie !== 0)
								) {
									var le = $(T + ie, ie)
									I(le), D(le, !0)
								}
								break
							}
							case X.ENTER: {
								var ae = N[T]
								ae && !ae.data.disabled ? H(ae.value) : H(void 0),
									i && G.preventDefault()
								break
							}
							case X.ESC:
								f(!1), i && G.stopPropagation()
						}
					},
					onKeyUp: function () {},
					scrollTo: function (G) {
						I(G)
					}
				}
			}),
			N.length === 0)
		)
			return u.createElement(
				'div',
				{
					role: 'listbox',
					id: ''.concat(a, '_list'),
					className: ''.concat(P, '-empty'),
					onMouseDown: k
				},
				d
			)
		var j = Object.keys(C).map(function (K) {
				return C[K]
			}),
			z = function (G) {
				return G.label
			}
		function A(K, G) {
			var te = K.group
			return {
				role: te ? 'presentation' : 'option',
				id: ''.concat(a, '_list_').concat(G)
			}
		}
		var W = function (G) {
				var te = N[G]
				if (!te) return null
				var ne = te.data || {},
					ie = ne.value,
					le = te.group,
					ae = Ic(ne, !0),
					q = z(te)
				return te
					? u.createElement(
							'div',
							se(
								{ 'aria-label': typeof q == 'string' && !le ? q : null },
								ae,
								{ key: G },
								A(te, G),
								{ 'aria-selected': L(ie) }
							),
							ie
					  )
					: null
			},
			Y = { role: 'listbox', id: ''.concat(a, '_list') }
		return u.createElement(
			u.Fragment,
			null,
			x &&
				u.createElement(
					'div',
					se({}, Y, { style: { height: 0, width: 0, overflow: 'hidden' } }),
					W(T - 1),
					W(T),
					W(T + 1)
				),
			u.createElement(
				Qw,
				{
					itemKey: 'key',
					ref: O,
					data: N,
					height: w,
					itemHeight: E,
					fullHeight: !1,
					onMouseDown: k,
					onScroll: v,
					virtual: x,
					innerProps: x ? null : Y
				},
				function (K, G) {
					var te,
						ne = K.group,
						ie = K.groupOption,
						le = K.data,
						ae = K.label,
						q = K.value,
						de = le.key
					if (ne) {
						var ve,
							ee =
								(ve = le.title) !== null && ve !== void 0
									? ve
									: r1(ae)
									? ae.toString()
									: void 0
						return u.createElement(
							'div',
							{ className: Z(P, ''.concat(P, '-group')), title: ee },
							ae !== void 0 ? ae : de
						)
					}
					var fe = le.disabled,
						be = le.title
					le.children
					var Me = le.style,
						Se = le.className,
						Le = ot(le, e4),
						lt = Tr(Le, j),
						et = L(q),
						Xe = ''.concat(P, '-option'),
						ze = Z(
							P,
							Xe,
							Se,
							((te = {}),
							V(te, ''.concat(Xe, '-grouped'), ie),
							V(te, ''.concat(Xe, '-active'), T === G && !fe),
							V(te, ''.concat(Xe, '-disabled'), fe),
							V(te, ''.concat(Xe, '-selected'), et),
							te)
						),
						we = z(K),
						ct = !y || typeof y == 'function' || et,
						He = typeof we == 'number' ? we : we || q,
						Pe = r1(He) ? He.toString() : void 0
					return (
						be !== void 0 && (Pe = be),
						u.createElement(
							'div',
							se({}, Ic(lt), x ? {} : A(K, G), {
								'aria-selected': et,
								className: ze,
								title: Pe,
								onMouseMove: function () {
									T === G || fe || D(G)
								},
								onClick: function () {
									fe || H(q)
								},
								style: Me
							}),
							u.createElement(
								'div',
								{ className: ''.concat(Xe, '-content') },
								He
							),
							u.isValidElement(y) || et,
							ct &&
								u.createElement(
									Dc,
									{
										className: ''.concat(P, '-option-state'),
										customizeIcon: y,
										customizeIconProps: { isSelected: et }
									},
									et ? '✓' : null
								)
						)
					)
				}
			)
		)
	},
	Jw = u.forwardRef(t4)
Jw.displayName = 'OptionList'
var n4 = [
		'id',
		'mode',
		'prefixCls',
		'backfill',
		'fieldNames',
		'inputValue',
		'searchValue',
		'onSearch',
		'autoClearSearchValue',
		'onSelect',
		'onDeselect',
		'dropdownMatchSelectWidth',
		'filterOption',
		'filterSort',
		'optionFilterProp',
		'optionLabelProp',
		'options',
		'children',
		'defaultActiveFirstOption',
		'menuItemSelectedIcon',
		'virtual',
		'listHeight',
		'listItemHeight',
		'value',
		'defaultValue',
		'labelInValue',
		'onChange'
	],
	r4 = ['inputValue']
function o4(e) {
	return !e || Ze(e) !== 'object'
}
var a4 = u.forwardRef(function (e, t) {
		var n = e.id,
			r = e.mode,
			o = e.prefixCls,
			a = o === void 0 ? 'rc-select' : o,
			i = e.backfill,
			l = e.fieldNames,
			s = e.inputValue,
			c = e.searchValue,
			f = e.onSearch,
			d = e.autoClearSearchValue,
			v = d === void 0 ? !0 : d,
			p = e.onSelect,
			h = e.onDeselect,
			g = e.dropdownMatchSelectWidth,
			b = g === void 0 ? !0 : g,
			m = e.filterOption,
			y = e.filterSort,
			S = e.optionFilterProp,
			C = e.optionLabelProp,
			x = e.options,
			w = e.children,
			E = e.defaultActiveFirstOption,
			P = e.menuItemSelectedIcon,
			N = e.virtual,
			O = e.listHeight,
			k = O === void 0 ? 200 : O,
			I = e.listItemHeight,
			$ = I === void 0 ? 20 : I,
			R = e.value,
			M = e.defaultValue,
			T = e.labelInValue,
			_ = e.onChange,
			D = ot(e, n4),
			L = IT(n),
			H = Qp(r),
			j = !!(!x && w),
			z = u.useMemo(
				function () {
					return m === void 0 && r === 'combobox' ? !1 : m
				},
				[m, r]
			),
			A = u.useMemo(
				function () {
					return Kw(l, j)
				},
				[JSON.stringify(l), j]
			),
			W = Kt('', {
				value: c !== void 0 ? c : s,
				postState: function (oe) {
					return oe || ''
				}
			}),
			Y = B(W, 2),
			K = Y[0],
			G = Y[1],
			te = _T(x, w, A, S, C),
			ne = te.valueOptions,
			ie = te.labelOptions,
			le = te.options,
			ae = u.useCallback(
				function (J) {
					var oe = jw(J)
					return oe.map(function (re) {
						var Q, me, Ve, $t, St
						if (o4(re)) Q = re
						else {
							var jt
							;(Ve = re.key),
								(me = re.label),
								(Q = (jt = re.value) !== null && jt !== void 0 ? jt : Ve)
						}
						var Te = ne.get(Q)
						if (Te) {
							var dt
							me === void 0 && (me = Te == null ? void 0 : Te[C || A.label]),
								Ve === void 0 &&
									(Ve =
										(dt = Te == null ? void 0 : Te.key) !== null &&
										dt !== void 0
											? dt
											: Q),
								($t = Te == null ? void 0 : Te.disabled),
								(St = Te == null ? void 0 : Te.title)
						}
						return { label: me, value: Q, key: Ve, disabled: $t, title: St }
					})
				},
				[A, C, ne]
			),
			q = Kt(M, { value: R }),
			de = B(q, 2),
			ve = de[0],
			ee = de[1],
			fe = u.useMemo(
				function () {
					var J,
						oe = ae(ve)
					return r === 'combobox' &&
						!((J = oe[0]) !== null && J !== void 0 && J.value)
						? []
						: oe
				},
				[ve, ae, r]
			),
			be = RT(fe, ne),
			Me = B(be, 2),
			Se = Me[0],
			Le = Me[1],
			lt = u.useMemo(
				function () {
					if (!r && Se.length === 1) {
						var J = Se[0]
						if (J.value === null && (J.label === null || J.label === void 0))
							return []
					}
					return Se.map(function (oe) {
						var re
						return F(
							F({}, oe),
							{},
							{
								label: (re = oe.label) !== null && re !== void 0 ? re : oe.value
							}
						)
					})
				},
				[r, Se]
			),
			et = u.useMemo(
				function () {
					return new Set(
						Se.map(function (J) {
							return J.value
						})
					)
				},
				[Se]
			)
		u.useEffect(
			function () {
				if (r === 'combobox') {
					var J,
						oe = (J = Se[0]) === null || J === void 0 ? void 0 : J.value
					G(tT(oe) ? String(oe) : '')
				}
			},
			[Se]
		)
		var Xe = t1(function (J, oe) {
				var re,
					Q = oe ?? J
				return (re = {}), V(re, A.value, J), V(re, A.label, Q), re
			}),
			ze = u.useMemo(
				function () {
					if (r !== 'tags') return le
					var J = xe(le),
						oe = function (Q) {
							return ne.has(Q)
						}
					return (
						xe(Se)
							.sort(function (re, Q) {
								return re.value < Q.value ? -1 : 1
							})
							.forEach(function (re) {
								var Q = re.value
								oe(Q) || J.push(Xe(Q, re.label))
							}),
						J
					)
				},
				[Xe, le, ne, Se, r]
			),
			we = MT(ze, A, K, z, S),
			ct = u.useMemo(
				function () {
					return r !== 'tags' ||
						!K ||
						we.some(function (J) {
							return J[S || 'value'] === K
						})
						? we
						: [Xe(K)].concat(xe(we))
				},
				[Xe, S, r, we, K]
			),
			He = u.useMemo(
				function () {
					return y
						? xe(ct).sort(function (J, oe) {
								return y(J, oe)
						  })
						: ct
				},
				[ct, y]
			),
			Pe = u.useMemo(
				function () {
					return wT(He, { fieldNames: A, childrenAsData: j })
				},
				[He, A, j]
			),
			pe = function (oe) {
				var re = ae(oe)
				if (
					(ee(re),
					_ &&
						(re.length !== Se.length ||
							re.some(function (Ve, $t) {
								var St
								return (
									((St = Se[$t]) === null || St === void 0
										? void 0
										: St.value) !== (Ve == null ? void 0 : Ve.value)
								)
							})))
				) {
					var Q = T
							? re
							: re.map(function (Ve) {
									return Ve.value
							  }),
						me = re.map(function (Ve) {
							return qp(Le(Ve.value))
						})
					_(H ? Q : Q[0], H ? me : me[0])
				}
			},
			_e = u.useState(null),
			tt = B(_e, 2),
			Ce = tt[0],
			$e = tt[1],
			Oe = u.useState(0),
			qe = B(Oe, 2),
			Ue = qe[0],
			at = qe[1],
			Ae = E !== void 0 ? E : r !== 'combobox',
			bt = u.useCallback(
				function (J, oe) {
					var re =
							arguments.length > 2 && arguments[2] !== void 0
								? arguments[2]
								: {},
						Q = re.source,
						me = Q === void 0 ? 'keyboard' : Q
					at(oe),
						i &&
							r === 'combobox' &&
							J !== null &&
							me === 'keyboard' &&
							$e(String(J))
				},
				[i, r]
			),
			Fe = function (oe, re, Q) {
				var me = function () {
					var Ct,
						Ht = Le(oe)
					return [
						T
							? {
									label: Ht == null ? void 0 : Ht[A.label],
									value: oe,
									key:
										(Ct = Ht == null ? void 0 : Ht.key) !== null &&
										Ct !== void 0
											? Ct
											: oe
							  }
							: oe,
						qp(Ht)
					]
				}
				if (re && p) {
					var Ve = me(),
						$t = B(Ve, 2),
						St = $t[0],
						jt = $t[1]
					p(St, jt)
				} else if (!re && h && Q !== 'clear') {
					var Te = me(),
						dt = B(Te, 2),
						Bt = dt[0],
						Jt = dt[1]
					h(Bt, Jt)
				}
			},
			ye = t1(function (J, oe) {
				var re,
					Q = H ? oe.selected : !0
				Q
					? (re = H ? [].concat(xe(Se), [J]) : [J])
					: (re = Se.filter(function (me) {
							return me.value !== J
					  })),
					pe(re),
					Fe(J, Q),
					r === 'combobox' ? $e('') : (!Qp || v) && (G(''), $e(''))
			}),
			it = function (oe, re) {
				pe(oe)
				var Q = re.type,
					me = re.values
				;(Q === 'remove' || Q === 'clear') &&
					me.forEach(function (Ve) {
						Fe(Ve.value, !1, Q)
					})
			},
			Ye = function (oe, re) {
				if ((G(oe), $e(null), re.source === 'submit')) {
					var Q = (oe || '').trim()
					if (Q) {
						var me = Array.from(new Set([].concat(xe(et), [Q])))
						pe(me), Fe(Q, !0), G('')
					}
					return
				}
				re.source !== 'blur' && (r === 'combobox' && pe(oe), f == null || f(oe))
			},
			Ne = function (oe) {
				var re = oe
				r !== 'tags' &&
					(re = oe
						.map(function (me) {
							var Ve = ie.get(me)
							return Ve == null ? void 0 : Ve.value
						})
						.filter(function (me) {
							return me !== void 0
						}))
				var Q = Array.from(new Set([].concat(xe(et), xe(re))))
				pe(Q),
					Q.forEach(function (me) {
						Fe(me, !0)
					})
			},
			nt = u.useMemo(
				function () {
					var J = N !== !1 && b !== !1
					return F(
						F({}, te),
						{},
						{
							flattenOptions: Pe,
							onActiveValue: bt,
							defaultActiveFirstOption: Ae,
							onSelect: ye,
							menuItemSelectedIcon: P,
							rawValues: et,
							fieldNames: A,
							virtual: J,
							listHeight: k,
							listItemHeight: $,
							childrenAsData: j
						}
					)
				},
				[te, Pe, bt, Ae, ye, P, et, A, N, b, k, $, j]
			)
		return u.createElement(
			Zw.Provider,
			{ value: nt },
			u.createElement(
				PT,
				se({}, D, {
					id: L,
					prefixCls: a,
					ref: t,
					omitDomProps: r4,
					mode: r,
					displayValues: lt,
					onDisplayValuesChange: it,
					searchValue: K,
					onSearch: Ye,
					autoClearSearchValue: v,
					onSearchSplit: Ne,
					dropdownMatchSelectWidth: b,
					OptionList: Jw,
					emptyOptions: !Pe.length,
					activeValue: Ce,
					activeDescendantId: ''.concat(L, '_list_').concat(Ue)
				})
			)
		)
	}),
	ng = a4
ng.Option = tg
ng.OptGroup = eg
const i4 = () => {
		const [, e] = Rs(),
			t = new ln(e.colorBgBase)
		let n = {}
		return (
			t.toHsl().l < 0.5 && (n = { opacity: 0.65 }),
			u.createElement(
				'svg',
				{
					style: n,
					width: '184',
					height: '152',
					viewBox: '0 0 184 152',
					xmlns: 'http://www.w3.org/2000/svg'
				},
				u.createElement(
					'g',
					{ fill: 'none', fillRule: 'evenodd' },
					u.createElement(
						'g',
						{ transform: 'translate(24 31.67)' },
						u.createElement('ellipse', {
							fillOpacity: '.8',
							fill: '#F5F5F7',
							cx: '67.797',
							cy: '106.89',
							rx: '67.797',
							ry: '12.668'
						}),
						u.createElement('path', {
							d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
							fill: '#AEB8C2'
						}),
						u.createElement('path', {
							d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
							fill: 'url(#linearGradient-1)',
							transform: 'translate(13.56)'
						}),
						u.createElement('path', {
							d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
							fill: '#F5F5F7'
						}),
						u.createElement('path', {
							d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
							fill: '#DCE0E6'
						})
					),
					u.createElement('path', {
						d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
						fill: '#DCE0E6'
					}),
					u.createElement(
						'g',
						{ transform: 'translate(149.65 15.383)', fill: '#FFF' },
						u.createElement('ellipse', {
							cx: '20.654',
							cy: '3.167',
							rx: '2.849',
							ry: '2.815'
						}),
						u.createElement('path', {
							d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z'
						})
					)
				)
			)
		)
	},
	l4 = i4,
	s4 = () => {
		const [, e] = Rs(),
			{
				colorFill: t,
				colorFillTertiary: n,
				colorFillQuaternary: r,
				colorBgContainer: o
			} = e,
			{
				borderColor: a,
				shadowColor: i,
				contentColor: l
			} = u.useMemo(
				() => ({
					borderColor: new ln(t).onBackground(o).toHexShortString(),
					shadowColor: new ln(n).onBackground(o).toHexShortString(),
					contentColor: new ln(r).onBackground(o).toHexShortString()
				}),
				[t, n, r, o]
			)
		return u.createElement(
			'svg',
			{
				width: '64',
				height: '41',
				viewBox: '0 0 64 41',
				xmlns: 'http://www.w3.org/2000/svg'
			},
			u.createElement(
				'g',
				{ transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
				u.createElement('ellipse', {
					fill: i,
					cx: '32',
					cy: '33',
					rx: '32',
					ry: '7'
				}),
				u.createElement(
					'g',
					{ fillRule: 'nonzero', stroke: a },
					u.createElement('path', {
						d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z'
					}),
					u.createElement('path', {
						d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
						fill: l
					})
				)
			)
		)
	},
	u4 = s4,
	c4 = e => {
		const {
			componentCls: t,
			margin: n,
			marginXS: r,
			marginXL: o,
			fontSize: a,
			lineHeight: i
		} = e
		return {
			[t]: {
				marginInline: r,
				fontSize: a,
				lineHeight: i,
				textAlign: 'center',
				[`${t}-image`]: {
					height: e.emptyImgHeight,
					marginBottom: r,
					opacity: e.opacityImage,
					img: { height: '100%' },
					svg: { height: '100%', margin: 'auto' }
				},
				[`${t}-description`]: { color: e.colorText },
				[`${t}-footer`]: { marginTop: n },
				'&-normal': {
					marginBlock: o,
					color: e.colorTextDisabled,
					[`${t}-description`]: { color: e.colorTextDisabled },
					[`${t}-image`]: { height: e.emptyImgHeightMD }
				},
				'&-small': {
					marginBlock: r,
					color: e.colorTextDisabled,
					[`${t}-image`]: { height: e.emptyImgHeightSM }
				}
			}
		}
	},
	d4 = So('Empty', e => {
		const { componentCls: t, controlHeightLG: n } = e,
			r = Zt(e, {
				emptyImgCls: `${t}-img`,
				emptyImgHeight: n * 2.5,
				emptyImgHeightMD: n,
				emptyImgHeightSM: n * 0.875
			})
		return [c4(r)]
	})
var f4 =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
const ex = u.createElement(l4, null),
	tx = u.createElement(u4, null),
	rg = e => {
		var {
				className: t,
				rootClassName: n,
				prefixCls: r,
				image: o = ex,
				description: a,
				children: i,
				imageStyle: l
			} = e,
			s = f4(e, [
				'className',
				'rootClassName',
				'prefixCls',
				'image',
				'description',
				'children',
				'imageStyle'
			])
		const { getPrefixCls: c, direction: f } = u.useContext(kt),
			d = c('empty', r),
			[v, p] = d4(d),
			[h] = Bh('Empty'),
			g = typeof a < 'u' ? a : h == null ? void 0 : h.description,
			b = typeof g == 'string' ? g : 'empty'
		let m = null
		return (
			typeof o == 'string'
				? (m = u.createElement('img', { alt: b, src: o }))
				: (m = o),
			v(
				u.createElement(
					'div',
					Object.assign(
						{
							className: Z(
								p,
								d,
								{ [`${d}-normal`]: o === tx, [`${d}-rtl`]: f === 'rtl' },
								t,
								n
							)
						},
						s
					),
					u.createElement('div', { className: `${d}-image`, style: l }, m),
					g && u.createElement('div', { className: `${d}-description` }, g),
					i && u.createElement('div', { className: `${d}-footer` }, i)
				)
			)
		)
	}
rg.PRESENTED_IMAGE_DEFAULT = ex
rg.PRESENTED_IMAGE_SIMPLE = tx
const vl = rg,
	v4 = e => {
		const { componentName: t } = e,
			{ getPrefixCls: n } = u.useContext(kt),
			r = n('empty')
		switch (t) {
			case 'Table':
			case 'List':
				return he.createElement(vl, { image: vl.PRESENTED_IMAGE_SIMPLE })
			case 'Select':
			case 'TreeSelect':
			case 'Cascader':
			case 'Transfer':
			case 'Mentions':
				return he.createElement(vl, {
					image: vl.PRESENTED_IMAGE_SIMPLE,
					className: `${r}-small`
				})
			default:
				return he.createElement(vl, null)
		}
	},
	p4 = v4
function qo(e, t, n) {
	return Z({
		[`${e}-status-success`]: t === 'success',
		[`${e}-status-warning`]: t === 'warning',
		[`${e}-status-error`]: t === 'error',
		[`${e}-status-validating`]: t === 'validating',
		[`${e}-has-feedback`]: n
	})
}
const Is = (e, t) => t || e
var m4 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
				}
			}
		]
	},
	name: 'check',
	theme: 'outlined'
}
const h4 = m4
var nx = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: h4 }))
}
nx.displayName = 'CheckOutlined'
const g4 = u.forwardRef(nx)
var y4 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
				}
			}
		]
	},
	name: 'down',
	theme: 'outlined'
}
const b4 = y4
var rx = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: b4 }))
}
rx.displayName = 'DownOutlined'
const S4 = u.forwardRef(rx)
var C4 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'
				}
			}
		]
	},
	name: 'search',
	theme: 'outlined'
}
const w4 = C4
var ox = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: w4 }))
}
ox.displayName = 'SearchOutlined'
const og = u.forwardRef(ox)
function x4(e) {
	let {
		suffixIcon: t,
		clearIcon: n,
		menuItemSelectedIcon: r,
		removeIcon: o,
		loading: a,
		multiple: i,
		hasFeedback: l,
		prefixCls: s,
		showArrow: c,
		feedbackIcon: f
	} = e
	const d = n ?? u.createElement(Ms, null),
		v = b => u.createElement(u.Fragment, null, c !== !1 && b, l && f)
	let p = null
	if (t !== void 0) p = v(t)
	else if (a) p = v(u.createElement(Bp, { spin: !0 }))
	else {
		const b = `${s}-suffix`
		p = m => {
			let { open: y, showSearch: S } = m
			return v(
				y && S
					? u.createElement(og, { className: b })
					: u.createElement(S4, { className: b })
			)
		}
	}
	let h = null
	r !== void 0 ? (h = r) : i ? (h = u.createElement(g4, null)) : (h = null)
	let g = null
	return (
		o !== void 0 ? (g = o) : (g = u.createElement(yw, null)),
		{ clearIcon: d, suffixIcon: p, itemIcon: h, removeIcon: g }
	)
}
function Rd(e, t, n) {
	return function (o) {
		const { prefixCls: a, style: i } = o,
			l = u.useRef(null),
			[s, c] = u.useState(0),
			[f, d] = u.useState(0),
			[v, p] = Kt(!1, { value: o.open }),
			{ getPrefixCls: h } = u.useContext(kt),
			g = h(t || 'select', a)
		return (
			u.useEffect(() => {
				if ((p(!0), typeof ResizeObserver < 'u')) {
					const b = new ResizeObserver(y => {
							const S = y[0].target
							c(S.offsetHeight + 8), d(S.offsetWidth)
						}),
						m = setInterval(() => {
							var y
							const S = n ? `.${n(g)}` : `.${g}-dropdown`,
								C =
									(y = l.current) === null || y === void 0
										? void 0
										: y.querySelector(S)
							C && (clearInterval(m), b.observe(C))
						}, 10)
					return () => {
						clearInterval(m), b.disconnect()
					}
				}
			}, []),
			u.createElement(
				uw,
				{
					theme: {
						token: {
							motionDurationFast: '0.01s',
							motionDurationMid: '0.01s',
							motionDurationSlow: '0.01s'
						}
					}
				},
				u.createElement(
					'div',
					{
						ref: l,
						style: {
							paddingBottom: s,
							position: 'relative',
							width: 'fit-content',
							minWidth: f
						}
					},
					u.createElement(
						e,
						Object.assign({}, o, {
							style: Object.assign(Object.assign({}, i), { margin: 0 }),
							open: v,
							visible: v,
							getPopupContainer: () => l.current
						})
					)
				)
			)
		)
	}
}
const o1 = e => {
		const { controlPaddingHorizontal: t } = e
		return {
			position: 'relative',
			display: 'block',
			minHeight: e.controlHeight,
			padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${t}px`,
			color: e.colorText,
			fontWeight: 'normal',
			fontSize: e.fontSize,
			lineHeight: e.lineHeight,
			boxSizing: 'border-box'
		}
	},
	E4 = e => {
		const { antCls: t, componentCls: n } = e,
			r = `${n}-item`
		return [
			{
				[`${n}-dropdown`]: Object.assign(Object.assign({}, po(e)), {
					position: 'absolute',
					top: -9999,
					zIndex: e.zIndexPopup,
					boxSizing: 'border-box',
					padding: e.paddingXXS,
					overflow: 'hidden',
					fontSize: e.fontSize,
					fontVariant: 'initial',
					backgroundColor: e.colorBgElevated,
					borderRadius: e.borderRadiusLG,
					outline: 'none',
					boxShadow: e.boxShadowSecondary,
					[`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-bottomLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-bottomLeft
          `]: { animationName: Gh },
					[`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]: { animationName: qh },
					[`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]:
						{ animationName: Xh },
					[`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft`]:
						{ animationName: Qh },
					'&-hidden': { display: 'none' },
					'&-empty': { color: e.colorTextDisabled },
					[`${r}-empty`]: Object.assign(Object.assign({}, o1(e)), {
						color: e.colorTextDisabled
					}),
					[`${r}`]: Object.assign(Object.assign({}, o1(e)), {
						cursor: 'pointer',
						transition: `background ${e.motionDurationSlow} ease`,
						borderRadius: e.borderRadiusSM,
						'&-group': {
							color: e.colorTextDescription,
							fontSize: e.fontSizeSM,
							cursor: 'default'
						},
						'&-option': {
							display: 'flex',
							'&-content': Object.assign(Object.assign({ flex: 'auto' }, wa), {
								'> *': Object.assign({}, wa)
							}),
							'&-state': { flex: 'none' },
							[`&-active:not(${r}-option-disabled)`]: {
								backgroundColor: e.controlItemBgHover
							},
							[`&-selected:not(${r}-option-disabled)`]: {
								color: e.colorText,
								fontWeight: e.fontWeightStrong,
								backgroundColor: e.controlItemBgActive,
								[`${r}-option-state`]: { color: e.colorPrimary }
							},
							'&-disabled': {
								[`&${r}-option-selected`]: {
									backgroundColor: e.colorBgContainerDisabled
								},
								color: e.colorTextDisabled,
								cursor: 'not-allowed'
							},
							'&-grouped': {
								paddingInlineStart: e.controlPaddingHorizontal * 2
							}
						}
					}),
					'&-rtl': { direction: 'rtl' }
				})
			},
			Ai(e, 'slide-up'),
			Ai(e, 'slide-down'),
			kc(e, 'move-up'),
			kc(e, 'move-down')
		]
	},
	$4 = E4,
	Ga = 2
function ax(e) {
	let { controlHeightSM: t, controlHeight: n, lineWidth: r } = e
	const o = (n - t) / 2 - r,
		a = Math.ceil(o / 2)
	return [o, a]
}
function Yf(e, t) {
	const { componentCls: n, iconCls: r } = e,
		o = `${n}-selection-overflow`,
		a = e.controlHeightSM,
		[i] = ax(e),
		l = t ? `${n}-${t}` : ''
	return {
		[`${n}-multiple${l}`]: {
			fontSize: e.fontSize,
			[o]: {
				position: 'relative',
				display: 'flex',
				flex: 'auto',
				flexWrap: 'wrap',
				maxWidth: '100%',
				'&-item': {
					flex: 'none',
					alignSelf: 'center',
					maxWidth: '100%',
					display: 'inline-flex'
				}
			},
			[`${n}-selector`]: {
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
				padding: `${i - Ga}px ${Ga * 2}px`,
				borderRadius: e.borderRadius,
				[`${n}-show-search&`]: { cursor: 'text' },
				[`${n}-disabled&`]: {
					background: e.colorBgContainerDisabled,
					cursor: 'not-allowed'
				},
				'&:after': {
					display: 'inline-block',
					width: 0,
					margin: `${Ga}px 0`,
					lineHeight: `${a}px`,
					content: '"\\a0"'
				}
			},
			[`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: { paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal },
			[`${n}-selection-item`]: {
				position: 'relative',
				display: 'flex',
				flex: 'none',
				boxSizing: 'border-box',
				maxWidth: '100%',
				height: a,
				marginTop: Ga,
				marginBottom: Ga,
				lineHeight: `${a - e.lineWidth * 2}px`,
				background: e.colorFillSecondary,
				border: `${e.lineWidth}px solid ${e.colorSplit}`,
				borderRadius: e.borderRadiusSM,
				cursor: 'default',
				transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
				userSelect: 'none',
				marginInlineEnd: Ga * 2,
				paddingInlineStart: e.paddingXS,
				paddingInlineEnd: e.paddingXS / 2,
				[`${n}-disabled&`]: {
					color: e.colorTextDisabled,
					borderColor: e.colorBorder,
					cursor: 'not-allowed'
				},
				'&-content': {
					display: 'inline-block',
					marginInlineEnd: e.paddingXS / 2,
					overflow: 'hidden',
					whiteSpace: 'pre',
					textOverflow: 'ellipsis'
				},
				'&-remove': Object.assign(Object.assign({}, Fh()), {
					display: 'inline-block',
					color: e.colorIcon,
					fontWeight: 'bold',
					fontSize: 10,
					lineHeight: 'inherit',
					cursor: 'pointer',
					[`> ${r}`]: { verticalAlign: '-0.2em' },
					'&:hover': { color: e.colorIconHover }
				})
			},
			[`${o}-item + ${o}-item`]: {
				[`${n}-selection-search`]: { marginInlineStart: 0 }
			},
			[`${n}-selection-search`]: {
				display: 'inline-flex',
				position: 'relative',
				maxWidth: '100%',
				marginInlineStart: e.inputPaddingHorizontalBase - i,
				[`
          &-input,
          &-mirror
        `]: {
					height: a,
					fontFamily: e.fontFamily,
					lineHeight: `${a}px`,
					transition: `all ${e.motionDurationSlow}`
				},
				'&-input': { width: '100%', minWidth: 4.1 },
				'&-mirror': {
					position: 'absolute',
					top: 0,
					insetInlineStart: 0,
					insetInlineEnd: 'auto',
					zIndex: 999,
					whiteSpace: 'pre',
					visibility: 'hidden'
				}
			},
			[`${n}-selection-placeholder `]: {
				position: 'absolute',
				top: '50%',
				insetInlineStart: e.inputPaddingHorizontalBase,
				insetInlineEnd: e.inputPaddingHorizontalBase,
				transform: 'translateY(-50%)',
				transition: `all ${e.motionDurationSlow}`
			}
		}
	}
}
function P4(e) {
	const { componentCls: t } = e,
		n = Zt(e, {
			controlHeight: e.controlHeightSM,
			controlHeightSM: e.controlHeightXS,
			borderRadius: e.borderRadiusSM,
			borderRadiusSM: e.borderRadiusXS
		}),
		[, r] = ax(e)
	return [
		Yf(e),
		Yf(n, 'sm'),
		{
			[`${t}-multiple${t}-sm`]: {
				[`${t}-selection-placeholder`]: {
					insetInline: e.controlPaddingHorizontalSM - e.lineWidth
				},
				[`${t}-selection-search`]: { marginInlineStart: r }
			}
		},
		Yf(
			Zt(e, {
				fontSize: e.fontSizeLG,
				controlHeight: e.controlHeightLG,
				controlHeightSM: e.controlHeight,
				borderRadius: e.borderRadiusLG,
				borderRadiusSM: e.borderRadius
			}),
			'lg'
		)
	]
}
function Kf(e, t) {
	const { componentCls: n, inputPaddingHorizontalBase: r, borderRadius: o } = e,
		a = e.controlHeight - e.lineWidth * 2,
		i = Math.ceil(e.fontSize * 1.25),
		l = t ? `${n}-${t}` : ''
	return {
		[`${n}-single${l}`]: {
			fontSize: e.fontSize,
			[`${n}-selector`]: Object.assign(Object.assign({}, po(e)), {
				display: 'flex',
				borderRadius: o,
				[`${n}-selection-search`]: {
					position: 'absolute',
					top: 0,
					insetInlineStart: r,
					insetInlineEnd: r,
					bottom: 0,
					'&-input': { width: '100%' }
				},
				[`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
					padding: 0,
					lineHeight: `${a}px`,
					transition: `all ${e.motionDurationSlow}`,
					'@supports (-moz-appearance: meterbar)': { lineHeight: `${a}px` }
				},
				[`${n}-selection-item`]: { position: 'relative', userSelect: 'none' },
				[`${n}-selection-placeholder`]: {
					transition: 'none',
					pointerEvents: 'none'
				},
				[[
					'&:after',
					`${n}-selection-item:after`,
					`${n}-selection-placeholder:after`
				].join(',')]: {
					display: 'inline-block',
					width: 0,
					visibility: 'hidden',
					content: '"\\a0"'
				}
			}),
			[`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: { paddingInlineEnd: i },
			[`&${n}-open ${n}-selection-item`]: { color: e.colorTextPlaceholder },
			[`&:not(${n}-customize-input)`]: {
				[`${n}-selector`]: {
					width: '100%',
					height: e.controlHeight,
					padding: `0 ${r}px`,
					[`${n}-selection-search-input`]: { height: a },
					'&:after': { lineHeight: `${a}px` }
				}
			},
			[`&${n}-customize-input`]: {
				[`${n}-selector`]: {
					'&:after': { display: 'none' },
					[`${n}-selection-search`]: { position: 'static', width: '100%' },
					[`${n}-selection-placeholder`]: {
						position: 'absolute',
						insetInlineStart: 0,
						insetInlineEnd: 0,
						padding: `0 ${r}px`,
						'&:after': { display: 'none' }
					}
				}
			}
		}
	}
}
function R4(e) {
	const { componentCls: t } = e,
		n = e.controlPaddingHorizontalSM - e.lineWidth
	return [
		Kf(e),
		Kf(
			Zt(e, {
				controlHeight: e.controlHeightSM,
				borderRadius: e.borderRadiusSM
			}),
			'sm'
		),
		{
			[`${t}-single${t}-sm`]: {
				[`&:not(${t}-customize-input)`]: {
					[`${t}-selection-search`]: { insetInlineStart: n, insetInlineEnd: n },
					[`${t}-selector`]: { padding: `0 ${n}px` },
					[`&${t}-show-arrow ${t}-selection-search`]: {
						insetInlineEnd: n + e.fontSize * 1.5
					},
					[`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: { paddingInlineEnd: e.fontSize * 1.5 }
				}
			}
		},
		Kf(
			Zt(e, {
				controlHeight: e.controlHeightLG,
				fontSize: e.fontSizeLG,
				borderRadius: e.borderRadiusLG
			}),
			'lg'
		)
	]
}
const M4 = e => {
		const { componentCls: t } = e
		return {
			position: 'relative',
			backgroundColor: e.colorBgContainer,
			border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
			transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
			input: { cursor: 'pointer' },
			[`${t}-show-search&`]: {
				cursor: 'text',
				input: { cursor: 'auto', color: 'inherit' }
			},
			[`${t}-disabled&`]: {
				color: e.colorTextDisabled,
				background: e.colorBgContainerDisabled,
				cursor: 'not-allowed',
				[`${t}-multiple&`]: { background: e.colorBgContainerDisabled },
				input: { cursor: 'not-allowed' }
			}
		}
	},
	Gf = function (e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
		const {
				componentCls: r,
				borderHoverColor: o,
				outlineColor: a,
				antCls: i
			} = t,
			l = n ? { [`${r}-selector`]: { borderColor: o } } : {}
		return {
			[e]: {
				[`&:not(${r}-disabled):not(${r}-customize-input):not(${i}-pagination-size-changer)`]:
					Object.assign(Object.assign({}, l), {
						[`${r}-focused& ${r}-selector`]: {
							borderColor: o,
							boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${a}`,
							outline: 0
						},
						[`&:hover ${r}-selector`]: { borderColor: o }
					})
			}
		}
	},
	O4 = e => {
		const { componentCls: t } = e
		return {
			[`${t}-selection-search-input`]: {
				margin: 0,
				padding: 0,
				background: 'transparent',
				border: 'none',
				outline: 'none',
				appearance: 'none',
				'&::-webkit-search-cancel-button': {
					display: 'none',
					'-webkit-appearance': 'none'
				}
			}
		}
	},
	N4 = e => {
		const { componentCls: t, inputPaddingHorizontalBase: n, iconCls: r } = e
		return {
			[t]: Object.assign(Object.assign({}, po(e)), {
				position: 'relative',
				display: 'inline-block',
				cursor: 'pointer',
				[`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(
					Object.assign({}, M4(e)),
					O4(e)
				),
				[`${t}-selection-item`]: Object.assign(
					Object.assign({ flex: 1, fontWeight: 'normal' }, wa),
					{ '> *': Object.assign({ lineHeight: 'inherit' }, wa) }
				),
				[`${t}-selection-placeholder`]: Object.assign(Object.assign({}, wa), {
					flex: 1,
					color: e.colorTextPlaceholder,
					pointerEvents: 'none'
				}),
				[`${t}-arrow`]: Object.assign(Object.assign({}, Fh()), {
					position: 'absolute',
					top: '50%',
					insetInlineStart: 'auto',
					insetInlineEnd: n,
					height: e.fontSizeIcon,
					marginTop: -e.fontSizeIcon / 2,
					color: e.colorTextQuaternary,
					fontSize: e.fontSizeIcon,
					lineHeight: 1,
					textAlign: 'center',
					pointerEvents: 'none',
					display: 'flex',
					alignItems: 'center',
					[r]: {
						verticalAlign: 'top',
						transition: `transform ${e.motionDurationSlow}`,
						'> svg': { verticalAlign: 'top' },
						[`&:not(${t}-suffix)`]: { pointerEvents: 'auto' }
					},
					[`${t}-disabled &`]: { cursor: 'not-allowed' },
					'> *:not(:last-child)': { marginInlineEnd: 8 }
				}),
				[`${t}-clear`]: {
					position: 'absolute',
					top: '50%',
					insetInlineStart: 'auto',
					insetInlineEnd: n,
					zIndex: 1,
					display: 'inline-block',
					width: e.fontSizeIcon,
					height: e.fontSizeIcon,
					marginTop: -e.fontSizeIcon / 2,
					color: e.colorTextQuaternary,
					fontSize: e.fontSizeIcon,
					fontStyle: 'normal',
					lineHeight: 1,
					textAlign: 'center',
					textTransform: 'none',
					background: e.colorBgContainer,
					cursor: 'pointer',
					opacity: 0,
					transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
					textRendering: 'auto',
					'&:before': { display: 'block' },
					'&:hover': { color: e.colorTextTertiary }
				},
				'&:hover': { [`${t}-clear`]: { opacity: 1 } }
			}),
			[`${t}-has-feedback`]: {
				[`${t}-clear`]: { insetInlineEnd: n + e.fontSize + e.paddingXXS }
			}
		}
	},
	I4 = e => {
		const { componentCls: t } = e
		return [
			{
				[t]: {
					[`&-borderless ${t}-selector`]: {
						backgroundColor: 'transparent !important',
						borderColor: 'transparent !important',
						boxShadow: 'none !important'
					},
					[`&${t}-in-form-item`]: { width: '100%' }
				}
			},
			N4(e),
			R4(e),
			P4(e),
			$4(e),
			{ [`${t}-rtl`]: { direction: 'rtl' } },
			Gf(
				t,
				Zt(e, {
					borderHoverColor: e.colorPrimaryHover,
					outlineColor: e.controlOutline
				})
			),
			Gf(
				`${t}-status-error`,
				Zt(e, {
					borderHoverColor: e.colorErrorHover,
					outlineColor: e.colorErrorOutline
				}),
				!0
			),
			Gf(
				`${t}-status-warning`,
				Zt(e, {
					borderHoverColor: e.colorWarningHover,
					outlineColor: e.colorWarningOutline
				}),
				!0
			),
			$d(e, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` })
		]
	},
	k4 = So(
		'Select',
		(e, t) => {
			let { rootPrefixCls: n } = t
			const r = Zt(e, {
				rootPrefixCls: n,
				inputPaddingHorizontalBase: e.paddingSM - 1
			})
			return [I4(r)]
		},
		e => ({ zIndexPopup: e.zIndexPopupBase + 50 })
	)
function T4(e) {
	return e ?? !0
}
var D4 =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
const ix = 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
	_4 = (e, t) => {
		var {
				prefixCls: n,
				bordered: r = !0,
				className: o,
				rootClassName: a,
				getPopupContainer: i,
				popupClassName: l,
				dropdownClassName: s,
				listHeight: c = 256,
				placement: f,
				listItemHeight: d = 24,
				size: v,
				disabled: p,
				notFoundContent: h,
				status: g,
				showArrow: b
			} = e,
			m = D4(e, [
				'prefixCls',
				'bordered',
				'className',
				'rootClassName',
				'getPopupContainer',
				'popupClassName',
				'dropdownClassName',
				'listHeight',
				'placement',
				'listItemHeight',
				'size',
				'disabled',
				'notFoundContent',
				'status',
				'showArrow'
			])
		const {
				getPopupContainer: y,
				getPrefixCls: S,
				renderEmpty: C,
				direction: x,
				virtual: w,
				dropdownMatchSelectWidth: E,
				select: P
			} = u.useContext(kt),
			N = u.useContext(Dr),
			O = S('select', n),
			k = S(),
			{ compactSize: I, compactItemClassnames: $ } = Ki(O, x),
			[R, M] = k4(O),
			T = u.useMemo(() => {
				const { mode: ee } = m
				if (ee !== 'combobox') return ee === ix ? 'combobox' : ee
			}, [m.mode]),
			_ = T === 'multiple' || T === 'tags',
			D = T4(b),
			{
				status: L,
				hasFeedback: H,
				isFormItemInput: j,
				feedbackIcon: z
			} = u.useContext(ho),
			A = Is(L, g)
		let W
		h !== void 0
			? (W = h)
			: T === 'combobox'
			? (W = null)
			: (W =
					(C == null ? void 0 : C('Select')) ||
					u.createElement(p4, { componentName: 'Select' }))
		const {
				suffixIcon: Y,
				itemIcon: K,
				removeIcon: G,
				clearIcon: te
			} = x4(
				Object.assign(Object.assign({}, m), {
					multiple: _,
					hasFeedback: H,
					feedbackIcon: z,
					showArrow: D,
					prefixCls: O
				})
			),
			ne = Tr(m, ['suffixIcon', 'itemIcon']),
			ie = Z(l || s, { [`${O}-dropdown-${x}`]: x === 'rtl' }, a, M),
			le = I || v || N,
			ae = u.useContext(La),
			q = p ?? ae,
			de = Z(
				{
					[`${O}-lg`]: le === 'large',
					[`${O}-sm`]: le === 'small',
					[`${O}-rtl`]: x === 'rtl',
					[`${O}-borderless`]: !r,
					[`${O}-in-form-item`]: j
				},
				qo(O, A, H),
				$,
				o,
				a,
				M
			),
			ve = () => (f !== void 0 ? f : x === 'rtl' ? 'bottomRight' : 'bottomLeft')
		return R(
			u.createElement(
				ng,
				Object.assign(
					{
						ref: t,
						virtual: w,
						dropdownMatchSelectWidth: E,
						showSearch: P == null ? void 0 : P.showSearch
					},
					ne,
					{
						transitionName: Tw(k, lk(f), m.transitionName),
						listHeight: c,
						listItemHeight: d,
						mode: T,
						prefixCls: O,
						placement: ve(),
						direction: x,
						inputIcon: Y,
						menuItemSelectedIcon: K,
						removeIcon: G,
						clearIcon: te,
						notFoundContent: W,
						className: de,
						getPopupContainer: i || y,
						dropdownClassName: ie,
						showArrow: H || D,
						disabled: q
					}
				)
			)
		)
	},
	Gi = u.forwardRef(_4),
	L4 = Rd(Gi)
Gi.SECRET_COMBOBOX_MODE_DO_NOT_USE = ix
Gi.Option = tg
Gi.OptGroup = eg
Gi._InternalPanelDoNotUseOrYouWillBeFired = L4
const wi = Gi,
	{ Option: Zp } = wi
function a1(e) {
	return e && e.type && (e.type.isSelectOption || e.type.isSelectOptGroup)
}
const A4 = (e, t) => {
		const {
				prefixCls: n,
				className: r,
				popupClassName: o,
				dropdownClassName: a,
				children: i,
				dataSource: l
			} = e,
			s = Ur(i)
		let c
		s.length === 1 && Pc(s[0]) && !a1(s[0]) && ([c] = s)
		const f = c ? () => c : void 0
		let d
		s.length && a1(s[0])
			? (d = i)
			: (d = l
					? l.map(h => {
							if (Pc(h)) return h
							switch (typeof h) {
								case 'string':
									return u.createElement(Zp, { key: h, value: h }, h)
								case 'object': {
									const { value: g } = h
									return u.createElement(Zp, { key: g, value: g }, h.text)
								}
								default:
									return
							}
					  })
					: [])
		const { getPrefixCls: v } = u.useContext(kt),
			p = v('select', n)
		return u.createElement(
			wi,
			Object.assign(
				{ ref: t, showArrow: !1 },
				Tr(e, ['dataSource', 'dropdownClassName']),
				{
					prefixCls: p,
					popupClassName: o || a,
					className: Z(`${p}-auto-complete`, r),
					mode: wi.SECRET_COMBOBOX_MODE_DO_NOT_USE
				},
				{ getInputElement: f }
			),
			d
		)
	},
	Md = u.forwardRef(A4),
	F4 = Rd(Md)
Md.Option = Zp
Md._InternalPanelDoNotUseOrYouWillBeFired = F4
const z4 = Md
var H4 = u.forwardRef(function (e, t) {
	var n = e.didUpdate,
		r = e.getContainer,
		o = e.children,
		a = u.useRef(),
		i = u.useRef()
	u.useImperativeHandle(t, function () {
		return {}
	})
	var l = u.useRef(!1)
	return (
		!l.current &&
			An() &&
			((i.current = r()), (a.current = i.current.parentNode), (l.current = !0)),
		u.useEffect(function () {
			n == null || n(e)
		}),
		u.useEffect(function () {
			return (
				i.current.parentNode === null &&
					a.current !== null &&
					a.current.appendChild(i.current),
				function () {
					var s, c
					;(s = i.current) === null ||
						s === void 0 ||
						(c = s.parentNode) === null ||
						c === void 0 ||
						c.removeChild(i.current)
				}
			)
		}, []),
		i.current ? ki.createPortal(o, i.current) : null
	)
})
function V4(e, t, n) {
	return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function j4(e, t, n) {
	var r = e[t] || {}
	return F(F({}, r), n)
}
function B4(e, t, n, r) {
	for (var o = n.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
		var l = a[i]
		if (V4(e[l].points, o, r)) return ''.concat(t, '-placement-').concat(l)
	}
	return ''
}
function lx(e) {
	var t = e.prefixCls,
		n = e.motion,
		r = e.animation,
		o = e.transitionName
	return (
		n ||
		(r
			? { motionName: ''.concat(t, '-').concat(r) }
			: o
			? { motionName: o }
			: null)
	)
}
function W4(e) {
	var t = e.prefixCls,
		n = e.visible,
		r = e.zIndex,
		o = e.mask,
		a = e.maskMotion,
		i = e.maskAnimation,
		l = e.maskTransitionName
	if (!o) return null
	var s = {}
	return (
		(a || l || i) &&
			(s = F(
				{ motionAppear: !0 },
				lx({ motion: a, prefixCls: t, transitionName: l, animation: i })
			)),
		u.createElement(
			Xr,
			se({}, s, { visible: n, removeOnLeave: !0 }),
			function (c) {
				var f = c.className
				return u.createElement('div', {
					style: { zIndex: r },
					className: Z(''.concat(t, '-mask'), f)
				})
			}
		)
	)
}
function i1(e, t) {
	var n = Object.keys(e)
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e)
		t &&
			(r = r.filter(function (o) {
				return Object.getOwnPropertyDescriptor(e, o).enumerable
			})),
			n.push.apply(n, r)
	}
	return n
}
function l1(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {}
		t % 2
			? i1(Object(n), !0).forEach(function (r) {
					U4(e, r, n[r])
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: i1(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
			  })
	}
	return e
}
function Jp(e) {
	return (
		(Jp =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t
				  }
				: function (t) {
						return t &&
							typeof Symbol == 'function' &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t
				  }),
		Jp(e)
	)
}
function U4(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
			  })
			: (e[t] = n),
		e
	)
}
var pl,
	Y4 = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' }
function _c() {
	if (pl !== void 0) return pl
	pl = ''
	var e = document.createElement('p').style,
		t = 'Transform'
	for (var n in Y4) n + t in e && (pl = n)
	return pl
}
function sx() {
	return _c() ? ''.concat(_c(), 'TransitionProperty') : 'transitionProperty'
}
function Od() {
	return _c() ? ''.concat(_c(), 'Transform') : 'transform'
}
function s1(e, t) {
	var n = sx()
	n &&
		((e.style[n] = t),
		n !== 'transitionProperty' && (e.style.transitionProperty = t))
}
function Xf(e, t) {
	var n = Od()
	n && ((e.style[n] = t), n !== 'transform' && (e.style.transform = t))
}
function K4(e) {
	return e.style.transitionProperty || e.style[sx()]
}
function G4(e) {
	var t = window.getComputedStyle(e, null),
		n = t.getPropertyValue('transform') || t.getPropertyValue(Od())
	if (n && n !== 'none') {
		var r = n.replace(/[^0-9\-.,]/g, '').split(',')
		return { x: parseFloat(r[12] || r[4], 0), y: parseFloat(r[13] || r[5], 0) }
	}
	return { x: 0, y: 0 }
}
var X4 = /matrix\((.*)\)/,
	q4 = /matrix3d\((.*)\)/
function Q4(e, t) {
	var n = window.getComputedStyle(e, null),
		r = n.getPropertyValue('transform') || n.getPropertyValue(Od())
	if (r && r !== 'none') {
		var o,
			a = r.match(X4)
		if (a)
			(a = a[1]),
				(o = a.split(',').map(function (l) {
					return parseFloat(l, 10)
				})),
				(o[4] = t.x),
				(o[5] = t.y),
				Xf(e, 'matrix('.concat(o.join(','), ')'))
		else {
			var i = r.match(q4)[1]
			;(o = i.split(',').map(function (l) {
				return parseFloat(l, 10)
			})),
				(o[12] = t.x),
				(o[13] = t.y),
				Xf(e, 'matrix3d('.concat(o.join(','), ')'))
		}
	} else
		Xf(
			e,
			'translateX('
				.concat(t.x, 'px) translateY(')
				.concat(t.y, 'px) translateZ(0)')
		)
}
var Z4 = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
	ks
function u1(e) {
	var t = e.style.display
	;(e.style.display = 'none'), e.offsetHeight, (e.style.display = t)
}
function xi(e, t, n) {
	var r = n
	if (Jp(t) === 'object') {
		for (var o in t) t.hasOwnProperty(o) && xi(e, o, t[o])
		return
	}
	if (typeof r < 'u') {
		typeof r == 'number' && (r = ''.concat(r, 'px')), (e.style[t] = r)
		return
	}
	return ks(e, t)
}
function J4(e) {
	var t,
		n,
		r,
		o = e.ownerDocument,
		a = o.body,
		i = o && o.documentElement
	return (
		(t = e.getBoundingClientRect()),
		(n = Math.floor(t.left)),
		(r = Math.floor(t.top)),
		(n -= i.clientLeft || a.clientLeft || 0),
		(r -= i.clientTop || a.clientTop || 0),
		{ left: n, top: r }
	)
}
function ux(e, t) {
	var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
		r = 'scroll'.concat(t ? 'Top' : 'Left')
	if (typeof n != 'number') {
		var o = e.document
		;(n = o.documentElement[r]), typeof n != 'number' && (n = o.body[r])
	}
	return n
}
function cx(e) {
	return ux(e)
}
function dx(e) {
	return ux(e, !0)
}
function ms(e) {
	var t = J4(e),
		n = e.ownerDocument,
		r = n.defaultView || n.parentWindow
	return (t.left += cx(r)), (t.top += dx(r)), t
}
function ag(e) {
	return e != null && e == e.window
}
function fx(e) {
	return ag(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument
}
function e3(e, t, n) {
	var r = n,
		o = '',
		a = fx(e)
	return (
		(r = r || a.defaultView.getComputedStyle(e, null)),
		r && (o = r.getPropertyValue(t) || r[t]),
		o
	)
}
var t3 = new RegExp('^('.concat(Z4, ')(?!px)[a-z%]+$'), 'i'),
	n3 = /^(top|right|bottom|left)$/,
	qf = 'currentStyle',
	Qf = 'runtimeStyle',
	ia = 'left',
	r3 = 'px'
function o3(e, t) {
	var n = e[qf] && e[qf][t]
	if (t3.test(n) && !n3.test(t)) {
		var r = e.style,
			o = r[ia],
			a = e[Qf][ia]
		;(e[Qf][ia] = e[qf][ia]),
			(r[ia] = t === 'fontSize' ? '1em' : n || 0),
			(n = r.pixelLeft + r3),
			(r[ia] = o),
			(e[Qf][ia] = a)
	}
	return n === '' ? 'auto' : n
}
typeof window < 'u' && (ks = window.getComputedStyle ? e3 : o3)
function yu(e, t) {
	return e === 'left'
		? t.useCssRight
			? 'right'
			: e
		: t.useCssBottom
		? 'bottom'
		: e
}
function c1(e) {
	if (e === 'left') return 'right'
	if (e === 'right') return 'left'
	if (e === 'top') return 'bottom'
	if (e === 'bottom') return 'top'
}
function d1(e, t, n) {
	xi(e, 'position') === 'static' && (e.style.position = 'relative')
	var r = -999,
		o = -999,
		a = yu('left', n),
		i = yu('top', n),
		l = c1(a),
		s = c1(i)
	a !== 'left' && (r = 999), i !== 'top' && (o = 999)
	var c = '',
		f = ms(e)
	;('left' in t || 'top' in t) && ((c = K4(e) || ''), s1(e, 'none')),
		'left' in t && ((e.style[l] = ''), (e.style[a] = ''.concat(r, 'px'))),
		'top' in t && ((e.style[s] = ''), (e.style[i] = ''.concat(o, 'px'))),
		u1(e)
	var d = ms(e),
		v = {}
	for (var p in t)
		if (t.hasOwnProperty(p)) {
			var h = yu(p, n),
				g = p === 'left' ? r : o,
				b = f[p] - d[p]
			h === p ? (v[h] = g + b) : (v[h] = g - b)
		}
	xi(e, v), u1(e), ('left' in t || 'top' in t) && s1(e, c)
	var m = {}
	for (var y in t)
		if (t.hasOwnProperty(y)) {
			var S = yu(y, n),
				C = t[y] - f[y]
			y === S ? (m[S] = v[S] + C) : (m[S] = v[S] - C)
		}
	xi(e, m)
}
function a3(e, t) {
	var n = ms(e),
		r = G4(e),
		o = { x: r.x, y: r.y }
	'left' in t && (o.x = r.x + t.left - n.left),
		'top' in t && (o.y = r.y + t.top - n.top),
		Q4(e, o)
}
function i3(e, t, n) {
	if (n.ignoreShake) {
		var r = ms(e),
			o = r.left.toFixed(0),
			a = r.top.toFixed(0),
			i = t.left.toFixed(0),
			l = t.top.toFixed(0)
		if (o === i && a === l) return
	}
	n.useCssRight || n.useCssBottom
		? d1(e, t, n)
		: n.useCssTransform && Od() in document.body.style
		? a3(e, t)
		: d1(e, t, n)
}
function ig(e, t) {
	for (var n = 0; n < e.length; n++) t(e[n])
}
function vx(e) {
	return ks(e, 'boxSizing') === 'border-box'
}
var l3 = ['margin', 'border', 'padding'],
	em = -1,
	s3 = 2,
	tm = 1,
	u3 = 0
function c3(e, t, n) {
	var r = {},
		o = e.style,
		a
	for (a in t) t.hasOwnProperty(a) && ((r[a] = o[a]), (o[a] = t[a]))
	n.call(e)
	for (a in t) t.hasOwnProperty(a) && (o[a] = r[a])
}
function El(e, t, n) {
	var r = 0,
		o,
		a,
		i
	for (a = 0; a < t.length; a++)
		if (((o = t[a]), o))
			for (i = 0; i < n.length; i++) {
				var l = void 0
				o === 'border'
					? (l = ''.concat(o).concat(n[i], 'Width'))
					: (l = o + n[i]),
					(r += parseFloat(ks(e, l)) || 0)
			}
	return r
}
var Vr = {
	getParent: function (t) {
		var n = t
		do n.nodeType === 11 && n.host ? (n = n.host) : (n = n.parentNode)
		while (n && n.nodeType !== 1 && n.nodeType !== 9)
		return n
	}
}
ig(['Width', 'Height'], function (e) {
	;(Vr['doc'.concat(e)] = function (t) {
		var n = t.document
		return Math.max(
			n.documentElement['scroll'.concat(e)],
			n.body['scroll'.concat(e)],
			Vr['viewport'.concat(e)](n)
		)
	}),
		(Vr['viewport'.concat(e)] = function (t) {
			var n = 'client'.concat(e),
				r = t.document,
				o = r.body,
				a = r.documentElement,
				i = a[n]
			return (r.compatMode === 'CSS1Compat' && i) || (o && o[n]) || i
		})
})
function f1(e, t, n) {
	var r = n
	if (ag(e)) return t === 'width' ? Vr.viewportWidth(e) : Vr.viewportHeight(e)
	if (e.nodeType === 9) return t === 'width' ? Vr.docWidth(e) : Vr.docHeight(e)
	var o = t === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
		a = Math.floor(
			t === 'width'
				? e.getBoundingClientRect().width
				: e.getBoundingClientRect().height
		),
		i = vx(e),
		l = 0
	;(a == null || a <= 0) &&
		((a = void 0),
		(l = ks(e, t)),
		(l == null || Number(l) < 0) && (l = e.style[t] || 0),
		(l = Math.floor(parseFloat(l)) || 0)),
		r === void 0 && (r = i ? tm : em)
	var s = a !== void 0 || i,
		c = a || l
	return r === em
		? s
			? c - El(e, ['border', 'padding'], o)
			: l
		: s
		? r === tm
			? c
			: c + (r === s3 ? -El(e, ['border'], o) : El(e, ['margin'], o))
		: l + El(e, l3.slice(r), o)
}
var d3 = { position: 'absolute', visibility: 'hidden', display: 'block' }
function v1() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n]
	var r,
		o = t[0]
	return (
		o.offsetWidth !== 0
			? (r = f1.apply(void 0, t))
			: c3(o, d3, function () {
					r = f1.apply(void 0, t)
			  }),
		r
	)
}
ig(['width', 'height'], function (e) {
	var t = e.charAt(0).toUpperCase() + e.slice(1)
	Vr['outer'.concat(t)] = function (r, o) {
		return r && v1(r, e, o ? u3 : tm)
	}
	var n = e === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom']
	Vr[e] = function (r, o) {
		var a = o
		if (a !== void 0) {
			if (r) {
				var i = vx(r)
				return i && (a += El(r, ['padding', 'border'], n)), xi(r, e, a)
			}
			return
		}
		return r && v1(r, e, em)
	}
})
function px(e, t) {
	for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
	return e
}
var Qe = {
	getWindow: function (t) {
		if (t && t.document && t.setTimeout) return t
		var n = t.ownerDocument || t
		return n.defaultView || n.parentWindow
	},
	getDocument: fx,
	offset: function (t, n, r) {
		if (typeof n < 'u') i3(t, n, r || {})
		else return ms(t)
	},
	isWindow: ag,
	each: ig,
	css: xi,
	clone: function (t) {
		var n,
			r = {}
		for (n in t) t.hasOwnProperty(n) && (r[n] = t[n])
		var o = t.overflow
		if (o) for (n in t) t.hasOwnProperty(n) && (r.overflow[n] = t.overflow[n])
		return r
	},
	mix: px,
	getWindowScrollLeft: function (t) {
		return cx(t)
	},
	getWindowScrollTop: function (t) {
		return dx(t)
	},
	merge: function () {
		for (var t = {}, n = 0; n < arguments.length; n++)
			Qe.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n])
		return t
	},
	viewportWidth: 0,
	viewportHeight: 0
}
px(Qe, Vr)
var Zf = Qe.getParent
function nm(e) {
	if (Qe.isWindow(e) || e.nodeType === 9) return null
	var t = Qe.getDocument(e),
		n = t.body,
		r,
		o = Qe.css(e, 'position'),
		a = o === 'fixed' || o === 'absolute'
	if (!a) return e.nodeName.toLowerCase() === 'html' ? null : Zf(e)
	for (r = Zf(e); r && r !== n && r.nodeType !== 9; r = Zf(r))
		if (((o = Qe.css(r, 'position')), o !== 'static')) return r
	return null
}
var p1 = Qe.getParent
function f3(e) {
	if (Qe.isWindow(e) || e.nodeType === 9) return !1
	var t = Qe.getDocument(e),
		n = t.body,
		r = null
	for (r = p1(e); r && r !== n && r !== t; r = p1(r)) {
		var o = Qe.css(r, 'position')
		if (o === 'fixed') return !0
	}
	return !1
}
function lg(e, t) {
	for (
		var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
			r = nm(e),
			o = Qe.getDocument(e),
			a = o.defaultView || o.parentWindow,
			i = o.body,
			l = o.documentElement;
		r;

	) {
		if (
			(navigator.userAgent.indexOf('MSIE') === -1 || r.clientWidth !== 0) &&
			r !== i &&
			r !== l &&
			Qe.css(r, 'overflow') !== 'visible'
		) {
			var s = Qe.offset(r)
			;(s.left += r.clientLeft),
				(s.top += r.clientTop),
				(n.top = Math.max(n.top, s.top)),
				(n.right = Math.min(n.right, s.left + r.clientWidth)),
				(n.bottom = Math.min(n.bottom, s.top + r.clientHeight)),
				(n.left = Math.max(n.left, s.left))
		} else if (r === i || r === l) break
		r = nm(r)
	}
	var c = null
	if (!Qe.isWindow(e) && e.nodeType !== 9) {
		c = e.style.position
		var f = Qe.css(e, 'position')
		f === 'absolute' && (e.style.position = 'fixed')
	}
	var d = Qe.getWindowScrollLeft(a),
		v = Qe.getWindowScrollTop(a),
		p = Qe.viewportWidth(a),
		h = Qe.viewportHeight(a),
		g = l.scrollWidth,
		b = l.scrollHeight,
		m = window.getComputedStyle(i)
	if (
		(m.overflowX === 'hidden' && (g = a.innerWidth),
		m.overflowY === 'hidden' && (b = a.innerHeight),
		e.style && (e.style.position = c),
		t || f3(e))
	)
		(n.left = Math.max(n.left, d)),
			(n.top = Math.max(n.top, v)),
			(n.right = Math.min(n.right, d + p)),
			(n.bottom = Math.min(n.bottom, v + h))
	else {
		var y = Math.max(g, d + p)
		n.right = Math.min(n.right, y)
		var S = Math.max(b, v + h)
		n.bottom = Math.min(n.bottom, S)
	}
	return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
		? n
		: null
}
function v3(e, t, n, r) {
	var o = Qe.clone(e),
		a = { width: t.width, height: t.height }
	return (
		r.adjustX && o.left < n.left && (o.left = n.left),
		r.resizeWidth &&
			o.left >= n.left &&
			o.left + a.width > n.right &&
			(a.width -= o.left + a.width - n.right),
		r.adjustX &&
			o.left + a.width > n.right &&
			(o.left = Math.max(n.right - a.width, n.left)),
		r.adjustY && o.top < n.top && (o.top = n.top),
		r.resizeHeight &&
			o.top >= n.top &&
			o.top + a.height > n.bottom &&
			(a.height -= o.top + a.height - n.bottom),
		r.adjustY &&
			o.top + a.height > n.bottom &&
			(o.top = Math.max(n.bottom - a.height, n.top)),
		Qe.mix(o, a)
	)
}
function sg(e) {
	var t, n, r
	if (!Qe.isWindow(e) && e.nodeType !== 9)
		(t = Qe.offset(e)), (n = Qe.outerWidth(e)), (r = Qe.outerHeight(e))
	else {
		var o = Qe.getWindow(e)
		;(t = { left: Qe.getWindowScrollLeft(o), top: Qe.getWindowScrollTop(o) }),
			(n = Qe.viewportWidth(o)),
			(r = Qe.viewportHeight(o))
	}
	return (t.width = n), (t.height = r), t
}
function m1(e, t) {
	var n = t.charAt(0),
		r = t.charAt(1),
		o = e.width,
		a = e.height,
		i = e.left,
		l = e.top
	return (
		n === 'c' ? (l += a / 2) : n === 'b' && (l += a),
		r === 'c' ? (i += o / 2) : r === 'r' && (i += o),
		{ left: i, top: l }
	)
}
function bu(e, t, n, r, o) {
	var a = m1(t, n[1]),
		i = m1(e, n[0]),
		l = [i.left - a.left, i.top - a.top]
	return {
		left: Math.round(e.left - l[0] + r[0] - o[0]),
		top: Math.round(e.top - l[1] + r[1] - o[1])
	}
}
function h1(e, t, n) {
	return e.left < n.left || e.left + t.width > n.right
}
function g1(e, t, n) {
	return e.top < n.top || e.top + t.height > n.bottom
}
function p3(e, t, n) {
	return e.left > n.right || e.left + t.width < n.left
}
function m3(e, t, n) {
	return e.top > n.bottom || e.top + t.height < n.top
}
function Su(e, t, n) {
	var r = []
	return (
		Qe.each(e, function (o) {
			r.push(
				o.replace(t, function (a) {
					return n[a]
				})
			)
		}),
		r
	)
}
function Cu(e, t) {
	return (e[t] = -e[t]), e
}
function y1(e, t) {
	var n
	return (
		/%$/.test(e)
			? (n = (parseInt(e.substring(0, e.length - 1), 10) / 100) * t)
			: (n = parseInt(e, 10)),
		n || 0
	)
}
function b1(e, t) {
	;(e[0] = y1(e[0], t.width)), (e[1] = y1(e[1], t.height))
}
function mx(e, t, n, r) {
	var o = n.points,
		a = n.offset || [0, 0],
		i = n.targetOffset || [0, 0],
		l = n.overflow,
		s = n.source || e
	;(a = [].concat(a)), (i = [].concat(i)), (l = l || {})
	var c = {},
		f = 0,
		d = !!(l && l.alwaysByViewport),
		v = lg(s, d),
		p = sg(s)
	b1(a, p), b1(i, t)
	var h = bu(p, t, o, a, i),
		g = Qe.merge(p, h)
	if (v && (l.adjustX || l.adjustY) && r) {
		if (l.adjustX && h1(h, p, v)) {
			var b = Su(o, /[lr]/gi, { l: 'r', r: 'l' }),
				m = Cu(a, 0),
				y = Cu(i, 0),
				S = bu(p, t, b, m, y)
			p3(S, p, v) || ((f = 1), (o = b), (a = m), (i = y))
		}
		if (l.adjustY && g1(h, p, v)) {
			var C = Su(o, /[tb]/gi, { t: 'b', b: 't' }),
				x = Cu(a, 1),
				w = Cu(i, 1),
				E = bu(p, t, C, x, w)
			m3(E, p, v) || ((f = 1), (o = C), (a = x), (i = w))
		}
		f && ((h = bu(p, t, o, a, i)), Qe.mix(g, h))
		var P = h1(h, p, v),
			N = g1(h, p, v)
		if (P || N) {
			var O = o
			P && (O = Su(o, /[lr]/gi, { l: 'r', r: 'l' })),
				N && (O = Su(o, /[tb]/gi, { t: 'b', b: 't' })),
				(o = O),
				(a = n.offset || [0, 0]),
				(i = n.targetOffset || [0, 0])
		}
		;(c.adjustX = l.adjustX && P),
			(c.adjustY = l.adjustY && N),
			(c.adjustX || c.adjustY) && (g = v3(h, p, v, c))
	}
	return (
		g.width !== p.width && Qe.css(s, 'width', Qe.width(s) + g.width - p.width),
		g.height !== p.height &&
			Qe.css(s, 'height', Qe.height(s) + g.height - p.height),
		Qe.offset(
			s,
			{ left: g.left, top: g.top },
			{
				useCssRight: n.useCssRight,
				useCssBottom: n.useCssBottom,
				useCssTransform: n.useCssTransform,
				ignoreShake: n.ignoreShake
			}
		),
		{ points: o, offset: a, targetOffset: i, overflow: c }
	)
}
function h3(e, t) {
	var n = lg(e, t),
		r = sg(e)
	return (
		!n ||
		r.left + r.width <= n.left ||
		r.top + r.height <= n.top ||
		r.left >= n.right ||
		r.top >= n.bottom
	)
}
function ug(e, t, n) {
	var r = n.target || t,
		o = sg(r),
		a = !h3(r, n.overflow && n.overflow.alwaysByViewport)
	return mx(e, o, n, a)
}
ug.__getOffsetParent = nm
ug.__getVisibleRectForElement = lg
function g3(e, t, n) {
	var r,
		o,
		a = Qe.getDocument(e),
		i = a.defaultView || a.parentWindow,
		l = Qe.getWindowScrollLeft(i),
		s = Qe.getWindowScrollTop(i),
		c = Qe.viewportWidth(i),
		f = Qe.viewportHeight(i)
	'pageX' in t ? (r = t.pageX) : (r = l + t.clientX),
		'pageY' in t ? (o = t.pageY) : (o = s + t.clientY)
	var d = { left: r, top: o, width: 0, height: 0 },
		v = r >= 0 && r <= l + c && o >= 0 && o <= s + f,
		p = [n.points[0], 'cc']
	return mx(e, d, l1(l1({}, n), {}, { points: p }), v)
}
const y3 = function (e, t) {
	var n = he.useRef(!1),
		r = he.useRef(null)
	function o() {
		window.clearTimeout(r.current)
	}
	function a(i) {
		if ((o(), !n.current || i === !0)) {
			if (e(i) === !1) return
			;(n.current = !0),
				(r.current = window.setTimeout(function () {
					n.current = !1
				}, t))
		} else
			r.current = window.setTimeout(function () {
				;(n.current = !1), a()
			}, t)
	}
	return [
		a,
		function () {
			;(n.current = !1), o()
		}
	]
}
function b3(e, t) {
	return e === t
		? !0
		: !e || !t
		? !1
		: 'pageX' in t && 'pageY' in t
		? e.pageX === t.pageX && e.pageY === t.pageY
		: 'clientX' in t && 'clientY' in t
		? e.clientX === t.clientX && e.clientY === t.clientY
		: !1
}
function S3(e, t) {
	e !== document.activeElement &&
		Ll(t, e) &&
		typeof e.focus == 'function' &&
		e.focus()
}
function S1(e, t) {
	var n = null,
		r = null
	function o(i) {
		var l = B(i, 1),
			s = l[0].target
		if (document.documentElement.contains(s)) {
			var c = s.getBoundingClientRect(),
				f = c.width,
				d = c.height,
				v = Math.floor(f),
				p = Math.floor(d)
			;(n !== v || r !== p) &&
				Promise.resolve().then(function () {
					t({ width: v, height: p })
				}),
				(n = v),
				(r = p)
		}
	}
	var a = new xC(o)
	return (
		e && a.observe(e),
		function () {
			a.disconnect()
		}
	)
}
function C1(e) {
	return typeof e != 'function' ? null : e()
}
function w1(e) {
	return Ze(e) !== 'object' || !e ? null : e
}
var C3 = function (t, n) {
		var r = t.children,
			o = t.disabled,
			a = t.target,
			i = t.align,
			l = t.onAlign,
			s = t.monitorWindowResize,
			c = t.monitorBufferTime,
			f = c === void 0 ? 0 : c,
			d = he.useRef({}),
			v = he.useRef(),
			p = he.Children.only(r),
			h = he.useRef({})
		;(h.current.disabled = o),
			(h.current.target = a),
			(h.current.align = i),
			(h.current.onAlign = l)
		var g = y3(function () {
				var k = h.current,
					I = k.disabled,
					$ = k.target,
					R = k.align,
					M = k.onAlign,
					T = v.current
				if (!I && $ && T) {
					var _,
						D = C1($),
						L = w1($)
					;(d.current.element = D), (d.current.point = L), (d.current.align = R)
					var H = document,
						j = H.activeElement
					return (
						D && Ns(D) ? (_ = ug(T, D, R)) : L && (_ = g3(T, L, R)),
						S3(j, T),
						M && _ && M(T, _),
						!0
					)
				}
				return !1
			}, f),
			b = B(g, 2),
			m = b[0],
			y = b[1],
			S = he.useState(),
			C = B(S, 2),
			x = C[0],
			w = C[1],
			E = he.useState(),
			P = B(E, 2),
			N = P[0],
			O = P[1]
		return (
			Ft(function () {
				w(C1(a)), O(w1(a))
			}),
			he.useEffect(function () {
				;(d.current.element !== x ||
					!b3(d.current.point, N) ||
					!Es(d.current.align, i)) &&
					m()
			}),
			he.useEffect(
				function () {
					var k = S1(v.current, m)
					return k
				},
				[v.current]
			),
			he.useEffect(
				function () {
					var k = S1(x, m)
					return k
				},
				[x]
			),
			he.useEffect(
				function () {
					o ? y() : m()
				},
				[o]
			),
			he.useEffect(
				function () {
					if (s) {
						var k = xl(window, 'resize', m)
						return k.remove
					}
				},
				[s]
			),
			he.useEffect(function () {
				return function () {
					y()
				}
			}, []),
			he.useImperativeHandle(n, function () {
				return {
					forceAlign: function () {
						return m(!0)
					}
				}
			}),
			he.isValidElement(p) && (p = he.cloneElement(p, { ref: Gr(p.ref, v) })),
			p
		)
	},
	hx = he.forwardRef(C3)
hx.displayName = 'Align'
var x1 = ['measure', 'alignPre', 'align', null, 'motion']
const w3 = function (e, t) {
		var n = Xo(null),
			r = B(n, 2),
			o = r[0],
			a = r[1],
			i = u.useRef()
		function l(f) {
			a(f, !0)
		}
		function s() {
			yt.cancel(i.current)
		}
		function c(f) {
			s(),
				(i.current = yt(function () {
					l(function (d) {
						switch (o) {
							case 'align':
								return 'motion'
							case 'motion':
								return 'stable'
						}
						return d
					}),
						f == null || f()
				}))
		}
		return (
			u.useEffect(
				function () {
					l('measure')
				},
				[e]
			),
			u.useEffect(
				function () {
					switch (o) {
						case 'measure':
							t()
							break
					}
					o &&
						(i.current = yt(
							_a(
								Fn().mark(function f() {
									var d, v
									return Fn().wrap(function (h) {
										for (;;)
											switch ((h.prev = h.next)) {
												case 0:
													;(d = x1.indexOf(o)),
														(v = x1[d + 1]),
														v && d !== -1 && l(v)
												case 3:
												case 'end':
													return h.stop()
											}
									}, f)
								})
							)
						))
				},
				[o]
			),
			u.useEffect(function () {
				return function () {
					s()
				}
			}, []),
			[o, c]
		)
	},
	x3 = function (e) {
		var t = u.useState({ width: 0, height: 0 }),
			n = B(t, 2),
			r = n[0],
			o = n[1]
		function a(l) {
			var s = l.offsetWidth,
				c = l.offsetHeight,
				f = l.getBoundingClientRect(),
				d = f.width,
				v = f.height
			Math.abs(s - d) < 1 && Math.abs(c - v) < 1 && ((s = d), (c = v)),
				o({ width: s, height: c })
		}
		var i = u.useMemo(
			function () {
				var l = {}
				if (e) {
					var s = r.width,
						c = r.height
					e.indexOf('height') !== -1 && c
						? (l.height = c)
						: e.indexOf('minHeight') !== -1 && c && (l.minHeight = c),
						e.indexOf('width') !== -1 && s
							? (l.width = s)
							: e.indexOf('minWidth') !== -1 && s && (l.minWidth = s)
				}
				return l
			},
			[e, r]
		)
		return [i, a]
	}
var gx = u.forwardRef(function (e, t) {
	var n = e.visible,
		r = e.prefixCls,
		o = e.className,
		a = e.style,
		i = e.children,
		l = e.zIndex,
		s = e.stretch,
		c = e.destroyPopupOnHide,
		f = e.forceRender,
		d = e.align,
		v = e.point,
		p = e.getRootDomNode,
		h = e.getClassNameFromAlign,
		g = e.onAlign,
		b = e.onMouseEnter,
		m = e.onMouseLeave,
		y = e.onMouseDown,
		S = e.onTouchStart,
		C = e.onClick,
		x = u.useRef(),
		w = u.useRef(),
		E = u.useState(),
		P = B(E, 2),
		N = P[0],
		O = P[1],
		k = x3(s),
		I = B(k, 2),
		$ = I[0],
		R = I[1]
	function M() {
		s && R(p())
	}
	var T = w3(n, M),
		_ = B(T, 2),
		D = _[0],
		L = _[1],
		H = u.useState(0),
		j = B(H, 2),
		z = j[0],
		A = j[1],
		W = u.useRef()
	Ft(
		function () {
			D === 'alignPre' && A(0)
		},
		[D]
	)
	function Y() {
		return v || p
	}
	function K() {
		var q
		;(q = x.current) === null || q === void 0 || q.forceAlign()
	}
	function G(q, de) {
		var ve = h(de)
		N !== ve && O(ve),
			A(function (ee) {
				return ee + 1
			}),
			D === 'align' && (g == null || g(q, de))
	}
	Ft(
		function () {
			D === 'align' &&
				(z < 3
					? K()
					: L(function () {
							var q
							;(q = W.current) === null || q === void 0 || q.call(W)
					  }))
		},
		[z]
	)
	var te = F({}, lx(e))
	;['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (q) {
		var de = te[q]
		te[q] = function (ve, ee) {
			return L(), de == null ? void 0 : de(ve, ee)
		}
	})
	function ne() {
		return new Promise(function (q) {
			W.current = q
		})
	}
	u.useEffect(
		function () {
			!te.motionName && D === 'motion' && L()
		},
		[te.motionName, D]
	),
		u.useImperativeHandle(t, function () {
			return {
				forceAlign: K,
				getElement: function () {
					return w.current
				}
			}
		})
	var ie = F(
			F({}, $),
			{},
			{
				zIndex: l,
				opacity: D === 'motion' || D === 'stable' || !n ? void 0 : 0,
				pointerEvents: !n && D !== 'stable' ? 'none' : void 0
			},
			a
		),
		le = !0
	d != null && d.points && (D === 'align' || D === 'stable') && (le = !1)
	var ae = i
	return (
		u.Children.count(i) > 1 &&
			(ae = u.createElement('div', { className: ''.concat(r, '-content') }, i)),
		u.createElement(
			Xr,
			se({ visible: n, ref: w, leavedClassName: ''.concat(r, '-hidden') }, te, {
				onAppearPrepare: ne,
				onEnterPrepare: ne,
				removeOnLeave: c,
				forceRender: f
			}),
			function (q, de) {
				var ve = q.className,
					ee = q.style,
					fe = Z(r, o, N, ve)
				return u.createElement(
					hx,
					{
						target: Y(),
						key: 'popup',
						ref: x,
						monitorWindowResize: !0,
						disabled: le,
						align: d,
						onAlign: G
					},
					u.createElement(
						'div',
						{
							ref: de,
							className: fe,
							onMouseEnter: b,
							onMouseLeave: m,
							onMouseDownCapture: y,
							onTouchStartCapture: S,
							onClick: C,
							style: F(F({}, ee), ie)
						},
						ae
					)
				)
			}
		)
	)
})
gx.displayName = 'PopupInner'
var yx = u.forwardRef(function (e, t) {
	var n = e.prefixCls,
		r = e.visible,
		o = e.zIndex,
		a = e.children,
		i = e.mobile
	i = i === void 0 ? {} : i
	var l = i.popupClassName,
		s = i.popupStyle,
		c = i.popupMotion,
		f = c === void 0 ? {} : c,
		d = i.popupRender,
		v = e.onClick,
		p = u.useRef()
	u.useImperativeHandle(t, function () {
		return {
			forceAlign: function () {},
			getElement: function () {
				return p.current
			}
		}
	})
	var h = F({ zIndex: o }, s),
		g = a
	return (
		u.Children.count(a) > 1 &&
			(g = u.createElement('div', { className: ''.concat(n, '-content') }, a)),
		d && (g = d(g)),
		u.createElement(
			Xr,
			se({ visible: r, ref: p, removeOnLeave: !0 }, f),
			function (b, m) {
				var y = b.className,
					S = b.style,
					C = Z(n, l, y)
				return u.createElement(
					'div',
					{ ref: m, className: C, onClick: v, style: F(F({}, S), h) },
					g
				)
			}
		)
	)
})
yx.displayName = 'MobilePopupInner'
var E3 = ['visible', 'mobile'],
	bx = u.forwardRef(function (e, t) {
		var n = e.visible,
			r = e.mobile,
			o = ot(e, E3),
			a = u.useState(n),
			i = B(a, 2),
			l = i[0],
			s = i[1],
			c = u.useState(!1),
			f = B(c, 2),
			d = f[0],
			v = f[1],
			p = F(F({}, o), {}, { visible: l })
		u.useEffect(
			function () {
				s(n), n && r && v(Zh())
			},
			[n, r]
		)
		var h = d
			? u.createElement(yx, se({}, p, { mobile: r, ref: t }))
			: u.createElement(gx, se({}, p, { ref: t }))
		return u.createElement('div', null, u.createElement(W4, p), h)
	})
bx.displayName = 'Popup'
var E1 = u.createContext(null)
function Jf() {}
function $3() {
	return ''
}
function P3(e) {
	return e ? e.ownerDocument : window.document
}
var R3 = [
	'onClick',
	'onMouseDown',
	'onTouchStart',
	'onMouseEnter',
	'onMouseLeave',
	'onFocus',
	'onBlur',
	'onContextMenu'
]
function M3(e) {
	var t = (function (n) {
		go(o, n)
		var r = yo(o)
		function o(a) {
			var i
			Tn(this, o),
				(i = r.call(this, a)),
				V(We(i), 'popupRef', u.createRef()),
				V(We(i), 'triggerRef', u.createRef()),
				V(We(i), 'portalContainer', void 0),
				V(We(i), 'attachId', void 0),
				V(We(i), 'clickOutsideHandler', void 0),
				V(We(i), 'touchOutsideHandler', void 0),
				V(We(i), 'contextMenuOutsideHandler1', void 0),
				V(We(i), 'contextMenuOutsideHandler2', void 0),
				V(We(i), 'mouseDownTimeout', void 0),
				V(We(i), 'focusTime', void 0),
				V(We(i), 'preClickTime', void 0),
				V(We(i), 'preTouchTime', void 0),
				V(We(i), 'delayTimer', void 0),
				V(We(i), 'hasPopupMouseDown', void 0),
				V(We(i), 'onMouseEnter', function (s) {
					var c = i.props.mouseEnterDelay
					i.fireEvents('onMouseEnter', s),
						i.delaySetPopupVisible(!0, c, c ? null : s)
				}),
				V(We(i), 'onMouseMove', function (s) {
					i.fireEvents('onMouseMove', s), i.setPoint(s)
				}),
				V(We(i), 'onMouseLeave', function (s) {
					i.fireEvents('onMouseLeave', s),
						i.delaySetPopupVisible(!1, i.props.mouseLeaveDelay)
				}),
				V(We(i), 'onPopupMouseEnter', function () {
					i.clearDelayTimer()
				}),
				V(We(i), 'onPopupMouseLeave', function (s) {
					var c
					;(s.relatedTarget &&
						!s.relatedTarget.setTimeout &&
						Ll(
							(c = i.popupRef.current) === null || c === void 0
								? void 0
								: c.getElement(),
							s.relatedTarget
						)) ||
						i.delaySetPopupVisible(!1, i.props.mouseLeaveDelay)
				}),
				V(We(i), 'onFocus', function (s) {
					i.fireEvents('onFocus', s),
						i.clearDelayTimer(),
						i.isFocusToShow() &&
							((i.focusTime = Date.now()),
							i.delaySetPopupVisible(!0, i.props.focusDelay))
				}),
				V(We(i), 'onMouseDown', function (s) {
					i.fireEvents('onMouseDown', s), (i.preClickTime = Date.now())
				}),
				V(We(i), 'onTouchStart', function (s) {
					i.fireEvents('onTouchStart', s), (i.preTouchTime = Date.now())
				}),
				V(We(i), 'onBlur', function (s) {
					i.fireEvents('onBlur', s),
						i.clearDelayTimer(),
						i.isBlurToHide() && i.delaySetPopupVisible(!1, i.props.blurDelay)
				}),
				V(We(i), 'onContextMenu', function (s) {
					s.preventDefault(),
						i.fireEvents('onContextMenu', s),
						i.setPopupVisible(!0, s)
				}),
				V(We(i), 'onContextMenuClose', function () {
					i.isContextMenuToShow() && i.close()
				}),
				V(We(i), 'onClick', function (s) {
					if ((i.fireEvents('onClick', s), i.focusTime)) {
						var c
						if (
							(i.preClickTime && i.preTouchTime
								? (c = Math.min(i.preClickTime, i.preTouchTime))
								: i.preClickTime
								? (c = i.preClickTime)
								: i.preTouchTime && (c = i.preTouchTime),
							Math.abs(c - i.focusTime) < 20)
						)
							return
						i.focusTime = 0
					}
					;(i.preClickTime = 0),
						(i.preTouchTime = 0),
						i.isClickToShow() &&
							(i.isClickToHide() || i.isBlurToHide()) &&
							s &&
							s.preventDefault &&
							s.preventDefault()
					var f = !i.state.popupVisible
					;((i.isClickToHide() && !f) || (f && i.isClickToShow())) &&
						i.setPopupVisible(!i.state.popupVisible, s)
				}),
				V(We(i), 'onPopupMouseDown', function () {
					if (
						((i.hasPopupMouseDown = !0),
						clearTimeout(i.mouseDownTimeout),
						(i.mouseDownTimeout = window.setTimeout(function () {
							i.hasPopupMouseDown = !1
						}, 0)),
						i.context)
					) {
						var s
						;(s = i.context).onPopupMouseDown.apply(s, arguments)
					}
				}),
				V(We(i), 'onDocumentClick', function (s) {
					if (!(i.props.mask && !i.props.maskClosable)) {
						var c = s.target,
							f = i.getRootDomNode(),
							d = i.getPopupDomNode()
						;(!Ll(f, c) || i.isContextMenuOnly()) &&
							!Ll(d, c) &&
							!i.hasPopupMouseDown &&
							i.close()
					}
				}),
				V(We(i), 'getRootDomNode', function () {
					var s = i.props.getTriggerDOMNode
					if (s) return s(i.triggerRef.current)
					try {
						var c = cs(i.triggerRef.current)
						if (c) return c
					} catch {}
					return ki.findDOMNode(We(i))
				}),
				V(We(i), 'getPopupClassNameFromAlign', function (s) {
					var c = [],
						f = i.props,
						d = f.popupPlacement,
						v = f.builtinPlacements,
						p = f.prefixCls,
						h = f.alignPoint,
						g = f.getPopupClassNameFromAlign
					return (
						d && v && c.push(B4(v, p, s, h)), g && c.push(g(s)), c.join(' ')
					)
				}),
				V(We(i), 'getComponent', function () {
					var s = i.props,
						c = s.prefixCls,
						f = s.destroyPopupOnHide,
						d = s.popupClassName,
						v = s.onPopupAlign,
						p = s.popupMotion,
						h = s.popupAnimation,
						g = s.popupTransitionName,
						b = s.popupStyle,
						m = s.mask,
						y = s.maskAnimation,
						S = s.maskTransitionName,
						C = s.maskMotion,
						x = s.zIndex,
						w = s.popup,
						E = s.stretch,
						P = s.alignPoint,
						N = s.mobile,
						O = s.forceRender,
						k = s.onPopupClick,
						I = i.state,
						$ = I.popupVisible,
						R = I.point,
						M = i.getPopupAlign(),
						T = {}
					return (
						i.isMouseEnterToShow() && (T.onMouseEnter = i.onPopupMouseEnter),
						i.isMouseLeaveToHide() && (T.onMouseLeave = i.onPopupMouseLeave),
						(T.onMouseDown = i.onPopupMouseDown),
						(T.onTouchStart = i.onPopupMouseDown),
						u.createElement(
							bx,
							se(
								{
									prefixCls: c,
									destroyPopupOnHide: f,
									visible: $,
									point: P && R,
									className: d,
									align: M,
									onAlign: v,
									animation: h,
									getClassNameFromAlign: i.getPopupClassNameFromAlign
								},
								T,
								{
									stretch: E,
									getRootDomNode: i.getRootDomNode,
									style: b,
									mask: m,
									zIndex: x,
									transitionName: g,
									maskAnimation: y,
									maskTransitionName: S,
									maskMotion: C,
									ref: i.popupRef,
									motion: p,
									mobile: N,
									forceRender: O,
									onClick: k
								}
							),
							typeof w == 'function' ? w() : w
						)
					)
				}),
				V(We(i), 'attachParent', function (s) {
					yt.cancel(i.attachId)
					var c = i.props,
						f = c.getPopupContainer,
						d = c.getDocument,
						v = i.getRootDomNode(),
						p
					f
						? (v || f.length === 0) && (p = f(v))
						: (p = d(i.getRootDomNode()).body),
						p
							? p.appendChild(s)
							: (i.attachId = yt(function () {
									i.attachParent(s)
							  }))
				}),
				V(We(i), 'getContainer', function () {
					if (!i.portalContainer) {
						var s = i.props.getDocument,
							c = s(i.getRootDomNode()).createElement('div')
						;(c.style.position = 'absolute'),
							(c.style.top = '0'),
							(c.style.left = '0'),
							(c.style.width = '100%'),
							(i.portalContainer = c)
					}
					return i.attachParent(i.portalContainer), i.portalContainer
				}),
				V(We(i), 'setPoint', function (s) {
					var c = i.props.alignPoint
					!c || !s || i.setState({ point: { pageX: s.pageX, pageY: s.pageY } })
				}),
				V(We(i), 'handlePortalUpdate', function () {
					i.state.prevPopupVisible !== i.state.popupVisible &&
						i.props.afterPopupVisibleChange(i.state.popupVisible)
				}),
				V(We(i), 'triggerContextValue', {
					onPopupMouseDown: i.onPopupMouseDown
				})
			var l
			return (
				'popupVisible' in a
					? (l = !!a.popupVisible)
					: (l = !!a.defaultPopupVisible),
				(i.state = { prevPopupVisible: l, popupVisible: l }),
				R3.forEach(function (s) {
					i['fire'.concat(s)] = function (c) {
						i.fireEvents(s, c)
					}
				}),
				i
			)
		}
		return (
			Dn(
				o,
				[
					{
						key: 'componentDidMount',
						value: function () {
							this.componentDidUpdate()
						}
					},
					{
						key: 'componentDidUpdate',
						value: function () {
							var i = this.props,
								l = this.state
							if (l.popupVisible) {
								var s
								!this.clickOutsideHandler &&
									(this.isClickToHide() || this.isContextMenuToShow()) &&
									((s = i.getDocument(this.getRootDomNode())),
									(this.clickOutsideHandler = xl(
										s,
										'mousedown',
										this.onDocumentClick
									))),
									this.touchOutsideHandler ||
										((s = s || i.getDocument(this.getRootDomNode())),
										(this.touchOutsideHandler = xl(
											s,
											'touchstart',
											this.onDocumentClick
										))),
									!this.contextMenuOutsideHandler1 &&
										this.isContextMenuToShow() &&
										((s = s || i.getDocument(this.getRootDomNode())),
										(this.contextMenuOutsideHandler1 = xl(
											s,
											'scroll',
											this.onContextMenuClose
										))),
									!this.contextMenuOutsideHandler2 &&
										this.isContextMenuToShow() &&
										(this.contextMenuOutsideHandler2 = xl(
											window,
											'blur',
											this.onContextMenuClose
										))
								return
							}
							this.clearOutsideHandler()
						}
					},
					{
						key: 'componentWillUnmount',
						value: function () {
							this.clearDelayTimer(),
								this.clearOutsideHandler(),
								clearTimeout(this.mouseDownTimeout),
								yt.cancel(this.attachId)
						}
					},
					{
						key: 'getPopupDomNode',
						value: function () {
							var i
							return (
								((i = this.popupRef.current) === null || i === void 0
									? void 0
									: i.getElement()) || null
							)
						}
					},
					{
						key: 'getPopupAlign',
						value: function () {
							var i = this.props,
								l = i.popupPlacement,
								s = i.popupAlign,
								c = i.builtinPlacements
							return l && c ? j4(c, l, s) : s
						}
					},
					{
						key: 'setPopupVisible',
						value: function (i, l) {
							var s = this.props.alignPoint,
								c = this.state.popupVisible
							this.clearDelayTimer(),
								c !== i &&
									('popupVisible' in this.props ||
										this.setState({ popupVisible: i, prevPopupVisible: c }),
									this.props.onPopupVisibleChange(i)),
								s && l && i && this.setPoint(l)
						}
					},
					{
						key: 'delaySetPopupVisible',
						value: function (i, l, s) {
							var c = this,
								f = l * 1e3
							if ((this.clearDelayTimer(), f)) {
								var d = s ? { pageX: s.pageX, pageY: s.pageY } : null
								this.delayTimer = window.setTimeout(function () {
									c.setPopupVisible(i, d), c.clearDelayTimer()
								}, f)
							} else this.setPopupVisible(i, s)
						}
					},
					{
						key: 'clearDelayTimer',
						value: function () {
							this.delayTimer &&
								(clearTimeout(this.delayTimer), (this.delayTimer = null))
						}
					},
					{
						key: 'clearOutsideHandler',
						value: function () {
							this.clickOutsideHandler &&
								(this.clickOutsideHandler.remove(),
								(this.clickOutsideHandler = null)),
								this.contextMenuOutsideHandler1 &&
									(this.contextMenuOutsideHandler1.remove(),
									(this.contextMenuOutsideHandler1 = null)),
								this.contextMenuOutsideHandler2 &&
									(this.contextMenuOutsideHandler2.remove(),
									(this.contextMenuOutsideHandler2 = null)),
								this.touchOutsideHandler &&
									(this.touchOutsideHandler.remove(),
									(this.touchOutsideHandler = null))
						}
					},
					{
						key: 'createTwoChains',
						value: function (i) {
							var l = this.props.children.props,
								s = this.props
							return l[i] && s[i] ? this['fire'.concat(i)] : l[i] || s[i]
						}
					},
					{
						key: 'isClickToShow',
						value: function () {
							var i = this.props,
								l = i.action,
								s = i.showAction
							return l.indexOf('click') !== -1 || s.indexOf('click') !== -1
						}
					},
					{
						key: 'isContextMenuOnly',
						value: function () {
							var i = this.props.action
							return (
								i === 'contextMenu' ||
								(i.length === 1 && i[0] === 'contextMenu')
							)
						}
					},
					{
						key: 'isContextMenuToShow',
						value: function () {
							var i = this.props,
								l = i.action,
								s = i.showAction
							return (
								l.indexOf('contextMenu') !== -1 ||
								s.indexOf('contextMenu') !== -1
							)
						}
					},
					{
						key: 'isClickToHide',
						value: function () {
							var i = this.props,
								l = i.action,
								s = i.hideAction
							return l.indexOf('click') !== -1 || s.indexOf('click') !== -1
						}
					},
					{
						key: 'isMouseEnterToShow',
						value: function () {
							var i = this.props,
								l = i.action,
								s = i.showAction
							return l.indexOf('hover') !== -1 || s.indexOf('mouseEnter') !== -1
						}
					},
					{
						key: 'isMouseLeaveToHide',
						value: function () {
							var i = this.props,
								l = i.action,
								s = i.hideAction
							return l.indexOf('hover') !== -1 || s.indexOf('mouseLeave') !== -1
						}
					},
					{
						key: 'isFocusToShow',
						value: function () {
							var i = this.props,
								l = i.action,
								s = i.showAction
							return l.indexOf('focus') !== -1 || s.indexOf('focus') !== -1
						}
					},
					{
						key: 'isBlurToHide',
						value: function () {
							var i = this.props,
								l = i.action,
								s = i.hideAction
							return l.indexOf('focus') !== -1 || s.indexOf('blur') !== -1
						}
					},
					{
						key: 'forcePopupAlign',
						value: function () {
							if (this.state.popupVisible) {
								var i
								;(i = this.popupRef.current) === null ||
									i === void 0 ||
									i.forceAlign()
							}
						}
					},
					{
						key: 'fireEvents',
						value: function (i, l) {
							var s = this.props.children.props[i]
							s && s(l)
							var c = this.props[i]
							c && c(l)
						}
					},
					{
						key: 'close',
						value: function () {
							this.setPopupVisible(!1)
						}
					},
					{
						key: 'render',
						value: function () {
							var i = this.state.popupVisible,
								l = this.props,
								s = l.children,
								c = l.forceRender,
								f = l.alignPoint,
								d = l.className,
								v = l.autoDestroy,
								p = u.Children.only(s),
								h = { key: 'trigger' }
							this.isContextMenuToShow()
								? (h.onContextMenu = this.onContextMenu)
								: (h.onContextMenu = this.createTwoChains('onContextMenu')),
								this.isClickToHide() || this.isClickToShow()
									? ((h.onClick = this.onClick),
									  (h.onMouseDown = this.onMouseDown),
									  (h.onTouchStart = this.onTouchStart))
									: ((h.onClick = this.createTwoChains('onClick')),
									  (h.onMouseDown = this.createTwoChains('onMouseDown')),
									  (h.onTouchStart = this.createTwoChains('onTouchStart'))),
								this.isMouseEnterToShow()
									? ((h.onMouseEnter = this.onMouseEnter),
									  f && (h.onMouseMove = this.onMouseMove))
									: (h.onMouseEnter = this.createTwoChains('onMouseEnter')),
								this.isMouseLeaveToHide()
									? (h.onMouseLeave = this.onMouseLeave)
									: (h.onMouseLeave = this.createTwoChains('onMouseLeave')),
								this.isFocusToShow() || this.isBlurToHide()
									? ((h.onFocus = this.onFocus), (h.onBlur = this.onBlur))
									: ((h.onFocus = this.createTwoChains('onFocus')),
									  (h.onBlur = this.createTwoChains('onBlur')))
							var g = Z(p && p.props && p.props.className, d)
							g && (h.className = g)
							var b = F({}, h)
							ji(p) && (b.ref = Gr(this.triggerRef, p.ref))
							var m = u.cloneElement(p, b),
								y
							return (
								(i || this.popupRef.current || c) &&
									(y = u.createElement(
										e,
										{
											key: 'portal',
											getContainer: this.getContainer,
											didUpdate: this.handlePortalUpdate
										},
										this.getComponent()
									)),
								!i && v && (y = null),
								u.createElement(
									E1.Provider,
									{ value: this.triggerContextValue },
									m,
									y
								)
							)
						}
					}
				],
				[
					{
						key: 'getDerivedStateFromProps',
						value: function (i, l) {
							var s = i.popupVisible,
								c = {}
							return (
								s !== void 0 &&
									l.popupVisible !== s &&
									((c.popupVisible = s), (c.prevPopupVisible = l.popupVisible)),
								c
							)
						}
					}
				]
			),
			o
		)
	})(u.Component)
	return (
		V(t, 'contextType', E1),
		V(t, 'defaultProps', {
			prefixCls: 'rc-trigger-popup',
			getPopupClassNameFromAlign: $3,
			getDocument: P3,
			onPopupVisibleChange: Jf,
			afterPopupVisibleChange: Jf,
			onPopupAlign: Jf,
			popupClassName: '',
			mouseEnterDelay: 0,
			mouseLeaveDelay: 0.1,
			focusDelay: 0,
			blurDelay: 0.15,
			popupStyle: {},
			destroyPopupOnHide: !1,
			popupAlign: {},
			defaultPopupVisible: !1,
			mask: !1,
			maskClosable: !0,
			action: [],
			showAction: [],
			hideAction: [],
			autoDestroy: !1
		}),
		t
	)
}
const Sx = M3(H4)
var Xa = { adjustX: 1, adjustY: 1 },
	qa = [0, 0],
	O3 = {
		topLeft: {
			points: ['bl', 'tl'],
			overflow: Xa,
			offset: [0, -4],
			targetOffset: qa
		},
		topCenter: {
			points: ['bc', 'tc'],
			overflow: Xa,
			offset: [0, -4],
			targetOffset: qa
		},
		topRight: {
			points: ['br', 'tr'],
			overflow: Xa,
			offset: [0, -4],
			targetOffset: qa
		},
		bottomLeft: {
			points: ['tl', 'bl'],
			overflow: Xa,
			offset: [0, 4],
			targetOffset: qa
		},
		bottomCenter: {
			points: ['tc', 'bc'],
			overflow: Xa,
			offset: [0, 4],
			targetOffset: qa
		},
		bottomRight: {
			points: ['tr', 'br'],
			overflow: Xa,
			offset: [0, 4],
			targetOffset: qa
		}
	}
function $1(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
	if (Ns(e)) {
		var n = e.nodeName.toLowerCase(),
			r =
				['input', 'select', 'textarea', 'button'].includes(n) ||
				e.isContentEditable ||
				(n === 'a' && !!e.getAttribute('href')),
			o = e.getAttribute('tabindex'),
			a = Number(o),
			i = null
		return (
			o && !Number.isNaN(a) ? (i = a) : r && i === null && (i = 0),
			r && e.disabled && (i = null),
			i !== null && (i >= 0 || (t && i < 0))
		)
	}
	return !1
}
function Cx(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
		n = xe(e.querySelectorAll('*')).filter(function (r) {
			return $1(r, t)
		})
	return $1(e, t) && n.unshift(e), n
}
var N3 = X.ESC,
	I3 = X.TAB
function k3(e) {
	var t = e.visible,
		n = e.setTriggerVisible,
		r = e.triggerRef,
		o = e.onVisibleChange,
		a = e.autoFocus,
		i = u.useRef(!1),
		l = function () {
			if (t && r.current) {
				var d, v, p, h
				;(d = r.current) === null ||
					d === void 0 ||
					(v = d.triggerRef) === null ||
					v === void 0 ||
					(p = v.current) === null ||
					p === void 0 ||
					(h = p.focus) === null ||
					h === void 0 ||
					h.call(p),
					n(!1),
					typeof o == 'function' && o(!1)
			}
		},
		s = function () {
			var d,
				v,
				p,
				h,
				g = Cx(
					(d = r.current) === null ||
						d === void 0 ||
						(v = d.popupRef) === null ||
						v === void 0 ||
						(p = v.current) === null ||
						p === void 0 ||
						(h = p.getElement) === null ||
						h === void 0
						? void 0
						: h.call(p)
				),
				b = g[0]
			return b != null && b.focus ? (b.focus(), (i.current = !0), !0) : !1
		},
		c = function (d) {
			switch (d.keyCode) {
				case N3:
					l()
					break
				case I3: {
					var v = !1
					i.current || (v = s()), v ? d.preventDefault() : l()
					break
				}
			}
		}
	u.useEffect(
		function () {
			return t
				? (window.addEventListener('keydown', c),
				  a && yt(s, 3),
				  function () {
						window.removeEventListener('keydown', c), (i.current = !1)
				  })
				: function () {
						i.current = !1
				  }
		},
		[t]
	)
}
var T3 = [
	'arrow',
	'prefixCls',
	'transitionName',
	'animation',
	'align',
	'placement',
	'placements',
	'getPopupContainer',
	'showAction',
	'hideAction',
	'overlayClassName',
	'overlayStyle',
	'visible',
	'trigger',
	'autoFocus'
]
function D3(e, t) {
	var n = e.arrow,
		r = n === void 0 ? !1 : n,
		o = e.prefixCls,
		a = o === void 0 ? 'rc-dropdown' : o,
		i = e.transitionName,
		l = e.animation,
		s = e.align,
		c = e.placement,
		f = c === void 0 ? 'bottomLeft' : c,
		d = e.placements,
		v = d === void 0 ? O3 : d,
		p = e.getPopupContainer,
		h = e.showAction,
		g = e.hideAction,
		b = e.overlayClassName,
		m = e.overlayStyle,
		y = e.visible,
		S = e.trigger,
		C = S === void 0 ? ['hover'] : S,
		x = e.autoFocus,
		w = ot(e, T3),
		E = u.useState(),
		P = B(E, 2),
		N = P[0],
		O = P[1],
		k = 'visible' in e ? y : N,
		I = u.useRef(null)
	u.useImperativeHandle(t, function () {
		return I.current
	}),
		k3({
			visible: k,
			setTriggerVisible: O,
			triggerRef: I,
			onVisibleChange: e.onVisibleChange,
			autoFocus: x
		})
	var $ = function () {
			var A = e.overlay,
				W
			return typeof A == 'function' ? (W = A()) : (W = A), W
		},
		R = function (A) {
			var W = e.onOverlayClick
			O(!1), W && W(A)
		},
		M = function (A) {
			var W = e.onVisibleChange
			O(A), typeof W == 'function' && W(A)
		},
		T = function () {
			var A = $()
			return u.createElement(
				u.Fragment,
				null,
				r && u.createElement('div', { className: ''.concat(a, '-arrow') }),
				A
			)
		},
		_ = function () {
			var A = e.overlay
			return typeof A == 'function' ? T : T()
		},
		D = function () {
			var A = e.minOverlayWidthMatchTrigger,
				W = e.alignPoint
			return 'minOverlayWidthMatchTrigger' in e ? A : !W
		},
		L = function () {
			var A = e.openClassName
			return A !== void 0 ? A : ''.concat(a, '-open')
		},
		H = function () {
			var A = e.children,
				W = A.props ? A.props : {},
				Y = Z(W.className, L())
			return k && A ? u.cloneElement(A, { className: Y }) : A
		},
		j = g
	return (
		!j && C.indexOf('contextMenu') !== -1 && (j = ['click']),
		u.createElement(
			Sx,
			F(
				F({ builtinPlacements: v }, w),
				{},
				{
					prefixCls: a,
					ref: I,
					popupClassName: Z(b, V({}, ''.concat(a, '-show-arrow'), r)),
					popupStyle: m,
					action: C,
					showAction: h,
					hideAction: j || [],
					popupPlacement: f,
					popupAlign: s,
					popupTransitionName: i,
					popupAnimation: l,
					popupVisible: k,
					stretch: D() ? 'minWidth' : '',
					popup: _(),
					onPopupVisibleChange: M,
					onPopupClick: R,
					getPopupContainer: p
				}
			),
			H()
		)
	)
}
const _3 = u.forwardRef(D3)
var wx = u.createContext(null)
function cg(e, t) {
	return e === void 0 ? null : ''.concat(e, '-').concat(t)
}
function xx(e) {
	var t = u.useContext(wx)
	return cg(t, e)
}
var L3 = ['children', 'locked'],
	kr = u.createContext(null)
function A3(e, t) {
	var n = F({}, e)
	return (
		Object.keys(t).forEach(function (r) {
			var o = t[r]
			o !== void 0 && (n[r] = o)
		}),
		n
	)
}
function hs(e) {
	var t = e.children,
		n = e.locked,
		r = ot(e, L3),
		o = u.useContext(kr),
		a = ka(
			function () {
				return A3(o, r)
			},
			[o, r],
			function (i, l) {
				return !n && (i[0] !== l[0] || !Es(i[1], l[1], !0))
			}
		)
	return u.createElement(kr.Provider, { value: a }, t)
}
var F3 = [],
	Ex = u.createContext(null)
function Nd() {
	return u.useContext(Ex)
}
var $x = u.createContext(F3)
function Ts(e) {
	var t = u.useContext($x)
	return u.useMemo(
		function () {
			return e !== void 0 ? [].concat(xe(t), [e]) : t
		},
		[t, e]
	)
}
var Px = u.createContext(null),
	dg = u.createContext({}),
	rm = X.LEFT,
	om = X.RIGHT,
	am = X.UP,
	ju = X.DOWN,
	Bu = X.ENTER,
	Rx = X.ESC,
	ml = X.HOME,
	hl = X.END,
	P1 = [am, ju, rm, om]
function z3(e, t, n, r) {
	var o,
		a,
		i,
		l,
		s = 'prev',
		c = 'next',
		f = 'children',
		d = 'parent'
	if (e === 'inline' && r === Bu) return { inlineTrigger: !0 }
	var v = ((o = {}), V(o, am, s), V(o, ju, c), o),
		p =
			((a = {}),
			V(a, rm, n ? c : s),
			V(a, om, n ? s : c),
			V(a, ju, f),
			V(a, Bu, f),
			a),
		h =
			((i = {}),
			V(i, am, s),
			V(i, ju, c),
			V(i, Bu, f),
			V(i, Rx, d),
			V(i, rm, n ? f : d),
			V(i, om, n ? d : f),
			i),
		g = {
			inline: v,
			horizontal: p,
			vertical: h,
			inlineSub: v,
			horizontalSub: h,
			verticalSub: h
		},
		b =
			(l = g[''.concat(e).concat(t ? '' : 'Sub')]) === null || l === void 0
				? void 0
				: l[r]
	switch (b) {
		case s:
			return { offset: -1, sibling: !0 }
		case c:
			return { offset: 1, sibling: !0 }
		case d:
			return { offset: -1, sibling: !1 }
		case f:
			return { offset: 1, sibling: !1 }
		default:
			return null
	}
}
function H3(e) {
	for (var t = e; t; ) {
		if (t.getAttribute('data-menu-list')) return t
		t = t.parentElement
	}
	return null
}
function V3(e, t) {
	for (var n = e || document.activeElement; n; ) {
		if (t.has(n)) return n
		n = n.parentElement
	}
	return null
}
function Mx(e, t) {
	var n = Cx(e, !0)
	return n.filter(function (r) {
		return t.has(r)
	})
}
function R1(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1
	if (!e) return null
	var o = Mx(e, t),
		a = o.length,
		i = o.findIndex(function (l) {
			return n === l
		})
	return (
		r < 0 ? (i === -1 ? (i = a - 1) : (i -= 1)) : r > 0 && (i += 1),
		(i = (i + a) % a),
		o[i]
	)
}
function j3(e, t, n, r, o, a, i, l, s, c) {
	var f = u.useRef(),
		d = u.useRef()
	d.current = t
	var v = function () {
		yt.cancel(f.current)
	}
	return (
		u.useEffect(function () {
			return function () {
				v()
			}
		}, []),
		function (p) {
			var h = p.which
			if ([].concat(P1, [Bu, Rx, ml, hl]).includes(h)) {
				var g,
					b,
					m,
					y = function () {
						;(g = new Set()), (b = new Map()), (m = new Map())
						var M = a()
						return (
							M.forEach(function (T) {
								var _ = document.querySelector(
									"[data-menu-id='".concat(cg(r, T), "']")
								)
								_ && (g.add(_), m.set(_, T), b.set(T, _))
							}),
							g
						)
					}
				y()
				var S = b.get(t),
					C = V3(S, g),
					x = m.get(C),
					w = z3(e, i(x, !0).length === 1, n, h)
				if (!w && h !== ml && h !== hl) return
				;(P1.includes(h) || [ml, hl].includes(h)) && p.preventDefault()
				var E = function (M) {
					if (M) {
						var T = M,
							_ = M.querySelector('a')
						_ != null && _.getAttribute('href') && (T = _)
						var D = m.get(M)
						l(D),
							v(),
							(f.current = yt(function () {
								d.current === D && T.focus()
							}))
					}
				}
				if ([ml, hl].includes(h) || w.sibling || !C) {
					var P
					!C || e === 'inline' ? (P = o.current) : (P = H3(C))
					var N,
						O = Mx(P, g)
					h === ml
						? (N = O[0])
						: h === hl
						? (N = O[O.length - 1])
						: (N = R1(P, g, C, w.offset)),
						E(N)
				} else if (w.inlineTrigger) s(x)
				else if (w.offset > 0)
					s(x, !0),
						v(),
						(f.current = yt(function () {
							y()
							var R = C.getAttribute('aria-controls'),
								M = document.getElementById(R),
								T = R1(M, g)
							E(T)
						}, 5))
				else if (w.offset < 0) {
					var k = i(x, !0),
						I = k[k.length - 2],
						$ = b.get(I)
					s(I, !1), E($)
				}
			}
			c == null || c(p)
		}
	)
}
function B3(e) {
	Promise.resolve().then(e)
}
var fg = '__RC_UTIL_PATH_SPLIT__',
	M1 = function (t) {
		return t.join(fg)
	},
	W3 = function (t) {
		return t.split(fg)
	},
	im = 'rc-menu-more'
function U3() {
	var e = u.useState({}),
		t = B(e, 2),
		n = t[1],
		r = u.useRef(new Map()),
		o = u.useRef(new Map()),
		a = u.useState([]),
		i = B(a, 2),
		l = i[0],
		s = i[1],
		c = u.useRef(0),
		f = u.useRef(!1),
		d = function () {
			f.current || n({})
		},
		v = u.useCallback(function (S, C) {
			var x = M1(C)
			o.current.set(x, S), r.current.set(S, x), (c.current += 1)
			var w = c.current
			B3(function () {
				w === c.current && d()
			})
		}, []),
		p = u.useCallback(function (S, C) {
			var x = M1(C)
			o.current.delete(x), r.current.delete(S)
		}, []),
		h = u.useCallback(function (S) {
			s(S)
		}, []),
		g = u.useCallback(
			function (S, C) {
				var x = r.current.get(S) || '',
					w = W3(x)
				return C && l.includes(w[0]) && w.unshift(im), w
			},
			[l]
		),
		b = u.useCallback(
			function (S, C) {
				return S.some(function (x) {
					var w = g(x, !0)
					return w.includes(C)
				})
			},
			[g]
		),
		m = function () {
			var C = xe(r.current.keys())
			return l.length && C.push(im), C
		},
		y = u.useCallback(function (S) {
			var C = ''.concat(r.current.get(S)).concat(fg),
				x = new Set()
			return (
				xe(o.current.keys()).forEach(function (w) {
					w.startsWith(C) && x.add(o.current.get(w))
				}),
				x
			)
		}, [])
	return (
		u.useEffect(function () {
			return function () {
				f.current = !0
			}
		}, []),
		{
			registerPath: v,
			unregisterPath: p,
			refreshOverflowKeys: h,
			isSubPathKey: b,
			getKeyPath: g,
			getKeys: m,
			getSubPathKeys: y
		}
	)
}
function ti(e) {
	var t = u.useRef(e)
	t.current = e
	var n = u.useCallback(function () {
		for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
			a[i] = arguments[i]
		return (r = t.current) === null || r === void 0
			? void 0
			: r.call.apply(r, [t].concat(a))
	}, [])
	return e ? n : void 0
}
var Y3 = Math.random().toFixed(5).toString().slice(2),
	O1 = 0
function K3(e) {
	var t = Kt(e, { value: e }),
		n = B(t, 2),
		r = n[0],
		o = n[1]
	return (
		u.useEffect(function () {
			O1 += 1
			var a = ''.concat(Y3, '-').concat(O1)
			o('rc-menu-uuid-'.concat(a))
		}, []),
		r
	)
}
function Ox(e, t, n, r) {
	var o = u.useContext(kr),
		a = o.activeKey,
		i = o.onActive,
		l = o.onInactive,
		s = { active: a === e }
	return (
		t ||
			((s.onMouseEnter = function (c) {
				n == null || n({ key: e, domEvent: c }), i(e)
			}),
			(s.onMouseLeave = function (c) {
				r == null || r({ key: e, domEvent: c }), l(e)
			})),
		s
	)
}
var G3 = ['item']
function Lc(e) {
	var t = e.item,
		n = ot(e, G3)
	return (
		Object.defineProperty(n, 'item', {
			get: function () {
				return (
					En(
						!1,
						'`info.item` is deprecated since we will move to function component that not provides React Node instance in future.'
					),
					t
				)
			}
		}),
		n
	)
}
function Nx(e) {
	var t = e.icon,
		n = e.props,
		r = e.children,
		o
	return (
		typeof t == 'function' ? (o = u.createElement(t, F({}, n))) : (o = t),
		o || r || null
	)
}
function Ix(e) {
	var t = u.useContext(kr),
		n = t.mode,
		r = t.rtl,
		o = t.inlineIndent
	if (n !== 'inline') return null
	var a = e
	return r ? { paddingRight: a * o } : { paddingLeft: a * o }
}
var X3 = ['title', 'attribute', 'elementRef'],
	q3 = [
		'style',
		'className',
		'eventKey',
		'warnKey',
		'disabled',
		'itemIcon',
		'children',
		'role',
		'onMouseEnter',
		'onMouseLeave',
		'onClick',
		'onKeyDown',
		'onFocus'
	],
	Q3 = ['active'],
	Z3 = (function (e) {
		go(n, e)
		var t = yo(n)
		function n() {
			return Tn(this, n), t.apply(this, arguments)
		}
		return (
			Dn(n, [
				{
					key: 'render',
					value: function () {
						var o = this.props,
							a = o.title,
							i = o.attribute,
							l = o.elementRef,
							s = ot(o, X3),
							c = Tr(s, ['eventKey'])
						return (
							En(
								!i,
								'`attribute` of Menu.Item is deprecated. Please pass attribute directly.'
							),
							u.createElement(
								Wr.Item,
								se({}, i, { title: typeof a == 'string' ? a : void 0 }, c, {
									ref: l
								})
							)
						)
					}
				}
			]),
			n
		)
	})(u.Component),
	J3 = function (t) {
		var n,
			r = t.style,
			o = t.className,
			a = t.eventKey
		t.warnKey
		var i = t.disabled,
			l = t.itemIcon,
			s = t.children,
			c = t.role,
			f = t.onMouseEnter,
			d = t.onMouseLeave,
			v = t.onClick,
			p = t.onKeyDown,
			h = t.onFocus,
			g = ot(t, q3),
			b = xx(a),
			m = u.useContext(kr),
			y = m.prefixCls,
			S = m.onItemClick,
			C = m.disabled,
			x = m.overflowDisabled,
			w = m.itemIcon,
			E = m.selectedKeys,
			P = m.onActive,
			N = u.useContext(dg),
			O = N._internalRenderMenuItem,
			k = ''.concat(y, '-item'),
			I = u.useRef(),
			$ = u.useRef(),
			R = C || i,
			M = Ts(a),
			T = function (ne) {
				return {
					key: a,
					keyPath: xe(M).reverse(),
					item: I.current,
					domEvent: ne
				}
			},
			_ = l || w,
			D = Ox(a, R, f, d),
			L = D.active,
			H = ot(D, Q3),
			j = E.includes(a),
			z = Ix(M.length),
			A = function (ne) {
				if (!R) {
					var ie = T(ne)
					v == null || v(Lc(ie)), S(ie)
				}
			},
			W = function (ne) {
				if ((p == null || p(ne), ne.which === X.ENTER)) {
					var ie = T(ne)
					v == null || v(Lc(ie)), S(ie)
				}
			},
			Y = function (ne) {
				P(a), h == null || h(ne)
			},
			K = {}
		t.role === 'option' && (K['aria-selected'] = j)
		var G = u.createElement(
			Z3,
			se(
				{
					ref: I,
					elementRef: $,
					role: c === null ? 'none' : c || 'menuitem',
					tabIndex: i ? null : -1,
					'data-menu-id': x && b ? null : b
				},
				g,
				H,
				K,
				{
					component: 'li',
					'aria-disabled': i,
					style: F(F({}, z), r),
					className: Z(
						k,
						((n = {}),
						V(n, ''.concat(k, '-active'), L),
						V(n, ''.concat(k, '-selected'), j),
						V(n, ''.concat(k, '-disabled'), R),
						n),
						o
					),
					onClick: A,
					onKeyDown: W,
					onFocus: Y
				}
			),
			s,
			u.createElement(Nx, {
				props: F(F({}, t), {}, { isSelected: j }),
				icon: _
			})
		)
		return O && (G = O(G, t, { selected: j })), G
	}
function Id(e) {
	var t = e.eventKey,
		n = Nd(),
		r = Ts(t)
	return (
		u.useEffect(
			function () {
				if (n)
					return (
						n.registerPath(t, r),
						function () {
							n.unregisterPath(t, r)
						}
					)
			},
			[r]
		),
		n ? null : u.createElement(J3, e)
	)
}
var eD = ['className', 'children'],
	tD = function (t, n) {
		var r = t.className,
			o = t.children,
			a = ot(t, eD),
			i = u.useContext(kr),
			l = i.prefixCls,
			s = i.mode,
			c = i.rtl
		return u.createElement(
			'ul',
			se(
				{
					className: Z(
						l,
						c && ''.concat(l, '-rtl'),
						''.concat(l, '-sub'),
						''.concat(l, '-').concat(s === 'inline' ? 'inline' : 'vertical'),
						r
					),
					role: 'menu'
				},
				a,
				{ 'data-menu-list': !0, ref: n }
			),
			o
		)
	},
	vg = u.forwardRef(tD)
vg.displayName = 'SubMenuList'
var nD = ['label', 'children', 'key', 'type']
function pg(e, t) {
	return Ur(e).map(function (n, r) {
		if (u.isValidElement(n)) {
			var o,
				a,
				i = n.key,
				l =
					(o = (a = n.props) === null || a === void 0 ? void 0 : a.eventKey) !==
						null && o !== void 0
						? o
						: i,
				s = l == null
			s && (l = 'tmp_key-'.concat([].concat(xe(t), [r]).join('-')))
			var c = { key: l, eventKey: l }
			return u.cloneElement(n, c)
		}
		return n
	})
}
function lm(e) {
	return (e || [])
		.map(function (t, n) {
			if (t && Ze(t) === 'object') {
				var r = t,
					o = r.label,
					a = r.children,
					i = r.key,
					l = r.type,
					s = ot(r, nD),
					c = i ?? 'tmp-'.concat(n)
				return a || l === 'group'
					? l === 'group'
						? u.createElement(Tx, se({ key: c }, s, { title: o }), lm(a))
						: u.createElement(mg, se({ key: c }, s, { title: o }), lm(a))
					: l === 'divider'
					? u.createElement(Dx, se({ key: c }, s))
					: u.createElement(Id, se({ key: c }, s), o)
			}
			return null
		})
		.filter(function (t) {
			return t
		})
}
function rD(e, t, n) {
	var r = e
	return t && (r = lm(t)), pg(r, n)
}
var Ao = { adjustX: 1, adjustY: 1 },
	oD = {
		topLeft: { points: ['bl', 'tl'], overflow: Ao, offset: [0, -7] },
		bottomLeft: { points: ['tl', 'bl'], overflow: Ao, offset: [0, 7] },
		leftTop: { points: ['tr', 'tl'], overflow: Ao, offset: [-4, 0] },
		rightTop: { points: ['tl', 'tr'], overflow: Ao, offset: [4, 0] }
	},
	aD = {
		topLeft: { points: ['bl', 'tl'], overflow: Ao, offset: [0, -7] },
		bottomLeft: { points: ['tl', 'bl'], overflow: Ao, offset: [0, 7] },
		rightTop: { points: ['tr', 'tl'], overflow: Ao, offset: [-4, 0] },
		leftTop: { points: ['tl', 'tr'], overflow: Ao, offset: [4, 0] }
	}
function kx(e, t, n) {
	if (t) return t
	if (n) return n[e] || n.other
}
var iD = {
	horizontal: 'bottomLeft',
	vertical: 'rightTop',
	'vertical-left': 'rightTop',
	'vertical-right': 'leftTop'
}
function lD(e) {
	var t = e.prefixCls,
		n = e.visible,
		r = e.children,
		o = e.popup,
		a = e.popupClassName,
		i = e.popupOffset,
		l = e.disabled,
		s = e.mode,
		c = e.onVisibleChange,
		f = u.useContext(kr),
		d = f.getPopupContainer,
		v = f.rtl,
		p = f.subMenuOpenDelay,
		h = f.subMenuCloseDelay,
		g = f.builtinPlacements,
		b = f.triggerSubMenuAction,
		m = f.forceSubMenuRender,
		y = f.rootClassName,
		S = f.motion,
		C = f.defaultMotions,
		x = u.useState(!1),
		w = B(x, 2),
		E = w[0],
		P = w[1],
		N = F(v ? F({}, aD) : F({}, oD), g),
		O = iD[s],
		k = kx(s, S, C),
		I = u.useRef(k)
	s !== 'inline' && (I.current = k)
	var $ = F(
			F({}, I.current),
			{},
			{
				leavedClassName: ''.concat(t, '-hidden'),
				removeOnLeave: !1,
				motionAppear: !0
			}
		),
		R = u.useRef()
	return (
		u.useEffect(
			function () {
				return (
					(R.current = yt(function () {
						P(n)
					})),
					function () {
						yt.cancel(R.current)
					}
				)
			},
			[n]
		),
		u.createElement(
			Sx,
			{
				prefixCls: t,
				popupClassName: Z(
					''.concat(t, '-popup'),
					V({}, ''.concat(t, '-rtl'), v),
					a,
					y
				),
				stretch: s === 'horizontal' ? 'minWidth' : null,
				getPopupContainer: d,
				builtinPlacements: N,
				popupPlacement: O,
				popupVisible: E,
				popup: o,
				popupAlign: i && { offset: i },
				action: l ? [] : [b],
				mouseEnterDelay: p,
				mouseLeaveDelay: h,
				onPopupVisibleChange: c,
				forceRender: m,
				popupMotion: $
			},
			r
		)
	)
}
function sD(e) {
	var t = e.id,
		n = e.open,
		r = e.keyPath,
		o = e.children,
		a = 'inline',
		i = u.useContext(kr),
		l = i.prefixCls,
		s = i.forceSubMenuRender,
		c = i.motion,
		f = i.defaultMotions,
		d = i.mode,
		v = u.useRef(!1)
	v.current = d === a
	var p = u.useState(!v.current),
		h = B(p, 2),
		g = h[0],
		b = h[1],
		m = v.current ? n : !1
	u.useEffect(
		function () {
			v.current && b(!1)
		},
		[d]
	)
	var y = F({}, kx(a, c, f))
	r.length > 1 && (y.motionAppear = !1)
	var S = y.onVisibleChanged
	return (
		(y.onVisibleChanged = function (C) {
			return !v.current && !C && b(!0), S == null ? void 0 : S(C)
		}),
		g
			? null
			: u.createElement(
					hs,
					{ mode: a, locked: !v.current },
					u.createElement(
						Xr,
						se({ visible: m }, y, {
							forceRender: s,
							removeOnLeave: !1,
							leavedClassName: ''.concat(l, '-hidden')
						}),
						function (C) {
							var x = C.className,
								w = C.style
							return u.createElement(vg, { id: t, className: x, style: w }, o)
						}
					)
			  )
	)
}
var uD = [
		'style',
		'className',
		'title',
		'eventKey',
		'warnKey',
		'disabled',
		'internalPopupClose',
		'children',
		'itemIcon',
		'expandIcon',
		'popupClassName',
		'popupOffset',
		'onClick',
		'onMouseEnter',
		'onMouseLeave',
		'onTitleClick',
		'onTitleMouseEnter',
		'onTitleMouseLeave'
	],
	cD = ['active'],
	dD = function (t) {
		var n,
			r = t.style,
			o = t.className,
			a = t.title,
			i = t.eventKey
		t.warnKey
		var l = t.disabled,
			s = t.internalPopupClose,
			c = t.children,
			f = t.itemIcon,
			d = t.expandIcon,
			v = t.popupClassName,
			p = t.popupOffset,
			h = t.onClick,
			g = t.onMouseEnter,
			b = t.onMouseLeave,
			m = t.onTitleClick,
			y = t.onTitleMouseEnter,
			S = t.onTitleMouseLeave,
			C = ot(t, uD),
			x = xx(i),
			w = u.useContext(kr),
			E = w.prefixCls,
			P = w.mode,
			N = w.openKeys,
			O = w.disabled,
			k = w.overflowDisabled,
			I = w.activeKey,
			$ = w.selectedKeys,
			R = w.itemIcon,
			M = w.expandIcon,
			T = w.onItemClick,
			_ = w.onOpenChange,
			D = w.onActive,
			L = u.useContext(dg),
			H = L._internalRenderSubMenuItem,
			j = u.useContext(Px),
			z = j.isSubPathKey,
			A = Ts(),
			W = ''.concat(E, '-submenu'),
			Y = O || l,
			K = u.useRef(),
			G = u.useRef(),
			te = f || R,
			ne = d || M,
			ie = N.includes(i),
			le = !k && ie,
			ae = z($, i),
			q = Ox(i, Y, y, S),
			de = q.active,
			ve = ot(q, cD),
			ee = u.useState(!1),
			fe = B(ee, 2),
			be = fe[0],
			Me = fe[1],
			Se = function (Oe) {
				Y || Me(Oe)
			},
			Le = function (Oe) {
				Se(!0), g == null || g({ key: i, domEvent: Oe })
			},
			lt = function (Oe) {
				Se(!1), b == null || b({ key: i, domEvent: Oe })
			},
			et = u.useMemo(
				function () {
					return de || (P !== 'inline' ? be || z([I], i) : !1)
				},
				[P, de, I, be, i, z]
			),
			Xe = Ix(A.length),
			ze = function (Oe) {
				Y ||
					(m == null || m({ key: i, domEvent: Oe }),
					P === 'inline' && _(i, !ie))
			},
			we = ti(function ($e) {
				h == null || h(Lc($e)), T($e)
			}),
			ct = function (Oe) {
				P !== 'inline' && _(i, Oe)
			},
			He = function () {
				D(i)
			},
			Pe = x && ''.concat(x, '-popup'),
			pe = u.createElement(
				'div',
				se(
					{
						role: 'menuitem',
						style: Xe,
						className: ''.concat(W, '-title'),
						tabIndex: Y ? null : -1,
						ref: K,
						title: typeof a == 'string' ? a : null,
						'data-menu-id': k && x ? null : x,
						'aria-expanded': le,
						'aria-haspopup': !0,
						'aria-controls': Pe,
						'aria-disabled': Y,
						onClick: ze,
						onFocus: He
					},
					ve
				),
				a,
				u.createElement(
					Nx,
					{
						icon: P !== 'horizontal' ? ne : null,
						props: F(F({}, t), {}, { isOpen: le, isSubMenu: !0 })
					},
					u.createElement('i', { className: ''.concat(W, '-arrow') })
				)
			),
			_e = u.useRef(P)
		if (
			(P !== 'inline' && A.length > 1
				? (_e.current = 'vertical')
				: (_e.current = P),
			!k)
		) {
			var tt = _e.current
			pe = u.createElement(
				lD,
				{
					mode: tt,
					prefixCls: W,
					visible: !s && le && P !== 'inline',
					popupClassName: v,
					popupOffset: p,
					popup: u.createElement(
						hs,
						{ mode: tt === 'horizontal' ? 'vertical' : tt },
						u.createElement(vg, { id: Pe, ref: G }, c)
					),
					disabled: Y,
					onVisibleChange: ct
				},
				pe
			)
		}
		var Ce = u.createElement(
			Wr.Item,
			se({ role: 'none' }, C, {
				component: 'li',
				style: r,
				className: Z(
					W,
					''.concat(W, '-').concat(P),
					o,
					((n = {}),
					V(n, ''.concat(W, '-open'), le),
					V(n, ''.concat(W, '-active'), et),
					V(n, ''.concat(W, '-selected'), ae),
					V(n, ''.concat(W, '-disabled'), Y),
					n)
				),
				onMouseEnter: Le,
				onMouseLeave: lt
			}),
			pe,
			!k && u.createElement(sD, { id: Pe, open: le, keyPath: A }, c)
		)
		return (
			H && (Ce = H(Ce, t, { selected: ae, active: et, open: le, disabled: Y })),
			u.createElement(
				hs,
				{
					onItemClick: we,
					mode: P === 'horizontal' ? 'vertical' : P,
					itemIcon: te,
					expandIcon: ne
				},
				Ce
			)
		)
	}
function mg(e) {
	var t = e.eventKey,
		n = e.children,
		r = Ts(t),
		o = pg(n, r),
		a = Nd()
	u.useEffect(
		function () {
			if (a)
				return (
					a.registerPath(t, r),
					function () {
						a.unregisterPath(t, r)
					}
				)
		},
		[r]
	)
	var i
	return (
		a ? (i = o) : (i = u.createElement(dD, e, o)),
		u.createElement($x.Provider, { value: r }, i)
	)
}
var fD = [
		'prefixCls',
		'rootClassName',
		'style',
		'className',
		'tabIndex',
		'items',
		'children',
		'direction',
		'id',
		'mode',
		'inlineCollapsed',
		'disabled',
		'disabledOverflow',
		'subMenuOpenDelay',
		'subMenuCloseDelay',
		'forceSubMenuRender',
		'defaultOpenKeys',
		'openKeys',
		'activeKey',
		'defaultActiveFirst',
		'selectable',
		'multiple',
		'defaultSelectedKeys',
		'selectedKeys',
		'onSelect',
		'onDeselect',
		'inlineIndent',
		'motion',
		'defaultMotions',
		'triggerSubMenuAction',
		'builtinPlacements',
		'itemIcon',
		'expandIcon',
		'overflowedIndicator',
		'overflowedIndicatorPopupClassName',
		'getPopupContainer',
		'onClick',
		'onOpenChange',
		'onKeyDown',
		'openAnimation',
		'openTransitionName',
		'_internalRenderMenuItem',
		'_internalRenderSubMenuItem'
	],
	Qa = [],
	vD = u.forwardRef(function (e, t) {
		var n,
			r,
			o = e,
			a = o.prefixCls,
			i = a === void 0 ? 'rc-menu' : a,
			l = o.rootClassName,
			s = o.style,
			c = o.className,
			f = o.tabIndex,
			d = f === void 0 ? 0 : f,
			v = o.items,
			p = o.children,
			h = o.direction,
			g = o.id,
			b = o.mode,
			m = b === void 0 ? 'vertical' : b,
			y = o.inlineCollapsed,
			S = o.disabled,
			C = o.disabledOverflow,
			x = o.subMenuOpenDelay,
			w = x === void 0 ? 0.1 : x,
			E = o.subMenuCloseDelay,
			P = E === void 0 ? 0.1 : E,
			N = o.forceSubMenuRender,
			O = o.defaultOpenKeys,
			k = o.openKeys,
			I = o.activeKey,
			$ = o.defaultActiveFirst,
			R = o.selectable,
			M = R === void 0 ? !0 : R,
			T = o.multiple,
			_ = T === void 0 ? !1 : T,
			D = o.defaultSelectedKeys,
			L = o.selectedKeys,
			H = o.onSelect,
			j = o.onDeselect,
			z = o.inlineIndent,
			A = z === void 0 ? 24 : z,
			W = o.motion,
			Y = o.defaultMotions,
			K = o.triggerSubMenuAction,
			G = K === void 0 ? 'hover' : K,
			te = o.builtinPlacements,
			ne = o.itemIcon,
			ie = o.expandIcon,
			le = o.overflowedIndicator,
			ae = le === void 0 ? '...' : le,
			q = o.overflowedIndicatorPopupClassName,
			de = o.getPopupContainer,
			ve = o.onClick,
			ee = o.onOpenChange,
			fe = o.onKeyDown
		o.openAnimation, o.openTransitionName
		var be = o._internalRenderMenuItem,
			Me = o._internalRenderSubMenuItem,
			Se = ot(o, fD),
			Le = u.useMemo(
				function () {
					return rD(p, v, Qa)
				},
				[p, v]
			),
			lt = u.useState(!1),
			et = B(lt, 2),
			Xe = et[0],
			ze = et[1],
			we = u.useRef(),
			ct = K3(g),
			He = h === 'rtl',
			Pe = Kt(O, {
				value: k,
				postState: function (Be) {
					return Be || Qa
				}
			}),
			pe = B(Pe, 2),
			_e = pe[0],
			tt = pe[1],
			Ce = function (Be) {
				var ut =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
				function Pt() {
					tt(Be), ee == null || ee(Be)
				}
				ut ? Ea.flushSync(Pt) : Pt()
			},
			$e = u.useState(_e),
			Oe = B($e, 2),
			qe = Oe[0],
			Ue = Oe[1],
			at = u.useRef(!1),
			Ae = u.useMemo(
				function () {
					return (m === 'inline' || m === 'vertical') && y
						? ['vertical', y]
						: [m, !1]
				},
				[m, y]
			),
			bt = B(Ae, 2),
			Fe = bt[0],
			ye = bt[1],
			it = Fe === 'inline',
			Ye = u.useState(Fe),
			Ne = B(Ye, 2),
			nt = Ne[0],
			J = Ne[1],
			oe = u.useState(ye),
			re = B(oe, 2),
			Q = re[0],
			me = re[1]
		u.useEffect(
			function () {
				J(Fe), me(ye), at.current && (it ? tt(qe) : Ce(Qa))
			},
			[Fe, ye]
		)
		var Ve = u.useState(0),
			$t = B(Ve, 2),
			St = $t[0],
			jt = $t[1],
			Te = St >= Le.length - 1 || nt !== 'horizontal' || C
		u.useEffect(
			function () {
				it && Ue(_e)
			},
			[_e]
		),
			u.useEffect(function () {
				return (
					(at.current = !0),
					function () {
						at.current = !1
					}
				)
			}, [])
		var dt = U3(),
			Bt = dt.registerPath,
			Jt = dt.unregisterPath,
			en = dt.refreshOverflowKeys,
			Ct = dt.isSubPathKey,
			Ht = dt.getKeyPath,
			rt = dt.getKeys,
			je = dt.getSubPathKeys,
			wt = u.useMemo(
				function () {
					return { registerPath: Bt, unregisterPath: Jt }
				},
				[Bt, Jt]
			),
			Mt = u.useMemo(
				function () {
					return { isSubPathKey: Ct }
				},
				[Ct]
			)
		u.useEffect(
			function () {
				en(
					Te
						? Qa
						: Le.slice(St + 1).map(function (Je) {
								return Je.key
						  })
				)
			},
			[St, Te]
		)
		var Lt = Kt(
				I || ($ && ((n = Le[0]) === null || n === void 0 ? void 0 : n.key)),
				{ value: I }
			),
			mt = B(Lt, 2),
			xt = mt[0],
			ht = mt[1],
			Re = ti(function (Je) {
				ht(Je)
			}),
			Wt = ti(function () {
				ht(void 0)
			})
		u.useImperativeHandle(t, function () {
			return {
				list: we.current,
				focus: function (Be) {
					var ut,
						Pt =
							xt ??
							((ut = Le.find(function (Co) {
								return !Co.props.disabled
							})) === null || ut === void 0
								? void 0
								: ut.key)
					if (Pt) {
						var Tt, nn, sr
						;(Tt = we.current) === null ||
							Tt === void 0 ||
							(nn = Tt.querySelector(
								"li[data-menu-id='".concat(cg(ct, Pt), "']")
							)) === null ||
							nn === void 0 ||
							(sr = nn.focus) === null ||
							sr === void 0 ||
							sr.call(nn, Be)
					}
				}
			}
		})
		var fn = Kt(D || [], {
				value: L,
				postState: function (Be) {
					return Array.isArray(Be) ? Be : Be == null ? Qa : [Be]
				}
			}),
			lr = B(fn, 2),
			Xn = lr[0],
			_r = lr[1],
			Lr = function (Be) {
				if (M) {
					var ut = Be.key,
						Pt = Xn.includes(ut),
						Tt
					_
						? Pt
							? (Tt = Xn.filter(function (sr) {
									return sr !== ut
							  }))
							: (Tt = [].concat(xe(Xn), [ut]))
						: (Tt = [ut]),
						_r(Tt)
					var nn = F(F({}, Be), {}, { selectedKeys: Tt })
					Pt ? j == null || j(nn) : H == null || H(nn)
				}
				!_ && _e.length && nt !== 'inline' && Ce(Qa)
			},
			Vn = ti(function (Je) {
				ve == null || ve(Lc(Je)), Lr(Je)
			}),
			br = ti(function (Je, Be) {
				var ut = _e.filter(function (Tt) {
					return Tt !== Je
				})
				if (Be) ut.push(Je)
				else if (nt !== 'inline') {
					var Pt = je(Je)
					ut = ut.filter(function (Tt) {
						return !Pt.has(Tt)
					})
				}
				Es(_e, ut, !0) || Ce(ut, !0)
			}),
			jn = ti(de),
			Ke = function (Be, ut) {
				var Pt = ut ?? !_e.includes(Be)
				br(Be, Pt)
			},
			De = j3(nt, xt, He, ct, we, rt, Ht, ht, Ke, fe)
		u.useEffect(function () {
			ze(!0)
		}, [])
		var qt = u.useMemo(
				function () {
					return { _internalRenderMenuItem: be, _internalRenderSubMenuItem: Me }
				},
				[be, Me]
			),
			tn =
				nt !== 'horizontal' || C
					? Le
					: Le.map(function (Je, Be) {
							return u.createElement(
								hs,
								{ key: Je.key, overflowDisabled: Be > St },
								Je
							)
					  }),
			Rt = u.createElement(
				Wr,
				se(
					{
						id: g,
						ref: we,
						prefixCls: ''.concat(i, '-overflow'),
						component: 'ul',
						itemComponent: Id,
						className: Z(
							i,
							''.concat(i, '-root'),
							''.concat(i, '-').concat(nt),
							c,
							((r = {}),
							V(r, ''.concat(i, '-inline-collapsed'), Q),
							V(r, ''.concat(i, '-rtl'), He),
							r),
							l
						),
						dir: h,
						style: s,
						role: 'menu',
						tabIndex: d,
						data: tn,
						renderRawItem: function (Be) {
							return Be
						},
						renderRawRest: function (Be) {
							var ut = Be.length,
								Pt = ut ? Le.slice(-ut) : null
							return u.createElement(
								mg,
								{
									eventKey: im,
									title: ae,
									disabled: Te,
									internalPopupClose: ut === 0,
									popupClassName: q
								},
								Pt
							)
						},
						maxCount: nt !== 'horizontal' || C ? Wr.INVALIDATE : Wr.RESPONSIVE,
						ssr: 'full',
						'data-menu-list': !0,
						onVisibleChange: function (Be) {
							jt(Be)
						},
						onKeyDown: De
					},
					Se
				)
			)
		return u.createElement(
			dg.Provider,
			{ value: qt },
			u.createElement(
				wx.Provider,
				{ value: ct },
				u.createElement(
					hs,
					{
						prefixCls: i,
						rootClassName: l,
						mode: nt,
						openKeys: _e,
						rtl: He,
						disabled: S,
						motion: Xe ? W : null,
						defaultMotions: Xe ? Y : null,
						activeKey: xt,
						onActive: Re,
						onInactive: Wt,
						selectedKeys: Xn,
						inlineIndent: A,
						subMenuOpenDelay: w,
						subMenuCloseDelay: P,
						forceSubMenuRender: N,
						builtinPlacements: te,
						triggerSubMenuAction: G,
						getPopupContainer: jn,
						itemIcon: ne,
						expandIcon: ie,
						onItemClick: Vn,
						onOpenChange: br
					},
					u.createElement(Px.Provider, { value: Mt }, Rt),
					u.createElement(
						'div',
						{ style: { display: 'none' }, 'aria-hidden': !0 },
						u.createElement(Ex.Provider, { value: wt }, Le)
					)
				)
			)
		)
	}),
	pD = ['className', 'title', 'eventKey', 'children'],
	mD = ['children'],
	hD = function (t) {
		var n = t.className,
			r = t.title
		t.eventKey
		var o = t.children,
			a = ot(t, pD),
			i = u.useContext(kr),
			l = i.prefixCls,
			s = ''.concat(l, '-item-group')
		return u.createElement(
			'li',
			se({ role: 'presentation' }, a, {
				onClick: function (f) {
					return f.stopPropagation()
				},
				className: Z(s, n)
			}),
			u.createElement(
				'div',
				{
					role: 'presentation',
					className: ''.concat(s, '-title'),
					title: typeof r == 'string' ? r : void 0
				},
				r
			),
			u.createElement(
				'ul',
				{ role: 'group', className: ''.concat(s, '-list') },
				o
			)
		)
	}
function Tx(e) {
	var t = e.children,
		n = ot(e, mD),
		r = Ts(n.eventKey),
		o = pg(t, r),
		a = Nd()
	return a ? o : u.createElement(hD, Tr(n, ['warnKey']), o)
}
function Dx(e) {
	var t = e.className,
		n = e.style,
		r = u.useContext(kr),
		o = r.prefixCls,
		a = Nd()
	return a
		? null
		: u.createElement('li', {
				className: Z(''.concat(o, '-item-divider'), t),
				style: n
		  })
}
var Ds = vD
Ds.Item = Id
Ds.SubMenu = mg
Ds.ItemGroup = Tx
Ds.Divider = Dx
var gD = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z'
				}
			}
		]
	},
	name: 'ellipsis',
	theme: 'outlined'
}
const yD = gD
var _x = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: yD }))
}
_x.displayName = 'EllipsisOutlined'
const bD = u.forwardRef(_x),
	SD = () => {
		const [e, t] = u.useState(!1)
		return (
			u.useEffect(() => {
				t(wk())
			}, []),
			e
		)
	}
function CD(e) {
	let {
		className: t,
		direction: n,
		index: r,
		marginDirection: o,
		children: a,
		split: i,
		wrap: l
	} = e
	const {
		horizontalSize: s,
		verticalSize: c,
		latestIndex: f,
		supportFlexGap: d
	} = u.useContext(Lx)
	let v = {}
	return (
		d ||
			(n === 'vertical'
				? r < f && (v = { marginBottom: s / (i ? 2 : 1) })
				: (v = Object.assign(
						Object.assign({}, r < f && { [o]: s / (i ? 2 : 1) }),
						l && { paddingBottom: c }
				  ))),
		a == null
			? null
			: u.createElement(
					u.Fragment,
					null,
					u.createElement('div', { className: t, style: v }, a),
					r < f &&
						i &&
						u.createElement('span', { className: `${t}-split`, style: v }, i)
			  )
	)
}
var wD =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
const Lx = u.createContext({
		latestIndex: 0,
		horizontalSize: 0,
		verticalSize: 0,
		supportFlexGap: !1
	}),
	xD = { small: 8, middle: 16, large: 24 }
function ED(e) {
	return typeof e == 'string' ? xD[e] : e || 0
}
const $D = e => {
		const { getPrefixCls: t, space: n, direction: r } = u.useContext(kt),
			{
				size: o = (n == null ? void 0 : n.size) || 'small',
				align: a,
				className: i,
				rootClassName: l,
				children: s,
				direction: c = 'horizontal',
				prefixCls: f,
				split: d,
				style: v,
				wrap: p = !1
			} = e,
			h = wD(e, [
				'size',
				'align',
				'className',
				'rootClassName',
				'children',
				'direction',
				'prefixCls',
				'split',
				'style',
				'wrap'
			]),
			g = SD(),
			[b, m] = u.useMemo(
				() => (Array.isArray(o) ? o : [o, o]).map(R => ED(R)),
				[o]
			),
			y = Ur(s, { keepEmpty: !0 }),
			S = a === void 0 && c === 'horizontal' ? 'center' : a,
			C = t('space', f),
			[x, w] = Mw(C),
			E = Z(
				C,
				w,
				`${C}-${c}`,
				{ [`${C}-rtl`]: r === 'rtl', [`${C}-align-${S}`]: S },
				i,
				l
			),
			P = `${C}-item`,
			N = r === 'rtl' ? 'marginLeft' : 'marginRight'
		let O = 0
		const k = y.map((R, M) => {
				R != null && (O = M)
				const T = (R && R.key) || `${P}-${M}`
				return u.createElement(
					CD,
					{
						className: P,
						key: T,
						direction: c,
						index: M,
						marginDirection: N,
						split: d,
						wrap: p
					},
					R
				)
			}),
			I = u.useMemo(
				() => ({
					horizontalSize: b,
					verticalSize: m,
					latestIndex: O,
					supportFlexGap: g
				}),
				[b, m, O, g]
			)
		if (y.length === 0) return null
		const $ = {}
		return (
			p && (($.flexWrap = 'wrap'), g || ($.marginBottom = -m)),
			g && (($.columnGap = b), ($.rowGap = m)),
			x(
				u.createElement(
					'div',
					Object.assign(
						{ className: E, style: Object.assign(Object.assign({}, $), v) },
						h
					),
					u.createElement(Lx.Provider, { value: I }, k)
				)
			)
		)
	},
	Ax = $D
Ax.Compact = bI
const PD = Ax
var sm = {},
	RD = {
		get exports() {
			return sm
		},
		set exports(e) {
			sm = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		var n = 1e3,
			r = 6e4,
			o = 36e5,
			a = 'millisecond',
			i = 'second',
			l = 'minute',
			s = 'hour',
			c = 'day',
			f = 'week',
			d = 'month',
			v = 'quarter',
			p = 'year',
			h = 'date',
			g = 'Invalid Date',
			b =
				/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
			m =
				/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
			y = {
				name: 'en',
				weekdays:
					'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
				months:
					'January_February_March_April_May_June_July_August_September_October_November_December'.split(
						'_'
					),
				ordinal: function ($) {
					var R = ['th', 'st', 'nd', 'rd'],
						M = $ % 100
					return '[' + $ + (R[(M - 20) % 10] || R[M] || R[0]) + ']'
				}
			},
			S = function ($, R, M) {
				var T = String($)
				return !T || T.length >= R
					? $
					: '' + Array(R + 1 - T.length).join(M) + $
			},
			C = {
				s: S,
				z: function ($) {
					var R = -$.utcOffset(),
						M = Math.abs(R),
						T = Math.floor(M / 60),
						_ = M % 60
					return (R <= 0 ? '+' : '-') + S(T, 2, '0') + ':' + S(_, 2, '0')
				},
				m: function $(R, M) {
					if (R.date() < M.date()) return -$(M, R)
					var T = 12 * (M.year() - R.year()) + (M.month() - R.month()),
						_ = R.clone().add(T, d),
						D = M - _ < 0,
						L = R.clone().add(T + (D ? -1 : 1), d)
					return +(-(T + (M - _) / (D ? _ - L : L - _)) || 0)
				},
				a: function ($) {
					return $ < 0 ? Math.ceil($) || 0 : Math.floor($)
				},
				p: function ($) {
					return (
						{ M: d, y: p, w: f, d: c, D: h, h: s, m: l, s: i, ms: a, Q: v }[
							$
						] ||
						String($ || '')
							.toLowerCase()
							.replace(/s$/, '')
					)
				},
				u: function ($) {
					return $ === void 0
				}
			},
			x = 'en',
			w = {}
		w[x] = y
		var E = function ($) {
				return $ instanceof k
			},
			P = function $(R, M, T) {
				var _
				if (!R) return x
				if (typeof R == 'string') {
					var D = R.toLowerCase()
					w[D] && (_ = D), M && ((w[D] = M), (_ = D))
					var L = R.split('-')
					if (!_ && L.length > 1) return $(L[0])
				} else {
					var H = R.name
					;(w[H] = R), (_ = H)
				}
				return !T && _ && (x = _), _ || (!T && x)
			},
			N = function ($, R) {
				if (E($)) return $.clone()
				var M = typeof R == 'object' ? R : {}
				return (M.date = $), (M.args = arguments), new k(M)
			},
			O = C
		;(O.l = P),
			(O.i = E),
			(O.w = function ($, R) {
				return N($, { locale: R.$L, utc: R.$u, x: R.$x, $offset: R.$offset })
			})
		var k = (function () {
				function $(M) {
					;(this.$L = P(M.locale, null, !0)), this.parse(M)
				}
				var R = $.prototype
				return (
					(R.parse = function (M) {
						;(this.$d = (function (T) {
							var _ = T.date,
								D = T.utc
							if (_ === null) return new Date(NaN)
							if (O.u(_)) return new Date()
							if (_ instanceof Date) return new Date(_)
							if (typeof _ == 'string' && !/Z$/i.test(_)) {
								var L = _.match(b)
								if (L) {
									var H = L[2] - 1 || 0,
										j = (L[7] || '0').substring(0, 3)
									return D
										? new Date(
												Date.UTC(
													L[1],
													H,
													L[3] || 1,
													L[4] || 0,
													L[5] || 0,
													L[6] || 0,
													j
												)
										  )
										: new Date(
												L[1],
												H,
												L[3] || 1,
												L[4] || 0,
												L[5] || 0,
												L[6] || 0,
												j
										  )
								}
							}
							return new Date(_)
						})(M)),
							(this.$x = M.x || {}),
							this.init()
					}),
					(R.init = function () {
						var M = this.$d
						;(this.$y = M.getFullYear()),
							(this.$M = M.getMonth()),
							(this.$D = M.getDate()),
							(this.$W = M.getDay()),
							(this.$H = M.getHours()),
							(this.$m = M.getMinutes()),
							(this.$s = M.getSeconds()),
							(this.$ms = M.getMilliseconds())
					}),
					(R.$utils = function () {
						return O
					}),
					(R.isValid = function () {
						return this.$d.toString() !== g
					}),
					(R.isSame = function (M, T) {
						var _ = N(M)
						return this.startOf(T) <= _ && _ <= this.endOf(T)
					}),
					(R.isAfter = function (M, T) {
						return N(M) < this.startOf(T)
					}),
					(R.isBefore = function (M, T) {
						return this.endOf(T) < N(M)
					}),
					(R.$g = function (M, T, _) {
						return O.u(M) ? this[T] : this.set(_, M)
					}),
					(R.unix = function () {
						return Math.floor(this.valueOf() / 1e3)
					}),
					(R.valueOf = function () {
						return this.$d.getTime()
					}),
					(R.startOf = function (M, T) {
						var _ = this,
							D = !!O.u(T) || T,
							L = O.p(M),
							H = function (te, ne) {
								var ie = O.w(
									_.$u ? Date.UTC(_.$y, ne, te) : new Date(_.$y, ne, te),
									_
								)
								return D ? ie : ie.endOf(c)
							},
							j = function (te, ne) {
								return O.w(
									_.toDate()[te].apply(
										_.toDate('s'),
										(D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)
									),
									_
								)
							},
							z = this.$W,
							A = this.$M,
							W = this.$D,
							Y = 'set' + (this.$u ? 'UTC' : '')
						switch (L) {
							case p:
								return D ? H(1, 0) : H(31, 11)
							case d:
								return D ? H(1, A) : H(0, A + 1)
							case f:
								var K = this.$locale().weekStart || 0,
									G = (z < K ? z + 7 : z) - K
								return H(D ? W - G : W + (6 - G), A)
							case c:
							case h:
								return j(Y + 'Hours', 0)
							case s:
								return j(Y + 'Minutes', 1)
							case l:
								return j(Y + 'Seconds', 2)
							case i:
								return j(Y + 'Milliseconds', 3)
							default:
								return this.clone()
						}
					}),
					(R.endOf = function (M) {
						return this.startOf(M, !1)
					}),
					(R.$set = function (M, T) {
						var _,
							D = O.p(M),
							L = 'set' + (this.$u ? 'UTC' : ''),
							H = ((_ = {}),
							(_[c] = L + 'Date'),
							(_[h] = L + 'Date'),
							(_[d] = L + 'Month'),
							(_[p] = L + 'FullYear'),
							(_[s] = L + 'Hours'),
							(_[l] = L + 'Minutes'),
							(_[i] = L + 'Seconds'),
							(_[a] = L + 'Milliseconds'),
							_)[D],
							j = D === c ? this.$D + (T - this.$W) : T
						if (D === d || D === p) {
							var z = this.clone().set(h, 1)
							z.$d[H](j),
								z.init(),
								(this.$d = z.set(h, Math.min(this.$D, z.daysInMonth())).$d)
						} else H && this.$d[H](j)
						return this.init(), this
					}),
					(R.set = function (M, T) {
						return this.clone().$set(M, T)
					}),
					(R.get = function (M) {
						return this[O.p(M)]()
					}),
					(R.add = function (M, T) {
						var _,
							D = this
						M = Number(M)
						var L = O.p(T),
							H = function (A) {
								var W = N(D)
								return O.w(W.date(W.date() + Math.round(A * M)), D)
							}
						if (L === d) return this.set(d, this.$M + M)
						if (L === p) return this.set(p, this.$y + M)
						if (L === c) return H(1)
						if (L === f) return H(7)
						var j = ((_ = {}), (_[l] = r), (_[s] = o), (_[i] = n), _)[L] || 1,
							z = this.$d.getTime() + M * j
						return O.w(z, this)
					}),
					(R.subtract = function (M, T) {
						return this.add(-1 * M, T)
					}),
					(R.format = function (M) {
						var T = this,
							_ = this.$locale()
						if (!this.isValid()) return _.invalidDate || g
						var D = M || 'YYYY-MM-DDTHH:mm:ssZ',
							L = O.z(this),
							H = this.$H,
							j = this.$m,
							z = this.$M,
							A = _.weekdays,
							W = _.months,
							Y = function (ne, ie, le, ae) {
								return (ne && (ne[ie] || ne(T, D))) || le[ie].slice(0, ae)
							},
							K = function (ne) {
								return O.s(H % 12 || 12, ne, '0')
							},
							G =
								_.meridiem ||
								function (ne, ie, le) {
									var ae = ne < 12 ? 'AM' : 'PM'
									return le ? ae.toLowerCase() : ae
								},
							te = {
								YY: String(this.$y).slice(-2),
								YYYY: this.$y,
								M: z + 1,
								MM: O.s(z + 1, 2, '0'),
								MMM: Y(_.monthsShort, z, W, 3),
								MMMM: Y(W, z),
								D: this.$D,
								DD: O.s(this.$D, 2, '0'),
								d: String(this.$W),
								dd: Y(_.weekdaysMin, this.$W, A, 2),
								ddd: Y(_.weekdaysShort, this.$W, A, 3),
								dddd: A[this.$W],
								H: String(H),
								HH: O.s(H, 2, '0'),
								h: K(1),
								hh: K(2),
								a: G(H, j, !0),
								A: G(H, j, !1),
								m: String(j),
								mm: O.s(j, 2, '0'),
								s: String(this.$s),
								ss: O.s(this.$s, 2, '0'),
								SSS: O.s(this.$ms, 3, '0'),
								Z: L
							}
						return D.replace(m, function (ne, ie) {
							return ie || te[ne] || L.replace(':', '')
						})
					}),
					(R.utcOffset = function () {
						return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
					}),
					(R.diff = function (M, T, _) {
						var D,
							L = O.p(T),
							H = N(M),
							j = (H.utcOffset() - this.utcOffset()) * r,
							z = this - H,
							A = O.m(this, H)
						return (
							(A =
								((D = {}),
								(D[p] = A / 12),
								(D[d] = A),
								(D[v] = A / 3),
								(D[f] = (z - j) / 6048e5),
								(D[c] = (z - j) / 864e5),
								(D[s] = z / o),
								(D[l] = z / r),
								(D[i] = z / n),
								D)[L] || z),
							_ ? A : O.a(A)
						)
					}),
					(R.daysInMonth = function () {
						return this.endOf(d).$D
					}),
					(R.$locale = function () {
						return w[this.$L]
					}),
					(R.locale = function (M, T) {
						if (!M) return this.$L
						var _ = this.clone(),
							D = P(M, T, !0)
						return D && (_.$L = D), _
					}),
					(R.clone = function () {
						return O.w(this.$d, this)
					}),
					(R.toDate = function () {
						return new Date(this.valueOf())
					}),
					(R.toJSON = function () {
						return this.isValid() ? this.toISOString() : null
					}),
					(R.toISOString = function () {
						return this.$d.toISOString()
					}),
					(R.toString = function () {
						return this.$d.toUTCString()
					}),
					$
				)
			})(),
			I = k.prototype
		return (
			(N.prototype = I),
			[
				['$ms', a],
				['$s', i],
				['$m', l],
				['$H', s],
				['$W', c],
				['$M', d],
				['$y', p],
				['$D', h]
			].forEach(function ($) {
				I[$[1]] = function (R) {
					return this.$g(R, $[0], $[1])
				}
			}),
			(N.extend = function ($, R) {
				return $.$i || ($(R, k, N), ($.$i = !0)), N
			}),
			(N.locale = P),
			(N.isDayjs = E),
			(N.unix = function ($) {
				return N(1e3 * $)
			}),
			(N.en = w[x]),
			(N.Ls = w),
			(N.p = {}),
			N
		)
	})
})(RD)
const sn = sm
var um = {},
	MD = {
		get exports() {
			return um
		},
		set exports(e) {
			um = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		return function (n, r) {
			r.prototype.weekday = function (o) {
				var a = this.$locale().weekStart || 0,
					i = this.$W,
					l = (i < a ? i + 7 : i) - a
				return this.$utils().u(o) ? l : this.subtract(l, 'day').add(o, 'day')
			}
		}
	})
})(MD)
const OD = um
var cm = {},
	ND = {
		get exports() {
			return cm
		},
		set exports(e) {
			cm = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		return function (n, r, o) {
			var a = r.prototype,
				i = function (d) {
					return d && (d.indexOf ? d : d.s)
				},
				l = function (d, v, p, h, g) {
					var b = d.name ? d : d.$locale(),
						m = i(b[v]),
						y = i(b[p]),
						S =
							m ||
							y.map(function (x) {
								return x.slice(0, h)
							})
					if (!g) return S
					var C = b.weekStart
					return S.map(function (x, w) {
						return S[(w + (C || 0)) % 7]
					})
				},
				s = function () {
					return o.Ls[o.locale()]
				},
				c = function (d, v) {
					return (
						d.formats[v] ||
						(function (p) {
							return p.replace(
								/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
								function (h, g, b) {
									return g || b.slice(1)
								}
							)
						})(d.formats[v.toUpperCase()])
					)
				},
				f = function () {
					var d = this
					return {
						months: function (v) {
							return v ? v.format('MMMM') : l(d, 'months')
						},
						monthsShort: function (v) {
							return v ? v.format('MMM') : l(d, 'monthsShort', 'months', 3)
						},
						firstDayOfWeek: function () {
							return d.$locale().weekStart || 0
						},
						weekdays: function (v) {
							return v ? v.format('dddd') : l(d, 'weekdays')
						},
						weekdaysMin: function (v) {
							return v ? v.format('dd') : l(d, 'weekdaysMin', 'weekdays', 2)
						},
						weekdaysShort: function (v) {
							return v ? v.format('ddd') : l(d, 'weekdaysShort', 'weekdays', 3)
						},
						longDateFormat: function (v) {
							return c(d.$locale(), v)
						},
						meridiem: this.$locale().meridiem,
						ordinal: this.$locale().ordinal
					}
				}
			;(a.localeData = function () {
				return f.bind(this)()
			}),
				(o.localeData = function () {
					var d = s()
					return {
						firstDayOfWeek: function () {
							return d.weekStart || 0
						},
						weekdays: function () {
							return o.weekdays()
						},
						weekdaysShort: function () {
							return o.weekdaysShort()
						},
						weekdaysMin: function () {
							return o.weekdaysMin()
						},
						months: function () {
							return o.months()
						},
						monthsShort: function () {
							return o.monthsShort()
						},
						longDateFormat: function (v) {
							return c(d, v)
						},
						meridiem: d.meridiem,
						ordinal: d.ordinal
					}
				}),
				(o.months = function () {
					return l(s(), 'months')
				}),
				(o.monthsShort = function () {
					return l(s(), 'monthsShort', 'months', 3)
				}),
				(o.weekdays = function (d) {
					return l(s(), 'weekdays', null, null, d)
				}),
				(o.weekdaysShort = function (d) {
					return l(s(), 'weekdaysShort', 'weekdays', 3, d)
				}),
				(o.weekdaysMin = function (d) {
					return l(s(), 'weekdaysMin', 'weekdays', 2, d)
				})
		}
	})
})(ND)
const ID = cm
var dm = {},
	kD = {
		get exports() {
			return dm
		},
		set exports(e) {
			dm = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		var n = 'week',
			r = 'year'
		return function (o, a, i) {
			var l = a.prototype
			;(l.week = function (s) {
				if ((s === void 0 && (s = null), s !== null))
					return this.add(7 * (s - this.week()), 'day')
				var c = this.$locale().yearStart || 1
				if (this.month() === 11 && this.date() > 25) {
					var f = i(this).startOf(r).add(1, r).date(c),
						d = i(this).endOf(n)
					if (f.isBefore(d)) return 1
				}
				var v = i(this)
						.startOf(r)
						.date(c)
						.startOf(n)
						.subtract(1, 'millisecond'),
					p = this.diff(v, n, !0)
				return p < 0 ? i(this).startOf('week').week() : Math.ceil(p)
			}),
				(l.weeks = function (s) {
					return s === void 0 && (s = null), this.week(s)
				})
		}
	})
})(kD)
const TD = dm
var fm = {},
	DD = {
		get exports() {
			return fm
		},
		set exports(e) {
			fm = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		return function (n, r) {
			r.prototype.weekYear = function () {
				var o = this.month(),
					a = this.week(),
					i = this.year()
				return a === 1 && o === 11 ? i + 1 : o === 0 && a >= 52 ? i - 1 : i
			}
		}
	})
})(DD)
const _D = fm
var vm = {},
	LD = {
		get exports() {
			return vm
		},
		set exports(e) {
			vm = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		return function (n, r) {
			var o = r.prototype,
				a = o.format
			o.format = function (i) {
				var l = this,
					s = this.$locale()
				if (!this.isValid()) return a.bind(this)(i)
				var c = this.$utils(),
					f = (i || 'YYYY-MM-DDTHH:mm:ssZ').replace(
						/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
						function (d) {
							switch (d) {
								case 'Q':
									return Math.ceil((l.$M + 1) / 3)
								case 'Do':
									return s.ordinal(l.$D)
								case 'gggg':
									return l.weekYear()
								case 'GGGG':
									return l.isoWeekYear()
								case 'wo':
									return s.ordinal(l.week(), 'W')
								case 'w':
								case 'ww':
									return c.s(l.week(), d === 'w' ? 1 : 2, '0')
								case 'W':
								case 'WW':
									return c.s(l.isoWeek(), d === 'W' ? 1 : 2, '0')
								case 'k':
								case 'kk':
									return c.s(
										String(l.$H === 0 ? 24 : l.$H),
										d === 'k' ? 1 : 2,
										'0'
									)
								case 'X':
									return Math.floor(l.$d.getTime() / 1e3)
								case 'x':
									return l.$d.getTime()
								case 'z':
									return '[' + l.offsetName() + ']'
								case 'zzz':
									return '[' + l.offsetName('long') + ']'
								default:
									return d
							}
						}
					)
				return a.bind(this)(f)
			}
		}
	})
})(LD)
const AD = vm
var pm = {},
	FD = {
		get exports() {
			return pm
		},
		set exports(e) {
			pm = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		var n = {
				LTS: 'h:mm:ss A',
				LT: 'h:mm A',
				L: 'MM/DD/YYYY',
				LL: 'MMMM D, YYYY',
				LLL: 'MMMM D, YYYY h:mm A',
				LLLL: 'dddd, MMMM D, YYYY h:mm A'
			},
			r =
				/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
			o = /\d\d/,
			a = /\d\d?/,
			i = /\d*[^-_:/,()\s\d]+/,
			l = {},
			s = function (g) {
				return (g = +g) + (g > 68 ? 1900 : 2e3)
			},
			c = function (g) {
				return function (b) {
					this[g] = +b
				}
			},
			f = [
				/[+-]\d\d:?(\d\d)?|Z/,
				function (g) {
					;(this.zone || (this.zone = {})).offset = (function (b) {
						if (!b || b === 'Z') return 0
						var m = b.match(/([+-]|\d\d)/g),
							y = 60 * m[1] + (+m[2] || 0)
						return y === 0 ? 0 : m[0] === '+' ? -y : y
					})(g)
				}
			],
			d = function (g) {
				var b = l[g]
				return b && (b.indexOf ? b : b.s.concat(b.f))
			},
			v = function (g, b) {
				var m,
					y = l.meridiem
				if (y) {
					for (var S = 1; S <= 24; S += 1)
						if (g.indexOf(y(S, 0, b)) > -1) {
							m = S > 12
							break
						}
				} else m = g === (b ? 'pm' : 'PM')
				return m
			},
			p = {
				A: [
					i,
					function (g) {
						this.afternoon = v(g, !1)
					}
				],
				a: [
					i,
					function (g) {
						this.afternoon = v(g, !0)
					}
				],
				S: [
					/\d/,
					function (g) {
						this.milliseconds = 100 * +g
					}
				],
				SS: [
					o,
					function (g) {
						this.milliseconds = 10 * +g
					}
				],
				SSS: [
					/\d{3}/,
					function (g) {
						this.milliseconds = +g
					}
				],
				s: [a, c('seconds')],
				ss: [a, c('seconds')],
				m: [a, c('minutes')],
				mm: [a, c('minutes')],
				H: [a, c('hours')],
				h: [a, c('hours')],
				HH: [a, c('hours')],
				hh: [a, c('hours')],
				D: [a, c('day')],
				DD: [o, c('day')],
				Do: [
					i,
					function (g) {
						var b = l.ordinal,
							m = g.match(/\d+/)
						if (((this.day = m[0]), b))
							for (var y = 1; y <= 31; y += 1)
								b(y).replace(/\[|\]/g, '') === g && (this.day = y)
					}
				],
				M: [a, c('month')],
				MM: [o, c('month')],
				MMM: [
					i,
					function (g) {
						var b = d('months'),
							m =
								(
									d('monthsShort') ||
									b.map(function (y) {
										return y.slice(0, 3)
									})
								).indexOf(g) + 1
						if (m < 1) throw new Error()
						this.month = m % 12 || m
					}
				],
				MMMM: [
					i,
					function (g) {
						var b = d('months').indexOf(g) + 1
						if (b < 1) throw new Error()
						this.month = b % 12 || b
					}
				],
				Y: [/[+-]?\d+/, c('year')],
				YY: [
					o,
					function (g) {
						this.year = s(g)
					}
				],
				YYYY: [/\d{4}/, c('year')],
				Z: f,
				ZZ: f
			}
		function h(g) {
			var b, m
			;(b = g), (m = l && l.formats)
			for (
				var y = (g = b.replace(
						/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
						function (N, O, k) {
							var I = k && k.toUpperCase()
							return (
								O ||
								m[k] ||
								n[k] ||
								m[I].replace(
									/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
									function ($, R, M) {
										return R || M.slice(1)
									}
								)
							)
						}
					)).match(r),
					S = y.length,
					C = 0;
				C < S;
				C += 1
			) {
				var x = y[C],
					w = p[x],
					E = w && w[0],
					P = w && w[1]
				y[C] = P ? { regex: E, parser: P } : x.replace(/^\[|\]$/g, '')
			}
			return function (N) {
				for (var O = {}, k = 0, I = 0; k < S; k += 1) {
					var $ = y[k]
					if (typeof $ == 'string') I += $.length
					else {
						var R = $.regex,
							M = $.parser,
							T = N.slice(I),
							_ = R.exec(T)[0]
						M.call(O, _), (N = N.replace(_, ''))
					}
				}
				return (
					(function (D) {
						var L = D.afternoon
						if (L !== void 0) {
							var H = D.hours
							L ? H < 12 && (D.hours += 12) : H === 12 && (D.hours = 0),
								delete D.afternoon
						}
					})(O),
					O
				)
			}
		}
		return function (g, b, m) {
			;(m.p.customParseFormat = !0),
				g && g.parseTwoDigitYear && (s = g.parseTwoDigitYear)
			var y = b.prototype,
				S = y.parse
			y.parse = function (C) {
				var x = C.date,
					w = C.utc,
					E = C.args
				this.$u = w
				var P = E[1]
				if (typeof P == 'string') {
					var N = E[2] === !0,
						O = E[3] === !0,
						k = N || O,
						I = E[2]
					O && (I = E[2]),
						(l = this.$locale()),
						!N && I && (l = m.Ls[I]),
						(this.$d = (function (T, _, D) {
							try {
								if (['x', 'X'].indexOf(_) > -1)
									return new Date((_ === 'X' ? 1e3 : 1) * T)
								var L = h(_)(T),
									H = L.year,
									j = L.month,
									z = L.day,
									A = L.hours,
									W = L.minutes,
									Y = L.seconds,
									K = L.milliseconds,
									G = L.zone,
									te = new Date(),
									ne = z || (H || j ? 1 : te.getDate()),
									ie = H || te.getFullYear(),
									le = 0
								;(H && !j) || (le = j > 0 ? j - 1 : te.getMonth())
								var ae = A || 0,
									q = W || 0,
									de = Y || 0,
									ve = K || 0
								return G
									? new Date(
											Date.UTC(ie, le, ne, ae, q, de, ve + 60 * G.offset * 1e3)
									  )
									: D
									? new Date(Date.UTC(ie, le, ne, ae, q, de, ve))
									: new Date(ie, le, ne, ae, q, de, ve)
							} catch {
								return new Date('')
							}
						})(x, P, w)),
						this.init(),
						I && I !== !0 && (this.$L = this.locale(I).$L),
						k && x != this.format(P) && (this.$d = new Date('')),
						(l = {})
				} else if (P instanceof Array)
					for (var $ = P.length, R = 1; R <= $; R += 1) {
						E[1] = P[R - 1]
						var M = m.apply(this, E)
						if (M.isValid()) {
							;(this.$d = M.$d), (this.$L = M.$L), this.init()
							break
						}
						R === $ && (this.$d = new Date(''))
					}
				else S.call(this, C)
			}
		}
	})
})(FD)
const zD = pm
sn.extend(zD)
sn.extend(AD)
sn.extend(OD)
sn.extend(ID)
sn.extend(TD)
sn.extend(_D)
sn.extend(function (e, t) {
	var n = t.prototype,
		r = n.format
	n.format = function (a) {
		var i = (a || '').replace('Wo', 'wo')
		return r.bind(this)(i)
	}
})
var HD = {
		bn_BD: 'bn-bd',
		by_BY: 'be',
		en_GB: 'en-gb',
		en_US: 'en',
		fr_BE: 'fr',
		fr_CA: 'fr-ca',
		hy_AM: 'hy-am',
		kmr_IQ: 'ku',
		nl_BE: 'nl-be',
		pt_BR: 'pt-br',
		zh_CN: 'zh-cn',
		zh_HK: 'zh-hk',
		zh_TW: 'zh-tw'
	},
	la = function (t) {
		var n = HD[t]
		return n || t.split('_')[0]
	},
	N1 = function () {
		G2(!1, 'Not match any format. Please help to fire a issue about this.')
	},
	VD = {
		getNow: function () {
			return sn()
		},
		getFixedDate: function (t) {
			return sn(t, ['YYYY-M-DD', 'YYYY-MM-DD'])
		},
		getEndDate: function (t) {
			return t.endOf('month')
		},
		getWeekDay: function (t) {
			var n = t.locale('en')
			return n.weekday() + n.localeData().firstDayOfWeek()
		},
		getYear: function (t) {
			return t.year()
		},
		getMonth: function (t) {
			return t.month()
		},
		getDate: function (t) {
			return t.date()
		},
		getHour: function (t) {
			return t.hour()
		},
		getMinute: function (t) {
			return t.minute()
		},
		getSecond: function (t) {
			return t.second()
		},
		addYear: function (t, n) {
			return t.add(n, 'year')
		},
		addMonth: function (t, n) {
			return t.add(n, 'month')
		},
		addDate: function (t, n) {
			return t.add(n, 'day')
		},
		setYear: function (t, n) {
			return t.year(n)
		},
		setMonth: function (t, n) {
			return t.month(n)
		},
		setDate: function (t, n) {
			return t.date(n)
		},
		setHour: function (t, n) {
			return t.hour(n)
		},
		setMinute: function (t, n) {
			return t.minute(n)
		},
		setSecond: function (t, n) {
			return t.second(n)
		},
		isAfter: function (t, n) {
			return t.isAfter(n)
		},
		isValidate: function (t) {
			return t.isValid()
		},
		locale: {
			getWeekFirstDay: function (t) {
				return sn().locale(la(t)).localeData().firstDayOfWeek()
			},
			getWeekFirstDate: function (t, n) {
				return n.locale(la(t)).weekday(0)
			},
			getWeek: function (t, n) {
				return n.locale(la(t)).week()
			},
			getShortWeekDays: function (t) {
				return sn().locale(la(t)).localeData().weekdaysMin()
			},
			getShortMonths: function (t) {
				return sn().locale(la(t)).localeData().monthsShort()
			},
			format: function (t, n, r) {
				return n.locale(la(t)).format(r)
			},
			parse: function (t, n, r) {
				for (var o = la(t), a = 0; a < r.length; a += 1) {
					var i = r[a],
						l = n
					if (i.includes('wo') || i.includes('Wo')) {
						for (
							var s = l.split('-')[0],
								c = l.split('-')[1],
								f = sn(s, 'YYYY').startOf('year').locale(o),
								d = 0;
							d <= 52;
							d += 1
						) {
							var v = f.add(d, 'week')
							if (v.format('Wo') === c) return v
						}
						return N1(), null
					}
					var p = sn(l, i, !0).locale(o)
					if (p.isValid()) return p
				}
				return n && N1(), null
			}
		}
	},
	Gn = u.createContext({}),
	wu = { visibility: 'hidden' }
function Xi(e) {
	var t = e.prefixCls,
		n = e.prevIcon,
		r = n === void 0 ? '‹' : n,
		o = e.nextIcon,
		a = o === void 0 ? '›' : o,
		i = e.superPrevIcon,
		l = i === void 0 ? '«' : i,
		s = e.superNextIcon,
		c = s === void 0 ? '»' : s,
		f = e.onSuperPrev,
		d = e.onSuperNext,
		v = e.onPrev,
		p = e.onNext,
		h = e.children,
		g = u.useContext(Gn),
		b = g.hideNextBtn,
		m = g.hidePrevBtn
	return u.createElement(
		'div',
		{ className: t },
		f &&
			u.createElement(
				'button',
				{
					type: 'button',
					onClick: f,
					tabIndex: -1,
					className: ''.concat(t, '-super-prev-btn'),
					style: m ? wu : {}
				},
				l
			),
		v &&
			u.createElement(
				'button',
				{
					type: 'button',
					onClick: v,
					tabIndex: -1,
					className: ''.concat(t, '-prev-btn'),
					style: m ? wu : {}
				},
				r
			),
		u.createElement('div', { className: ''.concat(t, '-view') }, h),
		p &&
			u.createElement(
				'button',
				{
					type: 'button',
					onClick: p,
					tabIndex: -1,
					className: ''.concat(t, '-next-btn'),
					style: b ? wu : {}
				},
				a
			),
		d &&
			u.createElement(
				'button',
				{
					type: 'button',
					onClick: d,
					tabIndex: -1,
					className: ''.concat(t, '-super-next-btn'),
					style: b ? wu : {}
				},
				c
			)
	)
}
function jD(e) {
	var t = e.prefixCls,
		n = e.generateConfig,
		r = e.viewDate,
		o = e.onPrevDecades,
		a = e.onNextDecades,
		i = u.useContext(Gn),
		l = i.hideHeader
	if (l) return null
	var s = ''.concat(t, '-header'),
		c = n.getYear(r),
		f = Math.floor(c / ao) * ao,
		d = f + ao - 1
	return u.createElement(
		Xi,
		se({}, e, { prefixCls: s, onSuperPrev: o, onSuperNext: a }),
		f,
		'-',
		d
	)
}
function Fx(e, t, n, r, o) {
	var a = e.setHour(t, n)
	return (a = e.setMinute(a, r)), (a = e.setSecond(a, o)), a
}
function zx(e, t, n) {
	if (!n) return t
	var r = t
	return (
		(r = e.setHour(r, e.getHour(n))),
		(r = e.setMinute(r, e.getMinute(n))),
		(r = e.setSecond(r, e.getSecond(n))),
		r
	)
}
function BD(e, t, n, r, o, a) {
	var i = Math.floor(e / r) * r
	if (i < e) return [i, 60 - o, 60 - a]
	var l = Math.floor(t / o) * o
	if (l < t) return [i, l, 60 - a]
	var s = Math.floor(n / a) * a
	return [i, l, s]
}
function WD(e, t) {
	var n = e.getYear(t),
		r = e.getMonth(t) + 1,
		o = e.getEndDate(e.getFixedDate(''.concat(n, '-').concat(r, '-01'))),
		a = e.getDate(o),
		i = r < 10 ? '0'.concat(r) : ''.concat(r)
	return ''.concat(n, '-').concat(i, '-').concat(a)
}
function _s(e) {
	for (
		var t = e.prefixCls,
			n = e.disabledDate,
			r = e.onSelect,
			o = e.picker,
			a = e.rowNum,
			i = e.colNum,
			l = e.prefixColumn,
			s = e.rowClassName,
			c = e.baseDate,
			f = e.getCellClassName,
			d = e.getCellText,
			v = e.getCellNode,
			p = e.getCellDate,
			h = e.generateConfig,
			g = e.titleCell,
			b = e.headerCells,
			m = u.useContext(Gn),
			y = m.onDateMouseEnter,
			S = m.onDateMouseLeave,
			C = m.mode,
			x = ''.concat(t, '-cell'),
			w = [],
			E = 0;
		E < a;
		E += 1
	) {
		for (
			var P = [],
				N = void 0,
				O = function () {
					var $,
						R = E * i + k,
						M = p(c, R),
						T = Ac({ cellDate: M, mode: C, disabledDate: n, generateConfig: h })
					k === 0 && ((N = M), l && P.push(l(N)))
					var _ = g && g(M)
					P.push(
						u.createElement(
							'td',
							{
								key: k,
								title: _,
								className: Z(
									x,
									F(
										(($ = {}),
										V($, ''.concat(x, '-disabled'), T),
										V(
											$,
											''.concat(x, '-start'),
											d(M) === 1 || (o === 'year' && Number(_) % 10 === 0)
										),
										V(
											$,
											''.concat(x, '-end'),
											_ === WD(h, M) || (o === 'year' && Number(_) % 10 === 9)
										),
										$),
										f(M)
									)
								),
								onClick: function () {
									T || r(M)
								},
								onMouseEnter: function () {
									!T && y && y(M)
								},
								onMouseLeave: function () {
									!T && S && S(M)
								}
							},
							v
								? v(M)
								: u.createElement(
										'div',
										{ className: ''.concat(x, '-inner') },
										d(M)
								  )
						)
					)
				},
				k = 0;
			k < i;
			k += 1
		)
			O()
		w.push(u.createElement('tr', { key: E, className: s && s(N) }, P))
	}
	return u.createElement(
		'div',
		{ className: ''.concat(t, '-body') },
		u.createElement(
			'table',
			{ className: ''.concat(t, '-content') },
			b && u.createElement('thead', null, u.createElement('tr', null, b)),
			u.createElement('tbody', null, w)
		)
	)
}
var mm = 3,
	I1 = 4
function UD(e) {
	var t = Rr - 1,
		n = e.prefixCls,
		r = e.viewDate,
		o = e.generateConfig,
		a = ''.concat(n, '-cell'),
		i = o.getYear(r),
		l = Math.floor(i / Rr) * Rr,
		s = Math.floor(i / ao) * ao,
		c = s + ao - 1,
		f = o.setYear(r, s - Math.ceil((mm * I1 * Rr - ao) / 2)),
		d = function (p) {
			var h,
				g = o.getYear(p),
				b = g + t
			return (
				(h = {}),
				V(h, ''.concat(a, '-in-view'), s <= g && b <= c),
				V(h, ''.concat(a, '-selected'), g === l),
				h
			)
		}
	return u.createElement(
		_s,
		se({}, e, {
			rowNum: I1,
			colNum: mm,
			baseDate: f,
			getCellText: function (p) {
				var h = o.getYear(p)
				return ''.concat(h, '-').concat(h + t)
			},
			getCellClassName: d,
			getCellDate: function (p, h) {
				return o.addYear(p, h * Rr)
			}
		})
	)
}
var xu = new Map()
function YD(e, t) {
	var n
	function r() {
		Ns(e)
			? t()
			: (n = yt(function () {
					r()
			  }))
	}
	return (
		r(),
		function () {
			yt.cancel(n)
		}
	)
}
function hm(e, t, n) {
	if ((xu.get(e) && cancelAnimationFrame(xu.get(e)), n <= 0)) {
		xu.set(
			e,
			requestAnimationFrame(function () {
				e.scrollTop = t
			})
		)
		return
	}
	var r = t - e.scrollTop,
		o = (r / n) * 10
	xu.set(
		e,
		requestAnimationFrame(function () {
			;(e.scrollTop += o), e.scrollTop !== t && hm(e, t, n - 10)
		})
	)
}
function qi(e, t) {
	var n = t.onLeftRight,
		r = t.onCtrlLeftRight,
		o = t.onUpDown,
		a = t.onPageUpDown,
		i = t.onEnter,
		l = e.which,
		s = e.ctrlKey,
		c = e.metaKey
	switch (l) {
		case X.LEFT:
			if (s || c) {
				if (r) return r(-1), !0
			} else if (n) return n(-1), !0
			break
		case X.RIGHT:
			if (s || c) {
				if (r) return r(1), !0
			} else if (n) return n(1), !0
			break
		case X.UP:
			if (o) return o(-1), !0
			break
		case X.DOWN:
			if (o) return o(1), !0
			break
		case X.PAGE_UP:
			if (a) return a(-1), !0
			break
		case X.PAGE_DOWN:
			if (a) return a(1), !0
			break
		case X.ENTER:
			if (i) return i(), !0
			break
	}
	return !1
}
function Hx(e, t, n, r) {
	var o = e
	if (!o)
		switch (t) {
			case 'time':
				o = r ? 'hh:mm:ss a' : 'HH:mm:ss'
				break
			case 'week':
				o = 'gggg-wo'
				break
			case 'month':
				o = 'YYYY-MM'
				break
			case 'quarter':
				o = 'YYYY-[Q]Q'
				break
			case 'year':
				o = 'YYYY'
				break
			default:
				o = n ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
		}
	return o
}
function Vx(e, t, n) {
	var r = e === 'time' ? 8 : 10,
		o = typeof t == 'function' ? t(n.getNow()).length : t.length
	return Math.max(r, o) + 2
}
var gl = null,
	Eu = new Set()
function KD(e) {
	return (
		!gl &&
			typeof window < 'u' &&
			window.addEventListener &&
			((gl = function (n) {
				xe(Eu).forEach(function (r) {
					r(n)
				})
			}),
			window.addEventListener('mousedown', gl)),
		Eu.add(e),
		function () {
			Eu.delete(e),
				Eu.size === 0 &&
					(window.removeEventListener('mousedown', gl), (gl = null))
		}
	)
}
function GD(e) {
	var t = e.target
	if (e.composed && t.shadowRoot) {
		var n
		return (
			((n = e.composedPath) === null || n === void 0 ? void 0 : n.call(e)[0]) ||
			t
		)
	}
	return t
}
var XD = function (t) {
		return t === 'month' || t === 'date' ? 'year' : t
	},
	qD = function (t) {
		return t === 'date' ? 'month' : t
	},
	QD = function (t) {
		return t === 'month' || t === 'date' ? 'quarter' : t
	},
	ZD = function (t) {
		return t === 'date' ? 'week' : t
	},
	JD = { year: XD, month: qD, quarter: QD, week: ZD, time: null, date: null }
function jx(e, t) {
	return e.some(function (n) {
		return n && n.contains(t)
	})
}
var Rr = 10,
	ao = Rr * 10
function e6(e) {
	var t = e.prefixCls,
		n = e.onViewDateChange,
		r = e.generateConfig,
		o = e.viewDate,
		a = e.operationRef,
		i = e.onSelect,
		l = e.onPanelChange,
		s = ''.concat(t, '-decade-panel')
	a.current = {
		onKeyDown: function (v) {
			return qi(v, {
				onLeftRight: function (h) {
					i(r.addYear(o, h * Rr), 'key')
				},
				onCtrlLeftRight: function (h) {
					i(r.addYear(o, h * ao), 'key')
				},
				onUpDown: function (h) {
					i(r.addYear(o, h * Rr * mm), 'key')
				},
				onEnter: function () {
					l('year', o)
				}
			})
		}
	}
	var c = function (v) {
			var p = r.addYear(o, v * ao)
			n(p), l(null, p)
		},
		f = function (v) {
			i(v, 'mouse'), l('year', v)
		}
	return u.createElement(
		'div',
		{ className: s },
		u.createElement(
			jD,
			se({}, e, {
				prefixCls: t,
				onPrevDecades: function () {
					c(-1)
				},
				onNextDecades: function () {
					c(1)
				}
			})
		),
		u.createElement(UD, se({}, e, { prefixCls: t, onSelect: f }))
	)
}
var Wu = 7
function Aa(e, t) {
	if (!e && !t) return !0
	if (!e || !t) return !1
}
function t6(e, t, n) {
	var r = Aa(t, n)
	if (typeof r == 'boolean') return r
	var o = Math.floor(e.getYear(t) / 10),
		a = Math.floor(e.getYear(n) / 10)
	return o === a
}
function kd(e, t, n) {
	var r = Aa(t, n)
	return typeof r == 'boolean' ? r : e.getYear(t) === e.getYear(n)
}
function gm(e, t) {
	var n = Math.floor(e.getMonth(t) / 3)
	return n + 1
}
function Bx(e, t, n) {
	var r = Aa(t, n)
	return typeof r == 'boolean' ? r : kd(e, t, n) && gm(e, t) === gm(e, n)
}
function hg(e, t, n) {
	var r = Aa(t, n)
	return typeof r == 'boolean'
		? r
		: kd(e, t, n) && e.getMonth(t) === e.getMonth(n)
}
function io(e, t, n) {
	var r = Aa(t, n)
	return typeof r == 'boolean'
		? r
		: e.getYear(t) === e.getYear(n) &&
				e.getMonth(t) === e.getMonth(n) &&
				e.getDate(t) === e.getDate(n)
}
function n6(e, t, n) {
	var r = Aa(t, n)
	return typeof r == 'boolean'
		? r
		: e.getHour(t) === e.getHour(n) &&
				e.getMinute(t) === e.getMinute(n) &&
				e.getSecond(t) === e.getSecond(n)
}
function Uu(e, t, n, r) {
	var o = Aa(n, r)
	return typeof o == 'boolean'
		? o
		: e.locale.getWeek(t, n) === e.locale.getWeek(t, r)
}
function Fi(e, t, n) {
	return io(e, t, n) && n6(e, t, n)
}
function $l(e, t, n, r) {
	return !t || !n || !r
		? !1
		: !io(e, t, r) && !io(e, n, r) && e.isAfter(r, t) && e.isAfter(n, r)
}
function r6(e, t, n) {
	var r = t.locale.getWeekFirstDay(e),
		o = t.setDate(n, 1),
		a = t.getWeekDay(o),
		i = t.addDate(o, r - a)
	return (
		t.getMonth(i) === t.getMonth(n) &&
			t.getDate(i) > 1 &&
			(i = t.addDate(i, -7)),
		i
	)
}
function Bl(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1
	switch (t) {
		case 'year':
			return n.addYear(e, r * 10)
		case 'quarter':
		case 'month':
			return n.addYear(e, r)
		default:
			return n.addMonth(e, r)
	}
}
function xn(e, t) {
	var n = t.generateConfig,
		r = t.locale,
		o = t.format
	return typeof o == 'function' ? o(e) : n.locale.format(r.locale, e, o)
}
function Wx(e, t) {
	var n = t.generateConfig,
		r = t.locale,
		o = t.formatList
	return !e || typeof o[0] == 'function' ? null : n.locale.parse(r.locale, e, o)
}
function Ac(e) {
	var t = e.cellDate,
		n = e.mode,
		r = e.disabledDate,
		o = e.generateConfig
	if (!r) return !1
	var a = function (h, g, b) {
		for (var m = g; m <= b; ) {
			var y = void 0
			switch (h) {
				case 'date': {
					if (((y = o.setDate(t, m)), !r(y))) return !1
					break
				}
				case 'month': {
					if (
						((y = o.setMonth(t, m)),
						!Ac({
							cellDate: y,
							mode: 'month',
							generateConfig: o,
							disabledDate: r
						}))
					)
						return !1
					break
				}
				case 'year': {
					if (
						((y = o.setYear(t, m)),
						!Ac({
							cellDate: y,
							mode: 'year',
							generateConfig: o,
							disabledDate: r
						}))
					)
						return !1
					break
				}
			}
			m += 1
		}
		return !0
	}
	switch (n) {
		case 'date':
		case 'week':
			return r(t)
		case 'month': {
			var i = 1,
				l = o.getDate(o.getEndDate(t))
			return a('date', i, l)
		}
		case 'quarter': {
			var s = Math.floor(o.getMonth(t) / 3) * 3,
				c = s + 2
			return a('month', s, c)
		}
		case 'year':
			return a('month', 0, 11)
		case 'decade': {
			var f = o.getYear(t),
				d = Math.floor(f / Rr) * Rr,
				v = d + Rr - 1
			return a('year', d, v)
		}
	}
}
function Fc(e, t) {
	var n = t.formatList,
		r = t.generateConfig,
		o = t.locale
	return ka(
		function () {
			if (!e) return [[''], '']
			for (var a = '', i = [], l = 0; l < n.length; l += 1) {
				var s = n[l],
					c = xn(e, { generateConfig: r, locale: o, format: s })
				i.push(c), l === 0 && (a = c)
			}
			return [i, a]
		},
		[e, n],
		function (a, i) {
			return !Fi(r, a[0], i[0]) || !Es(a[1], i[1], !0)
		}
	)
}
function ym(e, t) {
	var n = t.formatList,
		r = t.generateConfig,
		o = t.locale,
		a = u.useState(null),
		i = B(a, 2),
		l = i[0],
		s = i[1],
		c = u.useRef(null)
	function f(b) {
		var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
		if ((cancelAnimationFrame(c.current), m)) {
			s(b)
			return
		}
		c.current = requestAnimationFrame(function () {
			s(b)
		})
	}
	var d = Fc(l, { formatList: n, generateConfig: r, locale: o }),
		v = B(d, 2),
		p = v[1]
	function h(b) {
		f(b)
	}
	function g() {
		var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
		f(null, b)
	}
	return (
		u.useEffect(
			function () {
				g(!0)
			},
			[e]
		),
		u.useEffect(function () {
			return function () {
				return cancelAnimationFrame(c.current)
			}
		}, []),
		[p, h, g]
	)
}
function bm(e) {
	var t = e.open,
		n = e.value,
		r = e.isClickOutside,
		o = e.triggerOpen,
		a = e.forwardKeyDown,
		i = e.onKeyDown,
		l = e.blurToCancel,
		s = e.onSubmit,
		c = e.onCancel,
		f = e.onFocus,
		d = e.onBlur,
		v = u.useState(!1),
		p = B(v, 2),
		h = p[0],
		g = p[1],
		b = u.useState(!1),
		m = B(b, 2),
		y = m[0],
		S = m[1],
		C = u.useRef(!1),
		x = u.useRef(!1),
		w = u.useRef(!1),
		E = {
			onMouseDown: function () {
				g(!0), o(!0)
			},
			onKeyDown: function (N) {
				var O = function () {
					w.current = !0
				}
				if ((i(N, O), !w.current)) {
					switch (N.which) {
						case X.ENTER: {
							t ? s() !== !1 && g(!0) : o(!0), N.preventDefault()
							return
						}
						case X.TAB: {
							h && t && !N.shiftKey
								? (g(!1), N.preventDefault())
								: !h && t && !a(N) && N.shiftKey && (g(!0), N.preventDefault())
							return
						}
						case X.ESC: {
							g(!0), c()
							return
						}
					}
					!t && ![X.SHIFT].includes(N.which) ? o(!0) : h || a(N)
				}
			},
			onFocus: function (N) {
				g(!0), S(!0), f && f(N)
			},
			onBlur: function (N) {
				if (C.current || !r(document.activeElement)) {
					C.current = !1
					return
				}
				l
					? setTimeout(function () {
							for (var O = document, k = O.activeElement; k && k.shadowRoot; )
								k = k.shadowRoot.activeElement
							r(k) && c()
					  }, 0)
					: t && (o(!1), x.current && s()),
					S(!1),
					d && d(N)
			}
		}
	return (
		u.useEffect(
			function () {
				x.current = !1
			},
			[t]
		),
		u.useEffect(
			function () {
				x.current = !0
			},
			[n]
		),
		u.useEffect(function () {
			return KD(function (P) {
				var N = GD(P)
				if (t) {
					var O = r(N)
					O
						? (!y || O) && o(!1)
						: ((C.current = !0),
						  requestAnimationFrame(function () {
								C.current = !1
						  }))
				}
			})
		}),
		[E, { focused: y, typing: h }]
	)
}
function Ux(e, t) {
	return u.useMemo(
		function () {
			if (e) return e
			if (t) {
				En(!1, '`ranges` is deprecated. Please use `presets` instead.')
				var n = Object.keys(t)
				return n.map(function (r) {
					var o = t[r],
						a = typeof o == 'function' ? o() : o
					return { label: r, value: a }
				})
			}
			return []
		},
		[e, t]
	)
}
function Sm(e) {
	var t = e.valueTexts,
		n = e.onTextChange,
		r = u.useState(''),
		o = B(r, 2),
		a = o[0],
		i = o[1],
		l = u.useRef([])
	l.current = t
	function s(f) {
		i(f), n(f)
	}
	function c() {
		i(l.current[0])
	}
	return (
		Ft(
			function () {
				t.every(function (f) {
					return f !== a
				}) && c()
			},
			[t.join('||')]
		),
		[a, s, c]
	)
}
function o6(e) {
	var t = u.useContext(Gn),
		n = t.hideHeader
	if (n) return null
	var r = e.prefixCls,
		o = e.generateConfig,
		a = e.locale,
		i = e.value,
		l = e.format,
		s = ''.concat(r, '-header')
	return u.createElement(
		Xi,
		{ prefixCls: s },
		i ? xn(i, { locale: a, format: l, generateConfig: o }) : ' '
	)
}
function $u(e) {
	var t = e.prefixCls,
		n = e.units,
		r = e.onSelect,
		o = e.value,
		a = e.active,
		i = e.hideDisabledOptions,
		l = ''.concat(t, '-cell'),
		s = u.useContext(Gn),
		c = s.open,
		f = u.useRef(null),
		d = u.useRef(new Map()),
		v = u.useRef()
	return (
		u.useLayoutEffect(
			function () {
				var p = d.current.get(o)
				p && c !== !1 && hm(f.current, p.offsetTop, 120)
			},
			[o]
		),
		u.useLayoutEffect(
			function () {
				if (c) {
					var p = d.current.get(o)
					p &&
						(v.current = YD(p, function () {
							hm(f.current, p.offsetTop, 0)
						}))
				}
				return function () {
					var h
					;(h = v.current) === null || h === void 0 || h.call(v)
				}
			},
			[c]
		),
		u.createElement(
			'ul',
			{
				className: Z(
					''.concat(t, '-column'),
					V({}, ''.concat(t, '-column-active'), a)
				),
				ref: f,
				style: { position: 'relative' }
			},
			n.map(function (p) {
				var h
				return i && p.disabled
					? null
					: u.createElement(
							'li',
							{
								key: p.value,
								ref: function (b) {
									d.current.set(p.value, b)
								},
								className: Z(
									l,
									((h = {}),
									V(h, ''.concat(l, '-disabled'), p.disabled),
									V(h, ''.concat(l, '-selected'), o === p.value),
									h)
								),
								onClick: function () {
									p.disabled || r(p.value)
								}
							},
							u.createElement(
								'div',
								{ className: ''.concat(l, '-inner') },
								p.label
							)
					  )
			})
		)
	)
}
function Yx(e, t) {
	for (
		var n =
				arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0',
			r = String(e);
		r.length < t;

	)
		r = ''.concat(n).concat(e)
	return r
}
var a6 = function () {
	for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
		n[r] = arguments[r]
	return n
}
function Kx(e) {
	return e == null ? [] : Array.isArray(e) ? e : [e]
}
function Gx(e) {
	var t = {}
	return (
		Object.keys(e).forEach(function (n) {
			;(n.substr(0, 5) === 'data-' ||
				n.substr(0, 5) === 'aria-' ||
				n === 'role' ||
				n === 'name') &&
				n.substr(0, 7) !== 'data-__' &&
				(t[n] = e[n])
		}),
		t
	)
}
function ft(e, t) {
	return e ? e[t] : null
}
function dr(e, t, n) {
	var r = [ft(e, 0), ft(e, 1)]
	return (
		(r[n] = typeof t == 'function' ? t(r[n]) : t), !r[0] && !r[1] ? null : r
	)
}
function i6(e, t) {
	if (e.length !== t.length) return !0
	for (var n = 0; n < e.length; n += 1)
		if (e[n].disabled !== t[n].disabled) return !0
	return !1
}
function ev(e, t, n, r) {
	for (var o = [], a = e; a <= t; a += n)
		o.push({ label: Yx(a, 2), value: a, disabled: (r || []).includes(a) })
	return o
}
function l6(e) {
	var t = e.generateConfig,
		n = e.prefixCls,
		r = e.operationRef,
		o = e.activeColumnIndex,
		a = e.value,
		i = e.showHour,
		l = e.showMinute,
		s = e.showSecond,
		c = e.use12Hours,
		f = e.hourStep,
		d = f === void 0 ? 1 : f,
		v = e.minuteStep,
		p = v === void 0 ? 1 : v,
		h = e.secondStep,
		g = h === void 0 ? 1 : h,
		b = e.disabledHours,
		m = e.disabledMinutes,
		y = e.disabledSeconds,
		S = e.disabledTime,
		C = e.hideDisabledOptions,
		x = e.onSelect,
		w = [],
		E = ''.concat(n, '-content'),
		P = ''.concat(n, '-time-panel'),
		N,
		O = a ? t.getHour(a) : -1,
		k = O,
		I = a ? t.getMinute(a) : -1,
		$ = a ? t.getSecond(a) : -1,
		R = t.getNow(),
		M = u.useMemo(
			function () {
				if (S) {
					var ae = S(R)
					return [ae.disabledHours, ae.disabledMinutes, ae.disabledSeconds]
				}
				return [b, m, y]
			},
			[b, m, y, S, R]
		),
		T = B(M, 3),
		_ = T[0],
		D = T[1],
		L = T[2],
		H = function (q, de, ve, ee) {
			var fe = a || t.getNow(),
				be = Math.max(0, de),
				Me = Math.max(0, ve),
				Se = Math.max(0, ee)
			return (fe = Fx(t, fe, !c || !q ? be : be + 12, Me, Se)), fe
		},
		j = ev(0, 23, d, _ && _()),
		z = ka(
			function () {
				return j
			},
			j,
			i6
		)
	c && ((N = k >= 12), (k %= 12))
	var A = u.useMemo(
			function () {
				if (!c) return [!1, !1]
				var ae = [!0, !0]
				return (
					z.forEach(function (q) {
						var de = q.disabled,
							ve = q.value
						de || (ve >= 12 ? (ae[1] = !1) : (ae[0] = !1))
					}),
					ae
				)
			},
			[c, z]
		),
		W = B(A, 2),
		Y = W[0],
		K = W[1],
		G = u.useMemo(
			function () {
				return c
					? z
							.filter(
								N
									? function (ae) {
											return ae.value >= 12
									  }
									: function (ae) {
											return ae.value < 12
									  }
							)
							.map(function (ae) {
								var q = ae.value % 12,
									de = q === 0 ? '12' : Yx(q, 2)
								return F(F({}, ae), {}, { label: de, value: q })
							})
					: z
			},
			[c, N, z]
		),
		te = ev(0, 59, p, D && D(O)),
		ne = ev(0, 59, g, L && L(O, I))
	r.current = {
		onUpDown: function (q) {
			var de = w[o]
			if (de)
				for (
					var ve = de.units.findIndex(function (Me) {
							return Me.value === de.value
						}),
						ee = de.units.length,
						fe = 1;
					fe < ee;
					fe += 1
				) {
					var be = de.units[(ve + q * fe + ee) % ee]
					if (be.disabled !== !0) {
						de.onSelect(be.value)
						break
					}
				}
		}
	}
	function ie(ae, q, de, ve, ee) {
		ae !== !1 &&
			w.push({
				node: u.cloneElement(q, {
					prefixCls: P,
					value: de,
					active: o === w.length,
					onSelect: ee,
					units: ve,
					hideDisabledOptions: C
				}),
				onSelect: ee,
				value: de,
				units: ve
			})
	}
	ie(i, u.createElement($u, { key: 'hour' }), k, G, function (ae) {
		x(H(N, ae, I, $), 'mouse')
	}),
		ie(l, u.createElement($u, { key: 'minute' }), I, te, function (ae) {
			x(H(N, k, ae, $), 'mouse')
		}),
		ie(s, u.createElement($u, { key: 'second' }), $, ne, function (ae) {
			x(H(N, k, I, ae), 'mouse')
		})
	var le = -1
	return (
		typeof N == 'boolean' && (le = N ? 1 : 0),
		ie(
			c === !0,
			u.createElement($u, { key: '12hours' }),
			le,
			[
				{ label: 'AM', value: 0, disabled: Y },
				{ label: 'PM', value: 1, disabled: K }
			],
			function (ae) {
				x(H(!!ae, k, I, $), 'mouse')
			}
		),
		u.createElement(
			'div',
			{ className: E },
			w.map(function (ae) {
				var q = ae.node
				return q
			})
		)
	)
}
var s6 = function (t) {
	return t.filter(function (n) {
		return n !== !1
	}).length
}
function Xx(e) {
	var t = e.generateConfig,
		n = e.format,
		r = n === void 0 ? 'HH:mm:ss' : n,
		o = e.prefixCls,
		a = e.active,
		i = e.operationRef,
		l = e.showHour,
		s = e.showMinute,
		c = e.showSecond,
		f = e.use12Hours,
		d = f === void 0 ? !1 : f,
		v = e.onSelect,
		p = e.value,
		h = ''.concat(o, '-time-panel'),
		g = u.useRef(),
		b = u.useState(-1),
		m = B(b, 2),
		y = m[0],
		S = m[1],
		C = s6([l, s, c, d])
	return (
		(i.current = {
			onKeyDown: function (w) {
				return qi(w, {
					onLeftRight: function (P) {
						S((y + P + C) % C)
					},
					onUpDown: function (P) {
						y === -1 ? S(0) : g.current && g.current.onUpDown(P)
					},
					onEnter: function () {
						v(p || t.getNow(), 'key'), S(-1)
					}
				})
			},
			onBlur: function () {
				S(-1)
			}
		}),
		u.createElement(
			'div',
			{ className: Z(h, V({}, ''.concat(h, '-active'), a)) },
			u.createElement(o6, se({}, e, { format: r, prefixCls: o })),
			u.createElement(
				l6,
				se({}, e, { prefixCls: o, activeColumnIndex: y, operationRef: g })
			)
		)
	)
}
function Td(e) {
	var t = e.cellPrefixCls,
		n = e.generateConfig,
		r = e.rangedValue,
		o = e.hoverRangedValue,
		a = e.isInView,
		i = e.isSameCell,
		l = e.offsetCell,
		s = e.today,
		c = e.value
	function f(d) {
		var v,
			p = l(d, -1),
			h = l(d, 1),
			g = ft(r, 0),
			b = ft(r, 1),
			m = ft(o, 0),
			y = ft(o, 1),
			S = $l(n, m, y, d)
		function C(O) {
			return i(g, O)
		}
		function x(O) {
			return i(b, O)
		}
		var w = i(m, d),
			E = i(y, d),
			P = (S || E) && (!a(p) || x(p)),
			N = (S || w) && (!a(h) || C(h))
		return (
			(v = {}),
			V(v, ''.concat(t, '-in-view'), a(d)),
			V(v, ''.concat(t, '-in-range'), $l(n, g, b, d)),
			V(v, ''.concat(t, '-range-start'), C(d)),
			V(v, ''.concat(t, '-range-end'), x(d)),
			V(v, ''.concat(t, '-range-start-single'), C(d) && !b),
			V(v, ''.concat(t, '-range-end-single'), x(d) && !g),
			V(
				v,
				''.concat(t, '-range-start-near-hover'),
				C(d) && (i(p, m) || $l(n, m, y, p))
			),
			V(
				v,
				''.concat(t, '-range-end-near-hover'),
				x(d) && (i(h, y) || $l(n, m, y, h))
			),
			V(v, ''.concat(t, '-range-hover'), S),
			V(v, ''.concat(t, '-range-hover-start'), w),
			V(v, ''.concat(t, '-range-hover-end'), E),
			V(v, ''.concat(t, '-range-hover-edge-start'), P),
			V(v, ''.concat(t, '-range-hover-edge-end'), N),
			V(v, ''.concat(t, '-range-hover-edge-start-near-range'), P && i(p, b)),
			V(v, ''.concat(t, '-range-hover-edge-end-near-range'), N && i(h, g)),
			V(v, ''.concat(t, '-today'), i(s, d)),
			V(v, ''.concat(t, '-selected'), i(c, d)),
			v
		)
	}
	return f
}
var Fa = u.createContext({})
function u6(e) {
	var t = e.prefixCls,
		n = e.generateConfig,
		r = e.prefixColumn,
		o = e.locale,
		a = e.rowCount,
		i = e.viewDate,
		l = e.value,
		s = e.dateRender,
		c = e.isSameCell,
		f = u.useContext(Fa),
		d = f.rangedValue,
		v = f.hoverRangedValue,
		p = r6(o.locale, n, i),
		h = ''.concat(t, '-cell'),
		g = n.locale.getWeekFirstDay(o.locale),
		b = n.getNow(),
		m = [],
		y =
			o.shortWeekDays ||
			(n.locale.getShortWeekDays ? n.locale.getShortWeekDays(o.locale) : [])
	r &&
		m.push(u.createElement('th', { key: 'empty', 'aria-label': 'empty cell' }))
	for (var S = 0; S < Wu; S += 1)
		m.push(u.createElement('th', { key: S }, y[(S + g) % Wu]))
	var C = Td({
			cellPrefixCls: h,
			today: b,
			value: l,
			generateConfig: n,
			rangedValue: r ? null : d,
			hoverRangedValue: r ? null : v,
			isSameCell:
				c ||
				function (w, E) {
					return io(n, w, E)
				},
			isInView: function (E) {
				return hg(n, E, i)
			},
			offsetCell: function (E, P) {
				return n.addDate(E, P)
			}
		}),
		x = s
			? function (w) {
					return s(w, b)
			  }
			: void 0
	return u.createElement(
		_s,
		se({}, e, {
			rowNum: a,
			colNum: Wu,
			baseDate: p,
			getCellNode: x,
			getCellText: n.getDate,
			getCellClassName: C,
			getCellDate: n.addDate,
			titleCell: function (E) {
				return xn(E, { locale: o, format: 'YYYY-MM-DD', generateConfig: n })
			},
			headerCells: m
		})
	)
}
function c6(e) {
	var t = e.prefixCls,
		n = e.generateConfig,
		r = e.locale,
		o = e.viewDate,
		a = e.onNextMonth,
		i = e.onPrevMonth,
		l = e.onNextYear,
		s = e.onPrevYear,
		c = e.onYearClick,
		f = e.onMonthClick,
		d = u.useContext(Gn),
		v = d.hideHeader
	if (v) return null
	var p = ''.concat(t, '-header'),
		h =
			r.shortMonths ||
			(n.locale.getShortMonths ? n.locale.getShortMonths(r.locale) : []),
		g = n.getMonth(o),
		b = u.createElement(
			'button',
			{
				type: 'button',
				key: 'year',
				onClick: c,
				tabIndex: -1,
				className: ''.concat(t, '-year-btn')
			},
			xn(o, { locale: r, format: r.yearFormat, generateConfig: n })
		),
		m = u.createElement(
			'button',
			{
				type: 'button',
				key: 'month',
				onClick: f,
				tabIndex: -1,
				className: ''.concat(t, '-month-btn')
			},
			r.monthFormat
				? xn(o, { locale: r, format: r.monthFormat, generateConfig: n })
				: h[g]
		),
		y = r.monthBeforeYear ? [m, b] : [b, m]
	return u.createElement(
		Xi,
		se({}, e, {
			prefixCls: p,
			onSuperPrev: s,
			onPrev: i,
			onNext: a,
			onSuperNext: l
		}),
		y
	)
}
var d6 = 6
function gg(e) {
	var t = e.prefixCls,
		n = e.panelName,
		r = n === void 0 ? 'date' : n,
		o = e.keyboardConfig,
		a = e.active,
		i = e.operationRef,
		l = e.generateConfig,
		s = e.value,
		c = e.viewDate,
		f = e.onViewDateChange,
		d = e.onPanelChange,
		v = e.onSelect,
		p = ''.concat(t, '-').concat(r, '-panel')
	i.current = {
		onKeyDown: function (m) {
			return qi(
				m,
				F(
					{
						onLeftRight: function (S) {
							v(l.addDate(s || c, S), 'key')
						},
						onCtrlLeftRight: function (S) {
							v(l.addYear(s || c, S), 'key')
						},
						onUpDown: function (S) {
							v(l.addDate(s || c, S * Wu), 'key')
						},
						onPageUpDown: function (S) {
							v(l.addMonth(s || c, S), 'key')
						}
					},
					o
				)
			)
		}
	}
	var h = function (m) {
			var y = l.addYear(c, m)
			f(y), d(null, y)
		},
		g = function (m) {
			var y = l.addMonth(c, m)
			f(y), d(null, y)
		}
	return u.createElement(
		'div',
		{ className: Z(p, V({}, ''.concat(p, '-active'), a)) },
		u.createElement(
			c6,
			se({}, e, {
				prefixCls: t,
				value: s,
				viewDate: c,
				onPrevYear: function () {
					h(-1)
				},
				onNextYear: function () {
					h(1)
				},
				onPrevMonth: function () {
					g(-1)
				},
				onNextMonth: function () {
					g(1)
				},
				onMonthClick: function () {
					d('month', c)
				},
				onYearClick: function () {
					d('year', c)
				}
			})
		),
		u.createElement(
			u6,
			se({}, e, {
				onSelect: function (m) {
					return v(m, 'mouse')
				},
				prefixCls: t,
				value: s,
				viewDate: c,
				rowCount: d6
			})
		)
	)
}
var k1 = a6('date', 'time')
function f6(e) {
	var t = e.prefixCls,
		n = e.operationRef,
		r = e.generateConfig,
		o = e.value,
		a = e.defaultValue,
		i = e.disabledTime,
		l = e.showTime,
		s = e.onSelect,
		c = ''.concat(t, '-datetime-panel'),
		f = u.useState(null),
		d = B(f, 2),
		v = d[0],
		p = d[1],
		h = u.useRef({}),
		g = u.useRef({}),
		b = Ze(l) === 'object' ? F({}, l) : {}
	function m(x) {
		var w = k1.indexOf(v) + x,
			E = k1[w] || null
		return E
	}
	var y = function (w) {
		g.current.onBlur && g.current.onBlur(w), p(null)
	}
	n.current = {
		onKeyDown: function (w) {
			if (w.which === X.TAB) {
				var E = m(w.shiftKey ? -1 : 1)
				return p(E), E && w.preventDefault(), !0
			}
			if (v) {
				var P = v === 'date' ? h : g
				return P.current && P.current.onKeyDown && P.current.onKeyDown(w), !0
			}
			return [X.LEFT, X.RIGHT, X.UP, X.DOWN].includes(w.which)
				? (p('date'), !0)
				: !1
		},
		onBlur: y,
		onClose: y
	}
	var S = function (w, E) {
			var P = w
			E === 'date' && !o && b.defaultValue
				? ((P = r.setHour(P, r.getHour(b.defaultValue))),
				  (P = r.setMinute(P, r.getMinute(b.defaultValue))),
				  (P = r.setSecond(P, r.getSecond(b.defaultValue))))
				: E === 'time' &&
				  !o &&
				  a &&
				  ((P = r.setYear(P, r.getYear(a))),
				  (P = r.setMonth(P, r.getMonth(a))),
				  (P = r.setDate(P, r.getDate(a)))),
				s && s(P, 'mouse')
		},
		C = i ? i(o || null) : {}
	return u.createElement(
		'div',
		{ className: Z(c, V({}, ''.concat(c, '-active'), v)) },
		u.createElement(
			gg,
			se({}, e, {
				operationRef: h,
				active: v === 'date',
				onSelect: function (w) {
					S(zx(r, w, !o && Ze(l) === 'object' ? l.defaultValue : null), 'date')
				}
			})
		),
		u.createElement(
			Xx,
			se({}, e, { format: void 0 }, b, C, {
				disabledTime: null,
				defaultValue: void 0,
				operationRef: g,
				active: v === 'time',
				onSelect: function (w) {
					S(w, 'time')
				}
			})
		)
	)
}
function v6(e) {
	var t = e.prefixCls,
		n = e.generateConfig,
		r = e.locale,
		o = e.value,
		a = e.disabledDate,
		i = e.onSelect,
		l = u.useContext(Fa),
		s = l.rangedValue,
		c = l.hoverRangedValue,
		f = u.useContext(Gn),
		d = f.onDateMouseEnter,
		v = f.onDateMouseLeave,
		p = (c == null ? void 0 : c[0]) || (s == null ? void 0 : s[0]),
		h = (c == null ? void 0 : c[1]) || (s == null ? void 0 : s[1]),
		g = ''.concat(t, '-cell'),
		b = function (C) {
			var x = Ac({
				cellDate: C,
				mode: 'week',
				disabledDate: a,
				generateConfig: n
			})
			return u.createElement(
				'td',
				{
					key: 'week',
					className: Z(g, ''.concat(g, '-week')),
					onClick: function () {
						x || i(C, 'mouse')
					},
					onMouseEnter: function () {
						!x && d && d(C)
					},
					onMouseLeave: function () {
						!x && v && v(C)
					}
				},
				u.createElement(
					'div',
					{ className: ''.concat(g, '-inner') },
					n.locale.getWeek(r.locale, C)
				)
			)
		},
		m = ''.concat(t, '-week-panel-row'),
		y = function (C) {
			var x,
				w = Uu(n, r.locale, p, C),
				E = Uu(n, r.locale, h, C)
			return Z(
				m,
				((x = {}),
				V(x, ''.concat(m, '-selected'), !s && Uu(n, r.locale, o, C)),
				V(x, ''.concat(m, '-range-start'), w),
				V(x, ''.concat(m, '-range-end'), E),
				V(x, ''.concat(m, '-range-hover'), !w && !E && $l(n, p, h, C)),
				x)
			)
		}
	return u.createElement(
		gg,
		se({}, e, {
			panelName: 'week',
			prefixColumn: b,
			rowClassName: y,
			keyboardConfig: { onLeftRight: null },
			isSameCell: function () {
				return !1
			}
		})
	)
}
function p6(e) {
	var t = e.prefixCls,
		n = e.generateConfig,
		r = e.locale,
		o = e.viewDate,
		a = e.onNextYear,
		i = e.onPrevYear,
		l = e.onYearClick,
		s = u.useContext(Gn),
		c = s.hideHeader
	if (c) return null
	var f = ''.concat(t, '-header')
	return u.createElement(
		Xi,
		se({}, e, { prefixCls: f, onSuperPrev: i, onSuperNext: a }),
		u.createElement(
			'button',
			{ type: 'button', onClick: l, className: ''.concat(t, '-year-btn') },
			xn(o, { locale: r, format: r.yearFormat, generateConfig: n })
		)
	)
}
var qx = 3,
	m6 = 4
function h6(e) {
	var t = e.prefixCls,
		n = e.locale,
		r = e.value,
		o = e.viewDate,
		a = e.generateConfig,
		i = e.monthCellRender,
		l = u.useContext(Fa),
		s = l.rangedValue,
		c = l.hoverRangedValue,
		f = ''.concat(t, '-cell'),
		d = Td({
			cellPrefixCls: f,
			value: r,
			generateConfig: a,
			rangedValue: s,
			hoverRangedValue: c,
			isSameCell: function (b, m) {
				return hg(a, b, m)
			},
			isInView: function () {
				return !0
			},
			offsetCell: function (b, m) {
				return a.addMonth(b, m)
			}
		}),
		v =
			n.shortMonths ||
			(a.locale.getShortMonths ? a.locale.getShortMonths(n.locale) : []),
		p = a.setMonth(o, 0),
		h = i
			? function (g) {
					return i(g, n)
			  }
			: void 0
	return u.createElement(
		_s,
		se({}, e, {
			rowNum: m6,
			colNum: qx,
			baseDate: p,
			getCellNode: h,
			getCellText: function (b) {
				return n.monthFormat
					? xn(b, { locale: n, format: n.monthFormat, generateConfig: a })
					: v[a.getMonth(b)]
			},
			getCellClassName: d,
			getCellDate: a.addMonth,
			titleCell: function (b) {
				return xn(b, { locale: n, format: 'YYYY-MM', generateConfig: a })
			}
		})
	)
}
function g6(e) {
	var t = e.prefixCls,
		n = e.operationRef,
		r = e.onViewDateChange,
		o = e.generateConfig,
		a = e.value,
		i = e.viewDate,
		l = e.onPanelChange,
		s = e.onSelect,
		c = ''.concat(t, '-month-panel')
	n.current = {
		onKeyDown: function (v) {
			return qi(v, {
				onLeftRight: function (h) {
					s(o.addMonth(a || i, h), 'key')
				},
				onCtrlLeftRight: function (h) {
					s(o.addYear(a || i, h), 'key')
				},
				onUpDown: function (h) {
					s(o.addMonth(a || i, h * qx), 'key')
				},
				onEnter: function () {
					l('date', a || i)
				}
			})
		}
	}
	var f = function (v) {
		var p = o.addYear(i, v)
		r(p), l(null, p)
	}
	return u.createElement(
		'div',
		{ className: c },
		u.createElement(
			p6,
			se({}, e, {
				prefixCls: t,
				onPrevYear: function () {
					f(-1)
				},
				onNextYear: function () {
					f(1)
				},
				onYearClick: function () {
					l('year', i)
				}
			})
		),
		u.createElement(
			h6,
			se({}, e, {
				prefixCls: t,
				onSelect: function (v) {
					s(v, 'mouse'), l('date', v)
				}
			})
		)
	)
}
function y6(e) {
	var t = e.prefixCls,
		n = e.generateConfig,
		r = e.locale,
		o = e.viewDate,
		a = e.onNextYear,
		i = e.onPrevYear,
		l = e.onYearClick,
		s = u.useContext(Gn),
		c = s.hideHeader
	if (c) return null
	var f = ''.concat(t, '-header')
	return u.createElement(
		Xi,
		se({}, e, { prefixCls: f, onSuperPrev: i, onSuperNext: a }),
		u.createElement(
			'button',
			{ type: 'button', onClick: l, className: ''.concat(t, '-year-btn') },
			xn(o, { locale: r, format: r.yearFormat, generateConfig: n })
		)
	)
}
var b6 = 4,
	S6 = 1
function C6(e) {
	var t = e.prefixCls,
		n = e.locale,
		r = e.value,
		o = e.viewDate,
		a = e.generateConfig,
		i = u.useContext(Fa),
		l = i.rangedValue,
		s = i.hoverRangedValue,
		c = ''.concat(t, '-cell'),
		f = Td({
			cellPrefixCls: c,
			value: r,
			generateConfig: a,
			rangedValue: l,
			hoverRangedValue: s,
			isSameCell: function (p, h) {
				return Bx(a, p, h)
			},
			isInView: function () {
				return !0
			},
			offsetCell: function (p, h) {
				return a.addMonth(p, h * 3)
			}
		}),
		d = a.setDate(a.setMonth(o, 0), 1)
	return u.createElement(
		_s,
		se({}, e, {
			rowNum: S6,
			colNum: b6,
			baseDate: d,
			getCellText: function (p) {
				return xn(p, {
					locale: n,
					format: n.quarterFormat || '[Q]Q',
					generateConfig: a
				})
			},
			getCellClassName: f,
			getCellDate: function (p, h) {
				return a.addMonth(p, h * 3)
			},
			titleCell: function (p) {
				return xn(p, { locale: n, format: 'YYYY-[Q]Q', generateConfig: a })
			}
		})
	)
}
function w6(e) {
	var t = e.prefixCls,
		n = e.operationRef,
		r = e.onViewDateChange,
		o = e.generateConfig,
		a = e.value,
		i = e.viewDate,
		l = e.onPanelChange,
		s = e.onSelect,
		c = ''.concat(t, '-quarter-panel')
	n.current = {
		onKeyDown: function (v) {
			return qi(v, {
				onLeftRight: function (h) {
					s(o.addMonth(a || i, h * 3), 'key')
				},
				onCtrlLeftRight: function (h) {
					s(o.addYear(a || i, h), 'key')
				},
				onUpDown: function (h) {
					s(o.addYear(a || i, h), 'key')
				}
			})
		}
	}
	var f = function (v) {
		var p = o.addYear(i, v)
		r(p), l(null, p)
	}
	return u.createElement(
		'div',
		{ className: c },
		u.createElement(
			y6,
			se({}, e, {
				prefixCls: t,
				onPrevYear: function () {
					f(-1)
				},
				onNextYear: function () {
					f(1)
				},
				onYearClick: function () {
					l('year', i)
				}
			})
		),
		u.createElement(
			C6,
			se({}, e, {
				prefixCls: t,
				onSelect: function (v) {
					s(v, 'mouse')
				}
			})
		)
	)
}
function x6(e) {
	var t = e.prefixCls,
		n = e.generateConfig,
		r = e.viewDate,
		o = e.onPrevDecade,
		a = e.onNextDecade,
		i = e.onDecadeClick,
		l = u.useContext(Gn),
		s = l.hideHeader
	if (s) return null
	var c = ''.concat(t, '-header'),
		f = n.getYear(r),
		d = Math.floor(f / Fo) * Fo,
		v = d + Fo - 1
	return u.createElement(
		Xi,
		se({}, e, { prefixCls: c, onSuperPrev: o, onSuperNext: a }),
		u.createElement(
			'button',
			{ type: 'button', onClick: i, className: ''.concat(t, '-decade-btn') },
			d,
			'-',
			v
		)
	)
}
var Cm = 3,
	T1 = 4
function E6(e) {
	var t = e.prefixCls,
		n = e.value,
		r = e.viewDate,
		o = e.locale,
		a = e.generateConfig,
		i = u.useContext(Fa),
		l = i.rangedValue,
		s = i.hoverRangedValue,
		c = ''.concat(t, '-cell'),
		f = a.getYear(r),
		d = Math.floor(f / Fo) * Fo,
		v = d + Fo - 1,
		p = a.setYear(r, d - Math.ceil((Cm * T1 - Fo) / 2)),
		h = function (m) {
			var y = a.getYear(m)
			return d <= y && y <= v
		},
		g = Td({
			cellPrefixCls: c,
			value: n,
			generateConfig: a,
			rangedValue: l,
			hoverRangedValue: s,
			isSameCell: function (m, y) {
				return kd(a, m, y)
			},
			isInView: h,
			offsetCell: function (m, y) {
				return a.addYear(m, y)
			}
		})
	return u.createElement(
		_s,
		se({}, e, {
			rowNum: T1,
			colNum: Cm,
			baseDate: p,
			getCellText: a.getYear,
			getCellClassName: g,
			getCellDate: a.addYear,
			titleCell: function (m) {
				return xn(m, { locale: o, format: 'YYYY', generateConfig: a })
			}
		})
	)
}
var Fo = 10
function $6(e) {
	var t = e.prefixCls,
		n = e.operationRef,
		r = e.onViewDateChange,
		o = e.generateConfig,
		a = e.value,
		i = e.viewDate,
		l = e.sourceMode,
		s = e.onSelect,
		c = e.onPanelChange,
		f = ''.concat(t, '-year-panel')
	n.current = {
		onKeyDown: function (p) {
			return qi(p, {
				onLeftRight: function (g) {
					s(o.addYear(a || i, g), 'key')
				},
				onCtrlLeftRight: function (g) {
					s(o.addYear(a || i, g * Fo), 'key')
				},
				onUpDown: function (g) {
					s(o.addYear(a || i, g * Cm), 'key')
				},
				onEnter: function () {
					c(l === 'date' ? 'date' : 'month', a || i)
				}
			})
		}
	}
	var d = function (p) {
		var h = o.addYear(i, p * 10)
		r(h), c(null, h)
	}
	return u.createElement(
		'div',
		{ className: f },
		u.createElement(
			x6,
			se({}, e, {
				prefixCls: t,
				onPrevDecade: function () {
					d(-1)
				},
				onNextDecade: function () {
					d(1)
				},
				onDecadeClick: function () {
					c('decade', i)
				}
			})
		),
		u.createElement(
			E6,
			se({}, e, {
				prefixCls: t,
				onSelect: function (p) {
					c(l === 'date' ? 'date' : 'month', p), s(p, 'mouse')
				}
			})
		)
	)
}
function Qx(e, t, n) {
	return n
		? u.createElement('div', { className: ''.concat(e, '-footer-extra') }, n(t))
		: null
}
function Zx(e) {
	var t = e.prefixCls,
		n = e.components,
		r = n === void 0 ? {} : n,
		o = e.needConfirmButton,
		a = e.onNow,
		i = e.onOk,
		l = e.okDisabled,
		s = e.showNow,
		c = e.locale,
		f,
		d
	if (o) {
		var v = r.button || 'button'
		a &&
			s !== !1 &&
			(f = u.createElement(
				'li',
				{ className: ''.concat(t, '-now') },
				u.createElement(
					'a',
					{ className: ''.concat(t, '-now-btn'), onClick: a },
					c.now
				)
			)),
			(d =
				o &&
				u.createElement(
					'li',
					{ className: ''.concat(t, '-ok') },
					u.createElement(v, { disabled: l, onClick: i }, c.ok)
				))
	}
	return !f && !d
		? null
		: u.createElement('ul', { className: ''.concat(t, '-ranges') }, f, d)
}
function Jx(e) {
	var t,
		n = e,
		r = n.prefixCls,
		o = r === void 0 ? 'rc-picker' : r,
		a = n.className,
		i = n.style,
		l = n.locale,
		s = n.generateConfig,
		c = n.value,
		f = n.defaultValue,
		d = n.pickerValue,
		v = n.defaultPickerValue,
		p = n.disabledDate,
		h = n.mode,
		g = n.picker,
		b = g === void 0 ? 'date' : g,
		m = n.tabIndex,
		y = m === void 0 ? 0 : m,
		S = n.showNow,
		C = n.showTime,
		x = n.showToday,
		w = n.renderExtraFooter,
		E = n.hideHeader,
		P = n.onSelect,
		N = n.onChange,
		O = n.onPanelChange,
		k = n.onMouseDown,
		I = n.onPickerValueChange,
		$ = n.onOk,
		R = n.components,
		M = n.direction,
		T = n.hourStep,
		_ = T === void 0 ? 1 : T,
		D = n.minuteStep,
		L = D === void 0 ? 1 : D,
		H = n.secondStep,
		j = H === void 0 ? 1 : H,
		z = (b === 'date' && !!C) || b === 'time',
		A = 24 % _ === 0,
		W = 60 % L === 0,
		Y = 60 % j === 0,
		K = u.useContext(Gn),
		G = K.operationRef,
		te = K.onSelect,
		ne = K.hideRanges,
		ie = K.defaultOpenValue,
		le = u.useContext(Fa),
		ae = le.inRange,
		q = le.panelPosition,
		de = le.rangedValue,
		ve = le.hoverRangedValue,
		ee = u.useRef({}),
		fe = u.useRef(!0),
		be = Kt(null, {
			value: c,
			defaultValue: f,
			postState: function (Q) {
				return !Q && ie && b === 'time' ? ie : Q
			}
		}),
		Me = B(be, 2),
		Se = Me[0],
		Le = Me[1],
		lt = Kt(null, {
			value: d,
			defaultValue: v || Se,
			postState: function (Q) {
				var me = s.getNow()
				if (!Q) return me
				if (!Se && C) {
					var Ve = Ze(C) === 'object' ? C.defaultValue : f
					return zx(s, Array.isArray(Q) ? Q[0] : Q, Ve || me)
				}
				return Array.isArray(Q) ? Q[0] : Q
			}
		}),
		et = B(lt, 2),
		Xe = et[0],
		ze = et[1],
		we = function (Q) {
			ze(Q), I && I(Q)
		},
		ct = function (Q) {
			var me = JD[b]
			return me ? me(Q) : Q
		},
		He = Kt(
			function () {
				return b === 'time' ? 'time' : ct('date')
			},
			{ value: h }
		),
		Pe = B(He, 2),
		pe = Pe[0],
		_e = Pe[1]
	u.useEffect(
		function () {
			_e(b)
		},
		[b]
	)
	var tt = u.useState(function () {
			return pe
		}),
		Ce = B(tt, 2),
		$e = Ce[0],
		Oe = Ce[1],
		qe = function (Q, me) {
			var Ve = ct(Q || pe)
			Oe(pe), _e(Ve), O && (pe !== Ve || Fi(s, Xe, Xe)) && O(me, Ve)
		},
		Ue = function (Q, me) {
			var Ve =
				arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
			;(pe === b || Ve) &&
				(Le(Q),
				P && P(Q),
				te && te(Q, me),
				N && !Fi(s, Q, Se) && !(p != null && p(Q)) && N(Q))
		},
		at = function (Q) {
			return ee.current && ee.current.onKeyDown
				? ([
						X.LEFT,
						X.RIGHT,
						X.UP,
						X.DOWN,
						X.PAGE_UP,
						X.PAGE_DOWN,
						X.ENTER
				  ].includes(Q.which) && Q.preventDefault(),
				  ee.current.onKeyDown(Q))
				: (En(
						!1,
						'Panel not correct handle keyDown event. Please help to fire issue about this.'
				  ),
				  !1)
		},
		Ae = function (Q) {
			ee.current && ee.current.onBlur && ee.current.onBlur(Q)
		}
	G &&
		q !== 'right' &&
		(G.current = {
			onKeyDown: at,
			onClose: function () {
				ee.current && ee.current.onClose && ee.current.onClose()
			}
		}),
		u.useEffect(
			function () {
				c && !fe.current && ze(c)
			},
			[c]
		),
		u.useEffect(function () {
			fe.current = !1
		}, [])
	var bt,
		Fe = F(
			F({}, e),
			{},
			{
				operationRef: ee,
				prefixCls: o,
				viewDate: Xe,
				value: Se,
				onViewDateChange: we,
				sourceMode: $e,
				onPanelChange: qe,
				disabledDate: p
			}
		)
	switch ((delete Fe.onChange, delete Fe.onSelect, pe)) {
		case 'decade':
			bt = u.createElement(
				e6,
				se({}, Fe, {
					onSelect: function (Q, me) {
						we(Q), Ue(Q, me)
					}
				})
			)
			break
		case 'year':
			bt = u.createElement(
				$6,
				se({}, Fe, {
					onSelect: function (Q, me) {
						we(Q), Ue(Q, me)
					}
				})
			)
			break
		case 'month':
			bt = u.createElement(
				g6,
				se({}, Fe, {
					onSelect: function (Q, me) {
						we(Q), Ue(Q, me)
					}
				})
			)
			break
		case 'quarter':
			bt = u.createElement(
				w6,
				se({}, Fe, {
					onSelect: function (Q, me) {
						we(Q), Ue(Q, me)
					}
				})
			)
			break
		case 'week':
			bt = u.createElement(
				v6,
				se({}, Fe, {
					onSelect: function (Q, me) {
						we(Q), Ue(Q, me)
					}
				})
			)
			break
		case 'time':
			delete Fe.showTime,
				(bt = u.createElement(
					Xx,
					se({}, Fe, Ze(C) === 'object' ? C : null, {
						onSelect: function (Q, me) {
							we(Q), Ue(Q, me)
						}
					})
				))
			break
		default:
			C
				? (bt = u.createElement(
						f6,
						se({}, Fe, {
							onSelect: function (Q, me) {
								we(Q), Ue(Q, me)
							}
						})
				  ))
				: (bt = u.createElement(
						gg,
						se({}, Fe, {
							onSelect: function (Q, me) {
								we(Q), Ue(Q, me)
							}
						})
				  ))
	}
	var ye,
		it,
		Ye = function () {
			var Q = s.getNow(),
				me = BD(
					s.getHour(Q),
					s.getMinute(Q),
					s.getSecond(Q),
					A ? _ : 1,
					W ? L : 1,
					Y ? j : 1
				),
				Ve = Fx(s, Q, me[0], me[1], me[2])
			Ue(Ve, 'submit')
		}
	ne ||
		((ye = Qx(o, pe, w)),
		(it = Zx({
			prefixCls: o,
			components: R,
			needConfirmButton: z,
			okDisabled: !Se || (p && p(Se)),
			locale: l,
			showNow: S,
			onNow: z && Ye,
			onOk: function () {
				Se && (Ue(Se, 'submit', !0), $ && $(Se))
			}
		})))
	var Ne
	if (x && pe === 'date' && b === 'date' && !C) {
		var nt = s.getNow(),
			J = ''.concat(o, '-today-btn'),
			oe = p && p(nt)
		Ne = u.createElement(
			'a',
			{
				className: Z(J, oe && ''.concat(J, '-disabled')),
				'aria-disabled': oe,
				onClick: function () {
					oe || Ue(nt, 'mouse', !0)
				}
			},
			l.today
		)
	}
	return u.createElement(
		Gn.Provider,
		{
			value: F(
				F({}, K),
				{},
				{
					mode: pe,
					hideHeader: 'hideHeader' in e ? E : K.hideHeader,
					hidePrevBtn: ae && q === 'right',
					hideNextBtn: ae && q === 'left'
				}
			)
		},
		u.createElement(
			'div',
			{
				tabIndex: y,
				className: Z(
					''.concat(o, '-panel'),
					a,
					((t = {}),
					V(t, ''.concat(o, '-panel-has-range'), de && de[0] && de[1]),
					V(t, ''.concat(o, '-panel-has-range-hover'), ve && ve[0] && ve[1]),
					V(t, ''.concat(o, '-panel-rtl'), M === 'rtl'),
					t)
				),
				style: i,
				onKeyDown: at,
				onBlur: Ae,
				onMouseDown: k
			},
			bt,
			ye || it || Ne
				? u.createElement(
						'div',
						{ className: ''.concat(o, '-footer') },
						ye,
						it,
						Ne
				  )
				: null
		)
	)
}
var P6 = {
	bottomLeft: {
		points: ['tl', 'bl'],
		offset: [0, 4],
		overflow: { adjustX: 1, adjustY: 1 }
	},
	bottomRight: {
		points: ['tr', 'br'],
		offset: [0, 4],
		overflow: { adjustX: 1, adjustY: 1 }
	},
	topLeft: {
		points: ['bl', 'tl'],
		offset: [0, -4],
		overflow: { adjustX: 0, adjustY: 1 }
	},
	topRight: {
		points: ['br', 'tr'],
		offset: [0, -4],
		overflow: { adjustX: 0, adjustY: 1 }
	}
}
function eE(e) {
	var t,
		n = e.prefixCls,
		r = e.popupElement,
		o = e.popupStyle,
		a = e.visible,
		i = e.dropdownClassName,
		l = e.dropdownAlign,
		s = e.transitionName,
		c = e.getPopupContainer,
		f = e.children,
		d = e.range,
		v = e.popupPlacement,
		p = e.direction,
		h = ''.concat(n, '-dropdown'),
		g = function () {
			return v !== void 0 ? v : p === 'rtl' ? 'bottomRight' : 'bottomLeft'
		}
	return u.createElement(
		Uw,
		{
			showAction: [],
			hideAction: [],
			popupPlacement: g(),
			builtinPlacements: P6,
			prefixCls: h,
			popupTransitionName: s,
			popup: r,
			popupAlign: l,
			popupVisible: a,
			popupClassName: Z(
				i,
				((t = {}),
				V(t, ''.concat(h, '-range'), d),
				V(t, ''.concat(h, '-rtl'), p === 'rtl'),
				t)
			),
			popupStyle: o,
			getPopupContainer: c
		},
		f
	)
}
function tE(e) {
	var t = e.prefixCls,
		n = e.presets,
		r = e.onClick,
		o = e.onHover
	return n.length
		? u.createElement(
				'div',
				{ className: ''.concat(t, '-presets') },
				u.createElement(
					'ul',
					null,
					n.map(function (a, i) {
						var l = a.label,
							s = a.value
						return u.createElement(
							'li',
							{
								key: i,
								onClick: function () {
									r(s)
								},
								onMouseEnter: function () {
									o == null || o(s)
								},
								onMouseLeave: function () {
									o == null || o(null)
								}
							},
							l
						)
					})
				)
		  )
		: null
}
function R6(e) {
	var t,
		n = e,
		r = n.prefixCls,
		o = r === void 0 ? 'rc-picker' : r,
		a = n.id,
		i = n.tabIndex,
		l = n.style,
		s = n.className,
		c = n.dropdownClassName,
		f = n.dropdownAlign,
		d = n.popupStyle,
		v = n.transitionName,
		p = n.generateConfig,
		h = n.locale,
		g = n.inputReadOnly,
		b = n.allowClear,
		m = n.autoFocus,
		y = n.showTime,
		S = n.picker,
		C = S === void 0 ? 'date' : S,
		x = n.format,
		w = n.use12Hours,
		E = n.value,
		P = n.defaultValue,
		N = n.presets,
		O = n.open,
		k = n.defaultOpen,
		I = n.defaultOpenValue,
		$ = n.suffixIcon,
		R = n.clearIcon,
		M = n.disabled,
		T = n.disabledDate,
		_ = n.placeholder,
		D = n.getPopupContainer,
		L = n.pickerRef,
		H = n.panelRender,
		j = n.onChange,
		z = n.onOpenChange,
		A = n.onFocus,
		W = n.onBlur,
		Y = n.onMouseDown,
		K = n.onMouseUp,
		G = n.onMouseEnter,
		te = n.onMouseLeave,
		ne = n.onContextMenu,
		ie = n.onClick,
		le = n.onKeyDown,
		ae = n.onSelect,
		q = n.direction,
		de = n.autoComplete,
		ve = de === void 0 ? 'off' : de,
		ee = n.inputRender,
		fe = u.useRef(null),
		be = (C === 'date' && !!y) || C === 'time',
		Me = Ux(N),
		Se = Kx(Hx(x, C, y, w)),
		Le = u.useRef(null),
		lt = u.useRef(null),
		et = u.useRef(null),
		Xe = Kt(null, { value: E, defaultValue: P }),
		ze = B(Xe, 2),
		we = ze[0],
		ct = ze[1],
		He = u.useState(we),
		Pe = B(He, 2),
		pe = Pe[0],
		_e = Pe[1],
		tt = u.useRef(null),
		Ce = Kt(!1, {
			value: O,
			defaultValue: k,
			postState: function (Re) {
				return M ? !1 : Re
			},
			onChange: function (Re) {
				z && z(Re),
					!Re && tt.current && tt.current.onClose && tt.current.onClose()
			}
		}),
		$e = B(Ce, 2),
		Oe = $e[0],
		qe = $e[1],
		Ue = Fc(pe, { formatList: Se, generateConfig: p, locale: h }),
		at = B(Ue, 2),
		Ae = at[0],
		bt = at[1],
		Fe = Sm({
			valueTexts: Ae,
			onTextChange: function (Re) {
				var Wt = Wx(Re, { locale: h, formatList: Se, generateConfig: p })
				Wt && (!T || !T(Wt)) && _e(Wt)
			}
		}),
		ye = B(Fe, 3),
		it = ye[0],
		Ye = ye[1],
		Ne = ye[2],
		nt = function (Re) {
			_e(Re),
				ct(Re),
				j &&
					!Fi(p, we, Re) &&
					j(
						Re,
						Re ? xn(Re, { generateConfig: p, locale: h, format: Se[0] }) : ''
					)
		},
		J = function (Re) {
			;(M && Re) || qe(Re)
		},
		oe = function (Re) {
			return Oe && tt.current && tt.current.onKeyDown
				? tt.current.onKeyDown(Re)
				: (En(
						!1,
						'Picker not correct forward KeyDown operation. Please help to fire issue about this.'
				  ),
				  !1)
		},
		re = function () {
			for (var Re = arguments.length, Wt = new Array(Re), fn = 0; fn < Re; fn++)
				Wt[fn] = arguments[fn]
			ie == null || ie.apply(void 0, Wt),
				fe.current && (fe.current.focus(), J(!0))
		},
		Q = bm({
			blurToCancel: be,
			open: Oe,
			value: it,
			triggerOpen: J,
			forwardKeyDown: oe,
			isClickOutside: function (Re) {
				return !jx([Le.current, lt.current, et.current], Re)
			},
			onSubmit: function () {
				return !pe || (T && T(pe)) ? !1 : (nt(pe), J(!1), Ne(), !0)
			},
			onCancel: function () {
				J(!1), _e(we), Ne()
			},
			onKeyDown: function (Re, Wt) {
				le == null || le(Re, Wt)
			},
			onFocus: A,
			onBlur: W
		}),
		me = B(Q, 2),
		Ve = me[0],
		$t = me[1],
		St = $t.focused,
		jt = $t.typing
	u.useEffect(
		function () {
			Oe || (_e(we), !Ae.length || Ae[0] === '' ? Ye('') : bt !== it && Ne())
		},
		[Oe, Ae]
	),
		u.useEffect(
			function () {
				Oe || Ne()
			},
			[C]
		),
		u.useEffect(
			function () {
				_e(we)
			},
			[we]
		),
		L &&
			(L.current = {
				focus: function () {
					fe.current && fe.current.focus()
				},
				blur: function () {
					fe.current && fe.current.blur()
				}
			})
	var Te = ym(it, { formatList: Se, generateConfig: p, locale: h }),
		dt = B(Te, 3),
		Bt = dt[0],
		Jt = dt[1],
		en = dt[2],
		Ct = F(
			F({}, e),
			{},
			{
				className: void 0,
				style: void 0,
				pickerValue: void 0,
				onPickerValueChange: void 0,
				onChange: null
			}
		),
		Ht = u.createElement(
			'div',
			{ className: ''.concat(o, '-panel-layout') },
			u.createElement(tE, {
				prefixCls: o,
				presets: Me,
				onClick: function (Re) {
					nt(Re), J(!1)
				}
			}),
			u.createElement(
				Jx,
				se({}, Ct, {
					generateConfig: p,
					className: Z(V({}, ''.concat(o, '-panel-focused'), !jt)),
					value: pe,
					locale: h,
					tabIndex: -1,
					onSelect: function (Re) {
						ae == null || ae(Re), _e(Re)
					},
					direction: q,
					onPanelChange: function (Re, Wt) {
						var fn = e.onPanelChange
						en(!0), fn == null || fn(Re, Wt)
					}
				})
			)
		)
	H && (Ht = H(Ht))
	var rt = u.createElement(
			'div',
			{
				className: ''.concat(o, '-panel-container'),
				ref: Le,
				onMouseDown: function (Re) {
					Re.preventDefault()
				}
			},
			Ht
		),
		je
	$ && (je = u.createElement('span', { className: ''.concat(o, '-suffix') }, $))
	var wt
	b &&
		we &&
		!M &&
		(wt = u.createElement(
			'span',
			{
				onMouseDown: function (Re) {
					Re.preventDefault(), Re.stopPropagation()
				},
				onMouseUp: function (Re) {
					Re.preventDefault(), Re.stopPropagation(), nt(null), J(!1)
				},
				className: ''.concat(o, '-clear'),
				role: 'button'
			},
			R || u.createElement('span', { className: ''.concat(o, '-clear-btn') })
		))
	var Mt = F(
			F(
				F(
					{
						id: a,
						tabIndex: i,
						disabled: M,
						readOnly: g || typeof Se[0] == 'function' || !jt,
						value: Bt || it,
						onChange: function (Re) {
							Ye(Re.target.value)
						},
						autoFocus: m,
						placeholder: _,
						ref: fe,
						title: it
					},
					Ve
				),
				{},
				{ size: Vx(C, Se[0], p) },
				Gx(e)
			),
			{},
			{ autoComplete: ve }
		),
		Lt = ee ? ee(Mt) : u.createElement('input', Mt),
		mt = function (Re, Wt) {
			;(Wt === 'submit' || (Wt !== 'key' && !be)) && (nt(Re), J(!1))
		},
		xt = q === 'rtl' ? 'bottomRight' : 'bottomLeft'
	return u.createElement(
		Gn.Provider,
		{
			value: {
				operationRef: tt,
				hideHeader: C === 'time',
				onSelect: mt,
				open: Oe,
				defaultOpenValue: I,
				onDateMouseEnter: Jt,
				onDateMouseLeave: en
			}
		},
		u.createElement(
			eE,
			{
				visible: Oe,
				popupElement: rt,
				popupStyle: d,
				prefixCls: o,
				dropdownClassName: c,
				dropdownAlign: f,
				getPopupContainer: D,
				transitionName: v,
				popupPlacement: xt,
				direction: q
			},
			u.createElement(
				'div',
				{
					ref: et,
					className: Z(
						o,
						s,
						((t = {}),
						V(t, ''.concat(o, '-disabled'), M),
						V(t, ''.concat(o, '-focused'), St),
						V(t, ''.concat(o, '-rtl'), q === 'rtl'),
						t)
					),
					style: l,
					onMouseDown: Y,
					onMouseUp: K,
					onMouseEnter: G,
					onMouseLeave: te,
					onContextMenu: ne,
					onClick: re
				},
				u.createElement(
					'div',
					{
						className: Z(
							''.concat(o, '-input'),
							V({}, ''.concat(o, '-input-placeholder'), !!Bt)
						),
						ref: lt
					},
					Lt,
					je,
					wt
				)
			)
		)
	)
}
var M6 = (function (e) {
	go(n, e)
	var t = yo(n)
	function n() {
		var r
		Tn(this, n)
		for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
			a[i] = arguments[i]
		return (
			(r = t.call.apply(t, [this].concat(a))),
			V(We(r), 'pickerRef', u.createRef()),
			V(We(r), 'focus', function () {
				r.pickerRef.current && r.pickerRef.current.focus()
			}),
			V(We(r), 'blur', function () {
				r.pickerRef.current && r.pickerRef.current.blur()
			}),
			r
		)
	}
	return (
		Dn(n, [
			{
				key: 'render',
				value: function () {
					return u.createElement(
						R6,
						se({}, this.props, { pickerRef: this.pickerRef })
					)
				}
			}
		]),
		n
	)
})(u.Component)
function O6(e, t, n) {
	var r = e.picker,
		o = e.locale,
		a = e.selectedValue,
		i = e.disabledDate,
		l = e.disabled,
		s = e.generateConfig,
		c = ft(a, 0),
		f = ft(a, 1)
	function d(b) {
		return s.locale.getWeekFirstDate(o.locale, b)
	}
	function v(b) {
		var m = s.getYear(b),
			y = s.getMonth(b)
		return m * 100 + y
	}
	function p(b) {
		var m = s.getYear(b),
			y = gm(s, b)
		return m * 10 + y
	}
	var h = u.useCallback(
			function (b) {
				if (i && i(b)) return !0
				if (l[1] && f) return !io(s, b, f) && s.isAfter(b, f)
				if (t && f)
					switch (r) {
						case 'quarter':
							return p(b) > p(f)
						case 'month':
							return v(b) > v(f)
						case 'week':
							return d(b) > d(f)
						default:
							return !io(s, b, f) && s.isAfter(b, f)
					}
				return !1
			},
			[i, l[1], f, t]
		),
		g = u.useCallback(
			function (b) {
				if (i && i(b)) return !0
				if (l[0] && c) return !io(s, b, f) && s.isAfter(c, b)
				if (n && c)
					switch (r) {
						case 'quarter':
							return p(b) < p(c)
						case 'month':
							return v(b) < v(c)
						case 'week':
							return d(b) < d(c)
						default:
							return !io(s, b, c) && s.isAfter(c, b)
					}
				return !1
			},
			[i, l[0], c, n]
		)
	return [h, g]
}
function N6(e, t, n, r) {
	var o = Bl(e, n, r, 1)
	function a(i) {
		return i(e, t) ? 'same' : i(o, t) ? 'closing' : 'far'
	}
	switch (n) {
		case 'year':
			return a(function (i, l) {
				return t6(r, i, l)
			})
		case 'quarter':
		case 'month':
			return a(function (i, l) {
				return kd(r, i, l)
			})
		default:
			return a(function (i, l) {
				return hg(r, i, l)
			})
	}
}
function I6(e, t, n, r) {
	var o = ft(e, 0),
		a = ft(e, 1)
	if (t === 0) return o
	if (o && a) {
		var i = N6(o, a, n, r)
		switch (i) {
			case 'same':
				return o
			case 'closing':
				return o
			default:
				return Bl(a, n, r, -1)
		}
	}
	return o
}
function k6(e) {
	var t = e.values,
		n = e.picker,
		r = e.defaultDates,
		o = e.generateConfig,
		a = u.useState(function () {
			return [ft(r, 0), ft(r, 1)]
		}),
		i = B(a, 2),
		l = i[0],
		s = i[1],
		c = u.useState(null),
		f = B(c, 2),
		d = f[0],
		v = f[1],
		p = ft(t, 0),
		h = ft(t, 1)
	function g(m) {
		return l[m] ? l[m] : ft(d, m) || I6(t, m, n, o) || p || h || o.getNow()
	}
	function b(m, y) {
		if (m) {
			var S = dr(d, m, y)
			s(dr(l, null, y) || [null, null])
			var C = (y + 1) % 2
			ft(t, C) || (S = dr(S, m, C)), v(S)
		} else (p || h) && v(null)
	}
	return [g, b]
}
function D1(e, t) {
	return e && e[0] && e[1] && t.isAfter(e[0], e[1]) ? [e[1], e[0]] : e
}
function _1(e, t, n, r) {
	return !!(e || (r && r[t]) || n[(t + 1) % 2])
}
function T6(e) {
	var t,
		n,
		r,
		o = e,
		a = o.prefixCls,
		i = a === void 0 ? 'rc-picker' : a,
		l = o.id,
		s = o.style,
		c = o.className,
		f = o.popupStyle,
		d = o.dropdownClassName,
		v = o.transitionName,
		p = o.dropdownAlign,
		h = o.getPopupContainer,
		g = o.generateConfig,
		b = o.locale,
		m = o.placeholder,
		y = o.autoFocus,
		S = o.disabled,
		C = o.format,
		x = o.picker,
		w = x === void 0 ? 'date' : x,
		E = o.showTime,
		P = o.use12Hours,
		N = o.separator,
		O = N === void 0 ? '~' : N,
		k = o.value,
		I = o.defaultValue,
		$ = o.defaultPickerValue,
		R = o.open,
		M = o.defaultOpen,
		T = o.disabledDate,
		_ = o.disabledTime,
		D = o.dateRender,
		L = o.panelRender,
		H = o.presets,
		j = o.ranges,
		z = o.allowEmpty,
		A = o.allowClear,
		W = o.suffixIcon,
		Y = o.clearIcon,
		K = o.pickerRef,
		G = o.inputReadOnly,
		te = o.mode,
		ne = o.renderExtraFooter,
		ie = o.onChange,
		le = o.onOpenChange,
		ae = o.onPanelChange,
		q = o.onCalendarChange,
		de = o.onFocus,
		ve = o.onBlur,
		ee = o.onMouseDown,
		fe = o.onMouseUp,
		be = o.onMouseEnter,
		Me = o.onMouseLeave,
		Se = o.onClick,
		Le = o.onOk,
		lt = o.onKeyDown,
		et = o.components,
		Xe = o.order,
		ze = o.direction,
		we = o.activePickerIndex,
		ct = o.autoComplete,
		He = ct === void 0 ? 'off' : ct,
		Pe = (w === 'date' && !!E) || w === 'time',
		pe = u.useRef({}),
		_e = u.useRef(null),
		tt = u.useRef(null),
		Ce = u.useRef(null),
		$e = u.useRef(null),
		Oe = u.useRef(null),
		qe = u.useRef(null),
		Ue = u.useRef(null),
		at = u.useRef(null),
		Ae = Kx(Hx(C, w, E, P)),
		bt = Kt(0, { value: we }),
		Fe = B(bt, 2),
		ye = Fe[0],
		it = Fe[1],
		Ye = u.useRef(null),
		Ne = u.useMemo(
			function () {
				return Array.isArray(S) ? S : [S || !1, S || !1]
			},
			[S]
		),
		nt = Kt(null, {
			value: k,
			defaultValue: I,
			postState: function (ge) {
				return w === 'time' && !Xe ? ge : D1(ge, g)
			}
		}),
		J = B(nt, 2),
		oe = J[0],
		re = J[1],
		Q = k6({ values: oe, picker: w, defaultDates: $, generateConfig: g }),
		me = B(Q, 2),
		Ve = me[0],
		$t = me[1],
		St = Kt(oe, {
			postState: function (ge) {
				var Ie = ge
				if (Ne[0] && Ne[1]) return Ie
				for (var gt = 0; gt < 2; gt += 1)
					Ne[gt] &&
						!Ie &&
						!ft(Ie, gt) &&
						!ft(z, gt) &&
						(Ie = dr(Ie, g.getNow(), gt))
				return Ie
			}
		}),
		jt = B(St, 2),
		Te = jt[0],
		dt = jt[1],
		Bt = Kt([w, w], { value: te }),
		Jt = B(Bt, 2),
		en = Jt[0],
		Ct = Jt[1]
	u.useEffect(
		function () {
			Ct([w, w])
		},
		[w]
	)
	var Ht = function (ge, Ie) {
			Ct(ge), ae && ae(Ie, ge)
		},
		rt = O6(
			{
				picker: w,
				selectedValue: Te,
				locale: b,
				disabled: Ne,
				disabledDate: T,
				generateConfig: g
			},
			pe.current[1],
			pe.current[0]
		),
		je = B(rt, 2),
		wt = je[0],
		Mt = je[1],
		Lt = Kt(!1, {
			value: R,
			defaultValue: M,
			postState: function (ge) {
				return Ne[ye] ? !1 : ge
			},
			onChange: function (ge) {
				le && le(ge),
					!ge && Ye.current && Ye.current.onClose && Ye.current.onClose()
			}
		}),
		mt = B(Lt, 2),
		xt = mt[0],
		ht = mt[1],
		Re = xt && ye === 0,
		Wt = xt && ye === 1,
		fn = u.useState(0),
		lr = B(fn, 2),
		Xn = lr[0],
		_r = lr[1]
	u.useEffect(
		function () {
			!xt && _e.current && _r(_e.current.offsetWidth)
		},
		[xt]
	)
	var Lr = u.useRef()
	function Vn(st, ge) {
		if (st)
			clearTimeout(Lr.current),
				(pe.current[ge] = !0),
				it(ge),
				ht(st),
				xt || $t(null, ge)
		else if (ye === ge) {
			ht(st)
			var Ie = pe.current
			Lr.current = setTimeout(function () {
				Ie === pe.current && (pe.current = {})
			})
		}
	}
	function br(st) {
		Vn(!0, st),
			setTimeout(function () {
				var ge = [qe, Ue][st]
				ge.current && ge.current.focus()
			}, 0)
	}
	function jn(st, ge) {
		var Ie = st,
			gt = ft(Ie, 0),
			rn = ft(Ie, 1)
		gt &&
			rn &&
			g.isAfter(gt, rn) &&
			((w === 'week' && !Uu(g, b.locale, gt, rn)) ||
			(w === 'quarter' && !Bx(g, gt, rn)) ||
			(w !== 'week' && w !== 'quarter' && w !== 'time' && !io(g, gt, rn))
				? (ge === 0
						? ((Ie = [gt, null]), (rn = null))
						: ((gt = null), (Ie = [null, rn])),
				  (pe.current = V({}, ge, !0)))
				: (w !== 'time' || Xe !== !1) && (Ie = D1(Ie, g))),
			dt(Ie)
		var oa =
				Ie && Ie[0]
					? xn(Ie[0], { generateConfig: g, locale: b, format: Ae[0] })
					: '',
			qr =
				Ie && Ie[1]
					? xn(Ie[1], { generateConfig: g, locale: b, format: Ae[0] })
					: ''
		if (q) {
			var Cr = { range: ge === 0 ? 'start' : 'end' }
			q(Ie, [oa, qr], Cr)
		}
		var Ar = _1(gt, 0, Ne, z),
			Qr = _1(rn, 1, Ne, z),
			aa = Ie === null || (Ar && Qr)
		aa &&
			(re(Ie),
			ie &&
				(!Fi(g, ft(oe, 0), gt) || !Fi(g, ft(oe, 1), rn)) &&
				ie(Ie, [oa, qr]))
		var Cn = null
		ge === 0 && !Ne[1] ? (Cn = 1) : ge === 1 && !Ne[0] && (Cn = 0),
			Cn !== null && Cn !== ye && (!pe.current[Cn] || !ft(Ie, Cn)) && ft(Ie, ge)
				? br(Cn)
				: Vn(!1, ge)
	}
	var Ke = function (ge) {
			return xt && Ye.current && Ye.current.onKeyDown
				? Ye.current.onKeyDown(ge)
				: (En(
						!1,
						'Picker not correct forward KeyDown operation. Please help to fire issue about this.'
				  ),
				  !1)
		},
		De = { formatList: Ae, generateConfig: g, locale: b },
		qt = Fc(ft(Te, 0), De),
		tn = B(qt, 2),
		Rt = tn[0],
		Je = tn[1],
		Be = Fc(ft(Te, 1), De),
		ut = B(Be, 2),
		Pt = ut[0],
		Tt = ut[1],
		nn = function (ge, Ie) {
			var gt = Wx(ge, { locale: b, formatList: Ae, generateConfig: g }),
				rn = Ie === 0 ? wt : Mt
			gt && !rn(gt) && (dt(dr(Te, gt, Ie)), $t(gt, Ie))
		},
		sr = Sm({
			valueTexts: Rt,
			onTextChange: function (ge) {
				return nn(ge, 0)
			}
		}),
		Co = B(sr, 3),
		ra = Co[0],
		Ha = Co[1],
		el = Co[2],
		Bd = Sm({
			valueTexts: Pt,
			onTextChange: function (ge) {
				return nn(ge, 1)
			}
		}),
		tl = B(Bd, 3),
		ke = tl[0],
		Ge = tl[1],
		Dt = tl[2],
		gn = u.useState(null),
		Ut = B(gn, 2),
		Vs = Ut[0],
		Va = Ut[1],
		nl = u.useState(null),
		rl = B(nl, 2),
		Sr = rl[0],
		Eg = rl[1],
		YE = ym(ra, { formatList: Ae, generateConfig: g, locale: b }),
		Wd = B(YE, 3),
		$g = Wd[0],
		KE = Wd[1],
		Ud = Wd[2],
		GE = ym(ke, { formatList: Ae, generateConfig: g, locale: b }),
		Yd = B(GE, 3),
		Pg = Yd[0],
		XE = Yd[1],
		Kd = Yd[2],
		qE = function (ge) {
			Eg(dr(Te, ge, ye)), ye === 0 ? KE(ge) : XE(ge)
		},
		QE = function () {
			Eg(dr(Te, null, ye)), ye === 0 ? Ud() : Kd()
		},
		Rg = function (ge, Ie) {
			return {
				blurToCancel: Pe,
				forwardKeyDown: Ke,
				onBlur: ve,
				isClickOutside: function (rn) {
					return !jx([tt.current, Ce.current, $e.current, _e.current], rn)
				},
				onFocus: function (rn) {
					it(ge), de && de(rn)
				},
				triggerOpen: function (rn) {
					Vn(rn, ge)
				},
				onSubmit: function () {
					if (!Te || (T && T(Te[ge]))) return !1
					jn(Te, ge), Ie()
				},
				onCancel: function () {
					Vn(!1, ge), dt(oe), Ie()
				}
			}
		},
		ZE = bm(
			F(
				F({}, Rg(0, el)),
				{},
				{
					open: Re,
					value: ra,
					onKeyDown: function (ge, Ie) {
						lt == null || lt(ge, Ie)
					}
				}
			)
		),
		Mg = B(ZE, 2),
		JE = Mg[0],
		Og = Mg[1],
		Ng = Og.focused,
		Ig = Og.typing,
		e2 = bm(
			F(
				F({}, Rg(1, Dt)),
				{},
				{
					open: Wt,
					value: ke,
					onKeyDown: function (ge, Ie) {
						lt == null || lt(ge, Ie)
					}
				}
			)
		),
		kg = B(e2, 2),
		t2 = kg[0],
		Tg = kg[1],
		Dg = Tg.focused,
		_g = Tg.typing,
		n2 = function (ge) {
			Se && Se(ge),
				!xt &&
					!qe.current.contains(ge.target) &&
					!Ue.current.contains(ge.target) &&
					(Ne[0] ? Ne[1] || br(1) : br(0))
		},
		r2 = function (ge) {
			ee && ee(ge),
				xt &&
					(Ng || Dg) &&
					!qe.current.contains(ge.target) &&
					!Ue.current.contains(ge.target) &&
					ge.preventDefault()
		},
		o2 =
			oe && oe[0]
				? xn(oe[0], { locale: b, format: 'YYYYMMDDHHmmss', generateConfig: g })
				: '',
		a2 =
			oe && oe[1]
				? xn(oe[1], { locale: b, format: 'YYYYMMDDHHmmss', generateConfig: g })
				: ''
	u.useEffect(
		function () {
			xt ||
				(dt(oe),
				!Rt.length || Rt[0] === '' ? Ha('') : Je !== ra && el(),
				!Pt.length || Pt[0] === '' ? Ge('') : Tt !== ke && Dt())
		},
		[xt, Rt, Pt]
	),
		u.useEffect(
			function () {
				dt(oe)
			},
			[o2, a2]
		),
		K &&
			(K.current = {
				focus: function () {
					qe.current && qe.current.focus()
				},
				blur: function () {
					qe.current && qe.current.blur(), Ue.current && Ue.current.blur()
				}
			})
	var i2 = Ux(H, j)
	function Gd() {
		var st =
				arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
			ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			Ie = null
		xt && Sr && Sr[0] && Sr[1] && g.isAfter(Sr[1], Sr[0]) && (Ie = Sr)
		var gt = E
		if (E && Ze(E) === 'object' && E.defaultValue) {
			var rn = E.defaultValue
			gt = F(F({}, E), {}, { defaultValue: ft(rn, ye) || void 0 })
		}
		var oa = null
		return (
			D &&
				(oa = function (Cr, Ar) {
					return D(Cr, Ar, { range: ye ? 'end' : 'start' })
				}),
			u.createElement(
				Fa.Provider,
				{
					value: {
						inRange: !0,
						panelPosition: st,
						rangedValue: Vs || Te,
						hoverRangedValue: Ie
					}
				},
				u.createElement(
					Jx,
					se({}, e, ge, {
						dateRender: oa,
						showTime: gt,
						mode: en[ye],
						generateConfig: g,
						style: void 0,
						direction: ze,
						disabledDate: ye === 0 ? wt : Mt,
						disabledTime: function (Cr) {
							return _ ? _(Cr, ye === 0 ? 'start' : 'end') : !1
						},
						className: Z(
							V({}, ''.concat(i, '-panel-focused'), ye === 0 ? !Ig : !_g)
						),
						value: ft(Te, ye),
						locale: b,
						tabIndex: -1,
						onPanelChange: function (Cr, Ar) {
							ye === 0 && Ud(!0),
								ye === 1 && Kd(!0),
								Ht(dr(en, Ar, ye), dr(Te, Cr, ye))
							var Qr = Cr
							st === 'right' && en[ye] === Ar && (Qr = Bl(Qr, Ar, g, -1)),
								$t(Qr, ye)
						},
						onOk: null,
						onSelect: void 0,
						onChange: void 0,
						defaultValue: ye === 0 ? ft(Te, 1) : ft(Te, 0)
					})
				)
			)
		)
	}
	var wo = 0,
		Lg = 0
	if (ye && Ce.current && Oe.current && tt.current) {
		wo = Ce.current.offsetWidth + Oe.current.offsetWidth
		var l2 =
				at.current.offsetLeft > wo
					? at.current.offsetLeft - wo
					: at.current.offsetLeft,
			Ag = tt.current.offsetWidth,
			Fg = at.current.offsetWidth
		Ag && Fg && wo > Ag - Fg - (ze === 'rtl' ? 0 : l2) && (Lg = wo)
	}
	var s2 = ze === 'rtl' ? { right: wo } : { left: wo }
	function u2() {
		var st,
			ge = Qx(i, en[ye], ne),
			Ie = Zx({
				prefixCls: i,
				components: et,
				needConfirmButton: Pe,
				okDisabled: !ft(Te, ye) || (T && T(Te[ye])),
				locale: b,
				onOk: function () {
					ft(Te, ye) && (jn(Te, ye), Le && Le(Te))
				}
			})
		if (w !== 'time' && !E) {
			var gt = Ve(ye),
				rn = Bl(gt, w, g),
				oa = en[ye],
				qr = oa === w,
				Cr = Gd(qr ? 'left' : !1, {
					pickerValue: gt,
					onPickerValueChange: function (Cn) {
						$t(Cn, ye)
					}
				}),
				Ar = Gd('right', {
					pickerValue: rn,
					onPickerValueChange: function (Cn) {
						$t(Bl(Cn, w, g, -1), ye)
					}
				})
			ze === 'rtl'
				? (st = u.createElement(u.Fragment, null, Ar, qr && Cr))
				: (st = u.createElement(u.Fragment, null, Cr, qr && Ar))
		} else st = Gd()
		var Qr = u.createElement(
			'div',
			{ className: ''.concat(i, '-panel-layout') },
			u.createElement(tE, {
				prefixCls: i,
				presets: i2,
				onClick: function (Cn) {
					jn(Cn, null), Vn(!1, ye)
				},
				onHover: function (Cn) {
					Va(Cn)
				}
			}),
			u.createElement(
				'div',
				null,
				u.createElement('div', { className: ''.concat(i, '-panels') }, st),
				(ge || Ie) &&
					u.createElement('div', { className: ''.concat(i, '-footer') }, ge, Ie)
			)
		)
		return (
			L && (Qr = L(Qr)),
			u.createElement(
				'div',
				{
					className: ''.concat(i, '-panel-container'),
					style: { marginLeft: Lg },
					ref: tt,
					onMouseDown: function (Cn) {
						Cn.preventDefault()
					}
				},
				Qr
			)
		)
	}
	var c2 = u.createElement(
			'div',
			{
				className: Z(
					''.concat(i, '-range-wrapper'),
					''.concat(i, '-').concat(w, '-range-wrapper')
				),
				style: { minWidth: Xn }
			},
			u.createElement('div', {
				ref: at,
				className: ''.concat(i, '-range-arrow'),
				style: s2
			}),
			u2()
		),
		zg
	W && (zg = u.createElement('span', { className: ''.concat(i, '-suffix') }, W))
	var Hg
	A &&
		((ft(oe, 0) && !Ne[0]) || (ft(oe, 1) && !Ne[1])) &&
		(Hg = u.createElement(
			'span',
			{
				onMouseDown: function (ge) {
					ge.preventDefault(), ge.stopPropagation()
				},
				onMouseUp: function (ge) {
					ge.preventDefault(), ge.stopPropagation()
					var Ie = oe
					Ne[0] || (Ie = dr(Ie, null, 0)),
						Ne[1] || (Ie = dr(Ie, null, 1)),
						jn(Ie, null),
						Vn(!1, ye)
				},
				className: ''.concat(i, '-clear')
			},
			Y || u.createElement('span', { className: ''.concat(i, '-clear-btn') })
		))
	var Vg = { size: Vx(w, Ae[0], g) },
		Xd = 0,
		qd = 0
	Ce.current &&
		$e.current &&
		Oe.current &&
		(ye === 0
			? (qd = Ce.current.offsetWidth)
			: ((Xd = wo), (qd = $e.current.offsetWidth)))
	var d2 = ze === 'rtl' ? { right: Xd } : { left: Xd },
		f2 = function (ge, Ie) {
			var gt = dr(Te, ge, ye)
			Ie === 'submit' || (Ie !== 'key' && !Pe)
				? (jn(gt, ye), ye === 0 ? Ud() : Kd())
				: dt(gt)
		}
	return u.createElement(
		Gn.Provider,
		{
			value: {
				operationRef: Ye,
				hideHeader: w === 'time',
				onDateMouseEnter: qE,
				onDateMouseLeave: QE,
				hideRanges: !0,
				onSelect: f2,
				open: xt
			}
		},
		u.createElement(
			eE,
			{
				visible: xt,
				popupElement: c2,
				popupStyle: f,
				prefixCls: i,
				dropdownClassName: d,
				dropdownAlign: p,
				getPopupContainer: h,
				transitionName: v,
				range: !0,
				direction: ze
			},
			u.createElement(
				'div',
				se(
					{
						ref: _e,
						className: Z(
							i,
							''.concat(i, '-range'),
							c,
							((t = {}),
							V(t, ''.concat(i, '-disabled'), Ne[0] && Ne[1]),
							V(t, ''.concat(i, '-focused'), ye === 0 ? Ng : Dg),
							V(t, ''.concat(i, '-rtl'), ze === 'rtl'),
							t)
						),
						style: s,
						onClick: n2,
						onMouseEnter: be,
						onMouseLeave: Me,
						onMouseDown: r2,
						onMouseUp: fe
					},
					Gx(e)
				),
				u.createElement(
					'div',
					{
						className: Z(
							''.concat(i, '-input'),
							((n = {}),
							V(n, ''.concat(i, '-input-active'), ye === 0),
							V(n, ''.concat(i, '-input-placeholder'), !!$g),
							n)
						),
						ref: Ce
					},
					u.createElement(
						'input',
						se(
							{
								id: l,
								disabled: Ne[0],
								readOnly: G || typeof Ae[0] == 'function' || !Ig,
								value: $g || ra,
								onChange: function (ge) {
									Ha(ge.target.value)
								},
								autoFocus: y,
								placeholder: ft(m, 0) || '',
								ref: qe
							},
							JE,
							Vg,
							{ autoComplete: He }
						)
					)
				),
				u.createElement(
					'div',
					{ className: ''.concat(i, '-range-separator'), ref: Oe },
					O
				),
				u.createElement(
					'div',
					{
						className: Z(
							''.concat(i, '-input'),
							((r = {}),
							V(r, ''.concat(i, '-input-active'), ye === 1),
							V(r, ''.concat(i, '-input-placeholder'), !!Pg),
							r)
						),
						ref: $e
					},
					u.createElement(
						'input',
						se(
							{
								disabled: Ne[1],
								readOnly: G || typeof Ae[0] == 'function' || !_g,
								value: Pg || ke,
								onChange: function (ge) {
									Ge(ge.target.value)
								},
								placeholder: ft(m, 1) || '',
								ref: Ue
							},
							t2,
							Vg,
							{ autoComplete: He }
						)
					)
				),
				u.createElement('div', {
					className: ''.concat(i, '-active-bar'),
					style: F(F({}, d2), {}, { width: qd, position: 'absolute' })
				}),
				zg,
				Hg
			)
		)
	)
}
var D6 = (function (e) {
	go(n, e)
	var t = yo(n)
	function n() {
		var r
		Tn(this, n)
		for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
			a[i] = arguments[i]
		return (
			(r = t.call.apply(t, [this].concat(a))),
			V(We(r), 'pickerRef', u.createRef()),
			V(We(r), 'focus', function () {
				r.pickerRef.current && r.pickerRef.current.focus()
			}),
			V(We(r), 'blur', function () {
				r.pickerRef.current && r.pickerRef.current.blur()
			}),
			r
		)
	}
	return (
		Dn(n, [
			{
				key: 'render',
				value: function () {
					return u.createElement(
						T6,
						se({}, this.props, { pickerRef: this.pickerRef })
					)
				}
			}
		]),
		n
	)
})(u.Component)
const _6 = e => ({
		'&::-moz-placeholder': { opacity: 1 },
		'&::placeholder': { color: e, userSelect: 'none' },
		'&:placeholder-shown': { textOverflow: 'ellipsis' }
	}),
	Dd = e => ({
		borderColor: e.inputBorderHoverColor,
		borderInlineEndWidth: e.lineWidth
	}),
	zi = e => ({
		borderColor: e.inputBorderHoverColor,
		boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
		borderInlineEndWidth: e.lineWidth,
		outline: 0
	}),
	nE = e => ({
		color: e.colorTextDisabled,
		backgroundColor: e.colorBgContainerDisabled,
		borderColor: e.colorBorder,
		boxShadow: 'none',
		cursor: 'not-allowed',
		opacity: 1,
		'&:hover': Object.assign(
			{},
			Dd(Zt(e, { inputBorderHoverColor: e.colorBorder }))
		)
	}),
	rE = e => {
		const {
			inputPaddingVerticalLG: t,
			fontSizeLG: n,
			lineHeightLG: r,
			borderRadiusLG: o,
			inputPaddingHorizontalLG: a
		} = e
		return {
			padding: `${t}px ${a}px`,
			fontSize: n,
			lineHeight: r,
			borderRadius: o
		}
	},
	oE = e => ({
		padding: `${e.inputPaddingVerticalSM}px ${
			e.controlPaddingHorizontalSM - 1
		}px`,
		borderRadius: e.borderRadiusSM
	}),
	aE = (e, t) => {
		const {
			componentCls: n,
			colorError: r,
			colorWarning: o,
			colorErrorOutline: a,
			colorWarningOutline: i,
			colorErrorBorderHover: l,
			colorWarningBorderHover: s
		} = e
		return {
			[`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
				borderColor: r,
				'&:hover': { borderColor: l },
				'&:focus, &-focused': Object.assign(
					{},
					zi(
						Zt(e, {
							inputBorderActiveColor: r,
							inputBorderHoverColor: r,
							controlOutline: a
						})
					)
				),
				[`${n}-prefix, ${n}-suffix`]: { color: r }
			},
			[`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
				borderColor: o,
				'&:hover': { borderColor: s },
				'&:focus, &-focused': Object.assign(
					{},
					zi(
						Zt(e, {
							inputBorderActiveColor: o,
							inputBorderHoverColor: o,
							controlOutline: i
						})
					)
				),
				[`${n}-prefix, ${n}-suffix`]: { color: o }
			}
		}
	},
	yg = e =>
		Object.assign(
			Object.assign(
				{
					position: 'relative',
					display: 'inline-block',
					width: '100%',
					minWidth: 0,
					padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
					color: e.colorText,
					fontSize: e.fontSize,
					lineHeight: e.lineHeight,
					backgroundColor: e.colorBgContainer,
					backgroundImage: 'none',
					borderWidth: e.lineWidth,
					borderStyle: e.lineType,
					borderColor: e.colorBorder,
					borderRadius: e.borderRadius,
					transition: `all ${e.motionDurationMid}`
				},
				_6(e.colorTextPlaceholder)
			),
			{
				'&:hover': Object.assign({}, Dd(e)),
				'&:focus, &-focused': Object.assign({}, zi(e)),
				'&-disabled, &[disabled]': Object.assign({}, nE(e)),
				'&-borderless': {
					'&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
						backgroundColor: 'transparent',
						border: 'none',
						boxShadow: 'none'
					}
				},
				'textarea&': {
					maxWidth: '100%',
					height: 'auto',
					minHeight: e.controlHeight,
					lineHeight: e.lineHeight,
					verticalAlign: 'bottom',
					transition: `all ${e.motionDurationSlow}, height 0s`,
					resize: 'vertical'
				},
				'&-lg': Object.assign({}, rE(e)),
				'&-sm': Object.assign({}, oE(e)),
				'&-rtl': { direction: 'rtl' },
				'&-textarea-rtl': { direction: 'rtl' }
			}
		),
	L6 = e => {
		const { componentCls: t, antCls: n } = e
		return {
			position: 'relative',
			display: 'table',
			width: '100%',
			borderCollapse: 'separate',
			borderSpacing: 0,
			["&[class*='col-']"]: {
				paddingInlineEnd: e.paddingXS,
				'&:last-child': { paddingInlineEnd: 0 }
			},
			[`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, rE(e)),
			[`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, oE(e)),
			[`&-lg ${n}-select-single ${n}-select-selector`]: {
				height: e.controlHeightLG
			},
			[`&-sm ${n}-select-single ${n}-select-selector`]: {
				height: e.controlHeightSM
			},
			[`> ${t}`]: {
				display: 'table-cell',
				'&:not(:first-child):not(:last-child)': { borderRadius: 0 }
			},
			[`${t}-group`]: {
				['&-addon, &-wrap']: {
					display: 'table-cell',
					width: 1,
					whiteSpace: 'nowrap',
					verticalAlign: 'middle',
					'&:not(:first-child):not(:last-child)': { borderRadius: 0 }
				},
				'&-wrap > *': { display: 'block !important' },
				'&-addon': {
					position: 'relative',
					padding: `0 ${e.inputPaddingHorizontal}px`,
					color: e.colorText,
					fontWeight: 'normal',
					fontSize: e.fontSize,
					textAlign: 'center',
					backgroundColor: e.colorFillAlter,
					border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
					borderRadius: e.borderRadius,
					transition: `all ${e.motionDurationSlow}`,
					lineHeight: 1,
					[`${n}-select`]: {
						margin: `-${e.inputPaddingVertical + 1}px -${
							e.inputPaddingHorizontal
						}px`,
						[`&${n}-select-single:not(${n}-select-customize-input)`]: {
							[`${n}-select-selector`]: {
								backgroundColor: 'inherit',
								border: `${e.lineWidth}px ${e.lineType} transparent`,
								boxShadow: 'none'
							}
						},
						'&-open, &-focused': {
							[`${n}-select-selector`]: { color: e.colorPrimary }
						}
					},
					[`${n}-cascader-picker`]: {
						margin: `-9px -${e.inputPaddingHorizontal}px`,
						backgroundColor: 'transparent',
						[`${n}-cascader-input`]: {
							textAlign: 'start',
							border: 0,
							boxShadow: 'none'
						}
					}
				},
				'&-addon:first-child': { borderInlineEnd: 0 },
				'&-addon:last-child': { borderInlineStart: 0 }
			},
			[`${t}`]: {
				width: '100%',
				marginBottom: 0,
				textAlign: 'inherit',
				'&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
				'&:hover': {
					zIndex: 1,
					borderInlineEndWidth: 1,
					[`${t}-search-with-button &`]: { zIndex: 0 }
				}
			},
			[`> ${t}:first-child, ${t}-group-addon:first-child`]: {
				borderStartEndRadius: 0,
				borderEndEndRadius: 0,
				[`${n}-select ${n}-select-selector`]: {
					borderStartEndRadius: 0,
					borderEndEndRadius: 0
				}
			},
			[`> ${t}-affix-wrapper`]: {
				[`&:not(:first-child) ${t}`]: {
					borderStartStartRadius: 0,
					borderEndStartRadius: 0
				},
				[`&:not(:last-child) ${t}`]: {
					borderStartEndRadius: 0,
					borderEndEndRadius: 0
				}
			},
			[`> ${t}:last-child, ${t}-group-addon:last-child`]: {
				borderStartStartRadius: 0,
				borderEndStartRadius: 0,
				[`${n}-select ${n}-select-selector`]: {
					borderStartStartRadius: 0,
					borderEndStartRadius: 0
				}
			},
			[`${t}-affix-wrapper`]: {
				'&:not(:last-child)': {
					borderStartEndRadius: 0,
					borderEndEndRadius: 0,
					[`${t}-search &`]: {
						borderStartStartRadius: e.borderRadius,
						borderEndStartRadius: e.borderRadius
					}
				},
				[`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
					borderStartStartRadius: 0,
					borderEndStartRadius: 0
				}
			},
			[`&${t}-group-compact`]: Object.assign(
				Object.assign({ display: 'block' }, nN()),
				{
					[`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
						'&:not(:first-child):not(:last-child)': {
							borderInlineEndWidth: e.lineWidth,
							'&:hover': { zIndex: 1 },
							'&:focus': { zIndex: 1 }
						}
					},
					'& > *': {
						display: 'inline-block',
						float: 'none',
						verticalAlign: 'top',
						borderRadius: 0
					},
					[`& > ${t}-affix-wrapper`]: { display: 'inline-flex' },
					[`& > ${n}-picker-range`]: { display: 'inline-flex' },
					'& > *:not(:last-child)': {
						marginInlineEnd: -e.lineWidth,
						borderInlineEndWidth: e.lineWidth
					},
					[`${t}`]: { float: 'none' },
					[`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
						borderInlineEndWidth: e.lineWidth,
						borderRadius: 0,
						'&:hover': { zIndex: 1 },
						'&:focus': { zIndex: 1 }
					},
					[`& > ${n}-select-focused`]: { zIndex: 1 },
					[`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
					[`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
						borderStartStartRadius: e.borderRadius,
						borderEndStartRadius: e.borderRadius
					},
					[`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
						borderInlineEndWidth: e.lineWidth,
						borderStartEndRadius: e.borderRadius,
						borderEndEndRadius: e.borderRadius
					},
					[`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: 'top' },
					[`${t}-group-wrapper + ${t}-group-wrapper`]: {
						marginInlineStart: -e.lineWidth,
						[`${t}-affix-wrapper`]: { borderRadius: 0 }
					},
					[`${t}-group-wrapper:not(:last-child)`]: {
						[`&${t}-search > ${t}-group`]: {
							[`& > ${t}-group-addon > ${t}-search-button`]: {
								borderRadius: 0
							},
							[`& > ${t}`]: {
								borderStartStartRadius: e.borderRadius,
								borderStartEndRadius: 0,
								borderEndEndRadius: 0,
								borderEndStartRadius: e.borderRadius
							}
						}
					}
				}
			)
		}
	},
	A6 = e => {
		const { componentCls: t, controlHeightSM: n, lineWidth: r } = e,
			o = 16,
			a = (n - r * 2 - o) / 2
		return {
			[t]: Object.assign(
				Object.assign(Object.assign(Object.assign({}, po(e)), yg(e)), aE(e, t)),
				{
					'&[type="color"]': {
						height: e.controlHeight,
						[`&${t}-lg`]: { height: e.controlHeightLG },
						[`&${t}-sm`]: { height: n, paddingTop: a, paddingBottom: a }
					},
					'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
						{ '-webkit-appearance': 'none' }
				}
			)
		}
	},
	F6 = e => {
		const { componentCls: t } = e
		return {
			[`${t}-clear-icon`]: {
				margin: 0,
				color: e.colorTextQuaternary,
				fontSize: e.fontSizeIcon,
				verticalAlign: -1,
				cursor: 'pointer',
				transition: `color ${e.motionDurationSlow}`,
				'&:hover': { color: e.colorTextTertiary },
				'&:active': { color: e.colorText },
				'&-hidden': { visibility: 'hidden' },
				'&-has-suffix': { margin: `0 ${e.inputAffixPadding}px` }
			}
		}
	},
	z6 = e => {
		const {
			componentCls: t,
			inputAffixPadding: n,
			colorTextDescription: r,
			motionDurationSlow: o,
			colorIcon: a,
			colorIconHover: i,
			iconCls: l
		} = e
		return {
			[`${t}-affix-wrapper`]: Object.assign(
				Object.assign(
					Object.assign(
						Object.assign(Object.assign({}, yg(e)), {
							display: 'inline-flex',
							[`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(
								Object.assign({}, Dd(e)),
								{ zIndex: 1, [`${t}-search-with-button &`]: { zIndex: 0 } }
							),
							'&-focused, &:focus': { zIndex: 1 },
							'&-disabled': {
								[`${t}[disabled]`]: { background: 'transparent' }
							},
							[`> input${t}`]: {
								padding: 0,
								fontSize: 'inherit',
								border: 'none',
								borderRadius: 0,
								outline: 'none',
								'&:focus': { boxShadow: 'none !important' }
							},
							'&::before': {
								width: 0,
								visibility: 'hidden',
								content: '"\\a0"'
							},
							[`${t}`]: {
								'&-prefix, &-suffix': {
									display: 'flex',
									flex: 'none',
									alignItems: 'center',
									'> *:not(:last-child)': { marginInlineEnd: e.paddingXS }
								},
								'&-show-count-suffix': { color: r },
								'&-show-count-has-suffix': { marginInlineEnd: e.paddingXXS },
								'&-prefix': { marginInlineEnd: n },
								'&-suffix': { marginInlineStart: n }
							}
						}),
						F6(e)
					),
					{
						[`${l}${t}-password-icon`]: {
							color: a,
							cursor: 'pointer',
							transition: `all ${o}`,
							'&:hover': { color: i }
						}
					}
				),
				aE(e, `${t}-affix-wrapper`)
			)
		}
	},
	H6 = e => {
		const {
			componentCls: t,
			colorError: n,
			colorWarning: r,
			borderRadiusLG: o,
			borderRadiusSM: a
		} = e
		return {
			[`${t}-group`]: Object.assign(
				Object.assign(Object.assign({}, po(e)), L6(e)),
				{
					'&-rtl': { direction: 'rtl' },
					'&-wrapper': {
						display: 'inline-block',
						width: '100%',
						textAlign: 'start',
						verticalAlign: 'top',
						'&-rtl': { direction: 'rtl' },
						'&-lg': { [`${t}-group-addon`]: { borderRadius: o } },
						'&-sm': { [`${t}-group-addon`]: { borderRadius: a } },
						'&-status-error': {
							[`${t}-group-addon`]: { color: n, borderColor: n }
						},
						'&-status-warning': {
							[`${t}-group-addon`]: { color: r, borderColor: r }
						},
						'&-disabled': { [`${t}-group-addon`]: Object.assign({}, nE(e)) }
					}
				}
			)
		}
	},
	V6 = e => {
		const { componentCls: t, antCls: n } = e,
			r = `${t}-search`
		return {
			[r]: {
				[`${t}`]: {
					'&:hover, &:focus': {
						borderColor: e.colorPrimaryHover,
						[`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
							borderInlineStartColor: e.colorPrimaryHover
						}
					}
				},
				[`${t}-affix-wrapper`]: { borderRadius: 0 },
				[`${t}-lg`]: { lineHeight: e.lineHeightLG - 2e-4 },
				[`> ${t}-group`]: {
					[`> ${t}-group-addon:last-child`]: {
						insetInlineStart: -1,
						padding: 0,
						border: 0,
						[`${r}-button`]: {
							paddingTop: 0,
							paddingBottom: 0,
							borderStartStartRadius: 0,
							borderStartEndRadius: e.borderRadius,
							borderEndEndRadius: e.borderRadius,
							borderEndStartRadius: 0
						},
						[`${r}-button:not(${n}-btn-primary)`]: {
							color: e.colorTextDescription,
							'&:hover': { color: e.colorPrimaryHover },
							'&:active': { color: e.colorPrimaryActive },
							[`&${n}-btn-loading::before`]: {
								insetInlineStart: 0,
								insetInlineEnd: 0,
								insetBlockStart: 0,
								insetBlockEnd: 0
							}
						}
					}
				},
				[`${r}-button`]: {
					height: e.controlHeight,
					'&:hover, &:focus': { zIndex: 1 }
				},
				[`&-large ${r}-button`]: { height: e.controlHeightLG },
				[`&-small ${r}-button`]: { height: e.controlHeightSM },
				'&-rtl': { direction: 'rtl' },
				[`&${t}-compact-item`]: {
					[`&:not(${t}-compact-last-item)`]: {
						[`${t}-group-addon`]: {
							[`${t}-search-button`]: {
								marginInlineEnd: -e.lineWidth,
								borderRadius: 0
							}
						}
					},
					[`&:not(${t}-compact-first-item)`]: {
						[`${t},${t}-affix-wrapper`]: { borderRadius: 0 }
					},
					[`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { '&:hover,&:focus,&:active': { zIndex: 2 } },
					[`> ${t}-affix-wrapper-focused`]: { zIndex: 2 }
				}
			}
		}
	}
function iE(e) {
	return Zt(e, {
		inputAffixPadding: e.paddingXXS,
		inputPaddingVertical: Math.max(
			Math.round(((e.controlHeight - e.fontSize * e.lineHeight) / 2) * 10) /
				10 -
				e.lineWidth,
			3
		),
		inputPaddingVerticalLG:
			Math.ceil(
				((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2) * 10
			) /
				10 -
			e.lineWidth,
		inputPaddingVerticalSM: Math.max(
			Math.round(((e.controlHeightSM - e.fontSize * e.lineHeight) / 2) * 10) /
				10 -
				e.lineWidth,
			0
		),
		inputPaddingHorizontal: e.paddingSM - e.lineWidth,
		inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
		inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
		inputBorderHoverColor: e.colorPrimaryHover,
		inputBorderActiveColor: e.colorPrimaryHover
	})
}
const j6 = e => {
		const { componentCls: t, paddingLG: n } = e,
			r = `${t}-textarea`
		return {
			[r]: {
				position: 'relative',
				'&-show-count': {
					[`> ${t}`]: { height: '100%' },
					[`${t}-data-count`]: {
						color: e.colorTextDescription,
						whiteSpace: 'nowrap',
						pointerEvents: 'none',
						float: 'right',
						marginBottom: -e.fontSize * e.lineHeight
					},
					'&-rtl': { [`${t}-data-count`]: { float: 'left' } }
				},
				[`&-affix-wrapper${r}-has-feedback`]: {
					[`${t}`]: { paddingInlineEnd: n }
				},
				[`&-affix-wrapper${t}-affix-wrapper`]: {
					padding: 0,
					[`> textarea${t}`]: {
						fontSize: 'inherit',
						border: 'none',
						outline: 'none',
						'&:focus': { boxShadow: 'none !important' }
					},
					[`${t}-suffix`]: {
						margin: 0,
						'> *:not(:last-child)': { marginInline: 0 },
						[`${t}-clear-icon`]: {
							position: 'absolute',
							insetInlineEnd: e.paddingXS,
							insetBlockStart: e.paddingXS
						},
						[`${r}-suffix`]: {
							position: 'absolute',
							top: 0,
							insetInlineEnd: e.inputPaddingHorizontal,
							bottom: 0,
							zIndex: 1,
							display: 'inline-flex',
							alignItems: 'center',
							margin: 'auto',
							pointerEvents: 'none'
						}
					}
				}
			}
		}
	},
	bg = So('Input', e => {
		const t = iE(e)
		return [A6(t), j6(t), z6(t), H6(t), V6(t), $d(t)]
	}),
	tv = (e, t, n, r) => {
		const { lineHeight: o } = e,
			a = Math.floor(n * o) + 2,
			i = Math.max((t - a) / 2, 0),
			l = Math.max(t - a - i, 0)
		return { padding: `${i}px ${r}px ${l}px` }
	},
	B6 = e => {
		const {
			componentCls: t,
			pickerCellCls: n,
			pickerCellInnerCls: r,
			pickerPanelCellHeight: o,
			motionDurationSlow: a,
			borderRadiusSM: i,
			motionDurationMid: l,
			controlItemBgHover: s,
			lineWidth: c,
			lineType: f,
			colorPrimary: d,
			controlItemBgActive: v,
			colorTextLightSolid: p,
			controlHeightSM: h,
			pickerDateHoverRangeBorderColor: g,
			pickerCellBorderGap: b,
			pickerBasicCellHoverWithRangeColor: m,
			pickerPanelCellWidth: y,
			colorTextDisabled: S,
			colorBgContainerDisabled: C
		} = e
		return {
			'&::before': {
				position: 'absolute',
				top: '50%',
				insetInlineStart: 0,
				insetInlineEnd: 0,
				zIndex: 1,
				height: o,
				transform: 'translateY(-50%)',
				transition: `all ${a}`,
				content: '""'
			},
			[r]: {
				position: 'relative',
				zIndex: 2,
				display: 'inline-block',
				minWidth: o,
				height: o,
				lineHeight: `${o}px`,
				borderRadius: i,
				transition: `background ${l}, border ${l}`
			},
			[`&:hover:not(${n}-in-view),
    &:hover:not(${n}-selected):not(${n}-range-start):not(${n}-range-end):not(${n}-range-hover-start):not(${n}-range-hover-end)`]:
				{ [r]: { background: s } },
			[`&-in-view${n}-today ${r}`]: {
				'&::before': {
					position: 'absolute',
					top: 0,
					insetInlineEnd: 0,
					bottom: 0,
					insetInlineStart: 0,
					zIndex: 1,
					border: `${c}px ${f} ${d}`,
					borderRadius: i,
					content: '""'
				}
			},
			[`&-in-view${n}-in-range`]: {
				position: 'relative',
				'&::before': { background: v }
			},
			[`&-in-view${n}-selected ${r},
      &-in-view${n}-range-start ${r},
      &-in-view${n}-range-end ${r}`]: { color: p, background: d },
			[`&-in-view${n}-range-start:not(${n}-range-start-single),
      &-in-view${n}-range-end:not(${n}-range-end-single)`]: {
				'&::before': { background: v }
			},
			[`&-in-view${n}-range-start::before`]: { insetInlineStart: '50%' },
			[`&-in-view${n}-range-end::before`]: { insetInlineEnd: '50%' },
			[`&-in-view${n}-range-hover-start:not(${n}-in-range):not(${n}-range-start):not(${n}-range-end),
      &-in-view${n}-range-hover-end:not(${n}-in-range):not(${n}-range-start):not(${n}-range-end),
      &-in-view${n}-range-hover-start${n}-range-start-single,
      &-in-view${n}-range-hover-start${n}-range-start${n}-range-end${n}-range-end-near-hover,
      &-in-view${n}-range-hover-end${n}-range-start${n}-range-end${n}-range-start-near-hover,
      &-in-view${n}-range-hover-end${n}-range-end-single,
      &-in-view${n}-range-hover:not(${n}-in-range)`]: {
				'&::after': {
					position: 'absolute',
					top: '50%',
					zIndex: 0,
					height: h,
					borderTop: `${c}px dashed ${g}`,
					borderBottom: `${c}px dashed ${g}`,
					transform: 'translateY(-50%)',
					transition: `all ${a}`,
					content: '""'
				}
			},
			[`&-range-hover-start::after,
      &-range-hover-end::after,
      &-range-hover::after`]: { insetInlineEnd: 0, insetInlineStart: b },
			[`&-in-view${n}-in-range${n}-range-hover::before,
      &-in-view${n}-in-range${n}-range-hover-start::before,
      &-in-view${n}-in-range${n}-range-hover-end::before,
      &-in-view${n}-range-start${n}-range-hover::before,
      &-in-view${n}-range-end${n}-range-hover::before,
      &-in-view${n}-range-start:not(${n}-range-start-single)${n}-range-hover-start::before,
      &-in-view${n}-range-end:not(${n}-range-end-single)${n}-range-hover-end::before,
      ${t}-panel
      > :not(${t}-date-panel)
      &-in-view${n}-in-range${n}-range-hover-start::before,
      ${t}-panel
      > :not(${t}-date-panel)
      &-in-view${n}-in-range${n}-range-hover-end::before`]: { background: m },
			[`&-in-view${n}-range-start:not(${n}-range-start-single):not(${n}-range-end) ${r}`]:
				{
					borderStartStartRadius: i,
					borderEndStartRadius: i,
					borderStartEndRadius: 0,
					borderEndEndRadius: 0
				},
			[`&-in-view${n}-range-end:not(${n}-range-end-single):not(${n}-range-start) ${r}`]:
				{
					borderStartStartRadius: 0,
					borderEndStartRadius: 0,
					borderStartEndRadius: i,
					borderEndEndRadius: i
				},
			[`&-range-hover${n}-range-end::after`]: { insetInlineStart: '50%' },
			[`tr > &-in-view${n}-range-hover:first-child::after,
      tr > &-in-view${n}-range-hover-end:first-child::after,
      &-in-view${n}-start${n}-range-hover-edge-start${n}-range-hover-edge-start-near-range::after,
      &-in-view${n}-range-hover-edge-start:not(${n}-range-hover-edge-start-near-range)::after,
      &-in-view${n}-range-hover-start::after`]: {
				insetInlineStart: (y - o) / 2,
				borderInlineStart: `${c}px dashed ${g}`,
				borderStartStartRadius: c,
				borderEndStartRadius: c
			},
			[`tr > &-in-view${n}-range-hover:last-child::after,
      tr > &-in-view${n}-range-hover-start:last-child::after,
      &-in-view${n}-end${n}-range-hover-edge-end${n}-range-hover-edge-end-near-range::after,
      &-in-view${n}-range-hover-edge-end:not(${n}-range-hover-edge-end-near-range)::after,
      &-in-view${n}-range-hover-end::after`]: {
				insetInlineEnd: (y - o) / 2,
				borderInlineEnd: `${c}px dashed ${g}`,
				borderStartEndRadius: c,
				borderEndEndRadius: c
			},
			'&-disabled': {
				color: S,
				pointerEvents: 'none',
				[r]: { background: 'transparent' },
				'&::before': { background: C }
			},
			[`&-disabled${n}-today ${r}::before`]: { borderColor: S }
		}
	},
	W6 = e => {
		const {
				componentCls: t,
				pickerCellCls: n,
				pickerCellInnerCls: r,
				pickerYearMonthCellWidth: o,
				pickerControlIconSize: a,
				pickerPanelCellWidth: i,
				paddingSM: l,
				paddingXS: s,
				paddingXXS: c,
				colorBgContainer: f,
				lineWidth: d,
				lineType: v,
				borderRadiusLG: p,
				colorPrimary: h,
				colorTextHeading: g,
				colorSplit: b,
				pickerControlIconBorderWidth: m,
				colorIcon: y,
				pickerTextHeight: S,
				motionDurationMid: C,
				colorIconHover: x,
				fontWeightStrong: w,
				pickerPanelCellHeight: E,
				pickerCellPaddingVertical: P,
				colorTextDisabled: N,
				colorText: O,
				fontSize: k,
				pickerBasicCellHoverWithRangeColor: I,
				motionDurationSlow: $,
				pickerPanelWithoutTimeCellHeight: R,
				pickerQuarterPanelContentHeight: M,
				colorLink: T,
				colorLinkActive: _,
				colorLinkHover: D,
				pickerDateHoverRangeBorderColor: L,
				borderRadiusSM: H,
				colorTextLightSolid: j,
				controlItemBgHover: z,
				pickerTimePanelColumnHeight: A,
				pickerTimePanelColumnWidth: W,
				pickerTimePanelCellHeight: Y,
				controlItemBgActive: K,
				marginXXS: G,
				pickerDatePanelPaddingHorizontal: te
			} = e,
			ne = i * 7 + te * 2,
			ie = (ne - s * 2) / 3 - o - l,
			le = (ne - s * 2) / 4 - o
		return {
			[t]: {
				'&-panel': {
					display: 'inline-flex',
					flexDirection: 'column',
					textAlign: 'center',
					background: f,
					border: `${d}px ${v} ${b}`,
					borderRadius: p,
					outline: 'none',
					'&-focused': { borderColor: h },
					'&-rtl': {
						direction: 'rtl',
						[`${t}-prev-icon,
              ${t}-super-prev-icon`]: { transform: 'rotate(45deg)' },
						[`${t}-next-icon,
              ${t}-super-next-icon`]: { transform: 'rotate(-135deg)' }
					}
				},
				[`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel,
        &-week-panel,
        &-date-panel,
        &-time-panel`]: { display: 'flex', flexDirection: 'column', width: ne },
				'&-header': {
					display: 'flex',
					padding: `0 ${s}px`,
					color: g,
					borderBottom: `${d}px ${v} ${b}`,
					'> *': { flex: 'none' },
					button: {
						padding: 0,
						color: y,
						lineHeight: `${S}px`,
						background: 'transparent',
						border: 0,
						cursor: 'pointer',
						transition: `color ${C}`,
						fontSize: 'inherit'
					},
					'> button': {
						minWidth: '1.6em',
						fontSize: k,
						'&:hover': { color: x }
					},
					'&-view': {
						flex: 'auto',
						fontWeight: w,
						lineHeight: `${S}px`,
						button: {
							color: 'inherit',
							fontWeight: 'inherit',
							verticalAlign: 'top',
							'&:not(:first-child)': { marginInlineStart: s },
							'&:hover': { color: h }
						}
					}
				},
				[`&-prev-icon,
        &-next-icon,
        &-super-prev-icon,
        &-super-next-icon`]: {
					position: 'relative',
					display: 'inline-block',
					width: a,
					height: a,
					'&::before': {
						position: 'absolute',
						top: 0,
						insetInlineStart: 0,
						display: 'inline-block',
						width: a,
						height: a,
						border: '0 solid currentcolor',
						borderBlockStartWidth: m,
						borderBlockEndWidth: 0,
						borderInlineStartWidth: m,
						borderInlineEndWidth: 0,
						content: '""'
					}
				},
				[`&-super-prev-icon,
        &-super-next-icon`]: {
					'&::after': {
						position: 'absolute',
						top: Math.ceil(a / 2),
						insetInlineStart: Math.ceil(a / 2),
						display: 'inline-block',
						width: a,
						height: a,
						border: '0 solid currentcolor',
						borderBlockStartWidth: m,
						borderBlockEndWidth: 0,
						borderInlineStartWidth: m,
						borderInlineEndWidth: 0,
						content: '""'
					}
				},
				[`&-prev-icon,
        &-super-prev-icon`]: { transform: 'rotate(-45deg)' },
				[`&-next-icon,
        &-super-next-icon`]: { transform: 'rotate(135deg)' },
				'&-content': {
					width: '100%',
					tableLayout: 'fixed',
					borderCollapse: 'collapse',
					'th, td': { position: 'relative', minWidth: E, fontWeight: 'normal' },
					th: { height: E + P * 2, color: O, verticalAlign: 'middle' }
				},
				'&-cell': Object.assign(
					{
						padding: `${P}px 0`,
						color: N,
						cursor: 'pointer',
						'&-in-view': { color: O }
					},
					B6(e)
				),
				[`&-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-start ${r},
        &-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-end ${r}`]:
					{
						'&::after': {
							position: 'absolute',
							top: 0,
							bottom: 0,
							zIndex: -1,
							background: I,
							transition: `all ${$}`,
							content: '""'
						}
					},
				[`&-date-panel
        ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-start
        ${r}::after`]: { insetInlineEnd: -(i - E) / 2, insetInlineStart: 0 },
				[`&-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-end ${r}::after`]:
					{ insetInlineEnd: 0, insetInlineStart: -(i - E) / 2 },
				[`&-range-hover${t}-range-start::after`]: { insetInlineEnd: '50%' },
				[`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
					[`${t}-content`]: { height: R * 4 },
					[r]: { padding: `0 ${s}px` }
				},
				'&-quarter-panel': {
					[`${t}-content`]: { height: M },
					[`${t}-cell-range-hover-start::after`]: {
						insetInlineStart: le,
						borderInlineStart: `${d}px dashed ${L}`,
						[`${t}-panel-rtl &`]: {
							insetInlineEnd: le,
							borderInlineEnd: `${d}px dashed ${L}`
						}
					},
					[`${t}-cell-range-hover-end::after`]: {
						insetInlineEnd: le,
						borderInlineEnd: `${d}px dashed ${L}`,
						[`${t}-panel-rtl &`]: {
							insetInlineStart: le,
							borderInlineStart: `${d}px dashed ${L}`
						}
					}
				},
				[`&-panel ${t}-footer`]: { borderTop: `${d}px ${v} ${b}` },
				'&-footer': {
					width: 'min-content',
					minWidth: '100%',
					lineHeight: `${S - 2 * d}px`,
					textAlign: 'center',
					'&-extra': {
						padding: `0 ${l}`,
						lineHeight: `${S - 2 * d}px`,
						textAlign: 'start',
						'&:not(:last-child)': { borderBottom: `${d}px ${v} ${b}` }
					}
				},
				'&-now': { textAlign: 'start' },
				'&-today-btn': {
					color: T,
					'&:hover': { color: D },
					'&:active': { color: _ },
					[`&${t}-today-btn-disabled`]: { color: N, cursor: 'not-allowed' }
				},
				'&-decade-panel': {
					[r]: { padding: `0 ${s / 2}px` },
					[`${t}-cell::before`]: { display: 'none' }
				},
				[`&-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
					[`${t}-body`]: { padding: `0 ${s}px` },
					[r]: { width: o },
					[`${t}-cell-range-hover-start::after`]: {
						borderStartStartRadius: H,
						borderEndStartRadius: H,
						borderStartEndRadius: 0,
						borderEndEndRadius: 0,
						[`${t}-panel-rtl &`]: {
							borderStartStartRadius: 0,
							borderEndStartRadius: 0,
							borderStartEndRadius: H,
							borderEndEndRadius: H
						}
					},
					[`${t}-cell-range-hover-end::after`]: {
						borderStartStartRadius: 0,
						borderEndStartRadius: 0,
						borderStartEndRadius: H,
						borderEndEndRadius: H,
						[`${t}-panel-rtl &`]: {
							borderStartStartRadius: H,
							borderEndStartRadius: H,
							borderStartEndRadius: 0,
							borderEndEndRadius: 0
						}
					}
				},
				[`&-year-panel,
        &-month-panel`]: {
					[`${t}-cell-range-hover-start::after`]: {
						insetInlineStart: ie,
						borderInlineStart: `${d}px dashed ${L}`,
						[`${t}-panel-rtl &`]: {
							insetInlineEnd: ie,
							borderInlineEnd: `${d}px dashed ${L}`
						}
					},
					[`${t}-cell-range-hover-end::after`]: {
						insetInlineEnd: ie,
						borderInlineEnd: `${d}px dashed ${L}`,
						[`${t}-panel-rtl &`]: {
							insetInlineStart: ie,
							borderInlineStart: `${d}px dashed ${L}`
						}
					}
				},
				'&-week-panel': {
					[`${t}-body`]: { padding: `${s}px ${l}px` },
					[`${t}-cell`]: {
						[`&:hover ${r},
            &-selected ${r},
            ${r}`]: { background: 'transparent !important' }
					},
					'&-row': {
						td: {
							'&:before': { transition: `background ${C}` },
							'&:first-child:before': {
								borderStartStartRadius: H,
								borderEndStartRadius: H
							},
							'&:last-child:before': {
								borderStartEndRadius: H,
								borderEndEndRadius: H
							}
						},
						['&:hover td']: { '&:before': { background: z } },
						[`&-range-start td,
            &-range-end td,
            &-selected td`]: {
							[`&${n}`]: {
								'&:before': { background: h },
								[`&${t}-cell-week`]: {
									color: new ln(j).setAlpha(0.5).toHexString()
								},
								[r]: { color: j }
							}
						},
						['&-range-hover td:before']: { background: K }
					}
				},
				'&-date-panel': {
					[`${t}-body`]: { padding: `${s}px ${te}px` },
					[`${t}-content`]: { width: i * 7, th: { width: i } }
				},
				'&-datetime-panel': {
					display: 'flex',
					[`${t}-time-panel`]: { borderInlineStart: `${d}px ${v} ${b}` },
					[`${t}-date-panel,
          ${t}-time-panel`]: { transition: `opacity ${$}` },
					'&-active': {
						[`${t}-date-panel,
            ${t}-time-panel`]: { opacity: 0.3, '&-active': { opacity: 1 } }
					}
				},
				'&-time-panel': {
					width: 'auto',
					minWidth: 'auto',
					direction: 'ltr',
					[`${t}-content`]: { display: 'flex', flex: 'auto', height: A },
					'&-column': {
						flex: '1 0 auto',
						width: W,
						margin: `${c}px 0`,
						padding: 0,
						overflowY: 'hidden',
						textAlign: 'start',
						listStyle: 'none',
						transition: `background ${C}`,
						overflowX: 'hidden',
						'&::after': { display: 'block', height: A - Y, content: '""' },
						'&:not(:first-child)': { borderInlineStart: `${d}px ${v} ${b}` },
						'&-active': { background: new ln(K).setAlpha(0.2).toHexString() },
						'&:hover': { overflowY: 'auto' },
						'> li': {
							margin: 0,
							padding: 0,
							[`&${t}-time-panel-cell`]: {
								marginInline: G,
								[`${t}-time-panel-cell-inner`]: {
									display: 'block',
									width: W - 2 * G,
									height: Y,
									margin: 0,
									paddingBlock: 0,
									paddingInlineEnd: 0,
									paddingInlineStart: (W - Y) / 2,
									color: O,
									lineHeight: `${Y}px`,
									borderRadius: H,
									cursor: 'pointer',
									transition: `background ${C}`,
									'&:hover': { background: z }
								},
								'&-selected': {
									[`${t}-time-panel-cell-inner`]: { background: K }
								},
								'&-disabled': {
									[`${t}-time-panel-cell-inner`]: {
										color: N,
										background: 'transparent',
										cursor: 'not-allowed'
									}
								}
							}
						}
					}
				},
				[`&-datetime-panel ${t}-time-panel-column:after`]: {
					height: A - Y + c * 2
				}
			}
		}
	},
	U6 = e => {
		const {
			componentCls: t,
			colorBgContainer: n,
			colorError: r,
			colorErrorOutline: o,
			colorWarning: a,
			colorWarningOutline: i
		} = e
		return {
			[`${t}:not(${t}-disabled)`]: {
				[`&${t}-status-error`]: {
					'&, &:not([disabled]):hover': { backgroundColor: n, borderColor: r },
					[`&${t}-focused, &:focus`]: Object.assign(
						{},
						zi(
							Zt(e, {
								inputBorderActiveColor: r,
								inputBorderHoverColor: r,
								controlOutline: o
							})
						)
					),
					[`${t}-active-bar`]: { background: r }
				},
				[`&${t}-status-warning`]: {
					'&, &:not([disabled]):hover': { backgroundColor: n, borderColor: a },
					[`&${t}-focused, &:focus`]: Object.assign(
						{},
						zi(
							Zt(e, {
								inputBorderActiveColor: a,
								inputBorderHoverColor: a,
								controlOutline: i
							})
						)
					),
					[`${t}-active-bar`]: { background: a }
				}
			}
		}
	},
	Y6 = e => {
		const {
			componentCls: t,
			antCls: n,
			controlHeight: r,
			fontSize: o,
			inputPaddingHorizontal: a,
			colorBgContainer: i,
			lineWidth: l,
			lineType: s,
			colorBorder: c,
			borderRadius: f,
			motionDurationMid: d,
			colorBgContainerDisabled: v,
			colorTextDisabled: p,
			colorTextPlaceholder: h,
			controlHeightLG: g,
			fontSizeLG: b,
			controlHeightSM: m,
			inputPaddingHorizontalSM: y,
			paddingXS: S,
			marginXS: C,
			colorTextDescription: x,
			lineWidthBold: w,
			lineHeight: E,
			colorPrimary: P,
			motionDurationSlow: N,
			zIndexPopup: O,
			paddingXXS: k,
			paddingSM: I,
			pickerTextHeight: $,
			controlItemBgActive: R,
			colorPrimaryBorder: M,
			sizePopupArrow: T,
			borderRadiusXS: _,
			borderRadiusOuter: D,
			colorBgElevated: L,
			borderRadiusLG: H,
			boxShadowSecondary: j,
			borderRadiusSM: z,
			colorSplit: A,
			controlItemBgHover: W,
			presetsWidth: Y,
			presetsMaxWidth: K,
			boxShadowPopoverArrow: G
		} = e
		return [
			{
				[t]: Object.assign(
					Object.assign(Object.assign({}, po(e)), tv(e, r, o, a)),
					{
						position: 'relative',
						display: 'inline-flex',
						alignItems: 'center',
						background: i,
						lineHeight: 1,
						border: `${l}px ${s} ${c}`,
						borderRadius: f,
						transition: `border ${d}, box-shadow ${d}`,
						'&:hover, &-focused': Object.assign({}, Dd(e)),
						'&-focused': Object.assign({}, zi(e)),
						[`&${t}-disabled`]: {
							background: v,
							borderColor: c,
							cursor: 'not-allowed',
							[`${t}-suffix`]: { color: p }
						},
						[`&${t}-borderless`]: {
							backgroundColor: 'transparent !important',
							borderColor: 'transparent !important',
							boxShadow: 'none !important'
						},
						[`${t}-input`]: {
							position: 'relative',
							display: 'inline-flex',
							alignItems: 'center',
							width: '100%',
							'> input': Object.assign(Object.assign({}, yg(e)), {
								flex: 'auto',
								minWidth: 1,
								height: 'auto',
								padding: 0,
								background: 'transparent',
								border: 0,
								borderRadius: 0,
								'&:focus': { boxShadow: 'none' },
								'&[disabled]': { background: 'transparent' }
							}),
							'&:hover': { [`${t}-clear`]: { opacity: 1 } },
							'&-placeholder': { '> input': { color: h } }
						},
						'&-large': Object.assign(Object.assign({}, tv(e, g, b, a)), {
							[`${t}-input > input`]: { fontSize: b }
						}),
						'&-small': Object.assign({}, tv(e, m, o, y)),
						[`${t}-suffix`]: {
							display: 'flex',
							flex: 'none',
							alignSelf: 'center',
							marginInlineStart: S / 2,
							color: p,
							lineHeight: 1,
							pointerEvents: 'none',
							'> *': {
								verticalAlign: 'top',
								'&:not(:last-child)': { marginInlineEnd: C }
							}
						},
						[`${t}-clear`]: {
							position: 'absolute',
							top: '50%',
							insetInlineEnd: 0,
							color: p,
							lineHeight: 1,
							background: i,
							transform: 'translateY(-50%)',
							cursor: 'pointer',
							opacity: 0,
							transition: `opacity ${d}, color ${d}`,
							'> *': { verticalAlign: 'top' },
							'&:hover': { color: x }
						},
						[`${t}-separator`]: {
							position: 'relative',
							display: 'inline-block',
							width: '1em',
							height: b,
							color: p,
							fontSize: b,
							verticalAlign: 'top',
							cursor: 'default',
							[`${t}-focused &`]: { color: x },
							[`${t}-range-separator &`]: {
								[`${t}-disabled &`]: { cursor: 'not-allowed' }
							}
						},
						'&-range': {
							position: 'relative',
							display: 'inline-flex',
							[`${t}-clear`]: { insetInlineEnd: a },
							'&:hover': { [`${t}-clear`]: { opacity: 1 } },
							[`${t}-active-bar`]: {
								bottom: -l,
								height: w,
								marginInlineStart: a,
								background: P,
								opacity: 0,
								transition: `all ${N} ease-out`,
								pointerEvents: 'none'
							},
							[`&${t}-focused`]: { [`${t}-active-bar`]: { opacity: 1 } },
							[`${t}-range-separator`]: {
								alignItems: 'center',
								padding: `0 ${S}px`,
								lineHeight: 1
							},
							[`&${t}-small`]: {
								[`${t}-clear`]: { insetInlineEnd: y },
								[`${t}-active-bar`]: { marginInlineStart: y }
							}
						},
						'&-dropdown': Object.assign(
							Object.assign(Object.assign({}, po(e)), W6(e)),
							{
								position: 'absolute',
								top: -9999,
								left: { _skip_check_: !0, value: -9999 },
								zIndex: O,
								[`&${t}-dropdown-hidden`]: { display: 'none' },
								[`&${t}-dropdown-placement-bottomLeft`]: {
									[`${t}-range-arrow`]: {
										top: 0,
										display: 'block',
										transform: 'translateY(-100%)'
									}
								},
								[`&${t}-dropdown-placement-topLeft`]: {
									[`${t}-range-arrow`]: {
										bottom: 0,
										display: 'block',
										transform: 'translateY(100%) rotate(180deg)'
									}
								},
								[`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topRight`]:
									{ animationName: qh },
								[`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]:
									{ animationName: Gh },
								[`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topRight`]:
									{ animationName: Qh },
								[`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]:
									{ animationName: Xh },
								[`${t}-panel > ${t}-time-panel`]: { paddingTop: k },
								[`${t}-ranges`]: {
									marginBottom: 0,
									padding: `${k}px ${I}px`,
									overflow: 'hidden',
									lineHeight: `${$ - 2 * l - S / 2}px`,
									textAlign: 'start',
									listStyle: 'none',
									display: 'flex',
									justifyContent: 'space-between',
									'> li': { display: 'inline-block' },
									[`${t}-preset > ${n}-tag-blue`]: {
										color: P,
										background: R,
										borderColor: M,
										cursor: 'pointer'
									},
									[`${t}-ok`]: { marginInlineStart: 'auto' }
								},
								[`${t}-range-wrapper`]: {
									display: 'flex',
									position: 'relative'
								},
								[`${t}-range-arrow`]: Object.assign(
									{
										position: 'absolute',
										zIndex: 1,
										display: 'none',
										marginInlineStart: a * 1.5,
										transition: `left ${N} ease-out`
									},
									tN(T, _, D, L, G)
								),
								[`${t}-panel-container`]: {
									overflow: 'hidden',
									verticalAlign: 'top',
									background: L,
									borderRadius: H,
									boxShadow: j,
									transition: `margin ${N}`,
									[`${t}-panel-layout`]: {
										display: 'flex',
										flexWrap: 'nowrap',
										alignItems: 'stretch'
									},
									[`${t}-presets`]: {
										display: 'flex',
										flexDirection: 'column',
										minWidth: Y,
										maxWidth: K,
										ul: {
											height: 0,
											flex: 'auto',
											listStyle: 'none',
											overflow: 'auto',
											margin: 0,
											padding: S,
											borderInlineEnd: `${l}px ${s} ${A}`,
											li: Object.assign(Object.assign({}, wa), {
												borderRadius: z,
												paddingInline: S,
												paddingBlock: (m - Math.round(o * E)) / 2,
												cursor: 'pointer',
												transition: `all ${N}`,
												'+ li': { marginTop: C },
												'&:hover': { background: W }
											})
										}
									},
									[`${t}-panels`]: {
										display: 'inline-flex',
										flexWrap: 'nowrap',
										direction: 'ltr',
										[`${t}-panel`]: { borderWidth: `0 0 ${l}px` },
										'&:last-child': { [`${t}-panel`]: { borderWidth: 0 } }
									},
									[`${t}-panel`]: {
										verticalAlign: 'top',
										background: 'transparent',
										borderRadius: 0,
										borderWidth: 0,
										[`${t}-content,
            table`]: { textAlign: 'center' },
										'&-focused': { borderColor: c }
									}
								}
							}
						),
						'&-dropdown-range': {
							padding: `${(T * 2) / 3}px 0`,
							'&-hidden': { display: 'none' }
						},
						'&-rtl': {
							direction: 'rtl',
							[`${t}-separator`]: { transform: 'rotate(180deg)' },
							[`${t}-footer`]: { '&-extra': { direction: 'rtl' } }
						}
					}
				)
			},
			Ai(e, 'slide-up'),
			Ai(e, 'slide-down'),
			kc(e, 'move-up'),
			kc(e, 'move-down')
		]
	},
	K6 = e => {
		const {
			componentCls: n,
			controlHeightLG: r,
			controlHeightSM: o,
			colorPrimary: a,
			paddingXXS: i,
			padding: l
		} = e
		return {
			pickerCellCls: `${n}-cell`,
			pickerCellInnerCls: `${n}-cell-inner`,
			pickerTextHeight: r,
			pickerPanelCellWidth: o * 1.5,
			pickerPanelCellHeight: o,
			pickerDateHoverRangeBorderColor: new ln(a).lighten(20).toHexString(),
			pickerBasicCellHoverWithRangeColor: new ln(a).lighten(35).toHexString(),
			pickerPanelWithoutTimeCellHeight: r * 1.65,
			pickerYearMonthCellWidth: r * 1.5,
			pickerTimePanelColumnHeight: 28 * 8,
			pickerTimePanelColumnWidth: r * 1.4,
			pickerTimePanelCellHeight: 28,
			pickerQuarterPanelContentHeight: r * 1.4,
			pickerCellPaddingVertical: i + i / 2,
			pickerCellBorderGap: 2,
			pickerControlIconSize: 7,
			pickerControlIconBorderWidth: 1.5,
			pickerDatePanelPaddingHorizontal: l + i / 2
		}
	},
	lE = So(
		'DatePicker',
		e => {
			const t = Zt(iE(e), K6(e))
			return [Y6(t), U6(t), $d(e, { focusElCls: `${e.componentCls}-focused` })]
		},
		e => ({
			presetsWidth: 120,
			presetsMaxWidth: 200,
			zIndexPopup: e.zIndexPopupBase + 50
		})
	),
	G6 = e => {
		const { prefixCls: t, className: n, style: r, size: o, shape: a } = e,
			i = Z({ [`${t}-lg`]: o === 'large', [`${t}-sm`]: o === 'small' }),
			l = Z({
				[`${t}-circle`]: a === 'circle',
				[`${t}-square`]: a === 'square',
				[`${t}-round`]: a === 'round'
			}),
			s = u.useMemo(
				() =>
					typeof o == 'number'
						? { width: o, height: o, lineHeight: `${o}px` }
						: {},
				[o]
			)
		return u.createElement('span', {
			className: Z(t, i, l, n),
			style: Object.assign(Object.assign({}, s), r)
		})
	},
	_d = G6,
	X6 = new Mn('ant-skeleton-loading', {
		'0%': { backgroundPosition: '100% 50%' },
		'100%': { backgroundPosition: '0 50%' }
	}),
	Ld = e => ({ height: e, lineHeight: `${e}px` }),
	Ei = e => Object.assign({ width: e }, Ld(e)),
	q6 = e => ({
		background: e.skeletonLoadingBackground,
		backgroundSize: '400% 100%',
		animationName: X6,
		animationDuration: e.skeletonLoadingMotionDuration,
		animationTimingFunction: 'ease',
		animationIterationCount: 'infinite'
	}),
	nv = e => Object.assign({ width: e * 5, minWidth: e * 5 }, Ld(e)),
	Q6 = e => {
		const {
			skeletonAvatarCls: t,
			color: n,
			controlHeight: r,
			controlHeightLG: o,
			controlHeightSM: a
		} = e
		return {
			[`${t}`]: Object.assign(
				{ display: 'inline-block', verticalAlign: 'top', background: n },
				Ei(r)
			),
			[`${t}${t}-circle`]: { borderRadius: '50%' },
			[`${t}${t}-lg`]: Object.assign({}, Ei(o)),
			[`${t}${t}-sm`]: Object.assign({}, Ei(a))
		}
	},
	Z6 = e => {
		const {
			controlHeight: t,
			borderRadiusSM: n,
			skeletonInputCls: r,
			controlHeightLG: o,
			controlHeightSM: a,
			color: i
		} = e
		return {
			[`${r}`]: Object.assign(
				{
					display: 'inline-block',
					verticalAlign: 'top',
					background: i,
					borderRadius: n
				},
				nv(t)
			),
			[`${r}-lg`]: Object.assign({}, nv(o)),
			[`${r}-sm`]: Object.assign({}, nv(a))
		}
	},
	L1 = e => Object.assign({ width: e }, Ld(e)),
	J6 = e => {
		const {
			skeletonImageCls: t,
			imageSizeBase: n,
			color: r,
			borderRadiusSM: o
		} = e
		return {
			[`${t}`]: Object.assign(
				Object.assign(
					{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						verticalAlign: 'top',
						background: r,
						borderRadius: o
					},
					L1(n * 2)
				),
				{
					[`${t}-path`]: { fill: '#bfbfbf' },
					[`${t}-svg`]: Object.assign(Object.assign({}, L1(n)), {
						maxWidth: n * 4,
						maxHeight: n * 4
					}),
					[`${t}-svg${t}-svg-circle`]: { borderRadius: '50%' }
				}
			),
			[`${t}${t}-circle`]: { borderRadius: '50%' }
		}
	},
	rv = (e, t, n) => {
		const { skeletonButtonCls: r } = e
		return {
			[`${n}${r}-circle`]: { width: t, minWidth: t, borderRadius: '50%' },
			[`${n}${r}-round`]: { borderRadius: t }
		}
	},
	ov = e => Object.assign({ width: e * 2, minWidth: e * 2 }, Ld(e)),
	e_ = e => {
		const {
			borderRadiusSM: t,
			skeletonButtonCls: n,
			controlHeight: r,
			controlHeightLG: o,
			controlHeightSM: a,
			color: i
		} = e
		return Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(
						Object.assign(
							{
								[`${n}`]: Object.assign(
									{
										display: 'inline-block',
										verticalAlign: 'top',
										background: i,
										borderRadius: t,
										width: r * 2,
										minWidth: r * 2
									},
									ov(r)
								)
							},
							rv(e, r, n)
						),
						{ [`${n}-lg`]: Object.assign({}, ov(o)) }
					),
					rv(e, o, `${n}-lg`)
				),
				{ [`${n}-sm`]: Object.assign({}, ov(a)) }
			),
			rv(e, a, `${n}-sm`)
		)
	},
	t_ = e => {
		const {
			componentCls: t,
			skeletonAvatarCls: n,
			skeletonTitleCls: r,
			skeletonParagraphCls: o,
			skeletonButtonCls: a,
			skeletonInputCls: i,
			skeletonImageCls: l,
			controlHeight: s,
			controlHeightLG: c,
			controlHeightSM: f,
			color: d,
			padding: v,
			marginSM: p,
			borderRadius: h,
			skeletonTitleHeight: g,
			skeletonBlockRadius: b,
			skeletonParagraphLineHeight: m,
			controlHeightXS: y,
			skeletonParagraphMarginTop: S
		} = e
		return {
			[`${t}`]: {
				display: 'table',
				width: '100%',
				[`${t}-header`]: {
					display: 'table-cell',
					paddingInlineEnd: v,
					verticalAlign: 'top',
					[`${n}`]: Object.assign(
						{ display: 'inline-block', verticalAlign: 'top', background: d },
						Ei(s)
					),
					[`${n}-circle`]: { borderRadius: '50%' },
					[`${n}-lg`]: Object.assign({}, Ei(c)),
					[`${n}-sm`]: Object.assign({}, Ei(f))
				},
				[`${t}-content`]: {
					display: 'table-cell',
					width: '100%',
					verticalAlign: 'top',
					[`${r}`]: {
						width: '100%',
						height: g,
						background: d,
						borderRadius: b,
						[`+ ${o}`]: { marginBlockStart: f }
					},
					[`${o}`]: {
						padding: 0,
						'> li': {
							width: '100%',
							height: m,
							listStyle: 'none',
							background: d,
							borderRadius: b,
							'+ li': { marginBlockStart: y }
						}
					},
					[`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
						width: '61%'
					}
				},
				[`&-round ${t}-content`]: { [`${r}, ${o} > li`]: { borderRadius: h } }
			},
			[`${t}-with-avatar ${t}-content`]: {
				[`${r}`]: { marginBlockStart: p, [`+ ${o}`]: { marginBlockStart: S } }
			},
			[`${t}${t}-element`]: Object.assign(
				Object.assign(
					Object.assign(
						Object.assign({ display: 'inline-block', width: 'auto' }, e_(e)),
						Q6(e)
					),
					Z6(e)
				),
				J6(e)
			),
			[`${t}${t}-block`]: {
				width: '100%',
				[`${a}`]: { width: '100%' },
				[`${i}`]: { width: '100%' }
			},
			[`${t}${t}-active`]: {
				[`
        ${r},
        ${o} > li,
        ${n},
        ${a},
        ${i},
        ${l}
      `]: Object.assign({}, q6(e))
			}
		}
	},
	Qi = So(
		'Skeleton',
		e => {
			const { componentCls: t } = e,
				n = Zt(e, {
					skeletonAvatarCls: `${t}-avatar`,
					skeletonTitleCls: `${t}-title`,
					skeletonParagraphCls: `${t}-paragraph`,
					skeletonButtonCls: `${t}-button`,
					skeletonInputCls: `${t}-input`,
					skeletonImageCls: `${t}-image`,
					imageSizeBase: e.controlHeight * 1.5,
					skeletonTitleHeight: e.controlHeight / 2,
					skeletonBlockRadius: e.borderRadiusSM,
					skeletonParagraphLineHeight: e.controlHeight / 2,
					skeletonParagraphMarginTop: e.marginLG + e.marginXXS,
					borderRadius: 100,
					skeletonLoadingBackground: `linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,
					skeletonLoadingMotionDuration: '1.4s'
				})
			return [t_(n)]
		},
		e => {
			const { colorFillContent: t, colorFill: n } = e
			return { color: t, colorGradientEnd: n }
		}
	),
	n_ = e => {
		const {
				prefixCls: t,
				className: n,
				rootClassName: r,
				active: o,
				shape: a = 'circle',
				size: i = 'default'
			} = e,
			{ getPrefixCls: l } = u.useContext(kt),
			s = l('skeleton', t),
			[c, f] = Qi(s),
			d = Tr(e, ['prefixCls', 'className']),
			v = Z(s, `${s}-element`, { [`${s}-active`]: o }, n, r, f)
		return c(
			u.createElement(
				'div',
				{ className: v },
				u.createElement(
					_d,
					Object.assign({ prefixCls: `${s}-avatar`, shape: a, size: i }, d)
				)
			)
		)
	},
	r_ = n_,
	o_ = e => {
		const {
				prefixCls: t,
				className: n,
				rootClassName: r,
				active: o,
				block: a = !1,
				size: i = 'default'
			} = e,
			{ getPrefixCls: l } = u.useContext(kt),
			s = l('skeleton', t),
			[c, f] = Qi(s),
			d = Tr(e, ['prefixCls']),
			v = Z(
				s,
				`${s}-element`,
				{ [`${s}-active`]: o, [`${s}-block`]: a },
				n,
				r,
				f
			)
		return c(
			u.createElement(
				'div',
				{ className: v },
				u.createElement(
					_d,
					Object.assign({ prefixCls: `${s}-button`, size: i }, d)
				)
			)
		)
	},
	a_ = o_
var i_ = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z'
				}
			}
		]
	},
	name: 'dot-chart',
	theme: 'outlined'
}
const l_ = i_
var sE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: l_ }))
}
sE.displayName = 'DotChartOutlined'
const s_ = u.forwardRef(sE),
	u_ = e => {
		const {
				prefixCls: t,
				className: n,
				rootClassName: r,
				style: o,
				active: a,
				children: i
			} = e,
			{ getPrefixCls: l } = u.useContext(kt),
			s = l('skeleton', t),
			[c, f] = Qi(s),
			d = Z(s, `${s}-element`, { [`${s}-active`]: a }, f, n, r),
			v = i ?? u.createElement(s_, null)
		return c(
			u.createElement(
				'div',
				{ className: d },
				u.createElement('div', { className: Z(`${s}-image`, n), style: o }, v)
			)
		)
	},
	c_ = u_,
	d_ =
		'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
	f_ = e => {
		const {
				prefixCls: t,
				className: n,
				rootClassName: r,
				style: o,
				active: a
			} = e,
			{ getPrefixCls: i } = u.useContext(kt),
			l = i('skeleton', t),
			[s, c] = Qi(l),
			f = Z(l, `${l}-element`, { [`${l}-active`]: a }, n, r, c)
		return s(
			u.createElement(
				'div',
				{ className: f },
				u.createElement(
					'div',
					{ className: Z(`${l}-image`, n), style: o },
					u.createElement(
						'svg',
						{
							viewBox: '0 0 1098 1024',
							xmlns: 'http://www.w3.org/2000/svg',
							className: `${l}-image-svg`
						},
						u.createElement('path', { d: d_, className: `${l}-image-path` })
					)
				)
			)
		)
	},
	v_ = f_,
	p_ = e => {
		const {
				prefixCls: t,
				className: n,
				rootClassName: r,
				active: o,
				block: a,
				size: i = 'default'
			} = e,
			{ getPrefixCls: l } = u.useContext(kt),
			s = l('skeleton', t),
			[c, f] = Qi(s),
			d = Tr(e, ['prefixCls']),
			v = Z(
				s,
				`${s}-element`,
				{ [`${s}-active`]: o, [`${s}-block`]: a },
				n,
				r,
				f
			)
		return c(
			u.createElement(
				'div',
				{ className: v },
				u.createElement(
					_d,
					Object.assign({ prefixCls: `${s}-input`, size: i }, d)
				)
			)
		)
	},
	m_ = p_,
	h_ = e => {
		const t = l => {
				const { width: s, rows: c = 2 } = e
				if (Array.isArray(s)) return s[l]
				if (c - 1 === l) return s
			},
			{ prefixCls: n, className: r, style: o, rows: a } = e,
			i = xe(Array(a)).map((l, s) =>
				u.createElement('li', { key: s, style: { width: t(s) } })
			)
		return u.createElement('ul', { className: Z(n, r), style: o }, i)
	},
	g_ = h_,
	y_ = e => {
		let { prefixCls: t, className: n, width: r, style: o } = e
		return u.createElement('h3', {
			className: Z(t, n),
			style: Object.assign({ width: r }, o)
		})
	},
	b_ = y_
function av(e) {
	return e && typeof e == 'object' ? e : {}
}
function S_(e, t) {
	return e && !t
		? { size: 'large', shape: 'square' }
		: { size: 'large', shape: 'circle' }
}
function C_(e, t) {
	return !e && t ? { width: '38%' } : e && t ? { width: '50%' } : {}
}
function w_(e, t) {
	const n = {}
	return (
		(!e || !t) && (n.width = '61%'), !e && t ? (n.rows = 3) : (n.rows = 2), n
	)
}
const Zi = e => {
	const {
			prefixCls: t,
			loading: n,
			className: r,
			rootClassName: o,
			style: a,
			children: i,
			avatar: l = !1,
			title: s = !0,
			paragraph: c = !0,
			active: f,
			round: d
		} = e,
		{ getPrefixCls: v, direction: p } = u.useContext(kt),
		h = v('skeleton', t),
		[g, b] = Qi(h)
	if (n || !('loading' in e)) {
		const m = !!l,
			y = !!s,
			S = !!c
		let C
		if (m) {
			const E = Object.assign(
				Object.assign({ prefixCls: `${h}-avatar` }, S_(y, S)),
				av(l)
			)
			C = u.createElement(
				'div',
				{ className: `${h}-header` },
				u.createElement(_d, Object.assign({}, E))
			)
		}
		let x
		if (y || S) {
			let E
			if (y) {
				const N = Object.assign(
					Object.assign({ prefixCls: `${h}-title` }, C_(m, S)),
					av(s)
				)
				E = u.createElement(b_, Object.assign({}, N))
			}
			let P
			if (S) {
				const N = Object.assign(
					Object.assign({ prefixCls: `${h}-paragraph` }, w_(m, y)),
					av(c)
				)
				P = u.createElement(g_, Object.assign({}, N))
			}
			x = u.createElement('div', { className: `${h}-content` }, E, P)
		}
		const w = Z(
			h,
			{
				[`${h}-with-avatar`]: m,
				[`${h}-active`]: f,
				[`${h}-rtl`]: p === 'rtl',
				[`${h}-round`]: d
			},
			r,
			o,
			b
		)
		return g(u.createElement('div', { className: w, style: a }, C, x))
	}
	return typeof i < 'u' ? i : null
}
Zi.Button = a_
Zi.Avatar = r_
Zi.Input = m_
Zi.Image = v_
Zi.Node = c_
const zo = Zi
var x_ = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{ tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
			{
				tag: 'path',
				attrs: {
					d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z'
				}
			},
			{
				tag: 'path',
				attrs: {
					d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z'
				}
			}
		]
	},
	name: 'plus',
	theme: 'outlined'
}
const E_ = x_
var uE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: E_ }))
}
uE.displayName = 'PlusOutlined'
const $_ = u.forwardRef(uE),
	Ad = u.createContext(null)
var cE = u.forwardRef(function (e, t) {
		var n = e.prefixCls,
			r = e.className,
			o = e.style,
			a = e.id,
			i = e.active,
			l = e.tabKey,
			s = e.children
		return u.createElement(
			'div',
			{
				id: a && ''.concat(a, '-panel-').concat(l),
				role: 'tabpanel',
				tabIndex: i ? 0 : -1,
				'aria-labelledby': a && ''.concat(a, '-tab-').concat(l),
				'aria-hidden': !i,
				style: o,
				className: Z(n, i && ''.concat(n, '-active'), r),
				ref: t
			},
			s
		)
	}),
	P_ = ['key', 'forceRender', 'style', 'className']
function R_(e) {
	var t = e.id,
		n = e.activeKey,
		r = e.animated,
		o = e.tabPosition,
		a = e.destroyInactiveTabPane,
		i = u.useContext(Ad),
		l = i.prefixCls,
		s = i.tabs,
		c = r.tabPane,
		f = ''.concat(l, '-tabpane')
	return u.createElement(
		'div',
		{ className: Z(''.concat(l, '-content-holder')) },
		u.createElement(
			'div',
			{
				className: Z(
					''.concat(l, '-content'),
					''.concat(l, '-content-').concat(o),
					V({}, ''.concat(l, '-content-animated'), c)
				)
			},
			s.map(function (d) {
				var v = d.key,
					p = d.forceRender,
					h = d.style,
					g = d.className,
					b = ot(d, P_),
					m = v === n
				return u.createElement(
					Xr,
					se(
						{
							key: v,
							visible: m,
							forceRender: p,
							removeOnLeave: !!a,
							leavedClassName: ''.concat(f, '-hidden')
						},
						r.tabPaneMotion
					),
					function (y, S) {
						var C = y.style,
							x = y.className
						return u.createElement(
							cE,
							se({}, b, {
								prefixCls: f,
								id: t,
								tabKey: v,
								animated: c,
								active: m,
								style: F(F({}, h), C),
								className: Z(g, x),
								ref: S
							})
						)
					}
				)
			})
		)
	)
}
var A1 = { width: 0, height: 0, left: 0, top: 0 }
function M_(e, t, n) {
	return u.useMemo(
		function () {
			for (
				var r,
					o = new Map(),
					a = t.get((r = e[0]) === null || r === void 0 ? void 0 : r.key) || A1,
					i = a.left + a.width,
					l = 0;
				l < e.length;
				l += 1
			) {
				var s = e[l].key,
					c = t.get(s)
				if (!c) {
					var f
					c =
						t.get((f = e[l - 1]) === null || f === void 0 ? void 0 : f.key) ||
						A1
				}
				var d = o.get(s) || F({}, c)
				;(d.right = i - d.left - d.width), o.set(s, d)
			}
			return o
		},
		[
			e
				.map(function (r) {
					return r.key
				})
				.join('_'),
			t,
			n
		]
	)
}
function F1(e, t) {
	var n = u.useRef(e),
		r = u.useState({}),
		o = B(r, 2),
		a = o[1]
	function i(l) {
		var s = typeof l == 'function' ? l(n.current) : l
		s !== n.current && t(s, n.current), (n.current = s), a({})
	}
	return [n.current, i]
}
var O_ = 0.1,
	z1 = 0.01,
	Yu = 20,
	H1 = Math.pow(0.995, Yu)
function N_(e, t) {
	var n = u.useState(),
		r = B(n, 2),
		o = r[0],
		a = r[1],
		i = u.useState(0),
		l = B(i, 2),
		s = l[0],
		c = l[1],
		f = u.useState(0),
		d = B(f, 2),
		v = d[0],
		p = d[1],
		h = u.useState(),
		g = B(h, 2),
		b = g[0],
		m = g[1],
		y = u.useRef()
	function S(N) {
		var O = N.touches[0],
			k = O.screenX,
			I = O.screenY
		a({ x: k, y: I }), window.clearInterval(y.current)
	}
	function C(N) {
		if (o) {
			N.preventDefault()
			var O = N.touches[0],
				k = O.screenX,
				I = O.screenY
			a({ x: k, y: I })
			var $ = k - o.x,
				R = I - o.y
			t($, R)
			var M = Date.now()
			c(M), p(M - s), m({ x: $, y: R })
		}
	}
	function x() {
		if (o && (a(null), m(null), b)) {
			var N = b.x / v,
				O = b.y / v,
				k = Math.abs(N),
				I = Math.abs(O)
			if (Math.max(k, I) < O_) return
			var $ = N,
				R = O
			y.current = window.setInterval(function () {
				if (Math.abs($) < z1 && Math.abs(R) < z1) {
					window.clearInterval(y.current)
					return
				}
				;($ *= H1), (R *= H1), t($ * Yu, R * Yu)
			}, Yu)
		}
	}
	var w = u.useRef()
	function E(N) {
		var O = N.deltaX,
			k = N.deltaY,
			I = 0,
			$ = Math.abs(O),
			R = Math.abs(k)
		$ === R
			? (I = w.current === 'x' ? O : k)
			: $ > R
			? ((I = O), (w.current = 'x'))
			: ((I = k), (w.current = 'y')),
			t(-I, -I) && N.preventDefault()
	}
	var P = u.useRef(null)
	;(P.current = { onTouchStart: S, onTouchMove: C, onTouchEnd: x, onWheel: E }),
		u.useEffect(function () {
			function N($) {
				P.current.onTouchStart($)
			}
			function O($) {
				P.current.onTouchMove($)
			}
			function k($) {
				P.current.onTouchEnd($)
			}
			function I($) {
				P.current.onWheel($)
			}
			return (
				document.addEventListener('touchmove', O, { passive: !1 }),
				document.addEventListener('touchend', k, { passive: !1 }),
				e.current.addEventListener('touchstart', N, { passive: !1 }),
				e.current.addEventListener('wheel', I),
				function () {
					document.removeEventListener('touchmove', O),
						document.removeEventListener('touchend', k)
				}
			)
		}, [])
}
function dE(e) {
	var t = u.useState(0),
		n = B(t, 2),
		r = n[0],
		o = n[1],
		a = u.useRef(0),
		i = u.useRef()
	return (
		(i.current = e),
		Gp(
			function () {
				var l
				;(l = i.current) === null || l === void 0 || l.call(i)
			},
			[r]
		),
		function () {
			a.current === r && ((a.current += 1), o(a.current))
		}
	)
}
function I_(e) {
	var t = u.useRef([]),
		n = u.useState({}),
		r = B(n, 2),
		o = r[1],
		a = u.useRef(typeof e == 'function' ? e() : e),
		i = dE(function () {
			var s = a.current
			t.current.forEach(function (c) {
				s = c(s)
			}),
				(t.current = []),
				(a.current = s),
				o({})
		})
	function l(s) {
		t.current.push(s), i()
	}
	return [a.current, l]
}
var V1 = { width: 0, height: 0, left: 0, top: 0, right: 0 }
function k_(e, t, n, r, o, a, i) {
	var l = i.tabs,
		s = i.tabPosition,
		c = i.rtl,
		f,
		d,
		v
	return (
		['top', 'bottom'].includes(s)
			? ((f = 'width'), (d = c ? 'right' : 'left'), (v = Math.abs(n)))
			: ((f = 'height'), (d = 'top'), (v = -n)),
		u.useMemo(
			function () {
				if (!l.length) return [0, 0]
				for (var p = l.length, h = p, g = 0; g < p; g += 1) {
					var b = e.get(l[g].key) || V1
					if (b[d] + b[f] > v + t) {
						h = g - 1
						break
					}
				}
				for (var m = 0, y = p - 1; y >= 0; y -= 1) {
					var S = e.get(l[y].key) || V1
					if (S[d] < v) {
						m = y + 1
						break
					}
				}
				return [m, h]
			},
			[
				e,
				t,
				r,
				o,
				a,
				v,
				s,
				l
					.map(function (p) {
						return p.key
					})
					.join('_'),
				c
			]
		)
	)
}
function j1(e) {
	var t
	return (
		e instanceof Map
			? ((t = {}),
			  e.forEach(function (n, r) {
					t[r] = n
			  }))
			: (t = e),
		JSON.stringify(t)
	)
}
var T_ = 'TABS_DQ'
function fE(e) {
	return String(e).replace(/"/g, T_)
}
function D_(e, t) {
	var n = e.prefixCls,
		r = e.editable,
		o = e.locale,
		a = e.style
	return !r || r.showAdd === !1
		? null
		: u.createElement(
				'button',
				{
					ref: t,
					type: 'button',
					className: ''.concat(n, '-nav-add'),
					style: a,
					'aria-label': (o == null ? void 0 : o.addAriaLabel) || 'Add tab',
					onClick: function (l) {
						r.onEdit('add', { event: l })
					}
				},
				r.addIcon || '+'
		  )
}
const vE = u.forwardRef(D_)
var B1 = u.forwardRef(function (e, t) {
	var n = e.position,
		r = e.prefixCls,
		o = e.extra
	if (!o) return null
	var a,
		i = {}
	return (
		Ze(o) === 'object' && !u.isValidElement(o) ? (i = o) : (i.right = o),
		n === 'right' && (a = i.right),
		n === 'left' && (a = i.left),
		a
			? u.createElement(
					'div',
					{ className: ''.concat(r, '-extra-content'), ref: t },
					a
			  )
			: null
	)
})
function __(e, t) {
	var n = e.prefixCls,
		r = e.id,
		o = e.tabs,
		a = e.locale,
		i = e.mobile,
		l = e.moreIcon,
		s = l === void 0 ? 'More' : l,
		c = e.moreTransitionName,
		f = e.style,
		d = e.className,
		v = e.editable,
		p = e.tabBarGutter,
		h = e.rtl,
		g = e.removeAriaLabel,
		b = e.onTabClick,
		m = e.getPopupContainer,
		y = e.popupClassName,
		S = u.useState(!1),
		C = B(S, 2),
		x = C[0],
		w = C[1],
		E = u.useState(null),
		P = B(E, 2),
		N = P[0],
		O = P[1],
		k = ''.concat(r, '-more-popup'),
		I = ''.concat(n, '-dropdown'),
		$ = N !== null ? ''.concat(k, '-').concat(N) : null,
		R = a == null ? void 0 : a.dropdownAriaLabel
	function M(z, A) {
		z.preventDefault(),
			z.stopPropagation(),
			v.onEdit('remove', { key: A, event: z })
	}
	var T = u.createElement(
		Ds,
		{
			onClick: function (A) {
				var W = A.key,
					Y = A.domEvent
				b(W, Y), w(!1)
			},
			prefixCls: ''.concat(I, '-menu'),
			id: k,
			tabIndex: -1,
			role: 'listbox',
			'aria-activedescendant': $,
			selectedKeys: [N],
			'aria-label': R !== void 0 ? R : 'expanded dropdown'
		},
		o.map(function (z) {
			var A = v && z.closable !== !1 && !z.disabled
			return u.createElement(
				Id,
				{
					key: z.key,
					id: ''.concat(k, '-').concat(z.key),
					role: 'option',
					'aria-controls': r && ''.concat(r, '-panel-').concat(z.key),
					disabled: z.disabled
				},
				u.createElement('span', null, z.label),
				A &&
					u.createElement(
						'button',
						{
							type: 'button',
							'aria-label': g || 'remove',
							tabIndex: 0,
							className: ''.concat(I, '-menu-item-remove'),
							onClick: function (Y) {
								Y.stopPropagation(), M(Y, z.key)
							}
						},
						z.closeIcon || v.removeIcon || '×'
					)
			)
		})
	)
	function _(z) {
		for (
			var A = o.filter(function (te) {
					return !te.disabled
				}),
				W =
					A.findIndex(function (te) {
						return te.key === N
					}) || 0,
				Y = A.length,
				K = 0;
			K < Y;
			K += 1
		) {
			W = (W + z + Y) % Y
			var G = A[W]
			if (!G.disabled) {
				O(G.key)
				return
			}
		}
	}
	function D(z) {
		var A = z.which
		if (!x) {
			;[X.DOWN, X.SPACE, X.ENTER].includes(A) && (w(!0), z.preventDefault())
			return
		}
		switch (A) {
			case X.UP:
				_(-1), z.preventDefault()
				break
			case X.DOWN:
				_(1), z.preventDefault()
				break
			case X.ESC:
				w(!1)
				break
			case X.SPACE:
			case X.ENTER:
				N !== null && b(N, z)
				break
		}
	}
	u.useEffect(
		function () {
			var z = document.getElementById($)
			z && z.scrollIntoView && z.scrollIntoView(!1)
		},
		[N]
	),
		u.useEffect(
			function () {
				x || O(null)
			},
			[x]
		)
	var L = V({}, h ? 'marginRight' : 'marginLeft', p)
	o.length || ((L.visibility = 'hidden'), (L.order = 1))
	var H = Z(V({}, ''.concat(I, '-rtl'), h)),
		j = i
			? null
			: u.createElement(
					_3,
					{
						prefixCls: I,
						overlay: T,
						trigger: ['hover'],
						visible: o.length ? x : !1,
						transitionName: c,
						onVisibleChange: w,
						overlayClassName: Z(H, y),
						mouseEnterDelay: 0.1,
						mouseLeaveDelay: 0.1,
						getPopupContainer: m
					},
					u.createElement(
						'button',
						{
							type: 'button',
							className: ''.concat(n, '-nav-more'),
							style: L,
							tabIndex: -1,
							'aria-hidden': 'true',
							'aria-haspopup': 'listbox',
							'aria-controls': k,
							id: ''.concat(r, '-more'),
							'aria-expanded': x,
							onKeyDown: D
						},
						s
					)
			  )
	return u.createElement(
		'div',
		{ className: Z(''.concat(n, '-nav-operations'), d), style: f, ref: t },
		j,
		u.createElement(vE, { prefixCls: n, locale: a, editable: v })
	)
}
const L_ = u.memo(u.forwardRef(__), function (e, t) {
	return t.tabMoving
})
function A_(e) {
	var t,
		n = e.prefixCls,
		r = e.id,
		o = e.active,
		a = e.tab,
		i = a.key,
		l = a.label,
		s = a.disabled,
		c = a.closeIcon,
		f = e.closable,
		d = e.renderWrapper,
		v = e.removeAriaLabel,
		p = e.editable,
		h = e.onClick,
		g = e.onFocus,
		b = e.style,
		m = ''.concat(n, '-tab'),
		y = p && f !== !1 && !s
	function S(w) {
		s || h(w)
	}
	function C(w) {
		w.preventDefault(),
			w.stopPropagation(),
			p.onEdit('remove', { key: i, event: w })
	}
	var x = u.createElement(
		'div',
		{
			key: i,
			'data-node-key': fE(i),
			className: Z(
				m,
				((t = {}),
				V(t, ''.concat(m, '-with-remove'), y),
				V(t, ''.concat(m, '-active'), o),
				V(t, ''.concat(m, '-disabled'), s),
				t)
			),
			style: b,
			onClick: S
		},
		u.createElement(
			'div',
			{
				role: 'tab',
				'aria-selected': o,
				id: r && ''.concat(r, '-tab-').concat(i),
				className: ''.concat(m, '-btn'),
				'aria-controls': r && ''.concat(r, '-panel-').concat(i),
				'aria-disabled': s,
				tabIndex: s ? null : 0,
				onClick: function (E) {
					E.stopPropagation(), S(E)
				},
				onKeyDown: function (E) {
					;[X.SPACE, X.ENTER].includes(E.which) && (E.preventDefault(), S(E))
				},
				onFocus: g
			},
			l
		),
		y &&
			u.createElement(
				'button',
				{
					type: 'button',
					'aria-label': v || 'remove',
					tabIndex: 0,
					className: ''.concat(m, '-remove'),
					onClick: function (E) {
						E.stopPropagation(), C(E)
					}
				},
				c || p.removeIcon || '×'
			)
	)
	return d ? d(x) : x
}
var Za = function (t) {
		var n = t.current || {},
			r = n.offsetWidth,
			o = r === void 0 ? 0 : r,
			a = n.offsetHeight,
			i = a === void 0 ? 0 : a
		return [o, i]
	},
	Pu = function (t, n) {
		return t[n ? 0 : 1]
	}
function F_(e, t) {
	var n,
		r = u.useContext(Ad),
		o = r.prefixCls,
		a = r.tabs,
		i = e.className,
		l = e.style,
		s = e.id,
		c = e.animated,
		f = e.activeKey,
		d = e.rtl,
		v = e.extra,
		p = e.editable,
		h = e.locale,
		g = e.tabPosition,
		b = e.tabBarGutter,
		m = e.children,
		y = e.onTabClick,
		S = e.onTabScroll,
		C = u.useRef(),
		x = u.useRef(),
		w = u.useRef(),
		E = u.useRef(),
		P = u.useRef(),
		N = u.useRef(),
		O = u.useRef(),
		k = g === 'top' || g === 'bottom',
		I = F1(0, function (rt, je) {
			k && S && S({ direction: rt > je ? 'left' : 'right' })
		}),
		$ = B(I, 2),
		R = $[0],
		M = $[1],
		T = F1(0, function (rt, je) {
			!k && S && S({ direction: rt > je ? 'top' : 'bottom' })
		}),
		_ = B(T, 2),
		D = _[0],
		L = _[1],
		H = u.useState([0, 0]),
		j = B(H, 2),
		z = j[0],
		A = j[1],
		W = u.useState([0, 0]),
		Y = B(W, 2),
		K = Y[0],
		G = Y[1],
		te = u.useState([0, 0]),
		ne = B(te, 2),
		ie = ne[0],
		le = ne[1],
		ae = u.useState([0, 0]),
		q = B(ae, 2),
		de = q[0],
		ve = q[1],
		ee = I_(new Map()),
		fe = B(ee, 2),
		be = fe[0],
		Me = fe[1],
		Se = M_(a, be, K[0]),
		Le = Pu(z, k),
		lt = Pu(K, k),
		et = Pu(ie, k),
		Xe = Pu(de, k),
		ze = Le < lt + et,
		we = ze ? Le - Xe : Le - et,
		ct = ''.concat(o, '-nav-operations-hidden'),
		He = 0,
		Pe = 0
	k && d
		? ((He = 0), (Pe = Math.max(0, lt - we)))
		: ((He = Math.min(0, we - lt)), (Pe = 0))
	function pe(rt) {
		return rt < He ? He : rt > Pe ? Pe : rt
	}
	var _e = u.useRef(),
		tt = u.useState(),
		Ce = B(tt, 2),
		$e = Ce[0],
		Oe = Ce[1]
	function qe() {
		Oe(Date.now())
	}
	function Ue() {
		window.clearTimeout(_e.current)
	}
	N_(E, function (rt, je) {
		function wt(Mt, Lt) {
			Mt(function (mt) {
				var xt = pe(mt + Lt)
				return xt
			})
		}
		return ze ? (k ? wt(M, rt) : wt(L, je), Ue(), qe(), !0) : !1
	}),
		u.useEffect(
			function () {
				return (
					Ue(),
					$e &&
						(_e.current = window.setTimeout(function () {
							Oe(0)
						}, 100)),
					Ue
				)
			},
			[$e]
		)
	var at = k_(Se, we, k ? R : D, lt, et, Xe, F(F({}, e), {}, { tabs: a })),
		Ae = B(at, 2),
		bt = Ae[0],
		Fe = Ae[1],
		ye = Lo(function () {
			var rt =
					arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f,
				je = Se.get(rt) || { width: 0, height: 0, left: 0, right: 0, top: 0 }
			if (k) {
				var wt = R
				d
					? je.right < R
						? (wt = je.right)
						: je.right + je.width > R + we && (wt = je.right + je.width - we)
					: je.left < -R
					? (wt = -je.left)
					: je.left + je.width > -R + we && (wt = -(je.left + je.width - we)),
					L(0),
					M(pe(wt))
			} else {
				var Mt = D
				je.top < -D
					? (Mt = -je.top)
					: je.top + je.height > -D + we && (Mt = -(je.top + je.height - we)),
					M(0),
					L(pe(Mt))
			}
		}),
		it = {}
	g === 'top' || g === 'bottom'
		? (it[d ? 'marginRight' : 'marginLeft'] = b)
		: (it.marginTop = b)
	var Ye = a.map(function (rt, je) {
			var wt = rt.key
			return u.createElement(A_, {
				id: s,
				prefixCls: o,
				key: wt,
				tab: rt,
				style: je === 0 ? void 0 : it,
				closable: rt.closable,
				editable: p,
				active: wt === f,
				renderWrapper: m,
				removeAriaLabel: h == null ? void 0 : h.removeAriaLabel,
				onClick: function (Lt) {
					y(wt, Lt)
				},
				onFocus: function () {
					ye(wt),
						qe(),
						E.current &&
							(d || (E.current.scrollLeft = 0), (E.current.scrollTop = 0))
				}
			})
		}),
		Ne = function () {
			return Me(function () {
				var je = new Map()
				return (
					a.forEach(function (wt) {
						var Mt,
							Lt = wt.key,
							mt =
								(Mt = P.current) === null || Mt === void 0
									? void 0
									: Mt.querySelector('[data-node-key="'.concat(fE(Lt), '"]'))
						mt &&
							je.set(Lt, {
								width: mt.offsetWidth,
								height: mt.offsetHeight,
								left: mt.offsetLeft,
								top: mt.offsetTop
							})
					}),
					je
				)
			})
		}
	u.useEffect(
		function () {
			Ne()
		},
		[
			a
				.map(function (rt) {
					return rt.key
				})
				.join('_')
		]
	)
	var nt = dE(function () {
			var rt = Za(C),
				je = Za(x),
				wt = Za(w)
			A([rt[0] - je[0] - wt[0], rt[1] - je[1] - wt[1]])
			var Mt = Za(O)
			le(Mt)
			var Lt = Za(N)
			ve(Lt)
			var mt = Za(P)
			G([mt[0] - Mt[0], mt[1] - Mt[1]]), Ne()
		}),
		J = a.slice(0, bt),
		oe = a.slice(Fe + 1),
		re = [].concat(xe(J), xe(oe)),
		Q = u.useState(),
		me = B(Q, 2),
		Ve = me[0],
		$t = me[1],
		St = Se.get(f),
		jt = u.useRef()
	function Te() {
		yt.cancel(jt.current)
	}
	u.useEffect(
		function () {
			var rt = {}
			return (
				St &&
					(k
						? (d ? (rt.right = St.right) : (rt.left = St.left),
						  (rt.width = St.width))
						: ((rt.top = St.top), (rt.height = St.height))),
				Te(),
				(jt.current = yt(function () {
					$t(rt)
				})),
				Te
			)
		},
		[St, k, d]
	),
		u.useEffect(
			function () {
				ye()
			},
			[f, He, Pe, j1(St), j1(Se), k]
		),
		u.useEffect(
			function () {
				nt()
			},
			[d]
		)
	var dt = !!re.length,
		Bt = ''.concat(o, '-nav-wrap'),
		Jt,
		en,
		Ct,
		Ht
	return (
		k
			? d
				? ((en = R > 0), (Jt = R !== Pe))
				: ((Jt = R < 0), (en = R !== He))
			: ((Ct = D < 0), (Ht = D !== He)),
		u.createElement(
			vo,
			{ onResize: nt },
			u.createElement(
				'div',
				{
					ref: Jc(t, C),
					role: 'tablist',
					className: Z(''.concat(o, '-nav'), i),
					style: l,
					onKeyDown: function () {
						qe()
					}
				},
				u.createElement(B1, {
					ref: x,
					position: 'left',
					extra: v,
					prefixCls: o
				}),
				u.createElement(
					'div',
					{
						className: Z(
							Bt,
							((n = {}),
							V(n, ''.concat(Bt, '-ping-left'), Jt),
							V(n, ''.concat(Bt, '-ping-right'), en),
							V(n, ''.concat(Bt, '-ping-top'), Ct),
							V(n, ''.concat(Bt, '-ping-bottom'), Ht),
							n)
						),
						ref: E
					},
					u.createElement(
						vo,
						{ onResize: nt },
						u.createElement(
							'div',
							{
								ref: P,
								className: ''.concat(o, '-nav-list'),
								style: {
									transform: 'translate('.concat(R, 'px, ').concat(D, 'px)'),
									transition: $e ? 'none' : void 0
								}
							},
							Ye,
							u.createElement(vE, {
								ref: O,
								prefixCls: o,
								locale: h,
								editable: p,
								style: F(
									F({}, Ye.length === 0 ? void 0 : it),
									{},
									{ visibility: dt ? 'hidden' : null }
								)
							}),
							u.createElement('div', {
								className: Z(
									''.concat(o, '-ink-bar'),
									V({}, ''.concat(o, '-ink-bar-animated'), c.inkBar)
								),
								style: Ve
							})
						)
					)
				),
				u.createElement(
					L_,
					se({}, e, {
						removeAriaLabel: h == null ? void 0 : h.removeAriaLabel,
						ref: N,
						prefixCls: o,
						tabs: re,
						className: !dt && ct,
						tabMoving: !!$e
					})
				),
				u.createElement(B1, {
					ref: w,
					position: 'right',
					extra: v,
					prefixCls: o
				})
			)
		)
	)
}
const W1 = u.forwardRef(F_)
var z_ = ['renderTabBar'],
	H_ = ['label', 'key']
function V_(e) {
	var t = e.renderTabBar,
		n = ot(e, z_),
		r = u.useContext(Ad),
		o = r.tabs
	if (t) {
		var a = F(
			F({}, n),
			{},
			{
				panes: o.map(function (i) {
					var l = i.label,
						s = i.key,
						c = ot(i, H_)
					return u.createElement(cE, se({ tab: l, key: s, tabKey: s }, c))
				})
			}
		)
		return t(a, W1)
	}
	return u.createElement(W1, n)
}
function j_() {
	var e =
			arguments.length > 0 && arguments[0] !== void 0
				? arguments[0]
				: { inkBar: !0, tabPane: !1 },
		t
	return (
		e === !1
			? (t = { inkBar: !1, tabPane: !1 })
			: e === !0
			? (t = { inkBar: !0, tabPane: !1 })
			: (t = F({ inkBar: !0 }, Ze(e) === 'object' ? e : {})),
		t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0),
		!t.tabPaneMotion && t.tabPane && (t.tabPane = !1),
		t
	)
}
var B_ = [
		'id',
		'prefixCls',
		'className',
		'items',
		'direction',
		'activeKey',
		'defaultActiveKey',
		'editable',
		'animated',
		'tabPosition',
		'tabBarGutter',
		'tabBarStyle',
		'tabBarExtraContent',
		'locale',
		'moreIcon',
		'moreTransitionName',
		'destroyInactiveTabPane',
		'renderTabBar',
		'onChange',
		'onTabClick',
		'onTabScroll',
		'getPopupContainer',
		'popupClassName'
	],
	U1 = 0
function W_(e, t) {
	var n,
		r = e.id,
		o = e.prefixCls,
		a = o === void 0 ? 'rc-tabs' : o,
		i = e.className,
		l = e.items,
		s = e.direction,
		c = e.activeKey,
		f = e.defaultActiveKey,
		d = e.editable,
		v = e.animated,
		p = e.tabPosition,
		h = p === void 0 ? 'top' : p,
		g = e.tabBarGutter,
		b = e.tabBarStyle,
		m = e.tabBarExtraContent,
		y = e.locale,
		S = e.moreIcon,
		C = e.moreTransitionName,
		x = e.destroyInactiveTabPane,
		w = e.renderTabBar,
		E = e.onChange,
		P = e.onTabClick,
		N = e.onTabScroll,
		O = e.getPopupContainer,
		k = e.popupClassName,
		I = ot(e, B_),
		$ = u.useMemo(
			function () {
				return (l || []).filter(function (ee) {
					return ee && Ze(ee) === 'object' && 'key' in ee
				})
			},
			[l]
		),
		R = s === 'rtl',
		M = j_(v),
		T = u.useState(!1),
		_ = B(T, 2),
		D = _[0],
		L = _[1]
	u.useEffect(function () {
		L(Zh())
	}, [])
	var H = Kt(
			function () {
				var ee
				return (ee = $[0]) === null || ee === void 0 ? void 0 : ee.key
			},
			{ value: c, defaultValue: f }
		),
		j = B(H, 2),
		z = j[0],
		A = j[1],
		W = u.useState(function () {
			return $.findIndex(function (ee) {
				return ee.key === z
			})
		}),
		Y = B(W, 2),
		K = Y[0],
		G = Y[1]
	u.useEffect(
		function () {
			var ee = $.findIndex(function (be) {
				return be.key === z
			})
			if (ee === -1) {
				var fe
				;(ee = Math.max(0, Math.min(K, $.length - 1))),
					A((fe = $[ee]) === null || fe === void 0 ? void 0 : fe.key)
			}
			G(ee)
		},
		[
			$.map(function (ee) {
				return ee.key
			}).join('_'),
			z,
			K
		]
	)
	var te = Kt(null, { value: r }),
		ne = B(te, 2),
		ie = ne[0],
		le = ne[1]
	u.useEffect(function () {
		r || (le('rc-tabs-'.concat(U1)), (U1 += 1))
	}, [])
	function ae(ee, fe) {
		P == null || P(ee, fe)
		var be = ee !== z
		A(ee), be && (E == null || E(ee))
	}
	var q = {
			id: ie,
			activeKey: z,
			animated: M,
			tabPosition: h,
			rtl: R,
			mobile: D
		},
		de,
		ve = F(
			F({}, q),
			{},
			{
				editable: d,
				locale: y,
				moreIcon: S,
				moreTransitionName: C,
				tabBarGutter: g,
				onTabClick: ae,
				onTabScroll: N,
				extra: m,
				style: b,
				panes: null,
				getPopupContainer: O,
				popupClassName: k
			}
		)
	return u.createElement(
		Ad.Provider,
		{ value: { tabs: $, prefixCls: a } },
		u.createElement(
			'div',
			se(
				{
					ref: t,
					id: r,
					className: Z(
						a,
						''.concat(a, '-').concat(h),
						((n = {}),
						V(n, ''.concat(a, '-mobile'), D),
						V(n, ''.concat(a, '-editable'), d),
						V(n, ''.concat(a, '-rtl'), R),
						n),
						i
					)
				},
				I
			),
			de,
			u.createElement(V_, se({}, ve, { renderTabBar: w })),
			u.createElement(R_, se({ destroyInactiveTabPane: x }, q, { animated: M }))
		)
	)
}
var U_ = u.forwardRef(W_)
const Y_ = { motionAppear: !1, motionEnter: !0, motionLeave: !0 }
function K_(e) {
	let t =
			arguments.length > 1 && arguments[1] !== void 0
				? arguments[1]
				: { inkBar: !0, tabPane: !1 },
		n
	return (
		t === !1
			? (n = { inkBar: !1, tabPane: !1 })
			: t === !0
			? (n = { inkBar: !0, tabPane: !0 })
			: (n = Object.assign({ inkBar: !0 }, typeof t == 'object' ? t : {})),
		n.tabPane &&
			(n.tabPaneMotion = Object.assign(Object.assign({}, Y_), {
				motionName: Tw(e, 'switch')
			})),
		n
	)
}
var G_ =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
function X_(e) {
	return e.filter(t => t)
}
function q_(e, t) {
	if (e) return e
	const n = Ur(t).map(r => {
		if (u.isValidElement(r)) {
			const { key: o, props: a } = r,
				i = a || {},
				{ tab: l } = i,
				s = G_(i, ['tab'])
			return Object.assign(Object.assign({ key: String(o) }, s), { label: l })
		}
		return null
	})
	return X_(n)
}
const Q_ = () => null,
	Z_ = Q_,
	J_ = e => {
		const { componentCls: t, motionDurationSlow: n } = e
		return [
			{
				[t]: {
					[`${t}-switch`]: {
						'&-appear, &-enter': {
							transition: 'none',
							'&-start': { opacity: 0 },
							'&-active': { opacity: 1, transition: `opacity ${n}` }
						},
						'&-leave': {
							position: 'absolute',
							transition: 'none',
							inset: 0,
							'&-start': { opacity: 1 },
							'&-active': { opacity: 0, transition: `opacity ${n}` }
						}
					}
				}
			},
			[Ai(e, 'slide-up'), Ai(e, 'slide-down')]
		]
	},
	e5 = J_,
	t5 = e => {
		const {
			componentCls: t,
			tabsCardHorizontalPadding: n,
			tabsCardHeadBackground: r,
			tabsCardGutter: o,
			colorSplit: a
		} = e
		return {
			[`${t}-card`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					[`${t}-tab`]: {
						margin: 0,
						padding: n,
						background: r,
						border: `${e.lineWidth}px ${e.lineType} ${a}`,
						transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
					},
					[`${t}-tab-active`]: {
						color: e.colorPrimary,
						background: e.colorBgContainer
					},
					[`${t}-ink-bar`]: { visibility: 'hidden' }
				},
				[`&${t}-top, &${t}-bottom`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab + ${t}-tab`]: {
							marginLeft: { _skip_check_: !0, value: `${o}px` }
						}
					}
				},
				[`&${t}-top`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab`]: {
							borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
						},
						[`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer }
					}
				},
				[`&${t}-bottom`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab`]: {
							borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`
						},
						[`${t}-tab-active`]: { borderTopColor: e.colorBgContainer }
					}
				},
				[`&${t}-left, &${t}-right`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab + ${t}-tab`]: { marginTop: `${o}px` }
					}
				},
				[`&${t}-left`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab`]: {
							borderRadius: {
								_skip_check_: !0,
								value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`
							}
						},
						[`${t}-tab-active`]: {
							borderRightColor: { _skip_check_: !0, value: e.colorBgContainer }
						}
					}
				},
				[`&${t}-right`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab`]: {
							borderRadius: {
								_skip_check_: !0,
								value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`
							}
						},
						[`${t}-tab-active`]: {
							borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer }
						}
					}
				}
			}
		}
	},
	n5 = e => {
		const {
			componentCls: t,
			tabsHoverColor: n,
			dropdownEdgeChildVerticalPadding: r
		} = e
		return {
			[`${t}-dropdown`]: Object.assign(Object.assign({}, po(e)), {
				position: 'absolute',
				top: -9999,
				left: { _skip_check_: !0, value: -9999 },
				zIndex: e.zIndexPopup,
				display: 'block',
				'&-hidden': { display: 'none' },
				[`${t}-dropdown-menu`]: {
					maxHeight: e.tabsDropdownHeight,
					margin: 0,
					padding: `${r}px 0`,
					overflowX: 'hidden',
					overflowY: 'auto',
					textAlign: { _skip_check_: !0, value: 'left' },
					listStyleType: 'none',
					backgroundColor: e.colorBgContainer,
					backgroundClip: 'padding-box',
					borderRadius: e.borderRadiusLG,
					outline: 'none',
					boxShadow: e.boxShadowSecondary,
					'&-item': Object.assign(Object.assign({}, wa), {
						display: 'flex',
						alignItems: 'center',
						minWidth: e.tabsDropdownWidth,
						margin: 0,
						padding: `${e.paddingXXS}px ${e.paddingSM}px`,
						color: e.colorText,
						fontWeight: 'normal',
						fontSize: e.fontSize,
						lineHeight: e.lineHeight,
						cursor: 'pointer',
						transition: `all ${e.motionDurationSlow}`,
						'> span': { flex: 1, whiteSpace: 'nowrap' },
						'&-remove': {
							flex: 'none',
							marginLeft: { _skip_check_: !0, value: e.marginSM },
							color: e.colorTextDescription,
							fontSize: e.fontSizeSM,
							background: 'transparent',
							border: 0,
							cursor: 'pointer',
							'&:hover': { color: n }
						},
						'&:hover': { background: e.controlItemBgHover },
						'&-disabled': {
							'&, &:hover': {
								color: e.colorTextDisabled,
								background: 'transparent',
								cursor: 'not-allowed'
							}
						}
					})
				}
			})
		}
	},
	r5 = e => {
		const { componentCls: t, margin: n, colorSplit: r } = e
		return {
			[`${t}-top, ${t}-bottom`]: {
				flexDirection: 'column',
				[`> ${t}-nav, > div > ${t}-nav`]: {
					margin: `0 0 ${n}px 0`,
					'&::before': {
						position: 'absolute',
						right: { _skip_check_: !0, value: 0 },
						left: { _skip_check_: !0, value: 0 },
						borderBottom: `${e.lineWidth}px ${e.lineType} ${r}`,
						content: "''"
					},
					[`${t}-ink-bar`]: {
						height: e.lineWidthBold,
						'&-animated': {
							transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
						}
					},
					[`${t}-nav-wrap`]: {
						'&::before, &::after': {
							top: 0,
							bottom: 0,
							width: e.controlHeight
						},
						'&::before': {
							left: { _skip_check_: !0, value: 0 },
							boxShadow: e.boxShadowTabsOverflowLeft
						},
						'&::after': {
							right: { _skip_check_: !0, value: 0 },
							boxShadow: e.boxShadowTabsOverflowRight
						},
						[`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
						[`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 }
					}
				}
			},
			[`${t}-top`]: {
				[`> ${t}-nav,
        > div > ${t}-nav`]: {
					'&::before': { bottom: 0 },
					[`${t}-ink-bar`]: { bottom: 0 }
				}
			},
			[`${t}-bottom`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					order: 1,
					marginTop: `${n}px`,
					marginBottom: 0,
					'&::before': { top: 0 },
					[`${t}-ink-bar`]: { top: 0 }
				},
				[`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 }
			},
			[`${t}-left, ${t}-right`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					flexDirection: 'column',
					minWidth: e.controlHeight * 1.25,
					[`${t}-tab`]: {
						padding: `${e.paddingXS}px ${e.paddingLG}px`,
						textAlign: 'center'
					},
					[`${t}-tab + ${t}-tab`]: { margin: `${e.margin}px 0 0 0` },
					[`${t}-nav-wrap`]: {
						flexDirection: 'column',
						'&::before, &::after': {
							right: { _skip_check_: !0, value: 0 },
							left: { _skip_check_: !0, value: 0 },
							height: e.controlHeight
						},
						'&::before': { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
						'&::after': { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
						[`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
						[`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 }
					},
					[`${t}-ink-bar`]: {
						width: e.lineWidthBold,
						'&-animated': {
							transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
						}
					},
					[`${t}-nav-list, ${t}-nav-operations`]: {
						flex: '1 0 auto',
						flexDirection: 'column'
					}
				}
			},
			[`${t}-left`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					[`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } }
				},
				[`> ${t}-content-holder, > div > ${t}-content-holder`]: {
					marginLeft: { _skip_check_: !0, value: `-${e.lineWidth}px` },
					borderLeft: {
						_skip_check_: !0,
						value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
					},
					[`> ${t}-content > ${t}-tabpane`]: {
						paddingLeft: { _skip_check_: !0, value: e.paddingLG }
					}
				}
			},
			[`${t}-right`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					order: 1,
					[`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } }
				},
				[`> ${t}-content-holder, > div > ${t}-content-holder`]: {
					order: 0,
					marginRight: { _skip_check_: !0, value: -e.lineWidth },
					borderRight: {
						_skip_check_: !0,
						value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
					},
					[`> ${t}-content > ${t}-tabpane`]: {
						paddingRight: { _skip_check_: !0, value: e.paddingLG }
					}
				}
			}
		}
	},
	o5 = e => {
		const { componentCls: t, padding: n } = e
		return {
			[t]: {
				'&-small': {
					[`> ${t}-nav`]: {
						[`${t}-tab`]: {
							padding: `${e.paddingXS}px 0`,
							fontSize: e.fontSize
						}
					}
				},
				'&-large': {
					[`> ${t}-nav`]: {
						[`${t}-tab`]: { padding: `${n}px 0`, fontSize: e.fontSizeLG }
					}
				}
			},
			[`${t}-card`]: {
				[`&${t}-small`]: {
					[`> ${t}-nav`]: {
						[`${t}-tab`]: { padding: `${e.paddingXXS * 1.5}px ${n}px` }
					},
					[`&${t}-bottom`]: {
						[`> ${t}-nav ${t}-tab`]: {
							borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`
						}
					},
					[`&${t}-top`]: {
						[`> ${t}-nav ${t}-tab`]: {
							borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`
						}
					},
					[`&${t}-right`]: {
						[`> ${t}-nav ${t}-tab`]: {
							borderRadius: {
								_skip_check_: !0,
								value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`
							}
						}
					},
					[`&${t}-left`]: {
						[`> ${t}-nav ${t}-tab`]: {
							borderRadius: {
								_skip_check_: !0,
								value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`
							}
						}
					}
				},
				[`&${t}-large`]: {
					[`> ${t}-nav`]: {
						[`${t}-tab`]: {
							padding: `${e.paddingXS}px ${n}px ${e.paddingXXS * 1.5}px`
						}
					}
				}
			}
		}
	},
	a5 = e => {
		const {
				componentCls: t,
				tabsActiveColor: n,
				tabsHoverColor: r,
				iconCls: o,
				tabsHorizontalGutter: a
			} = e,
			i = `${t}-tab`
		return {
			[i]: {
				position: 'relative',
				display: 'inline-flex',
				alignItems: 'center',
				padding: `${e.paddingSM}px 0`,
				fontSize: `${e.fontSize}px`,
				background: 'transparent',
				border: 0,
				outline: 'none',
				cursor: 'pointer',
				'&-btn, &-remove': Object.assign(
					{ '&:focus:not(:focus-visible), &:active': { color: n } },
					zh(e)
				),
				'&-btn': { outline: 'none', transition: 'all 0.3s' },
				'&-remove': {
					flex: 'none',
					marginRight: { _skip_check_: !0, value: -e.marginXXS },
					marginLeft: { _skip_check_: !0, value: e.marginXS },
					color: e.colorTextDescription,
					fontSize: e.fontSizeSM,
					background: 'transparent',
					border: 'none',
					outline: 'none',
					cursor: 'pointer',
					transition: `all ${e.motionDurationSlow}`,
					'&:hover': { color: e.colorTextHeading }
				},
				'&:hover': { color: r },
				[`&${i}-active ${i}-btn`]: {
					color: e.colorPrimary,
					textShadow: e.tabsActiveTextShadow
				},
				[`&${i}-disabled`]: {
					color: e.colorTextDisabled,
					cursor: 'not-allowed'
				},
				[`&${i}-disabled ${i}-btn, &${i}-disabled ${t}-remove`]: {
					'&:focus, &:active': { color: e.colorTextDisabled }
				},
				[`& ${i}-remove ${o}`]: { margin: 0 },
				[o]: { marginRight: { _skip_check_: !0, value: e.marginSM } }
			},
			[`${i} + ${i}`]: { margin: { _skip_check_: !0, value: `0 0 0 ${a}px` } }
		}
	},
	i5 = e => {
		const {
			componentCls: t,
			tabsHorizontalGutter: n,
			iconCls: r,
			tabsCardGutter: o
		} = e
		return {
			[`${t}-rtl`]: {
				direction: 'rtl',
				[`${t}-nav`]: {
					[`${t}-tab`]: {
						margin: { _skip_check_: !0, value: `0 0 0 ${n}px` },
						[`${t}-tab:last-of-type`]: {
							marginLeft: { _skip_check_: !0, value: 0 }
						},
						[r]: {
							marginRight: { _skip_check_: !0, value: 0 },
							marginLeft: { _skip_check_: !0, value: `${e.marginSM}px` }
						},
						[`${t}-tab-remove`]: {
							marginRight: { _skip_check_: !0, value: `${e.marginXS}px` },
							marginLeft: { _skip_check_: !0, value: `-${e.marginXXS}px` },
							[r]: { margin: 0 }
						}
					}
				},
				[`&${t}-left`]: {
					[`> ${t}-nav`]: { order: 1 },
					[`> ${t}-content-holder`]: { order: 0 }
				},
				[`&${t}-right`]: {
					[`> ${t}-nav`]: { order: 0 },
					[`> ${t}-content-holder`]: { order: 1 }
				},
				[`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
					[`> ${t}-nav, > div > ${t}-nav`]: {
						[`${t}-tab + ${t}-tab`]: {
							marginRight: { _skip_check_: !0, value: `${o}px` },
							marginLeft: { _skip_check_: !0, value: 0 }
						}
					}
				}
			},
			[`${t}-dropdown-rtl`]: { direction: 'rtl' },
			[`${t}-menu-item`]: {
				[`${t}-dropdown-rtl`]: {
					textAlign: { _skip_check_: !0, value: 'right' }
				}
			}
		}
	},
	l5 = e => {
		const {
			componentCls: t,
			tabsCardHorizontalPadding: n,
			tabsCardHeight: r,
			tabsCardGutter: o,
			tabsHoverColor: a,
			tabsActiveColor: i,
			colorSplit: l
		} = e
		return {
			[t]: Object.assign(
				Object.assign(
					Object.assign(Object.assign({}, po(e)), {
						display: 'flex',
						[`> ${t}-nav, > div > ${t}-nav`]: {
							position: 'relative',
							display: 'flex',
							flex: 'none',
							alignItems: 'center',
							[`${t}-nav-wrap`]: {
								position: 'relative',
								display: 'flex',
								flex: 'auto',
								alignSelf: 'stretch',
								overflow: 'hidden',
								whiteSpace: 'nowrap',
								transform: 'translate(0)',
								'&::before, &::after': {
									position: 'absolute',
									zIndex: 1,
									opacity: 0,
									transition: `opacity ${e.motionDurationSlow}`,
									content: "''",
									pointerEvents: 'none'
								}
							},
							[`${t}-nav-list`]: {
								position: 'relative',
								display: 'flex',
								transition: `opacity ${e.motionDurationSlow}`
							},
							[`${t}-nav-operations`]: {
								display: 'flex',
								alignSelf: 'stretch'
							},
							[`${t}-nav-operations-hidden`]: {
								position: 'absolute',
								visibility: 'hidden',
								pointerEvents: 'none'
							},
							[`${t}-nav-more`]: {
								position: 'relative',
								padding: n,
								background: 'transparent',
								border: 0,
								'&::after': {
									position: 'absolute',
									right: { _skip_check_: !0, value: 0 },
									bottom: 0,
									left: { _skip_check_: !0, value: 0 },
									height: e.controlHeightLG / 8,
									transform: 'translateY(100%)',
									content: "''"
								}
							},
							[`${t}-nav-add`]: Object.assign(
								{
									minWidth: `${r}px`,
									marginLeft: { _skip_check_: !0, value: `${o}px` },
									padding: `0 ${e.paddingXS}px`,
									background: 'transparent',
									border: `${e.lineWidth}px ${e.lineType} ${l}`,
									borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
									outline: 'none',
									cursor: 'pointer',
									color: e.colorText,
									transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
									'&:hover': { color: a },
									'&:active, &:focus:not(:focus-visible)': { color: i }
								},
								zh(e)
							)
						},
						[`${t}-extra-content`]: { flex: 'none' },
						[`${t}-ink-bar`]: {
							position: 'absolute',
							background: e.colorPrimary,
							pointerEvents: 'none'
						}
					}),
					a5(e)
				),
				{
					[`${t}-content`]: { position: 'relative', width: '100%' },
					[`${t}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
					[`${t}-tabpane`]: { outline: 'none', '&-hidden': { display: 'none' } }
				}
			),
			[`${t}-centered`]: {
				[`> ${t}-nav, > div > ${t}-nav`]: {
					[`${t}-nav-wrap`]: {
						[`&:not([class*='${t}-nav-wrap-ping'])`]: {
							justifyContent: 'center'
						}
					}
				}
			}
		}
	},
	s5 = So(
		'Tabs',
		e => {
			const t = e.controlHeightLG,
				n = Zt(e, {
					tabsHoverColor: e.colorPrimaryHover,
					tabsActiveColor: e.colorPrimaryActive,
					tabsCardHorizontalPadding: `${
						(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth
					}px ${e.padding}px`,
					tabsCardHeight: t,
					tabsCardGutter: e.marginXXS / 2,
					tabsHorizontalGutter: 32,
					tabsCardHeadBackground: e.colorFillAlter,
					dropdownEdgeChildVerticalPadding: e.paddingXXS,
					tabsActiveTextShadow: '0 0 0.25px currentcolor',
					tabsDropdownHeight: 200,
					tabsDropdownWidth: 120
				})
			return [o5(n), i5(n), r5(n), n5(n), t5(n), l5(n), e5(n)]
		},
		e => ({ zIndexPopup: e.zIndexPopupBase + 50 })
	)
var u5 =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
function pE(e) {
	var {
			type: t,
			className: n,
			rootClassName: r,
			size: o,
			onEdit: a,
			hideAdd: i,
			centered: l,
			addIcon: s,
			popupClassName: c,
			children: f,
			items: d,
			animated: v
		} = e,
		p = u5(e, [
			'type',
			'className',
			'rootClassName',
			'size',
			'onEdit',
			'hideAdd',
			'centered',
			'addIcon',
			'popupClassName',
			'children',
			'items',
			'animated'
		])
	const { prefixCls: h, moreIcon: g = u.createElement(bD, null) } = p,
		{ direction: b, getPrefixCls: m, getPopupContainer: y } = u.useContext(kt),
		S = m('tabs', h),
		[C, x] = s5(S)
	let w
	t === 'editable-card' &&
		(w = {
			onEdit: (I, $) => {
				let { key: R, event: M } = $
				a == null || a(I === 'add' ? M : R, I)
			},
			removeIcon: u.createElement(yw, null),
			addIcon: s || u.createElement($_, null),
			showAdd: i !== !0
		})
	const E = m(),
		P = q_(d, f),
		N = K_(S, v),
		O = u.useContext(Dr),
		k = o !== void 0 ? o : O
	return C(
		u.createElement(
			U_,
			Object.assign(
				{
					direction: b,
					getPopupContainer: y,
					moreTransitionName: `${E}-slide-up`
				},
				p,
				{
					items: P,
					className: Z(
						{
							[`${S}-${k}`]: k,
							[`${S}-card`]: ['card', 'editable-card'].includes(t),
							[`${S}-editable-card`]: t === 'editable-card',
							[`${S}-centered`]: l
						},
						n,
						r,
						x
					),
					popupClassName: Z(c, x),
					editable: w,
					moreIcon: g,
					prefixCls: S,
					animated: N
				}
			)
		)
	)
}
pE.TabPane = Z_
function c5(e) {
	return u.createElement(
		Kh,
		Object.assign({ size: 'small', type: 'primary' }, e)
	)
}
var d5 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z'
				}
			}
		]
	},
	name: 'calendar',
	theme: 'outlined'
}
const f5 = d5
var mE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: f5 }))
}
mE.displayName = 'CalendarOutlined'
const xa = u.forwardRef(mE)
var v5 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
				}
			},
			{
				tag: 'path',
				attrs: {
					d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z'
				}
			}
		]
	},
	name: 'clock-circle',
	theme: 'outlined'
}
const p5 = v5
var hE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: p5 }))
}
hE.displayName = 'ClockCircleOutlined'
const gE = u.forwardRef(hE)
var m5 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z'
				}
			}
		]
	},
	name: 'swap-right',
	theme: 'outlined'
}
const h5 = m5
var yE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: h5 }))
}
yE.displayName = 'SwapRightOutlined'
const g5 = u.forwardRef(yE)
function y5(e, t, n) {
	return n !== void 0
		? n
		: t === 'year' && e.lang.yearPlaceholder
		? e.lang.yearPlaceholder
		: t === 'quarter' && e.lang.quarterPlaceholder
		? e.lang.quarterPlaceholder
		: t === 'month' && e.lang.monthPlaceholder
		? e.lang.monthPlaceholder
		: t === 'week' && e.lang.weekPlaceholder
		? e.lang.weekPlaceholder
		: t === 'time' && e.timePickerLocale.placeholder
		? e.timePickerLocale.placeholder
		: e.lang.placeholder
}
function b5(e, t, n) {
	return n !== void 0
		? n
		: t === 'year' && e.lang.yearPlaceholder
		? e.lang.rangeYearPlaceholder
		: t === 'quarter' && e.lang.quarterPlaceholder
		? e.lang.rangeQuarterPlaceholder
		: t === 'month' && e.lang.monthPlaceholder
		? e.lang.rangeMonthPlaceholder
		: t === 'week' && e.lang.weekPlaceholder
		? e.lang.rangeWeekPlaceholder
		: t === 'time' && e.timePickerLocale.placeholder
		? e.timePickerLocale.rangePlaceholder
		: e.lang.rangePlaceholder
}
function bE(e, t) {
	const n = { adjustX: 1, adjustY: 1 }
	switch (t) {
		case 'bottomLeft':
			return { points: ['tl', 'bl'], offset: [0, 4], overflow: n }
		case 'bottomRight':
			return { points: ['tr', 'br'], offset: [0, 4], overflow: n }
		case 'topLeft':
			return { points: ['bl', 'tl'], offset: [0, -4], overflow: n }
		case 'topRight':
			return { points: ['br', 'tr'], offset: [0, -4], overflow: n }
		default:
			return {
				points: e === 'rtl' ? ['tr', 'br'] : ['tl', 'bl'],
				offset: [0, 4],
				overflow: n
			}
	}
}
var S5 =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
function C5(e) {
	return u.forwardRef((n, r) => {
		const {
				prefixCls: o,
				getPopupContainer: a,
				className: i,
				placement: l,
				size: s,
				disabled: c,
				bordered: f = !0,
				placeholder: d,
				popupClassName: v,
				dropdownClassName: p,
				status: h
			} = n,
			g = S5(n, [
				'prefixCls',
				'getPopupContainer',
				'className',
				'placement',
				'size',
				'disabled',
				'bordered',
				'placeholder',
				'popupClassName',
				'dropdownClassName',
				'status'
			]),
			b = u.useRef(null),
			{
				getPrefixCls: m,
				direction: y,
				getPopupContainer: S
			} = u.useContext(kt),
			C = m('picker', o),
			{ compactSize: x, compactItemClassnames: w } = Ki(C, y),
			{ format: E, showTime: P, picker: N } = n,
			O = m(),
			[k, I] = lE(C)
		let $ = {}
		$ = Object.assign(
			Object.assign(
				Object.assign({}, $),
				P ? zc(Object.assign({ format: E, picker: N }, P)) : {}
			),
			N === 'time'
				? zc(Object.assign(Object.assign({ format: E }, n), { picker: N }))
				: {}
		)
		const R = u.useContext(Dr),
			M = x || s || R,
			T = u.useContext(La),
			_ = c ?? T,
			D = u.useContext(ho),
			{ hasFeedback: L, status: H, feedbackIcon: j } = D,
			z = u.createElement(
				u.Fragment,
				null,
				N === 'time' ? u.createElement(gE, null) : u.createElement(xa, null),
				L && j
			)
		u.useImperativeHandle(r, () => ({
			focus: () => {
				var Y
				return (Y = b.current) === null || Y === void 0 ? void 0 : Y.focus()
			},
			blur: () => {
				var Y
				return (Y = b.current) === null || Y === void 0 ? void 0 : Y.blur()
			}
		}))
		const [A] = Bh('Calendar', $c),
			W = Object.assign(Object.assign({}, A), n.locale)
		return k(
			u.createElement(
				D6,
				Object.assign(
					{
						separator: u.createElement(
							'span',
							{ 'aria-label': 'to', className: `${C}-separator` },
							u.createElement(g5, null)
						),
						disabled: _,
						ref: b,
						dropdownAlign: bE(y, l),
						placeholder: b5(W, N, d),
						suffixIcon: z,
						clearIcon: u.createElement(Ms, null),
						prevIcon: u.createElement('span', { className: `${C}-prev-icon` }),
						nextIcon: u.createElement('span', { className: `${C}-next-icon` }),
						superPrevIcon: u.createElement('span', {
							className: `${C}-super-prev-icon`
						}),
						superNextIcon: u.createElement('span', {
							className: `${C}-super-next-icon`
						}),
						allowClear: !0,
						transitionName: `${O}-slide-up`
					},
					g,
					$,
					{
						className: Z(
							{ [`${C}-${M}`]: M, [`${C}-borderless`]: !f },
							qo(C, Is(H, h), L),
							I,
							w,
							i
						),
						locale: W.lang,
						prefixCls: C,
						getPopupContainer: a || S,
						generateConfig: e,
						components: SE,
						direction: y,
						dropdownClassName: Z(I, v || p)
					}
				)
			)
		)
	})
}
var w5 =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
function x5(e) {
	function t(s, c) {
		const f = u.forwardRef((d, v) => {
			const {
					prefixCls: p,
					getPopupContainer: h,
					className: g,
					rootClassName: b,
					size: m,
					bordered: y = !0,
					placement: S,
					placeholder: C,
					popupClassName: x,
					dropdownClassName: w,
					disabled: E,
					status: P
				} = d,
				N = w5(d, [
					'prefixCls',
					'getPopupContainer',
					'className',
					'rootClassName',
					'size',
					'bordered',
					'placement',
					'placeholder',
					'popupClassName',
					'dropdownClassName',
					'disabled',
					'status'
				]),
				{
					getPrefixCls: O,
					direction: k,
					getPopupContainer: I
				} = u.useContext(kt),
				$ = O('picker', p),
				{ compactSize: R, compactItemClassnames: M } = Ki($, k),
				T = u.useRef(null),
				{ format: _, showTime: D } = d,
				[L, H] = lE($)
			u.useImperativeHandle(v, () => ({
				focus: () => {
					var ee
					return (ee = T.current) === null || ee === void 0
						? void 0
						: ee.focus()
				},
				blur: () => {
					var ee
					return (ee = T.current) === null || ee === void 0 ? void 0 : ee.blur()
				}
			}))
			const j = { showToday: !0 }
			let z = {}
			s && (z.picker = s)
			const A = s || d.picker
			z = Object.assign(
				Object.assign(
					Object.assign({}, z),
					D ? zc(Object.assign({ format: _, picker: A }, D)) : {}
				),
				A === 'time'
					? zc(Object.assign(Object.assign({ format: _ }, d), { picker: A }))
					: {}
			)
			const W = O(),
				Y = u.useContext(Dr),
				K = R || m || Y,
				G = u.useContext(La),
				te = E ?? G,
				ne = u.useContext(ho),
				{ hasFeedback: ie, status: le, feedbackIcon: ae } = ne,
				q = u.createElement(
					u.Fragment,
					null,
					A === 'time' ? u.createElement(gE, null) : u.createElement(xa, null),
					ie && ae
				),
				[de] = Bh('DatePicker', $c),
				ve = Object.assign(Object.assign({}, de), d.locale)
			return L(
				u.createElement(
					M6,
					Object.assign(
						{
							ref: T,
							placeholder: y5(ve, A, C),
							suffixIcon: q,
							dropdownAlign: bE(k, S),
							clearIcon: u.createElement(Ms, null),
							prevIcon: u.createElement('span', {
								className: `${$}-prev-icon`
							}),
							nextIcon: u.createElement('span', {
								className: `${$}-next-icon`
							}),
							superPrevIcon: u.createElement('span', {
								className: `${$}-super-prev-icon`
							}),
							superNextIcon: u.createElement('span', {
								className: `${$}-super-next-icon`
							}),
							allowClear: !0,
							transitionName: `${W}-slide-up`
						},
						j,
						N,
						z,
						{
							locale: ve.lang,
							className: Z(
								{ [`${$}-${K}`]: K, [`${$}-borderless`]: !y },
								qo($, Is(le, P), ie),
								H,
								M,
								g,
								b
							),
							prefixCls: $,
							getPopupContainer: h || I,
							generateConfig: e,
							components: SE,
							direction: k,
							disabled: te,
							dropdownClassName: Z(H, b, x || w)
						}
					)
				)
			)
		})
		return c && (f.displayName = c), f
	}
	const n = t(),
		r = t('week', 'WeekPicker'),
		o = t('month', 'MonthPicker'),
		a = t('year', 'YearPicker'),
		i = t('time', 'TimePicker'),
		l = t('quarter', 'QuarterPicker')
	return {
		DatePicker: n,
		WeekPicker: r,
		MonthPicker: o,
		YearPicker: a,
		TimePicker: i,
		QuarterPicker: l
	}
}
const SE = { button: c5 }
function E5(e) {
	return e ? (Array.isArray(e) ? e : [e]) : []
}
function zc(e) {
	const {
			format: t,
			picker: n,
			showHour: r,
			showMinute: o,
			showSecond: a,
			use12Hours: i
		} = e,
		l = E5(t)[0],
		s = Object.assign({}, e)
	return (
		l &&
			typeof l == 'string' &&
			(!l.includes('s') && a === void 0 && (s.showSecond = !1),
			!l.includes('m') && o === void 0 && (s.showMinute = !1),
			!l.includes('H') && !l.includes('h') && r === void 0 && (s.showHour = !1),
			(l.includes('a') || l.includes('A')) &&
				i === void 0 &&
				(s.use12Hours = !0)),
		n === 'time'
			? s
			: (typeof l == 'function' && delete s.format, { showTime: s })
	)
}
function $5(e) {
	const {
			DatePicker: t,
			WeekPicker: n,
			MonthPicker: r,
			YearPicker: o,
			TimePicker: a,
			QuarterPicker: i
		} = x5(e),
		l = C5(e),
		s = t
	return (
		(s.WeekPicker = n),
		(s.MonthPicker = r),
		(s.YearPicker = o),
		(s.RangePicker = l),
		(s.TimePicker = a),
		(s.QuarterPicker = i),
		s
	)
}
const Ls = $5(VD),
	P5 = Rd(Ls, 'picker')
Ls._InternalPanelDoNotUseOrYouWillBeFired = P5
const R5 = Rd(Ls.RangePicker, 'picker')
Ls._InternalRangePanelDoNotUseOrYouWillBeFired = R5
const M5 = Ls
var O5 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'
				}
			}
		]
	},
	name: 'eye',
	theme: 'outlined'
}
const N5 = O5
var CE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: N5 }))
}
CE.displayName = 'EyeOutlined'
const I5 = u.forwardRef(CE),
	k5 = e => {
		const { getPrefixCls: t, direction: n } = u.useContext(kt),
			{ prefixCls: r, className: o = '' } = e,
			a = t('input-group', r),
			i = t('input'),
			[l, s] = bg(i),
			c = Z(
				a,
				{
					[`${a}-lg`]: e.size === 'large',
					[`${a}-sm`]: e.size === 'small',
					[`${a}-compact`]: e.compact,
					[`${a}-rtl`]: n === 'rtl'
				},
				s,
				o
			),
			f = u.useContext(ho),
			d = u.useMemo(
				() => Object.assign(Object.assign({}, f), { isFormItemInput: !1 }),
				[f]
			)
		return l(
			u.createElement(
				'span',
				{
					className: c,
					style: e.style,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					onFocus: e.onFocus,
					onBlur: e.onBlur
				},
				u.createElement(ho.Provider, { value: d }, e.children)
			)
		)
	},
	T5 = k5
function Ku(e) {
	return !!(e.addonBefore || e.addonAfter)
}
function wE(e) {
	return !!(e.prefix || e.suffix || e.allowClear)
}
function Wl(e, t, n, r) {
	if (n) {
		var o = t
		if (t.type === 'click') {
			var a = e.cloneNode(!0)
			;(o = Object.create(t, {
				target: { value: a },
				currentTarget: { value: a }
			})),
				(a.value = ''),
				n(o)
			return
		}
		if (r !== void 0) {
			;(o = Object.create(t, {
				target: { value: e },
				currentTarget: { value: e }
			})),
				(e.value = r),
				n(o)
			return
		}
		n(o)
	}
}
function D5(e, t) {
	if (e) {
		e.focus(t)
		var n = t || {},
			r = n.cursor
		if (r) {
			var o = e.value.length
			switch (r) {
				case 'start':
					e.setSelectionRange(0, 0)
					break
				case 'end':
					e.setSelectionRange(o, o)
					break
				default:
					e.setSelectionRange(0, o)
			}
		}
	}
}
function wm(e) {
	return typeof e > 'u' || e === null ? '' : String(e)
}
var xE = function (t) {
		var n,
			r = t.inputElement,
			o = t.prefixCls,
			a = t.prefix,
			i = t.suffix,
			l = t.addonBefore,
			s = t.addonAfter,
			c = t.className,
			f = t.style,
			d = t.affixWrapperClassName,
			v = t.groupClassName,
			p = t.wrapperClassName,
			h = t.disabled,
			g = t.readOnly,
			b = t.focused,
			m = t.triggerFocus,
			y = t.allowClear,
			S = t.value,
			C = t.handleReset,
			x = t.hidden,
			w = t.inputStyle,
			E = t.classes,
			P = u.useRef(null),
			N = function (j) {
				var z
				;(z = P.current) !== null &&
					z !== void 0 &&
					z.contains(j.target) &&
					(m == null || m())
			},
			O = function () {
				var j
				if (!y) return null
				var z = !h && !g && S,
					A = ''.concat(o, '-clear-icon'),
					W =
						Ze(y) === 'object' && y !== null && y !== void 0 && y.clearIcon
							? y.clearIcon
							: '✖'
				return he.createElement(
					'span',
					{
						onClick: C,
						onMouseDown: function (K) {
							return K.preventDefault()
						},
						className: Z(
							A,
							((j = {}),
							V(j, ''.concat(A, '-hidden'), !z),
							V(j, ''.concat(A, '-has-suffix'), !!i),
							j)
						),
						role: 'button',
						tabIndex: -1
					},
					W
				)
			},
			k = u.cloneElement(r, {
				value: S,
				hidden: x,
				style: F(
					F({}, (n = r.props) === null || n === void 0 ? void 0 : n.style),
					w
				)
			})
		if (wE(t)) {
			var I,
				$ = ''.concat(o, '-affix-wrapper'),
				R = Z(
					$,
					((I = {}),
					V(I, ''.concat($, '-disabled'), h),
					V(I, ''.concat($, '-focused'), b),
					V(I, ''.concat($, '-readonly'), g),
					V(I, ''.concat($, '-input-with-clear-btn'), i && y && S),
					I),
					!Ku(t) && c,
					d,
					E == null ? void 0 : E.affixWrapper
				),
				M =
					(i || y) &&
					he.createElement(
						'span',
						{ className: ''.concat(o, '-suffix') },
						O(),
						i
					)
			k = he.createElement(
				'span',
				{ className: R, style: f, hidden: !Ku(t) && x, onClick: N, ref: P },
				a &&
					he.createElement('span', { className: ''.concat(o, '-prefix') }, a),
				u.cloneElement(r, { style: w ?? null, value: S, hidden: null }),
				M
			)
		}
		if (Ku(t)) {
			var T = ''.concat(o, '-group'),
				_ = ''.concat(T, '-addon'),
				D = Z(''.concat(o, '-wrapper'), T, p, E == null ? void 0 : E.wrapper),
				L = Z(
					''.concat(o, '-group-wrapper'),
					c,
					v,
					E == null ? void 0 : E.group
				)
			return he.createElement(
				'span',
				{ className: L, style: f, hidden: x },
				he.createElement(
					'span',
					{ className: D },
					l && he.createElement('span', { className: _ }, l),
					u.cloneElement(k, { style: w ?? null, hidden: null }),
					s && he.createElement('span', { className: _ }, s)
				)
			)
		}
		return k
	},
	_5 = [
		'autoComplete',
		'onChange',
		'onFocus',
		'onBlur',
		'onPressEnter',
		'onKeyDown',
		'prefixCls',
		'disabled',
		'htmlSize',
		'className',
		'maxLength',
		'suffix',
		'showCount',
		'type',
		'inputClassName',
		'classes'
	],
	L5 = u.forwardRef(function (e, t) {
		var n = e.autoComplete,
			r = e.onChange,
			o = e.onFocus,
			a = e.onBlur,
			i = e.onPressEnter,
			l = e.onKeyDown,
			s = e.prefixCls,
			c = s === void 0 ? 'rc-input' : s,
			f = e.disabled,
			d = e.htmlSize,
			v = e.className,
			p = e.maxLength,
			h = e.suffix,
			g = e.showCount,
			b = e.type,
			m = b === void 0 ? 'text' : b,
			y = e.inputClassName,
			S = e.classes,
			C = ot(e, _5),
			x = Kt(e.defaultValue, { value: e.value }),
			w = B(x, 2),
			E = w[0],
			P = w[1],
			N = u.useState(!1),
			O = B(N, 2),
			k = O[0],
			I = O[1],
			$ = u.useRef(null),
			R = function (A) {
				$.current && D5($.current, A)
			}
		u.useImperativeHandle(t, function () {
			return {
				focus: R,
				blur: function () {
					var A
					;(A = $.current) === null || A === void 0 || A.blur()
				},
				setSelectionRange: function (A, W, Y) {
					var K
					;(K = $.current) === null ||
						K === void 0 ||
						K.setSelectionRange(A, W, Y)
				},
				select: function () {
					var A
					;(A = $.current) === null || A === void 0 || A.select()
				},
				input: $.current
			}
		}),
			u.useEffect(
				function () {
					I(function (z) {
						return z && f ? !1 : z
					})
				},
				[f]
			)
		var M = function (A) {
				e.value === void 0 && P(A.target.value),
					$.current && Wl($.current, A, r)
			},
			T = function (A) {
				i && A.key === 'Enter' && i(A), l == null || l(A)
			},
			_ = function (A) {
				I(!0), o == null || o(A)
			},
			D = function (A) {
				I(!1), a == null || a(A)
			},
			L = function (A) {
				P(''), R(), $.current && Wl($.current, A, r)
			},
			H = function () {
				var A = Tr(e, [
					'prefixCls',
					'onPressEnter',
					'addonBefore',
					'addonAfter',
					'prefix',
					'suffix',
					'allowClear',
					'defaultValue',
					'showCount',
					'affixWrapperClassName',
					'groupClassName',
					'inputClassName',
					'classes',
					'wrapperClassName',
					'htmlSize'
				])
				return he.createElement(
					'input',
					se({ autoComplete: n }, A, {
						onChange: M,
						onFocus: _,
						onBlur: D,
						onKeyDown: T,
						className: Z(
							c,
							V({}, ''.concat(c, '-disabled'), f),
							y,
							S == null ? void 0 : S.input,
							!Ku(e) && !wE(e) && v
						),
						ref: $,
						size: d,
						type: m
					})
				)
			},
			j = function () {
				var A = Number(p) > 0
				if (h || g) {
					var W = wm(E),
						Y = xe(W).length,
						K =
							Ze(g) === 'object'
								? g.formatter({ value: W, count: Y, maxLength: p })
								: ''.concat(Y).concat(A ? ' / '.concat(p) : '')
					return he.createElement(
						he.Fragment,
						null,
						!!g &&
							he.createElement(
								'span',
								{
									className: Z(
										''.concat(c, '-show-count-suffix'),
										V({}, ''.concat(c, '-show-count-has-suffix'), !!h)
									)
								},
								K
							),
						h
					)
				}
				return null
			}
		return he.createElement(
			xE,
			se({}, C, {
				prefixCls: c,
				className: v,
				inputElement: H(),
				handleReset: L,
				value: wm(E),
				focused: k,
				triggerFocus: R,
				suffix: j(),
				disabled: f,
				classes: S
			})
		)
	})
function EE(e, t) {
	const n = u.useRef([]),
		r = () => {
			n.current.push(
				setTimeout(() => {
					var o, a, i, l
					!((o = e.current) === null || o === void 0) &&
						o.input &&
						((a = e.current) === null || a === void 0
							? void 0
							: a.input.getAttribute('type')) === 'password' &&
						!((i = e.current) === null || i === void 0) &&
						i.input.hasAttribute('value') &&
						((l = e.current) === null ||
							l === void 0 ||
							l.input.removeAttribute('value'))
				})
			)
		}
	return (
		u.useEffect(
			() => (
				t && r(),
				() =>
					n.current.forEach(o => {
						o && clearTimeout(o)
					})
			),
			[]
		),
		r
	)
}
function A5(e) {
	return !!(e.prefix || e.suffix || e.allowClear)
}
var F5 =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
function z5(e, t) {
	if (!e) return
	e.focus(t)
	const { cursor: n } = t || {}
	if (n) {
		const r = e.value.length
		switch (n) {
			case 'start':
				e.setSelectionRange(0, 0)
				break
			case 'end':
				e.setSelectionRange(r, r)
				break
			default:
				e.setSelectionRange(0, r)
				break
		}
	}
}
const H5 = u.forwardRef((e, t) => {
		const {
				prefixCls: n,
				bordered: r = !0,
				status: o,
				size: a,
				disabled: i,
				onBlur: l,
				onFocus: s,
				suffix: c,
				allowClear: f,
				addonAfter: d,
				addonBefore: v,
				className: p,
				rootClassName: h,
				onChange: g
			} = e,
			b = F5(e, [
				'prefixCls',
				'bordered',
				'status',
				'size',
				'disabled',
				'onBlur',
				'onFocus',
				'suffix',
				'allowClear',
				'addonAfter',
				'addonBefore',
				'className',
				'rootClassName',
				'onChange'
			]),
			{ getPrefixCls: m, direction: y, input: S } = he.useContext(kt),
			C = m('input', n),
			x = u.useRef(null),
			[w, E] = bg(C),
			{ compactSize: P, compactItemClassnames: N } = Ki(C, y),
			O = he.useContext(Dr),
			k = P || a || O,
			I = he.useContext(La),
			$ = i ?? I,
			{ status: R, hasFeedback: M, feedbackIcon: T } = u.useContext(ho),
			_ = Is(R, o),
			D = A5(e) || !!M,
			L = u.useRef(D)
		u.useEffect(() => {
			D && L.current, (L.current = D)
		}, [D])
		const H = EE(x, !0),
			j = K => {
				H(), l == null || l(K)
			},
			z = K => {
				H(), s == null || s(K)
			},
			A = K => {
				H(), g == null || g(K)
			},
			W = (M || c) && he.createElement(he.Fragment, null, c, M && T)
		let Y
		return (
			typeof f == 'object' && f != null && f.clearIcon
				? (Y = f)
				: f && (Y = { clearIcon: he.createElement(Ms, null) }),
			w(
				he.createElement(
					L5,
					Object.assign(
						{
							ref: Gr(t, x),
							prefixCls: C,
							autoComplete: S == null ? void 0 : S.autoComplete
						},
						b,
						{
							disabled: $,
							onBlur: j,
							onFocus: z,
							suffix: W,
							allowClear: Y,
							className: Z(p, h, N),
							onChange: A,
							addonAfter:
								d &&
								he.createElement(
									Ay,
									null,
									he.createElement(Yy, { override: !0, status: !0 }, d)
								),
							addonBefore:
								v &&
								he.createElement(
									Ay,
									null,
									he.createElement(Yy, { override: !0, status: !0 }, v)
								),
							classes: {
								input: Z(
									{
										[`${C}-sm`]: k === 'small',
										[`${C}-lg`]: k === 'large',
										[`${C}-rtl`]: y === 'rtl',
										[`${C}-borderless`]: !r
									},
									!D && qo(C, _),
									E
								),
								affixWrapper: Z(
									{
										[`${C}-affix-wrapper-sm`]: k === 'small',
										[`${C}-affix-wrapper-lg`]: k === 'large',
										[`${C}-affix-wrapper-rtl`]: y === 'rtl',
										[`${C}-affix-wrapper-borderless`]: !r
									},
									qo(`${C}-affix-wrapper`, _, M),
									E
								),
								wrapper: Z({ [`${C}-group-rtl`]: y === 'rtl' }, E),
								group: Z(
									{
										[`${C}-group-wrapper-sm`]: k === 'small',
										[`${C}-group-wrapper-lg`]: k === 'large',
										[`${C}-group-wrapper-rtl`]: y === 'rtl',
										[`${C}-group-wrapper-disabled`]: $
									},
									qo(`${C}-group-wrapper`, _, M),
									E
								)
							}
						}
					)
				)
			)
		)
	}),
	Sg = H5
var V5 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z'
				}
			},
			{
				tag: 'path',
				attrs: {
					d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z'
				}
			}
		]
	},
	name: 'eye-invisible',
	theme: 'outlined'
}
const j5 = V5
var $E = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: j5 }))
}
$E.displayName = 'EyeInvisibleOutlined'
const B5 = u.forwardRef($E)
var W5 =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
const U5 = e => (e ? u.createElement(I5, null) : u.createElement(B5, null)),
	Y5 = { click: 'onClick', hover: 'onMouseOver' },
	K5 = u.forwardRef((e, t) => {
		const { visibilityToggle: n = !0 } = e,
			r = typeof n == 'object' && n.visible !== void 0,
			[o, a] = u.useState(() => (r ? n.visible : !1)),
			i = u.useRef(null)
		u.useEffect(() => {
			r && a(n.visible)
		}, [r, n])
		const l = EE(i),
			s = () => {
				const { disabled: x } = e
				x ||
					(o && l(),
					a(w => {
						var E
						const P = !w
						return (
							typeof n == 'object' &&
								((E = n.onVisibleChange) === null ||
									E === void 0 ||
									E.call(n, P)),
							P
						)
					}))
			},
			c = x => {
				const { action: w = 'click', iconRender: E = U5 } = e,
					P = Y5[w] || '',
					N = E(o),
					O = {
						[P]: s,
						className: `${x}-icon`,
						key: 'passwordIcon',
						onMouseDown: k => {
							k.preventDefault()
						},
						onMouseUp: k => {
							k.preventDefault()
						}
					}
				return u.cloneElement(
					u.isValidElement(N) ? N : u.createElement('span', null, N),
					O
				)
			},
			{ className: f, prefixCls: d, inputPrefixCls: v, size: p } = e,
			h = W5(e, ['className', 'prefixCls', 'inputPrefixCls', 'size']),
			{ getPrefixCls: g } = u.useContext(kt),
			b = g('input', v),
			m = g('input-password', d),
			y = n && c(m),
			S = Z(m, f, { [`${m}-${p}`]: !!p }),
			C = Object.assign(
				Object.assign({}, Tr(h, ['suffix', 'iconRender', 'visibilityToggle'])),
				{ type: o ? 'text' : 'password', className: S, prefixCls: b, suffix: y }
			)
		return (
			p && (C.size = p),
			u.createElement(Sg, Object.assign({ ref: Gr(t, i) }, C))
		)
	}),
	G5 = K5
var X5 =
	(globalThis && globalThis.__rest) ||
	function (e, t) {
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
const q5 = u.forwardRef((e, t) => {
		const {
				prefixCls: n,
				inputPrefixCls: r,
				className: o,
				size: a,
				suffix: i,
				enterButton: l = !1,
				addonAfter: s,
				loading: c,
				disabled: f,
				onSearch: d,
				onChange: v,
				onCompositionStart: p,
				onCompositionEnd: h
			} = e,
			g = X5(e, [
				'prefixCls',
				'inputPrefixCls',
				'className',
				'size',
				'suffix',
				'enterButton',
				'addonAfter',
				'loading',
				'disabled',
				'onSearch',
				'onChange',
				'onCompositionStart',
				'onCompositionEnd'
			]),
			{ getPrefixCls: b, direction: m } = u.useContext(kt),
			y = u.useContext(Dr),
			S = u.useRef(!1),
			C = b('input-search', n),
			x = b('input', r),
			{ compactSize: w } = Ki(C, m),
			E = w || a || y,
			P = u.useRef(null),
			N = j => {
				j && j.target && j.type === 'click' && d && d(j.target.value, j),
					v && v(j)
			},
			O = j => {
				var z
				document.activeElement ===
					((z = P.current) === null || z === void 0 ? void 0 : z.input) &&
					j.preventDefault()
			},
			k = j => {
				var z, A
				d &&
					d(
						(A =
							(z = P.current) === null || z === void 0 ? void 0 : z.input) ===
							null || A === void 0
							? void 0
							: A.value,
						j
					)
			},
			I = j => {
				S.current || c || k(j)
			},
			$ = typeof l == 'boolean' ? u.createElement(og, null) : null,
			R = `${C}-button`
		let M
		const T = l || {},
			_ = T.type && T.type.__ANT_BUTTON === !0
		_ || T.type === 'button'
			? (M = Rc(
					T,
					Object.assign(
						{
							onMouseDown: O,
							onClick: j => {
								var z, A
								;(A =
									(z = T == null ? void 0 : T.props) === null || z === void 0
										? void 0
										: z.onClick) === null ||
									A === void 0 ||
									A.call(z, j),
									k(j)
							},
							key: 'enterButton'
						},
						_ ? { className: R, size: E } : {}
					)
			  ))
			: (M = u.createElement(
					Kh,
					{
						className: R,
						type: l ? 'primary' : void 0,
						size: E,
						disabled: f,
						key: 'enterButton',
						onMouseDown: O,
						onClick: k,
						loading: c,
						icon: $
					},
					l
			  )),
			s && (M = [M, Rc(s, { key: 'addonAfter' })])
		const D = Z(
				C,
				{
					[`${C}-rtl`]: m === 'rtl',
					[`${C}-${E}`]: !!E,
					[`${C}-with-button`]: !!l
				},
				o
			),
			L = j => {
				;(S.current = !0), p == null || p(j)
			},
			H = j => {
				;(S.current = !1), h == null || h(j)
			}
		return u.createElement(
			Sg,
			Object.assign({ ref: Gr(P, t), onPressEnter: I }, g, {
				size: E,
				onCompositionStart: L,
				onCompositionEnd: H,
				prefixCls: x,
				addonAfter: M,
				suffix: i,
				onChange: N,
				className: D,
				disabled: f
			})
		)
	}),
	Q5 = q5
var Z5 = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
	J5 = [
		'letter-spacing',
		'line-height',
		'padding-top',
		'padding-bottom',
		'font-family',
		'font-weight',
		'font-size',
		'font-variant',
		'text-rendering',
		'text-transform',
		'width',
		'text-indent',
		'padding-left',
		'padding-right',
		'border-width',
		'box-sizing',
		'word-break',
		'white-space'
	],
	iv = {},
	cr
function e8(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
		n =
			e.getAttribute('id') ||
			e.getAttribute('data-reactid') ||
			e.getAttribute('name')
	if (t && iv[n]) return iv[n]
	var r = window.getComputedStyle(e),
		o =
			r.getPropertyValue('box-sizing') ||
			r.getPropertyValue('-moz-box-sizing') ||
			r.getPropertyValue('-webkit-box-sizing'),
		a =
			parseFloat(r.getPropertyValue('padding-bottom')) +
			parseFloat(r.getPropertyValue('padding-top')),
		i =
			parseFloat(r.getPropertyValue('border-bottom-width')) +
			parseFloat(r.getPropertyValue('border-top-width')),
		l = J5.map(function (c) {
			return ''.concat(c, ':').concat(r.getPropertyValue(c))
		}).join(';'),
		s = { sizingStyle: l, paddingSize: a, borderSize: i, boxSizing: o }
	return t && n && (iv[n] = s), s
}
function t8(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
		n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
		r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null
	cr ||
		((cr = document.createElement('textarea')),
		cr.setAttribute('tab-index', '-1'),
		cr.setAttribute('aria-hidden', 'true'),
		document.body.appendChild(cr)),
		e.getAttribute('wrap')
			? cr.setAttribute('wrap', e.getAttribute('wrap'))
			: cr.removeAttribute('wrap')
	var o = e8(e, t),
		a = o.paddingSize,
		i = o.borderSize,
		l = o.boxSizing,
		s = o.sizingStyle
	cr.setAttribute('style', ''.concat(s, ';').concat(Z5)),
		(cr.value = e.value || e.placeholder || '')
	var c = void 0,
		f = void 0,
		d,
		v = cr.scrollHeight
	if (
		(l === 'border-box' ? (v += i) : l === 'content-box' && (v -= a),
		n !== null || r !== null)
	) {
		cr.value = ' '
		var p = cr.scrollHeight - a
		n !== null &&
			((c = p * n),
			l === 'border-box' && (c = c + a + i),
			(v = Math.max(c, v))),
			r !== null &&
				((f = p * r),
				l === 'border-box' && (f = f + a + i),
				(d = v > f ? '' : 'hidden'),
				(v = Math.min(f, v)))
	}
	var h = { height: v, overflowY: d, resize: 'none' }
	return c && (h.minHeight = c), f && (h.maxHeight = f), h
}
var n8 = [
		'prefixCls',
		'onPressEnter',
		'defaultValue',
		'value',
		'autoSize',
		'onResize',
		'className',
		'style',
		'disabled',
		'onChange',
		'onInternalAutoSize'
	],
	lv = 0,
	sv = 1,
	uv = 2,
	r8 = u.forwardRef(function (e, t) {
		var n = e,
			r = n.prefixCls
		n.onPressEnter
		var o = n.defaultValue,
			a = n.value,
			i = n.autoSize,
			l = n.onResize,
			s = n.className,
			c = n.style,
			f = n.disabled,
			d = n.onChange
		n.onInternalAutoSize
		var v = ot(n, n8),
			p = Kt(o, {
				value: a,
				postState: function (W) {
					return W ?? ''
				}
			}),
			h = B(p, 2),
			g = h[0],
			b = h[1],
			m = function (W) {
				b(W.target.value), d == null || d(W)
			},
			y = u.useRef()
		u.useImperativeHandle(t, function () {
			return { textArea: y.current }
		})
		var S = u.useMemo(
				function () {
					return i && Ze(i) === 'object' ? [i.minRows, i.maxRows] : []
				},
				[i]
			),
			C = B(S, 2),
			x = C[0],
			w = C[1],
			E = !!i,
			P = function () {
				try {
					if (document.activeElement === y.current) {
						var W = y.current,
							Y = W.selectionStart,
							K = W.selectionEnd,
							G = W.scrollTop
						y.current.setSelectionRange(Y, K), (y.current.scrollTop = G)
					}
				} catch {}
			},
			N = u.useState(uv),
			O = B(N, 2),
			k = O[0],
			I = O[1],
			$ = u.useState(),
			R = B($, 2),
			M = R[0],
			T = R[1],
			_ = function () {
				I(lv)
			}
		Ft(
			function () {
				E && _()
			},
			[a, x, w, E]
		),
			Ft(
				function () {
					if (k === lv) I(sv)
					else if (k === sv) {
						var A = t8(y.current, !1, x, w)
						I(uv), T(A)
					} else P()
				},
				[k]
			)
		var D = u.useRef(),
			L = function () {
				yt.cancel(D.current)
			},
			H = function (W) {
				k === uv &&
					(l == null || l(W),
					i &&
						(L(),
						(D.current = yt(function () {
							_()
						}))))
			}
		u.useEffect(function () {
			return L
		}, [])
		var j = E ? M : null,
			z = F(F({}, c), j)
		return (
			(k === lv || k === sv) &&
				((z.overflowY = 'hidden'), (z.overflowX = 'hidden')),
			u.createElement(
				vo,
				{ onResize: H, disabled: !(i || l) },
				u.createElement(
					'textarea',
					se({}, v, {
						ref: y,
						style: z,
						className: Z(r, s, V({}, ''.concat(r, '-disabled'), f)),
						disabled: f,
						value: g,
						onChange: m
					})
				)
			)
		)
	}),
	o8 = [
		'defaultValue',
		'value',
		'onChange',
		'allowClear',
		'maxLength',
		'onCompositionStart',
		'onCompositionEnd',
		'suffix',
		'prefixCls',
		'classes',
		'showCount',
		'className',
		'style',
		'disabled'
	]
function PE(e, t) {
	return xe(e || '')
		.slice(0, t)
		.join('')
}
function Y1(e, t, n, r) {
	var o = n
	return (
		e
			? (o = PE(n, r))
			: xe(t || '').length < n.length && xe(n || '').length > r && (o = t),
		o
	)
}
var a8 = he.forwardRef(function (e, t) {
		var n = e.defaultValue,
			r = e.value,
			o = e.onChange,
			a = e.allowClear,
			i = e.maxLength,
			l = e.onCompositionStart,
			s = e.onCompositionEnd,
			c = e.suffix,
			f = e.prefixCls,
			d = f === void 0 ? 'rc-textarea' : f,
			v = e.classes,
			p = e.showCount,
			h = e.className,
			g = e.style,
			b = e.disabled,
			m = ot(e, o8),
			y = Kt(n, { value: r, defaultValue: n }),
			S = B(y, 2),
			C = S[0],
			x = S[1],
			w = u.useRef(null),
			E = he.useState(!1),
			P = B(E, 2),
			N = P[0],
			O = P[1],
			k = he.useRef(),
			I = he.useRef(0),
			$ = function () {
				w.current.textArea.focus()
			}
		u.useImperativeHandle(t, function () {
			return {
				resizableTextArea: w.current,
				focus: $,
				blur: function () {
					w.current.textArea.blur()
				}
			}
		})
		var R = Number(i) > 0,
			M = function (Y) {
				O(!0),
					(k.current = C),
					(I.current = Y.currentTarget.selectionStart),
					l == null || l(Y)
			},
			T = function (Y) {
				O(!1)
				var K = Y.currentTarget.value
				if (R) {
					var G,
						te =
							I.current >= i + 1 ||
							I.current ===
								((G = k.current) === null || G === void 0 ? void 0 : G.length)
					K = Y1(te, k.current, K, i)
				}
				K !== C && (x(K), Wl(Y.currentTarget, Y, o, K)), s == null || s(Y)
			},
			_ = function (Y) {
				var K = Y.target.value
				if (!N && R) {
					var G =
						Y.target.selectionStart >= i + 1 ||
						Y.target.selectionStart === K.length ||
						!Y.target.selectionStart
					K = Y1(G, C, K, i)
				}
				x(K), Wl(Y.currentTarget, Y, o, K)
			},
			D = function (Y) {
				var K = m.onPressEnter,
					G = m.onKeyDown
				Y.key === 'Enter' && K && K(Y), G == null || G(Y)
			},
			L = function (Y) {
				x(''), $(), Wl(w.current.textArea, Y, o)
			},
			H = wm(C)
		!N && R && r == null && (H = PE(H, i))
		var j = he.createElement(xE, {
			value: H,
			allowClear: a,
			handleReset: L,
			suffix: c,
			prefixCls: d,
			classes: { affixWrapper: v == null ? void 0 : v.affixWrapper },
			disabled: b,
			style: g,
			inputStyle: { resize: g == null ? void 0 : g.resize },
			inputElement: he.createElement(
				r8,
				se({}, m, {
					onKeyDown: D,
					onChange: _,
					onCompositionStart: M,
					onCompositionEnd: T,
					className: Z(p ? '' : h, v == null ? void 0 : v.textarea),
					style: !p && g,
					disabled: b,
					prefixCls: d,
					ref: w
				})
			)
		})
		if (p) {
			var z = xe(H).length,
				A
			return (
				Ze(p) === 'object'
					? (A = p.formatter({ value: H, count: z, maxLength: i }))
					: (A = ''.concat(z).concat(R ? ' / '.concat(i) : '')),
				he.createElement(
					'div',
					{
						hidden: m.hidden,
						className: Z(
							''.concat(d, '-show-count'),
							h,
							v == null ? void 0 : v.countWrapper
						),
						style: g,
						'data-count': A
					},
					j,
					he.createElement(
						'span',
						{ className: ''.concat(d, '-data-count') },
						A
					)
				)
			)
		}
		return j
	}),
	i8 =
		(globalThis && globalThis.__rest) ||
		function (e, t) {
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
const l8 = u.forwardRef((e, t) => {
		var {
				prefixCls: n,
				bordered: r = !0,
				size: o,
				disabled: a,
				status: i,
				allowClear: l
			} = e,
			s = i8(e, [
				'prefixCls',
				'bordered',
				'size',
				'disabled',
				'status',
				'allowClear'
			])
		const { getPrefixCls: c, direction: f } = u.useContext(kt),
			d = u.useContext(Dr),
			v = o || d,
			p = u.useContext(La),
			h = a ?? p,
			{ status: g, hasFeedback: b, feedbackIcon: m } = u.useContext(ho),
			y = Is(g, i),
			S = u.useRef(null)
		u.useImperativeHandle(t, () => {
			var P
			return {
				resizableTextArea:
					(P = S.current) === null || P === void 0
						? void 0
						: P.resizableTextArea,
				focus: N => {
					var O, k
					z5(
						(k =
							(O = S.current) === null || O === void 0
								? void 0
								: O.resizableTextArea) === null || k === void 0
							? void 0
							: k.textArea,
						N
					)
				},
				blur: () => {
					var N
					return (N = S.current) === null || N === void 0 ? void 0 : N.blur()
				}
			}
		})
		const C = c('input', n)
		let x
		typeof l == 'object' && l != null && l.clearIcon
			? (x = l)
			: l && (x = { clearIcon: u.createElement(Ms, null) })
		const [w, E] = bg(C)
		return w(
			u.createElement(
				a8,
				Object.assign({}, s, {
					disabled: h,
					allowClear: x,
					classes: {
						affixWrapper: Z(
							`${C}-textarea-affix-wrapper`,
							{
								[`${C}-affix-wrapper-rtl`]: f === 'rtl',
								[`${C}-affix-wrapper-borderless`]: !r,
								[`${C}-affix-wrapper-sm`]: v === 'small',
								[`${C}-affix-wrapper-lg`]: v === 'large'
							},
							qo(`${C}-affix-wrapper`, y),
							E
						),
						countWrapper: Z(`${C}-textarea`, `${C}-textarea-show-count`, E),
						textarea: Z(
							{
								[`${C}-borderless`]: !r,
								[`${C}-sm`]: v === 'small',
								[`${C}-lg`]: v === 'large'
							},
							qo(C, y),
							E
						)
					},
					prefixCls: C,
					suffix:
						b &&
						u.createElement('span', { className: `${C}-textarea-suffix` }, m),
					ref: S
				})
			)
		)
	}),
	s8 = l8,
	As = Sg
As.Group = T5
As.Search = Q5
As.TextArea = s8
As.Password = G5
const u8 = As
var c8 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
				}
			}
		]
	},
	name: 'copy',
	theme: 'outlined'
}
const d8 = c8
var RE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: d8 }))
}
RE.displayName = 'CopyOutlined'
const f8 = u.forwardRef(RE)
var v8 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z'
				}
			}
		]
	},
	name: 'environment',
	theme: 'outlined'
}
const p8 = v8
var ME = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: p8 }))
}
ME.displayName = 'EnvironmentOutlined'
const Hi = u.forwardRef(ME)
var m8 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM512 533c-85.5 0-155.6 67.3-160 151.6a8 8 0 008 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4C420 636.1 461.5 597 512 597s92.1 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 008-8.4C667.6 600.3 597.5 533 512 533z'
				}
			}
		]
	},
	name: 'frown',
	theme: 'outlined'
}
const h8 = m8
var OE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: h8 }))
}
OE.displayName = 'FrownOutlined'
const g8 = u.forwardRef(OE)
var y8 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
				}
			},
			{
				tag: 'path',
				attrs: {
					d: 'M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z'
				}
			}
		]
	},
	name: 'info-circle',
	theme: 'outlined'
}
const b8 = y8
var NE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: b8 }))
}
NE.displayName = 'InfoCircleOutlined'
const S8 = u.forwardRef(NE)
var C8 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1067.88-67.89 48 48 0 10-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 00-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 00-11.3 0l-39.6 39.5a8.03 8.03 0 000 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z'
				}
			}
		]
	},
	name: 'tags',
	theme: 'outlined'
}
const w8 = C8
var IE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: w8 }))
}
IE.displayName = 'TagsOutlined'
const x8 = u.forwardRef(IE)
var E8 = {
	icon: {
		tag: 'svg',
		attrs: { viewBox: '64 64 896 896', focusable: 'false' },
		children: [
			{
				tag: 'path',
				attrs: {
					d: 'M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z'
				}
			}
		]
	},
	name: 'team',
	theme: 'outlined'
}
const $8 = E8
var kE = function (t, n) {
	return u.createElement(dn, F(F({}, t), {}, { ref: n, icon: $8 }))
}
kE.displayName = 'TeamOutlined'
const P8 = u.forwardRef(kE)
/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gs() {
	return (
		(gs = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		gs.apply(this, arguments)
	)
}
var Ho
;(function (e) {
	;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Ho || (Ho = {}))
const K1 = 'popstate'
function R8(e) {
	e === void 0 && (e = {})
	function t(r, o) {
		let { pathname: a, search: i, hash: l } = r.location
		return xm(
			'',
			{ pathname: a, search: i, hash: l },
			(o.state && o.state.usr) || null,
			(o.state && o.state.key) || 'default'
		)
	}
	function n(r, o) {
		return typeof o == 'string' ? o : Hc(o)
	}
	return O8(t, n, null, e)
}
function mn(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function M8() {
	return Math.random().toString(36).substr(2, 8)
}
function G1(e, t) {
	return { usr: e.state, key: e.key, idx: t }
}
function xm(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		gs(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? Ji(t) : t,
			{ state: n, key: (t && t.key) || r || M8() }
		)
	)
}
function Hc(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	)
}
function Ji(e) {
	let t = {}
	if (e) {
		let n = e.indexOf('#')
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
		let r = e.indexOf('?')
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e)
	}
	return t
}
function O8(e, t, n, r) {
	r === void 0 && (r = {})
	let { window: o = document.defaultView, v5Compat: a = !1 } = r,
		i = o.history,
		l = Ho.Pop,
		s = null,
		c = f()
	c == null && ((c = 0), i.replaceState(gs({}, i.state, { idx: c }), ''))
	function f() {
		return (i.state || { idx: null }).idx
	}
	function d() {
		l = Ho.Pop
		let b = f(),
			m = b == null ? null : b - c
		;(c = b), s && s({ action: l, location: g.location, delta: m })
	}
	function v(b, m) {
		l = Ho.Push
		let y = xm(g.location, b, m)
		n && n(y, b), (c = f() + 1)
		let S = G1(y, c),
			C = g.createHref(y)
		try {
			i.pushState(S, '', C)
		} catch {
			o.location.assign(C)
		}
		a && s && s({ action: l, location: g.location, delta: 1 })
	}
	function p(b, m) {
		l = Ho.Replace
		let y = xm(g.location, b, m)
		n && n(y, b), (c = f())
		let S = G1(y, c),
			C = g.createHref(y)
		i.replaceState(S, '', C),
			a && s && s({ action: l, location: g.location, delta: 0 })
	}
	function h(b) {
		let m = o.location.origin !== 'null' ? o.location.origin : o.location.href,
			y = typeof b == 'string' ? b : Hc(b)
		return (
			mn(
				m,
				'No window.location.(origin|href) available to create URL for href: ' +
					y
			),
			new URL(y, m)
		)
	}
	let g = {
		get action() {
			return l
		},
		get location() {
			return e(o, i)
		},
		listen(b) {
			if (s) throw new Error('A history only accepts one active listener')
			return (
				o.addEventListener(K1, d),
				(s = b),
				() => {
					o.removeEventListener(K1, d), (s = null)
				}
			)
		},
		createHref(b) {
			return t(o, b)
		},
		createURL: h,
		encodeLocation(b) {
			let m = h(b)
			return { pathname: m.pathname, search: m.search, hash: m.hash }
		},
		push: v,
		replace: p,
		go(b) {
			return i.go(b)
		}
	}
	return g
}
var X1
;(function (e) {
	;(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error')
})(X1 || (X1 = {}))
function N8(e, t, n) {
	n === void 0 && (n = '/')
	let r = typeof t == 'string' ? Ji(t) : t,
		o = Cg(r.pathname || '/', n)
	if (o == null) return null
	let a = TE(e)
	I8(a)
	let i = null
	for (let l = 0; i == null && l < a.length; ++l) i = H8(a[l], B8(o))
	return i
}
function TE(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
	let o = (a, i, l) => {
		let s = {
			relativePath: l === void 0 ? a.path || '' : l,
			caseSensitive: a.caseSensitive === !0,
			childrenIndex: i,
			route: a
		}
		s.relativePath.startsWith('/') &&
			(mn(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(s.relativePath = s.relativePath.slice(r.length)))
		let c = Qo([r, s.relativePath]),
			f = n.concat(s)
		a.children &&
			a.children.length > 0 &&
			(mn(
				a.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + c + '".')
			),
			TE(a.children, t, f, c)),
			!(a.path == null && !a.index) &&
				t.push({ path: c, score: F8(c, a.index), routesMeta: f })
	}
	return (
		e.forEach((a, i) => {
			var l
			if (a.path === '' || !((l = a.path) != null && l.includes('?'))) o(a, i)
			else for (let s of DE(a.path)) o(a, i, s)
		}),
		t
	)
}
function DE(e) {
	let t = e.split('/')
	if (t.length === 0) return []
	let [n, ...r] = t,
		o = n.endsWith('?'),
		a = n.replace(/\?$/, '')
	if (r.length === 0) return o ? [a, ''] : [a]
	let i = DE(r.join('/')),
		l = []
	return (
		l.push(...i.map(s => (s === '' ? a : [a, s].join('/')))),
		o && l.push(...i),
		l.map(s => (e.startsWith('/') && s === '' ? '/' : s))
	)
}
function I8(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: z8(
					t.routesMeta.map(r => r.childrenIndex),
					n.routesMeta.map(r => r.childrenIndex)
			  )
	)
}
const k8 = /^:\w+$/,
	T8 = 3,
	D8 = 2,
	_8 = 1,
	L8 = 10,
	A8 = -2,
	q1 = e => e === '*'
function F8(e, t) {
	let n = e.split('/'),
		r = n.length
	return (
		n.some(q1) && (r += A8),
		t && (r += D8),
		n
			.filter(o => !q1(o))
			.reduce((o, a) => o + (k8.test(a) ? T8 : a === '' ? _8 : L8), r)
	)
}
function z8(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
		? e[e.length - 1] - t[t.length - 1]
		: 0
}
function H8(e, t) {
	let { routesMeta: n } = e,
		r = {},
		o = '/',
		a = []
	for (let i = 0; i < n.length; ++i) {
		let l = n[i],
			s = i === n.length - 1,
			c = o === '/' ? t : t.slice(o.length) || '/',
			f = V8(
				{ path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
				c
			)
		if (!f) return null
		Object.assign(r, f.params)
		let d = l.route
		a.push({
			params: r,
			pathname: Qo([o, f.pathname]),
			pathnameBase: K8(Qo([o, f.pathnameBase])),
			route: d
		}),
			f.pathnameBase !== '/' && (o = Qo([o, f.pathnameBase]))
	}
	return a
}
function V8(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
	let [n, r] = j8(e.path, e.caseSensitive, e.end),
		o = t.match(n)
	if (!o) return null
	let a = o[0],
		i = a.replace(/(.)\/+$/, '$1'),
		l = o.slice(1)
	return {
		params: r.reduce((c, f, d) => {
			if (f === '*') {
				let v = l[d] || ''
				i = a.slice(0, a.length - v.length).replace(/(.)\/+$/, '$1')
			}
			return (c[f] = W8(l[d] || '', f)), c
		}, {}),
		pathname: a,
		pathnameBase: i,
		pattern: e
	}
}
function j8(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		wg(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		)
	let r = [],
		o =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
				.replace(/\/:(\w+)/g, (i, l) => (r.push(l), '/([^\\/]+)'))
	return (
		e.endsWith('*')
			? (r.push('*'),
			  (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (o += '\\/*$')
			: e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
		[new RegExp(o, t ? void 0 : 'i'), r]
	)
}
function B8(e) {
	try {
		return decodeURI(e)
	} catch (t) {
		return (
			wg(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		)
	}
}
function W8(e, t) {
	try {
		return decodeURIComponent(e)
	} catch (n) {
		return (
			wg(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(' due to a bad percent encoding (' + n + ').')
			),
			e
		)
	}
}
function Cg(e, t) {
	if (t === '/') return e
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n)
	return r && r !== '/' ? null : e.slice(n) || '/'
}
function wg(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t)
		try {
			throw new Error(t)
		} catch {}
	}
}
function U8(e, t) {
	t === void 0 && (t = '/')
	let {
		pathname: n,
		search: r = '',
		hash: o = ''
	} = typeof e == 'string' ? Ji(e) : e
	return {
		pathname: n ? (n.startsWith('/') ? n : Y8(n, t)) : t,
		search: G8(r),
		hash: X8(o)
	}
}
function Y8(e, t) {
	let n = t.replace(/\/+$/, '').split('/')
	return (
		e.split('/').forEach(o => {
			o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o)
		}),
		n.length > 1 ? n.join('/') : '/'
	)
}
function cv(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' +
			t +
			'` field [' +
			JSON.stringify(r) +
			'].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	)
}
function _E(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	)
}
function LE(e, t, n, r) {
	r === void 0 && (r = !1)
	let o
	typeof e == 'string'
		? (o = Ji(e))
		: ((o = gs({}, e)),
		  mn(
				!o.pathname || !o.pathname.includes('?'),
				cv('?', 'pathname', 'search', o)
		  ),
		  mn(
				!o.pathname || !o.pathname.includes('#'),
				cv('#', 'pathname', 'hash', o)
		  ),
		  mn(!o.search || !o.search.includes('#'), cv('#', 'search', 'hash', o)))
	let a = e === '' || o.pathname === '',
		i = a ? '/' : o.pathname,
		l
	if (r || i == null) l = n
	else {
		let d = t.length - 1
		if (i.startsWith('..')) {
			let v = i.split('/')
			for (; v[0] === '..'; ) v.shift(), (d -= 1)
			o.pathname = v.join('/')
		}
		l = d >= 0 ? t[d] : '/'
	}
	let s = U8(o, l),
		c = i && i !== '/' && i.endsWith('/'),
		f = (a || i === '.') && n.endsWith('/')
	return !s.pathname.endsWith('/') && (c || f) && (s.pathname += '/'), s
}
const Qo = e => e.join('/').replace(/\/\/+/g, '/'),
	K8 = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	G8 = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	X8 = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function q8(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	)
}
const Q8 = ['post', 'put', 'patch', 'delete']
;[...Q8]
/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Em() {
	return (
		(Em = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Em.apply(this, arguments)
	)
}
function Z8(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
const J8 = typeof Object.is == 'function' ? Object.is : Z8,
	{ useState: eL, useEffect: tL, useLayoutEffect: nL, useDebugValue: rL } = Yl
function oL(e, t, n) {
	const r = t(),
		[{ inst: o }, a] = eL({ inst: { value: r, getSnapshot: t } })
	return (
		nL(() => {
			;(o.value = r), (o.getSnapshot = t), dv(o) && a({ inst: o })
		}, [e, r, t]),
		tL(
			() => (
				dv(o) && a({ inst: o }),
				e(() => {
					dv(o) && a({ inst: o })
				})
			),
			[e]
		),
		rL(r),
		r
	)
}
function dv(e) {
	const t = e.getSnapshot,
		n = e.value
	try {
		const r = t()
		return !J8(n, r)
	} catch {
		return !0
	}
}
function aL(e, t, n) {
	return t()
}
const iL =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	lL = !iL,
	sL = lL ? aL : oL
'useSyncExternalStore' in Yl && (e => e.useSyncExternalStore)(Yl)
const AE = u.createContext(null),
	FE = u.createContext(null),
	Fs = u.createContext(null),
	Fd = u.createContext(null),
	za = u.createContext({ outlet: null, matches: [] }),
	zE = u.createContext(null)
function uL(e, t) {
	let { relative: n } = t === void 0 ? {} : t
	zs() || mn(!1)
	let { basename: r, navigator: o } = u.useContext(Fs),
		{ hash: a, pathname: i, search: l } = HE(e, { relative: n }),
		s = i
	return (
		r !== '/' && (s = i === '/' ? r : Qo([r, i])),
		o.createHref({ pathname: s, search: l, hash: a })
	)
}
function zs() {
	return u.useContext(Fd) != null
}
function zd() {
	return zs() || mn(!1), u.useContext(Fd).location
}
function Hd() {
	zs() || mn(!1)
	let { basename: e, navigator: t } = u.useContext(Fs),
		{ matches: n } = u.useContext(za),
		{ pathname: r } = zd(),
		o = JSON.stringify(_E(n).map(l => l.pathnameBase)),
		a = u.useRef(!1)
	return (
		u.useEffect(() => {
			a.current = !0
		}),
		u.useCallback(
			function (l, s) {
				if ((s === void 0 && (s = {}), !a.current)) return
				if (typeof l == 'number') {
					t.go(l)
					return
				}
				let c = LE(l, JSON.parse(o), r, s.relative === 'path')
				e !== '/' &&
					(c.pathname = c.pathname === '/' ? e : Qo([e, c.pathname])),
					(s.replace ? t.replace : t.push)(c, s.state, s)
			},
			[e, t, o, r]
		)
	)
}
function cL() {
	let { matches: e } = u.useContext(za),
		t = e[e.length - 1]
	return t ? t.params : {}
}
function HE(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = u.useContext(za),
		{ pathname: o } = zd(),
		a = JSON.stringify(_E(r).map(i => i.pathnameBase))
	return u.useMemo(() => LE(e, JSON.parse(a), o, n === 'path'), [e, a, o, n])
}
function dL(e, t) {
	zs() || mn(!1)
	let { navigator: n } = u.useContext(Fs),
		r = u.useContext(FE),
		{ matches: o } = u.useContext(za),
		a = o[o.length - 1],
		i = a ? a.params : {}
	a && a.pathname
	let l = a ? a.pathnameBase : '/'
	a && a.route
	let s = zd(),
		c
	if (t) {
		var f
		let g = typeof t == 'string' ? Ji(t) : t
		l === '/' || ((f = g.pathname) != null && f.startsWith(l)) || mn(!1),
			(c = g)
	} else c = s
	let d = c.pathname || '/',
		v = l === '/' ? d : d.slice(l.length) || '/',
		p = N8(e, { pathname: v }),
		h = mL(
			p &&
				p.map(g =>
					Object.assign({}, g, {
						params: Object.assign({}, i, g.params),
						pathname: Qo([
							l,
							n.encodeLocation
								? n.encodeLocation(g.pathname).pathname
								: g.pathname
						]),
						pathnameBase:
							g.pathnameBase === '/'
								? l
								: Qo([
										l,
										n.encodeLocation
											? n.encodeLocation(g.pathnameBase).pathname
											: g.pathnameBase
								  ])
					})
				),
			o,
			r || void 0
		)
	return t && h
		? u.createElement(
				Fd.Provider,
				{
					value: {
						location: Em(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default'
							},
							c
						),
						navigationType: Ho.Pop
					}
				},
				h
		  )
		: h
}
function fL() {
	let e = bL(),
		t = q8(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		a = null
	return u.createElement(
		u.Fragment,
		null,
		u.createElement('h2', null, 'Unexpected Application Error!'),
		u.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? u.createElement('pre', { style: o }, n) : null,
		a
	)
}
class vL extends u.Component {
	constructor(t) {
		super(t), (this.state = { location: t.location, error: t.error })
	}
	static getDerivedStateFromError(t) {
		return { error: t }
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location
			? { error: t.error, location: t.location }
			: { error: t.error || n.error, location: n.location }
	}
	componentDidCatch(t, n) {
		console.error('React Router caught the following error during render', t, n)
	}
	render() {
		return this.state.error
			? u.createElement(
					za.Provider,
					{ value: this.props.routeContext },
					u.createElement(zE.Provider, {
						value: this.state.error,
						children: this.props.component
					})
			  )
			: this.props.children
	}
}
function pL(e) {
	let { routeContext: t, match: n, children: r } = e,
		o = u.useContext(AE)
	return (
		o &&
			o.static &&
			o.staticContext &&
			n.route.errorElement &&
			(o.staticContext._deepestRenderedBoundaryId = n.route.id),
		u.createElement(za.Provider, { value: t }, r)
	)
}
function mL(e, t, n) {
	if ((t === void 0 && (t = []), e == null))
		if (n != null && n.errors) e = n.matches
		else return null
	let r = e,
		o = n == null ? void 0 : n.errors
	if (o != null) {
		let a = r.findIndex(i => i.route.id && (o == null ? void 0 : o[i.route.id]))
		a >= 0 || mn(!1), (r = r.slice(0, Math.min(r.length, a + 1)))
	}
	return r.reduceRight((a, i, l) => {
		let s = i.route.id ? (o == null ? void 0 : o[i.route.id]) : null,
			c = n ? i.route.errorElement || u.createElement(fL, null) : null,
			f = t.concat(r.slice(0, l + 1)),
			d = () =>
				u.createElement(
					pL,
					{ match: i, routeContext: { outlet: a, matches: f } },
					s ? c : i.route.element !== void 0 ? i.route.element : a
				)
		return n && (i.route.errorElement || l === 0)
			? u.createElement(vL, {
					location: n.location,
					component: c,
					error: s,
					children: d(),
					routeContext: { outlet: null, matches: f }
			  })
			: d()
	}, null)
}
var Q1
;(function (e) {
	;(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator')
})(Q1 || (Q1 = {}))
var Vc
;(function (e) {
	;(e.UseLoaderData = 'useLoaderData'),
		(e.UseActionData = 'useActionData'),
		(e.UseRouteError = 'useRouteError'),
		(e.UseNavigation = 'useNavigation'),
		(e.UseRouteLoaderData = 'useRouteLoaderData'),
		(e.UseMatches = 'useMatches'),
		(e.UseRevalidator = 'useRevalidator')
})(Vc || (Vc = {}))
function hL(e) {
	let t = u.useContext(FE)
	return t || mn(!1), t
}
function gL(e) {
	let t = u.useContext(za)
	return t || mn(!1), t
}
function yL(e) {
	let t = gL(),
		n = t.matches[t.matches.length - 1]
	return n.route.id || mn(!1), n.route.id
}
function bL() {
	var e
	let t = u.useContext(zE),
		n = hL(Vc.UseRouteError),
		r = yL(Vc.UseRouteError)
	return t || ((e = n.errors) == null ? void 0 : e[r])
}
function ca(e) {
	mn(!1)
}
function SL(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: o = Ho.Pop,
		navigator: a,
		static: i = !1
	} = e
	zs() && mn(!1)
	let l = t.replace(/^\/*/, '/'),
		s = u.useMemo(() => ({ basename: l, navigator: a, static: i }), [l, a, i])
	typeof r == 'string' && (r = Ji(r))
	let {
			pathname: c = '/',
			search: f = '',
			hash: d = '',
			state: v = null,
			key: p = 'default'
		} = r,
		h = u.useMemo(() => {
			let g = Cg(c, l)
			return g == null
				? null
				: { pathname: g, search: f, hash: d, state: v, key: p }
		}, [l, c, f, d, v, p])
	return h == null
		? null
		: u.createElement(
				Fs.Provider,
				{ value: s },
				u.createElement(Fd.Provider, {
					children: n,
					value: { location: h, navigationType: o }
				})
		  )
}
function CL(e) {
	let { children: t, location: n } = e,
		r = u.useContext(AE),
		o = r && !t ? r.router.routes : $m(t)
	return dL(o, n)
}
var Z1
;(function (e) {
	;(e[(e.pending = 0)] = 'pending'),
		(e[(e.success = 1)] = 'success'),
		(e[(e.error = 2)] = 'error')
})(Z1 || (Z1 = {}))
new Promise(() => {})
function $m(e, t) {
	t === void 0 && (t = [])
	let n = []
	return (
		u.Children.forEach(e, (r, o) => {
			if (!u.isValidElement(r)) return
			if (r.type === u.Fragment) {
				n.push.apply(n, $m(r.props.children, t))
				return
			}
			r.type !== ca && mn(!1), !r.props.index || !r.props.children || mn(!1)
			let a = [...t, o],
				i = {
					id: r.props.id || a.join('-'),
					caseSensitive: r.props.caseSensitive,
					element: r.props.element,
					index: r.props.index,
					path: r.props.path,
					loader: r.props.loader,
					action: r.props.action,
					errorElement: r.props.errorElement,
					hasErrorBoundary: r.props.errorElement != null,
					shouldRevalidate: r.props.shouldRevalidate,
					handle: r.props.handle
				}
			r.props.children && (i.children = $m(r.props.children, a)), n.push(i)
		}),
		n
	)
}
/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pm() {
	return (
		(Pm = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Pm.apply(this, arguments)
	)
}
function wL(e, t) {
	if (e == null) return {}
	var n = {},
		r = Object.keys(e),
		o,
		a
	for (a = 0; a < r.length; a++)
		(o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
	return n
}
function xL(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function EL(e, t) {
	return e.button === 0 && (!t || t === '_self') && !xL(e)
}
const $L = [
	'onClick',
	'relative',
	'reloadDocument',
	'replace',
	'state',
	'target',
	'to',
	'preventScrollReset'
]
function PL(e) {
	let { basename: t, children: n, window: r } = e,
		o = u.useRef()
	o.current == null && (o.current = R8({ window: r, v5Compat: !0 }))
	let a = o.current,
		[i, l] = u.useState({ action: a.action, location: a.location })
	return (
		u.useLayoutEffect(() => a.listen(l), [a]),
		u.createElement(SL, {
			basename: t,
			children: n,
			location: i.location,
			navigationType: i.action,
			navigator: a
		})
	)
}
const RL =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	ML = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ys = u.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: o,
				reloadDocument: a,
				replace: i,
				state: l,
				target: s,
				to: c,
				preventScrollReset: f
			} = t,
			d = wL(t, $L),
			{ basename: v } = u.useContext(Fs),
			p,
			h = !1
		if (typeof c == 'string' && ML.test(c) && ((p = c), RL)) {
			let y = new URL(window.location.href),
				S = c.startsWith('//') ? new URL(y.protocol + c) : new URL(c),
				C = Cg(S.pathname, v)
			S.origin === y.origin && C != null
				? (c = C + S.search + S.hash)
				: (h = !0)
		}
		let g = uL(c, { relative: o }),
			b = OL(c, {
				replace: i,
				state: l,
				target: s,
				preventScrollReset: f,
				relative: o
			})
		function m(y) {
			r && r(y), y.defaultPrevented || b(y)
		}
		return u.createElement(
			'a',
			Pm({}, d, { href: p || g, onClick: h || a ? r : m, ref: n, target: s })
		)
	})
var J1
;(function (e) {
	;(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmitImpl = 'useSubmitImpl'),
		(e.UseFetcher = 'useFetcher')
})(J1 || (J1 = {}))
var eb
;(function (e) {
	;(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration')
})(eb || (eb = {}))
function OL(e, t) {
	let {
			target: n,
			replace: r,
			state: o,
			preventScrollReset: a,
			relative: i
		} = t === void 0 ? {} : t,
		l = Hd(),
		s = zd(),
		c = HE(e, { relative: i })
	return u.useCallback(
		f => {
			if (EL(f, n)) {
				f.preventDefault()
				let d = r !== void 0 ? r : Hc(s) === Hc(c)
				l(e, { replace: d, state: o, preventScrollReset: a, relative: i })
			}
		},
		[s, l, c, r, o, n, e, a, i]
	)
}
const Yr = '/unicef-ai4d-research-bank',
	NL = () =>
		ce('div', {
			className:
				'flex h-12 justify-between bg-white p-3 px-10 text-cloud-burst',
			children: [
				U(ys, {
					to: `${Yr}/`,
					className: 'font-semibold hover:text-gray-600 hover:duration-500',
					children: 'AI4D Research Bank'
				}),
				U(ys, {
					to: `${Yr}/catalogue`,
					className:
						'font-medium text-gray-500 hover:text-cloud-burst hover:duration-500',
					children: 'Catalogue'
				})
			]
		}),
	Rm = () =>
		ce('div', {
			className:
				'flex h-[calc(100vh_-_3rem)] flex-col items-center justify-center gap-5 border-t border-gray-200 bg-white text-cloud-burst',
			children: [
				U(g8, { style: { color: '#24295C', fontSize: '100px' } }),
				U('h1', {
					className: 'text-3xl font-bold',
					children: 'Page Not Found!'
				}),
				U('p', {
					className: 'mx-8 text-center',
					children: 'Sorry, the page you are looking for could not be found.'
				}),
				U(ys, {
					to: `${Yr}/`,
					className:
						'rounded bg-cloud-burst p-2 text-left tracking-tight text-white hover:bg-opacity-95',
					children: 'Go to homepage'
				})
			]
		}),
	IL = async () => {
		try {
			return await (await fetch(`${Yr}/api/data/catalog.json`)).json()
		} catch (e) {
			return console.log(`Error: no catalog items found due to error: ${e}`), []
		}
	},
	kL = async () => {
		try {
			return await (await fetch(`${Yr}/api/data/featured.json`)).json()
		} catch (e) {
			return (
				console.log(`Error: no featured items found due to error: ${e}`), []
			)
		}
	},
	VE = he.createContext({}),
	TL = ({ children: e }) => {
		const [t, n] = u.useState(!0),
			[r, o] = u.useState([]),
			[a, i] = u.useState([]),
			[l, s] = u.useState([]),
			c = u.useMemo(
				() => ({
					isLoading: t,
					catalogueItems: a,
					setCatalogueItems: i,
					filteredCatalogueItems: l,
					setFilteredCatalogueItems: s,
					featuredItems: r
				}),
				[t, a, i, l, s, r]
			),
			f = async d => {
				const p = (await kL()).map(g => g.id),
					h = d
						.filter(g => p.includes(g.id))
						.sort((g, b) => p.indexOf(g.id) - p.indexOf(b.id))
				o(h)
			}
		return (
			u.useEffect(() => {
				;(async () => {
					n(!0)
					const v = await IL()
					i(v), s(v), f(v), n(!1)
				})()
			}, []),
			U(VE.Provider, { value: c, children: e })
		)
	},
	Hs = () => he.useContext(VE)
var Mm = {},
	DL = {
		get exports() {
			return Mm
		},
		set exports(e) {
			Mm = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		return function (n, r, o) {
			r.prototype.isBetween = function (a, i, l, s) {
				var c = o(a),
					f = o(i),
					d = (s = s || '()')[0] === '(',
					v = s[1] === ')'
				return (
					((d ? this.isAfter(c, l) : !this.isBefore(c, l)) &&
						(v ? this.isBefore(f, l) : !this.isAfter(f, l))) ||
					((d ? this.isBefore(c, l) : !this.isAfter(c, l)) &&
						(v ? this.isAfter(f, l) : !this.isBefore(f, l)))
				)
			}
		}
	})
})(DL)
const _L = Mm
var Om = {},
	LL = {
		get exports() {
			return Om
		},
		set exports(e) {
			Om = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		return function (n, r) {
			r.prototype.isSameOrAfter = function (o, a) {
				return this.isSame(o, a) || this.isAfter(o, a)
			}
		}
	})
})(LL)
const AL = Om
var Nm = {},
	FL = {
		get exports() {
			return Nm
		},
		set exports(e) {
			Nm = e
		}
	}
;(function (e, t) {
	;(function (n, r) {
		e.exports = r()
	})(Kr, function () {
		return function (n, r) {
			r.prototype.isSameOrBefore = function (o, a) {
				return this.isSame(o, a) || this.isBefore(o, a)
			}
		}
	})
})(FL)
const zL = Nm,
	Ia = e => e.replaceAll('-', ' ').replaceAll(/\b\w/g, t => t.toUpperCase()),
	fv = (e, t) => {
		const n = e.lastIndexOf(t)
		return n === -1 ? '' : e.slice(n + t.length)
	}
sn.extend(AL)
sn.extend(zL)
const HL = e =>
		e
			.reduce((t, n) => {
				const { 'country-region': r, id: o } = n
				if (!r) return t
				const a = t.find(i => i.value === r)
				return a
					? (a.catalogueIds.push(o), t)
					: (t.push({ catalogueIds: [o], label: Ia(r), value: r }), t)
			}, [])
			.sort((t, n) => t.value.localeCompare(n.value)),
	VL = e =>
		e
			.reduce((t, n) => {
				const { organization: r, id: o } = n,
					a = t.find(i => i.value === r.name)
				return a
					? (a.catalogueIds.push(o), t)
					: (t.push({ catalogueIds: [o], label: r.name, value: r.name }), t)
			}, [])
			.sort((t, n) => t.value.localeCompare(n.value)),
	jL = e =>
		e
			.reduce((t, n) => {
				const { tags: r, id: o } = n
				if (!r) return t
				for (const a of r) {
					const i = t.find(l => l.value === a)
					i
						? i.catalogueIds.push(o)
						: t.push({ catalogueIds: [o], label: a, value: a })
				}
				return t
			}, [])
			.sort((t, n) => t.value.localeCompare(n.value)),
	vv = (e, t) => {
		let n = new Set()
		for (const r of e) {
			const o = t.find(a => a.value === r)
			o && (n = new Set([...n, ...o.catalogueIds]))
		}
		return n
	},
	jE = e => e === null || e.length === 0,
	BL = e => Object.values(e).every(t => jE(t)),
	WL = (e, t) => {
		const n = Object.entries(e)
			.filter(([r]) => !jE(t[r]))
			.map(([r, o]) => o)
		return n.length === 0
			? new Set()
			: n.reduce((r, o) => new Set([...r].filter(a => o.has(a))))
	},
	UL = e => {
		const [t, n] = e
			.toString()
			.split('-')
			.map(o => Number.parseInt(o, 10))
		if (!n) return [t]
		const r = n - t + 1
		return Array.from({ length: r }, (o, a) => t + a)
	},
	YL = (e, t) => {
		let n = new Set()
		if (!e) return n
		const r = t.filter(o => {
			var i, l
			if (!o['year-period']) return !1
			const a = UL(o['year-period'])
			for (const s of a) {
				const c = sn(`${s}-01-01`),
					f = (i = e[0]) == null ? void 0 : i.year(),
					d = (l = e[1]) == null ? void 0 : l.year()
				if (!f && !d) return !1
				if (
					(f && !d && c.isSameOrAfter(`${f}-01-01`, 'year')) ||
					(d && !f && c.isSameOrBefore(`${d}-01-01`, 'year')) ||
					(f && d && c.isBetween(`${f}-01-01`, `${d}-01-01`, null, '[]'))
				)
					return !0
			}
			return !1
		})
		return (n = new Set(r.map(o => o.id))), n
	},
	KL = (e, t) => {
		const n = t.filter(r => r.name.toLowerCase().includes(e.toLowerCase()))
		return new Set(n.map(r => r.id))
	}
sn.extend(_L)
const GL = {
		countryFilter: [],
		organizationFilter: [],
		tagsFilter: [],
		yearFilter: null,
		searchValue: ''
	},
	BE = he.createContext({}),
	XL = ({ children: e }) => {
		const {
				catalogueItems: t,
				setFilteredCatalogueItems: n,
				isLoading: r
			} = Hs(),
			[o, a] = u.useState(!0),
			[i, l] = u.useState([]),
			[s, c] = u.useState([]),
			[f, d] = u.useState([]),
			[v, p] = u.useState(GL),
			[h, g] = u.useState(!1)
		u.useEffect(() => {
			;(() => {
				if (r || t.length === 0) return
				a(!0)
				const y = HL(t)
				l(y)
				const S = VL(t)
				c(S)
				const C = jL(t)
				d(C), a(!1)
			})()
		}, [t, r]),
			u.useEffect(() => {
				;(() => {
					g(!0)
					const {
						countryFilter: y,
						organizationFilter: S,
						tagsFilter: C,
						yearFilter: x,
						searchValue: w
					} = v
					if (BL(v) && w.length === 0) {
						n(t), g(!1)
						return
					}
					const E = vv(y, i),
						P = vv(S, s),
						N = vv(C, f),
						O = YL(x, t),
						k = KL(w, t),
						$ = WL(
							{
								countryFilter: E,
								organizationFilter: P,
								tagsFilter: N,
								yearFilter: O,
								searchValue: k
							},
							v
						)
					n(t.filter(R => $.has(R.id))), g(!1)
				})()
			}, [v, t, i, s, n, f])
		const b = u.useMemo(
			() => ({
				isFilterOptionsLoading: o,
				countries: i,
				organizations: s,
				tags: f,
				filters: v,
				setFilters: p,
				isFiltersLoading: h,
				setIsFiltersLoading: g
			}),
			[o, i, s, f, v, h, g]
		)
		return U(BE.Provider, { value: b, children: e })
	},
	Vd = () => he.useContext(BE),
	WE = he.createContext({}),
	qL = ({ children: e }) => {
		const [t, n] = u.useState(''),
			[r, o] = u.useState([]),
			a = u.useMemo(
				() => ({
					searchInput: t,
					setSearchInput: n,
					searchSuggestions: r,
					setSearchSuggestions: o
				}),
				[t, n, r, o]
			)
		return U(WE.Provider, { value: a, children: e })
	},
	jd = () => he.useContext(WE),
	QL = async e => {
		await navigator.clipboard.writeText(e)
	},
	tb = ({ url: e }) => {
		const [t, n] = u.useState(!1)
		return ce('button', {
			type: 'button',
			className:
				'ml-auto w-[100px] rounded bg-cloud-burst p-2 text-left tracking-tight text-white hover:bg-opacity-95',
			onClick: () => {
				QL(e),
					n(!0),
					setTimeout(() => {
						n(!1)
					}, 1500)
			},
			children: [
				U(f8, { style: { marginRight: '8px' } }),
				t ? 'Copied!' : 'Copy Link'
			]
		})
	},
	ZL = ({ catalogueItem: e }) => {
		const { links: t, 'data-columns': n, 'sample-data': r } = e,
			o = t.filter(f => f.type.includes('training-dataset')),
			a = t.filter(f => f.type.startsWith('dataset-'))
		let i
		o.length > 0 &&
			(i = ce('div', {
				className: 'flex flex-col gap-2',
				children: [
					U('span', {
						className: 'mb-1 font-semibold text-gray-700',
						children: 'Training Dataset'
					}),
					o.map(f =>
						ce(
							'div',
							{
								className: 'flex flex-row items-center',
								children: [
									ce('div', {
										className: 'w-2/3',
										children: [
											U(
												'a',
												{
													href: f.url,
													target: '_blank',
													rel: 'noreferrer',
													className: 'hover:underline',
													children: f.description
												},
												`${f.description}`
											),
											U('span', {
												className:
													'ml-3 rounded-3xl bg-gray-200 py-1 px-2 text-xs font-semibold text-gray-600',
												children: fv(f.type, 'training-dataset-').toUpperCase()
											})
										]
									}),
									U(tb, { url: f.url })
								]
							},
							f.description
						)
					)
				]
			}))
		let l
		a.length > 0 &&
			(l = ce('div', {
				className: 'flex flex-col gap-2',
				children: [
					U('span', {
						className: 'mb-1 font-semibold text-gray-700',
						children: 'Results Datasets'
					}),
					a.map(f =>
						ce(
							'div',
							{
								className: 'flex flex-row items-center',
								children: [
									ce('div', {
										className: 'w-2/3',
										children: [
											U(
												'a',
												{
													href: f.url,
													target: '_blank',
													rel: 'noreferrer',
													className: 'hover:underline',
													children: f.description
												},
												`${f.description}`
											),
											U('span', {
												className:
													'ml-3 rounded-3xl bg-gray-200 py-1 px-2 text-xs font-semibold text-gray-600',
												children: f.type.includes('raw')
													? fv(f.type, 'dataset-raw-').toUpperCase()
													: fv(f.type, 'dataset-').toUpperCase()
											})
										]
									}),
									f.type.includes('raw') && U(tb, { url: f.url })
								]
							},
							f.description
						)
					)
				]
			}))
		let s
		n &&
			(s = ce('div', {
				className: 'flex flex-col',
				children: [
					U('span', {
						className: 'mb-1 font-semibold text-gray-700',
						children: 'Data Schema'
					}),
					U('div', {
						className: 'flex max-h-[500px] flex-col overflow-y-scroll',
						children: ce('table', {
							className: 'border-collapse',
							children: [
								U('thead', {
									children: ce('tr', {
										className: 'bg-gray-300',
										children: [
											U('td', {
												className: 'p-2 font-semibold text-cloud-burst',
												children: 'Column Name'
											}),
											U('td', {
												className: 'p-2 font-semibold text-cloud-burst',
												children: 'Type'
											})
										]
									})
								}),
								U('tbody', {
									children: n.map(f =>
										ce(
											'tr',
											{
												className: 'even:bg-gray-100',
												children: [
													U('td', {
														className: 'p-2 font-medium',
														children: f.name
													}),
													U('td', {
														className: 'p-2',
														children: f.type.toUpperCase()
													})
												]
											},
											f.name
										)
									)
								})
							]
						})
					})
				]
			}))
		let c
		return (
			r &&
				(c = ce('div', {
					className: 'flex flex-col',
					children: [
						U('span', {
							className: 'mb-1 font-semibold text-gray-700',
							children: 'Data Preview'
						}),
						ce('table', {
							className: 'block table-auto border-collapse overflow-x-scroll',
							children: [
								n
									? U('thead', {
											children: ce('tr', {
												className: 'bg-gray-300',
												children: [
													U('td', { className: 'px-2 py-1' }),
													n.map(f =>
														U(
															'td',
															{
																className:
																	'min-w-[100px] max-w-[500px] py-1 px-2 font-semibold text-cloud-burst',
																children: f.name
															},
															f.name
														)
													)
												]
											})
									  })
									: void 0,
								U('tbody', {
									children: r.map((f, d) =>
										ce(
											'tr',
											{
												className: 'even:bg-gray-100',
												children: [
													U('td', {
														className:
															'px-2 py-1 font-semibold text-cloud-burst',
														children: d
													}),
													f.map((v, p) =>
														U(
															'td',
															{
																className: 'px-2 py-1 font-medium',
																children: U('div', {
																	className:
																		'max-h-[100px] min-w-[100px] max-w-[500px] overflow-y-scroll ',
																	children: v
																})
															},
															`${v}-${p}`
														)
													)
												]
											},
											d
										)
									)
								})
							]
						})
					]
				})),
			ce('div', {
				className: 'mb-5 flex flex-col gap-6',
				children: [i, l, s, c]
			})
		)
	},
	JL = ({ catalogueItem: e }) => {
		const { links: t } = e,
			n = t
				.filter(o => !o.type.includes('dataset'))
				.reduce((o, a) => {
					const { type: i } = a
					return o[i] ?? (o[i] = []), o[i].push(a), o
				}, {})
		let r
		return (
			Object.keys(n).length > 0 &&
				(r = U('div', {
					className: 'mb-5 flex flex-col gap-6',
					children: Object.keys(n).map(o =>
						ce(
							'div',
							{
								className: 'flex flex-col gap-2',
								children: [
									U('span', {
										className: 'mb-1 font-semibold text-gray-700',
										children: Ia(o)
									}),
									n[o].map(a =>
										U(
											'a',
											{
												href: a.url,
												target: '_blank',
												rel: 'noreferrer',
												className: 'hover:underline',
												children: a.description
											},
											a.description
										)
									)
								]
							},
							o
						)
					)
				})),
			U('div', { children: r })
		)
	},
	eA = ({ catalogueItem: e }) => {
		const { description: t, 'evaluation-metrics': n } = e,
			r =
				n == null
					? void 0
					: n.map(o => {
							const { metric: a, link: i } = o,
								l =
									a &&
									ce('div', {
										className: 'flex flex-col',
										children: [
											U('span', {
												className: 'text-xs font-semibold text-cloud-burst',
												children: a['metric-type'].toUpperCase()
											}),
											U('span', {
												className: 'text-2xl font-semibold text-cloud-burst',
												children: a.value
											})
										]
									}),
								s =
									i &&
									ce('div', {
										className: 'self-center',
										children: [
											U(S8, { style: { marginRight: '8px' } }),
											U('a', {
												href: i.url,
												target: '_blank',
												rel: 'noreferrer',
												className: 'hover:underline',
												children: i.description
											})
										]
									})
							return a && i
								? ce(
										'div',
										{
											className:
												'align-center mt-3 flex grid-rows-1 flex-row gap-5 p-5',
											children: [l, s]
										},
										a['metric-type']
								  )
								: a
								? U('div', { className: 'p-5', children: l }, a['metric-type'])
								: i
								? U('div', { className: 'p-5', children: s }, i.url)
								: '-'
					  })
		return ce('div', {
			children: [
				U('p', { className: 'mb-5 text-gray-600', children: t }),
				n !== void 0 &&
					ce('div', {
						className: 'flex flex-col',
						children: [
							U('span', {
								className: 'font-semibold text-gray-700',
								children: 'Evaluation Metric'
							}),
							U('div', {
								className:
									'grid-cols-1 gap-5 divide-y divide-gray-200 text-gray-600',
								children: r
							})
						]
					})
			]
		})
	},
	Im = ({ onFilterClick: e, children: t, value: n }) =>
		U('button', {
			className:
				'whitespace-nowrap rounded-md bg-cloud-burst py-1 px-3 text-sm tracking-tight text-white hover:bg-opacity-95 ',
			type: 'button',
			onClick: () => e(n),
			children: t
		}),
	tA = {
		countryFilter: [],
		organizationFilter: [],
		tagsFilter: [],
		yearFilter: null,
		searchValue: ''
	},
	nA = () => {
		const { id: e } = cL(),
			{ setSearchInput: t } = jd(),
			{ setFilters: n, setIsFiltersLoading: r } = Vd(),
			o = Hd(),
			[a, i] = u.useState(!0),
			[l, s] = u.useState(),
			c = Hs()
		u.useEffect(() => {
			;(async () => {
				if ((i(!0), e && !c.isLoading)) {
					const x = c.catalogueItems.find(w => w.id === e)
					x && s(x)
				}
				i(!1)
			})()
		}, [c, e])
		const f = C => {
			r(!0), t(''), n({ ...tA, tagsFilter: [C] }), o('../')
		}
		if (a || c.isLoading)
			return ce('div', {
				className: 'h-[calc(100vh_-_3rem)]  bg-white',
				children: [
					ce('div', {
						className: 'flex h-[11rem] flex-col gap-2 bg-cloud-burst p-10',
						children: [
							U(zo, { active: !0, title: !0, paragraph: !1 }),
							U(zo.Input, { active: !0, size: 'large', block: !0 }),
							U(zo, { active: !0, title: !0, paragraph: !1 })
						]
					}),
					U('div', { className: 'p-10', children: U(zo, {}) })
				]
			})
		if (!l) return U(Rm, {})
		const {
			name: d,
			organization: v,
			'date-added': p,
			'date-modified': h,
			'year-period': g,
			'country-region': b,
			tags: m
		} = l
		let y
		g && (y = ce('span', { children: ['(', g, ')'] }))
		const S = [
			{ key: '1', label: 'Overview', children: U(eA, { catalogueItem: l }) },
			{ key: '2', label: 'Data', children: U(ZL, { catalogueItem: l }) },
			{
				key: '3',
				label: 'Related Links',
				children: U(JL, { catalogueItem: l })
			}
		]
		return ce('div', {
			className: 'min-h-[calc(100vh_-_3rem)] bg-white',
			children: [
				ce('div', {
					className:
						'flex min-h-[10rem] flex-col bg-cloud-burst p-10 text-white',
					children: [
						U('a', {
							href: v.url,
							className: 'text-sm hover:underline',
							target: '_blank',
							rel: 'noreferrer',
							children: v.name
						}),
						ce('span', {
							className: 'text-3xl font-medium tracking-tighter',
							children: [d, ' ', y]
						}),
						ce('div', {
							className: 'mt-2 flex flex-row gap-10 text-sm',
							children: [
								ce('span', {
									children: [
										U(Hi, {}),
										' ',
										b ? `Country/Region: ${Ia(b)}` : '-'
									]
								}),
								ce('span', {
									children: [U(xa, {}), ' ', g ? `Year/Period: ${g}` : '-']
								})
							]
						})
					]
				}),
				ce('div', {
					className: 'flex flex-col md:flex-row',
					children: [
						U('div', {
							className:
								'flex w-full flex-col gap-4 p-10 text-cloud-burst md:w-2/3',
							children: U(pE, { defaultActiveKey: '1', items: S })
						}),
						ce('div', {
							className:
								'flex w-full flex-col gap-5 p-10 text-cloud-burst md:w-1/3',
							children: [
								U('div', {
									className: 'rounded bg-gray-50 p-6',
									children: ce('div', {
										className: 'flex flex-col gap-5',
										children: [
											ce('div', {
												className: 'align-center flex flex-row gap-3',
												children: [
													U(Hi, {
														style: {
															color: '#6b7280',
															fontSize: '24px',
															margin: 'auto 0'
														}
													}),
													ce('div', {
														className: 'flex flex-col',
														children: [
															U('span', {
																className: 'text-xs font-medium text-gray-500',
																children: 'COUNTRY / REGION'
															}),
															U('span', {
																className: 'text-sm font-medium',
																children: b ? Ia(b) : '-'
															})
														]
													})
												]
											}),
											ce('div', {
												className: 'align-center flex flex-row gap-3',
												children: [
													U(xa, {
														style: {
															color: '#6b7280',
															fontSize: '24px',
															margin: 'auto 0'
														}
													}),
													ce('div', {
														className: 'flex flex-col',
														children: [
															U('span', {
																className: 'text-xs font-medium text-gray-500',
																children: 'YEAR / PERIOD'
															}),
															U('span', {
																className: 'text-sm font-medium',
																children: g ?? '-'
															})
														]
													})
												]
											}),
											ce('div', {
												className: 'align-center flex flex-row gap-3',
												children: [
													U(P8, {
														style: {
															color: '#6b7280',
															fontSize: '24px',
															margin: 'auto 0'
														}
													}),
													ce('div', {
														className: 'flex flex-col',
														children: [
															U('span', {
																className: 'text-xs font-medium text-gray-500',
																children: 'ORGANIZATION'
															}),
															U('a', {
																href: v.url,
																target: '_blank',
																rel: 'noreferrer',
																className:
																	'text-sm font-medium hover:underline',
																children: v.name
															})
														]
													})
												]
											}),
											ce('div', {
												className: 'align-center flex flex-row gap-3',
												children: [
													U(xa, {
														style: {
															color: '#6b7280',
															fontSize: '24px',
															margin: 'auto 0'
														}
													}),
													ce('div', {
														className: 'flex flex-col',
														children: [
															U('span', {
																className: 'text-xs font-medium text-gray-500',
																children: 'DATE CREATED'
															}),
															U('span', {
																className: 'text-sm font-medium',
																children: sn(p).format('MMM DD, YYYY')
															})
														]
													})
												]
											}),
											h
												? ce('div', {
														className: 'flex flex-col',
														children: [
															U('span', {
																className: 'text-xs font-medium text-gray-500',
																children: 'DATE UPDATED'
															}),
															U('span', {
																className: 'text-sm font-medium',
																children: sn(h).format('MMM DD, YYYY')
															})
														]
												  })
												: void 0
										]
									})
								}),
								ce('div', {
									className: 'rounded bg-gray-50 p-5',
									children: [
										ce('span', {
											className: 'text-sm font-semibold',
											children: [
												U(x8, { style: { marginRight: '8px' } }),
												'Tags'
											]
										}),
										U('div', {
											className: 'flex flex-wrap gap-3 py-3',
											children:
												m == null
													? void 0
													: m.map(C =>
															U(
																Im,
																{ value: C, onFilterClick: f, children: C },
																C
															)
													  )
										})
									]
								})
							]
						})
					]
				})
			]
		})
	},
	rA = ({ catalogueItemData: e }) => {
		const {
			id: t,
			name: n,
			description: r,
			organization: o,
			'country-region': a,
			'year-period': i
		} = e
		let l
		i &&
			(l = ce(mv, {
				children: [
					U(Hi, {
						style: { color: '#4B5563', marginRight: '4px', fontSize: '14px' }
					}),
					ce('span', {
						className: 'w-1/2 text-xs text-gray-600',
						children: ['Year/Period: ', i]
					})
				]
			}))
		let s
		return (
			a &&
				(s = ce(mv, {
					children: [
						U(Hi, {
							style: { color: '#4B5563', marginRight: '4px', fontSize: '14px' }
						}),
						ce('span', {
							className: 'w-1/2 text-xs text-gray-600',
							children: ['Country/Region: ', Ia(a)]
						})
					]
				})),
			U(ys, {
				to: `${Yr}/catalogue/${t}`,
				children: ce('div', {
					className:
						'my-3 flex flex-col rounded p-3 hover:bg-gray-100 hover:duration-300',
					children: [
						U('span', { className: 'text-xs text-gray-600', children: o.name }),
						ce('div', {
							className: 'text-base font-semibold text-cloud-burst',
							children: [n, i ? ce('span', { children: [' (', i, ')'] }) : '']
						}),
						U('p', {
							className: 'text-xs text-gray-600 line-clamp-2',
							children: r
						}),
						ce('div', { className: 'mt-3 flex flex-row', children: [s, l] })
					]
				})
			})
		)
	},
	oA = ({ suggestion: e }) => {
		const {
			organization: t,
			name: n,
			'year-period': r,
			'country-region': o
		} = e
		return ce('div', {
			className: 'flex flex-col py-1',
			children: [
				U('span', { className: 'text-xs text-gray-600', children: t.name }),
				ce('span', {
					className: 'text-base font-semibold text-cloud-burst',
					children: [n, ' (', r, ')']
				}),
				ce('div', {
					className: 'flex flex-row gap-10',
					children: [
						o
							? ce('div', {
									className: 'flex flex-row items-center',
									children: [
										U(Hi, {
											style: {
												color: '#4B5563',
												marginRight: '4px',
												fontSize: '14px'
											}
										}),
										ce('span', {
											className: 'w-1/2 text-xs text-gray-600',
											children: ['Country/Region: ', Ia(o)]
										})
									]
							  })
							: void 0,
						r
							? ce('div', {
									children: [
										U(xa, {
											style: {
												color: '#4B5563',
												marginRight: '4px',
												fontSize: '14px'
											}
										}),
										ce('span', {
											className: 'w-1/2 text-xs text-gray-600',
											children: ['Year/Period: ', r]
										})
									]
							  })
							: void 0
					]
				})
			]
		})
	},
	aA = 10,
	xg = ({ onSearchBtnClick: e, path: t, inputWidth: n }) => {
		const r = Hd(),
			{ catalogueItems: o } = Hs(),
			{
				searchInput: a,
				setSearchInput: i,
				searchSuggestions: l,
				setSearchSuggestions: s
			} = jd(),
			{ setFilters: c } = Vd()
		return U(z4, {
			options: l,
			onSearch: v => {
				if ((i(v), v.length < 3)) {
					s([])
					return
				}
				const p = o
					.filter(h => h.name.toLowerCase().includes(v.toLowerCase()))
					.slice(0, aA)
					.map(h => ({
						value: h.name,
						data: h,
						label: U(oA, { suggestion: h })
					}))
				s(p)
			},
			onSelect: (v, p) => {
				c(h => ({ ...h, searchValue: v })), i(v), s([p]), r(`${t}${p.data.id}`)
			},
			defaultValue: a,
			style: { width: n, letterSpacing: '-0.025em' },
			children: U(u8.Search, {
				size: 'large',
				placeholder: 'Search for a dataset or a model',
				onSearch: e,
				allowClear: !0,
				enterButton: U(Kh, {
					style: { backgroundColor: 'white' },
					size: 'large',
					children: U(og, { color: '#24295c' })
				})
			})
		})
	}
xg.defaultProps = { inputWidth: '100%' }
const iA = '/unicef-ai4d-research-bank/assets/catalogue-hero-bg-ce53187f.jpg',
	{ RangePicker: lA } = M5,
	sA = () => {
		const { setSearchInput: e } = jd(),
			{ filteredCatalogueItems: t, isLoading: n } = Hs(),
			{
				countries: r,
				organizations: o,
				tags: a,
				filters: i,
				setFilters: l,
				isFiltersLoading: s
			} = Vd(),
			c = n || s
		let f
		const d = b => {
				l(m => ({ ...m, countryFilter: b }))
			},
			v = b => {
				l(m => ({ ...m, organizationFilter: b }))
			},
			p = b => {
				l(m => ({ ...m, tagsFilter: b }))
			},
			h = b => {
				l(m => ({ ...m, yearFilter: b }))
			},
			g = (b, m) => {
				l(y => ({ ...y, searchValue: b })),
					(m == null ? void 0 : m.type) === 'click' &&
						m.currentTarget.localName === 'input' &&
						e('')
			}
		return (
			c && (f = U('div', { className: 'mt-3 p-3', children: U(zo, {}) })),
			!c &&
				t.length === 0 &&
				(f = U('span', { children: 'No catalogue items available.' })),
			!c &&
				t.length > 0 &&
				(f = ce(mv, {
					children: [
						ce('span', {
							className: 'text-sm text-gray-500',
							children: [
								t.length,
								t.length === 1 ? ' result ' : ' results ',
								'available'
							]
						}),
						U('div', {
							className: 'grid grid-cols-1 divide-y divide-gray-100 ',
							children: t.map(b => U(rA, { catalogueItemData: b }, b.id))
						})
					]
				})),
			ce('div', {
				className: 'min-h-[calc(100vh_-_3rem)] bg-white',
				children: [
					ce('div', {
						className:
							'relative flex flex-col items-center justify-center py-10 px-10 ',
						children: [
							U('img', {
								src: iA,
								alt: 'BannerImage',
								className: 'absolute z-0 h-full w-full object-cover'
							}),
							U('div', {
								className:
									'absolute z-10 h-full w-full bg-gradient-to-r from-cloud-burst to-transparent'
							}),
							U('span', {
								className:
									'z-20 self-start text-3xl font-medium tracking-tighter text-white ',
								children: 'Search Catalogue'
							})
						]
					}),
					ce('div', {
						className: 'flex flex-col py-8 px-10 md:flex-row',
						children: [
							ce('div', {
								className:
									'mr-16 w-full self-start rounded-md bg-gray-50 p-6 md:w-1/3',
								children: [
									U('span', {
										className: 'font-semibold text-cloud-burst',
										children: 'FILTERS'
									}),
									ce(PD, {
										style: { width: '100%' },
										direction: 'vertical',
										children: [
											ce('div', {
												className: 'pt-3',
												children: [
													U('span', {
														className: 'font-bold text-cloud-burst',
														children: 'Country/Region'
													}),
													U(wi, {
														mode: 'multiple',
														allowClear: !0,
														style: { width: '100%', marginTop: '8px' },
														placeholder: 'Select a country/region...',
														defaultValue: i.countryFilter,
														onChange: d,
														options: r
													})
												]
											}),
											ce('div', {
												className: 'pt-3',
												children: [
													U('span', {
														className: 'font-bold text-cloud-burst',
														children: 'Year'
													}),
													U(lA, {
														style: { width: '100%', marginTop: '8px' },
														onChange: h,
														defaultValue: i.yearFilter,
														picker: 'year',
														allowEmpty: [!0, !0]
													})
												]
											}),
											ce('div', {
												className: 'pt-3',
												children: [
													U('span', {
														className: 'font-bold text-cloud-burst',
														children: 'Organization'
													}),
													U(wi, {
														mode: 'multiple',
														allowClear: !0,
														style: { width: '100%', marginTop: '8px' },
														placeholder: 'Select an organization...',
														defaultValue: i.organizationFilter,
														onChange: v,
														options: o
													})
												]
											}),
											ce('div', {
												className: 'pt-3',
												children: [
													U('span', {
														className: 'font-bold text-cloud-burst',
														children: 'Tags'
													}),
													U(wi, {
														mode: 'tags',
														allowClear: !0,
														style: { width: '100%', marginTop: '8px' },
														placeholder: 'Select a tag...',
														defaultValue: i.tagsFilter,
														onChange: p,
														options: a
													})
												]
											})
										]
									})
								]
							}),
							ce('div', {
								className: 'my-5 flex w-full flex-col md:my-0 md:w-2/3',
								children: [
									U(xg, { onSearchBtnClick: g, path: '' }),
									U('div', { className: 'my-3 text-cloud-burst', children: f })
								]
							})
						]
					})
				]
			})
		)
	},
	uA = ({ item: e, image: t }) =>
		U('div', {
			className: 'rounded-md border border-gray-300',
			children: ce(ys, {
				to: `${Yr}/catalogue/${e.id}`,
				children: [
					U('div', {
						className: 'h-[200px]',
						children: U('img', {
							src: `${Yr}/${e['detail-image-url'] ?? t}`,
							alt: e.name,
							className: 'h-full w-full rounded-t-sm object-cover'
						})
					}),
					ce('div', {
						className: 'flex flex-col py-3 px-5',
						children: [
							U('span', {
								className: 'text-xs text-gray-600',
								children: e.organization.name
							}),
							ce('span', {
								className: 'text-base font-semibold text-cloud-burst',
								children: [e.name, ' (', e['year-period'], ')']
							}),
							ce('div', {
								className: 'align-center m-t-auto my-2 flex flex-row gap-5',
								children: [
									e['country-region']
										? ce('div', {
												className: 'flex flex-row',
												children: [
													U(Hi, {
														style: {
															color: '#4B5563',
															marginRight: '4px',
															fontSize: '14px'
														}
													}),
													ce('span', {
														className: 'text-xs text-gray-600',
														children: [
															'Country/Region: ',
															Ia(e['country-region'])
														]
													})
												]
										  })
										: void 0,
									e['year-period']
										? ce('div', {
												className: 'flex flex-row',
												children: [
													U(xa, {
														style: {
															color: '#4B5563',
															marginRight: '4px',
															fontSize: '14px'
														}
													}),
													ce('span', {
														className: 'text-xs text-gray-600',
														children: ['Year/Period: ', e['year-period']]
													})
												]
										  })
										: void 0
								]
							})
						]
					})
				]
			})
		}),
	cA = '/unicef-ai4d-research-bank/assets/default-featured-image-77fad507.jpg',
	dA = '/unicef-ai4d-research-bank/assets/landing-hero-bg-a6a24130.jpg',
	pv = {
		countryFilter: [],
		organizationFilter: [],
		tagsFilter: [],
		yearFilter: null,
		searchValue: ''
	},
	fA = () => {
		const e = Hd(),
			{ setSearchInput: t } = jd(),
			{
				isFilterOptionsLoading: n,
				countries: r,
				tags: o,
				setFilters: a,
				setIsFiltersLoading: i
			} = Vd(),
			{ isLoading: l, featuredItems: s } = Hs(),
			c = (v, p) => {
				if (
					(a({ ...pv, searchValue: v }),
					(p == null ? void 0 : p.type) === 'click' &&
						p.currentTarget.localName === 'input')
				) {
					t('')
					return
				}
				e('catalogue')
			},
			f = v => {
				i(!0), a({ ...pv, countryFilter: [v] }), e('catalogue')
			},
			d = v => {
				i(!0), t(''), a({ ...pv, tagsFilter: [v] }), e('catalogue')
			}
		return ce('div', {
			className: 'min-h-[calc(100vh_-_3rem)] bg-white',
			children: [
				ce('div', {
					className:
						'relative flex h-96 flex-col items-center justify-center px-3 text-white md:px-10',
					children: [
						U('img', {
							src: dA,
							alt: 'BannerImage',
							className: 'absolute z-0 h-full w-full object-cover'
						}),
						U('div', {
							className: 'absolute z-10 h-full w-full bg-cloud-burst opacity-60'
						}),
						ce('div', {
							className: 'z-20 flex flex-col items-center justify-center',
							children: [
								U('span', {
									className:
										'mb-3 text-center text-2xl font-medium tracking-tighter text-white md:text-4xl',
									children:
										'Accelerating machine learning adoption in the development sector'
								}),
								U('span', {
									className: 'px-10 text-center',
									children:
										'Browse our catalogue of models and datasets to gain access to code, documentation, and pre-processed datasets that fit to your needs'
								}),
								U('div', {
									className: 'my-5 flex w-2/3 flex-row',
									children: U(xg, { onSearchBtnClick: c, path: 'catalogue/' })
								})
							]
						})
					]
				}),
				ce('div', {
					className: 'flex flex-col p-10',
					children: [
						U('span', {
							className: 'font-semibold tracking-normal text-cloud-burst',
							children: 'FEATURED DATASETS'
						}),
						U('div', {
							className:
								'mt-3 grid auto-rows-min grid-cols-1 gap-10 md:grid-cols-3',
							children: l
								? U(zo.Button, { active: !0, size: 'large', block: !0 })
								: s.map(v => U(uA, { item: v, image: cA }, v.id))
						})
					]
				}),
				ce('div', {
					className: 'flex flex-col md:flex-row',
					children: [
						ce('div', {
							className: 'flex w-full flex-col p-10 md:w-1/2',
							children: [
								U('span', {
									className: 'font-semibold tracking-normal text-cloud-burst',
									children: 'BROWSE BY TAGS'
								}),
								U('div', {
									className: 'flex flex-wrap gap-3 py-3',
									children: n
										? U(zo.Button, {
												active: !0,
												size: 'small',
												shape: 'default'
										  })
										: o.map(v =>
												U(
													Im,
													{
														onFilterClick: d,
														value: v.value,
														children: v.value
													},
													v.value
												)
										  )
								})
							]
						}),
						ce('div', {
							className: 'flex w-full flex-col p-10 md:w-1/2',
							children: [
								U('span', {
									className: 'font-semibold tracking-normal text-cloud-burst',
									children: 'BROWSE BY COUNTRY/REGION'
								}),
								U('div', {
									className: 'flex flex-wrap gap-3 py-3 text-cloud-burst',
									children: n
										? U(zo.Button, {
												active: !0,
												size: 'small',
												shape: 'default'
										  })
										: r.map(v =>
												U(
													Im,
													{
														onFilterClick: () => f(v.value),
														value: v.value,
														children: v.label
													},
													v.value
												)
										  )
								})
							]
						})
					]
				})
			]
		})
	},
	vA = {
		token: {
			colorPrimary: '#24295c',
			colorPrimaryBg: '#d3d4de',
			colorLinkHover: '#24295c',
			lineHeightLG: 1.39
		}
	}
function pA() {
	return U(PL, {
		children: ce(uw, {
			theme: vA,
			children: [
				U(NL, {}),
				U(TL, {
					children: U(XL, {
						children: U(qL, {
							children: ce(CL, {
								children: [
									U(ca, { path: `${Yr}/`, element: U(fA, {}) }),
									ce(ca, {
										path: `${Yr}/catalogue`,
										children: [
											U(ca, { index: !0, element: U(sA, {}) }),
											U(ca, { path: ':id', element: U(nA, {}) }),
											U(ca, { path: '*', element: U(Rm, {}) })
										]
									}),
									U(ca, { path: '*', element: U(Rm, {}) })
								]
							})
						})
					})
				})
			]
		})
	})
}
var UE,
	nb = Ea
;(UE = nb.createRoot), nb.hydrateRoot
const mA = 'modulepreload',
	hA = function (e) {
		return '/unicef-ai4d-research-bank/' + e
	},
	rb = {},
	gA = function (t, n, r) {
		if (!n || n.length === 0) return t()
		const o = document.getElementsByTagName('link')
		return Promise.all(
			n.map(a => {
				if (((a = hA(a)), a in rb)) return
				rb[a] = !0
				const i = a.endsWith('.css'),
					l = i ? '[rel="stylesheet"]' : ''
				if (!!r)
					for (let f = o.length - 1; f >= 0; f--) {
						const d = o[f]
						if (d.href === a && (!i || d.rel === 'stylesheet')) return
					}
				else if (document.querySelector(`link[href="${a}"]${l}`)) return
				const c = document.createElement('link')
				if (
					((c.rel = i ? 'stylesheet' : mA),
					i || ((c.as = 'script'), (c.crossOrigin = '')),
					(c.href = a),
					document.head.appendChild(c),
					i)
				)
					return new Promise((f, d) => {
						c.addEventListener('load', f),
							c.addEventListener('error', () =>
								d(new Error(`Unable to preload CSS for ${a}`))
							)
					})
			})
		).then(() => t())
	}
function yA(e = {}) {
	const {
		immediate: t = !1,
		onNeedRefresh: n,
		onOfflineReady: r,
		onRegistered: o,
		onRegisteredSW: a,
		onRegisterError: i
	} = e
	let l, s
	const c = async (d = !0) => {
		await s
	}
	async function f() {
		if ('serviceWorker' in navigator) {
			const { Workbox: d } = await gA(
				() => import('./workbox-window.prod.es5-295a6886.js'),
				[]
			)
			;(l = new d('/unicef-ai4d-research-bank/sw.js', {
				scope: '/unicef-ai4d-research-bank/',
				type: 'classic'
			})),
				l.addEventListener('activated', v => {
					;(v.isUpdate || v.isExternal) && window.location.reload()
				}),
				l.addEventListener('installed', v => {
					v.isUpdate || r == null || r()
				}),
				l
					.register({ immediate: t })
					.then(v => {
						a ? a('/unicef-ai4d-research-bank/sw.js', v) : o == null || o(v)
					})
					.catch(v => {
						i == null || i(v)
					})
		}
	}
	return (s = f()), c
}
yA()
const ob = document.querySelector('#root')
ob && UE(ob).render(U(u.StrictMode, { children: U(pA, {}) }))
