class PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_to do |format|
      format.json { render json: @posts }
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      respond_to do |format|
        format.json { render json: @post }
      end
    else
      respond_to do |format|
        format.json do 
          render json: { errors: @post.errors.full_messages }, status: 422
        end
      end 
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :author, :text)
  end

end
