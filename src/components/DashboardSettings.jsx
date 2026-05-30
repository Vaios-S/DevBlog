export default function DashboardSettings() {
  return (
    <div>
      <h2>Settings</h2>

      <form>
        <label>
          Theme:
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Enable Notifications
        </label>
      </form>
    </div>
  );
}
