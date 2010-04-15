require 'conf.rb'
desc 'Pack all js into one file'
task :pack => [:lint, :strip] do
# Removing compiled javascripts
  puts 'PACK'
  puts '################################################'
  if !File.exist?($target) then
        mkdir_p($target)
  end 
  if File.exist?($target+'/'+$name) then
    rm_rf($target+'/'+$name)
  end
  js = []
  Dir['tmp/*'].each do |f|
    js.push `java -jar lib/yuicompressor-2.4.2.jar #{f}`
  end
  File.open($target+'/'+$name, 'w'){|io| io.write(js.join("\n"))}
  if !$save then rm_rf('tmp') end
end

desc 'strip console logs'
task :strip do
  rm_rf('tmp')
  mkdir_p('tmp')
  Dir[$path+'/**/*.js'].each do |f|
    next if File.directory?(f) 
    source = File.open(f, 'rb').read
    file = File.basename(f)
    puts file
    stripped = source.gsub(/console\.(time|log|error|warn|info|assert|group|groupEnd|timeEnd|profile|trace|profileEnd|dir)(.*?)[\;\n]/, '')
    File.open('tmp/'+file, 'w'){|io| io.write(stripped)}  
  end
end

desc 'javascript lint'
task :lint do
  puts '################################################'
  puts 'JSLINT'
  puts '################################################'
  if !File.exist?('lib/jsl.conf') then
    source = File.open('lib/jsl.default.conf', 'rb').read
    source += '+process '+$path+'/*.js'
    File.open('lib/jsl.conf', 'w'){|io| io.write(source)}
  end
  sh('lib/jsl --conf lib/jsl.conf +recurse')
end

desc 'Create a zip'
task :zip => :pack do
  puts '################################################'
  puts 'ZIP'
  puts '################################################'
  sh("zip -r  "+$path)
end

desc 'Create a rar'
task :rar => :pack do
  sh("rar a -m5 -R ../jsUtils.rar "+$path)
end

desc "clean up"
task :clean do
  rm_rf($target)
  rm_rf('tmp')
  rm_rf('lib/jsl.conf')
end
