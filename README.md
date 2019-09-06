# wrong-names-eslint-plugin

disallows using of names that match the pattern

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `wrong-names-eslint-plugin`:

```
$ npm install wrong-names-eslint-plugin --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `wrong-names-eslint-plugin` globally.

## Usage

Add `wrong-names-eslint-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["wrong-names-eslint-plugin"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "wrong-names-eslint-plugin/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
