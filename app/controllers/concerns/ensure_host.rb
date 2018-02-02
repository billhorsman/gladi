module EnsureHost
  extend ActiveSupport::Concern

  included do
    before_action :ensure_correct_host
    force_ssl if: -> { !Rails.env.test? && ENV['DISABLE_SSL'].blank? }
  end

  def ensure_correct_host
    return unless APP_HOST
    if APP_HOST != request.host.downcase
      if request.get?
        redirect_to request.protocol + APP_HOST + request.fullpath
      else
        redirect_to request.protocol + APP_HOST
      end
    end
  end
end
