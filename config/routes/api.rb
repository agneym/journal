# frozen_string_literal: true

namespace :api, defaults: { format: :json }  do
  namespace :v1 do
    resources :users, only: [:show]
    resources :merchants, only: [:create]
    resources :qr_codes, only: [:show]

    resources :visits, only: [:create, :index] do
      member do
        put :exit
      end
      collection do
        get :ongoing
      end
    end

    namespace :admin do
      resources :sessions, only: [:create]
      resources :visits, only: [:index]
      resources :users, only: [:index] do
        member do
          get :route_map
        end
      end
    end
  end
end
