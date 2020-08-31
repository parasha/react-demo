import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routesConfig from './config';

type RouteItem = {
  name: string,
  path: string,
  component: React.FunctionComponent,
  routes?: RouteItem[]
};

const routesRender = (routesList: RouteItem[]) => {

  return routesList.map((route: RouteItem) => {
    const { name, path, component, routes = [] } = route;
    const Com = component;
    if (routes) {
      const childrenRoutes = routesRender(routes)
      return <Route path={path} key={name || path} render={() => (
        <Com>
          {childrenRoutes}
        </Com>
      )} />
    } else {
      return <Route exact path={path} component={Com} key={name || path}></Route>
    }
  })
}

function Routes() {
  const routesList = routesRender(routesConfig)
  return (
    <BrowserRouter>
      {routesList}
    </BrowserRouter>
  )
}


export default Routes;