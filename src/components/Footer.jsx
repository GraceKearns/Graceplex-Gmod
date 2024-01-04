const Footer = ({ mode }) => {
    return (
        <div>
            {mode === "human" ? (
                <div className="footer">
                    <p>Website Created By Grace Kearns</p>
                </div>
            ) : (
                <div className="footerA">
                    <p>Website Created By Grace Kearns</p>
                </div>
            )}
        </div>
    )

}
export default Footer