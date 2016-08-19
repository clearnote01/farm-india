var packages = {};
// put the names of any of your Material components here
var materialPkgs = [
    'core',
    'button',
    'card',
];
materialPkgs.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
});
//# sourceMappingURL=conver.js.map