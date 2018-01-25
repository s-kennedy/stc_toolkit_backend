class BuildAndDeployFrontendJob < ApplicationJob
  queue_as :default

  def perform(*args)
    if Rails.env.production?
      p "Building and deploying frontend for production"
      system "cd frontend && yarn deploy"
    end

    if Rails.env.development?
      p "Restarting gatsby develop locally"
      system "kill $(lsof -t -i:8000) && cd frontend && yarn develop &"
    end
  end
end
