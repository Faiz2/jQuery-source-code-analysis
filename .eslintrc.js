// https://eslint.org/docs/user-guide/configuring
module.exports = {
	// specifying root
	"root": true,
	// specifying Parser Options
	"parserOptions": {
		// set EcmaScript Version
		"ecmaVersion": 6,
		"sourceType": "module",
	},
	// specifying enviroments
	"env": {
		// browser global variables
		"browser": true,
		// Node.js global variables and Node.js scoping
		"node": true
	},
	// configuring plugins
	"plugins": [],
	// configuring rules
	"rules": {
		// set "quotes" style is "double" or "single"
		"quotes": ["error", "double"],
		// set "semi"
		"semi": [2, "always"]
	}
}