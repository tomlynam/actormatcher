class MovieController < ApplicationController
	before_action :api_key

	def index
		cast1 = []
		cast2 = []
		movie1 = Tmdb::Movie.find(params[:movie1]).first.id
		movie2 = Tmdb::Movie.find(params[:movie2]).first.id
		Tmdb::Movie.casts(movie1).each do |x|
			cast1 << x["name"]
		end
		Tmdb::Movie.casts(movie2).each do |x|
			cast2 << x["name"]
		end

		all_actors = cast1.push(cast2).flatten
		common_actors = all_actors.find_all { |e| all_actors.count(e) > 1 }.uniq

		render json: common_actors
	end

	private

	def api_key
		Tmdb::Api.key(ENV['MOVIEDB_API_KEY'])
	end

end
