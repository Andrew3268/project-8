class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|

        t.string :title
        t.string :image
        t.string :brand
        t.text :description
        t.string :price
        t.string :link

      t.timestamps
    end
  end
end
