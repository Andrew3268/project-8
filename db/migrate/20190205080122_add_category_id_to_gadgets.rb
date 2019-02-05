class AddCategoryIdToGadgets < ActiveRecord::Migration[5.1]
  def change
    add_column :gadgets, :category_id, :integer
  end
end
