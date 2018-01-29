# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

TASSO_ISLAND_URL = ENV['TASSO_ISLAND_URL'] || "http://www.tassoisland.org"
