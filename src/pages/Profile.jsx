import PhoneFrame from "../components/PhoneFrame";
import BottomNav from "../components/BottomNav";

function Profile() {

    return (
        <PhoneFrame>

            <h1 className="title">Account Settings</h1>
            <div className="page">

                <div className="profile-row">

                    <div className="avatar-container">

                        <img
                            src="https://i.pravatar.cc/150?img=5"
                            className="avatar"
                            alt="profile"
                        />

                        <div className="camera-icon">
                            📷
                        </div>

                    </div>

                    <div className="profile-info">

                        <strong className="profile-name">
                            Marry Doe
                        </strong>

                        <p className="profile-email">
                            marry@example.com
                        </p>

                    </div>

                </div>

                <p className="profile-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam.
                </p>

                <div className="profile-divider"></div>

            </div>

            <BottomNav page={4} />

        </PhoneFrame>
    );
}

export default Profile;