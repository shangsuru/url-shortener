class Url < ApplicationRecord
  validates :long, format: { with: URI::regexp }
end
