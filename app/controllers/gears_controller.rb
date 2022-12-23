class GearsController < ApplicationController
    before_action :authorize

    def index
        gears = find_user.gears.all
        render json: gears, status: 200
    end
    
    # def show
    #      gear = Gear.find(params[:id])
    #      render json: gear, status: 200
    #  end

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
        User.find_by(id: session[:user_id])
    end

    def gears_params
        params.permit(:shoes, :bike, :picture)
    end

end
