import {useState} from 'react'

function ThemeInput({onSubmit}) {
    const [theme, setTheme] = useState('');
    const[error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!theme.trim() === '') {
            setError('Please enter a theme.');
            return;
        }
        onSubmit(theme);
        setTheme('');
        setError('');
    };

    return <div className="theme-input-container">
        <h2>Generating a Story means... ENTER A THEME!!!!</h2>
        <form onSubmit={handleSubmit} className="theme-form">
            <div className="input-group">
            <input
                type="text"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                placeholder="Enter a theme(e.g., adventure, romance, mystery)"
                className={error ? 'input-error' : ''}
            />
            {error && <p className="error: ">{error}</p>}
            </div>
            <button type="submit" className="generate-btn">Generate Story</button>
        </form>
    </div>
}

export default ThemeInput;