require 'net/http'

class JsonWebToken

  def self.verify(token)
    JWT.decode(token, nil,
               true, # Verify the signature of this token
               algorithm: 'RS256',
               iss: ENV["AUTH0_DOMAIN"],
               verify_iss: true,
               aud: ENV["AUTH0_API_AUDIENCE"],
               verify_aud: true) do |header|
      jwks_hash[header['kid']]
    end
  end

  def self.jwks_hash
    url = "#{ENV["AUTH0_DOMAIN"]}.well-known/jwks.json"
    Rails.logger.info "================ URL for jwks.json => #{url} ================"
    jwks_raw = Net::HTTP.get URI(url)
    jwks_keys = Array(JSON.parse(jwks_raw)['keys'])
    Hash[
      jwks_keys
      .map do |k|
        [
          k['kid'],
          OpenSSL::X509::Certificate.new(
            Base64.decode64(k['x5c'].first)
          ).public_key
        ]
      end
    ]
  end
end