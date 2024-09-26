# ![Logo](public/images/logo.png)

# METAVERSAL

This project is built using Next.js and Tailwind CSS, and it fetches data from the provided API to display user posts feed and profiles.

## Requirements

- ✅ Use Next.js and Tailwind CSS
- ✅ Build responsive UIs
- ✅ Handle loading states
- ✅ Handle error states
- ✅ Use https request caching
- ✅ Cache data in storage
- ✅ Commit your code to a GitHub repo (preferably as you build)
- ✅ Deploy your app (for example: Netlify, Vercel)
- ✅ Provide instructions in the repo README for running your application locally

## Bonus objectives

- ✅ Implement server-side rendering
- ✅ Test coverage: minimal
- ❌ Use loading skeletons

## Setup Instructions

1. Clone the repository: `git clone https://github.com/TheMaverink/metaversal-test.git`
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`
4. Open your browser and go to `http://localhost:3000`

## API Notes

The API provides data related to user posts and profiles.

Users: https://dummyjson.com/docs/users
Posts: https://dummyjson.com/docs/posts

## 🚀 Live Demo

The application is deployed on [Netlify].
[Check out the demo here!](https://metaversal-test-git-main-themaverinks-projects.vercel.app/) 👉


## Reflection and Next Steps

Overall, I'm happy with the outcome of this project, but there are a few additional improvements I'd like to work on:

- **Tidy up Tailwind CSS**: I wanted to clean up some of the existing utility classes and extend more custom ones for better reusability.
- **Optimize Roboto Flex usage**: I want to find a workaround to properly edit the 'wdth' axis on the Roboto Flex font.
- **Integrate loading skeletons**: Implementing loading skeletons to improve the user experience during data fetching is something I had planned but couldn't complete in time.
- **Add integration tests**

### Project Time Constraints

Apologies for submitting the project on the last day of the deadline. Unfortunately, this week had poor timing for me, and I wasn't able to fully dedicate myself to the task until the last 2-3 days, with 90% of the work being completed on the final day (as you can see from the commit history).

While I am satisfied with the progress, I’m slightly frustrated that I couldn't find the time to add the loading skeletons as originally intended. That said, I really enjoyed working on the task and loved the UI!

### Clarification on "Cache Data in Storage"

Regarding the "Cache data in storage" requirement, I was unsure if it referred to browser storage (like local storage or session storage) or an internal caching mechanism within Next.js. I decided to assume browser storage and, as a result, implemented local storage caching for the feed page. The `skipCount` and posts are saved in local storage, allowing the app to access this data and avoid redundant API calls after a browser refresh.

---

If you have any further questions or need more details from me please let me know!



