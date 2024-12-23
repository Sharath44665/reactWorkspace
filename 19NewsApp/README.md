## adding routing

docs: https://reactrouter.com/start/library/routing


### check url
- http://localhost:5173/
- http://localhost:5173/about

add this to work on link

``` jsx
import { NavLink, Link } from "react-router";

function Header() {
  return (
    <nav>
      {/* NavLink makes it easy to show active states */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>

      <Link to="/concerts/salt-lake-city">Concerts</Link>
    </nav>
  );
}

```

### how to make network slow?

> by default network -> no throttling

inspect -> network (tab) -> click on throttling -> select slow 4g
