class BuildAndDeployFrontendJob < ApplicationJob
  queue_as :default

  def perform(*args)
    Rails.logger.info "========================= Building and deploying frontend for production ==================="
    system "cd frontend && yarn deploy"
  end
end
