require 'open3'

class PagesController < ApplicationController
  include Secured

  def index
    pages = Page.all
    render json: pages
  end

  def show
    page = Page.find_by(slug: page_params[:slug])
    render json: page
  end

  def create
  end

  def update
    page = Page.find(params[:id])

    if page.update_attributes(page_params)
      render json: page
    else
      render json: { errors: page.errors.full_messages }
    end
  end

  def destroy
  end

  def deploy
    Rails.logger.info "=================== ATTEMPTING TO DEPLOY FRONTEND ===================="
    stdout_str, error_str, status = Open3.capture3("cd frontend && yarn deploy")
    render json: { status: status }
  end

  def page_params
    load_params = params.require(:page).permit(:id, :slug, :title)
    load_params[:content] = params[:page][:content]
    load_params[:page_header] = params[:page][:page_header]
    load_params.permit!
  end
end
