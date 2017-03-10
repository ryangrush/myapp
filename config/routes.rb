Rails.application.routes.draw do
  root to: 'visitors#index'

  resources :company
  resources :prospect do 
    collection do
      get :get_prospects
    end
  end
  
  resources :note

end
