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

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: 200
        else
            render json: { error: "Invalid Username or Password" }, status: 401
        end
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
