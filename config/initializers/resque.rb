if Rails.env.production?
  Resque.redis = Redis.new(url: ENV["REDIS_URL"])
else
  Resque.redis = "localhost:6379"
end