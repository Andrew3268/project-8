class GadgetsController < ApplicationController

  before_action :find_gadget, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if params[:category].blank?
     @gadgets = Gadget.all.order("created_at DESC").page(params[:page]).per_page(10)
    else
      @category_id = Category.find_by(name: params[:category]).id
      @gadgets = Gadget.where(category_id: @category_id).order("created_at DESC").page(params[:page]).per_page(10)
    end
  end


  def index_02
    if params[:category].blank?
     @gadgets = Gadget.all.order("created_at DESC")
    else
      @category_id = Category.find_by(name: params[:category]).id
      @gadgets = Gadget.where(category_id: @category_id).order("created_at DESC")
    end
  end

  def show
  end

  def new
    @gadget = current_user.gadgets.build
  end

  def create
    @gadget = current_user.gadgets.build(gadget_params)
    if @gadget.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @gadget.update(gadget_params)
      redirect_to root_path
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
    params.require(:gadget).permit(:gad_title, :gad_intro, :gad_price, :gad_link, :gad_img, :gad_youtube, :category_id)
  end
  
end
