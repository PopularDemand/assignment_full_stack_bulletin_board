class Comment < ApplicationRecord
  validates_presence_of :author, :body

  belongs_to :post

end
