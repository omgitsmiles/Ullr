class SessionsController < ApplicationController
    before_action :authorize, only: :destroy

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 201
        else
            render json: { error: ["Invalid Username or Password"] }, status: 401
        end
    end

    def destroy
        session.delete :user_id
        head 204
    end

end