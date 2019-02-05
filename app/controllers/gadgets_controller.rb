class GadgetsController < ApplicationController

  before_action :find_gadget, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @gadgets = Gadget.all.order("created_at DESC")
  end

  def show

  end

  def new
    @gadget = current_user.gadgets.build
  end

  def create
    @gadget = current_user.gadgets.build(gadget_params)
    if @gadget.save
      redirect_to @gadget
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @gadget.update(gadget_params)
      redirect_to @gadget
    else
      render 'edit'
    end
  end

  def destroy
    @gadget.destroy
    redirect_to root_path
  end

  private

  def find_gadget
    @gadget = Gadget.find(params[:id])
  end

  def gadget_params
    params.require(:gadget).permit(:gad_title, :gad_intro, :gad_price, :gad_link, :gad_img, :gad_youtube)
  end
  
end
