require "test_helper"

class UrlTest < ActiveSupport::TestCase
  # test validations
  test "should not save url if long is not an URI" do
    url = Url.new(long: "not an URI")
    assert_not url.save, "Saved the url with invalid long"
  end

  test "should not save url if short is not unique" do
    url = Url.new(long: "https://www.google.com", short: "a")
    url.save
    url = Url.new(long: "https://www.youtube.com", short: "a")
    assert_raises(ActiveRecord::RecordNotUnique) { url.save }
  end

end
