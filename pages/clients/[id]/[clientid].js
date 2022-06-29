import { useRouter } from "next/router";
import React from 'react'

const clientid = () => {
	const router = useRouter();
	console.log(router.query)
  return (
	<div><h3>Page for a Specific for a select Client</h3></div>
  )
}

export default clientid