class ActivitiesController < ApplicationController
    before_action :authorize

    def index
        activities = Activity.all
        render json: activities, status: 200
    end

    def create
        activity = find_user.activities.create!(activities_params)
        render json: activity, status: 201
    end

    def update
        activity = find_user.activities.find(params[:id])
        activity.update!(activities_params)
        render json: activity, status: 202
    end

    def destroy
        activity = find_user.activities.find(params[:id])
        activity.destroy
        head 204
    end

    def upvotes
        activity = Activity.find(params[:id])
        activity.update!(upvote_params)
        render json: activity, status: 202
    end

    private

    def find_user
        User.find_by(id: session[:user_id])
    end

    def activities_params
        params.permit(:sport, :distance, :elapsed_time, :gear_id)
    end

    def upvote_params
        params.permit(:upvotes)
    end

end
