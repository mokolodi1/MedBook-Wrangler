
Foo = new Meteor.Collection('foo');
Expression2 = new Meteor.Collection('expression2');
Expression_Isoform = new Meteor.Collection('expression_isoform');

Foo.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});


CRFmetadataCollection = new Meteor.Collection('CRFmetadataCollection');

CRFmetadataCollection.allow({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, doc){
    return false;
  },
  remove: function(userId, doc){
    return true;
  }
});

Collections = {}

Signature = new Meteor.Collection('signature');
Signature.allow({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, doc){
    return true;
  },
  remove: function(userId, doc){
    return true;
  }
});


Contrast = new Meteor.Collection('contrast');
Contrast.allow({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, doc){
    return true;
  },
  remove: function(userId, doc){
    return true;
  }
});

