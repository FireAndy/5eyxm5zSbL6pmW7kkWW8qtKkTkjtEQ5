
var feed = new Instafeed({
		get: 'user',
		userId: '2244702714',
		clientId: 'ab52d07a6b904a9eae42e5be4784d99e',
		accessToken: '2244702714.ab52d07.bb3b41214e1a4c4e9e71b9624515f827',
		sortby: 'random',
        resolution: 'standard_resolution',
        links: 'false',
        limit: '10',
		mock: true,
		  custom: {
			images: [],
			currentImage: 0,
			showImage: function () {
			  var result, image;
			  image = this.options.custom.images[this.options.custom.currentImage];
			  result = this._makeTemplate(this.options.template, {
				model: image,
				id: image.id,
				link: image.link,
				image: image.images[this.options.resolution].url,
				caption: this._getObjectProperty(image, 'caption.text'),
				likes: image.likes.count,
				comments: image.comments.count,
				location: this._getObjectProperty(image, 'location.name')
			  });
			  $("#instafeed").html(result);
			}
		  },
		  success: function (data) {
			this.options.custom.images = data.data; 
			this.options.custom.showImage.call(this);
		  }
	});
	feed.run();
