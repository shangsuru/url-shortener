require "test_helper"

class UrlsControllerTest < ActionDispatch::IntegrationTest
  test "does not create url if long is not an URI" do
    post "/shorten", params: { long: "not an URI" }
    assert_response 422
  end

  test "creates url if long is an URI" do
    post "/shorten", params: { long: "https://www.google.com" }
    assert_response 201
  end

  test "redirects to long url if short url exists" do
    post "/shorten", params: { long: "https://www.google.com" }
    assert_response 201
    short_url = JSON.parse(@response.body)["short"]
    get "/#{short_url}"
    assert_response 302
    assert_redirected_to "https://www.google.com"
  end

  test "returns 404 if short url does not exist" do
    get "/notfound"
    assert_response 404
  end

  test "does not create a new url if long url already exists in the database" do 
    post "/shorten", params: { long: "https://www.google.com" }
    assert_response 201
    post "/shorten", params: { long: "https://www.google.com" }
    assert_response 200
  end

  test "updates last_read_at timestamp" do
    short_url = "abcdef"
    # Request once
    get "/#{short_url}"
    url = Url.find_by(short: short_url)
    t1 = url.last_read_at
    assert_not_nil url.last_read_at

    # Request again
    get "/#{short_url}"
    url = Url.find_by(short: short_url)
    t2 = url.last_read_at
    assert_not_nil url.last_read_at
    assert t2 > t1
  end
end
