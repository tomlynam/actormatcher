Rails.application.routes.draw do
  root 'home#index'

  # KEEP THIS AT THE VERY BOTTOM
  get '*unmatched_route', to: 'home#index'

end
