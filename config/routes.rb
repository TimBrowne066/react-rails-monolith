Rails.application.routes.draw do
  root 'static_pages#index'
  resources :cereals, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :cereals
    end
  end
end
