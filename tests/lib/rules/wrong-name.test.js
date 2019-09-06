const rule = require("../../../lib/rules/wrong-name");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("wrong-name", rule, {
  valid: [
    {
      code: "var response = true",
      options: [{ patterns: [/[Dd]ata/] }]
    }
  ],

  invalid: [
    {
      code: "var personData = true",
      errors: [
        {
          message:
            "'personData' seems to be not the best name (pattern: /[Dd]ata/)"
        }
      ],
      options: [{ patterns: [/[Dd]ata/] }]
    },
    {
      code: "function getData() {}",
      errors: [
        {
          message:
            "'getData' seems to be not the best name (pattern: /[Dd]ata/)"
        }
      ],
      options: [{ patterns: [/[Dd]ata/] }]
    },
    {
      code: "var response = { data: 1 }",
      options: [{ patterns: [/[Dd]ata/] }],
      errors: [
        {
          message: "'data' seems to be not the best name (pattern: /[Dd]ata/)"
        }
      ]
    },
    {
      code: "function getResponse(data) { return data }",
      options: [{ patterns: [/[Dd]ata/] }],
      errors: [
        {
          message: "'data' seems to be not the best name (pattern: /[Dd]ata/)"
        }
      ]
    }
  ]
});
