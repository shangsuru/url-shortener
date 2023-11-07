class RemoveReferenceAndAddDescriptionToClicks < ActiveRecord::Migration[6.0]
  def change
    # Remove the reference to the Url model
    remove_reference :clicks, :url, foreign_key: true

    # Add a new field called 'description' with the data type you want (e.g., :string)
    add_column :clicks, :short_url, :string
  end
end
