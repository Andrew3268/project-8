class AddUserIdToGadget < ActiveRecord::Migration[5.1]
  def change
    add_column :gadgets, :user_id, :integer
  end
end
