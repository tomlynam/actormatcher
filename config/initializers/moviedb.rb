if Rails.env.development?
    YAML.load(File.read('config/moviedb.yml')).each do |key, value|
        ENV[key] = value
    end
end