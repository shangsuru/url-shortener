class ClicksController < ApplicationController
  # GET /stats/:url
  def get_stats_for_url
    clicks = Click.where(short_url: params[:url])
    total_clicks = clicks.count

    time_buckets = clicks.group_by { |click| click.created_at.hour }
    time_counts = time_buckets.map { |time, clicks| { time: time, count: clicks.count } }

    country_buckets = clicks.group_by { |click| click.country }
    country_counts = country_buckets.map { |country, clicks| { country: country, value: ((clicks.count.to_f/ total_clicks) * 100).truncate() } }

    render json: { count: total_clicks, time_counts: time_counts, country_counts: country_counts }
  end
end
