class ActivitiesController < ApplicationController
    # before_action :authorize

    def index
        activities = Activity.all
        render json: activities, status: 200
    end

    # maybe more appropiate for users controller?
    def show
        activities = find_user.activities.find(params[:id])
        render json: activities, status: 200
    end

    def create
        activity = find_user.create!(activities_params)
        render json: activity, status: 201
    end

    def update
        activity = find_user.update!(activities_params)
        render json: activity, status: 202
    end

    def destroy
        activity = find_user.activities.find(params[:id])
        activity.destroy
        head 204
    end

    private

    def find_user
        User.find(session[:id])
    end

    def activities_params
        params.permit(:sport, :distance, :elapsed_time, :gear_id)
    end

end
