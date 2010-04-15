jsUtils
===========
A small library of automated rake tasks that help my everyday working.

Settings:
=========
- $path = 'src' # Relative path to your javascript files
- $target = 'min' # Relative path to save minified file in 
- $tmp = 'tmp' # Relative path to save console stripped js files
- $name = 'jsUtils.min.js' # Name of your packed file
- $git = '~/Projects/jsUtils' # Absolute Git path if your using rake commit

rake pack
---------
- runs jslint on all files
- strips console commands from files
- and packs it to a minified file
- cleans up temporary files

rake lint
---------
- runs jslint on all files

rake strip
---------
- strips console commands from files


rake git m="commit message"
---------
- runs rake pack
- adds changes in git folder
- commits the changes with message
- pushes origin to master
