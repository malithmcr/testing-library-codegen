import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { runner, Logger } from 'hygen';
const defaultTemplates = path.join(__dirname, '../templates');

type Hygen = {
  generator: string;
  filename: string;
  path?: string;
};

function hygen({ generator, filename, path = '' }: Hygen) {
  return runner(['create', generator, '--name', filename, '--path', path], {
    templates: defaultTemplates,
    cwd: process.cwd(),
    //@ts-ignore
    logger: new Logger(console.log.bind(console)),

    exec: (action: string, body: string) => {
      const opts = body && body.length > 0 ? { input: body } : {};
      const actions = action.split('&&');

      for (const action of actions) {
        //@ts-ignore
        import('execa').command(action, opts);
      }
      return;
    },
    debug: !!process.env.DEBUG,
  });
}

export default hygen;
