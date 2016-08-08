Rails.application.routes.draw do
  root 'home#index'

  get "movie_ids", to: "movie#index"

  # KEEP THIS AT THE VERY BOTTOM
  get '*unmatched_route', to: 'home#index'

end
