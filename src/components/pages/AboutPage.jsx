import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
    return(
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app to leave a feedback for product or service</p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to="/">Back</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage;