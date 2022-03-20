declare type Hygen = {
  generator: string;
  filename: string;
  path?: string;
};
declare function hygen({
  generator,
  filename,
  path,
}: Hygen): Promise<import('hygen/dist/types').RunnerResult>;
export default hygen;
//# sourceMappingURL=hygen.d.ts.map
