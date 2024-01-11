import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom';
import RootLayout from './layout';
import { Users } from './components';
import { Error, Home, PostInfo, Posts, UserInfo } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/user/:userId' element={<UserInfo />}/>
      <Route path='/posts' element={<Posts />}/>
      <Route path='/posts/:postId' element={<PostInfo />}/>

      <Route path='*' element={<Error />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
