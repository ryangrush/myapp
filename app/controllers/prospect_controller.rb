class ProspectController < ApplicationController

  def index
    @prospects = Prospect.all
  end

  def get_prospects
    render json: Prospect.all
  end

end