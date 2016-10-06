STATE:

{
    partial stories: [
      { id:  ,
        author: { id:   , name:    , image url:    },
        title:   ,
        splice:    ,
        like count:   ,
        response count:   ,
        bookmarked:
        timestamp:
  	  },
      { id:  ,
        author: { id:  , name:    , image url:    },
        title:   ,
        first sentence:    ,
        like count:   ,
        response count:   ,
        bookmarked:
        timestamp:
  	  }
    ],

    selected story: {
      id:  ,
      author:  { name:   , image url:  , followed:  },
      title:    ,
      content:   ,
      like count:   ,
      topics:  [ { id:  , title:  }, {id:  , title:  }],
      responses: [  { id:  , title:  , content:  , author:  {id:  , name:  , image url:   } } ],
      liked:
      bookmarked:
      timestamp:
    },


topics: {
    followed topics: [ {id:   , title:  }, {id:  , title:  } ],
    random topics: [  {id:   , title:  }, {id:  , title:  } ],
    main topic: {id:  , title:  , followed:   }

  },


author: {
    name:   ,
    id:   ,
    image url:   ,
    followers:   ,
    follows:    ,
    followed:
  }


session: {
    currentUser:    {
        id:   ,
        name:     
	  },
    errors: []
  }

}
