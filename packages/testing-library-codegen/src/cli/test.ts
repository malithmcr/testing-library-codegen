import hygen from '../utils/hygen.js';
//@ts-ignore
const splitPath = filename => {
  let path = '';

  if (filename.includes('/')) {
    const parts = filename.split('/');
    filename = parts.pop();
    path = parts.join('/') + '/';
  }

  return {
    path,
    filename,
  };
};

const test = (name: string) => {
  const { path, filename } = splitPath(name);

  hygen({
    generator: 'test',
    filename: filename,
    path: path,
  });
};

export default test;
