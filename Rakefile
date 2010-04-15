desc 'Pack all js into one file'
task :pack_all => [:jslint] do
# Removing compiled javascripts
  rm_rf('min')
  mkdir_p('min')
  js = []
  Dir['src/*'].each do |f|
    source = File.open(f, 'rb').read
      puts "#{f}"
      `java -jar lib/yuicompressor-2.4.2.jar #{f}`
      js.push `java -jar lib/yuicompressor-2.4.2.jar #{f}`
  end
  File.open('min/jsUtils.pack.js', 'w'){|io| io.write(js.join("\n"))}
end


desc 'javascript lint'
task :jslint do
  sh 'lib/jsl --conf lib/jsl.default.conf'
end

desc 'Create a zip'
task :zip => :pack_all do
  sh("zip -r ../jsUtils.zip .")
end

desc 'Create a rar'
task :rar => :pack_all do
  sh("rar a -m5 -R ../jsUtils.rar .")
end


