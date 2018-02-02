Rails.application.routes.draw do
  root to: 'welcome#index'

  get '/projects', to: redirect('/')
  get '/projects/island-hospital', to: 'projects#island_hospital'
  get '/projects/water-for-children', to: 'projects#water_for_children'

  get '/logo', to: 'welcome#logo' if Rails.env.development?
end
