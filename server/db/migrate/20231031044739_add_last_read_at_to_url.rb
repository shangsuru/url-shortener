class AddLastReadAtToUrl < ActiveRecord::Migration[7.1]
  def change
    add_column :urls, :last_read_at, :datetime
  end
end
