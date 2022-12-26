class MessagesController < ApplicationController
    before_action :authorize

    def index
        messages = Message.all
        render json: messages, status: 200
    end

    def create
        message = find_user.messages.create!(message_params)
        render json: message, status: 201
    end

    private
    
    def find_user
        User.find_by(id: session[:user_id])
    end

    def message_params
        params.permit(:message, :user_id, :friend_id)
    end

end
