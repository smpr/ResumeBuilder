class User < ActiveRecord::Base
  has_one :info
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable,
  :omniauthable
  include DeviseTokenAuth::Concerns::User
end
