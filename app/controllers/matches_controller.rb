class MatchesController < ApplicationController
    before_action :authorize

    def index
        matches = find_user.matches.all
        render json: matches, status: 200
    end

    def create
        match = find_user.matches.create(match_params)
        render json: match, status: 201
    end

    private

    def match_params
        params.permit(:user_id, :friend_id)
    end

    def find_user
        user = User.find(session[:user_id])
    end

end
