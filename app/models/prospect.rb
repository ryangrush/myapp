class Prospect < ActiveRecord::Base
  has_many :notes
  belongs_to :company
end