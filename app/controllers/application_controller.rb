class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_processable

  private

  def authorize 
    render json: { errors: ["Must be logged in!"] }, status: 401 unless session[:user_id]
  end

end
