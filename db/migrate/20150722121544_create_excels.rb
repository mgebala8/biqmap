class CreateExcels < ActiveRecord::Migration
  def change
    create_table :excels do |t|
      t.string :hash_name
      t.string :source
      t.references :user

      t.timestamps null: false
    end
  end
end
