module ApplicationHelper
    def find_name
        user = User.joins("INNER JOIN friends ON users.id = friends.user_id")
        user.each do |usr|
            if usr.id == current_user.id
                return usr.name
            end
        end
   end
end
