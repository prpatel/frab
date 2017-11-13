json.speakers do
  json.speakers @speakers do |person|
    json.id person.id
    json.image person.avatar_path
    json.full_public_name person.full_public_name
    json.abstract person.abstract
    json.description person.description
    json.twitter person.twitter_name
    json.email person.email
    json.events person.accepted_events_as_speaker_in(@conference) do |event|
      json.id event.id
      json.title event.title
      json.abstract event.abstract
      json.type event.event_type
    end
  end
end
