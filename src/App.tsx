export default function App() {
  return (
    <div className="app">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-left">
          <span className="time">9:41</span>
          <span className="signal-indicator">▲</span>
        </div>
        <div className="status-right">
          <span className="signal-bars">●●●</span>
          <span className="wifi-icon"></span>
          <span className="battery-icon"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="headline">Please change your phone's settings to find chargers</h1>
        
        <p className="instruction-lead">You need to:</p>

        <div className="permissions-list">
          <div className="permission-item">
            <div className="permission-icon">
              <span className="exclamation-mark">!</span>
            </div>
            <div className="permission-content">
              <div className="permission-label">Location Permissions</div>
              <div className="permission-action">Change to 'Always'</div>
            </div>
          </div>

          <div className="permission-item">
            <div className="permission-icon">
              <span className="exclamation-mark">!</span>
            </div>
            <div className="permission-content">
              <div className="permission-label">Notifications</div>
              <div className="permission-action">Turn on 'Allow Notifications'</div>
            </div>
          </div>
        </div>

        <button className="settings-button">Go to settings</button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon find-icon"></div>
          <span className="nav-text">Find</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon charges-icon"></div>
          <span className="nav-text">Charges</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon support-icon"></div>
          <span className="nav-text">Support</span>
        </div>
      </div>
    </div>
  )
}
