class AddExtrasToPerson < ActiveRecord::Migration
  def change
    add_column :people, :twitter_name, :string
    add_column :people, :cover_travel, :boolean
    add_column :people, :airport_code, :string
    add_column :people, :tshirt_size, :string
    add_column :people, :linkedin, :string
  end
end
