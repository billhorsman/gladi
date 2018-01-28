class ProjectsController < ApplicationController

  def island_hospital
    @og[:title] = "Building a Hospital on Gladi Island"
    @og[:description] = "The Gladi-Gladi Trust is working with the Island Community to relaunch the Hospital Project."
  end
end
