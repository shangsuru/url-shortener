class RemoveTimeOfDayFromClicks < ActiveRecord::Migration[7.1]
  def change
    remove_column :clicks, :time_of_day
  end
end
