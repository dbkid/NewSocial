MODELS:

story model:
- find_by_author(user_id)
- find_by_topic(topic_id)
- find_bookmarked(user_id)
- generate random(number)

topic model:
- exist?(topic_title)
- generate random(number)



CONTROLLERS:

session controller
- create
- destroy

user controller
- create
- destroy
- show

stories controller
- create (only if: logged in)
- destroy (only if: author)
- show
- update (only if: author)
- index [use model methods to sort]

topics controller
- create (only if: logged in)
- index [user model methods to sort]

topic tags controller
- create (only if: logged in and author)
- delete (only if: logged in and author)

topic follows controller
- create (only if: logged in)
- delete (only if: logged in)


bookmarks controller
- create (only if: logged in)
- destroy (only if: logged in)


responses controller [nested under story show]
- create (only if: logged in)
- destroy (only if: author)
- index
- update (only if: author)


likes controller [nested under stories]
- create (only if: logged in)
- destroy (only if: author)


follows controller  
- create (only if: logged in)
- destroy (only if: logged in)
