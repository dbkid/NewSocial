COMPONENTS:

App:
- in state of app component, signed in/signed out

Header Container:
- header
    - bottom nav bar (home page only)
    - user drop down

Auth form container:
- sign in / sign up

Main Feed Container:

- main feed

if logged in:

    - topic display page ??
      - topic header
      - story index [get selected partial stories passed as prop from main feed]
        - story box (multiple) [get one story passed as prop from story index]
          - author detail [get author passed as prop from story box]
      - side bar
          - topic box (2)
            - topic button (multiple)

if not logged in:

    - welcome pic
    - story index [get selected partial stories passed as prop from main feed]
      - story box (multiple) [get one story passed as prop from story index]
        - author detail


Author Display Container:
- author display page
  - author header[get author info passed as prop from author display]
  - story index [get selected partial stories passed as prop from author display]
    - story box (multiple) [get one story passed as prop from story index]
      - author detail


Story Display Container:
- story display page [gets selected stories passed as prop from container]
  - header
  - author detail
  - selected story [gets selected story passed as prop from story display page]
  - topic button (multiple)
  - author footer
  - response form
    - author detail
  - response display (multiple)
    - author detail


Story Form Container:
- story form
  - author detail
  - add tags drop down



ROUTES:


“/“  “Header Container”

“/sign-in”  “AuthFormContainer”

“/sign-up” “AuthFormContainer”

“/ “Main Feed Container”

“/:topic” “Main Feed Container”

“/:storyTitle”   “Story Display Container”

“/:username”  “Author Display Container”

“/new-story” “Story Form Container”

“/edit-story” “Story Form Container”
