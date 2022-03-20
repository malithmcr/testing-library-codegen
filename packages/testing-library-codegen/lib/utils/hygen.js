import Logger, { runner } from 'hygen';
function hygen({ generator, filename, path = '' }) {
  return runner(['create', generator, '--name', filename, '--path', path], {
    templates: '../templates',
    cwd: process.cwd(),
    //@ts-ignore
    logger: new Logger(console.log.bind(console)),
    createPrompter: () => require('enquirer'),
    exec: (action, body) => {
      const opts = body && body.length > 0 ? { input: body } : {};
      const actions = action.split('&&');
      for (const action of actions) {
        require('execa').command(action, opts);
      }
      return;
    },
    debug: !!process.env.DEBUG,
  });
}
export default hygen;
