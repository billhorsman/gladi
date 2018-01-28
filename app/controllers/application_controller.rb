class ApplicationController < ActionController::Base
  before_action :seo

private

  def seo
    @og = {
      description: "The Gladi-Gladi Trust is a charity registered in the UK",
      title: "Gladi-Gladi Trust"
    }
  end
end
