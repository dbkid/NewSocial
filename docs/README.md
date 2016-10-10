Heroku Link:
https://newsocial.herokuapp.com/

Minimum Viable Product:
NewSocial will be a clone of medium.com.

1. Sign up, sign in, can view stories while not logged in
2. Production README
3. Hosting on Heroku
4. Main feed:
  - home page displays list of stories
5. Stories:
  - stories can be viewed by anyone even not logged in users
  - each story has own display page
  - logged in users can write and edit their own stories
6. Responses:
  - responses can be viewed by anyone even not logged in users
  - logged in users can write and edit their own responses
  - responses appear on story display page beneath story
7. Authors:
  - signed up users have their own public author page displaying stories they wrote
  - logged in users can edit their own stories from their own author page  

If time:

8. Topics:
  - users can add topics (tags) to their own stories
  - stories are organizable by topic on main feed
  - logged in users can follow/unfollow topics
9. Follows
  - logged in users can follow/unfollow other users
10. Likes
  - logged in users can like / unlike stories
11. Bookmarks
  - logged in users can bookmark / unbookmark stories
  - can see a page with all of their bookmarked stories
12. For you
  - logged in users can select "for you" on home page navigation bar which displays random stories from their followed topics / authors




Implementation Timeline:

Tuesday/Wednesday:
- review plan, set up backend, auth, header (not bottom nav bar), sign in/sign out pages

Thursday/Friday:
- story boxes (display as list on main feed)
- author detail (part of story box)
- story display (no responses)
- author display

Weekend:
- story form
- author own form
- author detail


- toggle pop up
- pop up error
- put x on overlay
- round out profile pics  
- validate uniqueness of email
- make author header shorter (match mine)
- fingerprint images
- add error message for wrong/invalid credentials
- boolean for fetching to author display page to prevent flicker 

- header: if own story, render: edit. else: render write story

Monday/Tuesday:
- responses
- story form
- catch up
- settle on non changing font for NewSocial/decide on logo (homework)

Wednesday/Thursday:
- topics
- topic boxes on main feed
- bottom nav bar on main feed

Friday/Weekend:
- likes
- bookmarks
- follows
