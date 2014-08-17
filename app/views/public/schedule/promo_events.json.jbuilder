json.events @events do |event|

json.id event.id
json.title event.title
json.abstract event.abstract
json.persons event.event_people.includes(:person).all.map(&:person), :id, :full_public_name, :abstract,  :avatar_path, :twitter_name
end
