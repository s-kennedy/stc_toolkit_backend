class Auth0Controller < ApplicationController
  # This stores all the user information that came from Auth0
  # and the IdP
  def callback
    session[:userinfo] = request.env['omniauth.auth']

    # Redirect to the URL you want after successful auth
    redirect_to root
  end

  # This handles authentication failures
  def failure
    @error_type = request.params['error_type']
    @error_msg = request.params['error_msg']

    render json: { error: "Failed to authenticate: #{@error_type} - #{@error_msg}" }
  end
end