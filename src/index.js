
var program = require('commander')

program
    .version(require('../package.json').version)
    .usage('<command> [options]');
    


program
.command('setup')
.description('run remote setup commands')
.action(function() {
  console.log('setup');
});

program
   .command('exec <cmd>')
   .description('run the given remote command')
   .action(function(cmd) {
     console.log('exec "%s"', cmd);
   });

program
   .command('teardown <dir> [otherDirs...]')
   .description('run teardown commands')
   .action(function(dir, otherDirs) {
     console.log('dir "%s"', dir);
     if (otherDirs) {
       otherDirs.forEach(function (oDir) {
         console.log('dir "%s"', oDir);
       });
     }
   });

 program
   .command('*')
   .description('deploy the given env')
   .action(function(env) {
     console.log('deploying "%s"', env);
   });

program.parse(process.argv)




