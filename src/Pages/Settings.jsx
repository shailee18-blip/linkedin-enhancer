import Sidebar from "../components/Sidebar";

function Settings() {
return ( <div className="min-h-screen bg-slate-950 text-white flex">

```
  <Sidebar />

  <div className="flex-1 p-8">

    <h1 className="text-5xl font-bold mb-8">
      Settings
    </h1>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold mb-4">
        Account Preferences
      </h2>

      <p className="text-slate-400">
        More settings coming soon...
      </p>

    </div>

  </div>

</div>

);
}

export default Settings;
