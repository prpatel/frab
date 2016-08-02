json.events @events do |event|

json.id event.id
json.title event.title
json.abstract event.abstract
json.persons event.speakers, :id, :full_public_name, :abstract,  :avatar_path, :twitter_name, :tshirt_size, :email
end
