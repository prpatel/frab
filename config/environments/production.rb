Frab::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # The production environment is meant for finished, "live" apps.
  # Code is not reloaded between requests
  config.cache_classes = true

  # Full error reports are disabled and caching is turned on
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Disable Rails's static asset server (Apache or nginx will already do this)
  config.serve_static_assets = false

  # Compress JavaScripts and CSS
  config.assets.compress = true

  # Don't fallback to assets pipeline if a precompiled asset is missed
  config.assets.compile = false

  config.assets.precompile += ['admin.css', 'admin.js', 'schedule.js', 'public_schedule.css', 'public_schedule_print.css', 'public_schedule.js', 'moment.min.js']

  # Generate digests for assets URLs
  config.assets.digest = true

  # Specifies the header that your server uses for sending files
  #config.action_dispatch.x_sendfile_header = "X-Sendfile"

  # For nginx:
  config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect'

  # If you have no front-end server that supports something like X-Sendfile,
  # just comment this out and Rails will serve the files

  # See everything in the log (default is :info)
  # config.log_level = :debug

  # Use a different logger for distributed setups
  # config.logger = SyslogLogger.new

  # Use a different cache store in production
  # config.cache_store = :mem_cache_store

  # Disable Rails's static asset server
  # In production, Apache or nginx will already do this
  config.serve_static_assets = false

  # Enable serving of images, stylesheets, and javascripts from an asset server
  # config.action_controller.asset_host = "http://assets.example.com"

  # Disable delivery errors, bad email addresses will be ignored
  # config.action_mailer.raise_delivery_errors = false

  # Enable threaded mode
  # config.threadsafe!

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation can not be found)
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners
  config.active_support.deprecation = :notify

  config.action_mailer.default_url_options = { :host => 'cfp.connectevents.io' }
  # ActionMailer Config
  # Setup for production - deliveries, no errors raised
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = true #FIXME should be false
  config.action_mailer.default :charset => "utf-8"

  # config.action_mailer.smtp_settings = {
  #   :address        => 'smtp.sendgrid.net',
  #   :port           => '587',
  #   :authentication => :plain,
  #   :user_name      => ENV['SENDGRID_USERNAME'],
  #   :password       => ENV['SENDGRID_PASSWORD'],
  #   :domain         => 'heroku.com',
  #   :enable_starttls_auto => true
  # }

# config.action_mailer.smtp_settings = {
#   address: 'smtp.mandrillapp.com',
#   port: "587",
#   domain: "connect-js.com",
#   authentication: "plain",
#   enable_starttls_auto: true,
#   user_name: 'something@gmail.com',
#   password: ""

   # user_name: ENV["GMAIL_SMTP_USER"],
   # password: ENV["GMAIL_SMTP_PASSWORD"]
 #}

 config.action_mailer.smtp_settings = {
   address: 'smtp.mailgun.org',
   port: "587",
   domain: "cfp.connectevents.io",
   authentication: "login",
   enable_starttls_auto: true,
   user_name: 'postmaster@cfp2.connectevents.io',
   password: ENV["MAIL_GUN_PASSWORD"]
   # user_name: ENV["GMAIL_SMTP_USER"],
   # password: ENV["GMAIL_SMTP_PASSWORD"]
 }

end

# Don't show trace pages in production! Requests shall never originate from localhost!
# see: http://helderribeiro.net/?p=357
class ActionDispatch::Request
  def local?
    false
  end
end
