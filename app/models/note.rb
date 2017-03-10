class Note < ActiveRecord::Base
  # belongs_to :prospect
  has_and_belongs_to_many :prospects

  # def prospects
  #   Prospect.where('id IN (?)', prospect_ids)
  # end
end