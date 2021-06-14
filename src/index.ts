// export public api from here
// for example:
// export * from './decorators';
export * from './test';

// import * as auth from './auth'; // import as a name
// export { auth }; // export the name

export * as auth from './auth';
export * from './auth';

//https://davidwells.io/blog/publishing-flat-npm-packages-for-easier-import-paths-smaller-consumer-bundle-sizes
//https://stackoverflow.com/questions/44345257/import-from-subfolder-of-npm-package
//https://github.com/ffflorian/publish-flat/blob/HEAD/src/cli.ts