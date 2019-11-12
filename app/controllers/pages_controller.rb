class PagesController < ApplicationController
  def home
    @todos = ToDo.all
  end

  def about
  end
end
