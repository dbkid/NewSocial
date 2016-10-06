DATABASE:

USERS:
ID,
name,
email address,
password digest,
session token,
“has many: stories”,
“has many: bookmarks”,
"has many: bookmarked_stories, through: bookmarks"
“has many: responses”,
“has many: user followers”,
“has many: user follows”,
“has many: topic follows”,
"has many: topics, through: topic follows",
“has many: likes”


STORIES:
ID,
title,
content,
timestamp,
author ID,
“belongs to: author (user)”,
“has many: topic tags”,
"has many: topics, through: topic tags"
“has many: responses”,
“has many: likes”,
“has many: bookmarks”

RESPONSES:
ID,
content,
story ID “belongs to: story”,
user ID “belongs to: user”,
timestamp

TOPICS:
ID,
title, [index, unique: true]
“has many: topic tags”,
“has many: topic follows”
"has many: stories, through: topic tags"

TOPIC TAGS (join table: joins topic to story):
ID,
topic id,
story id,
“belongs to: topic”,
“belongs to: story”

TOPIC FOLLOWS (join table: joins topic to user):
ID
topic id,
user id,
“belongs to: user”,
“belongs to: topic”


LIKES (join table: joins user to story):
ID,
user ID,
story ID,
“belongs to: user”,
“belongs to: story”

FOLLOWS (join table: joins user to user):
ID,
follower (user ID),
followed (user ID)


BOOKMARKS (join table: joins user to story) (treated on front end roughly as topic):
ID,
story ID,
user ID,
“belongs to: user”,
“belongs to: story”
