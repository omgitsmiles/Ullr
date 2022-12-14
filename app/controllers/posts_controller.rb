class PostsController < ApplicationController
    before_action :authorize

    def index
        posts = Post.all
        render json: posts, status: 200
    end

    def create
        post = find_user.posts.create!(post_params)
        render json: post, status: 201
    end

    def update
        post = find_user.posts.update!(post_params)
        render json: post, status: 202
    end

    def destroy
        post = find_user.posts.find(params[:id])
        post.destroy
        head 204
    end

    private

    def find_user
        User.find(session[:id])
    end

    def post_params
        params.permit(:post, :upvotes, :group_id)
    end

end
