class UsersController < ApplicationController
    before_action :authorize, only: :update

    def index
        users = User.all
        render json: users, status: 200
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: 201
    end

    def update
        user = User.find_by(id: session[:user_id])
        user.update!(user_params)
        render json: user, status: 201
    end
    
    private

    def user_params
        params.permit(:username, :password, :picture, :location)
    end

end
