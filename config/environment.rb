# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

TASSO_ISLAND_URL = ENV['TASSO_ISLAND_URL'] || (Rails.env.development? ? "https://tasso.dev" : "http://www.tassoisland.org")
