require "test_helper"

class ClicksControllerTest < ActionDispatch::IntegrationTest
  test "returns stats for short url" do
    short_url = "abcdef"
    japanese_ip = "101.102.128.0"
    hongkong_ip = "101.198.192.0"

    get "/#{short_url}", headers: { "X-Forwarded-For" => japanese_ip}
    get "/#{short_url}", headers: { "X-Forwarded-For" => japanese_ip}
    get "/#{short_url}", headers: { "X-Forwarded-For" => hongkong_ip}

    get "/stats/#{short_url}"
    assert_response 200
    stats = JSON.parse(@response.body)

    assert_equal 3, stats["count"]
    assert_equal 3, stats["time_counts"][0]["count"]
    assert_equal 2, stats["country_counts"].count

    # contains countries Japan and Hong Kong
    countries = stats["country_counts"].map { |c| c["country"] }
    assert countries.include?("HK")
    assert countries.include?("JP")

    # contains counts 2 and 1
    counts = stats["country_counts"].map { |c| c["count"] }
    assert counts.include?(2)
    assert counts.include?(1)

  end
end
