Rails.application.routes.draw do

  root 'static_pages#index'
  resources :static_pages

  scope :api do
    scope :v1 do
      resources :posts
      resources :comments
    end
  end

end
