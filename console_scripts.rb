 @conference = Conference.last
@events = @conference.events.accepted.count
@events = @conference.events.accepted.find_all_by_track_id(5).count
@events = @conference.events.find_all_by_track_id(5).count

# Count all accepted talks by track
def print_info
@conference = Conference.last
@tracks = @conference.tracks
s = ""
@tracks.each do |t|
    s << "Track: #{t.name}, accepted: #{@conference.events.accepted.find_all_by_track_id(t.id).count} \n"
end
puts s
end

# find people who switched the cover_travel flag

Version.where(conference_id: @conference.id).search().order("created_at DESC")

cover_travel

Version.where(conference_id: @conference.id).where("object_changes like ? ", '%cover_travel:\n- false\n- true%')
Version.where(conference_id: @conference.id).where("object_changes like ? ", '%cover_travel:\\\\n%').order("created_at DESC")


def find_cover_travel_changed
@conference = Conference.last
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
  @conference = Conference.last
  ps = Person.speaking_at(@conference)
  ps.each do |p|
    if p.cover_travel
      if p.phone_numbers.present?
        phone_number = p.phone_numbers[0].phone_number
      end

      str << "#{p.full_name}\t#{p.email}\t#{ phone_number}\n "
    end
  end
  puts str
end
