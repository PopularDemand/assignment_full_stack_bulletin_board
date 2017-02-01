class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string     :author
      t.text       :body
      t.integer    :votes
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
