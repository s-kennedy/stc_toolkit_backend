class PagesController < ApplicationController
  before_action :authenticate_user, only: [:update, :create, :destroy]

  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
