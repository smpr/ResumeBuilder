class CreateInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :infos do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :linkedIn
      t.integer :phone
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
