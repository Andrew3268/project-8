Rails.application.routes.draw do

  get 'gadgets/index'

  get 'editor/index'
  get 'editor/editor_01'

  get 'gift_guide/index'
  get 'gift_guide/gift_guide_01'

  get 'featured/index'
  get 'featured/featured_01'

  get 'deals/promo_codes'
  get 'deals/coupons'
  get 'deals/quick_search'
  get 'deals/promotions'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts
  # root 'posts#index'

  resources :gadgets
  root 'gadgets#index'
  
end
