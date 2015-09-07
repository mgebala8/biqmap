class RenameMaps < ActiveRecord::Migration
  def change
    rename_column :maps, :content, :map_json
  end
end
