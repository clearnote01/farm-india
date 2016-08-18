const packages:any = {};

// put the names of any of your Material components here
const materialPkgs:string[] = [
  'core',
  'button',
  'card',
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});
