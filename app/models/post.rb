class Post < ApplicationRecord
  validates_presence_of :title, :author, :text
  has_many :comments, dependent: :destroy

end
