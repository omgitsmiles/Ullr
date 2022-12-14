class GroupsController < ApplicationController
    before_action :authorize

    def create
        group = find_user.create!(group_params)
        render json: group, status: 201
    end
    
    def update
        group = find_user.update!(group_params)
        render json: group, status: 202
    end

    def index
        groups = Group.all
        render json: groups, status: 200
    end

    private

    def find_user
        user = User.find(session[:id])
    end

    def group_params
        params.permit(:name, :description)
    end

end
