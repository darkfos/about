class ApiRoutes {
  blogApi = new BlogApiRoutes()
}

class BlogApiRoutes {
  getFindBlogUrl() {
    return '/api/findBlog'
  }
}

export const apiRoutes = new ApiRoutes()
