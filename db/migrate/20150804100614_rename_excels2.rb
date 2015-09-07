class RenameExcels2 < ActiveRecord::Migration
  def change
    rename_column :excels, :hash_name, :excel_json
  end
end
