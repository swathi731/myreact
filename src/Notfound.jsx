import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 5000);

        return () => clearTimeout(timer); // Cleanup function
    }, [navigate]);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 Page Not Found</h1>
            <img
                src="/error.avif"
                alt="Not Found"
                style={styles.image}
            />
            <p style={styles.redirectText}>
                Redirecting to the home page in 5 seconds...
            </p>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
    },
    heading: {
        fontSize: "2rem",
        marginBottom: "20px",
    },
    image: {
        width: "50%",  // Adjust to desired percentage of screen
        maxWidth: "400px",  // Set maximum width for large screens
        height: "auto",     // Maintain aspect ratio
        display: "block",
        margin: "20px auto", // Center the image
    },
    redirectText: {
        marginTop: "20px",
        fontSize: "1rem",
        color: "#555",
    },
};

export default Notfound;
