# Admirable

This is a demo app made to accompany a talk on server-side rendering with React.js.
If you explore the tags in the repo, you'll find a tag for the front-end-only version
of this app, and a tag for the universal version.

Don't mind the `bin` folder or circle.yml. Those are just there to help me deploy
the demo site to my server.

This fictitious app is imaginarily for photographers to showcase a select few of their
best photos.

Such an app would need to make good use of OpenGraph tags in order to
show pretty captions and pretty images when shared on social media sites. These
social media sites generally don't run javascript when crawling a shared link
for sample content. Without some kind of static content to feed to the crawler,
the shared link would be generic and useless.

React server-side rendering to the rescue!

The universal version of this app is social-media friendly. It will deliver
nice blurbs and thumbnails when a link to one of its images is shared on a social
service.

(Facebook works. Twitter doesn't because it requires linked domains to be whitelisted.
Those are the only two I've tested)

License: MIT!

Also included is the outline for the talk.

# Talk

## Quick overview of reasons for universal (isomorphic) rendering:

  - Eliminate the FOUS (flash of un-styled content)
  - Faster perceived loading time for users (especially on slow connections)
  - SEO
  - Social Media <------------- (this is what we're talking about today)

## Reasons not to do universal rendering

  That's not what this talk is about.

## Admirable - A front-end only app

  - Browse about on Admirable
  - Try to share a link on Facebook (Oh no!)
  - Query the HTML with cURL or Postman
  - Rewrite app in the following steps:
    - Showcase Helmet
    - Render React to a string and sub it in the template
    - React Router:
      - Use the History location instead of the hash location on the client
      - Add routes on the server that lead to the universal rendering function so that the current path can be passed to React Router
    - Use Helmet on the server
  - Use Facebook's debugger to show off our changes (ngrok)
  - Share a link on Facebook
  - Excite!

## Gotchas

  - Use <Link> instead of <a> with HistoryLocation and react-router to keep the whole page from re-rendering.

## Things we didn't talk about

  - Interactivity and data / event management
