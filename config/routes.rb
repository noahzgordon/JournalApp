Rails.application.routes.draw do
  resources :posts, except: [:new, :edit]

  root to: "root#root"
end
