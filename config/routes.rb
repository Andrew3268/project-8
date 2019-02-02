Rails.application.routes.draw do
  get 'gadgets/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts
  root 'posts#index'
end
