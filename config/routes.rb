Rails.application.routes.draw do
  
  resources :matches
  resources :messages
  resources :posts
  resources :groups
  resources :activities, except: [:show, :update, :destroy]
  resources :gears

  patch '/user/activities/:id', to: 'activities#update'
  
  delete '/user/activities/:id', to: 'activities#destroy'

  patch '/upvotes/:id', to: 'activities#upvotes'

  patch 'upvotes/:id', to: 'posts#upvotes'

  post '/login', to: 'sessions#create'
  
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'

  get '/me', to: 'users#show'

  patch '/user/update', to: 'users#update'

  get '/users', to: 'users#index'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
