class User < ActiveRecord::Base
  has_secure_password
  has_many :excel
  has_many :project
  has_many :maps
end
