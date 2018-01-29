class ProjectsController < ApplicationController

  def island_hospital
    @og[:title] = "Building a Hospital on Tasso Island"
    @og[:description] = "The Gladi-Gladi Trust is working with the Island Community to relaunch the Hospital Project."
  end

  def water_for_children
    @og[:title] = "Clean Water for the Children of Tasso Island"
    @og[:description] = "The Gladi-Gladi Trust want to help provide clean water."
  end
end
