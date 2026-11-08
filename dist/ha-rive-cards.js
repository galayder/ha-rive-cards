// \0rolldown/runtime.js
var e = Object.defineProperty, t = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, n = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), r = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, i, a, o, s, c, l, u, d, f, p = t((() => {
	i = globalThis, a = i.ShadowRoot && (i.ShadyCSS === void 0 || i.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, o = Symbol(), s = /* @__PURE__ */ new WeakMap(), c = class {
		constructor(e, t, n) {
			if (this._$cssResult$ = !0, n !== o) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
			this.cssText = e, this.t = t;
		}
		get styleSheet() {
			let e = this.o, t = this.t;
			if (a && e === void 0) {
				let n = t !== void 0 && t.length === 1;
				n && (e = s.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && s.set(t, e));
			}
			return e;
		}
		toString() {
			return this.cssText;
		}
	}, l = (e) => new c(typeof e == "string" ? e : e + "", void 0, o), u = (e, ...t) => {
		let n = e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
			if (!0 === e._$cssResult$) return e.cssText;
			if (typeof e == "number") return e;
			throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
		})(n) + e[r + 1], e[0]);
		return new c(n, e, o);
	}, d = (e, t) => {
		if (a) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
		else for (let n of t) {
			let t = document.createElement("style"), r = i.litNonce;
			r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
		}
	}, f = a ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
		let t = "";
		for (let n of e.cssRules) t += n.cssText;
		return l(t);
	})(e) : e;
})), m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k = t((() => {
	p(), {is: m, defineProperty: h, getOwnPropertyDescriptor: g, getOwnPropertyNames: _, getOwnPropertySymbols: v, getPrototypeOf: y} = Object, b = globalThis, x = b.trustedTypes, S = x ? x.emptyScript : "", C = b.reactiveElementPolyfillSupport, w = (e, t) => e, T = {
		toAttribute(e, t) {
			switch (t) {
				case Boolean:
					e = e ? S : null;
					break;
				case Object:
				case Array: e = e == null ? e : JSON.stringify(e);
			}
			return e;
		},
		fromAttribute(e, t) {
			let n = e;
			switch (t) {
				case Boolean:
					n = e !== null;
					break;
				case Number:
					n = e === null ? null : Number(e);
					break;
				case Object:
				case Array: try {
					n = JSON.parse(e);
				} catch {
					n = null;
				}
			}
			return n;
		}
	}, E = (e, t) => !m(e, t), D = {
		attribute: !0,
		type: String,
		converter: T,
		reflect: !1,
		useDefault: !1,
		hasChanged: E
	}, Symbol.metadata ??= Symbol("metadata"), b.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap(), O = class extends HTMLElement {
		static addInitializer(e) {
			this._$Ei(), (this.l ??= []).push(e);
		}
		static get observedAttributes() {
			return this.finalize(), this._$Eh && [...this._$Eh.keys()];
		}
		static createProperty(e, t = D) {
			if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
				let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
				r !== void 0 && h(this.prototype, e, r);
			}
		}
		static getPropertyDescriptor(e, t, n) {
			let { get: r, set: i } = g(this.prototype, e) ?? {
				get() {
					return this[t];
				},
				set(e) {
					this[t] = e;
				}
			};
			return {
				get: r,
				set(t) {
					let a = r?.call(this);
					i?.call(this, t), this.requestUpdate(e, a, n);
				},
				configurable: !0,
				enumerable: !0
			};
		}
		static getPropertyOptions(e) {
			return this.elementProperties.get(e) ?? D;
		}
		static _$Ei() {
			if (this.hasOwnProperty(w("elementProperties"))) return;
			let e = y(this);
			e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
		}
		static finalize() {
			if (this.hasOwnProperty(w("finalized"))) return;
			if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(w("properties"))) {
				let e = this.properties, t = [..._(e), ...v(e)];
				for (let n of t) this.createProperty(n, e[n]);
			}
			let e = this[Symbol.metadata];
			if (e !== null) {
				let t = litPropertyMetadata.get(e);
				if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
			}
			this._$Eh = /* @__PURE__ */ new Map();
			for (let [e, t] of this.elementProperties) {
				let n = this._$Eu(e, t);
				n !== void 0 && this._$Eh.set(n, e);
			}
			this.elementStyles = this.finalizeStyles(this.styles);
		}
		static finalizeStyles(e) {
			let t = [];
			if (Array.isArray(e)) {
				let n = new Set(e.flat(1 / 0).reverse());
				for (let e of n) t.unshift(f(e));
			} else e !== void 0 && t.push(f(e));
			return t;
		}
		static _$Eu(e, t) {
			let n = t.attribute;
			return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
		}
		constructor() {
			super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
		}
		_$Ev() {
			this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
		}
		addController(e) {
			(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
		}
		removeController(e) {
			this._$EO?.delete(e);
		}
		_$E_() {
			let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
			for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
			e.size > 0 && (this._$Ep = e);
		}
		createRenderRoot() {
			let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
			return d(e, this.constructor.elementStyles), e;
		}
		connectedCallback() {
			this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
		}
		enableUpdating(e) {}
		disconnectedCallback() {
			this._$EO?.forEach((e) => e.hostDisconnected?.());
		}
		attributeChangedCallback(e, t, n) {
			this._$AK(e, n);
		}
		_$ET(e, t) {
			let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
			if (r !== void 0 && !0 === n.reflect) {
				let i = (n.converter?.toAttribute === void 0 ? T : n.converter).toAttribute(t, n.type);
				this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
			}
		}
		_$AK(e, t) {
			let n = this.constructor, r = n._$Eh.get(e);
			if (r !== void 0 && this._$Em !== r) {
				let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? T : e.converter;
				this._$Em = r;
				let a = i.fromAttribute(t, e.type);
				this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
			}
		}
		requestUpdate(e, t, n, r = !1, i) {
			if (e !== void 0) {
				let a = this.constructor;
				if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? E)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
				this.C(e, t, n);
			}
			!1 === this.isUpdatePending && (this._$ES = this._$EP());
		}
		C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
			n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
		}
		async _$EP() {
			this.isUpdatePending = !0;
			try {
				await this._$ES;
			} catch (e) {
				Promise.reject(e);
			}
			let e = this.scheduleUpdate();
			return e != null && await e, !this.isUpdatePending;
		}
		scheduleUpdate() {
			return this.performUpdate();
		}
		performUpdate() {
			if (!this.isUpdatePending) return;
			if (!this.hasUpdated) {
				if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
					for (let [e, t] of this._$Ep) this[e] = t;
					this._$Ep = void 0;
				}
				let e = this.constructor.elementProperties;
				if (e.size > 0) for (let [t, n] of e) {
					let { wrapped: e } = n, r = this[t];
					!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
				}
			}
			let e = !1, t = this._$AL;
			try {
				e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
			} catch (t) {
				throw e = !1, this._$EM(), t;
			}
			e && this._$AE(t);
		}
		willUpdate(e) {}
		_$AE(e) {
			this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
		}
		_$EM() {
			this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
		}
		get updateComplete() {
			return this.getUpdateComplete();
		}
		getUpdateComplete() {
			return this._$ES;
		}
		shouldUpdate(e) {
			return !0;
		}
		update(e) {
			this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
		}
		updated(e) {}
		firstUpdated(e) {}
	}, O.elementStyles = [], O.shadowRootOptions = { mode: "open" }, O[w("elementProperties")] = /* @__PURE__ */ new Map(), O[w("finalized")] = /* @__PURE__ */ new Map(), C?.({ ReactiveElement: O }), (b.reactiveElementVersions ??= []).push("2.1.2");
}));
// node_modules/lit-html/lit-html.js
function A(e, t) {
	if (!ae(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return te === void 0 ? t : te.createHTML(t);
}
function j(e, t, n = e, r) {
	if (t === V) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = ie(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = j(e, i._$AS(e, t.values), i, r)), t;
}
var M, N, ee, te, P, F, I, ne, L, re, ie, ae, oe, se, ce, le, ue, de, fe, R, z, pe, B, V, H, U, W, G, K, me, he, q, ge, _e, ve, ye, J, be, Y = t((() => {
	M = globalThis, N = (e) => e, ee = M.trustedTypes, te = ee ? ee.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, P = "$lit$", F = `lit$${Math.random().toFixed(9).slice(2)}$`, I = "?" + F, ne = `<${I}>`, L = document, re = () => L.createComment(""), ie = (e) => e === null || typeof e != "object" && typeof e != "function", ae = Array.isArray, oe = (e) => ae(e) || typeof e?.[Symbol.iterator] == "function", se = "[ 	\n\f\r]", ce = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, le = /-->/g, ue = />/g, de = RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), fe = /'/g, R = /"/g, z = /^(?:script|style|textarea|title)$/i, pe = (e) => (t, ...n) => ({
		_$litType$: e,
		strings: t,
		values: n
	}), B = pe(1), pe(2), pe(3), V = Symbol.for("lit-noChange"), H = Symbol.for("lit-nothing"), U = /* @__PURE__ */ new WeakMap(), W = L.createTreeWalker(L, 129), G = (e, t) => {
		let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = ce;
		for (let t = 0; t < n; t++) {
			let n = e[t], s, c, l = -1, u = 0;
			for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === ce ? c[1] === "!--" ? o = le : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = de) : (z.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = de) : o = ue : o === de ? c[0] === ">" ? (o = i ?? ce, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? de : c[3] === "\"" ? R : fe) : o === R || o === fe ? o = de : o === le || o === ue ? o = ce : (o = de, i = void 0);
			let d = o === de && e[t + 1].startsWith("/>") ? " " : "";
			a += o === ce ? n + ne : l >= 0 ? (r.push(s), n.slice(0, l) + P + n.slice(l) + F + d) : n + F + (l === -2 ? t : d);
		}
		return [A(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
	}, K = class e {
		constructor({ strings: t, _$litType$: n }, r) {
			let i;
			this.parts = [];
			let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = G(t, n);
			if (this.el = e.createElement(l, r), W.currentNode = this.el.content, n === 2 || n === 3) {
				let e = this.el.content.firstChild;
				e.replaceWith(...e.childNodes);
			}
			for (; (i = W.nextNode()) !== null && c.length < s;) {
				if (i.nodeType === 1) {
					if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(P)) {
						let t = u[o++], n = i.getAttribute(e).split(F), r = /([.?@])?(.*)/.exec(t);
						c.push({
							type: 1,
							index: a,
							name: r[2],
							strings: n,
							ctor: r[1] === "." ? ge : r[1] === "?" ? _e : r[1] === "@" ? ve : q
						}), i.removeAttribute(e);
					} else e.startsWith(F) && (c.push({
						type: 6,
						index: a
					}), i.removeAttribute(e));
					if (z.test(i.tagName)) {
						let e = i.textContent.split(F), t = e.length - 1;
						if (t > 0) {
							i.textContent = ee ? ee.emptyScript : "";
							for (let n = 0; n < t; n++) i.append(e[n], re()), W.nextNode(), c.push({
								type: 2,
								index: ++a
							});
							i.append(e[t], re());
						}
					}
				} else if (i.nodeType === 8) {
					if (i.data === I) c.push({
						type: 2,
						index: a
					});
					else {
						let e = -1;
						for (; (e = i.data.indexOf(F, e + 1)) !== -1;) c.push({
							type: 7,
							index: a
						}), e += F.length - 1;
					}
				}
				a++;
			}
		}
		static createElement(e, t) {
			let n = L.createElement("template");
			return n.innerHTML = e, n;
		}
	}, me = class {
		constructor(e, t) {
			this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
		}
		get parentNode() {
			return this._$AM.parentNode;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		u(e) {
			let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? L).importNode(t, !0);
			W.currentNode = r;
			let i = W.nextNode(), a = 0, o = 0, s = n[0];
			for (; s !== void 0;) {
				if (a === s.index) {
					let t;
					s.type === 2 ? t = new he(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new ye(i, this, e)), this._$AV.push(t), s = n[++o];
				}
				a !== s?.index && (i = W.nextNode(), a++);
			}
			return W.currentNode = L, r;
		}
		p(e) {
			let t = 0;
			for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
		}
	}, he = class e {
		get _$AU() {
			return this._$AM?._$AU ?? this._$Cv;
		}
		constructor(e, t, n, r) {
			this.type = 2, this._$AH = H, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
		}
		get parentNode() {
			let e = this._$AA.parentNode, t = this._$AM;
			return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
		}
		get startNode() {
			return this._$AA;
		}
		get endNode() {
			return this._$AB;
		}
		_$AI(e, t = this) {
			e = j(this, e, t), ie(e) ? e === H || e == null || e === "" ? (this._$AH !== H && this._$AR(), this._$AH = H) : e !== this._$AH && e !== V && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? oe(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
		}
		O(e) {
			return this._$AA.parentNode.insertBefore(e, this._$AB);
		}
		T(e) {
			this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
		}
		_(e) {
			this._$AH !== H && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
		}
		$(e) {
			let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = K.createElement(A(n.h, n.h[0]), this.options)), n);
			if (this._$AH?._$AD === r) this._$AH.p(t);
			else {
				let e = new me(r, this), n = e.u(this.options);
				e.p(t), this.T(n), this._$AH = e;
			}
		}
		_$AC(e) {
			let t = U.get(e.strings);
			return t === void 0 && U.set(e.strings, t = new K(e)), t;
		}
		k(t) {
			ae(this._$AH) || (this._$AH = [], this._$AR());
			let n = this._$AH, r, i = 0;
			for (let a of t) i === n.length ? n.push(r = new e(this.O(re()), this.O(re()), this, this.options)) : r = n[i], r._$AI(a), i++;
			i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
		}
		_$AR(e = this._$AA.nextSibling, t) {
			for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
				let t = N(e).nextSibling;
				N(e).remove(), e = t;
			}
		}
		setConnected(e) {
			this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
		}
	}, q = class {
		get tagName() {
			return this.element.tagName;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		constructor(e, t, n, r, i) {
			this.type = 1, this._$AH = H, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = H;
		}
		_$AI(e, t = this, n, r) {
			let i = this.strings, a = !1;
			if (i === void 0) e = j(this, e, t, 0), a = !ie(e) || e !== this._$AH && e !== V, a && (this._$AH = e);
			else {
				let r = e, o, s;
				for (e = i[0], o = 0; o < i.length - 1; o++) s = j(this, r[n + o], t, o), s === V && (s = this._$AH[o]), a ||= !ie(s) || s !== this._$AH[o], s === H ? e = H : e !== H && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
			}
			a && !r && this.j(e);
		}
		j(e) {
			e === H ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
		}
	}, ge = class extends q {
		constructor() {
			super(...arguments), this.type = 3;
		}
		j(e) {
			this.element[this.name] = e === H ? void 0 : e;
		}
	}, _e = class extends q {
		constructor() {
			super(...arguments), this.type = 4;
		}
		j(e) {
			this.element.toggleAttribute(this.name, !!e && e !== H);
		}
	}, ve = class extends q {
		constructor(e, t, n, r, i) {
			super(e, t, n, r, i), this.type = 5;
		}
		_$AI(e, t = this) {
			if ((e = j(this, e, t, 0) ?? H) === V) return;
			let n = this._$AH, r = e === H && n !== H || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== H && (n === H || r);
			r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
		}
		handleEvent(e) {
			typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
		}
	}, ye = class {
		constructor(e, t, n) {
			this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(e) {
			j(this, e);
		}
	}, J = M.litHtmlPolyfillSupport, J?.(K, he), (M.litHtmlVersions ??= []).push("3.3.3"), be = (e, t, n) => {
		let r = n?.renderBefore ?? t, i = r._$litPart$;
		if (i === void 0) {
			let e = n?.renderBefore ?? null;
			r._$litPart$ = i = new he(t.insertBefore(re(), e), e, void 0, n ?? {});
		}
		return i._$AI(e), i;
	};
})), xe, X, Se, Ce = t((() => {
	k(), k(), Y(), Y(), xe = globalThis, X = class extends O {
		constructor() {
			super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
		}
		createRenderRoot() {
			let e = super.createRenderRoot();
			return this.renderOptions.renderBefore ??= e.firstChild, e;
		}
		update(e) {
			let t = this.render();
			this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = be(t, this.renderRoot, this.renderOptions);
		}
		connectedCallback() {
			super.connectedCallback(), this._$Do?.setConnected(!0);
		}
		disconnectedCallback() {
			super.disconnectedCallback(), this._$Do?.setConnected(!1);
		}
		render() {
			return V;
		}
	}, X._$litElement$ = !0, X.finalized = !0, xe.litElementHydrateSupport?.({ LitElement: X }), Se = xe.litElementPolyfillSupport, Se?.({ LitElement: X }), (xe.litElementVersions ??= []).push("4.2.2");
})), we = t((() => {})), Z = t((() => {
	k(), Y(), Ce(), we();
})), Te = t((() => {}));
// node_modules/@lit/reactive-element/decorators/property.js
function Ee(e) {
	return (t, n) => typeof n == "object" ? Oe(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
var De, Oe, ke = t((() => {
	k(), De = {
		attribute: !0,
		type: String,
		converter: T,
		reflect: !1,
		hasChanged: E
	}, Oe = (e = De, t, n) => {
		let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
		if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
			let { name: r } = n;
			return {
				set(n) {
					let i = t.get.call(this);
					t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
				},
				init(t) {
					return t !== void 0 && this.C(r, void 0, e, t), t;
				}
			};
		}
		if (r === "setter") {
			let { name: r } = n;
			return function(n) {
				let i = this[r];
				t.call(this, n), this.requestUpdate(r, i, e, !0, n);
			};
		}
		throw Error("Unsupported decorator location: " + r);
	};
}));
// node_modules/@lit/reactive-element/decorators/state.js
function Ae(e) {
	return Ee({
		...e,
		state: !0,
		attribute: !1
	});
}
var je = t((() => {
	ke();
})), Me = t((() => {})), Ne, Pe = t((() => {
	Ne = (e, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, n), n);
}));
// node_modules/@lit/reactive-element/decorators/query.js
function Fe(e, t) {
	return (n, r, i) => {
		let a = (t) => t.renderRoot?.querySelector(e) ?? null;
		if (t) {
			let { get: e, set: t } = typeof r == "object" ? n : i ?? (() => {
				let e = Symbol();
				return {
					get() {
						return this[e];
					},
					set(t) {
						this[e] = t;
					}
				};
			})();
			return Ne(n, r, { get() {
				let n = e.call(this);
				return n === void 0 && (n = a(this), (n !== null || this.hasUpdated) && t.call(this, n)), n;
			} });
		}
		return Ne(n, r, { get() {
			return a(this);
		} });
	};
}
var Ie = t((() => {
	Pe();
})), Le = t((() => {})), Re = t((() => {})), ze = t((() => {})), Be = t((() => {})), Ve = t((() => {
	Te(), ke(), je(), Me(), Ie(), Le(), Re(), ze(), Be();
})), He = /* @__PURE__ */ n(((e, t, n) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof e == "object" ? e.rive = r() : n.rive = r();
	})(n, () => (() => {
		var e = [
			,
			((e, t, n) => {
				n.r(t), n.d(t, { Animation: () => r.Animation });
				var r = n(2);
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { Animation: () => r });
				var r = function() {
					function e(e, t, n, r) {
						this.animation = e, this.artboard = t, this.playing = r, this.loopCount = 0, this.scrubTo = null, this.instance = new n.LinearAnimationInstance(e, t);
					}
					return Object.defineProperty(e.prototype, "name", {
						get: function() {
							return this.animation.name;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "time", {
						get: function() {
							return this.instance.time;
						},
						set: function(e) {
							this.instance.time = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "loopValue", {
						get: function() {
							return this.animation.loopValue;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "needsScrub", {
						get: function() {
							return this.scrubTo !== null;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.advance = function(e) {
						this.scrubTo === null ? this.instance.advance(e) : (this.instance.time = 0, this.instance.advance(this.scrubTo), this.scrubTo = null);
					}, e.prototype.apply = function(e) {
						this.instance.apply(e);
					}, e.prototype.cleanup = function() {
						this.instance.delete();
					}, e;
				}();
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { RuntimeLoader: () => u });
				var r = n(4), i = n(5), a = /*#__PURE__*/ n.n(i), o = n(6), s = function() {
					return s = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e;
					}, s.apply(this, arguments);
				}, c = new Uint8Array([
					0,
					97,
					115,
					109,
					1,
					0,
					0,
					0,
					1,
					9,
					2,
					96,
					0,
					1,
					127,
					96,
					0,
					1,
					123,
					3,
					3,
					2,
					0,
					1,
					5,
					4,
					1,
					3,
					1,
					1,
					10,
					31,
					2,
					8,
					0,
					65,
					0,
					254,
					16,
					2,
					0,
					11,
					20,
					0,
					253,
					12,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					11
				]);
				function l() {
					if (globalThis.crossOriginIsolated !== !0) return "the page is not cross origin isolated";
					try {
						new MessageChannel().port1.postMessage(new SharedArrayBuffer(1));
					} catch {
						return "the page cannot share memory with workers";
					}
					return WebAssembly.validate(c) ? null : "the browser cannot run wasm threads with SIMD";
				}
				var u = function() {
					function e() {}
					return e.notifyError = function(t) {
						var n;
						for (e.isLoading = !1; e.errorCallbackQueue.length > 0;) (n = e.errorCallbackQueue.shift()) == null || n(t);
						e.callBackQueue = [];
					}, e.loaded = function(t) {
						var n, r;
						for (e.enablePerfMarks && (performance.mark("rive:wasm-init:end"), performance.measure("rive:wasm-init", "rive:wasm-init:start", "rive:wasm-init:end")), e.runtime = t, e.applyParallelParts(), e.errorCallbackQueue = [], e.replayWorker && ((n = t.enableReplayWorker) == null || n.call(t)); e.callBackQueue.length > 0;) (r = e.callBackQueue.shift()) == null || r(e.runtime);
					}, e.loadRuntime = function() {
						var t = a(), n = e.wasmThreadsURL;
						if (typeof t != "function" || n === null || e.wasmBinary !== null || e.triedThreads) e.loadUnthreaded();
						else {
							e.triedThreads = !0;
							var r = l();
							r === null ? (e.enablePerfMarks && performance.mark("rive:wasm-init:start"), t({ locateFile: function() {
								return n;
							} }).then(e.loaded, function(t) {
								console.warn(`Rive is running without threads: the threaded build failed to load (${t?.message ?? t}).`), e.loadUnthreaded();
							})) : (console.warn(`Rive is running without threads: ${r}.`), e.loadUnthreaded());
						}
					}, e.loadUnthreaded = function() {
						var t = e.wasmURL, n = e.wasmBinary;
						e.enablePerfMarks && performance.mark("rive:wasm-init:start"), r.default(s({ locateFile: function() {
							return t;
						} }, n ? { wasmBinary: n } : {})).then(e.loaded).catch(function(n) {
							var r = {
								message: n?.message || "Unknown error",
								type: n?.name || "Error",
								wasmError: n instanceof WebAssembly.CompileError || n instanceof WebAssembly.RuntimeError,
								originalError: n
							};
							console.debug("Rive WASM load error details:", r);
							var i = e.wasmFallbackURL, a = i !== null && t.toLowerCase() === i.toLowerCase();
							if (i !== null && !a) console.warn(`Failed to load WASM from ${t} (${r.message}), trying fallback URL: ${i}`), e.wasmBinary = null, e.setWasmUrl(i), e.loadUnthreaded();
							else {
								var o = [
									`Could not load Rive WASM file from ${a ? `the configured WASM URL or its fallback (${i})` : t}.`,
									"Possible reasons:",
									"- Network connection is down",
									"- WebAssembly is not supported in this environment",
									"- The WASM file is corrupted or incompatible",
									"\nError details:",
									`- Type: ${r.type}`,
									`- Message: ${r.message}`,
									`- WebAssembly-specific error: ${r.wasmError}`,
									"\nTo resolve, you may need to:",
									"1. Check your network connection",
									"2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
									"3. Call RuntimeLoader.awaitInstance() again"
								].join("\n");
								console.error(o), e.notifyError(Error(o));
							}
						});
					}, e.getInstance = function(t, n) {
						e.isLoading || (e.isLoading = !0, e.loadRuntime()), e.runtime ? t(e.runtime) : (e.callBackQueue.push(t), n && e.errorCallbackQueue.push(n));
					}, e.awaitInstance = function() {
						return new Promise(function(t, n) {
							return e.getInstance(t, n);
						});
					}, e.awaitReplayCaps = function() {
						var t;
						if (e.replayCapsArrived) return null;
						var n = ((t = e.runtime)?.awaitReplayCaps)?.call(t);
						if (!n) return null;
						var r = new Promise(function(t) {
							return setTimeout(t, e.replayCapsTimeoutMs);
						});
						return Promise.race([n, r]).then(function() {
							e.replayCapsArrived = !0;
						});
					}, e.setWasmUrl = function(t) {
						e.wasmURL = t;
					}, e.getWasmUrl = function() {
						return e.wasmURL;
					}, e.setWasmFallbackUrl = function(t) {
						e.wasmFallbackURL = t;
					}, e.getWasmFallbackUrl = function() {
						return e.wasmFallbackURL;
					}, e.setWasmThreadsUrl = function(t) {
						e.wasmThreadsURL = t;
					}, e.getWasmThreadsUrl = function() {
						return e.wasmThreadsURL;
					}, e.setParallelParts = function(t) {
						e.parallelParts = t, e.applyParallelParts();
					}, e.getParallelParts = function() {
						return e.parallelParts;
					}, e.applyParallelParts = function() {
						var t = e.runtime?.riveScripting;
						t && (t.parallelParts = e.parallelParts);
					}, e.setReplayWorker = function(t) {
						e.replayWorker = t;
					}, e.getReplayWorker = function() {
						return e.replayWorker;
					}, e.setWasmBinary = function(t) {
						t instanceof ArrayBuffer || t === null ? e.wasmBinary = t : console.error("setWasmBinary expects an ArrayBuffer or null");
					}, e.getWasmBinary = function() {
						return e.wasmBinary;
					}, e.isLoading = !1, e.callBackQueue = [], e.wasmURL = `https://unpkg.com/${o.name}@${o.version}/rive.wasm`, e.wasmFallbackURL = `https://cdn.jsdelivr.net/npm/${o.name}@${o.version}/rive_fallback.wasm`, e.wasmBinary = null, e.wasmThreadsURL = typeof a() == "function" ? `https://unpkg.com/${o.name}@${o.version}/rive_threads.wasm` : null, e.triedThreads = !1, e.parallelParts = null, e.replayWorker = !0, e.replayCapsArrived = !1, e.replayCapsTimeoutMs = 2e3, e.errorCallbackQueue = [], e.enablePerfMarks = !1, e;
				}();
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { default: () => r });
				let r = (() => {
					var e = globalThis.document?.currentScript?.src;
					return async function(t = {}) {
						var n, r = t, i = !!globalThis.window, a = !!globalThis.WorkerGlobalScope;
						function o() {
							function e(e) {
								let a = r;
								n = t = 0, r = /* @__PURE__ */ new Map(), a.forEach((t) => {
									try {
										t(e);
									} catch (e) {
										console.error(e);
									}
								}), this.wb(), i && i.tc();
							}
							let t = 0, n = 0, r = /* @__PURE__ */ new Map(), i = null, a = null;
							this.requestAnimationFrame = function(i) {
								t ||= requestAnimationFrame(e.bind(this));
								let a = ++n;
								return r.set(a, i), a;
							}, this.cancelAnimationFrame = function(e) {
								r.delete(e), t && r.size == 0 && (cancelAnimationFrame(t), t = 0);
							}, this.oc = function(e) {
								a &&= (document.body.remove(a), null), e || (a = document.createElement("div"), a.style.backgroundColor = "black", a.style.position = "fixed", a.style.right = 0, a.style.top = 0, a.style.color = "white", a.style.padding = "4px", a.innerHTML = "RIVE FPS", e = function(e) {
									a.innerHTML = "RIVE FPS " + e.toFixed(1);
								}, document.body.appendChild(a)), i = new function() {
									let t = 0, n = 0;
									this.tc = function() {
										var r = performance.now();
										n ? (++t, r -= n, 1e3 < r && (e(1e3 * t / r), t = n = 0)) : (n = r, t = 0);
									};
								}();
							}, this.wb = function() {};
						}
						function s() {
							console.assert(!0);
							let e = /* @__PURE__ */ new Map(), t = -Infinity;
							this.push = function(n) {
								return n = n + 255 >> 8, e.has(n) && clearTimeout(e.get(n)), e.set(n, setTimeout(function() {
									e.delete(n), e.length == 0 ? t = -Infinity : n == t && (t = Math.max(...e.keys()), console.assert(t < n));
								}, 1e3)), t = Math.max(n, t), t << 8;
							};
						}
						function c(e) {
							return function() {
								e();
								let t = r.riveScripting;
								if (t) for (let e of t.frameBoundary()) console.warn(e);
							};
						}
						let l = r.onRuntimeInitialized;
						r.onRuntimeInitialized = function() {
							l && l(), r.startFileScripts = function(e) {
								let t = r.riveScripting;
								return e && t && e.startScripts ? t.prepare().then(function() {
									return e.startScripts(), e;
								}) : Promise.resolve(e);
							};
							let e = r.decodeAudio;
							r.decodeAudio = function(t, n, r = null) {
								t = e(t, r ?? null), n(t);
							};
							let t = r.decodeFont;
							r.decodeFont = function(e, n, r = null) {
								e = t(e, r ?? null), n(e);
							};
							let n = r.FileAsset.prototype.decode;
							r.FileAsset.prototype.decode = function(e, t) {
								return n.call(this, e, t ?? null);
							};
							let i = r.setFallbackFontCb;
							r.setFallbackFontCallback = typeof i == "function" ? function(e) {
								i(e);
							} : function() {
								console.warn("Module.setFallbackFontCallback called, but text support is not enabled in this build.");
							};
							let a = r.FileAssetLoader;
							r.ptrToAsset = (e) => {
								let t = r.ptrToFileAsset(e);
								return t.isImage ? r.ptrToImageAsset(e) : t.isFont ? r.ptrToFontAsset(e) : t.isAudio ? r.ptrToAudioAsset(e) : t;
							}, r.CustomFileAssetLoader = a.extend("CustomFileAssetLoader", {
								__construct: function({ loadContents: e }) {
									this.__parent.__construct.call(this), this.Ub = e;
								},
								loadContents: function(e, t) {
									return e = r.ptrToAsset(e), this.Ub(e, t);
								}
							}), r.CDNFileAssetLoader = a.extend("CDNFileAssetLoader", {
								__construct: function(e) {
									this.__parent.__construct.call(this), this.Wb = e ?? null;
								},
								loadContents: function(e) {
									let t = r.ptrToAsset(e);
									if (e = t.cdnUuid, e === "") return !1;
									let n = this.Wb ?? null;
									return (function(e, t) {
										var n = new XMLHttpRequest();
										n.responseType = "arraybuffer", n.onreadystatechange = function() {
											n.readyState == 4 && n.status == 200 && t(n);
										}, n.open("GET", e, !0), n.send(null);
									})(t.cdnBaseUrl + "/" + e, (e) => {
										t.decode(new Uint8Array(e.response), n);
									}), !0;
								}
							}), r.FallbackFileAssetLoader = a.extend("FallbackFileAssetLoader", {
								__construct: function() {
									this.__parent.__construct.call(this), this.tb = [];
								},
								addLoader: function(e) {
									this.tb.push(e);
								},
								loadContents: function(e, t) {
									for (let n of this.tb) if (n.loadContents(e, t)) return !0;
									return !1;
								}
							});
							let o = r.computeAlignment;
							r.computeAlignment = function(e, t, n, r, i = 1) {
								return o.call(this, e, t, n, r, i);
							};
						}, (function() {
							function e(e, t, n = null) {
								let r = e.ec, i = e.ra, o = e.qa, s = e.Da ?? { i: !1 }, c = null, l = () => {
									let e = t().buffer;
									return (c === null || c.buffer !== e) && (c = new Uint8Array(e)), c;
								}, u = (t, n) => {
									if (0 > n || (t >>> 0) + n > l().length) throw RangeError("module range out of bounds");
									if (t = 4096 < n ? e.ab(n) : e.Ma(n), t === 0) throw Error(`could not stage ${n} bytes for the host`);
									return t;
								}, d = (t, n) => {
									let r = u(t, n);
									return t >>>= 0, e.X().set(c.subarray(t, t + n), r), s.i && (s.Ba += n), r;
								}, f = (t, n) => {
									t !== 0 && 4096 < n && e.ea(t);
								}, p = (t, n, r) => {
									r !== 0 && (l().set(e.X().subarray(t, t + r), n >>> 0), s.i && (s.za += r));
								}, m = (e, n) => {
									let r = a(t().buffer, e), s = i(), c = 0;
									try {
										c = d(e, r), n(c, r);
									} finally {
										f(c, r), o(s);
									}
								}, h = (e) => (t) => m(t, (t, n) => r.Ee(e, t, n));
								return {
									env: {
										seed: () => Date.now() * Math.random(),
										emscripten_get_now: () => performance.now(),
										emscripten_date_now: () => Date.now(),
										trace: (e, t, n, i, a, o, s) => m(e, (e, c) => r.Lj(e, c, t, n, i, a, o, s)),
										"console.log": h(0),
										"console.debug": h(0),
										"console.info": h(0),
										"console.warn": h(0),
										"console.error": h(0),
										"console.time": h(1),
										"console.timeLog": h(2),
										"console.timeEnd": h(3)
									},
									rive_rt_v1: (n === null || n === "rive_rt_v1") && {
										log: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n), r.Mi(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										mark_needs_update: r.Ni,
										budget_exceeded: r.Gi,
										error: (e, t) => {
											let n = i(), a = 0;
											try {
												a = d(e, t), r.Ki(a, t);
											} finally {
												f(a, t), o(n);
											}
										},
										now: () => performance.now(),
										date_now: () => Date.now(),
										features: () => 1,
										debug_enter: r.Hi,
										debug_line: r.Ji,
										debug_leave: r.Ii,
										utc_offset: r.Oi,
										is_dst: r.Li,
										zone_name: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.Pi(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										arg: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												c = d(e, t), l = d(n, a);
												let i = r.Fi(c, t, l, a);
												return p(l, n, a), i;
											} finally {
												f(l, a), f(c, t), o(s);
											}
										}
									},
									rive_data_v1: (n === null || n === "rive_data_v1") && {
										view_model: r.Cf,
										root_view_model: r.wf,
										global_view_model: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.af(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										global_view_model_names: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.bf(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										context: r.Qe,
										context_parent: r.Re,
										context_view_model: r.Te,
										context_release: r.Se,
										has_view_model: (e, t) => {
											let n = i(), a = 0;
											try {
												return a = d(e, t), r.cf(a, t);
											} finally {
												f(a, t), o(n);
											}
										},
										new_view_model: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												return c = d(e, t), l = d(n, a), r.sf(c, t, l, a);
											} finally {
												f(l, a), f(c, t), o(s);
											}
										},
										vmi_release: r.Rf,
										vmi_number: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Pf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_boolean: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Hf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_string: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Sf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_trigger: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Uf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_color: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.If(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_view_model: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Vf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_property: (e, t, n, a, s) => {
											let c = i(), l = 0, u = 0;
											try {
												l = d(t, n), u = d(a, 4 * s);
												let i = r.Qf(e, l, n, u, s);
												return p(u, a, 4 * s), i;
											} finally {
												f(u, 4 * s), f(l, n), o(c);
											}
										},
										vmi_instance: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Nf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_symbol_index: r.Tf,
										vmi_equal: r.Kf,
										view_model_get: r.Df,
										vmi_list: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Of(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_enum: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Jf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_image: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Mf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_font: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Lf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_blob: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Gf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										vmi_artboard: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Ff(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										image_get: r.df,
										image_set: r.ef,
										font_get: r.Ye,
										font_set: r.$e,
										font_release: r.Ze,
										blob_present: r.Ke,
										blob_get: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.Ie(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										blob_name: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.Je(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										blob_set: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n), r.Le(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										blob_clear: r.He,
										artboard_get: r.Fe,
										artboard_set: r.Ge,
										enum_get: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.Ve(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										enum_set: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n), r.We(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										enum_values: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.Xe(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										prop_release: r.vf,
										trigger_fire: r.Af,
										list_length: r.jf,
										list_push: r.lf,
										list_pop: r.kf,
										list_shift: r.qf,
										list_clear: r.ff,
										list_swap: r.rf,
										list_insert: r.hf,
										list_remove: r.mf,
										list_remove_at: r.pf,
										list_remove_all_of: r.nf,
										list_get: r.gf,
										view_model_set: r.Ef,
										color_get: r.Oe,
										color_set: r.Pe,
										number_get: r.tf,
										number_set: r.uf,
										boolean_get: r.Me,
										boolean_set: r.Ne,
										string_get: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.yf(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										string_changed: r.xf,
										string_set: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n), r.zf(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										watch: r.Wf,
										unwatch: r.Bf,
										convert_result: (e, t, n, a, s, c) => {
											let l = i(), u = 0;
											try {
												u = d(s, c), r.Ue(e, t, n, a, u, c);
											} finally {
												f(u, c), o(l);
											}
										}
									},
									rive_artboard_v1: (n === null || n === "rive_artboard_v1") && {
										release: r.Cd,
										advance: r.Vc,
										draw: r.cd,
										instance: r.nd,
										data: r.bd,
										width: r.Hd,
										height: r.md,
										set_width: r.Gd,
										set_height: r.Fd,
										frame_origin: r.kd,
										set_frame_origin: r.Ed,
										bounds: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n), r.ad(e, s, n), p(s, t, 4 * n);
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										pointer_event: r.Ad,
										scroll_event: r.Dd,
										gamepad_event: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.ld(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										animation: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Wc(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										animation_release: r.Zc,
										animation_duration: r.Yc,
										animation_advance: r.Xc,
										animation_set_time: r.$c,
										add_to_path: r.Uc,
										node: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.od(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										node_release: r.vd,
										node_transform: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n), r.yd(e, s, n), p(s, t, 4 * n);
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										node_set: r.wd,
										node_world_transform: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n), r.zd(e, s, n), p(s, t, 4 * n);
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										node_set_world_transform: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n), r.xd(e, s, n);
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										node_decompose: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n), r.qd(e, s, n);
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										node_path_verbs: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.ud(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										node_path_points: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.td(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										node_paint: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.rd(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										node_children: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.pd(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										node_parent: r.sd,
										property_key: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.Bd(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										draw_visit: r.ed,
										draw_modulated: r.dd,
										drawable_draw: r.fd,
										drawable_value: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, 4 * a);
												let i = r.jd(e, t, c, a);
												return p(c, n, 4 * a), i;
											} finally {
												f(c, 4 * a), o(s);
											}
										},
										drawable_string: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, a);
												let i = r.hd(e, t, c, a);
												return p(c, n, a), i;
											} finally {
												f(c, a), o(s);
											}
										},
										drawable_properties: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.gd(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										}
									},
									rive_audio_v1: (n === null || n === "rive_audio_v1") && {
										source: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.be(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										source_release: r.ee,
										source_duration: r.de,
										source_sample_rate: r.fe,
										source_channels: r.ce,
										source_to_blob: r.ge,
										stream: r.he,
										stream_ring: r.le,
										stream_seeks: r.oe,
										stream_channels: r.ie,
										stream_sample_rate: r.me,
										stream_seek_frame: r.ne,
										stream_set_loop: r.pe,
										stream_ended: r.je,
										stream_release: r.ke,
										play: r.Id,
										play_at_time: r.Kd,
										play_in_time: r.Md,
										play_at_frame: r.Jd,
										play_in_frame: r.Ld,
										time: r.qe,
										time_frame: r.re,
										sample_rate: r.Pd,
										processor_sample_rate: r.Od,
										processor_channels: r.Nd,
										sound_release: r.Td,
										sound_play: r.Sd,
										sound_pause: r.Rd,
										sound_resume: r.Ud,
										sound_stop: r.Yd,
										sound_seek: r.Vd,
										sound_seek_frame: r.Wd,
										sound_completed: r.Qd,
										sound_time: r.Zd,
										sound_time_frame: r.$d,
										sound_volume: r.ae,
										sound_set_volume: r.Xd
									},
									rive_path_v1: (n === null || n === "rive_path_v1") && {
										new: r.pi,
										update: (e, t, n, a, s, c) => {
											let l = i(), u = 0, p = 0;
											try {
												u = d(t, n), p = d(a, 4 * s), r.ti(e, u, n, p, s, c);
											} finally {
												f(p, 4 * s), f(u, n), o(l);
											}
										},
										release: r.si,
										add: r.ni,
										verbs: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.ui(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										points: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.ri(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										effect_result: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												c = d(e, t), l = d(n, 4 * a), r.oi(c, t, l, a);
											} finally {
												f(l, 4 * a), f(c, t), o(s);
											}
										}
									},
									rive_measure_v1: (n === null || n === "rive_measure_v1") && {
										path_new: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												return c = d(e, t), l = d(n, 4 * a), r.Qh(c, t, l, a);
											} finally {
												f(l, 4 * a), f(c, t), o(s);
											}
										},
										contours_new: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												return c = d(e, t), l = d(n, 4 * a), r.Lh(c, t, l, a);
											} finally {
												f(l, 4 * a), f(c, t), o(s);
											}
										},
										contour_next: r.Kh,
										length: r.Ph,
										is_closed: r.Oh,
										pos_tan: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, 4 * a), r.Rh(e, t, c, a), p(c, n, 4 * a);
											} finally {
												f(c, 4 * a), o(s);
											}
										},
										warp: (e, t, n, a, s) => {
											let c = i(), l = 0;
											try {
												l = d(a, 4 * s), r.Th(e, t, n, l, s), p(l, a, 4 * s);
											} finally {
												f(l, 4 * s), o(c);
											}
										},
										extract: r.Mh,
										extract_read: (e, t, n, a, s) => {
											let c = i(), l = 0, u = 0;
											try {
												l = d(t, n), u = d(a, 4 * s);
												let i = r.Nh(e, l, n, u, s);
												return p(l, t, n), p(u, a, 4 * s), i;
											} finally {
												f(u, 4 * s), f(l, n), o(c);
											}
										},
										release: r.Sh
									},
									rive_paint_v1: (n === null || n === "rive_paint_v1") && {
										new: r.ei,
										release: r.fi,
										style: r.ii,
										color: r.bi,
										thickness: r.ki,
										join: r.di,
										cap: r.ai,
										blend_mode: r.$h,
										feather: r.ci,
										shader: r.gi,
										shader_transform: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n), r.hi(e, s, n);
											} finally {
												f(s, 4 * n), o(a);
											}
										}
									},
									rive_canvas_v1: (n === null || n === "rive_canvas_v1") && {
										new: r.Ae,
										release: r.Be,
										width: r.De,
										height: r.ye,
										resize: r.Ce,
										image: r.ze,
										begin_frame: r.we,
										end_frame: r.xe
									},
									rive_gpu_v1: (n === null || n === "rive_gpu_v1") && {
										features: (e, t) => {
											let n = i(), a = 0;
											try {
												a = d(e, 4 * t);
												let n = r.Kg(a, t);
												return p(a, e, 4 * t), n;
											} finally {
												f(a, 4 * t), o(n);
											}
										},
										canvas_new: r.Hg,
										canvas_release: r.Ig,
										canvas_color_view: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.Fg(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										canvas_image: r.Gg,
										canvas_resize: (e, t, n, a, s) => {
											let c = i(), l = 0;
											try {
												l = d(a, 4 * s);
												let i = r.Jg(e, t, n, l, s);
												return p(l, a, 4 * s), i;
											} finally {
												f(l, 4 * s), o(c);
											}
										},
										target_view: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.jh(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										pass_begin: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												return c = d(e, t), l = d(n, a), r.Mg(c, t, l, a);
											} finally {
												f(l, a), f(c, t), o(s);
											}
										},
										pass_set_pipeline: r.Ug,
										pass_set_vertex_buffer: r.Xg,
										pass_set_index_buffer: r.Tg,
										pass_set_bind_group: (e, t, n, a, s) => {
											let c = i(), l = 0;
											try {
												l = d(a, s), r.Rg(e, t, n, l, s);
											} finally {
												f(l, s), o(c);
											}
										},
										pass_set_viewport: r.Yg,
										pass_set_scissor: r.Vg,
										pass_set_stencil_reference: r.Wg,
										pass_set_blend_color: r.Sg,
										pass_draw: r.Ng,
										pass_draw_indexed: r.Og,
										pass_finish: r.Pg,
										pass_release: r.Qg,
										image_view: r.Lg,
										buffer_new: (e, t, n, a, s) => {
											let c = i(), l = 0;
											try {
												return l = d(a, s), r.Ag(e, t, n, l, s);
											} finally {
												f(l, s), o(c);
											}
										},
										buffer_update: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, a), r.Dg(e, t, c, a);
											} finally {
												f(c, a), o(s);
											}
										},
										buffer_update_blob: r.Eg,
										buffer_new_blob: r.Bg,
										buffer_release: r.Cg,
										texture_new: (e, t) => {
											let n = i(), a = 0;
											try {
												return a = d(e, t), r.kh(a, t);
											} finally {
												f(a, t), o(n);
											}
										},
										texture_upload: (e, t, n, a, s) => {
											let c = i(), l = 0, u = 0;
											try {
												l = d(t, n), u = d(a, s), r.mh(e, l, n, u, s);
											} finally {
												f(u, s), f(l, n), o(c);
											}
										},
										texture_release: r.lh,
										sampler_new: (e, t) => {
											let n = i(), a = 0;
											try {
												return a = d(e, t), r.ah(a, t);
											} finally {
												f(a, t), o(n);
											}
										},
										sampler_release: r.bh,
										texture_view_new: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.nh(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										texture_view_release: r.oh,
										shader_target: r.ih,
										shader_asset_bytes: (e, t, n, a, s) => {
											let c = i(), l = 0, u = 0;
											try {
												l = d(t, n), u = d(a, s);
												let i = r.dh(e, l, n, u, s);
												return p(u, a, s), i;
											} finally {
												f(u, s), f(l, n), o(c);
											}
										},
										shader_asset_id: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.eh(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										shader_module_from_asset: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												return c = d(t, n), r.fh(e, c, n, a);
											} finally {
												f(c, n), o(s);
											}
										},
										shader_module_from_rstb: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												return c = d(e, t), r.gh(c, t, n, a);
											} finally {
												f(c, t), o(s);
											}
										},
										shader_module_release: r.hh,
										bind_group_layout_new: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.wg(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										bind_group_layout_release: r.xg,
										bind_group_layout_from_shader: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												return c = d(n, 4 * a), r.ug(e, t, c, a);
											} finally {
												f(c, 4 * a), o(s);
											}
										},
										bind_group_layout_from_shaders: (e, t, n, a, s) => {
											let c = i(), l = 0;
											try {
												return l = d(a, 4 * s), r.vg(e, t, n, l, s);
											} finally {
												f(l, 4 * s), o(c);
											}
										},
										bind_group_layout_from_entries: (e, t, n, a, s, c, l) => {
											let u = i(), p = 0, m = 0;
											try {
												return p = d(t, n), m = d(s, c), r.tg(e, p, n, a, m, c, l);
											} finally {
												f(m, c), f(p, n), o(u);
											}
										},
										bind_group_new: (e, t, n, a, s, c, l) => {
											let u = i(), p = 0, m = 0, h = 0;
											try {
												return p = d(t, n), m = d(a, s), h = d(c, l), r.yg(e, p, n, m, s, h, l);
											} finally {
												f(h, l), f(m, s), f(p, n), o(u);
											}
										},
										bind_group_release: r.zg,
										pipeline_new: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												return c = d(e, t), l = d(n, a), r.Zg(c, t, l, a);
											} finally {
												f(l, a), f(c, t), o(s);
											}
										},
										pipeline_release: r.$g
									},
									rive_mat4_v1: (n === null || n === "rive_mat4_v1") && {
										multiply: (e, t, n, a, s, c) => {
											let l = i(), u = 0, m = 0, h = 0;
											try {
												u = d(e, t), m = d(n, a), h = d(s, c), r.Jh(u, t, m, a, h, c), p(u, e, t);
											} finally {
												f(h, c), f(m, a), f(u, t), o(l);
											}
										},
										invert: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												c = d(e, t), l = d(n, a);
												let i = r.Ih(c, t, l, a);
												return p(c, e, t), i;
											} finally {
												f(l, a), f(c, t), o(s);
											}
										}
									},
									rive_buffer_v1: (n === null || n === "rive_buffer_v1") && {
										new: r.te,
										update: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n), r.ve(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										release: r.ue
									},
									rive_mesh_instances_v1: (n === null || n === "rive_mesh_instances_v1") && {
										new: r.Uh,
										resize: r.Wh,
										update: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, a), r.Xh(e, t, c, a);
											} finally {
												f(c, a), o(s);
											}
										},
										release: r.Vh
									},
									rive_blob_v1: (n === null || n === "rive_blob_v1") && { asset_bytes: (e, t, n, a, s) => {
										let c = i(), l = 0, u = 0;
										try {
											l = d(t, n), u = d(a, s);
											let i = r.se(e, l, n, u, s);
											return p(u, a, s), i;
										} finally {
											f(u, s), f(l, n), o(c);
										}
									} },
									rive_image_v1: (n === null || n === "rive_image_v1") && {
										from_asset: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.rh(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										width: r.uh,
										height: r.sh,
										release: r.th,
										decode: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(e, t), r.ph(s, t, n);
											} finally {
												f(s, t), o(a);
											}
										},
										decode_cancel: r.qh
									},
									rive_font_v1: (n === null || n === "rive_font_v1") && {
										from_asset: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(t, n), r.kg(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										decode: (e, t) => {
											let n = i(), a = 0;
											try {
												return a = d(e, t), r.ig(a, t);
											} finally {
												f(a, t), o(n);
											}
										},
										release: r.qg,
										metrics: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n), r.pg(e, s, n), p(s, t, 4 * n);
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										weight: r.rg,
										is_italic: r.og,
										axis_count: r.gg,
										axis: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, 4 * a), r.fg(e, t, c, a), p(c, n, 4 * a);
											} finally {
												f(c, 4 * a), o(s);
											}
										},
										axis_value: r.hg,
										features: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.jg(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										has_glyph: r.ng,
										with_options: (e, t, n, a, s) => {
											let c = i(), l = 0, u = 0;
											try {
												return l = d(t, 4 * n), u = d(a, 4 * s), r.sg(e, l, n, u, s);
											} finally {
												f(u, 4 * s), f(l, 4 * n), o(c);
											}
										},
										glyph_verbs: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, a);
												let i = r.mg(e, t, c, a);
												return p(c, n, a), i;
											} finally {
												f(c, a), o(s);
											}
										},
										glyph_points: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, 4 * a);
												let i = r.lg(e, t, c, a);
												return p(c, n, 4 * a), i;
											} finally {
												f(c, 4 * a), o(s);
											}
										}
									},
									rive_text_v1: (n === null || n === "rive_text_v1") && {
										new: r.Hj,
										release: r.Ij,
										append: (e, t, n, a, s, c, l, u, p) => {
											let m = i(), h = 0;
											try {
												h = d(t, n), r.xj(e, h, n, a, s, c, l, u, p);
											} finally {
												f(h, n), o(m);
											}
										},
										clear: r.Aj,
										layout: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n), r.Ej(e, s, n);
											} finally {
												f(s, n), o(a);
											}
										},
										draw: r.Bj,
										bounds: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n), r.yj(e, s, n), p(s, t, 4 * n);
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										length: r.Fj,
										lines: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.Gj(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										runs: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.Jj(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										glyphs: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, 4 * n);
												let i = r.Cj(e, s, n);
												return p(s, t, 4 * n), i;
											} finally {
												f(s, 4 * n), o(a);
											}
										},
										hit_test: r.Dj,
										caret: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, 4 * a);
												let i = r.zj(e, t, c, a);
												return p(c, n, 4 * a), i;
											} finally {
												f(c, 4 * a), o(s);
											}
										},
										selection_rects: (e, t, n, a, s) => {
											let c = i(), l = 0;
											try {
												l = d(a, 4 * s);
												let i = r.Kj(e, t, n, l, s);
												return p(l, a, 4 * s), i;
											} finally {
												f(l, 4 * s), o(c);
											}
										}
									},
									rive_shader_v1: (n === null || n === "rive_shader_v1") && {
										linear: r.Qi,
										radial: r.Ri,
										release: r.Si
									},
									rive_test_v1: (n === null || n === "rive_test_v1") && { blob: (e, t, n, a) => {
										let s = i(), c = 0, l = 0;
										try {
											c = d(e, t), l = d(n, a);
											let i = r.wj(c, t, l, a);
											return p(l, n, a), i;
										} finally {
											f(l, a), f(c, t), o(s);
										}
									} },
									rive_transition_v1: (n === null || n === "rive_transition_v1") && {
										child_draw: r.Mj,
										child_width: r.Oj,
										child_height: r.Nj
									},
									rive_renderer_v1: (n === null || n === "rive_renderer_v1") && {
										save: r.Di,
										restore: r.Ci,
										transform: r.Ei,
										draw_path: r.zi,
										clip_path: r.vi,
										modulate_opacity: r.Bi,
										modulate_color: r.Ai,
										draw_image: r.wi,
										draw_image_mesh: r.xi,
										draw_image_mesh_instanced: r.yi
									},
									rive_net_v1: (n === null || n === "rive_net_v1") && {
										fetch: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(e, t), r.Yh(s, t, n);
											} finally {
												f(s, t), o(a);
											}
										},
										fetch_cancel: r.Zh
									},
									rive_file_v1: (n === null || n === "rive_file_v1") && {
										decode: (e, t, n, a) => {
											let s = i(), c = 0, l = 0;
											try {
												c = d(e, t), l = d(n, 4 * a);
												let i = r.dg(c, t, l, a);
												return p(l, n, 4 * a), i;
											} finally {
												f(l, 4 * a), f(c, t), o(s);
											}
										},
										release: r.eg,
										artboard_count: r.Xf,
										artboard_name: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = d(n, a);
												let i = r.Yf(e, t, c, a);
												return p(c, n, a), i;
											} finally {
												f(c, a), o(s);
											}
										},
										bindable: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												return c = d(t, n), r.Zf(e, c, n, a);
											} finally {
												f(c, n), o(s);
											}
										},
										bindable_release: r.cg,
										bindable_name: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = d(t, n);
												let i = r.bg(e, s, n);
												return p(s, t, n), i;
											} finally {
												f(s, n), o(a);
											}
										},
										bindable_data: r.$f,
										bindable_equal: r.ag
									},
									rive_lanes_v1: (n === null || n === "rive_lanes_v1") && {
										start: (e, t, n, a, s, c) => {
											let l = i(), u = 0, p = 0;
											try {
												return u = d(n, a), p = d(s, 4 * c), r.Ch(e, t, u, a, p, c);
											} finally {
												f(p, 4 * c), f(u, a), o(l);
											}
										},
										state: r.Dh,
										failed: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = u(t, n);
												let i = r.zh(e, s, n);
												return p(s, t, i >>> 0 <= n ? i >>> 0 : 0), i;
											} finally {
												f(s, n), o(a);
											}
										},
										stop: r.Eh,
										release: r.Ah,
										result: r.Bh,
										watch: r.Hh,
										wait: r.Fh,
										cancel_wait: r.yh,
										wait_within: r.Gh
									},
									rive_jobs_v1: (n === null || n === "rive_jobs_v1") && {
										threads: r.xh,
										join: r.vh,
										join_any: (e, t, n) => {
											let a = i(), s = 0;
											try {
												return s = d(e, 4 * t), r.wh(s, t, n);
											} finally {
												f(s, 4 * t), o(a);
											}
										}
									},
									rive_parallel_v1: (n === null || n === "rive_parallel_v1") && {
										size: r.mi,
										run: r.li,
										waiting: () => {}
									},
									rive_shared_v1: (n === null || n === "rive_shared_v1") && {
										region_create: r.aj,
										region_size: r.ej,
										region_lock: r.bj,
										region_unlock: r.fj,
										region_read: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = u(n, a);
												let i = r.dj(e, t, c, a);
												return p(c, n, i === 0 ? 0 : a), i;
											} finally {
												f(c, a), o(s);
											}
										},
										region_write: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												return c = d(n, a), r.gj(e, t, c, a);
											} finally {
												f(c, a), o(s);
											}
										},
										region_poisoned: r.cj,
										atomic_load: r.Vi,
										atomic_store: r.Wi,
										atomic_add: r.Ti,
										atomic_cas: r.Ui,
										ring_create: r.jj,
										ring_write: (e, t, n, a, s) => {
											let c = i(), l = 0, u = 0;
											try {
												return l = d(t, n), u = d(a, 4 * s), r.oj(e, l, n, u, s);
											} finally {
												f(u, 4 * s), f(l, n), o(c);
											}
										},
										ring_read: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = u(t, n);
												let i = r.lj(e, s, n);
												return e = i - 1, p(s, t, e >>> 0 <= n ? e >>> 0 : 0), i;
											} finally {
												f(s, n), o(a);
											}
										},
										ring_drop: r.kj,
										ring_used: r.nj,
										ring_signal: r.mj,
										snapshot_create: r.sj,
										snapshot_publish: (e, t, n, a, s) => {
											let c = i(), l = 0, u = 0;
											try {
												return l = d(t, n), u = d(a, 4 * s), r.tj(e, l, n, u, s);
											} finally {
												f(u, 4 * s), f(l, n), o(c);
											}
										},
										snapshot_read: (e, t, n) => {
											let a = i(), s = 0;
											try {
												s = u(t, n);
												let i = r.uj(e, s, n);
												return e = i - 1, p(s, t, e >>> 0 <= n ? e >>> 0 : 0), i;
											} finally {
												f(s, n), o(a);
											}
										},
										snapshot_seq: r.vj,
										read_done: r.$i,
										signal_create: r.pj,
										signal_notify: r.qj,
										signal_seq: r.rj,
										blob_create: (e, t) => {
											let n = i(), a = 0;
											try {
												return a = d(e, t), r.Xi(a, t);
											} finally {
												f(a, t), o(n);
											}
										},
										blob_size: r.Zi,
										blob_read: (e, t, n, a) => {
											let s = i(), c = 0;
											try {
												c = u(n, a);
												let i = r.Yi(e, t, c, a);
												return p(c, n, i >>> 0 <= a ? i >>> 0 : 0), i;
											} finally {
												f(c, a), o(s);
											}
										},
										retain: r.ij,
										release: r.hj
									}
								};
							}
							function t(e, t, r = null) {
								let i = t.Da ?? { i: !1 }, a = () => {
									let e = Error(t.j);
									throw t.j = null, e;
								}, o = () => {
									throw Error("librive faulted in a nested script call");
								}, s = () => {
									throw Error("script VM was released");
								};
								return {
									Mi: (r === null || r === "rive_rt_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(0)),
									Ni: (r === null || r === "rive_rt_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(1)),
									Gi: (r === null || r === "rive_rt_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(2)),
									Ki: (r === null || r === "rive_rt_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(3)),
									Hi: (r === null || r === "rive_rt_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(4)),
									Ji: (r === null || r === "rive_rt_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(5)),
									Ii: (r === null || r === "rive_rt_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g);
										} catch (e) {
											var n = e;
											throw t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(6)),
									Oi: (r === null || r === "rive_rt_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(7)),
									Li: (r === null || r === "rive_rt_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(8)),
									Pi: (r === null || r === "rive_rt_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(9)),
									Fi: (r === null || r === "rive_rt_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(10)),
									Cf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(11)),
									wf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(12)),
									af: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(13)),
									bf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(14)),
									Qe: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(15)),
									Re: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(16)),
									Te: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(17)),
									Se: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(18)),
									cf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(19)),
									sf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(20)),
									Rf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(21)),
									Pf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(22)),
									Hf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(23)),
									Sf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(24)),
									Uf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(25)),
									If: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(26)),
									Vf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(27)),
									Qf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(28)),
									Nf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(29)),
									Tf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(30)),
									Kf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(31)),
									Df: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(32)),
									Of: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(33)),
									Jf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(34)),
									Mf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(35)),
									Lf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(36)),
									Gf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(37)),
									Ff: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(38)),
									df: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(39)),
									ef: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(40)),
									Ye: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(41)),
									$e: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(42)),
									Ze: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(43)),
									Ke: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(44)),
									Ie: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(45)),
									Je: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(46)),
									Le: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(47)),
									He: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(48)),
									Fe: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(49)),
									Ge: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(50)),
									Ve: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(51)),
									We: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(52)),
									Xe: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(53)),
									vf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(54)),
									Af: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(55)),
									jf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(56)),
									lf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(57)),
									kf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(58)),
									qf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(59)),
									ff: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(60)),
									rf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(61)),
									hf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(62)),
									mf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(63)),
									pf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(64)),
									nf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(65)),
									gf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(66)),
									Ef: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(67)),
									Oe: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(68)),
									Pe: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(69)),
									tf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(70)),
									uf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(71)),
									Me: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(72)),
									Ne: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(73)),
									yf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(74)),
									xf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(75)),
									zf: (r === null || r === "rive_data_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(76)),
									Wf: (r === null || r === "rive_data_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(77)),
									Bf: (r === null || r === "rive_data_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(78)),
									Ue: (r === null || r === "rive_data_v1") && ((e) => (n, r, c, l, u, d) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(79)),
									Cd: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(80)),
									Vc: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(81)),
									cd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(82)),
									nd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(83)),
									bd: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(84)),
									Hd: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(85)),
									md: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(86)),
									Gd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(87)),
									Fd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(88)),
									kd: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(89)),
									Ed: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(90)),
									ad: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(91)),
									Ad: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(92)),
									Dd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c, l, u, d, f, p, m) => {
										t.g === 0 && s(), i.i && i.l++;
										let h;
										try {
											h = e(t.g, n, r, c, l, u, d, f, p, m);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), h;
									})(e(93)),
									ld: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(94)),
									Wc: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(95)),
									Zc: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(96)),
									Yc: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(97)),
									Xc: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(98)),
									$c: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(99)),
									Uc: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c, l, u, d, f, p) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d, f, p);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(100)),
									od: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(101)),
									vd: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(102)),
									yd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(103)),
									wd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(104)),
									zd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(105)),
									xd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(106)),
									qd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(107)),
									ud: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(108)),
									td: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(109)),
									rd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(110)),
									pd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(111)),
									sd: (r === null || r === "rive_artboard_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(112)),
									Bd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(113)),
									ed: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(114)),
									dd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(115)),
									fd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(116)),
									jd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(117)),
									hd: (r === null || r === "rive_artboard_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(118)),
									gd: (r === null || r === "rive_artboard_v1") && ((e) => e === void 0 ? n("rive_artboard_v1", "drawable_properties") : (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(119)),
									be: (r === null || r === "rive_audio_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(120)),
									ee: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(121)),
									de: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(122)),
									fe: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(123)),
									ce: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(124)),
									ge: (r === null || r === "rive_audio_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(125)),
									he: (r === null || r === "rive_audio_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(126)),
									le: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(127)),
									oe: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(128)),
									ie: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(129)),
									me: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(130)),
									ne: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(131)),
									pe: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(132)),
									je: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(133)),
									ke: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(134)),
									Id: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(135)),
									Kd: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(136)),
									Md: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(137)),
									Jd: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(138)),
									Ld: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(139)),
									qe: (r === null || r === "rive_audio_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(140)),
									re: (r === null || r === "rive_audio_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(141)),
									Pd: (r === null || r === "rive_audio_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(142)),
									Od: (r === null || r === "rive_audio_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(143)),
									Nd: (r === null || r === "rive_audio_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(144)),
									Td: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(145)),
									Sd: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(146)),
									Rd: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(147)),
									Ud: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(148)),
									Yd: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(149)),
									Vd: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(150)),
									Wd: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(151)),
									Qd: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(152)),
									Zd: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(153)),
									$d: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(154)),
									ae: (r === null || r === "rive_audio_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(155)),
									Xd: (r === null || r === "rive_audio_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(156)),
									pi: (r === null || r === "rive_path_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(157)),
									ti: (r === null || r === "rive_path_v1") && ((e) => (n, r, c, l, u, d) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(158)),
									si: (r === null || r === "rive_path_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(159)),
									ni: (r === null || r === "rive_path_v1") && ((e) => (n, r, c, l, u, d, f, p) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d, f, p);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(160)),
									ui: (r === null || r === "rive_path_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(161)),
									ri: (r === null || r === "rive_path_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(162)),
									oi: (r === null || r === "rive_path_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(163)),
									Qh: (r === null || r === "rive_measure_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(164)),
									Lh: (r === null || r === "rive_measure_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(165)),
									Kh: (r === null || r === "rive_measure_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(166)),
									Ph: (r === null || r === "rive_measure_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(167)),
									Oh: (r === null || r === "rive_measure_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(168)),
									Rh: (r === null || r === "rive_measure_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(169)),
									Th: (r === null || r === "rive_measure_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(170)),
									Mh: (r === null || r === "rive_measure_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(171)),
									Nh: (r === null || r === "rive_measure_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(172)),
									Sh: (r === null || r === "rive_measure_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(173)),
									ei: (r === null || r === "rive_paint_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(174)),
									fi: (r === null || r === "rive_paint_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(175)),
									ii: (r === null || r === "rive_paint_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(176)),
									bi: (r === null || r === "rive_paint_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(177)),
									ki: (r === null || r === "rive_paint_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(178)),
									di: (r === null || r === "rive_paint_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(179)),
									ai: (r === null || r === "rive_paint_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(180)),
									$h: (r === null || r === "rive_paint_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(181)),
									ci: (r === null || r === "rive_paint_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(182)),
									gi: (r === null || r === "rive_paint_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(183)),
									hi: (r === null || r === "rive_paint_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(184)),
									Ae: (r === null || r === "rive_canvas_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(185)),
									Be: (r === null || r === "rive_canvas_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(186)),
									De: (r === null || r === "rive_canvas_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(187)),
									ye: (r === null || r === "rive_canvas_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(188)),
									Ce: (r === null || r === "rive_canvas_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(189)),
									ze: (r === null || r === "rive_canvas_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(190)),
									we: (r === null || r === "rive_canvas_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(191)),
									xe: (r === null || r === "rive_canvas_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(192)),
									Kg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(193)),
									Hg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(194)),
									Ig: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(195)),
									Fg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(196)),
									Gg: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(197)),
									Jg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(198)),
									jh: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(199)),
									Mg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(200)),
									Ug: (r === null || r === "rive_gpu_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(201)),
									Xg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(202)),
									Tg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(203)),
									Rg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(204)),
									Yg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u, d, f) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d, f);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(205)),
									Vg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(206)),
									Wg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(207)),
									Sg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(208)),
									Ng: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(209)),
									Og: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u, d) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(210)),
									Pg: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(211)),
									Qg: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(212)),
									Lg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(213)),
									Ag: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(214)),
									Dg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(215)),
									Eg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(216)),
									Bg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(217)),
									Cg: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(218)),
									kh: (r === null || r === "rive_gpu_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(219)),
									mh: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(220)),
									lh: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(221)),
									ah: (r === null || r === "rive_gpu_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(222)),
									bh: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(223)),
									nh: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(224)),
									oh: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(225)),
									ih: (r === null || r === "rive_gpu_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(226)),
									dh: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(227)),
									eh: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(228)),
									fh: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(229)),
									gh: (r === null || r === "rive_gpu_v1") && ((e) => e === void 0 ? n("rive_gpu_v1", "shader_module_from_rstb") : (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(230)),
									hh: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(231)),
									wg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(232)),
									xg: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(233)),
									ug: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(234)),
									vg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(235)),
									tg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u, d, f) => {
										t.g === 0 && s(), i.i && i.l++;
										let p;
										try {
											p = e(t.g, n, r, c, l, u, d, f);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), p;
									})(e(236)),
									yg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l, u, d, f) => {
										t.g === 0 && s(), i.i && i.l++;
										let p;
										try {
											p = e(t.g, n, r, c, l, u, d, f);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), p;
									})(e(237)),
									zg: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(238)),
									Zg: (r === null || r === "rive_gpu_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(239)),
									$g: (r === null || r === "rive_gpu_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(240)),
									Jh: (r === null || r === "rive_mat4_v1") && ((e) => (n, r, c, l, u, d) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(241)),
									Ih: (r === null || r === "rive_mat4_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(242)),
									te: (r === null || r === "rive_buffer_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(243)),
									ve: (r === null || r === "rive_buffer_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(244)),
									ue: (r === null || r === "rive_buffer_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(245)),
									Uh: (r === null || r === "rive_mesh_instances_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(246)),
									Wh: (r === null || r === "rive_mesh_instances_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(247)),
									Xh: (r === null || r === "rive_mesh_instances_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(248)),
									Vh: (r === null || r === "rive_mesh_instances_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(249)),
									se: (r === null || r === "rive_blob_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(250)),
									rh: (r === null || r === "rive_image_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(251)),
									uh: (r === null || r === "rive_image_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(252)),
									sh: (r === null || r === "rive_image_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(253)),
									th: (r === null || r === "rive_image_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(254)),
									ph: (r === null || r === "rive_image_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(255)),
									qh: (r === null || r === "rive_image_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(256)),
									kg: (r === null || r === "rive_font_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(257)),
									ig: (r === null || r === "rive_font_v1") && ((e) => e === void 0 ? n("rive_font_v1", "decode") : (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(258)),
									qg: (r === null || r === "rive_font_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(259)),
									pg: (r === null || r === "rive_font_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(260)),
									rg: (r === null || r === "rive_font_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(261)),
									og: (r === null || r === "rive_font_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(262)),
									gg: (r === null || r === "rive_font_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(263)),
									fg: (r === null || r === "rive_font_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(264)),
									hg: (r === null || r === "rive_font_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(265)),
									jg: (r === null || r === "rive_font_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(266)),
									ng: (r === null || r === "rive_font_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(267)),
									sg: (r === null || r === "rive_font_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(268)),
									mg: (r === null || r === "rive_font_v1") && ((e) => e === void 0 ? n("rive_font_v1", "glyph_verbs") : (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(269)),
									lg: (r === null || r === "rive_font_v1") && ((e) => e === void 0 ? n("rive_font_v1", "glyph_points") : (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(270)),
									Hj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "new") : () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(271)),
									Ij: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "release") : (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(272)),
									xj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "append") : (n, r, c, l, u, d, f, p, m) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d, f, p, m);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(273)),
									Aj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "clear") : (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(274)),
									Ej: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "layout") : (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(275)),
									Bj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "draw") : (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(276)),
									yj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "bounds") : (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(277)),
									Fj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "length") : (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(278)),
									Gj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "lines") : (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(279)),
									Jj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "runs") : (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(280)),
									Cj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "glyphs") : (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(281)),
									Dj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "hit_test") : (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(282)),
									zj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "caret") : (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(283)),
									Kj: (r === null || r === "rive_text_v1") && ((e) => e === void 0 ? n("rive_text_v1", "selection_rects") : (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(284)),
									Qi: (r === null || r === "rive_shader_v1") && ((e) => (n, r, c, l, u, d, f) => {
										t.g === 0 && s(), i.i && i.l++;
										let p;
										try {
											p = e(t.g, n, r, c, l, u, d, f);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), p;
									})(e(285)),
									Ri: (r === null || r === "rive_shader_v1") && ((e) => (n, r, c, l, u, d) => {
										t.g === 0 && s(), i.i && i.l++;
										let f;
										try {
											f = e(t.g, n, r, c, l, u, d);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), f;
									})(e(286)),
									Si: (r === null || r === "rive_shader_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(287)),
									wj: (r === null || r === "rive_test_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(288)),
									Mj: (r === null || r === "rive_transition_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(289)),
									Oj: (r === null || r === "rive_transition_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(290)),
									Nj: (r === null || r === "rive_transition_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(291)),
									Di: (r === null || r === "rive_renderer_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(292)),
									Ci: (r === null || r === "rive_renderer_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(293)),
									Ei: (r === null || r === "rive_renderer_v1") && ((e) => (n, r, c, l, u, d, f) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d, f);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(294)),
									zi: (r === null || r === "rive_renderer_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(295)),
									vi: (r === null || r === "rive_renderer_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(296)),
									Bi: (r === null || r === "rive_renderer_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(297)),
									Ai: (r === null || r === "rive_renderer_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(298)),
									wi: (r === null || r === "rive_renderer_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(299)),
									xi: (r === null || r === "rive_renderer_v1") && ((e) => (n, r, c, l, u, d, f, p) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d, f, p);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(300)),
									yi: (r === null || r === "rive_renderer_v1") && ((e) => (n, r, c, l, u, d, f) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d, f);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(301)),
									Yh: (r === null || r === "rive_net_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(302)),
									Zh: (r === null || r === "rive_net_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(303)),
									dg: (r === null || r === "rive_file_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(304)),
									eg: (r === null || r === "rive_file_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(305)),
									Xf: (r === null || r === "rive_file_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(306)),
									Yf: (r === null || r === "rive_file_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(307)),
									Zf: (r === null || r === "rive_file_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(308)),
									cg: (r === null || r === "rive_file_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(309)),
									bg: (r === null || r === "rive_file_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(310)),
									$f: (r === null || r === "rive_file_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(311)),
									ag: (r === null || r === "rive_file_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(312)),
									Ch: (r === null || r === "rive_lanes_v1") && ((e) => (n, r, c, l, u, d) => {
										t.g === 0 && s(), i.i && i.l++;
										let f;
										try {
											f = e(t.g, n, r, c, l, u, d);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), f;
									})(e(313)),
									Dh: (r === null || r === "rive_lanes_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(314)),
									zh: (r === null || r === "rive_lanes_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(315)),
									Eh: (r === null || r === "rive_lanes_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(316)),
									Ah: (r === null || r === "rive_lanes_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(317)),
									Bh: (r === null || r === "rive_lanes_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(318)),
									Hh: (r === null || r === "rive_lanes_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(319)),
									Fh: (r === null || r === "rive_lanes_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(320)),
									yh: (r === null || r === "rive_lanes_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(321)),
									Gh: (r === null || r === "rive_lanes_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(322)),
									xh: (r === null || r === "rive_jobs_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(323)),
									vh: (r === null || r === "rive_jobs_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(324)),
									wh: (r === null || r === "rive_jobs_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(325)),
									mi: (r === null || r === "rive_parallel_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(326)),
									li: (r === null || r === "rive_parallel_v1") && ((e) => e === void 0 ? n("rive_parallel_v1", "run") : (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(327)),
									aj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(328)),
									ej: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(329)),
									bj: (r === null || r === "rive_shared_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(330)),
									fj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(331)),
									dj: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(332)),
									gj: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(333)),
									cj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(334)),
									Vi: (r === null || r === "rive_shared_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(335)),
									Wi: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(336)),
									Ti: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(337)),
									Ui: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(338)),
									jj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(339)),
									oj: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(340)),
									lj: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(341)),
									kj: (r === null || r === "rive_shared_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(342)),
									nj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(343)),
									mj: (r === null || r === "rive_shared_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(344)),
									sj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(345)),
									tj: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c, l, u) => {
										t.g === 0 && s(), i.i && i.l++;
										let d;
										try {
											d = e(t.g, n, r, c, l, u);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), d;
									})(e(346)),
									uj: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										let l;
										try {
											l = e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), l;
									})(e(347)),
									vj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(348)),
									$i: (r === null || r === "rive_shared_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g);
										} catch (e) {
											var n = e;
											throw t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(349)),
									pj: (r === null || r === "rive_shared_v1") && ((e) => () => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											var n = e(t.g);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), n;
									})(e(350)),
									qj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(351)),
									rj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(352)),
									Xi: (r === null || r === "rive_shared_v1") && ((e) => (n, r) => {
										t.g === 0 && s(), i.i && i.l++;
										let c;
										try {
											c = e(t.g, n, r);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), c;
									})(e(353)),
									Zi: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(354)),
									Yi: (r === null || r === "rive_shared_v1") && ((e) => (n, r, c, l) => {
										t.g === 0 && s(), i.i && i.l++;
										let u;
										try {
											u = e(t.g, n, r, c, l);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), u;
									})(e(355)),
									ij: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										let r;
										try {
											r = e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										return t.h && o(), t.j !== null && a(), r;
									})(e(356)),
									hj: (r === null || r === "rive_shared_v1") && ((e) => (n) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(357)),
									Ee: (r === null || r === "env") && ((e) => (n, r, c) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(358)),
									Lj: (r === null || r === "env") && ((e) => (n, r, c, l, u, d, f, p) => {
										t.g === 0 && s(), i.i && i.l++;
										try {
											e(t.g, n, r, c, l, u, d, f, p);
										} catch (e) {
											throw n = e, t.h = !0, n;
										}
										t.h && o(), t.j !== null && a();
									})(e(359))
								};
							}
							function n(e, t) {
								return () => {
									throw Error("failed to call unlinked import function " + e + "." + t);
								};
							}
							function i(e, t, n) {
								if (t + n > e.byteLength) throw Error("out of bounds memory access");
							}
							function a(e, t) {
								if (t >>>= 0, 4 > t) return 0;
								i(e, t, 0);
								let n = new DataView(e).getUint32(t - 4, !0);
								return i(e, t, n), n;
							}
							function o(e, t, n) {
								if (t >>>= 0, n >>>= 0, i(e, t, n), typeof TextDecoder < "u") return new TextDecoder("utf-16le", { ignoreBOM: !0 }).decode(new Uint8Array(e, t, n));
								for (e = t % 2 == 0 ? new Uint16Array(e, t, n >> 1) : new Uint16Array(e.slice(t, t + n - n % 2)), t = "", n = 0; n < e.length; n += 4096) t += String.fromCharCode.apply(null, e.subarray(n, n + 4096));
								return t;
							}
							function s(e, t) {
								let n = F.get(t);
								if (n === void 0) {
									for (let r = 0; 32 > r && n === void 0; r++) {
										let i = t + 16 + 4 * r >>> 2;
										Atomics.compareExchange(e, i, 0, 1) === 0 && (n = {
											ia: i,
											hb: 2 + r
										});
									}
									n ??= {
										ia: -1,
										hb: 34 + Atomics.add(e, t + 144 >>> 2, 1)
									}, F.set(t, n);
								}
								return n;
							}
							function c(e, t, n, r, i = null, a = () => {}) {
								t >>>= 0;
								let o = n % 4294967296, c = Math.floor(n / 4294967296), l = null, u = null, d = null, f = null, p = null, m = null, h = () => {
									let t = e();
									t !== l && (l = t, u = new Uint8Array(l), d = new Int32Array(l), f = new Uint32Array(l));
								};
								h();
								let g = s(d, t);
								i !== null && Atomics.store(i, 2, g.hb);
								let _ = (e, t) => {
									let n = r().buffer;
									return n !== p && (p = n, m = new Uint8Array(n)), e + t <= m.length ? m : null;
								}, v = (e, t, n, r, i) => {
									for (let a = 0; a < i; a++) e[t + a] = n[r + a];
								}, y = (e) => {
									for (i !== null && Atomics.store(i, 3, e); Atomics.compareExchange(d, e >>> 2, 0, g.hb) !== 0;);
								}, b = (e) => {
									Atomics.store(d, e >>> 2, 0), i !== null && Atomics.store(i, 3, 0);
								}, x = 0, S = (e, n) => {
									if (h(), e >>>= 0, !(e & 2147483648)) return 0;
									var r = (e & 2147483647) >>> 12, i = Atomics.load(f, t + 148 + 4 * (r >>> 10) >>> 2);
									if (i === 0) return 0;
									if (r = i + 24 * (r & 1023), i = r >>> 2, 0 <= g.ia) {
										if (Atomics.store(f, g.ia, r), i = Atomics.load(f, i), !(i & 4096) || (i ^ e) & 4095) return Atomics.store(f, g.ia, 1), 0;
									} else for (;;) {
										let t = Atomics.load(f, i);
										if (!(t & 4096) || (t ^ e) & 4095) return 0;
										if (Atomics.compareExchange(f, i, t, t + 8192) === t) break;
									}
									return x = r, e = Atomics.load(f, r + 4 >>> 2), f[e >>> 2] !== n || f[r + 16 >>> 2] !== o || f[r + 20 >>> 2] !== c ? (C(), 0) : e;
								}, C = () => {
									0 <= g.ia ? Atomics.store(f, g.ia, 1) : Atomics.sub(f, x + 0 >>> 2, 8192);
								}, w = (e) => {
									if (e = S(e, 3), e !== 0) {
										Atomics.add(f, e + 24 >>> 2, 1) === 4294967295 && Atomics.add(f, e + 28 >>> 2, 1), y(e + 4);
										try {
											let t = f[e + 16 >>> 2], n = f[e + 32 >>> 2] >>> 2;
											for (let e = 0; e < t; e++) {
												let t = f[n + e] + 0 >>> 2;
												Atomics.add(d, t, 1), Atomics.notify(d, t);
											}
										} finally {
											b(e + 4), C();
										}
									}
								}, T = (e, t, n, r, i) => {
									let a = Math.min(i, f[e + 8 >>> 2] - t);
									v(u, e + 32 + t, n, r, a), v(u, e + 32, n, r + a, i - a);
								}, E = (e, t, n, r, i) => {
									var a = f[e + 8 >>> 2];
									t %= a, a = Math.min(i, a - t), v(n, r, u, e + 32 + t, a), v(n, r + a, u, e + 32, i - a);
								}, D = /* @__PURE__ */ new Uint8Array(4), O = new Uint32Array(D.buffer), k = () => (a("a processor cannot pass shared objects through rings or snapshots, as the audio thread may not hold or give them back; pass them in Audio.start's argument"), 0), A = (e, t, n, r) => {
									if (e = S(e, 1), e === 0) return 0;
									let i = 0, a = 0;
									y(e + 4);
									try {
										let o = f[e + 20 >>> 2];
										if (o === 0) return 0;
										let s = f[e + 16 >>> 2];
										if (E(e, s, D, 0, 4), a = O[0], a & 2147483648) return k();
										if (t === null) {
											if (a <= r) return 0;
										} else {
											if (n === 0 || a > r) return a + 1;
											E(e, s + 4, t, n, a);
										}
										f[e + 16 >>> 2] = (s + 4 + a) % f[e + 8 >>> 2], f[e + 20 >>> 2] = o - 4 - a, i = f[e + 28 >>> 2];
									} finally {
										b(e + 4), C();
									}
									return w(i), a + 1;
								}, j = (e, t, n) => {
									if (e = S(e, 0), e === 0) return -1;
									try {
										t >>>= 0;
										var r = t & 3 || t + 4 > f[e + 8 >>> 2] ? -1 : e + 32 + t >>> 2;
										return 0 > r ? -1 : n(r) >>> 0;
									} finally {
										C();
									}
								};
								return {
									region_create: () => 0,
									region_size: (e) => (e = S(e, 0), e === 0 ? 0 : (e = f[e + 8 >>> 2], C(), e)),
									region_lock: () => 0,
									region_unlock: () => {},
									region_read: () => 0,
									region_write: () => 0,
									region_poisoned: (e) => (e = S(e, 0), e === 0 ? 0 : (e = f[e + 16 >>> 2] === 0 ? 0 : 1, C(), e)),
									atomic_load: (e, t) => j(e, t, (e) => Atomics.load(d, e)),
									atomic_store: (e, t, n) => j(e, t, (e) => (Atomics.store(d, e, n | 0), 0)),
									atomic_add: (e, t, n) => j(e, t, (e) => Atomics.add(d, e, n | 0)),
									atomic_cas: (e, t, n, r) => j(e, t, (e) => Atomics.compareExchange(d, e, n | 0, r | 0)),
									ring_create: () => 0,
									ring_write: (e, t, n, r, i) => {
										if (t >>>= 0, n >>>= 0, r = _(t, n), e = r === null ? 0 : S(e, 1), e === 0) return 0;
										if (i !== 0) return C(), k();
										i = 0, y(e + 4);
										try {
											let a = f[e + 8 >>> 2];
											if (4 + n > a) return 2;
											let o = f[e + 20 >>> 2];
											if (o + 4 + n > a) return 0;
											let s = f[e + 16 >>> 2];
											O[0] = n, T(e, (s + o) % a, D, 0, 4), T(e, (s + o + 4) % a, r, t, n), f[e + 20 >>> 2] = o + 4 + n, i = f[e + 24 >>> 2];
										} finally {
											b(e + 4), C();
										}
										return w(i), 1;
									},
									ring_read: (e, t, n) => {
										t >>>= 0, n >>>= 0;
										let r = _(t, n);
										return r === null ? 0 : A(e, r, t, n);
									},
									ring_drop: (e, t) => A(e, null, 0, t >>> 0),
									ring_used: (e) => {
										if (e = S(e, 1), e === 0) return 0;
										y(e + 4);
										let t = f[e + 20 >>> 2];
										return b(e + 4), C(), t;
									},
									ring_signal: (e, t) => (e = S(e, 1), e === 0 ? 0 : (t = f[e + (t === 0 ? 24 : 28) >>> 2], C(), t)),
									snapshot_create: () => 0,
									snapshot_publish: (e, t, n, r, i) => {
										if (t >>>= 0, n >>>= 0, r = _(t, n), e = r === null ? 0 : S(e, 2), e === 0) return 0;
										try {
											let o = f[e + 8 >>> 2];
											if (i !== 0) return k();
											if (n > o) return 0;
											y(e + 4);
											try {
												i = e + 16 >>> 2;
												var a = Atomics.load(f, i);
												let s = e + 40 >>> 2;
												if ((a === 0 ? 0 : Atomics.load(f, s + a - 1)) & 2147483648) return k();
												a %= 2;
												let c = (e + 32 >>> 2) + a, l = Atomics.load(f, c) | 1;
												Atomics.store(f, c, l), Atomics.load(f, c), v(u, e + 48 + a * o, r, t, n), Atomics.store(f, s + a, n), Atomics.store(f, c, l + 1), Atomics.store(f, i, a + 1), Atomics.add(f, e + 24 >>> 2, 1) === 4294967295 && Atomics.add(f, e + 28 >>> 2, 1);
											} finally {
												b(e + 4);
											}
											return 1;
										} finally {
											C();
										}
									},
									snapshot_read: (e, t, n) => {
										t >>>= 0, n >>>= 0;
										let r = _(t, n);
										if (e = r === null ? 0 : S(e, 2), e === 0) return 0;
										try {
											for (;;) {
												let a = Atomics.load(f, e + 16 >>> 2);
												if (a === 0) return 0;
												var i = a - 1;
												let o = (e + 32 >>> 2) + i, s = Atomics.load(f, o);
												if (s & 1) continue;
												let c = Atomics.load(f, (e + 40 >>> 2) + i), l = f[e + 8 >>> 2];
												i = e + 48 + i * l;
												let d = !!(c & 2147483648), p = Math.min(c, l);
												if (!d && t !== 0 && p <= n && v(r, t, u, i, p), Atomics.compareExchange(f, o, s, s) === s) return d ? k() : p + 1;
											}
										} finally {
											C();
										}
									},
									snapshot_seq: (e) => (e = S(e, 2), e === 0 ? 0 : (e = 4294967296 * Atomics.load(f, e + 28 >>> 2) + Atomics.load(f, e + 24 >>> 2), C(), e)),
									signal_create: () => 0,
									signal_notify: (e) => w(e),
									signal_seq: (e) => (e = S(e, 3), e === 0 ? 0 : (e = 4294967296 * Atomics.load(f, e + 28 >>> 2) + Atomics.load(f, e + 24 >>> 2), C(), e)),
									blob_create: () => 0,
									blob_size: (e) => (e = S(e, 4), e === 0 ? 0 : (e = f[e + 8 >>> 2], C(), e)),
									blob_read: (e, t, n, r) => {
										t >>>= 0, n >>>= 0, r >>>= 0;
										let i = _(n, r);
										if (e = i === null ? 0 : S(e, 4), e === 0) return 0;
										let a = f[e + 8 >>> 2];
										return r = t < a ? Math.min(r, a - t) : 0, v(i, n, u, e + 16 + t, r), C(), r;
									},
									retain: () => 0,
									release: () => {}
								};
							}
							function l(e, t, n) {
								let r = Atomics.load(n, 2);
								2 > r || (e = new Int32Array(e()), n = Atomics.load(n, 3), n !== 0 && Atomics.compareExchange(e, n >>> 2, r, 0), 34 > r && Atomics.store(e, ((t >>> 0) + 16 >>> 2) + r - 2, 0));
							}
							function u(e) {
								return String(e?.message ?? e);
							}
							function d(e, t, n = /* @__PURE__ */ new Map()) {
								let r = (t) => {
									let n = e().buffer;
									return o(n, t, a(n, t));
								}, i = {};
								for (var s of M) i[s] = (e) => t(r(e));
								return s = (e) => (i) => {
									i = r(i);
									let a = n.get(i);
									a === void 0 ? t(`Timer '${i}' does not exist`) : (e && n.delete(i), t(`${i}: ${(I() - a).toFixed(3)}ms`));
								}, i["console.time"] = (e) => n.set(r(e), I()), i["console.timeLog"] = s(!1), i["console.timeEnd"] = s(!0), i;
							}
							function f(e) {
								let t = null, n = null, r = (e) => n ?? u(e), i = {
									env: d(() => t, e.log, e.Oa),
									rive_shared_v1: e.fb(() => t),
									rive_rt_v1: { now: e.now ?? I },
									rive_lane_v1: {
										error: (r, i) => {
											n = o(t.buffer, r, i), e.Jc?.(n);
										},
										fuel_check: e.Va ?? ne
									}
								};
								e.bb !== void 0 && (i[e.bb] = e.xb(() => t));
								try {
									let n = new WebAssembly.Instance(e.module, i).exports;
									return t = n.memory, {
										exports: n,
										memory: t,
										Ua: r
									};
								} catch (e) {
									return { error: n ?? u(e) };
								}
							}
							function p(e, t, n = !1) {
								try {
									let r = e.exports;
									r[n ? "__riveLaneReset" : "__riveLiftedStart"]?.();
									let i = t.input, a = r.__rive_lane_alloc(i.length) >>> 0;
									new Uint8Array(e.memory.buffer, a, i.length).set(i);
									let o = r[t.prefix + t.Ta](a, i.length, ...t.Xb ?? []);
									return t.ea && r.__rive_lane_free(a), { result: o };
								} catch (t) {
									return { error: e.Ua(t) };
								}
							}
							function m(e) {
								let t = f(e);
								return e = t.error === void 0 ? p(t, e) : t, e.error === void 0 ? {
									...t,
									result: e.result
								} : e;
							}
							function h(e, t, n, r, i, a) {
								let o = null, s = (e) => {
									o ??= e;
								};
								var c = I() + 1e3, l = "processor init overran its budget";
								let u = m({
									module: e,
									fb: (e) => i(e, s),
									log: a,
									Va: () => {
										if (I() > c) throw l;
									},
									prefix: te.processor,
									Ta: t,
									input: n,
									Xb: [
										r.sampleRate,
										r.Hc,
										r.channels
									],
									ea: !0
								});
								if (u.error !== void 0 || o !== null) return { error: u.error ?? o };
								c = Infinity, l = "processor overran its block budget";
								let d = u.exports, f = u.memory, p = null;
								return { pa: { Tc(e, t, n, i = 0) {
									0 < i && (c = I() + i);
									try {
										let i = d.__rive_processor_process(e, t) >>> 0;
										if (o !== null) return o;
										let a = e * r.channels;
										return (p === null || p.buffer !== f.buffer || p.byteOffset !== i || p.length !== a) && (p = new Float32Array(f.buffer, i, a)), n(p), d.__riveFrameMinor?.(), null;
									} catch (e) {
										return u.Ua(e);
									} finally {
										c = Infinity;
									}
								} } };
							}
							function g(e, t) {
								t = performance.now() + t;
								for (let n = 1;; n++) {
									if (e()) return !0;
									if (!(n & 63) && performance.now() >= t) return !1;
								}
							}
							function _() {
								let e = new MessageChannel();
								return new Promise((t) => {
									e.port1.onmessage = () => {
										e.port1.close(), t();
									}, e.port2.postMessage(0);
								});
							}
							function v(e, t, n, r) {
								let i = {}, a = {
									rive_rt_v1: {
										now: () => {
											if (n.view !== null && Atomics.load(n.view, n.stop) !== 0) throw Error("stopped by another part");
											return performance.now() + r;
										},
										budget_exceeded: (e) => {
											throw n.ya = e, Error("execution exceeded timeout");
										},
										error: (e, t) => {
											n.aa = [e, t];
										},
										debug_enter: () => {},
										debug_line: () => 0,
										debug_leave: () => {}
									},
									rive_parallel_v1: { waiting: () => {} }
								};
								for (let n of WebAssembly.Module.imports(e)) {
									let r, o;
									e = (r = i)[o = n.module] ?? (r[o] = {}), n.kind === "memory" ? e[n.name] = t : n.kind === "function" && (e[n.name] = a[n.module]?.[n.name] ?? (() => {
										throw Error(`parallel code called the host through ${n.module}.${n.name}`);
									}));
								}
								return i;
							}
							function y() {
								function e(e, t, n) {
									Atomics.compareExchange(i, 48, -1, e) === -1 && (e = t.state, e.aa === null ? 0 <= e.ya ? (i[49] = 3, i[52] = e.ya) : (i[49] = 1, n = new TextEncoder().encode(String(n?.message ?? n)).subarray(0, 512), new Uint8Array(i.buffer, 4544, n.length).set(n), i[53] = n.length) : (i[49] = 2, i[50] = e.aa[0], i[51] = e.aa[1]), Atomics.store(t.view, t.state.stop, 1));
								}
								function t(t) {
									var n = 128 + 16 * a;
									if (Atomics.compareExchange(i, n + 1, t, 0) !== t) return !1;
									t = i[n + 2], n = i[32];
									let o = r.get(i[33]);
									if (o === void 0) return !0;
									var s = o.memory.buffer;
									o.buffer !== s && (o.buffer = s, o.view = new Int32Array(s)), s = o.view;
									var c = i[34] >>> 0;
									let l = o.state;
									l.aa = null, l.ya = -1, l.view = s, l.stop = c + 640 >>> 2;
									var u = o.exports;
									o.Ib !== 0 && (u.__riveCallSpill.value = o.Ib + 65520);
									try {
										u.__riveLoadGlobals(i[35]);
									} catch (n) {
										return e(t, o, n), !0;
									}
									let d = s[c + 12 >>> 2], f = s[c >>> 2], p = s[c + 4 >>> 2];
									c = s[c + 8 >>> 2] >>> 2, u = u.__riveParallelCall;
									for (let r = t; r < d && Atomics.load(s, l.stop) === 0; r += n) try {
										u(f, s[c + r], p);
									} catch (n) {
										e(t, o, n);
										break;
									}
									return !0;
								}
								async function n() {
									if (String(a) !== globalThis.process?.env?.RIVE_PARALLEL_DEAF_THREAD) {
										var e = Atomics.load(i, 0), n = () => Atomics.load(i, 0) !== e, r = globalThis.navigator?.userAgent ?? "";
										r = typeof Atomics.waitAsync == "function" && !(r.includes("AppleWebKit/") && !r.includes("Chrome/")) && globalThis.process?.env?.RIVE_PARALLEL_TIMED_WAITS === void 0, Atomics.store(i, 54, r ? 1 : 2);
										for (var o = performance.now();;) if (g(n, .05)) e = Atomics.load(i, 0), Atomics.store(i, 16 * a + 131, e), t(e) && Atomics.store(i, 128 + 16 * a, e);
										else {
											if (Atomics.add(i, 16, 1), r) {
												let t = Atomics.waitAsync(i, 0, e);
												t.async && await t.value;
											} else 2 <= performance.now() - o ? (await _(), o = performance.now()) : Atomics.wait(i, 0, e, 2);
											Atomics.sub(i, 16, 1);
										}
									}
								}
								let r = /* @__PURE__ */ new Map(), i = null, a = -1;
								return { message(e) {
									var t = e?.riveParallelTeam;
									if (t !== void 0) return i = new Int32Array(t.words), a = t.index, n(), !0;
									if (t = e?.riveParallelVm, t !== void 0) {
										e = new Int32Array(t.ready);
										let n = {
											aa: null,
											ya: -1,
											view: null,
											stop: 0
										};
										try {
											var o = new WebAssembly.Module(t.bytes);
											let i = t.memory, s = new WebAssembly.Instance(o, v(o, i, n, performance.timeOrigin - t.origin)).exports, c = s.__riveSpillFloor === void 0 ? 0 : t.spill;
											c !== 0 && (s.__riveSpillFloor.value = c), r.set(t.key, {
												exports: s,
												memory: i,
												state: n,
												Ib: c,
												buffer: null,
												view: null
											}), Atomics.store(e, a, 1);
										} catch {
											Atomics.store(e, a, 2);
										}
										return Atomics.notify(e, a), !0;
									}
									return o = e?.riveParallelDrop, o !== void 0 && (r.delete(o), !0);
								} };
							}
							function b(e) {
								function t(t) {
									for (a ??= {
										P: new Int32Array(new SharedArrayBuffer(5056)),
										ja: [],
										$a: []
									}; a.ja.length + 1 < Math.min(t, 64);) {
										let t = a.ja.length, n = e.start();
										if (n === null) break;
										n.postMessage({ riveParallelTeam: {
											words: a.P.buffer,
											index: t
										} }), a.ja.push(n);
									}
									return a;
								}
								function n(e) {
									let t = a.$a[e];
									return t === void 0 || Atomics.load(a.P, 16 * e + 131) !== t && (a.$a[e] = void 0, !0);
								}
								function r(e, t, n) {
									let r = a.P, i = 128 + 16 * t;
									Atomics.load(r, i + 1) === e.Ea && (Atomics.load(e.view, e.stop) === 0 && 1e3 <= n - e.$b && e.ma(Error("a thread of the page's team did not start its part of a parallel call within 1000 ms")), Atomics.load(e.view, e.stop) === 0 ? 1 <= n - e.Ob && (e.Ob = n, Atomics.notify(r, 0)) : Atomics.compareExchange(r, i + 1, e.Ea, 0) === e.Ea && (a.$a[t] = Atomics.load(r, i + 3), e.Jb.add(t)));
								}
								function i(e, t) {
									let n = a.P;
									for (let i of e.ub) {
										let a = 128 + 16 * i;
										for (let o = 1; Atomics.load(n, a) !== e.Ea; o++) if (!(o & 1023)) {
											if (e.Jb.has(i)) break;
											if (Atomics.load(e.view, e.stop) === 0 && t !== void 0) try {
												t();
											} catch (t) {
												e.ma(t);
											}
											r(e, i, performance.now());
										}
									}
								}
								let a = null, o = 1, s = null;
								return {
									Qj: function(n, r, i) {
										let a = n.instance.exports;
										if (1 >= i || !e.fc() || a.__riveParallelCall === void 0 || a.__riveSaveGlobals === void 0 || a.__riveRawAlloc === void 0 || ({ja: i} = t(i), i.length === 0)) return null;
										let s = (e) => {
											try {
												return a.__riveRawAlloc(e) >>> 0;
											} catch {
												return 0;
											}
										}, c = s(Math.max(a.__riveGlobalBytes.value, 4));
										if (c === 0) return null;
										let l = {
											key: o++,
											rb: c,
											ready: new Int32Array(new SharedArrayBuffer(4 * i.length)),
											eb: !1
										};
										return i.forEach((e, t) => {
											let i = s(65520);
											i === 0 ? Atomics.store(l.ready, t, 2) : e.postMessage({ riveParallelVm: {
												key: l.key,
												bytes: r,
												memory: n.memory,
												spill: i,
												ready: l.ready.buffer,
												origin: performance.timeOrigin
											} });
										}), l;
									},
									ready: async function(e) {
										let t = performance.now() + 1e4;
										for (; e.ready.some((e) => e === 0) && performance.now() < t;) await new Promise((e) => setTimeout(e, 1));
									},
									release: function(e) {
										for (let t of a?.ja ?? []) t.postMessage({ riveParallelDrop: e.key });
									},
									Pj: function(e, t, r, o) {
										if (t?.eb) throw Error("parallel calls cannot nest");
										if (r & 3) throw Error("parallel call control block is not aligned");
										var c = e.memory.buffer;
										e.Nb?.buffer !== c && (e.Nb = new Int32Array(c));
										let l = e.Nb;
										c = l[r + 12 >>> 2];
										let u = [];
										for (var d = 0; d < (t?.ready.length ?? 0) && u.length + 1 < c; d++) Atomics.load(t.ready, d) === 1 && n(d) && u.push(d);
										d = u.length + 1, l[r + 16 >>> 2] !== 0 && (c = d, l[r + 12 >>> 2] = c), l[r + 16 >>> 2] = +(d >= c);
										for (var f of [
											128,
											256,
											384,
											512,
											516,
											640,
											20
										]) Atomics.store(l, r + f >>> 2, 0);
										let p = e.instance.exports;
										e = p.__riveParallelCall, f = l[r + 0 >>> 2];
										let m = l[r + 4 >>> 2], h = l[r + 8 >>> 2] >>> 2;
										if (d === 1) {
											for (t = 0; t < c; t++) e(f, l[h + t], m);
											return 1;
										}
										let g = a.P;
										t.eb = !0;
										try {
											p.__riveSaveGlobals(t.rb), g[32] = d, g[33] = t.key, g[34] = r, g[35] = t.rb, Atomics.store(g, 48, -1);
											let n = Atomics.load(g, 0) + 1 | 0 || 1;
											u.forEach((e, t) => {
												e = 128 + 16 * e, g[e + 2] = t + 1, Atomics.store(g, e + 1, n);
											}), Atomics.store(g, 0, n), Atomics.load(g, 16) !== 0 && Atomics.notify(g, 0);
											let a = null;
											var _ = performance.now();
											for (s = {
												ub: u,
												Ea: n,
												view: l,
												stop: r + 640 >>> 2,
												$b: _,
												Ob: _,
												Jb: /* @__PURE__ */ new Set(),
												ma(e) {
													a ??= e, Atomics.compareExchange(g, 48, -1, 0) === -1 && Atomics.store(l, r + 640 >>> 2, 1);
												}
											}, _ = 0; _ < c && Atomics.load(l, r + 640 >>> 2) === 0; _ += d) try {
												e(f, l[h + _], m);
											} catch (e) {
												s.ma(e);
												break;
											}
											if (i(s, p.__riveFuelCheck), 0 < Atomics.load(g, 48)) {
												let e = g[49];
												if (e === 2) o.aa(g[50], g[51]);
												else if (e === 3 && (o.bc(g[52]), a !== null)) throw a;
												let t = new Uint8Array(g[53]);
												throw t.set(new Uint8Array(g.buffer, 4544, t.length)), Error(e === 1 ? new TextDecoder().decode(t) : "parallel part trapped");
											}
											if (a !== null) throw a;
											return d;
										} finally {
											t.eb = !1, s = null;
										}
									},
									waiting: function() {
										let e = s;
										if (e !== null) {
											var t = performance.now();
											for (let n of e.ub) r(e, n, t);
										}
									},
									message: y().message,
									Nc(e) {
										return e = Math.trunc(e ?? NaN), Number.isFinite(e) ? Math.min(Math.max(e, 1), 64) : Math.min(globalThis.navigator?.hardwareConcurrency ?? 1, 8);
									},
									state() {
										let e = a === null ? 0 : Atomics.load(a.P, 54);
										return {
											team: a?.ja.length ?? 0,
											waits: e === 1 ? "async" : e === 2 ? "timed" : "none"
										};
									}
								};
							}
							function x(e) {
								return e = [
									0,
									...e,
									11
								], new Uint8Array([
									0,
									97,
									115,
									109,
									1,
									0,
									0,
									0,
									1,
									5,
									1,
									96,
									0,
									1,
									123,
									3,
									2,
									1,
									0,
									10,
									e.length + 2,
									1,
									e.length,
									...e
								]);
							}
							function S(e) {
								let t = 0, n = 8, r = () => {
									let [t, r] = C(e, n);
									return n = r, t;
								}, i = () => {
									let r = e[n++];
									return r === 123 && (t = Math.max(t, 1)), r !== 99 && r !== 100;
								}, a = () => {
									var a = e[n++];
									if (a === 253) a = r(), t = Math.max(t, 256 <= a && 275 >= a ? 2 : 1), 11 >= a || a === 92 || a === 93 ? (r() & 64 && r(), r()) : a === 12 || a === 13 ? n += 16 : 21 <= a && 34 >= a ? n += 1 : 84 <= a && 91 >= a && (r() & 64 && r(), r(), n += 1);
									else if (a === 252) {
										if (a = r(), a >= ae.length) return !1;
										for (let e = 0; e < ae[a]; e++) r();
									} else if (a === 254) r() === 3 ? n += 1 : (r() & 64 && r(), r());
									else if (40 <= a && 62 >= a) r() & 64 && r(), r();
									else if (2 <= a && 4 >= a) e[n] === 123 && (t = Math.max(t, 1)), r();
									else if (a === 14) for (a = r(); 0 <= a && n < e.length; a--) r();
									else if (a === 28) {
										for (a = r(); 0 < a && n < e.length; a--) if (!i()) return !1;
									} else if (a === 17 || a === 19) r(), r();
									else if (a === 67 || a === 68) n += a === 67 ? 4 : 8;
									else if (32 <= a && 38 >= a || oe.includes(a)) r();
									else if (!(1 >= a || a === 5 || a === 11 || a === 15 || a === 26 || a === 27 || a === 209 || 69 <= a && 196 >= a)) return !1;
									return !0;
								};
								for (; n < e.length;) {
									var o = e[n];
									let [t, l] = C(e, n + 1);
									if (n = l, o === 1) for (o = r(); 0 < o && n < e.length; o--) {
										if (e[n++] !== 96) return -1;
										for (var s = 0; 2 > s; s++) for (var c = r(); 0 < c && n < e.length; c--) if (!i()) return -1;
									}
									else if (o === 10) for (o = r(); 0 < o && n < e.length; o--) {
										for (s = Math.min(r() + n, e.length), c = r(); 0 < c && n < s; c--) if (r(), !i()) return -1;
										for (; n < s;) if (!a()) return -1;
									}
									n = l + t;
								}
								return t;
							}
							function C(e, t) {
								let n = 0, r = 0, i;
								do
									i = e[t++], n |= (i & 127) << r, r += 7;
								while (i & 128);
								return [n >>> 0, t];
							}
							function w(e) {
								let t = [];
								do {
									let n = e & 127;
									e >>>= 7, t.push(e ? n | 128 : n);
								} while (e);
								return t;
							}
							function T(e) {
								let t = [];
								for (let n = 8; n < e.length;) {
									let [r, i] = C(e, n + 1);
									t.push({
										id: e[n],
										at: n,
										body: i,
										end: i + r
									}), n = i + r;
								}
								return t;
							}
							function E(e) {
								let t = [];
								for (let n of T(e)) {
									if (n.id !== 0) continue;
									let [r, i] = C(e, n.body);
									se.some((t) => t.length === r && t.every((t, n) => e[i + n] === t)) && t.push(e.subarray(i + r, n.end));
								}
								return t;
							}
							function D(e) {
								var t = T(e);
								let n = t.find((e) => e.id === 8);
								var r = t.filter((e) => e !== n);
								if (n === void 0 || !r.some((e) => e.id === 7)) return e;
								let i = C(e, n.body)[0];
								t = [e.subarray(0, 8)];
								for (var a of r) {
									if (r = e.subarray(a.body, a.end), a.id === 7) {
										let [t, n] = C(e, a.body);
										r = Array.from("__riveLiftedStart", (e) => e.charCodeAt(0)), r = Uint8Array.from([
											...w(t + 1),
											...e.subarray(n, a.end),
											...w(r.length),
											...r,
											0,
											...w(i)
										]);
									}
									t.push(Uint8Array.from([a.id, ...w(r.length)]), r);
								}
								e = new Uint8Array(t.reduce((e, t) => e + t.length, 0)), a = 0;
								for (let n of t) e.set(n, a), a += n.length;
								return e;
							}
							function O(e) {
								var t = T(e), n = t.find((e) => e.id === 5);
								let r = t.find((e) => e.id === 2);
								if (n === void 0 || r === void 0) return {
									M: e,
									memory: null
								};
								let [i, a] = C(e, n.body);
								var o = e[a++];
								if (i !== 1 || !(o & 2)) return {
									M: e,
									memory: null
								};
								let [s, c] = C(e, a);
								var l = o & 1 ? C(e, c)[0] : 65536, u = typeof SharedArrayBuffer == "function" && !1 !== globalThis.crossOriginIsolated, d = l;
								if (o = null, u) for (d = Math.min(l, 32768);;) try {
									o = new WebAssembly.Memory({
										initial: s,
										maximum: d,
										shared: u
									});
									break;
								} catch (e) {
									if (!(e instanceof RangeError) || d <= s) throw e;
									d = Math.max(s, d >>> 1);
								}
								else o = new WebAssembly.Memory({
									initial: s,
									maximum: d
								});
								l = (e) => [...w(e.length), ...Array.from(e, (e) => e.charCodeAt(0))], d = [
									...l(ce[0]),
									...l(ce[1]),
									2,
									u ? 3 : 1,
									...w(s),
									...w(d)
								];
								let [f, p] = C(e, r.body);
								u = [e.subarray(0, 8)];
								for (let i of t) i !== n && (t = e.subarray(i.body, i.end), i === r && (t = Uint8Array.from([
									...w(f + 1),
									...e.subarray(p, i.end),
									...d
								])), u.push(Uint8Array.from([i.id, ...w(t.length)]), t));
								e = new Uint8Array(u.reduce((e, t) => e + t.length, 0)), n = 0;
								for (let t of u) e.set(t, n), n += t.length;
								return {
									M: e,
									memory: o
								};
							}
							function k(e) {
								var t = T(e);
								let n = t.find((e) => e.id === 11);
								if (n === void 0) return e;
								let [r, i] = C(e, n.body), a = [Uint8Array.from(w(r))];
								for (var o = 0; o < r; o++) {
									var s = void 0;
									if ([s, i] = C(e, i), s === 2 && (i = C(e, i)[1]), s !== 1) for (s = e[i++]; s !== 11; s = e[i++]) i = C(e, i)[1];
									let [t, n] = C(e, i);
									a.push(Uint8Array.from([1, ...w(t)]), e.subarray(n, n + t)), i = n + t;
								}
								o = [e.subarray(0, 8)];
								for (let r of t) t = r === n ? A(a) : e.subarray(r.body, r.end), o.push(Uint8Array.from([r.id, ...w(t.length)]), t);
								return A(o);
							}
							function A(e) {
								let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)), n = 0;
								for (let r of e) t.set(r, n), n += r.length;
								return t;
							}
							function j(e, t, n, r) {
								switch (r) {
									case 0: return e();
									case 1: return e(t[n]);
									case 2: return e(t[n], t[n + 1]);
									case 3: return e(t[n], t[n + 1], t[n + 2]);
									case 4: return e(t[n], t[n + 1], t[n + 2], t[n + 3]);
									case 5: return e(t[n], t[n + 1], t[n + 2], t[n + 3], t[n + 4]);
									case 6: return e(t[n], t[n + 1], t[n + 2], t[n + 3], t[n + 4], t[n + 5]);
									case 7: return e(t[n], t[n + 1], t[n + 2], t[n + 3], t[n + 4], t[n + 5], t[n + 6]);
									case 8: return e(t[n], t[n + 1], t[n + 2], t[n + 3], t[n + 4], t[n + 5], t[n + 6], t[n + 7]);
									default: return e(...t.subarray(n, n + r));
								}
							}
							let M = [
								"console.log",
								"console.debug",
								"console.info",
								"console.warn",
								"console.error"
							], N = [
								[
									"rive_rt_v1",
									"now",
									["job", "worker"],
									null
								],
								[
									"rive_lanes_v1",
									"wait_within",
									[],
									"blocks on a signal, which only the main lane may; a worker awaits Signal.next or Port.receive instead"
								],
								[
									"rive_shared_v1",
									"region_lock",
									["job", "worker"],
									"locks a shared region, which the audio thread may not wait on; share through atomics, rings and snapshots instead"
								],
								[
									"rive_shared_v1",
									"read_done",
									[],
									null
								],
								[
									"rive_shared_v1",
									null,
									[
										"job",
										"worker",
										"processor"
									],
									null
								],
								[
									"rive_lane_v1",
									null,
									[
										"job",
										"worker",
										"processor"
									],
									null
								],
								[
									"rive_job_v1",
									null,
									["job"],
									null
								],
								[
									"rive_worker_v1",
									null,
									["worker"],
									null
								],
								[
									"env",
									"console.log",
									[
										"job",
										"worker",
										"processor"
									],
									null
								],
								[
									"env",
									"console.debug",
									[
										"job",
										"worker",
										"processor"
									],
									null
								],
								[
									"env",
									"console.info",
									[
										"job",
										"worker",
										"processor"
									],
									null
								],
								[
									"env",
									"console.warn",
									[
										"job",
										"worker",
										"processor"
									],
									null
								],
								[
									"env",
									"console.error",
									[
										"job",
										"worker",
										"processor"
									],
									null
								],
								[
									"env",
									"console.time",
									["job", "worker"],
									null
								],
								[
									"env",
									"console.timeLog",
									["job", "worker"],
									null
								],
								[
									"env",
									"console.timeEnd",
									["job", "worker"],
									null
								]
							], ee = [
								["rive.jobs", "job"],
								["rive.workers", "worker"],
								["rive.audio", "processor"]
							], te = {
								job: "__rive_job_",
								worker: "__rive_worker_",
								processor: "__rive_processor_"
							}, P = {
								starting: 0,
								running: 1,
								done: 2,
								failed: 3,
								stopped: 4
							}, F = /* @__PURE__ */ new Map(), I = globalThis.performance === void 0 ? Date.now : () => globalThis.performance.now(), ne = () => {}, L = [
								253,
								12,
								...Array(16).fill(0)
							], re = x([...L]), ie = x([
								...L,
								...L,
								253,
								128,
								2
							]), ae = [
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								2,
								1,
								2,
								1,
								2,
								1,
								2,
								1,
								1,
								1
							], oe = [
								12,
								13,
								16,
								18,
								63,
								64,
								65,
								66,
								208,
								210
							], se = ee.map(([e]) => Array.from(e, (e) => e.charCodeAt(0))), ce = ["rive_parallel_v1", "memory"];
							(function(r) {
								function i(e, n = null) {
									return {
										ec: t(U.Ac, e, n),
										X: U.X,
										ra: U.ra,
										Ma: U.Ma,
										qa: U.qa,
										ab: U.ab,
										ea: U.ea,
										Da: K
									};
								}
								function a(e) {
									return q ??= {
										Hb: me(re),
										Eb: me(ie)
									}, e = [e, ...E(e)], q.Hb && q.Eb || e.every((e) => me(e)) ? null : (e = Math.max(...e.map(S)), !q.Hb && 0 < e ? "this browser lacks WebAssembly SIMD, so this file's scripts are off; bake with wasmSimd: off to support it" : q.Eb || e !== 2 ? null : "this browser lacks WebAssembly relaxed SIMD, so this file's scripts are off; bake with wasmSimd: on to support it");
								}
								function o(e) {
									let { M: t, memory: n } = O(e.M);
									return e.Ka = n, t;
								}
								function s(e, t) {
									t !== null && e.instance !== null && (e.fa = J.Qj(e, t, e.zb()));
								}
								function d(t, r) {
									let a = e(i(t.I), () => {
										if (t.memory === null) throw Error("script passed memory to the host while its module was still starting");
										return t.memory;
									});
									if (t.Ka !== null) {
										let e, n = a[e = ce[0]] ?? (a[e] = {});
										n[ce[1]] = t.Ka;
										let r = n.size, i = ge(t);
										n.size = () => i && 1 < r() ? J.Nc(je.parallelParts) : 1;
										let o = a.rive_rt_v1, s = o.budget_exceeded;
										o.budget_exceeded = (e) => (t.mb = !0, s(e));
										let c = {
											aa: (e, t) => o.error(e, t),
											bc: (e) => t.mb ? void 0 : s(e)
										};
										n.run = (e) => (t.mb = !1, J.Pj(t, t.fa, e >>> 0, c)), n.waiting = J.waiting, t.zb = n.size;
									}
									for (let e of WebAssembly.Module.imports(r)) if (e.kind === "function") {
										let t, r, i, o;
										(i = (t = a)[r = e.module] ?? (t[r] = {}))[o = e.name] ?? (i[o] = n(e.module, e.name));
									}
									return a;
								}
								function g(e, t) {
									let n = U.ra();
									for (let { name: n } of WebAssembly.Module.exports(t)) {
										if (!n.startsWith("__rive")) continue;
										t = 3 * n.length + 1;
										let r = U.Ma(t);
										U.Pb(n, r, t), U.exports._rive_web_vm_module_export(e.I.g, r);
									}
									if (U.qa(n), e = U.exports._rive_web_vm_start_refusal(e.I.g), e !== 0) throw Error(U.ua(e));
								}
								function _(e, t) {
									e.memory = t.exports.memory, e.M = null, e.dc = Object.keys(t.exports).filter((e) => e.startsWith("__riveCall")).map((e) => t.exports[e]).filter((e) => {
										if (!(e instanceof WebAssembly.Global)) return !1;
										try {
											return e.value = e.value, !0;
										} catch {
											return !1;
										}
									}), e.cc = [];
									let n = U.exports._rive_web_vm_start_fuel(e.I.g), r = t.exports.__riveFuelArm, i = t.exports.__riveFuelEnd, a = 0 < n && r !== void 0 && i !== void 0, o = U.exports._rive_web_vm_booting;
									o(e.I.g);
									let s = U.ra();
									e.instance = t;
									try {
										a && r(n), t.exports.__riveLiftedStart?.(), a && i();
									} catch (t) {
										throw e.instance = null, U.qa(s), e.I.j = null, t;
									} finally {
										o(0);
									}
								}
								async function v(e) {
									try {
										let r = D(o(e)), i = await WebAssembly.compile(r), a = ge(e) && ye !== null ? k(r) : null;
										if (e.I.g !== 0) {
											g(e, i);
											var t = T(i), n = await WebAssembly.instantiate(i, d(e, i));
											await t, e.I.g !== 0 && (_(e, n), s(e, a), e.fa !== null && await J.ready(e.fa));
										}
									} catch (t) {
										e.error = u(t);
									}
								}
								function y(e, t) {
									if (e.length !== t.length) return !1;
									for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
									return !0;
								}
								function x(e, t, n) {
									return e = {
										M: e,
										module: t,
										error: n,
										na: /* @__PURE__ */ new Set(),
										Xa: null
									}, _e.push(e), 8 < _e.length && _e.shift(), e;
								}
								function C(e, t) {
									if (!be(e)) {
										x(e, t, null);
										for (let n of ve()) n.postMessage({ riveLane: {
											bytes: e,
											module: t
										} });
									}
								}
								function w(e, t) {
									for (let i of WebAssembly.Module.imports(e)) {
										a: {
											e = t;
											var n = i.module, r = i.name;
											for (let [t, i, a, o] of N) if (n === t && (i === null || r === i)) {
												e = a.includes(e) ? null : o ?? "";
												break a;
											}
											e = "";
										}
										if (e !== null) throw Error("lane module imports " + i.module + "." + i.name + ", which it cannot reach");
									}
								}
								function T(e, t = !1) {
									let n = [];
									for (let [r, i] of ee) for (let a of WebAssembly.Module.customSections(e, r)) {
										let e = D(new Uint8Array(a));
										if (be(e)) continue;
										let r = (t) => {
											w(t, i), C(e, t);
										};
										if (t) try {
											r(new WebAssembly.Module(e));
										} catch {}
										else n.push(WebAssembly.compile(e).then(r).catch(() => {}));
									}
									return Promise.all(n);
								}
								function A(e, t, n) {
									let r = _e.find((t) => t.na.has(e));
									if (r === void 0) {
										let i = t();
										if (r = _e.find((e) => y(e.M, i)), r === void 0) {
											r = x(i, null, null);
											try {
												let e = new WebAssembly.Module(i);
												w(e, n), r.module = e;
											} catch (e) {
												r.error = u(e);
											}
										}
										r.na.add(e), 8 < r.na.size && r.na.delete(r.na.values().next().value);
									}
									return r;
								}
								function M(t = !1, n = 0) {
									return (r, a) => t ? c(() => U.X().buffer, U.exports._rive_shared_table(), n, r, null, a) : e(i({
										g: 1,
										j: null,
										h: !1,
										Da: K
									}, "rive_shared_v1"), r, "rive_shared_v1").rive_shared_v1;
								}
								function F(e) {
									if (e = U.Gc(e), e !== null) throw e;
								}
								function ne(e) {
									let t = e.Xa;
									if (e.Xa = null, t !== null) return t.Oa.clear(), t;
									let n = {
										pa: 0,
										nb: null,
										Fb: 0,
										Oa: /* @__PURE__ */ new Map(),
										reset: !1
									};
									return Object.assign(n, f({
										module: e.module,
										bb: "rive_job_v1",
										xb: () => ({
											cancelled: () => n.nb(),
											reuse_pages: () => n.Fb
										}),
										fb: M(),
										log: (e) => U.Za(n.pa, e),
										Oa: n.Oa,
										now: W,
										Va: () => F(n.pa)
									}));
								}
								function L() {
									var e = je.audioWorkletUrl;
									return typeof e == "string" ? e : (e = r.riveAudioWorkletSource, Te() || typeof e != "string" ? null : (Ee ??= URL.createObjectURL(new Blob([e], { type: "text/javascript" })), Ee));
								}
								function ae() {
									let e = [], t = null;
									return {
										Z(n) {
											t === null ? e.push(n) : t(n);
										},
										open(n) {
											t = n;
											for (let n of e) t(n);
											e = [];
										},
										ma(t) {
											for (let n of e) H({
												id: n.id,
												kind: "failed",
												text: t
											});
											e = [];
										}
									};
								}
								function oe(e) {
									return {
										numberOfInputs: 0,
										numberOfOutputs: 1,
										outputChannelCount: [2],
										processorOptions: {
											memory: U.memory(),
											table: U.exports._rive_shared_table(),
											counter: e.buffer
										}
									};
								}
								function se(e) {
									for (let t of [...Z.Y.keys()]) H({
										id: t,
										kind: "failed",
										text: e
									});
								}
								function le(e, t, n, r, i, a = i) {
									let o = !1, s = -1, c = 0, l = setInterval(() => {
										if (e.state === "closed") clearInterval(l), a("script audio context closed");
										else {
											var u = Atomics.load(t, 0), d = (0 < Z.Y.size || 0 < c) && e.state === "running";
											c = u === s && d ? c + 1 : 0, s = u, u = o ? Atomics.load(t, 1) === 0 ? r : 30 : n, c >= u && (clearInterval(l), i(o ? "processor stalled the audio thread" : "script audio worklet never answered"));
										}
									}, 50);
									return {
										ready() {
											o = !0, c = 0;
										},
										stop: () => clearInterval(l)
									};
								}
								function ue(e, t, n = !0) {
									e.Cb.ma(t), Z.output === e && (Z.output = null), n && je.audioContext === void 0 && e.context.close?.();
								}
								function de(e) {
									let t = ke.get(e);
									return t === void 0 && (t = {
										P: new Int32Array(new SharedArrayBuffer(16)),
										gb: !1
									}, ke.set(e, t), e.addEventListener("statechange", () => {
										e.state !== "closed" || t.gb || De(t.P);
									})), t;
								}
								function fe() {
									let e = globalThis.navigator?.audioSession;
									e?.type === "auto" && (e.type = "playback");
									let t = new AudioContext(), n = [
										"pointerdown",
										"pointerup",
										"keydown",
										"touchend"
									], r = () => t.resume(), i = setTimeout(() => console.warn("script audio waits for a click, tap or key press on the page"), 1e3), a = () => {
										if (t.state === "running" || t.state === "closed") {
											clearTimeout(i), t.removeEventListener("statechange", a);
											for (let e of n) globalThis.removeEventListener(e, r, { capture: !0 });
										}
									};
									for (let e of n) globalThis.addEventListener(e, r, { capture: !0 });
									return t.addEventListener("statechange", a), a(), t;
								}
								function R() {
									let e = je.audioContext ?? fe(), t = ae(), n = {
										context: e,
										Z: t.Z,
										ha: /* @__PURE__ */ new Set(),
										Cb: t
									}, r = de(e), i = null, a = (e) => {
										Z.output === n && (o.stop(), se(e), ue(n, e, !1));
									}, o = le(e, r.P, Infinity, 20, (e) => {
										r.gb = !0, i.port.onmessage = null, i.port.postMessage({ kind: "end" }), i.disconnect(), se(e), ue(n, e, !1);
									}, a);
									return e.addEventListener("statechange", () => {
										e.state === "closed" && a("script audio context closed");
									}), e.audioWorklet.addModule(L()).then(() => {
										i = new AudioWorkletNode(e, "rive-processors", oe(r.P)), i.port.onmessage = (e) => H(e.data), i.connect(e.destination), o.ready(), t.open((e) => i.port.postMessage(e));
									}).catch((e) => {
										o.stop(), ue(n, Oe(e));
									}), n;
								}
								function z() {
									let e = je.audioWorkletUrl, t = je.audioContext;
									t === void 0 && (globalThis.nrdp.audio.output.open(), t = new AudioContext()), t.forceStart?.();
									let n = ae(), r = {
										context: t,
										Z: n.Z,
										ha: /* @__PURE__ */ new Set(),
										Cb: n
									}, i = new Int32Array(new SharedArrayBuffer(16)), a = null, o = !1, s = !1, c = (e) => {
										if (!s) {
											if (s = !0, l.stop(), a?.terminate(), o) {
												for (let e = I() + 200; I() < e;);
												De(i), se(e);
											}
											ue(r, e);
										}
									}, l = le(t, i, 40, 2, c), u = (e) => (...t) => {
										try {
											e(...t);
										} catch (e) {
											c(Oe(e));
										}
									}, d = u(() => {
										new AudioWorkletNode(t, "rive-processors", oe(i)).connect(t.destination), o = !0, l.ready(), n.open((e) => a.send(e));
									});
									return fetch(e).then((t) => {
										if (!t.ok) throw Error(e + " answered HTTP " + t.status);
										return t.text();
									}).then((n) => {
										if (!s) {
											var r = t.audioWorklet;
											r.active = !0, r.init(u(() => {
												s || (a = globalThis.nrdp.thread.start({
													url: e,
													source: n,
													audio: t
												}), a.addEventListener("raw-message", (e) => e.kind === "ready" ? d() : H(e)));
											}));
										}
									}).catch((e) => c(Oe(e))), r;
								}
								function pe() {
									let e;
									return (e = Z).output ?? (e.output = Te() ? z() : R()), Z.output;
								}
								function B(e) {
									let t = new Set([...Z.Y.values()].map((e) => e.vb));
									for (let n of e.ha) {
										if (8 >= e.ha.size) break;
										t.has(n) || (e.ha.delete(n), e.Z({
											kind: "forget",
											moduleId: n
										}));
									}
								}
								function V(e, t, n) {
									let r = t.ic;
									e.ha.add(t.vb), e.Z({
										...t.start,
										bytes: n ? r.M : null
									});
								}
								function H(e) {
									let t = Z.Y.get(e.id);
									t !== void 0 && (e.kind === "resend" ? Z.output !== null && V(Z.output, t, !0) : U.Qc(t.Kc, Ae[e.kind], e.text ?? ""));
								}
								let U = null, W = I, G = /* @__PURE__ */ new Map(), K = {
									i: !1,
									l: 0,
									Ba: 0,
									za: 0,
									Aa: 0,
									Ca: 0
								}, me = r.riveScriptingValidate ?? ((e) => WebAssembly.validate(e)), he = !0 === r.riveScriptingLaneTwin, q = null, ge = (e) => typeof SharedArrayBuffer == "function" && e.Ka?.buffer instanceof SharedArrayBuffer, _e = [], ve = () => [], ye = null, J = b({
									fc: () => ye !== null,
									start() {
										let e = U.exports._rive_web_parallel_team_thread();
										return e === 0 ? null : ye(e) ?? null;
									}
								}), be = (e) => _e.some((t) => y(t.M, e)), Y = (e) => {
									J.message(e) || (e = e?.riveLane, e !== void 0 && C(e.bytes, e.module));
								}, xe = globalThis.process?.$j?.("worker_threads");
								!1 === xe?.ak ? xe.ek.i("message", Y) : globalThis.WorkerGlobalScope !== void 0 && globalThis.addEventListener("message", (e) => Y(e.data));
								let X = /* @__PURE__ */ new Map(), Se = 1, Ce = /* @__PURE__ */ new Map(), we = 1, Z = {
									output: null,
									Y: /* @__PURE__ */ new Map(),
									next: 1
								}, Te = () => globalThis.nrdp?.audio?.output !== void 0, Ee = null, De = (e) => l(() => U.memory().buffer, U.exports._rive_shared_table(), e), Oe = (e) => "script audio has no worklet: " + u(e), ke = /* @__PURE__ */ new WeakMap(), Ae = {
									running: P.running,
									failed: P.failed,
									log: 4294967295
								}, je = {
									Zb(e) {
										if (U === null) {
											U = e;
											var t = performance.timeOrigin - U.Lc || 0;
											W = () => performance.now() + t;
										}
									},
									Yj(e, t) {
										ve = e, ye = t;
									},
									register(e, t) {
										t = t.slice(), G.set(e, {
											I: {
												g: e,
												j: null,
												h: !1,
												Da: K
											},
											M: t,
											instance: null,
											memory: null,
											Ka: null,
											zb: null,
											fa: null,
											$: null,
											error: a(t),
											names: /* @__PURE__ */ new Map()
										});
									},
									release(e) {
										let t = G.get(e);
										t && (t.I.g = 0, G.delete(e), t.fa !== null && J.release(t.fa));
									},
									dk() {
										return J.state();
									},
									Pc() {
										let e = [];
										for (let t of G.values()) if (t.instance === null && t.error === null) {
											let n;
											(n = t).$ ?? (n.$ = v(t)), e.push(t.$);
										}
										return Promise.all(e);
									},
									start(e) {
										if (e = G.get(e), !e) return "script module was never registered";
										if (e.instance === null && e.error === null) {
											if (e.$ !== null) return "script module is still being prepared";
											try {
												let t = D(o(e)), n = new WebAssembly.Module(t);
												g(e, n), T(n, !0), _(e, new WebAssembly.Instance(n, d(e, n))), s(e, ge(e) && ye !== null ? k(t) : null);
											} catch (t) {
												e.error = u(t);
											}
										}
										return e.error;
									},
									$(e) {
										return e = G.get(e), +(e?.instance === null && e.error === null && e.$ !== null);
									},
									zc(e, t) {
										return +(typeof G.get(e)?.instance?.exports[U.ua(t)] == "function");
									},
									call(e, t, n, r, i, a, o) {
										if (e = G.get(e), !e || e.instance === null) return 1;
										let s = e.names.get(t);
										if (s === void 0 && (s = e.instance.exports[U.ua(t)] ?? null, e.names.set(t, s)), typeof s != "function") return 1;
										t = e.dc;
										let c = e.cc, l = c.length;
										for (let e = 0; e < t.length; e++) c.push(t[e].value);
										try {
											let e = j(s, U.sb(), r >> 3, n);
											return U.sb()[i >> 3] = typeof e == "number" ? e : 0, 0;
										} catch (t) {
											return e.I.j = null, U.Pb(u(t), a, o), e.I.h ? 3 : 2;
										} finally {
											for (n = 0; n < t.length; n++) t[n].value = c[l + n];
											c.length = l;
										}
									},
									Rc(e, t) {
										(e = G.get(e)) && (e.I.j = U.ua(t));
									},
									read(e, t, n, r) {
										return e = G.get(e)?.memory, !e || t + r > e.buffer.byteLength ? 0 : (U.X().set(new Uint8Array(e.buffer, t, r), n), K.i && (K.Aa += r), 1);
									},
									write(e, t, n, r) {
										return e = G.get(e)?.memory, !e || t + r > e.buffer.byteLength ? 0 : (new Uint8Array(e.buffer, t, r).set(U.X().subarray(n, n + r)), K.i && (K.Ca += r), 1);
									},
									Wj(e, t) {
										return e = G.get(e)?.memory, !e || t >= e.buffer.byteLength ? -1 : (e = new Uint8Array(e.buffer).indexOf(0, t), 0 > e ? -1 : e - t);
									},
									Mc(e) {
										return (e = G.get(e)?.memory) ? e.buffer.byteLength / 65536 : 0;
									},
									sc() {
										let e = [];
										for (let t of G.keys()) {
											let n = U.exports._rive_web_vm_frame_boundary(t);
											n !== 0 && e.push(U.ua(n));
										}
										return e;
									},
									kc(e) {
										K.i = !!e, K.l = 0, K.Ba = 0, K.za = 0, K.Aa = 0, K.Ca = 0;
									},
									Bc() {
										return {
											hostCalls: K.l,
											bytesStaged: K.Ba,
											bytesCopiedOut: K.za,
											bytesRead: K.Aa,
											bytesWritten: K.Ca
										};
									},
									runJob: function(e, t, n, r, i, a, o) {
										if (t = A(t, n, "job"), t.error !== null) return {
											ok: !1,
											error: t.error
										};
										if (n = ne(t), n.error !== void 0) return {
											ok: !1,
											error: n.error
										};
										if (n.pa = e, n.nb = a, n.Fb = o, e = p(n, {
											prefix: te.job,
											Ta: r,
											input: i
										}, n.reset), e.error !== void 0) return {
											ok: !1,
											error: e.error
										};
										try {
											let r = n.memory.buffer, i = new Uint32Array(r, e.result >>> 0, 2), s = i[1] === 0 ? /* @__PURE__ */ new Uint8Array() : new Uint8Array(r, i[0], i[1]);
											return n.exports.__riveLaneReset !== void 0 && r.byteLength <= 65536 * o && !a() && (n.reset = !0, t.Xa = n), {
												ok: !0,
												output: s
											};
										} catch (e) {
											return {
												ok: !1,
												error: n.Ua(e)
											};
										}
									},
									workerStart: function(e, t, n, r, i, a) {
										return t = A(t, n, "worker"), t.error === null ? (r = m({
											module: t.module,
											bb: "rive_worker_v1",
											xb: (e) => ({
												finished: (t, n, r) => a.finished(t, new Uint8Array(e().buffer, n >>> 0, r >>> 0)),
												wait: a.wait,
												stopping: a.Vj
											}),
											Jc: (t) => U.Fc(e, t),
											fb: M(),
											log: (t) => U.Za(e, t),
											now: W,
											Va: () => F(e),
											prefix: te.worker,
											Ta: r,
											input: i,
											ea: !0
										}), r.error === void 0 ? (i = Se++, X.set(i, {
											wake: r.exports.__rive_worker_wake,
											hc: r.exports.__riveFrameMinor
										}), {
											ok: !0,
											id: i
										}) : {
											ok: !1,
											error: r.error
										}) : {
											ok: !1,
											error: t.error
										};
									},
									workerWake: function(e, t, n) {
										try {
											return X.get(e).wake(t, n), null;
										} catch (e) {
											return u(e);
										}
									},
									workerCollect: function(e) {
										try {
											return X.get(e)?.hc?.(), null;
										} catch (e) {
											return u(e);
										}
									},
									workerEnd: function(e) {
										X.delete(e);
									},
									processorStart: function(e, t, n, r, i, a, o) {
										return t = A(t, n, "processor"), t.error === null ? (r = h(t.module, r, i, a, M(he, o), (t) => U.Za(e, t)), r.error === void 0 ? (i = we++, Ce.set(i, r.pa), {
											ok: !0,
											id: i
										}) : {
											ok: !1,
											error: r.error
										}) : {
											ok: !1,
											error: t.error
										};
									},
									processorRender: function(e, t, n, r) {
										return Ce.get(e).Tc(t, n, r);
									},
									processorEnd: function(e) {
										Ce.delete(e);
									},
									audioRefusal: function() {
										if (!Te() && !0 !== globalThis.crossOriginIsolated) return "real time audio needs cross origin isolation";
										if (typeof SharedArrayBuffer > "u" || !(U.memory().buffer instanceof SharedArrayBuffer)) return "real time audio needs librive built with threads";
										if (L() === null) return "real time audio needs riveScripting.audioWorkletUrl";
										if (typeof AudioContext > "u") return "real time audio needs Web Audio";
										let e = je.audioContext;
										return e?.state === "closed" ? "real time audio cannot start on a closed AudioContext" : ke.get(e)?.gb ? "real time audio stalled the host's AudioContext; hand riveScripting a new one" : null;
									},
									audioSampleRate: () => pe().context.sampleRate,
									audioStart: function(e, t, n, r, i, a, o, s) {
										let c = A(t, n, "processor");
										if (c.error !== null) return {
											ok: !1,
											error: c.error
										};
										n = pe();
										let l = Z.next++;
										return e = {
											Kc: e,
											vb: t,
											ic: c,
											start: {
												kind: "start",
												id: l,
												moduleId: t,
												entry: r,
												input: i,
												format: {
													sampleRate: a.sampleRate,
													maxFrames: a.Hc,
													channels: a.channels
												},
												hardBlocks: o,
												sharedOwner: s
											}
										}, Z.Y.set(l, e), V(n, e, !n.ha.has(t)), B(n), {
											ok: !0,
											id: l
										};
									},
									audioStop: function(e) {
										Z.Y.delete(e), Z.output !== null && (Z.output.Z({
											kind: "stop",
											id: e
										}), B(Z.output));
									},
									audioState: () => ({
										context: Z.output?.context.state ?? "none",
										processors: Z.Y.size
									})
								};
								return je.prepare = je.Pc, je.frameBoundary = je.sc, je.countHostCalls = je.kc, je.hostCallCounts = je.Bc, r.riveScripting = je;
							})(r);
						})();
						let u = r.onRuntimeInitialized;
						r.onRuntimeInitialized = function() {
							function e(e) {
								this.G = e, this.Sb = e.getContext("2d"), this.kb = a, this.R = [], this.ka = 0, this.clear = function() {
									console.assert(this.ka == 0), this.R = [], l.delete(this);
								}, this.save = function() {
									++this.ka, this.R.push(a.save.bind(a));
								}, this.restore = function() {
									0 < this.ka && (this.R.push(a.restore.bind(a)), --this.ka);
								}, this.transform = function(e) {
									this.R.push(a.transform.bind(a, e));
								}, this.align = function(e, t, n, r, i = 1) {
									this.R.push(a.align.bind(a, e, t, n, r, i));
								}, this.flush = function() {
									console.assert(this.ka == 0), l.add(this), a.Tb || i();
								}, this.bindContext = function() {
									let e = this.kb;
									e && e.V && zt(e.V);
								}, this.delete = function() {};
							}
							function t(e, t = !1, n = !1) {
								var r = {
									alpha: !0,
									depth: t || n,
									stencil: t || n,
									antialias: t && !n,
									premultipliedAlpha: !0,
									preserveDrawingBuffer: 0,
									powerPreference: "high-performance",
									failIfMajorPerformanceCaveat: 0,
									enableExtensionsByDefault: !1,
									explicitSwapControl: 0,
									renderViaOffscreenBackBuffer: 0
								};
								if (t = e.getContext("webgl2", r), !t) return null;
								r = Rt(t, r), zt(r);
								let i = d(e.width, e.height);
								i.V = r, i.G = e, i.Ra = e.width, i.Qa = e.height, i.T = t, i.ac = function() {
									this.V && zt(this.V);
								};
								var a = i.delete;
								return i.delete = function() {
									this.ac(), a.call(this);
									var e = this.V;
									Bt === kt[e] && (Bt = null), typeof JSEvents == "object" && JSEvents.fk(kt[e].F.canvas), kt[e]?.F.canvas && (kt[e].F.canvas.Qb = void 0), this.V = this.G = this.Ra = this.Qa = this.T = kt[e] = null;
								}, n && i.setInkbleed(!0), i;
							}
							function n(e) {
								let t = e.T;
								e.delete(), (e = t.getExtension("WEBGL_lose_context")) && e.loseContext();
							}
							function i() {
								if (a) {
									var e = a.Vb, t = 0, n = 0, i = 0, o = Array(l.size), s = 0;
									for (var c of l) c.ca = Math.min(c.G.width, e), c.ba = Math.min(c.G.height, e), c.Pa = c.ba * c.ca, t = Math.max(t, c.ca), n = Math.max(n, c.ba), i += c.Pa, o[s++] = c;
									if (l.clear(), !(0 >= i)) {
										for (t = 1 << (0 >= t ? 0 : 32 - Math.clz32(t - 1)), n = 1 << (0 >= n ? 0 : 32 - Math.clz32(n - 1)); n * t < i;) t <= n ? t *= 2 : n *= 2;
										t = Math.min(t, e), n = Math.min(n, e), o.sort((e, t) => t.Pa - e.Pa), a.lb || (a.lb = new r.DynamicRectanizer(e), a.Rb = new r.Mat2D()), i = a.lb, s = a.Rb;
										for (var u = 0; u < o.length;) {
											for (i.reset(t, n), c = u; c < o.length; ++c) {
												var d = o[c], f = i.addRect(d.ca, d.ba);
												if (0 > f) {
													console.assert(c > u);
													break;
												}
												d.wa = f & 65535, d.xa = f >> 16;
											}
											for (d = m.push(i.drawWidth()), f = h.push(i.drawHeight()), console.assert(d >= i.drawWidth()), console.assert(f >= i.drawHeight()), console.assert(d <= e), console.assert(f <= e), a.G.width != d && (a.G.width = d), a.G.height != f && (a.G.height = f), a.clear(), d = u; d < c; ++d) {
												f = o[d], a.saveClipRect(f.wa, f.xa, f.wa + f.ca, f.xa + f.ba), s.xx = f.ca / f.G.width, s.yy = f.ba / f.G.height, s.xy = s.yx = 0, s.tx = f.wa, s.ty = f.xa, a.transform(s);
												for (let e of f.R) e();
												a.restoreClipRect(), f.R = [];
											}
											for (a.flush(); u < c; ++u) d = o[u], f = d.Sb, f.globalCompositeOperation = "copy", f.drawImage(a.G, d.wa, d.xa, d.ca, d.ba, 0, 0, d.G.width, d.G.height);
											u = c;
										}
									}
								}
							}
							u && u();
							let a = null, l = /* @__PURE__ */ new Set(), d = r.makeRenderer;
							r.makeRenderer = function(r, i, o) {
								if (o = !(!o || !o.inkbleed), !a) {
									function e(e) {
										var n = document.createElement("canvas");
										if (n.width = 1, n.height = 1, a = t(n, e), !a) return null;
										a.Tb = !!a.T.getExtension("WEBGL_shader_pixel_local_storage"), a.Vb = Math.min(a.T.getParameter(a.T.MAX_RENDERBUFFER_SIZE), a.T.getParameter(a.T.MAX_TEXTURE_SIZE)), e = a;
										a: if (n = a.T, n.getExtension("WEBGL_shader_pixel_local_storage")) n = !1;
										else {
											var r = n.getExtension("WEBGL_debug_renderer_info");
											if (r) {
												let e = n.getParameter(r.UNMASKED_RENDERER_WEBGL);
												if (n.getParameter(r.UNMASKED_VENDOR_WEBGL).includes("Google") && e.includes("ANGLE Metal Renderer")) {
													n = !1;
													break a;
												}
											}
											n = !0;
										}
										return e.jb = n, a;
									}
									if ((a = e(!0)) && !a.jb && (n(a), a = e(!1)), !a) throw "Unable to create WebGL context, your environment may not support WebGL. Try out @rive-app/canvas as an alternative.";
								}
								return i ? new e(r) : t(r, a.jb, o);
							};
							let f = r.Artboard.prototype.delete;
							r.Artboard.prototype.delete = function() {
								this.Yb = !0, f.call(this);
							};
							let p = r.Artboard.prototype.draw;
							r.Artboard.prototype.draw = function(e) {
								e.R ? e.R.push(() => {
									this.Yb || p.call(this, e.kb);
								}) : p.call(this, e);
							};
							let m = new s(), h = new s(), g = new o();
							r.requestAnimationFrame = g.requestAnimationFrame.bind(g), r.cancelAnimationFrame = g.cancelAnimationFrame.bind(g), r.enableFPSCounter = g.oc.bind(g);
							let _ = c(i);
							g.wb = _, r.resolveAnimationFrame = _;
							let v = r.load;
							r.load = function(e, t, n = !0, i = null) {
								let a = new r.FallbackFileAssetLoader();
								return t !== void 0 && a.addLoader(t), n && (t = new r.CDNFileAssetLoader(i), a.addLoader(t)), r.startFileScripts(v(e, a, i ?? null));
							};
							let y = r.WebGL2Renderer.prototype.clear;
							r.WebGL2Renderer.prototype.clear = function() {
								zt(this.V);
								let e = this.G;
								(this.Ra != e.width || this.Qa != e.height) && (this.resize(e.width, e.height), this.Ra = e.width, this.Qa = e.height), y.call(this);
							}, r.decodeImage = function(e, t, n = null) {
								e = r.decodeWebGL2Image(e, n ?? null), t(e);
							};
							let b = r.Renderer.prototype.align;
							r.Renderer.prototype.align = function(e, t, n, r, i = 1) {
								b.call(this, e, t, n, r, i);
							};
						};
						var d = "./this.program";
						a && (e = self.location.href);
						var f = "", p, m;
						if (i || a) {
							try {
								f = new URL(".", e).href;
							} catch {}
							a && (m = (e) => {
								var t = new XMLHttpRequest();
								return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
							}), p = async (e) => {
								if (y(e)) return new Promise((t, n) => {
									var r = new XMLHttpRequest();
									r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = () => {
										r.status == 200 || r.status == 0 && r.response ? t(r.response) : n(r.status);
									}, r.onerror = n, r.send(null);
								});
								var t = await fetch(e, { credentials: "same-origin" });
								if (t.ok) return t.arrayBuffer();
								throw Error(t.status + " : " + t.url);
							};
						}
						var h = console.log.bind(console), g = console.error.bind(console), _, v = !1, y = (e) => e.startsWith("file://"), b, x, S, C, w, T, E, D, O, k, A = !1;
						function j() {
							var e = Sn.buffer;
							r.HEAP8 = S = new Int8Array(e), w = new Int16Array(e), r.HEAPU8 = C = new Uint8Array(e), r.HEAPU16 = T = new Uint16Array(e), r.HEAP32 = E = new Int32Array(e), r.HEAPU32 = D = new Uint32Array(e), r.HEAPF32 = O = new Float32Array(e), k = new Float64Array(e);
						}
						function M(e) {
							throw r.onAbort?.(e), e = "Aborted(" + e + ")", g(e), v = !0, e = new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info."), x?.(e), e;
						}
						var N;
						async function ee(e) {
							if (!_) try {
								var t = await p(e);
								return new Uint8Array(t);
							} catch {}
							if (e == N && _) e = new Uint8Array(_);
							else if (m) e = m(e);
							else throw "both async and sync fetching of the wasm failed";
							return e;
						}
						async function te(e, t) {
							try {
								var n = await ee(e);
								return await WebAssembly.instantiate(n, t);
							} catch (e) {
								g(`failed to asynchronously prepare wasm: ${e}`), M(e);
							}
						}
						async function P(e) {
							var t = N;
							if (!_ && !y(t)) try {
								var n = fetch(t, { credentials: "same-origin" });
								return await WebAssembly.instantiateStreaming(n, e);
							} catch (e) {
								g(`wasm streaming compile failed: ${e}`), g("falling back to ArrayBuffer instantiation");
							}
							return te(t, e);
						}
						var F, I, ne = (e) => {
							for (; 0 < e.length;) e.shift()(r);
						}, L = [], re = [], ie = () => {
							var e = r.preRun.shift();
							re.push(e);
						}, ae = (e) => yn(e), oe = () => xn(), se = globalThis.TextDecoder && new TextDecoder(), ce = (e, t, n, r) => {
							if (n = t + n, r) return n;
							for (; e[t] && !(t >= n);) ++t;
							return t;
						}, le = (e, t = 0, n, r) => {
							if (n = ce(e, t, n, r), 16 < n - t && e.buffer && se) return se.decode(e.subarray(t, n));
							for (r = ""; t < n;) {
								var i = e[t++];
								if (i & 128) {
									var a = e[t++] & 63;
									if ((i & 224) == 192) r += String.fromCharCode((i & 31) << 6 | a);
									else {
										var o = e[t++] & 63;
										i = (i & 240) == 224 ? (i & 15) << 12 | a << 6 | o : (i & 7) << 18 | a << 12 | o << 6 | e[t++] & 63, 65536 > i ? r += String.fromCharCode(i) : (i -= 65536, r += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023));
									}
								} else r += String.fromCharCode(i);
							}
							return r;
						}, ue = (e, t) => Object.defineProperty(t, "name", { value: e }), de = [], fe = [
							0,
							1,
							,
							1,
							null,
							1,
							!0,
							1,
							!1,
							1
						], R = class extends Error {
							constructor(e) {
								super(e), this.name = "BindingError";
							}
						}, z = (e) => {
							if (!e) throw new R(`Cannot use deleted val. handle = ${e}`);
							return fe[e];
						}, pe = (e) => {
							switch (e) {
								case void 0: return 2;
								case null: return 4;
								case !0: return 6;
								case !1: return 8;
								default:
									let t = de.pop() || fe.length;
									return fe[t] = e, fe[t + 1] = 1, t;
							}
						};
						class B extends Error {}
						var V = (e) => {
							for (var t = "";;) {
								var n = C[e++];
								if (!n) return t;
								t += String.fromCharCode(n);
							}
						}, H = {}, U = (e, t) => {
							if (t === void 0) throw new R("ptr should not be undefined");
							for (; e.C;) t = e.ta(t), e = e.C;
							return t;
						}, W = {}, G = (e) => {
							e = tn(e);
							var t = V(e);
							return $t(e), t;
						}, K = (e, t) => {
							var n = W[e];
							if (n === void 0) throw e = `${t} has unknown type ${G(e)}`, new R(e);
							return n;
						}, me = () => {}, he = !1, q = (e) => globalThis.FinalizationRegistry ? (he = new FinalizationRegistry((e) => {
							e = e.m, --e.count.value, e.count.value === 0 && (e.D ? e.K.O(e.D) : e.v.o.O(e.u));
						}), q = (e) => {
							var t = e.m;
							return t.D && he.register(e, { m: t }, e), e;
						}, me = (e) => {
							he.unregister(e);
						}, q(e)) : (q = (e) => e, e), ge = {}, _e = (e) => {
							for (; e.length;) {
								var t = e.pop();
								e.pop()(t);
							}
						};
						function ve(e) {
							return this.s(D[e >> 2]);
						}
						var ye = {}, J = {}, be = class extends Error {
							constructor(e) {
								super(e), this.name = "InternalError";
							}
						}, Y = (e, t, n) => {
							function r(t) {
								if (t = n(t), t.length !== e.length) throw new be("Mismatched type converter count");
								for (var r = 0; r < e.length; ++r) X(e[r], t[r]);
							}
							e.forEach((e) => J[e] = t);
							var i = Array(t.length), a = [], o = 0;
							for (let [e, n] of t.entries()) W.hasOwnProperty(n) ? i[e] = W[n] : (a.push(n), ye.hasOwnProperty(n) || (ye[n] = []), ye[n].push(() => {
								i[e] = W[n], ++o, o === a.length && r(i);
							}));
							a.length === 0 && r(i);
						};
						function xe(e, t, n = {}) {
							var r = t.name;
							if (!e) throw new R(`type "${r}" must have a positive integer typeid pointer`);
							if (W.hasOwnProperty(e)) {
								if (n.Cc) return;
								throw new R(`Cannot register type '${r}' twice`);
							}
							W[e] = t, delete J[e], ye.hasOwnProperty(e) && (t = ye[e], delete ye[e], t.forEach((e) => e()));
						}
						function X(e, t, n = {}) {
							return xe(e, t, n);
						}
						var Se = (e) => {
							throw new R(e.m.v.o.name + " instance already deleted");
						}, Ce = [];
						function we() {}
						var Z = {}, Te = (e, t, n) => {
							if (e[t].A === void 0) {
								var r = e[t];
								e[t] = function(...r) {
									if (!e[t].A.hasOwnProperty(r.length)) throw new R(`Function '${n}' called with an invalid number of arguments (${r.length}) - expects one of (${e[t].A})!`);
									return e[t].A[r.length].apply(this, r);
								}, e[t].A = [], e[t].A[r.S] = r;
							}
						}, Ee = (e, t, n) => {
							if (r.hasOwnProperty(e)) {
								if (n === void 0 || r[e].A !== void 0 && r[e].A[n] !== void 0) throw new R(`Cannot register public name '${e}' twice`);
								if (Te(r, e, e), r[e].A.hasOwnProperty(n)) throw new R(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`);
								r[e].A[n] = t;
							} else r[e] = t, r[e].S = n;
						}, De = (e) => {
							e = e.replace(/[^a-zA-Z0-9_]/g, "$");
							var t = e.charCodeAt(0);
							return 48 <= t && 57 >= t ? `_${e}` : e;
						};
						function Oe(e, t, n, r, i, a, o, s) {
							this.name = e, this.constructor = t, this.N = n, this.O = r, this.C = i, this.uc = a, this.ta = o, this.mc = s, this.Ab = [];
						}
						var ke = (e, t, n) => {
							for (; t !== n;) {
								if (!t.ta) throw new R(`Expected null or instance of ${n.name}, got an instance of ${t.name}`);
								e = t.ta(e), t = t.C;
							}
							return e;
						}, Ae = (e) => {
							if (e === null) return "null";
							var t = typeof e;
							return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
						};
						function je(e, t) {
							if (t === null) {
								if (this.Wa) throw new R(`null is not a valid ${this.name}`);
								return 0;
							}
							if (!t.m) throw new R(`Cannot pass "${Ae(t)}" as a ${this.name}`);
							if (!t.m.u) throw new R(`Cannot pass deleted object as a pointer of type ${this.name}`);
							return ke(t.m.u, t.m.v.o, this.o);
						}
						function Me(e, t) {
							if (t === null) {
								if (this.Wa) throw new R(`null is not a valid ${this.name}`);
								if (this.Ga) {
									var n = this.cb();
									return e !== null && e.push(this.O, n), n;
								}
								return 0;
							}
							if (!t || !t.m) throw new R(`Cannot pass "${Ae(t)}" as a ${this.name}`);
							if (!t.m.u) throw new R(`Cannot pass deleted object as a pointer of type ${this.name}`);
							if (!this.Fa && t.m.v.Fa) throw new R(`Cannot convert argument of type ${t.m.K ? t.m.K.name : t.m.v.name} to parameter type ${this.name}`);
							if (n = ke(t.m.u, t.m.v.o, this.o), this.Ga) {
								if (t.m.D === void 0) throw new R("Passing raw pointer to smart pointer is illegal");
								switch (this.Uj) {
									case 0:
										if (t.m.K === this) n = t.m.D;
										else throw new R(`Cannot convert argument of type ${t.m.K ? t.m.K.name : t.m.v.name} to parameter type ${this.name}`);
										break;
									case 1:
										n = t.m.D;
										break;
									case 2:
										if (t.m.K === this) n = t.m.D;
										else {
											var r = t.clone();
											n = this.Sc(n, pe(() => r.delete())), e !== null && e.push(this.O, n);
										}
										break;
									default: throw new R("Unsupported sharing policy");
								}
							}
							return n;
						}
						function Ne(e, t) {
							if (t === null) {
								if (this.Wa) throw new R(`null is not a valid ${this.name}`);
								return 0;
							}
							if (!t.m) throw new R(`Cannot pass "${Ae(t)}" as a ${this.name}`);
							if (!t.m.u) throw new R(`Cannot pass deleted object as a pointer of type ${this.name}`);
							if (t.m.v.Fa) throw new R(`Cannot convert argument of type ${t.m.v.name} to parameter type ${this.name}`);
							return ke(t.m.u, t.m.v.o, this.o);
						}
						var Pe = (e, t, n) => t === n ? e : n.C === void 0 ? null : (e = Pe(e, t, n.C), e === null ? null : n.mc(e)), Fe = (e, t) => (t = U(e, t), H[t]), Ie = (e, t) => {
							if (!t.v || !t.u) throw new be("makeClassHandle requires ptr and ptrType");
							if (!!t.K != !!t.D) throw new be("Both smartPtrType and smartPtr must be specified");
							return t.count = { value: 1 }, q(Object.create(e, { m: {
								value: t,
								writable: !0
							} }));
						};
						function Le(e, t, n, r, i, a, o, s, c, l, u) {
							this.name = e, this.o = t, this.Wa = n, this.Fa = r, this.Ga = i, this.Oc = a, this.Uj = o, this.Db = s, this.cb = c, this.Sc = l, this.O = u, i || t.C !== void 0 ? this.B = Me : (this.B = r ? je : Ne, this.H = null);
						}
						var Re = (e, t, n) => {
							if (!r.hasOwnProperty(e)) throw new be("Replacing nonexistent public symbol");
							r[e].A !== void 0 && n !== void 0 ? r[e].A[n] = t : (r[e] = t, r[e].S = n);
						}, ze = {}, Be = (e, t, n = []) => (e.includes("j") ? (e = e.replace(/p/g, "i"), t = (0, ze[e])(t, ...n)) : t = Cn.get(t)(...n), t), Ve = (e, t) => (...n) => Be(e, t, n), He = (e, t) => {
							e = V(e);
							var n = e.includes("j") ? Ve(e, t) : Cn.get(t);
							if (typeof n != "function") throw new R(`unknown function pointer with signature ${e}: ${t}`);
							return n;
						};
						class Ue extends Error {}
						var We = (e, t) => {
							function n(e) {
								i[e] || W[e] || (J[e] ? J[e].forEach(n) : (r.push(e), i[e] = !0));
							}
							var r = [], i = {};
							throw t.forEach(n), new Ue(`${e}: ` + r.map(G).join([", "]));
						};
						function Ge(e) {
							for (var t = 1; t < e.length; ++t) if (e[t] !== null && e[t].H === void 0) return !0;
							return !1;
						}
						function Ke(e, t, n, r, i) {
							var a = t.length;
							if (2 > a) throw new R("argTypes array size mismatch! Must at least get return value and 'this' types!");
							var o = t[1] !== null && n !== null, s = Ge(t), c = !t[0].Ec, l = a - 2, u = Array(l), d = [], f = [];
							return ue(e, function(...e) {
								if (f.length = 0, d.length = o ? 2 : 1, d[0] = i, o) {
									var n = t[1].B(f, this);
									d[1] = n;
								}
								for (var a = 0; a < l; ++a) u[a] = t[a + 2].B(f, e[a]), d.push(u[a]);
								if (e = r(...d), s) _e(f);
								else for (a = o ? 1 : 2; a < t.length; a++) {
									var p = a === 1 ? n : u[a - 2];
									t[a].H !== null && t[a].H(p);
								}
								return n = c ? t[0].s(e) : void 0, n;
							});
						}
						var qe = (e, t) => {
							for (var n = [], r = 0; r < e; r++) n.push(D[t + 4 * r >> 2]);
							return n;
						}, Je = (e) => {
							e = e.trim();
							let t = e.indexOf("(");
							return t === -1 ? e : e.slice(0, t);
						}, Ye = (e, t, n) => {
							if (!(e instanceof Object)) throw new R(`${n} with invalid "this": ${e}`);
							if (!(e instanceof t.o.constructor)) throw new R(`${n} incompatible with "this" of type ${e.constructor.name}`);
							if (!e.m.u) throw new R(`cannot call emscripten binding method ${n} on deleted object`);
							return ke(e.m.u, e.m.v.o, t.o);
						}, Xe = (e) => {
							9 < e && --fe[e + 1] === 0 && (fe[e] = void 0, de.push(e));
						}, Ze = {
							name: "emscripten::val",
							s: (e) => {
								var t = z(e);
								return Xe(e), t;
							},
							B: (e, t) => pe(t),
							J: ve,
							H: null
						}, Qe = (e, t, n) => {
							switch (t) {
								case 1: return n ? function(e) {
									return this.s(S[e]);
								} : function(e) {
									return this.s(C[e]);
								};
								case 2: return n ? function(e) {
									return this.s(w[e >> 1]);
								} : function(e) {
									return this.s(T[e >> 1]);
								};
								case 4: return n ? function(e) {
									return this.s(E[e >> 2]);
								} : function(e) {
									return this.s(D[e >> 2]);
								};
								default: throw TypeError(`invalid integer width (${t}): ${e}`);
							}
						}, $e = (e, t) => {
							switch (t) {
								case 4: return function(e) {
									return this.s(O[e >> 2]);
								};
								case 8: return function(e) {
									return this.s(k[e >> 3]);
								};
								default: throw TypeError(`invalid float width (${t}): ${e}`);
							}
						}, et = (e, t, n) => {
							switch (t) {
								case 1: return n ? (e) => S[e] : (e) => C[e];
								case 2: return n ? (e) => w[e >> 1] : (e) => T[e >> 1];
								case 4: return n ? (e) => E[e >> 2] : (e) => D[e >> 2];
								default: throw TypeError(`invalid integer width (${t}): ${e}`);
							}
						}, tt = (e, t, n) => {
							var r = C;
							if (!(0 < n)) return 0;
							var i = t;
							n = t + n - 1;
							for (var a = 0; a < e.length; ++a) {
								var o = e.codePointAt(a);
								if (127 >= o) {
									if (t >= n) break;
									r[t++] = o;
								} else if (2047 >= o) {
									if (t + 1 >= n) break;
									r[t++] = 192 | o >> 6, r[t++] = 128 | o & 63;
								} else if (65535 >= o) {
									if (t + 2 >= n) break;
									r[t++] = 224 | o >> 12, r[t++] = 128 | o >> 6 & 63, r[t++] = 128 | o & 63;
								} else {
									if (t + 3 >= n) break;
									r[t++] = 240 | o >> 18, r[t++] = 128 | o >> 12 & 63, r[t++] = 128 | o >> 6 & 63, r[t++] = 128 | o & 63, a++;
								}
							}
							return r[t] = 0, t - i;
						}, nt = (e) => {
							for (var t = 0, n = 0; n < e.length; ++n) {
								var r = e.charCodeAt(n);
								127 >= r ? t++ : 2047 >= r ? t += 2 : 55296 <= r && 57343 >= r ? (t += 4, ++n) : t += 3;
							}
							return t;
						}, rt = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, it = (e, t, n) => {
							if (e >>= 1, t = ce(T, e, t / 2, n), 16 < t - e && rt) return rt.decode(T.subarray(e, t));
							for (n = ""; e < t; ++e) n += String.fromCharCode(T[e]);
							return n;
						}, at = (e, t, n) => {
							if (n ??= 2147483647, 2 > n) return 0;
							n -= 2;
							var r = t;
							n = n < 2 * e.length ? n / 2 : e.length;
							for (var i = 0; i < n; ++i) w[t >> 1] = e.charCodeAt(i), t += 2;
							return w[t >> 1] = 0, t - r;
						}, ot = (e) => 2 * e.length, st = (e, t, n) => {
							var r = "";
							e >>= 2;
							for (var i = 0; !(i >= t / 4); i++) {
								var a = D[e + i];
								if (!a && !n) break;
								r += String.fromCodePoint(a);
							}
							return r;
						}, ct = (e, t, n) => {
							if (n ??= 2147483647, 4 > n) return 0;
							var r = t;
							n = r + n - 4;
							for (var i = 0; i < e.length; ++i) {
								var a = e.codePointAt(i);
								if (65535 < a && i++, E[t >> 2] = a, t += 4, t + 4 > n) break;
							}
							return E[t >> 2] = 0, t - r;
						}, lt = (e) => {
							for (var t = 0, n = 0; n < e.length; ++n) 65535 < e.codePointAt(n) && n++, t += 4;
							return t;
						}, ut = [], dt = (e) => {
							var t = ut.length;
							return ut.push(e), t;
						}, ft = (e, t) => {
							for (var n = Array(e), r = 0; r < e; ++r) n[r] = K(D[t + 4 * r >> 2], `parameter ${r}`);
							return n;
						}, pt = {}, mt = (e) => {
							var t = pt[e];
							return t === void 0 ? V(e) : t;
						}, ht = [
							0,
							31,
							60,
							91,
							121,
							152,
							182,
							213,
							244,
							274,
							305,
							335
						], gt = [
							0,
							31,
							59,
							90,
							120,
							151,
							181,
							212,
							243,
							273,
							304,
							334
						], _t = [], vt = (e) => {
							e.Zj = e.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
						}, yt = (e) => {
							e.ck = e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
						}, Q, bt = (e) => {
							var t = "EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
							return (e.getSupportedExtensions() || []).filter((e) => t.includes(e));
						}, xt = 1, St = [], Ct = [], wt = [], Tt = [], Et = [], Dt = [], Ot = [], kt = [], At = [], jt = [], Mt = {}, Nt = {}, Pt = 4, Ft = 0, It = (e) => {
							for (var t = xt++, n = e.length; n < t; n++) e[n] = null;
							return t;
						}, Lt = (e, t, n, r) => {
							for (var i = 0; i < e; i++) {
								var a = Q[n](), o = a && It(r);
								a ? (a.name = o, r[o] = a) : $ ||= 1282, E[t + 4 * i >> 2] = o;
							}
						}, Rt = (e, t) => {
							var n = It(kt), r = {
								handle: n,
								attributes: t,
								version: t.bk,
								F: e
							};
							if (e.canvas && (e.canvas.Qb = r), kt[n] = r, (t.nc === void 0 || t.nc) && ((e = r) || (e = Bt), !e.Dc)) {
								e.Dc = !0, t = e.F, t.Ic = t.getExtension("WEBGL_multi_draw"), t.qc = t.getExtension("EXT_polygon_offset_clamp"), t.pc = t.getExtension("EXT_clip_control"), t.Xj = t.getExtension("WEBGL_polygon_mode"), vt(t), yt(t), 2 <= e.version && (t.pb = t.getExtension("EXT_disjoint_timer_query_webgl2")), (2 > e.version || !t.pb) && (t.pb = t.getExtension("EXT_disjoint_timer_query"));
								for (var i of bt(t)) i.includes("lose_context") || i.includes("debug") || t.getExtension(i);
							}
							return n;
						}, zt = (e) => (Bt = kt[e], r.ctx = Q = Bt?.F, !(e && !Q)), $, Bt, Vt = {}, Ht = () => {
							if (!Ut) {
								var e = {
									USER: "web_user",
									LOGNAME: "web_user",
									PATH: "/",
									PWD: "/",
									HOME: "/home/web_user",
									LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
									_: d || "./this.program"
								}, t;
								for (t in Vt) Vt[t] === void 0 ? delete e[t] : e[t] = Vt[t];
								var n = [];
								for (t in e) n.push(`${t}=${e[t]}`);
								Ut = n;
							}
							return Ut;
						}, Ut, Wt = [
							null,
							[],
							[]
						], Gt = [], Kt = () => {
							var e = bt(Q);
							return e = e.concat(e.map((e) => "GL_" + e));
						}, qt = (e, t, n) => {
							if (t) {
								var r = void 0;
								switch (e) {
									case 36346:
										r = 1;
										break;
									case 36344:
										n != 0 && n != 1 && ($ ||= 1280);
										return;
									case 34814:
									case 36345:
										r = 0;
										break;
									case 34466:
										var i = Q.getParameter(34467);
										r = i ? i.length : 0;
										break;
									case 33309:
										if (2 > Bt.version) {
											$ ||= 1282;
											return;
										}
										r = Kt().length;
										break;
									case 33307:
									case 33308:
										if (2 > Bt.version) {
											$ ||= 1280;
											return;
										}
										r = e == 33307 ? 3 : 0;
								}
								if (r === void 0) switch (i = Q.getParameter(e), typeof i) {
									case "number":
										r = i;
										break;
									case "boolean":
										r = +!!i;
										break;
									case "string":
										$ ||= 1280;
										return;
									case "object":
										if (i === null) switch (e) {
											case 34964:
											case 35725:
											case 34965:
											case 36006:
											case 36007:
											case 32873:
											case 34229:
											case 36662:
											case 36663:
											case 35053:
											case 35055:
											case 36010:
											case 35097:
											case 35869:
											case 32874:
											case 36389:
											case 35983:
											case 35368:
											case 34068:
												r = 0;
												break;
											default:
												$ ||= 1280;
												return;
										}
										else {
											if (i instanceof Float32Array || i instanceof Uint32Array || i instanceof Int32Array || i instanceof Array) {
												for (e = 0; e < i.length; ++e) switch (n) {
													case 0:
														E[t + 4 * e >> 2] = i[e];
														break;
													case 2:
														O[t + 4 * e >> 2] = i[e];
														break;
													case 4: S[t + e] = +!!i[e];
												}
												return;
											}
											try {
												r = i.name | 0;
											} catch (t) {
												$ ||= 1280, g(`GL_INVALID_ENUM in glGet${n}v: Unknown object returned from WebGL getParameter(${e})! (error: ${t})`);
												return;
											}
										}
										break;
									default:
										$ ||= 1280, g(`GL_INVALID_ENUM in glGet${n}v: Native code calling glGet${n}v(${e}) and it returns ${i} of type ${typeof i}!`);
										return;
								}
								switch (n) {
									case 1:
										n = r, D[t >> 2] = n, D[t + 4 >> 2] = (n - D[t >> 2]) / 4294967296;
										break;
									case 0:
										E[t >> 2] = r;
										break;
									case 2:
										O[t >> 2] = r;
										break;
									case 4: S[t] = +!!r;
								}
							} else $ ||= 1281;
						}, Jt = (e) => {
							var t = nt(e) + 1, n = en(t);
							return n && tt(e, n, t), n;
						}, Yt = (e) => e.slice(-1) == "]" && e.lastIndexOf("["), Xt = (e) => (e -= 5120, e == 0 ? S : e == 1 ? C : e == 2 ? w : e == 4 ? E : e == 6 ? O : e == 5 || e == 28922 || e == 28520 || e == 30779 || e == 30782 ? D : T), Zt = (e) => bn(e);
						(() => {
							let e = we.prototype;
							Object.assign(e, {
								isAliasOf: function(e) {
									if (!(this instanceof we && e instanceof we)) return !1;
									var t = this.m.v.o, n = this.m.u;
									e.m = e.m;
									var r = e.m.v.o;
									for (e = e.m.u; t.C;) n = t.ta(n), t = t.C;
									for (; r.C;) e = r.ta(e), r = r.C;
									return t === r && n === e;
								},
								clone: function() {
									if (this.m.u || Se(this), this.m.ga) return this.m.count.value += 1, this;
									var e = q, t = Object, n = t.create, r = Object.getPrototypeOf(this), i = this.m;
									return e = e(n.call(t, r, { m: { value: {
										count: i.count,
										la: i.la,
										ga: i.ga,
										u: i.u,
										v: i.v,
										D: i.D,
										K: i.K
									} } })), e.m.count.value += 1, e.m.la = !1, e;
								},
								delete() {
									if (this.m.u || Se(this), this.m.la && !this.m.ga) throw new R("Object already scheduled for deletion");
									me(this);
									var e = this.m;
									--e.count.value, e.count.value === 0 && (e.D ? e.K.O(e.D) : e.v.o.O(e.u)), this.m.ga || (this.m.D = void 0, this.m.u = void 0);
								},
								isDeleted: function() {
									return !this.m.u;
								},
								deleteLater: function() {
									if (this.m.u || Se(this), this.m.la && !this.m.ga) throw new R("Object already scheduled for deletion");
									return Ce.push(this), this.m.la = !0, this;
								}
							});
							let t = Symbol.dispose;
							t && (e[t] = e.delete);
						})(), Object.assign(Le.prototype, {
							vc(e) {
								return this.Db && (e = this.Db(e)), e;
							},
							ob(e) {
								this.O?.(e);
							},
							J: ve,
							s: function(e) {
								function t() {
									return this.Ga ? Ie(this.o.N, {
										v: this.Oc,
										u: n,
										K: this,
										D: e
									}) : Ie(this.o.N, {
										v: this,
										u: e
									});
								}
								var n = this.vc(e);
								if (!n) return this.ob(e), null;
								var r = Fe(this.o, n);
								if (r !== void 0) return r.m.count.value === 0 ? (r.m.u = n, r.m.D = e, r.clone()) : (r = r.clone(), this.ob(e), r);
								if (r = this.o.uc(n), r = Z[r], !r) return t.call(this);
								r = this.Fa ? r.jc : r.pointerType;
								var i = Pe(n, this.o, r.o);
								return i === null ? t.call(this) : this.Ga ? Ie(r.o.N, {
									v: r,
									u: i,
									K: this,
									D: e
								}) : Ie(r.o.N, {
									v: r,
									u: i
								});
							}
						});
						for (let e = 0; 32 > e; ++e) Gt.push(Array(e));
						if (r.print && (h = r.print), r.printErr && (g = r.printErr), r.wasmBinary && (_ = r.wasmBinary), r.thisProgram && (d = r.thisProgram), r.preInit) for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); 0 < r.preInit.length;) r.preInit.shift()();
						var Qt = {
							361988: (e, t, n, r, i) => {
								if (typeof window > "u" || (window.AudioContext || window.webkitAudioContext) === void 0) return 0;
								if (window.miniaudio === void 0) {
									window.miniaudio = { referenceCount: 0 }, window.miniaudio.device_type = {}, window.miniaudio.device_type.playback = e, window.miniaudio.device_type.capture = t, window.miniaudio.device_type.duplex = n, window.miniaudio.device_state = {}, window.miniaudio.device_state.stopped = r, window.miniaudio.device_state.started = i;
									let a = window.miniaudio;
									a.devices = [], a.track_device = function(e) {
										for (var t = 0; t < a.devices.length; ++t) if (a.devices[t] == null) return a.devices[t] = e, t;
										return a.devices.push(e), a.devices.length - 1;
									}, a.untrack_device_by_index = function(e) {
										for (a.devices[e] = null; 0 < a.devices.length && a.devices[a.devices.length - 1] == null;) a.devices.pop();
									}, a.untrack_device = function(e) {
										for (var t = 0; t < a.devices.length; ++t) if (a.devices[t] == e) return a.untrack_device_by_index(t);
									}, a.get_device_by_index = function(e) {
										return a.devices[e];
									}, a.unlock_event_types = ["touchend", "click"], a.unlock = function() {
										for (var e = 0; e < a.devices.length; ++e) {
											var t = a.devices[e];
											t != null && t.L != null && t.state === a.device_state.started && t.L.resume().then(() => {
												mn(t.yb);
											}, (e) => {
												console.error("Failed to resume audiocontext", e);
											});
										}
										a.unlock_event_types.map(function(e) {
											document.removeEventListener(e, a.unlock, !0);
										});
									}, a.unlock_event_types.map(function(e) {
										document.addEventListener(e, a.unlock, !0);
									});
								}
								return window.miniaudio.referenceCount += 1, 1;
							},
							364166: () => {
								window.miniaudio !== void 0 && (window.miniaudio.unlock_event_types.map(function(e) {
									document.removeEventListener(e, window.miniaudio.unlock, !0);
								}), --window.miniaudio.referenceCount, window.miniaudio.referenceCount === 0 && delete window.miniaudio);
							},
							364470: () => navigator.mediaDevices !== void 0 && navigator.mediaDevices.getUserMedia !== void 0,
							364574: () => {
								try {
									var e = new (window.AudioContext || window.webkitAudioContext)(), t = e.sampleRate;
									return e.close(), t;
								} catch {
									return 0;
								}
							},
							364745: (e, t, n, r, i, a) => {
								if (window.miniaudio === void 0) return -1;
								var o = {}, s = {};
								return e == window.miniaudio.device_type.playback && n != 0 && (s.sampleRate = n), o.L = new (window.AudioContext || window.webkitAudioContext)(s), o.L.suspend(), o.state = window.miniaudio.device_state.stopped, n = 0, e != window.miniaudio.device_type.playback && (n = t), o.U = o.L.createScriptProcessor(r, n, t), o.U.onaudioprocess = function(n) {
									if ((o.oa == null || o.oa.length == 0 || o.oa.buffer !== O.buffer) && (o.oa = new Float32Array(O.buffer, Number(i), r * t)), e == window.miniaudio.device_type.capture || e == window.miniaudio.device_type.duplex) {
										for (var s = 0; s < t; s += 1) for (var c = n.inputBuffer.getChannelData(s), l = o.oa, u = 0; u < r; u += 1) l[u * t + s] = c[u];
										hn(a, r, i);
									}
									if (e == window.miniaudio.device_type.playback || e == window.miniaudio.device_type.duplex) for (gn(a, r, i), s = 0; s < n.outputBuffer.numberOfChannels; ++s) for (c = n.outputBuffer.getChannelData(s), l = o.oa, u = 0; u < r; u += 1) c[u] = l[u * t + s];
									else for (s = 0; s < n.outputBuffer.numberOfChannels; ++s) n.outputBuffer.getChannelData(s).fill(0);
								}, e != window.miniaudio.device_type.capture && e != window.miniaudio.device_type.duplex || navigator.mediaDevices.getUserMedia({
									audio: !0,
									video: !1
								}).then(function(e) {
									o.Na = o.L.createMediaStreamSource(e), o.Na.connect(o.U), o.U.connect(o.L.destination);
								}).catch(function(e) {
									console.log("Failed to get user media: " + e);
								}), e == window.miniaudio.device_type.playback && o.U.connect(o.L.destination), o.yb = a, window.miniaudio.track_device(o);
							},
							367689: (e) => window.miniaudio.get_device_by_index(e).L.sampleRate,
							367762: (e) => {
								e = window.miniaudio.get_device_by_index(e), e.U !== void 0 && (e.U.onaudioprocess = function() {}, e.U.disconnect(), e.U = void 0), e.Na !== void 0 && (e.Na.disconnect(), e.Na = void 0), e.L.close(), e.L = void 0, e.yb = void 0;
							},
							368162: (e) => {
								window.miniaudio.untrack_device_by_index(e);
							},
							368212: (e) => {
								e = window.miniaudio.get_device_by_index(e), e.L.resume(), e.state = window.miniaudio.device_state.started;
							},
							368351: (e) => {
								e = window.miniaudio.get_device_by_index(e), e.L.suspend(), e.state = window.miniaudio.device_state.stopped;
							}
						}, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn = {
							__syscall_fcntl64: function() {
								return 0;
							},
							__syscall_ioctl: function() {
								return 0;
							},
							__syscall_openat: function() {},
							_abort_js: () => M(""),
							_embind_create_inheriting_constructor: (e, t, n) => {
								e = V(e), t = K(t, "wrapper"), n = z(n);
								var r = t.o, i = r.N, a = r.C.N, o = r.C.constructor;
								return e = ue(e, function(...e) {
									for (var t of r.C.Ab) if (this[t] === a[t]) throw new B(`Pure virtual function ${t} must be implemented in JavaScript`);
									Object.defineProperty(this, "__parent", { value: i }), this.__construct(...e);
								}), i.__construct = function(...e) {
									if (this === i) throw new R("Pass correct 'this' to __construct");
									e = o.implement(this, ...e), me(e);
									var t = e.m;
									if (e.notifyOnDestruction(), t.ga = !0, Object.defineProperties(this, { m: { value: t } }), q(this), e = t.u, e = U(r, e), H.hasOwnProperty(e)) throw new R(`Tried to register registered instance: ${e}`);
									H[e] = this;
								}, i.__destruct = function() {
									if (this === i) throw new R("Pass correct 'this' to __destruct");
									me(this);
									var e = this.m.u;
									if (e = U(r, e), H.hasOwnProperty(e)) delete H[e];
									else throw new R(`Tried to unregister unregistered instance: ${e}`);
								}, e.prototype = Object.create(i), Object.assign(e.prototype, n), pe(e);
							},
							_embind_finalize_value_object: (e) => {
								var t = ge[e];
								delete ge[e];
								var n = t.cb, r = t.O, i = t.qb, a = i.map((e) => e.yc).concat(i.map((e) => e.Sj));
								Y([e], a, (e) => {
									var a = {}, o, s;
									for ([o, s] of i.entries()) {
										let t = e[o], n = s.wc, r = s.xc, c = e[o + i.length], l = s.Rj, u = s.Tj;
										a[s.rc] = {
											read: (e) => t.s(n(r, e)),
											write: (e, t) => {
												var n = [];
												l(u, e, c.B(n, t)), _e(n);
											},
											optional: t.optional
										};
									}
									return [{
										name: t.name,
										s: (e) => {
											var t = {}, n;
											for (n in a) t[n] = a[n].read(e);
											return r(e), t;
										},
										B: (e, t) => {
											for (var i in a) if (!(i in t || a[i].optional)) throw TypeError(`Missing field: "${i}"`);
											var o = n();
											for (i in a) a[i].write(o, t[i]);
											return e !== null && e.push(r, o), o;
										},
										J: ve,
										H: r
									}];
								});
							},
							_embind_register_bigint: () => {},
							_embind_register_bool: (e, t, n, r) => {
								t = V(t), X(e, {
									name: t,
									s: function(e) {
										return !!e;
									},
									B: function(e, t) {
										return t ? n : r;
									},
									J: function(e) {
										return this.s(C[e]);
									},
									H: null
								});
							},
							_embind_register_class: (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
								u = V(u), a = He(i, a), s &&= He(o, s), l &&= He(c, l), f = He(d, f);
								var p = De(u);
								Ee(p, function() {
									We(`Cannot construct ${u} due to unbound types`, [r]);
								}), Y([
									e,
									t,
									n
								], r ? [r] : [], (t) => {
									if (t = t[0], r) var n = t.o, i = n.N;
									else i = we.prototype;
									t = ue(u, function(...e) {
										if (Object.getPrototypeOf(this) !== o) throw new R(`Use 'new' to construct ${u}`);
										if (c.W === void 0) throw new R(`${u} has no accessible constructor`);
										var t = c.W[e.length];
										if (t === void 0) throw new R(`Tried to invoke ctor of ${u} with invalid number of parameters (${e.length}) - expected (${Object.keys(c.W).toString()}) parameters instead!`);
										return t.apply(this, e);
									});
									var o = Object.create(i, { constructor: { value: t } });
									t.prototype = o;
									var c = new Oe(u, t, o, f, n, a, s, l);
									if (c.C) {
										var d;
										(d = c.C).va ?? (d.va = []), c.C.va.push(c);
									}
									return n = new Le(u, c, !0, !1, !1), d = new Le(u + "*", c, !1, !1, !1), i = new Le(u + " const*", c, !1, !0, !1), Z[e] = {
										pointerType: d,
										jc: i
									}, Re(p, t), [
										n,
										d,
										i
									];
								});
							},
							_embind_register_class_class_function: (e, t, n, r, i, a, o) => {
								var s = qe(n, r);
								t = V(t), t = Je(t), a = He(i, a), Y([], [e], (e) => {
									function r() {
										We(`Cannot call ${i} due to unbound types`, s);
									}
									e = e[0];
									var i = `${e.name}.${t}`;
									t.startsWith("@@") && (t = Symbol[t.substring(2)]);
									var c = e.o.constructor;
									return c[t] === void 0 ? (r.S = n - 1, c[t] = r) : (Te(c, t, i), c[t].A[n - 1] = r), Y([], s, (r) => {
										if (r = Ke(i, [r[0], null].concat(r.slice(1)), null, a, o), c[t].A === void 0 ? (r.S = n - 1, c[t] = r) : c[t].A[n - 1] = r, e.o.va) for (let n of e.o.va) n.constructor.hasOwnProperty(t) || (n.constructor[t] = r);
										return [];
									}), [];
								});
							},
							_embind_register_class_class_property: (e, t, n, r, i, a, o, s) => {
								t = V(t), a = He(i, a), Y([], [e], (e) => {
									e = e[0];
									var i = `${e.name}.${t}`, c = {
										get() {
											We(`Cannot access ${i} due to unbound types`, [n]);
										},
										enumerable: !0,
										configurable: !0
									};
									return c.set = s ? () => {
										We(`Cannot access ${i} due to unbound types`, [n]);
									} : () => {
										throw new R(`${i} is a read-only property`);
									}, Object.defineProperty(e.o.constructor, t, c), Y([], [n], (n) => {
										n = n[0];
										var i = {
											get() {
												return n.s(a(r));
											},
											enumerable: !0
										};
										return s && (s = He(o, s), i.set = (e) => {
											var t = [];
											s(r, n.B(t, e)), _e(t);
										}), Object.defineProperty(e.o.constructor, t, i), [];
									}), [];
								});
							},
							_embind_register_class_constructor: (e, t, n, r, i, a) => {
								var o = qe(t, n);
								i = He(r, i), Y([], [e], (e) => {
									e = e[0];
									var n = `constructor ${e.name}`;
									if (e.o.W === void 0 && (e.o.W = []), e.o.W[t - 1] !== void 0) throw new R(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
									return e.o.W[t - 1] = () => {
										We(`Cannot construct ${e.name} due to unbound types`, o);
									}, Y([], o, (r) => (r.splice(1, 0, null), e.o.W[t - 1] = Ke(n, r, null, i, a), [])), [];
								});
							},
							_embind_register_class_function: (e, t, n, r, i, a, o, s) => {
								var c = qe(n, r);
								t = V(t), t = Je(t), a = He(i, a), Y([], [e], (e) => {
									function r() {
										We(`Cannot call ${i} due to unbound types`, c);
									}
									e = e[0];
									var i = `${e.name}.${t}`;
									t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && e.o.Ab.push(t);
									var l = e.o.N, u = l[t];
									return u === void 0 || u.A === void 0 && u.className !== e.name && u.S === n - 2 ? (r.S = n - 2, r.className = e.name, l[t] = r) : (Te(l, t, i), l[t].A[n - 2] = r), Y([], c, (r) => (r = Ke(i, r, e, a, o), l[t].A === void 0 ? (r.S = n - 2, l[t] = r) : l[t].A[n - 2] = r, [])), [];
								});
							},
							_embind_register_class_property: (e, t, n, r, i, a, o, s, c, l) => {
								t = V(t), i = He(r, i), Y([], [e], (e) => {
									e = e[0];
									var r = `${e.name}.${t}`, u = {
										get() {
											We(`Cannot access ${r} due to unbound types`, [n, o]);
										},
										enumerable: !0,
										configurable: !0
									};
									return u.set = c ? () => We(`Cannot access ${r} due to unbound types`, [n, o]) : () => {
										throw new R(r + " is a read-only property");
									}, Object.defineProperty(e.o.N, t, u), Y([], c ? [n, o] : [n], (n) => {
										var o = n[0], u = {
											get() {
												var t = Ye(this, e, r + " getter");
												return o.s(i(a, t));
											},
											enumerable: !0
										};
										if (c) {
											c = He(s, c);
											var d = n[1];
											u.set = function(t) {
												var n = Ye(this, e, r + " setter"), i = [];
												c(l, n, d.B(i, t)), _e(i);
											};
										}
										return Object.defineProperty(e.o.N, t, u), [];
									}), [];
								});
							},
							_embind_register_emval: (e) => X(e, Ze),
							_embind_register_enum: (e, t, n, i, a) => {
								switch (t = V(t), a = a === 0 ? "object" : a === 1 ? "number" : "string", a) {
									case "object":
										function s() {}
										s.values = {}, X(e, {
											name: t,
											constructor: s,
											valueType: a,
											s: function(e) {
												return this.constructor.values[e];
											},
											B: (e, t) => t.value,
											J: Qe(t, n, i),
											H: null
										}), Ee(t, s);
										break;
									case "number":
										var o = {};
										X(e, {
											name: t,
											Ya: o,
											valueType: a,
											s: (e) => e,
											B: (e, t) => t,
											J: Qe(t, n, i),
											H: null
										}), Ee(t, o), delete r[t].S;
										break;
									case "string": o = {}, X(e, {
										name: t,
										Mb: {},
										Gb: {},
										Ya: o,
										valueType: a,
										s: function(e) {
											return this.Gb[e];
										},
										B: function(e, t) {
											return this.Mb[t];
										},
										J: Qe(t, n, i),
										H: null
									}), Ee(t, o), delete r[t].S;
								}
							},
							_embind_register_enum_value: (e, t, n) => {
								var r = K(e, "enum");
								switch (t = V(t), r.valueType) {
									case "object":
										e = r.constructor, r = Object.create(r.constructor.prototype, {
											value: { value: n },
											constructor: { value: ue(`${r.name}_${t}`, function() {}) }
										}), e.values[n] = r, e[t] = r;
										break;
									case "number":
										r.Ya[t] = n;
										break;
									case "string": r.Mb[t] = n, r.Gb[n] = t, r.Ya[t] = t;
								}
							},
							_embind_register_float: (e, t, n) => {
								t = V(t), X(e, {
									name: t,
									s: (e) => e,
									B: (e, t) => t,
									J: $e(t, n),
									H: null
								});
							},
							_embind_register_function: (e, t, n, r, i, a) => {
								var o = qe(t, n);
								e = V(e), e = Je(e), i = He(r, i), Ee(e, function() {
									We(`Cannot call ${e} due to unbound types`, o);
								}, t - 1), Y([], o, (n) => (Re(e, Ke(e, [n[0], null].concat(n.slice(1)), null, i, a), t - 1), []));
							},
							_embind_register_integer: (e, t, n, r, i) => {
								t = V(t);
								let a = (e) => e;
								if (r === 0) {
									var o = 32 - 8 * n;
									a = (e) => e << o >>> o, i = a(i);
								}
								X(e, {
									name: t,
									s: a,
									B: (e, t) => t,
									J: et(t, n, r !== 0),
									H: null
								});
							},
							_embind_register_memory_view: (e, t, n) => {
								function r(e) {
									return new i(S.buffer, D[e + 4 >> 2], D[e >> 2]);
								}
								var i = [
									Int8Array,
									Uint8Array,
									Int16Array,
									Uint16Array,
									Int32Array,
									Uint32Array,
									Float32Array,
									Float64Array
								][t];
								n = V(n), X(e, {
									name: n,
									s: r,
									J: r
								}, { Cc: !0 });
							},
							_embind_register_std_string: (e, t) => {
								t = V(t), X(e, {
									name: t,
									s(e) {
										var t = (t = e + 4) ? le(C, t, D[e >> 2], !0) : "";
										return $t(e), t;
									},
									B(e, t) {
										t instanceof ArrayBuffer && (t = new Uint8Array(t));
										var n = typeof t == "string";
										if (!(n || ArrayBuffer.isView(t) && t.BYTES_PER_ELEMENT == 1)) throw new R("Cannot pass non-string to std::string");
										var r = n ? nt(t) : t.length, i = en(4 + r + 1), a = i + 4;
										return D[i >> 2] = r, n ? tt(t, a, r + 1) : C.set(t, a), e !== null && e.push($t, i), i;
									},
									J: ve,
									H(e) {
										$t(e);
									}
								});
							},
							_embind_register_std_wstring: (e, t, n) => {
								if (n = V(n), t === 2) var r = it, i = at, a = ot;
								else r = st, i = ct, a = lt;
								X(e, {
									name: n,
									s: (e) => {
										var n = r(e + 4, D[e >> 2] * t, !0);
										return $t(e), n;
									},
									B: (e, r) => {
										if (typeof r != "string") throw new R(`Cannot pass non-string to C++ string type ${n}`);
										var o = a(r), s = en(4 + o + t);
										return D[s >> 2] = o / t, i(r, s + 4, o + t), e !== null && e.push($t, s), s;
									},
									J: ve,
									H(e) {
										$t(e);
									}
								});
							},
							_embind_register_value_object: (e, t, n, r, i, a) => {
								ge[e] = {
									name: V(t),
									cb: He(n, r),
									O: He(i, a),
									qb: []
								};
							},
							_embind_register_value_object_field: (e, t, n, r, i, a, o, s, c, l) => {
								ge[e].qb.push({
									rc: V(t),
									yc: n,
									wc: He(r, i),
									xc: a,
									Sj: o,
									Rj: He(s, c),
									Tj: l
								});
							},
							_embind_register_void: (e, t) => {
								t = V(t), X(e, {
									Ec: !0,
									name: t,
									s: () => {},
									B: () => {}
								});
							},
							_emscripten_throw_longjmp: () => {
								throw Infinity;
							},
							_emval_create_invoker: (e, t, n) => {
								var [r, ...i] = ft(e, t), a = r.B.bind(r), o = i.map((e) => e.J.bind(e));
								e--;
								var s = Array(e);
								return t = `methodCaller<(${i.map((e) => e.name)}) => ${r.name}>`, dt(ue(t, (t, r, i, c) => {
									for (var l = 0, u = 0; u < e; ++u) s[u] = o[u](c + l), l += 8;
									switch (n) {
										case 0:
											var d = z(t).apply(null, s);
											break;
										case 2:
											d = Reflect.construct(z(t), s);
											break;
										case 3:
											d = s[0];
											break;
										case 1: d = z(t)[mt(r)](...s);
									}
									return t = [], d = a(t, d), t.length && (D[i >> 2] = pe(t)), d;
								}));
							},
							_emval_decref: Xe,
							_emval_get_property: (e, t) => (e = z(e), t = z(t), pe(e[t])),
							_emval_incref: (e) => {
								9 < e && (fe[e + 1] += 1);
							},
							_emval_invoke: (e, t, n, r, i) => ut[e](t, n, r, i),
							_emval_new_array: () => pe([]),
							_emval_new_cstring: (e) => pe(mt(e)),
							_emval_new_object: () => pe({}),
							_emval_run_destructors: (e) => {
								_e(z(e)), Xe(e);
							},
							_emval_set_property: (e, t, n) => {
								e = z(e), t = z(t), n = z(n), e[t] = n;
							},
							_gmtime_js: function(e, t, n) {
								e = /* @__PURE__ */ new Date(1e3 * (t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN)), E[n >> 2] = e.getUTCSeconds(), E[n + 4 >> 2] = e.getUTCMinutes(), E[n + 8 >> 2] = e.getUTCHours(), E[n + 12 >> 2] = e.getUTCDate(), E[n + 16 >> 2] = e.getUTCMonth(), E[n + 20 >> 2] = e.getUTCFullYear() - 1900, E[n + 24 >> 2] = e.getUTCDay(), E[n + 28 >> 2] = (e.getTime() - Date.UTC(e.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0;
							},
							_localtime_js: function(e, t, n) {
								e = /* @__PURE__ */ new Date(1e3 * (t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN)), E[n >> 2] = e.getSeconds(), E[n + 4 >> 2] = e.getMinutes(), E[n + 8 >> 2] = e.getHours(), E[n + 12 >> 2] = e.getDate(), E[n + 16 >> 2] = e.getMonth(), E[n + 20 >> 2] = e.getFullYear() - 1900, E[n + 24 >> 2] = e.getDay(), t = e.getFullYear(), E[n + 28 >> 2] = (t % 4 != 0 || t % 100 == 0 && t % 400 != 0 ? gt : ht)[e.getMonth()] + e.getDate() - 1 | 0, E[n + 36 >> 2] = -(60 * e.getTimezoneOffset()), t = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
								var r = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
								E[n + 32 >> 2] = (t != r && e.getTimezoneOffset() == Math.min(r, t)) | 0;
							},
							_timegm_js: function(e) {
								var t = new Date(Date.UTC(E[e + 20 >> 2] + 1900, E[e + 16 >> 2], E[e + 12 >> 2], E[e + 8 >> 2], E[e + 4 >> 2], E[e >> 2], 0));
								return E[e + 24 >> 2] = t.getUTCDay(), E[e + 28 >> 2] = (t.getTime() - Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0, e = t.getTime() / 1e3, vn((F = e, 1 <= +Math.abs(F) ? 0 < F ? Math.floor(F / 4294967296) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)), e >>> 0;
							},
							_tzset_js: (e, t, n, r) => {
								var i = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(i, 0, 1).getTimezoneOffset();
								i = new Date(i, 6, 1).getTimezoneOffset(), D[e >> 2] = 60 * Math.max(a, i), E[t >> 2] = Number(a != i), t = (e) => {
									var t = Math.abs(e);
									return `UTC${0 <= e ? "-" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}${String(t % 60).padStart(2, "0")}`;
								}, e = t(a), t = t(i), i < a ? (tt(e, n, 17), tt(t, r, 17)) : (tt(e, r, 17), tt(t, n, 17));
							},
							beginPixelLocalStorageWEBGL: function(e, t, n) {
								(e = kt[e].F.La) && e.beginPixelLocalStorageWEBGL(new Uint32Array(Sn.buffer, 4 * n, t));
							},
							clock_time_get: function(e, t, n, r) {
								return 0 <= e && 3 >= e ? (e = e === 0 ? Date.now() : performance.now(), e = Math.round(1e6 * e), I = [e >>> 0, (F = e, 1 <= +Math.abs(F) ? 0 < F ? Math.floor(F / 4294967296) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)], E[r >> 2] = I[0], E[r + 4 >> 2] = I[1], 0) : 28;
							},
							decode_image: function(e, t, n, i, a) {
								var o = r.images;
								if (o || (o = /* @__PURE__ */ new Map(), r.images = o), n = new Uint8Array(Sn.buffer, n, i), i = new Uint8Array(i), i.set(n), i = new Blob([i], { type: "image/png" }), a) a = r.imageBlobs, a || (a = /* @__PURE__ */ new Map(), r.imageBlobs = a), a.set(t, i), r.riveReplayWorkerDecodeImage(e, t, i);
								else {
									var s = new Image();
									o.set(t, s), s.src = URL.createObjectURL(i), s.onload = function() {
										r._setWebImage(e, s.width, s.height);
									};
								}
							},
							delete_image: function(e) {
								var t = r.images, n = t && t.get(e);
								n && (n.close && n.close(), t.delete(e)), (t = r.imageBlobs) && t.delete(e);
							},
							emscripten_asm_const_int: (e, t, n) => {
								_t.length = 0;
								for (var r; r = C[t++];) {
									var i = r != 105;
									i &= r != 112, n += i && n % 8 ? 4 : 0, _t.push(r == 112 ? D[n >> 2] : r == 105 ? E[n >> 2] : k[n >> 3]), n += i ? 8 : 4;
								}
								return Qt[e](..._t);
							},
							emscripten_date_now: () => Date.now(),
							emscripten_get_now: () => performance.now(),
							emscripten_is_main_browser_thread: () => !a,
							emscripten_resize_heap: (e) => {
								var t = C.length;
								if (e >>>= 0, 2147483648 < e) return !1;
								for (var n = 1; 4 >= n; n *= 2) {
									var r = t * (1 + .2 / n);
									r = Math.min(r, e + 100663296);
									a: {
										r = (Math.min(2147483648, 65536 * Math.ceil(Math.max(e, r) / 65536)) - Sn.buffer.byteLength + 65535) / 65536 | 0;
										try {
											Sn.grow(r), j();
											var i = 1;
											break a;
										} catch {}
										i = void 0;
									}
									if (i) return !0;
								}
								return !1;
							},
							emscripten_webgl_enable_extension: (e, t) => (e = kt[e], t = t ? le(C, t) : "", t.startsWith("GL_") && (t = t.slice(3)), t == "WEBGL_draw_instanced_base_vertex_base_instance" && vt(Q), t == "WEBGL_multi_draw_instanced_base_vertex_base_instance" && yt(Q), t == "WEBGL_multi_draw" && (Q.Ic = Q.getExtension("WEBGL_multi_draw")), t == "EXT_polygon_offset_clamp" && (Q.qc = Q.getExtension("EXT_polygon_offset_clamp")), t == "EXT_clip_control" && (Q.pc = Q.getExtension("EXT_clip_control")), t == "WEBGL_polygon_mode" && (Q.Xj = Q.getExtension("WEBGL_polygon_mode")), !!e.F.getExtension(t)),
							emscripten_webgl_get_current_context: () => Bt ? Bt.handle : 0,
							emscripten_webgl_make_context_current: (e) => zt(e) ? 0 : -5,
							enable_WEBGL_provoking_vertex: function(e) {
								return e = kt[e].F, e.Bb = e.getExtension("WEBGL_provoking_vertex"), !!e.Bb;
							},
							enable_WEBGL_shader_pixel_local_storage_coherent: function(e) {
								e = kt[e].F;
								let t = e.getExtension("WEBGL_shader_pixel_local_storage");
								if (t && t.isCoherent()) {
									if (t.framebufferTexturePixelLocalStorageWEBGL.length == 5) return e.La = t, !0;
									console.warn("WEBGL_shader_pixel_local_storage is advertised, but a deprecated version has been detected. Disabling.");
								}
								return !1;
							},
							endPixelLocalStorageWEBGL: function(e, t, n) {
								(e = kt[e].F.La) && e.endPixelLocalStorageWEBGL(new Uint32Array(Sn.buffer, 4 * n, t));
							},
							environ_get: (e, t) => {
								var n = 0, r = 0, i;
								for (i of Ht()) {
									var a = t + n;
									D[e + r >> 2] = a, n += tt(i, a, Infinity) + 1, r += 4;
								}
								return 0;
							},
							environ_sizes_get: (e, t) => {
								var n = Ht();
								D[e >> 2] = n.length, e = 0;
								for (var r of n) e += nt(r) + 1;
								return D[t >> 2] = e, 0;
							},
							fd_close: () => 52,
							fd_read: () => 52,
							fd_seek: function() {
								return 70;
							},
							fd_write: (e, t, n, r) => {
								for (var i = 0, a = 0; a < n; a++) {
									var o = D[t >> 2], s = D[t + 4 >> 2];
									t += 8;
									for (var c = 0; c < s; c++) {
										var l = e, u = C[o + c], d = Wt[l];
										u === 0 || u === 10 ? ((l === 1 ? h : g)(le(d)), d.length = 0) : d.push(u);
									}
									i += s;
								}
								return D[r >> 2] = i, 0;
							},
							framebufferPixelLocalClearValuefvWEBGL: function(e, t, n, r, i, a) {
								(e = kt[e].F.La) && e.framebufferPixelLocalClearValuefvWEBGL(t, [
									n,
									r,
									i,
									a
								]);
							},
							framebufferTexturePixelLocalStorageWEBGL: function(e, t, n, r, i, a) {
								(e = kt[e].F.La) && e.framebufferTexturePixelLocalStorageWEBGL(t, Et[n], r, i, a);
							},
							glActiveTexture: (e) => Q.activeTexture(e),
							glAttachShader: (e, t) => {
								Q.attachShader(Ct[e], Dt[t]);
							},
							glBindAttribLocation: (e, t, n) => {
								Q.bindAttribLocation(Ct[e], t, n ? le(C, n) : "");
							},
							glBindBuffer: (e, t) => {
								e == 35051 ? Q.Sa = t : e == 35052 && (Q.da = t), Q.bindBuffer(e, St[t]);
							},
							glBindBufferRange: (e, t, n, r, i) => {
								Q.bindBufferRange(e, t, St[n], r, i);
							},
							glBindFramebuffer: (e, t) => {
								Q.bindFramebuffer(e, wt[t]);
							},
							glBindRenderbuffer: (e, t) => {
								Q.bindRenderbuffer(e, Tt[t]);
							},
							glBindSampler: (e, t) => {
								Q.bindSampler(e, At[t]);
							},
							glBindTexture: (e, t) => {
								Q.bindTexture(e, Et[t]);
							},
							glBindVertexArray: (e) => {
								Q.bindVertexArray(Ot[e]);
							},
							glBlendColor: (e, t, n, r) => Q.blendColor(e, t, n, r),
							glBlendEquation: (e) => Q.blendEquation(e),
							glBlendEquationSeparate: (e, t) => Q.blendEquationSeparate(e, t),
							glBlendFunc: (e, t) => Q.blendFunc(e, t),
							glBlendFuncSeparate: (e, t, n, r) => Q.blendFuncSeparate(e, t, n, r),
							glBlitFramebuffer: (e, t, n, r, i, a, o, s, c, l) => Q.blitFramebuffer(e, t, n, r, i, a, o, s, c, l),
							glBufferData: (e, t, n, r) => {
								n && t ? Q.bufferData(e, C, r, n, t) : Q.bufferData(e, t, r);
							},
							glBufferSubData: (e, t, n, r) => {
								n && Q.bufferSubData(e, t, C, r, n);
							},
							glCheckFramebufferStatus: (e) => Q.checkFramebufferStatus(e),
							glClear: (e) => Q.clear(e),
							glClearBufferfi: (e, t, n, r) => Q.clearBufferfi(e, t, n, r),
							glClearBufferfv: (e, t, n) => {
								Q.clearBufferfv(e, t, O, n >> 2);
							},
							glClearBufferiv: (e, t, n) => {
								Q.clearBufferiv(e, t, E, n >> 2);
							},
							glClearBufferuiv: (e, t, n) => {
								Q.clearBufferuiv(e, t, D, n >> 2);
							},
							glClearColor: (e, t, n, r) => Q.clearColor(e, t, n, r),
							glClearDepthf: (e) => Q.clearDepth(e),
							glClearStencil: (e) => Q.clearStencil(e),
							glClientWaitSync: (e, t, n, r) => Q.clientWaitSync(jt[e], t, (n >>> 0) + 4294967296 * r),
							glColorMask: (e, t, n, r) => {
								Q.colorMask(!!e, !!t, !!n, !!r);
							},
							glCompileShader: (e) => {
								Q.compileShader(Dt[e]);
							},
							glCompressedTexSubImage2D: (e, t, n, r, i, a, o, s, c) => {
								Q.da || !s ? Q.compressedTexSubImage2D(e, t, n, r, i, a, o, s, c) : Q.compressedTexSubImage2D(e, t, n, r, i, a, o, C, c, s);
							},
							glCompressedTexSubImage3D: (e, t, n, r, i, a, o, s, c, l, u) => {
								Q.da ? Q.compressedTexSubImage3D(e, t, n, r, i, a, o, s, c, l, u) : Q.compressedTexSubImage3D(e, t, n, r, i, a, o, s, c, C, u, l);
							},
							glCreateProgram: () => {
								var e = It(Ct), t = Q.createProgram();
								return t.name = e, t.Ja = t.Ha = t.Ia = 0, t.ib = 1, Ct[e] = t, e;
							},
							glCreateShader: (e) => {
								var t = It(Dt);
								return Dt[t] = Q.createShader(e), t;
							},
							glCullFace: (e) => Q.cullFace(e),
							glDeleteBuffers: (e, t) => {
								for (var n = 0; n < e; n++) {
									var r = E[t + 4 * n >> 2], i = St[r];
									i && (Q.deleteBuffer(i), i.name = 0, St[r] = null, r == Q.Sa && (Q.Sa = 0), r == Q.da && (Q.da = 0));
								}
							},
							glDeleteFramebuffers: (e, t) => {
								for (var n = 0; n < e; ++n) {
									var r = E[t + 4 * n >> 2], i = wt[r];
									i && (Q.deleteFramebuffer(i), i.name = 0, wt[r] = null);
								}
							},
							glDeleteProgram: (e) => {
								if (e) {
									var t = Ct[e];
									t ? (Q.deleteProgram(t), t.name = 0, Ct[e] = null) : $ ||= 1281;
								}
							},
							glDeleteRenderbuffers: (e, t) => {
								for (var n = 0; n < e; n++) {
									var r = E[t + 4 * n >> 2], i = Tt[r];
									i && (Q.deleteRenderbuffer(i), i.name = 0, Tt[r] = null);
								}
							},
							glDeleteSamplers: (e, t) => {
								for (var n = 0; n < e; n++) {
									var r = E[t + 4 * n >> 2], i = At[r];
									i && (Q.deleteSampler(i), i.name = 0, At[r] = null);
								}
							},
							glDeleteShader: (e) => {
								if (e) {
									var t = Dt[e];
									t ? (Q.deleteShader(t), Dt[e] = null) : $ ||= 1281;
								}
							},
							glDeleteSync: (e) => {
								if (e) {
									var t = jt[e];
									t ? (Q.deleteSync(t), t.name = 0, jt[e] = null) : $ ||= 1281;
								}
							},
							glDeleteTextures: (e, t) => {
								for (var n = 0; n < e; n++) {
									var r = E[t + 4 * n >> 2], i = Et[r];
									i && (Q.deleteTexture(i), i.name = 0, Et[r] = null);
								}
							},
							glDeleteVertexArrays: (e, t) => {
								for (var n = 0; n < e; n++) {
									var r = E[t + 4 * n >> 2];
									Q.deleteVertexArray(Ot[r]), Ot[r] = null;
								}
							},
							glDepthFunc: (e) => Q.depthFunc(e),
							glDepthMask: (e) => {
								Q.depthMask(!!e);
							},
							glDepthRangef: (e, t) => Q.depthRange(e, t),
							glDisable: (e) => Q.disable(e),
							glDisableVertexAttribArray: (e) => {
								Q.disableVertexAttribArray(e);
							},
							glDrawArrays: (e, t, n) => {
								Q.drawArrays(e, t, n);
							},
							glDrawArraysInstanced: (e, t, n, r) => {
								Q.drawArraysInstanced(e, t, n, r);
							},
							glDrawBuffers: (e, t) => {
								for (var n = Gt[e], r = 0; r < e; r++) n[r] = E[t + 4 * r >> 2];
								Q.drawBuffers(n);
							},
							glDrawElements: (e, t, n, r) => {
								Q.drawElements(e, t, n, r);
							},
							glDrawElementsInstanced: (e, t, n, r, i) => {
								Q.drawElementsInstanced(e, t, n, r, i);
							},
							glEnable: (e) => Q.enable(e),
							glEnableVertexAttribArray: (e) => {
								Q.enableVertexAttribArray(e);
							},
							glFenceSync: (e, t) => (e = Q.fenceSync(e, t)) ? (t = It(jt), e.name = t, jt[t] = e, t) : 0,
							glFlush: () => Q.flush(),
							glFramebufferRenderbuffer: (e, t, n, r) => {
								Q.framebufferRenderbuffer(e, t, n, Tt[r]);
							},
							glFramebufferTexture2D: (e, t, n, r, i) => {
								Q.framebufferTexture2D(e, t, n, Et[r], i);
							},
							glFramebufferTextureLayer: (e, t, n, r, i) => {
								Q.framebufferTextureLayer(e, t, Et[n], r, i);
							},
							glFrontFace: (e) => Q.frontFace(e),
							glGenBuffers: (e, t) => {
								Lt(e, t, "createBuffer", St);
							},
							glGenFramebuffers: (e, t) => {
								Lt(e, t, "createFramebuffer", wt);
							},
							glGenRenderbuffers: (e, t) => {
								Lt(e, t, "createRenderbuffer", Tt);
							},
							glGenSamplers: (e, t) => {
								Lt(e, t, "createSampler", At);
							},
							glGenTextures: (e, t) => {
								Lt(e, t, "createTexture", Et);
							},
							glGenVertexArrays: (e, t) => {
								Lt(e, t, "createVertexArray", Ot);
							},
							glGenerateMipmap: (e) => Q.generateMipmap(e),
							glGetFloatv: (e, t) => qt(e, t, 2),
							glGetFramebufferAttachmentParameteriv: (e, t, n, r) => {
								e = Q.getFramebufferAttachmentParameter(e, t, n), (e instanceof WebGLRenderbuffer || e instanceof WebGLTexture) && (e = e.name | 0), E[r >> 2] = e;
							},
							glGetIntegerv: (e, t) => qt(e, t, 0),
							glGetProgramInfoLog: (e, t, n, r) => {
								e = Q.getProgramInfoLog(Ct[e]), e === null && (e = "(unknown error)"), t = 0 < t && r ? tt(e, r, t) : 0, n && (E[n >> 2] = t);
							},
							glGetProgramiv: (e, t, n) => {
								if (n) {
									if (e >= xt) $ ||= 1281;
									else if (e = Ct[e], t == 35716) e = Q.getProgramInfoLog(e), e === null && (e = "(unknown error)"), E[n >> 2] = e.length + 1;
									else if (t == 35719) {
										if (!e.Ja) {
											var r = Q.getProgramParameter(e, 35718);
											for (t = 0; t < r; ++t) e.Ja = Math.max(e.Ja, Q.getActiveUniform(e, t).name.length + 1);
										}
										E[n >> 2] = e.Ja;
									} else if (t == 35722) {
										if (!e.Ha) for (r = Q.getProgramParameter(e, 35721), t = 0; t < r; ++t) e.Ha = Math.max(e.Ha, Q.getActiveAttrib(e, t).name.length + 1);
										E[n >> 2] = e.Ha;
									} else if (t == 35381) {
										if (!e.Ia) for (r = Q.getProgramParameter(e, 35382), t = 0; t < r; ++t) e.Ia = Math.max(e.Ia, Q.getActiveUniformBlockName(e, t).length + 1);
										E[n >> 2] = e.Ia;
									} else E[n >> 2] = Q.getProgramParameter(e, t);
								} else $ ||= 1281;
							},
							glGetShaderInfoLog: (e, t, n, r) => {
								e = Q.getShaderInfoLog(Dt[e]), e === null && (e = "(unknown error)"), t = 0 < t && r ? tt(e, r, t) : 0, n && (E[n >> 2] = t);
							},
							glGetShaderiv: (e, t, n) => {
								n ? t == 35716 ? (e = Q.getShaderInfoLog(Dt[e]), e === null && (e = "(unknown error)"), E[n >> 2] = e ? e.length + 1 : 0) : t == 35720 ? (e = Q.getShaderSource(Dt[e]), E[n >> 2] = e ? e.length + 1 : 0) : E[n >> 2] = Q.getShaderParameter(Dt[e], t) : $ ||= 1281;
							},
							glGetString: (e) => {
								var t = Mt[e];
								if (!t) {
									switch (e) {
										case 7939:
											t = Jt(Kt().join(" "));
											break;
										case 7936:
										case 7937:
										case 37445:
										case 37446:
											(t = Q.getParameter(e)) || ($ ||= 1280), t = t ? Jt(t) : 0;
											break;
										case 7938:
											t = Jt(`OpenGL ES 3.0 (${Q.getParameter(7938)})`);
											break;
										case 35724:
											t = Q.getParameter(35724);
											var n = t.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
											n !== null && (n[1].length == 3 && (n[1] += "0"), t = `OpenGL ES GLSL ES ${n[1]} (${t})`), t = Jt(t);
											break;
										default: $ ||= 1280;
									}
									Mt[e] = t;
								}
								return t;
							},
							glGetStringi: (e, t) => {
								if (2 > Bt.version) return $ ||= 1282, 0;
								var n = Nt[e];
								if (n) return 0 > t || t >= n.length ? ($ ||= 1281, 0) : n[t];
								switch (e) {
									case 7939: return n = Kt().map(Jt), n = Nt[e] = n, 0 > t || t >= n.length ? ($ ||= 1281, 0) : n[t];
									default: return $ ||= 1280, 0;
								}
							},
							glGetUniformBlockIndex: (e, t) => Q.getUniformBlockIndex(Ct[e], t ? le(C, t) : ""),
							glGetUniformLocation: (e, t) => {
								if (t = t ? le(C, t) : "", e = Ct[e]) {
									var n = e, r = n.sa, i = n.Lb, a;
									if (!r) {
										n.sa = r = {}, n.Kb = {};
										var o = Q.getProgramParameter(n, 35718);
										for (a = 0; a < o; ++a) {
											var s = Q.getActiveUniform(n, a), c = s.name;
											s = s.size;
											var l = Yt(c);
											l = 0 < l ? c.slice(0, l) : c;
											var u = n.ib;
											for (n.ib += s, i[l] = [s, u], c = 0; c < s; ++c) r[u] = c, n.Kb[u++] = l;
										}
									}
									if (n = e.sa, r = 0, i = t, a = Yt(t), 0 < a && (r = parseInt(t.slice(a + 1)) >>> 0, i = t.slice(0, a)), (i = e.Lb[i]) && r < i[0] && (r += i[1], n[r] = n[r] || Q.getUniformLocation(e, t))) return r;
								} else $ ||= 1281;
								return -1;
							},
							glInvalidateFramebuffer: (e, t, n) => {
								for (var r = Gt[t], i = 0; i < t; i++) r[i] = E[n + 4 * i >> 2];
								Q.invalidateFramebuffer(e, r);
							},
							glLinkProgram: (e) => {
								e = Ct[e], Q.linkProgram(e), e.sa = 0, e.Lb = {};
							},
							glPixelStorei: (e, t) => {
								e == 3317 ? Pt = t : e == 3314 && (Ft = t), Q.pixelStorei(e, t);
							},
							glPolygonOffset: (e, t) => Q.polygonOffset(e, t),
							glReadBuffer: (e) => Q.readBuffer(e),
							glReadPixels: (e, t, n, r, i, a, o) => {
								if (Q.Sa) Q.readPixels(e, t, n, r, i, a, o);
								else {
									var s = Xt(a);
									o >>>= 31 - Math.clz32(s.BYTES_PER_ELEMENT), Q.readPixels(e, t, n, r, i, a, s, o);
								}
							},
							glRenderbufferStorage: (e, t, n, r) => Q.renderbufferStorage(e, t, n, r),
							glRenderbufferStorageMultisample: (e, t, n, r, i) => Q.renderbufferStorageMultisample(e, t, n, r, i),
							glSamplerParameterf: (e, t, n) => {
								Q.samplerParameterf(At[e], t, n);
							},
							glSamplerParameteri: (e, t, n) => {
								Q.samplerParameteri(At[e], t, n);
							},
							glScissor: (e, t, n, r) => Q.scissor(e, t, n, r),
							glShaderSource: (e, t, n, r) => {
								for (var i = "", a = 0; a < t; ++a) {
									var o = (o = D[n + 4 * a >> 2]) ? le(C, o, r ? D[r + 4 * a >> 2] : void 0) : "";
									i += o;
								}
								Q.shaderSource(Dt[e], i);
							},
							glStencilFunc: (e, t, n) => Q.stencilFunc(e, t, n),
							glStencilFuncSeparate: (e, t, n, r) => Q.stencilFuncSeparate(e, t, n, r),
							glStencilMask: (e) => Q.stencilMask(e),
							glStencilMaskSeparate: (e, t) => Q.stencilMaskSeparate(e, t),
							glStencilOp: (e, t, n) => Q.stencilOp(e, t, n),
							glStencilOpSeparate: (e, t, n, r) => Q.stencilOpSeparate(e, t, n, r),
							glTexParameteri: (e, t, n) => Q.texParameteri(e, t, n),
							glTexStorage2D: (e, t, n, r, i) => Q.texStorage2D(e, t, n, r, i),
							glTexStorage3D: (e, t, n, r, i, a) => Q.texStorage3D(e, t, n, r, i, a),
							glTexSubImage2D: (e, t, n, r, i, a, o, s, c) => {
								if (Q.da) Q.texSubImage2D(e, t, n, r, i, a, o, s, c);
								else if (c) {
									var l = Xt(s);
									Q.texSubImage2D(e, t, n, r, i, a, o, s, l, c >>> 31 - Math.clz32(l.BYTES_PER_ELEMENT));
								} else {
									if (c) {
										l = Xt(s);
										var u = a * ((Ft || i) * ({
											5: 3,
											6: 4,
											8: 2,
											29502: 3,
											29504: 4,
											26917: 2,
											26918: 2,
											29846: 3,
											29847: 4
										}[o - 6402] || 1) * l.BYTES_PER_ELEMENT + Pt - 1 & -Pt);
										c = l.subarray(c >>> 31 - Math.clz32(l.BYTES_PER_ELEMENT), c + u >>> 31 - Math.clz32(l.BYTES_PER_ELEMENT));
									} else c = null;
									Q.texSubImage2D(e, t, n, r, i, a, o, s, c);
								}
							},
							glTexSubImage3D: (e, t, n, r, i, a, o, s, c, l, u) => {
								if (Q.da) Q.texSubImage3D(e, t, n, r, i, a, o, s, c, l, u);
								else if (u) {
									var d = Xt(l);
									Q.texSubImage3D(e, t, n, r, i, a, o, s, c, l, d, u >>> 31 - Math.clz32(d.BYTES_PER_ELEMENT));
								} else Q.texSubImage3D(e, t, n, r, i, a, o, s, c, l, null);
							},
							glUniform1i: (e, t) => {
								var n = Q, r = n.uniform1i, i = Q.lc;
								if (i) {
									var a = i.sa[e];
									typeof a == "number" && (i.sa[e] = a = Q.getUniformLocation(i, i.Kb[e] + (0 < a ? `[${a}]` : ""))), e = a;
								} else $ ||= 1282, e = void 0;
								r.call(n, e, t);
							},
							glUniformBlockBinding: (e, t, n) => {
								e = Ct[e], Q.uniformBlockBinding(e, t, n);
							},
							glUseProgram: (e) => {
								e = Ct[e], Q.useProgram(e), Q.lc = e;
							},
							glVertexAttribDivisor: (e, t) => {
								Q.vertexAttribDivisor(e, t);
							},
							glVertexAttribIPointer: (e, t, n, r, i) => {
								Q.vertexAttribIPointer(e, t, n, r, i);
							},
							glVertexAttribPointer: (e, t, n, r, i, a) => {
								Q.vertexAttribPointer(e, t, n, !!r, i, a);
							},
							glViewport: (e, t, n, r) => Q.viewport(e, t, n, r),
							invoke_vii: Tn,
							isWindowsBrowser: function() {
								return -1 < navigator.platform.indexOf("Win");
							},
							provokingVertexWEBGL: function(e, t) {
								(e = kt[e].F.Bb) && e.provokingVertexWEBGL(t);
							},
							riveWebAttachRunner: function(e) {
								let t = r.riveScripting;
								if (!t) return 0;
								let n = (e, t) => {
									e = Jt(e), t(e), $t(e);
								};
								return t.Zb({
									exports: r,
									Ac: (e) => (e = D[(un() >> 2) + e], e === 0 ? void 0 : Cn.get(e)),
									X: () => C,
									sb: () => k,
									ra: oe,
									Ma: Zt,
									qa: ae,
									ab: en,
									ea: $t,
									ua: (e) => e ? le(C, e) : "",
									Pb: (e, t, n) => tt(e, t, n),
									memory: () => Sn,
									Qc: (e, t, i) => n(i, (n) => r._rive_web_processor_event(e, t, n)),
									Za: (e, t) => n(t, (t) => cn(e, t)),
									Fc: (e, t) => n(t, (t) => sn(e, t)),
									Gc: (e) => (e = ln(e), e === 0 ? null : e ? le(C, e) : ""),
									Lc: e
								}), 1;
							},
							riveWebAudioRefusal: function() {
								let e = r.riveScripting.audioRefusal();
								return e === null ? 0 : Jt(e);
							},
							riveWebCall: function(e, t, n, i, a, o, s) {
								return r.riveScripting.call(e, t, n, i, a, o, s);
							},
							riveWebHasExport: function(e, t) {
								return r.riveScripting.zc(e, t);
							},
							riveWebJobRun: function(e, t, n, i, a, o, s, c, l, u) {
								return e = r.riveScripting.runJob(e, t, () => C.slice(n, n + i), a, C.slice(o, o + s), () => Atomics.load(E, c >> 2), l), e.ok ? (u = on(u, e.output.length), C.set(e.output, u), 0) : Jt(e.error);
							},
							riveWebMemoryPages: function(e) {
								return r.riveScripting.Mc(e);
							},
							riveWebPreparing: function(e) {
								return r.riveScripting.$(e);
							},
							riveWebRaise: function(e, t) {
								r.riveScripting.Rc(e, t);
							},
							riveWebReadMemory: function(e, t, n, i) {
								return r.riveScripting.read(e, t >>> 0, n, i >>> 0);
							},
							riveWebRegister: function(e, t, n) {
								r.riveScripting.register(e, C.subarray(t, t + n));
							},
							riveWebRelease: function(e) {
								r.riveScripting?.release(e);
							},
							riveWebStart: function(e) {
								return e = r.riveScripting.start(e), e === null ? 0 : Jt(e);
							},
							riveWebStringLength: function(e, t) {
								return r.riveScripting.Wj(e, t >>> 0);
							},
							riveWebTimeOrigin: function() {
								return performance.timeOrigin;
							},
							riveWebWorkerCollect: function(e) {
								return e = r.riveScripting.workerCollect(e), e === null ? 0 : Jt(e);
							},
							riveWebWorkerEnd: function(e) {
								r.riveScripting.workerEnd(e);
							},
							riveWebWorkerStart: function(e, t, n, i, a, o, s, c, l, u) {
								let d = !1;
								return t = r.riveScripting.workerStart(t, n, () => C.slice(i, i + a), o, C.slice(s, s + c), {
									wait: (t, n, r) => dn(e, t, n, r),
									finished: (t, n) => {
										if (!d) {
											if (d = !0, t) {
												let e = on(l, n.length);
												C.set(n, e);
											}
											fn(e, t);
										}
									},
									Vj: () => pn(e)
								}), t.ok ? (D[u >> 2] = t.id, 0) : Jt(t.error);
							},
							riveWebWorkerWake: function(e, t, n) {
								return e = r.riveScripting.workerWake(e, t, n), e === null ? 0 : Jt(e);
							},
							riveWebWriteMemory: function(e, t, n, i) {
								return r.riveScripting.write(e, t >>> 0, n, i >>> 0);
							},
							upload_image: function(e, t) {
								var n = r.images;
								n && (t = n.get(t)) && (e = kt[e].F, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1));
							},
							wasm_start_image_decode: function(e, t, n) {
								t = new Uint8Array(Sn.buffer, t, n);
								var r = new Uint8Array(n);
								r.set(t), Promise.resolve().then(function() {
									return createImageBitmap(new Blob([r]));
								}).then(function(t) {
									var n = new OffscreenCanvas(t.width, t.height).getContext("2d");
									n.drawImage(t, 0, 0), n = n.getImageData(0, 0, t.width, t.height);
									var r = n.data.length, i = nn(r);
									i ? (new Uint8Array(Sn.buffer, i, r).set(n.data), rn(e, t.width, t.height, i, r)) : an(e);
								}).catch(function() {
									an(e);
								});
							}
						};
						function Tn(e, t, n) {
							var r = xn();
							try {
								Cn.get(e)(t, n);
							} catch (e) {
								if (yn(r), e !== e + 0) throw e;
								_n(1, 0);
							}
						}
						var En = await async function() {
							function e(e) {
								return e = En = e.exports, $t = e.free, en = e.malloc, r._setWebImage = e.setWebImage, tn = e.__getTypeName, nn = r._wasm_image_decode_alloc = e.wasm_image_decode_alloc, rn = r._wasm_image_decode_complete = e.wasm_image_decode_complete, an = r._wasm_image_decode_error = e.wasm_image_decode_error, r._rive_web_vm_module_export = e.rive_web_vm_module_export, r._rive_web_vm_frame_boundary = e.rive_web_vm_frame_boundary, on = r._rive_web_job_output = e.rive_web_job_output, sn = r._rive_web_lane_fail = e.rive_web_lane_fail, cn = r._rive_web_lane_log = e.rive_web_lane_log, ln = r._rive_web_lane_fuel = e.rive_web_lane_fuel, r._rive_web_vm_booting = e.rive_web_vm_booting, r._rive_web_vm_start_fuel = e.rive_web_vm_start_fuel, r._rive_web_vm_start_refusal = e.rive_web_vm_start_refusal, un = r._rive_web_calls = e.rive_web_calls, dn = r._rive_web_worker_wait = e.rive_web_worker_wait, fn = r._rive_web_worker_finished = e.rive_web_worker_finished, pn = r._rive_web_worker_stopping = e.rive_web_worker_stopping, mn = r._ma_device__on_notification_unlocked = e.ma_device__on_notification_unlocked, r._ma_malloc_emscripten = e.ma_malloc_emscripten, r._ma_free_emscripten = e.ma_free_emscripten, hn = r._ma_device_process_pcm_frames_capture__webaudio = e.ma_device_process_pcm_frames_capture__webaudio, gn = r._ma_device_process_pcm_frames_playback__webaudio = e.ma_device_process_pcm_frames_playback__webaudio, _n = e.setThrew, vn = e._emscripten_tempret_set, yn = e._emscripten_stack_restore, bn = e._emscripten_stack_alloc, xn = e.emscripten_stack_get_current, ze.vij = e.dynCall_vij, ze.iij = e.dynCall_iij, ze.ji = e.dynCall_ji, ze.iijii = e.dynCall_iijii, ze.iiiji = e.dynCall_iiiji, ze.iiji = e.dynCall_iiji, ze.jii = e.dynCall_jii, ze.vijj = e.dynCall_vijj, ze.jiji = e.dynCall_jiji, Sn = e.memory, Cn = e.__indirect_function_table, j(), En;
							}
							var t = {
								env: wn,
								wasi_snapshot_preview1: wn
							};
							return r.instantiateWasm ? new Promise((n) => {
								r.instantiateWasm(t, (t, r) => {
									n(e(t, r));
								});
							}) : (N ??= r.locateFile ? r.locateFile("webgl2_advanced.wasm", f) : f + "webgl2_advanced.wasm", e((await P(t)).instance));
						}();
						return (function() {
							function e() {
								if (r.calledRun = !0, !v) {
									if (A = !0, En.__wasm_call_ctors(), b?.(r), r.onRuntimeInitialized?.(), r.postRun) for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) {
										var e = r.postRun.shift();
										L.push(e);
									}
									ne(L);
								}
							}
							if (r.preRun) for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) ie();
							ne(re), r.setStatus ? (r.setStatus("Running..."), setTimeout(() => {
								setTimeout(() => r.setStatus(""), 1), e();
							}, 1)) : e();
						})(), n = A ? r : new Promise((e, t) => {
							b = e, x = t;
						}), n;
					};
				})();
			}),
			(() => {}),
			((e) => {
				e.exports = /*#__PURE__*/ JSON.parse("{\"name\":\"@rive-app/webgl2\",\"version\":\"2.49.4\",\"description\":\"Rive web runtime with the WebGL2 renderer. Rive is an agent-native 2D and 3D engine for games, apps, and interactive UI.\",\"main\":\"rive.js\",\"homepage\":\"https://rive.app\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/rive-app/rive-wasm/tree/master/js\"},\"keywords\":[\"rive\",\"animation\",\"interactive\",\"ui\",\"game-engine\",\"graphics\"],\"author\":\"Rive\",\"contributors\":[\"Luigi Rosso <luigi@rive.app> (https://rive.app)\",\"Maxwell Talbot <max@rive.app> (https://rive.app)\",\"Arthur Vivian <arthur@rive.app> (https://rive.app)\",\"Umberto Sonnino <umberto@rive.app> (https://rive.app)\",\"Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)\",\"Chris Dalton <chris@rive.app> (https://rive.app)\"],\"license\":\"MIT\",\"files\":[\"rive.js\",\"rive.wasm\",\"rive_fallback.wasm\",\"rive.js.map\",\"rive.d.ts\",\"rive_advanced.mjs.d.ts\",\"runtimeLoader.d.ts\",\"utils\",\"semantics\"],\"typings\":\"rive.d.ts\",\"dependencies\":{},\"browser\":{\"fs\":false,\"path\":false}}");
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					AccessibilityOverlay: () => i.AccessibilityOverlay,
					CHECK_STATE_MASK: () => a.CHECK_STATE_MASK,
					CHECK_STATE_OFFSET: () => a.CHECK_STATE_OFFSET,
					SemanticActionType: () => a.SemanticActionType,
					SemanticCheckState: () => a.SemanticCheckState,
					SemanticMode: () => a.SemanticMode,
					SemanticRole: () => a.SemanticRole,
					SemanticState: () => a.SemanticState,
					SemanticTrait: () => a.SemanticTrait,
					SemanticTreeModel: () => r.SemanticTreeModel,
					checkStateOf: () => a.checkStateOf,
					hasState: () => a.hasState,
					hasTrait: () => a.hasTrait,
					roleName: () => a.roleName,
					stateNames: () => a.stateNames,
					traitNames: () => a.traitNames
				});
				var r = n(8), i = n(10), a = n(9);
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { SemanticTreeModel: () => a });
				var r = n(9), i = function(e, t, n) {
					if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
					return e.concat(a || Array.prototype.slice.call(t));
				}, a = function() {
					function e() {
						this._nodesById = /* @__PURE__ */ new Map(), this._roots = [], this._semanticVersion = 0, this._geometryVersion = 0, this._geometryChangedIds = /* @__PURE__ */ new Set(), this._semanticChangedIds = /* @__PURE__ */ new Set(), this._debug = !1;
					}
					return Object.defineProperty(e.prototype, "nodeCount", {
						get: function() {
							return this._nodesById.size;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "semanticVersion", {
						get: function() {
							return this._semanticVersion;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "geometryVersion", {
						get: function() {
							return this._geometryVersion;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "geometryChangedIds", {
						get: function() {
							return this._geometryChangedIds;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "semanticChangedIds", {
						get: function() {
							return this._semanticChangedIds;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "roots", {
						get: function() {
							return this._roots;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.nodeById = function(e) {
						return this._nodesById.get(e);
					}, e.prototype.focusedNode = function() {
						for (var e = this._nodesById.values(), t = e.next(); !t.done; t = e.next()) if ((0, r.hasState)(t.value.stateFlags, r.SemanticState.Focused)) return t.value;
					}, e.prototype.siblingIndexOf = function(e) {
						var t = this._nodesById.get(e);
						if (!t) return -1;
						if (t.parentId < 0) return this._roots.indexOf(e);
						var n = this._nodesById.get(t.parentId);
						return n ? n.children.indexOf(e) : -1;
					}, e.prototype.detach = function(e) {
						var t = this._nodesById.get(e);
						if (t) {
							if (t.parentId < 0) {
								var n = this._roots.indexOf(e);
								n !== -1 && this._roots.splice(n, 1);
							} else {
								var r = this._nodesById.get(t.parentId);
								if (r) {
									var n = r.children.indexOf(e);
									n !== -1 && r.children.splice(n, 1);
								}
							}
						}
					}, e.prototype.attach = function(e, t, n) {
						var r = this._nodesById.get(e);
						if (r) {
							if (t < 0) {
								r.parentId = -1;
								var i = o(n, 0, this._roots.length);
								this._roots.splice(i, 0, e);
							} else {
								var a = this._nodesById.get(t);
								if (!a) r.parentId = -1, this._roots.push(e);
								else {
									r.parentId = t;
									var i = o(n, 0, a.children.length);
									a.children.splice(i, 0, e);
								}
							}
						}
					}, e.prototype.removeSubtree = function(e) {
						var t = this._nodesById.get(e);
						if (t) {
							for (var n = i([], t.children, !0), r = 0, a = n; r < a.length; r++) {
								var o = a[r];
								this.removeSubtree(o);
							}
							this.detach(e), this._nodesById.delete(e);
						}
					}, e.prototype.applyDiff = function(e) {
						var t, n, r = this;
						this._geometryChangedIds.clear(), this._semanticChangedIds.clear();
						for (var i = !1, a = !1, o = function() {
							i = !0;
						}, p = function(e) {
							i = !0, r._semanticChangedIds.add(e);
						}, m = function(e) {
							a = !0, r._geometryChangedIds.add(e);
						}, h = 0, g = e.removed; h < g.length; h++) {
							var _ = g[h];
							this._nodesById.has(_) && (this.removeSubtree(_), o());
						}
						for (var v = 0, y = e.added; v < y.length; v++) {
							var b = y[v], x = this._nodesById.get(b.id);
							x ? (l(x, b) && (d(x, b), p(b.id)), u(x, b) && (f(x, b), m(b.id))) : (this._nodesById.set(b.id, c(b)), p(b.id), m(b.id)), this.detach(b.id), this.attach(b.id, b.parentId, b.siblingIndex);
						}
						for (var S = 0, C = e.moved; S < C.length; S++) {
							var b = C[S], x = this._nodesById.get(b.id);
							if (x) {
								var w = x.parentId !== b.parentId, T = this.siblingIndexOf(b.id);
								u(x, b) && (f(x, b), m(b.id)), this.detach(b.id), this.attach(b.id, b.parentId, b.siblingIndex), (w || this.siblingIndexOf(b.id) !== T) && o();
							}
						}
						for (var E = 0, D = e.childrenUpdated; E < D.length; E++) {
							var O = D[E];
							if (O.parentId < 0) {
								var k = O.childIds.filter(function(e) {
									return r._nodesById.has(e);
								});
								if (!s(this._roots, k)) {
									this._roots.length = 0, (t = this._roots).push.apply(t, k);
									for (var A = 0, j = this._roots; A < j.length; A++) {
										var _ = j[A], M = this._nodesById.get(_);
										M && (M.parentId = -1);
									}
									o();
								}
							} else {
								var N = this._nodesById.get(O.parentId);
								if (!N) continue;
								var k = O.childIds.filter(function(e) {
									return r._nodesById.has(e);
								});
								if (!s(N.children, k)) {
									N.children.length = 0, (n = N.children).push.apply(n, k);
									for (var ee = 0, te = N.children; ee < te.length; ee++) {
										var _ = te[ee], M = this._nodesById.get(_);
										M && (M.parentId = O.parentId);
									}
									o();
								}
							}
						}
						for (var P = 0, F = e.updatedSemantic; P < F.length; P++) {
							var b = F[P], x = this._nodesById.get(b.id);
							x && l(x, b) && (d(x, b), p(b.id));
						}
						for (var I = 0, ne = e.updatedGeometry; I < ne.length; I++) {
							var b = ne[I], x = this._nodesById.get(b.id);
							x && u(x, b) && (f(x, b), m(b.id));
						}
						(i || a) && (i && this._semanticVersion++, a && this._geometryVersion++, this._debug && this.logDiff(e, i, a));
					}, Object.defineProperty(e.prototype, "debug", {
						set: function(e) {
							this._debug = e;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.logDiff = function(e, t, n) {
						for (var i = [`[rive:semantics] semantic v${this._semanticVersion}` + (n ? ` geometry v${this._geometryVersion}` : "") + (t ? "" : " (geometry-only)")], a = 0, o = e.removed; a < o.length; a++) {
							var s = o[a];
							i.push(`  - removed #${s}`);
						}
						for (var c = 0, l = e.added; c < l.length; c++) {
							var u = l[c];
							i.push(`  + added #${u.id} ${(0, r.roleName)(u.role)}` + (u.label ? ` "${u.label}"` : "") + ` bounds:(${u.minX.toFixed(1)},${u.minY.toFixed(1)})-(${u.maxX.toFixed(1)},${u.maxY.toFixed(1)}) states=[${(0, r.stateNames)(u.stateFlags)}] traits=[${(0, r.traitNames)(u.traitFlags)}]`);
						}
						for (var d = 0, f = e.moved; d < f.length; d++) {
							var u = f[d];
							i.push(`  ~ moved #${u.id} → parent=${u.parentId} idx=${u.siblingIndex} bounds:(${u.minX.toFixed(1)},${u.minY.toFixed(1)})-(${u.maxX.toFixed(1)},${u.maxY.toFixed(1)})`);
						}
						for (var p = 0, m = e.childrenUpdated; p < m.length; p++) {
							var h = m[p];
							i.push(`  ↕ children of ${h.parentId < 0 ? "root" : "#" + h.parentId}: [${h.childIds.join(", ")}]`);
						}
						for (var g = 0, _ = e.updatedSemantic; g < _.length; g++) {
							var u = _[g];
							i.push(`  ✎ semantic #${u.id} ${(0, r.roleName)(u.role)}` + (u.label ? ` "${u.label}"` : "") + ` states=[${(0, r.stateNames)(u.stateFlags)}] traits=[${(0, r.traitNames)(u.traitFlags)}]`);
						}
						for (var v = 0, y = e.updatedGeometry; v < y.length; v++) {
							var u = y[v];
							i.push(`  ⊞ geometry #${u.id} (${u.minX.toFixed(1)},${u.minY.toFixed(1)})-(${u.maxX.toFixed(1)},${u.maxY.toFixed(1)})`);
						}
						console.log(i.join("\n"));
					}, e.prototype.flattened = function() {
						for (var e = this, t = [], n = function(r, i) {
							var a = e._nodesById.get(r);
							if (a) {
								t.push({
									depth: i,
									node: a
								});
								for (var o = 0, s = a.children; o < s.length; o++) {
									var c = s[o];
									n(c, i + 1);
								}
							}
						}, r = 0, i = this._roots; r < i.length; r++) {
							var a = i[r];
							n(a, 0);
						}
						return t;
					}, e;
				}();
				function o(e, t, n) {
					return e < t ? t : e > n ? n : e;
				}
				function s(e, t) {
					if (e.length !== t.length) return !1;
					for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
					return !0;
				}
				function c(e) {
					return {
						id: e.id,
						parentId: -1,
						role: e.role,
						label: e.label,
						value: e.value,
						hint: e.hint,
						stateFlags: e.stateFlags,
						traitFlags: e.traitFlags,
						headingLevel: e.headingLevel,
						minX: e.minX,
						minY: e.minY,
						maxX: e.maxX,
						maxY: e.maxY,
						children: []
					};
				}
				function l(e, t) {
					return e.role !== t.role || e.label !== t.label || e.value !== t.value || e.hint !== t.hint || e.stateFlags !== t.stateFlags || e.traitFlags !== t.traitFlags || e.headingLevel !== t.headingLevel;
				}
				function u(e, t) {
					return e.minX !== t.minX || e.minY !== t.minY || e.maxX !== t.maxX || e.maxY !== t.maxY;
				}
				function d(e, t) {
					e.role = t.role, e.label = t.label, e.value = t.value, e.hint = t.hint, e.stateFlags = t.stateFlags, e.traitFlags = t.traitFlags, e.headingLevel = t.headingLevel;
				}
				function f(e, t) {
					e.minX = t.minX, e.minY = t.minY, e.maxX = t.maxX, e.maxY = t.maxY;
				}
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					CHECK_STATE_MASK: () => c,
					CHECK_STATE_OFFSET: () => s,
					SemanticActionType: () => p,
					SemanticCheckState: () => o,
					SemanticMode: () => u,
					SemanticRole: () => r,
					SemanticState: () => i,
					SemanticTrait: () => d,
					checkStateOf: () => l,
					hasState: () => a,
					hasTrait: () => f,
					roleName: () => S,
					stateNames: () => C,
					traitNames: () => w
				});
				var r = {
					none: 0,
					button: 1,
					link: 2,
					checkbox: 3,
					switchControl: 4,
					slider: 5,
					textField: 6,
					text: 7,
					image: 8,
					group: 9,
					list: 10,
					listItem: 11,
					tab: 12,
					tabList: 13,
					dialog: 14,
					alertDialog: 15,
					radioGroup: 16,
					radioButton: 17
				}, i = {
					None: 0,
					Expanded: 1,
					Selected: 2,
					Toggled: 16,
					Required: 32,
					Disabled: 64,
					Focused: 128,
					Hidden: 256,
					LiveRegion: 512,
					ReadOnly: 1024,
					Modal: 2048,
					Obscured: 4096,
					Multiline: 8192
				};
				function a(e, t) {
					return (e & t) !== 0;
				}
				var o = {
					Unchecked: 0,
					Checked: 1,
					Mixed: 2
				}, s = 2, c = 3 << s;
				function l(e) {
					var t = (e & c) >> s;
					return t >= o.Mixed ? o.Mixed : t;
				}
				var u = {
					Disabled: "disabled",
					Enabled: "enabled"
				}, d = {
					None: 0,
					Expandable: 1,
					Selectable: 2,
					Checkable: 4,
					Toggleable: 8,
					Requirable: 16,
					Enablable: 32,
					Focusable: 64
				};
				function f(e, t) {
					return (e & t) !== 0;
				}
				for (var p = {
					tap: 0,
					increase: 1,
					decrease: 2
				}, m = {}, h = 0, g = Object.entries(r); h < g.length; h++) {
					var _ = g[h], v = _[0], y = _[1];
					m[y] = v;
				}
				var b = Object.entries(i).filter(function(e) {
					return e[1] !== 0;
				}), x = Object.entries(d).filter(function(e) {
					return e[1] !== 0;
				});
				function S(e) {
					return m[e] ?? `unknown(${e})`;
				}
				function C(e) {
					if (e === 0) return "none";
					for (var t = [], n = 0, r = b; n < r.length; n++) {
						var i = r[n], a = i[0];
						e & i[1] && t.push(a);
					}
					switch (l(e)) {
						case o.Checked:
							t.push("Checked");
							break;
						case o.Mixed: t.push("Mixed");
					}
					return t.join(", ") || "none";
				}
				function w(e) {
					if (e === 0) return "none";
					for (var t = [], n = 0, r = x; n < r.length; n++) {
						var i = r[n], a = i[0];
						e & i[1] && t.push(a);
					}
					return t.join(", ") || "none";
				}
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { AccessibilityOverlay: () => c });
				var r = n(11), i = n(12), a = n(9), o = !1;
				function s(e) {
					if (!o) {
						var t = e.offsetParent;
						if (t) {
							for (var n = function(e) {
								return e === "auto" || e === "scroll" || e === "overlay";
							}, r = null, i = e.parentElement, a = 32, s = 0; i && i !== document.documentElement && s < a; s++, i = i.parentElement) {
								var c = getComputedStyle(i);
								if (n(c.overflowX) || n(c.overflowY)) {
									r = i;
									break;
								}
							}
							r && !r.contains(t) && (o = !0, console.warn("[Rive] Semantics: give the element wrapping the <canvas> \"position: relative\" (or another positioned value) so the semantic overlay scrolls with the canvas. Without it, screen readers may scroll to stale positions when the canvas is inside a scrolling container."));
						}
					}
				}
				var c = function() {
					function e(e) {
						var t = this;
						this.elements = /* @__PURE__ */ new Map(), this.descElements = /* @__PURE__ */ new Map(), this.lastSemanticVersion = -1, this.lastGeometryVersion = -1, this.pendingTextGeometry = [], this.textGeometryKeys = /* @__PURE__ */ new WeakMap(), this.appliedNodes = /* @__PURE__ */ new WeakMap(), this.lastCanvasPositioning = {
							width: -1,
							height: -1,
							offsetTop: -1,
							offsetLeft: -1
						}, this._geometryDirty = !0, this.isUpdating = !1, this.editingHostNodeId = null, this.editingHostSemanticVersion = -1, this.transformContainer = null, this._artboardBounds = {
							minX: 0,
							minY: 0,
							maxX: 0,
							maxY: 0
						}, this.repositionTimer = null, this.canvasResizeObserver = null, this.parentResizeObserver = null, this.positionObserver = null, this._onWindowResize = function() {
							return t.scheduleReposition();
						}, this.instanceId = e.instanceId, this.fireAction = e.fireAction, this.requestFocus = e.requestFocus, this.clearFocus = e.clearFocus, this.canvas = e.canvas, this.semanticsOptions = e.semanticsOptions, this.allowFocusInterrupt = e.allowFocusInterrupt ?? !1, this.isEditingHostFocused = e.isEditingHostFocused ?? (function() {
							return !1;
						}), this.container = this.createContainer(e.canvas), this.attachPositionObservers(), s(e.canvas);
					}
					return e.prototype.setEditingHostNode = function(e) {
						if (this.editingHostNodeId !== e) {
							var t = this.editingHostNodeId;
							if (this.editingHostNodeId = e, t !== null) {
								var n = this.elements.get(t);
								if (n) {
									var r = this.appliedNodes.get(n);
									r && this.isAriaHidden(r) ? v(n, "aria-hidden", "true") : y(n, "aria-hidden");
								}
							}
							if (e !== null) {
								var i = this.elements.get(e);
								i && v(i, "aria-hidden", "true");
							}
						}
					}, e.prototype.syncEditingHost = function(e, t, n) {
						if (n || e.semanticVersion !== this.editingHostSemanticVersion) {
							this.editingHostSemanticVersion = e.semanticVersion;
							var r = e.focusedNode();
							r === void 0 || r.role !== a.SemanticRole.textField ? this.editingHostNodeId !== null && (t.resetDecoration(), this.setEditingHostNode(null)) : (t.setSecure((0, a.hasState)(r.stateFlags, a.SemanticState.Obscured)), t.decorate({
								"aria-label": r.label || null,
								"aria-readonly": (0, a.hasState)(r.stateFlags, a.SemanticState.ReadOnly) ? "true" : null,
								"aria-multiline": (0, a.hasState)(r.stateFlags, a.SemanticState.Multiline) ? "true" : null,
								"aria-required": (0, a.hasTrait)(r.traitFlags, a.SemanticTrait.Requirable) && (0, a.hasState)(r.stateFlags, a.SemanticState.Required) ? "true" : null,
								"aria-describedby": r.hint && this.descElements.get(r.id)?.id || null
							}), this.setEditingHostNode(r.id));
						}
					}, e.prototype.hasEditingHost = function() {
						return this.editingHostNodeId !== null;
					}, e.prototype.releaseEditingHost = function(e, t) {
						if (t?.resetDecoration(), this.setEditingHostNode(null), this.editingHostSemanticVersion = -1, t?.hasDomFocus()) {
							var n = e?.focusedNode()?.id;
							n !== void 0 && this.focusNodeElement(n);
						}
					}, e.prototype.focusNodeElement = function(e) {
						var t = this.elements.get(e);
						t && this.focusElementInPlace(t);
					}, e.prototype.focusElementInPlace = function(e) {
						var t, n;
						this.syncContainerBeforeFocus(), e.focus({ preventScroll: !0 }), (n = (t = this.canvas).scrollIntoView) == null || n.call(t, {
							block: "nearest",
							inline: "nearest",
							behavior: "instant"
						}), this.syncContainerGeometry(), this.observePosition();
					}, e.prototype.getSemanticOverlayContainer = function() {
						return this.container;
					}, e.prototype.attachPositionObservers = function() {
						var e = this;
						this.canvasResizeObserver = new ResizeObserver(function() {
							return e.scheduleReposition();
						}), this.canvasResizeObserver.observe(this.canvas);
						var t = this.canvas.parentElement;
						t && (this.parentResizeObserver = new ResizeObserver(function() {
							return e.scheduleReposition();
						}), this.parentResizeObserver.observe(t)), window.addEventListener("resize", this._onWindowResize), this.observePosition();
					}, e.prototype.observePosition = function() {
						var e = this, t;
						if (typeof IntersectionObserver < "u") {
							(t = this.positionObserver) == null || t.disconnect(), this.positionObserver = null;
							var n = this.canvas.getBoundingClientRect();
							if (n.width && n.height) {
								var r = [
									n.top,
									window.innerWidth - n.right,
									window.innerHeight - n.bottom,
									n.left
								].map(function(e) {
									return `${-Math.round(e)}px`;
								}).join(" "), i = !1;
								this.positionObserver = new IntersectionObserver(function() {
									i ? e.scheduleReposition() : i = !0;
								}, {
									threshold: 1,
									rootMargin: r
								}), this.positionObserver.observe(this.canvas);
							}
						}
					}, e.prototype.scheduleReposition = function() {
						var e = this;
						this._geometryDirty = !0, this.repositionTimer === null && (this.repositionTimer = setTimeout(function() {
							e.repositionTimer = null, e.syncContainerGeometry(), e.observePosition();
						}, 500));
					}, e.prototype.syncContainerGeometry = function() {
						var e = this.canvas.getBoundingClientRect(), t = (0, i.canvasOffset)(this.canvas), n = t.top, r = t.left, a = e.width !== this.lastCanvasPositioning.width || e.height !== this.lastCanvasPositioning.height;
						return !a && n === this.lastCanvasPositioning.offsetTop && r === this.lastCanvasPositioning.offsetLeft ? !1 : (this.container.style.top = n + "px", this.container.style.left = r + "px", this.container.style.width = e.width + "px", this.container.style.height = e.height + "px", this.container.tabIndex = -1, this.lastCanvasPositioning.width = e.width, this.lastCanvasPositioning.height = e.height, this.lastCanvasPositioning.offsetTop = n, this.lastCanvasPositioning.offsetLeft = r, a);
					}, e.prototype.syncContainerBeforeFocus = function() {
						this.syncContainerGeometry() && (this._geometryDirty = !0);
					}, e.prototype.createContainer = function(e) {
						var t = document.createElement("div");
						t.id = `rive-a11y-${this.instanceId}`, t.setAttribute("role", "region"), t.setAttribute("aria-label", this.semanticsOptions?.riveCanvasLabel ?? "Rive animation");
						var n = e.getBoundingClientRect(), r = (0, i.canvasOffset)(this.canvas), a = r.top, o = r.left;
						return t.style.cssText = [
							"position:absolute",
							`top:${a}px`,
							`left:${o}px`,
							"line-height:normal",
							"font-size:16px",
							`width:${n.width}px`,
							`height:${n.height}px`,
							"overflow:hidden",
							"pointer-events:none",
							"opacity:0"
						].join(";"), e.insertAdjacentElement("afterend", t), t;
					}, e.prototype.needsUpdate = function(e) {
						var t = e.semanticVersion !== this.lastSemanticVersion, n = e.geometryVersion !== this.lastGeometryVersion, r = this._geometryDirty || !this.transformContainer;
						return !t && !n && !r ? null : {
							semanticChanged: t,
							nodeGeometryChanged: n,
							layoutChanged: r
						};
					}, e.prototype.update = function(e, t, n, r, i) {
						var a = i ?? this.needsUpdate(e);
						!a && t && (a = {
							semanticChanged: !1,
							nodeGeometryChanged: !1,
							layoutChanged: !0
						}), a && this.performUpdate(e, t, n, r, a);
					}, e.prototype.performUpdate = function(e, t, n, r, i) {
						var a = i.semanticChanged, o = i.nodeGeometryChanged, s = e.semanticVersion - this.lastSemanticVersion > 1;
						if (this.lastSemanticVersion = e.semanticVersion, this.lastGeometryVersion = e.geometryVersion, this.isUpdating = !0, this._artboardBounds = r, t && (this.syncContainerGeometry(), this.syncTransformContainer(t, n, r), this._geometryDirty = !1), a) {
							var c = this.transformContainer ?? this.container, l = /* @__PURE__ */ new Set();
							this.rebuildChildren(c, e.roots, e, 0, 0, l, s);
							var u = [];
							this.elements.forEach(function(e, t) {
								l.has(t) || u.push(t);
							});
							for (var d = 0, f = u; d < f.length; d++) {
								var p = f[d], m = this.elements.get(p);
								m && m.parentNode && m.parentNode.removeChild(m), this.elements.delete(p);
								var h = this.descElements.get(p);
								h && h.parentNode && h.parentNode.removeChild(h), this.descElements.delete(p);
							}
						} else o && this.updateGeometryForChangedNodes(e);
						this.flushTextGeometry(), this.isUpdating = !1;
					}, e.prototype.destroy = function() {
						var e, t, n;
						this.repositionTimer !== null && (clearTimeout(this.repositionTimer), this.repositionTimer = null), window.removeEventListener("resize", this._onWindowResize), (e = this.canvasResizeObserver) == null || e.disconnect(), (t = this.parentResizeObserver) == null || t.disconnect(), (n = this.positionObserver) == null || n.disconnect(), this.container.parentNode && this.container.parentNode.removeChild(this.container), this.elements.clear(), this.descElements.clear(), this.pendingTextGeometry.length = 0;
					}, e.prototype.rebuildChildren = function(e, t, n, r, i, o, s) {
						for (var c = 0; c < t.length; c++) {
							var l = t[c], u = n.nodeById(l);
							if (u) {
								o.add(l);
								var d = this.elements.get(l), f = !d;
								d || (d = this.createElement(u), this.elements.set(l, d)), (f || s || n.semanticChangedIds.has(l)) && this.applyAttributes(d, u), this.applyPosition(d, u, r, i);
								var p = e.children[c];
								if (p !== d && (p ? e.insertBefore(d, p) : e.appendChild(d)), (0, a.hasTrait)(u.traitFlags, a.SemanticTrait.Focusable) && (0, a.hasState)(u.stateFlags, a.SemanticState.Focused)) {
									var m = document.activeElement, h = m?.closest("[aria-modal=\"true\"]"), g = !!h && this.container.contains(h) && !h.contains(d);
									l !== this.editingHostNodeId && m !== d && !g && !this.isEditingHostFocused() && this.canMoveFocus() && (this.syncContainerBeforeFocus(), d.focus({ preventScroll: !0 }));
								}
								u.children.length > 0 && this.rebuildChildren(d, u.children, n, u.minX, u.minY, o, s), f && this.autoFocusDialogOnAppear(d, u, n);
							}
						}
					}, e.prototype.updateGeometryForChangedNodes = function(e) {
						for (var t = 0, n = Array.from(e.geometryChangedIds); t < n.length; t++) {
							var r = n[t], i = e.nodeById(r);
							if (i) {
								var a = 0, o = 0, s = this.transformContainer ?? this.container;
								if (i.parentId >= 0) {
									var c = e.nodeById(i.parentId);
									c && (a = c.minX, o = c.minY, s = this.elements.get(i.parentId) ?? s);
								}
								this.updateNodeGeometrySubtree(e, r, a, o, s);
							}
						}
					}, e.prototype.updateNodeGeometrySubtree = function(e, t, n, r, i) {
						var a = e.nodeById(t);
						if (a) {
							var o = this.elements.get(t);
							if (o) {
								this.applyPosition(o, a, n, r);
								for (var s = 0, c = a.children; s < c.length; s++) {
									var l = c[s];
									this.updateNodeGeometrySubtree(e, l, a.minX, a.minY, o);
								}
							}
						}
					}, e.prototype.canMoveFocus = function() {
						var e = document.activeElement;
						return e === this.canvas || this.container.contains(e) || this.allowFocusInterrupt;
					}, e.prototype.autoFocusDialogOnAppear = function(e, t, n) {
						if (C(t.role, t.stateFlags) && this.canMoveFocus()) {
							var r = document.activeElement;
							if (!(r && r !== e && e.contains(r))) {
								var i = this.routeDefaultFocusTarget(t, n) ?? e;
								i.hasAttribute("tabindex") || i.setAttribute("tabindex", "-1"), document.activeElement !== i && i.focus({ preventScroll: !0 });
							}
						}
					}, e.prototype.routeDefaultFocusTarget = function(e, t) {
						for (var n = 0, r = e.children; n < r.length; n++) {
							var i = r[n], a = t.nodeById(i);
							if (a) {
								var o = this.elements.get(i);
								if (o && w(a)) return o;
								if (a.children.length > 0 || !a.label) {
									var s = this.routeDefaultFocusTarget(a, t);
									if (s) return s;
								} else if (o) return o.querySelector(":scope > span") ?? o;
							}
						}
						return null;
					}, Object.defineProperty(e.prototype, "nodeIdPrefix", {
						get: function() {
							return `rive-${this.instanceId}-sem-`;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.nodeIdFromElement = function(e) {
						if (!e.id.startsWith(this.nodeIdPrefix)) return null;
						var t = e.id.slice(this.nodeIdPrefix.length);
						if (!t) return null;
						var n = Number(t);
						return Number.isNaN(n) ? null : n;
					}, e.prototype.createElement = function(e) {
						var t = T(e.role), n = document.createElement(t);
						if (n.id = `${this.nodeIdPrefix}${e.id}`, n.style.cssText = g, e.role === a.SemanticRole.text) {
							var r = document.createElement("span");
							r.style.cssText = _, n.appendChild(r);
						}
						return this.attachActionHandlers(n, e), n;
					}, e.prototype.attachRovingNav = function(e, t) {
						var n = this;
						e.addEventListener("keydown", function(i) {
							var o = null;
							if (i.key === "ArrowRight" || i.key === "ArrowDown" ? o = "next" : i.key === "ArrowLeft" || i.key === "ArrowUp" ? o = "prev" : t.includeHomeEnd && i.key === "Home" ? o = "first" : t.includeHomeEnd && i.key === "End" && (o = "last"), o) {
								(0, r.claimKeyEvent)(i);
								var s = t.members(), c = s.indexOf(e);
								if (!(c < 0)) {
									var l = s.length, u = o === "next" ? s[(c + 1) % l] : o === "prev" ? s[(c - 1 + l) % l] : o === "first" ? s[0] : s[l - 1];
									if (u && u !== e) {
										n.focusElementInPlace(u);
										var d = n.nodeIdFromElement(u);
										d !== null && n.fireAction(d, a.SemanticActionType.tap);
									}
								}
							}
						});
					}, e.prototype.attachActionHandlers = function(e, t) {
						var n = this, i = t.role, o = t.id;
						if (x(i)) {
							e.addEventListener("click", function() {
								n.fireAction(o, a.SemanticActionType.tap);
							});
							var s = i === a.SemanticRole.link ? ["Enter"] : ["Enter", " "];
							e.addEventListener("keydown", function(e) {
								s.includes(e.key) && ((0, r.claimKeyEvent)(e), n.fireAction(o, a.SemanticActionType.tap));
							});
						}
						i === a.SemanticRole.slider && e.addEventListener("keydown", function(e) {
							e.key === "ArrowRight" || e.key === "ArrowUp" ? ((0, r.claimKeyEvent)(e), n.fireAction(o, a.SemanticActionType.increase)) : (e.key === "ArrowLeft" || e.key === "ArrowDown") && ((0, r.claimKeyEvent)(e), n.fireAction(o, a.SemanticActionType.decrease));
						}), i === a.SemanticRole.tab && this.attachRovingNav(e, {
							includeHomeEnd: !0,
							members: function() {
								var t = e.parentElement;
								return t ? Array.from(t.children).filter(function(e) {
									return e instanceof HTMLElement && e.getAttribute("role") === "tab";
								}) : [];
							}
						}), i === a.SemanticRole.radioButton && this.attachRovingNav(e, {
							includeHomeEnd: !1,
							members: function() {
								var t = e.closest("[role=\"radiogroup\"]") ?? e.parentElement;
								return t ? Array.from(t.querySelectorAll("[role=\"radio\"]")) : [];
							}
						}), (0, a.hasTrait)(t.traitFlags, a.SemanticTrait.Focusable) && e.addEventListener("focus", function() {
							n.requestFocus(o);
						});
					}, e.prototype.isAriaHidden = function(e) {
						var t = e.role, n = e.stateFlags, r = t === a.SemanticRole.image && !e.label, i = e.id === this.editingHostNodeId;
						return (0, a.hasState)(n, a.SemanticState.Hidden) || (0, a.hasState)(n, a.SemanticState.Obscured) && t !== a.SemanticRole.textField || r || i;
					}, e.prototype.applyAttributes = function(e, t) {
						this.appliedNodes.set(e, t);
						var n = t.role, r = t.stateFlags, i = t.traitFlags, o = E(n);
						if (o ? v(e, "role", o) : y(e, "role"), n === a.SemanticRole.link && v(e, "role", "link"), S(n) || (0, a.hasTrait)(i, a.SemanticTrait.Focusable) || n === a.SemanticRole.listItem ? v(e, "tabindex", "-1") : y(e, "tabindex"), t.label ? v(e, "aria-label", t.label) : y(e, "aria-label"), n === a.SemanticRole.slider) {
							if (t.value) {
								var s = parseFloat(t.value);
								Number.isFinite(s) ? v(e, "aria-valuenow", String(s)) : y(e, "aria-valuenow"), v(e, "aria-valuetext", t.value);
							} else y(e, "aria-valuenow"), y(e, "aria-valuetext");
							v(e, "aria-orientation", "horizontal"), b(e, "aria-readonly", (0, a.hasState)(r, a.SemanticState.ReadOnly));
						} else y(e, "aria-valuenow"), y(e, "aria-valuetext"), y(e, "aria-orientation"), y(e, "aria-readonly");
						if (t.hint) {
							var c = `rive-${this.instanceId}-desc-${t.id}`, g = this.descElements.get(t.id);
							g || (g = document.createElement("span"), g.id = c, g.style.cssText = h, this.container.appendChild(g), this.descElements.set(t.id, g)), g.textContent !== t.hint && (g.textContent = t.hint), v(e, "aria-describedby", c);
						} else {
							y(e, "aria-describedby");
							var _ = this.descElements.get(t.id);
							_ && (_.parentNode && _.parentNode.removeChild(_), this.descElements.delete(t.id));
						}
						if (n === a.SemanticRole.text) {
							var x = e.querySelector(":scope > span") ?? e, w = t.label ?? "";
							x.textContent !== w && (x.textContent = w), y(e, "aria-label"), t.headingLevel > 0 ? (v(e, "role", "heading"), v(e, "aria-level", String(t.headingLevel))) : y(e, "aria-level");
						}
						if ((0, a.hasTrait)(i, a.SemanticTrait.Expandable) && l.has(n) ? b(e, "aria-expanded", (0, a.hasState)(r, a.SemanticState.Expanded)) : y(e, "aria-expanded"), n === a.SemanticRole.tab || (0, a.hasTrait)(i, a.SemanticTrait.Selectable) && u.has(n) ? b(e, "aria-selected", (0, a.hasState)(r, a.SemanticState.Selected)) : y(e, "aria-selected"), (0, a.hasTrait)(i, a.SemanticTrait.Checkable) && d.has(n)) {
							var T = (0, a.checkStateOf)(r);
							T === a.SemanticCheckState.Mixed && f.has(n) ? v(e, "aria-checked", "mixed") : b(e, "aria-checked", T === a.SemanticCheckState.Checked);
						} else y(e, "aria-checked");
						if ((0, a.hasTrait)(i, a.SemanticTrait.Toggleable) ? (p.has(n) ? b(e, "aria-pressed", (0, a.hasState)(r, a.SemanticState.Toggled)) : y(e, "aria-pressed"), n === a.SemanticRole.switchControl && b(e, "aria-checked", (0, a.hasState)(r, a.SemanticState.Toggled))) : y(e, "aria-pressed"), (0, a.hasTrait)(i, a.SemanticTrait.Requirable) && m.has(n) ? b(e, "aria-required", (0, a.hasState)(r, a.SemanticState.Required)) : y(e, "aria-required"), (0, a.hasTrait)(i, a.SemanticTrait.Enablable) ? b(e, "aria-disabled", (0, a.hasState)(r, a.SemanticState.Disabled)) : y(e, "aria-disabled"), this.isAriaHidden(t) ? v(e, "aria-hidden", "true") : y(e, "aria-hidden"), (0, a.hasState)(r, a.SemanticState.LiveRegion) ? v(e, "aria-live", "polite") : y(e, "aria-live"), n === a.SemanticRole.textField) {
							if (b(e, "aria-readonly", (0, a.hasState)(r, a.SemanticState.ReadOnly)), b(e, "aria-multiline", (0, a.hasState)(r, a.SemanticState.Multiline)), t.children.length === 0) {
								var D = (0, a.hasState)(r, a.SemanticState.Obscured) ? "" : t.value ?? "";
								e.textContent !== D && (e.textContent = D);
							} else for (var O = 0, k = Array.from(e.childNodes); O < k.length; O++) {
								var A = k[O];
								A.nodeType === Node.TEXT_NODE && A.remove();
							}
						} else y(e, "aria-multiline");
						C(n, r) ? v(e, "aria-modal", "true") : y(e, "aria-modal");
					}, e.prototype.applyPosition = function(e, t, n, r) {
						var i = this._artboardBounds, o = Math.max(t.minX, i.minX), s = Math.max(t.minY, i.minY), c = Math.min(t.maxX, i.maxX), l = Math.min(t.maxY, i.maxY), u = o - n, d = s - r, f = Math.max(0, c - o), p = Math.max(0, l - s), m = Math.round(u), h = Math.round(d), g = Math.round(f) + "px", _ = Math.round(p) + "px", v = m + "px", y = h + "px";
						e.style.left !== v && (e.style.left = v), e.style.top !== y && (e.style.top = y), e.style.width !== g && (e.style.width = g), e.style.height !== _ && (e.style.height = _), e.style.transform && (e.style.transform = ""), t.role === a.SemanticRole.text && this.pendingTextGeometry.push(e);
					}, e.prototype.flushTextGeometry = function() {
						if (this.pendingTextGeometry.length !== 0) {
							for (var e = [], t = 0, n = this.pendingTextGeometry; t < n.length; t++) {
								var r = n[t], i = r.querySelector(":scope > span") ?? r, a = `${r.style.width}|${r.style.height}|${i.textContent}`;
								this.textGeometryKeys.get(r) !== a && (i.style.width = "auto", i.style.height = "auto", i.style.transformOrigin = "0 0", i.style.transform = "", e.push({
									host: r,
									span: i,
									key: a
								}));
							}
							this.pendingTextGeometry.length = 0;
							for (var o = e.map(function(e) {
								var t = e.host, n = e.span, r = t.getBoundingClientRect(), i = n.getBoundingClientRect();
								return i.width > 0 && i.height > 0 ? `scale(${r.width / i.width}, ${r.height / i.height})` : "none";
							}), s = 0; s < e.length; s++) {
								var c = e[s], r = c.host, i = c.span, a = c.key;
								i.style.transform = o[s], this.textGeometryKeys.set(r, a);
							}
						}
					}, e.prototype.syncTransformContainer = function(e, t, n) {
						if (!this.transformContainer) {
							var r = document.createElement("div");
							r.style.cssText = "position:absolute;top:0;left:0;overflow:visible;pointer-events:none;transform-origin:0 0", this.container.appendChild(r), this.transformContainer = r;
						}
						var i = n.maxX - n.minX, a = n.maxY - n.minY;
						this.transformContainer.style.width = Math.round(i) + "px", this.transformContainer.style.height = Math.round(a) + "px";
						var o = this.lastCanvasPositioning.width, s = this.lastCanvasPositioning.height, c = 1 / (t || 1), l = this.canvas.width > 0 && o > 0 ? o / this.canvas.width : c, u = this.canvas.height > 0 && s > 0 ? s / this.canvas.height : c, d = e.xx * l, f = e.xy * u, p = e.yx * l, m = e.yy * u, h = e.tx * l, g = e.ty * u;
						this.transformContainer.style.transform = `matrix(${d},${f},${p},${m},${h},${g})`;
					}, e;
				}(), l = /* @__PURE__ */ new Set([
					a.SemanticRole.button,
					a.SemanticRole.link,
					a.SemanticRole.checkbox,
					a.SemanticRole.switchControl,
					a.SemanticRole.tab
				]), u = /* @__PURE__ */ new Set([a.SemanticRole.tab]), d = /* @__PURE__ */ new Set([
					a.SemanticRole.checkbox,
					a.SemanticRole.radioButton,
					a.SemanticRole.switchControl
				]), f = /* @__PURE__ */ new Set([a.SemanticRole.checkbox]), p = /* @__PURE__ */ new Set([a.SemanticRole.button]), m = /* @__PURE__ */ new Set([
					a.SemanticRole.checkbox,
					a.SemanticRole.textField,
					a.SemanticRole.radioGroup
				]), h = "position:absolute;width:1px;height:1px;overflow:hidden;pointer-events:none;left:-9999px", g = "position:absolute;pointer-events:none;box-sizing:border-box;overflow:visible;margin:0;padding:0;transform-origin: 0px 0px 0px;border:none;background:transparent;color:transparent", _ = "display:inline-block;white-space:nowrap;pointer-events:none";
				function v(e, t, n) {
					e.getAttribute(t) !== n && e.setAttribute(t, n);
				}
				function y(e, t) {
					e.hasAttribute(t) && e.removeAttribute(t);
				}
				function b(e, t, n) {
					v(e, t, n ? "true" : "false");
				}
				function x(e) {
					switch (e) {
						case a.SemanticRole.button:
						case a.SemanticRole.link:
						case a.SemanticRole.checkbox:
						case a.SemanticRole.switchControl:
						case a.SemanticRole.tab:
						case a.SemanticRole.radioButton: return !0;
						default: return !1;
					}
				}
				function S(e) {
					switch (e) {
						case a.SemanticRole.button:
						case a.SemanticRole.link:
						case a.SemanticRole.checkbox:
						case a.SemanticRole.switchControl:
						case a.SemanticRole.slider:
						case a.SemanticRole.tab:
						case a.SemanticRole.radioButton:
						case a.SemanticRole.textField: return !0;
						default: return !1;
					}
				}
				function C(e, t) {
					return e === a.SemanticRole.alertDialog || e === a.SemanticRole.dialog && (0, a.hasState)(t, a.SemanticState.Modal);
				}
				function w(e) {
					return S(e.role) || (0, a.hasTrait)(e.traitFlags, a.SemanticTrait.Focusable);
				}
				function T(e) {
					switch (e) {
						case a.SemanticRole.link: return "a";
						case a.SemanticRole.text: return "div";
						default: return "div";
					}
				}
				function E(e) {
					switch (e) {
						case a.SemanticRole.none: return "group";
						case a.SemanticRole.button: return "button";
						case a.SemanticRole.link: return null;
						case a.SemanticRole.checkbox: return "checkbox";
						case a.SemanticRole.switchControl: return "switch";
						case a.SemanticRole.slider: return "slider";
						case a.SemanticRole.textField: return "textbox";
						case a.SemanticRole.image: return "img";
						case a.SemanticRole.group: return "group";
						case a.SemanticRole.list: return "list";
						case a.SemanticRole.listItem: return "listitem";
						case a.SemanticRole.tab: return "tab";
						case a.SemanticRole.tabList: return "tablist";
						case a.SemanticRole.dialog: return "dialog";
						case a.SemanticRole.alertDialog: return "alertdialog";
						case a.SemanticRole.radioGroup: return "radiogroup";
						case a.SemanticRole.radioButton: return "radio";
						case a.SemanticRole.text: return null;
						default: return null;
					}
				}
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					claimKeyEvent: () => i,
					isKeyEventClaimed: () => a
				});
				var r = /* @__PURE__ */ new WeakSet();
				function i(e) {
					e.preventDefault(), r.add(e);
				}
				function a(e) {
					return r.has(e);
				}
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { canvasOffset: () => r });
				function r(e) {
					var t = e.offsetTop, n = e.offsetLeft, r = e.offsetParent;
					if (!r) return {
						top: t,
						left: n
					};
					for (var i = e.parentElement; i && i !== r; i = i.parentElement) t -= i.scrollTop, n -= i.scrollLeft;
					return {
						top: t,
						left: n
					};
				}
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					AudioAssetWrapper: () => s.AudioAssetWrapper,
					AudioWrapper: () => s.AudioWrapper,
					BLANK_URL: () => o.BLANK_URL,
					CustomFileAssetLoaderWrapper: () => s.CustomFileAssetLoaderWrapper,
					FileAssetWrapper: () => s.FileAssetWrapper,
					FileFinalizer: () => s.FileFinalizer,
					FocusSessionState: () => i.FocusSessionState,
					FontAssetWrapper: () => s.FontAssetWrapper,
					FontWrapper: () => s.FontWrapper,
					GamepadInteractions: () => a.GamepadInteractions,
					ImageAssetWrapper: () => s.ImageAssetWrapper,
					ImageWrapper: () => s.ImageWrapper,
					KeyboardInteractions: () => i.KeyboardInteractions,
					ReplayPacer: () => l.ReplayPacer,
					RiveFont: () => c.RiveFont,
					createFinalization: () => s.createFinalization,
					finalizationRegistry: () => s.finalizationRegistry,
					registerTouchInteractions: () => r.registerTouchInteractions,
					sanitizeUrl: () => o.sanitizeUrl
				});
				var r = n(14), i = n(15), a = n(18), o = n(20), s = n(21), c = n(22), l = n(23);
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { registerTouchInteractions: () => l });
				var r = void 0, i = 16, a = 1, o = /* @__PURE__ */ new WeakMap(), s = function(e, t, n) {
					var r = [];
					if (t) for (var i = 0; i < e.length; i++) {
						var a = e[i];
						r.push({
							clientX: a.clientX,
							clientY: a.clientY,
							identifier: a.identifier
						});
					}
					else {
						var o = n === null ? e[0] : Array.from(e).find(function(e) {
							return e.identifier === n;
						}) ?? null;
						o && r.push({
							clientX: o.clientX,
							clientY: o.clientY,
							identifier: o.identifier
						});
					}
					return r;
				}, c = function(e, t, n, r) {
					var i = e;
					return i.changedTouches?.length ? (!t && ["touchstart", "touchmove"].includes(e.type) && e.preventDefault(), s(i.changedTouches, n, r)) : [{
						clientX: e.clientX,
						clientY: e.clientY,
						identifier: 0
					}];
				}, l = function(e) {
					var t = e.canvas, n = e.artboard, s = e.stateMachines, l = s === void 0 ? [] : s, u = e.renderer, d = e.rive, f = e.fit, p = e.alignment, m = e.isTouchScrollEnabled, h = m !== void 0 && m, g = e.dispatchPointerExit, _ = g === void 0 || g, v = e.enableMultiTouch, y = v !== void 0 && v, b = e.layoutScaleFactor, x = b === void 0 ? 1 : b, S = e.advanceAndDrain, C = e.summonKeyboard, w = e.isTextProxyFocused;
					if (!t || !l.length || !u || !d || !n || typeof window > "u") return null;
					for (var T = 0, E = l; T < E.length; T++) E[T].cancelScroll();
					var D = null, O = !1, k = o.get(t) ?? {
						touches: /* @__PURE__ */ new Map(),
						primaryTouchId: null
					};
					o.set(t, k);
					var A = k.touches, j = function(e) {
						var t = e.touches, n = e.changedTouches;
						if (t) {
							for (var r = /* @__PURE__ */ new Set(), i = 0; i < t.length; i++) r.add(t[i].identifier);
							for (var i = 0; i < (n?.length ?? 0); i++) r.add(n[i].identifier);
							A.forEach(function(e, t) {
								r.has(t) || A.delete(t);
							}), k.primaryTouchId !== null && !r.has(k.primaryTouchId) && (k.primaryTouchId = null);
						}
					}, M = function(e, t) {
						var r = d.computeAlignment(f, p, {
							minX: 0,
							minY: 0,
							maxX: e.width,
							maxY: e.height
						}, n.bounds, x), i = new d.Mat2D();
						r.invert(i);
						var a = t.map(function(t) {
							var n = t.clientX, r = t.clientY, a = n - e.left, o = r - e.top, s = new d.Vec2D(a, o), c = d.mapXY(i, s), l = {
								x: c.x(),
								y: c.y()
							};
							return c.delete(), s.delete(), l;
						});
						return i.delete(), r.delete(), a;
					}, N = function(e) {
						if (O && e instanceof MouseEvent) e.type === "mousedown" && w?.() && e.preventDefault(), e.type == "mouseup" && (O = !1);
						else {
							O = h && e.type === "touchend" && D === "touchstart", D = e.type;
							var t = e.currentTarget.getBoundingClientRect();
							if ((e.type === "touchstart" || e.type === "touchmove") && j(e), !y && e.type === "touchstart" && k.primaryTouchId === null) {
								var n = e.changedTouches?.[0];
								n && (k.primaryTouchId = n.identifier);
							}
							var r = c(e, h, y, y ? null : k.primaryTouchId), i = r.filter(function(e) {
								return e.clientX || e.clientY;
							});
							if (M(t, i).forEach(function(e, t) {
								i[t].transformedX = e.x, i[t].transformedY = e.y;
							}), e.type === "touchend") for (var a = e.changedTouches ?? [], o = 0; o < a.length; o++) A.delete(a[o].identifier);
							else (e.type === "touchstart" || e.type === "touchmove") && r.forEach(function(t) {
								var n = t.clientX, r = t.clientY, i = t.identifier, a = A.has(i);
								(e.type === "touchstart" && !a || a && (n || r)) && A.set(i, {
									clientX: n,
									clientY: r
								});
							});
							switch (e.type) {
								case "mouseout":
									for (var s = function(e) {
										_ ? r.forEach(function(t) {
											e.pointerExit(t.transformedX, t.transformedY, t.identifier);
										}) : r.forEach(function(t) {
											e.pointerMove(t.transformedX, t.transformedY, t.identifier);
										});
									}, u = 0, d = l; u < d.length; u++) {
										var f = d[u];
										s(f);
									}
									break;
								case "touchmove":
								case "mouseover":
								case "mousemove":
									for (var p = function(e) {
										r.forEach(function(t) {
											e.pointerMove(t.transformedX, t.transformedY, t.identifier);
										});
									}, m = 0, g = l; m < g.length; m++) {
										var f = g[m];
										p(f);
									}
									break;
								case "touchstart":
								case "mousedown":
									for (var v = function(e) {
										r.forEach(function(t) {
											e.pointerDown(t.transformedX, t.transformedY, t.identifier);
										});
									}, b = 0, x = l; b < x.length; b++) {
										var f = x[b];
										v(f);
									}
									S(0, { pointerDown: !0 });
									break;
								case "touchend":
									for (var T = function(e) {
										r.forEach(function(t) {
											e.pointerUp(t.transformedX, t.transformedY, t.identifier), e.pointerExit(t.transformedX, t.transformedY, t.identifier);
										});
									}, E = 0, N = l; E < N.length; E++) {
										var f = N[E];
										T(f);
									}
									S(0), C?.(), !y && r.some(function(e) {
										return e.identifier === k.primaryTouchId;
									}) && (k.primaryTouchId = null);
									break;
								case "mouseup":
									for (var ee = function(e) {
										r.forEach(function(t) {
											e.pointerUp(t.transformedX, t.transformedY, t.identifier);
										});
									}, te = 0, P = l; te < P.length; te++) {
										var f = P[te];
										ee(f);
									}
									S(0), C?.();
							}
						}
					}, ee = function(e) {
						for (var t = /* @__PURE__ */ new Set(), n = e.changedTouches ?? [], r = 0; r < n.length; r++) {
							var i = n[r], a = i.identifier, o = i.clientX, s = i.clientY;
							A.has(a) && (t.add(a), (o || s) && A.set(a, {
								clientX: o,
								clientY: s
							}));
						}
						for (var c = /* @__PURE__ */ new Set(), u = e.touches ?? [], r = 0; r < u.length; r++) c.add(u[r].identifier);
						if (A.forEach(function(e, n) {
							c.has(n) || t.add(n);
						}), (k.primaryTouchId === null || t.has(k.primaryTouchId)) && (k.primaryTouchId = null), t.size) {
							var d = Array.from(t), f = M(e.currentTarget.getBoundingClientRect(), d.map(function(e) {
								return A.get(e);
							}));
							d.forEach(function(e) {
								return A.delete(e);
							});
							for (var p = function(e) {
								d.forEach(function(t, n) {
									var r = f[n], i = r.x, a = r.y;
									e.pointerUp(i, a, t), e.pointerExit(i, a, t);
								});
							}, m = 0, h = l; m < h.length; m++) {
								var g = h[m];
								p(g);
							}
							S(0);
						}
					}, te = function(e) {
						if (!e.ctrlKey && e.cancelable) {
							var t = e.deltaMode, n = e.deltaX, r = e.deltaY;
							e.shiftKey && !n && (n = r, r = 0);
							var o = e.currentTarget.getBoundingClientRect(), s = t === WheelEvent.DOM_DELTA_LINE ? i : t === WheelEvent.DOM_DELTA_PAGE ? o.width : 1, c = t === WheelEvent.DOM_DELTA_LINE ? i : t === WheelEvent.DOM_DELTA_PAGE ? o.height : 1, u = -n * s, d = -r * c;
							if (u || d) {
								var f = M(o, [{
									clientX: e.clientX,
									clientY: e.clientY
								}, {
									clientX: e.clientX + u,
									clientY: e.clientY + d
								}]), p = f[0], m = f[1], h = t === WheelEvent.DOM_DELTA_PIXEL, g = e.timeStamp / 1e3, _ = l.filter(function(e) {
									return e.hasScrollLatch();
								});
								_.concat(l.filter(function(e) {
									return _.indexOf(e) === -1;
								})).some(function(e) {
									return e.pointerScroll(p.x, p.y, m.x - p.x, m.y - p.y, a, h, g, 0) !== 0;
								}) && (e.preventDefault(), S(0));
							}
						}
					}, P = N.bind(r);
					return t.addEventListener("mouseover", P), t.addEventListener("mouseout", P), t.addEventListener("mousemove", P), t.addEventListener("mousedown", P), t.addEventListener("mouseup", P), t.addEventListener("touchmove", P, { passive: h }), t.addEventListener("touchstart", P, { passive: h }), t.addEventListener("touchend", P), t.addEventListener("touchcancel", ee), t.addEventListener("wheel", te, { passive: !1 }), function() {
						t.removeEventListener("mouseover", P), t.removeEventListener("mouseout", P), t.removeEventListener("mousemove", P), t.removeEventListener("mousedown", P), t.removeEventListener("mouseup", P), t.removeEventListener("touchmove", P), t.removeEventListener("touchstart", P), t.removeEventListener("touchend", P), t.removeEventListener("touchcancel", ee), t.removeEventListener("wheel", te);
					};
				};
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					FocusSessionState: () => u,
					KeyboardInteractions: () => d
				});
				var r = n(16), i = n(11), a = n(17), o = /* @__PURE__ */ new Set([
					"Space",
					"ArrowLeft",
					"ArrowRight",
					"ArrowUp",
					"ArrowDown",
					"Backspace",
					"Delete",
					"Home",
					"End",
					"Enter",
					"NumpadEnter"
				]);
				function s(e) {
					return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
				}
				function c(e) {
					return e === r.Key.left || e === r.Key.right || e === r.Key.up || e === r.Key.down;
				}
				function l(e) {
					return e.altKey || e.ctrlKey || e.metaKey;
				}
				var u;
				(function(e) {
					e.NotFocused = "notFocused", e.EntryPending = "entryPending", e.RiveFocused = "riveFocused";
				})(u ||= {});
				var d = function() {
					function e(e) {
						var t = e.canvas, n = e.stateMachine, d = e.hasFocusNodes, f = e.getOverlayElement, p = this;
						this.focusSessionState = u.NotFocused, this.canvasHasFocus = !1, this.focusDomainReleased = !1, this.currentOverlayElement = null, this.claimedKeyCodes = /* @__PURE__ */ new Set(), this.textInputSessionActive = !1, this.onCopy = function(e) {
							var t;
							e.preventDefault();
							var n = p.mainSm.selectedText();
							n && ((t = e.clipboardData) == null || t.setData("text/plain", n));
						}, this.onCanvasFocus = function(e) {
							p.syncOverlayListener(), p.canvasHasFocus = !0, p.focusDomainReleased = !1, p.isInFocusDomain(e.relatedTarget) || !p.hasFocusNodes || p.mainSm.focusState().hasFocus || (p.focusSessionState = u.EntryPending, p.isKeyboardDrivenFocus() && (p.cameFromBeforeCanvas(e.relatedTarget) ? p.mainSm.focusNext() : p.mainSm.focusPrevious()) && (p.focusSessionState = u.RiveFocused));
						}, this.onCanvasBlur = function(e) {
							p.inputProxy.owns(e.relatedTarget) || (p.focusSessionState = u.NotFocused, p.canvasHasFocus = !1, p.blurStaysWithRive(e.relatedTarget) || p.mainSm.clearFocus());
						}, this.onOverlayFocusIn = function(e) {
							p.isInOverlay(e.target) && (p.focusDomainReleased = !1, p.hasFocusNodes && p.focusSessionState === u.NotFocused && (p.focusSessionState = p.mainSm.focusState().hasFocus ? u.RiveFocused : u.EntryPending));
						}, this.onFocusDomainHostFocusIn = function(e) {
							p.syncOverlayListener(), p.onOverlayFocusIn(e), p.inputProxy.owns(e.target) && (p.focusDomainReleased = !1);
						}, this.onKeyDown = function(e) {
							if (p.syncOverlayListener(), !(e.isComposing || e.keyCode === 229) && !p.focusDomainReleased && p.shouldRiveHandleKeyEvent(e)) {
								if (e.key === "Tab" && p.hasFocusNodes) {
									if (p.mainSm.focusState().hasFocus && p.mainSm.keyInput(r.Key.tab, (0, r.modifiersFromEvent)(e), !0, e.repeat)) {
										e.preventDefault();
										return;
									}
									var t = e.shiftKey ? p.mainSm.focusPrevious() : p.mainSm.focusNext(), n = p.mainSm.focusState();
									t || n.hasFocus ? (p.focusSessionState = u.RiveFocused, e.preventDefault()) : (document.activeElement !== p.canvas && p.isInFocusDomain(document.activeElement) && p.canvas.focus({ preventScroll: !0 }), p.focusSessionState = u.NotFocused, p.focusDomainReleased = !0, p.canvasHasFocus = !1), p.syncOverlayListener();
								} else if ((0, i.isKeyEventClaimed)(e)) p.claimedKeyCodes.add(e.code);
								else {
									p.claimedKeyCodes.delete(e.code);
									var a = p.textInputSessionActive && p.inputProxy.owns(e.target), d = p.mainSm.focusState().expectsKeyboardInput, f = (0, r.keyboardEventToRiveKey)(e), m = f !== null && p.mainSm.keyInput(f, (0, r.modifiersFromEvent)(e), !0, e.repeat);
									if (!m && f !== null && c(f) && !l(e) && (m = p.focusInDirection(f) || p.mainSm.focusState().hasFocus), s(e)) {
										if (a) return;
										if (p.textInputSessionActive && p.isInFocusDomain(e.target)) {
											p.inputProxy.focus();
											return;
										}
										!p.textInputSessionActive && d && p.mainSm.textInput(e.key);
									}
									(m || (a || d) && !l(e) && o.has(e.code)) && e.preventDefault();
								}
							}
						}, this.onKeyUp = function(e) {
							if (!(e.isComposing || e.keyCode === 229) && !p.claimedKeyCodes.delete(e.code) && p.focusSessionState !== u.NotFocused) {
								var t = (0, r.keyboardEventToRiveKey)(e);
								t !== null && p.mainSm.keyInput(t, (0, r.modifiersFromEvent)(e), !1, !1);
							}
						}, this.canvas = t, this.mainSm = n, this.hasFocusNodes = d, this.getOverlayElement = f, this.focusDomainHost = t.parentElement ?? document, t.addEventListener("focus", this.onCanvasFocus), t.addEventListener("blur", this.onCanvasBlur), t.addEventListener("keydown", this.onKeyDown), t.addEventListener("keyup", this.onKeyUp), this.focusDomainHost.addEventListener("focusin", this.onFocusDomainHostFocusIn), this.syncOverlayListener(), this.inputProxy = new a.TextInputProxy({
							container: t.parentElement ?? document.body,
							canvas: t,
							textInput: function(e) {
								return p.mainSm.textInput(e);
							},
							onKeyDown: this.onKeyDown,
							onKeyUp: this.onKeyUp,
							onCopy: this.onCopy,
							onBlur: function(e) {
								return p.handleProxyBlur(e);
							}
						});
					}
					return e.prototype.isTextInputSessionActive = function() {
						return this.textInputSessionActive;
					}, e.prototype.isEditingHostFocused = function() {
						return this.textInputSessionActive && this.inputProxy.hasDomFocus();
					}, e.prototype.beginTextInputSession = function(e) {
						this.textInputSessionActive = !0, this.focusSessionState = u.RiveFocused, e && this.inputProxy.focus();
					}, e.prototype.endTextInputSession = function(e) {
						e === void 0 && (e = !1), this.textInputSessionActive && (this.textInputSessionActive = !1, this.inputProxy.endSession(), !e && this.inputProxy.hasDomFocus() && this.canvas.focus({ preventScroll: !0 }));
					}, e.prototype.summonForPointer = function() {
						this.textInputSessionActive ? this.inputProxy.focus() : this.beginTextInputSession(!0);
					}, Object.defineProperty(e.prototype, "editingHost", {
						get: function() {
							return this.inputProxy;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.handleProxyBlur = function(e) {
						this.textInputSessionActive && (this.blurStaysWithRive(e) || (this.mainSm.clearFocus(), this.endTextInputSession(!0), this.focusSessionState = u.NotFocused));
					}, e.prototype.setFocusSessionState = function(e) {
						this.focusSessionState = e;
					}, e.prototype.notifyRiveFocused = function() {
						this.focusSessionState = u.RiveFocused;
					}, e.prototype.blurStaysWithRive = function(e) {
						return this.isInFocusDomain(e) || e === null && !document.hasFocus();
					}, e.prototype.focusInDirection = function(e) {
						switch (e) {
							case r.Key.left: return this.mainSm.focusLeft();
							case r.Key.right: return this.mainSm.focusRight();
							case r.Key.up: return this.mainSm.focusUp();
							case r.Key.down: return this.mainSm.focusDown();
							default: return !1;
						}
					}, e.prototype.shouldRiveHandleKeyEvent = function(e) {
						if (this.focusSessionState === u.NotFocused) return !1;
						var t = this.isInFocusDomain(document.activeElement) || this.isInOverlay(e.target), n = e.target === this.canvas;
						return t || this.canvasHasFocus || n;
					}, e.prototype.isInFocusDomain = function(e) {
						return e === this.canvas || this.inputProxy.owns(e) ? !0 : this.isInOverlay(e);
					}, e.prototype.isInOverlay = function(e) {
						return e instanceof Node ? (this.getOverlayElement?.call(this))?.contains(e) ?? !1 : !1;
					}, e.prototype.syncOverlayListener = function() {
						var e, t, n, r, i, a, o = this.getOverlayElement?.call(this) ?? null;
						o !== this.currentOverlayElement && ((e = this.currentOverlayElement) == null || e.removeEventListener("focusin", this.onOverlayFocusIn), (t = this.currentOverlayElement) == null || t.removeEventListener("keydown", this.onKeyDown), (n = this.currentOverlayElement) == null || n.removeEventListener("keyup", this.onKeyUp), this.currentOverlayElement = o, (r = this.currentOverlayElement) == null || r.addEventListener("focusin", this.onOverlayFocusIn), (i = this.currentOverlayElement) == null || i.addEventListener("keydown", this.onKeyDown), (a = this.currentOverlayElement) == null || a.addEventListener("keyup", this.onKeyUp));
					}, e.prototype.isKeyboardDrivenFocus = function() {
						try {
							return this.canvas.matches(":focus-visible");
						} catch {
							return !1;
						}
					}, e.prototype.cameFromBeforeCanvas = function(e) {
						if (!e) return !0;
						var t = this.canvas.compareDocumentPosition(e);
						return t & Node.DOCUMENT_POSITION_PRECEDING ? !0 : !(t & Node.DOCUMENT_POSITION_FOLLOWING);
					}, e.prototype.cleanup = function() {
						var e, t, n;
						this.canvas.removeEventListener("focus", this.onCanvasFocus), this.canvas.removeEventListener("blur", this.onCanvasBlur), this.canvas.removeEventListener("keydown", this.onKeyDown), this.canvas.removeEventListener("keyup", this.onKeyUp), this.claimedKeyCodes.clear(), this.focusDomainHost.removeEventListener("focusin", this.onFocusDomainHostFocusIn), (e = this.currentOverlayElement) == null || e.removeEventListener("focusin", this.onOverlayFocusIn), (t = this.currentOverlayElement) == null || t.removeEventListener("keydown", this.onKeyDown), (n = this.currentOverlayElement) == null || n.removeEventListener("keyup", this.onKeyUp), this.inputProxy.hasDomFocus() && this.canvas.focus({ preventScroll: !0 }), this.inputProxy.cleanup(), this.textInputSessionActive = !1;
					}, e;
				}();
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					Key: () => i,
					KeyModifiers: () => a,
					keyboardEventToRiveKey: () => l,
					modifiersFromEvent: () => u
				});
				var r = function(e, t, n) {
					if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
					return e.concat(a || Array.prototype.slice.call(t));
				}, i = {
					space: 32,
					apostrophe: 39,
					comma: 44,
					minus: 45,
					period: 46,
					slash: 47,
					key0: 48,
					key1: 49,
					key2: 50,
					key3: 51,
					key4: 52,
					key5: 53,
					key6: 54,
					key7: 55,
					key8: 56,
					key9: 57,
					semicolon: 59,
					equal: 61,
					a: 65,
					b: 66,
					c: 67,
					d: 68,
					e: 69,
					f: 70,
					g: 71,
					h: 72,
					i: 73,
					j: 74,
					k: 75,
					l: 76,
					m: 77,
					n: 78,
					o: 79,
					p: 80,
					q: 81,
					r: 82,
					s: 83,
					t: 84,
					u: 85,
					v: 86,
					w: 87,
					x: 88,
					y: 89,
					z: 90,
					leftBracket: 91,
					backslash: 92,
					rightBracket: 93,
					graveAccent: 96,
					world1: 161,
					world2: 162,
					escape: 256,
					enter: 257,
					tab: 258,
					backspace: 259,
					insert: 260,
					deleteKey: 261,
					right: 262,
					left: 263,
					down: 264,
					up: 265,
					pageUp: 266,
					pageDown: 267,
					home: 268,
					end: 269,
					capsLock: 280,
					scrollLock: 281,
					numLock: 282,
					printScreen: 283,
					pause: 284,
					f1: 290,
					f2: 291,
					f3: 292,
					f4: 293,
					f5: 294,
					f6: 295,
					f7: 296,
					f8: 297,
					f9: 298,
					f10: 299,
					f11: 300,
					f12: 301,
					f13: 302,
					f14: 303,
					f15: 304,
					f16: 305,
					f17: 306,
					f18: 307,
					f19: 308,
					f20: 309,
					f21: 310,
					f22: 311,
					f23: 312,
					f24: 313,
					f25: 314,
					kp0: 320,
					kp1: 321,
					kp2: 322,
					kp3: 323,
					kp4: 324,
					kp5: 325,
					kp6: 326,
					kp7: 327,
					kp8: 328,
					kp9: 329,
					kpDecimal: 330,
					kpDivide: 331,
					kpMultiply: 332,
					kpSubtract: 333,
					kpAdd: 334,
					kpEnter: 335,
					kpEqual: 336,
					leftShift: 340,
					leftControl: 341,
					leftAlt: 342,
					leftSuper: 343,
					rightShift: 344,
					rightControl: 345,
					rightAlt: 346,
					rightSuper: 347,
					menu: 348
				}, a = {
					none: 0,
					shift: 1,
					ctrl: 2,
					alt: 4,
					meta: 8
				}, o = {
					ShiftLeft: i.leftShift,
					ShiftRight: i.rightShift,
					ControlLeft: i.leftControl,
					ControlRight: i.rightControl,
					AltLeft: i.leftAlt,
					AltRight: i.rightAlt,
					MetaLeft: i.leftSuper,
					MetaRight: i.rightSuper,
					KeyA: i.a,
					KeyB: i.b,
					KeyC: i.c,
					KeyD: i.d,
					KeyE: i.e,
					KeyF: i.f,
					KeyG: i.g,
					KeyH: i.h,
					KeyI: i.i,
					KeyJ: i.j,
					KeyK: i.k,
					KeyL: i.l,
					KeyM: i.m,
					KeyN: i.n,
					KeyO: i.o,
					KeyP: i.p,
					KeyQ: i.q,
					KeyR: i.r,
					KeyS: i.s,
					KeyT: i.t,
					KeyU: i.u,
					KeyV: i.v,
					KeyW: i.w,
					KeyX: i.x,
					KeyY: i.y,
					KeyZ: i.z,
					Digit0: i.key0,
					Digit1: i.key1,
					Digit2: i.key2,
					Digit3: i.key3,
					Digit4: i.key4,
					Digit5: i.key5,
					Digit6: i.key6,
					Digit7: i.key7,
					Digit8: i.key8,
					Digit9: i.key9,
					Numpad0: i.kp0,
					Numpad1: i.kp1,
					Numpad2: i.kp2,
					Numpad3: i.kp3,
					Numpad4: i.kp4,
					Numpad5: i.kp5,
					Numpad6: i.kp6,
					Numpad7: i.kp7,
					Numpad8: i.kp8,
					Numpad9: i.kp9,
					NumpadDecimal: i.kpDecimal,
					NumpadDivide: i.kpDivide,
					NumpadMultiply: i.kpMultiply,
					NumpadSubtract: i.kpSubtract,
					NumpadAdd: i.kpAdd,
					NumpadEnter: i.kpEnter,
					NumpadEqual: i.kpEqual,
					Minus: i.minus,
					Equal: i.equal,
					BracketLeft: i.leftBracket,
					BracketRight: i.rightBracket,
					Backslash: i.backslash,
					Semicolon: i.semicolon,
					Quote: i.apostrophe,
					Backquote: i.graveAccent,
					Comma: i.comma,
					Period: i.period,
					Slash: i.slash,
					IntlBackslash: i.world1,
					IntlRo: i.world2,
					Space: i.space,
					Enter: i.enter,
					Tab: i.tab,
					Backspace: i.backspace,
					Insert: i.insert,
					Delete: i.deleteKey,
					Escape: i.escape,
					ArrowRight: i.right,
					ArrowLeft: i.left,
					ArrowDown: i.down,
					ArrowUp: i.up,
					PageUp: i.pageUp,
					PageDown: i.pageDown,
					Home: i.home,
					End: i.end,
					CapsLock: i.capsLock,
					ScrollLock: i.scrollLock,
					NumLock: i.numLock,
					PrintScreen: i.printScreen,
					Pause: i.pause,
					ContextMenu: i.menu,
					F1: i.f1,
					F2: i.f2,
					F3: i.f3,
					F4: i.f4,
					F5: i.f5,
					F6: i.f6,
					F7: i.f7,
					F8: i.f8,
					F9: i.f9,
					F10: i.f10,
					F11: i.f11,
					F12: i.f12,
					F13: i.f13,
					F14: i.f14,
					F15: i.f15,
					F16: i.f16,
					F17: i.f17,
					F18: i.f18,
					F19: i.f19,
					F20: i.f20,
					F21: i.f21,
					F22: i.f22,
					F23: i.f23,
					F24: i.f24,
					F25: i.f25
				}, s = (function() {
					for (var e = {
						" ": i.space,
						"'": i.apostrophe,
						",": i.comma,
						"-": i.minus,
						".": i.period,
						"/": i.slash,
						";": i.semicolon,
						"=": i.equal,
						"[": i.leftBracket,
						"\\": i.backslash,
						"]": i.rightBracket,
						"`": i.graveAccent
					}, t = 0; t < 26; t++) e[String.fromCharCode(97 + t)] = i.a + t;
					for (var n = 0; n <= 9; n++) e[String(n)] = i.key0 + n;
					return e;
				})(), c = new Set(r([
					"Enter",
					"Tab",
					"Backspace",
					"Insert",
					"Delete",
					"Escape",
					"ArrowRight",
					"ArrowLeft",
					"ArrowDown",
					"ArrowUp",
					"PageUp",
					"PageDown",
					"Home",
					"End",
					"CapsLock",
					"ScrollLock",
					"NumLock",
					"PrintScreen",
					"Pause",
					"ContextMenu"
				], Array.from({ length: 25 }, function(e, t) {
					return `F${t + 1}`;
				}), !0));
				function l(e) {
					var t = e.code, n = e.key;
					if (c.has(n)) return t === "NumpadEnter" ? i.kpEnter : o[n] ?? null;
					if (!t.startsWith("Digit") && !t.startsWith("Numpad") && n) {
						var r = s[n.toLowerCase()];
						if (r !== void 0) return r;
					}
					return o[t] ?? null;
				}
				function u(e) {
					var t = a.none;
					return e.shiftKey && (t |= a.shift), e.ctrlKey && (t |= a.ctrl), e.altKey && (t |= a.alt), e.metaKey && (t |= a.meta), t;
				}
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { TextInputProxy: () => o });
				var r = n(12), i = 16, a = /* @__PURE__ */ new Set([
					"type",
					"value",
					"style",
					"tabindex",
					"autocapitalize",
					"autocomplete",
					"autocorrect",
					"spellcheck"
				]), o = function() {
					function e(e) {
						var t = this;
						this.composing = !1, this.decoratedKeys = /* @__PURE__ */ new Set(), this.lastLeft = NaN, this.lastTop = NaN, this.reposition = function() {
							return t.positionOverCanvas();
						}, this.onCompositionStart = function() {
							t.composing = !0;
						}, this.onCompositionEnd = function() {
							t.composing = !1, t.commit();
						}, this.onInput = function() {
							t.composing || t.commit();
						}, this.onPaste = function(e) {
							var n = e.clipboardData?.getData("text/plain");
							n && (e.preventDefault(), t.params.textInput(n.replace(/\r\n?/g, "\n")));
						}, this.onBlur = function(e) {
							t.params.onBlur(e.relatedTarget);
						}, this.params = e, this.element = this.createElement(), this.positionOverCanvas(), this.params.container.appendChild(this.element);
					}
					return e.prototype.listeners = function() {
						return [
							["keydown", this.reposition],
							["beforeinput", this.reposition],
							["keydown", this.params.onKeyDown],
							["keyup", this.params.onKeyUp],
							["input", this.onInput],
							["compositionstart", this.onCompositionStart],
							["compositionend", this.onCompositionEnd],
							["paste", this.onPaste],
							["copy", this.params.onCopy],
							["blur", this.onBlur]
						];
					}, e.prototype.createElement = function() {
						var e = document.createElement("input");
						e.type = "text", e.tabIndex = -1, e.setAttribute("aria-hidden", "true"), e.setAttribute("autocapitalize", "off"), e.setAttribute("autocomplete", "off"), e.setAttribute("autocorrect", "off"), e.spellcheck = !1, e.style.cssText = `position:absolute;width:1px;height:1px;padding:0;margin:0;border:0;outline:none;opacity:0;background:transparent;color:transparent;caret-color:transparent;overflow:hidden;resize:none;z-index:0;pointer-events:none;font-size:${i}px;line-height:1;`;
						for (var t = 0, n = this.listeners(); t < n.length; t++) {
							var r = n[t], a = r[0], o = r[1];
							e.addEventListener(a, o);
						}
						return e;
					}, e.prototype.positionOverCanvas = function() {
						var e = (0, r.canvasOffset)(this.params.canvas), t = e.top, n = e.left;
						if (window.innerHeight > 0) {
							var a = this.params.canvas.getBoundingClientRect();
							t += s(a.top, 0, window.innerHeight - i) - a.top, n += s(a.left, 0, window.innerWidth - i) - a.left;
						}
						n !== this.lastLeft && (this.element.style.left = `${n}px`, this.lastLeft = n), t !== this.lastTop && (this.element.style.top = `${t}px`, this.lastTop = t);
					}, e.prototype.commit = function() {
						var e = this.element.value;
						e && (this.element.value = "", this.params.textInput(e));
					}, e.prototype.endSession = function() {
						this.element.value = "", this.composing = !1, this.resetDecoration();
					}, e.prototype.focus = function() {
						this.positionOverCanvas(), this.element.focus({ preventScroll: !0 });
					}, e.prototype.hasDomFocus = function() {
						return document.activeElement === this.element;
					}, e.prototype.owns = function(e) {
						return e === this.element;
					}, e.prototype.decorate = function(e) {
						this.element.removeAttribute("aria-hidden");
						for (var t = 0, n = Object.entries(e); t < n.length; t++) {
							var r = n[t], i = r[0], o = r[1];
							a.has(i.toLowerCase()) || (o === null ? (this.element.removeAttribute(i), this.decoratedKeys.delete(i)) : (this.element.getAttribute(i) !== o && this.element.setAttribute(i, o), this.decoratedKeys.add(i)));
						}
					}, e.prototype.setSecure = function(e) {
						var t = e ? "password" : "text";
						this.element.type !== t && (this.element.type = t);
					}, e.prototype.resetDecoration = function() {
						var e = this;
						this.setSecure(!1), this.decoratedKeys.forEach(function(t) {
							return e.element.removeAttribute(t);
						}), this.decoratedKeys.clear(), this.element.setAttribute("aria-hidden", "true");
					}, e.prototype.cleanup = function() {
						for (var e = 0, t = this.listeners(); e < t.length; e++) {
							var n = t[e], r = n[0], i = n[1];
							this.element.removeEventListener(r, i);
						}
						this.element.remove();
					}, e;
				}();
				function s(e, t, n) {
					return Math.min(Math.max(e, t), Math.max(t, n));
				}
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { GamepadInteractions: () => h });
				var r = n(19), i = 17, a = 4, o = 6, s = 7, c = 3;
				function l(e) {
					for (var t = [], n = 0; n < e; n++) t.push(0);
					return t;
				}
				function u(e) {
					return {
						deviceId: e.deviceId,
						mapping: e.mapping,
						buttons: l(e.buttons.length),
						axes: l(e.axes.length)
					};
				}
				function d() {
					if (typeof navigator > "u" || !navigator.getGamepads) return [];
					try {
						return Array.prototype.slice.call(navigator.getGamepads());
					} catch {
						return [];
					}
				}
				function f(e, t) {
					for (var n = [], r = 0; r < t; r++) n.push(e.buttons[r] ? e.buttons[r].value : 0);
					return n;
				}
				function p(e, t) {
					if (t.mapping !== "standard") return {
						deviceId: e,
						mapping: r.GamepadMappingKind.Unknown,
						buttons: f(t, Math.min(t.buttons.length, r.GAMEPAD_MAX_BUTTONS)),
						axes: t.axes.slice(0, r.GAMEPAD_MAX_AXES)
					};
					for (var n = f(t, i), c = [], l = 0; l < a; l++) c.push(t.axes[l] ?? 0);
					return c.push(n[o], n[s]), {
						deviceId: e,
						mapping: r.GamepadMappingKind.Standard,
						buttons: n,
						axes: c
					};
				}
				var m = new (function() {
					function e() {
						var e = this;
						this.subscribers = 0, this.hasPads = !1, this.nextDeviceId = 1, this.slots = {}, this.cachedTime = NaN, this.cached = [], this.onConnected = function() {
							e.hasPads = !0;
						};
					}
					return e.prototype.subscribe = function() {
						this.subscribers++ > 0 || typeof window > "u" || (window.addEventListener("gamepadconnected", this.onConnected), this.hasPads = d().some(function(e) {
							return !!e;
						}));
					}, e.prototype.unsubscribe = function() {
						--this.subscribers > 0 || typeof window > "u" || (window.removeEventListener("gamepadconnected", this.onConnected), this.hasPads = !1, this.cachedTime = NaN, this.cached = []);
					}, e.prototype.read = function(e) {
						if (!this.hasPads) return [];
						if (e === this.cachedTime) return this.cached;
						for (var t = [], n = {}, r = d(), i = 0; i < r.length; i++) {
							var a = r[i];
							if (a && a.connected) {
								var o = this.slots[a.index], s = o && o.id === a.id ? o : {
									deviceId: this.nextDeviceId++,
									id: a.id
								};
								n[a.index] = s, t.push(p(s.deviceId, a));
							}
						}
						return this.slots = n, this.hasPads = t.length > 0, this.cachedTime = e, this.cached = t, t;
					}, e;
				}())(), h = function() {
					function e(e) {
						this.params = e, this.encoder = new r.GamepadBatchEncoder(), this.lastSentPads = /* @__PURE__ */ new Map(), this.submitFailures = 0, m.subscribe();
					}
					return e.prototype.handleGamepadInputs = function(e, t) {
						if (t && (t !== this.stateMachine && (this.stateMachine = t, this.lastSentPads.clear(), this.submitFailures = 0), !(this.submitFailures >= c))) {
							var n = m.read(e);
							(n.length !== 0 || this.lastSentPads.size !== 0) && (this.params.requireFocus && !this.params.isFocusWithin() && (n = n.map(u)), this.encoder.begin(), this.encodeDiff(n), this.encoder.isEmpty || (t.submitGamepadsFromBuffer(this.encoder.end()) ? this.submitFailures = 0 : (this.lastSentPads.clear(), ++this.submitFailures >= c && console.error(`[Rive] Gamepad input was rejected by the state machine ${c} times in a row; gamepad input is disabled for it.`))));
						}
					}, e.prototype.dispose = function() {
						this.stateMachine = void 0, this.lastSentPads.clear(), m.unsubscribe();
					}, e.prototype.encodeDiff = function(e) {
						for (var t = this, n = {}, i = 0; i < e.length; i++) {
							var a = e[i];
							n[a.deviceId] = !0;
							var o = this.lastSentPads.get(a.deviceId);
							o || (o = u(a), this.encoder.connected(a.deviceId, a.mapping, o.buttons, o.axes), this.lastSentPads.set(a.deviceId, o)), this.encodeChanges(a.deviceId, r.GamepadChangeKind.Button, o.buttons, a.buttons), this.encodeChanges(a.deviceId, r.GamepadChangeKind.Axis, o.axes, a.axes);
						}
						this.lastSentPads.forEach(function(e, r) {
							n[r] || (t.encoder.disconnected(r), t.lastSentPads.delete(r));
						});
					}, e.prototype.encodeChanges = function(e, t, n, r) {
						for (var i = 0; i < r.length; i++) {
							var a = r[i];
							a !== n[i] && (this.encoder.update(e, t, i, a), n[i] = a);
						}
					}, e;
				}();
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					GAMEPAD_BATCH_VERSION: () => r,
					GAMEPAD_MAX_AXES: () => a,
					GAMEPAD_MAX_BUTTONS: () => i,
					GamepadBatchEncoder: () => m,
					GamepadChangeKind: () => f,
					GamepadMappingKind: () => p,
					GamepadRecordType: () => d
				});
				var r = 2, i = 32, a = 16, o = 4, s = 4, c = 9, l = 12, u = 5, d;
				(function(e) {
					e[e.Connected = 0] = "Connected", e[e.Update = 1] = "Update", e[e.Disconnected = 2] = "Disconnected";
				})(d ||= {});
				var f;
				(function(e) {
					e[e.Button = 0] = "Button", e[e.Axis = 1] = "Axis";
				})(f ||= {});
				var p;
				(function(e) {
					e[e.Standard = 0] = "Standard", e[e.Unknown = 1] = "Unknown";
				})(p ||= {});
				var m = function() {
					function e(e) {
						e === void 0 && (e = 256), this.offset = 0, this.buffer = new ArrayBuffer(e), this.view = new DataView(this.buffer), this.bytes = new Uint8Array(this.buffer);
					}
					return e.prototype.begin = function() {
						this.offset = 0, this.ensure(o), this.writeU32(r);
					}, Object.defineProperty(e.prototype, "isEmpty", {
						get: function() {
							return this.offset <= o;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.connected = function(e, t, n, r) {
						var o = Math.min(n.length, i), l = Math.min(r.length, a);
						this.ensure(c + (o + l) * s), this.writeU8(d.Connected), this.writeI32(e), this.writeU8(t), this.writeU8(o), this.writeU8(l), this.writeU8(0);
						for (var u = 0; u < o; u++) this.writeF32(n[u]);
						for (var u = 0; u < l; u++) this.writeF32(r[u]);
					}, e.prototype.update = function(e, t, n, r) {
						this.ensure(l), this.writeU8(d.Update), this.writeI32(e), this.writeU8(1), this.writeU8(t), this.writeU8(n), this.writeF32(r);
					}, e.prototype.disconnected = function(e) {
						this.ensure(u), this.writeU8(d.Disconnected), this.writeI32(e);
					}, e.prototype.end = function() {
						return this.bytes.subarray(0, this.offset);
					}, e.prototype.writeU8 = function(e) {
						this.view.setUint8(this.offset, e), this.offset += 1;
					}, e.prototype.writeU32 = function(e) {
						this.view.setUint32(this.offset, e, !0), this.offset += 4;
					}, e.prototype.writeI32 = function(e) {
						this.view.setInt32(this.offset, e, !0), this.offset += 4;
					}, e.prototype.writeF32 = function(e) {
						this.view.setFloat32(this.offset, e, !0), this.offset += 4;
					}, e.prototype.ensure = function(e) {
						var t = this.offset + e;
						if (!(t <= this.buffer.byteLength)) {
							for (var n = this.buffer.byteLength * 2; n < t;) n *= 2;
							var r = new ArrayBuffer(n), i = new Uint8Array(r);
							i.set(this.bytes.subarray(0, this.offset)), this.buffer = r, this.view = new DataView(r), this.bytes = i;
						}
					}, e;
				}();
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					BLANK_URL: () => l,
					sanitizeUrl: () => f
				});
				var r = /^([^\w]*)(javascript|data|vbscript)/im, i = /&#(\w+)(^\w|;)?/g, a = /&(newline|tab);/gi, o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, s = /^.+(:|&colon;)/gim, c = [".", "/"], l = "about:blank";
				function u(e) {
					return c.indexOf(e[0]) > -1;
				}
				function d(e) {
					return e.replace(o, "").replace(i, function(e, t) {
						return String.fromCharCode(t);
					});
				}
				function f(e) {
					if (!e) return l;
					var t = d(e).replace(a, "").replace(o, "").trim();
					if (!t) return l;
					if (u(t)) return t;
					var n = t.match(s);
					if (!n) return t;
					var i = n[0];
					return r.test(i) ? l : t;
				}
			}),
			((e, t, n) => {
				n.r(t), n.d(t, {
					AudioAssetWrapper: () => p,
					AudioWrapper: () => c,
					CustomFileAssetLoaderWrapper: () => u,
					FileAssetWrapper: () => d,
					FileFinalizer: () => i,
					FontAssetWrapper: () => m,
					FontWrapper: () => l,
					ImageAssetWrapper: () => f,
					ImageWrapper: () => s,
					createFinalization: () => _,
					finalizationRegistry: () => g
				});
				var r = (function() {
					var e = function(t, n) {
						return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
							e.__proto__ = t;
						} || function(e, t) {
							for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
						}, e(t, n);
					};
					return function(t, n) {
						if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
						e(t, n);
						function r() {
							this.constructor = t;
						}
						t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
					};
				})(), i = function() {
					function e(e, t) {
						t === void 0 && (t = null), this.selfUnref = !1, this._file = e, this._session = t;
					}
					return e.prototype.unref = function() {
						this._file && this._file.unref(), this._session &&= (this._session.delete(), null);
					}, e.prototype.release = function() {
						this._file = null, this._session = null;
					}, e;
				}(), a = function() {
					function e(e) {
						this._finalizableObject = e;
					}
					return e.prototype.unref = function() {
						this._finalizableObject.unref();
					}, e;
				}(), o = function() {
					function e() {
						this.selfUnref = !1;
					}
					return e.prototype.unref = function() {}, e;
				}(), s = function(e) {
					r(t, e);
					function t(t) {
						var n = e.call(this) || this;
						return n._nativeImage = t, n;
					}
					return Object.defineProperty(t.prototype, "nativeImage", {
						get: function() {
							return this._nativeImage;
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.unref = function() {
						this.selfUnref && this._nativeImage.unref();
					}, t;
				}(o), c = function(e) {
					r(t, e);
					function t(t) {
						var n = e.call(this) || this;
						return n._nativeAudio = t, n;
					}
					return Object.defineProperty(t.prototype, "nativeAudio", {
						get: function() {
							return this._nativeAudio;
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.unref = function() {
						this.selfUnref && this._nativeAudio.unref();
					}, t;
				}(o), l = function(e) {
					r(t, e);
					function t(t) {
						var n = e.call(this) || this;
						return n._nativeFont = t, n;
					}
					return Object.defineProperty(t.prototype, "nativeFont", {
						get: function() {
							return this._nativeFont;
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.unref = function() {
						this.selfUnref && this._nativeFont.unref();
					}, t;
				}(o), u = function() {
					function e(e, t, n) {
						n === void 0 && (n = null), this._assetLoaderCallback = t, this._session = n, this.assetLoader = new e.CustomFileAssetLoader({ loadContents: this.loadContents.bind(this) });
					}
					return e.prototype.loadContents = function(e, t) {
						var n;
						if (e.isImage) n = new f(e, this._session);
						else if (e.isAudio) n = new p(e, this._session);
						else if (e.isFont) n = new m(e, this._session);
						else return !1;
						return this._assetLoaderCallback(n, t);
					}, e;
				}(), d = function() {
					function e(e, t) {
						t === void 0 && (t = null), this._nativeFileAsset = e, this._session = t;
					}
					return e.prototype.decode = function(e) {
						this._nativeFileAsset.decode(e, this._session);
					}, Object.defineProperty(e.prototype, "name", {
						get: function() {
							return this._nativeFileAsset.name;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "fileExtension", {
						get: function() {
							return this._nativeFileAsset.fileExtension;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "uniqueFilename", {
						get: function() {
							return this._nativeFileAsset.uniqueFilename;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "isAudio", {
						get: function() {
							return this._nativeFileAsset.isAudio;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "isImage", {
						get: function() {
							return this._nativeFileAsset.isImage;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "isFont", {
						get: function() {
							return this._nativeFileAsset.isFont;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "cdnUuid", {
						get: function() {
							return this._nativeFileAsset.cdnUuid;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "nativeFileAsset", {
						get: function() {
							return this._nativeFileAsset;
						},
						enumerable: !1,
						configurable: !0
					}), e;
				}(), f = function(e) {
					r(t, e);
					function t() {
						return e !== null && e.apply(this, arguments) || this;
					}
					return t.prototype.setRenderImage = function(e) {
						this._nativeFileAsset.setRenderImage(e.nativeImage);
					}, t;
				}(d), p = function(e) {
					r(t, e);
					function t() {
						return e !== null && e.apply(this, arguments) || this;
					}
					return t.prototype.setAudioSource = function(e) {
						this._nativeFileAsset.setAudioSource(e.nativeAudio);
					}, t;
				}(d), m = function(e) {
					r(t, e);
					function t() {
						return e !== null && e.apply(this, arguments) || this;
					}
					return t.prototype.setFont = function(e) {
						this._nativeFileAsset.setFont(e.nativeFont);
					}, t;
				}(d), h = function() {
					function e(e) {}
					return e.prototype.register = function(e) {
						e.selfUnref = !0;
					}, e.prototype.unregister = function(e) {}, e;
				}(), g = new (typeof FinalizationRegistry < "u" ? FinalizationRegistry : h)(function(e) {
					e?.unref();
				}), _ = function(e, t) {
					var n = new a(t);
					g.register(e, n);
				};
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { RiveFont: () => i });
				var r = n(3), i = function() {
					function e() {}
					return e.setFallbackFontCallback = function(t) {
						e._fallbackFontCallback = t ?? null, e._wireFallbackProc();
					}, e._fontToPtr = function(e) {
						if (e == null) return null;
						var t = e.nativeFont;
						return (t?.ptr)?.call(t) ?? null;
					}, e._getFallbackPtr = function(t, n) {
						return n < 0 || n >= t.length ? null : e._fontToPtr(t[n]);
					}, e._wireFallbackProc = function() {
						r.RuntimeLoader.getInstance(function(t) {
							var n = e._fallbackFontCallback;
							n ? t.setFallbackFontCallback((function(t, r, i) {
								var a = n(t, i);
								return a ? Array.isArray(a) ? e._getFallbackPtr(a, r) : r === 0 ? e._fontToPtr(a) : null : null;
							})) : t.setFallbackFontCallback(null);
						});
					}, e._fallbackFontCallback = null, e;
				}();
			}),
			((e, t, n) => {
				n.r(t), n.d(t, { ReplayPacer: () => u });
				var r = 15, i = 12, a = 1e3, o = 16e3, s = 60, c = 3, l = function(e) {
					var t = e.slice().sort(function(e, t) {
						return e - t;
					});
					return t[t.length >> 1];
				}, u = function() {
					function e() {
						this.lastTime = 0, this.lastRecord = 0, this.intervals = [], this.divisor = 1, this.settle = 0, this.nextProbe = 0, this.probing = !1, this.probeAfter = a, this.backedUp = !1, this.recentBackups = [];
					}
					return e.prototype.shouldRecord = function(e, t, n) {
						if (this.lastTime && e > this.lastTime && (this.intervals.push(e - this.lastTime), this.intervals.length > r && this.intervals.shift()), this.lastTime = e, !n) return t > 0 && (this.backedUp = !0), !1;
						if (t > 0 && this.intervals.length > 0) {
							var i = l(this.intervals);
							if (this.settle === 0 && this.adapt(e, t / i), this.divisor > 1 && e - this.lastRecord < (this.divisor - .5) * i) return !1;
						}
						return this.lastRecord = e, this.settle = Math.max(0, this.settle - 1), !0;
					}, e.prototype.adapt = function(e, t) {
						var n = this.divisor, r = this.backedUp;
						this.backedUp = !1, this.recentBackups.push(r), this.recentBackups.length > s && this.recentBackups.shift();
						var i = this.recentBackups.filter(Boolean).length >= c, l = t > n * 1.1;
						(this.probing ? l || r : l && r || t > n && i) ? (this.probeAfter = this.probing ? Math.min(this.probeAfter * 2, o) : a, this.setDivisor(e, Math.max(n + 1, Math.ceil(t)))) : t < (n - 1) * .9 ? (this.probeAfter = a, this.setDivisor(e, Math.max(1, Math.ceil(t / .9)))) : this.probing ? this.recentBackups.length >= s && (this.probing = !1, this.probeAfter = a) : n > 1 && e >= this.nextProbe && (this.setDivisor(e, n - 1), this.probing = !0);
					}, e.prototype.setDivisor = function(e, t) {
						this.divisor = t, this.settle = i, this.probing = !1, this.backedUp = !1, this.recentBackups = [], this.nextProbe = e + this.probeAfter;
					}, e;
				}();
			})
		], t = {};
		function n(r) {
			var i = t[r];
			if (i !== void 0) return i.exports;
			var a = t[r] = { exports: {} };
			return e[r](a, a.exports, n), a.exports;
		}
		n.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return n.d(t, { a: t }), t;
		}, n.d = (e, t) => {
			for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
				enumerable: !0,
				get: t[r]
			});
		}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = (e) => {
			typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
		};
		var r = {};
		return (() => {
			n.r(r), n.d(r, {
				Alignment: () => m,
				DataEnum: () => pe,
				DataType: () => R,
				DeprecationKeys: () => j,
				DrawOptimizationOptions: () => h,
				EventType: () => T,
				Fit: () => p,
				Layout: () => g,
				LoopType: () => ne,
				Rive: () => fe,
				RiveEventType: () => y,
				RiveFile: () => de,
				RiveFont: () => a.RiveFont,
				RuntimeLoader: () => t.RuntimeLoader,
				SemanticMode: () => i.SemanticMode,
				StateMachineInput: () => v,
				StateMachineInputType: () => _,
				Testing: () => be,
				ViewModel: () => z,
				ViewModelInstance: () => V,
				ViewModelInstanceArtboard: () => ve,
				ViewModelInstanceAssetFont: () => _e,
				ViewModelInstanceAssetImage: () => ge,
				ViewModelInstanceBoolean: () => G,
				ViewModelInstanceColor: () => q,
				ViewModelInstanceEnum: () => me,
				ViewModelInstanceList: () => he,
				ViewModelInstanceNumber: () => W,
				ViewModelInstanceString: () => U,
				ViewModelInstanceTrigger: () => K,
				ViewModelInstanceValue: () => H,
				decodeAudio: () => Y,
				decodeFont: () => X,
				decodeImage: () => xe
			});
			var e = n(1), t = n(3), i = n(7), a = n(13), o = (function() {
				var e = function(t, n) {
					return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					}, e(t, n);
				};
				return function(t, n) {
					if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
					e(t, n);
					function r() {
						this.constructor = t;
					}
					t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
				};
			})(), s = function() {
				return s = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e;
				}, s.apply(this, arguments);
			}, c = function(e, t, n, r) {
				function i(e) {
					return e instanceof n ? e : new n(function(t) {
						t(e);
					});
				}
				return new (n ||= Promise)(function(n, a) {
					function o(e) {
						try {
							c(r.next(e));
						} catch (e) {
							a(e);
						}
					}
					function s(e) {
						try {
							c(r.throw(e));
						} catch (e) {
							a(e);
						}
					}
					function c(e) {
						e.done ? n(e.value) : i(e.value).then(o, s);
					}
					c((r = r.apply(e, t || [])).next());
				});
			}, l = function(e, t) {
				var n = {
					label: 0,
					sent: function() {
						if (a[0] & 1) throw a[1];
						return a[1];
					},
					trys: [],
					ops: []
				}, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
				return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
					return this;
				}), o;
				function s(e) {
					return function(t) {
						return c([e, t]);
					};
				}
				function c(s) {
					if (r) throw TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (n = 0)), n;) try {
						if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
						switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
							case 0:
							case 1:
								a = s;
								break;
							case 4: return n.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								n.label++, i = s[1], s = [0];
								continue;
							case 7:
								s = n.ops.pop(), n.trys.pop();
								continue;
							default:
								if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
									n = 0;
									continue;
								}
								if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
									n.label = s[1];
									break;
								}
								if (s[0] === 6 && n.label < a[1]) {
									n.label = a[1], a = s;
									break;
								}
								if (a && n.label < a[2]) {
									n.label = a[2], n.ops.push(s);
									break;
								}
								a[2] && n.ops.pop(), n.trys.pop();
								continue;
						}
						s = t.call(e, n);
					} catch (e) {
						s = [6, e], i = 0;
					} finally {
						r = a = 0;
					}
					if (s[0] & 5) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}
			}, u = function(e, t, n) {
				if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
				return e.concat(a || Array.prototype.slice.call(t));
			}, d = function(e) {
				o(t, e);
				function t() {
					var t = e !== null && e.apply(this, arguments) || this;
					return t.isHandledError = !0, t;
				}
				return t;
			}(Error), f = function(e) {
				return e && e.isHandledError ? e.message : "Problem loading file; may be corrupt!";
			}, p;
			(function(e) {
				e.Cover = "cover", e.Contain = "contain", e.Fill = "fill", e.FitWidth = "fitWidth", e.FitHeight = "fitHeight", e.None = "none", e.ScaleDown = "scaleDown", e.Layout = "layout";
			})(p ||= {});
			var m;
			(function(e) {
				e.Center = "center", e.TopLeft = "topLeft", e.TopCenter = "topCenter", e.TopRight = "topRight", e.CenterLeft = "centerLeft", e.CenterRight = "centerRight", e.BottomLeft = "bottomLeft", e.BottomCenter = "bottomCenter", e.BottomRight = "bottomRight";
			})(m ||= {});
			var h;
			(function(e) {
				e.AlwaysDraw = "alwaysDraw", e.DrawOnChanged = "drawOnChanged";
			})(h ||= {});
			var g = function() {
				function e(e) {
					this.fit = e?.fit ?? p.Contain, this.alignment = e?.alignment ?? m.Center, this.layoutScaleFactor = e?.layoutScaleFactor ?? 1, this.minX = e?.minX ?? 0, this.minY = e?.minY ?? 0, this.maxX = e?.maxX ?? 0, this.maxY = e?.maxY ?? 0;
				}
				return e.new = function(t) {
					var n = t.fit, r = t.alignment, i = t.minX, a = t.minY, o = t.maxX, s = t.maxY;
					return P(j.legacyConstructors, "This function is deprecated: please use `new Layout({})` instead"), new e({
						fit: n,
						alignment: r,
						minX: i,
						minY: a,
						maxX: o,
						maxY: s
					});
				}, e.prototype.copyWith = function(t) {
					var n = t.fit, r = t.alignment, i = t.layoutScaleFactor, a = t.minX, o = t.minY, s = t.maxX, c = t.maxY;
					return new e({
						fit: n ?? this.fit,
						alignment: r ?? this.alignment,
						layoutScaleFactor: i ?? this.layoutScaleFactor,
						minX: a ?? this.minX,
						minY: o ?? this.minY,
						maxX: s ?? this.maxX,
						maxY: c ?? this.maxY
					});
				}, e.prototype.runtimeFit = function(e) {
					if (this.cachedRuntimeFit) return this.cachedRuntimeFit;
					var t = this.fit === p.Cover ? e.Fit.cover : this.fit === p.Contain ? e.Fit.contain : this.fit === p.Fill ? e.Fit.fill : this.fit === p.FitWidth ? e.Fit.fitWidth : this.fit === p.FitHeight ? e.Fit.fitHeight : this.fit === p.ScaleDown ? e.Fit.scaleDown : this.fit === p.Layout ? e.Fit.layout : e.Fit.none;
					return this.cachedRuntimeFit = t, t;
				}, e.prototype.runtimeAlignment = function(e) {
					if (this.cachedRuntimeAlignment) return this.cachedRuntimeAlignment;
					var t = this.alignment === m.TopLeft ? e.Alignment.topLeft : this.alignment === m.TopCenter ? e.Alignment.topCenter : this.alignment === m.TopRight ? e.Alignment.topRight : this.alignment === m.CenterLeft ? e.Alignment.centerLeft : this.alignment === m.CenterRight ? e.Alignment.centerRight : this.alignment === m.BottomLeft ? e.Alignment.bottomLeft : this.alignment === m.BottomCenter ? e.Alignment.bottomCenter : this.alignment === m.BottomRight ? e.Alignment.bottomRight : e.Alignment.center;
					return this.cachedRuntimeAlignment = t, t;
				}, e;
			}(), _;
			(function(e) {
				e[e.Number = 56] = "Number", e[e.Trigger = 58] = "Trigger", e[e.Boolean = 59] = "Boolean";
			})(_ ||= {});
			var v = function() {
				function e(e, t) {
					this.type = e, this.runtimeInput = t;
				}
				return Object.defineProperty(e.prototype, "name", {
					get: function() {
						return this.runtimeInput.name;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "value", {
					get: function() {
						return this.runtimeInput.value;
					},
					set: function(e) {
						this.runtimeInput.value = e;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.fire = function() {
					this.type === _.Trigger && this.runtimeInput.fire();
				}, e.prototype.delete = function() {
					this.runtimeInput = null;
				}, e;
			}(), y;
			(function(e) {
				e[e.General = 128] = "General", e[e.OpenUrl = 131] = "OpenUrl";
			})(y ||= {});
			var b = function() {
				function e(e) {
					this.isBindableArtboard = !1, this.isBindableArtboard = e;
				}
				return e;
			}(), x = function(e) {
				o(t, e);
				function t(t, n) {
					var r = e.call(this, !1) || this;
					return r.nativeArtboard = t, r.file = n, r;
				}
				return t;
			}(b), S = function(e) {
				o(t, e);
				function t(t) {
					var n = e.call(this, !0) || this;
					return n.selfUnref = !1, n.nativeArtboard = t, n;
				}
				return Object.defineProperty(t.prototype, "viewModel", {
					set: function(e) {
						this.nativeViewModel = e.nativeInstance;
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.destroy = function() {
					var e;
					this.selfUnref && (this.nativeArtboard.unref(), (e = this.nativeViewModel) == null || e.unref());
				}, t;
			}(b), C = function() {
				function e(e, t, n, r) {
					this.stateMachine = e, this.playing = n, this.artboard = r, this.inputs = [], this.instance = new t.StateMachineInstance(e, r), this.initInputs(t);
				}
				return Object.defineProperty(e.prototype, "hasFocusNodes", {
					get: function() {
						return this.instance.hasFocusNodes();
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "name", {
					get: function() {
						return this.stateMachine.name;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "statesChanged", {
					get: function() {
						for (var e = [], t = 0; t < this.instance.stateChangedCount(); t++) e.push(this.instance.stateChangedNameByIndex(t));
						return e;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.advance = function(e) {
					this.instance.advance(e);
				}, e.prototype.advanceAndApply = function(e) {
					this.instance.advanceAndApply(e);
				}, e.prototype.enableSemantics = function() {
					this.instance.enableSemantics();
				}, e.prototype.drainSemanticsDiff = function() {
					return this.instance.drainSemanticsDiff();
				}, e.prototype.fireSemanticAction = function(e, t) {
					this.instance.fireSemanticAction(e, t);
				}, e.prototype.focusSemanticNode = function(e) {
					return this.instance.focusSemanticNode(e);
				}, e.prototype.reportedEventCount = function() {
					return this.instance.reportedEventCount();
				}, e.prototype.reportedEventAt = function(e) {
					return this.instance.reportedEventAt(e);
				}, e.prototype.initInputs = function(e) {
					for (var t = 0; t < this.instance.inputCount(); t++) {
						var n = this.instance.input(t);
						this.inputs.push(this.mapRuntimeInput(n, e));
					}
				}, e.prototype.mapRuntimeInput = function(e, t) {
					if (e.type === t.SMIInput.bool) return new v(_.Boolean, e.asBool());
					if (e.type === t.SMIInput.number) return new v(_.Number, e.asNumber());
					if (e.type === t.SMIInput.trigger) return new v(_.Trigger, e.asTrigger());
				}, e.prototype.cleanup = function() {
					this.inputs.forEach(function(e) {
						e.delete();
					}), this.inputs.length = 0, this.instance.delete();
				}, e.prototype.bindViewModelInstance = function(e) {
					e.runtimeInstance != null && this.instance.bindViewModelInstance(e.runtimeInstance);
				}, e.prototype.focusState = function() {
					return this.instance.focusState();
				}, e.prototype.clearFocus = function() {
					this.instance.clearFocus();
				}, e;
			}(), w = function() {
				function t(e, t, n, r, i) {
					r === void 0 && (r = []), i === void 0 && (i = []), this.runtime = e, this.artboard = t, this.eventManager = n, this.animations = r, this.stateMachines = i;
				}
				return t.prototype.add = function(t, n, r, i) {
					if (r === void 0 && (r = !0), i === void 0 && (i = !1), t = J(t), t.length === 0) this.animations.forEach(function(e) {
						return e.playing = n;
					}), this.stateMachines.forEach(function(e) {
						return e.playing = n;
					});
					else for (var a = this.animations.map(function(e) {
						return e.name;
					}), o = this.stateMachines.map(function(e) {
						return e.name;
					}), s = 0; s < t.length; s++) {
						var c = a.indexOf(t[s]), l = o.indexOf(t[s]);
						if (c >= 0 || l >= 0) c >= 0 ? this.animations[c].playing = n : this.stateMachines[l].playing = n;
						else {
							var u = this.artboard.animationByName(t[s]);
							if (u) {
								var d = new e.Animation(u, this.artboard, this.runtime, n);
								d.advance(0), d.apply(1), this.animations.push(d);
							} else {
								var f = this.artboard.stateMachineByName(t[s]);
								if (f) {
									var p = new C(f, this.runtime, n, this.artboard);
									i && p.enableSemantics(), this.stateMachines.push(p);
								}
							}
						}
					}
					return r && (n ? this.eventManager.fire({
						type: T.Play,
						data: this.playing
					}) : this.eventManager.fire({
						type: T.Pause,
						data: this.paused
					})), n ? this.playing : this.paused;
				}, t.prototype.initLinearAnimations = function(t, n, r) {
					r === void 0 && (r = !1);
					for (var i = this.animations.map(function(e) {
						return e.name;
					}), a = 0; a < t.length; a++) {
						var o = i.indexOf(t[a]);
						if (o >= 0) this.animations[o].playing = n;
						else {
							var s = this.artboard.animationByName(t[a]);
							if (s) {
								var c = new e.Animation(s, this.artboard, this.runtime, n);
								c.advance(0), c.apply(1), this.animations.push(c);
							} else if (r) throw new d(`State Machine with name ${t[a]} not found`);
							else console.error(`Animation with name ${t[a]} not found.`);
						}
					}
				}, t.prototype.initStateMachines = function(e, t, n) {
					for (var r = this.stateMachines.map(function(e) {
						return e.name;
					}), i = 0; i < e.length; i++) {
						var a = r.indexOf(e[i]);
						if (a >= 0) this.stateMachines[a].playing = t;
						else {
							var o = this.artboard.stateMachineByName(e[i]);
							if (o) {
								var s = new C(o, this.runtime, t, this.artboard);
								n && s.enableSemantics(), this.stateMachines.push(s);
							} else console.warn(`State Machine with name ${e[i]} not found. Falling back to find an animation with the same name.`), this.initLinearAnimations([e[i]], t, !0);
						}
					}
				}, t.prototype.play = function(e) {
					return this.add(e, !0);
				}, t.prototype.advanceIfPaused = function() {
					this.stateMachines.forEach(function(e) {
						e.playing || e.advanceAndApply(0);
					});
				}, t.prototype.pause = function(e) {
					return this.add(e, !1);
				}, t.prototype.scrub = function(e, t) {
					var n = this.animations.filter(function(t) {
						return e.includes(t.name);
					});
					return n.forEach(function(e) {
						return e.scrubTo = t;
					}), n.map(function(e) {
						return e.name;
					});
				}, Object.defineProperty(t.prototype, "playing", {
					get: function() {
						return this.animations.filter(function(e) {
							return e.playing;
						}).map(function(e) {
							return e.name;
						}).concat(this.stateMachines.filter(function(e) {
							return e.playing;
						}).map(function(e) {
							return e.name;
						}));
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "paused", {
					get: function() {
						return this.animations.filter(function(e) {
							return !e.playing;
						}).map(function(e) {
							return e.name;
						}).concat(this.stateMachines.filter(function(e) {
							return !e.playing;
						}).map(function(e) {
							return e.name;
						}));
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.stop = function(e) {
					var t = this;
					e = J(e);
					var n = [];
					if (e.length === 0) n = this.animations.map(function(e) {
						return e.name;
					}).concat(this.stateMachines.map(function(e) {
						return e.name;
					})), this.animations.forEach(function(e) {
						return e.cleanup();
					}), this.stateMachines.forEach(function(e) {
						return e.cleanup();
					}), this.animations.splice(0, this.animations.length), this.stateMachines.splice(0, this.stateMachines.length);
					else {
						var r = this.animations.filter(function(t) {
							return e.includes(t.name);
						});
						r.forEach(function(e) {
							e.cleanup(), t.animations.splice(t.animations.indexOf(e), 1);
						});
						var i = this.stateMachines.filter(function(t) {
							return e.includes(t.name);
						});
						i.forEach(function(e) {
							e.cleanup(), t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
						}), n = r.map(function(e) {
							return e.name;
						}).concat(i.map(function(e) {
							return e.name;
						}));
					}
					return this.eventManager.fire({
						type: T.Stop,
						data: n
					}), n;
				}, Object.defineProperty(t.prototype, "isPlaying", {
					get: function() {
						return this.animations.reduce(function(e, t) {
							return e || t.playing;
						}, !1) || this.stateMachines.reduce(function(e, t) {
							return e || t.playing;
						}, !1);
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "isPaused", {
					get: function() {
						return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "isStopped", {
					get: function() {
						return this.animations.length === 0 && this.stateMachines.length === 0;
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.atLeastOne = function(e, t, n) {
					t === void 0 && (t = !0), n === void 0 && (n = !1);
					var r;
					return this.animations.length === 0 && this.stateMachines.length === 0 && (this.artboard.animationCount() > 0 ? (this.artboard.stateMachineCount() > 0 && P(j.defaultStateMachine, "No `stateMachine` was specified, so the artboard's first linear animation is playing by default. In the next major version, the artboard's state machine will be played by default instead when one exists. Pass the `stateMachine` parameter to adopt that behavior now."), this.add([r = this.artboard.animationByIndex(0).name], e, t)) : this.artboard.stateMachineCount() > 0 && this.add([r = this.artboard.stateMachineByIndex(0).name], e, t, n)), r;
				}, t.prototype.handleLooping = function() {
					for (var e = 0, t = this.animations.filter(function(e) {
						return e.playing;
					}); e < t.length; e++) {
						var n = t[e];
						n.loopValue === 0 && n.loopCount ? (n.loopCount = 0, this.stop(n.name)) : n.loopValue === 1 && n.loopCount ? (this.eventManager.fire({
							type: T.Loop,
							data: {
								animation: n.name,
								type: ne.Loop
							}
						}), n.loopCount = 0) : n.loopValue === 2 && n.loopCount > 1 && (this.eventManager.fire({
							type: T.Loop,
							data: {
								animation: n.name,
								type: ne.PingPong
							}
						}), n.loopCount = 0);
					}
				}, t.prototype.handleStateChanges = function() {
					for (var e = [], t = 0, n = this.stateMachines.filter(function(e) {
						return e.playing;
					}); t < n.length; t++) {
						var r = n[t];
						e.push.apply(e, r.statesChanged);
					}
					e.length > 0 && this.eventManager.fire({
						type: T.StateChange,
						data: e
					});
				}, t.prototype.handleAdvancing = function(e) {
					this.eventManager.fire({
						type: T.Advance,
						data: e
					});
				}, t;
			}(), T;
			(function(e) {
				e.Load = "load", e.LoadError = "loaderror", e.Play = "play", e.Pause = "pause", e.Stop = "stop", e.Loop = "loop", e.Draw = "draw", e.Advance = "advance", e.StateChange = "statechange", e.RiveEvent = "riveevent", e.AudioStatusChange = "audiostatuschange";
			})(T ||= {});
			var E = "Subscribing to Rive Events at runtime is deprecated and will be removed in a future major version: please use data binding instead. See https://rive.app/docs/runtimes/web/rive-events for how to migrate.", D = "State machine inputs are deprecated and will be removed in a future major version: please use data binding properties instead. See https://rive.app/docs/editor/data-binding/migration-guide#state-machine-inputs for how to migrate.", O = "Text run APIs are deprecated and will be removed in a future major version: please use data binding instead. See https://rive.app/docs/editor/data-binding/migration-guide#updating-text-runs-at-runtime for how to migrate.", k = "Loop events are deprecated and will be removed in a future major version: they are only reported for linear animation playback, which is deprecated. Use a state machine to control playback and data binding to react to changes instead. See https://rive.app/docs/editor/data-binding/migration-guide for how to migrate.", A = "Subscribing to state change events at runtime is deprecated and will be removed in a future major version: use data binding (view model property observers) or state machine actions to react to changes from your graphic instead. See https://rive.app/docs/editor/state-machine/states#actions for how to migrate.", j = {
				animationNames: "animation-names",
				animationsParam: "animations-param",
				defaultStateMachine: "default-state-machine",
				legacyConstructors: "legacy-constructors",
				legacyUnsubscribe: "legacy-unsubscribe",
				loopEvents: "loop-events",
				namesArray: "names-array",
				riveEvents: "rive-events",
				scrub: "scrub",
				stateChangeEvents: "state-change-events",
				stateMachineInputs: "state-machine-inputs",
				stateMachinesParam: "state-machines-param",
				textRuns: "text-runs"
			}, M = new Set(Object.keys(j).map(function(e) {
				return j[e];
			})), N = /* @__PURE__ */ new Set(), ee = function(e) {
				if (N.clear(), !Array.isArray(e)) console.warn(`[Rive] \`suppressDeprecationWarnings\` expects an array of deprecation ids, received ${typeof e}. Nothing was suppressed.`);
				else for (var t = 0, n = e; t < n.length; t++) {
					var r = n[t];
					M.has(r) && N.add(r);
				}
			}, te = /* @__PURE__ */ new Set(), P = function(e, t) {
				if (!N.has(e)) {
					var n = `${e}:${t}`;
					te.has(n) || (te.add(n), console.warn(`[Rive: ${e}] ${t}
To suppress this warning, set Rive.suppressDeprecationWarnings = ["${e}"]`));
				}
			}, F = function(e, t) {
				Array.isArray(e) && P(j.namesArray, `Passing an array of names to \`${t}()\` is deprecated: in the next major version this parameter will be a single string, and playing multiple animations or state machines at once will not be supported.`);
			}, I = function(e) {
				P(j.animationNames, `Passing linear animation names to \`${e}()\` is deprecated and will be removed in a future major version: Pass a single state machine name to control playback instead.`);
			}, ne;
			(function(e) {
				e.OneShot = "oneshot", e.Loop = "loop", e.PingPong = "pingpong";
			})(ne ||= {});
			var L = function() {
				function e(e) {
					e === void 0 && (e = []), this.listeners = e;
				}
				return e.prototype.getListeners = function(e) {
					return this.listeners.filter(function(t) {
						return t.type === e;
					});
				}, e.prototype.add = function(e) {
					this.listeners.includes(e) || this.listeners.push(e);
				}, e.prototype.remove = function(e) {
					for (var t = 0; t < this.listeners.length; t++) {
						var n = this.listeners[t];
						if (n.type === e.type && n.callback === e.callback) {
							this.listeners.splice(t, 1);
							break;
						}
					}
				}, e.prototype.removeAll = function(e) {
					var t = this;
					e ? this.listeners.filter(function(t) {
						return t.type === e;
					}).forEach(function(e) {
						return t.remove(e);
					}) : this.listeners.splice(0, this.listeners.length);
				}, e.prototype.fire = function(e) {
					this.getListeners(e.type).forEach(function(t) {
						return t.callback(e);
					});
				}, e;
			}(), re = function() {
				function e(e) {
					this.eventManager = e, this.queue = [];
				}
				return e.prototype.add = function(e) {
					this.queue.push(e);
				}, e.prototype.process = function() {
					for (; this.queue.length > 0;) {
						var e = this.queue.shift();
						e?.action && e.action(), e?.event && this.eventManager.fire(e.event);
					}
				}, e;
			}(), ie;
			(function(e) {
				e[e.AVAILABLE = 0] = "AVAILABLE", e[e.UNAVAILABLE = 1] = "UNAVAILABLE";
			})(ie ||= {});
			var ae = new (function(e) {
				o(t, e);
				function t() {
					var t = e !== null && e.apply(this, arguments) || this;
					return t._started = !1, t._enabled = !1, t._status = ie.UNAVAILABLE, t;
				}
				return t.prototype.delay = function(e) {
					return c(this, void 0, void 0, function() {
						return l(this, function(t) {
							return [2, new Promise(function(t) {
								return setTimeout(t, e);
							})];
						});
					});
				}, t.prototype.timeout = function() {
					return c(this, void 0, void 0, function() {
						return l(this, function(e) {
							return [2, new Promise(function(e, t) {
								return setTimeout(t, 50);
							})];
						});
					});
				}, t.prototype.reportToListeners = function() {
					this.fire({ type: T.AudioStatusChange }), this.removeAll();
				}, t.prototype.enableAudio = function() {
					return c(this, void 0, void 0, function() {
						return l(this, function(e) {
							return this._enabled || (this._enabled = !0, this._status = ie.AVAILABLE, this.reportToListeners()), [2];
						});
					});
				}, t.prototype.testAudio = function() {
					return c(this, void 0, void 0, function() {
						return l(this, function(e) {
							switch (e.label) {
								case 0:
									if (this._status !== ie.UNAVAILABLE || this._audioContext === null) return [3, 4];
									e.label = 1;
								case 1: return e.trys.push([
									1,
									3,
									,
									4
								]), [4, Promise.race([this._audioContext.resume(), this.timeout()])];
								case 2: return e.sent(), this.enableAudio(), [3, 4];
								case 3: return e.sent(), [3, 4];
								case 4: return [2];
							}
						});
					});
				}, t.prototype._establishAudio = function() {
					return c(this, void 0, void 0, function() {
						return l(this, function(e) {
							switch (e.label) {
								case 0: return this._started ? [3, 5] : (this._started = !0, typeof window < "u" ? [3, 1] : (this.enableAudio(), [3, 5]));
								case 1: this._audioContext = new AudioContext(), this.listenForUserAction(), e.label = 2;
								case 2: return this._status === ie.UNAVAILABLE ? [4, this.testAudio()] : [3, 5];
								case 3: return e.sent(), [4, this.delay(1e3)];
								case 4: return e.sent(), [3, 2];
								case 5: return [2];
							}
						});
					});
				}, t.prototype.listenForUserAction = function() {
					var e = this;
					document.addEventListener("pointerdown", function() {
						return c(e, void 0, void 0, function() {
							return l(this, function(e) {
								return this.enableAudio(), [2];
							});
						});
					}, { once: !0 });
				}, t.prototype.establishAudio = function() {
					return c(this, void 0, void 0, function() {
						return l(this, function(e) {
							return this._establishAudio(), [2];
						});
					});
				}, Object.defineProperty(t.prototype, "systemVolume", {
					get: function() {
						return this._status === ie.UNAVAILABLE ? (this.testAudio(), 0) : 1;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "status", {
					get: function() {
						return this._status;
					},
					enumerable: !1,
					configurable: !0
				}), t;
			}(L))(), oe = function() {
				function e() {}
				return e.prototype.observe = function() {}, e.prototype.unobserve = function() {}, e.prototype.disconnect = function() {}, e;
			}(), se = globalThis.ResizeObserver || oe, ce = new (function() {
				function e() {
					var e = this;
					this._elementsMap = /* @__PURE__ */ new Map(), this._onObservedEntry = function(t) {
						var n = e._elementsMap.get(t.target);
						n === null ? e._resizeObserver.unobserve(t.target) : n.onResize(t.target.clientWidth == 0 || t.target.clientHeight == 0);
					}, this._onObserved = function(t) {
						t.forEach(e._onObservedEntry);
					}, this._resizeObserver = new se(this._onObserved);
				}
				return e.prototype.add = function(e, t) {
					var n = {
						onResize: t,
						element: e
					};
					return this._elementsMap.set(e, n), this._resizeObserver.observe(e), n;
				}, e.prototype.remove = function(e) {
					this._resizeObserver.unobserve(e.element), this._elementsMap.delete(e.element);
				}, e;
			}())(), le = 0, ue = function(e) {
				var t = e.stateMachine, n = e.animations, r = e.stateMachines;
				return n !== void 0 && P(j.animationsParam, "The `animations` parameter is deprecated and will be removed in a future major version: please use the `stateMachine` parameter to play a state machine instead."), r !== void 0 && P(j.stateMachinesParam, "The `stateMachines` parameter is deprecated: please use `stateMachine` with a single state machine name instead."), t ? {
					startingAnimationNames: [],
					startingStateMachineNames: [t]
				} : {
					startingAnimationNames: J(n),
					startingStateMachineNames: J(r)
				};
			}, de = function() {
				function e(e) {
					this.enableRiveAssetCDN = !0, this.enablePerfMarks = !1, this.referenceCount = 0, this.destroyed = !1, this.selfUnref = !1, this.bindableArtboards = [], this.deferred = !1, this.session = null, this._sessionClaimed = !1, this.fileFinalizer = null, this.boundElsewhereWarned = !1, this.src = e.src, this.buffer = e.buffer, this.deferred = !!e.enableGPUCanvas, e.assetLoader && (this.assetLoader = e.assetLoader), this.enableRiveAssetCDN = typeof e.enableRiveAssetCDN != "boolean" || e.enableRiveAssetCDN, this.enablePerfMarks = !!e.enablePerfMarks, this.enablePerfMarks && (t.RuntimeLoader.enablePerfMarks = !0), this.eventManager = new L(), e.onLoad && this.on(T.Load, e.onLoad), e.onLoadError && this.on(T.LoadError, e.onLoadError);
				}
				return e.prototype.releaseFile = function() {
					var e, t;
					(e = this.fileFinalizer) == null || e.release(), (t = this.file) == null || t.unref(), this.fileFinalizer = null, this.file = null;
				}, e.prototype.releaseSession = function() {
					var e;
					(e = this.session) == null || e.delete(), this.session = null;
				}, e.prototype.releaseBindableArtboards = function() {
					this.bindableArtboards.forEach(function(e) {
						return e.destroy();
					});
				}, e.prototype.initData = function() {
					return c(this, void 0, void 0, function() {
						var t, n, r, i, o, s, c;
						return l(this, function(l) {
							switch (l.label) {
								case 0:
									if (!this.src || this.buffer) return [3, 4];
									l.label = 1;
								case 1: return l.trys.push([
									1,
									3,
									,
									4
								]), t = this, [4, ye(this.src)];
								case 2: return t.buffer = l.sent(), [3, 4];
								case 3: throw n = l.sent(), n instanceof Error ? n : new d(e.fileLoadErrorMessage);
								case 4:
									if (this.destroyed) return [2];
									this.deferred && this.session === null && (this.session = e.makeDeferredSession(this.runtime)), this.assetLoader && (i = new a.CustomFileAssetLoaderWrapper(this.runtime, this.assetLoader, this.session), r = i.assetLoader), this.enablePerfMarks && performance.mark("rive:file-load:start"), l.label = 5;
								case 5: return l.trys.push([
									5,
									7,
									,
									8
								]), o = this, [4, this.runtime.load(new Uint8Array(this.buffer), r, this.enableRiveAssetCDN, this.session)];
								case 6: return o.file = l.sent(), [3, 8];
								case 7: throw s = l.sent(), this.releaseSession(), s;
								case 8: return this.enablePerfMarks && (performance.mark("rive:file-load:end"), performance.measure("rive:file-load", "rive:file-load:start", "rive:file-load:end")), this.destroyed ? (this.releaseFile(), this.releaseSession(), [2]) : this.file === null ? (this.releaseSession(), this.fireLoadError(e.fileLoadErrorMessage), [2]) : (c = new a.FileFinalizer(this.file, this.session), this.fileFinalizer = c, a.finalizationRegistry.register(this, c), this.eventManager.fire({
									type: T.Load,
									data: this
								}), [2]);
							}
						});
					});
				}, e.prototype.loadRiveFileBytes = function() {
					return c(this, void 0, void 0, function() {
						var e;
						return l(this, function(t) {
							return this.enablePerfMarks && performance.mark("rive:fetch-riv:start"), e = this.src ? ye(this.src) : Promise.resolve(this.buffer), this.enablePerfMarks && this.src && e.then(function() {
								performance.mark("rive:fetch-riv:end"), performance.measure("rive:fetch-riv", "rive:fetch-riv:start", "rive:fetch-riv:end");
							}), [2, e];
						});
					});
				}, e.prototype.loadRuntime = function() {
					return c(this, void 0, void 0, function() {
						var e;
						return l(this, function(n) {
							return this.enablePerfMarks && performance.mark("rive:await-wasm:start"), e = t.RuntimeLoader.awaitInstance(), this.enablePerfMarks && e.then(function() {
								performance.mark("rive:await-wasm:end"), performance.measure("rive:await-wasm", "rive:await-wasm:start", "rive:await-wasm:end");
							}), [2, e];
						});
					});
				}, e.prototype.init = function() {
					return c(this, void 0, void 0, function() {
						var t, n, r, i;
						return l(this, function(a) {
							switch (a.label) {
								case 0:
									if (!this.src && !this.buffer) return this.fireLoadError(e.missingErrorMessage), [2];
									a.label = 1;
								case 1: return a.trys.push([
									1,
									4,
									,
									5
								]), [4, Promise.all([this.loadRiveFileBytes(), this.loadRuntime()])];
								case 2: return t = a.sent(), n = t[0], r = t[1], this.destroyed ? [2] : (this.buffer = n, this.runtime = r, this.enablePerfMarks && performance.mark("rive:init-data:start"), [4, this.initData()]);
								case 3: return a.sent(), this.enablePerfMarks && (performance.mark("rive:init-data:end"), performance.measure("rive:init-data", "rive:init-data:start", "rive:init-data:end")), [3, 5];
								case 4: return i = a.sent(), this.fireLoadError(i instanceof Error ? i.message : e.fileLoadErrorMessage), [3, 5];
								case 5: return [2];
							}
						});
					});
				}, e.prototype.fireLoadError = function(e) {
					throw this.eventManager.fire({
						type: T.LoadError,
						data: e
					}), new d(e);
				}, e.prototype.on = function(e, t) {
					this.eventManager.add({
						type: e,
						callback: t
					});
				}, e.prototype.off = function(e, t) {
					this.eventManager.remove({
						type: e,
						callback: t
					});
				}, e.prototype.cleanup = function() {
					--this.referenceCount, this.referenceCount <= 0 && (this.removeAllRiveEventListeners(), this.releaseFile(), this.releaseBindableArtboards(), this.releaseSession(), this.destroyed = !0);
				}, e.makeDeferredSession = function(t) {
					var n = t.makeDeferredSession?.call(t) ?? null;
					return n === null && !e.deferredUnsupportedWarned && (e.deferredUnsupportedWarned = !0, console.warn("Rive: `enableGPUCanvas: true` was ignored because this runtime build has no GPU Canvas support; importing in immediate mode. Use a @rive-app/webgl2 or @rive-app/canvas build with deferred rendering compiled in.")), n;
				}, Object.defineProperty(e.prototype, "deferredSession", {
					get: function() {
						return this.session;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "deferredRequested", {
					get: function() {
						return this.deferred;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "sessionClaimed", {
					get: function() {
						return this._sessionClaimed;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.claimSession = function() {
					this._sessionClaimed = !0;
				}, e.prototype.warnBoundElsewhereOnce = function() {
					this.boundElsewhereWarned || (this.boundElsewhereWarned = !0, console.warn("Rive: this deferred RiveFile is already bound to another Rive instance's canvas, and a deferred session cannot span canvases. Re-importing the file for this instance (an extra parse of the retained buffer, no extra network request)."));
				}, e.prototype.reimport = function(t) {
					return c(this, void 0, void 0, function() {
						var n;
						return l(this, function(r) {
							switch (r.label) {
								case 0: return n = new e({
									buffer: this.buffer,
									assetLoader: this.assetLoader,
									enableRiveAssetCDN: this.enableRiveAssetCDN,
									enablePerfMarks: this.enablePerfMarks,
									enableGPUCanvas: t
								}), [4, n.init()];
								case 1: return r.sent(), [2, n];
							}
						});
					});
				}, e.prototype.removeAllRiveEventListeners = function(e) {
					this.eventManager.removeAll(e);
				}, e.prototype.getInstance = function() {
					if (this.file !== null) return this.referenceCount += 1, this.file;
				}, e.prototype.destroyIfUnused = function() {
					this.referenceCount <= 0 && this.cleanup();
				}, e.prototype.createBindableArtboard = function(e) {
					if (e != null) {
						var t = new S(e);
						return (0, a.createFinalization)(t, t.nativeArtboard), this.bindableArtboards.push(t), t;
					}
					return null;
				}, e.prototype.getArtboard = function(e) {
					var t = this.file.artboardByName(e);
					if (t != null) return new x(t, this);
				}, e.prototype.getBindableArtboard = function(e) {
					var t = this.file.bindableArtboardByName(e);
					return this.createBindableArtboard(t);
				}, e.prototype.getDefaultBindableArtboard = function() {
					var e = this.file.bindableArtboardDefault();
					return this.createBindableArtboard(e);
				}, e.prototype.internalBindableArtboardFromArtboard = function(e) {
					var t = this.file.internalBindableArtboardFromArtboard(e);
					return this.createBindableArtboard(t);
				}, e.prototype.viewModelByName = function(e) {
					var t = this.file.viewModelByName(e);
					return t === null ? null : new z(t);
				}, e.prototype.globalViewModelNames = function() {
					return this.file.globalViewModelNames();
				}, e.missingErrorMessage = "Rive source file or data buffer required", e.fileLoadErrorMessage = "The file failed to load", e.deferredUnsupportedWarned = !1, e;
			}(), fe = function() {
				function e(e) {
					var n = this;
					this.loaded = !1, this.destroyed = !1, this._observed = null, this.readyForPlaying = !1, this.deferredRenderer = !1, this.useReplayWorker = !0, this._inkbleedCapable = !1, this._inkbleed = !1, this.ownsRiveFile = !1, this.artboard = null, this.eventCleanup = null, this._keyboardInteractions = null, this._gamepadInteractions = null, this.shouldDisableRiveListeners = !1, this.shouldDisableGamepad = !1, this._gamepadOptions = { requireFocus: !1 }, this.automaticallyHandleEvents = !1, this.dispatchPointerExit = !0, this.enableMultiTouch = !1, this.enableRiveAssetCDN = !0, this.semanticsMode = i.SemanticMode.Disabled, this.semanticsOptions = { riveCanvasLabel: "Rive animation" }, this._semanticsActive = !1, this._volume = 1, this._artboardWidth = void 0, this._artboardHeight = void 0, this._devicePixelRatioUsed = 1, this._hasZeroSize = !1, this._needsRedraw = !1, this._currentCanvasWidth = 0, this._currentCanvasHeight = 0, this._audioEventListener = null, this._boundDraw = null, this._pageVisibilityHandler = null, this._explicitlyStoppedRendering = !1, this._viewModelInstance = null, this._globalViewModelInstances = /* @__PURE__ */ new Map(), this._dataEnums = null, this._tabIndex = null, this._prevHasFocus = !1, this._prevWantsTextInputSession = !1, this._inPointerDownDrain = !1, this._focusOptions = { allowFocusInterrupt: !1 }, this._semanticTree = null, this._accessibilityOverlay = null, this._overlayTransformDirty = !0, this._instanceId = `${le++}`, this.drawOptimization = h.DrawOnChanged, this.enablePerfMarks = !1, this.durations = [], this.frameTimes = [], this.frameCount = 0, this.isTouchScrollEnabled = !1, this.onCanvasResize = function(e) {
						var t = n._hasZeroSize !== e;
						n._hasZeroSize = e, e ? n._layout.maxX && n._layout.maxY || n.resizeToCanvas() : t && n.resizeDrawingSurfaceToCanvas();
					}, this.isEditingHostFocused = function() {
						return n._keyboardInteractions?.isEditingHostFocused() ?? !1;
					}, this.isFocusWithinCanvas = function() {
						if (typeof document > "u") return !1;
						var e = n.canvas instanceof HTMLCanvasElement ? n.canvas.getRootNode() : null, t = (typeof ShadowRoot < "u" && e instanceof ShadowRoot ? e.activeElement : null) ?? document.activeElement;
						if (!t) return !1;
						if (n._keyboardInteractions) return n._keyboardInteractions.isInFocusDomain(t);
						if (t === n.canvas) return !0;
						var r = n._accessibilityOverlay?.getSemanticOverlayContainer() ?? null;
						return !!r && r.contains(t);
					}, this.lastRenderTime = 0, this.frameRequestId = null, this.replayPacer = new a.ReplayPacer(), this.renderSecondTimer = 0, this._boundDraw = this.draw.bind(this), typeof document < "u" && (this._pageVisibilityHandler = this._onPageVisibilityChange.bind(this), document.addEventListener("visibilitychange", this._pageVisibilityHandler)), this.canvas = e.canvas, e.canvas.constructor === HTMLCanvasElement && (this._observed = ce.add(this.canvas, this.onCanvasResize)), this._currentCanvasWidth = this.canvas.width, this._currentCanvasHeight = this.canvas.height, this.src = e.src, this.buffer = e.buffer, this.riveFile = e.riveFile, this.layout = e.layout ?? new g(), this.shouldDisableRiveListeners = !!e.shouldDisableRiveListeners, this.shouldDisableGamepad = !!e.shouldDisableGamepad, this._gamepadOptions = e.gamepadOptions ?? this._gamepadOptions, this.isTouchScrollEnabled = !!e.isTouchScrollEnabled, e.automaticallyHandleEvents && P(j.riveEvents, "The `automaticallyHandleEvents` parameter is deprecated. " + E), this.automaticallyHandleEvents = !!e.automaticallyHandleEvents, this.dispatchPointerExit = e.dispatchPointerExit === !1 ? e.dispatchPointerExit : this.dispatchPointerExit, this.enableMultiTouch = !!e.enableMultiTouch, this.drawOptimization = e.drawingOptions ?? this.drawOptimization, this.enableRiveAssetCDN = e.enableRiveAssetCDN === void 0 || e.enableRiveAssetCDN, this.enablePerfMarks = !!e.enablePerfMarks, this.enablePerfMarks && (t.RuntimeLoader.enablePerfMarks = !0), this._focusOptions = e.focusOptions ?? this._focusOptions, this._tabIndex = e.tabIndex ?? null, this.deferredRenderer = !!e.enableGPUCanvas, this.useReplayWorker = e.useReplayWorker ?? !0, this._inkbleedCapable = !!e.enableInkbleed, this._inkbleed = this._inkbleedCapable, this.eventManager = new L(), e.onLoad && this.on(T.Load, e.onLoad), e.onLoadError && this.on(T.LoadError, e.onLoadError), e.onPlay && this.on(T.Play, e.onPlay), e.onPause && this.on(T.Pause, e.onPause), e.onStop && this.on(T.Stop, e.onStop), e.onLoop && this.on(T.Loop, e.onLoop), e.onStateChange && this.on(T.StateChange, e.onStateChange), e.onAdvance && this.on(T.Advance, e.onAdvance), e.onload && !e.onLoad && this.on(T.Load, e.onload), e.onloaderror && !e.onLoadError && this.on(T.LoadError, e.onloaderror), e.onplay && !e.onPlay && this.on(T.Play, e.onplay), e.onpause && !e.onPause && this.on(T.Pause, e.onpause), e.onstop && !e.onStop && this.on(T.Stop, e.onstop), e.onloop && !e.onLoop && this.on(T.Loop, e.onloop), e.onstatechange && !e.onStateChange && this.on(T.StateChange, e.onstatechange), e.assetLoader && (this.assetLoader = e.assetLoader), this.taskQueue = new re(this.eventManager), this.init({
						src: this.src,
						buffer: this.buffer,
						riveFile: this.riveFile,
						autoplay: e.autoplay,
						autoBind: e.autoBind,
						stateMachine: e.stateMachine,
						animations: e.animations,
						stateMachines: e.stateMachines,
						artboard: e.artboard,
						useOffscreenRenderer: e.useOffscreenRenderer,
						tabIndex: e.tabIndex,
						semanticsMode: e.semanticsMode,
						semanticsOptions: e.semanticsOptions,
						enableGPUCanvas: this.deferredRenderer
					});
				}
				return Object.defineProperty(e, "suppressDeprecationWarnings", {
					get: function() {
						return Object.freeze(Array.from(N));
					},
					set: function(e) {
						ee(e);
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "viewModelCount", {
					get: function() {
						return this.file.viewModelCount();
					},
					enumerable: !1,
					configurable: !0
				}), e.new = function(t) {
					return P(j.legacyConstructors, "This function is deprecated: please use `new Rive({})` instead"), new e(t);
				}, e.prototype.enableSemantics = function() {
					this.semanticsMode = i.SemanticMode.Enabled, this.activateSemantics();
				}, e.prototype.activateSemantics = function() {
					this._semanticsActive || this.semanticsMode === i.SemanticMode.Disabled || (this._semanticsActive = !0, this.syncSemanticsOnStateMachines());
				}, e.prototype.syncSemanticsOnStateMachines = function() {
					if (this._semanticsActive && this.animator) for (var e = 0, t = this.animator.stateMachines; e < t.length; e++) t[e].enableSemantics();
				}, e.prototype.cleanupSemantics = function() {
					this._semanticTree = null, this._accessibilityOverlay &&= (this._accessibilityOverlay.destroy(), null);
				}, e.prototype.onSystemAudioChanged = function() {
					this.volume = this._volume;
				}, e.prototype.init = function(n) {
					var r = this, a, o, s, c, l, u = n.src, f = n.buffer, p = n.riveFile, m = n.stateMachine, h = n.animations, g = n.stateMachines, _ = n.artboard, v = n.autoplay, y = v !== void 0 && v, b = n.useOffscreenRenderer, x = b !== void 0 && b, S = n.autoBind, C = S !== void 0 && S, w = n.tabIndex, E = n.semanticsMode, D = n.semanticsOptions, O = n.enableGPUCanvas;
					if (!this.destroyed) {
						if (!u && !f && !p) throw new d(e.missingErrorMessage);
						this.artboard &&= ((o = (a = this.renderer)?.bindContext) == null || o.call(a), (s = this.animator) == null || s.stop(), this.artboard.delete(), null), this.renderer && ((l = (c = this.renderer).detachSession) == null || l.call(c)), this.releaseCurrentRiveFile(!1), this.src = u, this.buffer = f, this.riveFile = p, this.ownsRiveFile = !1, this.deferredRenderer = O ?? this.deferredRenderer, this._tabIndex = w ?? null, this.semanticsMode = E ?? i.SemanticMode.Disabled, this.semanticsOptions = D ?? this.semanticsOptions;
						var k = ue({
							stateMachine: m,
							animations: h,
							stateMachines: g
						}), A = k.startingAnimationNames, j = k.startingStateMachineNames;
						this.loaded = !1, this.readyForPlaying = !1, this.lastRenderTime = 0, t.RuntimeLoader.awaitInstance().then(function(e) {
							if (!r.destroyed) {
								r.runtime = e, r.removeRiveListeners(), r.cleanupSemantics(), r.deleteRiveRenderer(), r.enablePerfMarks && performance.mark("rive:make-renderer:start");
								try {
									if (r.renderer = r.runtime.makeRenderer(r.canvas, x, {
										inkbleed: r._inkbleedCapable,
										replayWorker: r.deferredRenderer && r.useReplayWorker && (r.riveFile?.deferredRequested ?? !0),
										onContextRestored: function() {
											r._explicitlyStoppedRendering || r.scheduleRendering();
										}
									}), !r.renderer) throw Error("Renderer is null, cannot render Rive on the canvas.");
								} catch (e) {
									throw console.error(e), new d("Unable to create the renderer, your environment may not support WebGL. Try the @rive-app/canvas runtime as an alternative.");
								}
								r._inkbleedCapable && r.applyInkbleed(), r.enablePerfMarks && (performance.mark("rive:make-renderer:end"), performance.measure("rive:make-renderer", "rive:make-renderer:start", "rive:make-renderer:end")), r.canvas.width || r.canvas.height || r.resizeDrawingSurfaceToCanvas(), r.initData(_, A, j, y, C).then(function(e) {
									if (e) return r.setupRiveListeners();
								}).catch(function(e) {
									console.error(e);
								});
							}
						}).catch(function(e) {
							r.eventManager.fire({
								type: T.LoadError,
								data: e.message
							});
						});
					}
				}, e.prototype.setupRiveListeners = function(e) {
					var t = this;
					if (this.eventCleanup && this.eventCleanup(), this.cleanupKeyboardInteractions(), !this.shouldDisableRiveListeners) {
						var n = this.animator.stateMachines.filter(function(e) {
							return e.playing;
						}).filter(function(e) {
							return t.runtime.hasListeners(e.instance);
						}).map(function(e) {
							return e.instance;
						}), r = this.isTouchScrollEnabled, i = this.dispatchPointerExit, o = this.enableMultiTouch;
						e && "isTouchScrollEnabled" in e && (r = e.isTouchScrollEnabled), this.eventCleanup = (0, a.registerTouchInteractions)({
							canvas: this.canvas,
							artboard: this.artboard,
							stateMachines: n,
							renderer: this.renderer,
							rive: this.runtime,
							fit: this._layout.runtimeFit(this.runtime),
							alignment: this._layout.runtimeAlignment(this.runtime),
							isTouchScrollEnabled: r,
							dispatchPointerExit: i,
							enableMultiTouch: o,
							layoutScaleFactor: this._layout.layoutScaleFactor,
							advanceAndDrain: this.advanceAndDrainForPointer.bind(this),
							summonKeyboard: this.summonKeyboardForGesture.bind(this),
							isTextProxyFocused: this.isEditingHostFocused
						}), this.ensureKeyboardInteractions(), this.ensureGamepadInteractions();
					}
				}, Object.defineProperty(e.prototype, "focusStateMachine", {
					get: function() {
						return this.animator.stateMachines.find(function(e) {
							return e.playing && e.hasFocusNodes;
						});
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.ensureKeyboardInteractions = function() {
					var e = this;
					if (!(this._keyboardInteractions || this.shouldDisableRiveListeners || typeof window > "u" || !(this.canvas instanceof HTMLCanvasElement))) {
						var t = this.focusStateMachine;
						if (t) {
							var n = this.canvas.tabIndex;
							(n === -1 || isNaN(n)) && (this.canvas.tabIndex = this._tabIndex === null ? 0 : this._tabIndex), this._keyboardInteractions = new a.KeyboardInteractions({
								canvas: this.canvas,
								stateMachine: t.instance,
								hasFocusNodes: !0,
								getOverlayElement: function() {
									return e._accessibilityOverlay?.getSemanticOverlayContainer() ?? null;
								}
							});
						}
					}
				}, e.prototype.summonKeyboardForGesture = function() {
					if (this._keyboardInteractions) {
						var e = this.focusStateMachine;
						e && this.wantsTextInputSession(e.focusState().expectsTextInput) && this._keyboardInteractions.summonForPointer();
					}
				}, e.prototype.wantsTextInputSession = function(e) {
					if (!e) return !1;
					var t = this._semanticTree?.focusedNode();
					return t === void 0 || t.role === i.SemanticRole.textField;
				}, e.prototype.advanceAndDrainForPointer = function(e, t) {
					if (!t?.pointerDown) this.advanceAndReportChanges(e);
					else {
						this._inPointerDownDrain = !0;
						try {
							this.advanceAndReportChanges(e);
						} finally {
							this._inPointerDownDrain = !1;
						}
					}
				}, e.prototype.cleanupKeyboardInteractions = function() {
					var e;
					this._keyboardInteractions &&= (this._keyboardInteractions.cleanup(), null), this._prevWantsTextInputSession = !1, (e = this._accessibilityOverlay) == null || e.releaseEditingHost(null, null);
				}, e.prototype.ensureGamepadInteractions = function() {
					this._gamepadInteractions || this.shouldDisableGamepad || this.shouldDisableRiveListeners || (this._gamepadInteractions = new a.GamepadInteractions({
						requireFocus: !!this._gamepadOptions.requireFocus,
						isFocusWithin: this.isFocusWithinCanvas
					}));
				}, e.prototype.cleanupGamepadInteractions = function() {
					var e;
					(e = this._gamepadInteractions) == null || e.dispose(), this._gamepadInteractions = null;
				}, e.prototype.removeRiveListeners = function() {
					this.eventCleanup &&= (this.eventCleanup(), null), this.cleanupKeyboardInteractions();
				}, e.prototype.initializeAudio = function() {
					var e = this;
					ae.status == ie.UNAVAILABLE && (this.file.hasAudio || this.artboard?.hasAudio && this._audioEventListener === null) && (this._audioEventListener = {
						type: T.AudioStatusChange,
						callback: function() {
							return e.onSystemAudioChanged();
						}
					}, ae.add(this._audioEventListener), ae.establishAudio());
				}, e.prototype.initArtboardSize = function() {
					this.artboard && (this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width, this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height);
				}, e.prototype.initData = function(e, n, r, a, o) {
					return c(this, void 0, void 0, function() {
						var s, c, u, d, p, m;
						return l(this, function(l) {
							switch (l.label) {
								case 0: return l.trys.push([
									0,
									8,
									,
									9
								]), this.ownsRiveFile = this.riveFile == null, this.ownsRiveFile ? (s = new de({
									src: this.src,
									buffer: this.buffer,
									enableRiveAssetCDN: this.enableRiveAssetCDN,
									assetLoader: this.assetLoader,
									enablePerfMarks: this.enablePerfMarks,
									enableGPUCanvas: this.deferredRenderer
								}), this.riveFile = s, [4, s.init()]) : [3, 2];
								case 1:
									if (l.sent(), this.destroyed) return s.destroyIfUnused(), [2, !1];
									l.label = 2;
								case 2: return this.riveFile.deferredSession !== null || this.deferredRenderer || ((d = this.renderer)?.replaysOnWorker)?.call(d) === !0 ? ((p = this.renderer)?.replaysOnWorker)?.call(p) === !0 ? [4, t.RuntimeLoader.awaitReplayCaps()] : [3, 4] : [3, 7];
								case 3: l.sent(), l.label = 4;
								case 4: return this.destroyed ? [3, 6] : [4, this.resolveDeferredRendering()];
								case 5: l.sent(), l.label = 6;
								case 6:
									if (this.destroyed) return this.ownsRiveFile && ((m = this.riveFile) == null || m.destroyIfUnused()), [2, !1];
									l.label = 7;
								case 7:
									this.file = this.riveFile.getInstance(), this.reportDisplayScale(), this.initArtboard(e, n, r, a, o), this.initArtboardSize(), this.initializeAudio(), this.semanticsMode === i.SemanticMode.Enabled ? this.activateSemantics() : this._semanticsActive && this.syncSemanticsOnStateMachines();
									try {
										this.loaded = !0, this.eventManager.fire({
											type: T.Load,
											data: this.src ?? "buffer"
										});
									} catch (e) {
										console.error(e);
									}
									return this.animator.advanceIfPaused(), this.readyForPlaying = !0, this.taskQueue.process(), this.drawFrame(), [2, !0];
								case 8: return c = l.sent(), u = f(c), this.eventManager.fire({
									type: T.LoadError,
									data: u
								}), [2, Promise.reject(u)];
								case 9: return [2];
							}
						});
					});
				}, e.prototype.resolveDeferredRendering = function() {
					return c(this, void 0, void 0, function() {
						var e, t, n, r, i, a, o, s, c, u, d, f, p;
						return l(this, function(l) {
							switch (l.label) {
								case 0: return e = this.riveFile, t = this.ownsRiveFile, n = this.renderer, r = e.deferredSession, i = (n?.replaysOnWorker)?.call(n) === !0, r === null ? i ? (console.warn("Rive: this canvas draws on the replay worker, which only replays GPU Canvas files. Re-importing the file with `enableGPUCanvas: true` for this instance."), [4, this.attachDeferredCopy(e, n)]) : [3, 2] : [3, 3];
								case 1: return a = l.sent().attached, a && t && e.destroyIfUnused(), [2];
								case 2: return this.deferredRenderer && !e.deferredRequested && console.warn("Rive: `enableGPUCanvas: true` was ignored because this RiveFile was imported without it. The mode is fixed at import: construct the RiveFile with `enableGPUCanvas: true` to opt in."), [2];
								case 3: return this.deferredRenderer || console.warn("Rive: this RiveFile was imported with `enableGPUCanvas: true`, so this instance renders deferred even though `enableGPUCanvas` is false on the instance. An immediate renderer would drop the file's deferred resources and draw nothing."), o = n?.attachSession, typeof o == "function" ? [3, 5] : (console.warn("Rive: this renderer cannot replay a deferred session (`useOffscreenRenderer` is not supported with deferred rendering). Re-importing the file in immediate mode for this instance."), [4, e.reimport(!1)]);
								case 4: return s = l.sent(), this.destroyed ? (s.destroyIfUnused(), [2]) : (this.riveFile = s, this.ownsRiveFile = !0, t && e.destroyIfUnused(), [2]);
								case 5: return !e.sessionClaimed && o.call(n, r) ? (e.claimSession(), [2]) : (e.warnBoundElsewhereOnce(), [4, this.attachDeferredCopy(e, n)]);
								case 6: return c = l.sent(), u = c.copy, d = c.attached, d || this.destroyed ? [2] : i ? (console.warn("Rive: could not attach the re-imported file's deferred session to this canvas, which draws on the replay worker and has no immediate fallback."), [2]) : (console.warn("Rive: could not attach the re-imported file's deferred session to this canvas; falling back to immediate rendering for this instance."), (p = n.detachSession) == null || p.call(n), [4, e.reimport(!1)]);
								case 7: return f = l.sent(), u.destroyIfUnused(), this.destroyed ? (f.destroyIfUnused(), [2]) : (this.riveFile = f, this.ownsRiveFile = !0, t && e.destroyIfUnused(), [2]);
							}
						});
					});
				}, e.prototype.reloadForRestoredContext = function() {
					var t = this.ownsRiveFile ? void 0 : this.riveFile;
					!this.src && !this.buffer && !t ? (this.stopRendering(), e.replayContextLostWarned || (e.replayContextLostWarned = !0, console.warn("Rive: the replay worker's WebGL context was restored, but this instance has no `src` or `buffer` to reload from, so its canvas stays blank."))) : this.load({
						src: this.src,
						buffer: this.buffer,
						riveFile: t,
						artboard: this.activeArtboard,
						animations: this.playingAnimationNames.concat(this.pausedAnimationNames),
						stateMachines: this.playingStateMachineNames.concat(this.pausedStateMachineNames),
						autoplay: this.isPlaying,
						autoBind: this._viewModelInstance !== null,
						enableGPUCanvas: this.deferredRenderer
					});
				}, e.prototype.attachDeferredCopy = function(e, t) {
					return c(this, void 0, void 0, function() {
						var n, r, i;
						return l(this, function(a) {
							switch (a.label) {
								case 0: return [4, e.reimport(!0)];
								case 1: return n = a.sent(), this.destroyed ? (n.destroyIfUnused(), [2, {
									copy: n,
									attached: !1
								}]) : (this.riveFile = n, this.ownsRiveFile = !0, r = n.deferredSession, i = r !== null && t.attachSession?.call(t, r) === !0, i && n.claimSession(), [2, {
									copy: n,
									attached: i
								}]);
							}
						});
					});
				}, e.prototype.initArtboard = function(e, t, n, r, i) {
					if (this.file) {
						var o = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
						if (!o) throw new d("Invalid artboard name or no default artboard");
						this.artboard = o, o.volume = this._volume * ae.systemVolume, this.animator = new w(this.runtime, this.artboard, this.eventManager);
						var s;
						if (t.length > 0 || n.length > 0 ? (s = t.concat(n), this.animator.initLinearAnimations(t, r), this.animator.initStateMachines(n, r, this._semanticsActive)) : s = [this.animator.atLeastOne(r, !1, this._semanticsActive)], this.taskQueue.add({ event: {
							type: r ? T.Play : T.Pause,
							data: s
						} }), i) {
							var c = this.file.defaultArtboardViewModel(o);
							if (c !== null) {
								var l = c.defaultInstance();
								if (l !== null) {
									var u = new V(l, null);
									(0, a.createFinalization)(u, u.runtimeInstance), this.setViewModelInstance(u);
								}
							}
							for (var f = 0, p = this.file.globalViewModelNames(); f < p.length; f++) {
								var m = p[f], h = this.file.viewModelByName(m);
								if (h !== null) {
									var g = new z(h).defaultInstance();
									g !== null && this.setGlobalViewModelInstance(m, g);
								}
							}
							this.bind();
						}
					}
				}, e.prototype.drawFrame = function() {
					var e;
					(document == null ? void 0 : document.timeline)?.currentTime ? this.loaded && this.artboard && !this.frameRequestId && (this.draw(null), (e = this.runtime) == null || e.resolveAnimationFrame()) : this.scheduleRendering();
				}, e.prototype._canvasSizeChanged = function() {
					var e = !1;
					return this.canvas && (this.canvas.width !== this._currentCanvasWidth && (this._currentCanvasWidth = this.canvas.width, e = !0), this.canvas.height !== this._currentCanvasHeight && (this._currentCanvasHeight = this.canvas.height, e = !0)), e;
				}, e.prototype._deferredWorkPending = function() {
					return (this.riveFile?.deferredSession)?.recordedThisFrame() ?? !1;
				}, e.prototype.pollFocusState = function() {
					this.ensureKeyboardInteractions();
					var e = this._keyboardInteractions, t = e ? this.focusStateMachine : void 0;
					if (!e || !t || !(this.canvas instanceof HTMLCanvasElement)) this._prevHasFocus = !1, this._prevWantsTextInputSession = !1;
					else {
						var n = t.focusState(), r = n.hasFocus, i = n.expectsTextInput;
						this.syncTextInputSession(e, this.wantsTextInputSession(i)), this.syncRiveFocus(e, this.canvas, r);
					}
				}, e.prototype.syncTextInputSession = function(e, t) {
					var n = e.editingHost, r = this._accessibilityOverlay;
					if (t) {
						var i = !this._prevWantsTextInputSession;
						if (i) {
							var a = !this._inPointerDownDrain && (e.isInFocusDomain(document.activeElement) || !!this._focusOptions.allowFocusInterrupt);
							e.beginTextInputSession(a);
						}
						r && this._semanticTree && (n.hasDomFocus() ? r.syncEditingHost(this._semanticTree, n, i || !r.hasEditingHost()) : r.hasEditingHost() && r.releaseEditingHost(this._semanticTree, n));
					} else this._prevWantsTextInputSession && (r?.releaseEditingHost(this._semanticTree, n), e.endTextInputSession());
					this._prevWantsTextInputSession = t;
				}, e.prototype.syncRiveFocus = function(e, t, n) {
					n ? (e.notifyRiveFocused(), this._prevHasFocus ||= (!e.isInFocusDomain(document.activeElement) && this._focusOptions.allowFocusInterrupt && t.focus(), !0)) : (this._prevHasFocus = !1, e.focusSessionState === a.FocusSessionState.RiveFocused && e.setFocusSessionState(a.FocusSessionState.NotFocused));
				}, e.prototype.advanceAndReportChanges = function(e, t) {
					for (var n, r, o = this.animator.animations.filter(function(e) {
						return e.playing || e.needsScrub;
					}).sort(function(e) {
						return e.needsScrub ? -1 : 1;
					}), s = 0, c = o; s < c.length; s++) {
						var l = c[s];
						l.advance(e), l.instance.didLoop && (l.loopCount += 1), l.apply(1);
					}
					var u = this.animator.stateMachines.filter(function(e) {
						return e.playing;
					});
					t !== void 0 && ((n = this._gamepadInteractions) == null || n.handleGamepadInputs(t, u[0]?.instance));
					for (var d = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1, f = 0, p = u; f < p.length; f++) {
						var m = p[f], h = m.reportedEventCount();
						if (h) for (var g = 0; g < h; g++) {
							var _ = m.reportedEventAt(g);
							if (_) {
								if (_.type === y.OpenUrl) {
									if (this.eventManager.fire({
										type: T.RiveEvent,
										data: _
									}), this.automaticallyHandleEvents) {
										var v = document.createElement("a"), b = _, x = b.url, S = b.target, C = (0, a.sanitizeUrl)(x);
										x && v.setAttribute("href", C), S && v.setAttribute("target", S), C && C !== a.BLANK_URL && v.click();
									}
								} else this.eventManager.fire({
									type: T.RiveEvent,
									data: _
								});
							}
						}
						if (d >= 0 && performance.mark(`rive:sm-advance:start:f${d}`), m.advanceAndApply(e), d >= 0 && (performance.mark(`rive:sm-advance:end:f${d}`), performance.measure(`rive:sm-advance:f${d}`, `rive:sm-advance:start:f${d}`, `rive:sm-advance:end:f${d}`)), this._semanticsActive) {
							var w = m.drainSemanticsDiff();
							w && (this._semanticTree ||= new i.SemanticTreeModel(), this._semanticTree.applyDiff(w));
						}
					}
					if (this._semanticsActive && this._semanticTree && u.length > 0 && this.canvas instanceof HTMLCanvasElement) {
						if (!this._accessibilityOverlay) {
							var E = u[0];
							this._accessibilityOverlay = new i.AccessibilityOverlay({
								canvas: this.canvas,
								instanceId: this._instanceId,
								semanticsOptions: this.semanticsOptions,
								allowFocusInterrupt: this._focusOptions.allowFocusInterrupt,
								isEditingHostFocused: this.isEditingHostFocused,
								fireAction: function(e, t) {
									E.fireSemanticAction(e, t);
								},
								requestFocus: function(e) {
									return E.focusSemanticNode(e);
								},
								clearFocus: function() {
									return E.instance.clearFocus();
								}
							});
						}
						var D = this._accessibilityOverlay?.needsUpdate(this._semanticTree);
						if (D || this._overlayTransformDirty) {
							var O = null;
							if (D?.layoutChanged || this._overlayTransformDirty) {
								var k = this._layout.runtimeFit(this.runtime), A = this._layout.runtimeAlignment(this.runtime);
								O = this.runtime.computeAlignment(k, A, {
									minX: this._layout.minX,
									minY: this._layout.minY,
									maxX: this._layout.maxX,
									maxY: this._layout.maxY
								}, this.artboard.bounds, this._devicePixelRatioUsed * this._layout.layoutScaleFactor), this._overlayTransformDirty = !1;
							}
							this._accessibilityOverlay.update(this._semanticTree, O, this._devicePixelRatioUsed, this.artboard.bounds, D), O?.delete();
						}
					}
					this.animator.stateMachines.length == 0 && this.artboard.advance(e), this.animator.handleLooping(), this.animator.handleStateChanges(), this.animator.handleAdvancing(e), this.pollFocusState(), this.ensureGamepadInteractions(), (r = this._viewModelInstance) == null || r.handleCallbacks(), this._globalViewModelInstances.forEach(function(e) {
						e && e.handleCallbacks();
					});
				}, e.prototype.draw = function(t, n) {
					var r, i, a;
					if (this.frameRequestId = null, this.artboard) {
						if (((r = this.renderer)?.contextRestored)?.call(r) === !0) this.reloadForRestoredContext();
						else {
							var o = ((i = this.renderer)?.acceptsFrame)?.call(i) !== !1, s = ((a = this.renderer)?.replayMs)?.call(a);
							if (t !== null && s !== void 0 ? !this.replayPacer.shouldRecord(t, s, o) : !o) this.scheduleRendering();
							else {
								var c = performance.now(), l = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1, u = e.batchStart;
								t !== null && u.time !== t && (u.time = t, u.now = c), !this.lastRenderTime && t !== null ? this.lastRenderTime = Math.max(t, u.now) : t !== null && t < this.lastRenderTime && (this.lastRenderTime = t);
								var d = t === null ? this.lastRenderTime : Math.max(t, this.lastRenderTime);
								this.renderSecondTimer += d - this.lastRenderTime, this.renderSecondTimer > 5e3 && (this.renderSecondTimer = 0, n?.());
								var f = (d - this.lastRenderTime) / 1e3;
								this.lastRenderTime = d, this.advanceAndReportChanges(f, t);
								var p = this.renderer, m = this.canvas.width > 0 && this.canvas.height > 0;
								m || (this._needsRedraw = !0), !this._hasZeroSize && m && (this.drawOptimization == h.AlwaysDraw || this.artboard.didChange() || this._deferredWorkPending() || this._needsRedraw || this._canvasSizeChanged()) && (p.clear(), p.save(), l >= 0 && performance.mark(`rive:align-renderer:start:f${l}`), this.alignRenderer(), l >= 0 && (performance.mark(`rive:align-renderer:end:f${l}`), performance.measure(`rive:align-renderer:f${l}`, `rive:align-renderer:start:f${l}`, `rive:align-renderer:end:f${l}`)), l >= 0 && performance.mark(`rive:artboard-draw:start:f${l}`), this.artboard.draw(p), l >= 0 && (performance.mark(`rive:artboard-draw:end:f${l}`), performance.measure(`rive:artboard-draw:f${l}`, `rive:artboard-draw:start:f${l}`, `rive:artboard-draw:end:f${l}`)), p.restore(), l >= 0 && performance.mark(`rive:renderer-flush:start:f${l}`), p.flush(), l >= 0 && (performance.mark(`rive:renderer-flush:end:f${l}`), performance.measure(`rive:renderer-flush:f${l}`, `rive:renderer-flush:start:f${l}`, `rive:renderer-flush:end:f${l}`)), this._needsRedraw = !1), this.frameCount++;
								var g = performance.now();
								for (this.frameTimes.push(g), this.durations.push(g - c); this.frameTimes[0] <= g - 1e3;) this.frameTimes.shift(), this.durations.shift();
								this.animator.isPlaying ? this.scheduleRendering() : (this.animator.isPaused || this.animator.isStopped) && (this.lastRenderTime = 0);
							}
						}
					}
				}, e.prototype.alignRenderer = function() {
					var e = this, t = e.renderer, n = e.runtime, r = e._layout, i = e.artboard;
					t.align(r.runtimeFit(n), r.runtimeAlignment(n), {
						minX: r.minX,
						minY: r.minY,
						maxX: r.maxX,
						maxY: r.maxY
					}, i.bounds, this._devicePixelRatioUsed * r.layoutScaleFactor);
				}, Object.defineProperty(e.prototype, "fps", {
					get: function() {
						return this.durations.length;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "frameTime", {
					get: function() {
						return this.durations.length === 0 ? 0 : (this.durations.reduce(function(e, t) {
							return e + t;
						}, 0) / this.durations.length).toFixed(4);
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.cleanup = function() {
					var e, t, n, r, i;
					this.destroyed = !0, this.stopRendering(), (t = (e = this.renderer)?.bindContext) == null || t.call(e), this.cleanupInstances(), this._observed !== null && ce.remove(this._observed), this.removeRiveListeners(), this.renderer && ((r = (n = this.renderer).detachSession) == null || r.call(n)), this.releaseCurrentRiveFile(!0), this.riveFile = null, this.deleteRiveRenderer(), this._audioEventListener !== null && (ae.remove(this._audioEventListener), this._audioEventListener = null), this._pageVisibilityHandler &&= (document.removeEventListener("visibilitychange", this._pageVisibilityHandler), null), (i = this._viewModelInstance) == null || i.cleanup(), this._viewModelInstance = null, this._globalViewModelInstances.forEach(function(e) {
						return e.cleanup();
					}), this._globalViewModelInstances.clear(), this._dataEnums = null;
				}, e.prototype.releaseCurrentRiveFile = function(e) {
					var t, n;
					this.file ? ((e || this.ownsRiveFile) && ((t = this.riveFile) == null || t.cleanup()), this.file = null) : this.ownsRiveFile && ((n = this.riveFile) == null || n.destroyIfUnused());
				}, e.prototype.deleteRiveRenderer = function() {
					var e, t;
					this.renderer && ((t = (e = this.renderer).detachSession) == null || t.call(e), this.renderer.delete()), this.renderer = null;
				}, Object.defineProperty(e.prototype, "deferredRendererActive", {
					get: function() {
						var e;
						return ((e = this.renderer)?.deferredActive)?.call(e) ?? !1;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.cleanupInstances = function() {
					var e;
					this.eventCleanup !== null && this.eventCleanup(), this.cleanupKeyboardInteractions(), this.cleanupGamepadInteractions(), this.cleanupSemantics(), (e = this.animator) == null || e.stop(), this.artboard &&= (this.artboard.delete(), null);
				}, e.prototype.retrieveTextRun = function(e) {
					if (!e) console.warn("No text run name provided");
					else if (!this.artboard) console.warn("Tried to access text run, but the Artboard is null");
					else {
						var t = this.artboard.textRun(e);
						if (!t) console.warn(`Could not access a text run with name '${e}' in the '${this.artboard?.name}' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime.`);
						else return t;
					}
				}, e.prototype.getTextRunValue = function(e) {
					P(j.textRuns, O);
					var t = this.retrieveTextRun(e);
					return t ? t.text : void 0;
				}, e.prototype.setTextRunValue = function(e, t) {
					P(j.textRuns, O);
					var n = this.retrieveTextRun(e);
					n && (n.text = t);
				}, e.prototype.warnIfLinearAnimationNames = function(e, t) {
					this.animator && this.animator.animations.some(function(t) {
						return e.includes(t.name);
					}) && I(t);
				}, e.prototype.play = function(e, t) {
					var n = this;
					F(e, "play");
					var r = J(e);
					this.readyForPlaying ? (this.animator.play(r), this.warnIfLinearAnimationNames(r, "play"), this.syncSemanticsOnStateMachines(), this.eventCleanup && this.eventCleanup(), this.cleanupKeyboardInteractions(), this.setupRiveListeners(), this.startRendering()) : this.taskQueue.add({ action: function() {
						return n.play(e, t);
					} });
				}, e.prototype.pause = function(e) {
					var t = this;
					F(e, "pause");
					var n = J(e);
					this.readyForPlaying ? (this.eventCleanup && this.eventCleanup(), this.cleanupKeyboardInteractions(), this.animator.pause(n), this.warnIfLinearAnimationNames(n, "pause")) : this.taskQueue.add({ action: function() {
						return t.pause(e);
					} });
				}, e.prototype.scrub = function(e, t) {
					var n = this;
					P(j.scrub, "`scrub()` is deprecated and will be removed in a future major version: use a state machine to control playback instead.");
					var r = J(e);
					this.readyForPlaying ? (this.animator.scrub(r, t || 0), this.drawFrame()) : this.taskQueue.add({ action: function() {
						return n.scrub(e, t);
					} });
				}, e.prototype.stop = function(e) {
					var t = this;
					F(e, "stop");
					var n = J(e);
					this.readyForPlaying ? (this.warnIfLinearAnimationNames(n, "stop"), this.animator && this.animator.stop(n), this.eventCleanup && this.eventCleanup(), this.cleanupKeyboardInteractions(), this.cleanupSemantics()) : this.taskQueue.add({ action: function() {
						return t.stop(e);
					} });
				}, e.prototype.reset = function(e) {
					var t = e?.artboard, n = ue({
						stateMachine: e?.stateMachine,
						animations: e?.animations,
						stateMachines: e?.stateMachines
					}), r = n.startingAnimationNames, i = n.startingStateMachineNames, a = e?.autoplay ?? !1, o = e?.autoBind ?? !1;
					this.cleanupInstances(), this.initArtboard(t, r, i, a, o), this.readyForPlaying && this.taskQueue.process();
				}, e.prototype.load = function(t) {
					if (!t.src && !t.buffer && !t.riveFile) throw new d(e.missingErrorMessage);
					this.stop(), this.init(t);
				}, Object.defineProperty(e.prototype, "layout", {
					get: function() {
						return this._layout;
					},
					set: function(e) {
						this._layout = e, this.reportDisplayScale(), this._overlayTransformDirty = !0, e.maxX && e.maxY || this.resizeToCanvas(), this.loaded && !this.animator.isPlaying && this.drawFrame();
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.resizeToCanvas = function() {
					this._layout = this.layout.copyWith({
						minX: 0,
						minY: 0,
						maxX: this.canvas.width,
						maxY: this.canvas.height
					}), this._overlayTransformDirty = !0;
				}, e.prototype.resizeDrawingSurfaceToCanvas = function(e) {
					if (this.canvas instanceof HTMLCanvasElement && window) {
						var t = this.canvas.getBoundingClientRect(), n = t.width, r = t.height, i = e || window.devicePixelRatio || 1;
						if (this.devicePixelRatioUsed = i, this.canvas.width = i * n, this.canvas.height = i * r, this._needsRedraw = !0, this.resizeToCanvas(), this.layout.fit === p.Layout && this.artboard) {
							var a = this._layout.layoutScaleFactor;
							this.artboard.width = n / a, this.artboard.height = r / a;
						}
						this.drawFrame();
					}
				}, Object.defineProperty(e.prototype, "source", {
					get: function() {
						return this.src;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "activeArtboard", {
					get: function() {
						return this.artboard ? this.artboard.name : "";
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "semanticTree", {
					get: function() {
						return this._semanticTree;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "accessibilityOverlay", {
					get: function() {
						return this._accessibilityOverlay;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "animationNames", {
					get: function() {
						if (!this.loaded || !this.artboard) return [];
						for (var e = [], t = 0; t < this.artboard.animationCount(); t++) e.push(this.artboard.animationByIndex(t).name);
						return e;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "stateMachineNames", {
					get: function() {
						if (!this.loaded || !this.artboard) return [];
						for (var e = [], t = 0; t < this.artboard.stateMachineCount(); t++) e.push(this.artboard.stateMachineByIndex(t).name);
						return e;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.stateMachineInputs = function(e) {
					if (P(j.stateMachineInputs, D), this.loaded) return this.animator.stateMachines.find(function(t) {
						return t.name === e;
					})?.inputs;
				}, e.prototype.retrieveInputAtPath = function(e, t) {
					if (!e) console.warn(`No input name provided for path '${t}'`);
					else if (!this.artboard) console.warn(`Tried to access input: '${e}', at path: '${t}', but the Artboard is null`);
					else {
						var n = this.artboard.inputByPath(e, t);
						if (!n) console.warn(`Could not access an input with name: '${e}', at path:'${t}'`);
						else return n;
					}
				}, e.prototype.setBooleanStateAtPath = function(e, t, n) {
					P(j.stateMachineInputs, D);
					var r = this.retrieveInputAtPath(e, n);
					r && (r.type === _.Boolean ? r.asBool().value = t : console.warn(`Input with name: '${e}', at path:'${n}' is not a boolean`));
				}, e.prototype.setNumberStateAtPath = function(e, t, n) {
					P(j.stateMachineInputs, D);
					var r = this.retrieveInputAtPath(e, n);
					r && (r.type === _.Number ? r.asNumber().value = t : console.warn(`Input with name: '${e}', at path:'${n}' is not a number`));
				}, e.prototype.fireStateAtPath = function(e, t) {
					P(j.stateMachineInputs, D);
					var n = this.retrieveInputAtPath(e, t);
					n && (n.type === _.Trigger ? n.asTrigger().fire() : console.warn(`Input with name: '${e}', at path:'${t}' is not a trigger`));
				}, e.prototype.retrieveTextAtPath = function(e, t) {
					if (!e) console.warn(`No text name provided for path '${t}'`);
					else if (!t) console.warn(`No path provided for text '${e}'`);
					else if (!this.artboard) console.warn(`Tried to access text: '${e}', at path: '${t}', but the Artboard is null`);
					else {
						var n = this.artboard.textByPath(e, t);
						if (!n) console.warn(`Could not access text with name: '${e}', at path:'${t}'`);
						else return n;
					}
				}, e.prototype.getTextRunValueAtPath = function(e, t) {
					P(j.textRuns, O);
					var n = this.retrieveTextAtPath(e, t);
					if (!n) console.warn(`Could not get text with name: '${e}', at path:'${t}'`);
					else return n.text;
				}, e.prototype.setTextRunValueAtPath = function(e, t, n) {
					P(j.textRuns, O);
					var r = this.retrieveTextAtPath(e, n);
					r ? r.text = t : console.warn(`Could not set text with name: '${e}', at path:'${n}'`);
				}, Object.defineProperty(e.prototype, "playingStateMachineNames", {
					get: function() {
						return this.loaded ? this.animator.stateMachines.filter(function(e) {
							return e.playing;
						}).map(function(e) {
							return e.name;
						}) : [];
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "playingAnimationNames", {
					get: function() {
						return this.loaded ? this.animator.animations.filter(function(e) {
							return e.playing;
						}).map(function(e) {
							return e.name;
						}) : [];
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "pausedAnimationNames", {
					get: function() {
						return this.loaded ? this.animator.animations.filter(function(e) {
							return !e.playing;
						}).map(function(e) {
							return e.name;
						}) : [];
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "pausedStateMachineNames", {
					get: function() {
						return this.loaded ? this.animator.stateMachines.filter(function(e) {
							return !e.playing;
						}).map(function(e) {
							return e.name;
						}) : [];
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "isPlaying", {
					get: function() {
						return this.animator.isPlaying;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "isPaused", {
					get: function() {
						return this.animator.isPaused;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "isStopped", {
					get: function() {
						return this.animator?.isStopped ?? !0;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "bounds", {
					get: function() {
						return this.artboard ? this.artboard.bounds : void 0;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.on = function(e, t) {
					e === T.RiveEvent ? P(j.riveEvents, E) : e === T.StateChange ? P(j.stateChangeEvents, A) : e === T.Loop && P(j.loopEvents, k), this.eventManager.add({
						type: e,
						callback: t
					});
				}, e.prototype.off = function(e, t) {
					this.eventManager.remove({
						type: e,
						callback: t
					});
				}, e.prototype.unsubscribe = function(e, t) {
					P(j.legacyUnsubscribe, "This function is deprecated: please use `off()` instead."), this.off(e, t);
				}, e.prototype.removeAllRiveEventListeners = function(e) {
					this.eventManager.removeAll(e);
				}, e.prototype.unsubscribeAll = function(e) {
					P(j.legacyUnsubscribe, "This function is deprecated: please use `removeAllRiveEventListeners()` instead."), this.removeAllRiveEventListeners(e);
				}, e.prototype.stopRendering = function() {
					this._explicitlyStoppedRendering = !0, this.loaded && this.frameRequestId && (this.runtime.cancelAnimationFrame ? this.runtime.cancelAnimationFrame(this.frameRequestId) : cancelAnimationFrame(this.frameRequestId), this.frameRequestId = null);
				}, e.prototype.startRendering = function() {
					this._explicitlyStoppedRendering = !1, this.drawFrame();
				}, e.prototype.scheduleRendering = function() {
					this.loaded && this.artboard && !this.frameRequestId && (this.frameRequestId = this.runtime.requestAnimationFrame ? this.runtime.requestAnimationFrame(this._boundDraw) : requestAnimationFrame(this._boundDraw));
				}, e.prototype._onPageVisibilityChange = function() {
					document.hidden ? (this.frameRequestId !== null && (this.runtime?.cancelAnimationFrame ? this.runtime.cancelAnimationFrame(this.frameRequestId) : cancelAnimationFrame(this.frameRequestId), this.frameRequestId = null), this.lastRenderTime = 0) : this.animator?.isPlaying && !this._explicitlyStoppedRendering && this.scheduleRendering();
				}, e.prototype.enableFPSCounter = function(e) {
					this.runtime.enableFPSCounter(e);
				}, e.prototype.disableFPSCounter = function() {
					this.runtime.disableFPSCounter();
				}, Object.defineProperty(e.prototype, "contents", {
					get: function() {
						if (this.loaded) {
							for (var e = { artboards: [] }, t = 0; t < this.file.artboardCount(); t++) {
								for (var n = this.file.artboardByIndex(t), r = {
									name: n.name,
									animations: [],
									stateMachines: []
								}, i = 0; i < n.animationCount(); i++) {
									var a = n.animationByIndex(i);
									r.animations.push(a.name);
								}
								for (var o = 0; o < n.stateMachineCount(); o++) {
									for (var s = n.stateMachineByIndex(o), c = s.name, l = new this.runtime.StateMachineInstance(s, n), u = [], d = 0; d < l.inputCount(); d++) {
										var f = l.input(d);
										u.push({
											name: f.name,
											type: f.type
										});
									}
									r.stateMachines.push({
										name: c,
										inputs: u
									});
								}
								e.artboards.push(r);
							}
							return e;
						}
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "volume", {
					get: function() {
						return this.artboard && this.artboard.volume !== this._volume && (this._volume = this.artboard.volume), this._volume;
					},
					set: function(e) {
						this._volume = e, this.artboard && (this.artboard.volume = e * ae.systemVolume);
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "artboardWidth", {
					get: function() {
						return this.artboard ? this.artboard.width : this._artboardWidth ?? 0;
					},
					set: function(e) {
						this._artboardWidth = e, this.artboard && (this.artboard.width = e);
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "artboardHeight", {
					get: function() {
						return this.artboard ? this.artboard.height : this._artboardHeight ?? 0;
					},
					set: function(e) {
						this._artboardHeight = e, this.artboard && (this.artboard.height = e);
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.resetArtboardSize = function() {
					this.artboard ? (this.artboard.resetArtboardSize(), this._artboardWidth = this.artboard.width, this._artboardHeight = this.artboard.height) : (this._artboardWidth = void 0, this._artboardHeight = void 0);
				}, Object.defineProperty(e.prototype, "devicePixelRatioUsed", {
					get: function() {
						return this._devicePixelRatioUsed;
					},
					set: function(e) {
						e !== this._devicePixelRatioUsed && (this._overlayTransformDirty = !0), this._devicePixelRatioUsed = e, this.reportDisplayScale();
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "inkbleed", {
					get: function() {
						return this._inkbleedCapable && this._inkbleed;
					},
					set: function(t) {
						this._inkbleedCapable ? (this._inkbleed = t, this.renderer && this.applyInkbleed(), this._needsRedraw = !0, this.drawFrame()) : t && !e.inkbleedNotCapableWarned && (e.inkbleedNotCapableWarned = !0, console.warn("Rive: `inkbleed` can't be enabled on this instance. It needs `enableInkbleed: true` at construction, on @rive-app/webgl2 without `useOffscreenRenderer`."));
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.applyInkbleed = function() {
					var t = this._inkbleed, n = this.renderer.setInkbleed;
					(typeof n == "function" ? n.call(this.renderer, t) : !t) || (this._inkbleedCapable = !1, e.inkbleedUnsupportedWarned || (e.inkbleedUnsupportedWarned = !0, console.warn("Rive: `inkbleed` is not supported by this renderer (it needs @rive-app/webgl2 without `useOffscreenRenderer`, and a canvas context with depth and stencil). Rendering without it.")));
				}, e.prototype.reportDisplayScale = function() {
					var e;
					(e = this.file) == null || e.displayScale(this._devicePixelRatioUsed * this._layout.layoutScaleFactor);
				}, e.prototype.bindViewModelInstance = function(e) {
					e && (this.setViewModelInstance(e), this.bind());
				}, e.prototype.setViewModelInstance = function(e) {
					var t, n = e?.runtimeInstance;
					this.artboard && !this.destroyed && e && n && (e.internalIncrementReferenceCount(), (t = this._viewModelInstance) == null || t.cleanup(), this._viewModelInstance = e, this.animator.stateMachines.length > 0 ? this.animator.stateMachines.forEach(function(e) {
						return e.instance.setViewModelInstance(n);
					}) : this.artboard.setViewModelInstance(n));
				}, e.prototype.bind = function() {
					this.artboard && !this.destroyed && (this.animator.stateMachines.length > 0 ? this.animator.stateMachines.forEach(function(e) {
						return e.instance.bind();
					}) : this.artboard.bind());
				}, Object.defineProperty(e.prototype, "viewModelInstance", {
					get: function() {
						return this._viewModelInstance;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.setGlobalViewModelInstance = function(e, t) {
					var n, r = t?.runtimeInstance;
					if (!this.artboard || this.destroyed || !r) return !1;
					var i = !1;
					return this.animator.stateMachines.length > 0 ? this.animator.stateMachines.forEach(function(t) {
						t.instance.setGlobalViewModelInstance(e, r) && (i = !0);
					}) : i = this.artboard.setGlobalViewModelInstance(e, r), i && (t.internalIncrementReferenceCount(), (n = this._globalViewModelInstances.get(e)) == null || n.cleanup(), this._globalViewModelInstances.set(e, t)), i;
				}, e.prototype.globalViewModelInstance = function(e) {
					var t = this._globalViewModelInstances.get(e);
					if (t) return t;
					if (!this.artboard || this.destroyed) return null;
					var n = this.animator.stateMachines.length > 0 ? this.animator.stateMachines[0].instance.globalViewModelInstance(e) : this.artboard.globalViewModelInstance(e);
					if (n === null) return null;
					var r = new V(n, null);
					return (0, a.createFinalization)(r, n), r.internalIncrementReferenceCount(), this._globalViewModelInstances.set(e, r), r;
				}, e.prototype.globalViewModelNames = function() {
					return this.file?.globalViewModelNames() ?? [];
				}, e.prototype.viewModelByIndex = function(e) {
					var t = this.file.viewModelByIndex(e);
					return t === null ? null : new z(t);
				}, e.prototype.viewModelByName = function(e) {
					return this.riveFile?.viewModelByName(e);
				}, e.prototype.enums = function() {
					if (this._dataEnums === null) {
						var e = this.file.enums();
						this._dataEnums = e.map(function(e) {
							return new pe(e);
						});
					}
					return this._dataEnums;
				}, e.prototype.defaultViewModel = function() {
					if (this.artboard) {
						var e = this.file.defaultArtboardViewModel(this.artboard);
						if (e) return new z(e);
					}
					return null;
				}, e.prototype.getArtboard = function(e) {
					return this.riveFile?.getArtboard(e) ?? null;
				}, e.prototype.getBindableArtboard = function(e) {
					return this.riveFile?.getBindableArtboard(e) ?? null;
				}, e.prototype.getDefaultBindableArtboard = function() {
					return this.riveFile?.getDefaultBindableArtboard() ?? null;
				}, e.prototype.clearFocus = function() {
					this.animator.stateMachines.filter(function(e) {
						return e.playing && e.hasFocusNodes;
					}).forEach(function(e) {
						return e.clearFocus();
					});
				}, e.inkbleedUnsupportedWarned = !1, e.replayContextLostWarned = !1, e.inkbleedNotCapableWarned = !1, e.missingErrorMessage = "Rive source file or data buffer required", e.cleanupErrorMessage = "Attempt to use file after calling cleanup.", e.batchStart = {
					time: -1,
					now: 0
				}, e;
			}(), R;
			(function(e) {
				e.none = "none", e.string = "string", e.number = "number", e.boolean = "boolean", e.color = "color", e.list = "list", e.enumType = "enumType", e.trigger = "trigger", e.viewModel = "viewModel", e.integer = "integer", e.listIndex = "listIndex", e.image = "image", e.artboard = "artboard";
			})(R ||= {});
			var z = function() {
				function e(e) {
					this._viewModel = e;
				}
				return Object.defineProperty(e.prototype, "instanceCount", {
					get: function() {
						return this._viewModel.instanceCount;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "name", {
					get: function() {
						return this._viewModel.name;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.instanceByIndex = function(e) {
					var t = this._viewModel.instanceByIndex(e);
					if (t !== null) {
						var n = new V(t, null);
						return (0, a.createFinalization)(n, t), n;
					}
					return null;
				}, e.prototype.instanceByName = function(e) {
					var t = this._viewModel.instanceByName(e);
					if (t !== null) {
						var n = new V(t, null);
						return (0, a.createFinalization)(n, t), n;
					}
					return null;
				}, e.prototype.defaultInstance = function() {
					var e = this._viewModel.defaultInstance();
					if (e !== null) {
						var t = new V(e, null);
						return (0, a.createFinalization)(t, e), t;
					}
					return null;
				}, e.prototype.instance = function() {
					var e = this._viewModel.instance();
					if (e !== null) {
						var t = new V(e, null);
						return (0, a.createFinalization)(t, e), t;
					}
					return null;
				}, Object.defineProperty(e.prototype, "properties", {
					get: function() {
						return this._viewModel.getProperties();
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "instanceNames", {
					get: function() {
						return this._viewModel.getInstanceNames();
					},
					enumerable: !1,
					configurable: !0
				}), e;
			}(), pe = function() {
				function e(e) {
					this._dataEnum = e;
				}
				return Object.defineProperty(e.prototype, "name", {
					get: function() {
						return this._dataEnum.name;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "values", {
					get: function() {
						return this._dataEnum.values;
					},
					enumerable: !1,
					configurable: !0
				}), e;
			}(), B;
			(function(e) {
				e.Number = "number", e.String = "string", e.Boolean = "boolean", e.Color = "color", e.Trigger = "trigger", e.Enum = "enum", e.List = "list", e.Image = "image", e.Font = "font", e.Artboard = "artboard";
			})(B ||= {});
			var V = function() {
				function e(e, t) {
					this._parents = [], this._children = [], this._viewModelInstances = /* @__PURE__ */ new Map(), this._propertiesWithCallbacks = [], this._referenceCount = 0, this.selfUnref = !1, this._runtimeInstance = e, t !== null && this._parents.push(t);
				}
				return Object.defineProperty(e.prototype, "runtimeInstance", {
					get: function() {
						return this._runtimeInstance;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "nativeInstance", {
					get: function() {
						return this._runtimeInstance;
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.handleCallbacks = function() {
					this._propertiesWithCallbacks.length !== 0 && (this._propertiesWithCallbacks.forEach(function(e) {
						e.handleCallbacks();
					}), this._propertiesWithCallbacks.forEach(function(e) {
						e.clearChanges();
					})), this._children.forEach(function(e) {
						return e.handleCallbacks();
					});
				}, e.prototype.addParent = function(e) {
					this._parents.includes(e) || (this._parents.push(e), (this._propertiesWithCallbacks.length > 0 || this._children.length > 0) && e.addToViewModelCallbacks(this));
				}, e.prototype.removeParent = function(e) {
					var t = this._parents.indexOf(e);
					t !== -1 && (this._parents[t].removeFromViewModelCallbacks(this), this._parents.splice(t, 1));
				}, e.prototype.addToPropertyCallbacks = function(e) {
					var t = this;
					this._propertiesWithCallbacks.includes(e) || (this._propertiesWithCallbacks.push(e), this._propertiesWithCallbacks.length > 0 && this._parents.forEach(function(e) {
						e.addToViewModelCallbacks(t);
					}));
				}, e.prototype.removeFromPropertyCallbacks = function(e) {
					var t = this;
					this._propertiesWithCallbacks.includes(e) && (this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(function(t) {
						return t !== e;
					}), this._children.length === 0 && this._propertiesWithCallbacks.length === 0 && this._parents.forEach(function(e) {
						e.removeFromViewModelCallbacks(t);
					}));
				}, e.prototype.addToViewModelCallbacks = function(e) {
					var t = this;
					this._children.includes(e) || (this._children.push(e), this._parents.forEach(function(e) {
						e.addToViewModelCallbacks(t);
					}));
				}, e.prototype.removeFromViewModelCallbacks = function(e) {
					var t = this;
					this._children.includes(e) && (this._children = this._children.filter(function(t) {
						return t !== e;
					}), this._children.length === 0 && this._propertiesWithCallbacks.length === 0 && this._parents.forEach(function(e) {
						e.removeFromViewModelCallbacks(t);
					}));
				}, e.prototype.clearCallbacks = function() {
					this._propertiesWithCallbacks.forEach(function(e) {
						e.clearCallbacks();
					});
				}, e.prototype.propertyFromPath = function(e, t) {
					var n = e.split("/");
					return this.propertyFromPathSegments(n, 0, t);
				}, e.prototype.viewModelFromPathSegments = function(e, t) {
					var n = this.internalViewModelInstance(e[t]);
					return n === null ? null : t == e.length - 1 ? n : n.viewModelFromPathSegments(e, t++);
				}, e.prototype.propertyFromPathSegments = function(e, t, n) {
					if (t < e.length - 1) {
						var r = this.internalViewModelInstance(e[t]);
						return r === null ? null : r.propertyFromPathSegments(e, t + 1, n);
					}
					var i = null;
					switch (n) {
						case B.Number:
							if (i = this._runtimeInstance?.number(e[t]) ?? null, i !== null) return new W(i, this);
							break;
						case B.String:
							if (i = this._runtimeInstance?.string(e[t]) ?? null, i !== null) return new U(i, this);
							break;
						case B.Boolean:
							if (i = this._runtimeInstance?.boolean(e[t]) ?? null, i !== null) return new G(i, this);
							break;
						case B.Color:
							if (i = this._runtimeInstance?.color(e[t]) ?? null, i !== null) return new q(i, this);
							break;
						case B.Trigger:
							if (i = this._runtimeInstance?.trigger(e[t]) ?? null, i !== null) return new K(i, this);
							break;
						case B.Enum:
							if (i = this._runtimeInstance?.enum(e[t]) ?? null, i !== null) return new me(i, this);
							break;
						case B.List:
							if (i = this._runtimeInstance?.list(e[t]) ?? null, i !== null) return new he(i, this);
							break;
						case B.Image:
							if (i = this._runtimeInstance?.image(e[t]) ?? null, i !== null) return new ge(i, this);
							break;
						case B.Font:
							if (i = this._runtimeInstance?.font(e[t]) ?? null, i !== null) return new _e(i, this);
							break;
						case B.Artboard: if (i = this._runtimeInstance?.artboard(e[t]) ?? null, i !== null) return new ve(i, this);
					}
					return null;
				}, e.prototype.internalViewModelInstance = function(t) {
					if (this._viewModelInstances.has(t)) return this._viewModelInstances.get(t);
					var n = this._runtimeInstance?.viewModel(t);
					if (n !== null) {
						var r = new e(n, this);
						return (0, a.createFinalization)(r, n), r.internalIncrementReferenceCount(), this._viewModelInstances.set(t, r), r;
					}
					return null;
				}, e.prototype.number = function(e) {
					return this.propertyFromPath(e, B.Number);
				}, e.prototype.string = function(e) {
					return this.propertyFromPath(e, B.String);
				}, e.prototype.boolean = function(e) {
					return this.propertyFromPath(e, B.Boolean);
				}, e.prototype.color = function(e) {
					return this.propertyFromPath(e, B.Color);
				}, e.prototype.trigger = function(e) {
					return this.propertyFromPath(e, B.Trigger);
				}, e.prototype.enum = function(e) {
					return this.propertyFromPath(e, B.Enum);
				}, e.prototype.list = function(e) {
					return this.propertyFromPath(e, B.List);
				}, e.prototype.image = function(e) {
					return this.propertyFromPath(e, B.Image);
				}, e.prototype.font = function(e) {
					return this.propertyFromPath(e, B.Font);
				}, e.prototype.artboard = function(e) {
					return this.propertyFromPath(e, B.Artboard);
				}, e.prototype.viewModel = function(e) {
					var t = e.split("/"), n = t.length > 1 ? this.viewModelFromPathSegments(t.slice(0, t.length - 1), 0) : this;
					return n == null ? null : n.internalViewModelInstance(t[t.length - 1]);
				}, e.prototype.internalReplaceViewModel = function(e, t) {
					if (t.runtimeInstance !== null) {
						var n = this._runtimeInstance?.replaceViewModel(e, t.runtimeInstance) || !1;
						if (n) {
							t.internalIncrementReferenceCount();
							var r = this.internalViewModelInstance(e);
							r !== null && (r.removeParent(this), this._children.includes(r) && (this._children = this._children.filter(function(e) {
								return e !== r;
							})), r.cleanup()), this._viewModelInstances.set(e, t), t.addParent(this);
						}
						return n;
					}
					return !1;
				}, e.prototype.replaceViewModel = function(e, t) {
					var n = e.split("/");
					return (n.length > 1 ? this.viewModelFromPathSegments(n.slice(0, n.length - 1), 0) : this)?.internalReplaceViewModel(n[n.length - 1], t) ?? !1;
				}, e.prototype.incrementReferenceCount = function() {
					var e;
					this._referenceCount++, (e = this._runtimeInstance) == null || e.incrementReferenceCount();
				}, e.prototype.decrementReferenceCount = function() {
					var e;
					this._referenceCount--, (e = this._runtimeInstance) == null || e.decrementReferenceCount();
				}, Object.defineProperty(e.prototype, "properties", {
					get: function() {
						return this._runtimeInstance?.getProperties().map(function(e) {
							return s({}, e);
						}) || [];
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "viewModelName", {
					get: function() {
						return this._runtimeInstance?.getViewModelName() ?? "";
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.internalIncrementReferenceCount = function() {
					this._referenceCount++;
				}, e.prototype.cleanup = function() {
					var e = this, t;
					if (this._referenceCount--, this._referenceCount <= 0) {
						this.selfUnref && ((t = this._runtimeInstance) == null || t.unref()), this._runtimeInstance = null, this.clearCallbacks(), this._propertiesWithCallbacks = [], this._viewModelInstances.forEach(function(e) {
							e.cleanup();
						}), this._viewModelInstances.clear();
						var n = u([], this._children, !0);
						this._children.length = 0;
						var r = u([], this._parents, !0);
						this._parents.length = 0, n.forEach(function(t) {
							t.removeParent(e);
						}), r.forEach(function(t) {
							t.removeFromViewModelCallbacks(e);
						});
					}
				}, e;
			}(), H = function() {
				function e(e, t) {
					this.callbacks = [], this._viewModelInstanceValue = e, this._parentViewModel = t;
				}
				return e.prototype.on = function(e) {
					this.callbacks.length === 0 && this._viewModelInstanceValue.clearChanges(), this.callbacks.includes(e) || (this.callbacks.push(e), this._parentViewModel.addToPropertyCallbacks(this));
				}, e.prototype.off = function(e) {
					e ? this.callbacks = this.callbacks.filter(function(t) {
						return t !== e;
					}) : this.callbacks.length = 0, this.callbacks.length === 0 && this._parentViewModel.removeFromPropertyCallbacks(this);
				}, e.prototype.internalHandleCallback = function(e) {}, e.prototype.handleCallbacks = function() {
					var e = this;
					this._viewModelInstanceValue.hasChanged && this.callbacks.forEach(function(t) {
						e.internalHandleCallback(t);
					});
				}, e.prototype.clearChanges = function() {
					this._viewModelInstanceValue.clearChanges();
				}, e.prototype.clearCallbacks = function() {
					this.callbacks.length = 0;
				}, Object.defineProperty(e.prototype, "name", {
					get: function() {
						return this._viewModelInstanceValue.name;
					},
					enumerable: !1,
					configurable: !0
				}), e;
			}(), U = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "value", {
					get: function() {
						return this._viewModelInstanceValue.value;
					},
					set: function(e) {
						this._viewModelInstanceValue.value = e;
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.internalHandleCallback = function(e) {
					e(this.value);
				}, t;
			}(H), W = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "value", {
					get: function() {
						return this._viewModelInstanceValue.value;
					},
					set: function(e) {
						this._viewModelInstanceValue.value = e;
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.internalHandleCallback = function(e) {
					e(this.value);
				}, t;
			}(H), G = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "value", {
					get: function() {
						return this._viewModelInstanceValue.value;
					},
					set: function(e) {
						this._viewModelInstanceValue.value = e;
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.internalHandleCallback = function(e) {
					e(this.value);
				}, t;
			}(H), K = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return t.prototype.trigger = function() {
					return this._viewModelInstanceValue.trigger();
				}, t.prototype.internalHandleCallback = function(e) {
					e();
				}, t;
			}(H), me = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "value", {
					get: function() {
						return this._viewModelInstanceValue.value;
					},
					set: function(e) {
						this._viewModelInstanceValue.value = e;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "valueIndex", {
					get: function() {
						return this._viewModelInstanceValue.valueIndex;
					},
					set: function(e) {
						this._viewModelInstanceValue.valueIndex = e;
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "values", {
					get: function() {
						return this._viewModelInstanceValue.values;
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.internalHandleCallback = function(e) {
					e(this.value);
				}, t;
			}(H), he = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "length", {
					get: function() {
						return this._viewModelInstanceValue.size;
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.addInstance = function(e) {
					e.runtimeInstance != null && (this._viewModelInstanceValue.addInstance(e.runtimeInstance), e.addParent(this._parentViewModel));
				}, t.prototype.addInstanceAt = function(e, t) {
					return e.runtimeInstance != null && this._viewModelInstanceValue.addInstanceAt(e.runtimeInstance, t) ? (e.addParent(this._parentViewModel), !0) : !1;
				}, t.prototype.removeInstance = function(e) {
					e.runtimeInstance != null && (this._viewModelInstanceValue.removeInstance(e.runtimeInstance), e.removeParent(this._parentViewModel));
				}, t.prototype.removeInstanceAt = function(e) {
					this._viewModelInstanceValue.removeInstanceAt(e);
				}, t.prototype.instanceAt = function(e) {
					var t = this._viewModelInstanceValue.instanceAt(e);
					if (t != null) {
						var n = new V(t, this._parentViewModel);
						return (0, a.createFinalization)(n, t), n;
					}
					return null;
				}, t.prototype.swap = function(e, t) {
					this._viewModelInstanceValue.swap(e, t);
				}, t.prototype.internalHandleCallback = function(e) {
					e();
				}, t;
			}(H), q = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "value", {
					get: function() {
						return this._viewModelInstanceValue.value;
					},
					set: function(e) {
						this._viewModelInstanceValue.value = e;
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.rgb = function(e, t, n) {
					this._viewModelInstanceValue.rgb(e, t, n);
				}, t.prototype.rgba = function(e, t, n, r) {
					this._viewModelInstanceValue.argb(r, e, t, n);
				}, t.prototype.argb = function(e, t, n, r) {
					this._viewModelInstanceValue.argb(e, t, n, r);
				}, t.prototype.alpha = function(e) {
					this._viewModelInstanceValue.alpha(e);
				}, t.prototype.opacity = function(e) {
					this._viewModelInstanceValue.alpha(Math.round(Math.max(0, Math.min(1, e)) * 255));
				}, t.prototype.internalHandleCallback = function(e) {
					e(this.value);
				}, t;
			}(H), ge = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "value", {
					set: function(e) {
						this._viewModelInstanceValue.value(e?.nativeImage ?? null);
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.internalHandleCallback = function(e) {
					e();
				}, t;
			}(H), _e = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "value", {
					set: function(e) {
						this._viewModelInstanceValue.value(e?.nativeFont ?? null);
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.internalHandleCallback = function(e) {
					e();
				}, t;
			}(H), ve = function(e) {
				o(t, e);
				function t(t, n) {
					return e.call(this, t, n) || this;
				}
				return Object.defineProperty(t.prototype, "value", {
					set: function(e) {
						var t = e.isBindableArtboard ? e : e.file.internalBindableArtboardFromArtboard(e.nativeArtboard);
						this._viewModelInstanceValue.value(t?.nativeArtboard ?? null), t?.nativeViewModel && this._viewModelInstanceValue.viewModelInstance(t?.nativeViewModel ?? null);
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.internalHandleCallback = function(e) {
					e();
				}, t;
			}(H), ye = function(e) {
				return c(void 0, void 0, void 0, function() {
					var t, n, r;
					return l(this, function(i) {
						switch (i.label) {
							case 0: return t = new Request(e), [4, fetch(t)];
							case 1:
								if (n = i.sent(), !n.ok) throw Error(`Failed to fetch the Rive file: HTTP ${n.status}`);
								return [4, n.arrayBuffer()];
							case 2: return r = i.sent(), [2, r];
						}
					});
				});
			}, J = function(e) {
				return typeof e == "string" ? [e] : e instanceof Array ? e : [];
			}, be = {
				EventManager: L,
				TaskQueueManager: re
			}, Y = function(e) {
				return c(void 0, void 0, void 0, function() {
					var n, r, i;
					return l(this, function(o) {
						switch (o.label) {
							case 0: return n = new Promise(function(n) {
								return t.RuntimeLoader.getInstance(function(t) {
									t.decodeAudio(e, n, null);
								});
							}), [4, n];
							case 1: return r = o.sent(), i = new a.AudioWrapper(r), a.finalizationRegistry.register(i, r), [2, i];
						}
					});
				});
			}, xe = function(e) {
				return c(void 0, void 0, void 0, function() {
					var n, r, i;
					return l(this, function(o) {
						switch (o.label) {
							case 0: return n = new Promise(function(n) {
								return t.RuntimeLoader.getInstance(function(t) {
									t.decodeImage(e, n, null);
								});
							}), [4, n];
							case 1: return r = o.sent(), i = new a.ImageWrapper(r), a.finalizationRegistry.register(i, r), [2, i];
						}
					});
				});
			}, X = function(e) {
				return c(void 0, void 0, void 0, function() {
					var n, r, i;
					return l(this, function(o) {
						switch (o.label) {
							case 0: return n = new Promise(function(n) {
								return t.RuntimeLoader.getInstance(function(t) {
									t.decodeFont(e, n, null);
								});
							}), [4, n];
							case 1: return r = o.sent(), i = new a.FontWrapper(r), a.finalizationRegistry.register(i, r), [2, i];
						}
					});
				});
			};
		})(), r;
	})());
}));
Z(), Ve();
var Ue = He(), We = "2.49.4", Ge = import.meta.url, Ke = (e) => new URL(`${e}?v=${We}`, Ge).href;
Ue.RuntimeLoader.setWasmUrl(Ke("rive.wasm")), Ue.RuntimeLoader.setWasmFallbackUrl(Ke("rive_fallback.wasm"));
// \0@oxc-project+runtime@0.156.0/helpers/esm/decorate.js
function qe(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
var Je = t((() => {}));
// src/cards/base-rive-card.ts
Je();
var Ye = class extends X {
	constructor(...e) {
		super(...e), this.riveReady = !1;
	}
	setConfig(e) {
		if (!e || typeof e != "object") throw Error("Invalid configuration");
		if (!e.src || typeof e.src != "string") throw Error("You must set 'src' to the URL of a .riv file");
		this.validateConfig(e), this.config = { ...e };
	}
	getCardSize() {
		return 3;
	}
	getGridOptions() {
		return {
			columns: 6,
			rows: 3,
			min_rows: 2
		};
	}
	renderOverlay() {
		return H;
	}
	handleTap() {}
	findInput(e) {
		let t = this.config?.state_machine;
		if (this.rive && t) return this.rive.stateMachineInputs(t)?.find((t) => t.name === e);
	}
	setBooleanInput(e, t) {
		let n = this.findInput(e);
		n?.type === Ue.StateMachineInputType.Boolean && n.value !== t && (n.value = t);
	}
	setNumberInput(e, t) {
		let n = this.findInput(e);
		n?.type === Ue.StateMachineInputType.Number && n.value !== t && (n.value = t);
	}
	fireTrigger(e) {
		let t = this.findInput(e);
		t?.type === Ue.StateMachineInputType.Trigger && t.fire();
	}
	connectedCallback() {
		super.connectedCallback(), this.hasUpdated && !this.rive && this.createRive();
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.destroyRive();
	}
	shouldUpdate(e) {
		return e.size === 1 && e.has("hass") ? (this.pushHassIfChanged(e.get("hass")), !1) : !0;
	}
	updated(e) {
		if (e.has("config")) {
			let t = e.get("config");
			!t || this.riveConfigChanged(t, this.config) ? this.createRive() : this.pushHass();
		} else e.has("hass") && this.pushHassIfChanged(e.get("hass"));
	}
	render() {
		if (!this.config) return B``;
		let e = this.config.height ?? "200px";
		return B`
      <ha-card>
        <div class="stage" style="height: ${e}">
          <canvas @click=${() => this.handleTap()}></canvas>
          ${this.renderOverlay()}
        </div>
        ${this.loadError ? B`<div class="error">${this.loadError}</div>` : H}
      </ha-card>
    `;
	}
	riveConfigChanged(e, t) {
		return e.src !== t.src || e.artboard !== t.artboard || e.state_machine !== t.state_machine || e.fit !== t.fit;
	}
	createRive() {
		this.destroyRive();
		let e = this.canvas, t = this.config;
		if (!e || !t || !this.isConnected) return;
		this.loadError = void 0;
		let n = new Ue.Rive({
			canvas: e,
			src: t.src,
			artboard: t.artboard,
			stateMachine: t.state_machine,
			autoplay: !0,
			layout: new Ue.Layout({
				fit: t.fit ?? Ue.Fit.Contain,
				alignment: Ue.Alignment.Center
			}),
			onLoad: () => {
				this.rive === n && (this.riveReady = !0, n.resizeDrawingSurfaceToCanvas(), this.pushHass());
			},
			onLoadError: () => {
				this.rive === n && (this.loadError = `Could not load ${t.src}`);
			}
		});
		this.rive = n, this.resizeObserver = new ResizeObserver(() => {
			this.riveReady && this.rive?.resizeDrawingSurfaceToCanvas();
		}), this.resizeObserver.observe(e);
	}
	destroyRive() {
		this.resizeObserver?.disconnect(), this.resizeObserver = void 0, this.riveReady = !1, this.rive &&= (this.rive.cleanup(), void 0);
	}
	pushHass() {
		this.hass && this.rive && this.riveReady && this.syncToRive(this.hass, this.rive);
	}
	pushHassIfChanged(e) {
		this.hass && (!e || this.watchedEntities().some((t) => e.states[t] !== this.hass.states[t])) && this.pushHass();
	}
	static {
		this.styles = u`
    :host {
      display: block;
    }
    ha-card {
      overflow: hidden;
      height: 100%;
    }
    .stage {
      position: relative;
      width: 100%;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .error {
      padding: 8px 16px;
      color: var(--error-color, #db4437);
    }
  `;
	}
};
qe([Ee({ attribute: !1 })], Ye.prototype, "hass", void 0), qe([Ae()], Ye.prototype, "config", void 0), qe([Ae()], Ye.prototype, "loadError", void 0), qe([Fe("canvas")], Ye.prototype, "canvas", void 0);
// src/editors/rive-entity-card-editor.ts
var Xe = /* @__PURE__ */ r({ RiveEntityCardEditor: () => $e }), Ze, Qe, $e, et = t((() => {
	Z(), Ve(), Je(), Ze = [
		{
			name: "entity",
			required: !0,
			selector: { entity: {} }
		},
		{
			name: "src",
			required: !0,
			selector: { text: {} }
		},
		{
			type: "grid",
			name: "",
			schema: [{
				name: "artboard",
				selector: { text: {} }
			}, {
				name: "state_machine",
				selector: { text: {} }
			}]
		},
		{
			type: "grid",
			name: "",
			schema: [{
				name: "fit",
				selector: { select: {
					mode: "dropdown",
					options: [
						"contain",
						"cover",
						"fill",
						"fitWidth",
						"fitHeight",
						"scaleDown",
						"none"
					]
				} }
			}, {
				name: "height",
				selector: { text: {} }
			}]
		},
		{
			name: "tap_action",
			selector: { select: {
				mode: "dropdown",
				options: ["toggle", "none"]
			} }
		},
		{
			name: "bindings",
			selector: { object: {} }
		}
	], Qe = {
		entity: "Entity",
		src: "Rive file URL (e.g. /local/rives/light.riv)",
		artboard: "Artboard (optional)",
		state_machine: "State machine",
		fit: "Fit",
		height: "Height (e.g. 200px)",
		tap_action: "Tap action",
		bindings: "Input bindings (list of { input, type, attribute? })"
	}, $e = class extends X {
		setConfig(e) {
			this.config = e;
		}
		render() {
			return !this.hass || !this.config ? H : B`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${Ze}
        .computeLabel=${(e) => Qe[e.name] ?? e.name}
        @value-changed=${this.onValueChanged}
      ></ha-form>
    `;
		}
		onValueChanged(e) {
			e.stopPropagation(), this.config = e.detail.value, this.dispatchEvent(new CustomEvent("config-changed", {
				detail: { config: this.config },
				bubbles: !0,
				composed: !0
			}));
		}
	}, qe([Ee({ attribute: !1 })], $e.prototype, "hass", void 0), qe([Ae()], $e.prototype, "config", void 0), customElements.get("rive-entity-card-editor") || customElements.define("rive-entity-card-editor", $e);
})), tt = /* @__PURE__ */ new Set([
	"on",
	"open",
	"opening",
	"home",
	"playing",
	"unlocked",
	"active"
]), nt = "rive-entity-card", rt = class extends Ye {
	static async getConfigElement() {
		return await Promise.resolve().then(() => (et(), Xe)), document.createElement("rive-entity-card-editor");
	}
	static getStubConfig(e) {
		return {
			entity: Object.keys(e.states).find((e) => /^(light|switch|fan)\./.test(e)) ?? "",
			src: "/local/rives/example.riv",
			state_machine: "State Machine 1",
			bindings: [{
				input: "is_on",
				type: "boolean"
			}]
		};
	}
	validateConfig(e) {
		if (!e.entity) throw Error("You must set 'entity'");
		for (let t of e.bindings ?? []) {
			if (!t.input) throw Error("Every binding needs an 'input' name");
			if (![
				"boolean",
				"number",
				"trigger"
			].includes(t.type)) throw Error(`Binding '${t.input}': type must be boolean, number or trigger`);
		}
	}
	watchedEntities() {
		return this.config ? [this.config.entity] : [];
	}
	syncToRive(e, t) {
		let n = e.states[this.config.entity];
		if (!n) return;
		let r = this.lastState !== void 0 && this.lastState !== n.state;
		this.lastState = n.state;
		for (let e of this.config.bindings ?? []) switch (e.type) {
			case "boolean":
				this.setBooleanInput(e.input, tt.has(n.state));
				break;
			case "number": {
				let t = it(n, e.attribute);
				t !== void 0 && this.setNumberInput(e.input, t);
				break;
			}
			case "trigger": r && this.fireTrigger(e.input);
		}
	}
	handleTap() {
		this.hass && this.config && this.config.tap_action !== "none" && this.hass.callService("homeassistant", "toggle", { entity_id: this.config.entity });
	}
};
function it(e, t) {
	let n = t ? e.attributes[t] : e.state, r = typeof n == "number" ? n : Number.parseFloat(String(n));
	return Number.isFinite(r) ? r : void 0;
}
// src/index.ts
var at = "1.0.0", ot = [{
	tag: nt,
	element: rt,
	name: "Rive Entity Card",
	description: "Animate an entity with a Rive state machine.",
	preview: !1
}];
window.customCards = window.customCards ?? [];
for (let { tag: e, element: t, ...n } of ot) customElements.get(e) || customElements.define(e, t), window.customCards.some((t) => t.type === e) || window.customCards.push({
	type: e,
	...n
});
console.info(`%c HA-RIVE-CARDS %c v${at} `, "color:#fff;background:#1d1d1d", "color:#1d1d1d;background:#fff");

//# sourceMappingURL=ha-rive-cards.js.map