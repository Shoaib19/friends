Rails.application.routes.draw do
  resources :friends
  get 'about', to:"home#about"
  get 'contact', to:"home#contact"
  root "home#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
