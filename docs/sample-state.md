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
        created_at:
  	  },
      { id:  ,
        author: { id:  , name:    , image url:    },
        title:   ,
        first sentence:    ,
        like count:   ,
        response count:   ,
        bookmarked:
        created_at:
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
