import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useSpotlight from './api/useSpotlight';

import { Notice } from './pages/Notice';
import { DetailNotice } from './pages/DetailNotice/index';
import { Loading } from './components/Loading/index';
import { Layout } from './components/Layout/index';

function App() {
  const { spotLight: spotLightMain, isLoading: isLoadingMain } = useSpotlight('5ff8707c260d815ad317482e');
  const { spotLight: spotLightSuplement, isLoading: isLoadingSuplement } = useSpotlight(
    '5ff8709c0f7cac2aa1647dc0'
  );
  const { spotLight: spotLightVideos, isLoading: isLoadingVideos } = useSpotlight('5ff870baae1c092d7a2f4f67');

  if (isLoadingMain || isLoadingSuplement || isLoadingVideos) {
    return <Loading />;
  }
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notice
              spotLightMain={spotLightMain}
              spotLightSuplement={spotLightSuplement}
              spotLightVideos={spotLightVideos}
            />
          </Route>
          <Route path="/:slug">
            <DetailNotice />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
