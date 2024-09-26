export class UserNotFoundError extends Error {
    constructor(message = 'User not found') {
      super(message);
      this.name = 'UserNotFoundError';
    }
  }

  export class PostsLoadingError extends Error {
    constructor(message = 'Error loading posts') {
      super(message);
      this.name = 'PostsLoadingError';
    }
  }
  
   export class UsersLoadingError extends Error {
    constructor(message = 'Error loading users') {
      super(message);
      this.name = 'UsersLoadingError';
    }
  }
  
  export class GenericError extends Error {
    constructor(message = 'An error occurred') {
      super(message);
      this.name = 'GenericError';
    }
  }
  