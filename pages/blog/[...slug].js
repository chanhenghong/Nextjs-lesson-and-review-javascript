import React from "react";
import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();
  // console.log object arry of useRouter()
  console.log("router=====", router);

  // console.log query of useRouter()
  console.log("query ====", router.query);

  console.log("pathname====", router.pathname);
  return (
    <div>
      <h3>BlogPostsPage</h3>
	  <h3>Chanheng Hong</h3>
    </div>
  );
};

export default BlogPostsPage;
