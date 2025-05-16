import { useEffect, useState } from 'react';
import { api } from './api';
import { cable } from './cable';
import { Poll, Vote } from './types';
import NewPollPage from './NewPollPage';
import EditPollPage from './EditPollPage';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function PollPage() {
  const { id } = useParams();
  const [poll, setPoll] = useState<Poll | null>(null);

  useEffect(() => {
    api.get<Poll>(`/polls/${id}`).then((res) => setPoll(res.data));
  }, [id]);

  useEffect(() => {
    if (!poll) return;

    const subscription = cable.subscriptions.create(
      { channel: 'PollChannel', poll_id: poll.id },
      {
        received: (data: Vote) => {
          setPoll((prev) => {
            if (!prev) return prev;
            return { ...prev, votes: [...prev.votes, data] };
          });
        },
      }
    );

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [poll?.id]);
  const handleVote = (option: string) => {
    api.post('/votes', {
      vote: { poll_id: poll?.id, option },
    });
  };

  const getCount = (option: string) =>
    poll?.votes.filter((v) => v.option === option).length ?? 0;

  if (!poll) return <p>Loading...</p>;

  const uniqueOptions = Array.from(new Set(poll.votes.map((v) => v.option)));

  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', fontSize: '18px' }}>
          ← Back to Home
        </Link>
        <Link to={`/polls/${poll.id}/edit`} style={{ paddingLeft: '550px', textDecoration: 'none', fontSize: '18px' }}>
           Edit Poll
        </Link>
      </div>
      <h1>{poll.title}</h1>
      <div style={{ marginTop: '20px' }}>
        {uniqueOptions.map((option) => (
          <button key={option} onClick={() => handleVote(option)}>
            {option} ({getCount(option)})
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [polls, setPolls] = useState<Poll[]>([]);

  useEffect(() => {
    api.get('/polls').then((res) => setPolls(res.data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , textAlign: 'center' }}>
              <div style={{ marginTop: '50px' , textAlign: 'center' }}>
                <Link to="/new_poll" style={{fontSize: '18px'}}>
                  Create new poll
                </Link>
              </div>
                <h1 style={{ textAlign: 'center' }}>Choose poll</h1>
              <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Total Votes</th>
                    <th>Go to poll</th>
                  </tr>
                </thead>
                <tbody>
                  {polls.map((poll) => (
                    <tr key={poll.id}>
                      <td>{poll.id}</td>
                      <td>{poll.title}</td>
                      <td>{poll.votes.length}</td> {/* Підрахунок голосів */}
                      <td>
                        <Link to={`/polls/${poll.id}`}>Open</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        />
        <Route path="/polls/:id" element={<PollPage />} />
        <Route path='/new_poll' element={<NewPollPage />} />
        <Route path="/polls/:id/edit" element={<EditPollPage />} />
      </Routes>
    </Router>
  );
}

export default App;
