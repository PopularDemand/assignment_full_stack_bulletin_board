Post.destroy_all
Comment.destroy_all

POST_TIMES = 10
COMMENT_TIMES = 3

POST_TIMES.times do
  post = Post.create(
          title: Faker::Company.buzzword,
          author: Faker::Name.name,
          text: Faker::Hipster.paragraph
  )
  post.created_at = Faker::Time.backward(31)
  post.save
end
Post.all.each do |post|
  COMMENT_TIMES.times do
    post.comments.create(
    author: Faker::Name.name,
    body: Faker::Hacker.say_something_smart,
    votes: Faker::Number.between(-5, 5)
    )
  end
end
