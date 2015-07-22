class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :json_content
      t.references :map
      t.references :user

      t.timestamps null: false
    end
  end
end
