// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Define routes that should be protected
// const isProtectedRoute = createRouteMatcher([
//   '/' // Add any additional routes here
// ]);// Update clerkMiddleware to manually protect routes

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) {
//     auth().protect(); // Protect the route if it matches the defined criteria
//   }
// });

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware } from '@clerk/nextjs/server';

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware()

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};