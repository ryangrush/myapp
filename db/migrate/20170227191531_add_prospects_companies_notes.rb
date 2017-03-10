class AddProspectsCompaniesNotes < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :url
      t.text :address
      t.string :phone_number
    end

    create_table :prospects do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.references :company
    end

    create_table :notes do |t|
      t.text :note
      t.text :description
      t.integer :prospect_ids, array: true
    end
  end
end
