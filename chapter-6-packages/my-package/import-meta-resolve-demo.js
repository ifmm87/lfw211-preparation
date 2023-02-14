import { resolve } from 'import-meta-resolve';

console.log(
  `import 'pino'`,
  '=>',
  await resolve('pino', import.meta.url)
)

console.log(
  `import 'tap' ${import.meta.url}`,
  '=>',
  await resolve('tap', import.meta.url)
)

