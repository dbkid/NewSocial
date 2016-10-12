Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :stories, only: [:create, :destroy, :show, :update, :index] do
      resources :responses, only: [:create, :destroy, :update]
      resources :likes, only: [:create, :destroy]
      resources :bookmarks, only: [:create, :destroy]
    end
  end

  root "static_pages#root"

end
