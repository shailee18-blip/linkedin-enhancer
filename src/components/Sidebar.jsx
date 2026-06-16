import { Link } from "react-router-dom";

function Sidebar() {
return ( <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

```
  <h1 className="text-2xl font-bold text-blue-500 mb-10">
    LinkedIn Enhancer
  </h1>

  <div className="space-y-4">

    <Link to="/dashboard">
      <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
        Dashboard
      </button>
    </Link>

    <Link to="/history">
      <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
        History
      </button>
    </Link>

    <Link to="/settings">
      <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
        Settings
      </button>
    </Link>

    <Link to="/">
      <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
        Logout
      </button>
    </Link>

  </div>

</div>


);
}

export default Sidebar;
