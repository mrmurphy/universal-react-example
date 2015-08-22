# Talk

## Quick overview of reasons for universal (isomorphic) rendering:

  - Eliminate the FOUS
  - Faster perceived loading time for users (especially on slow connections)
  - SEO
  - Social Media <-------------

## Reasons not to do universal rendering

  That's not what this talk is about.

## Admirable - A front-end only app

  - NGrok
  - Browse about on Admirable
  - Try to share a link on Facebook (Oh no!)
  - Use Postman to query HTML
  - Rewrite app in the following steps:
    - Render React to a string and sub it in the template
    - Make it work with React Router
      - Use the History location instead of the hash location on the client
        - If you have animation transitions, use <Link /> instead of <a>
      - Add routes on the server that lead to the universal rendering function so that the current path can be passed to React Router
    - Showcase Helmet, and use it on the server
  - Use facebook's debugger again
  - Share a link on facebook
  - Excite!

## Things we didn't talk about

  - Interactivity and data / event management
    - Redux ?

# TODO

 - [√] Finish basic app functionality
 - [ ] Add transition animations
 - [ ] Strip server rendering and get a good starting state
 - [ ] Write a clear outline of the steps I'll take in the talk
 - [ ] Practice
