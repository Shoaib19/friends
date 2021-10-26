Rails.application.routes.draw do
  devise_for :users
  resources :friends
  get 'about', to:"home#about"
  get 'contact', to:"home#contact"
  root "home#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
