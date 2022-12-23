import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PageNotFound = () => {
    const routes = useRouter()
  return (
    <div>
      <h1>PageNotFound</h1>
      <Link href="/">Back to Home</Link>
      <span style={{marginLeft: "10px", cursor:"pointer", color:"blue"}} onClick={() => routes.push("/blog")}>Back to Blog page</span>
    </div>
  );
};

export default PageNotFound;
