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

    - topic display page
      - topic header
      - story index
        - story box (multiple)
          - author detail
      - side bar
          - topic box (2)
            - topic button (multiple)

if not logged in:

    - welcome pic
    - story index
      - story box (multiple)
        - author detail


Author Display Container:
- author display page
  - author header  
  - story index
    - story box (multiple)
      - author detail


Story Display Container:
- story display page
  - author detail
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
