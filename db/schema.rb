# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190219150559) do

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "gadgets", force: :cascade do |t|
    t.string "gad_title"
    t.text "gad_intro"
    t.string "gad_price"
    t.string "gad_link"
    t.string "gad_img"
    t.string "gad_youtube"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "category_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.string "brand"
    t.text "description"
    t.string "price"
    t.string "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recommends", force: :cascade do |t|
    t.integer "user_id"
    t.string "re_filter"
    t.string "re_title"
    t.string "re_intro"
    t.text "sub_intro"
    t.string "re_image"
    t.string "sub_number_01"
    t.string "sub_image_01"
    t.string "sub_title_01"
    t.text "sub_intro_01"
    t.string "sub_source_01"
    t.string "sub_price_01"
    t.string "sub_link_01"
    t.string "sub_youtube_01"
    t.string "sub_number_02"
    t.string "sub_image_02"
    t.string "sub_title_02"
    t.text "sub_intro_02"
    t.string "sub_source_02"
    t.string "sub_price_02"
    t.string "sub_link_02"
    t.string "sub_youtube_02"
    t.string "sub_number_03"
    t.string "sub_image_03"
    t.string "sub_title_03"
    t.text "sub_intro_03"
    t.string "sub_source_03"
    t.string "sub_price_03"
    t.string "sub_link_03"
    t.string "sub_youtube_03"
    t.string "sub_number_04"
    t.string "sub_image_04"
    t.string "sub_title_04"
    t.text "sub_intro_04"
    t.string "sub_source_04"
    t.string "sub_price_04"
    t.string "sub_link_04"
    t.string "sub_youtube_04"
    t.string "sub_number_05"
    t.string "sub_image_05"
    t.string "sub_title_05"
    t.text "sub_intro_05"
    t.string "sub_source_05"
    t.string "sub_price_05"
    t.string "sub_link_05"
    t.string "sub_youtube_05"
    t.string "sub_number_06"
    t.string "sub_image_06"
    t.string "sub_title_06"
    t.text "sub_intro_06"
    t.string "sub_source_06"
    t.string "sub_price_06"
    t.string "sub_link_06"
    t.string "sub_youtube_06"
    t.string "sub_number_07"
    t.string "sub_image_07"
    t.string "sub_title_07"
    t.text "sub_intro_07"
    t.string "sub_source_07"
    t.string "sub_price_07"
    t.string "sub_link_07"
    t.string "sub_youtube_07"
    t.string "sub_number_08"
    t.string "sub_image_08"
    t.string "sub_title_08"
    t.text "sub_intro_08"
    t.string "sub_source_08"
    t.string "sub_price_08"
    t.string "sub_link_08"
    t.string "sub_youtube_08"
    t.string "sub_number_09"
    t.string "sub_image_09"
    t.string "sub_title_09"
    t.text "sub_intro_09"
    t.string "sub_source_09"
    t.string "sub_price_09"
    t.string "sub_link_09"
    t.string "sub_youtube_09"
    t.string "sub_number_10"
    t.string "sub_image_10"
    t.string "sub_title_10"
    t.text "sub_intro_10"
    t.string "sub_source_10"
    t.string "sub_price_10"
    t.string "sub_link_10"
    t.string "sub_youtube_10"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.integer "resource_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["name"], name: "index_roles_on_name"
    t.index ["resource_type", "resource_id"], name: "index_roles_on_resource_type_and_resource_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
    t.index ["role_id"], name: "index_users_roles_on_role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
    t.index ["user_id"], name: "index_users_roles_on_user_id"
  end

end
