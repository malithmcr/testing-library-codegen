import path from 'path';

import Logger, { runner } from 'hygen';

type Hygen = {
  generator: string;
  filename: string;
  path?: string;
};

function hygen({ generator, filename, path = '' }: Hygen) {
  return runner(['create', generator, '--name', filename, '--path', path], {
    templates: '../templates',
    cwd: process.cwd(),
    //@ts-ignore
    createPrompter: () => require('enquirer'),
    exec: (action: string, body: string) => {
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
