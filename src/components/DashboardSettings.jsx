export default function DashboardSettings() {
  return (
    <div>
      <h2>Settings</h2>

      <form className="space-y-4">
        <label>
          Theme:
          <select className="ml-2 rounded border p-2">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>

        <br />

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Enable Notifications
        </label>
      </form>
    </div>
  );
}
