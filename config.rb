###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
helpers do
  # Generate the markup for a responsive social network link.
  #
  # network_name    - The String name of the social network, e.g. "Facebook".
  # network_setting - The String variable set in this config file for the network,
  #                   e.g. facebook_profile_name.
  # url             - The String URL for the link.
  #
  # Returns the String markup.
  def social_network_link(network_name, url)
    # if network_setting
      <<-MARKUP
        <li>
          <a href='#{url}'>
            <span class='hide-for-small'><i class='fa fa-#{network_name.downcase.gsub(' ', '-')}'></i>
            </span>
          </a>
        </li>
      MARKUP
    # end <span class='show-for-small'>#{network_name}</span>
  end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

ignore '*.markdown'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
