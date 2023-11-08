class ClicksController < ApplicationController
  # GET /stats/:url
  def get_stats_for_url
    clicks = Click.where(short_url: params[:url])

    time_buckets = clicks.group_by { |click| click.created_at.hour }
    time_counts = time_buckets.map { |time, clicks| { time: time, count: clicks.count } }

    country_buckets = clicks.group_by { |click| click.country }
    country_counts = country_buckets.map { |country, clicks| { country: country, count: clicks.count } }

    render json: { count: clicks.count, time_counts: time_counts, country_counts: country_counts }
  end
end
