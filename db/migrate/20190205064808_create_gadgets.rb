class CreateGadgets < ActiveRecord::Migration[5.1]
  def change
    create_table :gadgets do |t|

      t.string :gad_title
      t.text :gad_intro
      t.string :gad_price
      t.string :gad_link
      t.string :gad_img
      t.string :gad_youtube

      t.timestamps
    end
  end
end
