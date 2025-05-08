import React from 'react'

function fetchApi() {
    useEffect(() => {
        async function getJobs() {
          const data = await fetchApi(); // fetch jobs
          setJobs(data);
        }
        getJobs();
      }, []);
  return (
    <div>fetchApi</div>
  )
}

export default fetchApi