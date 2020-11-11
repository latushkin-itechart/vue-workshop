import ErrorPage from "./ErrorPage";
import Loader from "./Loader";

export default () => ({
  component: import('./AboutUs'),
  error: ErrorPage,
  loading: Loader,
  timeout: 1000,
})