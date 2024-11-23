import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = ({ captchaValid, handleCaptchaChange }: { captchaValid: boolean, handleCaptchaChange: (value: string | null) => void }) => {
    
    if (captchaValid === false) {
        console.log("Captcha is not valid");
    }
    
    return (
        <div className="recaptcha-container">
            <ReCAPTCHA
                sitekey="6LeWBIgqAAAAAO2BWOuey4TBi2s_Dz-IHfrsBwSM" // Replace with your reCAPTCHA site key
                onChange={handleCaptchaChange}
            />
            {/* {captchaValid === false && (
                <div className="error-message">Please verify that you are not a robot.</div>
            )} */}
        </div>
    );
};

export default RecaptchaComponent;
