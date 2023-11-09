import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = async (email) => {
  const result = await axios.get(`http://localhost:4000/users/${email}`);
  return result.data;
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.channelId;

  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });
  return <div>DependentQueries.page</div>;
};
