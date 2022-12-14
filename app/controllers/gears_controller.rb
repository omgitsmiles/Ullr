class GearsController < ApplicationController
    before_action :authorize

    def create
        gear = Gear.create(gears_params)
        render json: gear, status: 201
    end

   def destroy
        gear = find_user.gears.find(params[:id])
        gear.destroy
        head 204
   end

    private

    def find_user
        User.find(session[:id])
    end

    def gears_params
        params.permit(:shoes, :bikes, :picture)
    end

end
