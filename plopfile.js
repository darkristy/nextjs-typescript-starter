// plop.setGenerator('example-generatoe', {
//     description: 'this is an example',
//     prompts: [], // array of inquirer prompts
//     actions: [], // array of actions
//   });

const config = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'templates/Index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/style.js',
        templateFile: 'templates/Style.js.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Create a Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your Hook name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/use{{pascalCase name}}.js',
        templateFile: 'templates/Hook.js.hbs',
      },
    ],
  });
};

module.exports = config;
