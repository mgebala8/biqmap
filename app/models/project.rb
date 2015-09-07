class Project < ActiveRecord::Base
  belongs_to :map
  belongs_to :user
  belongs_to :excel 
end
