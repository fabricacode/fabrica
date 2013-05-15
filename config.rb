#Markdown

####set :markdown_engine, :redcarpet

#Livereload
activate :livereload


activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = "master"
  deploy.remote = "build"
end


page "/", :layout => :html5
page "/about.html", :layout => :html5


require 'susy'


set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :fonts_dir, 'fonts'

configure :development do
  activate :google_analytics do |ga|
    ga.tracking_id = false
  end
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css
  
  # Minify Javascript on build
  activate :minify_javascript
  
  # Create favicon/touch icon set from source/favicon_base.png
  activate :favicon_maker
  
  # Enable cache buster
  activate :cache_buster

  activate :minify_html
  
  # Use relative URLs
  # activate :relative_assets

   activate :smusher

   
activate :google_analytics do |ga|
  ga.tracking_id = 'UA-6201025-1'
end
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end
