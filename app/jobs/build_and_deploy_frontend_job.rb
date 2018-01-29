class BuildAndDeployFrontendJob < ApplicationJob
  queue_as :default

  def perform(*args)
    if Rails.env.production?
      Rails.logger.info "========================= Building and deploying frontend for production ==================="
      system "cd ~/stc_toolkit_cms/frontend && yarn deploy"
    end

    if Rails.env.development?
      Rails.logger.info "Restarting gatsby develop locally"
      system "kill $(lsof -t -i:8000) && cd ~/stc_toolkit_cms/frontend && yarn develop &"
    end
  end
end
