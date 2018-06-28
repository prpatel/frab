# rails console production

 @conference = Conference.last
@events = @conference.events.accepted.count
@events = @conference.events.accepted.find_all_by_track_id(5).count
@events = @conference.events.find_all_by_track_id(5).count

# Count all accepted talks by track
  def track_info
  @conference = Conference.find_by_acronym('jct2018')
  @tracks = @conference.tracks
  s = ""
  total_count = 0
  @tracks.each do |t|
      track_count = @conference.events.accepted.find_all_by_track_id(t.id).count
      s << "Track: #{t.name}, accepted: #{track_count} \n"
      total_count += track_count
  end
  puts s
  puts "total_count #{total_count}"
  end

def change_session_time
    @conference = Conference.find_by_acronym('dn2018')
    # Event.column_names
    all_sessions = @conference.events.accepted.each do |s|
      puts "#{s.time_slots}, #{s.title} "
      # if (s.time_slots < 32)
      #   s.time_slots = 4
      #   s.save
      # end
    end
end


def print_session_by_track
@conference = Conference.find_by_acronym('vueus2018')
@tracks = @conference.tracks
s = ""
total_count = 0
@tracks.each do |t|
    track_count = @conference.events.accepted.find_all_by_track_id(t.id)
    track_count.each do |session|
      if (session.speakers[0])
        speaker_name = session.speakers[0].public_name
      else
        speaker_name = ""
      end
      # s << "#{t.name}, #{speaker_name}, #{session.title}\n"
      # s << "#{session.title}\n"
      s << "#{speaker_name}, #{session.title}\n"
    end
end
puts s
end

# find people who switched the cover_travel flag

Version.where(conference_id: @conference.id).search().order("created_at DESC")

cover_travel

Version.where(conference_id: @conference.id).where("object_changes like ? ", '%cover_travel:\n- false\n- true%')
Version.where(conference_id: @conference.id).where("object_changes like ? ", '%cover_travel:\\\\n%').order("created_at DESC")


def find_cover_travel_changed
@conference = Conference.find_by_acronym('jct2018')
str = ""
vs = Version.where(conference_id: @conference.id).where("object_changes like ? ", '%cover_travel%').order("created_at DESC")
vs.each do |v|
  if v.object_changes.include?('cover_travel')
    u = User.find_by_id(Integer(v.whodunnit))
    if u
      email = u.email
      person = Person.find_by_user_id(u.id)
      if person

        cover_travel = person.cover_travel
      end
    end
    str << "Cover_travel state: #{v.created_at} #{email} cover_travel state: #{cover_travel} \n "
  end
end
puts str
end

####

def covering_travel
  str = ""
  @conference = Conference.find_by_acronym('jct2018')
  ps = Person.speaking_at(@conference)
  ps.each do |p|
    if p.cover_travel
      if p.phone_numbers.present?
        phone_number = p.phone_numbers[0].phone_number
      end

      str << "#{p.full_name}\t#{p.email}\t#{ phone_number}\t#{ p.airport_code}\n "
    end
  end
  puts str
end

def list_presenters
  str = ""
  @conference = Conference.find_by_acronym('jct2018')
  ps = Person.speaking_at(@conference)
  ps.each do |p|
      str << "#{p.full_name}\t#{p.email}\t#{ p.airport_code}\t#{p.twitter_name}\t#{p.cover_travel}\n "
    end
  puts str
end

tshirt_size

def presenters_badge_info
  str = ""
  @conference = Conference.find_by_acronym('dsct2017')
  ps = Person.speaking_at(@conference)
  ps.each do |p|
      str << "#{p.first_name}\t#{p.last_name}\t#{p.email}\t#{ p.tshirt_size}\t#{p.twitter_name}\t#{p.cover_travel}\n "
    end
  puts str
end

def list_presenters
  str = ""
  @conference = Conference.find_by_acronym('vueus2018')
  ps = Person.speaking_at(@conference)
  ps.each do |p|
      str << "#{p.first_name}\t#{p.last_name}\t#{p.email}\t#{ p.airport_code}\t@#{p.twitter_name}\t#{p.cover_travel}\n "
    end
  puts str
end

# == all people in conference


def list_all_submitters_rejected
  str = ""
  @conference = Conference.find_by_acronym('ct2018')
  ps = Person.involved_in(@conference).where(:"event_people.event_role" => ["speaker", "moderator"]).where('events.state NOT IN (?)',  ["unconfirmed", "confirmed"]).group(:"people.id")
  ps.each do |p|
      any_accepted = false

      p.events.each do |event|
        puts "#{p.public_name}, #{event.title}, #{event.state}, #{event.conference} "
        if ((event.state == 'unconfirmed' || event.state == 'confirmed' ) && event.conference == @conference)
          any_accepted = true
        else

        end
      end
      if (any_accepted == false)
        str << "#{p.first_name}\t#{p.last_name}\t#{p.cover_travel}\t#{p.email}\t#{ p.airport_code}\thttps://cfp.connectevents.io/en/people/#{p.id}?conference_acronym=ct2018\n "
      end
    end
  puts str
end
