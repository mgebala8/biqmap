class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.string :name
      t.text :content
      t.references :user

      t.timestamps null: false
    end
  end
end
