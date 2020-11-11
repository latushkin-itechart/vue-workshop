import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

export default () => ({
  component: import('./HomePage'),
  loading: Loader,
  error: ErrorPage,
  timeout: 1000,
})