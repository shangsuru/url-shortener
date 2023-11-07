class CreateClicks < ActiveRecord::Migration[7.1]
  def change
    create_table :clicks do |t|
      t.references :url, null: false, foreign_key: true
      t.string :country
      t.string :timeOfDay

      t.timestamps
    end
  end
end
