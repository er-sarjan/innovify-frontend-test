(function() {
	class BlogController {

		/* @ngInject */
		constructor(itemsService) {
			const vm = this;
			vm.emptyBlog = {
				title: '',
				details: ''
			};

			vm.newBlogId = 4;

			vm.blogItems = [{
				_id: 1,
				title: 'JavaScript',
				details: 'Learn about JavaScript'
			}, {
				_id: 2,
				title: 'CSS3',
				details: 'Learn about CSS3'
			}, {
				_id: 3,
				title: 'HTML5',
				details: 'Learn about HTML5'
			}];

			itemsService.getItems().then(result => this.items = result);

			vm.blogValidations = {
				title: {
					required: true,
					minlength: 5,
					maxlength: 1000
				},
				details: {
					required: true,
					minlength: 10,
					maxlength: 5000
				}
			};
			vm.blog = angular.copy(vm.emptyBlog);

			vm.saveBlog = BlogController.saveBlog;
		}

		static saveBlog(form) {
			// Validate form
			if (form.$invalid) {
				console.log('form is invalid');
				return false;
			}

			// Save blog and reset it
			this.blog._id = this.newBlogId;
			this.blogItems.push(this.blog);
			this.newBlogId += 1;
			this.blog = angular.copy(this.emptyBlog);
			form.$setPristine();
			form.$setUntouched();
		}

	}

	register('app').controller('BlogController', BlogController);
})();
