class RenameExcels1 < ActiveRecord::Migration
  def change
    rename_column :excels, :source, :name
  end
end
