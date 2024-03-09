(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{431:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"security-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security considerations")]),e._v(" "),t("p",[e._v("JSON Schema, if properly used, can replace data sanitisation. It doesn't replace other API security considerations. It also introduces additional security aspects to consider.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#security-contact"}},[e._v("Security contact")])]),t("li",[t("a",{attrs:{href:"#untrusted-schemas"}},[e._v("Untrusted schemas")])]),t("li",[t("a",{attrs:{href:"#circular-references-in-javascript-objects"}},[e._v("Circular references in JavaScript objects")])]),t("li",[t("a",{attrs:{href:"#security-risks-of-trusted-schemas"}},[e._v("Security risks of trusted schemas")])]),t("li",[t("a",{attrs:{href:"#redos-attack"}},[e._v("ReDoS attack")])]),t("li",[t("a",{attrs:{href:"#content-security-policy"}},[e._v("Content Security Policy")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"security-contact"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-contact"}},[e._v("#")]),e._v(" Security contact")]),e._v(" "),t("p",[e._v("To report a security vulnerability, please use the\n"),t("a",{attrs:{href:"https://tidelift.com/security",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tidelift security contact"),t("OutboundLink")],1),e._v(".\nTidelift will coordinate the fix and disclosure. Please do NOT report security vulnerabilities via GitHub issues.")]),e._v(" "),t("h2",{attrs:{id:"untrusted-schemas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#untrusted-schemas"}},[e._v("#")]),e._v(" Untrusted schemas")]),e._v(" "),t("p",[e._v("Ajv treats JSON schemas as trusted as your application code. This security model is based on the most common use case, when the schemas are static and bundled together with the application.")]),e._v(" "),t("p",[e._v("If your schemas are received from untrusted sources (or generated from untrusted data) there are several scenarios you need to prevent:")]),e._v(" "),t("ul",[t("li",[e._v("compiling schemas can cause stack overflow (if they are too deep)")]),e._v(" "),t("li",[e._v("compiling schemas can be slow (e.g. "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/557",target:"_blank",rel:"noopener noreferrer"}},[e._v("#557"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("validating certain data can be slow")])]),e._v(" "),t("p",[e._v("It is difficult to predict all the scenarios, but at the very least it may help to limit the size of untrusted schemas (e.g. limit JSON string length) and also the maximum schema object depth (that can be high for relatively small JSON strings). You also may want to mitigate slow regular expressions in "),t("code",[e._v("pattern")]),e._v(" and "),t("code",[e._v("patternProperties")]),e._v(" keywords.")]),e._v(" "),t("p",[e._v("Regardless the measures you take, using untrusted schemas increases security risks.")]),e._v(" "),t("h2",{attrs:{id:"circular-references-in-javascript-objects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circular-references-in-javascript-objects"}},[e._v("#")]),e._v(" Circular references in JavaScript objects")]),e._v(" "),t("p",[e._v("Ajv does not support schemas and validated data that have circular references in objects. See "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/802",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #802"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("An attempt to compile such schemas or validate such data would cause stack overflow (or will not complete in case of asynchronous validation). Depending on the parser you use, untrusted data can lead to circular references.")]),e._v(" "),t("h2",{attrs:{id:"security-risks-of-trusted-schemas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-risks-of-trusted-schemas"}},[e._v("#")]),e._v(" Security risks of trusted schemas")]),e._v(" "),t("p",[e._v("Some keywords in JSON Schemas can lead to very slow validation for certain data. These keywords include (but may be not limited to):")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pattern")]),e._v(" and "),t("code",[e._v("format")]),e._v(" for large strings - in some cases using "),t("code",[e._v("maxLength")]),e._v(" can help mitigate it, but certain regular expressions can lead to exponential validation time even with relatively short strings (see "),t("a",{attrs:{href:"#redos-attack"}},[e._v("ReDoS attack")]),e._v(").")]),e._v(" "),t("li",[t("code",[e._v("patternProperties")]),e._v(" for large property names - use "),t("code",[e._v("propertyNames")]),e._v(" to mitigate, but some regular expressions can have exponential evaluation time as well.")]),e._v(" "),t("li",[t("code",[e._v("uniqueItems")]),e._v(" for large non-scalar arrays - use "),t("code",[e._v("maxItems")]),e._v(" to mitigate")])]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Do NOT use allErrors in production")]),e._v(" "),t("p",[e._v("The suggestions above to prevent slow validation would only work if you do NOT use "),t("code",[e._v("allErrors: true")]),e._v(" in production code (using it would continue validation after validation errors).")])]),e._v(" "),t("p",[e._v("You can validate your JSON schemas against "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/lib/refs/json-schema-secure.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("this meta-schema"),t("OutboundLink")],1),e._v(" to check that these recommendations are followed:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("ajv "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Ajv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("strictTypes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// this option is required for this schema")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" isSchemaSecure "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ajv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("compile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ajv/lib/refs/json-schema-secure.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" schema1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("format")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"email"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("isSchemaSecure")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("schema1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// false")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" schema2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("format")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"email"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("maxLength")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MAX_LENGTH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("isSchemaSecure")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("schema2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// true")]),e._v("\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Untrusted data")]),e._v(" "),t("p",[e._v("Following all these recommendation is not a guarantee that validation using of untrusted data is safe - it can still lead to some undesirable results.")])]),e._v(" "),t("h2",{attrs:{id:"redos-attack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redos-attack"}},[e._v("#")]),e._v(" ReDoS attack")]),e._v(" "),t("p",[e._v("Certain regular expressions can lead to the exponential evaluation time even with relatively short strings.")]),e._v(" "),t("p",[e._v("Please assess the regular expressions you use in the schemas on their vulnerability to this attack - see "),t("a",{attrs:{href:"https://github.com/substack/safe-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("safe-regex"),t("OutboundLink")],1),e._v(", for example.")]),e._v(" "),t("p",[e._v("By default, Ajv uses the regex engine built into Node.js. This engine has exponential worst-case performance. This performance (and ReDoS attacks) can be mitigated by using a linear-time regex engine. Ajv supports the use of a third-party regex engine for this purpose.")]),e._v(" "),t("p",[e._v("To use a third-party regex engine in Ajv, set the ajv.opts.code.regExp property to that regex engine during instantiation. Here we use Google’s RE2 engine as an example.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const Ajv = require("ajv") \nconst RE2 = require("re2") \nconst ajv = new Ajv({code: {regExp: RE2}}) \n')])])]),t("p",[e._v("For details about the interface of the "),t("code",[e._v("regexp")]),e._v(" option, see options.md under the docs folder.")]),e._v(" "),t("p",[e._v("Although linear-time regex engines eliminate ReDoS vulnerabilities, changing a regex engine carries some risk, including:")]),e._v(" "),t("ul",[t("li",[e._v("Minor changes in regex syntax.")]),e._v(" "),t("li",[e._v("Minor changes in regex semantics. For example, RE2 always interprets regexes in Unicode, and disagrees with JavaScript in its definition of whitespace. To avoid regressions, develop and test your regexes in the same regex engine that you use in production.")]),e._v(" "),t("li",[e._v("May not support some advanced features, such as look-aheads or back-references.")]),e._v(" "),t("li",[e._v("May have (minor) common-case performance degradation.")]),e._v(" "),t("li",[e._v("Increases size of distributable (e.g. RE2 includes a non-trivial C component).")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("ReDoS attack")]),e._v(" "),t("p",[e._v("Some formats that "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[e._v("ajv-formats"),t("OutboundLink")],1),e._v(" package implements use "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats/blob/master/src/formats.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("regular expressions"),t("OutboundLink")],1),e._v(" that can be vulnerable to ReDoS attack.")])]),e._v(" "),t("p",[e._v("If you use Ajv to validate data from untrusted sources "),t("strong",[e._v("it is strongly recommended")]),e._v(" to consider the following:")]),e._v(" "),t("ul",[t("li",[e._v('making assessment of "format" implementations in '),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[e._v("ajv-formats"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("passing "),t("code",[e._v('"fast"')]),e._v(" option to ajv-formats plugin (see its docs) that simplifies some of the regular expressions (although it does not guarantee that they are safe).")]),e._v(" "),t("li",[e._v('replacing format implementations provided by ajv-formats with your own implementations of "format" keyword that either use different regular expressions or another approach to format validation. Please see '),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/docs/api.md#api-addformat",target:"_blank",rel:"noopener noreferrer"}},[e._v("addFormat"),t("OutboundLink")],1),e._v(" method.")]),e._v(" "),t("li",[e._v('disabling format validation by ignoring "format" keyword with option '),t("code",[e._v("format: false")])])]),e._v(" "),t("p",[e._v("Whatever mitigation you choose, please assume all formats provided by ajv-formats as potentially unsafe and make your own assessment of their suitability for your validation scenarios.")]),e._v(" "),t("h2",{attrs:{id:"content-security-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy"}},[e._v("#")]),e._v(" Content Security Policy")]),e._v(" "),t("p",[e._v("When using Ajv in a browser page with enabled Content Security Policy (CSP), "),t("code",[e._v("script-src")]),e._v(" directive must include "),t("code",[e._v("'unsafe-eval'")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Cross-site scripting attacks")]),e._v(" "),t("p",[t("code",[e._v("unsafe-eval")]),e._v(" is NOT recommended in a secure CSP"),t("a",{attrs:{href:"https://developer.chrome.com/extensions/contentSecurityPolicy#relaxing-eval",target:"_blank",rel:"noopener noreferrer"}},[e._v("[1]"),t("OutboundLink")],1),e._v(", as it has the potential to open the document to cross-site scripting (XSS) attacks.")])]),e._v(" "),t("p",[e._v("In order to use Ajv without relaxing CSP, you can "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv-cli#compile-schemas",target:"_blank",rel:"noopener noreferrer"}},[e._v("compile the schemas using CLI"),t("OutboundLink")],1),e._v(" or programmatically in your build code - see "),t("RouterLink",{attrs:{to:"/standalone.html"}},[e._v("Standalone validation code")]),e._v(". Compiled JavaScript file can export one or several validation functions that have the same code as the schemas compiled at runtime.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);