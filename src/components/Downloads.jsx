
import steam from '../img/Steam.png'
const Downloads = ({mode}) => {
    return (
        <div>
        {mode==="human" ? (
        <div id="DownloadSection">
            <div class="PageBlock">
                <h2>Collection Download</h2>
                <p> The steam workshop collection can be accessed below:</p>
                <div className='DownloadContainer'>
                    <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3125663134&savesuccess=1">
                    <img src={steam} alt="download here" />
                    </a>
                </div>
            </div>
        </div>
        ) : (
            <div id="DownloadSectionA">
            <div class="PageBlock">
                <h2>Collection Download</h2>
                <p> The steam workshop collection can be accessed below:</p>
                <div className='DownloadContainer'>
                    <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3125663134&savesuccess=1">
                    <img src={steam} alt="download here" />
                    </a>
                </div>
            </div>
        </div>
        )}
        </div>
    )

}
export default Downloads;