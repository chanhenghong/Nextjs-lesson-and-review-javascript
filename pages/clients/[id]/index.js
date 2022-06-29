import { useRouter } from "next/router";

import React from "react";

const ClinentProjectsPage = () => {
  const router = useRouter();
  console.log("Index folder [id]", router.query);
  const loadProject = () => {
    router.push({
      pathname: "/clients/[id]/[clientid]",
      query: { id: "chanheng", clientid: "projecta" },
    });
  };
  return (
    <div>
      <h3>The projects of a Given Client</h3>
      <button onClick={loadProject}> Load Project A</button>
    </div>
  );
};

export default ClinentProjectsPage;
