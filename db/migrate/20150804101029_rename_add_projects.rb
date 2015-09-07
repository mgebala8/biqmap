class RenameAddProjects < ActiveRecord::Migration
  def change
    rename_column :projects, :json_content, :project_json
    add_reference :projects, :excel, index: true
  end
end
