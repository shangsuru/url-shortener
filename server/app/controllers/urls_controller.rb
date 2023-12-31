class UrlsController < ApplicationController

  # POST /shorten
  def shorten
    long_url = params[:long]

    # check if long_url already exists
    url = Url.find_by(long: long_url)
    if url
      render json: url.to_json( :only => [:short, :long] ), status: :ok
      return
    end

    # generate short_url
    short_url = shorten_url(long_url)
    url = Url.new(short: short_url, long: long_url, last_read_at: Time.now)
    if url.save
      render json: url.to_json( :only => [:short, :long] ), status: :created
    else
      render json: { error: "Invalid URL" }, status: :unprocessable_entity
    end
  end

  # GET /:short
  def lookup_and_redirect
    short_url = params[:short]
    url = Url.find_by(short: short_url)
    if url
      url.update(last_read_at: Time.now)
      # record click
      country = Geocoder.search(request.remote_ip).first.country
      country ||= "jp" # default value just for testing purposes
      click = Click.new(short_url: short_url, country: country)
      click.save
      redirect_to url.long, status: 302, allow_other_host: true
    else
      render json: "Not Found", status: 404
    end
  end

  private
    def shorten_url(long_url)
      uuid = SecureRandom.uuid.gsub("-", "").hex
      return Base62.encode(uuid)[0..4]
    end
end
