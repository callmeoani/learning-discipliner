import ErrorPage from "../error-page";

import GeneralLayout from "../modules/common/layout/general-layout/GeneralLayout";
import GoalsPage from "../modules/common/pages/goals";
import HomePage from "../modules/common/pages/home";
import SummaryPage from "../modules/common/pages/summary";
import TasksPage from "../modules/common/pages/tasks";
import WeaknessesPage from "../modules/common/pages/weaknesses";

type navigationRoutes = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: {
    path: string;
    element: JSX.Element;
  }[];
};

const Navigations: navigationRoutes[] = [
  {
    path: "/",
    element: <GeneralLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/goals",
        element: <GoalsPage />,
      },
      {
        path: "/weaknesses",
        element: <WeaknessesPage />,
      },
      {
        path: "/tasks",
        element: <TasksPage />,
      },
      {
        path: "/summary",
        element: <SummaryPage />,
      },
    ],
  },
];

export default Navigations;
