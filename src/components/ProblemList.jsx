import React, { useEffect, useState } from 'react';

function ProblemList() {
  const [problems, setProblems] = useState([]); // state to hold the problem data
  const [loading, setLoading] = useState(true); // state for loading status
  const [error, setError] = useState(null); // state for errors

  // Fetch data on component mount
  useEffect(() => {
    // Assuming the API endpoint is '/api/problems'
    fetch('/problems.json')
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        setProblems(data.problems); // Set problems data to state
        setLoading(false); // Set loading to false
      })
      .catch(err => {
        setError('Error fetching problems');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if any
  }

  return (
    <div>
      <h1>Problems List</h1>
      {problems.length === 0 ? (
        <p>No problems to display</p>
      ) : (
        <ul>
          {problems.map(problem => (
            <li key={problem._id}>
              <h2>"{problem.problemtitle}"</h2>
              <p><strong>Description:</strong> {problem.problemdescription}</p>
              <p><strong>Added By:</strong> {problem.user}</p>
              <p><strong>Urgency:</strong> {problem.UrgentOrSoon}</p>
              <p><strong>Resolved Status:</strong> {problem.IsResolved ? true : false}</p>
              <p><strong>Added on:</strong> {new Date(problem.DateAdded).toLocaleString()}</p>
              <h3>Comments:</h3>
              {problem.ProblemComments.length > 0 ? (
                <ul>
                  {problem.ProblemComments.map(comment => (
                    <li key={comment._id}>
                      <p><strong>{comment.user}:</strong> {comment.content}</p>
                      <p>Added on:<em>{new Date(comment.DateAdded).toLocaleString()}</em></p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments yet</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProblemList;
