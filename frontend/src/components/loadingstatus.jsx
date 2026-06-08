function loadingStatus(theme) {
    return 
        <div className="loading-container" style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <h2>Generating your {theme}Story...</h2>
            <div className="loading-animation">
                <div className="spinner"></div>
            </div>
            <p>Please wait while we create a unique story for you.</p>
        </div>
}
export default loadingStatus;