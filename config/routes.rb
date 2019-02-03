Rails.application.routes.draw do

  get 'gadgets/index'

  get 'editor/index'
  get 'editor/editor_01'

  get 'gift_guide/index'
  get 'gift_guide/gift_guide_01'

  get 'featured/index'
  get 'featured/featured_01'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts
  root 'posts#index'
  
end
