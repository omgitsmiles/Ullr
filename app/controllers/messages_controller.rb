class MessagesController < ApplicationController
    before_action :authorize

    def index
        messages = Message.all
        render json: messages, status: 200
    end

end
