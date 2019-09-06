function handleError(context, id, pattern) {
  const message = `'${
    id.name
  }' seems to be not the best name (pattern: ${pattern.toString()})`;
  context.report({
    node: id,
    message
  });
}

function handleName(context, node) {
  if (!node) return;
  const name = node.name;
  const patterns = context.options[0].patterns;
  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = new RegExp(patterns[i]);
    if (pattern.test(name)) {
      handleError(context, node, pattern);
      return;
    }
  }
}

function handleFunction(context, func) {
  handleName(context, func.id);
  const params = func.params || [];
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    handleName(context, param);
  }
}

module.exports = {
  create: function(context) {
    return {
      VariableDeclarator: declarator => {
        handleName(context, declarator.id);
      },
      FunctionDeclaration: func => {
        handleFunction(context, func);
      },
      Property: prop => {
        handleName(context, prop.key);
      },
      FunctionExpression: func => {
        handleFunction(context, func);
      }
    };
  }
};
