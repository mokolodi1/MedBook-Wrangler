UploadedFileStore = new FS.Store.GridFS("uploaded_files", {
  beforeWrite: function (fileObject) {
    // this.userId because we're on the server (doesn't work)
    fileObject.owner = this.userId;
  }
});

UploadedFileStore.on("stored", function (storeName, fileObject) {
  if (storeName !== UploadedFileStore.name) return; // workaround for known bug

  fileObject.createReadStream("uploaded_files")
    .on('data', function (chunk) {
      console.log("chunk: " + chunk);
    });
});

UploadedFiles = new FS.Collection("uploaded_files", {
  stores: [UploadedFileStore],
});

// allow/deny rules for this collection
UploadedFiles.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function(userId, docs, fields, modifier){
      return true;
  },
  remove: function (userId, docs){
      return true;
  },
  download: function (userId, doc) {
    return true;
  }
});
