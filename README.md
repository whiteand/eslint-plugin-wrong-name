# eslint-plugin-wrong-name

Any name that match the pattern will be treated as an error.

For example:

```javascript
const patterns = ["[Dd]ata", "[Ii]tem"]
patterns.map(item => item.toLowerCase()) // item not the best name
```

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-wrong-name`:

```
$ npm install eslint-plugin-wrong-name --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-wrong-name` globally.

## Usage

Add `eslint-plugin-wrong-name` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["wrong-name"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "wrong-name/wrong-name": [2, {
      "patterns": [
        "[Dd]ata",
        "[Ii]tem",
        "[Vv]alue"
      ]
    }]
  }
}
```

## Supported Rules

- Fill in provided rules here
