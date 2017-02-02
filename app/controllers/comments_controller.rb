class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.json { render json: @comment }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: @comment.errors.full_messages }, status: 422 }
      end
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      respond_to do |format|
        format.json { render json: @comment }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: @comment.errors.full_messages }, status: 422 }
      end
    end
  end

  private

  def comment_params 
    params.require(:comment).permit(:author, :body, :votes, :post_id)
  end
end
