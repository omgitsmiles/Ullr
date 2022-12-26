class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_processable

  private

  def authorize 
    render json: { errors: ["Must be logged in!"] }, status: 401 unless session[:user_id]
  end

  def render_not_processable(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
  end

end
