Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Auth0 routes for authentication
  get '/auth/auth0/callback' => 'auth0#callback'
  get '/auth/failure'        => 'auth0#failure'
end
