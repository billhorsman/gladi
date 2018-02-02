# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

APP_HOST = ENV['APP_HOST']
TASSO_ISLAND_URL = ENV['TASSO_ISLAND_URL'] || (Rails.env.development? ? "https://tasso.dev" : "http://www.tassoisland.org")
